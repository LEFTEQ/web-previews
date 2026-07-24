"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "motion/react";

export function Counter({ to = 27 }: { to?: number }) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 0.9,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [to, reduce]);

  return <span aria-label={`${to} nemovitostí`}>{value}</span>;
}
