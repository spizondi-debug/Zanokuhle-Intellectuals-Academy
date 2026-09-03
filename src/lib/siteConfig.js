// Site-wide constants used by the SEO layer (src/components/SEO.jsx,
// public/robots.txt, public/sitemap.xml).
//
// PLACEHOLDER — SITE_URL is not a real, owned domain yet. Every canonical
// URL, Open Graph URL, sitemap entry and JSON-LD `url` field is built from
// this constant, so update it in this one place once Zanokuhle's real
// domain is confirmed and live, then regenerate public/sitemap.xml and
// public/robots.txt (both currently hand-written against this same
// placeholder — see the comments in each file).
export const SITE_URL = 'https://www.zanokuhleacademy.org.za' // PLACEHOLDER — confirm real domain before launch.

export const SITE_NAME = 'Zanokuhle Intellectuals Academy'

// Default social preview image (Open Graph / Twitter Card) for pages that
// don't specify a more specific one. 1200x630 is the standard OG size —
// the logo is used as a safe, always-on-brand fallback since no dedicated
// social-share graphic exists yet (see missing-info list).
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/zanokuhle-logo.png`

// PLACEHOLDER — no verified X/Twitter handle exists yet. Leave unset
// (SEO.jsx omits the twitter:site tag entirely when this is empty) rather
// than invent one.
export const TWITTER_HANDLE = ''
