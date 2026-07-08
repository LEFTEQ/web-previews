import type { CSSProperties } from "react";

const realizace = [
  {
    misto: "Palác Dunaj",
    lokalita: "Liberec",
    prace: "Oplechování, zateplení a hydroizolace střech a teras, rekonstrukce podlah teras, fasádní nátěr a kompletní rekonstrukce několika bytů včetně rozvodů.",
  },
  {
    misto: "Crytur, spol. s r.o.",
    lokalita: "Turnov",
    prace: "Demolice, zateplení fasády, výměna výplní otvorů, hydroizolace a zateplení střechy, přístavba, elektroinstalace, zámečnické konstrukce a světlíky.",
  },
  {
    misto: "Obecní úřad",
    lokalita: "Jenišovice",
    prace: "Fasáda, výměna výplní otvorů, klempířské konstrukce, výměna střešní krytiny i krovu, přístavba s novým osobním výtahem a schodištěm.",
  },
  {
    misto: "Zlatý lev",
    lokalita: "Liberec",
    prace: "Zateplení objektu, výměna výplní otvorů, oplechování a oprava vstupů do objektu včetně schodišť.",
  },
];

const sluzby = [
  {
    cislo: "01",
    nazev: "Zateplení fasád",
    popis:
      "Kompletní zateplovací systém (ETICS) od kotvení po finální omítku. Nižší účty za teplo a fasáda, která vydrží liberecké zimy i vítr z Ještědu.",
  },
  {
    cislo: "02",
    nazev: "Výplně otvorů",
    popis:
      "Výměna oken a dveří, klempířské oplechování parapetů a ostění. Napojení na zateplení řešíme tak, aby nikde nezatékalo a netáhlo.",
  },
  {
    cislo: "03",
    nazev: "Střechy a lodžie",
    popis:
      "Hydroizolace a zateplení střešního pláště, rekonstrukce lodžií, výměna zábradlí i klempířské konstrukce. Řešíme dům odshora dolů.",
  },
  {
    cislo: "04",
    nazev: "Betonové obrubníky",
    popis:
      "Vlastním obrubníkovačem lijeme obrubníky přímo na místě — bez spár, v jednom tahu. Čistý okraj zahrady, cesty i vjezdu.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="brand" href="#top" aria-label="Spiders — fasády Liberec">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-web" />
          </span>
          <span className="brand-name">Spiders</span>
          <span className="brand-tag">fasády / Liberec</span>
        </a>
        <nav className="nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <a href="tel:+420603225490" className="nav-call">+420 603 225 490</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Zateplená fasáda bytového domu realizovaná firmou Spiders v Liberci"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-inner">
          <p className="eyebrow">Fasády, zateplení a střechy · od roku 2008</p>
          <h1 className="hero-title">
            Obalíme váš dům<br />
            do vrstvy, která<br />
            <span className="hero-accent">drží teplo uvnitř.</span>
          </h1>
          <p className="hero-lead">
            Zdvihneme lešení kolem panelového i rodinného domu na Liberecku,
            zateplíme fasádu, vyměníme okna a spravíme střechu — a předáme ji
            hotovou, čistou a bez zatékání.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420603225490">
              Zavolat na +420 603 225 490
            </a>
            <a className="btn btn-ghost" href="#reference">
              Prohlédnout realizace
            </a>
          </div>
        </div>
        <ul className="hero-strip" aria-label="Čím se zabýváme">
          <li>Zateplení fasád</li>
          <li>Výměna oken</li>
          <li>Klempířina</li>
          <li>Střechy &amp; lodžie</li>
        </ul>
      </section>

      <section className="sec sec-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow eyebrow-dark">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="sec-title">
            Celý plášť domu<br />
            jedním týmem.
          </h2>
          <p className="sec-note">
            Nezateplíme jen zeď a nenecháme vás shánět zvlášť pokrývače a
            klempíře. Postaráme se o fasádu, okna, střechu i venkovní plochy —
            aby na sebe vrstvy navazovaly tak, jak mají.
          </p>
        </div>
        <ol className="sluzby-list">
          {sluzby.map((s) => (
            <li key={s.cislo} className="sluzba">
              <span className="sluzba-num" aria-hidden="true">
                {s.cislo}
              </span>
              <div className="sluzba-body">
                <h3 className="sluzba-nazev">{s.nazev}</h3>
                <p className="sluzba-popis">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="sec-figure">
          <img
            src="/section-1.webp"
            alt="Lešení na fasádě rekonstruovaného objektu na Liberecku"
            loading="lazy"
          />
          <figcaption>Rozestavěná fasáda v lešení — takhle to u nás vypadá v půlce práce.</figcaption>
        </figure>
      </section>

      <section className="sec sec-ref" id="reference" aria-labelledby="ref-h">
        <div className="ref-grid">
          <div className="ref-lead">
            <p className="eyebrow eyebrow-dark">Postavené a předané</p>
            <h2 id="ref-h" className="sec-title">
              Domy, které<br />
              po nás zůstaly.
            </h2>
            <p className="sec-note">
              Od bytových domů na Borovém vrchu přes obecní úřad v Jenišovicích
              až po výrobní halu Crytur v Turnově. Tady je pár míst, kam se
              můžete zajet podívat.
            </p>
            <figure className="ref-figure">
              <img
                src="/section-2.webp"
                alt="Dokončená zateplená fasáda referenčního objektu"
                loading="lazy"
              />
            </figure>
          </div>
          <ul className="ref-list">
            {realizace.map((r) => (
              <li key={r.misto} className="ref-item">
                <div className="ref-item-head">
                  <h3 className="ref-misto">{r.misto}</h3>
                  <span className="ref-lokalita">{r.lokalita}</span>
                </div>
                <p className="ref-prace">{r.prace}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
