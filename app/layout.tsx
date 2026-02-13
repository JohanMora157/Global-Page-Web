import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
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
  title: "Global Automate | Automatizacion y Soluciones Digitales",
  description:
    "Automatizaciones, paginas web, software web y ciberseguridad. Centralizamos herramientas, creamos experiencias web premium y reforzamos tu ciberseguridad.",
  generator: "v0.app",
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
    <html lang="es" suppressHydrationWarning>
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
      </body>
    </html>
  )
}
