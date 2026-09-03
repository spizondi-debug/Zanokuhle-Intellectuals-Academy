import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo.jsx'
import { primaryNav } from '../data/nav.js'
import { REGISTRATION } from '../data/org.js'

function DesktopItem({ item }) {
  if (!item.children) {
    return (
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `border-b-2 pb-0.5 text-sm font-semibold transition-colors hover:border-turquoise hover:text-turquoise-deep ${
            isActive ? 'border-blue-deep text-blue-deep' : 'border-transparent text-ink'
          }`
        }
      >
        {item.label}
      </NavLink>
    )
  }
  return (
    <div className="group relative">
      <button type="button" className="flex items-center gap-1 text-sm font-semibold text-ink hover:text-turquoise-deep">
        {item.label}
        <ChevronDown size={14} strokeWidth={2.2} aria-hidden="true" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-40 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
          {item.children.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="block border-b border-line px-5 py-3 text-sm font-medium text-body last:border-b-0 hover:bg-surface-50 hover:text-turquoise-deep"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="border-b border-line bg-surface-50">
        <div className="container-px flex justify-end py-1.5">
          <span className="text-[0.7rem] font-medium text-muted">
            NPO {REGISTRATION.npo} · NPC {REGISTRATION.npc}
          </span>
        </div>
      </div>
      <div className="container-px flex h-20 items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/get-involved" className="btn btn-primary">
            Support Our Work
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Primary mobile">
            {primaryNav.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-semibold text-ink hover:bg-surface-50"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 flex flex-col border-l border-line pl-3">
                    {item.children.slice(1).map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-body hover:bg-surface-50 hover:text-turquoise-deep"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Link
            to="/get-involved"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 w-full"
          >
            Support Our Work
          </Link>
        </div>
      )}
    </header>
  )
}
