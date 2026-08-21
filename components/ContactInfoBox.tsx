import type { ReactNode } from "react";
import { CONTACT } from "@/lib/site-config";

const ICONS: Record<string, ReactNode> = {
  Dirección: (
    <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  ),
  Horario: <path d="M12 8v4l3 2 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  Teléfono: (
    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 2 6a2 2 0 0 1 2-2Z" />
  ),
  Servicio: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a5 5 0 0 1-6.7 6.7L5 22l-2-2 9.1-9.1a5 5 0 0 1 6.7-6.7l-3.1 3.1Z" />,
  Referencia: <path d="M12 2 2 7l10 5 10-5-10-5Z M2 17l10 5 10-5 M2 12l10 5 10-5" />,
};

const ITEMS = [
  {
    label: "Dirección",
    lines: [CONTACT.address.street, `${CONTACT.address.postalCode} ${CONTACT.address.city}`],
  },
  {
    label: "Horario",
    lines: CONTACT.hours.display,
  },
  {
    label: "Teléfono",
    lines: [CONTACT.phone],
  },
  {
    label: "Servicio",
    lines: ["Diagnóstico gratuito y reparación de portátiles y sobremesa MSI"],
  },
  {
    label: "Referencia",
    lines: [CONTACT.metro, CONTACT.parking],
  },
];

function InfoIcon({ label }: { label: string }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-red-light text-brand-red">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {ICONS[label]}
      </svg>
    </span>
  );
}

export default function ContactInfoBox() {
  return (
    <div className="rounded-3xl border border-brand-gray-100 bg-white shadow-[0_20px_60px_-24px_rgba(0,0,0,0.15)]">
      <div className="divide-y divide-brand-gray-100 p-2">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex gap-3 p-4">
            <InfoIcon label={item.label} />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gray-400">{item.label}</h3>
              <div className="mt-1 space-y-0.5 text-sm text-brand-black">
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href={CONTACT.googleBusinessHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-t border-brand-gray-100 bg-brand-gray-50 px-4 py-3.5 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-red-light hover:text-brand-red"
      >
        Ver ubicación y reseñas
        <span aria-hidden="true">→</span>
      </a>

      <div className="space-y-3 p-4 pt-4">
        <a
          href={CONTACT.whatsappHrefWithText("¡Hola MSITECH!")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl bg-whatsapp px-4 py-3.5 text-white shadow-lg shadow-whatsapp/25 transition-transform hover:-translate-y-0.5"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path
                fill="#fff"
                d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.2.6 4.24 1.63 6.02L4 29l8.15-2.14a11.9 11.9 0 0 0 3.87.65C22.6 27.5 28 22.1 28 15.48 28 8.86 22.6 3 16.02 3Zm0 21.9c-1.98 0-3.83-.53-5.42-1.46l-.39-.22-4.02 1.05 1.07-3.92-.25-.4a9.87 9.87 0 0 1-1.53-5.33C5.48 9.5 10.14 4.9 16.02 4.9c5.88 0 10.5 4.6 10.5 10.58 0 5.98-4.62 9.42-10.5 9.42Z"
              />
              <path
                fill="#fff"
                d="M12.6 9.9c-.24-.53-.5-.54-.73-.55h-.62c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.72s1.17 3.16 1.33 3.38c.16.22 2.27 3.63 5.6 4.95 2.77 1.1 3.33.88 3.93.82.6-.06 1.94-.79 2.21-1.55.27-.76.27-1.4.19-1.55-.08-.14-.3-.22-.62-.38-.32-.16-1.94-.96-2.24-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.28-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.56-.08-.16-.72-1.8-1-2.45Z"
              />
            </svg>
          </span>
          <span>
            <span className="block text-xs font-medium text-white/80">WhatsApp disponible para consultas</span>
            <span className="block text-base font-bold">{CONTACT.whatsappNumber}</span>
          </span>
        </a>

        <a
          href={CONTACT.pickupHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-brand-black px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
        >
          Clic para solicitar recogida
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
