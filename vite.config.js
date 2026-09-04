import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The deployed site is code-split per route: a visitor landing on one page
// should not download every other page's bundle. The single-file preview
// cannot be, because a lazy chunk is a separate file and a page opened with
// no server has no origin to fetch it from — every route except Home came up
// blank the first time this was tried.
//
// So the preview build, and only the preview build, collapses everything
// back into one bundle. Same source, same routes, different packaging. The
// flag is the one already used to switch the router to hashes for the same
// reason (see src/main.jsx).
const singleFilePreview = process.env.VITE_HASH_ROUTER === '1'

// Hosting under a subpath (e.g. https://example.org/academy/ rather than
// the domain root)? Set VITE_BASE_PATH to that subpath (with leading and
// trailing slashes, e.g. "/academy/") when building. Left unset, the site
// deploys at domain root as it does today — src/main.jsx reads the
// resulting import.meta.env.BASE_URL to configure react-router's
// `basename` to match automatically, so this is the only place to change.
// See the comment in main.jsx for what a subpath does and doesn't cover.
const basePath = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base: basePath,
  plugins: [react()],
  build: singleFilePreview
    ? { rollupOptions: { output: { inlineDynamicImports: true } } }
    : {},
})
