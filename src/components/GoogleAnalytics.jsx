import { Helmet } from 'react-helmet-async'

/**
 * Loads Google Analytics 4 (gtag.js) — but only once a real Measurement ID
 * is supplied via the VITE_GA_MEASUREMENT_ID environment variable. No ID is
 * invented here: with the env var unset (the default), this component
 * renders nothing and the site behaves exactly as it did before GA4 was
 * wired up.
 *
 * To connect analytics:
 *  1. Create a GA4 property in Google Analytics and copy its Measurement
 *     ID (format "G-XXXXXXXXXX").
 *  2. Set VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX in the deployment
 *     environment (e.g. a .env.production file, not committed — or the
 *     host's environment-variable settings).
 *  3. Rebuild and deploy. gtag.js then loads and src/lib/analytics.js's
 *     trackEvent() calls (already wired into EnquiryForm submissions and
 *     tel:/mailto: link clicks) start reporting.
 */
export default function GoogleAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

  if (!measurementId) return null

  return (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script>
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}');`}
      </script>
    </Helmet>
  )
}
