"use client"

import { useEffect, useMemo, useState } from "react"
import { Bot, X, Send } from "lucide-react"

type ChatMsg = { role: "user" | "bot"; text: string }

function cryptoRandomId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID()
  return Math.random().toString(16).slice(2) + Date.now().toString(16)
}

export function ChatbotButton() {
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: "bot", text: "¡Hola! Soy Globy, tu asistente virtual. ¿En qué te ayudo?" },
  ])

  // SessionId para que tu n8n pueda mantener contexto si lo necesitas
  const sessionId = useMemo(() => {
    if (typeof window === "undefined") return "web"
    const key = "ga_chat_session"
    const existing = localStorage.getItem(key)
    if (existing) return existing
    const created = "web-" + cryptoRandomId()
    localStorage.setItem(key, created)
    return created
  }, [])

  const send = async () => {
    const text = msg.trim()
    if (!text || loading) return

    setMessages((m) => [...m, { role: "user", text }])
    setMsg("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId }),
      })

      const data = await res.json().catch(() => ({}))

      const reply = data?.reply || "Listo. ¿Me das un poco más de contexto?"
      setMessages((m) => [...m, { role: "bot", text: reply }])
    } catch (e) {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Ups, no pude conectar con el bot 😅. Intenta de nuevo." },
      ])
    } finally {
      setLoading(false)
    }
  }

  // opcional: cuando abres, que el scroll baje al final (mejora UX)
  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => {
      const el = document.getElementById("ga-chat-scroll")
      if (el) el.scrollTop = el.scrollHeight
    }, 0)
    return () => clearTimeout(t)
  }, [open, messages])

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-24 right-6 z-[9999] group">
        <button
          type="button"
          aria-label={open ? "Cerrar chatbot" : "Abrir chatbot"}
          onClick={() => setOpen((v) => !v)}
          className="h-14 w-14 rounded-full glow-chatbot flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        </button>

        {/* Tooltip */}
        <div
          className="
            pointer-events-none absolute right-16 top-1/2 -translate-y-1/2
            opacity-0 translate-x-2
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-200 ease-out
          "
        >
          <div className="rounded-lg bg-black/80 px-3 py-1.5 text-xs text-white whitespace-nowrap shadow-lg">
            Prueba nuestro asistente virtual
          </div>
        </div>
      </div>


      {/* Ventana del chat */}
      {open && (
        <div className="fixed bottom-44 right-6 z-50 w-[320px] sm:w-[360px] rounded-2xl border border-white/10 bg-[#12011f]/85 backdrop-blur-xl shadow-2xl overflow-hidden ga-chat-panel">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full glow-chatbot flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-white">Globy</div>
                <div className="text-xs text-white/70">Asistente virtual</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition"
              aria-label="Cerrar"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div id="ga-chat-scroll" className="max-h-[320px] overflow-y-auto px-4 py-3 space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[82%] rounded-2xl rounded-br-md px-3 py-2 text-sm ga-chat-bubble-user"
                    : "mr-auto max-w-[82%] rounded-2xl rounded-bl-md px-3 py-2 text-sm ga-chat-bubble-bot text-white/90"
                }
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="mr-auto max-w-[82%] rounded-2xl rounded-bl-md px-3 py-2 text-sm ga-chat-bubble-bot text-white/80">
                Escribiendo…
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 px-3 py-3 border-t border-white/10">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Escribe tu mensaje…"
              className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20 focus:ring-2 focus:ring-[rgba(77,159,255,0.25)]"
              disabled={loading}
            />
            <button
              onClick={send}
              className="h-10 w-10 rounded-xl glow-chatbot flex items-center justify-center"
              aria-label="Enviar"
              type="button"
              disabled={loading}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
