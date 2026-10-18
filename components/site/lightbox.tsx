'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryImage } from '@/lib/cabins'

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
  const startX = useRef(0)
  const isDragging = useRef(false)
  const [dragX, setDragX] = useState(0)

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

  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true
    startX.current = e.clientX
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return
    // limita el arrastre para que no se vaya al infinito
    const diff = e.clientX - startX.current
    setDragX(Math.max(-220, Math.min(220, diff)))
  }
  const onPointerUp = () => {
    if (!isDragging.current) return
    isDragging.current = false
    if (Math.abs(dragX) > 80) {
      if (dragX < 0) onNavigate((index + 1) % images.length)
      else onNavigate((index - 1 + images.length) % images.length)
    }
    setDragX(0)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${index + 1} de ${images.length}: ${image.alt}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fdf8ee] p-4"
      onClick={onClose}
    >
      {/* FONDO SÓLIDO - YA NO TRANSPARENTE PARA QUE NO SE VEA EL LOGO ATRÁS */}
      <div className="absolute inset-0 bg-[#fdf8ee]" />

      <button
        type="button"
        autoFocus
        onClick={onClose}
        className="absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full bg-white text-[#1a2a24] shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/10 hover:bg-[#1a2a24] hover:text-white"
      >
        <X className="size-6" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((index - 1 + images.length) % images.length)
            }}
            className="absolute left-2 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1a2a24] shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/10 hover:bg-[#1a2a24] hover:text-white md:left-6"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((index + 1) % images.length)
            }}
            className="absolute right-2 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1a2a24] shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/10 hover:bg-[#1a2a24] hover:text-white md:right-6"
          >
            <ChevronRight className="size-6" />
          </button>
        </>
      )}

      <figure className="relative z-10 flex max-h-full w-full max-w-6xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <div
          key={image.src}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          style={{
            transform: `translateX(${dragX}px) scale(${isDragging.current ? 0.98 : 1})`,
            borderRadius: '28px',
          }}
          className="inline-block max-h- max-w- cursor-grab select-none overflow-hidden rounded- bg-white shadow-[0_40px_120px_rgba(0,0,0,0.28),0_16px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/10 transition-transform duration-200 active:cursor-grabbing"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1920}
            height={1280}
            sizes="92vw"
            className="h-auto w-auto max-h- max-w- rounded- object-contain"
            style={{ borderRadius: '28px', width: 'auto', height: 'auto', maxWidth: '92vw', maxHeight: '78vh', display: 'block' }}
            priority
            draggable={false}
          />
        </div>
        <figcaption className="mt-5 text-center text- font-medium text-[#1a2a24]">
          {image.alt}
          <span className="ml-3 text-[#5f736d]">{index + 1} / {images.length}</span>
        </figcaption>
      </figure>
    </div>
  )
}