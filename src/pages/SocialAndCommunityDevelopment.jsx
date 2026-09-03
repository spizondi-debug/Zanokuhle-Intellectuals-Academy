import { Users, HeartHandshake, GraduationCap, Scale, Megaphone, Handshake } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import ProgrammeCard from '../components/ProgrammeCard.jsx'
import StockPhoto from '../components/StockPhoto.jsx'
import CTABand from '../components/CTABand.jsx'
import { programmesIn } from '../data/programmes.js'

const pillars = [
  { icon: Users, name: 'Underserved communities', text: 'Support directed toward communities most often left without consistent resources.' },
  { icon: HeartHandshake, name: 'Youth & women’s empowerment', text: 'Opportunity-building that expands what is possible for young people and women.' },
  { icon: GraduationCap, name: 'Community learning', text: 'Learning opportunities that extend beyond the classroom into the wider community.' },
  { icon: Scale, name: 'Inclusive opportunity', text: 'Access designed for those who are usually excluded from it.' },
  { icon: Megaphone, name: 'Social participation', text: 'Encouraging communities to participate actively in their own development.' },
  { icon: Handshake, name: 'Community partnerships', text: 'Working with, not around, existing community leadership and structures.' },
]

export default function SocialAndCommunityDevelopment() {
  const related = programmesIn('community')

  return (
    <>
      <PageHeader
        eyebrow="Programme area"
        title="Social & Community Development."
        lead="We work alongside communities — not for them — so that opportunity and support reach further than any one learner or classroom."
      />

      <section className="section-pad">
        <div className="container-px">
          <SectionHeading eyebrow="Our approach" title="Dignity-led community development." />
          <p className="mt-4 max-w-2xl leading-relaxed text-body">
            We describe the people and communities we work with by their strengths, participation and
            potential — never through pity or deficit framing. Community development at Zanokuhle means
            building on what already exists, in partnership with the people who live there.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.name} className="rounded-2xl border border-line bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-pale text-green-deep">
                  <p.icon size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-bold text-ink">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white section-pad">
        <div className="container-px">
          <StockPhoto
            src="stock-community-playground.jpg"
            alt="A child at a community playground"
            className="min-h-[16rem] rounded-3xl lg:min-h-[20rem]"
          />
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
        title="Invest in the whole community, not just the classroom."
        text="Community development partnerships help this work reach further and last longer."
        primary={{ label: 'Get Involved', to: '/get-involved' }}
        secondary={{ label: 'View All Programmes', to: '/programmes' }}
      />
    </>
  )
}
