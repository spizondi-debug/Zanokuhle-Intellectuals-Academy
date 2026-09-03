import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

// The self-contained preview build has no server to rewrite routes, so it
// uses hash routing. Deployed builds use clean paths — swap in a `basename`
// on BrowserRouter here once real hosting is chosen and the site is served
// from a subpath rather than domain root.
const isHash = import.meta.env.VITE_HASH_ROUTER === '1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      {isHash ? (
        <HashRouter>
          <App />
        </HashRouter>
      ) : (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )}
    </HelmetProvider>
  </StrictMode>,
)
