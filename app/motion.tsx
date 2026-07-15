"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

const TARGET = 60;

export function Count60() {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? TARGET : 0);
  const started = useRef(false);

  useEffect(() => {
    if (reduce) {
      setValue(TARGET);
      return;
    }
    if (started.current) return;
    started.current = true;

    const duration = 1100;
    const delay = 900; // begins as the panels lock into place
    let raf = 0;
    let startTime = 0;

    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const t = Math.min(1, (now - startTime) / duration);
      // ease-out so it settles like a panel coming to rest
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * TARGET));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    const timer = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return <span aria-label="60">{value}</span>;
}
