"use client";

import { motion, useReducedMotion } from "motion/react";

export function ChevronDivider({
  flip = false,
  label,
}: {
  flip?: boolean;
  label: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={flip ? "divider divider--flip" : "divider"}
      role="separator"
      aria-hidden="true"
    >
      <div className="divider__ridges" />

      {!reduce && (
        <>
          <motion.span
            className="stream stream--hot"
            initial={{ x: flip ? "200%" : "-140%" }}
            whileInView={{ x: flip ? "-140%" : "200%" }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 1.7, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.span
            className="stream stream--cold"
            initial={{ x: flip ? "-140%" : "200%" }}
            whileInView={{ x: flip ? "200%" : "-140%" }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 1.7, ease: [0.4, 0, 0.2, 1] }}
          />
        </>
      )}

      <span className="divider__label">{label}</span>
    </div>
  );
}
