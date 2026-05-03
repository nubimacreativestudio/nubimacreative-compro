import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Nubima Creative — Build Trust, Grow Fast | Creative Studio for UMKM",
  description:
    "Nubima Creative adalah creative studio profesional yang menghadirkan solusi branding, desain grafis, dan website untuk UMKM dan bisnis berkembang. Build Trust, Grow Fast.",
  keywords:
    "creative studio, branding UMKM, desain grafis, website profesional, landing page, social media design, packaging design, UI/UX",
  authors: [{ name: "Nubima Creative" }],
  openGraph: {
    title: "Nubima Creative — Build Trust, Grow Fast",
    description:
      "Creative solutions for businesses that want to look professional, trusted, and ready to grow.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nubima Creative — Build Trust, Grow Fast",
    description: "Creative studio untuk UMKM dan bisnis yang ingin tampil profesional.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
