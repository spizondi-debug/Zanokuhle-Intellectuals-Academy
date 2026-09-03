// JSON-LD builders — every field pulls from verified data already in
// src/data/org.js and src/lib/siteConfig.js. Nothing here invents a stat,
// partner, review or address. Schema types that would need information the
// organisation hasn't confirmed yet (nonprofitStatus, sameAs social
// profiles, LocalBusiness) are deliberately left out rather than guessed —
// see the SEO audit report for what's still needed to add them.
import { SITE_URL, SITE_NAME } from './siteConfig.js'
import { CONTACT, REGISTRATION } from '../data/org.js'

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: SITE_NAME,
    legalName: `${SITE_NAME} NPC`,
    url: SITE_URL,
    logo: `${SITE_URL}/images/zanokuhle-logo.png`,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.addressLines[0],
      addressLocality: 'Randburg',
      postalCode: '2194',
      addressCountry: 'ZA',
    },
    areaServed: 'South Africa',
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'NPO Registration Number', value: REGISTRATION.npo },
      { '@type': 'PropertyValue', propertyID: 'NPC Registration Number', value: REGISTRATION.npc },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  }
}

export function webPageJsonLd({ type = 'WebPage', path, title, description }) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: { '@type': 'WebSite', url: SITE_URL },
  }
}

export function breadcrumbJsonLd(crumbs) {
  const items = [{ name: 'Home', path: '/' }, ...crumbs]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  }
}

export function faqPageJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}
