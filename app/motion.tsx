"use client";

import { motion, useReducedMotion } from "motion/react";

export function HeroWord() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span className="hero-word">
        <span className="hero-ghost">ČERSTVÁ</span>
        <span className="hero-fresh">ČERSTVÁ</span>
      </span>
    );
  }

  return (
    <span className="hero-word">
      <span className="hero-ghost">ČERSTVÁ</span>

      <motion.span
        className="hero-old"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -10 }}
        transition={{ delay: 1.15, duration: 0.35, ease: "easeIn" }}
      >
        STARÁ
        <motion.span
          className="hero-strike"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.32, ease: [0.7, 0, 0.3, 1] }}
        />
      </motion.span>

      <motion.span
        className="hero-fresh"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: [0.2, 0.9, 0.2, 1] }}
      >
        ČERSTVÁ
      </motion.span>
    </span>
  );
}

export function SealThud({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className="seal-thud">{children}</div>;
  }

  return (
    <motion.div
      className="seal-thud"
      initial={{ scale: 0, rotate: -24, opacity: 0 }}
      animate={{ scale: [0, 1.16, 0.97, 1], rotate: [-24, 7, -3, -6], opacity: 1 }}
      transition={{ delay: 1.45, duration: 0.6, times: [0, 0.55, 0.8, 1], ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
