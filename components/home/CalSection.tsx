import { CAL_BLOCK } from "@/lib/home-content";
import { CONTACT } from "@/lib/site-config";

export default function CalSection() {
  return (
    <section id="cita" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="text-center">
          <span className="eyebrow-pill">{CAL_BLOCK.eyebrow}</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-black sm:text-4xl">
            {CAL_BLOCK.title}
          </h2>
          <p className="mt-3 text-brand-gray-700">{CAL_BLOCK.subtitle}</p>
        </div>

        <div className="mt-10 w-full overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-24px_rgba(0,0,0,0.15)] ring-1 ring-brand-gray-100">
          <iframe
            src={CONTACT.calComEmbedSrc}
            title="Reservar cita con MSITech"
            loading="lazy"
            className="h-[700px] w-full bg-white sm:h-[650px]"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
