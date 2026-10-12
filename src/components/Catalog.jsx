import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CATALOG, GROUPS, GROUP_COLOR } from "../data.js";
import { useInquiry } from "../inquiry.jsx";
import { CheckMark } from "./Icons.jsx";

const EASE = [0.22, 1, 0.36, 1];

function FilterTabs({ active, onChange }) {
  const pillRef = useRef(null);
  const tabRefs = useRef([]);
  const activeRef = useRef(active);
  const firstRef = useRef(true);

  const moveTo = useCallback((idx, animate) => {
    const tab = tabRefs.current[idx];
    const pill = pillRef.current;
    if (!tab || !pill) return;
    if (!animate) {
      const prev = pill.style.transition;
      pill.style.transition = "none";
      pill.style.transform = `translateX(${tab.offsetLeft}px)`;
      pill.style.width = `${tab.offsetWidth}px`;
      void pill.offsetWidth;
      pill.style.transition = prev;
    } else {
      pill.style.transform = `translateX(${tab.offsetLeft}px)`;
      pill.style.width = `${tab.offsetWidth}px`;
    }
  }, []);

  useEffect(() => {
    activeRef.current = active;
    const idx = GROUPS.findIndex((g) => g.id === active);
    moveTo(idx, !firstRef.current);
    firstRef.current = false;
  }, [active, moveTo]);

  useEffect(() => {
    let cancelled = false;
    const snap = () => moveTo(GROUPS.findIndex((g) => g.id === activeRef.current), false);
    window.addEventListener("resize", snap);
    document.fonts?.ready.then(() => {
      if (!cancelled) snap();
    });
    return () => {
      cancelled = true;
      window.removeEventListener("resize", snap);
    };
  }, [moveTo]);

  const onKeyDown = (e, i) => {
    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % GROUPS.length;
    if (e.key === "ArrowLeft") next = (i - 1 + GROUPS.length) % GROUPS.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = GROUPS.length - 1;
    if (next === null) return;
    e.preventDefault();
    onChange(GROUPS[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="t-tabs" role="tablist" aria-label="Filtr nabídky">
      <span className="t-tabs-pill" ref={pillRef} aria-hidden="true" />
      {GROUPS.map((g, i) => {
        const count = g.id === "vse" ? CATALOG.length : CATALOG.filter((c) => c.group === g.id).length;
        const selected = g.id === active;
        return (
          <button
            key={g.id}
            ref={(el) => (tabRefs.current[i] = el)}
            id={`tab-${g.id}`}
            type="button"
            role="tab"
            className="t-tab"
            aria-selected={selected}
            aria-controls="nabidka-panel"
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(g.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {g.label} <span className="tab-count">{count}</span>
          </button>
        );
      })}
    </div>
  );
}

function CrateCard({ item }) {
  const { has, toggle } = useInquiry();
  const inCart = has(item.id);
  return (
    <article className="crate" style={{ "--tag": GROUP_COLOR[item.group] }}>
      <div className="crate-tag">
        <span className="crate-code">{item.id}</span>
        <span aria-hidden="true">·</span>
        <span className="crate-stencil">{item.name}</span>
        <span className="t-success-check tag-check" data-state={inCart ? "in" : "out"} aria-hidden="true">
          <CheckMark />
        </span>
      </div>
      <h3 className="crate-title">{item.name}</h3>
      <p className="crate-text">{item.text}</p>
      <button
        type="button"
        className={`btn btn-sm ${inCart ? "btn-done" : "btn-primary"}`}
        aria-pressed={inCart}
        onClick={() => toggle(item.id)}
      >
        {inCart ? "V poptávce – odebrat" : "Přidat do poptávky"}
        <span className="sr-only">: {item.name}</span>
      </button>
    </article>
  );
}

export default function Catalog() {
  const [group, setGroup] = useState("vse");
  const reduce = useReducedMotion();
  const visible = group === "vse" ? CATALOG : CATALOG.filter((c) => c.group === group);

  return (
    <section id="nabidka" className="catalog" aria-labelledby="nabidka-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Nabídka</p>
          <h2 id="nabidka-title" className="section-title">
            Co pro akci potřebujete?
          </h2>
          <p className="section-lead">
            Každá položka má vlastní štítek. Přidejte do poptávky vše, co vás zajímá – podrobnosti doplníte
            v e-mailu nebo po telefonu.
          </p>
        </div>

        <div className="filter-rail">
          <FilterTabs active={group} onChange={setGroup} />
        </div>

        <div id="nabidka-panel" role="tabpanel" aria-labelledby={`tab-${group}`}>
          <motion.ul className="crate-grid" layout={!reduce}>
            <AnimatePresence initial={false} mode="popLayout">
              {visible.map((item) => (
                <motion.li
                  key={item.id}
                  layout={!reduce}
                  initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: reduce ? 0 : 8, transition: { duration: reduce ? 0 : 0.15, ease: EASE } }}
                  transition={{ duration: reduce ? 0 : 0.25, ease: EASE }}
                >
                  <CrateCard item={item} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
