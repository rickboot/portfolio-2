import { useEffect, useRef } from 'react'

interface UseScrollRevealOptions {
  threshold?: number
  delay?: number
  rootMargin?: string
}

/**
 * Hook for scroll reveal animations using Intersection Observer
 * Adds 'visible' class when element enters viewport
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const {
    threshold = 0.12,
    delay = 0,
    rootMargin = '0px',
  } = options

  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Calculate delay based on sibling index if delay is not provided
            const siblings = Array.from(
              entry.target.parentElement?.children || []
            )
            const idx = siblings.indexOf(entry.target)
            const finalDelay = delay || idx * 80

            setTimeout(() => {
              entry.target.classList.add('visible')
            }, finalDelay)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, delay, rootMargin])

  return ref
}
