"use client"

interface OrbitLogoProps {
  /** px height of the component */
  size?: number
  className?: string
}

export function OrbitLogo({ size = 48, className = "" }: OrbitLogoProps) {
  const id = `ol-${size}`
  const center = 200
  const viewBox = "-10 -10 420 420"

  return (
    <div
      className={`ga-orbit ${className}`}
      style={{ width: size, height: size }}
      aria-label="Global Automate logo"
      role="img"
    >
      <svg viewBox={viewBox} className="w-full h-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-g1`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#00FF85" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id={`${id}-g2`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00FF85" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00F5FF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id={`${id}-g3`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00FF85" stopOpacity="0.08" />
          </linearGradient>
          <radialGradient id={`${id}-cg`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#00FF85" stopOpacity="0.06" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${id}-sphere`} cx="38%" cy="32%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="30%" stopColor="#00F5FF" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#200340" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#200340" stopOpacity="0.55" />
          </radialGradient>
        </defs>

        {/* Outer glow */}
        <circle cx={center} cy={center} r="72" fill={`url(#${id}-cg)`} className="ga-orbit__glow" />

        {/* Sphere */}
        <circle
          cx={center}
          cy={center}
          r="55"
          fill={`url(#${id}-sphere)`}
        />
        <circle
          cx={center}
          cy={center}
          r="55"
          fill="none"
          stroke="rgba(0,245,255,0.15)"
          strokeWidth="1.2"
        />

        {/* Ring 1 — 18s */}
        <g className="ga-orbit__ring1" style={{ transformOrigin: `${center}px ${center}px` }}>
          <ellipse
            cx={center} cy={center}
            rx="150" ry="55"
            fill="none"
            stroke={`url(#${id}-g1)`}
            strokeWidth="1.5"
          />
          <circle cx="350" cy="200" r="4" fill="#00F5FF" fillOpacity="0.55" />
          <circle cx="50" cy="200" r="3" fill="#00FF85" fillOpacity="0.45" />
          <circle cx="275" cy="155" r="2.5" fill="#00F5FF" fillOpacity="0.4" />
        </g>

        {/* Ring 2 — 26s reverse */}
        <g className="ga-orbit__ring2" style={{ transformOrigin: `${center}px ${center}px` }}>
          <ellipse
            cx={center} cy={center}
            rx="130" ry="130"
            fill="none"
            stroke={`url(#${id}-g2)`}
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <circle cx="330" cy="200" r="3.5" fill="#00FF85" fillOpacity="0.5" />
          <circle cx="70" cy="200" r="3" fill="#00F5FF" fillOpacity="0.35" />
        </g>

        {/* Ring 3 — 34s */}
        <g className="ga-orbit__ring3" style={{ transformOrigin: `${center}px ${center}px`, transform: "rotate(55deg)" }}>
          <ellipse
            cx={center} cy={center}
            rx="160" ry="48"
            fill="none"
            stroke={`url(#${id}-g3)`}
            strokeWidth="1.5"
          />
          <circle cx="360" cy="200" r="3" fill="#00FF85" fillOpacity="0.45" />
          <circle cx="40" cy="200" r="2.5" fill="#00F5FF" fillOpacity="0.35" />
          <circle cx="200" cy="152" r="3" fill="#00FF85" fillOpacity="0.3" />
        </g>
      </svg>
    </div>
  )
}
