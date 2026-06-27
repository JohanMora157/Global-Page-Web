"use client"

import { Bot, MessageCircle } from "lucide-react"

export function AssistantInvitation() {
  const openAssistant = () => {
    window.dispatchEvent(new CustomEvent("global-automate:open-chat"))
  }

  return (
    <section className="relative px-6 pb-8 pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-[#00F5FF]/20 bg-white/[0.04] p-7 backdrop-blur-sm md:p-9">
          <div
            className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#00F5FF]/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00F5FF]/20 to-[#00FF85]/20 text-[#00F5FF]">
                <Bot size={25} />
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#00FF85]">
                  Conoce una automatización en acción
                </p>
                <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
                  Prueba a Globy, nuestro asistente virtual
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                  Pregúntale por nuestros servicios, cuéntale qué proceso quieres
                  mejorar o úsalo para descubrir cómo una atención automatizada puede
                  funcionar en tu empresa.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={openAssistant}
              className="glow-btn inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold"
            >
              <MessageCircle size={19} />
              Probar asistente
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
