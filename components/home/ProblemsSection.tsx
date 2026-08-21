import { PROBLEMS } from "@/lib/home-content";
import { CONTACT } from "@/lib/site-config";
import CTAButton from "@/components/CTAButton";

export default function ProblemsSection() {
  return (
    <section id="problemas" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 lg:px-8">
      <div className="max-w-2xl">
        <span className="eyebrow-pill">{PROBLEMS.eyebrow}</span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
          {PROBLEMS.title}
        </h2>
        <p className="mt-3 text-brand-gray-700">{PROBLEMS.subtitle}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.items.map((item) => (
          <div key={item.title} className="card-surface p-6">
            <h3 className="text-lg font-bold text-brand-black">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-brand-gray-50 px-6 py-10 text-center">
        <p className="text-lg font-semibold text-brand-black">
          ¿Lo tuyo no está en la lista? Cuéntanos qué le pasa a tu MSI
        </p>
        <CTAButton
          href={CONTACT.whatsappHrefWithText("¡Hola MSITECH! Necesito un diagnóstico y presupuesto")}
          variant="whatsapp"
          external
        >
          Pide presupuesto gratis por WhatsApp
        </CTAButton>
      </div>
    </section>
  );
}
