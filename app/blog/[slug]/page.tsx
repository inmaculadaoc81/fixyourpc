import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/blog/BlogCard";
import BlogCTA from "@/components/blog/BlogCTA";
import { aHtml, articulo, fechaLarga, listaArticulos } from "@/lib/blog";
import { SITE } from "@/lib/site-config";

// Ningún artículo se genera en el build: cada uno se genera la primera vez que se visita y se regenera como mucho
// cada 5 minutos (ISR). Un slug que no existe en la API devuelve 404.
export const revalidate = 300;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = await articulo(slug);
  if (!a) return { title: "Artículo no encontrado | MSITech", robots: { index: false, follow: true } };
  const titulo = `${a.title} | MSITech`;
  return {
    title: titulo,
    description: a.description || a.title,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      title: titulo,
      description: a.description || a.title,
      url: `${SITE.domain}/blog/${a.slug}`,
      siteName: SITE.fullName,
      locale: "es_ES",
      type: "article",
      ...(a.image ? { images: [a.image] } : {}),
    },
  };
}

export default async function ArticuloPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const a = await articulo(slug);
  if (!a) notFound();

  const url = `${SITE.domain}/blog/${a.slug}`;
  const relacionados = (await listaArticulos()).filter((x) => x.slug !== a.slug).slice(0, 3);
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: a.title,
      description: a.description,
      datePublished: String(a.date).slice(0, 10),
      dateModified: String(a.updated || a.date).slice(0, 10),
      inLanguage: "es",
      mainEntityOfPage: url,
      ...(a.image ? { image: a.image } : {}),
      keywords: Array.isArray(a.tags) ? a.tags.join(", ") : undefined,
      author: { "@type": "Organization", name: "MSITech", url: SITE.domain },
      publisher: { "@type": "Organization", name: "MSITech", url: SITE.domain, logo: { "@type": "ImageObject", url: `${SITE.domain}/images/site/logo.jpg` } },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE.domain}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.domain}/blog` },
        { "@type": "ListItem", position: 3, name: a.title, item: url },
      ],
    },
  ];

  return (
    <article className="py-10 sm:py-14">
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s).replace(/</g, "\\u003c") }} />
      ))}

      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <nav aria-label="Migas de pan" className="text-sm text-brand-gray-700">
          <Link href="/" className="font-semibold text-brand-red">Inicio</Link> ›{" "}
          <Link href="/blog" className="font-semibold text-brand-red">Blog</Link> › <span>{a.title}</span>
        </nav>
        <span className="mt-5 block text-xs font-semibold uppercase tracking-wider text-brand-red">{a.category}</span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-balance text-brand-black sm:text-5xl">{a.title}</h1>
        <p className="mt-4 text-sm text-brand-gray-700">
          Publicado el {fechaLarga(a.date)}
          {a.readingMinutes ? ` · ${a.readingMinutes} min de lectura` : ""} · MSITech, servicio técnico MSI en Madrid
        </p>
        {a.image && (
          <figure className="mt-7">
            {/* Imagen servida por la API de Kelatos (dominio externo): <img> normal, sin optimizador de Next. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.image} alt={a.imageAlt || a.title} className="w-full rounded-3xl" />
            {a.imageCredit && <figcaption className="mt-2 text-xs text-brand-gray-700">Foto: {a.imageCredit}</figcaption>}
          </figure>
        )}

        <div className="blog-prose mt-8" dangerouslySetInnerHTML={{ __html: aHtml(a.body ?? "") }} />

        <BlogCTA />
      </div>

      {relacionados.length > 0 && (
        <div className="mx-auto mt-16 max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-brand-black sm:text-3xl">Sigue leyendo</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relacionados.map((r) => (
              <BlogCard key={r.slug} articulo={r} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
