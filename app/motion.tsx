"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const STREAMS = [
  { color: "#1b5e8c", label: "Papír", num: "01", id: "band-hero" },
  { color: "#ef7d1a", label: "Plast", num: "02", id: "band-sluzby" },
  { color: "#2f7d54", label: "Sklo", num: "03", id: "band-onas" },
];

export function SortingSpine() {
  const [active, setActive] = useState(0);
  const [pillY, setPillY] = useState(0);
  const reduce = useReducedMotion();
  const tickRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const els = STREAMS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = els.indexOf(e.target as HTMLElement);
            if (i >= 0) setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = tickRefs.current[active];
    if (el) setPillY(el.offsetTop);
  }, [active]);

  const activeColor = STREAMS[active].color;

  return (
    <aside
      className="spine"
      aria-hidden="true"
      style={{ ["--active" as string]: activeColor }}
    >
      <div className="spine__inner">
        <span className="spine__brand">AVE</span>

        <div className="spine__head">
          <motion.span
            key={active}
            className="spine__headNum"
            initial={reduce ? false : { opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {STREAMS[active].num}
          </motion.span>
          <span className="spine__headLabel">Třídicí linka</span>
        </div>

        <div className="spine__track">
          <motion.span
            className="spine__pill"
            animate={{ y: pillY, backgroundColor: activeColor }}
            transition={
              reduce
                ? { duration: 0 }
                : { type: "spring", stiffness: 320, damping: 32 }
            }
          />
          {STREAMS.map((s, i) => (
            <div
              key={s.id}
              ref={(el) => {
                tickRefs.current[i] = el;
              }}
              className={"spine__tick" + (i === active ? " is-active" : "")}
            >
              <span className="spine__dot" style={{ background: s.color }} />
              <span className="spine__num">{s.num}</span>
              <span className="spine__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
