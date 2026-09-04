/**
 * Post-build prerendering: visits every real route against the just-built
 * dist/ (served exactly as `vite preview` would serve it in production —
 * same static files, same server behaviour) and writes each route's fully
 * rendered HTML — real title, meta tags, JSON-LD and headings already in
 * place — to disk as that route's own index.html.
 *
 * Why this approach specifically: it changes nothing about how the app
 * renders. src/main.jsx still does a plain `createRoot(...).render(...)`
 * client-side mount, exactly as before — this script never touches that
 * code path. A browser loading a prerendered page paints the real content
 * immediately, then React mounts over it and takes over client-side
 * routing exactly as it always has. A crawler or social-share scraper
 * that doesn't run JavaScript still sees the real page. Nothing about
 * routing, hydration or the SPA behaviour changes; this only changes what
 * exists on disk before either of those run.
 *
 * Runs automatically after `npm run build` (see package.json's
 * "postbuild" script). Deliberately non-fatal: if Playwright or its
 * browser isn't available in a given environment, this logs a warning and
 * exits 0 rather than failing the whole build — prerendering is a
 * progressive enhancement on top of a build that already works without
 * it, not a hard requirement.
 */
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { seoByPath } from '../src/data/seo.js'

const root = process.cwd()
const dist = path.join(root, 'dist')
const port = 4173 + Math.floor(Math.random() * 500) // avoid clashing with a dev preview server

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url)
      if (res.ok) return
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 300))
  }
  throw new Error(`Preview server did not become ready at ${url} within ${timeoutMs}ms`)
}

async function main() {
  if (!fs.existsSync(dist)) {
    console.warn('prerender: dist/ not found — skipping (run after `vite build`).')
    return
  }

  // GitHub Pages-style static-host fallback: unmatched paths get served
  // 404.html by many hosts. Save the original (pre-prerender) SPA shell
  // there before any route's index.html gets overwritten with that
  // route's specific content, so a direct hit on an unknown path still
  // boots the app and correctly shows NotFound.jsx client-side.
  fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))

  let playwright
  try {
    playwright = await import('playwright')
  } catch {
    console.warn('prerender: the "playwright" package is not installed — skipping prerendering. Run `npm install` to enable it.')
    return
  }

  // Spawn Vite's own binary directly rather than through `npx` — npx adds
  // an extra process layer that doesn't reliably die when the parent is
  // killed, which left orphaned preview servers running during
  // development of this script. stdio 'ignore' avoids piped-stream
  // backpressure keeping this process alive after the server is killed.
  const viteBin = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js')
  const server = spawn(process.execPath, [viteBin, 'preview', '--port', String(port), '--strictPort'], {
    cwd: root,
    stdio: 'ignore',
  })
  server.on('error', (err) => console.warn('prerender: could not start preview server:', err.message))

  try {
    // vite preview serves dist/ under whatever `base` the build was
    // configured with (see vite.config.js / VITE_BASE_PATH) — a request
    // for a route without that prefix 404s instead of falling back to
    // the SPA shell (only the bare root "/" gets a redirect to it), so
    // every visited URL below needs the same prefix production hosting
    // will require, e.g. GitHub Pages serving a project site under
    // /<repo>/.
    const basePath = (process.env.VITE_BASE_PATH || '/').replace(/\/$/, '')
    const baseUrl = `http://localhost:${port}${basePath}`
    await waitForServer(`${baseUrl}/`)

    // Optional escape hatch for environments with restricted network access
    // (some CI/sandboxes can't reach playwright.dev to download a browser
    // even after `npx playwright install`): point this at an
    // already-installed Chromium binary and launch that instead of trying
    // to download one. Unset by default — normal environments just need
    // `npx playwright install --with-deps chromium` once, as usual.
    const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || undefined
    const browser = await playwright.chromium.launch({ executablePath })
    const page = await browser.newPage()

    const routes = Object.keys(seoByPath)
    // Rendered HTML is collected here and written to disk only after every
    // route has been visited — not one file at a time inside the loop.
    // dist/index.html is itself what vite preview's SPA fallback serves
    // for any route that isn't its own real file yet (i.e. every route
    // still waiting its turn), so overwriting it mid-loop would corrupt
    // that fallback: the next route visited would load an already
    // fully-rendered page (complete with the previous route's <head> tags
    // and mounted content) instead of the bare pre-render shell, and
    // react-helmet-async has no way to remove <head> tags it didn't itself
    // render, leaving both routes' tags stacked in the output.
    const rendered = []
    let ok = 0
    for (const route of routes) {
      try {
        await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle', timeout: 15000 })
        await page.waitForSelector('h1', { timeout: 5000 })
        let html = await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML)

        // react-helmet-async briefly renders an attribute-less placeholder
        // (`<meta name="description">`, no content) while committing the
        // real, route-specific one — a timing race against main.jsx's
        // removal of the static index.html fallback tag that a longer wait
        // here doesn't reliably settle. It carries no information (no
        // `content` to be duplicate or wrong), so instead of chasing the
        // exact timing, just drop it if it's still there at capture time.
        html = html.replace(/<meta name="description">/g, '')

        const outPath = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.replace(/^\//, ''), 'index.html')
        rendered.push({ outPath, html })
        ok++
      } catch (err) {
        console.warn(`prerender: failed to prerender ${route} — leaving the SPA shell in place for it. (${err.message})`)
      }
    }

    await browser.close()

    for (const { outPath, html } of rendered) {
      fs.mkdirSync(path.dirname(outPath), { recursive: true })
      fs.writeFileSync(outPath, html)
    }

    console.log(`prerender: wrote static HTML for ${ok}/${routes.length} routes.`)
  } catch (err) {
    console.warn('prerender: skipped due to an error — the build still works as a client-rendered SPA. (' + err.message + ')')
  } finally {
    server.kill('SIGKILL')
  }
}

main()
  .catch((err) => {
    console.warn('prerender: unexpected error, continuing without prerendering —', err.message)
  })
  .finally(() => {
    // Force-exit: a killed child process's file descriptors can otherwise
    // keep this script's event loop alive indefinitely instead of letting
    // `npm run build` actually finish.
    process.exit(0)
  })
