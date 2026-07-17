"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const DAYS = [
  "neděle",
  "pondělí",
  "úterý",
  "středa",
  "čtvrtek",
  "pátek",
  "sobota",
];

export function LiveStatus() {
  const reduce = useReducedMotion();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  // Galerie open Po–Ne 9:00–19:00 (every day)
  const hour = now ? now.getHours() + now.getMinutes() / 60 : 12;
  const open = now ? hour >= 9 && hour < 19 : true;
  const day = now ? DAYS[now.getDay()] : "";

  return (
    <motion.div
      className="gm-status"
      role="status"
      aria-live="polite"
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.55, ease: "easeOut" }}
    >
      <motion.span
        className={open ? "gm-status-dot gm-status-dot--open" : "gm-status-dot"}
        animate={
          reduce || !open ? undefined : { opacity: [1, 0.4, 1], scale: [1, 1.25, 1] }
        }
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="gm-status-text">
        <span className="gm-status-day">
          {now ? `Dnes je ${day}` : "Otevírací doba galerie"}
        </span>
        <span className="gm-status-state">
          {open ? "Nyní otevřeno" : "Nyní zavřeno"} · 9–19
        </span>
      </span>
    </motion.div>
  );
}
