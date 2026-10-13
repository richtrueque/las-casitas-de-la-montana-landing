import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Bath, BedDouble, Check, Clock, MessageCircle, PawPrint, Users } from 'lucide-react'
import { amenities, cabins, getCabin } from '@/lib/cabins'
import { site, whatsappLink } from '@/lib/site'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { Reveal } from '@/components/site/reveal'
import { CabinCarousel } from '@/components/cabin/cabin-carousel'

/* ============================================================
   PÁGINA DE DETALLE DE CABAÑA  →  /cabanas/[slug]
   Content comes from /lib/cabins.ts
   ============================================================ */
export function generateStaticParams() {
  return cabins.map((cabin) => ({ slug: cabin.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cabin = getCabin(slug)
  if (!cabin) return {}
  return {
    title: `${cabin.name} en Mazamitla | ${site.name}`,
    description: `${cabin.tagline}. ${cabin.guests}, desde ${cabin.priceFrom} MXN por noche. Reserva por WhatsApp.`,
    openGraph: { images: [cabin.image] },
  }
}

export default async function CabinPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cabin = getCabin(slug)
  if (!cabin) notFound()

  const otherCabins = cabins.filter((c) => c.slug !== cabin.slug)
  const bookingMessage = `Hola, me gustaría reservar la ${cabin.name}. ¿Tienen disponibilidad para las fechas: ___? Seríamos ___ personas.`

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[75svh] items-end overflow-hidden bg-pine-deep">
          <Image src={cabin.image} alt={cabin.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/50 to-pine-deep/20" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
            <Link
              href="/#cabanas"
              className="inline-flex items-center gap-2 text-sm font-medium text-beige/85 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Todas las cabañas
            </Link>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-tight text-white text-balance md:text-7xl">
              {cabin.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-beige/90 text-pretty">{cabin.tagline}</p>

            <ul className="mt-8 flex flex-wrap gap-3 text-sm text-white">
              <li className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <Users className="size-4" aria-hidden="true" /> {cabin.guests}
              </li>
              <li className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <BedDouble className="size-4" aria-hidden="true" /> {cabin.bedrooms} {cabin.bedrooms === 1 ? 'recámara' : 'recámaras'}
              </li>
              <li className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <Bath className="size-4" aria-hidden="true" /> {cabin.baths} {cabin.baths === 1 ? 'baño' : 'baños'}
              </li>
              <li className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <PawPrint className="size-4" aria-hidden="true" /> Pet-friendly
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink(bookingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-pine-deep shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Reservar por WhatsApp
              </a>
              <a
                href="#fotos"
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ver fotos
              </a>
            </div>
          </div>
        </section>

        {/* Description + Prices */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-5 lg:gap-16">
            <Reveal className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wood">Descripción</p>
              <h2 className="mt-3 font-serif text-4xl font-medium leading-tight text-pine-deep text-balance">
                Tu estancia en {cabin.name}
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {cabin.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>

              <h3 className="mt-10 font-serif text-2xl font-semibold text-pine-deep">Amenidades</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {cabin.features.map((key) => {
                  const { icon: Icon, label } = amenities[key]
                  return (
                    <li key={key} className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 text-sm font-medium text-foreground">
                      <Icon className="size-5 text-pine" aria-hidden="true" />
                      {label}
                    </li>
                  )
                })}
                <li className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 text-sm font-medium text-foreground">
                  <BedDouble className="size-5 text-pine" aria-hidden="true" />
                  {cabin.beds}
                </li>
              </ul>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {cabin.extras.map((extra) => (
                  <li key={extra} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 text-wood" aria-hidden="true" />
                    {extra}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Pricing card */}
            <Reveal delay={120} className="lg:col-span-2">
              <aside aria-labelledby="precios-title" className="rounded-2xl bg-pine-deep p-7 text-white shadow-xl md:p-9 lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-beige/70">Tarifas</p>
                <h2 id="precios-title" className="mt-2 font-serif text-3xl font-medium">
                  Precios por noche
                </h2>
                <ul className="mt-7 flex flex-col divide-y divide-white/10">
                  {cabin.prices.map((price) => (
                    <li key={price.label} className="flex items-center justify-between gap-4 py-4">
                      <div>
                        <p className="font-medium">{price.label}</p>
                        <p className="text-sm text-beige/65">{price.detail}</p>
                      </div>
                      <p className="font-serif text-2xl font-semibold">
                        {price.price}
                        <span className="ml-1 font-sans text-xs font-normal text-beige/60">MXN</span>
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-start gap-2 rounded-xl bg-white/5 p-4 text-sm text-beige/80">
                  <Clock className="mt-0.5 size-4 shrink-0 text-wood" aria-hidden="true" />
                  Check-in 3:00 p.m. · Check-out 12:00 p.m. Precios sujetos a disponibilidad.
                </div>
                <a
                  href={whatsappLink(bookingMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-base font-semibold text-pine-deep transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Consultar disponibilidad
                </a>
              </aside>
            </Reveal>
          </div>
        </section>

        {/* Photo carousel */}
        <section id="fotos" aria-labelledby="fotos-title" className="scroll-mt-24 bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-wood">Galería</p>
              <h2 id="fotos-title" className="mt-3 text-center font-serif text-4xl font-medium text-pine-deep md:text-5xl">
                Conoce cada rincón
              </h2>
            </Reveal>
            <Reveal delay={100} className="mt-12">
              <CabinCarousel images={cabin.gallery} cabinName={cabin.name} />
            </Reveal>
          </div>
        </section>

        {/* Other cabins */}
        <section aria-labelledby="otras-title" className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <h2 id="otras-title" className="font-serif text-3xl font-medium text-pine-deep md:text-4xl">
              Otras cabañas
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {otherCabins.map((other) => (
                <Link
                  key={other.slug}
                  href={`/cabanas/${other.slug}`}
                  className="group relative flex aspect-[16/9] items-end overflow-hidden rounded-2xl"
                >
                  <Image
                    src={other.image}
                    alt={other.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-pine-deep/90 to-transparent" />
                  <span className="relative p-6 text-white">
                    <span className="block font-serif text-2xl font-semibold">{other.name}</span>
                    <span className="text-sm text-beige/85">
                      {other.guests} · Desde {other.priceFrom}/noche
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
