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
  title: 'Las Casitas de la Montaña | Cabañas en Mazamitla, Jalisco',
  description:
    'Cabañas rústicas de lujo en el bosque de Mazamitla, Jalisco. Chimenea, vistas al bosque, total privacidad y turismo pet-friendly. Reserva tu refugio de paz y naturaleza.',
  keywords: [
    'cabañas en Mazamitla',
    'cabañas pet friendly Mazamitla',
    'qué hacer en Mazamitla',
    'cabañas con chimenea Jalisco',
    'hospedaje en el bosque',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Las Casitas de la Montaña | Cabañas en Mazamitla',
    description: 'Tu refugio de paz y naturaleza en Mazamitla, Jalisco.',
    locale: 'es_MX',
    type: 'website',
    images: ['/images/hero-bosque.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2a3d33',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-MX" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
