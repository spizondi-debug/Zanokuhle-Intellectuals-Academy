/**
 * Build a single self-contained HTML file of the whole site, for sharing a
 * preview that needs no server. JS and CSS are inlined, and every image
 * under public/images/ (photos and WebP variants alike) is rewritten to a
 * data URI, since a server-less page has no origin to fetch /images/*
 * from. Poppins still loads from Google Fonts over the network.
 * VITE_HASH_ROUTER switches routing to hashes and collapses code-splitting
 * into one bundle (see src/main.jsx and vite.config.js) — deployed builds
 * keep clean paths and per-route chunks.
 *
 *   npm run build:preview   ->  preview/zanokuhle-preview.html
 */
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const dist = path.join(root, 'dist')
const outDir = path.join(root, 'preview')
const outFile = path.join(outDir, 'zanokuhle-preview.html')

const mime = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml' }
const dataUri = (file) =>
  `data:${mime[path.extname(file).toLowerCase()] ?? 'application/octet-stream'};base64,` +
  fs.readFileSync(file).toString('base64')

console.log('Building with hash routing…')
execSync('vite build', { stdio: 'inherit', env: { ...process.env, VITE_HASH_ROUTER: '1' } })

let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

html = html.replace(/<link rel="stylesheet"[^>]*href="\/(assets\/[^"]+)"[^>]*>/g, (_, href) =>
  `<style>${fs.readFileSync(path.join(dist, href), 'utf8')}</style>`)
html = html.replace(/<script type="module"[^>]*src="\/(assets\/[^"]+)"[^>]*><\/script>/g, (_, src) =>
  `<script type="module">${fs.readFileSync(path.join(dist, src), 'utf8')}</script>`)

// Every reference to /images/<file> — in the inlined script, or anywhere
// else in the page — becomes a data URI. There's no manifest to walk, so
// this just replaces every occurrence found in the built output.
const imagesDir = path.join(dist, 'images')
if (fs.existsSync(imagesDir)) {
  for (const file of fs.readdirSync(imagesDir)) {
    const full = path.join(imagesDir, file)
    if (!mime[path.extname(file).toLowerCase()]) continue
    html = html.split(`/images/${file}`).join(dataUri(full))
  }
}

const favicon = fs.readFileSync(path.join(dist, 'favicon.svg'), 'utf8')
const faviconUri = `data:image/svg+xml;base64,${Buffer.from(favicon).toString('base64')}`
html = html.replace(/<link rel="icon"[^>]*>/, `<link rel="icon" type="image/svg+xml" href="${faviconUri}" />`)

fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(outFile, html)

const kb = (fs.statSync(outFile).size / 1024).toFixed(0)
console.log(`\n${path.relative(root, outFile)}  —  ${kb} KB`)
