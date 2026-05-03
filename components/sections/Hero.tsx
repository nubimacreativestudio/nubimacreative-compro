"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, Award, Users, Briefcase } from "lucide-react";
import styles from "./Hero.module.css";

// const stats = [
//   { icon: Award, value: "3+", label: "Tahun Pengalaman" },
//   { icon: Briefcase, value: "150+", label: "Proyek Selesai" },
//   { icon: Users, value: "50+", label: "Klien Puas" },
//   { icon: Star, value: "100%", label: "Kepuasan Klien" },
// ];

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const headline = "Helping UMKM Build Stronger Branding & Professional Websites".split(" ");

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
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
      </div>

      <motion.div className={styles.content} style={{ opacity }}>
        <div className={styles.container}>
          {/* Badge
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badgeDot}></span>
            Creative Studio for UMKM & Growing Businesses
          </motion.div> */}

          {/* Headline */}
          <h1 className={styles.headline}>
            {headline.map((word, i) => (
              <motion.span
                key={i}
                className={`${styles.word} ${["Stronger", "Branding", "Professional", "Websites"].includes(word.replace(/[^a-zA-Z]/g, ""))
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
            Kami membantu bisnis membangun kesan pertama yang lebih kuat melalui branding yang strategis, desain modern, dan website profesional yang membangun kepercayaan serta mendorong pertumbuhan.
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
              View Portfolio
              <ArrowRight size={18} />
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => window.open("https://wa.me/6281200000000?text=Halo%20Nubima%20Creative%2C%20saya%20ingin%20berkonsultasi", "_blank")}
              id="hero-lets-work"
            >
              <span className={styles.playIcon}>
                <Play size={14} fill="currentColor" />
              </span>
              Let&apos;s Work Together
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

        {/* Stats bar */}
        <motion.div
          className={styles.statsBar}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          {/* <div className={styles.statsContainer}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1 + i * 0.1 }}
              >
                <stat.icon size={20} className={styles.statIcon} />
                <div className={styles.statInfo}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
                {i < stats.length - 1 && <div className={styles.statDivider}></div>}
              </motion.div>
            ))}
          </div> */}
        </motion.div>
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
