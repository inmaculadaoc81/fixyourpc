import { DATA_WORRY, WHAT_NOT_TO_DO } from "@/lib/home-content";

export default function DataWorrySection() {
  return (
    <section id="datos" className="scroll-mt-20 bg-brand-black py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            {DATA_WORRY.eyebrow}
          </span>
          <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
            {DATA_WORRY.title}
          </h2>
          <div className="mt-6 space-y-4 max-w-xl">
            {DATA_WORRY.paragraphs.map((p) => (
              <p key={p} className="text-brand-gray-400 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-6 max-w-xl border-l-2 border-brand-red pl-4 text-sm text-brand-gray-400">
            {DATA_WORRY.disclaimer}
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7 sm:p-8">
          <h3 className="text-lg font-bold text-brand-black">{WHAT_NOT_TO_DO.title}</h3>
          <ul className="mt-5 space-y-4">
            {WHAT_NOT_TO_DO.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-brand-gray-900">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red-light text-brand-red">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
