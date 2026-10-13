'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Fades and lifts its children into view when scrolled into the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={cn('reveal', className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
