"use client";

import { animate, motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

export function RollingPrice({
  value,
  delay = 0,
}: {
  value: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [value, delay, reduce]);

  return <>{display.toFixed(2).replace(".", ",")}</>;
}

export function FlipRow({
  children,
  index = 0,
}: {
  children: ReactNode;
  index?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className="flip-row">{children}</div>;
  return (
    <motion.div
      className="flip-row"
      initial={{ rotateX: -92, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{
        delay: 0.15 + index * 0.08,
        duration: 0.55,
        ease: [0.2, 0.85, 0.25, 1],
      }}
      style={{ transformOrigin: "top center", transformPerspective: 700 }}
    >
      {children}
    </motion.div>
  );
}

export function ExitSign({
  children,
  index = 0,
}: {
  children: ReactNode;
  index?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className="exit-sign">{children}</div>;
  return (
    <motion.div
      className="exit-sign"
      initial={{ opacity: 0, y: 26, filter: "brightness(0.35)" }}
      whileInView={{ opacity: 1, y: 0, filter: "brightness(1)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.12, duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
