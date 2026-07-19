"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

function format(d: Date) {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

export function LiveClock() {
  const reduce = useReducedMotion();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(format(new Date()));
    const id = setInterval(() => setTime(format(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.span
      className="clock"
      aria-hidden="true"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: reduce ? 0 : 1.25, duration: 0.4 }}
    >
      {time ?? "--:--:--"}
    </motion.span>
  );
}
