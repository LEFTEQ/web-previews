import type { ReactNode } from "react";

type Belt =
  | "white"
  | "yellow"
  | "orange"
  | "green"
  | "blue"
  | "brown"
  | "black";

function BeltTab({ belt, children }: { belt: Belt; children: ReactNode }) {
  return (
    <span className="belt-tab">
      <span className="belt-tab__chip" data-belt={belt} aria-hidden="true" />
      {children}
    </span>
  );
}

const programme: {
  belt: Belt;
  rank: string;
  group: string;
  age: string;
  days: string;
  note: string;
}[] = [
  {
    belt: "white",
    rank: "6.–5. kyu",
    group: "Přípravka",
    age: "děti 5–7 let",
    days: "Po + St · 16:00",
    note: "Hry, kotouly a první pády. Než přijde první chvat, umí dítě bezpečně dopadnout.",
  },
  {
    belt: "yellow",
    rank: "5.–4. kyu",
    group: "Mladší žáci",
    age: "8–11 let",
    days: "Po + St + Pá · 17:00",
    note: "Základní úchopy, porazy a držení. První pásková zkouška a první turnaje.",
  },
  {
    belt: "green",
    rank: "3.–2. kyu",
    group: "Starší žáci",
    age: "12–14 let",
    days: "Út + Čt · 17:30",
    note: "Randori naostro, taktika zápasu a příprava na krajské i republikové soutěže.",
  },
  {
    belt: "blue",
    rank: "1. kyu",
    group: "Dorost a junioři",
    age: "15–18 let",
    days: "Po–Pá · 18:00",
    note: "Objemové tréninky, kondice a starty na Českém i Evropském poháru.",
  },
  {
    belt: "brown",
    rank: "výběr",
    group: "Závodní tým",
    age: "reprezentace klubu",
    days: "dle soutěžního plánu",
    note: "Adresná příprava na MČR a mezinárodní starty. Vstup po domluvě s trenérem.",
  },
  {
    belt: "black",
    rank: "všechny stupně",
    group: "Dospělí rekreačně",
    age: "od 18 let",
    days: "Út + Čt · 19:30",
    note: "Judo pro kondici i hlavu. Vítáme začátečníky i návrat po letech od žíněnky.",
  },
];

const results: {
  belt: Belt;
  place: string;
  athlete: string;
  event: string;
  detail: string;
}[] = [
  {
    belt: "yellow",
    place: "1. místo",
    athlete: "Bohdan Abdulzhelilov",
    event: "MČR U16",
    detail: "do 55 kg",
  },
  {
    belt: "yellow",
    place: "1. místo",
    athlete: "Lukáš Vala",
    event: "Český pohár Prostějov",
    detail: "dorostenci do 81 kg",
  },
  {
    belt: "white",
    place: "2. místo",
    athlete: "Lukáš Vala",
    event: "Evropský pohár Győr (HU)",
    detail: "napůl splněný limit na ME",
  },
  {
    belt: "orange",
    place: "3. místo",
    athlete: "Hynek Švec",
    event: "Český pohár Prostějov",
    detail: "do 66 kg",
  },
  {
    belt: "orange",
    place: "3. místo",
    athlete: "Hugo Šebelka",
    event: "Český pohár Prostějov",
    detail: "do 90 kg",
  },
];

const belts: { belt: Belt; label: string }[] = [
  { belt: "white", label: "bílý" },
  { belt: "yellow", label: "žlutý" },
  { belt: "orange", label: "oranžový" },
  { belt: "green", label: "zelený" },
  { belt: "blue", label: "modrý" },
  { belt: "brown", label: "hnědý" },
  { belt: "black", label: "černý" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="JudoClub Liberec — úvod">
          <span className="wordmark__judo">JUDOCLUB</span>
          <span className="wordmark__mesto">LIBEREC</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#rozvrh">Tréninky</a>
          <a href="#vysledky">Výsledky</a>
        </nav>
      </header>

      {/* HERO — contest area frame drawn on load */}
      <section className="section hero" id="uvod">
        <div className="mat mat--hero">
          <svg
            className="mat__stroke"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <rect x="1.6" y="1.6" width="96.8" height="96.8" pathLength={1} />
          </svg>
          <div className="mat__field mat__field--hero">
            <div className="hero__content">
              <BeltTab belt="black">Dojo · Liberec</BeltTab>
              <h1 className="hero__title">
                Judo se učí
                <br />
                <em>pádem.</em>
              </h1>
              <p className="hero__lead">
                Do liberecké žíněnky chodí děti už od pěti let i dospělí, co si
                chtějí sáhnout na dno sil. Nejdřív tě naučíme bezpečně padat a
                držet rovnováhu — pak teprve přijdou chvaty. Vstaneš rychleji,
                než jsi spadl.
              </p>
              <div className="hero__cta">
                <a className="btn btn--primary" href="#rozvrh">
                  Přijď na první trénink
                </a>
                <a className="btn btn--ghost" href="#vysledky">
                  Jak se nám daří
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROZVRH — belt ladder as taxonomy, craft catalog */}
      <section className="section" id="rozvrh">
        <div className="container">
          <div className="sec-head">
            <BeltTab belt="green">Tréninky</BeltTab>
            <h2 className="sec-title">Od bílého pásku k závodnímu týmu</h2>
            <p className="sec-intro">
              Skupiny řadíme podle pásků — přesně jako pásky řadíme judisty.
              Najdi si, kam patříš, a přijď se podívat. První hodina je
              zdarma, stačí sportovní oblečení a čisté nohy.
            </p>
          </div>

          <ol className="belt-legend" aria-label="Pořadí pásků v judu">
            {belts.map((b) => (
              <li key={b.belt}>
                <span className="belt-legend__chip" data-belt={b.belt} aria-hidden="true" />
                {b.label}
              </li>
            ))}
          </ol>

          <div className="catalog">
            {programme.map((p) => (
              <article className="mat card" key={p.group}>
                <div className="mat__field card__field">
                  <div className="card__top">
                    <BeltTab belt={p.belt}>{p.rank}</BeltTab>
                    <span className="card__days">{p.days}</span>
                  </div>
                  <h3 className="card__title">{p.group}</h3>
                  <p className="card__age">{p.age}</p>
                  <p className="card__note">{p.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VYSLEDKY — trust via real results */}
      <section className="section section--ink" id="vysledky">
        <div className="container">
          <div className="sec-head">
            <BeltTab belt="black">Výsledky</BeltTab>
            <h2 className="sec-title sec-title--light">
              Z žíněnky se vracíme s medailemi
            </h2>
            <p className="sec-intro sec-intro--light">
              Naši svěřenci startují na Českém poháru, mistrovství republiky i
              na evropských pohárech. Poslední sezona přinesla domů kovy z
              Prostějova, MČR U16 i z maďarského Győru.
            </p>
          </div>

          <div className="mat mat--wide">
            <div className="mat__field results">
              <ul className="results__list">
                {results.map((r) => (
                  <li className="result" key={r.athlete + r.event}>
                    <span
                      className="result__medal"
                      data-belt={r.belt}
                      aria-hidden="true"
                    />
                    <span className="result__place">{r.place}</span>
                    <span className="result__athlete">{r.athlete}</span>
                    <span className="result__event">{r.event}</span>
                    <span className="result__detail">{r.detail}</span>
                  </li>
                ))}
              </ul>
              <p className="results__coach">
                Tým vede trenér <strong>Pavel Kytýr</strong>. Chceš být příště
                na téhle listině? Začíná se prvním pádem na tatami.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
