"use client";

import { useState } from "react";

export type FAQItem = { question: string; answer: string };

export default function FAQSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: FAQItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-20 lg:px-8">
      <div className="text-center">
        <span className="eyebrow-pill">{eyebrow}</span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">{title}</h2>
      </div>

      <div className="mt-10 space-y-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.question}
              className={`overflow-hidden rounded-2xl border transition-colors ${isOpen ? "border-brand-red/20 bg-brand-red-light/40" : "border-brand-gray-100 bg-white"}`}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="font-semibold text-brand-black">{item.question}</span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-brand-red transition-transform duration-200 ${isOpen ? "rotate-45 bg-brand-red text-white" : "bg-brand-red-light"}`}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M7 1v12M1 7h12" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed text-brand-gray-700">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
