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
 * `src` (and `webpSrc`/`webpSrc800w` below) take the full literal path
 * (e.g. "/images/stock-hero-learners-smiling.jpg"), not just a filename,
 * and must be passed as complete literal strings at the call site rather
 * than built at runtime (e.g. `src.replace('.jpg', '.webp')`) —
 * scripts/build-preview.mjs finds and inlines every "/images/<file>"
 * reference in the built output as a data URI for the standalone preview,
 * which only works if that full path exists as one literal string
 * somewhere a minifier can't split apart.
 *
 * `webpSrc` (optional): a WebP encode of the same photo. When given, this
 * renders a <picture> offering it first — modern browsers use the
 * smaller WebP; anything else falls back to `src`. `webpSrc800w`
 * (optional, requires `webpSrc`): a smaller WebP variant for narrow
 * viewports, added to the same <source>'s srcset alongside `webpSrc` at
 * the image's real (`width`) size — pass `sizes` to describe how wide
 * this image actually renders in the layout so the browser can pick
 * correctly (defaults to a sensible one-column-on-mobile guess).
 */
export default function StockPhoto({ src, webpSrc, webpSrc800w, alt, className = '', width, height, sizes = '(min-width: 1024px) 50vw, 100vw' }) {
  const img = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
      decoding="async"
    />
  )
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {webpSrc ? (
        <picture>
          <source
            type="image/webp"
            srcSet={webpSrc800w ? `${webpSrc800w} 800w, ${webpSrc} ${width}w` : webpSrc}
            sizes={webpSrc800w ? sizes : undefined}
          />
          {img}
        </picture>
      ) : (
        img
      )}
    </div>
  )
}
