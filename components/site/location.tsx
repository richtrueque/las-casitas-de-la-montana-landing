import { Car, Clock, MapPin, Mountain, Navigation } from 'lucide-react'
import { site } from '@/lib/site'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

/* ============================================================
   6. UBICACIÓN EN MAZAMITLA
   Google Maps embed — replace the `q` value with your exact
   coordinates (e.g. "19.9156,-103.0197") for a precise pin.
   ============================================================ */
const MAP_EMBED_URL = 'https://www.google.com/maps?q=Mazamitla,+Jalisco,+Mexico&z=13&output=embed'
const MAP_DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Mazamitla,+Jalisco'

const routes = [
  { icon: Car, from: 'Desde Guadalajara', detail: '≈ 2 h por la carretera 15D y 110 vía Jiquilpan' },
  { icon: Car, from: 'Desde Morelia', detail: '≈ 3 h por la autopista México–Guadalajara' },
  { icon: Clock, from: 'Check-in / Check-out', detail: 'Entrada 3:00 p.m. · Salida 12:00 p.m.' },
]

export function Location() {
  return (
    <section id="ubicacion" aria-labelledby="ubicacion-title" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <Reveal>
            <SectionHeading
              id="ubicacion-title"
              align="left"
              eyebrow="Ubicación"
              title="Ubicación en Mazamitla"
              description="Conocida como la “Suiza de México”, Mazamitla se encuentra a más de 2,200 metros de altura, rodeada de bosques de pino y encino. Nuestras cabañas están a pocos minutos del centro, en un entorno sereno y silencioso."
            />
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-10 flex flex-col gap-5">
              {routes.map(({ icon: Icon, from, detail }) => (
                <li key={from} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-pine">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-pine-deep">{from}</p>
                    <p className="text-sm text-muted-foreground">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-xl bg-beige p-5 text-sm">
              <Mountain className="mt-0.5 size-5 shrink-0 text-wood" aria-hidden="true" />
              <p className="text-secondary-foreground">
                Clima templado-frío todo el año. Trae chamarra: las noches pueden bajar hasta 5 °C.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-3">
          <div className="overflow-hidden rounded-2xl bg-card shadow-lg ring-1 ring-border">
            <div className="relative aspect-[4/3] w-full bg-muted sm:aspect-[16/10]">
              <iframe
                src={MAP_EMBED_URL}
                title="Mapa de Mazamitla, Jalisco"
                className="absolute inset-0 size-full border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-wood" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-pine-deep">{site.name}</p>
                  <p className="text-sm text-muted-foreground">{site.address}</p>
                </div>
              </div>
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-pine px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-pine-deep"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Cómo llegar
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
