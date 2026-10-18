import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'



const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.xn--lascasitasdelamontaa-m7b.com'),
  title: {
    default: 'Las Casitas de la Montaña | Cabañas en Renta en Mazamitla',
    template: '%s | Las Casitas de la Montaña',
  },
  description:
   'Cabañas en renta en Mazamitla centro, Jalisco. 3 cabañas pet friendly con chimenea y bosque a 2 cuadras de la plaza. Ideales para vacaciones en familia y pareja. Aztecas 39.',
  keywords: [
    'cabañas en renta en Mazamitla',
    'renta de cabañas en Mazamitla',
    'cabañas en Mazamitla centro',
    'cabañas pet friendly Mazamitla',
    'cabañas con chimenea Mazamitla',
    'Las Casitas de la Montaña',
    'hospedaje en Mazamitla Jalisco',
  ],
  authors: [{ name: 'Las Casitas de la Montaña' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Las Casitas de la Montaña | Cabañas en Renta en Mazamitla',
    description: 'Cabañas para familias y parejas en el centro de Mazamitla. Pet Friendly. Aztecas 39.',
    url: 'https://www.xn--cabaasmazamitlalascasitas-coc.com',
    siteName: 'Las Casitas de la Montaña',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/hero-bosque.webp',
        width: 1200,
        height: 630,
        alt: 'Cabañas en el bosque de Mazamitla',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2a3d33',
  width: 'device-width',
  initialScale: 1,
}
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': 'https://www.xn--cabaasmazamitlalascasitas-coc.com/#lodging',
  name: 'Las Casitas de la Montaña - Cabañas en Renta en Mazamitla Centro',
  description: 'Renta de 3 cabañas pet friendly en el centro de Mazamitla, Jalisco. En Aztecas 39, a 2 cuadras de la plaza principal. Cabañas con chimenea, cocina equipada, bosque y estacionamiento. Ideales para vacaciones en familia y pareja en Mazamitla.',
  image: [
    'https://www.xn--cabaasmazamitlalascasitas-coc.com/images/hero-bosque.webp',
    'https://www.xn--cabaasmazamitlalascasitas-coc.com/images/cabana-del-sol.webp',
    'https://www.xn--cabaasmazamitlalascasitas-coc.com/images/cabana-la-luna.webp'
  ],
  url: 'https://www.xn--cabaasmazamitlalascasitas-coc.com',
  telephone: '+523335777594',
  priceRange: '$$',
  currenciesAccepted: 'MXN',
  paymentAccepted: 'Efectivo, Transferencia',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Aztecas 39',
    addressLocality: 'Mazamitla',
    addressRegion: 'Jalisco',
    postalCode: '49500',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '19.9153',
    longitude: '-103.0247',
  },
  checkinTime: '1:00',
  checkoutTime: '12:00',
  petsAllowed: true,
  isAccessibleForFree: false,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Pet Friendly', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Chimenea', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Cocina equipada', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Estacionamiento', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Bosque', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'WiFi', value: true },
  ],
  containsPlace: [
    {
      '@type': 'Accommodation',
      name: 'Cabaña Del Sol',
      description: 'Cabaña en Mazamitla para 4 personas, pet friendly con chimenea'
    },
    {
      '@type': 'Accommodation', 
      name: 'Cabaña La Luna',
      description: 'Cabaña en Mazamitla para pareja con bosque privado'
    },
    {
      '@type': 'Accommodation',
      name: 'Cabaña La Estrella',
      description: 'Cabaña familiar en centro de Mazamitla'
    }
  ],
  // CAMBIA ESTO POR TUS RESEÑAS REALES DE GOOGLE
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '87',
    bestRating: '5',
    worstRating: '1'
  },
  sameAs: [
    'https://www.facebook.com/tu-pagina',
    'https://www.instagram.com/tu-pagina'
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}