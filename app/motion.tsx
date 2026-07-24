"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const LINES = [
  { cargo: "POTRAVINY", dest: "ČESKÉ BUDĚJOVICE" },
  { cargo: "PAPÍROVÉ ROLE", dest: "EU" },
  { cargo: "STAVEBNÍ PRVKY", dest: "CZ" },
];

// flip mechanically through the freight range, then settle on the local run
const SEQ = [1, 2, 0, 1, 2, 0];

const FLIP = {
  initial: { rotateX: -90, opacity: 0 },
  animate: { rotateX: 0, opacity: 1 },
  transition: { duration: 0.34, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] },
};

export function DispatchBoard() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    let step = 0;
    const id = setInterval(() => {
      step += 1;
      if (step >= SEQ.length) {
        window.clearInterval(id);
        return;
      }
      setI(SEQ[step]);
    }, 940);
    return () => window.clearInterval(id);
  }, [reduce]);

  const line = LINES[i];

  return (
    <div className="mf-board" aria-hidden="true">
      <div className="mf-board-row">
        <span className="mf-board-lbl">NÁKLAD</span>
        <span className="mf-flap">
          {reduce ? (
            <span className="mf-flap-face">{line.cargo}</span>
          ) : (
            <motion.span key={"c" + i} className="mf-flap-face" {...FLIP}>
              {line.cargo}
            </motion.span>
          )}
        </span>
      </div>
      <div className="mf-board-row">
        <span className="mf-board-lbl">SMĚR</span>
        <span className="mf-flap">
          {reduce ? (
            <span className="mf-flap-face">{line.dest}</span>
          ) : (
            <motion.span key={"d" + i} className="mf-flap-face" {...FLIP}>
              {line.dest}
            </motion.span>
          )}
        </span>
      </div>
    </div>
  );
}
