// Site-wide constants used by the SEO layer (src/components/SEO.jsx) and,
// via scripts/generate-seo-files.mjs, public/robots.txt and
// public/sitemap.xml.
//
// The organisation's live domain. Every absolute URL the site emits —
// canonical tags, Open Graph/Twitter URLs, JSON-LD, robots.txt and
// sitemap.xml — is derived from this single value, so there is exactly
// one place to change if the domain ever moves.
//
// VITE_SITE_URL still overrides it at build time (useful for a staging
// deploy on a different hostname), but is no longer required: with
// nothing set, a build now produces correct production URLs rather than
// a placeholder. The trailing slash is stripped so callers can safely
// append paths as `${SITE_URL}/about`.
const DEFAULT_SITE_URL = 'https://zanokuhleintellectuals.co.za'
export const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')

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
