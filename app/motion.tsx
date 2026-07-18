"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const corners = [
  { cls: "tl", x: -22, y: -22 },
  { cls: "tr", x: 22, y: -22 },
  { cls: "bl", x: -22, y: 22 },
  { cls: "br", x: 22, y: 22 },
];

type Props = {
  children: ReactNode;
  coords?: string;
  trigger?: "load" | "view";
  tone?: "phosphor" | "amber";
};

export function Reticle({ children, coords, trigger = "view", tone = "phosphor" }: Props) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    shown: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: trigger === "load" ? 0.35 : 0,
      },
    },
  };

  const anim =
    reduce
      ? { initial: "shown" as const, animate: "shown" as const }
      : trigger === "load"
      ? { initial: "hidden" as const, animate: "shown" as const }
      : {
          initial: "hidden" as const,
          whileInView: "shown" as const,
          viewport: { once: true, amount: 0.35 },
        };

  return (
    <motion.div className={`reticle tone-${tone}`} variants={container} {...anim}>
      {corners.map((c) => (
        <motion.span
          key={c.cls}
          className={`reticle-corner ${c.cls}`}
          variants={{
            hidden: reduce ? {} : { x: c.x, y: c.y, opacity: 0 },
            shown: {
              x: 0,
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 700, damping: 26 },
            },
          }}
        />
      ))}
      {coords ? (
        <motion.span
          className="reticle-coords"
          variants={{
            hidden: reduce ? {} : { opacity: 0 },
            shown: { opacity: 1, transition: { duration: 0.35 } },
          }}
        >
          {coords}
        </motion.span>
      ) : null}
      <div className="reticle-body">{children}</div>
    </motion.div>
  );
}
