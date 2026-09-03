import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-px py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-section font-bold text-blue-deep">Page not found.</h1>
      <p className="mx-auto mt-4 max-w-md text-body">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="btn btn-primary mt-7">
        Back to Home
      </Link>
    </section>
  )
}
