import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { CONTACT } from "@/lib/site-config";
import { FORM_CONTENT } from "@/lib/home-content";

export default function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-20 bg-brand-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow-pill">{FORM_CONTENT.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            {FORM_CONTENT.title}
          </h2>
          <p className="mt-3 text-brand-gray-700">{FORM_CONTENT.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="card-surface p-6 sm:p-8">
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-brand-gray-100">
              <MapEmbed />
            </div>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-brand-gray-100">
              <p className="text-sm text-brand-gray-700">
                {CONTACT.address.full}. {CONTACT.parking}.
              </p>
              <p className="mt-2 text-sm text-brand-gray-700">{CONTACT.metro}</p>
              <a
                href={CONTACT.phoneHref}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red-dark"
              >
                Llamar ahora: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
