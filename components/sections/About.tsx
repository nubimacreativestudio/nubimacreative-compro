"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Heart, Zap, Trophy } from "lucide-react";
import styles from "./About.module.css";

const values = [
  { icon: Target, title: "Strategis", desc: "Setiap keputusan desain kami berbasis tujuan dan selaras dengan target bisnis Anda." },
  { icon: Heart, title: "Penuh Dedikasi", desc: "Kami mencurahkan kreativitas dan komitmen terbaik di setiap proyek yang kami kerjakan." },
  { icon: Zap, title: "Efisien", desc: "Pengerjaan cepat tanpa mengorbankan kualitas dan perhatian terhadap detail." },
  { icon: Trophy, title: "Berorientasi Hasil", desc: "Keberhasilan kami diukur dari dampak nyata yang dirasakan bisnis Anda." },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Visual */}
          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className={styles.visualCard}>
              <div className={styles.logoDisplay}>
                <div className={styles.logoIcon}>
                  <img src="/logo.svg" alt="Nubima Creative" width={48} height={48} />
                </div>
                <div className={styles.logoLabel}>
                  <strong>Nubima Creative</strong>
                  <span>Studio Kreatif Serba Bisa</span>
                </div>
              </div>
              <div className={styles.taglineBig}>Solusi Kreatif<br />Bisnismu</div>
              <div className={styles.decorLine}></div>
              <p className={styles.visualDesc}>
                Studio kreatif yang berdedikasi mengangkat UMKM dan bisnis berkembang melalui branding premium dan desain berkualitas tinggi.
              </p>
            </div>
            <div className={styles.floatingBadge}>
              <span className={styles.fbIcon}>✦</span>
              <span>Kualitas Premium</span>
            </div>
            <div className={styles.floatingBadge2}>
              <span>Est. 2021</span>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className={styles.badge}>Tentang Nubima Creative</div>
            <h2 className={styles.heading}>
              Studio Kreatif yang Dibangun untuk
              <span className={styles.accent}> Pertumbuhan Bisnis</span>
            </h2>
            <p className={styles.lead}>
              Nubima Creative lahir dari keyakinan bahwa setiap bisnis, sekecil apapun, berhak tampil profesional dan dipercaya.
            </p>
            <p className={styles.body}>
              Kami adalah creative studio yang fokus membantu UMKM, bisnis lokal, dan brand berkembang untuk memiliki identitas visual yang kuat, website profesional, dan strategi desain yang menghasilkan kepercayaan serta pertumbuhan nyata.
            </p>
            <p className={styles.body}>
              Dengan pengalaman lebih dari 3 tahun dan 50+ proyek yang telah diselesaikan, kami memahami apa yang dibutuhkan bisnis Anda untuk tampil lebih profesional di mata pelanggan.
            </p>

            {/* Values grid */}
            <div className={styles.values}>
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  className={styles.valueCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <v.icon size={20} className={styles.valueIcon} />
                  <div>
                    <h4 className={styles.valueTitle}>{v.title}</h4>
                    <p className={styles.valueDesc}>{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
