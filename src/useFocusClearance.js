import { useEffect } from 'react';

/**
 * Zajistí, že prvek aktivní při Tab nikdy nezůstane pod pevnou hlavičkou
 * ani pod spodní kontaktní lištou (včetně rámečku fokusu). Doplňuje
 * scroll-padding / scroll-margin v CSS přesným posunem do volné části viewportu.
 */
export function useFocusClearance() {
  useEffect(() => {
    let raf = 0;
    const GAP = 18; // rezerva pro focus outline (3px + offset 3px) a vzduch

    const scrollByInstant = (delta) => {
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollBy(0, delta);
      root.style.scrollBehavior = prev;
    };

    const ensureVisible = (el) => {
      if (!(el instanceof HTMLElement) || el === document.body) return;
      if (el.closest('[data-fixed-top],[data-fixed-bottom]')) return;
      const r = el.getBoundingClientRect();
      if (!r.width && !r.height) return;

      const header = document.querySelector('[data-fixed-top]');
      const top = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;

      const vv = window.visualViewport;
      let bottom = vv ? vv.offsetTop + vv.height : window.innerHeight;
      const bar = document.querySelector('[data-fixed-bottom]');
      if (bar && getComputedStyle(bar).display !== 'none') {
        bottom = Math.min(bottom, bar.getBoundingClientRect().top);
      }

      const avail = bottom - top - GAP * 2;
      let delta = 0;
      if (r.height > avail || r.top < top + GAP) delta = r.top - (top + GAP);
      else if (r.bottom > bottom - GAP) delta = r.bottom - (bottom - GAP);
      if (Math.abs(delta) > 1) scrollByInstant(delta);
    };

    const schedule = (el) => {
      cancelAnimationFrame(raf);
      // počkáme, až prohlížeč dokončí vlastní posun po fokusu
      raf = requestAnimationFrame(() => ensureVisible(el));
    };

    const onFocusIn = (e) => schedule(e.target);
    const onViewport = () => schedule(document.activeElement);

    document.addEventListener('focusin', onFocusIn);
    window.visualViewport?.addEventListener('resize', onViewport);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('focusin', onFocusIn);
      window.visualViewport?.removeEventListener('resize', onViewport);
    };
  }, []);
}
