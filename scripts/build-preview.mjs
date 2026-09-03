/**
 * Build a single self-contained HTML file of the whole site, for sharing a
 * preview that needs no server. JS and CSS are inlined; there are no local
 * image assets to worry about (every image slot is an inline SVG
 * PhotoPlaceholder, and Poppins loads from Google Fonts). Routing is
 * HashRouter already (see src/main.jsx), so this works as a plain file.
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

console.log('Building…')
execSync('vite build', { stdio: 'inherit', env: { ...process.env, VITE_SINGLE_FILE: '1' } })

let html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

html = html.replace(/<link rel="stylesheet"[^>]*href="\/(assets\/[^"]+)"[^>]*>/g, (_, href) =>
  `<style>${fs.readFileSync(path.join(dist, href), 'utf8')}</style>`)
html = html.replace(/<script type="module"[^>]*src="\/(assets\/[^"]+)"[^>]*><\/script>/g, (_, src) =>
  `<script type="module">${fs.readFileSync(path.join(dist, src), 'utf8')}</script>`)

const favicon = fs.readFileSync(path.join(dist, 'favicon.svg'), 'utf8')
const faviconUri = `data:image/svg+xml;base64,${Buffer.from(favicon).toString('base64')}`
html = html.replace(/<link rel="icon"[^>]*>/, `<link rel="icon" type="image/svg+xml" href="${faviconUri}" />`)

fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(outFile, html)

const kb = (fs.statSync(outFile).size / 1024).toFixed(0)
console.log(`\n${path.relative(root, outFile)}  —  ${kb} KB`)
