"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "motion/react";

const fmt = new Intl.NumberFormat("cs-CZ");

export function HeroFigure({
  value,
  index = 0,
}: {
  value: number;
  index?: number;
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.1,
      delay: 0.5 + index * 0.15,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [value, index, reduce]);

  return <span>{fmt.format(display)}</span>;
}
