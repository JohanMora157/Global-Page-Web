import Link from "next/link"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { GlassCard } from "@/components/glass-card"
import { HeroVisual } from "@/components/home/hero-visual"
import { CountUp } from "@/components/count-up"
import {
  Zap,
  Shield,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const whatWeDoItems = [
  "Ahorra hasta 70% de tiempo operativo",
  "Conectamos tus sistemas para que trabajen en sincronia",
]

const whyUsItems = [
  "Soluciones seguras, escalables y medibles",
  "Menos errores, mas control",
]

const impactItems = [
  "Automatizacion + desarrollo + seguridad en un solo equipo",
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
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  Automatiza, construye y{" "}
                  <span className="gradient-text">
                    protege tu operacion digital.
                  </span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll delay={1}>
                <p className="mt-[25px] text-[14px] lg:text-[17px] leading-[1.6] text-white/85 max-w-[520px]">
                En Global Automate centralizamos herramientas, creamos experiencias web premium, desarrollamos software a medida y reforzamos tu ciberseguridad para escalar con confianza.
                </p>

              </RevealOnScroll>

              <RevealOnScroll delay={2}>
                <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start md:-mt-[-75px]">
              <Link
                href="/contacto"
                className="glow-btn px-6 py-4 rounded-xl font-semibold text-center inline-flex items-center justify-center gap-2"
              >
                Cotizar Servicio
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/servicios"
                className="glow-btn-outline px-6 py-4 rounded-xl font-semibold text-center inline-flex items-center justify-center gap-2"
              >
                Ver servicios
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

      {/* Three cards section */}
      <section className="relative z-10 px-6 pt-0 pb-5 md:-mt-[5px]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Que hacemos */}
            <RevealOnScroll delay={1}>
              <GlassCard className="h-full">
                <div className="w-12 h-12 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center mb-4">
                  <Zap className="text-[#00F5FF]" size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">
                  Que hacemos
                </h3>
                <ul className="flex flex-col gap-3">
                  {whatWeDoItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white/70 text-[13px] leading-relaxed"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#00FF85] mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </RevealOnScroll>

            {/* Por que elegirnos */}
            <RevealOnScroll delay={2}>
              <GlassCard className="h-full">
                <div className="w-12 h-12 rounded-lg bg-[#00FF85]/10 flex items-center justify-center mb-4">
                  <Shield className="text-[#00FF85]" size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">
                  Por que elegirnos
                </h3>
                <ul className="flex flex-col gap-3">
                  {whyUsItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white/70 text-[13px] leading-relaxed"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#00FF85] mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </RevealOnScroll>

            {/* Impacto real */}
            <RevealOnScroll delay={3}>
              <GlassCard className="h-full">
                <div className="w-12 h-12 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center mb-4">
                  <BarChart3 className="text-[#00F5FF]" size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">
                  Impacto real
                </h3>
                <ul className="flex flex-col gap-3">
                  {impactItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-white/70 text-[13px] leading-relaxed"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#00FF85] mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </RevealOnScroll>
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

      {/* Results / Metrics */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12 text-balance">
              Resultados que{" "}
              <span className="gradient-text">hablan por si solos</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealOnScroll delay={1}>
              <GlassCard className="text-center">
                <CountUp end={70} suffix="%" prefix="+" />
                <p className="mt-2 text-white/80 text-sm">
                  Eficiencia operativa
                </p>
              </GlassCard>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <GlassCard className="text-center">
                <CountUp end={15} prefix="-" />
                <p className="mt-2 text-white/80 text-sm">
                  Horas/semana en tareas manuales
                </p>
              </GlassCard>
            </RevealOnScroll>

            <RevealOnScroll delay={3}>
              <GlassCard className="text-center">
                <CountUp end={3} suffix="s" />
                <p className="mt-2 text-white/80 text-sm">
                  Tiempo de respuesta automatizada
                </p>
              </GlassCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6 -mt-[80px] md:-mt-[25px]">
        <div className="mx-auto max-w-3xl text-center">
          <RevealOnScroll>
            <GlassCard hover={false} className="py-12 px-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                {"Listo para "}
                <span className="gradient-text">transformar</span>
                {" tu negocio?"} 
              </h2>
              <p className="mt-10 text-white/60 mb-8 max-w-lg mx-auto text-pretty">
                Agenda una demo personalizada y descubre como automatizar,
                desarrollar y proteger tu negocio digital.
              </p>
              <Link
                href="/contacto"
                className="mt-2 glow-btn px-8 py-3.5 rounded-lg font-semibold text-white inline-flex items-center gap-2"
              >
                Cotizar Servicio
                <ArrowRight size={18} />
              </Link>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
