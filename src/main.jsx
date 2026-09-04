import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

// The self-contained preview build has no server to rewrite routes, so it
// uses hash routing. Deployed builds use clean paths.
const isHash = import.meta.env.VITE_HASH_ROUTER === '1'

// Vite's BASE_URL reflects the `base` config in vite.config.js (itself
// configurable via VITE_BASE_PATH — see that file), always with a
// trailing slash ("/" at root, "/subpath/" otherwise). react-router wants
// no trailing slash on `basename`, and "/" specifically means "no
// basename" to it.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

// index.html removed <link>/asset base handling is a separate concern:
// public/images/* are referenced as root-absolute strings ("/images/x.jpg")
// throughout the app rather than as Vite-processed imports, deliberately —
// scripts/build-preview.mjs finds and inlines every one of those exact
// literal strings. src/lib/assetPath.js's imagePath() wraps every one of
// them with the BASE_URL prefix used here, so image requests stay correct
// under a subpath (e.g. a GitHub Pages project site) without breaking that
// literal-string search — see the comment in assetPath.js for why.
document.querySelector('meta[name="description"]')?.remove()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      {isHash ? (
        <HashRouter>
          <App />
        </HashRouter>
      ) : (
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      )}
    </HelmetProvider>
  </StrictMode>,
)
