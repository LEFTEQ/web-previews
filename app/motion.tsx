"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const WIDTHS = [175, 185, 195, 205, 215, 225, 235, 245, 255];
const PROFILES = [40, 45, 50, 55, 60, 65];
const RIMS = [15, 16, 17, 18, 19, 20];
const SEASONS = ["Letní", "Zimní", "Celoroční"];

function Roll({ value }: { value: string }) {
  const reduce = useReducedMotion();
  return (
    <span className="roll">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={reduce ? { opacity: 0 } : { y: "-55%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: "55%", opacity: 0 }}
          transition={
            reduce
              ? { duration: 0.12 }
              : { type: "spring", stiffness: 520, damping: 26, mass: 0.6 }
          }
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

type Row = {
  label: string;
  values: (number | string)[];
  active: number | string | null;
  set: (v: number | string) => void;
  suffix?: string;
};

function Chips({ label, values, active, set, suffix }: Row) {
  return (
    <div className="field">
      <span className="field__label">{label}</span>
      <div className="chips" role="group" aria-label={label}>
        {values.map((v) => (
          <button
            key={String(v)}
            type="button"
            className="chip"
            aria-pressed={active === v}
            onClick={() => set(v)}
          >
            {v}
            {suffix}
          </button>
        ))}
      </div>
    </div>
  );
}

export function SizeSelector() {
  const [width, setWidth] = useState<number | null>(null);
  const [profile, setProfile] = useState<number | null>(null);
  const [rim, setRim] = useState<number | null>(null);
  const [season, setSeason] = useState<string | null>(null);

  const valid =
    width !== null && profile !== null && rim !== null && season !== null;

  return (
    <div className="selector">
      <div className="selector__head">
        <h2>Sestavte rozměr</h2>
        <span className="selector__hint">jako z bočnice</span>
      </div>

      <Chips
        label="Šířka"
        values={WIDTHS}
        active={width}
        set={(v) => setWidth(v as number)}
      />
      <Chips
        label="Profil"
        values={PROFILES}
        active={profile}
        set={(v) => setProfile(v as number)}
      />
      <Chips
        label="Ráfek"
        values={RIMS}
        active={rim}
        set={(v) => setRim(v as number)}
        suffix={'"'}
      />
      <Chips
        label="Sezóna"
        values={SEASONS}
        active={season}
        set={(v) => setSeason(v as string)}
      />

      <div className={valid ? "stamp locked" : "stamp"}>
        <div className="stamp__top">
          <span className="stamp__title">Rozměr na bočnici</span>
          <span className="stamp__state">
            {valid ? "● sestaveno" : "○ vyberte vše"}
          </span>
        </div>

        <div className="stamp__code" aria-live="polite">
          <Roll value={width !== null ? String(width) : "—"} />
          <span className="stamp__sep">/</span>
          <Roll value={profile !== null ? String(profile) : "—"} />
          <span className="stamp__sep">&nbsp;R</span>
          <Roll value={rim !== null ? String(rim) : "—"} />
        </div>

        <div className="stamp__meta">
          <span className="stamp__pill stamp__pill--active">91V</span>
          <span className="stamp__pill">{season ?? "sezóna"}</span>
        </div>

        <a
          className="stamp__cta"
          href="tel:+420495221555"
          aria-disabled={!valid}
          tabIndex={valid ? 0 : -1}
        >
          {valid
            ? `Zavolat a objednat ${width}/${profile} R${rim}`
            : "Nejdřív sestavte rozměr"}
        </a>
      </div>
    </div>
  );
}
