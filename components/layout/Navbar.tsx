"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.container}>
          {/* Logo */}
          <a
            href="#hero"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
          >
            <div className={styles.logoMark}>
              <img
                src="/logo.svg"
                alt="Nubima Creative"
                width={32}
                height={32}
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>Nubima</span>
              <span className={styles.logoSub}>Creative</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.navActions}>
            <button
              className={styles.ctaBtn}
              onClick={() =>
                window.open(
                  "https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20ingin%20berkonsultasi",
                  "_blank",
                )
              }
            >
              Let&apos;s Talk
            </button>
            <button
              className={styles.menuBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <button
              className={styles.mobileCta}
              onClick={() => {
                setMenuOpen(false);
                window.open(
                  "https://wa.me/6285136877650?text=Halo%20Nubima%20Creative%2C%20saya%20ingin%20berkonsultasi",
                  "_blank",
                );
              }}
            >
              Let&apos;s Talk →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
