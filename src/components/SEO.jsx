import { Helmet } from 'react-helmet-async'
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_WIDTH,
  DEFAULT_OG_IMAGE_HEIGHT,
  DEFAULT_OG_IMAGE_ALT,
  TWITTER_HANDLE,
} from '../lib/siteConfig.js'
import { organizationJsonLd, websiteJsonLd, webPageJsonLd, breadcrumbJsonLd } from '../lib/jsonld.js'

/**
 * SEO — per-route <head> tags: title, meta description, canonical, Open
 * Graph, Twitter Card, and JSON-LD structured data.
 *
 * Organization (NGO) + WebSite JSON-LD render on every route (standard
 * practice — each page is a document Google can index independently).
 * `pageType` picks the schema.org subtype for the page-specific WebPage
 * block (AboutPage/ContactPage/WebPage); `breadcrumb` (an array of
 * {name, path}, home excluded) adds a BreadcrumbList when given.
 * `noindex` renders a robots meta tag instead of allowing indexing — used
 * on the 404 page.
 */
export default function SEO({
  title,
  description,
  path,
  pageType = 'WebPage',
  breadcrumb,
  image = DEFAULT_OG_IMAGE,
  imageAlt = DEFAULT_OG_IMAGE_ALT,
  imageWidth = DEFAULT_OG_IMAGE_WIDTH,
  imageHeight = DEFAULT_OG_IMAGE_HEIGHT,
  noindex = false,
  extraJsonLd = [],
}) {
  const url = `${SITE_URL}${path}`
  const jsonLd = [
    organizationJsonLd(),
    websiteJsonLd(),
    webPageJsonLd({ type: pageType, path, title, description }),
    ...(breadcrumb && breadcrumb.length > 0 ? [breadcrumbJsonLd(breadcrumb)] : []),
    ...extraJsonLd,
  ]

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph — Facebook, WhatsApp, LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {TWITTER_HANDLE && <meta name="twitter:site" content={TWITTER_HANDLE} />}

      {jsonLd.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  )
}
