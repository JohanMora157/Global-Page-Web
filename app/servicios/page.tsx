import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { GlassCard } from "@/components/glass-card"
import { ServiceModal } from "@/components/servicios/service-modal"
import {
  Workflow,
  Globe,
  Code2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios | Global Automate",
  description:
    "Automatizaciones, desarrollo web, software a medida y ciberseguridad. Descubre nuestros servicios digitales.",
}

const services = [
  {
    icon: Workflow,
    title: "Automatizaciones",
    description:
      "Eliminamos tareas repetitivas conectando tus herramientas favoritas. Desde flujos de WhatsApp hasta integraciones complejas con CRM, todo trabaja en sincronia sin intervencion manual.",
    bullets: [
      "Reduce hasta un 70% el tiempo en tareas operativas",
      "Integracion con WhatsApp, Gmail, Sheets, CRM y mas",
      "Flujos automaticos con respuesta en menos de 3 segundos",
    ],
    integrations: ["WhatsApp", "Gmail", "Google Sheets", "CRM", "Webhooks"],
    detail: (
      <div className="flex flex-col gap-4">
        <p>
          Nuestras automatizaciones conectan cada pieza de tu operacion digital para
          que funcione como un sistema unificado. Desde notificaciones inteligentes
          en WhatsApp hasta sincronizacion de datos entre plataformas, eliminamos la
          friccion manual.
        </p>
        <p>
          Trabajamos con herramientas como n8n, Make, APIs personalizadas y Webhooks
          para crear flujos robustos que escalan con tu negocio. Cada automatizacion
          se monitorea y optimiza de forma continua.
        </p>
        <h4 className="font-heading font-bold text-white mt-2">
          Casos de uso frecuentes:
        </h4>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Respuestas automaticas en WhatsApp Business
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Sincronizacion de leads entre formularios y CRM
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Reportes automaticos en Google Sheets
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Alertas y notificaciones por email y chat
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Creamos sitios web corporativos premium con rendimiento excepcional, SEO optimizado y analitica integrada. Tu presencia digital, a otro nivel.",
    bullets: [
      "Performance score superior a 90 en Lighthouse",
      "SEO tecnico base incluido en cada proyecto",
      "Analitica integrada con Google Analytics y Search Console",
    ],
    integrations: [],
    detail: (
      <div className="flex flex-col gap-4">
        <p>
          Cada sitio web que desarrollamos esta pensado para convertir. Usamos las
          tecnologias mas modernas para garantizar velocidad, accesibilidad y una
          experiencia de usuario excepcional.
        </p>
        <p>
          Desde landing pages de alto impacto hasta sitios corporativos complejos,
          nuestro enfoque combina diseno premium con ingenieria de rendimiento.
        </p>
        <h4 className="font-heading font-bold text-white mt-2">
          Lo que incluimos:
        </h4>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Diseno responsive y accesible (WCAG)
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Optimizacion de Core Web Vitals
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Certificado SSL y deploy en la nube
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Panel de contenido editable (CMS)
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: Code2,
    title: "Software Web a Medida",
    description:
      "Desarrollamos dashboards, backoffice, sistemas internos e integraciones personalizadas. Software que se adapta a tu operacion, no al reves.",
    bullets: [
      "Dashboards con datos en tiempo real y visualizacion avanzada",
      "Sistemas internos que reducen errores operativos en un 60%",
      "Integraciones API con cualquier plataforma o servicio externo",
    ],
    integrations: [],
    detail: (
      <div className="flex flex-col gap-4">
        <p>
          No todas las empresas operan igual. Por eso desarrollamos software web 100%
          personalizado que se ajusta a tus procesos, flujos y necesidades especificas.
        </p>
        <p>
          Desde paneles de administracion hasta plataformas complejas con multiples
          roles y permisos, construimos sistemas que tu equipo realmente va a usar.
        </p>
        <h4 className="font-heading font-bold text-white mt-2">
          Tipos de proyectos:
        </h4>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Dashboards operativos y de gestion
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Sistemas de backoffice y CRM interno
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Plataformas con roles, permisos y auditoria
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Integraciones con pasarelas de pago y APIs
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Ciberseguridad Web",
    description:
      "Protegemos tu operacion digital con auditoria basica, hardening, buenas practicas y proteccion de datos. Seguridad real, no solo promesas.",
    bullets: [
      "Auditoria de seguridad con reporte detallado de vulnerabilidades",
      "Hardening de servidores y aplicaciones web",
      "Implementacion de buenas practicas OWASP",
    ],
    integrations: [],
    detail: (
      <div className="flex flex-col gap-4">
        <p>
          La seguridad no es opcional. Realizamos auditorias completas de tu
          infraestructura web, identificamos vulnerabilidades y aplicamos las
          correcciones necesarias para proteger tu negocio.
        </p>
        <p>
          Seguimos los estandares OWASP y las mejores practicas de la industria para
          garantizar que tus datos y los de tus clientes esten seguros.
        </p>
        <h4 className="font-heading font-bold text-white mt-2">
          Nuestro enfoque:
        </h4>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Escaneo de vulnerabilidades y pentesting basico
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Configuracion segura de headers HTTP
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Proteccion contra XSS, CSRF e inyeccion SQL
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Plan de respuesta ante incidentes
          </li>
        </ul>
      </div>
    ),
  },
]

export default function ServiciosPage() {
  return (
    <div className="relative">
      {/* Ambient lights */}
      <div className="light-blob w-96 h-96 bg-[#00FF85] top-40 -right-48" aria-hidden="true" />
      <div className="light-blob w-80 h-80 bg-[#00F5FF] top-[800px] -left-40" aria-hidden="true" />

      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <RevealOnScroll>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              Nuestros{" "}
              <span className="gradient-text">servicios</span>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <p className="mt-6 text-white/70 lg:text-[18.5px] md:text-xl leading-relaxed max-w-2xl mx-auto text-pretty">
              Disenamos, desarrollamos e integramos soluciones digitales que
              convierten procesos lentos en resultados medibles.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services list — wide 2-col grid, alternating */}
      <section className="relative py-12 px-6">
        <div className="mx-auto max-w-[1200px] flex flex-col gap-28">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <RevealOnScroll
                key={service.title}
                direction={isEven ? "left" : "right"}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center ${
                    !isEven ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* Text column */}
                  <div className={`flex flex-col gap-4 ${!isEven ? "lg:[direction:ltr]" : ""}`}>
                    <div className="w-14 h-14 rounded-xl bg-[#00F5FF]/10 flex items-center justify-center">
                      <Icon className="text-[#00F5FF]" size={28} />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-white/70 text-sm"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#00FF85] mt-0.5 shrink-0"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    {service.integrations.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {service.integrations.map((int) => (
                          <span
                            key={int}
                            className="tech-chip px-3 py-1 rounded-full text-xs"
                          >
                            {int}
                          </span>
                        ))}
                      </div>
                    )}
                    <ServiceModal title={service.title} detail={service.detail} />
                  </div>

                  {/* Visual column — large hero-like illustration */}
                  <div className={`service-visual ${!isEven ? "lg:[direction:ltr]" : ""}`}>
                    <Icon className="text-[#00F5FF]/20" size={140} strokeWidth={0.8} />
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </section>
    </div>
  )
}
