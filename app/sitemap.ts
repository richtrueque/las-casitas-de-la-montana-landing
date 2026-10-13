import type { MetadataRoute } from 'next'
import { articles } from '@/lib/actividades'
import { cabins } from '@/lib/cabins'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, priority: 1 },
    { url: `${site.url}/actividades`, priority: 0.8 },
    ...cabins.map((cabin) => ({ url: `${site.url}/cabanas/${cabin.slug}`, priority: 0.9 })),
    ...articles.map((article) => ({
      url: `${site.url}/actividades/${article.slug}`,
      lastModified: article.date,
      priority: 0.7,
    })),
  ]
}
