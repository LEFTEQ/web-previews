import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { COMPANY, EMAIL, NAV, PHONES } from '../data.js';
import { MailIcon, PhoneIcon } from './Icons.jsx';

export function ConceptStrip() {
  return (
    <div className="bg-pond px-4 py-2 text-center text-xs text-stake sm:text-sm">
      <p>
        <strong>Neoficiální koncept redesignu</strong> webu {COMPANY} — nejde o oficiální stránky firmy.
      </p>
    </div>
  );
}

function Wordmark() {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-2 text-loam no-underline" aria-label="V - stav group, na začátek stránky">
      <span aria-hidden="true" className="grid h-8 w-6 shrink-0 grid-rows-3 overflow-hidden rounded-sm border-2 border-loam">
        <span className="bg-water" />
        <span className="bg-sewer" />
        <span className="bg-cable" />
      </span>
      <span aria-hidden="true" className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight">V-STAV</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-loam/75">group</span>
      </span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    const onDown = (e) => {
      if (panelRef.current?.contains(e.target) || btnRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const ease = [0.22, 1, 0.36, 1];

  return (
    <header data-fixed-top="" className="sticky top-0 z-40 border-b border-loam/15 bg-concrete/95 backdrop-blur">
      <div className="relative mx-auto flex h-[var(--header-h)] max-w-7xl items-center gap-2 px-4 sm:px-6 lg:pl-22">
        <Wordmark />

        <nav aria-label="Hlavní navigace" className="ml-6 hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded px-3 py-2 font-medium text-loam no-underline hover:bg-loam/10">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <a href={PHONES[0].href} className="btn btn-cta hidden !min-h-11 lg:inline-flex">
            <PhoneIcon />
            <span className="whitespace-nowrap font-mono">{PHONES[0].label}</span>
          </a>
          <a
            href={PHONES[0].href}
            className="grid h-11 w-11 place-items-center rounded-lg bg-hydra text-loam lg:hidden"
            aria-label={`Zavolat ${PHONES[0].full}`}
          >
            <PhoneIcon />
          </a>
          <button
            ref={btnRef}
            type="button"
            className="flex h-11 items-center gap-2 rounded-lg border-2 border-loam px-3 font-semibold text-loam lg:hidden"
            aria-expanded={open}
            aria-controls="mobilni-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h14" />
              )}
            </svg>
            Menu
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="menu"
              id="mobilni-menu"
              ref={panelRef}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: reduce ? 0 : 0.25, ease } }}
              exit={reduce ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, scale: 0.99, transition: { duration: 0.15, ease } }}
              style={{ transformOrigin: 'top right' }}
              className="absolute inset-x-3 top-full mt-2 rounded-xl bg-stake p-3 shadow-xl ring-1 ring-loam/15 lg:hidden"
            >
              <nav aria-label="Mobilní navigace">
                <ul className="grid">
                  {NAV.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-3 text-lg font-semibold text-loam no-underline hover:bg-loam/10"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-2 grid gap-1 border-t border-loam/15 pt-3 text-loam">
                {PHONES.map((p) => (
                  <a key={p.href} href={p.href} className="flex items-center gap-2 rounded-lg px-3 py-2 font-mono">
                    <PhoneIcon className="h-4 w-4" /> {p.full}
                  </a>
                ))}
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 rounded-lg px-3 py-2 font-mono">
                  <MailIcon className="h-4 w-4" /> {EMAIL}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export function ContactBar() {
  return (
    <div
      data-fixed-bottom=""
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] gap-2 bg-loam p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] lg:hidden"
    >
      <a href={PHONES[0].href} className="btn btn-cta !min-h-12 min-w-0">
        <PhoneIcon />
        <span className="truncate">
          Zavolat <span className="font-mono">{PHONES[0].label}</span>
        </span>
      </a>
      <a href={`mailto:${EMAIL}`} className="btn btn-ghost-dark !min-h-12" aria-label={`Napsat e-mail na ${EMAIL}`}>
        <MailIcon />
        E-mail
      </a>
    </div>
  );
}
