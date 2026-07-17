"use client";

import { motion, useReducedMotion } from "motion/react";

const HOURS = [
  { d: "Pondělí", h: "09:00\u201321:00", js: 1 },
  { d: "Úterý", h: "09:00\u201321:00", js: 2 },
  { d: "Středa", h: "09:00\u201321:00", js: 3 },
  { d: "Čtvrtek", h: "09:00\u201321:00", js: 4 },
  { d: "Pátek", h: "09:00\u201321:00", js: 5 },
  { d: "Sobota", h: "09:00\u201321:00", js: 6 },
  { d: "Neděle", h: "10:00\u201320:00", js: 0 },
];

export function OpeningHours() {
  const reduce = useReducedMotion();
  const today = new Date().getDay();

  return (
    <ul className="hours" aria-label="Otevírací doba prodejny">
      {HOURS.map((row) => {
        const isToday = row.js === today;
        return (
          <motion.li
            key={row.d}
            className={"hours__row" + (isToday ? " hours__row--today" : "")}
            initial={
              reduce || !isToday ? false : { y: 8, backgroundColor: "rgba(214,50,28,0)" }
            }
            animate={isToday ? { y: 0, backgroundColor: "rgba(214,50,28,1)" } : undefined}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <span className="hours__day">
              {row.d}
              {isToday && <span className="hours__now">&nbsp;· dnes</span>}
            </span>
            <span className="hours__time">{row.h}</span>
          </motion.li>
        );
      })}
    </ul>
  );
}
