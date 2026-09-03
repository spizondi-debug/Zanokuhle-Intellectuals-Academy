/**
 * Zanokuhle Intellectuals Academy — brand tokens.
 *
 * Every colour below reads from the CSS custom properties defined in
 * `src/index.css` (`:root`), so the palette is managed in exactly one
 * place. `withOpacity()` emits `rgb(var(--color-x) / <alpha-value>)`,
 * which keeps Tailwind opacity modifiers (e.g. `bg-turquoise-pale/50`)
 * working against a CSS-variable colour.
 *
 * Palette derivation: `turquoise` (H172°) and `blue` (H213°) are sampled
 * directly from the puzzle-piece hues in the real logo
 * (public/images/zanokuhle-logo.png) — this is the same pair the site
 * already used under the names `green`/`blue`; they're renamed here only
 * because the brief calls for turquoise and blue as the two primary
 * action colours, with `green` reserved for success/positive states.
 * `green` (H128°), `yellow` (H50-54°), `orange` (H27°), `pink` (H340°) and
 * `purple` (H288°) are newly sampled from the logo's other puzzle pieces
 * (a lime-green, a bright yellow, a red-orange, a magenta-pink and an
 * orchid-purple), each shifted only in lightness/saturation as needed to
 * clear contrast — never in hue.
 *
 * Every `deep` clears 4.5:1 as text on white and on its own `pale`; every
 * `DEFAULT` clears 4.5:1 as white button text on the fill (green tuned a
 * touch darker than the raw logo hue for this reason); every `light`
 * clears 3:1 as large/bold text on `turquoise-deep` and on `ink` — the
 * only backgrounds it's used against. `yellow`/`yellow-deep` are the one
 * exception worth flagging: pure logo yellow is too luminant to ever pass
 * text contrast at any lightness, so `yellow-deep` is a genuine dark
 * mustard, the same trick every design system uses for a text-safe
 * "yellow". Re-verify all of this (see /root's WCAG relative-luminance
 * formula) if any value changes.
 *
 * Neutrals (`ink`/`body`/`muted`/`line`/`surface-*`) are deep navy-charcoal
 * and cool greys — chosen to read as an education/trust identity, not the
 * warm "sand" neutrals this site started with.
 *
 * @type {import('tailwindcss').Config}
 */
const withOpacity = (variable) => `rgb(var(${variable}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: withOpacity('--color-white'),
        ink: withOpacity('--color-ink'),
        body: withOpacity('--color-body'),
        muted: withOpacity('--color-muted'),
        line: withOpacity('--color-line'),
        surface: {
          50: withOpacity('--color-surface-50'),
          100: withOpacity('--color-surface-100'),
          200: withOpacity('--color-surface-200'),
          300: withOpacity('--color-surface-300'),
        },
        // Primary — trust, action, navigation. Used for buttons, links,
        // nav highlights and the dark hero/CTA panels.
        turquoise: {
          DEFAULT: withOpacity('--color-turquoise'),
          deep: withOpacity('--color-turquoise-deep'),
          light: withOpacity('--color-turquoise-light'),
          pale: withOpacity('--color-turquoise-pale'),
        },
        blue: {
          DEFAULT: withOpacity('--color-blue'),
          deep: withOpacity('--color-blue-deep'),
          light: withOpacity('--color-blue-light'),
          pale: withOpacity('--color-blue-pale'),
        },
        // Success — positive outcomes, selected states, confirmations.
        // Never used as a general brand/primary colour.
        green: {
          DEFAULT: withOpacity('--color-green'),
          deep: withOpacity('--color-green-deep'),
          light: withOpacity('--color-green-light'),
          pale: withOpacity('--color-green-pale'),
        },
        // Sparing accents — one small badge, icon or eyebrow at a time.
        yellow: {
          DEFAULT: withOpacity('--color-yellow'),
          deep: withOpacity('--color-yellow-deep'),
          light: withOpacity('--color-yellow-light'),
          pale: withOpacity('--color-yellow-pale'),
        },
        orange: {
          DEFAULT: withOpacity('--color-orange'),
          deep: withOpacity('--color-orange-deep'),
          light: withOpacity('--color-orange-light'),
          pale: withOpacity('--color-orange-pale'),
        },
        pink: {
          DEFAULT: withOpacity('--color-pink'),
          deep: withOpacity('--color-pink-deep'),
          light: withOpacity('--color-pink-light'),
          pale: withOpacity('--color-pink-pale'),
        },
        purple: {
          DEFAULT: withOpacity('--color-purple'),
          deep: withOpacity('--color-purple-deep'),
          light: withOpacity('--color-purple-light'),
          pale: withOpacity('--color-purple-pale'),
        },
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
        soft: '0 1px 2px rgba(17, 22, 34, 0.06), 0 1px 3px rgba(17, 22, 34, 0.04)',
        card: '0 2px 8px rgba(17, 22, 34, 0.06), 0 1px 2px rgba(17, 22, 34, 0.04)',
        lift: '0 12px 32px -8px rgba(17, 22, 34, 0.16)',
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
