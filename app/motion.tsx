"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const STATES = [
  { season: "V létě", verb: "CHLADÍ", color: "#3fa9c9" },
  { season: "V zimě", verb: "TOPÍ", color: "#b5703a" },
];

const SLATS = 18;

export function HeroThermal() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % STATES.length), 3400);
    return () => clearInterval(t);
  }, [reduce]);

  const s = STATES[i];

  if (reduce) {
    return (
      <div className="thermal" aria-label="V zimě topí, v létě chladí">
        <div className="thermal__lead">
          <span className="thermal__season">Celoročně</span>
          <span className="thermal__verb" style={{ color: "#3fa9c9" }}>
            CHLADÍ&nbsp;i&nbsp;TOPÍ
          </span>
        </div>
        <div className="louvrebar" aria-hidden="true">
          {Array.from({ length: SLATS }).map((_, k) => (
            <span
              key={k}
              className="louvrebar__slat"
              style={{
                background: k < SLATS / 2 ? "#3fa9c9" : "#b5703a",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="thermal"
      aria-label="V zimě topí, v létě chladí"
      aria-live="off"
    >
      <div className="thermal__lead">
        <span className="thermal__season" aria-hidden="true">
          {s.season}
        </span>
        <span className="thermal__verb" aria-hidden="true">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={s.verb}
              initial={{ y: "0.5em", opacity: 0 }}
              animate={{ y: 0, opacity: 1, color: s.color }}
              exit={{ y: "-0.5em", opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "inline-block", color: s.color }}
            >
              {s.verb}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>

      <div className="louvrebar" aria-hidden="true">
        {Array.from({ length: SLATS }).map((_, k) => (
          <motion.span
            key={k}
            className="louvrebar__slat"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1, backgroundColor: s.color }}
            transition={{
              scaleX: { delay: k * 0.03, duration: 0.5, ease: "easeOut" },
              backgroundColor: { delay: k * 0.03, duration: 0.5 },
            }}
          />
        ))}
      </div>
    </div>
  );
}
