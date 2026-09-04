// News & Stories — placeholder entries.
//
// CONTENT GUIDANCE: any photograph or story involving a child or minor
// learner must only be published with the informed, documented consent of
// a parent or guardian. Do not publish an identifiable child's name,
// photograph or personal story without that consent on file. Prefer
// describing an activity or outcome over identifying an individual child
// where consent has not been confirmed.

import { imagePath } from '../lib/assetPath.js'

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
    image: {
      src: imagePath('/images/stock-news-lego-hands.jpg'),
      webpSrc: imagePath('/images/stock-news-lego-hands.webp'),
      alt: 'Hands assembling a robotics kit',
      width: 1920,
      height: 1280,
    },
  },
  {
    slug: 'placeholder-learner-story',
    category: 'Learner Story',
    title: 'Learner story — content to be added',
    date: null,
    excerpt: 'A learner story may be featured here once written consent from a parent or guardian is on file. Replace this placeholder before publishing.',
    // A "Learner Story" card next to a photo could otherwise read as if the
    // photo is of the learner whose story it is. Explicitly requested to
    // use a stock photo anyway — `illustrative: true` makes News.jsx render
    // a visible "Illustrative photo" label (not just alt text) so it can't
    // be mistaken for the actual learner. Replace with a real, consented
    // photo once a specific learner story is confirmed, and drop the flag.
    image: {
      src: imagePath('/images/stock-contact-classroom-portrait.jpg'),
      webpSrc: imagePath('/images/stock-contact-classroom-portrait.webp'),
      alt: 'Generic stock photo of a child in a classroom, used only to illustrate this story — not a photograph of the learner featured',
      width: 1920,
      height: 1280,
      illustrative: true,
    },
  },
  {
    slug: 'placeholder-community-activity',
    category: 'Community',
    title: 'Community activity — content to be added',
    date: null,
    excerpt: 'A short recap of a community activity or event goes here once confirmed. Replace this placeholder before publishing.',
    image: {
      src: imagePath('/images/stock-news-community-hands.jpg'),
      webpSrc: imagePath('/images/stock-news-community-hands.webp'),
      alt: 'A group of children reaching out together',
      width: 1920,
      height: 1280,
    },
  },
  {
    slug: 'placeholder-partner-announcement',
    category: 'Partner Announcement',
    title: 'Partner announcement — content to be added',
    date: null,
    excerpt: 'A partner or funding announcement goes here once confirmed by both parties. Replace this placeholder before publishing.',
    image: {
      src: imagePath('/images/stock-news-robot-car.jpg'),
      webpSrc: imagePath('/images/stock-news-robot-car.webp'),
      alt: 'A small robotics project built by learners',
      width: 1920,
      height: 897,
    },
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
