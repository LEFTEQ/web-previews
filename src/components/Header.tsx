import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PHONES, EMAIL } from "../data";
import { PhoneIcon, LearnChevron } from "./Icons";

const NAV = [
  { id: "sluzby", label: "Služby" },
  { id: "nahled", label: "Náhled barvy" },
  { id: "poptavka", label: "Poptávka" },
  { id: "kontakt", label: "Kontakt" },
];

const LAYERS = [
  { id: "krytiny", label: "Střešní krytiny" },
  { id: "krovy", label: "Krovy" },
  { id: "okna", label: "Střešní okna" },
  { id: "okapy", label: "Okapové systémy" },
  { id: "prislusenstvi", label: "Doplňky" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !btnRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-antracit/15 bg-titan/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#obsah" className="min-w-0 leading-none" aria-label="ŠICHNÁREK – klempířství Ostrava, na začátek stránky">
          <span className="block font-display text-xl font-extrabold tracking-tight text-antracit sm:text-2xl">
            ŠICHNÁREK
          </span>
          <span className="mt-1 block font-mono text-[11px] text-ocel">klempířství · Ostrava</span>
        </a>

        <nav aria-label="Hlavní navigace" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  aria-current={active === n.id ? "true" : undefined}
                  className="nav-link t-learn"
                >
                  {n.label}
                  <LearnChevron />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={PHONES[0].href}
            className="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-sm bg-cihla px-3 font-display text-sm font-bold text-white hover:bg-cihla-dark"
            aria-label={`Zavolat ${PHONES[0].label}`}
          >
            <PhoneIcon />
            <span className="hidden whitespace-nowrap sm:inline">{PHONES[0].label}</span>
          </a>
          <button
            ref={btnRef}
            type="button"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-sm border border-antracit px-3 font-display text-sm font-bold uppercase tracking-wide lg:hidden"
            aria-expanded={open}
            aria-controls="mobilni-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              {open ? <path d="M4 4l10 10M14 4L4 14" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
            </svg>
            Menu
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobilni-menu"
            ref={panelRef}
            className="absolute inset-x-0 top-full border-b border-antracit/20 bg-titan shadow-lg lg:hidden"
            style={{ transformOrigin: "top right" }}
            initial={reduce ? false : { opacity: 0, scale: 0.97, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ opacity: 0, scale: reduce ? 1 : 0.99, transition: { duration: reduce ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] } }}
          >
            <nav aria-label="Mobilní navigace" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <ul className="grid gap-1">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} onClick={close} className="flex min-h-11 items-center justify-between border-b border-antracit/10 font-display text-lg font-bold">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ocel">Vrstvy střechy</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {LAYERS.map((l) => (
                  <li key={l.id}>
                    <a href={`#${l.id}`} onClick={close} className="inline-flex min-h-10 items-center rounded-sm border border-antracit/30 px-3 text-sm">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {PHONES.map((p) => (
                  <a key={p.href} href={p.href} className="btn btn-primary">
                    <PhoneIcon /> {p.label}
                  </a>
                ))}
                <a href={`mailto:${EMAIL}`} className="btn btn-secondary break-all">
                  {EMAIL}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
