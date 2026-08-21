import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

// One-page site: a single canonical URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE.domain}/`, changeFrequency: "weekly", priority: 1 }];
}
