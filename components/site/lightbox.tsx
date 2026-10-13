'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryImage } from '@/lib/cabins'

/** Full-screen photo viewer. Closes with Esc, navigates with arrow keys. */
export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}) {
  const isOpen = index !== null

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [index, images.length, onClose, onNavigate])

  if (!isOpen) return null
  const image = images[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${index + 1} de ${images.length}: ${image.alt}`}
      className="lightbox-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        autoFocus
        onClick={onClose}
        className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
      >
        <X className="size-6" aria-hidden="true" />
        <span className="sr-only">Cerrar</span>
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((index - 1 + images.length) % images.length)
            }}
            className="absolute left-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 md:left-6"
          >
            <ChevronLeft className="size-6" aria-hidden="true" />
            <span className="sr-only">Foto anterior</span>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((index + 1) % images.length)
            }}
            className="absolute right-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 md:right-6"
          >
            <ChevronRight className="size-6" aria-hidden="true" />
            <span className="sr-only">Foto siguiente</span>
          </button>
        </>
      )}

      <figure className="flex max-h-full w-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <div key={image.src} className="lightbox-image relative aspect-[3/2] w-full max-h-[78vh]">
          <Image src={image.src} alt={image.alt} fill sizes="100vw" className="rounded-xl object-contain" priority />
        </div>
        <figcaption className="mt-4 text-center text-sm text-white/80">
          {image.alt}
          <span className="ml-3 text-white/50">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
