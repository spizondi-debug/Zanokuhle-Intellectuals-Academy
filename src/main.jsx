import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// HashRouter rather than BrowserRouter: no hosting target has been chosen
// yet (GitHub Pages, Netlify, a client's own host all handle path-based
// routing differently, some needing extra config for deep links to work on
// refresh). Hash routing works anywhere with zero server config, including
// as a single static HTML file. Revisit once real hosting is decided —
// swapping back to BrowserRouter is a one-line change here.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
