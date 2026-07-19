"use client";

import { Children, isValidElement } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

// The swing-tag drops on its string and pendulum-settles into place.
export function HeroTag({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className="hero-tag">{children}</div>;
  return (
    <motion.div
      className="hero-tag"
      style={{ transformOrigin: "top center" }}
      initial={{ y: -360, rotate: -9, opacity: 0 }}
      animate={{ y: 0, rotate: [-9, 7, -4, 2, -1, 0], opacity: 1 }}
      transition={{
        y: { type: "spring", stiffness: 58, damping: 9, mass: 1.1 },
        rotate: { duration: 1.5, ease: "easeOut", times: [0, 0.24, 0.44, 0.64, 0.84, 1] },
        opacity: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
}

// The care-glyph row stamps in one-by-one beneath the wordmark.
export function StampRow({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const items = Children.toArray(children).filter(isValidElement);
  return (
    <div className="glyph-row" aria-hidden="true">
      {items.map((child, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-flex" }}
          initial={reduce ? false : { opacity: 0, scale: 1.7, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: reduce ? 0 : 1.25 + i * 0.13, duration: 0.28, ease: "backOut" }}
        >
          {child}
        </motion.span>
      ))}
    </div>
  );
}
