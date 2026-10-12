import { useEffect, useState } from "react";

const ITEMS = [
  {
    q: "Jak se systém panDOMO aplikuje?",
    a: "Obecně jde o několik kroků: připravit podklad, nanést dekorativní stěrku a povrch nakonec ochránit. Konkrétní postup se odvíjí od stavu podkladu a od toho, jak se bude místnost používat — proto ho vždy probíráme individuálně, ideálně ještě před plánováním dalších prací.",
  },
  {
    q: "Co zvážit u dřevěné podlahy na podlahové vytápění?",
    a: "Rozhoduje výběr dřeva a způsob pokládky, stav a vlhkost podkladu i to, jak se podlaha chová při změnách teploty. Podlahové vytápění zmiňte hned na začátku, ať se s ním počítá od výběru podlahy až po pokládku.",
  },
  {
    q: "Jak pečovat o dřevěnou podlahu, aby dlouho vydržela?",
    a: "Pravidelně odstraňujte prach a písek, které povrch obrušují. Vytírejte jen mírně vlhkým hadrem a prostředkem určeným pro danou povrchovou úpravu. Pod nohy nábytku dejte plstěné podložky a v místnosti udržujte pokud možno stabilní vlhkost vzduchu.",
  },
  {
    q: "Jak se starat o povrch panDOMO?",
    a: "Péče se řídí použitou ochrannou vrstvou. Obecně se vyplatí běžný úklid bez agresivních a abrazivních prostředků. Konkrétní doporučení pro váš povrch je nejlepší probrat přímo s námi.",
  },
  {
    q: "Jak domluvit návštěvu showroomu?",
    a: "Showroom ve Slovinské 752/7 v Praze 10 nemá pevnou otevírací dobu — návštěvu si domluvte telefonicky na čísle +420 773 111 162 nebo +420 773 111 187.",
  },
];

function AccItem({ q, a, idx, hydrated }: { q: string; a: string; idx: number; hydrated: boolean }) {
  const [open, setOpen] = useState(false);
  const id = `poradna-${idx}`;
  return (
    <div className="t-acc border-b border-beton/20" data-open={String(open)}>
      <h3 className="font-sans text-lg font-medium">
        <button
          type="button"
          className="t-acc-head flex w-full items-center justify-between gap-4 py-5 text-left text-grafit"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
        >
          <span>{q}</span>
          <span className="t-acc-chevron shrink-0 text-orech" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6.5L8 10.5L12 6.5" />
            </svg>
          </span>
        </button>
      </h3>
      <div id={id} className="t-acc-panel" aria-hidden={hydrated ? !open : undefined}>
        <div className="t-acc-panel-inner">
          <p className="max-w-2xl pb-6 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Advice() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);

  return (
    <section id="poradna" aria-labelledby="poradna-title" className="py-14 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <p className="label">Poradna</p>
          <h2 id="poradna-title" className="mt-2 text-4xl leading-tight sm:text-5xl">
            Než se rozhodnete.
          </h2>
          <p className="mt-4 leading-relaxed">
            Obecné odpovědi na časté otázky. Na vaši konkrétní situaci se zeptejte telefonicky nebo e-mailem.
          </p>
        </div>
        <div className="border-t border-beton/20 lg:col-span-8">
          {ITEMS.map((it, i) => (
            <AccItem key={it.q} q={it.q} a={it.a} idx={i} hydrated={hydrated} />
          ))}
        </div>
      </div>
    </section>
  );
}
