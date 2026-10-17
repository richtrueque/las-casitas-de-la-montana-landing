import Image from 'next/image'
import { navLinks, site } from '@/lib/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[oklch(0.19_0.03_160)] text-beige/70">
      <div className="h- w-full bg-[#e08d11]" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <a href="/" className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            {/* LOGO LIMPIO SIN RECUADRO */}
            <Image
              src="/logo.png"
              alt="Las Casitas de la Montaña"
              width={80}
              height={80}
              className="size-20 object-contain"
            />
            <span className="font-serif text-2xl font-semibold leading-none text-[#e08d11]">
              {site.name}
            </span>
          </a>
          <p className="mt-4 max-w-xs text-center text-sm leading-relaxed text-beige/60 md:text-left">
            Cabañas confortables en el bosque de Mazamitla, Jalisco. Naturaleza, calma y hospitalidad.
          </p>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#e08d11]">
            <span className="h-px w-6 bg-[#e08d11]/50" />
            Navegación
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group inline-flex items-center gap-1.5 transition-colors hover:text-[#e08d11]">
                  <span className="h-px w-0 bg-[#e08d11] transition-all group-hover:w-3" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#e08d11]">
            <span className="h-px w-6 bg-[#e08d11]/50" />
            Legal
          </h2>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            <li><a href="#" className="transition-colors hover:text-[#e08d11]">Aviso de privacidad</a></li>
            <li><a href="#" className="transition-colors hover:text-[#e08d11]">Términos y condiciones</a></li>
            <li><a href="#" className="transition-colors hover:text-[#e08d11]">Políticas de cancelación</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-beige/50 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© {year} <span className="text-beige/70">{site.name}</span>. Todos los derechos reservados.</p>
          <p className="inline-flex items-center gap-2">
            <span className="size-1 rounded-full bg-[#e08d11]" />
            Mazamitla, Jalisco, México
          </p>
        </div>
      </div>
    </footer>
  )
}