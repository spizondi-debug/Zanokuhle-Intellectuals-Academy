import LegalPage from '../components/LegalPage.jsx'
import { CONTACT } from '../data/org.js'
import { seoByPath } from '../data/seo.js'

const sections = [
  {
    heading: 'What this policy covers',
    body: 'This policy explains what personal information Zanokuhle Intellectuals Academy NPC ("Zanokuhle", "we", "us") collects through this website, why, and what choices you have about it. It applies to this website only — it does not cover information collected in person (e.g. during a programme) or through channels other than this site.',
  },
  {
    heading: 'Information we collect',
    body: [
      'When you submit an enquiry form on this site, we collect what you enter: your name, email address, and message, plus phone number and organisation if you provide them, along with the type of enquiry you select.',
      'This site does not currently require account creation, and does not collect payment information — no online payment is processed through this site (see the Get Involved page).',
      'Once analytics are connected (see Cookies and analytics below), we also receive aggregate, non-identifying information about how visitors use the site — pages viewed, general location at country/city level, device type — through Google Analytics.',
    ],
  },
  {
    heading: 'How we use your information',
    body: 'Information submitted through an enquiry form is used only to respond to that enquiry and to follow up on it — for example, to discuss a donation, a volunteering enquiry, or a partnership. We do not sell personal information, and we do not share it with third parties except where needed to respond to your enquiry (for example, a form-submission service that delivers your message to our inbox — see How enquiries are delivered) or where required by law.',
  },
  {
    heading: 'How enquiries are delivered',
    body: 'Enquiry form submissions are sent through a third-party form-delivery service to reach our inbox (the specific service is confirmed at the same time this site is connected to a live inbox — see the technical documentation for details). That service processes the content of your submission solely to deliver it to us and does not use it for any other purpose on our instruction.',
  },
  {
    heading: "Children's information",
    body: 'This site is intended for parents, guardians, schools, funders, volunteers and members of the public — it is not designed to collect information directly from children. Our approach to photographs, names and stories involving children and young people in our programmes is covered separately in our Child Safeguarding Policy, not by this website privacy policy.',
  },
  {
    heading: 'Cookies and analytics',
    body: 'This site does not use advertising or tracking cookies. Once Google Analytics 4 is connected (it is not live on every deployment of this site — see the technical documentation), it uses its own cookies to measure site usage in aggregate; you can opt out of Google Analytics tracking generally using Google\'s official browser opt-out tools.',
  },
  {
    heading: 'How long we keep information',
    body: 'PLACEHOLDER — a specific retention period for enquiry submissions has not yet been confirmed by Zanokuhle. Until it is, information submitted through this site is kept only for as long as reasonably needed to respond to and resolve your enquiry.',
  },
  {
    heading: 'Your rights',
    body: `Under South Africa's Protection of Personal Information Act (POPIA), you have the right to ask what personal information we hold about you, to ask us to correct it, and to ask us to delete it, subject to any legal requirement that we retain it. To exercise any of these rights, contact us at ${CONTACT.email}.`,
  },
  {
    heading: 'Changes to this policy',
    body: 'We may update this policy as the site and our processes change. The version on this page is always the current one; it does not maintain a change history.',
  },
  {
    heading: 'Contact',
    body: `Questions about this policy or about your personal information can be sent to ${CONTACT.email} or via the Contact page.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalPage
      seo={seoByPath['/privacy-policy']}
      path="/privacy-policy"
      breadcrumb={seoByPath['/privacy-policy'].breadcrumb}
      eyebrow="Legal"
      title="Privacy Policy."
      lead="How Zanokuhle Intellectuals Academy handles personal information submitted through this website."
      sections={sections}
    />
  )
}
