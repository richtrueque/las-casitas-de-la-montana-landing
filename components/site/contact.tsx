import { ArrowUpRight, CalendarCheck, Mail, MapPin, MessageCircle, Phone, Send, Users } from 'lucide-react'
import { cabins } from '@/lib/cabins'
import { site, whatsappLink } from '@/lib/site'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { FacebookIcon, InstagramIcon } from './social-icons'

/* ============================================================
   8. CONTACTO Y RESERVA DIRECTA (todo por WhatsApp)
   ============================================================ */
const steps = [
  { icon: Send, title: 'Escríbenos', text: 'Envíanos un mensaje por WhatsApp con la cabaña que te interesa.' },
  { icon: CalendarCheck, title: 'Comparte tus fechas', text: 'Dinos fechas de llegada, salida y número de huéspedes.' },
  { icon: Users, title: 'Confirma y disfruta', text: 'Te enviamos disponibilidad, tarifa y datos para apartar.' },
]

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-pine-deep py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <Reveal>
            <SectionHeading
              id="contacto-title"
              tone="light"
              align="left"
              eyebrow="Reserva directa"
              title="Planea tu escapada al bosque"
              description="Reserva directamente con nosotros por WhatsApp y obtén la mejor tarifa garantizada. Respondemos en menos de 2 horas."
            />
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-10 flex flex-col gap-5 text-beige/90">
              <li className="flex items-center gap-4">
                <Phone className="size-5 text-wood" aria-hidden="true" />
                <a href={`tel:+${site.whatsappNumber}`} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="size-5 text-wood" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-wood" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
            </ul>

            <div className="mt-10 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-pine-deep"
              >
                <InstagramIcon className="size-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-pine-deep"
              >
                <FacebookIcon className="size-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* WhatsApp booking panel */}
        <Reveal delay={150} className="lg:col-span-3">
          <div className="rounded-2xl bg-card p-7 shadow-2xl md:p-10">
            <div className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-pine-deep">
                <MessageCircle className="size-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-3xl font-medium text-pine-deep">Reserva por WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Rápido, directo y sin comisiones.</p>
              </div>
            </div>

            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {steps.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className="rounded-xl bg-secondary p-5">
                  <div className="flex items-center gap-2 text-wood">
                    <Icon className="size-5" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">Paso {i + 1}</span>
                  </div>
                  <p className="mt-3 font-semibold text-pine-deep">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-sm font-semibold text-pine-deep">Elige tu cabaña y escríbenos:</p>
            <ul className="mt-3 flex flex-col gap-3">
              {cabins.map((cabin) => (
                <li key={cabin.slug}>
                  <a
                    href={whatsappLink(`Hola, me gustaría reservar la ${cabin.name}. Fechas: ___. Personas: ___.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-border px-5 py-4 transition-all hover:border-pine hover:bg-secondary"
                  >
                    <span>
                      <span className="block font-medium text-foreground">{cabin.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {cabin.guests} · Desde {cabin.priceFrom}/noche
                      </span>
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 text-pine transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-base font-semibold text-pine-deep shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
