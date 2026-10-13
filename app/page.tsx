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
        <ThingsToDo />
        <Contact />
        <Activities />
      </main>
      <Footer />
    </>
  )
}
