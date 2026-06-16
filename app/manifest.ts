import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nubima Creative Studio",
    short_name: "Nubima Creative",
    description:
      "Creative studio menyediakan jasa website, branding, logo, UI/UX, dan social media untuk UMKM Indonesia.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#03045e",
    lang: "id",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["business", "productivity"],
    orientation: "portrait",
    scope: "/",
  };
}
