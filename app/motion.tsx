"use client";

import { motion, useReducedMotion } from "motion/react";

const diamonds = [
  { rot: 0, x: 0, y: -120 },
  { rot: 120, x: 104, y: 74 },
  { rot: 240, x: -104, y: 74 },
];

export function BrandLockup() {
  const reduce = useReducedMotion();

  return (
    <div className="lockup">
      <div className="mark" aria-hidden="true">
        {diamonds.map((d, i) => (
          <div
            key={i}
            className="dia-wrap"
            style={{ transform: `rotate(${d.rot}deg) translateY(-3px)` }}
          >
            <motion.span
              className="dia"
              initial={reduce ? { opacity: 1 } : { opacity: 0, x: d.x, y: d.y }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.55, delay: 0.15 + i * 0.09, ease: [0.2, 0.75, 0.2, 1] }
              }
            />
          </div>
        ))}
      </div>
      <motion.span
        className="wordmark"
        initial={reduce ? { opacity: 1 } : { opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.5, delay: 0.56 }}
      >
        <span className="wm-top">AUTOSALON</span>
        <span className="wm-main">Běhounek</span>
      </motion.span>
    </div>
  );
}
