/**
 * Accent — lifts a phrase out of a heading in brand colour.
 *
 * `light` switches to yellow: `turquoise` on `turquoise-deep` measures only
 * 1.5:1, well under the 3:1 floor for large/bold text, so it must never be
 * used on a dark background. Yellow on turquoise-deep clears 6.3:1.
 * Headings only, and always at heading size/weight — neither combination
 * clears body-text contrast requirements.
 */
export function Accent({ children, light = false }) {
  return <span className={light ? 'text-yellow' : 'text-turquoise'}>{children}</span>
}

export function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? 'text-yellow-light' : ''}`}>{children}</p>
}

export function SectionHeading({ eyebrow, title, lead, light = false, center = false }) {
  const colour = light ? 'text-white' : 'text-blue-deep'
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {/* A small turquoise accent bar marks the start of every section
          heading — a consistent, low-key "section accent" rather than a
          colour applied inconsistently page to page. Skipped on dark
          (`light`) backgrounds, which already carry the brand colour as
          their fill. */}
      {!light && (
        <span className={`mb-3 block h-1 w-9 rounded-full bg-turquoise ${center ? 'mx-auto' : ''}`} aria-hidden="true" />
      )}
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={`font-sans text-section font-bold ${eyebrow ? 'mt-4' : ''} ${colour}`}>{title}</h2>
      {lead && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/90' : 'text-body'}`}>{lead}</p>}
    </div>
  )
}
