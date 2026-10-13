import { Bike, Church, Footprints, Utensils } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

/* ============================================================
   7. QUÉ HACER EN MAZAMITLA (local SEO content)
   Uses semantic <article> + descriptive copy with local keywords.
   ============================================================ */
const activities = [
  {
    icon: Footprints,
    title: 'Senderismo en la Sierra',
    text: 'Recorre los senderos del Parque El Tabardillo y la Sierra del Tigre. Descubre la cascada El Salto, miradores naturales y bosques de pino y encino ideales para caminatas de todos los niveles.',
    tag: 'Naturaleza',
  },
  {
    icon: Church,
    title: 'Centro Histórico y Parroquia de San Cristóbal',
    text: 'Pasea por las calles empedradas de este Pueblo Mágico, con casas de adobe y tejados rojos. Visita la Parroquia de San Cristóbal, de estilo único con influencia oriental, y el kiosco de la plaza principal.',
    tag: 'Pueblo Mágico',
  },
  {
    icon: Utensils,
    title: 'Gastronomía local: botes y birria',
    text: 'Prueba el tradicional “bote”, un guiso de carnes cocinado con pulque, y los famosos tacos de birria. Acompáñalos con ponche, rompope, cajeta y conservas artesanales de frutas de la región.',
    tag: 'Sabores',
  },
  {
    icon: Bike,
    title: 'Paseos en cuatrimoto o a caballo',
    text: 'Vive la aventura recorriendo caminos de terracería en cuatrimoto o disfruta de un tranquilo paseo a caballo entre el bosque. Perfecto para familias y grupos de amigos.',
    tag: 'Aventura',
  },
]

export function ThingsToDo() {
  return (
    <section aria-labelledby="que-hacer-title" className="border-t border-border bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            id="que-hacer-title"
            eyebrow="Guía local"
            title="Qué hacer en Mazamitla"
            description="Mazamitla, Jalisco, es uno de los Pueblos Mágicos más encantadores de México. Estas son nuestras recomendaciones para aprovechar al máximo tu estancia."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {activities.map(({ icon: Icon, title, text, tag }, i) => (
            <Reveal key={title} delay={(i % 2) * 120} className="h-full">
              <article className="group flex h-full gap-5 rounded-2xl bg-card p-7 ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-pine text-white transition-colors group-hover:bg-wood">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood">{tag}</p>
                  <h3 className="mt-1.5 font-serif text-2xl font-semibold leading-snug text-pine-deep">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
