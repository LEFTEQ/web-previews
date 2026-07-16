"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const colourways = [
  { name: "BATTLESHIP BLUE", hex: "#5a6b7a" },
  { name: "CRIMSON", hex: "#e0384a" },
  { name: "MARIGOLD", hex: "#e6a52c" },
  { name: "PINOT NOIR", hex: "#a24666" },
];

export function ColourwaySwap() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = window.setInterval(
      () => setI((x) => (x + 1) % colourways.length),
      2200,
    );
    return () => window.clearInterval(t);
  }, [reduce]);

  const cw = colourways[i];

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", cw.hex);
  }, [cw.hex]);

  if (reduce) {
    return (
      <span className="ba-swap">
        <span className="ba-swap-word" style={{ color: cw.hex }}>
          {cw.name}
        </span>
      </span>
    );
  }

  return (
    <span className="ba-swap">
      <AnimatePresence mode="wait">
        <motion.span
          key={cw.name}
          className="ba-swap-word"
          style={{ color: cw.hex }}
          initial={{ opacity: 0, y: "0.42em", x: "0.2em" }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: "-0.42em", x: "-0.2em" }}
          transition={{ duration: 0.42, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {cw.name}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
