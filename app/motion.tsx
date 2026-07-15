"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

type Props = { channel: string; name: string; desc: string };

export function ServiceFeed({ channel, name, desc }: Props) {
  const reduce = useReducedMotion();
  const [locked, setLocked] = useState(!!reduce);
  const s = reduce ? 0 : 12;

  const variant = (x: number, y: number) => ({
    idle: { x, y, opacity: reduce ? 1 : 0.25 },
    lock: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  });

  return (
    <motion.article
      className="feed"
      initial="idle"
      whileInView="lock"
      viewport={{ once: true, margin: "-12% 0px" }}
      onViewportEnter={() => setLocked(true)}
    >
      <motion.span className="corner tl" variants={variant(-s, -s)} aria-hidden="true" />
      <motion.span className="corner tr" variants={variant(s, -s)} aria-hidden="true" />
      <motion.span className="corner bl" variants={variant(-s, s)} aria-hidden="true" />
      <motion.span className="corner br" variants={variant(s, s)} aria-hidden="true" />

      <div className="feed__bar">
        <span className="feed__ch">CH {channel}</span>
        <span className="feed__tag">{locked ? name : "ZAOSTŘUJI…"}</span>
        <span className="feed__rec">
          <i />REC
        </span>
      </div>

      <h3 className="feed__title">{name}</h3>
      <p className="feed__desc">{desc}</p>
    </motion.article>
  );
}
