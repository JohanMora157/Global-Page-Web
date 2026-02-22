"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Sobre Nosotros" },
  { href: "/contacto", label: "Contáctanos" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#250b3d]/80 backdrop-blur-xl shadow-lg shadow-[#00F5FF]/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Global Automate - Inicio">
          <Image
            src="/images/logo.png"
            alt="Global Automate Logo"
            width={44}
            height={44}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-heading text-xl font-bold text-white transition-all duration-300 group-hover: group-hover:drop-shadow-[0_0_12px_rgba(0,245,255,0.8)]">
  Global <span className="gradient-text">Automate</span>
</span>

        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center md:gap-5 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "active text-[#00F5FF]"
                    : "text-white/120 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contacto"
          className="hidden md:inline-flex glow-btn md:px-3 md:py-2 md:text-xs lg:px-5 lg:py-2.5 lg:text-sm rounded-lg font-semibold text-white"
        >
          Cotizar Servicio
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5FF] rounded-lg"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-[#200340]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4 border-t border-white/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-base font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#00F5FF]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="glow-btn inline-block px-5 py-2.5 rounded-lg text-sm font-semibold text-white text-center w-full"
            >
              Cotizar demo
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
