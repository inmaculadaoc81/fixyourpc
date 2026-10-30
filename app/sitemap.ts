import type { MetadataRoute } from "next";
import { listaArticulos } from "@/lib/blog";
import { SITE } from "@/lib/site-config";

// La home, el blog y cada artículo publicado; se regenera como mucho cada 15 minutos.
export const revalidate = 900;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articulos = await listaArticulos();
  return [
    { url: `${SITE.domain}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.domain}/blog`, changeFrequency: "weekly", priority: 0.8, ...(articulos[0] ? { lastModified: articulos[0].updated || articulos[0].date } : {}) },
    ...articulos.map((a) => ({ url: `${SITE.domain}/blog/${a.slug}`, lastModified: a.updated || a.date, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
