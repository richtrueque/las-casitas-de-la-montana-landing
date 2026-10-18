'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Expand } from 'lucide-react'
import { homeGallery } from '@/lib/cabins'
import { Lightbox } from './lightbox'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const [current, setCurrent] = useState(2)
  const close = useCallback(() => setActive(null), [])

  const total = homeGallery.length
  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const startX = useRef(0)
  const isDragging = useRef(false)
  const moved = useRef(false)

  const handleStart = (x: number) => {
    isDragging.current = true
    moved.current = false
    startX.current = x
  }
  const handleMove = (x: number) => {
    if (!isDragging.current) return
    if (Math.abs(x - startX.current) > 10) moved.current = true
  }
  const handleEnd = (x: number) => {
    if (!isDragging.current) return
    const diff = x - startX.current
    isDragging.current = false
    if (Math.abs(diff) > 50) {
      if (diff < 0) next()
      else prev()
    }
  }

  const onPointerDown = (e: React.PointerEvent) => {
    const t = e.target as HTMLElement
    if (t.closest('[data-expand]')) return
    handleStart(e.clientX)
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent) => handleMove(e.clientX)
  const onPointerUp = (e: React.PointerEvent) => handleEnd(e.clientX)
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX)
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX)
  const onTouchEnd = (e: React.TouchEvent) => handleEnd(e.changedTouches[0].clientX)

  const getStyle = (i: number) => {
    let d = i - current
    if (d > total / 2) d -= total
    if (d < -total / 2) d += total
    if (d === 0) return { left: '50%', transform: 'translateX(-50%) scale(1)', zIndex: 20, opacity: 1 } as const
    if (d === -1) return { left: '50%', transform: 'translateX(-118%) scale(0.86)', zIndex: 10, opacity: 0.9 } as const
    if (d === 1) return { left: '50%', transform: 'translateX(18%) scale(0.86)', zIndex: 10, opacity: 0.9 } as const
    if (d === -2) return { left: '50%', transform: 'translateX(-178%) scale(0.68)', zIndex: 5, opacity: 0.35 } as const
    if (d === 2) return { left: '50%', transform: 'translateX(78%) scale(0.68)', zIndex: 5, opacity: 0.35 } as const
    return { opacity: 0, pointerEvents: 'none' as const }
  }

  return (
    <section
      id="galeria"
      className="relative w-full overflow-x-clip"
      style={{ background: '#fdf8ee', paddingTop: '100px', paddingBottom: '200px', overflowX: 'clip' }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.28em', color: '#c68a2e', textTransform: 'uppercase' }}>GALERÍA</p>
          <h2 style={{ marginTop: '14px', fontFamily: 'var(--font-serif)', fontSize: '40px', fontWeight: 500, color: '#1a2a24', lineHeight: '1.1' }}>Momentos en la montaña</h2>
          <p style={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.6', color: '#5f736d' }}>
            Un vistazo a nuestras cabañas, el bosque y los pequeños detalles que hacen única tu estancia.
          </p>
        </div>

        <div style={{ marginTop: '90px', position: 'relative' }} className="mt-8 md:mt-">
          <div
            className="relative mx-auto max-w-6xl select-none cursor-grab touch-pan-y active:cursor-grabbing"
            style={{ height: '460px', overflow: 'visible' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {homeGallery.map((img, i) => {
              const isCenter = i === current
              return (
                <div key={img.src} className="absolute top-1/2 -translate-y-1/2 transition-all duration-500" style={getStyle(i)}>
                  <div
                    className="relative block overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.22)] ring-1 ring-black/10"
                    style={{ width: 'min(84vw, 500px)', aspectRatio: '4/3', borderRadius: '20px' }}
                  >
                    <button
                      onClick={() => {
                        if (moved.current) return
                        if (!isCenter) {
                          setCurrent(i)
                          return
                        }
                        setActive(i)
                      }}
                      className="absolute inset-0 z-10 overflow-hidden"
                      style={{ borderRadius: '20px' }}
                      aria-label="Ver foto"
                    >
                      <Image src={img.src} alt={img.alt} fill className="object-cover" draggable={false} style={{ borderRadius: '20px' }} />
                    </button>

                    {isCenter && (
                      <button
                        data-expand
                        onPointerDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation()
                          setActive(i)
                        }}
                        className="absolute bottom-3 right-3 z-20 hidden size-9 items-center justify-center rounded-full bg-white text-black shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-colors hover:bg-black hover:text-white md:flex"
                        aria-label="Ampliar"
                      >
                        <Expand className="size-4" />
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 flex justify-center gap-3 md:mt-">
            <button onClick={prev} className="flex size-11 items-center justify-center rounded-full border border-[#e5e5e5] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
              <ArrowLeft className="size-4" />
            </button>
            <button onClick={next} className="flex size-11 items-center justify-center rounded-full border border-[#e5e5e5] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
      <Lightbox images={homeGallery} index={active} onClose={close} onNavigate={setActive} />
    </section>
  )
}