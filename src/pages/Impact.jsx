import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import Notice from '../components/Notice.jsx'
import CTABand from '../components/CTABand.jsx'
import { impactAreas, accountabilityPractices, impactStatement } from '../data/impact.js'

export default function Impact() {
  return (
    <>
      <PageHeader
        eyebrow="Impact & accountability"
        title="How we measure and report our work."
        lead="Real accountability means describing what we track honestly — including where we don't yet have a confirmed figure to share."
      />

      <section className="section-pad">
        <div className="container-px">
          <Notice icon="info" tone="blue">{impactStatement}</Notice>

          <div className="mt-12">
            <SectionHeading eyebrow="What we track" title="The categories behind every programme report." />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {impactAreas.map((a) => (
                <div key={a.name} className="rounded-2xl border border-line bg-white p-6">
                  <h3 className="font-bold text-ink">{a.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{a.text}</p>
                  <p className="mt-4 rounded-lg bg-sand-100 px-3 py-2 text-xs font-semibold text-muted">
                    Figures to be added once confirmed
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white section-pad">
        <div className="container-px">
          <SectionHeading eyebrow="How we stay accountable" title="Governance behind the numbers." />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {accountabilityPractices.map((a) => (
              <div key={a.name} className="rounded-2xl border border-line bg-green-pale/40 p-6">
                <h3 className="font-bold text-ink">{a.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Want the full picture before you partner with us?"
        text="Funding partners and schools can request detailed reporting and governance documentation directly."
        primary={{ label: 'Contact Us', to: '/contact' }}
        secondary={{ label: 'Become a Funding Partner', to: '/get-involved#partner' }}
      />
    </>
  )
}
