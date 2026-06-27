import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatbotButton } from "@/components/chatbot-button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PageTransition } from "@/components/page-transition"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: {
    default: "Global Automate | Automatización y Desarrollo de Software",
    template: "%s | Global Automate",
  },
  description:
    "Automatización de procesos y canales de atención, desarrollo de páginas web, software a medida y ciberseguridad para empresas.",
  applicationName: "Global Automate",
  category: "technology",
  keywords: [
    "automatización de procesos",
    "automatización de atención",
    "desarrollo web",
    "software a medida",
    "ciberseguridad web",
    "integración de sistemas",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Global Automate",
    title: "Global Automate | Automatización y Desarrollo de Software",
    description:
      "Automatizamos procesos, desarrollamos páginas web y software a medida, y protegemos operaciones digitales.",
  },
  twitter: {
    card: "summary",
    title: "Global Automate | Automatización y Desarrollo de Software",
    description:
      "Automatización, desarrollo web, software a medida y ciberseguridad para empresas.",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#370174",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-main-gradient noise-overlay min-h-screen overflow-x-hidden`}
      >
        <ParticlesBackground />
        <Navbar />
        <PageTransition>
          <main className="relative z-10">{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
        <ChatbotButton />
      </body>
    </html>
  )
}
