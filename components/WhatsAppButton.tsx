import { CONTACT } from "@/lib/site-config";

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsappHrefWithText("¡Hola MSITECH!")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-[9998] flex h-[62px] w-[62px] items-center justify-center rounded-full bg-whatsapp shadow-[0_0_10px_-3px_rgba(0,0,0,0.6)] transition-all hover:scale-105 hover:brightness-95"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          fill="#fff"
          d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.2.6 4.24 1.63 6.02L4 29l8.15-2.14a11.9 11.9 0 0 0 3.87.65C22.6 27.5 28 22.1 28 15.48 28 8.86 22.6 3 16.02 3Zm0 21.9c-1.98 0-3.83-.53-5.42-1.46l-.39-.22-4.02 1.05 1.07-3.92-.25-.4a9.87 9.87 0 0 1-1.53-5.33C5.48 9.5 10.14 4.9 16.02 4.9c5.88 0 10.5 4.6 10.5 10.58 0 5.98-4.62 9.42-10.5 9.42Z"
        />
        <path
          fill="#fff"
          d="M12.6 9.9c-.24-.53-.5-.54-.73-.55h-.62c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.72s1.17 3.16 1.33 3.38c.16.22 2.27 3.63 5.6 4.95 2.77 1.1 3.33.88 3.93.82.6-.06 1.94-.79 2.21-1.55.27-.76.27-1.4.19-1.55-.08-.14-.3-.22-.62-.38-.32-.16-1.94-.96-2.24-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.28-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.92-1.79-2.24-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.56-.08-.16-.72-1.8-1-2.45Z"
        />
      </svg>
    </a>
  );
}
