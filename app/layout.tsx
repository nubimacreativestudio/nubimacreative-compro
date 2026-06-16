import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

/* ─── Fonts ────────────────────────────────────────────────────────────── */
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/* ─── Constants ────────────────────────────────────────────────────────── */
const BASE_URL = "https://nubima.biz.id";
const SITE_NAME = "Nubima Creative Studio";
const OG_IMAGE = `${BASE_URL}/opengraph-image.png`;

/* ─── Global / Root Metadata ───────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  applicationName: SITE_NAME,
  authors: [{ name: "Nubima Creative Studio", url: BASE_URL }],
  creator: "Nubima Creative Studio",
  publisher: "Nubima Creative Studio",
  category: "Creative Agency",

  /* Title template — child pages override {title} */
  title: {
    default: "Nubima Creative | Jasa Website & Branding untuk UMKM",
    template: "%s | Nubima Creative",
  },

  description:
    "Nubima Creative Studio menyediakan jasa pembuatan website, landing page, branding, desain logo, UI/UX, dan social media untuk UMKM. Tampil profesional, dipercaya pelanggan.",

  keywords: [
    "jasa website UMKM",
    "jasa branding Indonesia",
    "desain logo profesional",
    "landing page murah",
    "jasa UI UX design",
    "social media design",
    "packaging design",
    "company profile website",
    "Nubima Creative",
    "creative studio Indonesia",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: "Nubima Creative | Jasa Website & Branding untuk UMKM",
    description:
      "Nubima Creative Studio menyediakan jasa website, branding, desain logo, UI/UX, dan social media untuk UMKM. Build Trust, Grow Fast.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nubima Creative Studio — Build Trust, Grow Fast",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nubima Creative | Jasa Website & Branding untuk UMKM",
    description:
      "Creative studio untuk UMKM dan bisnis yang ingin tampil profesional. Jasa website, branding, logo, UI/UX, dan social media design.",
    images: [OG_IMAGE],
    // creator: "@nubimacreativestudio", // Uncomment when Twitter account verified
  },

  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },

  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
  //   yandex: "YOUR_YANDEX_TOKEN",
  // },
};

/* ─── Root Layout ──────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
