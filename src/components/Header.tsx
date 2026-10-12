import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MAIN_PHONE, NAV, PEOPLE } from "../data";
import { PhoneIcon } from "./Icons";

const smoothOut = [0.22, 1, 0.36, 1] as const;

export function Wordmark() {
  return (
    <span className="font-display text-[1.2rem] font-normal tracking-tight text-grafit sm:text-[1.35rem]">
      Parket<span className="text-orech">&amp;</span>pandomo
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

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
      if (!menuRef.current?.contains(t) && !btnRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <header data-site-header data-fixed-bar className="site-header sticky top-0 z-40">
      <div className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-2 px-4 sm:px-6 lg:px-10">
        <a href="#obsah" className="min-w-0 truncate rounded-sm" aria-label="Parket&pandomo – na začátek stránky">
          <Wordmark />
        </a>

        <nav aria-label="Hlavní navigace" className="hidden xl:block">
          <ul className="flex items-center gap-6 text-[0.95rem] font-medium text-beton">
            {NAV.map((n) => (
              <li key={n.href}>
                <a className="nav-link" href={n.href}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`tel:${MAIN_PHONE.tel}`}
            className="btn-primary hidden xl:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {MAIN_PHONE.display}
          </a>
          <a
            href={`tel:${MAIN_PHONE.tel}`}
            className="icon-btn xl:hidden"
            aria-label={`Zavolat do showroomu: ${MAIN_PHONE.display}`}
          >
            <PhoneIcon />
          </a>
          <button
            ref={btnRef}
            type="button"
            className="menu-btn xl:hidden"
            aria-expanded={open}
            aria-controls="mobilni-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Zavřít" : "Menu"}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              ref={menuRef}
              id="mobilni-menu"
              aria-label="Menu"
              className="mobile-menu absolute right-3 top-full mt-2 w-[min(22rem,calc(100vw-1.5rem))] xl:hidden"
              style={{ transformOrigin: "top right" }}
              initial={{ opacity: 0, scale: 0.97, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: smoothOut } }}
              exit={{ opacity: 0, scale: 0.99, transition: { duration: 0.15, ease: smoothOut } }}
            >
              <ul className="flex flex-col">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="block rounded-sm px-3 py-2.5 font-display text-xl text-grafit hover:bg-sterka/60"
                      onClick={() => setOpen(false)}
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 border-t border-beton/15 pt-3">
                <p className="label px-3">Telefon</p>
                {PEOPLE.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="block rounded-sm px-3 py-2 text-beton hover:bg-sterka/60">
                    <span className="block text-sm">{p.name}</span>
                    <span className="font-medium text-orech">{p.display}</span>
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
