// Organisation identity, registration and contact details.
//
// EDITABLE — placeholders marked below must be confirmed by Zanokuhle before
// launch. Do not present placeholder contact details as final/live.

export const ORG_NAME = 'Zanokuhle Intellectuals Academy'
export const ORG_SHORT_NAME = 'Zanokuhle'

export const REGISTRATION = {
  npo: '280-735',
  npc: '2022/619121/08',
}

// Configurable via VITE_CONTACT_EMAIL once Zanokuhle confirms their live
// inbox. Falls back to a clearly-named placeholder otherwise —
// IS_EMAIL_UNCONFIRMED lets any page show (or automatically stop showing,
// once a real one is set) a "needs confirmation" note next to it.
const PLACEHOLDER_EMAIL = 'info@zanokuhleacademy.org.za'
const email = import.meta.env.VITE_CONTACT_EMAIL || PLACEHOLDER_EMAIL
export const IS_EMAIL_UNCONFIRMED = email === PLACEHOLDER_EMAIL

export const CONTACT = {
  email,
  phone: '010 065 0822',
  addressLines: ['64 Hill St, Ferndale', 'Randburg, 2194'],
  hours: 'Monday – Friday, 8am – 4pm',
}

// Real social profile URLs, configured via environment variables — unset
// (empty string) by default rather than a "#" placeholder, so Footer.jsx
// can tell "no real URL yet" apart from "a real URL" and hide each icon
// until it has one, instead of showing a dead link. Set
// VITE_SOCIAL_FACEBOOK_URL / VITE_SOCIAL_INSTAGRAM_URL /
// VITE_SOCIAL_LINKEDIN_URL once Zanokuhle confirms real profile URLs.
export const SOCIALS = {
  facebook: import.meta.env.VITE_SOCIAL_FACEBOOK_URL || '',
  instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM_URL || '',
  linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN_URL || '',
}

/**
 * Nothing here should imply accreditation, government endorsement, formal
 * tax-deductibility (Section 18A) or named institutional partnerships unless
 * Zanokuhle has explicitly confirmed it — see About page copy.
 */
export const COMPLIANCE_NOTE =
  'Zanokuhle Intellectuals Academy is registered in South Africa as a Non-Profit Organisation (NPO 280-735) and a Non-Profit Company (NPC 2022/619121/08). Formal accreditation, endorsement and funding-partner status are stated only where they have been confirmed.'

export const SAFEGUARDING_NOTE =
  'Zanokuhle works with children and young people, and takes learner safety seriously. Photographs, names and stories involving minors are used only with the informed consent of a parent or guardian, and are handled in line with our safeguarding practice.'

export const values = [
  { name: 'Integrity', text: 'We do what we say, and we account honestly for what we have not yet done.' },
  { name: 'Empowerment', text: 'We build capability in people and communities, not dependency on us.' },
  { name: 'Collaboration', text: 'Change happens with schools, families and partners — not around them.' },
  { name: 'Excellence', text: 'Programmes are planned and delivered properly, not improvised.' },
  { name: 'Dignity', text: 'Every learner, parent and community member is treated with respect, never pity.' },
  { name: 'Inclusion', text: 'Opportunity is built for those most often left out of it.' },
  { name: 'Accountability', text: 'We measure our work honestly and report on it to the people who trust us with it.' },
]

export const mission =
  'To create practical, well-run pathways in early learning, education, skills and community development that help children, young people and communities build capability for a stronger future.'

export const vision =
  'A South Africa where every child and young person — regardless of where they start — has a genuine pathway to learn, grow and participate fully in their community and economy.'

export const story = [
  'Zanokuhle Intellectuals Academy began as a response to a simple, persistent gap: in communities like Alexandra, talent and potential are not the problem — access to consistent support is.',
  'Children arrive at school without the early foundations they need. Learners fall behind with no one to catch them up. Young people finish school with no clear next step. Zanokuhle exists to close those specific gaps, one programme at a time, in partnership with the schools, families and organisations already doing the work on the ground.',
  'We are a Non-Profit Organisation and Non-Profit Company, built to be accountable to the communities we serve and to the partners who support that work.',
]

export const communityLedApproach =
  'Programmes are shaped around what schools, parents and communities identify as the real gap — not a model designed elsewhere and delivered unchanged. We work alongside existing community structures, educators and local leadership rather than replacing them.'

export const governanceNote =
  'Zanokuhle is governed by a board responsible for strategic direction, financial oversight and organisational accountability. Day-to-day programmes are run by a staff and facilitator team, with policies covering finance, safeguarding and programme quality. Full governance documentation is available to funding partners on request.'
