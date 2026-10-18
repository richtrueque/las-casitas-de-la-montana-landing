'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { articles } from '@/lib/actividades'
import { ArticleCard } from './article-card'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Activities() {
  const latest = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)

  const ref = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)
  const moved = useRef(0)

  const getStep = () => {
    if (!ref.current?.firstElementChild) return 336
    const card = ref.current.firstElementChild as HTMLElement
    return card.offsetWidth + 16 // gap-4
  }

  const down = (x: number) => {
    if (!ref.current) return
    isDown.current = true
    startX.current = x
    startScroll.current = ref.current.scrollLeft
    moved.current = 0
    ref.current.style.scrollSnapType = 'none'
  }
  const move = (x: number) => {
    if (!isDown.current || !ref.current) return
    moved.current = x - startX.current
    ref.current.scrollLeft = startScroll.current - moved.current
  }
  const up = () => {
    if (!ref.current) return
    if (!isDown.current) return
    const step = getStep()
    const startIndex = Math.round(startScroll.current / step)
    let target = Math.round(ref.current.scrollLeft / step)

    // si recorres más de 4px, cambia a la siguiente/anterior
    if (Math.abs(moved.current) > 4) {
      target = moved.current < 0 ? startIndex + 1 : startIndex - 1
    }

    target = Math.max(0, Math.min(target, latest.length - 1))
    ref.current.style.scrollSnapType = 'x mandatory'
    ref.current.style.scrollBehavior = 'smooth'
    ref.current.scrollTo({ left: target * step, behavior: 'smooth' })
    isDown.current = false
  }

  return (
    <section id="actividades" className="bg-background py-24 md:py-32 overflow-x-clip">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            id="actividades-title"
            eyebrow="Actividades"
            title="Guías y consejos para tu viaje a Mazamitla"
            description="Artículos sobre senderos, gastronomía, el Pueblo Mágico y todo lo que puedes vivir en la Sierra del Tigre."
          />
        </Reveal>

        {/* WEB: TU GRID ORIGINAL */}
        <div className="mt-16 hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {latest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 120} className="h-full">
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>

        {/* CEL: sin vw, sin scroll lateral de la página */}
        <div className="mt-16 md:hidden relative w-full overflow-hidden">
          <div
            ref={ref}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-y"
            onTouchStart={(e) => down(e.touches[0].clientX)}
            onTouchMove={(e) => move(e.touches[0].clientX)}
            onTouchEnd={up}
            onMouseDown={(e) => down(e.clientX)}
            onMouseMove={(e) => move(e.clientX)}
            onMouseUp={up}
            onMouseLeave={up}
          >
            {latest.map((article) => (
              <div key={article.slug} className="shrink-0 snap-center w-[88%]">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/actividades"
            className="inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-pine-deep"
          >
            Ver todas las actividades <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}