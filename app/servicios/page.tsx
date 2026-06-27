import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { GlassCard } from "@/components/glass-card"
import { ServiceModal } from "@/components/servicios/service-modal"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
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
    image: "/images/services/automation.png",
    imageAlt:
      "Flujo de automatización conectando canales de atención, agenda, correo y datos",
    description:
      "Diseñamos flujos que conectan tus canales de atención y herramientas de trabajo. Centralizamos conversaciones, organizamos datos y activamos acciones para que tu equipo pueda enfocarse en los casos que realmente necesitan atención humana.",
    bullets: [
      "Atención multicanal para WhatsApp, redes, web y correo",
      "Captura, clasificación y distribución automática de prospectos",
      "Seguimientos, recordatorios, agendamientos y alertas internas",
      "Sincronización de información y reportes operativos",
    ],
    integrations: ["WhatsApp", "Redes sociales", "Gmail", "Google Sheets", "CRM", "Agendas"],
    detail: (
      <div className="flex flex-col gap-4">
        <p>
          Nuestras automatizaciones conectan cada pieza de tu operación digital para
          que funcione como un sistema unificado. Desde notificaciones inteligentes
          en WhatsApp hasta sincronización de datos entre plataformas, eliminamos la
          fricción manual.
        </p>
        <p>
          Trabajamos con herramientas como n8n, Make, APIs personalizadas y Webhooks
          para crear flujos robustos que escalan con tu negocio. Cada automatización
          se monitorea y optimiza de forma continua.
        </p>
        <h4 className="font-heading font-bold text-white mt-2">
          Casos de uso frecuentes:
        </h4>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Respuestas automáticas en WhatsApp Business
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Sincronización de leads entre formularios y CRM
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Reportes automáticos en Google Sheets
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
    image: "/images/services/web-development.png",
    imageAlt:
      "Diseño de página web adaptable mostrado en computador y teléfono móvil",
    description:
      "Creamos experiencias web rápidas, claras y preparadas para convertir visitas en oportunidades. Combinamos estrategia, diseño y desarrollo para que tu sitio represente bien la empresa y apoye sus objetivos comerciales.",
    bullets: [
      "Landing pages, sitios corporativos y catálogos digitales",
      "Diseño adaptable para computadores, tablets y móviles",
      "SEO técnico, rendimiento, accesibilidad y analítica",
      "Formularios, WhatsApp, agendas, pagos e integraciones",
    ],
    integrations: ["Next.js", "CMS", "Analytics", "Search Console", "Pasarelas de pago"],
    detail: (
      <div className="flex flex-col gap-4">
        <p>
          Cada sitio web que desarrollamos está pensado para convertir. Usamos las
          tecnologías más modernas para garantizar velocidad, accesibilidad y una
          experiencia de usuario excepcional.
        </p>
        <p>
          Desde landing pages de alto impacto hasta sitios corporativos complejos,
          nuestro enfoque combina diseño premium con ingeniería de rendimiento.
        </p>
        <h4 className="font-heading font-bold text-white mt-2">
          Lo que incluimos:
        </h4>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Diseño responsive y accesible (WCAG)
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Optimización de Core Web Vitals
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
    image: "/images/services/custom-software.png",
    imageAlt:
      "Panel de software empresarial conectado con datos, usuarios y módulos operativos",
    description:
      "Convertimos procesos complejos en plataformas sencillas de usar. Construimos herramientas que reúnen la información, los permisos y las tareas de tu operación en un entorno diseñado específicamente para tu equipo.",
    bullets: [
      "Dashboards, portales de clientes y paneles administrativos",
      "CRM, inventarios, órdenes y flujos de aprobación",
      "Roles, permisos, historial de actividad y reportes",
      "Integraciones API, pagos y datos en tiempo real",
    ],
    integrations: ["Dashboards", "CRM", "APIs", "Bases de datos", "Pagos", "Reportes"],
    detail: (
      <div className="flex flex-col gap-4">
        <p>
          No todas las empresas operan igual. Por eso desarrollamos software web 100%
          personalizado que se ajusta a tus procesos, flujos y necesidades específicas.
        </p>
        <p>
          Desde paneles de administración hasta plataformas complejas con múltiples
          roles y permisos, construimos sistemas que tu equipo realmente va a usar.
        </p>
        <h4 className="font-heading font-bold text-white mt-2">
          Tipos de proyectos:
        </h4>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Dashboards operativos y de gestión
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Sistemas de backoffice y CRM interno
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Plataformas con roles, permisos y auditoría
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
    image: "/images/services/cybersecurity.png",
    imageAlt:
      "Escudo digital protegiendo servidores y nodos de información empresarial",
    description:
      "Revisamos los riesgos de tus aplicaciones y fortalecemos sus puntos críticos. Nuestro enfoque combina prevención, corrección y buenas prácticas para reducir la exposición de la operación y de los datos.",
    bullets: [
      "Diagnóstico y priorización de vulnerabilidades",
      "Fortalecimiento de servidores y aplicaciones web",
      "Controles de acceso, respaldos y protección de datos",
      "Buenas prácticas OWASP y plan de remediación",
    ],
    integrations: ["Auditoría", "Hardening", "OWASP", "Monitoreo", "Backups"],
    detail: (
      <div className="flex flex-col gap-4">
        <p>
          La seguridad no es opcional. Realizamos auditorías completas de tu
          infraestructura web, identificamos vulnerabilidades y aplicamos las
          correcciones necesarias para proteger tu negocio.
        </p>
        <p>
          Seguimos los estándares OWASP y las mejores prácticas de la industria para
          garantizar que tus datos y los de tus clientes estén seguros.
        </p>
        <h4 className="font-heading font-bold text-white mt-2">
          Nuestro enfoque:
        </h4>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Escaneo de vulnerabilidades y pentesting básico
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Configuración segura de headers HTTP
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#00FF85] mt-0.5 shrink-0" />
            Protección contra XSS, CSRF e inyección SQL
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
            <p className="mt-6 text-white/70 text-[14.5px] lg:text-[18px] md:text-xl leading-relaxed max-w-2xl mx-auto text-pretty">
              Diseñamos, desarrollamos e integramos soluciones digitales que
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
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
                      {service.title}
                    </h2>
                    <p className="text-white/60 text-[13.5px] lg:text-[15px] leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-white/70 text-[11px] lg:text-[13px]"
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
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                    />
                    <div className="service-visual-overlay" aria-hidden="true" />
                    <div className="service-visual-badge">
                      <Icon size={18} />
                      <span>{service.title}</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </section>

      {/* Ongoing support */}
      <section className="relative px-6 pb-24 pt-8">
        <RevealOnScroll>
          <div className="mx-auto grid max-w-[1200px] gap-8 rounded-2xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#00FF85]">
                Soporte y evolución continua
              </p>
              <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
                La entrega no es el final del proyecto
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65 md:text-base">
                Podemos acompañar tu solución con monitoreo, mantenimiento,
                respaldos, ajustes menores y nuevas funcionalidades para que siga
                siendo útil mientras tu empresa cambia y crece.
              </p>
            </div>
            <Link
              href="/contacto#formulario"
              className="glow-btn inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold"
            >
              Cuéntanos tu proyecto
              <ArrowRight size={18} />
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  )
}
