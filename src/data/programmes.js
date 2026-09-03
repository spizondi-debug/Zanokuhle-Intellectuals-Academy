// Programme directory.
//
// EDITABLE CONTENT — placeholder copy throughout. Do not add learner
// numbers, dates, funding amounts or outcome statistics until Zanokuhle has
// confirmed them; "format" describes how a programme is typically run, not
// a scheduled intake.

export const categories = [
  { slug: 'ecd', label: 'Early Childhood Development' },
  { slug: 'education', label: 'Education & After-School Support' },
  { slug: 'youth', label: 'Youth Development' },
  { slug: 'skills', label: 'Skills Development' },
  { slug: 'career', label: 'Career Guidance & Work Readiness' },
  { slug: 'digital', label: 'Digital Literacy & Coding' },
  { slug: 'entrepreneurship', label: 'Entrepreneurship & Leadership' },
  { slug: 'community', label: 'Social & Community Development' },
]

export const programmes = [
  {
    slug: 'alexandra-learner-advancement',
    name: 'Alexandra Learner Advancement Programme',
    category: 'youth',
    flagship: true,
    servesWho: 'High school learners in Alexandra, Johannesburg',
    summary: 'A 36-month academic, mentorship and career-readiness pathway for learners moving from the classroom toward tertiary study or employment.',
    outcomes: [
      'Stronger academic performance through structured tutoring and revision support',
      'Consistent mentorship and psychosocial support through the school years',
      'Clear exposure to career paths, industry and tertiary options',
    ],
    format: 'Multi-year, in-person programme delivered in partnership with local schools',
    href: '/programmes/alexandra-learner-advancement',
    ctaLabel: 'View This Programme',
  },
  {
    slug: 'school-readiness-and-early-learning',
    name: 'School Readiness & Early Learning',
    category: 'ecd',
    servesWho: 'Young children and their parents or caregivers',
    summary: 'Structured early-learning activities that build the literacy, numeracy and social-readiness foundations children need before formal schooling.',
    outcomes: [
      'Improved early literacy and numeracy readiness',
      'Confident transition into the formal school system',
      'Parents and caregivers equipped to support learning at home',
    ],
    format: 'Group sessions at community and ECD sites',
    href: '/programmes/early-childhood-development',
    ctaLabel: 'Learn More',
  },
  {
    slug: 'ecd-practitioner-support',
    name: 'ECD Practitioner Support',
    category: 'ecd',
    servesWho: 'Early Childhood Development practitioners and ECD centres',
    summary: 'Practical support and development for the practitioners and centres already caring for young children in the community.',
    outcomes: [
      'Strengthened practitioner knowledge and confidence',
      'Better-resourced, safer early-learning environments',
    ],
    format: 'Workshops and site-based support, editable pending confirmed schedule',
    href: '/programmes/early-childhood-development',
    ctaLabel: 'Learn More',
  },
  {
    slug: 'tutoring-and-homework-support',
    name: 'Tutoring & Homework Support',
    category: 'education',
    servesWho: 'Primary and high school learners',
    summary: 'Regular, subject-focused tutoring and homework support that helps learners keep pace with the curriculum rather than fall behind it.',
    outcomes: [
      'Improved understanding of core subjects',
      'Homework completed with proper support, not left unfinished',
      'Learners more confident participating in class',
    ],
    format: 'After-school sessions, in person',
    href: '/programmes/education-after-school',
    ctaLabel: 'Learn More',
  },
  {
    slug: 'exam-preparation-and-revision',
    name: 'Exam Preparation & Revision',
    category: 'education',
    servesWho: 'Learners approaching test and examination periods',
    summary: 'Focused revision support and exam technique in the run-up to school assessments and matric examinations.',
    outcomes: [
      'Stronger exam preparation and technique',
      'Reduced anxiety going into assessments',
    ],
    format: 'Seasonal, aligned to the school assessment calendar',
    href: '/programmes/education-after-school',
    ctaLabel: 'Learn More',
  },
  {
    slug: 'learner-mentorship',
    name: 'Learner Mentorship',
    category: 'youth',
    servesWho: 'Primary and high school learners',
    summary: 'One-on-one and group mentorship that gives learners a consistent, trusted adult presence through their school years.',
    outcomes: [
      'A stable mentoring relationship over time',
      'Improved confidence, motivation and school engagement',
    ],
    format: 'Ongoing, paired or small-group mentorship',
    href: '/programmes/skills-and-youth-development',
    ctaLabel: 'Learn More',
  },
  {
    slug: 'life-skills-and-leadership',
    name: 'Life Skills & Leadership Development',
    category: 'youth',
    servesWho: 'Young people in and beyond school',
    summary: 'Structured life-skills and leadership development that builds confidence, resilience and the ability to lead within a peer group or community.',
    outcomes: [
      'Stronger life skills and self-management',
      'Young people taking on leadership roles in their own communities',
    ],
    format: 'Workshop series, in person',
    href: '/programmes/skills-and-youth-development',
    ctaLabel: 'Learn More',
  },
  {
    slug: 'digital-literacy',
    name: 'Digital Literacy',
    category: 'digital',
    servesWho: 'Youth and learners with limited access to technology',
    summary: 'Foundational digital skills — from basic computer literacy to safe, confident use of everyday digital tools.',
    outcomes: [
      'Working knowledge of core digital tools',
      'Confidence using technology for learning and job-seeking',
    ],
    format: 'Computer-lab based sessions, format dependent on site access',
    href: '/programmes/skills-and-youth-development',
    ctaLabel: 'Learn More',
  },
  {
    slug: 'coding-and-technology-exposure',
    name: 'Coding & Technology Exposure',
    category: 'digital',
    servesWho: 'Youth with an interest in technology and coding',
    summary: 'An introduction to coding and technology concepts, designed to open a pathway that many learners have never had access to.',
    outcomes: [
      'Foundational coding and computational-thinking skills',
      'Awareness of technology as a viable study and career path',
    ],
    format: 'Structured sessions, editable pending confirmed curriculum partner',
    href: '/programmes/skills-and-youth-development',
    ctaLabel: 'Learn More',
  },
  {
    slug: 'career-guidance-and-work-readiness',
    name: 'Career Guidance & Work Readiness',
    category: 'career',
    servesWho: 'Senior learners and out-of-school youth',
    summary: 'Practical guidance on career and study options, paired with the basic work-readiness skills employers expect.',
    outcomes: [
      'A clearer sense of realistic career and study pathways',
      'CV, interview and workplace-conduct readiness',
    ],
    format: 'Workshops, guest speakers and one-on-one guidance',
    href: '/programmes/skills-and-youth-development',
    ctaLabel: 'Learn More',
  },
  {
    slug: 'entrepreneurship-and-leadership',
    name: 'Entrepreneurship & Leadership',
    category: 'entrepreneurship',
    servesWho: 'Young people exploring self-employment and enterprise',
    summary: 'An introduction to entrepreneurial thinking and small-enterprise basics, alongside leadership development for young people ready to take initiative.',
    outcomes: [
      'Basic understanding of enterprise and business fundamentals',
      'Stronger leadership and initiative-taking skills',
    ],
    format: 'Workshop series with practical exercises',
    href: '/programmes/skills-and-youth-development',
    ctaLabel: 'Learn More',
  },
  {
    slug: 'community-learning-and-participation',
    name: 'Community Learning & Participation',
    category: 'community',
    servesWho: 'Community members, parents and caregivers',
    summary: 'Learning opportunities and structured participation that extend Zanokuhle’s work beyond the classroom and into the wider community.',
    outcomes: [
      'Increased community participation in learners’ education',
      'Stronger, more connected local support networks',
    ],
    format: 'Community workshops and events',
    href: '/programmes/social-and-community-development',
    ctaLabel: 'Learn More',
  },
  {
    slug: 'women-and-youth-empowerment',
    name: 'Women & Youth Empowerment',
    category: 'community',
    servesWho: 'Women and young people in the communities we serve',
    summary: 'Targeted support and opportunity-building for women and young people navigating economic and social barriers.',
    outcomes: [
      'Expanded access to opportunity and support networks',
      'Stronger participation in community and economic life',
    ],
    format: 'Programme format editable pending confirmed partner and site',
    href: '/programmes/social-and-community-development',
    ctaLabel: 'Learn More',
  },
]

export const programmesIn = (categorySlug) =>
  categorySlug === 'all' ? programmes : programmes.filter((p) => p.category === categorySlug)
