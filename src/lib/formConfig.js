// Enquiry-form submission endpoint — centralised here so every form (and
// the "how to connect this" documentation) reads from one place.
//
// PLACEHOLDER — unset by default. No form submissions are sent anywhere
// until this is configured; see EnquiryForm.jsx for what the site shows
// instead (an honest "temporarily unavailable" state, never a fake
// success message).
//
// To connect a real inbox:
//   1. Pick a form-submission service that accepts a POST with a JSON
//      body and returns a 2xx response on success. Zanokuhle doesn't need
//      a custom backend for this — any of the following work with zero
//      code changes here:
//        - Formspree (formspree.io) — free tier available, emails you
//          directly, has built-in spam filtering.
//        - Getform (getform.io) or Basin (usebasin.com) — similar,
//          form-endpoint-as-a-service.
//        - A small serverless function (e.g. a Cloudflare Worker or
//          Netlify/Vercel function) that forwards to an email API — more
//          setup, but keeps any API key server-side rather than in this
//          frontend bundle, which matters if the chosen service needs a
//          secret key rather than a public form ID.
//   2. Set VITE_FORM_ENDPOINT to that service's submission URL in the
//      deployment environment (a .env.production file, not committed, or
//      the host's environment-variable settings).
//   3. Rebuild and deploy. EnquiryForm.jsx will start POSTing real
//      submissions and only show success once the service confirms it.
//
// Never put a private/secret API key in this file or anywhere else under
// src/ — anything here ships to every visitor's browser. A form-endpoint
// URL or public form ID is fine (that's what these services are designed
// for); a secret key is not.
export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || ''
