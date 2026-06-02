"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Anisa Rahmawati",
    role: "Owner, Kopi Nusantara",
    business: "Coffee Shop · Yogyakarta",
    rating: 5,
    text: "Nubima Creative benar-benar mengubah cara pelanggan memandang brand kami. Setelah rebrand bersama mereka, penjualan kami naik 40% dalam 3 bulan pertama. Desainnya premium banget, cocok banget sama visi kami.",
    initials: "AR",
    color: "#0077b6",
  },
  {
    id: 2,
    name: "Budi Santoso",
    role: "CEO, Sharp Cuts Barbershop",
    business: "Barbershop · Jakarta",
    rating: 5,
    text: "Social media kit dari Nubima sangat membantu. Feed Instagram kami jadi jauh lebih profesional dan konsisten. Banyak klien baru yang bilang mereka tertarik karena tampilan Instagram kami yang eye-catching.",
    initials: "BS",
    color: "#00b4d8",
  },
  {
    id: 3,
    name: "Rina Kusumawati",
    role: "Founder, Aura Beauty",
    business: "Beauty Brand · Bandung",
    rating: 5,
    text: "Website yang dibuat Nubima Creative sangat memukau! Responnya cepat, desainnya indah, dan yang terpenting website kami sekarang menghasilkan leads yang nyata. Highly recommended untuk siapapun yang serius dengan bisnisnya.",
    initials: "RK",
    color: "#0077b6",
  },
  {
    id: 4,
    name: "Dedi Kurniawan",
    role: "Owner, NARA Wear",
    business: "Fashion Brand · Surabaya",
    rating: 5,
    text: "Packaging design dari Nubima Creative adalah game changer untuk produk kami. Pelanggan sekarang sering posting unboxing di Instagram dan itu jadi marketing organik yang luar biasa. Tim mereka sangat kreatif dan profesional.",
    initials: "DK",
    color: "#00b4d8",
  },
  {
    id: 5,
    name: "Sari Dewi Lestari",
    role: "Owner, Dapur Nusantara",
    business: "Culinary Business · Bali",
    rating: 5,
    text: "Landing page yang dibuat Nubima Creative meningkatkan konversi pesanan online kami drastis. Desainnya cantik, loadingnya cepat, dan navigasinya sangat intuitif. Pelanggan kami jadi lebih mudah order.",
    initials: "SD",
    color: "#0077b6",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className={styles.testimonials} ref={ref}>
      {/* Background decoration */}
      <div className={styles.bgDeco1}></div>
      <div className={styles.bgDeco2}></div>

      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Testimoni</span>
          <h2 className={styles.title}>
            Apa Kata
            <span className={styles.accent}> Klien Kami</span>
          </h2>
          <p className={styles.subtitle}>
            Kepercayaan klien adalah bukti terbaik dari kualitas kerja kami.
          </p>
        </motion.div>

        <motion.div
          className={styles.sliderWrap}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className={styles.slider}>
            {/* Quote icon */}
            <div className={styles.quoteIcon}>
              <Quote size={32} />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id}
                className={styles.card}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Stars */}
                <div className={styles.stars}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>

                {/* Text */}
                <p className={styles.text}>&quot;{t.text}&quot;</p>

                {/* Author */}
                <div className={styles.author}>
                  <div
                    className={styles.avatar}
                    style={{ background: `linear-gradient(135deg, ${t.color}, #00b4d8)` }}
                  >
                    {t.initials}
                  </div>
                  <div className={styles.authorInfo}>
                    <span className={styles.name}>{t.name}</span>
                    <span className={styles.role}>{t.role}</span>
                    <span className={styles.business}>{t.business}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className={styles.controls}>
              <button className={styles.navBtn} onClick={prev} aria-label="Previous">
                <ChevronLeft size={20} />
              </button>

              <div className={styles.dots}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button className={styles.navBtn} onClick={next} aria-label="Next">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
