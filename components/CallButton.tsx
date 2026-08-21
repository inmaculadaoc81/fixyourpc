import { CONTACT } from "@/lib/site-config";

export default function CallButton() {
  return (
    <a
      href={CONTACT.phoneHref}
      aria-label={`Llamar al ${CONTACT.phone}`}
      className="fixed bottom-5 right-24 z-[9998] flex h-[62px] w-[62px] items-center justify-center rounded-full bg-brand-red shadow-[0_0_10px_-3px_rgba(0,0,0,0.6)] transition-transform hover:scale-105"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 2 6a2 2 0 0 1 2-2Z" />
      </svg>
    </a>
  );
}
