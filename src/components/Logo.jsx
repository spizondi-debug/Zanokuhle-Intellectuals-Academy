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
 */
export default function Logo({ className = '' }) {
  return (
    <picture className={`inline-flex items-center ${className}`}>
      <source srcSet="/images/zanokuhle-logo.webp" type="image/webp" />
      <img
        src="/images/zanokuhle-logo.png"
        alt="Zanokuhle Intellectuals Academy"
        className="h-11 w-auto sm:h-12"
      />
    </picture>
  )
}
