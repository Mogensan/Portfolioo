import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Scroll-reveal composable using IntersectionObserver.
 * Attach `el` as a template ref; `visible` turns true once the element
 * enters the viewport and stays true (one-shot animation).
 *
 * Usage:
 *   const { el, visible } = useReveal()
 *   <section ref="el" :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'">
 */
export function useReveal(options = {}) {
  const el = ref(null)
  const visible = ref(false)
  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.12, ...options },
    )
    if (el.value) observer.observe(el.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { el, visible }
}
