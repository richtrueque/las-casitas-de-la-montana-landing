import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { articles } from '@/lib/actividades'
import { ArticleCard } from './article-card'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

/* ============================================================
   ACTIVIDADES (blog SEO)
   Shows the 3 latest articles from /lib/actividades.ts
   ============================================================ */
export function Activities() {
  const latest = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)

  return (
    <section id="actividades" aria-labelledby="actividades-title" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            id="actividades-title"
            eyebrow="Actividades"
            title="Guías y consejos para tu viaje a Mazamitla"
            description="Artículos sobre senderos, gastronomía, el Pueblo Mágico y todo lo que puedes vivir en la Sierra del Tigre."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 120} className="h-full">
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/actividades"
            className="inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-pine-deep"
          >
            Ver todas las actividades
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
