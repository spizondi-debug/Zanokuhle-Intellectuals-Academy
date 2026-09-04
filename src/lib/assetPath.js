/**
 * Every hardcoded "/images/<file>" reference in this codebase needs to
 * resolve correctly when the site is hosted under a subpath instead of a
 * domain root — for example a GitHub Pages project site served at
 * https://<user>.github.io/<repo>/. Vite's `base` config (set via
 * VITE_BASE_PATH — see vite.config.js) already makes JS/CSS asset URLs
 * subpath-aware automatically; these public/images/* references don't go
 * through Vite's asset pipeline (deliberately — see StockPhoto.jsx), so
 * this is the one place that prefixes them by hand. At the domain root
 * (the default), this is a no-op passthrough.
 *
 * The argument must stay a plain string literal at every call site (not
 * built from a variable or further concatenation) — scripts/build-preview.mjs
 * finds and inlines images by searching the built output for each
 * literal "/images/<file>" substring, and that substring survives here
 * (as either the whole resolved path at the domain root, or the tail end
 * of it under a subpath) only if the argument itself is literal text.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

export const imagePath = (path) => `${BASE}${path}`
