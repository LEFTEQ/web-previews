"use client";

import { motion, useReducedMotion } from "motion/react";

type Service = {
  n: string;
  code: string;
  spec: string;
  title: string;
  desc: string;
  dim: string;
};

export function ServiceWall({ services }: { services: Service[] }) {
  const reduce = useReducedMotion();
  const total = services.length;

  return (
    <ul className="ac-wall" aria-label="Nabízené stavební práce">
      {services.map((s, i) => {
        // Wall assembles bottom-up: last blocks (visually lower) settle first.
        const delay = reduce ? 0 : (total - 1 - i) * 0.08;
        return (
          <motion.li
            key={s.code}
            className="ac-block"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay, ease: [0.16, 0.8, 0.3, 1] }}
          >
            <div className="ac-block__top">
              <span className="ac-block__n">{s.n}</span>
              <span className="ac-block__code">{s.code}</span>
            </div>
            <h3 className="ac-block__title">{s.title}</h3>
            <p className="ac-block__desc">{s.desc}</p>
            <div className="ac-block__foot">
              <span className="ac-block__spec">{s.spec}</span>
              <div className="ac-block__dim" aria-hidden="true">
                <span className="ac-block__tick" />
                <span className="ac-block__line" />
                <span className="ac-block__dimlabel">{s.dim}</span>
                <span className="ac-block__tick" />
              </div>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}
