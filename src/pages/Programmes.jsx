import { useState } from 'react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ProgrammeCard from '../components/ProgrammeCard.jsx'
import CTABand from '../components/CTABand.jsx'
import { categories, programmes } from '../data/programmes.js'
import { seoByPath } from '../data/seo.js'
import { imagePath } from '../lib/assetPath.js'

export default function Programmes() {
  const [active, setActive] = useState('all')
  const shown = active === 'all' ? programmes : programmes.filter((p) => p.category === active)
  const seo = seoByPath['/programmes']

  return (
    <>
      <SEO title={seo.title} description={seo.description} path="/programmes" breadcrumb={seo.breadcrumb} />
      <PageHeader
        eyebrow="Our programmes"
        title="Practical pathways, by focus area."
        lead="Every programme is a structured response to a real gap — filter by focus area to explore what we do and who it serves."
        image={imagePath('/images/stock-hero-learners-smiling.jpg')}
        imageWebp={imagePath('/images/stock-hero-learners-smiling.webp')}
        imageWebp800w={imagePath('/images/stock-hero-learners-smiling-800w.webp')}
        imageWidth={1280}
        imageHeight={1920}
      />

      <section className="section-pad">
        <div className="container-px">
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setActive('all')}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active === 'all' ? 'border-purple bg-purple text-white' : 'border-line bg-white text-body hover:border-purple'
              }`}
            >
              All Programmes
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => setActive(c.slug)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active === c.slug ? 'border-purple bg-purple text-white' : 'border-line bg-white text-body hover:border-purple'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <ProgrammeCard key={p.slug} programme={p} />
            ))}
          </div>

          {shown.length === 0 && (
            <p className="mt-10 text-center text-body">No programmes listed in this focus area yet.</p>
          )}
        </div>
      </section>

      <CTABand
        title="Not sure which programme fits?"
        text="Tell us about your learner, school or community and we'll point you to the right pathway."
        primary={{ label: 'Get in Touch', to: '/contact' }}
        secondary={{ label: 'Get Involved', to: '/get-involved' }}
      />
    </>
  )
}
