"use client";

import { animate, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function Readout({ to }: { to: number }) {
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);
  const seen = useRef(false);

  useEffect(() => {
    if (reduce || seen.current) {
      setVal(to);
      return;
    }
    seen.current = true;
    const controls = animate(0, to, {
      duration: 0.9,
      delay: 0.35,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [to, reduce]);

  return <span>{Math.round(val)}</span>;
}
