"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Layout,
  Briefcase,
  User,
  Smartphone,
  Tag,
  Box,
  Image,
  FileText,
  Monitor,
} from "lucide-react";
import styles from "./Services.module.css";

const services = [
  {
    icon: Layout,
    title: "Landing Page",
    desc: "Halaman konversi tinggi yang mengubah pengunjung menjadi pelanggan.",
    tag: "Web",
  },
  {
    icon: Globe,
    title: "UMKM Website",
    desc: "Website profesional yang memperkuat kredibilitas bisnis Anda.",
    tag: "Web",
  },
  {
    icon: Briefcase,
    title: "Web Company Profile",
    desc: "Tampilkan profesionalisme bisnis dengan website company profile modern.",
    tag: "Web",
  },
  {
    icon: User,
    title: "Web Portfolio",
    desc: "Showcase karya terbaik Anda dengan tampilan yang memukau.",
    tag: "Web",
  },
  {
    icon: Smartphone,
    title: "Social Media Design",
    desc: "Konten visual yang konsisten dan menarik untuk semua platform.",
    tag: "Design",
  },
  {
    icon: Tag,
    title: "Branding Kit UMKM",
    desc: "Identitas brand lengkap: logo, warna, tipografi, dan panduan brand.",
    tag: "Branding",
  },
  {
    icon: Box,
    title: "Packaging Design",
    desc: "Kemasan produk yang membuat produk Anda tak tertandingi di rak.",
    tag: "Design",
  },
  {
    icon: Image,
    title: "Banner / Flyer",
    desc: "Materi promosi yang eye-catching untuk setiap kampanye pemasaran.",
    tag: "Design",
  },
  {
    icon: FileText,
    title: "Company Profile (PDF)",
    desc: "Dokumen presentasi profesional yang mengesankan klien dan mitra.",
    tag: "Branding",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    desc: "Antarmuka digital yang intuitif, cantik, dan berpusat pada pengguna.",
    tag: "Design",
  },
];

const tagColors: Record<string, string> = {
  Web: "ocean",
  Design: "ocean",
  Branding: "ocean",
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className={styles.services} ref={ref}>
      {/* Background */}
      <div className={styles.bg}>
        <div className={styles.bgOrb1}></div>
        <div className={styles.bgOrb2}></div>
      </div>

      <div className={styles.container}>
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
            lengkap yang Anda butuhkan untuk berkembang lebih pesat.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div
                    className={`${styles.iconWrap} ${styles[`icon-${tagColors[service.tag]}`]}`}
                  >
                    <service.icon size={24} />
                  </div>
                  <span
                    className={`${styles.tag} ${styles[`tag-${tagColors[service.tag]}`]}`}
                  >
                    {service.tag}
                  </span>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                </div>
                <div className={styles.cardHover}>
                  <h3 className={styles.hoverTitle}>{service.title}</h3>
                  <p className={styles.hoverDesc}>{service.desc}</p>
                  <button
                    className={styles.hoverBtn}
                    onClick={() =>
                      window.open(
                        "https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20tertarik%20dengan%20layanan%20" +
                          encodeURIComponent(service.title),
                        "_blank",
                      )
                    }
                  >
                    Pesan Sekarang →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
