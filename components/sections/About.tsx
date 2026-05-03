"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Heart, Zap, Trophy } from "lucide-react";
import styles from "./About.module.css";

const values = [
  { icon: Target, title: "Strategic", desc: "Every design decision is purpose-driven, aligned with your business goals." },
  { icon: Heart, title: "Passionate", desc: "We pour creativity and dedication into every project we take on." },
  { icon: Zap, title: "Efficient", desc: "Fast turnaround without compromising on quality or attention to detail." },
  { icon: Trophy, title: "Results-Driven", desc: "We measure success by the real impact our work has on your business." },
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
                  <span>One-Stop Creative Studio</span>
                </div>
              </div>
              <div className={styles.taglineBig}>Build Trust,<br />Grow Fast</div>
              <div className={styles.decorLine}></div>
              <p className={styles.visualDesc}>
                A creative studio dedicated to elevating UMKM and growing businesses through premium branding and design.
              </p>
            </div>
            <div className={styles.floatingBadge}>
              <span className={styles.fbIcon}>✦</span>
              <span>Premium Quality</span>
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
            <div className={styles.badge}>About Nubima Creative</div>
            <h2 className={styles.heading}>
              A Creative Studio Built for
              <span className={styles.accent}> Business Growth</span>
            </h2>
            <p className={styles.lead}>
              Nubima Creative lahir dari keyakinan bahwa setiap bisnis — sekecil apapun — berhak tampil profesional dan dipercaya.
            </p>
            <p className={styles.body}>
              Kami adalah creative studio yang fokus membantu UMKM, bisnis lokal, dan brand berkembang untuk memiliki identitas visual yang kuat, website profesional, dan strategi desain yang menghasilkan kepercayaan serta pertumbuhan nyata.
            </p>
            <p className={styles.body}>
              Dengan pengalaman lebih dari 3 tahun dan 150+ proyek yang telah diselesaikan, kami memahami apa yang dibutuhkan bisnis Anda untuk tampil lebih profesional di mata pelanggan.
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
