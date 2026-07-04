import type { CSSProperties } from "react";

export default function Page() {
  const projekty = [
    {
      cislo: "01",
      nazev: "Rezidence Bílá perla",
      lokalita: "Ostrava",
      typ: "Byty",
      stav: "V prodeji",
    },
    {
      cislo: "02",
      nazev: "Řadovky Skalka",
      lokalita: "Ostrava-Poruba, Vřesinská",
      typ: "Rodinné domy",
      stav: "V prodeji",
    },
    {
      cislo: "03",
      nazev: "Rezidence Na Podhůří",
      lokalita: "Frýdek-Místek",
      typ: "Byty, domy a vily",
      stav: "od 1 426 079 Kč",
    },
    {
      cislo: "04",
      nazev: "Bydlení Poruba",
      lokalita: "Ostrava-město",
      typ: "Byty",
      stav: "od 1 220 000 Kč",
    },
  ];

  const nabidka = [
    {
      k: "Byty",
      p: "Novostavby i prověřené byty v Ostravě a okolí. Od garsonek po rodinné 4+1.",
    },
    {
      k: "Rodinné domy a vily",
      p: "Řadové domy Hošťálkovice, samostatné vily v Nové Polomi i klidné okrajové čtvrti.",
    },
    {
      k: "Pozemky",
      p: "Stavební parcely se sítěmi připravené k výstavbě po celém Moravskoslezském kraji.",
    },
    {
      k: "Komerční objekty",
      p: "Kanceláře, provozovny a investiční nemovitosti s jasným výnosovým potenciálem.",
    },
  ];

  return (
    <main className="tx">
      <header className="tx-nav" aria-label="Hlavní navigace">
        <a className="tx-mark" href="#" aria-label="TRIMEX Reality, domů">
          <span className="tx-mark-t">TRIMEX</span>
          <span className="tx-mark-r">reality</span>
        </a>
        <nav className="tx-links">
          <a href="#nabidka">Nemovitosti</a>
          <a href="#projekty">Projekty</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="tx-call" href="tel:800400600">
          <span className="tx-call-lbl">Zelená linka</span>
          <span className="tx-call-num">800 400 600</span>
        </a>
      </header>

      <section className="tx-hero" aria-labelledby="hero-h">
        <div className="tx-hero-grid" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="tx-plot" style={{ "--i": i } as CSSProperties} />
          ))}
        </div>

        <div className="tx-hero-inner">
          <p className="tx-eyebrow">
            <span className="tx-dot" /> Správa a prodej nemovitostí · Ostrava-Poruba
          </p>

          <h1 id="hero-h" className="tx-hero-h">
            <span className="l1">Stojíme za</span>
            <span className="l2">
              <em className="tx-num">24</em> projekty
            </span>
            <span className="l3">v Moravskoslezském kraji.</span>
          </h1>

          <p className="tx-lede">
            Byty, domy i pozemky, které jsme sami postavili nebo prověřili.
            Právě teď máte na výběr ze čtyř developerských projektů — a další
            startují.
          </p>

          <div className="tx-hero-cta">
            <a className="tx-btn" href="#nabidka">Prohlédnout nabídku</a>
            <a className="tx-btn tx-btn-ghost" href="#projekty">Naše projekty</a>
          </div>

          <dl className="tx-stats">
            <div>
              <dt>Zrealizovaných projektů</dt>
              <dd>24</dd>
            </div>
            <div>
              <dt>Projekty v prodeji</dt>
              <dd>4</dd>
            </div>
            <div>
              <dt>Působíme v kraji od</dt>
              <dd>MSK</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="tx-sec" id="nabidka" aria-labelledby="nab-h">
        <div className="tx-sec-head">
          <p className="tx-kicker">Nabídka</p>
          <h2 id="nab-h">Co pro vás hledáme a spravujeme</h2>
          <p className="tx-sec-lede">
            Nenašli jste vysněné bydlení? Zadejte požadavky a nechte to na nás.
            Známe každou čtvrť Ostravy i okolní obce.
          </p>
        </div>

        <ul className="tx-cards">
          {nabidka.map((n) => (
            <li key={n.k} className="tx-card">
              <span className="tx-card-rule" aria-hidden="true" />
              <h3>{n.k}</h3>
              <p>{n.p}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="tx-sec tx-sec-alt" id="projekty" aria-labelledby="proj-h">
        <div className="tx-sec-head">
          <p className="tx-kicker">Projekty v prodeji</p>
          <h2 id="proj-h">Čtyři projekty, do kterých se dnes dá nastěhovat</h2>
        </div>

        <ol className="tx-list" id="onas">
          {projekty.map((p) => (
            <li key={p.cislo} className="tx-row">
              <span className="tx-row-no" aria-hidden="true">{p.cislo}</span>
              <span className="tx-row-name">{p.nazev}</span>
              <span className="tx-row-loc">{p.lokalita}</span>
              <span className="tx-row-typ">{p.typ}</span>
              <span className="tx-row-stav">{p.stav}</span>
            </li>
          ))}
        </ol>

        <div className="tx-trust">
          <p className="tx-trust-lead">
            Jsme ostravská akciová společnost se sídlem na 28. října v Moravské
            Ostravě a kanceláří v Porubě. Za 24 dokončených projektů jsme se
            naučili jedno: developera i realitku poznáte podle toho, co po
            předání zůstane stát.
          </p>
          <ul className="tx-trust-facts">
            <li>
              <span className="tx-fact-k">Kancelář</span>
              Nad Porubkou 2227/31, Ostrava-Poruba
            </li>
            <li>
              <span className="tx-fact-k">Volejte zdarma</span>
              800 400 600
            </li>
            <li>
              <span className="tx-fact-k">Napište nám</span>
              info@trimexreality.cz
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
