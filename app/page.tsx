import type { ReactNode } from "react";

export default function Page() {
  const okruhy = [
    {
      faze: "Studie",
      nazev: "Návrh a studie proveditelnosti",
      popis:
        "Spočítáme příkony, dimenzujeme přívod a navrhneme koncepci silnoproudu i slaboproudu tak, aby dávala smysl ještě před tím, než se kope první rýha.",
      list: ["Bilance příkonů", "Napojovací body", "Územní a stavební řízení"],
    },
    {
      faze: "Dokumentace",
      nazev: "Realizační projekt elektro",
      popis:
        "Kompletní prováděcí dokumentace — schémata rozvaděčů, kabelové trasy, výpočet osvětlení a výkaz výměr, ze kterého se dá rovnou soutěžit a stavět.",
      list: ["Rozvaděče a rozvody", "Výpočet osvětlení", "Rozpočet a výkaz výměr"],
    },
    {
      faze: "Dozor",
      nazev: "Revize a autorský dozor",
      popis:
        "Zajistíme výchozí revizi, zmapujeme a zakreslíme skutečný stav a jako autorský nebo technický dozor hlídáme, že se staví přesně podle projektu.",
      list: ["Výchozí revize", "Skutečné provedení", "Technický dozor"],
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="ACDC Projekty, domů">
          <span className="wordmark__ac">AC</span>
          <span className="wordmark__sep" aria-hidden="true">/</span>
          <span className="wordmark__dc">DC</span>
          <span className="wordmark__tag">Projekty</span>
        </a>
        <a className="topbar__call" href="tel:+420734492102">
          <span className="topbar__label">Volejte 8–14 h</span>
          <span className="topbar__num">+420 734 492 102</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Projektová dokumentace elektroinstalace s rozvaděčem a schématy"
          />
          <div className="hero__grid" aria-hidden="true" />
        </div>

        <div className="hero__body">
          <p className="hero__eyebrow">
            <span className="phase">L1</span>
            <span>Projekce elektro · Ústí nad Labem</span>
          </p>
          <h1 className="hero__title">
            Než se zapojí <span className="lit">první kabel</span>, existuje
            projekt, který drží pohromadě.
          </h1>
          <p className="hero__lead">
            ACDC Projekty kreslí silnoproud i slaboproud od první studie až po
            výchozí revizi. Dostanete dokumentaci, podle které se dá stavět bez
            improvizace — a razítko, které obstojí.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420734492102">
              Zavolat projektantovi
            </a>
            <a className="btn btn--ghost" href="mailto:info@acdcprojekty.cz">
              Poslat poptávku
            </a>
          </div>

          <dl className="hero__meta">
            <Metric k="NN 0,4 kV" v="Silnoproud i slaboproud" />
            <Metric k="1000 lx → 200 lx" v="Výpočet osvětlení" />
            <Metric k="§ dozor" v="Autorský i technický" />
          </dl>
        </div>
      </section>

      <section className="okruhy" aria-labelledby="okruhy-nadpis">
        <div className="section-head">
          <p className="section-head__eyebrow">Fáze projektu</p>
          <h2 id="okruhy-nadpis" className="section-head__title">
            Od nápadu k revizní zprávě ve třech krocích
          </h2>
          <p className="section-head__lead">
            Elektroprojekt není jeden výkres. Provedeme vás celou cestou —
            každou fázi předáme s dokumentací, kterou pochopí i firma, co bude
            zapojovat.
          </p>
        </div>

        <ol className="okruhy__list">
          {okruhy.map((o, i) => (
            <li className="card" key={o.faze}>
              <div className="card__index">
                <span className="card__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="card__phase">{o.faze}</span>
              </div>
              <h3 className="card__title">{o.nazev}</h3>
              <p className="card__text">{o.popis}</p>
              <ul className="card__points">
                {o.list.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figure className="okruhy__figure">
          <img
            src="/section-1.webp"
            alt="Detail schématu rozvaděče a kabelových tras"
            className="okruhy__img"
          />
          <figcaption className="okruhy__cap">
            Ukázka realizační dokumentace — rozvaděč, trasy, popis vývodů.
          </figcaption>
        </figure>
      </section>

      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera__media">
          <img
            src="/section-2.webp"
            alt="Projektant nad výkresovou dokumentací elektroinstalace"
            className="duvera__img"
          />
        </div>
        <div className="duvera__body">
          <p className="section-head__eyebrow">Proč ACDC</p>
          <h2 id="duvera-nadpis" className="section-head__title">
            Projekt, který obstojí u úřadu i na stavbě
          </h2>
          <p className="duvera__lead">
            Děláme elektroprojekty v Ústeckém kraji tak dlouho, že víme, kde se
            stavby zadrhnou — na chybějícím výkazu výměr, na osvětlení pod
            normou, na revizi, kterou nikdo neřešil včas. Proto to řešíme za vás
            od začátku.
          </p>
          <ul className="duvera__facts">
            <li>
              <span className="duvera__k">Kompletní balík</span>
              <span className="duvera__v">
                Od studie přes stavební řízení po skutečné provedení a revizi —
                jeden projektant, jedna odpovědnost.
              </span>
            </li>
            <li>
              <span className="duvera__k">Ústí nad Labem a okolí</span>
              <span className="duvera__v">
                Rozumíme místním úřadům i distribuci. Na stavbu to nemáme daleko
                a autorský dozor bereme osobně.
              </span>
            </li>
            <li>
              <span className="duvera__k">Výkaz, ze kterého se soutěží</span>
              <span className="duvera__v">
                Rozpočet a výkaz výměr předáváme v podobě, na které postavíte
                nabídku bez dohadování o rozsahu.
              </span>
            </li>
          </ul>
          <a className="btn btn--solid" href="tel:+420734492102">
            Domluvit konzultaci
          </a>
        </div>
      </section>
    </main>
  );
}

function Metric({ k, v }: { k: string; v: ReactNode }) {
  return (
    <div className="metric">
      <dt className="metric__k">{k}</dt>
      <dd className="metric__v">{v}</dd>
    </div>
  );
}
