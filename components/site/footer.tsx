import { TreePine } from 'lucide-react'
import { navLinks, site } from '@/lib/site'

/* ============================================================
   9. FOOTER
   ============================================================ */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[oklch(0.19_0.03_160)] text-beige/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <a href="/" className="flex items-center gap-2.5 text-white">
            <TreePine className="size-6" aria-hidden="true" />
            <span className="font-serif text-2xl font-semibold">{site.name}</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Cabañas rústicas de lujo en el bosque de Mazamitla, Jalisco. Naturaleza, calma y hospitalidad.
          </p>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white">Navegación</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white">Legal</h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Aviso de privacidad
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Políticas de cancelación
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p>Mazamitla, Jalisco, México</p>
        </div>
      </div>
    </footer>
  )
}
