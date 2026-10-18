'use client'

import { useRef } from 'react'
import { Quote, Star } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const reviews = [
  { name: 'Sergio Iván López', origin: 'Guadalajara, Jal.', stay: 'Cabaña de La Estrella', text: 'Como siempre excelente servicio y atención de nuestro anfitrión Ricardo Valle' },
  { name: 'Mariana G.', origin: 'Guadalajara, Jal.', stay: 'Cabaña de la Luna', text: 'Todo impecable, la cabaña estaba súper limpia y olía a madera. Despertar con la neblina entre los pinos fue mágico. Sin duda regresamos.' },
  { name: 'Carlos y Sofía R.', origin: 'Ciudad de México', stay: 'Cabaña del Sol', text: 'La chimenea fue lo mejor del viaje: noches frías, chocolate caliente y una vista increíble al atardecer. Perfecto para desconectarse.' },
  { name: 'Familia Hernández', origin: 'Morelia, Mich.', stay: 'Cabaña del Sol', text: 'Los anfitriones fueron muy atentos desde la reservación. Nos recomendaron dónde comer y habia espacio para que jugara nuestro perro. Hospitalidad de 10.' },
  { name: 'Familia Vazquez', origin: 'Leon, Gto.', stay: 'Cabaña de La Estrella', text: 'Pasamos un fin de semana muy agradable. La cabaña es perfecta para relajarse y disfrutar de la naturaleza y la comodidad de caminar unas cuadras y llegar al pueblo.' },
]

export function Reviews() {
  const ref = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)

  const down = (x: number) => {
    if (!ref.current) return
    isDown.current = true
    startX.current = x
    startScroll.current = ref.current.scrollLeft
    ref.current.classList.add('cursor-grabbing')
  }
  const move = (x: number) => {
    if (!isDown.current || !ref.current) return
    ref.current.scrollLeft = startScroll.current - (x - startX.current)
  }
  const up = () => {
    isDown.current = false
    ref.current?.classList.remove('cursor-grabbing')
  }

  return (
    <section id="resenas" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Reseñas"
            title="Lo que dicen nuestros huéspedes"
            description="Calificación promedio de 4.9 de 5 con más de 300 estancias."
          />
        </Reveal>
      </div>

      <div
        ref={ref}
        className="mt-16 flex gap-6 overflow-x-auto px-5 md:px-8 pb-10 cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseDown={(e) => down(e.clientX)}
        onMouseMove={(e) => move(e.clientX)}
        onMouseUp={up}
        onMouseLeave={up}
        onTouchStart={(e) => down(e.touches[0].clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
        onTouchEnd={up}
      >
        {reviews.map((review, i) => (
          <div key={review.name} className="shrink-0" style={{ width: '380px', minWidth: '380px' }}>
            <Reveal delay={i * 80} className="h-full">
              {/* SOMBRA 45° ABAJO A LA DERECHA */}
              <figure className="flex h-full w-full flex-col rounded-2xl bg-card p-8 shadow-[14px_14px_28px_rgba(26,42,36,0.15),6px_6px_12px_rgba(26,42,36,0.08)] ring-1 ring-black/[0.05]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-wood text-wood" />
                    ))}
                  </div>
                  <Quote className="size-8 text-secondary" />
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-xl leading-relaxed text-pine-deep">
                  {`“${review.text}”`}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <span className="flex size-11 items-center justify-center rounded-full bg-pine font-serif text-lg font-semibold text-white">
                    {review.name.charAt(0)}
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-muted-foreground">{review.origin} · {review.stay}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        ))}
        <div className="w-2 shrink-0" />
      </div>
    </section>
  )
}