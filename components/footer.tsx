import Link from "next/link"
import { OrbitLogo } from "@/components/orbit-logo"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#1a0230]/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-10.5 mb-4">
              <OrbitLogo size={65} />
              <span className="font-heading text-lg font-bold text-white">
                Global <span className="gradient-text">Automate</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Automatizamos, construimos y protegemos tu operacion digital.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4">
              Paginas
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Contactanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4">
              Contacto
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="tel:+573181324136"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  +57 318 1324136
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@globalautomate.co"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  contacto@globalautomate.co
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white mb-4">
              Redes
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/GlobAutomate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#00F5FF] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/globalautomate.col/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#00F5FF] transition-colors"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=573181324136&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@globalautomate.col"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#00F5FF] transition-colors"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.85z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            {"© "}{new Date().getFullYear()}{" Global Automate. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
