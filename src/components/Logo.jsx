/**
 * Logo — text wordmark placeholder.
 *
 * No logo file has been supplied yet. Per brief, the real Zanokuhle mark
 * must be used as-is once available — not redrawn or distorted. To drop it
 * in: replace the contents of this component with
 *   <img src="/images/logo.svg" alt="Zanokuhle Intellectuals Academy" className={className} />
 * (add the file to /public/images/) and delete the markup below. Every
 * caller already passes `light` for use on dark backgrounds, so keep that
 * prop when swapping.
 */
export default function Logo({ light = false, className = '' }) {
  const mark = light ? 'text-white' : 'text-green-deep'
  const sub = light ? 'text-white/75' : 'text-muted'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold text-white ${
          light ? 'bg-white/15' : 'bg-green'
        }`}
        aria-hidden="true"
      >
        Z
      </span>
      <span className="leading-tight">
        <span className={`block text-[0.95rem] font-bold tracking-tight ${mark}`}>Zanokuhle</span>
        <span className={`block text-[0.6rem] font-semibold uppercase tracking-[0.14em] ${sub}`}>
          Intellectuals Academy
        </span>
      </span>
    </span>
  )
}
