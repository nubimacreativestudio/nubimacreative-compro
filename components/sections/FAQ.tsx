"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Berapa lama waktu pengerjaan proyek?",
    a: "Waktu pengerjaan bervariasi tergantung jenis dan kompleksitas proyek. Logo design umumnya 3-5 hari kerja, website 2-4 minggu, dan branding kit lengkap 7-14 hari kerja. Kami selalu memberikan estimasi waktu yang realistis di awal proyek.",
  },
  {
    q: "Berapa kali saya bisa melakukan revisi?",
    a: "Jumlah revisi tergantung paket yang dipilih: Starter: 1x revisi, Growth: 3x revisi, Premium: unlimited. Kami juga menawarkan tambahan revisi di luar paket dengan biaya yang sangat terjangkau.",
  },
  {
    q: "Apakah saya perlu menyiapkan materi sebelum mulai proyek?",
    a: "Di awal proyek, kami akan mengirimkan brief form yang memandu Anda mengumpulkan informasi yang dibutuhkan, seperti deskripsi bisnis, target audiens, referensi visual, dan konten teks. Tim kami siap membantu jika Anda membutuhkan panduan.",
  },
  {
    q: "Format file apa saja yang akan saya terima?",
    a: "Kami menyerahkan semua format yang dibutuhkan: AI/EPS (vector) untuk print, PNG dengan background transparan, JPG untuk digital, PDF untuk dokumen, dan format lain yang relevan dengan jenis proyeknya.",
  },
  {
    q: "Apakah Nubima Creative melayani klien di luar kota?",
    a: "Ya, kami melayani klien di seluruh Indonesia dan bahkan dari luar negeri. Semua proses komunikasi, revisi, dan pengiriman file dilakukan secara online melalui WhatsApp, email, dan Google Drive.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Kami menggunakan sistem 50% di awal sebagai tanda jadi, dan 50% setelah proyek selesai dan disetujui. Transfer via bank BCA, Mandiri, atau BNI. Pembayaran bisa juga melalui GoPay/OVO.",
  },
  {
    q: "Apakah harga bisa dinegosiasi untuk UMKM dengan budget terbatas?",
    a: "Kami memahami keterbatasan budget UMKM. Hubungi kami untuk konsultasi gratis dan kami akan membantu menyusun solusi yang sesuai dengan budget dan kebutuhan bisnis Anda.",
  },
  {
    q: "Apakah saya mendapatkan hak kepemilikan penuh atas desain yang dibuat?",
    a: "Ya, setelah proyek selesai dan pembayaran lunas, Anda mendapatkan hak kepemilikan penuh atas seluruh desain yang telah dibuat, termasuk file source-nya.",
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  onClick,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
      <button
        className={styles.question}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{q}</span>
        <span className={styles.icon}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="faq" className={styles.faq} ref={ref}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Left */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.badge}>FAQ</span>
            <h2 className={styles.title}>
              Pertanyaan yang
              <span className={styles.accent}> Sering Ditanyakan</span>
            </h2>
            <p className={styles.subtitle}>
              Tidak menemukan jawaban yang Anda cari? Hubungi kami langsung via
              WhatsApp.
            </p>
            <button
              className={styles.waBtn}
              onClick={() =>
                window.open(
                  "https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20punya%20pertanyaan%20tentang%20layanan%20kalian",
                  "_blank",
                )
              }
            >
              Tanya via WhatsApp →
            </button>
          </motion.div>

          {/* Right */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
