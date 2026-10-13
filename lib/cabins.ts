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
  terrace: { icon: Sun, label: 'Terraza privada' },
  wifi: { icon: Wifi, label: 'Wi-Fi' },
}

export const cabins: Cabin[] = [
  {
    slug: 'bosque-neblina',
    name: 'Cabaña Bosque Neblina',
    tagline: 'Un refugio íntimo envuelto en la neblina del bosque',
    image: '/images/cabana-bosque-neblina.png',
    alt: 'Cabaña de madera estilo A rodeada de pinos y neblina',
    guests: 'Hasta 4 huéspedes',
    bedrooms: 1,
    beds: '1 cama king + sofá cama',
    baths: 1,
    priceFrom: '$2,400',
    shortDescription:
      'Ideal para parejas o familias pequeñas. Despierta envuelto en la neblina matutina del bosque.',
    description: [
      'La Cabaña Bosque Neblina es nuestra casita estilo A, pensada para quienes buscan desconectarse por completo. Su gran ventanal triangular enmarca los pinos y la neblina que cubre la sierra cada mañana.',
      'Por la noche, enciende la chimenea, prepara un chocolate caliente en la cocineta equipada y disfruta del silencio del bosque desde la terraza privada. Un espacio perfecto para aniversarios, lunas de miel o un fin de semana en pareja.',
    ],
    features: ['fireplace', 'kitchen', 'terrace', 'wifi'],
    extras: ['Leña incluida la primera noche', 'Ropa de cama premium', 'Asador privado', 'Estacionamiento', 'Pet-friendly'],
    prices: [
      { label: 'Domingo a jueves', detail: 'Por noche, hasta 4 personas', price: '$2,400' },
      { label: 'Viernes y sábado', detail: 'Por noche, hasta 4 personas', price: '$2,900' },
      { label: 'Temporada alta y puentes', detail: 'Mínimo 2 noches', price: '$3,400' },
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
    name: 'Cabaña El Pino Alto',
    tagline: 'Amplitud, piedra y madera bajo pinos centenarios',
    image: '/images/cabana-pino-alto.png',
    alt: 'Sala interior con chimenea de piedra y ventanal al bosque',
    guests: 'Hasta 6 huéspedes',
    bedrooms: 2,
    beds: '1 cama king + 2 matrimoniales',
    baths: 2,
    priceFrom: '$3,200',
    shortDescription:
      'Amplia sala con chimenea de piedra y ventanales que enmarcan los pinos centenarios.',
    description: [
      'El Pino Alto es nuestra cabaña más reservada. Su sala de doble altura con chimenea de piedra es el corazón de la casa: el lugar ideal para reunirse después de un día de senderismo.',
      'Cuenta con dos recámaras, dos baños completos y una cocina equipada con comedor de madera maciza. Los ventanales de piso a techo te permiten disfrutar del bosque desde cualquier rincón.',
    ],
    features: ['fireplace', 'kitchen', 'terrace', 'wifi'],
    extras: ['Cocina completa equipada', 'Smart TV', 'Asador y fogatero', 'Estacionamiento para 2 autos', 'Pet-friendly'],
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
    name: 'Cabaña Rústica del Sol',
    tagline: 'Dos niveles de luz natural para disfrutar en familia',
    image: '/images/cabana-rustica-sol.png',
    alt: 'Cabaña de troncos de dos pisos con terraza bajo el sol',
    guests: 'Hasta 6 huéspedes',
    bedrooms: 2,
    beds: '2 camas queen + 2 individuales',
    baths: 2,
    priceFrom: '$3,000',
    shortDescription:
      'Dos niveles, terraza soleada y área verde privada perfecta para reuniones familiares.',
    description: [
      'La Rústica del Sol es una cabaña de troncos de dos niveles que recibe el sol durante todo el día. Su sala de doble altura y su escalera de madera le dan un ambiente cálido y familiar.',
      'Afuera encontrarás un área verde privada con fogatero, ideal para que los niños y las mascotas jueguen con total seguridad, y un balcón con hamaca con vista al valle.',
    ],
    features: ['fireplace', 'kitchen', 'terrace', 'wifi'],
    extras: ['Área verde privada', 'Fogatero exterior', 'Hamaca en balcón', 'Juegos de mesa', 'Pet-friendly'],
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
  { src: '/images/hero-bosque.png', alt: 'Bosque de pinos con neblina en Mazamitla' },
  { src: '/images/neblina-interior.png', alt: 'Sala acogedora con chimenea encendida' },
  { src: '/images/pino-exterior.png', alt: 'Cabaña de madera entre pinos al atardecer' },
  { src: '/images/sol-fogata.png', alt: 'Fogata nocturna junto a la cabaña' },
  { src: '/images/neblina-terraza.png', alt: 'Café en la terraza con vista al bosque' },
  { src: '/images/pino-recamara.png', alt: 'Recámara rústica de lujo' },
  { src: '/images/pet-friendly.png', alt: 'Perro feliz en los senderos del bosque' },
  { src: '/images/sol-terraza.png', alt: 'Balcón con hamaca y vista a la sierra' },
]
