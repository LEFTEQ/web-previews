"use client";

import { motion, useReducedMotion } from "motion/react";

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function Reel({ value, delay }: { value: number; delay: number }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span className="odo-slot" aria-hidden="true">
        <span className="odo-reel" style={{ transform: `translateY(${-value}em)` }}>
          {DIGITS.map((d) => (
            <span className="odo-digit" key={d}>
              {d}
            </span>
          ))}
        </span>
      </span>
    );
  }

  return (
    <span className="odo-slot" aria-hidden="true">
      <motion.span
        className="odo-reel"
        initial={{ y: "0em" }}
        animate={{ y: `${-value}em` }}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {DIGITS.map((d) => (
          <span className="odo-digit" key={d}>
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export function Odometer({ value }: { value: string }) {
  const digits = value.split("").map((c) => parseInt(c, 10));
  return (
    <span className="odo" role="img" aria-label={`${value} let`}>
      {digits.map((d, i) => (
        <Reel key={i} value={d} delay={0.15 + i * 0.12} />
      ))}
    </span>
  );
}
