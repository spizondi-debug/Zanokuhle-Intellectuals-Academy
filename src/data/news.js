// News & Stories — placeholder entries.
//
// CONTENT GUIDANCE: any photograph or story involving a child or minor
// learner must only be published with the informed, documented consent of
// a parent or guardian. Do not publish an identifiable child's name,
// photograph or personal story without that consent on file. Prefer
// describing an activity or outcome over identifying an individual child
// where consent has not been confirmed.

export const newsCategories = ['Programme Update', 'Learner Story', 'Community', 'Partner Announcement', 'Event', 'Report']

export const newsItems = [
  {
    slug: 'placeholder-programme-update',
    category: 'Programme Update',
    title: 'Programme update — content to be added',
    date: null,
    excerpt: 'A short update on programme activity goes here once confirmed. Replace this placeholder before publishing.',
    // Generic stock/reference image, not a Zanokuhle photograph — safe as
    // scene-setting for a programme-activity update. See StockPhoto.jsx.
    image: { src: '/images/stock-news-lego-hands.jpg', alt: 'Hands assembling a robotics kit' },
  },
  {
    slug: 'placeholder-learner-story',
    category: 'Learner Story',
    title: 'Learner story — content to be added',
    date: null,
    excerpt: 'A learner story may be featured here once written consent from a parent or guardian is on file. Replace this placeholder before publishing.',
    // No image: a "Learner Story" card implies the photo is of the learner
    // whose story it is. Pairing it with a stock photo of an unrelated
    // child would misleadingly suggest an identity — leave as
    // PhotoPlaceholder until a real, consented learner photo exists.
  },
  {
    slug: 'placeholder-community-activity',
    category: 'Community',
    title: 'Community activity — content to be added',
    date: null,
    excerpt: 'A short recap of a community activity or event goes here once confirmed. Replace this placeholder before publishing.',
    image: { src: '/images/stock-news-community-hands.jpg', alt: 'A group of children reaching out together' },
  },
  {
    slug: 'placeholder-partner-announcement',
    category: 'Partner Announcement',
    title: 'Partner announcement — content to be added',
    date: null,
    excerpt: 'A partner or funding announcement goes here once confirmed by both parties. Replace this placeholder before publishing.',
    image: { src: '/images/stock-news-robot-car.jpg', alt: 'A small robotics project built by learners' },
  },
]

export const publications = [
  {
    name: 'Annual report',
    text: 'Zanokuhle’s annual report will be listed here once published.',
    status: 'Coming soon',
  },
  {
    name: 'Programme briefs',
    text: 'Short briefs on individual programmes for schools and partners.',
    status: 'Coming soon',
  },
]
