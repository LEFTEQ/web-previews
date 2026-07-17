"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

function FootSvg() {
  return (
    <svg viewBox="0 0 40 56" aria-hidden="true" focusable="false">
      <ellipse cx="20" cy="24" rx="12" ry="13" />
      <ellipse cx="20" cy="45" rx="7.5" ry="8.5" />
      <ellipse cx="8" cy="15" rx="2.4" ry="3" />
      <ellipse cx="14" cy="9" rx="2.6" ry="3.2" />
      <ellipse cx="20.5" cy="7" rx="2.8" ry="3.3" />
      <ellipse cx="27" cy="9" rx="2.6" ry="3.2" />
      <ellipse cx="33" cy="15" rx="2.3" ry="2.9" />
    </svg>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const print: Variants = {
  hidden: { opacity: 0, scale: 0.55 },
  show: { opacity: 0.85, scale: 1, transition: { duration: 0.32, ease: "easeOut" } },
};

export function FootTrail({ count = 4 }: { count?: number }) {
  const reduce = useReducedMotion();
  const feet = Array.from({ length: count });

  if (reduce) {
    return (
      <div className="trail" aria-hidden="true">
        {feet.map((_, i) => (
          <span key={i} className={`foot foot--${i % 2}`}>
            <FootSvg />
          </span>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="trail"
      aria-hidden="true"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
    >
      {feet.map((_, i) => (
        <motion.span key={i} className={`foot foot--${i % 2}`} variants={print}>
          <FootSvg />
        </motion.span>
      ))}
    </motion.div>
  );
}
