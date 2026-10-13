import type { Metadata } from 'next'
import Image from 'next/image'
import { articles } from '@/lib/actividades'
import { site } from '@/lib/site'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { ArticleCard } from '@/components/site/article-card'
import { Reveal } from '@/components/site/reveal'

/* ============================================================
   LISTADO DE ACTIVIDADES  →  /actividades
   Add new articles in /lib/actividades.ts
   ============================================================ */
export const metadata: Metadata = {
  title: `Actividades y qué hacer en Mazamitla | ${site.name}`,
  description:
    'Guías de viaje sobre Mazamitla, Jalisco: senderismo, cascadas, el Pueblo Mágico, gastronomía típica y turismo pet-friendly.',
}

export default function ActividadesPage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[55svh] items-end overflow-hidden bg-pine-deep">
          <Image src="/images/hero-bosque.png" alt="" fill priority sizes="100vw" className="object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/40 to-transparent" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-beige/80">Actividades</p>
            <h1 className="mt-3 max-w-3xl font-serif text-5xl font-medium leading-tight text-white text-balance md:text-6xl">
              Qué hacer en Mazamitla
            </h1>
            <p className="mt-4 max-w-xl text-lg text-beige/90 text-pretty">
              Guías locales escritas por nuestros anfitriones para que vivas lo mejor de la Sierra del Tigre.
            </p>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 md:px-8 lg:grid-cols-3">
            {sorted.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 3) * 100} className="h-full">
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
