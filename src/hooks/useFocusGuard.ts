import { useEffect } from "react";

/**
 * Keeps the keyboard-focused element out from under the sticky header
 * and the fixed mobile call bar (backs up scroll-padding / scroll-margin).
 */
export function useFocusGuard() {
  useEffect(() => {
    let raf = 0;
    const onFocusIn = (e: FocusEvent) => {
      const t = e.target;
      if (!(t instanceof HTMLElement)) return;
      if (t.closest("[data-fixed-ui]")) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = t.getBoundingClientRect();
        const header = document.querySelector<HTMLElement>("[data-site-header]");
        const bar = document.querySelector<HTMLElement>("[data-bottom-bar]");
        const topLimit = Math.max(0, header ? header.getBoundingClientRect().bottom : 0) + 12;
        const barVisible = bar && getComputedStyle(bar).display !== "none";
        const bottomLimit = window.innerHeight - (barVisible && bar ? bar.offsetHeight : 0) - 12;
        if (r.bottom > bottomLimit) {
          window.scrollBy({ top: r.bottom - bottomLimit, behavior: "auto" });
        } else if (r.top < topLimit) {
          window.scrollBy({ top: r.top - topLimit, behavior: "auto" });
        }
      });
    };
    document.addEventListener("focusin", onFocusIn);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, []);
}
