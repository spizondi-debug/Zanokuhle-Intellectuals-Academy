import { TrendingUp } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import Notice from '../components/Notice.jsx'
import StockPhoto from '../components/StockPhoto.jsx'
import CTABand from '../components/CTABand.jsx'
import { impactAreas, accountabilityPractices, impactStatement } from '../data/impact.js'
import { seoByPath } from '../data/seo.js'

// Rotates across the tracked-progress cards — kept as complete literal
// class names (not built from a template) so Tailwind's content scanner
// finds them.
const impactAccents = [
  { bg: 'bg-turquoise-pale', text: 'text-turquoise-deep' },
  { bg: 'bg-blue-pale', text: 'text-blue-deep' },
  { bg: 'bg-green-pale', text: 'text-green-deep' },
]

export default function Impact() {
  const seo = seoByPath['/impact']
  return (
    <>
      <SEO title={seo.title} description={seo.description} path="/impact" breadcrumb={seo.breadcrumb} />
      <PageHeader
        eyebrow="Impact & accountability"
        title="How we measure and report our work."
        lead="Real accountability means describing what we track honestly — including where we don't yet have a confirmed figure to share."
        image="/images/stock-impact-boy-writing.jpg"
        imageWidth={1920}
        imageHeight={1536}
      />

      <section className="section-pad">
        <div className="container-px">
          <Notice icon="info" tone="blue">{impactStatement}</Notice>

          <div className="mt-12">
            <SectionHeading eyebrow="What we track" title="The categories behind every programme report." />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {impactAreas.map((a, i) => (
                <div key={a.name} className="card-hover">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${impactAccents[i % 3].bg} ${impactAccents[i % 3].text}`}>
                    <TrendingUp size={16} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-bold text-turquoise-deep">{a.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{a.text}</p>
                  <p className="mt-4 rounded-lg bg-surface-100 px-3 py-2 text-xs font-semibold text-muted">
                    Figures to be added once confirmed
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white section-pad">
        <div className="container-px grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="How we stay accountable" title="Governance behind the numbers." />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {accountabilityPractices.map((a) => (
                <div key={a.name} className="rounded-xl border border-line bg-green-pale/40 p-6">
                  <h3 className="font-bold text-turquoise-deep">{a.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
          <StockPhoto
            src="/images/stock-impact-boy-writing.jpg"
            alt="A child writing and colouring in a notebook"
            className="min-h-[16rem] rounded-xl lg:min-h-full"
            width={1920}
            height={1536}
          />
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
