import { Quote, Star } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

/* ============================================================
   5. RESEÑAS
   ============================================================ */
const reviews = [
  {
    name: 'Mariana G.',
    origin: 'Guadalajara, Jal.',
    stay: 'Cabaña Bosque Neblina',
    text: 'Todo impecable, la cabaña estaba súper limpia y olía a madera. Despertar con la neblina entre los pinos fue mágico. Sin duda regresamos.',
  },
  {
    name: 'Carlos y Sofía R.',
    origin: 'Ciudad de México',
    stay: 'Cabaña El Pino Alto',
    text: 'La chimenea fue lo mejor del viaje: noches frías, chocolate caliente y una vista increíble al bosque desde el ventanal. Perfecto para desconectarse.',
  },
  {
    name: 'Familia Hernández',
    origin: 'Morelia, Mich.',
    stay: 'Cabaña Rústica del Sol',
    text: 'Los anfitriones fueron muy atentos desde la reservación. Nos recomendaron dónde comer y hasta tenían premios para nuestro perro. Hospitalidad de 10.',
  },
]

export function Reviews() {
  return (
    <section id="resenas" aria-labelledby="resenas-title" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            id="resenas-title"
            eyebrow="Reseñas"
            title="Lo que dicen nuestros huéspedes"
            description="Calificación promedio de 4.9 de 5 con más de 300 estancias."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 120} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1" role="img" aria-label="5 de 5 estrellas">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-wood text-wood" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="size-8 text-secondary" aria-hidden="true" />
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-xl leading-relaxed text-pine-deep">
                  {`“${review.text}”`}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <span
                    className="flex size-11 items-center justify-center rounded-full bg-pine font-serif text-lg font-semibold text-white"
                    aria-hidden="true"
                  >
                    {review.name.charAt(0)}
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-muted-foreground">
                      {review.origin} · {review.stay}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
