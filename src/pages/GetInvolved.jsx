import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import Notice from '../components/Notice.jsx'
import { involvementPathways, enquiryTypes, donationNote } from '../data/getInvolved.js'

export default function GetInvolved() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="There is a role here for you."
        lead="Whether you give, partner, volunteer or open a door for a young person, your support becomes a real, structured pathway — not a one-off gesture."
      />

      <section className="section-pad">
        <div className="container-px">
          <SectionHeading eyebrow="Ways to support Zanokuhle" title="Choose the way that fits you." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {involvementPathways.map((p) => (
              <div key={p.id} id={p.id} className="scroll-mt-28 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-turquoise">
                <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-blue">{p.audience}</span>
                <h3 className="mt-2 font-bold text-turquoise-deep">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white section-pad">
        <div className="container-px grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Tell us how you'd like to help" title="Start the conversation." />
            <p className="mt-4 leading-relaxed text-body">
              Fill in the form and let us know what you have in mind — our team will follow up to talk
              through the details.
            </p>
            <div className="mt-6">
              <Notice icon="info" tone="green">{donationNote}</Notice>
            </div>
          </div>
          <EnquiryForm enquiryTypes={enquiryTypes} submitLabel="Send Enquiry" />
        </div>
      </section>
    </>
  )
}
