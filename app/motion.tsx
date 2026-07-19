"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const WORDS = ["WIEN", "MÜNCHEN", "PRAHA", "EVROPY"];

export function SplitFlap() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setI((v) => (v + 1) % WORDS.length);
    }, 3600);
    return () => clearInterval(id);
  }, [reduce]);

  const word = reduce ? "EVROPY" : WORDS[i];
  const chars = word.split("");

  return (
    <span className="flap" role="text" aria-live="polite" aria-label={`Přeprava do ${word}`}>
      {chars.map((ch, idx) => (
        <motion.span
          key={word + "-" + idx}
          className="flap-cell"
          aria-hidden="true"
          initial={reduce ? false : { rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{
            delay: reduce ? 0 : idx * 0.055,
            duration: 0.34,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}
