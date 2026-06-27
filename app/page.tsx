import Link from "next/link"
import type { Metadata } from "next"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { GlassCard } from "@/components/glass-card"
import { HeroVisual } from "@/components/home/hero-visual"
import {
  ArrowRight,
  Bot,
  Code2,
  Globe,
  MessagesSquare,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Automatización, Desarrollo Web y Software | Global Automate",
  description:
    "Automatizamos procesos y canales de atención, desarrollamos páginas web y software a medida, y fortalecemos la ciberseguridad de empresas.",
}

const services = [
  {
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Conectamos canales de atención, formularios, agendas, CRM, correos y bases de datos para reducir tareas repetitivas y mejorar el seguimiento.",
  },
  {
    icon: Globe,
    title: "Desarrollo de páginas web",
    description:
      "Creamos sitios corporativos y landing pages rápidos, profesionales y orientados a convertir visitas en oportunidades comerciales.",
  },
  {
    icon: Code2,
    title: "Software web a medida",
    description:
      "Desarrollamos plataformas, paneles y sistemas internos adaptados a la forma en que realmente opera tu empresa.",
  },
  {
    icon: ShieldCheck,
    title: "Ciberseguridad web",
    description:
      "Evaluamos y fortalecemos entornos digitales con buenas prácticas de seguridad, protección de datos y prevención de vulnerabilidades.",
  },
]

const useCases = [
  ["Atención multicanal", "Centraliza conversaciones de WhatsApp, redes sociales, páginas web, formularios y correo."],
  ["Captación y seguimiento", "Registra interesados, clasifica oportunidades y activa seguimientos automáticos."],
  ["Agendamiento y alertas", "Coordina citas y notifica al equipo cuando llega una nueva solicitud."],
  ["Información organizada", "Envía los datos de cada cliente al CRM, Google Sheets, calendarios o bases de datos."],
]

const partners = [
  "WhatsApp",
  "Google Workspace",
  "Sheets",
  "Gmail",
  "CRM",
  "Webhooks",
  "APIs",
  "n8n",
  "Make",
]

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Ambient lights */}
      <div
        className="light-blob w-96 h-96 bg-[#00F5FF] top-20 -left-48"
        aria-hidden="true"
      />
      <div
        className="light-blob w-80 h-80 bg-[#00FF85] top-96 -right-40"
        aria-hidden="true"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <RevealOnScroll>
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#00F5FF]">
                  Tecnología para empresas que quieren avanzar
                </p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  Automatizamos procesos y creamos tecnología para{" "}
                  <span className="gradient-text">
                    hacer crecer tu negocio
                  </span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll delay={1}>
                <p className="mt-[25px] text-[14.5px] lg:text-[17px] leading-[1.6] text-white/85 max-w-[520px] mx-auto lg:mx-0">
                  Integramos tus canales de atención, desarrollamos páginas web y
                  software a medida, y protegemos tu operación digital con soluciones
                  de ciberseguridad.
                </p>

              </RevealOnScroll>

              <RevealOnScroll delay={2}>
                <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contacto#formulario"
                className="glow-btn px-6 py-4 rounded-xl font-semibold text-center inline-flex items-center justify-center gap-2"
              >
                Solicitar diagnóstico
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/servicios"
                className="glow-btn-outline px-6 py-4 rounded-xl font-semibold text-center inline-flex items-center justify-center gap-2"
              >
                Conocer soluciones
              </Link>
            </div>
              </RevealOnScroll>
            </div>

            {/* Visual */}
            <div className="flex-1 w-full max-w-md lg:max-w-lg">
              <RevealOnScroll direction="scale">
                <HeroVisual />
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Main services */}
      <section className="relative z-10 px-6 py-20" aria-labelledby="services-title">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#00FF85]">Qué hacemos</p>
              <h2 id="services-title" className="font-heading text-3xl md:text-4xl font-bold text-white text-balance">
                Un equipo para automatizar, construir y proteger tu operación
              </h2>
              <p className="mt-5 leading-relaxed text-white/65">
                Combinamos automatización, desarrollo y seguridad para resolver
                problemas reales y crear una operación digital más eficiente.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <RevealOnScroll key={service.title} delay={(index % 2) + 1}>
                  <GlassCard className="h-full">
                    <div className="w-12 h-12 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center mb-4">
                      <Icon className="text-[#00F5FF]" size={24} />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-3 text-white/65 text-sm leading-relaxed">{service.description}</p>
                  </GlassCard>
                </RevealOnScroll>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <Link href="/servicios" className="inline-flex items-center gap-2 font-semibold text-[#00F5FF] hover:text-white">
              Explorar todos los servicios <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Automation use cases */}
      <section className="relative py-20 px-6" aria-labelledby="automation-title">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#00F5FF]">
                Automatización aplicada
              </p>
              <h2 id="automation-title" className="font-heading text-3xl md:text-4xl font-bold text-white text-balance">
                Menos tareas manuales. Más oportunidades atendidas.
              </h2>
              <p className="mt-5 leading-relaxed text-white/65">
                Hacemos que tus canales y herramientas trabajen como un solo sistema,
                disponible para atender, registrar y notificar automáticamente.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map(([title, description], index) => (
              <RevealOnScroll key={title} delay={(index % 3) + 1}>
                <GlassCard className="h-full">
                  <MessagesSquare className="mb-4 text-[#00FF85]" size={24} />
                  <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{description}</p>
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Integrations */}
      <section className="relative py-16 px-6 -mt-[0px] md:-mt-[-60px]">
        <div className="mx-auto max-w-7xl text-center">
          <RevealOnScroll>
            <p className="text-white/90 text-sm font-medium uppercase tracking-widest mb-8">
              Integraciones y partners
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {partners.map((name) => (
                <span key={name} className="tech-chip px-4 py-2 rounded-full text-sm">
                  {name}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12 text-balance">
              De la idea a una{" "}
              <span className="gradient-text">solución funcionando</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              [Search, "01", "Diagnóstico", "Entendemos tus procesos, necesidades y puntos de mejora."],
              [Workflow, "02", "Diseño", "Definimos el flujo, las integraciones y la experiencia."],
              [Code2, "03", "Implementación", "Construimos, conectamos y probamos cada escenario."],
              [Bot, "04", "Acompañamiento", "Monitoreamos, damos soporte y ajustamos la solución."],
            ].map(([Icon, number, title, description], index) => {
              const StepIcon = Icon as typeof Search
              return (
                <RevealOnScroll key={title as string} delay={(index % 3) + 1}>
                  <GlassCard className="h-full">
                    <div className="mb-5 flex items-center justify-between">
                      <StepIcon className="text-[#00F5FF]" size={24} />
                      <span className="font-heading text-2xl font-bold text-white/15">{number as string}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white">{title as string}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{description as string}</p>
                  </GlassCard>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* Frequently asked questions */}
      <section className="relative py-20 px-6" aria-labelledby="faq-title">
        <div className="mx-auto max-w-4xl">
          <RevealOnScroll>
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#00FF85]">
                Preguntas frecuentes
              </p>
              <h2 id="faq-title" className="font-heading text-3xl md:text-4xl font-bold text-white">
                Lo que necesitas saber
              </h2>
            </div>
          </RevealOnScroll>
          <div className="space-y-4">
            {[
              ["¿Qué procesos se pueden automatizar?", "Atención de preguntas, captura y clasificación de contactos, seguimientos, agendamientos, recordatorios, notificaciones, actualización de CRM y reportes, entre otros."],
              ["¿Solo trabajan con WhatsApp?", "No. Conectamos WhatsApp, redes sociales, formularios web, correo, calendarios, CRM, Google Sheets, bases de datos y otras plataformas que permitan integración."],
              ["¿Desarrollan soluciones desde cero?", "Sí. Creamos páginas web, software y automatizaciones a medida cuando las herramientas existentes no cubren las necesidades de la operación."],
              ["¿Ofrecen soporte después de implementar?", "Sí. Ofrecemos acompañamiento para mantenimiento, monitoreo, ajustes y continuidad de las soluciones implementadas."],
            ].map(([question, answer]) => (
              <RevealOnScroll key={question}>
                <details className="glass-card group rounded-xl p-5">
                  <summary className="cursor-pointer list-none font-heading font-semibold text-white">
                    <span className="flex items-center justify-between gap-4">
                      {question}
                      <span className="text-xl text-[#00F5FF] transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65">{answer}</p>
                </details>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 -mt-[80px] md:-mt-[25px]">
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll>
            <GlassCard hover={false} className="py-12 px-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                Descubre qué puede{" "}
                <span className="gradient-text">mejorar tu empresa</span>
              </h2>
              <p className="mt-10 text-white/75 mb-8 max-w-lg mx-auto text-pretty">
                Revisamos tu necesidad y te mostramos una ruta clara para convertirla
                en una solución digital útil, segura y sostenible.
              </p>
              <Link
                href="/contacto#formulario"
                className="mt-2 glow-btn px-8 py-3.5 rounded-lg font-semibold text-white inline-flex items-center gap-2"
              >
                Hablemos de tu proyecto
                <ArrowRight size={18} />
              </Link>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
