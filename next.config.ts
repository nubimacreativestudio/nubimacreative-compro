import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats (avif preferred, webp fallback)
    formats: ["image/avif", "image/webp"],
    // Cache optimised images for 7 days
    minimumCacheTTL: 604800,
    // Breakpoints matching <Image sizes="..."> props in components
    deviceSizes: [375, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
  },
  // Compress responses with gzip/brotli
  compress: true,
  // Security + caching headers
  async headers() {
    return [
      {
        source: "/(.*\\.(?:js|css|woff2|png|jpg|jpeg|webp|avif|svg|ico))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
