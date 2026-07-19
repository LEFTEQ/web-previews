"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

function now() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

export function RecClock() {
  const [t, setT] = useState("00:00:00");
  const reduce = useReducedMotion();

  useEffect(() => {
    setT(now());
    if (reduce) return;
    const id = setInterval(() => setT(now()), 1000);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <span className="hud__rec">
      <span className="hud__dot" />
      REC {t}
    </span>
  );
}

const TARGET = 3.4;

export function DepthReadout() {
  const reduce = useReducedMotion();
  const [v, setV] = useState(0);

  useEffect(() => {
    if (reduce) {
      setV(TARGET);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(eased * TARGET * 10) / 10);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  return (
    <span className="hud__depth">
      {v.toFixed(1)} m<span className="hud__dim"> / DN300</span>
    </span>
  );
}
