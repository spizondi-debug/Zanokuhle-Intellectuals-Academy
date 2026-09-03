import { ShieldCheck, Info } from 'lucide-react'

/** A tinted, icon-led note — for safeguarding language, compliance notes and disclaimers. */
export default function Notice({ children, icon = 'shield', tone = 'blue' }) {
  const Icon = icon === 'shield' ? ShieldCheck : Info
  const tones = {
    blue: 'bg-blue-pale text-blue-deep',
    green: 'bg-green-pale text-green-deep',
  }
  return (
    <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-5">
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${tones[tone]}`}>
        <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <p className="text-sm leading-relaxed text-body">{children}</p>
    </div>
  )
}
