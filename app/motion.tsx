"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

export function CountUp({ to }: { to: number }) {
  const reduced = useReducedMotion();
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (reduced) {
      setVal(to);
      return;
    }
    if (started.current) return;
    started.current = true;

    const duration = 1200;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, reduced]);

  return <span>{val.toLocaleString("cs-CZ")}</span>;
}
