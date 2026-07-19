"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

function Timecode() {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const p = (n: number) => String(n).padStart(2, "0");
    const tick = () => {
      const d = new Date();
      setT(`${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="vf-tc">{t ?? "--:--:--"}</span>;
}

const cornerV = {
  hidden: (c: { x: number; y: number }) => ({ x: c.x, y: c.y, opacity: 0.2 }),
  show: { x: 0, y: 0, opacity: 1, transition: { type: "spring", stiffness: 210, damping: 24 } },
} as const;

const focusV = {
  hidden: { filter: "blur(11px)", opacity: 0 },
  show: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

const plainV = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export function Frame({
  children,
  coord,
  load = false,
  focus = false,
  className = "",
}: {
  children: ReactNode;
  coord: string;
  load?: boolean;
  focus?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const initial = reduce ? false : "hidden";
  const trigger = load
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, amount: 0.35 } };

  return (
    <motion.div
      className={`vf-frame ${className}`}
      initial={initial}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } } }}
      {...trigger}
    >
      <div className="vf-osd">
        <span className="vf-rec">REC</span>
        <Timecode />
        <span className="vf-coord">{coord}</span>
      </div>
      <motion.span className="vf-corner tl" variants={cornerV} custom={{ x: -18, y: -18 }} />
      <motion.span className="vf-corner tr" variants={cornerV} custom={{ x: 18, y: -18 }} />
      <motion.span className="vf-corner bl" variants={cornerV} custom={{ x: -18, y: 18 }} />
      <motion.span className="vf-corner br" variants={cornerV} custom={{ x: 18, y: 18 }} />
      <motion.div variants={focus ? focusV : plainV}>{children}</motion.div>
    </motion.div>
  );
}
