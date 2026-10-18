import { Flame, PawPrint, Users, MapPin, ChevronDown } from 'lucide-react'

export function FaqMazamitla() {
  const faqs = [
    {
      icon: Flame,
      label: "CHIMENEA",
      q: "¿Tienen cabañas en Mazamitla con chimenea?",
      a: "Sí, las 3 cabañas Del Sol, La Estrella y La Luna tienen chimenea de leña con leña incluida la primer noche y área para fogata exterior."
    },
    {
      icon: PawPrint,
      label: "PET FRIENDLY",
      q: "¿Son cabañas pet friendly? ¿Cuánto cuesta la mascota?",
      a: "Sí, las 3 cabañas son pet friendly. La mascota sí tiene un costo extra de $200.00 por noche por limpieza. La más rentada para perros es La Estrella porque es la más retirada de las 3 y tiene asador afuera, ideal para que tu perro esté más libre."
    },
    {
      icon: Users,
      label: "CAPACIDAD",
      q: "¿Tienen cabañas para 6 u 8 personas?",
      a: "Todas nuestras cabañas son para 6 personas con 2 camas matrimoniales, 1 sofá cama y cocina equipada. Si son 8 personas y es una emergencia porque no encontraron dónde dormir, los apoyamos y las acomodamos para 8. Escríbenos por WhatsApp."
    },
    {
      icon: MapPin,
      label: "UBICACIÓN",
      q: "¿A qué distancia están del centro y de la Cascada El Salto?",
      a: "Estamos a 3 minutos en auto del centro histórico de Mazamitla y a 10 minutos de la Cascada El Salto. Estamos cerca del centro pero rodeados de pinos."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <section className="bg-pine-deep py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-beige/60">RESOLVEMOS TUS DUDAS</p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-tight text-white text-balance md:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-beige/70">
            Todo lo que nos preguntan antes de reservar. Si tienes otra duda, escríbenos por WhatsApp y te respondemos al momento.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:col-span-3">
          {faqs.map((f) => {
            const Icon = f.icon
            return (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-1 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.4)] open:bg-white/[0.07]"
              >
                <summary className="flex cursor-pointer list-none items-start gap-4 p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-wood text-white transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <Icon className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text- font-semibold uppercase tracking-[0.2em] text-wood transition-colors group-hover:text-beige">{f.label}</span>
                    <span className="mt-1 block font-serif text-lg font-medium leading-snug text-white">{f.q}</span>
                  </span>
                  <ChevronDown className="mt-1 size-5 shrink-0 text-beige/40 transition-all duration-300 group-hover:text-beige/80 group-open:rotate-180" />
                </summary>
                <div className="grid grid-rows- transition-all duration-300 ease-out group-open:grid-rows-">
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 pl-">
                      <p className="text- leading-relaxed text-beige/75 text-pretty">{f.a}</p>
                    </div>
                  </div>
                </div>
              </details>
            )
          })}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  )
}