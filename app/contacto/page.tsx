import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { GlassCard } from "@/components/glass-card"
import { ContactForm } from "@/components/contacto/contact-form"
import { FaqAccordion } from "@/components/contacto/faq-accordion"
import {
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contactanos | Global Automate",
  description:
    "Cuentanos tu caso y te proponemos un plan claro: automatizacion, web, software o seguridad.",
}

const contactMethods = [
  {
    icon: Phone,
    label: "Telefono",
    value: "+57 318 1324136",
    href: "tel:+573181324136",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "contacto@globalautomate.co",
    href: "mailto:contacto@globalautomate.co",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Escríbenos por WhatsApp",
    href: `https://wa.me/573181324136?text=${encodeURIComponent(
      "HHola Global Automate!! Estoy interesado en sus servicios. ¿Podemos agendar una demo?"
    )}`,
    external: true,
  },
]

const socialLinks = [
  {
    label: "X (Twitter)",
    href: "https://x.com/GlobAutomate",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/globalautomate.col/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@globalautomate.col",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.85z" />
      </svg>
    ),
  },
]

export default function ContactoPage() {
  return (
    <div className="relative">
      {/* Ambient lights */}
      <div className="light-blob w-96 h-96 bg-[#00F5FF] top-40 -left-48" aria-hidden="true" />
      <div className="light-blob w-80 h-80 bg-[#00FF85] top-[800px] -right-40" aria-hidden="true" />

      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <RevealOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              <span className="gradient-text">Contactanos</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <p className="mt-6 text-white/95 text-lg lg:text-[19px] leading-relaxed max-w-2xl mx-auto text-pretty">
              Cuentanos tu caso y te proponemos un plan claro: automatizacion,
              web, software o seguridad.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="relative py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact methods */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <RevealOnScroll>
                <h2 className="font-heading text-2xl font-bold text-white mb-2">
                  Medios de contacto
                </h2>
                <p className="text-white/70 text-sm mb-6">
                  Elige el canal que prefieras. Te respondemos en menos de 24 horas.
                </p>
              </RevealOnScroll>

              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <RevealOnScroll key={method.label + method.value} delay={index + 1}>
                    <a
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className="glass-card rounded-xl p-4 flex items-center gap-4 tilt-card block"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center shrink-0">
                        <Icon className="text-[#00F5FF]" size={20} />
                      </div>
                      <div>
                        <p className="bg-gradient-to-r from-[#00F5FF] to-[#2EE59D] bg-clip-text text-transparent text-xs font-medium uppercase tracking-wide">
                          {method.label}
                        </p>
                        <p className="text-white text-sm font-medium">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  </RevealOnScroll>
                )
              })}

              {/* Social links */}
              <RevealOnScroll delay={5}>
                <div className="flex items-center gap-4 mt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00F5FF] hover:border-[#00F5FF]/30 transition-all"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <RevealOnScroll direction="right">
                <ContactForm />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12 text-balance">
              Preguntas{" "}
              <span className="gradient-text">frecuentes</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <FaqAccordion />
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
