import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RENOS s.r.o. — stavební firma a stavebniny, Pardubicko",
  description:
    "Kompletní dodávky bytových, občanských i průmyslových staveb včetně řemesel a stavebnin. Přes 30 let stavíme na Pardubicku.",
};

const sluzby = [
  {
    kod: "01",
    nazev: "Stavební firma",
    popis:
      "Vedeme stavbu od základové desky po předání klíčů. Bytové, občanské i průmyslové stavby, rekonstrukce a modernizace — včetně zajištění všech řemesel na jednom čísle.",
    body: [
      "Novostavby na klíč",
      "Rekonstrukce a modernizace",
      "Průmyslové a inženýrské stavby",
    ],
  },
  {
    kod: "02",
    nazev: "Stavebniny",
    popis:
      "Materiál s atestem, ne z regálu na dobrou vůli. Vše splňuje platné ČSN a související vyhlášky. K nákupu dostanete technické poradenství od člověka, který ví, k čemu to bude.",
    body: [
      "Zdicí materiály, malty, betony",
      "Izolace, střešní krytiny, systémy",
      "Doprava na stavbu po Pardubicku",
    ],
  },
];

const pilire = [
  {
    rok: "1992",
    titulek: "Založeno smlouvou z 16. 11. 1992",
    text:
      "Přes tři desetiletí pod jedním jménem. Firmu předáváme dál, ne prodáváme dokola — proto plánujeme roky dopředu, ne do konce zakázky.",
  },
  {
    rok: "ČSN",
    titulek: "Za práci si stojíme",
    text:
      "Předáváme jen to, co bychom sami převzali. Kvalita a zodpovědnost nejsou heslo na ceduli — je to důvod, proč se k nám lidé vracejí s další stavbou.",
  },
  {
    rok: "1 : 1",
    titulek: "Mluvíte s tím, kdo staví",
    text:
      "Žádné přepojování mezi odděleními. Podle toho, co poptáváte, vás spojíme přímo s člověkem od stavební firmy nebo od stavebnin.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#top" aria-label="RENOS, domů">
          <span className="wordmark__name">RENOS</span>
          <span className="wordmark__sro">s.r.o.</span>
          <span className="wordmark__loc">Pardubice · od 1992</span>
        </a>
        <nav className="nav__links">
          <a href="#stavime">Stavební firma</a>
          <a href="#stavebniny">Stavebniny</a>
          <a href="#firma">O firmě</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Rozestavěná stavba realizovaná firmou RENOS na Pardubicku"
            width={1600}
            height={1000}
            fetchPriority="high"
          />
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">Stavební firma &amp; stavebniny · Pardubice</p>
          <h1 className="hero__title">
            S námi<br />
            <span className="hero__accent">postavíte</span><br />
            všechno.
          </h1>
          <p className="hero__lead">
            Od základů po klíče, včetně materiálu s atestem a řemesel, která
            spolu ladí. Jedna firma, jedna zodpovědnost — na Pardubicku už přes
            třicet let.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#stavime">Co pro vás postavíme</a>
            <a className="btn btn--ghost" href="#firma">O firmě RENOS</a>
          </div>
        </div>

        <dl className="hero__meta">
          <div>
            <dt>Na trhu</dt>
            <dd>od r. 1992</dd>
          </div>
          <div>
            <dt>Záběr</dt>
            <dd>stavby i materiál</dd>
          </div>
          <div>
            <dt>Kde stavíme</dt>
            <dd>Pardubicko</dd>
          </div>
        </dl>
      </section>

      <section className="sluzby" id="stavime">
        <div className="sec-head">
          <p className="sec-head__eyebrow">Dvě dílny, jeden telefon</p>
          <h2 className="sec-head__title">Čím vám pomůžeme</h2>
        </div>

        <div className="cards">
          {sluzby.map((s, i) => (
            <article
              className="card"
              key={s.kod}
              id={i === 1 ? "stavebniny" : undefined}
            >
              <div className="card__media">
                <img
                  className="card__img"
                  src={i === 0 ? "/section-1.webp" : "/section-2.webp"}
                  alt={
                    i === 0
                      ? "Realizace stavby — dodávka bytových a průmyslových objektů"
                      : "Sklad stavebnin — materiál připravený k odběru"
                  }
                  width={900}
                  height={640}
                  loading="lazy"
                />
                <span className="card__kod">{s.kod}</span>
              </div>
              <div className="card__body">
                <h3 className="card__title">{s.nazev}</h3>
                <p className="card__text">{s.popis}</p>
                <ul className="card__list">
                  {s.body.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="firma" id="firma">
        <div className="firma__intro">
          <p className="sec-head__eyebrow sec-head__eyebrow--light">O firmě</p>
          <h2 className="firma__title">
            Vyhledávaný a spolehlivý partner investorů — takové postavení si
            držíme od roku&nbsp;1992.
          </h2>
          <p className="firma__lead">
            Pozemní, inženýrské i průmyslové stavby, rekonstrukce a modernizace
            všeho druhu. Uvažujeme dlouhodobě — se zákazníky, s materiálem
            i s lidmi ve firmě.
          </p>
        </div>

        <ol className="pilire">
          {pilire.map((p) => (
            <li className="pilir" key={p.titulek}>
              <span className="pilir__rok">{p.rok}</span>
              <h3 className="pilir__titulek">{p.titulek}</h3>
              <p className="pilir__text">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
