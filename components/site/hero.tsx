import Image from 'next/image'
import { ChevronDown, Flame, ShieldCheck, Trees } from 'lucide-react'

/* ============================================================
   2. HERO
   Full-screen foggy pine forest. Replace /images/hero-bosque.png
   with your own photo to customize.
   ============================================================ */
const highlights = [
  { icon: Flame, label: 'Chimeneas acogedoras' },
  { icon: Trees, label: 'Vistas al bosque' },
  { icon: ShieldCheck, label: 'Privacidad total' },
]

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-svh items-center overflow-hidden">
      <Image
        src="/images/hero-bosque.png"
        alt="Bosque de pinos cubierto de neblina con una cabaña iluminada en Mazamitla"
        fill
        priority
        sizes="100vw"
        className="object-cover animate-in fade-in zoom-in-105 duration-[2000ms]"
      />
      {/* Overlays for legibility and a misty mood */}
      <div className="absolute inset-0 bg-gradient-to-b from-pine-deep/70 via-pine-deep/40 to-pine-deep/85" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-8">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-beige/90">
            Cabañas en el bosque · Mazamitla, Jalisco
          </p>
          <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.05] text-white text-balance sm:text-6xl lg:text-7xl">
            Tu refugio de paz y naturaleza en <em className="italic text-beige">Mazamitla</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 text-pretty">
            Despierta entre pinos y neblina, enciende la chimenea y disfruta de vistas al bosque con total privacidad.
            Cabañas rústicas con todo el confort para desconectarte del mundo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cabanas"
              className="inline-flex items-center justify-center rounded-full bg-wood px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-wood/90"
            >
              Ver Cabañas
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-pine-deep"
            >
              Reservar Estancia
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-white/90">
                <Icon className="size-5 text-beige" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="#cabanas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <ChevronDown className="size-7 animate-bounce" aria-hidden="true" />
        <span className="sr-only">Desplazarse a las cabañas</span>
      </a>
    </section>
  )
}
