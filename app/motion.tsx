"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";

export function HeroDescent() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const yRaw = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scale = reduce ? 1 : scaleRaw;
  const y = reduce ? 0 : yRaw;

  // The descent: overview -> the listing's ground point.
  const [lat, setLat] = useState("49.8500");
  const [lng, setLng] = useState("18.2000");

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const latV = 49.85 - (49.85 - 49.8092) * v;
    const lngV = 18.2 + (18.3446 - 18.2) * v;
    setLat(latV.toFixed(4));
    setLng(lngV.toFixed(4));
  });

  return (
    <section className="hero" ref={ref} aria-label="PRO REALITY — realitní kancelář Ostrava">
      <div className="hero-frame">
        <motion.div className="hero-map" style={{ scale, y }} aria-hidden="true" />

        <div className="hero-reticle" aria-hidden="true">
          <span className="rx" />
          <span className="ry" />
          <span className="ring" />
          <span className="dot" />
          <span className="br tl" />
          <span className="br tr" />
          <span className="br bl" />
          <span className="br br2" />
        </div>

        <div className="hero-topbar">
          <span className="wordmark">
            PRO<span className="rk" aria-hidden="true" /><span className="sub">REALITY</span>
          </span>
          <span className="est">EST. 1997 · OSTRAVA</span>
        </div>

        <div className="hero-inner">
          <p className="hero-eyebrow">REALITNÍ KANCELÁŘ · OSTRAVA A OKOLÍ</p>
          <h1 className="hero-title">
            Máme <span className="brass">rozhled</span>
            <br />
            <span className="thin">od roku 1997</span>
          </h1>
          <p className="hero-lead">
            Od ptačí perspektivy až po detail kupní smlouvy — kompletní realitní
            servis pro bydlení i podnikání. Sesuňte se s námi z nadhledu do
            konkrétní nabídky.
          </p>
          <div className="hero-tag">
            {lat}°N {lng}°E <span className="brass">·</span> OSTRAVA
          </div>
          <br />
          <a className="hero-cta" href="#nabidka">
            Prohlédnout nabídku
          </a>
        </div>

        <p className="hero-scrollhint">↓ SESUŇTE SE K DETAILU</p>
      </div>
    </section>
  );
}
