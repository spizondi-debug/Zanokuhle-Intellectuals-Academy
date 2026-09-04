// Site-wide constants used by the SEO layer (src/components/SEO.jsx) and,
// via scripts/generate-seo-files.mjs, public/robots.txt and
// public/sitemap.xml.
//
// SITE_URL reads from the VITE_SITE_URL environment variable — set it in
// your deployment platform's environment-variable settings (Netlify,
// Vercel, Cloudflare Pages, etc. all support this) or in a local
// .env.production file (not committed) before building for production.
// No domain is invented here: with the variable unset, this falls back to
// a clearly-marked placeholder so local builds still work, but that
// placeholder must never reach production — scripts/generate-seo-files.mjs
// prints a warning at build time if it's still in use.
const PLACEHOLDER_SITE_URL = 'https://www.zanokuhleacademy.org.za'
export const SITE_URL = import.meta.env.VITE_SITE_URL || PLACEHOLDER_SITE_URL
export const IS_PLACEHOLDER_SITE_URL = SITE_URL === PLACEHOLDER_SITE_URL

export const SITE_NAME = 'Zanokuhle Intellectuals Academy'

// Default social preview image (Open Graph / Twitter Card) for pages that
// don't specify a more specific one. The standard OG size is 1200x630 —
// this is the real logo file's actual pixel size (600x575, see
// Logo.jsx), used as a safe, always-on-brand fallback since no dedicated
// 1200x630 social-share graphic exists yet (see missing-info list). Width
// and height below describe the actual file, not the 1200x630 ideal, so
// crawlers get accurate dimensions rather than a wrong guess.
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/zanokuhle-logo.png`
export const DEFAULT_OG_IMAGE_WIDTH = 600
export const DEFAULT_OG_IMAGE_HEIGHT = 575
export const DEFAULT_OG_IMAGE_ALT = 'The Zanokuhle Intellectuals Academy logo'

// PLACEHOLDER — no verified X/Twitter handle exists yet. Leave unset
// (SEO.jsx omits the twitter:site tag entirely when this is empty) rather
// than invent one.
export const TWITTER_HANDLE = ''
