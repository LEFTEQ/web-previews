import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EMAIL, PEOPLE } from "../data";
import { PhoneIcon } from "./Icons";

const NAV = [
  { href: "#cinnosti", label: "Činnosti" },
  { href: "#prehled", label: "Řez nabídkou" },
  { href: "#poptavka", label: "Poptávka" },
  { href: "#kontakty", label: "Kontakty" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const first = menuRef.current?.querySelector<HTMLElement>("a");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const boss = PEOPLE[0];

  return (
    <header
      ref={headerRef}
      data-site-header
      data-fixed-ui
      className="sticky top-0 z-50 border-b border-ink/15 bg-loess/95 backdrop-blur-sm"
    >
      <div className="relative mx-auto flex h-[60px] max-w-[1440px] items-center justify-between gap-3 px-4 md:h-[68px] md:px-10">
        <a href="#top" className="flex min-w-0 items-baseline gap-2" aria-label="ZVČ, s.r.o. – na začátek stránky">
          <span className="font-display wide-125 text-[26px] font-extrabold leading-none tracking-tight">ZVČ</span>
          <span className="font-mono text-[11px] uppercase">s.r.o.</span>
          <span className="hidden truncate font-mono text-[11px] uppercase tracking-[0.12em] text-ink/70 xl:inline">
            · Hradec Králové
          </span>
        </a>

        <nav aria-label="Hlavní navigace" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[15px] font-medium underline-offset-4 hover:underline">
              {n.label}
            </a>
          ))}
          <a
            href={boss.tel}
            className="tabular inline-flex items-center gap-2 whitespace-nowrap bg-hazard px-4 py-2.5 text-[15px] font-semibold text-ink hover:bg-[#ffc824]"
            aria-label={`Zavolat – ${boss.name}, ${boss.role}: ${boss.phone}`}
          >
            <PhoneIcon size={18} />
            {boss.phone}
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href={boss.tel}
            className="inline-flex h-11 w-11 items-center justify-center bg-hazard text-ink"
            aria-label={`Zavolat – ${boss.name}, ${boss.role}: ${boss.phone}`}
          >
            <PhoneIcon />
          </a>
          <button
            ref={btnRef}
            type="button"
            className="inline-flex h-11 shrink-0 items-center gap-2 border border-ink px-3 text-[15px] font-semibold"
            aria-expanded={open}
            aria-controls="mobilni-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
            Menu
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              ref={menuRef}
              id="mobilni-menu"
              key="menu"
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] } }}
              exit={{ opacity: 0, y: 0, scale: 0.99, transition: { duration: reduce ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] } }}
              style={{ transformOrigin: "top right" }}
              className="absolute inset-x-3 top-full mt-2 border border-ink bg-loess shadow-[0_12px_30px_rgba(31,33,36,0.18)] lg:hidden"
            >
              <nav aria-label="Mobilní navigace">
                <ul>
                  {NAV.map((n) => (
                    <li key={n.href} className="border-b border-ink/15">
                      <a href={n.href} onClick={() => setOpen(false)} className="block px-5 py-3.5 text-lg font-semibold">
                        {n.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="space-y-1 px-5 py-4 text-[15px]">
                {PEOPLE.map((p) => (
                  <p key={p.tel}>
                    {p.name}, {p.role}:{" "}
                    <a href={p.tel} className="tabular whitespace-nowrap font-semibold underline">
                      {p.phone}
                    </a>
                  </p>
                ))}
                <p>
                  E-mail:{" "}
                  <a href={`mailto:${EMAIL}`} className="font-semibold underline">
                    {EMAIL}
                  </a>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
