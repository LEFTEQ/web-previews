"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

function buildThread() {
  let d = "M 0 9";
  for (let x = 0; x < 1200; x += 20) {
    d += ` L ${x + 5} 4 L ${x + 10} 9 L ${x + 15} 14 L ${x + 20} 9`;
  }
  return d;
}
const THREAD = buildThread();

export function ThreadRule({ color = "#0f3a43" }: { color?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg
      className="thread"
      viewBox="0 0 1200 18"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d={THREAD}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

export function OpenStatus() {
  const [state, setState] = useState<null | { open: boolean; label: string }>(
    null
  );

  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = neděle
    const mins = now.getHours() * 60 + now.getMinutes();
    const weekday = day >= 1 && day <= 5;
    const open = weekday && mins >= 7 * 60 && mins < 15 * 60;
    setState({ open, label: open ? "Otevřeno" : "Zavřeno" });
  }, []);

  if (!state) {
    return (
      <span className="status" aria-live="polite">
        <span className="status__dot" />
        Po–Pá 7:00–15:00
      </span>
    );
  }

  return (
    <span
      className={"status " + (state.open ? "status--open" : "status--closed")}
      aria-live="polite"
    >
      <span className="status__dot" />
      {state.label} · Po–Pá 7:00–15:00
    </span>
  );
}
