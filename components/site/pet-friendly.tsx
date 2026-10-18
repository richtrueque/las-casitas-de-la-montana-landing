'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Footprints, Heart, PawPrint, Trees, ChevronDown } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const perks = [
  { icon: Heart, title: 'Bienvenida para toda la familia', text: 'Un refugio entre los pinos donde tus mascotas son un miembro más y disfrutan de la libertad de la naturaleza.' },
  { icon: Trees, title: 'Amplias áreas verdes', text: 'Jardines abiertos para que corran, jueguen y disfruten del aire de montaña.' },
  { icon: Footprints, title: 'Senderos para perros', text: 'Rutas señalizadas entre pinos para explorar el bosque con tu mejor amigo en el parque ecológico El Tecolote.' },
  { icon: PawPrint, title: 'Costo extra $200.00 por mascota por noche.', text: 'Se aceptan perros de hasta 15 kg. Por higiene y mantenimiento, no se permite que las mascotas suban a las camas o sillones. Tu mascota puede explorar libremente el jardín, siempre bajo la supervisión de un adulto. Es responsabilidad del dueño recoger las heces de su mascota y depositarlas en los botes exteriores. Por respeto a otros huéspedes y a la fauna local, mantén a tu perro con correa fuera de la cabaña. Agradecemos limpiar las patas de tu mascota antes de entrar a la cabaña, especialmente si llovió.' },
]

export function PetFriendly() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setOpenIndex(3), 600)
        observer.disconnect()
      }
    }, { threshold: 0.35 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experiencias" ref={sectionRef} className="relative bg-pine-deep py-24 text-white md:py-32">
      {/* DECORATIVO AISLADO - este sí puede tener overflow-hidden sin matar el sticky */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <PawPrint className="absolute -right-16 -top-10 size-80 rotate-12 text-white/[0.04]" aria-hidden="true" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-14 px-5 md:px-8 lg:flex-row lg:gap-20">
        <div className="hidden w-full shrink-0 lg:block lg:w-[45%] lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image src="/images/pet-friendly.png" alt="Perro feliz" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 right-6 flex items-center gap-3 rounded-xl bg-beige px-5 py-4 text-pine-deep shadow-xl sm:right-10">
                <span className="flex size-11 items-center justify-center rounded-full bg-wood text-white"><PawPrint className="size-5" /></span>
                <span className="block font-serif text-xl font-semibold">100% Pet-Friendly</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="w-full lg:w-[55%]">
          <Reveal>
            <SectionHeading tone="light" align="left" eyebrow="Turismo Pet-Friendly" title="Aquí tu mascota también está de vacaciones" description="Sabemos que tu perro es parte de la familia. Por eso nuestras cabañas y areas verdes están pensados para que todos disfruten su estancia con nosotros." />
          </Reveal>

          <Reveal className="mt-10 lg:hidden">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image src="/images/pet-friendly.png" alt="Perro feliz" fill sizes="100vw" className="object-cover" />
            </div>
          </Reveal>

          <ul className="mt-10 flex flex-col gap-3">
            {perks.map(({ icon: Icon, title, text }, i) => {
              const isOpen = openIndex === i
              return (
                <li key={title}>
                  <Reveal delay={i * 80}>
                    <div
                      onMouseEnter={() => setOpenIndex(i)}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className={`group cursor-pointer rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-1 ${isOpen ? 'border-white/20 bg-white/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                    >
                      <div className="flex gap-4 p-5">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-wood text-white"><Icon className="size-5" /></span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <span className="font-serif text- font-semibold leading-snug text-white">{title}</span>
                            <ChevronDown className={`mt-1 size-5 shrink-0 text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white/80' : ''}`} />
                          </div>
                          <div style={{ maxHeight: isOpen ? '400px' : '0', opacity: isOpen ? 1 : 0, transition: 'all 300ms ease-out' }} className="overflow-hidden">
                            <p className="pt-3 text-[14.5px] leading-relaxed text-white/70 text-pretty">{text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}