import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message, sessionId } = await req.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ reply: "Mensaje inválido." }, { status: 400 })
    }

    const webhookUrl = "https://n8n.globalautomate.co/webhook/chatbot"
    if (!webhookUrl) {
      return NextResponse.json({ reply: "Falta configurar el webhook." }, { status: 500 })
    }

    const r = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sessionId }),
      // IMPORTANT: no-cache para evitar respuestas cacheadas
      cache: "no-store",
    })

    if (!r.ok) {
      const text = await r.text().catch(() => "")
      return NextResponse.json(
        { reply: "El bot no respondió (error del servidor).", debug: text.slice(0, 200) },
        { status: 502 }
      )
    }

    const data = await r.json().catch(() => ({}))

    // Acepta varios formatos típicos de n8n
    const reply =
      data.reply ??
      data.text ??
      data.message ??
      (Array.isArray(data) ? data?.[0]?.reply ?? data?.[0]?.text : null)

    return NextResponse.json({
      reply: reply || "Ok. ¿Me das un poco más de contexto?",
    })
  } catch (e) {
    return NextResponse.json({ reply: "Error interno conectando con el bot." }, { status: 500 })
  }
}
