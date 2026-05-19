import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile, nav } from '../data/content.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    [
      'text-xs font-semibold uppercase tracking-[0.08em] transition-colors',
      isActive
        ? 'text-on-surface underline decoration-primary decoration-2 underline-offset-[6px]'
        : 'text-on-surface-variant hover:text-on-surface',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface/85 backdrop-blur-md">
      <div className="shell flex h-[72px] items-center justify-between">
        <Link
          to="/"
          className="editorial text-2xl tracking-tight text-on-surface"
          onClick={() => setOpen(false)}
        >
          {profile.wordmark}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="rounded bg-primary-container px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-on-primary transition-opacity hover:opacity-90"
          >
            Hire Me
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-px w-5 bg-on-surface" />
          <span className="h-px w-5 bg-on-surface" />
          <span className="h-px w-5 bg-on-surface" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-outline-variant/30 md:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'py-2 text-sm font-semibold uppercase tracking-[0.08em]',
                    isActive ? 'text-primary' : 'text-on-surface-variant',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded bg-primary-container px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.08em] text-on-primary"
            >
              Hire Me
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
