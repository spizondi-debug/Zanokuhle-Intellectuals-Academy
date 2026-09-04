import { BookOpen, PenLine, Calculator, ClipboardCheck, UserCheck, Brain, Library, Handshake } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import ProgrammeCard from '../components/ProgrammeCard.jsx'
import StockPhoto from '../components/StockPhoto.jsx'
import CTABand from '../components/CTABand.jsx'
import { programmesIn } from '../data/programmes.js'
import { seoByPath } from '../data/seo.js'

const offerings = [
  { icon: BookOpen, name: 'Tutoring', text: 'Regular, subject-focused tutoring aligned to the school curriculum.' },
  { icon: PenLine, name: 'Homework support', text: 'Supervised time and support to complete homework properly.' },
  { icon: Library, name: 'Reading support', text: 'Structured support that builds reading confidence and comprehension.' },
  { icon: Calculator, name: 'Numeracy support', text: 'Practical support that strengthens number skills and problem-solving.' },
  { icon: ClipboardCheck, name: 'Exam preparation', text: 'Focused revision and technique ahead of school assessments.' },
  { icon: UserCheck, name: 'Learner mentorship', text: 'A consistent mentor relationship alongside academic support.' },
  { icon: Brain, name: 'Study skills', text: 'Practical study habits and time-management skills learners can reuse.' },
  { icon: Handshake, name: 'Parent & school collaboration', text: 'Support planned and reviewed together with parents and teachers.' },
]

export default function EducationAfterSchool() {
  const related = programmesIn('education')
  const seo = seoByPath['/programmes/education-after-school']

  return (
    <>
      <SEO title={seo.title} description={seo.description} path="/programmes/education-after-school" breadcrumb={seo.breadcrumb} />
      <PageHeader
        eyebrow="Programme area"
        title="Education & After-School Programmes."
        lead="Consistent academic support that keeps learners progressing — tutoring, homework support, mentorship and the resources behind them."
        image="/images/stock-education-classroom-desks.jpg"
        imageWebp="/images/stock-education-classroom-desks.webp"
        imageWebp800w="/images/stock-education-classroom-desks-800w.webp"
        imageWidth={1920}
        imageHeight={1080}
      />

      <section className="section-pad">
        <div className="container-px grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="What we offer" title="Support that meets learners where they are." />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {offerings.map((o) => (
                <div key={o.name} className="flex items-start gap-3">
                  <span className="icon-badge shrink-0 bg-blue-pale text-blue-deep">
                    <o.icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">{o.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-body">{o.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <StockPhoto
            src="/images/stock-education-classroom-desks.jpg"
            webpSrc="/images/stock-education-classroom-desks.webp"
            alt="Learners at desks in a classroom, engaged in a lesson"
            className="min-h-[16rem] rounded-xl lg:min-h-full"
            width={1920}
            height={1080}
          />
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
        title="Help a learner keep pace."
        text="Sponsor a tutoring seat, volunteer as a mentor, or partner with us as a school."
        primary={{ label: 'Get Involved', to: '/get-involved' }}
        secondary={{ label: 'View All Programmes', to: '/programmes' }}
      />
    </>
  )
}
