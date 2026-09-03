import { CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import StockPhoto from '../components/StockPhoto.jsx'
import Notice from '../components/Notice.jsx'
import CTABand from '../components/CTABand.jsx'
import { alexandraOverview, alexandraJourney, alexandraComponents, alexandraMonitoring } from '../data/alexandra.js'

export default function AlexandraProgramme() {
  return (
    <>
      <PageHeader
        eyebrow={`Flagship programme · ${alexandraOverview.duration}`}
        title="Alexandra Learner Advancement Programme."
        lead={alexandraOverview.summary}
      />

      {/* Overview */}
      <section className="section-pad">
        <div className="container-px grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <StockPhoto
            src="/images/stock-alexandra-classroom.jpg"
            alt="Learners seated at desks in a classroom"
            className="min-h-[16rem] rounded-3xl lg:min-h-full"
          />
          <div>
            <SectionHeading eyebrow="Overview" title="A multi-year pathway, not a once-off intervention." />
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-white p-5">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Duration</dt>
                <dd className="mt-1 font-bold text-ink">{alexandraOverview.duration}</dd>
              </div>
              <div className="rounded-2xl border border-line bg-white p-5">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Location</dt>
                <dd className="mt-1 font-bold text-ink">{alexandraOverview.location}</dd>
              </div>
              <div className="rounded-2xl border border-line bg-white p-5 sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Who it serves</dt>
                <dd className="mt-1 font-bold text-ink">{alexandraOverview.servesWho}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Learner journey */}
      <section className="border-y border-line bg-white section-pad">
        <div className="container-px">
          <SectionHeading eyebrow="The learner journey" title="Discover → Learn → Grow → Prepare → Progress." center />
          <div className="relative mt-12 grid gap-8 lg:grid-cols-5 lg:gap-6">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-line lg:block" aria-hidden="true" />
            {alexandraJourney.map((j, i) => (
              <div key={j.stage} className="relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-turquoise-deep text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-blue">{j.stage}</p>
                <h3 className="mt-1 font-bold text-ink">{j.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{j.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme components */}
      <section className="section-pad">
        <div className="container-px">
          <SectionHeading eyebrow="What the programme includes" title="Support across academics, wellbeing and pathways." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {alexandraComponents.map((c) => (
              <div key={c.name} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
                <CheckCircle2 size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-green" aria-hidden="true" />
                <div>
                  <p className="font-bold text-ink">{c.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-body">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring, evaluation and sustainability */}
      <section className="border-t border-line bg-white section-pad">
        <div className="container-px grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Monitoring & sustainability" title="Built to last, and built to be measured." />
            <p className="mt-5 leading-relaxed text-body">{alexandraMonitoring}</p>
          </div>
          <Notice icon="info" tone="blue">
            Specific targets, budgets and funding commitments for this programme are confirmed with funding
            partners directly and are not stated as final figures on this page until approved.
          </Notice>
        </div>
      </section>

      <CTABand
        title="Help us take this programme further."
        text="The Alexandra Learner Advancement Programme runs on committed, multi-year partnership — as a funder, school or mentor."
        primary={{ label: 'Support This Programme', to: '/get-involved' }}
        secondary={{ label: 'Ask Us a Question', to: '/contact' }}
      />
    </>
  )
}
