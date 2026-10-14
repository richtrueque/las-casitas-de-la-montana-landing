/**
 * Central place for brand info and contact details.
 * Update these values to change them across the whole site.
 */
export const site = {
  name: 'Las Casitas de la Montaña',
  // Replace with the real domain once published (used for sitemap and SEO)
  url: 'https://lascasitasdelamontana.mx',
  // Placeholder WhatsApp number (international format, digits only)
  whatsappNumber: '3335777594',
  phoneDisplay: '333 577 7594',
  email: 'reservas@lascasitasdelamontana.mx',
  address: 'Las Casitas de la Montaña, Aztecas 39 y Vicente Guerrero, Centro. 49500 Mazamitla, Jal. México',
  instagram: 'https://instagram.com/',
  facebook: 'https://www.facebook.com/p/Las-casitas-de-la-monta%C3%B1a-100063507283409/',
}

// Links start with "/" so they also work from the cabin and activity pages
export const navLinks = [
  { label: 'Cabañas', href: '/#cabanas' },
  { label: 'Galería', href: '/#galeria' },
  { label: 'Ubicación', href: '/#ubicacion' },
  { label: 'Experiencias', href: '/#experiencias' },
  { label: 'Reseñas', href: '/#resenas' },
  { label: 'Actividades', href: '/actividades' },
  { label: 'Contacto', href: '/#contacto' },
]

export function whatsappLink(message = 'Hola, me gustaría reservar una cabaña en Las Casitas de la Montaña.') {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}
