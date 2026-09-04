// Per-route SEO metadata — single source of truth for src/components/SEO.jsx
// usage across every page, and for the page-by-page SEO table in the audit
// report. Keyed by the exact react-router path.
//
// Search-intent legend used in comments below: NAV = navigational/brand,
// INFO = informational, TRANS = transactional/conversion-intent.

export const seoByPath = {
  '/': {
    title: 'Zanokuhle Intellectuals Academy | Nonprofit in South Africa',
    description:
      "Zanokuhle Intellectuals Academy is a registered South African NPO (280-735) delivering early childhood development, after-school, skills and community programmes from Alexandra, Johannesburg.",
    primaryKeyword: 'Zanokuhle Intellectuals Academy',
    supportingKeywords: [
      'nonprofit organisation South Africa',
      'NPO in South Africa',
      'early childhood development South Africa',
      'after-school programmes South Africa',
    ],
    intent: 'NAV / INFO — brand search and first-time visitors researching the organisation',
    breadcrumb: [],
  },
  '/about': {
    title: 'About Zanokuhle Intellectuals Academy NPC | Our Story & Mission',
    description:
      'Learn about Zanokuhle Intellectuals Academy NPC — our mission, values and governance as a registered South African Non-Profit Organisation and Non-Profit Company (NPO 280-735, NPC 2022/619121/08).',
    primaryKeyword: 'Zanokuhle Intellectuals Academy NPC',
    supportingKeywords: ['nonprofit organisation South Africa', 'NPO in South Africa', 'community development organisation'],
    intent: 'INFO — verifying who the organisation is before engaging or donating',
    breadcrumb: [{ name: 'About Us', path: '/about' }],
  },
  '/programmes': {
    title: 'Our Programmes | Education & Youth Development Pathways',
    description:
      'Explore Zanokuhle Intellectuals Academy’s programmes across early childhood development, after-school support, skills development and community development in South Africa.',
    primaryKeyword: 'education support programmes',
    supportingKeywords: ['child development programmes', 'youth skills development South Africa', 'community development organisation'],
    intent: 'INFO / NAV — comparing programme areas before drilling into one',
    breadcrumb: [{ name: 'Programmes', path: '/programmes' }],
  },
  '/programmes/alexandra-learner-advancement': {
    title: 'Alexandra Learner Advancement Programme | Zanokuhle Academy',
    description:
      'A multi-year academic, mentorship and career-readiness pathway for high school learners in Alexandra, Johannesburg — Zanokuhle’s flagship learner support programme.',
    primaryKeyword: 'learner support programmes',
    supportingKeywords: ['youth skills development South Africa', 'education support programmes', 'Zanokuhle Intellectuals Academy'],
    intent: 'INFO — schools, funders and mentors researching the flagship programme',
    breadcrumb: [
      { name: 'Programmes', path: '/programmes' },
      { name: 'Alexandra Learner Advancement Programme', path: '/programmes/alexandra-learner-advancement' },
    ],
  },
  '/programmes/early-childhood-development': {
    title: 'Early Childhood Development Programmes | Zanokuhle Academy',
    description:
      'ECD programmes building school-readiness, early literacy and numeracy foundations for young children, plus support for ECD practitioners, parents and caregivers.',
    primaryKeyword: 'early childhood development South Africa',
    supportingKeywords: ['ECD programmes South Africa', 'child development programmes', 'educational support for children'],
    intent: 'INFO / TRANS — parents, ECD practitioners and funders researching ECD support',
    breadcrumb: [
      { name: 'Programmes', path: '/programmes' },
      { name: 'Early Childhood Development', path: '/programmes/early-childhood-development' },
    ],
  },
  '/programmes/education-after-school': {
    title: 'After-School Programmes & Tutoring | Zanokuhle Academy',
    description:
      'Tutoring, homework support, exam preparation and mentorship that keep learners progressing through school — Zanokuhle’s education and after-school programmes.',
    primaryKeyword: 'after-school programmes South Africa',
    supportingKeywords: ['learner support programmes', 'educational support for children', 'education support programmes'],
    intent: 'INFO / TRANS — parents and schools looking for tutoring or after-school support',
    breadcrumb: [
      { name: 'Programmes', path: '/programmes' },
      { name: 'Education & After-School Programmes', path: '/programmes/education-after-school' },
    ],
  },
  '/programmes/skills-and-youth-development': {
    title: 'Youth & Skills Development Programmes | Zanokuhle Academy',
    description:
      'Digital literacy, career guidance, entrepreneurship and leadership programmes that open real pathways beyond school for young people in South Africa.',
    primaryKeyword: 'youth skills development South Africa',
    supportingKeywords: ['education support programmes', 'child development programmes', 'community development organisation'],
    intent: 'INFO / TRANS — young people, schools and CSI partners exploring skills programmes',
    breadcrumb: [
      { name: 'Programmes', path: '/programmes' },
      { name: 'Skills & Youth Development', path: '/programmes/skills-and-youth-development' },
    ],
  },
  '/programmes/social-and-community-development': {
    title: 'Social & Community Development Programmes | Zanokuhle',
    description:
      'Zanokuhle works alongside underserved communities on social participation, women and youth empowerment and community-led development across South Africa.',
    primaryKeyword: 'community development organisation',
    supportingKeywords: ['social development programmes', 'nonprofit organisation South Africa', 'youth skills development South Africa'],
    intent: 'INFO — community members and partners researching community-level programmes',
    breadcrumb: [
      { name: 'Programmes', path: '/programmes' },
      { name: 'Social & Community Development', path: '/programmes/social-and-community-development' },
    ],
  },
  '/get-involved': {
    title: 'Get Involved | Donate, Volunteer or Partner with Zanokuhle',
    description:
      'Donate, volunteer, or partner with Zanokuhle Intellectuals Academy as a funder, corporate CSI partner or school — support education and youth development in South Africa.',
    primaryKeyword: 'donate to education in South Africa',
    supportingKeywords: [
      'volunteer opportunities South Africa',
      'corporate social investment education projects',
      'support children’s education South Africa',
    ],
    intent: 'TRANS — ready to donate, volunteer, sponsor or partner',
    breadcrumb: [{ name: 'Get Involved', path: '/get-involved' }],
  },
  '/impact': {
    title: 'Impact & Accountability | Zanokuhle Intellectuals Academy',
    description:
      'How Zanokuhle Intellectuals Academy tracks learner participation, outcomes and community reach, and stays accountable to funding partners and the communities it serves.',
    primaryKeyword: 'nonprofit organisation South Africa',
    supportingKeywords: ['child development programmes', 'community development organisation', 'Zanokuhle Intellectuals Academy NPC'],
    intent: 'INFO — funders and donors verifying credibility and accountability before giving',
    breadcrumb: [{ name: 'Impact & Accountability', path: '/impact' }],
  },
  '/news': {
    title: 'News & Stories | Zanokuhle Intellectuals Academy',
    description:
      'Programme updates, community stories and reports from Zanokuhle Intellectuals Academy, published only with the informed consent of the people involved.',
    primaryKeyword: 'Zanokuhle Intellectuals Academy',
    supportingKeywords: ['community development organisation', 'nonprofit organisation South Africa'],
    intent: 'INFO — returning visitors and partners checking for updates',
    breadcrumb: [{ name: 'News & Stories', path: '/news' }],
  },
  '/contact': {
    title: 'Contact Zanokuhle Intellectuals Academy | Get in Touch',
    description:
      'Contact Zanokuhle Intellectuals Academy in Ferndale, Randburg — for programme enquiries, donations, volunteering, CSI partnerships or media enquiries.',
    primaryKeyword: 'Zanokuhle Intellectuals Academy',
    supportingKeywords: ['NPO in South Africa', 'support children’s education South Africa'],
    intent: 'TRANS — ready to make direct contact',
    breadcrumb: [{ name: 'Contact', path: '/contact' }],
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Zanokuhle Intellectuals Academy',
    description:
      'How Zanokuhle Intellectuals Academy collects, uses and protects personal information submitted through this website.',
    primaryKeyword: 'Zanokuhle Intellectuals Academy',
    supportingKeywords: ['nonprofit organisation South Africa'],
    intent: 'INFO — reviewing data-handling before submitting personal information',
    breadcrumb: [{ name: 'Privacy Policy', path: '/privacy-policy' }],
  },
  '/safeguarding': {
    title: 'Child Safeguarding | Zanokuhle Intellectuals Academy',
    description:
      'How Zanokuhle Intellectuals Academy approaches the safety, dignity and consent of the children and young people in its programmes.',
    primaryKeyword: 'Zanokuhle Intellectuals Academy',
    supportingKeywords: ['nonprofit organisation South Africa', 'early childhood development South Africa'],
    intent: 'INFO — parents, schools and funders verifying child-safety commitments',
    breadcrumb: [{ name: 'Child Safeguarding', path: '/safeguarding' }],
  },
  '/terms-of-use': {
    title: 'Terms of Use | Zanokuhle Intellectuals Academy',
    description: 'The terms that apply to using the Zanokuhle Intellectuals Academy website.',
    primaryKeyword: 'Zanokuhle Intellectuals Academy',
    supportingKeywords: ['nonprofit organisation South Africa'],
    intent: 'INFO — reviewing site terms',
    breadcrumb: [{ name: 'Terms of Use', path: '/terms-of-use' }],
  },
}

// Rendered on every route as a fallback and used verbatim on the 404 page.
export const defaultSeo = {
  title: 'Zanokuhle Intellectuals Academy | Nonprofit in South Africa',
  description:
    'Zanokuhle Intellectuals Academy is a registered South African NPO delivering early childhood development, education, skills and community programmes.',
}
