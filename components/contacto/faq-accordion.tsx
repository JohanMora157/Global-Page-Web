"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Cuanto tiempo toma implementar una automatizacion?",
    answer:
      "Depende de la complejidad del flujo. Automatizaciones simples (como respuestas en WhatsApp o sincronizacion de datos) pueden estar listas en 3-5 dias habiles. Proyectos mas complejos con multiples integraciones suelen tomar entre 2 y 4 semanas.",
  },
  {
    question: "Como funcionan los precios y cotizaciones?",
    answer:
      "Cada proyecto se cotiza de forma personalizada segun su alcance. Ofrecemos una consultoria inicial gratuita donde evaluamos tus necesidades y te presentamos un plan con precios claros, sin costos ocultos. Tambien tenemos planes de mantenimiento mensual.",
  },
  {
    question: "Incluyen mantenimiento y soporte post-lanzamiento?",
    answer:
      "Si. Todos nuestros proyectos incluyen un periodo de soporte post-lanzamiento. Ademas, ofrecemos planes de mantenimiento continuo para actualizaciones, monitoreo, optimizacion y soporte tecnico prioritario.",
  },
  {
    question: "Que tan seguras son las soluciones que desarrollan?",
    answer:
      "La seguridad es un pilar fundamental en todo lo que hacemos. Aplicamos buenas practicas OWASP, realizamos auditorias de seguridad, configuramos headers HTTP seguros, y protegemos contra vulnerabilidades comunes como XSS, CSRF e inyeccion SQL.",
  },
  {
    question: "Pueden integrar automatizaciones con WhatsApp Business?",
    answer:
      "Si. Somos especialistas en integraciones con WhatsApp Business API. Podemos crear flujos automaticos de respuesta, notificaciones a clientes, bots conversacionales y sincronizacion con tu CRM o base de datos.",
  },
  {
    question: "Trabajan con empresas fuera de Colombia?",
    answer:
      "Si. Trabajamos con empresas de toda Latinoamerica y Espana. Todo nuestro proceso es 100% remoto con herramientas de colaboracion en tiempo real, videollamadas de seguimiento y comunicacion constante.",
  },
]

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-3">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="glass-card rounded-xl border-white/10 px-6 overflow-hidden"
        >
          <AccordionTrigger className="text-white font-medium text-left py-5 hover:no-underline hover:text-[#00F5FF] transition-colors [&[data-state=open]]:text-[#00F5FF]">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-white/60 leading-relaxed pb-5">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
