import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, BookOpen, Laptop2, Users2, TrendingUp } from 'lucide-react'
import StockPhoto from '../components/StockPhoto.jsx'
import { SectionHeading, Accent } from '../components/Section.jsx'
import CTABand from '../components/CTABand.jsx'
import ProgrammeCard from '../components/ProgrammeCard.jsx'
import { focusAreas, howWeCreateChange } from '../data/focusAreas.js'
import { programmes } from '../data/programmes.js'
import { impactAreas } from '../data/impact.js'

const focusIcons = [GraduationCap, BookOpen, Laptop2, Users2]
// One signature accent per focus area, matching each area's own
// programme page (see EarlyChildhoodDevelopment/EducationAfterSchool/
// SkillsAndYouthDevelopment/SocialAndCommunityDevelopment) — kept as
// complete literal class names so Tailwind's content scanner finds them.
const focusAccents = [
  { bg: 'bg-turquoise-pale', text: 'text-turquoise-deep' },
  { bg: 'bg-blue-pale', text: 'text-blue-deep' },
  { bg: 'bg-orange-pale', text: 'text-orange-deep' },
  { bg: 'bg-pink-pale', text: 'text-pink-deep' },
]
// Rotates across the tracked-progress cards — kept as complete literal
// class names (not built from a template) so Tailwind's content scanner
// finds them.
const impactAccents = [
  { bg: 'bg-turquoise-pale', text: 'text-turquoise-deep' },
  { bg: 'bg-blue-pale', text: 'text-blue-deep' },
  { bg: 'bg-green-pale', text: 'text-green-deep' },
]

const alexandra = programmes.find((p) => p.slug === 'alexandra-learner-advancement')

const partnerAudiences = [
  { name: 'Funders & Foundations', text: 'Multi-year, accountable partnerships around a programme area or specific initiative.' },
  { name: 'Corporates', text: 'CSI partnerships and programme sponsorship aligned with measurable community impact.' },
  { name: 'Schools', text: 'Bring tutoring, mentorship and ECD support directly into your school community.' },
  { name: 'Volunteers', text: 'Give your time as a tutor, mentor or programme volunteer.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-turquoise-deep">
        <div className="container-px relative grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-yellow-light">Zanokuhle Intellectuals Academy</p>
            <h1 className="mt-4 text-display font-bold text-white">
              Building brighter futures through <Accent light>learning, opportunity and community</Accent>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Zanokuhle Intellectuals Academy creates practical pathways for children, young people and
              underserved communities to learn, grow and participate in a stronger future.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/get-involved" className="btn bg-white text-blue-deep shadow-soft hover:bg-surface-100">
                Support Our Work
              </Link>
              <Link to="/programmes" className="btn btn-outline-light">
                Explore Our Programmes
              </Link>
            </div>
          </div>
          <StockPhoto
            src="/images/stock-hero-learners-smiling.jpg"
            alt="Children smiling together outdoors"
            className="min-h-[18rem] rounded-3xl lg:min-h-full"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad">
        <div className="container-px">
          <SectionHeading
            eyebrow="Who we are"
            title="A South African NPO building real pathways, not once-off interventions."
            lead="Zanokuhle Intellectuals Academy is a registered Non-Profit Organisation and Non-Profit Company working in early childhood development, education support, youth and skills development, and community development — starting in Alexandra, Johannesburg, and built to grow with the communities we serve."
          />
        </div>
      </section>

      {/* Four focus areas */}
      <section className="border-y border-line bg-white section-pad">
        <div className="container-px">
          <SectionHeading eyebrow="What we do" title="Four focus areas, one goal: real opportunity." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((a, i) => {
              const Icon = focusIcons[i]
              return (
                <Link key={a.name} to={a.href} className="card group flex h-full flex-col p-6 transition-colors hover:border-turquoise hover:shadow-lift">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${focusAccents[i].bg} ${focusAccents[i].text}`}>
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-bold text-ink">{a.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{a.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-deep">
                    Learn more
                    <ArrowRight size={14} strokeWidth={2.2} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How we create change */}
      <section className="section-pad">
        <div className="container-px">
          <SectionHeading eyebrow="Our approach" title="How we create change." />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howWeCreateChange.map((s) => (
              <div key={s.step} className="border-t-2 border-turquoise pt-5">
                <span className="text-sm font-bold text-blue">{s.step}</span>
                <h3 className="mt-2 font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured programme */}
      <section className="border-y border-line bg-blue-pale/40 section-pad">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <StockPhoto
            src="/images/stock-featured-programme-children.jpg"
            alt="A group of children laughing together"
            className="min-h-[16rem] rounded-3xl lg:min-h-[22rem]"
          />
          <div>
            <p className="eyebrow">Featured programme</p>
            <h2 className="mt-4 text-section font-bold text-ink">{alexandra.name}</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">{alexandra.summary}</p>
            <ul className="mt-5 space-y-2">
              {alexandra.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm text-body">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
            <Link to={alexandra.href} className="btn btn-secondary mt-7">
              Explore This Programme
            </Link>
          </div>
        </div>
      </section>

      {/* Impact / progress, no invented numbers */}
      <section className="section-pad">
        <div className="container-px">
          <SectionHeading
            eyebrow="Accountability"
            title="How we track our progress."
            lead="We report honestly on what we measure — not on figures we haven't yet confirmed. Here is what we track across our programmes."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {impactAreas.slice(0, 3).map((a, i) => (
              <div key={a.name} className="rounded-2xl border border-line bg-white p-6 transition-colors hover:border-turquoise">
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${impactAccents[i].bg} ${impactAccents[i].text}`}>
                  <TrendingUp size={16} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-bold text-ink">{a.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{a.text}</p>
              </div>
            ))}
          </div>
          <Link to="/impact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-deep hover:text-blue">
            See our full approach to impact and accountability
            <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Partner with us */}
      <section className="border-t border-line bg-white section-pad">
        <div className="container-px">
          <SectionHeading eyebrow="Partner with us" title="Built to work alongside funders, schools and volunteers." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerAudiences.map((p) => (
              <div key={p.name} className="rounded-2xl border border-line bg-surface-50 p-6">
                <h3 className="font-bold text-ink">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{p.text}</p>
              </div>
            ))}
          </div>
          <Link to="/get-involved" className="btn btn-primary mt-8">
            See How to Get Involved
          </Link>
        </div>
      </section>

      <CTABand
        eyebrow="Support our work"
        title="Help build a brighter future, one learner at a time."
        text="Whether you give, partner or volunteer, your support becomes a real pathway for a child or young person."
        primary={{ label: 'Support Our Work', to: '/get-involved' }}
        secondary={{ label: 'Explore Our Programmes', to: '/programmes' }}
      />
    </>
  )
}
