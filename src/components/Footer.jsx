import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './SocialIcons.jsx'
import Logo from './Logo.jsx'
import { footerNav } from '../data/nav.js'
import { CONTACT, REGISTRATION, SOCIALS } from '../data/org.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="h-1 bg-turquoise" aria-hidden="true" />
      <div className="container-px py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Practical pathways in learning, opportunity and community for children, young people and
              underserved communities across South Africa.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={SOCIALS.facebook} aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-white/50">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href={SOCIALS.instagram} aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-white/50">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={SOCIALS.linkedin} aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-white/50">
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.heading}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">{group.heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-white/75 hover:text-turquoise-light">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 text-sm text-white/70 sm:grid-cols-3">
          <div className="flex items-start gap-2.5">
            <Mail size={16} className="mt-0.5 shrink-0 text-yellow" aria-hidden="true" />
            <a href={`mailto:${CONTACT.email}`} className="hover:text-turquoise-light">{CONTACT.email}</a>
          </div>
          <div className="flex items-start gap-2.5">
            <Phone size={16} className="mt-0.5 shrink-0 text-yellow" aria-hidden="true" />
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-turquoise-light">{CONTACT.phone}</a>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin size={16} className="mt-0.5 shrink-0 text-yellow" aria-hidden="true" />
            <span>{CONTACT.addressLines.join(', ')}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Zanokuhle Intellectuals Academy · NPO {REGISTRATION.npo} · NPC{' '}
            {REGISTRATION.npc}
          </p>
          <p>South African Non-Profit Organisation &amp; Non-Profit Company</p>
        </div>
      </div>
    </footer>
  )
}
