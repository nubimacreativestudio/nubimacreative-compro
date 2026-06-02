"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Lightbulb, Pen, RotateCcw, Package } from "lucide-react";
import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Penemuan",
    desc: "Kami memahami bisnis Anda, target audiens, kompetitor, dan tujuan yang ingin dicapai melalui sesi konsultasi mendalam.",
    color: "ocean",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategi",
    desc: "Merancang strategi desain yang tepat: konsep visual, tone of voice, dan pendekatan kreatif yang sesuai dengan brand Anda.",
    color: "sky",
  },
  {
    number: "03",
    icon: Pen,
    title: "Desain",
    desc: "Tim desainer kami mengeksekusi konsep menjadi karya visual premium yang selaras dengan identitas dan tujuan bisnis Anda.",
    color: "ocean",
  },
  {
    number: "04",
    icon: RotateCcw,
    title: "Revisi",
    desc: "Kami membuka sesi revisi untuk memastikan hasil akhir sesuai ekspektasi dan kepuasan Anda adalah prioritas utama.",
    color: "sky",
  },
  {
    number: "05",
    icon: Package,
    title: "Pengiriman",
    desc: "File final dikirimkan dalam format siap pakai (print dan digital) beserta panduan penggunaan brand yang lengkap.",
    color: "ocean",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" className={styles.process} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Cara Kami Bekerja</span>
          <h2 className={styles.title}>
            Proses Kreatif
            <span className={styles.accent}> Kami</span>
          </h2>
          <p className={styles.subtitle}>
            Pendekatan terstruktur yang memastikan setiap proyek berjalan lancar, transparan, dan menghasilkan output terbaik.
          </p>
        </motion.div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={`${styles.step} ${styles[`step-${step.color}`]}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && <div className={styles.connector}></div>}

              <div className={styles.stepNumber}>{step.number}</div>
              <div className={`${styles.iconWrap} ${styles[`icon-${step.color}`]}`}>
                <step.icon size={24} />
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
