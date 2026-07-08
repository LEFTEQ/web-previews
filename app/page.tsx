import type { CSSProperties } from "react";

const projekty = [
  {
    kod: "01",
    nazev: "Projekt zahrady",
    popis:
      "Půdorys, osazovací plán a vizualizace v grafickém programu, aby byl výsledek jasný ještě před prvním kopnutím. Řešíme svahy, výhledy i pohled z okna obýváku.",
    dodavka: "Studie · plán · rozpočet",
  },
  {
    kod: "02",
    nazev: "Zahrada na klíč",
    popis:
      "Realizace od zasazení semínka po sklizeň — terénní úpravy, výsadba, trávníky, cesty i závlaha. Přebíráte hotovou zahradu, ne staveniště.",
    dodavka: "Realizace · full servis",
  },
  {
    kod: "03",
    nazev: "Koupací jezírka a voda",
    popis:
      "Koupací jezírka, vodní prvky a přírodní filtrace. Voda, ve které se dá plavat, i taková, co jen zurčí pod okny ložnice.",
    dodavka: "Jezírka · potoky · fontány",
  },
  {
    kod: "04",
    nazev: "Zahradní stavby",
    popis:
      "Terasy, opěrné zdi, pergoly a zpevněné plochy z kvalitních přírodních materiálů. Pevná kostra, kolem které zeleň teprve doroste.",
    dodavka: "Kámen · dřevo · beton",
  },
];

const duvody = [
  {
    rok: "1998",
    titulek: "Rok, kdy jsme začali",
    text: "Přes 25 let navrhujeme a stavíme zahrady na Ústecku. Za tu dobu jsme viděli, jak stromy, které jsme sázeli jako proutky, dnes stíní celé terasy.",
  },
  {
    rok: "25+",
    titulek: "Let praxe v oboru",
    text: "Sledujeme trendy, ale spoléháme na zkušenost. Víme, co v ústeckém podnebí a na svazích nad Labem opravdu roste — a co jen na papíře.",
  },
  {
    rok: "1:1",
    titulek: "Vztah, který drží dál",
    text: "Realizací práce nekončí. S klienty zůstáváme v kontaktu, radíme s údržbou a občas si spolu po letech sedneme na hotové terase ke sklence vína.",
  },
];

export default function Page() {
  return (
    <main className="zk">
      <header className="zk-topbar">
        <a className="zk-brand" href="#uvod" aria-label="Zelené kolo — úvod">
          <span className="zk-brand-ring" aria-hidden="true">
            <span className="zk-brand-spoke" />
            <span className="zk-brand-spoke" />
            <span className="zk-brand-spoke" />
          </span>
          <span className="zk-brand-text">
            <span className="zk-brand-1">Zelené</span>
            <span className="zk-brand-2">kolo</span>
          </span>
        </a>
        <nav className="zk-nav" aria-label="Hlavní navigace">
          <a href="#projekty">Co děláme</a>
          <a href="#o-nas">O nás</a>
          <a className="zk-tel" href="tel:+420602711602">+420 602 711 602</a>
        </nav>
      </header>

      <section className="zk-hero" id="uvod">
        <img
          className="zk-hero-img"
          src="/hero.webp"
          alt="Realizovaná zahrada od Zeleného kola — vzrostlá zeleň, terasa a vodní prvek"
          width={1600}
          height={1000}
          fetchPriority="high"
        />
        <div className="zk-hero-veil" aria-hidden="true" />
        <div className="zk-hero-inner">
          <p className="zk-eyebrow">Zahradní architektura · Ústí nad Labem · od 1998</p>
          <h1 className="zk-hero-title">
            Zahradu vnímáme jako
            <span className="zk-hero-accent"> živý organismus</span> — ne jako výkres.
          </h1>
          <p className="zk-hero-lead">
            Navrhujeme a stavíme zahrady na klíč, koupací jezírka a vodní prvky.
            Váš venkovní prostor propojíme s tím vnitřním tak, aby spolu dýchaly.
          </p>
          <div className="zk-hero-actions">
            <a className="zk-btn zk-btn-primary" href="tel:+420602711602">
              Domluvit konzultaci
            </a>
            <a className="zk-btn zk-btn-ghost" href="#projekty">
              Prohlédnout, co stavíme
            </a>
          </div>
        </div>
        <ul className="zk-hero-rings" aria-hidden="true">
          <li /><li /><li />
        </ul>
      </section>

      <section className="zk-section zk-projekty" id="projekty">
        <div className="zk-section-head">
          <p className="zk-eyebrow zk-eyebrow-dark">Čtyři kola jedné jízdy</p>
          <h2 className="zk-h2">
            Od první myšlenky až po zahradu, do které se vracíte
          </h2>
          <p className="zk-section-lead">
            Nebereme jen výsadbu nebo jen stavbu. Provedeme vás celou cestou —
            a každý krok navazuje na ten předchozí.
          </p>
        </div>

        <ol className="zk-cards">
          {projekty.map((p) => (
            <li className="zk-card" key={p.kod}>
              <span className="zk-card-kod" aria-hidden="true">{p.kod}</span>
              <h3 className="zk-card-title">{p.nazev}</h3>
              <p className="zk-card-text">{p.popis}</p>
              <p className="zk-card-tag">{p.dodavka}</p>
            </li>
          ))}
        </ol>

        <figure className="zk-figure">
          <img
            src="/section-1.webp"
            alt="Detail realizace — přírodní materiály, kámen a zeleň v zahradě od Zeleného kola"
            width={1400}
            height={900}
            loading="lazy"
          />
          <figcaption>
            Kvalitní přírodní materiály volíme tak, aby se do prostoru hodily
            — a aby za deset let vypadaly líp než v den předání.
          </figcaption>
        </figure>
      </section>

      <section className="zk-section zk-onas" id="o-nas">
        <div className="zk-onas-grid">
          <div className="zk-onas-media">
            <img
              src="/section-2.webp"
              alt="Tým Zeleného kola při práci na zahradě v okolí Ústí nad Labem"
              width={1200}
              height={1400}
              loading="lazy"
            />
          </div>
          <div className="zk-onas-text">
            <p className="zk-eyebrow zk-eyebrow-dark">O nás</p>
            <h2 className="zk-h2">
              Přes 25 let s vámi rosteme<br />a ještě jsme z toho nevyrostli
            </h2>
            <p className="zk-onas-lead">
              Tvoříme svým srdcem a píšeme příběhy šité na míru. Propojujeme
              člověka s přírodou a vracíme ho zpět k jeho kořenům — s láskou
              k detailu a respektem k místu, kde zahrada stojí.
            </p>

            <dl className="zk-facts">
              {duvody.map((d) => (
                <div className="zk-fact" key={d.rok}>
                  <dt className="zk-fact-num">{d.rok}</dt>
                  <dd className="zk-fact-body">
                    <strong>{d.titulek}</strong>
                    <span>{d.text}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unused: CSSProperties = {};
