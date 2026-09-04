/**
 * Logo — the real Zanokuhle Intellectuals Academy mark.
 *
 * Used as supplied: the source file had a flat white matte rather than
 * transparency, so the matte was flood-filled to transparent (a routine
 * background removal, not a redraw — no shape, colour or letterform in the
 * artwork was touched) so it sits cleanly on both white and dark panels.
 * `public/images/zanokuhle-logo.png` is the untouched-but-for-that source;
 * regenerate the resized copies here from it if a higher-resolution export
 * ever replaces it.
 *
 * One asset, not two: this is a full-colour illustrated mark (coloured
 * puzzle pieces and wordmark, every shape carrying its own black outline)
 * rather than a single-colour wordmark, so unlike most logos it doesn't
 * need a separate all-white "light" variant to read against a dark
 * background — it already has enough contrast against both the white
 * header and the navy footer. There is deliberately no `light`/`dark` prop
 * here; if a genuinely different background colour is ever introduced
 * that this mark doesn't read well against, that's the point to add one
 * (and a real second asset for it) rather than a prop with no second
 * asset behind it.
 */
export default function Logo({ className = '' }) {
  return (
    <picture className={`inline-flex items-center ${className}`}>
      <source srcSet="/images/zanokuhle-logo.webp" type="image/webp" />
      <img
        src="/images/zanokuhle-logo.png"
        alt="Zanokuhle Intellectuals Academy"
        width={600}
        height={575}
        className="h-11 w-auto sm:h-12"
      />
    </picture>
  )
}
