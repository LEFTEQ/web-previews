import type { CSSProperties } from "react";

type Cell = { i: number; order: number; fill: boolean; win: boolean };

const N = 48;
const cells: Cell[] = Array.from({ length: N }, (_, i) => {
  const order = (i * 37) % 48;
  const win = order >= 24 && order < 26;
  const fill = order < 24;
  return { i, order, fill, win };
});

type Service = {
  par: string;
  title: string;
  desc: string;
  meta: string;
  status: string;
};

const services: Service[] = [
  {
    par: "§ 01",
    title: "Výkon funkce předsedy",
    desc: "Staneme se statutárním orgánem vašeho SVJ. Přebíráme zodpovědnost i závazky z výkonu funkce — vy získáte klid.",
    meta: "1 statutární orgán",
    status: "Statutární orgán",
  },
  {
    par: "§ 02",
    title: "Online hlasování",
    desc: "Vlastníci hlasují z domova, výsledek je hned a s auditní stopou. Žádné svolávání kvůli jedné otázce.",
    meta: "kvórum 51 %",
    status: "Bez shromáždění",
  },
  {
    par: "§ 03",
    title: "Hospodaření a kontrola",
    desc: "Hlídáme finanční toky, sestavíme rozpočet, připravíme vyúčtování. Každá koruna má svůj řádek.",
    meta: "účetní rok",
    status: "Pod dohledem",
  },
  {
    par: "§ 04",
    title: "Komunikace s úřady a členy",
    desc: "Vyřídíme katastr, rejstřík i dotazy vlastníků. Mluvíme za dům tam, kde je potřeba.",
    meta: "úřady · členové",
    status: "Zastupujeme",
  },
  {
    par: "§ 05",
    title: "Organizace shromáždění",
    desc: "Svolání, program, prezenční listina, zápis i usnesení — přesně podle zákona a stanov.",
    meta: "1× ročně a dle potřeby",
    status: "Dle zákona",
  },
  {
    par: "§ 06",
    title: "GDPR a právní odpovědnost",
    desc: "Neseme právní odpovědnost za výkon funkce a jsme pojištěni na 250 milionů korun.",
    meta: "pojistka 250 mil. Kč",
    status: "Pojištěno",
  },
];

function MiniGrid() {
  return (
    <span className="mini" aria-hidden="true">
      {Array.from({ length: 9 }, (_, k) => (
        <span key={k} className={k === 0 || k === 3 || k === 4 || k === 6 || k === 7 ? "mini-on" : ""} />
      ))}
    </span>
  );
}

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <header className="brandbar">
        <span className="wordmark">
          Profi<span className="wordmark-alt">Předseda</span>
          <span className="wordmark-sro">s.r.o.</span>
        </span>
        <span className="brandbar-tag">Správa nemovitostí · Plzeň</span>
      </header>

      <section className="section hero" aria-labelledby="hero-h">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" /> SVJ · od roku 1994
          </p>
          <h1 id="hero-h">
            Staneme se předsedou
            <br /> vašeho SVJ.
          </h1>
          <p className="lede">
            Přebíráme funkci statutárního orgánu se vší zodpovědností — hospodaření,
            shromáždění i online hlasování. Rozhodnutí projde, dům běží dál.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#poptavka">
              Nezávazná poptávka
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Jak funguje online hlasování
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>93</dt>
              <dd>spravovaných SVJ</dd>
            </div>
            <div>
              <dt>7 000+</dt>
              <dd>bytových jednotek</dd>
            </div>
            <div>
              <dt>30 let</dt>
              <dd>v oboru správy</dd>
            </div>
          </dl>
        </div>

        <div className="kv-panel" aria-hidden="true">
          <div className="kv-panel-head">
            <span>Hlasování o správci</span>
            <span>PLZEŇ / SVJ</span>
          </div>
          <div className="kv-grid">
            {cells.map((c) => (
              <span
                key={c.i}
                className={"kv-cell" + (c.win ? " kv-win" : c.fill ? " kv-fill" : "")}
                style={{ animationDelay: `${c.order * 22}ms` } as CSSProperties}
              />
            ))}
            <span className="kv-line">
              <span className="kv-line-tag">práh 51 %</span>
            </span>
            <span className="kv-stamp">
              <span className="kv-stamp-pct">51 %</span>
              <span className="kv-stamp-word">Schváleno</span>
            </span>
          </div>
          <div className="kv-panel-foot">
            <span>Zaplněné buňky = hlasy pro</span>
            <span>Prázdné = fasáda / bez hlasu</span>
          </div>
        </div>
      </section>

      {/* SLUŽBY — craft catalog / register */}
      <section className="section catalog" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" /> Katalog služeb
          </p>
          <h2 id="sluzby-h">Co pro vaše SVJ zařídíme</h2>
          <p className="section-sub">
            Každá položka je vedená jako v rejstříku — s paragrafem, rozsahem a razítkem stavu.
            Beze slev na odpovědnosti.
          </p>
        </div>

        <ol className="catalog-list">
          {services.map((s) => (
            <li key={s.par} className="entry">
              <div className="entry-top">
                <span className="entry-par">{s.par}</span>
                <MiniGrid />
                <span className="entry-status">{s.status}</span>
              </div>
              <h3 className="entry-title">{s.title}</h3>
              <p className="entry-desc">{s.desc}</p>
              <p className="entry-meta">{s.meta}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* DŮVĚRA / O NÁS */}
      <section className="section trust" id="o-nas" aria-labelledby="trust-h">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" /> O nás
            </p>
            <h2 id="trust-h">Předseda, na kterého se dům spolehne</h2>
            <p className="section-sub">
              ProfiPředseda, s.r.o. působí ve správě nemovitostí od roku 1994. Funkci
              statutárního orgánu vykonává tým odborně vzdělaných lidí — s pojištěním,
              právní podporou a technickým servisem za zády.
            </p>
            <ul className="guarantees">
              <li>
                <span className="g-mark" aria-hidden="true">✓</span> Pojistka na 250 milionů korun
              </li>
              <li>
                <span className="g-mark" aria-hidden="true">✓</span> Garantovaná odbornost a zastupitelnost
              </li>
              <li>
                <span className="g-mark" aria-hidden="true">✓</span> Právní podpora a technický servis
              </li>
              <li>
                <span className="g-mark" aria-hidden="true">✓</span> Pravidelné výstupy pro všechny vlastníky
              </li>
            </ul>
          </div>

          <aside className="ledger" aria-label="Čísla o firmě">
            <p className="ledger-title">Výpis z evidence</p>
            <dl className="ledger-rows">
              <div>
                <dt>Spravovaných SVJ</dt>
                <dd>93</dd>
              </div>
              <div>
                <dt>Bytových jednotek</dt>
                <dd>7 000+</dd>
              </div>
              <div>
                <dt>Nebytových jednotek</dt>
                <dd>89</dd>
              </div>
              <div>
                <dt>Na trhu od roku</dt>
                <dd>1994</dd>
              </div>
            </dl>
            <p className="ledger-note">
              Působíme po celé ČR, sídlíme v Plzni. Řešení hledáme na míru domu, ne šablonou.
            </p>
            <p className="ledger-contact">
              Ambasador: 777 111 222 · info@example.cz · Ukázková 123, Plzeň
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
