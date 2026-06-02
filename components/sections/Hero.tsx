"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play} from "lucide-react";
import styles from "./Hero.module.css";

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const headline =
    "Bantu UMKM Tampil Profesional dengan Branding Kuat & Website Berkelas".split(" ");

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>
      {/* Animated background elements */}
      <motion.div className={styles.bgElements} style={{ y }}>
        <div className={`${styles.orb} ${styles.orb1}`}></div>
        <div className={`${styles.orb} ${styles.orb2}`}></div>
        <div className={`${styles.orb} ${styles.orb3}`}></div>
        <div className={styles.grid}></div>
      </motion.div>

      {/* Floating shapes */}
      <div className={styles.shapes}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`${styles.shape} ${styles[`shape${i + 1}`]}`}
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div className={styles.content} style={{ opacity }}>
        <div className={styles.container}>
          {/* Headline */}
          <h1 className={styles.headline}>
            {headline.map((word, i) => (
              <motion.span
                key={i}
                className={`${styles.word} ${
                  ["Profesional", "Branding", "Kuat", "Berkelas"].includes(
                    word.replace(/[^a-zA-ZA-Za-z]/g, ""),
                  )
                    ? styles.highlight
                    : ""
                }`}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            className={styles.subheadline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
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
            transition={{ delay: 1.5, duration: 0.6 }}
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
            transition={{ delay: 1.8, duration: 0.6 }}
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
        transition={{ delay: 2.5 }}
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
