"use client";

import { motion, useReducedMotion } from "motion/react";

// The signature moment: the hero headline is laid like pavers into a
// running-bond. Each unit drops and seats one row at a time.
const ROWS: string[] = ["KVALITA", "NA BETON"];

export function LayingHeadline() {
  const reduce = useReducedMotion();

  return (
    <div className="headline" role="heading" aria-level={1} aria-label="Kvalita na beton">
      {ROWS.map((row, ri) => (
        <div className="headline-row" key={ri}>
          {row.split("").map((ch, ci) => {
            const isSpace = ch === " ";
            // 120ms per row, ~55ms within the row: pavers seat left-to-right, row by row.
            const delay = ri * 0.12 + ci * 0.055;
            return (
              <motion.span
                key={ci}
                aria-hidden="true"
                className={isSpace ? "paver paver--gap" : "paver"}
                initial={reduce ? false : { y: -34, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { delay, type: "spring", stiffness: 460, damping: 24, mass: 0.7 }
                }
              >
                {isSpace ? "" : ch}
              </motion.span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
