import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { privacyConsentNote } from '../data/getInvolved.js'
import { trackEvent } from '../lib/analytics.js'

/**
 * EnquiryForm — a client-only enquiry form.
 *
 * No backend or payment processor is wired up. Submitting shows a
 * confirmation state so the flow reads as finished rather than broken; a
 * real deployment needs this pointed at a form endpoint, email service or
 * CRM before launch. The GA4 `form_submit` event (see src/lib/analytics.js)
 * fires on this same client-side "success" state, so conversion tracking
 * is already wired in and starts reporting the moment a real GA4
 * Measurement ID is supplied — see GoogleAnalytics.jsx.
 */
export default function EnquiryForm({ enquiryTypes, defaultType, submitLabel = 'Send Enquiry', formName = 'enquiry' }) {
  const [submitted, setSubmitted] = useState(false)
  const [consent, setConsent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!consent) return
    const enquiryType = e.target.elements.enquiryType?.value || defaultType || 'general'
    trackEvent('form_submit', { form_name: formName, enquiry_type: enquiryType })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card flex flex-col items-center gap-3 p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-pale text-green-deep">
          <CheckCircle2 size={22} strokeWidth={2} aria-hidden="true" />
        </span>
        <h3 className="text-lg font-bold text-turquoise-deep">Thank you — your enquiry has been noted.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-body">
          This is a demonstration form and has not been sent anywhere yet. Once connected to a live inbox, a
          member of the Zanokuhle team will follow up as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          Full name
          <input required type="text" name="name" className="mt-1.5 w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink focus:border-turquoise focus:outline-none" />
        </label>
        <label className="block text-sm font-semibold text-ink">
          Email address
          <input required type="email" name="email" className="mt-1.5 w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink focus:border-turquoise focus:outline-none" />
        </label>
        <label className="block text-sm font-semibold text-ink">
          Phone number
          <input type="tel" name="phone" className="mt-1.5 w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink focus:border-turquoise focus:outline-none" />
        </label>
        <label className="block text-sm font-semibold text-ink">
          Organisation (if applicable)
          <input type="text" name="organisation" className="mt-1.5 w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink focus:border-turquoise focus:outline-none" />
        </label>
      </div>

      {enquiryTypes && (
        <label className="block text-sm font-semibold text-ink">
          Enquiry type
          <select
            name="enquiryType"
            defaultValue={defaultType || enquiryTypes[0]}
            className="mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink focus:border-turquoise focus:outline-none"
          >
            {enquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      )}

      <label className="block text-sm font-semibold text-ink">
        Message
        <textarea
          required
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink focus:border-turquoise focus:outline-none"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-body">
        <input
          required
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-line text-turquoise focus:ring-turquoise"
        />
        <span>
          I consent to Zanokuhle Intellectuals Academy storing and using the information above to respond to my
          enquiry. {privacyConsentNote}
        </span>
      </label>

      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        {submitLabel}
      </button>
    </form>
  )
}
