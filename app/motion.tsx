"use client";

import { motion, useReducedMotion } from "motion/react";

const word = (
  <>
    MYJE<span className="dot">·</span>TO
  </>
);

export function WordmarkWash() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span className="wm">
        <span className="wm-base" aria-hidden="true">{word}</span>
        <span className="wm-wet">{word}</span>
      </span>
    );
  }

  return (
    <span className="wm">
      <span className="wm-base" aria-hidden="true">{word}</span>
      <motion.span
        className="wm-wet"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.05, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        {word}
      </motion.span>

      <motion.svg
        className="wm-arc"
        viewBox="0 0 120 140"
        preserveAspectRatio="none"
        aria-hidden="true"
        initial={{ x: "-30%", opacity: 0 }}
        animate={{ x: "210%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.05, delay: 0.35, ease: [0.4, 0, 0.2, 1], times: [0, 0.12, 0.8, 1] }}
      >
        <path
          d="M74,4 C40,34 40,104 78,136"
          fill="none"
          stroke="#14b8d6"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <g fill="#14b8d6">
          <circle cx="90" cy="18" r="2.6" />
          <circle cx="98" cy="40" r="2" />
          <circle cx="96" cy="66" r="3" />
          <circle cx="100" cy="92" r="2.2" />
          <circle cx="92" cy="116" r="2.6" />
          <circle cx="106" cy="54" r="1.6" />
          <circle cx="108" cy="104" r="1.8" />
        </g>
      </motion.svg>
    </span>
  );
}
