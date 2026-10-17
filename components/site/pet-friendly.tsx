import Image from 'next/image'
import { Footprints, Heart, PawPrint, Trees } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const perks = [
  {
    icon: Heart,
    title: 'Bienvenida para toda la familia',
    text: 'un refugio entre los pinos donde tus mascotas son un miembro más y disfrutan de la libertad de la naturaleza.',
  },
  {
    icon: Trees,
    title: 'Amplias áreas verdes',
    text: 'Jardines abiertos para que corran, jueguen y disfruten del aire de montaña.',
  },
  {
    icon: Footprints,
    title: 'Senderos para perros',
    text: 'Rutas señalizadas entre pinos para explorar el bosque con tu mejor amigo en el parque ecológico El Tecolote.',
  },
  {
    icon: PawPrint,
    title: 'Costo extra $200.00 por mascota por noche.',
    text: 'Se aceptan perros de hasta 15 kg. Por higiene y mantenimiento, no se permite que las mascotas suban a las camas o sillones.Tu mascota puede explorar libremente el jardín, siempre bajo la supervisión de un adulto.Es responsabilidad del dueño recoger las heces de su mascota y depositarlas en los botes exteriores. Por respeto a otros huéspedes y a la fauna local, mantén a tu perro con correa fuera de la cabaña. Agradecemos limpiar las patas de tu mascota antes de entrar a la cabaña, especialmente si llovió.',
  },
]

export function PetFriendly() {
  return (
    <section
      id="experiencias"
      aria-labelledby="pet-title"
      className="relative overflow-hidden bg-pine-deep py-24 text-white md:py-32"
    >
      <PawPrint
        className="pointer-events-none absolute -right-16 -top-10 size-80 rotate-12 text-white/[0.04]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">

        {/* FOTO DESKTOP - solo se ve en lg */}
        <Reveal className="hidden lg:order-1 lg:block">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/pet-friendly.png"
                alt="Perro feliz caminando por un sendero del bosque de pinos"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-6 flex items-center gap-3 rounded-xl bg-beige px-5 py-4 text-pine-deep shadow-xl sm:right-10">
              <span className="flex size-11 items-center justify-center rounded-full bg-wood text-white">
                <PawPrint className="size-5" aria-hidden="true" />
              </span>
              <p className="text-sm leading-tight">
                <span className="block font-serif text-xl font-semibold">100% Pet-Friendly</span>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              id="pet-title"
              tone="light"
              align="left"
              eyebrow="Turismo Pet-Friendly"
              title="Aquí tu mascota también está de vacaciones"
              description="Sabemos que tu perro es parte de la familia. Por eso nuestras cabañas y areas verdes están pensados para que todos disfruten su estancia con nosotros."
            />
          </Reveal>

          {/* FOTO MÓVIL - aparece ANTES de Bienvenida solo en cel */}
          <Reveal className="mt-10 lg:hidden">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/pet-friendly.png"
                  alt="Perro feliz caminando por un sendero del bosque de pinos"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-6 flex items-center gap-3 rounded-xl bg-beige px-5 py-4 text-pine-deep shadow-xl sm:right-10">
                <span className="flex size-11 items-center justify-center rounded-full bg-wood text-white">
                  <PawPrint className="size-5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-tight">
                  <span className="block font-serif text-xl font-semibold">100% Pet-Friendly</span>
                </p>
              </div>
            </div>
          </Reveal>

          <ul className="mt-10 flex flex-col gap-6">
            {perks.map(({ icon: Icon, title, text }, i) => (
              <li key={title}>
                <Reveal delay={i * 120}>
                  <div className="flex gap-5 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-wood/90">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-beige/80">{text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}