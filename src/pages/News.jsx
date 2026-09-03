import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import Notice from '../components/Notice.jsx'
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx'
import StockPhoto from '../components/StockPhoto.jsx'
import { newsItems, publications } from '../data/news.js'

export default function News() {
  return (
    <>
      <PageHeader
        eyebrow="News & stories"
        title="What's happening at Zanokuhle."
        lead="Programme updates, learner stories, community activity and reports — published only with the right consent in place."
      />

      <section className="section-pad">
        <div className="container-px">
          <Notice icon="shield" tone="blue">
            Content guidance: any photograph, name or personal story involving a child or minor learner is
            published only with the documented, informed consent of a parent or guardian. Placeholder
            entries below must not be replaced with a real child's story or image until that consent is
            confirmed and on file.
          </Notice>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {newsItems.map((item) => (
              <article key={item.slug} className="card overflow-hidden">
                {item.image ? (
                  <StockPhoto src={item.image.src} alt={item.image.alt} className="h-40 w-full" />
                ) : (
                  <PhotoPlaceholder label="Photography placeholder" tone="turquoise" className="h-40 w-full" />
                )}
                <div className="p-6">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-blue">{item.category}</span>
                  <h3 className="mt-2 font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white section-pad">
        <div className="container-px">
          <SectionHeading eyebrow="Reports & publications" title="Where we'll publish our reporting." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {publications.map((p) => (
              <div key={p.name} className="flex items-center justify-between rounded-2xl border border-line bg-surface-50 p-6">
                <div>
                  <h3 className="font-bold text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-body">{p.text}</p>
                </div>
                <span className="shrink-0 rounded-full bg-pink-pale px-3 py-1 text-xs font-semibold text-pink-deep">
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
