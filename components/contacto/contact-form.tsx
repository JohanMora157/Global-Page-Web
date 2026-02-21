"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [servicioValue, setServicioValue] = useState("")

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}
    const nombre = formData.get("nombre") as string
    const telefono = formData.get("telefono") as string
    const correo = formData.get("correo") as string
    const servicio = formData.get("servicio") as string
    const descripcion = formData.get("descripcion") as string

    if (!nombre?.trim()) newErrors.nombre = "El nombre es requerido"
    if (!telefono?.trim()) newErrors.telefono = "El telefono es requerido"
    if (!correo?.trim()) {
      newErrors.correo = "El correo es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      newErrors.correo = "Ingresa un correo valido"
    }
    if (!servicio) newErrors.servicio = "Selecciona un servicio"
    if (!descripcion?.trim())
      newErrors.descripcion = "La descripcion es requerida"

    return newErrors
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const newErrors = validate(formData)

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      const payload = {
        access_key: "4bdf02e5-4a94-4614-8c30-ae29ecd3a451",
        name: formData.get("nombre") as string,
        email: formData.get("correo") as string,
        phone: formData.get("telefono") as string,
        service: formData.get("servicio") as string,
        message: formData.get("descripcion") as string,
        subject: `Nuevo contacto – ${formData.get("servicio")}`,
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (data.success) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          setServicioValue("")
          form.reset()
        }, 4000)
      } else {
        setErrors({ form: "Hubo un error al enviar. Intenta de nuevo." })
      }
    } catch {
      setErrors({ form: "Error de conexion. Intenta de nuevo." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="glass-card rounded-xl p-10 text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-[#00FF85]/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-[#00FF85]" size={32} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-white mb-2">
          {"Listo! Te contactaremos pronto."}
        </h3>
        <p className="text-white/50">
          Revisaremos tu solicitud y te responderemos en menos de 24 horas.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="glass-card rounded-xl p-8 flex flex-col gap-5"
    >
      {errors.form && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
          {errors.form}
        </div>
      )}
      {/* Nombre */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nombre" className="text-white text-sm font-medium">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre completo"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00F5FF]/50 focus:ring-1 focus:ring-[#00F5FF]/50 transition-colors"
        />
        {errors.nombre && (
          <span className="text-red-400 text-xs">{errors.nombre}</span>
        )}
      </div>

      {/* Telefono */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="telefono" className="text-white text-sm font-medium">
          Numero de telefono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="+57 300 000 0000"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00F5FF]/50 focus:ring-1 focus:ring-[#00F5FF]/50 transition-colors"
        />
        {errors.telefono && (
          <span className="text-red-400 text-xs">{errors.telefono}</span>
        )}
      </div>

      {/* Correo */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="correo" className="text-white text-sm font-medium">
          Correo electronico
        </label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="tu@email.com"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00F5FF]/50 focus:ring-1 focus:ring-[#00F5FF]/50 transition-colors"
        />
        {errors.correo && (
          <span className="text-red-400 text-xs">{errors.correo}</span>
        )}
      </div>

      {/* Servicio */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="servicio" className="text-white text-sm font-medium">
          Servicio de interes
        </label>
        <select
          id="servicio"
          name="servicio"
          value={servicioValue}
          onChange={(e) => setServicioValue(e.target.value)}
          className={`w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-[#00F5FF]/50 focus:ring-1 focus:ring-[#00F5FF]/50 transition-colors appearance-none ${servicioValue === "" ? "text-white/30" : "text-white"}`}
        >
          <option value="" disabled className="bg-[#200340] text-white/70">
            Selecciona un servicio
          </option>
          <option value="automatizaciones" className="bg-[#200340] text-white/70">
            Automatizaciones
          </option>
          <option value="web" className="bg-[#200340] text-white/70">
            Desarrollo Web
          </option>
          <option value="software" className="bg-[#200340] text-white/70">
            Software a Medida
          </option>
          <option value="ciberseguridad" className="bg-[#200340] text-white/70">
            Ciberseguridad
          </option>
        </select>
        {errors.servicio && (
          <span className="text-red-400 text-xs">{errors.servicio}</span>
        )}
      </div>

      {/* Descripcion */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="descripcion" className="text-white text-sm font-medium">
          Descripcion
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          rows={4}
          placeholder="Cuentanos sobre tu proyecto o necesidad..."
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00F5FF]/50 focus:ring-1 focus:ring-[#00F5FF]/50 transition-colors resize-none"
        />
        {errors.descripcion && (
          <span className="text-red-400 text-xs">{errors.descripcion}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="glow-btn px-8 py-3.5 rounded-lg font-semibold text-white inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar"
        )}
      </button>
    </form>
  )
}
