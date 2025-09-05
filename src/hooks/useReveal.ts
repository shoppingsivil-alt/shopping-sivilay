import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.classList.add('reveal')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add('reveal-in')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1, ...(options ?? {}) })

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return ref
}


