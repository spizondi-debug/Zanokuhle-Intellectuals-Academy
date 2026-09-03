// GA4 event tracking helper. Safe no-op when GA4 hasn't been wired up yet
// (see src/components/GoogleAnalytics.jsx) — call sites can fire events
// unconditionally without checking whether analytics has loaded.
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}
