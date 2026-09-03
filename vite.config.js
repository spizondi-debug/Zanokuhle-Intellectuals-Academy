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

export default defineConfig({
  plugins: [react()],
  build: singleFilePreview
    ? { rollupOptions: { output: { inlineDynamicImports: true } } }
    : {},
})
