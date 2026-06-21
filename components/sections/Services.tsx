"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, PenTool, Bot, MessageCircle } from "lucide-react";
import styles from "./Services.module.css";

type ServiceItem = {
  title: string;
  desc: string;
  recommended?: boolean;
  comingSoon?: boolean;
};

type ServiceCategory = {
  icon: React.ElementType;
  title: string;
  items: ServiceItem[];
};

const categories: ServiceCategory[] = [
  {
    icon: Globe,
    title: "Web Development",
    items: [
      {
        title: "Landing Page",
        desc: "Halaman satu fungsi yang fokus mengubah pengunjung menjadi pelanggan potensial.",
      },
      {
        title: "UMKM Website",
        desc: "Website informatif untuk memperkuat kredibilitas bisnis Anda secara online.",
      },
      {
        title: "Company Profile",
        desc: "Representasi digital bisnis dengan website profile modern dan elegan.",
      },
      {
        title: "Web Portfolio",
        desc: "Etalase karya digital Anda dengan tampilan yang memukau dan personal.",
      },
    ],
  },
  {
    icon: PenTool,
    title: "Branding & Identity",
    items: [
      {
        title: "Logo Design",
        desc: "Identitas visual unik yang merepresentasikan nilai dan visi misi bisnis Anda.",
      },
      {
        title: "Packaging Design",
        desc: "Desain kemasan produk yang menarik mata dan meninggalkan kesan mendalam.",
      },
      {
        title: "Visual Branding Kit",
        desc: "Panduan visual lengkap termasuk kartu nama, kop surat, dan aset brand lainnya.",
      },
      {
        title: "Marketing Material",
        desc: "Desain brosur, flyer, dan materi promosi fisik untuk kebutuhan offline.",
      },
      {
        title: "Social Media Design",
        desc: "Konten visual yang konsisten dan menarik untuk semua platform media sosial.",
      },
      {
        title: "Branding Kit UMKM",
        desc: "Identitas brand lengkap: logo, warna, tipografi, dan panduan brand.",
      },
      {
        title: "Banner / Flyer",
        desc: "Materi promosi yang eye-catching untuk setiap kampanye pemasaran.",
      },
      {
        title: "Company Profile (PDF)",
        desc: "Dokumen presentasi profesional yang mengesankan klien dan mitra.",
      },
      {
        title: "UI/UX Design",
        desc: "Antarmuka digital yang intuitif, cantik, dan berpusat pada pengguna.",
      },
    ],
  },
  {
    icon: Bot,
    title: "Automation & AI",
    items: [
      {
        title: "WhatsApp Bot Setup",
        desc: "Otomasi interaksi pelanggan Anda dengan bot WhatsApp cerdas untuk layanan 24/7 yang responsif.",
        recommended: false,
      },
      {
        title: "AI Content Gen",
        desc: "Sistem otomatisasi pembuatan konten media sosial berbasis kecerdasan buatan.",
        comingSoon: true,
      },
      {
        title: "Workflow Automation",
        desc: "Integrasi berbagai aplikasi bisnis Anda untuk bekerja secara otomatis dan sinkron.",
        comingSoon: true,
      },
      {
        title: "Customer Data AI",
        desc: "Analisis perilaku pelanggan menggunakan AI untuk strategi pemasaran yang lebih akurat.",
        comingSoon: true,
      },
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section id="services" className={styles.services} ref={ref}>
      <div className={styles.container}>
        {/* Heading */}
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Layanan Kami</span>
          <h2 className={styles.title}>
            Satu Studio,<span className={styles.accent}> Semua Solusi</span>
          </h2>
          <p className={styles.subtitle}>
            Dari branding hingga website, kami menghadirkan solusi kreatif
            lengkap yang Anda butuhkan untuk lebih pesat.
          </p>
        </motion.div>

        {/* Categories */}
        {categories.map((category, ci) => (
          <motion.div
            key={category.title}
            className={styles.category}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + ci * 0.1 }}
          >
            {/* Category Header */}
            <div className={styles.categoryHeader}>
              <div className={styles.categoryIcon}>
                <category.icon size={20} />
              </div>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
            </div>
            <div className={styles.categoryDivider} />

            {/* Cards Grid */}
            <div className={styles.grid}>
              {category.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  className={`${styles.card} ${
                    item.recommended ? styles.cardRecommended : ""
                  } ${item.comingSoon ? styles.cardComingSoon : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + ci * 0.1 + i * 0.05,
                  }}
                  onClick={
                    !item.comingSoon
                      ? () =>
                          window.open(
                            "https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20tertarik%20dengan%20layanan%20" +
                              encodeURIComponent(item.title),
                            "_blank",
                          )
                      : undefined
                  }
                >
                  {item.recommended && (
                    <span className={styles.recommendedBadge}>RECOMMENDED</span>
                  )}
                  {item.recommended && (
                    <div className={styles.recommendedIcon}>
                      <MessageCircle size={28} />
                    </div>
                  )}
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  {item.comingSoon && (
                    <span className={styles.comingSoonBadge}>Coming Soon</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className={styles.ctaText}>Tidak menemukan yang Anda cari?</p>
          <button
            className={styles.ctaBtn}
            onClick={() =>
              window.open(
                "https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20ingin%20konsultasi%20tentang%20kebutuhan%20desain%20saya",
                "_blank",
              )
            }
          >
            Konsultasi Gratis →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
