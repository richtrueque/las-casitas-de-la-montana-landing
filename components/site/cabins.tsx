import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'
import { amenities, cabins } from '@/lib/cabins'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

/* ============================================================
   3. NUESTRAS CABAÑAS
   Cabin data lives in /lib/cabins.ts. Each card links to /cabanas/[slug].
   ============================================================ */
export function Cabins() {
  return (
    <section id="cabanas" aria-labelledby="cabanas-title" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            id="cabanas-title"
            eyebrow="Nuestras cabañas"
            title="Espacios cálidos para descansar en el corazón de Mazamitla"
            description="Cada cabaña está diseñada con madera, piedra y detalles artesanales para que vivas la montaña con todo el confort."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cabins.map((cabin, i) => (
            <Reveal key={cabin.slug} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Link href={`/cabanas/${cabin.slug}`} className="relative block aspect-4/3 overflow-hidden bg-muted">
                  <Image
                    src={cabin.image}
                    alt={cabin.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-pine-deep/0 transition-colors duration-500 group-hover:bg-pine-deep/30">
                    <span className="translate-y-3 rounded-full bg-white/95 px-5 py-2 text-sm font-semibold text-pine-deep opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      Ver cabaña
                    </span>
                  </span>
                  {cabin.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-wood px-3 py-1 text-xs font-semibold text-white">
                      Más reservada
                    </span>
                  )}
                  <span className="sr-only">Ver detalles de {cabin.name}</span>
                </Link>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="size-4 text-wood" aria-hidden="true" />
                    {cabin.guests}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-pine-deep">
                    <Link href={`/cabanas/${cabin.slug}`} className="transition-colors hover:text-wood">
                      {cabin.name}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cabin.shortDescription}</p>

                  <ul className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6" aria-label="Amenidades">
                    {cabin.features.map((key) => {
                      const { icon: Icon, label } = amenities[key]
                      return (
                        <li key={key} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="flex size-8 items-center justify-center rounded-full bg-secondary text-pine">
                            <Icon className="size-4" aria-hidden="true" />
                          </span>
                          {label}
                        </li>
                      )
                    })}
                  </ul>

                  <div className="mt-auto flex items-end justify-between gap-4 pt-7">
                    <p className="text-sm text-muted-foreground">
                      Desde
                      <span className="block font-serif text-2xl font-semibold text-pine-deep">
                        {cabin.priceFrom}
                        <span className="font-sans text-sm font-normal text-muted-foreground"> /noche</span>
                      </span>
                    </p>
                    <Link
                      href={`/cabanas/${cabin.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-pine px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-pine-deep"
                    >
                      Ver Detalles / Reservar
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
