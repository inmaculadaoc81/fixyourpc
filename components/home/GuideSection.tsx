import { GUIDE } from "@/lib/home-content";

export default function GuideSection() {
  return (
    <section id="guia" className="scroll-mt-20 bg-brand-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <span className="eyebrow-pill">{GUIDE.eyebrow}</span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance text-brand-black sm:text-4xl">
          {GUIDE.title}
        </h2>
        <div className="mt-6 space-y-4">
          {GUIDE.paragraphs.map((p) => (
            <p key={p} className="leading-relaxed text-brand-gray-700">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
