import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock } from 'lucide-react'
import { formatDate, type Article } from '@/lib/actividades'

/** Card used in the home "Actividades" section and the /actividades listing. */
export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/actividades/${article.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={article.image}
          alt={article.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-pine-deep">
          {article.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden="true">·</span>
          <Clock className="size-3.5" aria-hidden="true" />
          {article.readTime}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-pine-deep text-balance">
          <Link href={`/actividades/${article.slug}`} className="hover:text-wood">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <Link
          href={`/actividades/${article.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-pine transition-colors hover:text-wood"
        >
          Leer artículo
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">: {article.title}</span>
        </Link>
      </div>
    </article>
  )
}
