import SEO from './SEO.jsx'
import PageHeader from './PageHeader.jsx'
import Notice from './Notice.jsx'

/**
 * LegalPage — shared layout for Privacy Policy / Child Safeguarding /
 * Terms of Use. `sections` is an array of { heading, body } — body is
 * either a string (rendered as one paragraph) or an array of strings
 * (rendered as multiple paragraphs), kept as plain data so the legal text
 * itself lives in each page's own file, not mixed into this layout.
 */
export default function LegalPage({ seo, path, breadcrumb, eyebrow, title, lead, sections }) {
  return (
    <>
      <SEO title={seo.title} description={seo.description} path={path} breadcrumb={breadcrumb} />
      <PageHeader eyebrow={eyebrow} title={title} lead={lead} />

      <section className="section-pad">
        <div className="container-px max-w-3xl">
          <Notice icon="info" tone="blue">
            This page is a professional draft, not yet reviewed or formally approved by Zanokuhle
            Intellectuals Academy's board or legal advisors. Treat every specific commitment on it as
            provisional until that review is complete.
          </Notice>

          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-bold text-blue-deep">{s.heading}</h2>
                <div className="mt-3 space-y-3">
                  {(Array.isArray(s.body) ? s.body : [s.body]).map((p, i) => (
                    <p key={i} className="leading-relaxed text-body">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
