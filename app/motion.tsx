"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const standardV = {
  hidden: { scaleY: 0 },
  build: { scaleY: 1, transition: { duration: 0.42, ease: EASE } },
};

const ledgerV = {
  hidden: { scaleX: 0 },
  build: {
    scaleX: 1,
    transition: { duration: 0.46, delay: 0.34, ease: EASE },
  },
};

const braceV = {
  hidden: { pathLength: 0, opacity: 0 },
  build: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.4, delay: 0.74, ease: "easeOut" },
  },
};

const dotV = {
  hidden: { scale: 0 },
  build: {
    scale: 1,
    transition: { delay: 1.0, type: "spring", stiffness: 700, damping: 18 },
  },
};

const dots = [
  { left: "0%", top: "0%" },
  { left: "100%", top: "0%" },
  { left: "0%", top: "50%" },
  { left: "100%", top: "50%" },
  { left: "0%", top: "100%" },
  { left: "100%", top: "100%" },
];

export function ScaffoldFrame() {
  const reduce = useReducedMotion();
  const initial = reduce ? "build" : "hidden";

  return (
    <motion.div
      className="bay"
      aria-hidden="true"
      initial={initial}
      whileInView="build"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.span className="bay-standard bay-standard--l" variants={standardV} />
      <motion.span className="bay-standard bay-standard--r" variants={standardV} />
      <motion.span className="bay-ledger bay-ledger--t" variants={ledgerV} />
      <motion.span className="bay-ledger bay-ledger--m" variants={ledgerV} />
      <motion.span className="bay-ledger bay-ledger--b" variants={ledgerV} />

      <svg className="bay-brace" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.line
          x1="0"
          y1="100"
          x2="100"
          y2="0"
          vectorEffect="non-scaling-stroke"
          variants={braceV}
        />
      </svg>

      {dots.map((d, i) => (
        <span key={i} className="bay-dot-pos" style={d}>
          <motion.span className="bay-dot" variants={dotV} />
        </span>
      ))}
    </motion.div>
  );
}
