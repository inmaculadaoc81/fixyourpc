"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV, CONTACT } from "@/lib/site-config";

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label="Cerrar menú"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col overflow-y-auto bg-white p-5 shadow-xl">
        <div className="flex items-center justify-between">
          <Image src="/images/site/logo.jpg" alt="MSITech" width={120} height={36} className="h-9 w-auto" />
          <button
            type="button"
            aria-label="Cerrar menú"
            className="rounded-full p-2 text-brand-black"
            onClick={onClose}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M1 1l18 18M19 1L1 19" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-1" aria-label="Navegación móvil">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-xl px-3 py-3 text-base font-medium text-brand-black hover:bg-brand-gray-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2 pt-6">
          <a
            href={CONTACT.phoneHref}
            className="rounded-full bg-brand-black px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Llamar: {CONTACT.phone}
          </a>
          <a
            href={CONTACT.whatsappHref}
            className="rounded-full bg-whatsapp px-4 py-3 text-center text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
