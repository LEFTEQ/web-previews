"use client";

import { animate, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const FINAL_KM = 138;
const FINAL_TOLL = 214;

export function HeroBoard() {
  const reduce = useReducedMotion();
  const [km, setKm] = useState(reduce ? FINAL_KM : 0);
  const [toll, setToll] = useState(reduce ? FINAL_TOLL : 0);
  const [matched, setMatched] = useState(!!reduce);

  useEffect(() => {
    if (reduce) {
      setKm(FINAL_KM);
      setToll(FINAL_TOLL);
      setMatched(true);
      return;
    }
    const c1 = animate(0, FINAL_KM, {
      duration: 0.75,
      delay: 0.9,
      ease: "easeOut",
      onUpdate: (v) => setKm(Math.round(v)),
    });
    const c2 = animate(0, FINAL_TOLL, {
      duration: 0.75,
      delay: 0.9,
      ease: "easeOut",
      onUpdate: (v) => setToll(Math.round(v)),
    });
    const t = window.setTimeout(() => setMatched(true), 1750);
    return () => {
      c1.stop();
      c2.stop();
      window.clearTimeout(t);
    };
  }, [reduce]);

  const dotIn = reduce
    ? {}
    : { initial: { opacity: 0, scale: 0.3 }, animate: { opacity: 1, scale: 1 } };

  return (
    <div className="board" role="img" aria-label="Ukázka spárování v databance: Hradec Králové – Ostrava, 138 km, 4 tuny, mýto 214 Kč.">
      <div className="board-head">
        <span>Přepravní databanka · živá nabídka</span>
        <span className={matched ? "board-status matched" : "board-status"}>
          <span className="board-blip" />
          {matched ? "SPÁROVÁNO" : "PÁRUJI…"}
        </span>
      </div>

      <div className="board-body">
        <div className="board-ends">
          <span>Volný náklad</span>
          <span>Volné vozidlo</span>
        </div>

        <div className="board-route">
          <motion.span
            className="node node-a big"
            {...dotIn}
            transition={{ duration: 0.3, delay: 0.15 }}
          />
          <span className="board-line-track">
            <motion.span
              className="board-line"
              initial={reduce ? undefined : { width: "0%" }}
              animate={reduce ? undefined : { width: "100%" }}
              transition={{ duration: 0.7, delay: 0.45, ease: "easeInOut" }}
            />
          </span>
          <motion.span
            className="node node-b big"
            {...dotIn}
            transition={{ duration: 0.3, delay: 0.4 }}
          />
        </div>

        <div className="board-cities">
          <span>Hradec Králové</span>
          <span>Ostrava</span>
        </div>

        <motion.div
          className="board-readout"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.85 }}
        >
          <span className="ro-num">{km}</span> km
          <span className="ro-dot">·</span>
          <span className="ro-num">4</span> t
          <span className="ro-dot">·</span>
          mýto <span className="ro-num">{toll}</span> Kč
        </motion.div>
      </div>
    </div>
  );
}
