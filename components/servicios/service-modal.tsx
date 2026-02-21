"use client"

import { useState, type ReactNode } from "react"
import { X } from "lucide-react"

interface ServiceModalProps {
  title: string
  children?: ReactNode
  detail: ReactNode
}

export function ServiceModal({ title, children, detail }: ServiceModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {children}
      <button
        onClick={() => setIsOpen(true)}
        className="glow-btn px-6 py-2.5 rounded-lg text-sm font-semibold text-white mt-2 inline-flex items-center gap-2 self-start"
      >
        Quiero saber mas
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#290f3c]/80 backdrop-blur-5xl"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Modal content */}
          <div className="relative glass-card rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-2xl font-bold bg-gradient-to-r from-[#00F5FF] to-[#2EE59D] bg-clip-text text-transparent">
                {title}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors p-1 focus-visible:ring-2 focus-visible:ring-[#00F5FF] rounded-lg"
                aria-label="Cerrar modal"
              >
                <X size={24} />
              </button>
            </div>
            <div className="text-white/70 leading-relaxed">{detail}</div>
          </div>
        </div>
      )}
    </>
  )
}
