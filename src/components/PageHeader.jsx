import PhotoPlaceholder from './PhotoPlaceholder.jsx'

/**
 * PageHeader — the coloured band at the top of every interior page.
 *
 * `image` (an optional "/images/<file>" path) renders a full-bleed photo
 * behind a flat turquoise-deep/85 tint, the same treatment as the Home
 * hero — verified there to keep white text past 4.5:1 contrast even over
 * a photo's brightest pixels, since the tint is solid rather than a
 * gradient. It's always decorative (the heading already says what the
 * page is), hence no alt text. Falls back to the original abstract
 * PhotoPlaceholder pattern when no `image` is given. Height/padding are
 * unchanged either way — only the background layer differs.
 */
export default function PageHeader({ eyebrow, title, lead, image, tone = 'turquoise', children }) {
  return (
    <section className="relative overflow-hidden bg-turquoise-deep">
      {image ? (
        <>
          <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-turquoise-deep/85" aria-hidden="true" />
        </>
      ) : (
        <PhotoPlaceholder tone={tone} className="absolute inset-0 h-full w-full opacity-15" />
      )}
      <div className="container-px relative py-16 lg:py-20">
        <div className="max-w-2xl">
          {eyebrow && <p className="eyebrow text-yellow-light">{eyebrow}</p>}
          <h1 className="mt-4 text-display font-bold text-white">{title}</h1>
          {lead && <p className="mt-5 text-lg leading-relaxed text-white/85">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
