// Primary navigation and footer link groups.

export const primaryNav = [
  { label: 'About Us', to: '/about' },
  {
    label: 'Programmes',
    to: '/programmes',
    children: [
      { label: 'All Programmes', to: '/programmes' },
      { label: 'Alexandra Learner Advancement Programme', to: '/programmes/alexandra-learner-advancement' },
      { label: 'Early Childhood Development', to: '/programmes/early-childhood-development' },
      { label: 'Education & After-School Support', to: '/programmes/education-after-school' },
      { label: 'Skills & Youth Development', to: '/programmes/skills-and-youth-development' },
      { label: 'Social & Community Development', to: '/programmes/social-and-community-development' },
    ],
  },
  { label: 'Impact', to: '/impact' },
  { label: 'News & Stories', to: '/news' },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'Contact', to: '/contact' },
]

export const footerNav = [
  {
    heading: 'Organisation',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Impact & Accountability', to: '/impact' },
      { label: 'News & Stories', to: '/news' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Programmes',
    links: [
      { label: 'Alexandra Learner Advancement', to: '/programmes/alexandra-learner-advancement' },
      { label: 'Early Childhood Development', to: '/programmes/early-childhood-development' },
      { label: 'Education & After-School Support', to: '/programmes/education-after-school' },
      { label: 'Skills & Youth Development', to: '/programmes/skills-and-youth-development' },
      { label: 'Social & Community Development', to: '/programmes/social-and-community-development' },
    ],
  },
  {
    heading: 'Get Involved',
    links: [
      { label: 'Donate', to: '/get-involved#donate' },
      { label: 'Become a Funding Partner', to: '/get-involved#partner' },
      { label: 'Volunteer', to: '/get-involved#volunteer' },
      { label: 'CSI Partnership', to: '/get-involved#csi' },
    ],
  },
]
