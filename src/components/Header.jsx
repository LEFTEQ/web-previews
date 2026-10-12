import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CONTACT, NAV } from "../data.js";
import { MailIcon, PhoneIcon } from "./Icons.jsx";

const EASE = [0.22, 1, 0.36, 1];

export default function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const btnRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    const onDown = (e) => {
      if (panelRef.current?.contains(e.target) || btnRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href="#obsah" className="wordmark" aria-label="GEMARE AGENCY – začátek stránky">
          <span className="wordmark-main">GEMARE</span>
          <span className="wordmark-sub">AGENCY</span>
        </a>

        <nav className="desk-nav" aria-label="Hlavní navigace">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href={CONTACT.mobile.href} className="tel-btn" aria-label={`Zavolat na mobil ${CONTACT.mobile.label}`}>
            <PhoneIcon />
            <span className="tel-btn-label">{CONTACT.mobile.short}</span>
          </a>
          <button
            ref={btnRef}
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobilni-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Zavřít" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            id="mobilni-menu"
            className="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.99, transition: { duration: 0.15, ease: EASE } }}
            transition={{ duration: reduce ? 0 : 0.25, ease: EASE }}
            style={{ transformOrigin: "top right" }}
          >
            <nav aria-label="Mobilní navigace">
              <ul>
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} onClick={() => setOpen(false)}>
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mobile-menu-contacts">
              <a href={CONTACT.mobile.href}>
                <PhoneIcon /> {CONTACT.mobile.label}
              </a>
              <a href={CONTACT.landline.href}>
                <PhoneIcon /> {CONTACT.landline.label}
              </a>
              <a href={`mailto:${CONTACT.email}`}>
                <MailIcon /> {CONTACT.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
