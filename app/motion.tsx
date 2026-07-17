"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "motion/react";

type WeighProps = {
  value: number;
  decimals?: number;
  duration?: number;
};

// The Black Eagle weighs every shot: each spec number ticks up from zero
// as the card scrolls into view, settling on its final weight.
export function Weigh({ value, decimals = 1, duration = 1.6 }: WeighProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
  }, [inView, value, reduce, duration]);

  return <span ref={ref}>{n.toFixed(decimals)}</span>;
}
