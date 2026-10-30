import Link from "next/link";
import { fechaLarga, type Articulo } from "@/lib/blog";

export default function BlogCard({ articulo: a }: { articulo: Articulo }) {
  return (
    <article className="card-surface overflow-hidden">
      <Link href={`/blog/${a.slug}`} className="flex h-full flex-col">
        {a.image && (
          // Imagen servida por la API de Kelatos (dominio externo): <img> normal, sin optimizador de Next.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={a.image} alt={a.imageAlt || a.title} loading="lazy" className="aspect-video w-full object-cover" />
        )}
        <div className="flex flex-1 flex-col gap-2 p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">{a.category}</span>
          <h2 className="text-lg font-bold leading-snug text-brand-black">{a.title}</h2>
          <p className="text-sm leading-relaxed text-brand-gray-700">{a.description}</p>
          <span className="mt-auto pt-2 text-xs font-semibold text-brand-red">
            {fechaLarga(a.date)}
            {a.readingMinutes ? ` · ${a.readingMinutes} min` : ""} · Leer →
          </span>
        </div>
      </Link>
    </article>
  );
}
