"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppCTA.module.css";

export default function WhatsAppCTA() {
  const waUrl =
    "https://wa.me/6281200000000?text=Halo%20Nubima%20Creative%2C%20saya%20tertarik%20dengan%20layanan%20kalian.%20Boleh%20saya%20konsultasi%3F";

  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.waBtn}
      id="whatsapp-cta"
      aria-label="Chat via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={styles.ping}></span>
      <span className={styles.icon}>
        <MessageCircle size={26} fill="white" strokeWidth={0} />
      </span>
      <span className={styles.label}>Chat WhatsApp</span>
    </motion.a>
  );
}
