import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // scripts/build-preview.mjs inlines index.html's <script>/<link>
        // tags into one file, but Vite still code-splits lazy-loaded
        // routes and shared runtime helpers into their own chunks loaded
        // via dynamic import() at runtime — invisible to that inliner, so
        // they 404 once the page is a standalone file with no server to
        // resolve relative chunk URLs against. VITE_SINGLE_FILE forces
        // every dynamic import into the one entry chunk instead, so
        // nothing is fetched at runtime. Normal builds (this var unset)
        // keep code-splitting, which is what you want for a real
        // deployment. (This Vite/Rolldown version flags the option
        // deprecated in favour of a top-level `codeSplitting: false`, but
        // that key was a silent no-op when tried here — still chunked the
        // build. Keeping the working option; revisit if this warning
        // becomes an error in a later Vite version.)
        inlineDynamicImports: process.env.VITE_SINGLE_FILE === '1',
      },
    },
  },
})
