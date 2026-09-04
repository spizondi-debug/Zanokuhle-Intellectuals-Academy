import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SectionHeading } from '../components/Section.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import Notice from '../components/Notice.jsx'
import StockPhoto from '../components/StockPhoto.jsx'
import { involvementPathways, enquiryTypes, donationNote } from '../data/getInvolved.js'
import { EFT_DETAILS, PAYMENT_LINK_URL } from '../data/support.js'
import { seoByPath } from '../data/seo.js'
import { imagePath } from '../lib/assetPath.js'

export default function GetInvolved() {
  const seo = seoByPath['/get-involved']
  return (
    <>
      <SEO title={seo.title} description={seo.description} path="/get-involved" breadcrumb={seo.breadcrumb} />
      <PageHeader
        eyebrow="Get involved"
        title="There is a role here for you."
        lead="Whether you give, partner, volunteer or open a door for a young person, your support becomes a real, structured pathway — not a one-off gesture."
        image={imagePath('/images/stock-getinvolved-children-playing.jpg')}
        imageWebp={imagePath('/images/stock-getinvolved-children-playing.webp')}
        imageWebp800w={imagePath('/images/stock-getinvolved-children-playing-800w.webp')}
        imageWidth={1536}
        imageHeight={1920}
      />

      <section className="section-pad">
        <div className="container-px">
          <SectionHeading eyebrow="Ways to support Zanokuhle" title="Choose the way that fits you." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {involvementPathways.map((p) => (
              <div key={p.id} id={p.id} className="card-hover scroll-mt-28">
                <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-blue">{p.audience}</span>
                <h3 className="mt-2 font-bold text-turquoise-deep">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white section-pad">
        <div className="container-px">
          <StockPhoto
            src={imagePath('/images/stock-getinvolved-children-playing.jpg')}
            webpSrc={imagePath('/images/stock-getinvolved-children-playing.webp')}
            alt="Children playing together outdoors"
            className="min-h-[16rem] rounded-xl lg:min-h-[20rem]"
            width={1536}
            height={1920}
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-px grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Tell us how you'd like to help" title="Start the conversation." />
            <p className="mt-4 leading-relaxed text-body">
              Fill in the form and let us know what you have in mind — our team will follow up to talk
              through the details.
            </p>
            <div className="mt-6 space-y-4">
              <Notice icon="info" tone="green">{donationNote}</Notice>
              {PAYMENT_LINK_URL && (
                <a href={PAYMENT_LINK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">
                  Give Securely Online
                </a>
              )}
              {EFT_DETAILS && (
                <div className="card-hover">
                  <h3 className="font-bold text-turquoise-deep">EFT donation details</h3>
                  <dl className="mt-3 space-y-1.5 text-sm text-body">
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Account name</dt>
                      <dd className="font-semibold text-ink">{EFT_DETAILS.accountName}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Bank</dt>
                      <dd className="font-semibold text-ink">{EFT_DETAILS.bank}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Account type</dt>
                      <dd className="font-semibold text-ink">{EFT_DETAILS.accountType}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Account number</dt>
                      <dd className="font-semibold text-ink">{EFT_DETAILS.accountNumber}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Branch code</dt>
                      <dd className="font-semibold text-ink">{EFT_DETAILS.branchCode}</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-xs text-muted">{EFT_DETAILS.reference}</p>
                </div>
              )}
            </div>
          </div>
          <EnquiryForm enquiryTypes={enquiryTypes} submitLabel="Send Enquiry" formName="get_involved" />
        </div>
      </section>
    </>
  )
}
