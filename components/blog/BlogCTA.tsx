import CTAButton from "@/components/CTAButton";
import { CONTACT } from "@/lib/site-config";

/** Llamada a la acción del blog: WhatsApp, recogida y cita (los mismos destinos que la home). */
export function BlogCTAButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      <CTAButton href={CONTACT.whatsappHrefWithText("¡Hola MSITECH!")} variant="whatsapp" external>
        Escríbenos por WhatsApp
      </CTAButton>
      <CTAButton href={CONTACT.pickupHref} variant="red" external>
        Solicita la recogida
      </CTAButton>
      <CTAButton href="/#cita" variant={dark ? "outline-light" : "outline"} className="sm:col-span-2">
        Pedir cita de 30 minutos
      </CTAButton>
    </div>
  );
}

export default function BlogCTA() {
  return (
    <aside className="bg-mesh-dark mt-14 rounded-3xl bg-brand-black p-7 text-white sm:p-9">
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">¿Tu MSI tiene este problema?</h2>
      <p className="mt-3 leading-relaxed text-white/80">
        Cuéntanos qué hace. El diagnóstico es gratuito y no te comprometes a nada: primero sabemos qué ocurre, después
        decides tú.
      </p>
      <BlogCTAButtons dark />
    </aside>
  );
}
