import { Laptop2, Code2, Compass, Briefcase, Rocket, Trophy, Sparkles, Users2, Leaf } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import ProgrammeCard from '../components/ProgrammeCard.jsx'
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx'
import CTABand from '../components/CTABand.jsx'
import { programmes } from '../data/programmes.js'

const areas = [
  { icon: Laptop2, name: 'Digital literacy', text: 'Foundational, confident use of everyday digital tools.' },
  { icon: Code2, name: 'Coding & technology exposure', text: 'An introduction to coding and computational thinking.' },
  { icon: Compass, name: 'Career guidance', text: 'Practical guidance on realistic career and study pathways.' },
  { icon: Briefcase, name: 'Work readiness', text: 'CV, interview and workplace-conduct preparation.' },
  { icon: Rocket, name: 'Entrepreneurship', text: 'An introduction to enterprise and small-business fundamentals.' },
  { icon: Trophy, name: 'Leadership development', text: 'Structured opportunities to build and practise leadership.' },
  { icon: Sparkles, name: 'Life skills', text: 'Practical skills for confidence, resilience and self-management.' },
  { icon: Users2, name: 'Community project exposure', text: 'Hands-on involvement in real community initiatives.' },
  { icon: Leaf, name: 'Sustainable livelihood pathways', text: 'Support aimed at a genuine, sustainable next step — not a single event.' },
]

const relevantSlugs = ['youth', 'skills', 'career', 'digital', 'entrepreneurship']

export default function SkillsAndYouthDevelopment() {
  const related = programmes.filter((p) => relevantSlugs.includes(p.category))

  return (
    <>
      <PageHeader
        eyebrow="Programme area"
        title="Skills & Youth Development."
        lead="Digital literacy, career readiness, entrepreneurship and leadership — practical skills that open real pathways beyond school."
      />

      <section className="section-pad">
        <div className="container-px grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <PhotoPlaceholder label="Photography placeholder" tone="gold" className="min-h-[16rem] rounded-3xl lg:min-h-full" />
          <div>
            <SectionHeading eyebrow="What we offer" title="Skills that translate into real opportunity." />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {areas.map((a) => (
                <div key={a.name} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-pale text-gold-deep">
                    <a.icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">{a.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-body">{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-white section-pad">
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
        title="Open a door for a young person."
        text="Mentor, sponsor a workshop series, or bring your industry experience into a career-guidance session."
        primary={{ label: 'Get Involved', to: '/get-involved' }}
        secondary={{ label: 'View All Programmes', to: '/programmes' }}
      />
    </>
  )
}
