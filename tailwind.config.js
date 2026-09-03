/**
 * Zanokuhle Intellectuals Academy — brand tokens.
 *
 * `green` and `blue` are tuned to the actual logo (public/images/zanokuhle-logo.png),
 * not just a compatible palette: sampled the teal-green and blue puzzle
 * pieces at roughly hue 170° and 213° respectively (HSL), then built each
 * DEFAULT/deep/light/pale set at that hue rather than the generic ~159°/
 * 214° this started from. `blue` needed almost no shift — the placeholder
 * had already landed within a couple of degrees of the mark's blue by
 * coincidence. `gold` is not sampled from a single logo swatch (the mark
 * has no true gold — its warm colours are a red-orange and a bright
 * yellow) but sits deliberately between those two hues, so it reads as
 * drawn from the same warm family as the mark rather than an unrelated
 * amber. Every contrast pairing below was re-verified after the hue shift
 * (see the `gold`/`muted` comments) — re-check again if any value changes.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep green — growth, community, hope. Primary brand colour.
        green: {
          DEFAULT: '#1F6F62',
          deep: '#165046',
          light: '#409C8C',
          pale: '#EDF8F6',
        },
        // Strong blue — trust, education, action. Secondary brand colour.
        blue: {
          DEFAULT: '#1D4E8C',
          deep: '#153B6B',
          light: '#3E76C4',
          pale: '#EAF1FB',
        },
        // Warm gold accent — used sparingly (badges, underlines, small
        // highlights), never as a large fill.
        // `deep` and `light` are picked for contrast, not just hue: `deep`
        // clears 4.5:1 as small bold text on `pale` (5.2:1) and on white
        // (5.8:1); `light` clears 3:1 as large/bold text on `green.deep`
        // (5.1:1) — the plain `DEFAULT` only manages 3.9:1 there, under the
        // 4.5:1 small-text floor, so never set eyebrow-on-dark-green in the
        // bare `gold`. Re-verify all three if the values change.
        gold: {
          DEFAULT: '#D79A3B',
          deep: '#8A5C19',
          light: '#E8B563',
          pale: '#FBF1E1',
        },
        // Warm neutrals — backgrounds and text, never cool grey.
        sand: {
          50: '#FBF9F5',
          100: '#F5F1E8',
          200: '#EAE4D6',
          300: '#DCD3BF',
        },
        ink: '#20241F',
        body: '#4A5148',
        // 5.2–5.9:1 across every background it's used on (white, sand-50,
        // sand-100) — comfortably past the 4.5:1 small-text floor.
        muted: '#5F675A',
        line: '#E1DACB',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.25rem, 1.7rem + 2.2vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        section: ['clamp(1.75rem, 1.5rem + 1vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        container: '80rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(32, 36, 31, 0.06), 0 1px 3px rgba(32, 36, 31, 0.04)',
        card: '0 2px 8px rgba(32, 36, 31, 0.06), 0 1px 2px rgba(32, 36, 31, 0.04)',
        lift: '0 12px 32px -8px rgba(32, 36, 31, 0.16)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}
