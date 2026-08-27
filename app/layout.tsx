import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Chatbot from "@/components/Chatbot";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";
import { SITE } from "@/lib/site-config";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: "Reparación MSI en Madrid | Servicio Técnico MSI | MSITech",
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Reparación MSI en Madrid | Servicio Técnico MSI | MSITech",
    description: SITE.description,
    url: SITE.domain,
    siteName: SITE.fullName,
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`h-full antialiased ${jakarta.variable}`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
        <GoogleAnalytics />
        <CookieBanner />
      </body>
    </html>
  );
}
