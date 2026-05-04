"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Zap,
  Crown,
  Rocket,
  Globe,
  Palette,
  Package,
  MessageCircle,
} from "lucide-react";
import styles from "./Pricing.module.css";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

type Package = {
  id: string;
  icon: React.ElementType;
  name: string;
  tagline: string;
  price: string;
  priceValue: string;
  period: string;
  features: string[];
  cta: string;
  popular: boolean;
};

type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  accentClass: string;
  packages: Package[];
};

const categories: Category[] = [
  /* ── BRANDING ── */
  {
    id: "branding",
    label: "Branding",
    icon: Palette,
    accentClass: styles.accentBlue,
    packages: [
      {
        id: "branding-starter",
        icon: Zap,
        name: "Starter",
        tagline: "Untuk bisnis yang baru memulai",
        price: "Mulai dari",
        priceValue: "Rp 500K",
        period: "per proyek",
        features: [
          "1 Desain logo konsep",
          "Social media template (5 post)",
          "1x revisi gratis",
          "File format JPG & PNG",
          "Konsultasi via WhatsApp",
          "Estimasi 3–5 hari kerja",
        ],
        cta: "Pilih Paket Ini",
        popular: false,
      },
      {
        id: "branding-growth",
        icon: Crown,
        name: "Growth",
        tagline: "Paling populer untuk UMKM berkembang",
        price: "Mulai dari",
        priceValue: "Rp 1.5Jt",
        period: "per proyek",
        features: [
          "Branding kit lengkap (logo, warna, font)",
          "Social media template (15 post)",
          "Business card & letterhead",
          "3x revisi gratis",
          "File format semua jenis",
          "Brand guideline PDF",
          "Konsultasi strategis",
          "Estimasi 7–10 hari kerja",
        ],
        cta: "Mulai Sekarang",
        popular: true,
      },
      {
        id: "branding-premium",
        icon: Rocket,
        name: "Premium",
        tagline: "Solusi lengkap untuk brand serius",
        price: "Mulai dari",
        priceValue: "Rp 5Jt",
        period: "per proyek",
        features: [
          "Full branding + website profesional",
          "Social media kit 30 post/bulan",
          "Packaging design",
          "Company profile PDF",
          "Revisi unlimited",
          "Semua format file",
          "Brand guideline & manual",
          "Support 30 hari pasca proyek",
          "Konsultasi strategis priority",
        ],
        cta: "Konsultasi Dulu",
        popular: false,
      },
    ],
  },

  /* ── WEBSITE DEVELOPMENT ── */
  {
    id: "website",
    label: "Website Development",
    icon: Globe,
    accentClass: styles.accentPurple,
    packages: [
      {
        id: "web-starter",
        icon: Zap,
        name: "Starter",
        tagline: "Landing page profesional siap pakai",
        price: "Mulai dari",
        priceValue: "Rp 1.5Jt",
        period: "per proyek",
        features: [
          "Landing page 1 halaman",
          "Desain responsif (mobile-friendly)",
          "Form kontak terintegrasi",
          "Basic SEO on-page",
          "Google Analytics setup",
          "Estimasi 5–7 hari kerja",
        ],
        cta: "Pilih Paket Ini",
        popular: false,
      },
      {
        id: "web-growth",
        icon: Crown,
        name: "Growth",
        tagline: "Website bisnis multi-halaman lengkap",
        price: "Mulai dari",
        priceValue: "Rp 5Jt",
        period: "per proyek",
        features: [
          "Website multi-halaman (hingga 8 halaman)",
          "CMS integration (mudah dikelola)",
          "WhatsApp & social media integration",
          "SEO optimization mendalam",
          "Blog / halaman berita",
          "Loading speed optimization",
          "SSL & keamanan dasar",
          "Estimasi 14–21 hari kerja",
        ],
        cta: "Mulai Sekarang",
        popular: true,
      },
      {
        id: "web-premium",
        icon: Rocket,
        name: "Premium",
        tagline: "Aplikasi web & e-commerce skala penuh",
        price: "Mulai dari",
        priceValue: "Rp 15Jt",
        period: "per proyek",
        features: [
          "Custom web application",
          "E-commerce & payment gateway",
          "Admin dashboard khusus",
          "Integrasi API pihak ketiga",
          "Performa & keamanan tingkat lanjut",
          "Support & maintenance 3 bulan",
          "Training penggunaan sistem",
          "Estimasi 30–60 hari kerja",
        ],
        cta: "Konsultasi Dulu",
        popular: false,
      },
    ],
  },

  /* ── DESIGN SERVICES ── */
  {
    id: "design",
    label: "Design Services",
    icon: Palette,
    accentClass: styles.accentOrange,
    packages: [
      {
        id: "design-starter",
        icon: Zap,
        name: "Starter",
        tagline: "Template siap untuk media sosial Anda",
        price: "Mulai dari",
        priceValue: "Rp 300K",
        period: "per proyek",
        features: [
          "Template media sosial (5 desain)",
          "Desain posting konten",
          "Desain thumbnail YouTube / Reels",
          "Format PNG & PSD/Figma",
          "1x revisi gratis",
          "Estimasi 2–4 hari kerja",
        ],
        cta: "Pilih Paket Ini",
        popular: false,
      },
      {
        id: "design-growth",
        icon: Crown,
        name: "Growth",
        tagline: "Materi pemasaran lengkap & profesional",
        price: "Mulai dari",
        priceValue: "Rp 1.2Jt",
        period: "per proyek",
        features: [
          "Materi pemasaran cetak & digital",
          "Desain poster & banner",
          "Iklan kreatif (FB, IG, Google Ads)",
          "Aset kampanye lengkap",
          "Infografis & presentasi",
          "3x revisi gratis",
          "Estimasi 7–10 hari kerja",
        ],
        cta: "Mulai Sekarang",
        popular: true,
      },
      {
        id: "design-premium",
        icon: Rocket,
        name: "Premium",
        tagline: "Langganan desain prioritas bulanan",
        price: "Mulai dari",
        priceValue: "Rp 3.5Jt",
        period: "per bulan",
        features: [
          "Langganan desain bulanan (30 post)",
          "Kampanye visual penuh",
          "Revisi prioritas tanpa batas",
          "Aset konsisten dengan brand",
          "Dedicated desainer",
          "Laporan performa konten",
          "Meeting mingguan",
          "Support WhatsApp prioritas",
        ],
        cta: "Konsultasi Dulu",
        popular: false,
      },
    ],
  },
];

/* ─────────────────────────────────────────
   BUNDLE PACKAGES
───────────────────────────────────────── */

const bundles = [
  {
    id: "bundle-brand-web",
    icon: "🎨",
    name: "Branding + Website",
    desc: "Tampil profesional dari identitas visual hingga kehadiran online.",
    saving: "Hemat hingga 20%",
  },
  {
    id: "bundle-web-design",
    icon: "💻",
    name: "Website + Design",
    desc: "Website keren dengan konten visual yang selalu segar dan on-brand.",
    saving: "Hemat hingga 15%",
  },
  {
    id: "bundle-full",
    icon: "🚀",
    name: "Full Business Launch",
    desc: "Paket lengkap: Branding, Website, dan Design Services sekaligus.",
    saving: "Hemat hingga 30%",
  },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [activeTab, setActiveTab] = useState("branding");

  const activeCat = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="pricing" className={styles.pricing} ref={ref}>
      {/* Decorative BG */}
      <div className={`${styles.bg} ${styles[`bg_${activeTab}`]}`} />

      <div className={styles.container}>
        {/* ── Heading ── */}
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Pricing</span>
          <h2 className={styles.title}>
            Paket Harga yang
            <span className={styles.accentText}> Transparan</span>
          </h2>
          <p className={styles.subtitle}>
            Pilih layanan yang sesuai kebutuhan bisnis Anda. Semua harga
            bisa disesuaikan dengan scope dan kompleksitas proyek.
          </p>
        </motion.div>

        {/* ── Tab Switcher ── */}
        <motion.div
          className={styles.tabWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className={styles.tabs} role="tablist">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  id={`tab-${cat.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  className={`${styles.tab} ${isActive ? `${styles.tabActive} ${cat.accentClass}` : ""}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  <Icon size={17} />
                  <span>{cat.label}</span>
                  {isActive && (
                    <motion.div
                      className={styles.tabIndicator}
                      layoutId="tabIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Pricing Cards ── */}
        <div
          id={`panel-${activeCat.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCat.id}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className={styles.grid}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: "easeInOut" }}
            >
              {activeCat.packages.map((pkg, i) => {
                const Icon = pkg.icon;
                return (
                  <motion.div
                    key={pkg.id}
                    className={`${styles.card} ${pkg.popular ? styles.popular : ""}`}
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    {pkg.popular && (
                      <div className={styles.popularBadge}>
                        <span>⭐ Most Popular</span>
                      </div>
                    )}

                    {/* Card header */}
                    <div className={styles.cardHeader}>
                      <div
                        className={`${styles.iconWrap} ${pkg.popular ? styles.iconPopular : ""}`}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className={styles.packageName}>{pkg.name}</h3>
                        <p className={styles.tagline}>{pkg.tagline}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className={styles.priceBlock}>
                      <span className={styles.priceLabel}>{pkg.price}</span>
                      <span className={styles.priceValue}>{pkg.priceValue}</span>
                      <span className={styles.pricePeriod}>{pkg.period}</span>
                    </div>

                    <div className={styles.divider} />

                    {/* Features */}
                    <ul className={styles.features}>
                      {pkg.features.map((f) => (
                        <li key={f} className={styles.feature}>
                          <Check size={15} className={styles.check} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      className={`${styles.cta} ${pkg.popular ? styles.ctaPopular : ""}`}
                      id={`pricing-${pkg.id}`}
                      onClick={() =>
                        window.open(
                          `https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}%20(${encodeURIComponent(activeCat.label)})`,
                          "_blank",
                        )
                      }
                    >
                      {pkg.cta}
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Disclaimer note ── */}
        <motion.p
          className={styles.note}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          * Harga di atas adalah estimasi awal. Harga final disesuaikan dengan
          scope dan kompleksitas proyek.{" "}
          <button
            className={styles.noteLink}
            onClick={() =>
              window.open(
                "https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20mau%20tanya%20harga%20lebih%20detail",
                "_blank",
              )
            }
          >
            Hubungi kami untuk penawaran khusus →
          </button>
        </motion.p>

        {/* ══════════════════════════════════════
            BUNDLE PACKAGES
        ══════════════════════════════════════ */}
        <motion.div
          className={styles.bundleSection}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.65 }}
        >
          <div className={styles.bundleHeading}>
            <span className={styles.bundgeBadge}>
              <Package size={14} />
              Bundle Packages
            </span>
            <h3 className={styles.bundleTitle}>
              Hemat Lebih dengan Paket Bundling
            </h3>
            <p className={styles.bundleSubtitle}>
              Kombinasikan layanan dan dapatkan diskon spesial untuk hasil yang
              lebih komprehensif.
            </p>
          </div>

          <div className={styles.bundleGrid}>
            {bundles.map((b, i) => (
              <motion.div
                key={b.id}
                className={styles.bundleCard}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                <span className={styles.bundleEmoji}>{b.icon}</span>
                <h4 className={styles.bundleName}>{b.name}</h4>
                <p className={styles.bundleDesc}>{b.desc}</p>
                <span className={styles.bundleSaving}>{b.saving}</span>
                <button
                  className={styles.bundleCta}
                  id={`bundle-${b.id}`}
                  onClick={() =>
                    window.open(
                      `https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(b.name)}`,
                      "_blank",
                    )
                  }
                >
                  Tanya Harga Bundle
                  <ArrowRight size={15} />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ══════════════════════════════════════
            CUSTOM QUOTE CTA
        ══════════════════════════════════════ */}
        <motion.div
          className={styles.customCta}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className={styles.customCtaInner}>
            <div className={styles.customCtaGlow} />
            <span className={styles.customCtaIcon}>
              <MessageCircle size={28} />
            </span>
            <div className={styles.customCtaText}>
              <h3 className={styles.customCtaTitle}>
                Butuh Solusi yang Lebih Custom?
              </h3>
              <p className={styles.customCtaDesc}>
                Setiap bisnis punya kebutuhan unik. Ceritakan kebutuhan Anda dan
                kami akan buatkan penawaran yang tepat — gratis konsultasi!
              </p>
            </div>
            <button
              className={styles.customCtaBtn}
              id="pricing-custom-quote"
              onClick={() =>
                window.open(
                  "https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20butuh%20penawaran%20custom%20untuk%20bisnis%20saya",
                  "_blank",
                )
              }
            >
              Minta Custom Quote
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
