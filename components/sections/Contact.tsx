"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, AtSign, Send } from "lucide-react";
import styles from "./Contact.module.css";

const FacebookIcon = ({ size = 24, ...props }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = ({ size = 24, ...props }: any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 851-3687-7650",
    href: "https://wa.me/6285136877650",
  },
  {
    icon: Mail,
    label: "Email",
    value: "nubimacreativestudio@gmail.com",
    href: "mailto:nubimacreativestudio@gmail.com",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: "@nubimacreativestudio",
    href: "https://instagram.com/nubimacreativestudio",
  },
  {
    icon: TikTokIcon,
    label: "TikTok",
    value: "@nubimacreativestudio",
    href: "https://www.tiktok.com/@nubimacreativestudio",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    value: "Nubima Creative",
    href: "https://www.facebook.com/profile.php?id=61588998308736",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [form, setForm] = useState({
    name: "",
    business: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const services = [
    "Landing Page",
    "UMKM Website",
    "Web Company Profile",
    "Web Portfolio",
    "Social Media Design",
    "Branding Kit UMKM",
    "Packaging Design",
    "Banner / Flyer",
    "Company Profile (PDF)",
    "UI/UX Design",
    "Lainnya",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo Nubima Creative!%0A%0ANama: ${encodeURIComponent(form.name)}%0ABisnis: ${encodeURIComponent(form.business)}%0ALayanan: ${encodeURIComponent(form.service)}%0APersan: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/6285136877650?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.bgDeco}></div>
      <div className={styles.container}>
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Hubungi Kami</span>
          <h2 className={styles.title}>
            Siap Membangun
            <span className={styles.accent}> Brand Anda?</span>
          </h2>
          <p className={styles.subtitle}>
            Ceritakan bisnis Anda kepada kami. Konsultasi pertama gratis, tanpa
            komitmen apapun.
          </p>
        </motion.div>

        <div className={styles.layout}>
          {/* Left: Contact info */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Hubungi Kami</h3>
              <p className={styles.infoSubtitle}>
                Kami siap merespons dalam waktu 1×24 jam pada hari kerja.
              </p>
              <div className={styles.infoList}>
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={styles.infoItem}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <div className={styles.infoIcon}>
                      <info.icon size={18} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>{info.label}</span>
                      <span className={styles.infoValue}>{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className={styles.whatsappDirect}>
                <p>Lebih suka chat langsung?</p>
                <a
                  href="https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20ingin%20konsultasi%20gratis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waDirectBtn}
                >
                  💬 Chat WhatsApp Sekarang
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Nama Lengkap *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Budi Santoso"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="business" className={styles.label}>
                    Nama Bisnis *
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Kopi Nusantara"
                    value={form.business}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.label}>
                  Layanan yang Dibutuhkan *
                </label>
                <select
                  id="service"
                  name="service"
                  className={styles.select}
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Pilih layanan...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Ceritakan Bisnis Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  rows={5}
                  placeholder="Ceritakan tentang bisnis Anda, tujuan proyek, dan hal-hal yang ingin Anda capai..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className={`${styles.submitBtn} ${sent ? styles.sent : ""}`}
                id="contact-submit"
              >
                <Send size={18} />
                {sent ? "Terkirim! ✓" : "Kirim via WhatsApp"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
