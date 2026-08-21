import { permanentRedirect } from "next/navigation";

// The site is now a single-page landing. Every URL that used to belong to
// the old multi-page WordPress migration (blog posts, service pages,
// language pages, etc.) is sent here permanently instead of 404ing, so any
// existing backlinks/search listings land on the live page.
export default function LegacyUrlRedirect() {
  permanentRedirect("/");
}
