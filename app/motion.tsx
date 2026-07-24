"use client";

import { animate, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type TallyProps = {
  value: number;
  suffix?: string;
  delay?: number;
};

// Tots up like an accountant closing the books — 0 → final value.
export function Tally({ value, suffix = "", delay = 0 }: TallyProps) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.3,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [value, delay, reduce]);

  return (
    <span>
      {display.toLocaleString("cs-CZ")}
      {suffix}
    </span>
  );
}
