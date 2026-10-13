import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Lightbulb, MessageCircle } from 'lucide-react'
import { articles, formatDate, getArticle, type ArticleBlock } from '@/lib/actividades'
import { site, whatsappLink } from '@/lib/site'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { ArticleCard } from '@/components/site/article-card'

/* ============================================================
   ARTÍCULO DE ACTIVIDAD  →  /actividades/[slug]
   ============================================================ */
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: `${article.title} | ${site.name}`,
    description: article.excerpt,
    keywords: article.keywords,
    openGraph: { type: 'article', title: article.title, description: article.excerpt, images: [article.image] },
  }
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-10 font-serif text-3xl font-medium text-pine-deep">{block.text}</h2>
    case 'list':
      return (
        <ul className="mt-5 flex list-disc flex-col gap-2 pl-6 marker:text-wood">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'tip':
      return (
        <aside className="mt-8 flex gap-4 rounded-2xl bg-secondary p-6 text-foreground">
          <Lightbulb className="mt-0.5 size-5 shrink-0 text-wood" aria-hidden="true" />
          <p>{block.text}</p>
        </aside>
      )
    default:
      return <p className="mt-5">{block.text}</p>
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `${site.url}${article.image}`,
    datePublished: article.date,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.name },
  }

  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-pine-deep">
          <Image src={article.image} alt={article.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/50 to-pine-deep/20" />
          <div className="relative mx-auto w-full max-w-3xl px-5 pb-14 pt-32 md:px-8">
            <Link href="/actividades" className="inline-flex items-center gap-2 text-sm font-medium text-beige/85 hover:text-white">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Todas las actividades
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-beige/80">{article.category}</p>
            <h1 className="mt-3 font-serif text-4xl font-medium leading-tight text-white text-balance md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-5 flex items-center gap-2 text-sm text-beige/80">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span aria-hidden="true">·</span>
              <Clock className="size-4" aria-hidden="true" />
              {article.readTime} de lectura
            </p>
          </div>
        </section>

        <article className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 text-lg leading-relaxed text-muted-foreground md:px-8">
            <p className="text-xl leading-relaxed text-foreground text-pretty">{article.excerpt}</p>
            {article.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            <div className="mt-14 flex flex-col items-start gap-5 rounded-2xl bg-pine-deep p-8 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-serif text-2xl">¿Planeas visitar Mazamitla?</p>
                <p className="mt-1 text-sm text-beige/80">Hospédate en nuestras cabañas en el bosque.</p>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-pine-deep transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section aria-labelledby="related-title" className="bg-secondary py-20">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <h2 id="related-title" className="font-serif text-3xl font-medium text-pine-deep">
                Más actividades
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {related.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
