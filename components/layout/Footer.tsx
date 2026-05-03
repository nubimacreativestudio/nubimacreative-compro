"use client";
import { motion } from "framer-motion";
import { AtSign, MessageCircle, Mail, ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

const services = [
  "Landing Page", "UMKM Website", "Web Company Profile",
  "Web Portfolio", "Social Media Design", "Branding Kit UMKM",
  "Packaging Design", "UI/UX Design",
];

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: AtSign, label: "Instagram", href: "https://instagram.com/nubimacreative" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/6281200000000" },
  { icon: Mail, label: "Email", href: "mailto:hello@nubima.id" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* Top CTA band */}
      <div className={styles.ctaBand}>
        <div className={styles.ctaContent}>
          <div>
            <h3 className={styles.ctaTitle}>Siap Mulai Proyek Anda?</h3>
            <p className={styles.ctaSubtitle}>Konsultasi gratis, tanpa komitmen apapun. Hubungi kami sekarang.</p>
          </div>
          <div className={styles.ctaActions}>
            <a
              href="https://wa.me/6281200000000?text=Halo%20Nubima%20Creative%2C%20saya%20siap%20memulai%20proyek!"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaWhatsapp}
            >
              💬 Chat WhatsApp
            </a>
            <button
              className={styles.ctaPortfolio}
              onClick={() => handleNavClick("#portfolio")}
            >
              Lihat Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Brand column */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <div className={styles.logoMark}>
                  <img src="/logo.svg" alt="Nubima Creative" width={32} height={32} />
                </div>
                <div className={styles.logoText}>
                  <span className={styles.logoName}>Nubima</span>
                  <span className={styles.logoSub}>Creative</span>
                </div>
              </div>
              <p className={styles.tagline}>Build Trust, Grow Fast</p>
              <p className={styles.desc}>
                Creative studio yang membantu UMKM dan bisnis berkembang tampil lebih profesional, dipercaya, dan siap tumbuh.
              </p>
              <div className={styles.socials}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label={s.label}
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav column */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Navigasi</h4>
              <ul className={styles.colList}>
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      className={styles.colLink}
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services column */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Layanan</h4>
              <ul className={styles.colList}>
                {services.map((s) => (
                  <li key={s}>
                    <button
                      className={styles.colLink}
                      onClick={() => handleNavClick("#services")}
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Kontak</h4>
              <ul className={styles.colList}>
                <li><a href="https://wa.me/6281200000000" target="_blank" rel="noopener noreferrer" className={styles.colLink}>+62 812-0000-0000</a></li>
                <li><a href="mailto:hello@nubima.id" className={styles.colLink}>hello@nubima.id</a></li>
                <li><a href="https://instagram.com/nubimacreative" target="_blank" rel="noopener noreferrer" className={styles.colLink}>@nubimacreative</a></li>
                <li><span className={styles.colText}>Indonesia 🇮🇩</span></li>
              </ul>
              <div className={styles.certBadge}>
                <span>⭐</span>
                <span>100% Kepuasan Klien</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Nubima Creative. All rights reserved. Made with ❤️ in Indonesia.
          </p>
          <button className={styles.scrollTop} onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
