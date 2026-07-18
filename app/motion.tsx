"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function HeroHeadline() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setDone(true), 780);
    return () => clearTimeout(t);
  }, [reduce]);

  const show = reduce ? true : done;

  return (
    <span className="hero-swap" aria-label="Zdravé dásně měříme v milimetrech.">
      <motion.span
        aria-hidden="true"
        className="hero-line hero-line--final"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        Zdravé dásně měříme<br />v milimetrech.
      </motion.span>
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="hero-line hero-line--first"
          initial={{ opacity: 1 }}
          animate={{ opacity: show ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          Krásný úsměv…
        </motion.span>
      )}
    </span>
  );
}
