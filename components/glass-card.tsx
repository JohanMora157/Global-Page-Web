import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass-card rounded-xl p-6 ${
        hover ? "tilt-card" : ""
      } ${className}`}
    >
      {children}
    </div>
  )
}
