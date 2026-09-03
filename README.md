# Zanokuhle Intellectuals Academy — website

A standalone marketing/informational website for Zanokuhle Intellectuals Academy, a South African
Non-Profit Organisation (NPO 280-735) and Non-Profit Company (NPC 2022/619121/08) delivering early
childhood development, education support, youth and skills development, and community development
programmes, anchored by the Alexandra Learner Advancement Programme.

This is a separate project from Prestige Tutelage / Prestige Growth Pathways.

## Stack

React 18 + Vite + React Router + Tailwind CSS. No backend — the enquiry forms are client-only
demonstration flows (see `src/components/EnquiryForm.jsx`).

## Before this goes live

A number of things in this build are deliberate placeholders, called out in code comments where they
occur:

- **Logo** — no logo file was supplied. `src/components/Logo.jsx` is a text wordmark; swap in the real
  mark (see the comment at the top of that file) once available, and re-check the brand palette in
  `tailwind.config.js` against it.
- **Photography** — every image slot uses `PhotoPlaceholder` rather than stock photos of unrelated
  people. Replace with real, consented photography (see `SAFEGUARDING_NOTE` in `src/data/org.js` and the
  content guidance at the top of `src/data/news.js`) before publishing.
- **Contact details** — `src/data/org.js` has placeholder email/phone/address values.
- **Enquiry forms** — `EnquiryForm.jsx` shows a confirmation state but doesn't send anywhere yet. Wire it
  to a real inbox, form service or CRM before launch.
- **Donations** — no payment processor is integrated; `Get Involved` runs a donation *enquiry* flow by
  design (see `donationNote` in `src/data/getInvolved.js`).
- **Statistics** — `Impact.jsx` and the Home page's impact section deliberately carry no invented
  numbers. Add real, approved figures when available.
- **Programme content** — `src/data/programmes.js` and `src/data/alexandra.js` are realistic placeholder
  copy. Review names, descriptions and especially any date/figure-shaped content with Zanokuhle before
  publishing.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```
