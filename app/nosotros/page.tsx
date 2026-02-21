import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { GlassCard } from "@/components/glass-card"
import {
  Lightbulb,
  Target,
  Gauge,
  Eye,
  User,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Global Automate",
  description:
    "Somos un equipo enfocado en construir soluciones digitales rapidas, seguras y escalables.",
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovacion",
    description:
      "Exploramos constantemente nuevas tecnologias y enfoques para ofrecer soluciones que marquen la diferencia.",
  },
  {
    icon: Target,
    title: "Compromiso",
    description:
      "Cada proyecto es una promesa. Nos involucramos al 100% para entregar resultados que superen expectativas.",
  },
  {
    icon: Gauge,
    title: "Eficiencia",
    description:
      "Optimizamos cada proceso para maximizar resultados con el menor esfuerzo y tiempo posible.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    description:
      "Comunicacion clara, reportes detallados y sin sorpresas. Sabes exactamente que estamos haciendo y por que.",
  },
]

const techStack = [
  "WhatsApp Business / Flujos",
  "Google Workspace",
  "APIs & Webhooks",
  "n8n / Make",
  "Node.js",
  "Python",
  "OWASP",
  "Cloud & Deploy",
  "React / Next.js",
  "PostgreSQL",
]

const team = [
  {
    name: "Co-founder",
    role: "Automatizacion",
    description: "Experto en flujos de trabajo y automatizacion de procesos empresariales.",
  },
  {
    name: "Co-founder",
    role: "Web",
    description: "Especialista en desarrollo web de alto rendimiento y experiencia de usuario.",
  },
  {
    name: "Co-founder",
    role: "Software",
    description: "Arquitecto de software con enfoque en sistemas escalables y robustos.",
  },
  {
    name: "Co-founder",
    role: "Seguridad",
    description: "Especialista en ciberseguridad web y proteccion de datos empresariales.",
  },
  {
    name: "Equipo",
    role: "Soporte & Implementacion",
    description: "Soporte continuo y acompanamiento en cada etapa del proyecto.",
  },
]

export default function NosotrosPage() {
  return (
    <div className="relative">
      {/* Ambient lights */}
      <div className="light-blob w-96 h-96 bg-[#00F5FF] top-20 -right-48" aria-hidden="true" />
      <div className="light-blob w-80 h-80 bg-[#00FF85] top-[600px] -left-40" aria-hidden="true" />

      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <RevealOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              Sobre{" "}
              <span className="gradient-text">Global Automate</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <p className="mt-6 text-white/80 text-lg lg:text-[17px] leading-relaxed max-w-3xl mx-auto text-pretty">
              Somos un equipo enfocado en construir soluciones digitales que
              realmente se usan: rapidas, seguras y escalables. No vendemos humo:
              entregamos sistemas que generan resultados.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12 text-balance">
              Nuestros valores{" "}
              <span className="gradient-text">fundamentales</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <RevealOnScroll key={value.title} delay={index + 1}>
                  <GlassCard className="h-full text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00F5FF]/15 to-[#00FF85]/15 flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={26} />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </GlassCard>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* Essence */}
      <section className="relative py-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <RevealOnScroll>
            <GlassCard hover={false} className="py-12 px-8">
              <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-4">
                Nuestra esencia
              </p>
              <blockquote className="font-heading text-2xl md:text-3xl font-bold text-white leading-snug text-balance">
                {"\"Tu crecimiento es el norte: automatizamos, desarrollamos y aseguramos tu operacion para que "}
                <span className="gradient-text">escales con confianza.</span>
                {"\""}
              </blockquote>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-4 text-balance">
              Stack &{" "}
              <span className="gradient-text">Tecnologias</span>
            </h2>
            <p className="text-white/75 text-center mb-12 max-w-xl mx-auto">
              Herramientas y plataformas que dominamos para construir tus soluciones.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="tech-chip px-5 py-2.5 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12 text-balance">
              Nuestro{" "}
              <span className="gradient-text">equipo</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <RevealOnScroll key={member.role} delay={index + 1}>
                <GlassCard className="h-full text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00F5FF]/20 to-[#00FF85]/20 flex items-center justify-center mx-auto mb-4">
                    <User className="text-white/70" size={28} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-[#00F5FF] text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
