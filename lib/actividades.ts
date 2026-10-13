/**
 * ARTÍCULOS DE ACTIVIDADES (blog SEO sobre Mazamitla)
 *
 * Para publicar un artículo nuevo, copia un objeto de la lista,
 * cambia el `slug` (será la URL: /actividades/tu-slug) y edita el contenido.
 * Los bloques de `content` pueden ser:
 *   { type: 'p', text: '...' }          → párrafo
 *   { type: 'h2', text: '...' }         → subtítulo
 *   { type: 'list', items: ['...'] }    → lista con viñetas
 *   { type: 'tip', text: '...' }        → recuadro de consejo
 */
export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'tip'; text: string }

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  alt: string
  keywords: string[]
  content: ArticleBlock[]
}

export const articles: Article[] = [
  {
    slug: 'cascada-el-salto-mazamitla',
    title: 'Cascada El Salto: la caminata imperdible en Mazamitla',
    excerpt:
      'Todo lo que necesitas saber para visitar la Cascada El Salto: cómo llegar, horarios, qué llevar y consejos para disfrutar el sendero.',
    category: 'Naturaleza',
    date: '2026-09-18',
    readTime: '5 min',
    image: '/images/actividad-cascada.png',
    alt: 'Cascada rodeada de bosque de pino y encino en Mazamitla',
    keywords: ['cascada el salto mazamitla', 'senderismo mazamitla', 'qué hacer en mazamitla'],
    content: [
      {
        type: 'p',
        text: 'La Cascada El Salto es uno de los atractivos naturales más visitados de Mazamitla, Jalisco. Ubicada dentro del parque Los Cazos, su caída de agua de aproximadamente 30 metros se esconde entre pinos, encinos y helechos.',
      },
      { type: 'h2', text: 'Cómo llegar a la cascada' },
      {
        type: 'p',
        text: 'Desde el centro de Mazamitla son apenas 10 minutos en auto. Una vez en el parque, el recorrido a pie hasta la cascada es de unos 20 a 30 minutos por un sendero con escalones de madera.',
      },
      { type: 'h2', text: 'Qué llevar' },
      {
        type: 'list',
        items: ['Calzado cómodo con buen agarre', 'Chamarra ligera: el bosque es fresco todo el año', 'Agua y un snack', 'Cámara o celular con batería'],
      },
      {
        type: 'tip',
        text: 'Visita la cascada en temporada de lluvias (julio a octubre) para verla con mayor caudal. Llega temprano para evitar multitudes.',
      },
    ],
  },
  {
    slug: 'centro-historico-mazamitla',
    title: 'Guía del Centro Histórico de Mazamitla, Pueblo Mágico',
    excerpt:
      'Recorre las calles empedradas, la Parroquia de San Cristóbal y el kiosco del Pueblo Mágico más encantador de la Sierra del Tigre.',
    category: 'Pueblo Mágico',
    date: '2026-08-30',
    readTime: '6 min',
    image: '/images/actividad-pueblo.png',
    alt: 'Calle empedrada con casas blancas y tejados rojos en Mazamitla',
    keywords: ['centro histórico mazamitla', 'parroquia san cristóbal', 'pueblo mágico jalisco'],
    content: [
      {
        type: 'p',
        text: 'Mazamitla fue nombrado Pueblo Mágico en 2005 gracias a su arquitectura tradicional de casas blancas con tejados de barro rojo, balcones de madera y calles empedradas.',
      },
      { type: 'h2', text: 'Parroquia de San Cristóbal' },
      {
        type: 'p',
        text: 'Su fachada de estilo único, con torres que recuerdan a la arquitectura oriental, la convierte en el ícono del pueblo. Es la parada obligada para la foto del recuerdo.',
      },
      { type: 'h2', text: 'Imperdibles del centro' },
      {
        type: 'list',
        items: [
          'El kiosco de la plaza principal',
          'Las tiendas de artesanías de madera y textiles',
          'Los puestos de conservas, rompope y cajeta',
          'Los cafés con terraza alrededor de la plaza',
        ],
      },
      {
        type: 'tip',
        text: 'Desde nuestras cabañas el centro está a pocos minutos en auto. Ve entre semana para recorrerlo con más calma.',
      },
    ],
  },
  {
    slug: 'gastronomia-mazamitla',
    title: 'Qué comer en Mazamitla: botes, birria y dulces de la sierra',
    excerpt:
      'Descubre los platillos típicos de Mazamitla y dónde probarlos: el famoso bote, tacos de birria, ponche y conservas artesanales.',
    category: 'Gastronomía',
    date: '2026-08-12',
    readTime: '4 min',
    image: '/images/actividad-gastronomia.png',
    alt: 'Platillos típicos de la sierra sobre mesa de madera rústica',
    keywords: ['qué comer en mazamitla', 'bote mazamitla', 'birria mazamitla'],
    content: [
      {
        type: 'p',
        text: 'La gastronomía de Mazamitla es tan cálida como su clima es fresco. Sus platillos están pensados para reconfortar después de un día en el bosque.',
      },
      { type: 'h2', text: 'El bote' },
      {
        type: 'p',
        text: 'Es el platillo más representativo: un guiso de res, cerdo y pollo cocinado lentamente con verduras y pulque. Se sirve caliente y es perfecto para compartir.',
      },
      { type: 'h2', text: 'Otros sabores que debes probar' },
      {
        type: 'list',
        items: ['Tacos de birria con consomé', 'Ponche de frutas caliente', 'Rompope y cajeta artesanal', 'Conservas de durazno, membrillo y tejocote'],
      },
    ],
  },
  {
    slug: 'mazamitla-con-mascotas',
    title: 'Mazamitla con mascotas: guía para viajar con tu perro',
    excerpt:
      'Consejos, senderos y lugares pet-friendly para disfrutar Mazamitla con tu mejor amigo de cuatro patas.',
    category: 'Pet-Friendly',
    date: '2026-07-25',
    readTime: '5 min',
    image: '/images/pet-friendly.png',
    alt: 'Perro feliz en un sendero del bosque',
    keywords: ['mazamitla pet friendly', 'cabañas pet friendly mazamitla', 'viajar con perro jalisco'],
    content: [
      {
        type: 'p',
        text: 'Mazamitla es un destino ideal para viajar con tu perro: senderos amplios, clima fresco y muchos espacios al aire libre.',
      },
      { type: 'h2', text: 'Antes de viajar' },
      {
        type: 'list',
        items: ['Lleva su cama o cobija favorita', 'Correa y bolsas para desechos', 'Su alimento y bebedero portátil', 'Cartilla de vacunación al día'],
      },
      {
        type: 'tip',
        text: 'Todas nuestras cabañas son pet-friendly. Avísanos por WhatsApp al reservar y tendremos listo un kit de bienvenida para tu mascota.',
      },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
