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
  kitchen: { icon: CookingPot, label: 'Cocineta' },
  terrace: { icon: Sun, label: 'Area de Fogata' },
  wifi: { icon: Wifi, label: 'Wi-Fi' },
}

export const cabins: Cabin[] = [
  {
    slug: 'bosque-neblina',
    name: 'Cabaña del Sol',
    tagline: 'Un refugio íntimo envuelto en la neblina del bosque',
    image: '/images/cabana-bosque-neblina.png',
    alt: 'Cabaña de madera estilo A rodeada de pinos y neblina',
    guests: 'Hasta 6 huéspedes',
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
    extras: ['Cocina completa equipada', 'Smart TV','Leña incluida la primera noche', 'Cobertores', 'Estacionamiento', 'Pet-friendly'],
    prices: [
      { label: 'Toda la semana', detail: 'Por noche, hasta 4 personas', price: '$1,800' },
      { label: 'Toda la semana', detail: 'Por noche, hasta 6 personas', price: '$2,400' },
      { label: 'Temporada alta y puentes', detail: 'Por noche, hasta 4 personas', price: '$2,800' },
      { label: 'Temporada alta y puentes', detail: 'Por noche, hasta 6 personas', price: '$3,400' },
    ],
    gallery: [
      { src: '/images/cabana-bosque-neblina.png', alt: 'Exterior de la Cabaña Bosque Neblina entre pinos' },
      { src: '/images/neblina-interior.png', alt: 'Sala con chimenea y ventanal triangular al bosque' },
      { src: '/images/neblina-recamara.png', alt: 'Recámara tipo loft con vista al bosque con neblina' },
      { src: '/images/neblina-terraza.png', alt: 'Terraza de madera con sillas y café al amanecer' },
    ],
  },
  {
    slug: 'el-pino-alto',
    name: 'Cabaña de la Luna',
    tagline: 'Amplitud, piedra y madera bajo pinos centenarios',
    image: '/images/cabana-pino-alto.png',
    alt: 'Sala interior con chimenea de piedra y ventanal al bosque',
    guests: 'Hasta 6 huéspedes',
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
    extras: ['Cocina completa equipada', 'Smart TV','Leña incluida la primera noche', 'Cobertores', 'Estacionamiento', 'Pet-friendly'],
    prices: [
      { label: 'Domingo a jueves', detail: 'Por noche, hasta 6 personas', price: '$3,200' },
      { label: 'Viernes y sábado', detail: 'Por noche, hasta 6 personas', price: '$3,800' },
      { label: 'Temporada alta y puentes', detail: 'Mínimo 2 noches', price: '$4,400' },
    ],
    gallery: [
      { src: '/images/pino-exterior.png', alt: 'Exterior de la Cabaña El Pino Alto al atardecer' },
      { src: '/images/cabana-pino-alto.png', alt: 'Sala con chimenea de piedra y ventanal' },
      { src: '/images/pino-cocina.png', alt: 'Cocina y comedor rústico de madera' },
      { src: '/images/pino-recamara.png', alt: 'Recámara principal con muros de troncos' },
    ],
    featured: true,
  },
  {
    slug: 'rustica-del-sol',
    name: 'Cabaña de la Estrella',
    tagline: 'Dos niveles de luz natural para disfrutar en familia',
    image: '/images/cabana-rustica-sol.png',
    alt: 'Cabaña de troncos de dos pisos con terraza bajo el sol',
    guests: 'Hasta 6 huéspedes',
    bedrooms: 2,
    beds: '2 camas Matrimoniales + sofá cama',
    baths: 2,
    priceFrom: '$1,800',
    shortDescription:
      'Disfruta de la chimenea y un asador al aire libre rodeado de pinos,perfecta para reuniones familiares.',
    description: [
      'La Rústica del Sol es una cabaña de troncos de dos niveles que recibe el sol durante todo el día. Su sala de doble altura y su escalera de madera le dan un ambiente cálido y familiar.',
      'Afuera encontrarás un área verde privada con fogatero, ideal para que los niños y las mascotas jueguen con total seguridad, y un balcón con hamaca con vista al valle.',
    ],
    features: ['fireplace', 'kitchen', 'terrace', 'wifi'],
    extras: ['Cocina completa equipada', 'Smart TV','Leña incluida la primera noche', 'Cobertores', 'Estacionamiento', 'Asador exterior', 'Pet-friendly'],
    prices: [
      { label: 'Domingo a jueves', detail: 'Por noche, hasta 6 personas', price: '$3,000' },
      { label: 'Viernes y sábado', detail: 'Por noche, hasta 6 personas', price: '$3,600' },
      { label: 'Temporada alta y puentes', detail: 'Mínimo 2 noches', price: '$4,200' },
    ],
    gallery: [
      { src: '/images/cabana-rustica-sol.png', alt: 'Exterior de la Cabaña Rústica del Sol' },
      { src: '/images/sol-sala.png', alt: 'Sala de doble altura con escalera de madera' },
      { src: '/images/sol-terraza.png', alt: 'Balcón con hamaca y vista al valle' },
      { src: '/images/sol-fogata.png', alt: 'Fogatero exterior en el área verde al anochecer' },
    ],
  },
]

export function getCabin(slug: string) {
  return cabins.find((cabin) => cabin.slug === slug)
}

/** Fotos que aparecen en la sección "Galería" de la página principal. */
export const homeGallery: GalleryImage[] = [
  { src: '/images/hero-bosque.webp', alt: 'Bosque de pinos con neblina en Mazamitla' },
  { src: '/images/neblina-interior.png', alt: 'Sala acogedora con chimenea encendida' },
  { src: '/images/pino-exterior.png', alt: 'Cabaña de madera entre pinos al atardecer' },
  { src: '/images/sol-fogata.png', alt: 'Fogata nocturna junto a la cabaña' },
  { src: '/images/neblina-terraza.png', alt: 'Café en la terraza con vista al bosque' },
  { src: '/images/pino-recamara.png', alt: 'Recámara rústica de lujo' },
  { src: '/images/pet-friendly.png', alt: 'Perro feliz en los senderos del bosque' },
  { src: '/images/sol-terraza.png', alt: 'Balcón con hamaca y vista a la sierra' },
]
