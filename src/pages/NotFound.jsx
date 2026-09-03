import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { defaultSeo } from '../data/seo.js'

const helpfulLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Programmes', to: '/programmes' },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'Contact Us', to: '/contact' },
]

export default function NotFound() {
  return (
    <section className="container-px py-24 text-center">
      <SEO title={`Page not found | ${defaultSeo.title}`} description={defaultSeo.description} path="/404" noindex />
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-section font-bold text-blue-deep">Page not found.</h1>
      <p className="mx-auto mt-4 max-w-md text-body">
        The page you're looking for doesn't exist or may have moved. Here are some places to start instead.
      </p>
      <Link to="/" className="btn btn-primary mt-7">
        Back to Home
      </Link>
      <nav aria-label="Helpful links" className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {helpfulLinks.map((l) => (
          <Link key={l.to} to={l.to} className="text-sm font-semibold text-blue-deep hover:text-blue">
            {l.label}
          </Link>
        ))}
      </nav>
    </section>
  )
}
