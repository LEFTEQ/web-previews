"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "motion/react";

export function Tally({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || value === 0) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 0.6,
      delay: 0.55,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [value, reduce]);

  return <span>{display.toLocaleString("cs-CZ")}</span>;
}
