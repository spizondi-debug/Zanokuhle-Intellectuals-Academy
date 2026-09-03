// Minimal brand glyphs — lucide-react no longer ships social/brand icons,
// so these are small hand-drawn SVGs instead of a second icon dependency.

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 13.5h2.5l.5-3H14V8.5c0-1 .3-1.7 1.8-1.7H17V4.1C16.7 4 15.7 4 14.6 4 12.3 4 10.7 5.4 10.7 8.2v2.3H8v3h2.7V20h3.3v-6.5z" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3.5 9h3v11.5h-3V9zM9.5 9h2.9v1.6h.04c.4-.76 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v6.8h-3v-6c0-1.5 0-3.3-2-3.3s-2.4 1.6-2.4 3.2v6.1h-3V9z" />
    </svg>
  )
}
