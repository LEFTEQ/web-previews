"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

export function StopaSpine() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const drawn = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.5,
  });

  const length = reduce ? 1 : drawn;

  // Twin parallel rails of a groomed cross-country track, gently curving
  // as a route line threaded down the page.
  const left =
    "M9 0 C 3 180, 17 340, 9 520 C 1 700, 19 860, 11 1040 C 4 1160, 16 1220, 10 1200";
  const right =
    "M17 0 C 11 180, 25 340, 17 520 C 9 700, 27 860, 19 1040 C 12 1160, 24 1220, 18 1200";

  return (
    <div className="spine" aria-hidden="true">
      <svg viewBox="0 0 26 1200" preserveAspectRatio="none">
        <motion.path d={left} style={{ pathLength: length }} />
        <motion.path d={right} style={{ pathLength: length }} />
      </svg>
    </div>
  );
}
