'use client'

import { useEffect, useState } from 'react'
import { Menu, TreePine, X } from 'lucide-react'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'

/* ============================================================
   1. NAVIGATION BAR
   Transparent over the hero, turns solid once the user scrolls.
   ============================================================ */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid ? 'bg-pine-deep/95 shadow-lg backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav aria-label="Principal" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="/" className="flex items-center gap-2.5 text-white" onClick={() => setOpen(false)}>
          <span className="flex size-10 items-center justify-center rounded-full border border-white/30 bg-white/10">
            <TreePine className="size-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-semibold leading-none tracking-wide md:text-2xl">
            {site.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/#contacto"
            className="hidden rounded-full bg-wood px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-wood/90 sm:inline-flex"
          >
            Reservar Ahora
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex size-10 items-center justify-center rounded-full text-white hover:bg-white/10 xl:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-white/10 transition-[max-height] duration-300 xl:hidden',
          open ? 'max-h-[32rem]' : 'max-h-0 border-transparent',
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="/#contacto"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-wood px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Reservar Ahora
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
