import type { Metadata } from "next";
import BlogCard from "@/components/blog/BlogCard";
import { BlogCTAButtons } from "@/components/blog/BlogCTA";
import { listaArticulos } from "@/lib/blog";
import { SITE } from "@/lib/site-config";

// Se regenera como mucho cada 5 minutos con los artículos publicados desde Agentes V2.
export const revalidate = 300;

const TITULO = "Blog de reparación de portátiles MSI en Madrid | MSITech";
const DESCRIPCION =
  "Guías claras sobre averías de portátiles y sobremesa MSI: qué comprobar, qué evitar, cómo proteger tus archivos y cuándo merece la pena reparar. Servicio técnico MSI en Madrid.";

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: "/blog" },
  openGraph: { title: TITULO, description: DESCRIPCION, url: `${SITE.domain}/blog`, siteName: SITE.fullName, locale: "es_ES", type: "website" },
};

export default async function BlogPage() {
  const articulos = await listaArticulos();
  const blogSchema = { "@context": "https://schema.org", "@type": "Blog", name: "Blog de MSITech", url: `${SITE.domain}/blog`, inLanguage: "es" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />

      <section className="bg-mesh relative overflow-hidden py-16 sm:py-20">
        <div className="bg-dots pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <span className="eyebrow-pill">Blog de MSITech</span>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-balance text-brand-black sm:text-5xl">
            Guías para cuando tu portátil o sobremesa MSI falla
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-gray-700">
            Qué hacer (y qué evitar) cuando tu MSI no enciende, se calienta o se apaga solo, cómo proteger tus archivos y
            cuándo merece la pena repararlo. Explicado sin tecnicismos.
          </p>
        </div>
      </section>

      <section className="bg-brand-gray-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {articulos.length ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articulos.map((a) => (
                <BlogCard key={a.slug} articulo={a} />
              ))}
            </div>
          ) : (
            <div className="max-w-2xl rounded-3xl border border-brand-gray-200 bg-white p-7 sm:p-9">
              <h2 className="text-2xl font-extrabold tracking-tight text-brand-black">Estamos preparando las primeras guías</h2>
              <p className="mt-3 leading-relaxed text-brand-gray-700">
                Mientras tanto, cuéntanos qué le pasa a tu MSI y te ayudamos: el diagnóstico es gratuito.
              </p>
              <BlogCTAButtons />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
