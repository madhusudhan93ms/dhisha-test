import { useState, useEffect, useRef } from 'react'

/**
 * useCountUp — animates a number from 0 to `target` when the returned `ref` element
 * enters the viewport. Supports an optional `suffix` like '+' or '%'.
 *
 * @param {number} target  - numeric end value
 * @param {number} duration - ms for the animation (default 2200ms)
 * @param {string} suffix  - string appended after the number (e.g. '+', '%')
 */
export default function useCountUp(target, duration = 2200, suffix = '') {
  const [display, setDisplay] = useState('0' + suffix)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  // Trigger when element enters viewport
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  // Animate once triggered
  useEffect(() => {
    if (!started) return
    let startTime = null
    let raf

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)
      setDisplay(current + suffix)
      if (progress < 1) {
        raf = requestAnimationFrame(step)
      }
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [started, target, duration, suffix])

  return { display, ref }
}
