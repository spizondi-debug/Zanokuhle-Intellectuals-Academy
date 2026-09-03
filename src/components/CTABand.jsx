import { Link } from 'react-router-dom'

export default function CTABand({ eyebrow, title, text, primary, secondary }) {
  return (
    <section className="bg-turquoise-deep">
      <div className="container-px py-16 text-center lg:py-20">
        {eyebrow && <p className="eyebrow text-yellow-light">{eyebrow}</p>}
        <h2 className="mx-auto mt-3 max-w-2xl text-section font-bold text-white">{title}</h2>
        {text && <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/85">{text}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {primary && (
            <Link to={primary.to} className="btn bg-white text-blue-deep shadow-soft hover:bg-surface-100">
              {primary.label}
            </Link>
          )}
          {secondary && (
            <Link to={secondary.to} className="btn btn-outline-light">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
