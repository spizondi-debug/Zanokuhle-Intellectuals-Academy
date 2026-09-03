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

export function SectionHeading({ eyebrow, title, lead, light = false, center = false, tone = 'ink' }) {
  const colour = light ? 'text-white' : tone === 'turquoise' ? 'text-turquoise-deep' : 'text-ink'
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={`font-sans text-section font-bold ${eyebrow ? 'mt-4' : ''} ${colour}`}>{title}</h2>
      {lead && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/90' : 'text-body'}`}>{lead}</p>}
    </div>
  )
}
