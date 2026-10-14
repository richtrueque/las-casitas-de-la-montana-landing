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
    'Renta de 3 cabañas en el Centro de Mazamitla, Jalisco. En Aztecas 39, a 2 cuadras de la plaza. Pet Friendly, chimenea y bosque. Reserva por WhatsApp: 333 577 7594.',
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
    url: 'https://www.xn--lascasitasdelamontaa-m7b.com',
    siteName: 'Las Casitas de la Montaña',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/images/hero-bosque.png',
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
  name: 'Las Casitas de la Montaña',
  image: 'https://www.xn--lascasitasdelamontaa-m7b.com/images/hero-bosque.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Aztecas 39',
    addressLocality: 'Mazamitla',
    addressRegion: 'Jalisco',
    postalCode: '49500',
    addressCountry: 'MX',
  },
  telephone: '+523335777594',
  url: 'https://www.xn--lascasitasdelamontaa-m7b.com',
  priceRange: '$$',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Pet Friendly', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Chimenea', value: true },
  ],
  keywords: 'cabañas en renta Mazamitla, cabañas pet friendly',
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