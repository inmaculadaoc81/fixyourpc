import Hero from "@/components/home/Hero";
import ProblemsSection from "@/components/home/ProblemsSection";
import DataWorrySection from "@/components/home/DataWorrySection";
import HowItWorks from "@/components/home/HowItWorks";
import PickupSection from "@/components/home/PickupSection";
import TrustSection from "@/components/home/TrustSection";
import GoogleYouTubeBlocks from "@/components/home/GoogleYouTubeBlocks";
import CalSection from "@/components/home/CalSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import { FAQS } from "@/lib/home-content";
import { SITE, CONTACT } from "@/lib/site-config";

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.fullName,
    image: `${SITE.domain}/images/site/logo.jpg`,
    telephone: CONTACT.phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      postalCode: CONTACT.address.postalCode,
      addressLocality: CONTACT.address.city,
      addressCountry: "ES",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "18:00",
      },
    ],
    url: SITE.domain,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Reparación de ordenadores MSI",
    provider: { "@type": "LocalBusiness", name: SITE.fullName },
    areaServed: "Madrid",
    url: SITE.domain,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero />
      <ProblemsSection />
      <DataWorrySection />
      <HowItWorks />
      <PickupSection />
      <TrustSection />
      <GoogleYouTubeBlocks />
      <CalSection />
      <FAQSection eyebrow={FAQS.eyebrow} title={FAQS.title} items={FAQS.items} />
      <ContactSection />
    </>
  );
}
