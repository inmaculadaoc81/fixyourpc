import { PICKUP } from "@/lib/home-content";
import { CONTACT } from "@/lib/site-config";
import CTAButton from "@/components/CTAButton";

export default function PickupSection() {
  return (
    <section id="recogida" className="scroll-mt-20 bg-brand-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow-pill">{PICKUP.eyebrow}</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance text-brand-black sm:text-4xl">
              {PICKUP.title}
            </h2>
            <div className="mt-5 space-y-4">
              {PICKUP.paragraphs.map((p) => (
                <p key={p} className="text-brand-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-7">
              <CTAButton href={CONTACT.pickupHref} variant="black" external>
                Solicita tu recogida ahora
              </CTAButton>
            </div>
          </div>

          <ol className="grid grid-cols-2 gap-4">
            {PICKUP.steps.map((step, i) => (
              <li key={step} className="rounded-2xl bg-white p-5 ring-1 ring-brand-gray-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm font-semibold text-brand-black">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
