import { useEffect } from 'react'

/**
 * Hook to enable smooth scrolling for anchor links
 * Handles clicks on links with href starting with #
 */
export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null

      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      const targetElement = document.querySelector(href)
      if (targetElement) {
        e.preventDefault()
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])
}
