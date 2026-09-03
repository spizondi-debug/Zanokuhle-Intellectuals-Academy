import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import StockPhoto from '../components/StockPhoto.jsx'
import { CONTACT, REGISTRATION, mission } from '../data/org.js'
import { seoByPath } from '../data/seo.js'
import { faqPageJsonLd } from '../lib/jsonld.js'
import { trackEvent } from '../lib/analytics.js'

const generalEnquiryTypes = [
  'General enquiry',
  'Programme enquiry',
  'Donation enquiry',
  'Funding or CSI partnership',
  'School or community partnership',
  'Volunteering',
  'Media enquiry',
]

// Answers use only facts already verified elsewhere on the site (mission,
// registration numbers, existing Get Involved pathways and News
// publications status) — no new claims are introduced here.
const faqs = [
  { question: 'What does Zanokuhle Intellectuals Academy do?', answer: mission },
  {
    question: 'Is Zanokuhle Intellectuals Academy a registered nonprofit?',
    answer: `Yes. Zanokuhle is registered in South Africa as a Non-Profit Organisation (NPO ${REGISTRATION.npo}) and a Non-Profit Company (NPC ${REGISTRATION.npc}).`,
  },
  {
    question: 'How can I volunteer with Zanokuhle?',
    answer:
      "Give your time as a tutor, mentor or programme volunteer. Select “Volunteering” on the enquiry form below, or visit the Get Involved page, and our team will match you to a programme based on need, skill and availability.",
  },
  {
    question: 'How can my company support Zanokuhle through CSI?',
    answer:
      "Corporates can align their Corporate Social Investment with Zanokuhle's education and community development work. Select “Funding or CSI partnership” on the enquiry form below to start the conversation.",
  },
  {
    question: 'Does Zanokuhle publish an annual report?',
    answer:
      "Zanokuhle's annual report and programme briefs will be published on the News & Stories page once available. Both are currently listed as coming soon.",
  },
]

export default function Contact() {
  const seo = seoByPath['/contact']
  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path="/contact"
        pageType="ContactPage"
        breadcrumb={seo.breadcrumb}
        extraJsonLd={[faqPageJsonLd(faqs)]}
      />
      <PageHeader
        eyebrow="Contact us"
        title="Let's talk."
        lead="Whether you're a parent, a school, a funder or simply curious about our work, we'd like to hear from you."
        image="/images/stock-contact-classroom-portrait.jpg"
        imageWidth={1920}
        imageHeight={1280}
      />

      <section className="section-pad">
        <div className="container-px grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="space-y-6">
            <StockPhoto
              src="/images/stock-contact-classroom-portrait.jpg"
              alt="A child in a classroom setting with other children"
              className="h-40 rounded-2xl"
              width={1920}
              height={1280}
            />
            <div className="card-hover">
              <span className="icon-badge bg-turquoise-pale text-turquoise-deep">
                <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">Email</p>
              <a
                href={`mailto:${CONTACT.email}`}
                onClick={() => trackEvent('email_click', { link_location: 'contact_page' })}
                className="mt-1 block font-bold text-ink hover:text-blue-deep"
              >
                {CONTACT.email}
              </a>
            </div>
            <div className="card-hover">
              <span className="icon-badge bg-blue-pale text-blue-deep">
                <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">Telephone</p>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                onClick={() => trackEvent('phone_click', { link_location: 'contact_page' })}
                className="mt-1 block font-bold text-ink hover:text-blue-deep"
              >
                {CONTACT.phone}
              </a>
            </div>
            <div className="card-hover">
              <span className="icon-badge bg-yellow-pale text-yellow-deep">
                <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">Office</p>
              <p className="mt-1 font-bold text-ink">{CONTACT.addressLines.join(', ')}</p>
            </div>
            <div className="card-hover">
              <span className="icon-badge bg-orange-pale text-orange-deep">
                <Clock size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">Office hours</p>
              <p className="mt-1 font-bold text-ink">{CONTACT.hours}</p>
            </div>
            <p className="text-xs leading-relaxed text-muted">
              The email address above is a placeholder pending confirmation and should be updated with
              Zanokuhle's live inbox before this site goes public.
            </p>
          </div>

          <EnquiryForm enquiryTypes={generalEnquiryTypes} submitLabel="Send Message" formName="contact" />
        </div>
      </section>

      <section className="border-t border-line bg-white section-pad">
        <div className="container-px">
          <SectionHeading eyebrow="Frequently asked questions" title="Common questions, answered." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.question} className="card-hover">
                <h3 className="font-bold text-turquoise-deep">{f.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
