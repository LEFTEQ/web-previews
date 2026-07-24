"use client";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const EASE = [0.4, 0, 0.2, 1] as const;

export function HeroDawn() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (reduce) {
      setPhase(1);
      return;
    }
    const t = setTimeout(() => setPhase(1), 1850);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <>
      <motion.div
        className="hero__wash"
        aria-hidden="true"
        initial={reduce ? false : { backgroundColor: "#1c2540", opacity: 0.95 }}
        animate={{ backgroundColor: "#f2ece0", opacity: 0.34 }}
        transition={{ duration: 2.6, ease: EASE }}
      />

      <svg className="hero__lame" viewBox="0 0 1000 320" preserveAspectRatio="none" aria-hidden="true">
        <motion.path
          d="M30 268 C 280 150, 560 120, 970 58"
          fill="none"
          stroke="#d9622e"
          strokeWidth="7"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, ease: EASE }}
        />
      </svg>

      <motion.div
        className="hero__inner"
        initial={reduce ? false : { color: "#f4eee2" }}
        animate={{ color: "#1c2540" }}
        transition={{ duration: 2.6, ease: EASE }}
      >
        <p className="hero__eyebrow">Praha · od tří hodin ráno</p>

        <h1 className="hero__title">
          <AnimatePresence mode="wait">
            {phase === 0 ? (
              <motion.span
                key="a"
                className="hero__lines"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                Zatímco ještě spíte,<br />naši pekaři už<br />připravují těsto…
              </motion.span>
            ) : (
              <motion.span
                key="b"
                className="hero__lines"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                …první voňavé<br />a křupavé<br />bochníky chleba.
              </motion.span>
            )}
          </AnimatePresence>
        </h1>

        <p className="hero__lead">
          Sedm pekařství po Praze. Pečeme přímo před vašima očima — kvásek kynutý přes noc, chléb nařezaný rukou.
        </p>

        <a className="pojd pojd--hero" href="#nabidka">
          POJĎTE DÁL
          <svg className="pojd__cut" viewBox="0 0 130 12" aria-hidden="true">
            <path pathLength={1} d="M3 8 C 34 2, 92 2, 127 6" />
          </svg>
        </a>
      </motion.div>
    </>
  );
}
