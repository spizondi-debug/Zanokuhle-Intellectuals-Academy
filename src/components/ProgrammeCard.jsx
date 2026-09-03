import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Users } from 'lucide-react'
import { categories } from '../data/programmes.js'

export default function ProgrammeCard({ programme }) {
  const categoryLabel = categories.find((c) => c.slug === programme.category)?.label

  return (
    <div className="card flex h-full flex-col p-6">
      <div className="flex items-center gap-2">
        {programme.flagship && (
          <span className="rounded-full bg-purple-pale px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-purple-deep">
            Flagship
          </span>
        )}
        <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-blue">{categoryLabel}</span>
      </div>

      <h3 className="mt-3 text-lg font-bold text-ink">{programme.name}</h3>

      <p className="mt-2 flex items-start gap-2 text-sm text-muted">
        <Users size={15} strokeWidth={2} className="mt-0.5 shrink-0" aria-hidden="true" />
        {programme.servesWho}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-body">{programme.summary}</p>

      {programme.outcomes?.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {programme.outcomes.slice(0, 2).map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm text-body">
              <CheckCircle2 size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-green" aria-hidden="true" />
              {o}
            </li>
          ))}
        </ul>
      )}

      {programme.format && <p className="mt-4 text-xs text-muted">{programme.format}</p>}

      <div className="mt-5 border-t border-line pt-4">
        <Link
          to={programme.href}
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-turquoise-deep hover:text-turquoise"
        >
          {programme.ctaLabel || 'Learn More'}
          <ArrowRight size={15} strokeWidth={2.2} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
