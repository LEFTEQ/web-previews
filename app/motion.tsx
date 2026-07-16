"use client";

import { animate, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

function group(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
}

export function Figure({
  value,
  suffix = "",
  group: useGroup = false,
}: {
  value: number;
  suffix?: string;
  group?: boolean;
}) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setN(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [value, reduce]);

  return (
    <span>
      {useGroup ? group(n) : n}
      {suffix}
    </span>
  );
}
