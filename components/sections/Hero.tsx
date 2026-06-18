"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Only run parallax on desktop — useScroll is cheap but transforms trigger
  // paint on mobile so we keep the hook but don't apply y on mobile (CSS handles it)
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>
      {/* Background orbs — CSS animated, no JS */}
      <div className={styles.bgElements}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
        <div className={styles.grid} />
      </div>

      {/* Floating shapes — CSS only on desktop, hidden on mobile */}
      <div className={styles.shapes} aria-hidden="true">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className={`${styles.shape} ${styles[`shape${n}`]}`} />
        ))}
      </div>

      <motion.div className={styles.content} style={{ opacity }}>
        <div className={styles.container}>
          {/* Headline — single block animation, not per-word */}
          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Bantu UMKM Tampil{" "}
            <span className={styles.highlight}>Profesional</span> dengan{" "}
            <span className={styles.highlight}>Branding Kuat</span> &amp;{" "}
            Website <span className={styles.highlight}>Berkelas</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className={styles.subheadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Kami membantu bisnis membangun kesan pertama yang lebih kuat melalui
            branding yang strategis, desain modern, dan website profesional yang
            membangun kepercayaan serta mendorong pertumbuhan.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <button
              className={styles.btnPrimary}
              onClick={() => handleScroll("#portfolio")}
              id="hero-view-portfolio"
            >
              Lihat Portfolio
              <ArrowRight size={18} />
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() =>
                window.open(
                  "https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20ingin%20berkonsultasi",
                  "_blank",
                )
              }
              id="hero-lets-work"
            >
              <span className={styles.playIcon}>
                <Play size={14} fill="currentColor" />
              </span>
              Mulai Kerja Sama
            </button>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className={styles.tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className={styles.taglineText}>Solusi Kreatif Bisnismu</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className={styles.scrollDot}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
