import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import Notice from '../components/Notice.jsx'
import StockPhoto from '../components/StockPhoto.jsx'
import CTABand from '../components/CTABand.jsx'
import { seoByPath } from '../data/seo.js'
import {
  story,
  mission,
  vision,
  values,
  governanceNote,
  communityLedApproach,
  COMPLIANCE_NOTE,
  SAFEGUARDING_NOTE,
  REGISTRATION,
} from '../data/org.js'

export default function About() {
  const seo = seoByPath['/about']
  return (
    <>
      <SEO title={seo.title} description={seo.description} path="/about" pageType="AboutPage" breadcrumb={seo.breadcrumb} />
      <PageHeader
        eyebrow="About Zanokuhle"
        title="Who we are."
        lead="A South African Non-Profit Organisation and Non-Profit Company building practical pathways in learning, opportunity and community."
        image="/images/stock-contact-classroom-portrait.jpg"
        imageWidth={1920}
        imageHeight={1280}
      />

      {/* Story */}
      <section className="section-pad">
        <div className="container-px grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our story" title="Why Zanokuhle exists." />
            <div className="mt-6 space-y-4">
              {story.map((p, i) => (
                <p key={i} className="leading-relaxed text-body">{p}</p>
              ))}
            </div>
          </div>
          <StockPhoto
            src="/images/stock-about-learners-uniform.jpg"
            alt="Two school learners in uniform smiling"
            className="min-h-[16rem] rounded-3xl lg:min-h-full"
            width={1920}
            height={1601}
          />
        </div>
      </section>

      {/* Mission & vision */}
      <section className="border-y border-line bg-white section-pad">
        <div className="container-px grid gap-8 sm:grid-cols-2">
          <div className="rounded-3xl border border-line bg-turquoise-pale/50 p-8">
            <p className="eyebrow">Our mission</p>
            <p className="mt-4 text-lg leading-relaxed text-ink">{mission}</p>
          </div>
          <div className="rounded-3xl border border-line bg-blue-pale/50 p-8">
            <p className="eyebrow">Our vision</p>
            <p className="mt-4 text-lg leading-relaxed text-ink">{vision}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="container-px">
          <SectionHeading eyebrow="Our values" title="What guides how we work." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.name} className="card-hover">
                <span className="text-xs font-bold text-blue">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-bold text-turquoise-deep">{v.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance, community-led approach, safeguarding, compliance */}
      <section className="border-t border-line bg-white section-pad">
        <div className="container-px grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Governance" title="Responsible stewardship." />
            <p className="mt-5 leading-relaxed text-body">{governanceNote}</p>

            <h3 className="mt-8 font-bold text-turquoise-deep">A community-led approach</h3>
            <p className="mt-3 leading-relaxed text-body">{communityLedApproach}</p>
          </div>

          <div className="space-y-5">
            <Notice icon="shield" tone="blue">{SAFEGUARDING_NOTE}</Notice>
            <Notice icon="info" tone="green">{COMPLIANCE_NOTE}</Notice>
            <div className="rounded-2xl border border-line bg-surface-50 p-6 text-sm text-body">
              <p className="font-semibold text-ink">Registration</p>
              <p className="mt-2">NPO registration number: {REGISTRATION.npo}</p>
              <p>NPC registration number: {REGISTRATION.npc}</p>
              <p className="mt-3 text-xs text-muted">
                Zanokuhle does not claim formal accreditation, government endorsement, tax-deductible
                (Section 18A) status or named institutional partnerships beyond what is stated on this
                site and confirmed in writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Get to know the work behind the mission."
        text="Explore our programmes, or get in touch to talk about how we could work together."
        primary={{ label: 'Explore Our Programmes', to: '/programmes' }}
        secondary={{ label: 'Contact Us', to: '/contact' }}
      />
    </>
  )
}
