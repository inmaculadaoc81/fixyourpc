import Image from "next/image";
import Link from "next/link";
import { CONTACT, NAV, SITE } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-brand-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src="/images/site/logo-footer.png"
            alt="MSITech Servicio Técnico MSI"
            width={140}
            height={60}
            className="h-14 w-auto"
          />
          <p className="mt-4 text-sm font-semibold text-white">{SITE.fullName}</p>
          <p className="mt-1 text-sm text-brand-gray-400">{SITE.tagline}</p>
          <p className="mt-3 text-sm text-brand-gray-400">
            {CONTACT.address.street}, {CONTACT.address.postalCode}, {CONTACT.address.city},{" "}
            {CONTACT.address.district}.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-gray-400">Navegación</h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-white/90">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-brand-red">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-gray-400">Contacto</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/90">
            <li>
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-brand-red">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-red">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={CONTACT.googleBusinessHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-red">
                Google Business
              </a>
            </li>
            <li>
              <a href={CONTACT.youtubeHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-red">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-gray-400">Horario</h2>
          <ul className="mt-4 space-y-1 text-sm text-white/90">
            {CONTACT.hours.display.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <h2 className="mt-6 text-xs font-bold uppercase tracking-wider text-brand-gray-400">Dirección</h2>
          <p className="mt-2 text-sm text-white/90">{CONTACT.address.full}</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-brand-gray-400">
        © {new Date().getFullYear()} {SITE.name}. No somos servicio técnico oficial de MSI. No atendemos equipos
        cubiertos por la garantía oficial del fabricante.
      </div>
    </footer>
  );
}
