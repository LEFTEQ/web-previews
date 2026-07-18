"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const ARMS = ["ZÁMEČNICTVÍ", "SVĚT NOŽŮ", "RYTECKÉ CENTRUM"];

export function ArmRotator() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((v) => (v + 1) % ARMS.length), 2600);
    return () => clearInterval(id);
  }, [reduced]);

  if (reduced) {
    return <span className="arm-static">{ARMS.join(" · ")}</span>;
  }

  return (
    <span className="arm-rotator" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          className="arm-word"
          initial={{ opacity: 0, y: 14, x: -10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -14, x: 10 }}
          transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {ARMS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
