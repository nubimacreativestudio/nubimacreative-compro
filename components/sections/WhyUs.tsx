"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck, Clock, Palette, MessageSquare,
  TrendingUp, Star, Repeat, Headphones
} from "lucide-react";
import styles from "./WhyUs.module.css";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Desain Profesional & Terpercaya",
    desc: "Setiap karya kami dirancang untuk membangun kepercayaan pelanggan terhadap brand Anda.",
    color: "ocean",
  },
  {
    icon: Clock,
    title: "Pengerjaan Tepat Waktu",
    desc: "Kami menghargai waktu Anda. Deadline adalah komitmen kami, bukan sekadar target.",
    color: "sky",
  },
  {
    icon: Palette,
    title: "Desain Unik & Custom",
    desc: "Tidak ada template copy-paste. Setiap desain dibuat khusus sesuai identitas bisnis Anda.",
    color: "ocean",
  },
  {
    icon: MessageSquare,
    title: "Komunikasi Responsif",
    desc: "Tim kami selalu siap merespons pertanyaan dan revisi Anda dengan cepat dan profesional.",
    color: "sky",
  },
  {
    icon: TrendingUp,
    title: "Fokus pada Pertumbuhan",
    desc: "Kami bukan hanya desainer — kami adalah mitra strategis yang peduli pertumbuhan bisnis Anda.",
    color: "ocean",
  },
  {
    icon: Star,
    title: "Kualitas Premium",
    desc: "Standar kualitas tinggi di setiap proyek, mulai dari konsep hingga file final yang siap digunakan.",
    color: "sky",
  },
  {
    icon: Repeat,
    title: "Revisi Terbuka",
    desc: "Kepuasan Anda adalah prioritas. Kami memberikan revisi hingga Anda benar-benar puas.",
    color: "ocean",
  },
  {
    icon: Headphones,
    title: "Support Pasca Proyek",
    desc: "Layanan kami tidak berhenti setelah proyek selesai — kami tetap ada untuk mendukung Anda.",
    color: "sky",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="why-us" className={styles.whyUs} ref={ref}>
      <div className={styles.container}>
        {/* Heading */}
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Why Nubima Creative?</span>
          <h2 className={styles.title}>
            Why Businesses Choose
            <span className={styles.accent}> Us</span>
          </h2>
          <p className={styles.subtitle}>
            We combine creativity with strategy to deliver designs that don&apos;t just look good — they work hard for your business.
          </p>
        </motion.div>

        {/* Grid */}
        <div className={styles.grid}>
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className={`${styles.card} ${styles[`card-${reason.color}`]}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className={`${styles.iconWrap} ${styles[`icon-${reason.color}`]}`}>
                <reason.icon size={22} />
              </div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDesc}>{reason.desc}</p>
              <div className={styles.cardAccent}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
