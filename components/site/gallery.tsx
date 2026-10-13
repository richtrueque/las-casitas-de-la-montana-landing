'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { Expand } from 'lucide-react'
import { homeGallery } from '@/lib/cabins'
import { cn } from '@/lib/utils'
import { Lightbox } from './lightbox'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

/* ============================================================
   GALERÍA
   Edit the photo list in /lib/cabins.ts → `homeGallery`.
   ============================================================ */

// Mosaic layout: some tiles span two rows/columns on large screens
const tileSpans = [
  'lg:col-span-2 lg:row-span-2',
  '',
  '',
  'lg:row-span-2',
  '',
  'lg:col-span-2',
  '',
  '',
]

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="galeria" aria-labelledby="galeria-title" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            id="galeria-title"
            eyebrow="Galería"
            title="Momentos en la montaña"
            description="Un vistazo a nuestras cabañas, el bosque y los pequeños detalles que hacen única tu estancia. Toca cualquier foto para verla en grande."
          />
        </Reveal>

        <ul className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:gap-4 lg:grid-cols-4">
          {homeGallery.map((image, i) => (
            <li key={image.src} className={cn('min-h-0', tileSpans[i % tileSpans.length])}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block size-full overflow-hidden rounded-xl bg-muted shadow-sm ring-1 ring-border transition-all duration-500 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-wood active:scale-[0.97]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-active:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-pine-deep/80 via-pine-deep/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-4 items-end justify-between gap-3 p-4 text-left text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="line-clamp-2">{image.alt}</span>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    <Expand className="size-4" aria-hidden="true" />
                  </span>
                </span>
                <span className="sr-only">Ampliar foto: {image.alt}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox images={homeGallery} index={active} onClose={close} onNavigate={setActive} />
    </section>
  )
}
