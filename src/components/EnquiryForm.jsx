import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'
import { privacyConsentNote } from '../data/getInvolved.js'
import { CONTACT } from '../data/org.js'
import { FORM_ENDPOINT } from '../lib/formConfig.js'
import { trackEvent } from '../lib/analytics.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * EnquiryForm — a real submission form, not a demo.
 *
 * Posts to FORM_ENDPOINT (src/lib/formConfig.js, from VITE_FORM_ENDPOINT).
 * The success state only ever shows after the endpoint responds with a
 * 2xx status — never on a client-side assumption. With no endpoint
 * configured, submitting goes straight to the "unavailable" state with a
 * direct mailto:/tel: fallback, instead of pretending the message sent.
 *
 * Basic spam protection: a honeypot field, invisible and unreachable by
 * keyboard, that only an automated filler would ever populate. A bot that
 * fills it gets a fake "success" (so it has no signal to adapt to) while
 * nothing is actually sent.
 */
export default function EnquiryForm({ enquiryTypes, defaultType, submitLabel = 'Send Enquiry', formName = 'enquiry' }) {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error | unavailable
  const [consent, setConsent] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})
  const submittingRef = useRef(false)

  const validate = (data) => {
    const errors = {}
    if (!data.name?.trim()) errors.name = 'Enter your full name.'
    if (!data.email?.trim()) errors.email = 'Enter your email address.'
    else if (!EMAIL_PATTERN.test(data.email.trim())) errors.email = 'Enter a valid email address.'
    if (!data.message?.trim()) errors.message = 'Enter a message.'
    if (!consent) errors.consent = 'You need to consent before this can be sent.'
    return errors
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (submittingRef.current) return // duplicate-submit guard

    const form = e.target
    const data = Object.fromEntries(new FormData(form).entries())

    if (data.hp_field) {
      // Honeypot tripped — silently pretend success, send nothing.
      setStatus('success')
      return
    }

    const errors = validate(data)
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    if (!FORM_ENDPOINT) {
      setStatus('unavailable')
      return
    }

    submittingRef.current = true
    setStatus('submitting')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, formName, hp_field: undefined }),
      })
      if (!res.ok) throw new Error(`Form endpoint responded with ${res.status}`)
      trackEvent('form_submit', { form_name: formName, enquiry_type: data.enquiryType || defaultType || 'general' })
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      submittingRef.current = false
    }
  }

  if (status === 'success') {
    return (
      <div className="card flex flex-col items-center gap-3 p-8 text-center" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-pale text-green-deep">
          <CheckCircle2 size={22} strokeWidth={2} aria-hidden="true" />
        </span>
        <h3 className="text-lg font-bold text-turquoise-deep">Thank you — your enquiry has been sent.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-body">
          A member of the Zanokuhle team will follow up as soon as possible.
        </p>
      </div>
    )
  }

  if (status === 'unavailable') {
    return (
      <div className="card flex flex-col items-center gap-3 p-8 text-center" role="status">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-pale text-yellow-deep">
          <AlertTriangle size={22} strokeWidth={2} aria-hidden="true" />
        </span>
        <h3 className="text-lg font-bold text-turquoise-deep">This form isn't connected yet.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-body">
          Online enquiries aren't available on the site right now. Please contact us directly instead —
          we'll respond as quickly as we can.
        </p>
        <div className="mt-2 flex flex-col gap-1 text-sm font-semibold">
          <a href={`mailto:${CONTACT.email}`} className="text-blue-deep hover:text-blue">
            {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-blue-deep hover:text-blue">
            {CONTACT.phone}
          </a>
        </div>
      </div>
    )
  }

  const errorFieldClass = (field) =>
    fieldErrors[field]
      ? 'mt-1.5 w-full rounded-xl border border-pink px-4 py-2.5 text-sm text-ink focus:border-pink focus:outline-none'
      : 'mt-1.5 w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink focus:border-turquoise focus:outline-none'

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
      {/* Honeypot — hidden from sighted and keyboard users, visible to bots */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <label htmlFor="hp_field">Leave this field empty</label>
        <input id="hp_field" name="hp_field" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <p role="alert" className="flex items-center gap-2 rounded-xl border border-pink bg-pink-pale px-4 py-3 text-sm font-semibold text-pink-deep">
          <AlertTriangle size={16} strokeWidth={2} aria-hidden="true" />
          Something went wrong sending your enquiry. Please try again, or email {CONTACT.email} directly.
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          Full name
          <input
            type="text"
            name="name"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? 'error-name' : undefined}
            className={errorFieldClass('name')}
          />
          {fieldErrors.name && (
            <span id="error-name" className="mt-1 block text-xs font-semibold text-pink-deep">
              {fieldErrors.name}
            </span>
          )}
        </label>
        <label className="block text-sm font-semibold text-ink">
          Email address
          <input
            type="email"
            name="email"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? 'error-email' : undefined}
            className={errorFieldClass('email')}
          />
          {fieldErrors.email && (
            <span id="error-email" className="mt-1 block text-xs font-semibold text-pink-deep">
              {fieldErrors.email}
            </span>
          )}
        </label>
        <label className="block text-sm font-semibold text-ink">
          Phone number
          <input type="tel" name="phone" className={errorFieldClass('phone')} />
        </label>
        <label className="block text-sm font-semibold text-ink">
          Organisation (if applicable)
          <input type="text" name="organisation" className={errorFieldClass('organisation')} />
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
          name="message"
          rows={4}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? 'error-message' : undefined}
          className={errorFieldClass('message')}
        />
        {fieldErrors.message && (
          <span id="error-message" className="mt-1 block text-xs font-semibold text-pink-deep">
            {fieldErrors.message}
          </span>
        )}
      </label>

      <label className="flex items-start gap-3 text-sm text-body">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          aria-invalid={!!fieldErrors.consent}
          aria-describedby={fieldErrors.consent ? 'error-consent' : undefined}
          className="mt-1 h-4 w-4 shrink-0 rounded border-line text-turquoise focus:ring-turquoise"
        />
        <span>
          I consent to Zanokuhle Intellectuals Academy storing and using the information above to respond to my
          enquiry. {privacyConsentNote} See our{' '}
          <Link to="/privacy-policy" className="font-semibold text-blue-deep hover:text-blue">
            Privacy Policy
          </Link>{' '}
          for details.
        </span>
      </label>
      {fieldErrors.consent && (
        <span id="error-consent" className="-mt-3 block text-xs font-semibold text-pink-deep">
          {fieldErrors.consent}
        </span>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === 'submitting' ? (
          <>
            <Loader2 size={16} strokeWidth={2.2} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          submitLabel
        )}
      </button>
    </form>
  )
}
