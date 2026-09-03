/**
 * StockPhoto — real or licensed reference photography, rendered plainly.
 *
 * Most images used through this component are stock/reference photos:
 * confirmed with the person supplying them as not photographs of
 * Zanokuhle's own learners or programmes, with no documented parental/
 * guardian consent (see SAFEGUARDING_NOTE in data/org.js). Those are used
 * as generic scene-setting imagery only — alt text stays descriptive of
 * the scene, never naming a specific Zanokuhle programme, learner or
 * location, so nothing on the page implies these are identified
 * participants.
 *
 * One exception: `ecd-child-painting.jpg` (Early Childhood Development
 * page) is real Zanokuhle photography confirmed as consented by the
 * person supplying it. It's still captioned generically — no name or
 * personal story attached — because none has been confirmed, but it may
 * be used more specifically than the stock set if that changes. Any
 * other filename without a `stock-` prefix should be treated the same
 * way: check before assuming it's stock.
 *
 * Replace any of these with better/updated Zanokuhle photography as it
 * becomes available; PhotoPlaceholder remains the right choice for any
 * slot that doesn't yet have a suitable photo at all.
 *
 * `src` takes the full path (e.g. "/images/stock-hero-learners-smiling.jpg"),
 * not just a filename — scripts/build-preview.mjs finds and inlines every
 * "/images/<file>" reference in the built output as a data URI for the
 * standalone preview, which only works if that full path exists as one
 * literal string somewhere (in a JSX prop or a data file) rather than
 * assembled at runtime by concatenation, which a minifier can split apart.
 */
export default function StockPhoto({ src, alt, className = '', width, height }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
