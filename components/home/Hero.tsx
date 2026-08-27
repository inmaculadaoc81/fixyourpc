import { CONTACT } from "@/lib/site-config";
import { HERO } from "@/lib/home-content";
import CTAButton from "@/components/CTAButton";
import ContactInfoBox from "@/components/ContactInfoBox";

export default function Hero() {
  return (
    <section id="inicio" className="bg-mesh relative overflow-hidden bg-brand-gray-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="bg-dots absolute inset-0" />
        <div className="absolute -top-32 -right-32 h-120 w-120 rounded-full bg-brand-red/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-104 w-104 rounded-full bg-brand-red/7 blur-3xl" />

        {/* Formas geométricas con opacidad, sin desenfoque. */}
        <div className="absolute -top-6 right-[4%] h-72 w-72 rounded-full border-4 border-brand-red/15" />
        <div className="absolute top-44 right-[16%] h-32 w-32 rounded-full bg-brand-red/10" />
        <div className="absolute bottom-0 left-[2%] h-48 w-48 rotate-12 rounded-2xl border-4 border-brand-black/10" />
        <div className="absolute bottom-28 left-[13%] h-24 w-24 -rotate-6 rounded-xl bg-brand-black/6" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-14 pb-16 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* En móvil este bloque va primero: H1 y contenido, luego CTA. La caja
              de información (más abajo en el DOM) aparece después. */}
          <div>
            <span className="eyebrow-pill">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              {HERO.kicker}
            </span>
            <h1 className="mt-5 max-w-2xl text-5xl font-extrabold tracking-tight text-balance text-brand-black sm:text-6xl lg:text-7xl">
              {HERO.title}{" "}
              <span className="bg-linear-to-r from-brand-red to-brand-red-dark bg-clip-text text-transparent">
                {HERO.titleWorry}
              </span>
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CTAButton href={CONTACT.whatsappHrefWithText("¡Hola MSITECH!")} variant="whatsapp" external>
                WhatsApp · Atención 24 horas 365 días · {CONTACT.whatsappNumber}
              </CTAButton>
              <CTAButton href={CONTACT.pickupHref} variant="black" external>
                Solicita tu recogida ahora
              </CTAButton>
              <CTAButton href={CONTACT.phoneHref} variant="outline">
                Atención telefónica 24 horas 365 días
              </CTAButton>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {HERO.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/60 p-4 ring-1 ring-black/5 backdrop-blur-sm">
                  <p className="text-2xl font-extrabold text-brand-red sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-brand-gray-700 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <ContactInfoBox />
          </div>
        </div>
      </div>
    </section>
  );
}
