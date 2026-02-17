"use client"

import { useEffect, useRef } from "react"
import { OrbitLogo } from "@/components/orbit-logo"

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      container.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`
    }

    const handleMouseLeave = () => {
      container.style.transform = "perspective(1000px) rotateY(0) rotateX(0)"
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg mx-auto transition-transform duration-200 flex items-center justify-center atom-container"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-[#00F5FF]/10 blur-3xl animate-glow-pulse" />

      {/* Orbit logo — large hero version */}
      <OrbitLogo size={320} className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px]" />
    </div>
  )
}
