"use client";

import { motion, useReducedMotion } from "motion/react";

type Tile = { label: string; icon: string };

function Glyph({ icon }: { icon: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (icon === "disc") {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2.4" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
      </svg>
    );
  }
  if (icon === "seat") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M7 4v9a4 4 0 0 0 4 4h5" />
        <path d="M7 10h7" />
        <circle cx="18" cy="18" r="1.6" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="12" cy="6" r="2.6" />
      <path d="M12 9v6" />
      <path d="M8 12h8" />
      <path d="M9 20l3-5 3 5" />
    </svg>
  );
}

export function HeroCrate({ tiles }: { tiles: Tile[] }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="cb-herocrate"
      initial={reduce ? false : { clipPath: "inset(44% 44% 44% 44% round 22px)", opacity: 0 }}
      animate={{ clipPath: "inset(0% 0% 0% 0% round 22px)", opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="cb-crate__stripe" aria-hidden="true" />
      <div className="cb-herocrate__load">
        {tiles.map((t, i) => (
          <motion.div
            key={t.label}
            className="cb-tile"
            initial={reduce ? false : { y: -46, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={
              reduce
                ? { duration: 0 }
                : { type: "spring", bounce: 0, duration: 0.45, delay: 0.52 + i * 0.15 }
            }
          >
            <span className="cb-tile__glyph">
              <Glyph icon={t.icon} />
            </span>
            <span className="cb-tile__label">{t.label}</span>
            <span className="cb-tile__check">Zkontrolováno</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
