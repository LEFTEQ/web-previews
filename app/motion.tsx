"use client";

import { motion, useReducedMotion } from "motion/react";

type Sys = { name: string; note: string };

export function PaverStrip({ items }: { items: Sys[] }) {
  const reduce = useReducedMotion();
  const cols = 7;
  return (
    <div className="strip">
      {items.map((it, i) => {
        const row = Math.floor(i / cols);
        const delay = reduce ? 0 : 0.18 + row * 0.14 + (i % cols) * 0.07;
        return (
          <motion.div
            className="paver"
            key={it.name}
            initial={reduce ? false : { y: -26, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 620, damping: 26, delay }}
          >
            <span className="paver-name">{it.name}</span>
            <span className="paver-note">{it.note}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

export function SlabCast() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="slab"
      initial={reduce ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={reduce ? { duration: 0 } : { duration: 0.55, delay: 0.95, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <span className="slab-text">
        <span>Kvalita</span>
        <span>na beton</span>
      </span>
    </motion.div>
  );
}

export function Reveal({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Joint() {
  const reduce = useReducedMotion();
  return (
    <div className="joint wrap" aria-hidden="true">
      <motion.div
        className="joint-bar"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={reduce ? { duration: 0 } : { duration: 0.8, ease: [0.4, 0, 0.1, 1] }}
      />
    </div>
  );
}
