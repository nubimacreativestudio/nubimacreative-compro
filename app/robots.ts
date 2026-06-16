import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://nubima.biz.id/sitemap.xml",
    host: "https://nubima.biz.id",
  };
}
