import { useEffect } from "react";

/**
 * Po přesunu fokusu (Tab) zkontroluje, zda aktivní prvek včetně obrysu
 * fokusu není schovaný pod pevnou hlavičkou nebo spodní kontaktní lištou,
 * a případně stránku posune do volné části obrazovky.
 */
export function useFocusClearance() {
  useEffect(() => {
    let raf = 0;
    const GAP = 16; // obrys 3 px + odsazení 3 px + rezerva

    const onFocusIn = (e: FocusEvent) => {
      const el = e.target;
      if (!(el instanceof HTMLElement) || el === document.body) return;
      if (el.closest("[data-fixed-bar]")) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return;
        const header = document.querySelector<HTMLElement>("[data-site-header]");
        const bar = document.querySelector<HTMLElement>("[data-bottom-bar]");
        const topLimit = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
        let bottomLimit = window.innerHeight;
        if (bar && getComputedStyle(bar).display !== "none") {
          bottomLimit = Math.min(bottomLimit, bar.getBoundingClientRect().top);
        }
        const behavior = "instant" as ScrollBehavior;
        if (r.top - GAP < topLimit) {
          window.scrollBy({ top: r.top - GAP - topLimit, left: 0, behavior });
        } else if (r.bottom + GAP > bottomLimit) {
          const delta = r.bottom + GAP - bottomLimit;
          const maxDelta = r.top - GAP - topLimit; // nikdy nevysuň horní hranu pod hlavičku
          window.scrollBy({ top: Math.min(delta, Math.max(0, maxDelta)), left: 0, behavior });
        }
      });
    };

    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      cancelAnimationFrame(raf);
    };
  }, []);
}
