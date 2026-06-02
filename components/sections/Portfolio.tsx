"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import styles from "./Portfolio.module.css";

const categories = ["Semua", "Branding", "Website", "Social Media", "Design"];

const projects = [
  {
    id: 1,
    title: "Kopi Nusantara: Branding Kit",
    category: "Branding",
    image: "/images/portfolio-branding.png",
    tags: ["Logo", "Brand Identity", "Business Card"],
  },
  {
    id: 2,
    title: "Aura Beauty: E-commerce Website",
    category: "Website",
    image: "/images/portfolio-website.png",
    tags: ["Web Design", "UMKM", "Beauty"],
  },
  {
    id: 3,
    title: "Sharp Cuts: Social Media Kit",
    category: "Social Media",
    image: "/images/portfolio-socmed.png",
    tags: ["Instagram", "Stories", "Feed Grid"],
  },
  {
    id: 4,
    title: "NARA Wear: Packaging Design",
    category: "Design",
    image: "/images/portfolio-packaging.png",
    tags: ["Packaging", "Fashion", "Print"],
  },
  {
    id: 5,
    title: "Dapur Nusantara: Landing Page",
    category: "Website",
    image: "/images/portfolio-landingpage.png",
    tags: ["Landing Page", "Culinary", "Mobile First"],
  },
  {
    id: 6,
    title: "BrewMate: UI/UX Mobile App",
    category: "Design",
    image: "/images/portfolio-uiux.png",
    tags: ["UI/UX", "Mobile App", "Prototype"],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filtered =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className={styles.portfolio} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Karya Kami</span>
          <h2 className={styles.title}>
            Portfolio yang
            <span className={styles.accent}> Bicara Sendiri</span>
          </h2>
          <p className={styles.subtitle}>
            Lihat bagaimana kami membantu bisnis-bisnis Indonesia tampil lebih
            profesional, dipercaya, dan siap berkembang.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <div className={styles.tags}>
                        {project.tags.map((tag) => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <button
                        className={styles.viewBtn}
                        id={`portfolio-view-${project.id}`}
                      >
                        <ExternalLink size={16} />
                        Lihat Proyek
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardCategory}>
                    {project.category}
                  </span>
                  <p className={styles.cardName}>{project.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p>Tertarik melihat lebih banyak karya kami?</p>
          <button
            className={styles.ctaBtn}
            onClick={() =>
              window.open(
                "https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20ingin%20melihat%20lebih%20banyak%20portfolio%20kalian",
                "_blank",
              )
            }
          >
            Lihat Full Portfolio →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
