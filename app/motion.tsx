"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

export function VoltageReadout() {
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? 230 : 0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (reduce) {
      setV(230);
      return;
    }
    let start = 0;
    const duration = 1100;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(eased * 230));
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    const timer = window.setTimeout(() => {
      raf.current = requestAnimationFrame(step);
    }, 750);
    return () => {
      window.clearTimeout(timer);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [reduce]);

  return <span className="meter-num">{v}</span>;
}
