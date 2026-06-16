import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/layout/WhatsAppCTA";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
// import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

/* ─── Page-level Metadata ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Nubima Creative | Jasa Website & Branding untuk UMKM",
  description:
    "Nubima Creative Studio menyediakan jasa pembuatan website, landing page, branding, desain logo, UI/UX, dan social media untuk UMKM. Tampil profesional, dipercaya pelanggan.",
  alternates: {
    canonical: "https://nubima.biz.id",
  },
  openGraph: {
    title: "Nubima Creative | Jasa Website & Branding untuk UMKM",
    description:
      "Creative studio untuk UMKM dan bisnis yang ingin tampil profesional. Jasa website, branding, logo, UI/UX, dan social media design.",
    url: "https://nubima.biz.id",
  },
  twitter: {
    title: "Nubima Creative | Jasa Website & Branding untuk UMKM",
    description:
      "Creative studio untuk UMKM dan bisnis yang ingin tampil profesional. Jasa website, branding, logo, UI/UX, dan social media design.",
  },
};

/* ─── JSON-LD Structured Data ─────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nubima.biz.id/#organization",
      name: "Nubima Creative Studio",
      url: "https://nubima.biz.id",
      logo: {
        "@type": "ImageObject",
        url: "https://nubima.biz.id/logo.svg",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-851-3687-7650",
        contactType: "customer service",
        availableLanguage: ["Indonesian"],
      },
      sameAs: [
        "https://instagram.com/nubimacreativestudio",
        "https://wa.me/6285136877650",
      ],
      foundingDate: "2021",
    },
    {
      "@type": "WebSite",
      "@id": "https://nubima.biz.id/#website",
      url: "https://nubima.biz.id",
      name: "Nubima Creative Studio",
      description:
        "Creative studio menyediakan jasa website, branding, dan desain untuk UMKM Indonesia.",
      publisher: { "@id": "https://nubima.biz.id/#organization" },
      inLanguage: "id-ID",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://nubima.biz.id/#business",
      name: "Nubima Creative Studio",
      url: "https://nubima.biz.id",
      image: "https://nubima.biz.id/opengraph-image.png",
      description:
        "Creative studio profesional untuk UMKM — jasa website, branding, logo, UI/UX, dan social media design.",
      priceRange: "Rp 300.000 – Rp 15.000.000",
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Layanan Nubima Creative",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pembuatan Website UMKM" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Page" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding & Desain Logo" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Packaging Design" } },
        ],
      },
    },
  ],
};

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Portfolio />
        <Benefits />
        <Process />
        <Testimonials />
        {/* <Pricing /> */}
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
