import LegalPage from '../components/LegalPage.jsx'
import { CONTACT, SAFEGUARDING_NOTE } from '../data/org.js'
import { seoByPath } from '../data/seo.js'

const sections = [
  {
    heading: 'Our commitment',
    body: SAFEGUARDING_NOTE,
  },
  {
    heading: 'Photographs, names and stories',
    body: [
      'We only use a photograph, name or personal story involving a child or young person on this website, or in our other communications, with the informed, documented consent of a parent or guardian.',
      'Where we do not have that consent — including for most of the photography currently on this site, which is stock/reference imagery used to illustrate our work rather than photographs of our own learners — we say so, and we do not present it as depicting an identified Zanokuhle learner. Several pages on this site (including the News page) carry a specific note where this applies.',
    ],
  },
  {
    heading: 'How we work with children and young people',
    body: 'Programmes are planned and delivered by staff and facilitators, in settings intended to be safe and appropriately supervised, and in partnership with the schools, parents, caregivers and community structures already responsible for a child\'s care — we do not position ourselves as a replacement for that care. PLACEHOLDER — specific procedural commitments (for example, staff vetting, reporting escalation steps, or a named designated safeguarding lead) are confirmed by Zanokuhle\'s board before being stated here as fact.',
  },
  {
    heading: 'Reporting a concern',
    body: `If you have a safeguarding concern involving Zanokuhle — about a programme, a member of staff, or anything connected to our work with children or young people — please contact us directly at ${CONTACT.email} or ${CONTACT.phone}. PLACEHOLDER — a dedicated, confidential reporting channel (separate from general enquiries) is expected to be confirmed and published here once established.`,
  },
  {
    heading: 'Related policy',
    body: 'This page explains our safeguarding commitment as it appears on this website. It works alongside, and does not replace, Zanokuhle\'s full internal safeguarding policy — see our Privacy Policy for how personal information generally is handled on this site.',
  },
]

export default function Safeguarding() {
  return (
    <LegalPage
      seo={seoByPath['/safeguarding']}
      path="/safeguarding"
      breadcrumb={seoByPath['/safeguarding'].breadcrumb}
      eyebrow="Legal"
      title="Child Safeguarding."
      lead="How Zanokuhle Intellectuals Academy approaches the safety and dignity of the children and young people in our programmes."
      sections={sections}
    />
  )
}
