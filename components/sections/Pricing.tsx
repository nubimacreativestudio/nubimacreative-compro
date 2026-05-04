"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Zap, Crown, Rocket } from "lucide-react";
import styles from "./Pricing.module.css";

const packages = [
  {
    id: "starter",
    icon: Zap,
    name: "Starter",
    tagline: "Untuk bisnis yang baru memulai",
    price: "Mulai dari",
    priceValue: "Rp 500K",
    period: "per proyek",
    color: "default",
    features: [
      "1 Desain logo konsep",
      "Social media template (5 post)",
      "1x revisi gratis",
      "File format JPG & PNG",
      "Konsultasi via WhatsApp",
      "Estimasi 3-5 hari kerja",
    ],
    cta: "Pilih Paket Ini",
    popular: false,
  },
  {
    id: "growth",
    icon: Crown,
    name: "Growth",
    tagline: "Paling populer untuk UMKM berkembang",
    price: "Mulai dari",
    priceValue: "Rp 1.5Jt",
    period: "per proyek",
    color: "ocean",
    features: [
      "Branding kit lengkap (logo, warna, font)",
      "Social media template (15 post)",
      "Business card & letterhead",
      "3x revisi gratis",
      "File format semua jenis",
      "Brand guideline PDF",
      "Konsultasi strategis",
      "Estimasi 7-10 hari kerja",
    ],
    cta: "Mulai Sekarang",
    popular: true,
  },
  {
    id: "premium",
    icon: Rocket,
    name: "Premium",
    tagline: "Solusi lengkap untuk brand serius",
    price: "Mulai dari",
    priceValue: "Rp 5Jt",
    period: "per proyek",
    color: "default",
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
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="pricing" className={styles.pricing} ref={ref}>
      <div className={styles.bg}></div>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Pricing</span>
          <h2 className={styles.title}>
            Paket Harga yang
            <span className={styles.accent}> Transparan</span>
          </h2>
          <p className={styles.subtitle}>
            Investasi terjangkau untuk hasil yang profesional. Semua harga bisa
            disesuaikan dengan kebutuhan bisnis Anda.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              className={`${styles.card} ${pkg.popular ? styles.popular : ""}`}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              {pkg.popular && (
                <div className={styles.popularBadge}>
                  <span>⭐ Most Popular</span>
                </div>
              )}

              <div className={styles.cardHeader}>
                <div
                  className={`${styles.iconWrap} ${pkg.popular ? styles.iconPopular : ""}`}
                >
                  <pkg.icon size={22} />
                </div>
                <div>
                  <h3 className={styles.packageName}>{pkg.name}</h3>
                  <p className={styles.tagline}>{pkg.tagline}</p>
                </div>
              </div>

              <div className={styles.priceBlock}>
                <span className={styles.priceLabel}>{pkg.price}</span>
                <span className={styles.priceValue}>{pkg.priceValue}</span>
                <span className={styles.pricePeriod}>{pkg.period}</span>
              </div>

              <div className={styles.divider}></div>

              <ul className={styles.features}>
                {pkg.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <Check size={15} className={styles.check} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`${styles.cta} ${pkg.popular ? styles.ctaPopular : ""}`}
                id={`pricing-${pkg.id}`}
                onClick={() =>
                  window.open(
                    `https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}`,
                    "_blank",
                  )
                }
              >
                {pkg.cta}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.note}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
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
      </div>
    </section>
  );
}
