import PhotoPlaceholder from './PhotoPlaceholder.jsx'

export default function PageHeader({ eyebrow, title, lead, tone = 'turquoise', children }) {
  return (
    <section className="relative overflow-hidden bg-turquoise-deep">
      <PhotoPlaceholder tone={tone} className="absolute inset-0 h-full w-full opacity-15" />
      <div className="container-px relative py-16 lg:py-20">
        <div className="max-w-2xl">
          {eyebrow && <p className="eyebrow text-yellow-light">{eyebrow}</p>}
          <h1 className="mt-4 text-display font-bold text-white">{title}</h1>
          {lead && <p className="mt-5 text-lg leading-relaxed text-white/85">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
