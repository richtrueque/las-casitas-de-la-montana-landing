import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Cabins } from '@/components/site/cabins'
import { Gallery } from '@/components/site/gallery'
import { PetFriendly } from '@/components/site/pet-friendly'
import { Reviews } from '@/components/site/reviews'
import { Location } from '@/components/site/location'
import { ThingsToDo } from '@/components/site/things-to-do'
import { Contact } from '@/components/site/contact'
import { Activities } from '@/components/site/activities'
import { Footer } from '@/components/site/footer'
import type { Metadata } from 'next'
import { FaqMazamitla } from '@/components/site/faq'

export const metadata = {
  title: "Cabañas en Mazamitla | Pet Friendly y con Chimenea | Las Casitas de la Montaña",
  description: "Renta cabañas en Mazamitla para 6 personas, pet friendly y con chimenea. A 3 min del centro. Reserva directa sin comisiones en Las Casitas de la Montaña.",
  alternates: { canonical: "https://www.xn--cabaasmazamitlalascasitas-coc.com/" },
  openGraph: {
    title: "Cabañas en Mazamitla | Las Casitas de la Montaña",
    description: "Cabañas equipadas en el bosque de Mazamitla. Pet friendly, chimenea y cocina completa.",
  }
};
// H1 en el JSX: Cabañas en Mazamitla en el Bosque
/**
 * Las Casitas de la Montaña — landing page.
 * Each section lives in /components/site for easy editing.
 */
export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cabins />
        <Gallery />
        <PetFriendly />
        <Reviews />
        <Location />
        <FaqMazamitla />
        <ThingsToDo />
        <Contact />
        <Activities />
      </main>
      <Footer />
    </>
  )
}
