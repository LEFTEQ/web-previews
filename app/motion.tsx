"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const hues = [
  { name: "CALIPER RED", code: "PPG C-1148 · 2K", hex: "#CF3A2C" },
  { name: "MASKING OCHRE", code: "PPG C-0870 · BC", hex: "#D6A94A" },
  { name: "MET. SAPPHIRE", code: "PPG C-2340 · 2K", hex: "#234A8C" },
];

export function HeroMatchChip() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (reduce) {
      setI(hues.length - 1);
      setSettled(true);
      return;
    }
    let step = 0;
    const id = setInterval(() => {
      step += 1;
      if (step >= hues.length) {
        clearInterval(id);
        setSettled(true);
        return;
      }
      setI(step);
    }, 1150);
    return () => clearInterval(id);
  }, [reduce]);

  const cur = hues[i];

  return (
    <div className="matchchip" data-settled={settled}>
      <motion.div
        className="matchchip-color"
        animate={{ backgroundColor: cur.hex }}
        transition={{ duration: 0.3 }}
      >
        {!reduce && !settled && (
          <motion.span
            key={i}
            className="matchchip-wipe"
            initial={{ x: "-130%" }}
            animate={{ x: "260%" }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          />
        )}
        <span className="matchchip-gloss" />
      </motion.div>
      <div className="matchchip-label mono">
        <span className="matchchip-name">{cur.name}</span>
        <span className="matchchip-hex">{cur.hex}</span>
        <span className="matchchip-code">{cur.code}</span>
      </div>
    </div>
  );
}
