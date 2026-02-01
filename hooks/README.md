# Custom Hooks

This directory contains reusable React hooks for the portfolio application.

## useScrollReveal

Hook for scroll reveal animations using Intersection Observer. Automatically adds a 'visible' class when an element enters the viewport.

```tsx
import { useScrollReveal } from '@/hooks/useScrollReveal'

function MyComponent() {
  const ref = useScrollReveal<HTMLDivElement>()
  
  return (
    <div ref={ref} className="opacity-0 translate-y-5">
      Content that will animate in on scroll
    </div>
  )
}
```

### Options

- `threshold`: Intersection threshold (default: 0.12)
- `delay`: Custom delay in ms (default: auto-calculated based on sibling index)
- `rootMargin`: Root margin for intersection observer (default: '0px')

## useSmoothScroll

Hook to enable smooth scrolling for anchor links globally. Handles clicks on links with href starting with `#`.

```tsx
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

function App() {
  useSmoothScroll()
  // All anchor links will now scroll smoothly
}
```
