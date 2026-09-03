import { ImageOff } from 'lucide-react'

/**
 * PhotoPlaceholder — stands in for real photography.
 *
 * The brief is explicit: real photography only, authentic South African
 * education/community imagery, no stock people and no pity-based framing.
 * Used for any image slot without an approved photo yet — a plain, flat
 * panel rather than a generic stock photo of unrelated people.
 *
 * To swap in a real photograph: replace the caller with
 *   <img src="/images/<file>.jpg" alt="<real description>" className={className} />
 * and delete the placeholder once photography with proper consent
 * (see SAFEGUARDING_NOTE in data/org.js) is available.
 */
export default function PhotoPlaceholder({ label, tone = 'turquoise', className = '' }) {
  const tones = {
    turquoise: 'bg-turquoise-pale text-turquoise-deep',
    blue: 'bg-blue-pale text-blue-deep',
    yellow: 'bg-yellow-pale text-yellow-deep',
  }
  return (
    <div className={`flex flex-col items-center justify-center gap-2.5 border border-line ${tones[tone]} ${className}`}>
      <ImageOff size={22} strokeWidth={1.6} aria-hidden="true" className="opacity-60" />
      {label && <span className="text-xs font-semibold uppercase tracking-wide opacity-75">{label}</span>}
    </div>
  )
}
