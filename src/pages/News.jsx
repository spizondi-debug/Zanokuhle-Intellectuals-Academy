import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx'
import StockPhoto from '../components/StockPhoto.jsx'
import { newsItems, publications } from '../data/news.js'
import { seoByPath } from '../data/seo.js'

export default function News() {
  const seo = seoByPath['/news']
  return (
    <>
      <SEO title={seo.title} description={seo.description} path="/news" breadcrumb={seo.breadcrumb} />
      <PageHeader
        eyebrow="News & stories"
        title="What's happening at Zanokuhle."
        lead="Programme updates, learner stories, community activity and reports — published only with the right consent in place."
        image="/images/stock-news-community-hands.jpg"
        imageWebp="/images/stock-news-community-hands.webp"
        imageWebp800w="/images/stock-news-community-hands-800w.webp"
        imageWidth={1920}
        imageHeight={1280}
      />

      <section className="section-pad">
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2">
            {newsItems.map((item) => (
              <article key={item.slug} className="card overflow-hidden">
                {item.image ? (
                  <div className="relative">
                    <StockPhoto
                      src={item.image.src}
                      webpSrc={item.image.webpSrc}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      className="h-40 w-full"
                    />
                    {item.image.illustrative && (
                      <span className="absolute bottom-2 right-2 rounded-full bg-ink/80 px-2.5 py-1 text-[0.65rem] font-semibold text-white">
                        Illustrative photo
                      </span>
                    )}
                  </div>
                ) : (
                  <PhotoPlaceholder label="Photography placeholder" tone="turquoise" className="h-40 w-full" />
                )}
                <div className="p-6">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-blue">{item.category}</span>
                  <h3 className="mt-2 font-bold text-turquoise-deep">{item.title}</h3>
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
              <div key={p.name} className="flex items-center justify-between rounded-xl border border-line bg-surface-50 p-6">
                <div>
                  <h3 className="font-bold text-turquoise-deep">{p.name}</h3>
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
