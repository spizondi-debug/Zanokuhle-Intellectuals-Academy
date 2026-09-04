import LegalPage from '../components/LegalPage.jsx'
import { CONTACT, ORG_NAME } from '../data/org.js'
import { seoByPath } from '../data/seo.js'

const sections = [
  {
    heading: 'Acceptance of these terms',
    body: `By using this website, you agree to these Terms of Use. If you do not agree with them, please do not use this site.`,
  },
  {
    heading: 'Use of this site',
    body: `This site is provided for information about ${ORG_NAME}'s programmes and work, and to let visitors get in touch, enquire about donating, volunteering or partnering, and learn about our impact and governance. You agree not to use it in a way that could damage, disable or impair it, or interfere with anyone else's use of it.`,
  },
  {
    heading: 'Intellectual property',
    body: 'The Zanokuhle Intellectuals Academy name, logo and the content of this site (text, images and design) belong to Zanokuhle or are used with permission, except where a different source is credited. You may view and share pages of this site for personal, non-commercial purposes; reproducing our logo or content elsewhere requires our prior written permission.',
  },
  {
    heading: 'Accuracy of information',
    body: 'We try to keep this site accurate and current, particularly registration, contact and programme information, but we do not guarantee that every detail is complete or up to date at all times. Where this site is silent on a figure, claim or partnership, that is deliberate — see our Impact & Accountability page for how we handle information we have not yet confirmed.',
  },
  {
    heading: 'External links',
    body: 'This site may link to external websites (for example, a payment processor once one is connected). We are not responsible for the content, accuracy or privacy practices of external sites we link to.',
  },
  {
    heading: 'No warranty; limitation of liability',
    body: 'This site is provided "as is". PLACEHOLDER — a full liability disclaimer and limitation-of-liability clause should be reviewed and finalised by Zanokuhle\'s legal advisors before this page is treated as final; in the meantime, to the fullest extent permitted by law, Zanokuhle is not liable for any loss or damage arising from your use of this site.',
  },
  {
    heading: 'Governing law',
    body: 'These terms are governed by the laws of the Republic of South Africa.',
  },
  {
    heading: 'Changes to these terms',
    body: 'We may update these terms as the site changes. The version on this page is always the current one.',
  },
  {
    heading: 'Contact',
    body: `Questions about these terms can be sent to ${CONTACT.email} or via the Contact page.`,
  },
]

export default function TermsOfUse() {
  return (
    <LegalPage
      seo={seoByPath['/terms-of-use']}
      path="/terms-of-use"
      breadcrumb={seoByPath['/terms-of-use'].breadcrumb}
      eyebrow="Legal"
      title="Terms of Use."
      lead="The terms that apply to using this website."
      sections={sections}
    />
  )
}
