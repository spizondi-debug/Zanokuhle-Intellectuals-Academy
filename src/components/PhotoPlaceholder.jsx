/**
 * PhotoPlaceholder — stands in for real photography.
 *
 * The brief is explicit: real photography only, authentic South African
 * education/community imagery, no stock people and no pity-based framing.
 * No approved photographs exist yet, so every image slot on this site uses
 * this component — a calm, on-brand abstract panel — rather than a
 * generic stock photo of unrelated people.
 *
 * To swap in a real photograph: replace the caller with
 *   <img src="/images/<file>.jpg" alt="<real description>" className={className} />
 * and delete the placeholder once photography with proper consent
 * (see SAFEGUARDING_NOTE in data/org.js) is available.
 */
export default function PhotoPlaceholder({ label, tone = 'turquoise', className = '' }) {
  const tones = {
    turquoise: 'from-turquoise-pale via-surface-100 to-blue-pale',
    blue: 'from-blue-pale via-surface-100 to-turquoise-pale',
    yellow: 'from-yellow-pale via-surface-100 to-turquoise-pale',
  }
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" aria-hidden="true">
        <pattern id={`grid-${tone}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="currentColor" className="text-turquoise" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#grid-${tone})`} />
      </svg>
      {label && (
        <span className="relative rounded-full border border-white/70 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-turquoise-deep backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  )
}
