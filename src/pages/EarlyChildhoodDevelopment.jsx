import { Sprout, BookOpenText, Calculator, HeartHandshake, Users, House, ShieldCheck } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import ProgrammeCard from '../components/ProgrammeCard.jsx'
import StockPhoto from '../components/StockPhoto.jsx'
import Notice from '../components/Notice.jsx'
import CTABand from '../components/CTABand.jsx'
import { programmesIn } from '../data/programmes.js'
import { SAFEGUARDING_NOTE } from '../data/org.js'
import { seoByPath } from '../data/seo.js'

const pillars = [
  { icon: Sprout, name: 'School readiness', text: 'Structured activities that build the readiness children need before starting formal school.' },
  { icon: BookOpenText, name: 'Early literacy', text: 'Foundational language and pre-reading skills built through age-appropriate activity.' },
  { icon: Calculator, name: 'Early numeracy', text: 'Early number sense and problem-solving built through play-based, hands-on activity.' },
  { icon: HeartHandshake, name: 'Child development', text: 'Support for children’s social, emotional and cognitive development at this stage of life.' },
  { icon: Users, name: 'Support for ECD practitioners', text: 'Practical development for the practitioners and centres already caring for young children.' },
  { icon: House, name: 'Parent & caregiver support', text: 'Guidance that helps parents and caregivers extend learning at home.' },
]

export default function EarlyChildhoodDevelopment() {
  const related = programmesIn('ecd')
  const seo = seoByPath['/programmes/early-childhood-development']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path="/programmes/early-childhood-development"
        breadcrumb={seo.breadcrumb}
      />
      <PageHeader
        eyebrow="Programme area"
        title="Early Childhood Development."
        lead="Giving young children the early foundations they need — and supporting the practitioners, parents and caregivers around them."
        image="/images/ecd-child-painting.jpg"
        imageWidth={1280}
        imageHeight={1920}
      />

      <section className="section-pad">
        <div className="container-px grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our focus" title="Building foundations before formal school." />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.name} className="card-hover">
                  <span className="icon-badge bg-turquoise-pale text-turquoise-deep">
                    <p.icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-bold text-turquoise-deep">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
          <StockPhoto
            src="/images/ecd-child-painting.jpg"
            alt="A young child painting during an early-learning activity"
            className="min-h-[16rem] rounded-xl lg:min-h-full"
            width={1280}
            height={1920}
          />
        </div>
      </section>

      <section className="border-y border-line bg-white section-pad">
        <div className="container-px grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="icon-badge bg-blue-pale text-blue-deep">
              <ShieldCheck size={18} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-turquoise-deep">Safe, nurturing learning environments</h3>
            <p className="mt-3 leading-relaxed text-body">
              Every activity is delivered in a setting screened for safety and supervised by trained
              facilitators or practitioners. We do not make specific developmental or medical claims about
              outcomes for individual children — our role is to provide consistent, well-run early-learning
              opportunity, alongside the professionals and caregivers already responsible for a child's care.
            </p>
          </div>
          <Notice icon="shield" tone="blue">{SAFEGUARDING_NOTE}</Notice>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad">
          <div className="container-px">
            <SectionHeading eyebrow="Related programmes" title="Programmes in this focus area." />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProgrammeCard key={p.slug} programme={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title="Partner with us on early learning."
        text="Schools, ECD centres and funders can all play a role in giving children a stronger start."
        primary={{ label: 'Get Involved', to: '/get-involved' }}
        secondary={{ label: 'View All Programmes', to: '/programmes' }}
      />
    </>
  )
}
