'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import type { GalleryImage } from '@/lib/cabins'
import { cn } from '@/lib/utils'
import { Lightbox } from '@/components/site/lightbox'

/** Photo carousel with swipe support, thumbnails and click-to-enlarge. */
export function CabinCarousel({ images, cabinName }: { images: GalleryImage[]; cabinName: string }) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const closeLightbox = useCallback(() => setLightbox(null), [])

  const go = (direction: number) => setIndex((i) => (i + direction + images.length) % images.length)

  return (
    <div aria-roledescription="carrusel" aria-label={`Fotos de ${cabinName}`}>
      <div
        className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-xl ring-1 ring-border md:aspect-[16/9]"
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return
          const delta = e.changedTouches[0].clientX - touchStartX.current
          if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1)
          touchStartX.current = null
        }}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightbox(i)}
              aria-hidden={i !== index}
              tabIndex={i === index ? 0 : -1}
              className="relative h-full w-full shrink-0 cursor-zoom-in"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="object-cover"
                priority={i === 0}
              />
              <span className="sr-only">Ampliar foto</span>
            </button>
          ))}
        </div>

        <span className="pointer-events-none absolute right-4 top-4 flex items-center gap-2 rounded-full bg-pine-deep/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
          <Expand className="size-3.5" aria-hidden="true" />
          Toca para ampliar
        </span>

        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-pine-deep shadow-lg transition-all hover:scale-105 hover:bg-white md:left-5"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
          <span className="sr-only">Foto anterior</span>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-pine-deep shadow-lg transition-all hover:scale-105 hover:bg-white md:right-5"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
          <span className="sr-only">Foto siguiente</span>
        </button>

        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-pine-deep/70 px-3 py-1 text-xs font-medium text-white backdrop-blur" aria-live="polite">
          {index + 1} / {images.length}
        </p>
      </div>

      <ul className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image, i) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-current={i === index}
              className={cn(
                'relative block aspect-[4/3] w-full overflow-hidden rounded-lg ring-2 transition-all duration-300',
                i === index ? 'ring-wood' : 'opacity-60 ring-transparent hover:opacity-100',
              )}
            >
              <Image src={image.src} alt="" fill sizes="200px" className="object-cover transition-transform duration-500 hover:scale-110" />
              <span className="sr-only">Ver foto {i + 1}</span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox images={images} index={lightbox} onClose={closeLightbox} onNavigate={setLightbox} />
    </div>
  )
}
