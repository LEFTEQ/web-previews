"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

// Frame counter, který na load „tikne" 00 → 01,
// jako počítadlo políček na kontaktním listu.
export function HeroCounter() {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? 1 : 0);

  useEffect(() => {
    if (reduce) {
      setN(1);
      return;
    }
    const t = window.setTimeout(() => setN(1), 560);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <span className="counter-num">{String(n).padStart(2, "0")}</span>
  );
}
