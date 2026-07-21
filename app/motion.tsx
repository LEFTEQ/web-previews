"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  to: number;
  suffix?: string;
};

/**
 * Trust stats count up once, as their node "energizes".
 * Reduced motion / no view: value shows final number immediately.
 */
export function CountUp({ to, suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState<number>(reduce ? to : 0);

  useEffect(() => {
    if (reduce) {
      setValue(to);
      return;
    }
    if (!inView) return;

    let raf = 0;
    const duration = 850;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to]);

  return (
    <span ref={ref} className="countup">
      {value}
      {suffix}
    </span>
  );
}
