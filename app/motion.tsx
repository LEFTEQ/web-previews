"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "motion/react";

const fmt = (n: number) => Math.round(n).toLocaleString("cs-CZ");

export function Tally({ value, index = 0 }: { value: number; index?: number }) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);
  const started = useRef(false);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (started.current) return;
    started.current = true;
    const controls = animate(0, value, {
      duration: 1.1,
      delay: 0.45 + index * 0.12,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [value, index, reduce]);

  return <span>{fmt(display)}</span>;
}
