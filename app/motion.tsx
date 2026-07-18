"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const WORDS = [
  { text: "KONCERT", accent: "#f4a62a" },
  { text: "FESTIVAL", accent: "#e0417a" },
  { text: "DIVADLO", accent: "#2fb6c4" },
  { text: "OPEN AIR", accent: "#f4a62a" },
];

export function RotatingWord() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2300);
    return () => clearInterval(t);
  }, [reduce]);

  const w = WORDS[i];

  if (reduce) {
    return (
      <span className="rot">
        <span className="rot__word" style={{ color: WORDS[0].accent }}>
          {WORDS[0].text}
        </span>
      </span>
    );
  }

  return (
    <span className="rot">
      <AnimatePresence mode="wait">
        <motion.span
          key={w.text}
          className="rot__word"
          style={{ color: w.accent }}
          initial={{ y: "0.34em", opacity: 0, filter: "blur(7px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.3em", opacity: 0, filter: "blur(7px)" }}
          transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {w.text}
        </motion.span>
      </AnimatePresence>

      <motion.span
        key={"sweep-" + i}
        className="rot__sweep"
        aria-hidden="true"
        style={{
          background: `linear-gradient(90deg, transparent, ${w.accent}, transparent)`,
        }}
        initial={{ x: "-115%", opacity: 0 }}
        animate={{ x: "175%", opacity: [0, 0.85, 0] }}
        transition={{ duration: 0.95, ease: "easeInOut" }}
      />
    </span>
  );
}
