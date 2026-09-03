import { Mail, Phone, MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx'
import { CONTACT } from '../data/org.js'

const generalEnquiryTypes = [
  'General enquiry',
  'Programme enquiry',
  'Donation enquiry',
  'Funding or CSI partnership',
  'School or community partnership',
  'Volunteering',
  'Media enquiry',
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Let's talk."
        lead="Whether you're a parent, a school, a funder or simply curious about our work, we'd like to hear from you."
      />

      <section className="section-pad">
        <div className="container-px grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="space-y-6">
            <PhotoPlaceholder
              label="Photography placeholder"
              tone="blue"
              className="h-40 rounded-2xl"
            />
            <div className="rounded-2xl border border-line bg-white p-6 transition-colors hover:border-turquoise">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-turquoise-pale text-turquoise-deep">
                <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">Email</p>
              <a href={`mailto:${CONTACT.email}`} className="mt-1 block font-bold text-ink hover:text-blue-deep">
                {CONTACT.email}
              </a>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6 transition-colors hover:border-turquoise">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-pale text-blue-deep">
                <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">Telephone</p>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="mt-1 block font-bold text-ink hover:text-blue-deep">
                {CONTACT.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6 transition-colors hover:border-turquoise">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-pale text-yellow-deep">
                <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">Office</p>
              <p className="mt-1 font-bold text-ink">{CONTACT.addressLines.join(', ')}</p>
            </div>
            <p className="text-xs leading-relaxed text-muted">
              Contact details above are placeholders pending confirmation and should be updated with
              Zanokuhle's live details before this site goes public.
            </p>
          </div>

          <EnquiryForm enquiryTypes={generalEnquiryTypes} submitLabel="Send Message" />
        </div>
      </section>
    </>
  )
}
