import { Laptop2, Code2, Compass, Briefcase, Rocket, Trophy, Sparkles, Users2, Leaf } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import ProgrammeCard from '../components/ProgrammeCard.jsx'
import StockPhoto from '../components/StockPhoto.jsx'
import CTABand from '../components/CTABand.jsx'
import { programmes } from '../data/programmes.js'
import { seoByPath } from '../data/seo.js'
import { imagePath } from '../lib/assetPath.js'

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
  const seo = seoByPath['/programmes/skills-and-youth-development']

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        path="/programmes/skills-and-youth-development"
        breadcrumb={seo.breadcrumb}
      />
      <PageHeader
        eyebrow="Programme area"
        title="Skills & Youth Development."
        lead="Digital literacy, career readiness, entrepreneurship and leadership — practical skills that open real pathways beyond school."
        image={imagePath('/images/stock-skills-coding-robotics.jpg')}
        imageWebp={imagePath('/images/stock-skills-coding-robotics.webp')}
        imageWebp800w={imagePath('/images/stock-skills-coding-robotics-800w.webp')}
        imageWidth={1920}
        imageHeight={1280}
      />

      <section className="section-pad">
        <div className="container-px grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <StockPhoto
            src={imagePath('/images/stock-skills-coding-robotics.jpg')}
            webpSrc={imagePath('/images/stock-skills-coding-robotics.webp')}
            alt="Young people working together on a coding and robotics project"
            className="min-h-[16rem] rounded-xl lg:min-h-full"
            width={1920}
            height={1280}
          />
          <div>
            <SectionHeading eyebrow="What we offer" title="Skills that translate into real opportunity." />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {areas.map((a) => (
                <div key={a.name} className="flex items-start gap-3">
                  <span className="icon-badge shrink-0 bg-orange-pale text-orange-deep">
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
