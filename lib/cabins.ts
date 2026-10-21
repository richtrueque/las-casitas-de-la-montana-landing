import { CookingPot, Flame, Sun, Wifi, type LucideIcon } from 'lucide-react'

/**
 * Datos de las cabañas.
 * Para cambiar fotos, reemplaza los archivos en /public/images
 * o actualiza las rutas en `image` y `gallery`.
 */
export type GalleryImage = { src: string; alt: string }

export type Cabin = {
  slug: string
  name: string
  tagline: string
  image: string
  alt: string
  guests: string
  bedrooms: number
  beds: string
  baths: number
  priceFrom: string
  shortDescription: string
  description: string[]
  features: AmenityKey[]
  extras: string[]
  prices: { label: string; detail: string; price: string }[]
  gallery: GalleryImage[]
  featured?: boolean
}

export type AmenityKey = 'fireplace' | 'kitchen' | 'terrace' | 'wifi'

export const amenities: Record<AmenityKey, { icon: LucideIcon; label: string }> = {
  fireplace: { icon: Flame, label: 'Chimenea' },
  kitchen: { icon: CookingPot, label: 'Cocina completa' },
  terrace: { icon: Sun, label: 'Area de Fogata' },
  wifi: { icon: Wifi, label: 'Wi-Fi' },
}

export const cabins: Cabin[] = [
  {
    slug: 'del-sol',
    name: 'Cabaña del Sol',
    tagline: 'Un refugio íntimo envuelto en la neblina del bosque',
    image: '/images/renta-cabanas-mazamitla-del sol.webp',
    alt: 'Cabaña de madera estilo A rodeada de pinos y neblina',
    guests: 'Hasta 4 huéspedes',
    bedrooms: 1,
    beds: '2 camas Matrimoniales + sofá cama',
    baths: 2,
    priceFrom: '$1,800',
    shortDescription:
      'Ideal para parejas o familias pequeñas. Despierta envuelto en la neblina matutina del bosque.',
    description: [
      'La Cabaña del Sol esta diseñada para quienes buscan desconectarse por completo un fin de semana. Descanza por la noche y al amanecer disfruta la neblina que cubre la sierra cada mañana.',
      'Por la noche, enciende la chimenea, prepara un chocolate caliente en la cocineta equipada y disfruta del silencio del bosque frenta al fuego. Un espacio perfecto para aniversarios, lunas de miel o un fin de semana en pareja.',
    ],
    features: ['fireplace', 'kitchen', 'terrace', 'wifi'],
    extras: ['Cocina completa equipada', 'Smart TV', 'Leña incluida la primera noche', 'Cobertores', 'Estacionamiento', 'Pet-friendly'],
    prices: [
      { label: 'Toda la semana', detail: 'Por noche, hasta 4 personas', price: '$1,800' },
      { label: 'Toda la semana', detail: 'Por noche, hasta 6 personas', price: '$2,400' },
      { label: 'Temporada alta y puentes', detail: 'Por noche, hasta 4 personas', price: '$2,500' },
      { label: 'Temporada alta y puentes', detail: 'Por noche, hasta 6 personas', price: '$3,100' },
    ],
    gallery: [
      { src: '/images/renta-cabanas-mazamitla-del sol2.webp', alt: 'Flores al exterior de la Cabaña del Sol pinos' },
      { src: '/images/renta-cabanas-mazamitla-cocina.webp', alt: 'Cocina completa equipada' },
      { src: '/images/renta-cabanas-mazamitla-interior-sol.webp', alt: 'Sala con chimenea' },
      { src: '/images/renta-cabanas-mazamitla-fuego.webp', alt: 'Fuego dentro de la chimenea' },
      { src: '/images/renta-cabanas-mazamitla-chimenea.webp', alt: 'Chimenea' },
      { src: '/images/renta-cabanas-mazamitla-t.v.webp', alt: 'Televison inteligente' },
      { src: '/images/renta-cabanas-mazamitla-alta_vista-laetral.webp', alt: 'Vista alta desde la cabaña' },
      { src: '/images/renta-cabanas-mazamitla-camas.webp', alt: 'Recámara con vista al bosque con neblina' },
    ],
  },
  {
    slug: 'la-luna',
    name: 'Cabaña de la Luna',
    tagline: 'Amplitud, piedra y madera bajo pinos centenarios',
    image: '/images/renta-cabanas-mazamitla-del sol.webp',
    alt: 'Sala interior con chimenea de piedra y ventanal al bosque',
    guests: 'Hasta 4 huéspedes',
    bedrooms: 2,
    beds: '2 camas Matrimoniales + sofá cama',
    baths: 2,
    priceFrom: '$1,800',
    shortDescription:
      'Amplia sala con chimenea de piedra en un cálido refugio para convivir en armonia.',
    description: [
      'El Pino Alto es nuestra cabaña más reservada. Su sala de doble altura con chimenea de piedra es el corazón de la casa: el lugar ideal para reunirse después de un día de senderismo.',
      'Cuenta con dos recámaras, dos baños completos y una cocina equipada con comedor de madera maciza. Los ventanales de piso a techo te permiten disfrutar del bosque desde cualquier rincón.',
    ],
    features: ['fireplace', 'kitchen', 'terrace', 'wifi'],
    extras: ['Cocina completa equipada', 'Smart TV', 'Leña incluida la primera noche', 'Cobertores', 'Estacionamiento', 'Pet-friendly'],
     prices: [
      { label: 'Toda la semana', detail: 'Por noche, hasta 4 personas', price: '$1,800' },
      { label: 'Toda la semana', detail: 'Por noche, hasta 6 personas', price: '$2,400' },
      { label: 'Temporada alta y puentes', detail: 'Por noche, hasta 4 personas', price: '$2,500' },
      { label: 'Temporada alta y puentes', detail: 'Por noche, hasta 6 personas', price: '$3,100' },
    ],
    gallery: [
      { src: '/images/renta-cabanas-mazamitla-del sol2.webp', alt: 'Flores al exterior de la Cabaña del Sol pinos' },
      { src: '/images/renta-cabanas-mazamitla-cocina.webp', alt: 'Cocina completa equipada' },
      { src: '/images/renta-cabanas-mazamitla-interior-sol.webp', alt: 'Sala con chimenea' },
      { src: '/images/renta-cabanas-mazamitla-fuego.webp', alt: 'Fuego dentro de la chimenea' },
      { src: '/images/renta-cabanas-mazamitla-chimenea.webp', alt: 'Chimenea' },
      { src: '/images/renta-cabanas-mazamitla-t.v.webp', alt: 'Televison inteligente' },
      { src: '/images/renta-cabanas-mazamitla-alta_vista-laetral.webp', alt: 'Vista alta desde la cabaña' },
      { src: '/images/renta-cabanas-mazamitla-camas.webp', alt: 'Recámara con vista al bosque con neblina' },
    ],
  },
  {
    slug: 'la-estrella',
    name: 'Cabaña de la Estrella',
    tagline: 'Dos niveles de luz natural para disfrutar en familia',
    image: '/images/renta-cabanas-mazamitla-del sol.webp',
    alt: 'Cabaña de troncos de dos pisos con terraza bajo el sol',
    guests: 'Hasta 4 huéspedes',
    bedrooms: 2,
    beds: '2 camas Matrimoniales + sofá cama',
    baths: 2,
    priceFrom: '$1,800',
    shortDescription:
      'Disfruta de la chimenea y un asador al aire libre rodeado de pinos,perfecta para reuniones familiares.',
    description: [
      'La Estrella es una cabaña de troncos de dos niveles que recibe el sol durante todo el día. Su sala de doble altura y su escalera de madera le dan un ambiente cálido y familiar.',
      'Afuera encontrarás un área verde privada con fogatero, ideal para que los niños y las mascotas jueguen con total seguridad, y un balcón con hamaca con vista al valle.',
    ],
    features: ['fireplace', 'kitchen', 'terrace', 'wifi'],
    extras: ['Cocina completa equipada', 'Smart TV', 'Leña incluida la primera noche', 'Cobertores', 'Estacionamiento', 'Asador exterior', 'Pet-friendly'],
    prices: [
      { label: 'Toda la semana', detail: 'Por noche, hasta 4 personas', price: '$1,800' },
      { label: 'Toda la semana', detail: 'Por noche, hasta 6 personas', price: '$2,400' },
      { label: 'Temporada alta y puentes', detail: 'Por noche, hasta 4 personas', price: '$2,500' },
      { label: 'Temporada alta y puentes', detail: 'Por noche, hasta 6 personas', price: '$3,100' },
    ],
    gallery: [
      { src: '/images/renta-cabanas-mazamitla-del sol2.webp', alt: 'Flores al exterior de la Cabaña del Sol pinos' },
      { src: '/images/renta-cabanas-mazamitla-cocina.webp', alt: 'Cocina completa equipada' },
      { src: '/images/renta-cabanas-mazamitla-interior-sol.webp', alt: 'Sala con chimenea' },
      { src: '/images/renta-cabanas-mazamitla-fuego.webp', alt: 'Fuego dentro de la chimenea' },
      { src: '/images/renta-cabanas-mazamitla-chimenea.webp', alt: 'Chimenea' },
      { src: '/images/renta-cabanas-mazamitla-t.v.webp', alt: 'Televison inteligente' },
      { src: '/images/renta-cabanas-mazamitla-alta_vista-laetral.webp', alt: 'Vista alta desde la cabaña' },
      { src: '/images/renta-cabanas-mazamitla-camas.webp', alt: 'Recámara con vista al bosque con neblina' },
    ],
    featured: true,
  },
]

export function getCabin(slug: string) {
  return cabins.find((cabin) => cabin.slug === slug)
}

/** Fotos que aparecen en la sección "Galería" de la página principal. */
export const homeGallery: GalleryImage[] = [
  { src: '/images/hero-bosque.webp', alt: 'Bosque de pinos con neblina en Mazamitla' },
  { src: '/images/fogata.cabanas-mazamitla-cabanas.webp', alt: 'Área de fogata en Las Casitas De La Montaña' },
  { src: '/images/renta-cabanas-mazamitla-jardines.webp', alt: 'Area de jardines de las cabañas' },
  { src: '/images/renta-cabanas-mazamitla-asador.webp', alt: 'Asador junto a la cabaña Estrella' },
  { src: '/images/renta-cabanas-mazamitla-noche.webp', alt: 'Noche en Las Casitas De La Montaña' },
  { src: '/images/atardecer-cabanas-mazamitla.webp', alt: 'Atardecer en Las Casitas De La Montaña' },
  { src: '/images/pet-friendly.png', alt: 'Perro feliz en los senderos del bosque' },
  { src: '/images/renta-cabanas-mazamitla-fuego.webp', alt: 'Fuego dentro de la chimenea' },
  { src: '/images/renta-cabanas-mazamitla-chimenea.webp', alt: 'Chimenea' },
  { src: '/images/renta-cabanas-mazamitla-sala.webp', alt: 'Sala acogedora' },
  { src: '/images/renta-cabanas-mazamitla-cocina.webp', alt: 'Cocina completa equipada' },
  { src: '/images/renta-cabanas-mazamitla-del sol2.webp', alt: 'Cabaña del Sol' },
  { src: '/images/renta-cabanas-mazamitla-area-fogata.webp', alt: 'Área de fogata con asador' },
  { src: '/images/renta-cabanas-mazamitla-planta_alta.webp', alt: 'Planta alta' },
  { src: '/images/renta-cabanas-mazamitla-alta-baul.webp', alt: 'Planta alta baul' },
  { src: '/images/renta-cabanas-mazamitla-desayunador.webp', alt: 'Desayunador cabaña' },
]
