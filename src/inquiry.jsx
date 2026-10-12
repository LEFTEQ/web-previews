import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { CATALOG } from "./data.js";

const Ctx = createContext(null);
const KEY = "gemare-poptavka-v1";

export function InquiryProvider({ children }) {
  const [ids, setIds] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) setIds(arr.filter((id) => CATALOG.some((c) => c.id === id)));
      }
    } catch {
      /* úložiště nemusí být dostupné */
    }
    loaded.current = true;
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(ids));
    } catch {
      /* ignorovat */
    }
  }, [ids]);

  const toggle = useCallback(
    (id) => setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    []
  );
  const add = useCallback((id) => setIds((prev) => (prev.includes(id) ? prev : [...prev, id])), []);
  const remove = useCallback((id) => setIds((prev) => prev.filter((x) => x !== id)), []);
  const clear = useCallback(() => setIds([]), []);

  const value = useMemo(
    () => ({
      ids,
      items: ids.map((id) => CATALOG.find((c) => c.id === id)).filter(Boolean),
      has: (id) => ids.includes(id),
      toggle,
      add,
      remove,
      clear,
    }),
    [ids, toggle, add, remove, clear]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useInquiry() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useInquiry mimo InquiryProvider");
  return v;
}
