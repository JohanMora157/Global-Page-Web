"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  direction?: "up" | "left" | "right" | "scale"
  delay?: number
}

export function RevealOnScroll({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) {
      el.classList.add("revealed")
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed")
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  const directionClass = {
    up: "reveal-up",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[direction]

  const staggerClass = delay > 0 ? `stagger-${Math.min(delay, 5)}` : ""

  return (
    <div
      ref={ref}
      className={`${directionClass} ${staggerClass} ${className}`}
    >
      {children}
    </div>
  )
}
