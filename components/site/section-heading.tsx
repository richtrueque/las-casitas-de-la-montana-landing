import { cn } from '@/lib/utils'

/** Reusable eyebrow + title + description block used by every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
  id,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  tone?: 'dark' | 'light'
  id?: string
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p
        className={cn(
          'text-xs font-semibold uppercase tracking-[0.25em]',
          tone === 'dark' ? 'text-wood' : 'text-beige/80',
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'mt-3 font-serif text-4xl font-medium leading-tight text-balance md:text-5xl',
          tone === 'dark' ? 'text-pine-deep' : 'text-white',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty md:text-lg',
            tone === 'dark' ? 'text-muted-foreground' : 'text-beige/85',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
