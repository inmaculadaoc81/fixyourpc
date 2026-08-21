import { TRUST } from "@/lib/home-content";

export default function TrustSection() {
  return (
    <section id="confianza" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow-pill">{TRUST.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            {TRUST.title}
          </h2>
        </div>

        <ul className="mt-8 flex flex-wrap gap-3">
          {TRUST.facts.map((fact) => (
            <li
              key={fact}
              className="flex items-center gap-2 rounded-full border border-brand-gray-200 px-4 py-2 text-sm text-brand-gray-700"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
              {fact}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TRUST.items.map((t) => (
            <figure key={t.author} className="card-surface flex flex-col p-6">
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" className="text-brand-red/20" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M11.5 0C5.1 2.4 0 8 0 14.6 0 19 3 22 6.9 22c3.5 0 6.1-2.8 6.1-6.2 0-3.2-2.3-5.7-5.3-5.9C8.6 6 11 2.9 14.6 1.4L11.5 0Zm14 0c-6.4 2.4-11.5 8-11.5 14.6 0 4.4 3 7.4 6.9 7.4 3.5 0 6.1-2.8 6.1-6.2 0-3.2-2.3-5.7-5.3-5.9C22.6 6 25 2.9 28.6 1.4L25.5 0Z"
                />
              </svg>
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-brand-gray-900">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-brand-gray-100 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red-light text-sm font-bold text-brand-red">
                  {t.author.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-brand-black">{t.author}</p>
                  <p className="text-xs text-brand-gray-400">{t.source}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
