"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2, TrendingUp, Globe, Users,
  Shield, Zap, Palette, BarChart3
} from "lucide-react";
import styles from "./Benefits.module.css";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Tampil Lebih Profesional",
    desc: "Bisnis Anda akan terlihat sekelas brand besar dengan desain yang rapi, konsisten, dan premium.",
  },
  {
    icon: TrendingUp,
    title: "Meningkatkan Kepercayaan",
    desc: "Desain profesional membangun kepercayaan pelanggan bahkan sebelum mereka mencoba produk Anda.",
  },
  {
    icon: Globe,
    title: "Jangkauan Lebih Luas",
    desc: "Website dan konten media sosial yang menarik membantu bisnis Anda menjangkau lebih banyak pelanggan.",
  },
  {
    icon: Users,
    title: "Menarik Pelanggan Ideal",
    desc: "Branding yang tepat menarik pelanggan yang sesuai dengan nilai dan positioning bisnis Anda.",
  },
  {
    icon: Shield,
    title: "Brand yang Kuat & Konsisten",
    desc: "Identitas visual yang kuat dan konsisten membuat brand Anda mudah dikenali dan diingat.",
  },
  {
    icon: Zap,
    title: "Konversi Lebih Tinggi",
    desc: "Desain strategis mendorong calon pelanggan untuk mengambil tindakan — menghubungi, membeli, atau mendaftar.",
  },
  {
    icon: Palette,
    title: "Tampil Beda dari Kompetitor",
    desc: "Desain unik yang autentik membuat bisnis Anda menonjol di tengah persaingan yang ketat.",
  },
  {
    icon: BarChart3,
    title: "Investasi Jangka Panjang",
    desc: "Branding dan desain yang baik adalah aset bisnis yang nilainya terus berkembang seiring waktu.",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="benefits" className={styles.benefits} ref={ref}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left heading */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.badge}>Client Benefits</span>
            <h2 className={styles.title}>
              Apa yang Bisnis Anda
              <span className={styles.accent}> Dapatkan</span>
            </h2>
            <p className={styles.subtitle}>
              Investasi pada desain profesional bukan biaya — ini adalah keputusan strategis yang berdampak langsung pada pertumbuhan bisnis Anda.
            </p>
            <div className={styles.highlight}>
              <div className={styles.highlightIcon}>✦</div>
              <p className={styles.highlightText}>
                &quot;Bisnis yang tampil profesional mendapatkan kepercayaan 3x lebih cepat dari pelanggan baru.&quot;
              </p>
            </div>
            <button
              className={styles.cta}
              onClick={() => window.open("https://wa.me/6281200000000?text=Halo%20Nubima%20Creative%2C%20saya%20ingin%20berkonsultasi", "_blank")}
            >
              Mulai Konsultasi Gratis →
            </button>
          </motion.div>

          {/* Right grid */}
          <div className={styles.right}>
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className={styles.item}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <div className={styles.itemIcon}>
                  <b.icon size={18} />
                </div>
                <div className={styles.itemContent}>
                  <h4 className={styles.itemTitle}>{b.title}</h4>
                  <p className={styles.itemDesc}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
