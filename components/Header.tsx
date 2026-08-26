"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV, CONTACT } from "@/lib/site-config";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-brand-red/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link href="#inicio" className="flex shrink-0 items-center">
          <Image
            src="/images/site/logo.jpg"
            alt="MSITech Servicio Técnico MSI"
            width={160}
            height={48}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold whitespace-nowrap text-brand-red shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            {CONTACT.phone}
          </a>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-full p-2 text-white transition-colors hover:bg-white/15 lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <svg width="26" height="20" viewBox="0 0 26 20" fill="none" aria-hidden="true">
            <path d="M0 1h26M0 10h26M0 19h26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
