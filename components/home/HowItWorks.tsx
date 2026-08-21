import { HOW_IT_WORKS } from "@/lib/home-content";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow-pill">{HOW_IT_WORKS.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            {HOW_IT_WORKS.title}
          </h2>
          <p className="mt-3 text-brand-gray-700">{HOW_IT_WORKS.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-0 lg:grid-cols-3">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <div key={step.title} className="relative flex gap-5 py-6 lg:flex-col lg:gap-0 lg:border-t-2 lg:border-brand-gray-100 lg:pt-6">
              <span className="text-5xl font-extrabold text-brand-gray-200 lg:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-4">
                <h3 className="text-lg font-bold text-brand-black">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
