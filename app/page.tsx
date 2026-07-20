import { LamelaCover } from "./motion";

const BAZENY = [
  {
    tag: "Bazén",
    name: "Fóliové bazény",
    desc: "Svařovaná fólie napnutá přesně na tvar vany. Odolná, kdykoli opravitelná a v deseti barvách hladiny — od tyrkysu po tmavou šeď.",
  },
  {
    tag: "Bazén",
    name: "Sklolaminátové bazény",
    desc: "Hotová vana z pevného laminátu. Rychlá montáž během pár dní, hladký gelcoat bez spár a životnost počítaná na desítky let.",
  },
];

const ZAKRYTI = [
  {
    tag: "Zakrytí",
    name: "Zastřešení",
    desc: "Nízké i vysoké kryty z polykarbonátu, pojezdné do strany. Voda zůstává teplá a čistá i mimo sezónu, listí zůstává venku.",
  },
  {
    tag: "Zakrytí",
    name: "Lamelové zakrytí",
    desc: "Automatické lamely, které se na jedno tlačítko navinou pod hladinu. Bezpečné pro děti, tiché a drží teplo přes noc.",
  },
];

const KROKY = [
  { n: "01", t: "Zaměření na zahradě", d: "Přijedeme za vámi, změříme prostor a poradíme, jaký bazén a zakrytí dávají u vás smysl." },
  { n: "02", t: "Návrh a kalkulace", d: "Dostanete konkrétní návrh vany, techniky i krytu s cenou — bez skrytých položek." },
  { n: "03", t: "Výkop a osazení vany", d: "Vykopeme jámu, usadíme a vyrovnáme vanu, natáhneme rozvody a filtraci." },
  { n: "04", t: "Zastřešení a napuštění", d: "Osadíme zastřešení nebo lamely, napustíme vodu a předáme vám hotový bazén k prvnímu koupání." },
];

function Card({ tag, name, desc }: { tag: string; name: string; desc: string }) {
  return (
    <article className="card" tabIndex={0} aria-label={`${name} — ${desc}`}>
      <div className="card__water">
        <span className="card__tag">{tag}</span>
        <h3 className="card__name">{name}</h3>
        <p className="card__desc">{desc}</p>
      </div>
      <div className="card__cover" aria-hidden="true">
        <div className="slats" />
        <span className="card__hint">{name}</span>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Tomášek — bazény a okna, Malšice">
          <span className="wordmark__name">TOMÁŠEK</span>
          <span className="wordmark__sub">bazény · zastřešení · Malšice</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#katalog">Co stavíme</a>
          <a href="#firma">O firmě</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__water" aria-hidden="true" />
        <div className="hero__inner">
          <p className="eyebrow">Fóliové &amp; sklolaminátové bazény · jižní Čechy</p>
          <h1 className="hero__title">
            Více&nbsp;než
            <br />
            <span className="hero__big">30&nbsp;let</span>
            <br />
            zkušeností
          </h1>
          <p className="hero__sub">
            Stavíme bazény, které vydrží — od výkopu po první napuštění. A zakryjeme je
            zastřešením nebo lamelami, aby voda zůstala teplá a čistá. U vás na zahradě
            v Malšicích a okolí.
          </p>
        </div>
        <LamelaCover />
      </section>

      <section className="section" id="katalog">
        <div className="band" aria-hidden="true">
          <div className="slats" />
        </div>
        <header className="section__head">
          <p className="eyebrow eyebrow--dark">Katalog</p>
          <h2 className="section__title">Co pro vás postavíme</h2>
          <p className="section__lead">
            Najeďte na kartu — lamely se odvinou a ukážou, co je pod nimi. Vana i její
            zakrytí od jednoho řemeslníka, sladěné dohromady.
          </p>
        </header>

        <div className="catalog">
          <div className="catalog__group">
            <h3 className="catalog__label">Bazény</h3>
            <div className="catalog__grid">
              {BAZENY.map((c) => (
                <Card key={c.name} {...c} />
              ))}
            </div>
          </div>
          <div className="catalog__group">
            <h3 className="catalog__label">Zakrytí</h3>
            <div className="catalog__grid">
              {ZAKRYTI.map((c) => (
                <Card key={c.name} {...c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--basin" id="firma">
        <div className="band band--dark" aria-hidden="true">
          <div className="slats" />
        </div>
        <div className="firma">
          <div className="firma__intro">
            <p className="eyebrow eyebrow--light">Rodinná firma z Malšic</p>
            <h2 className="section__title section__title--light">
              Postavíme, zakryjeme, předáme napuštěné
            </h2>
            <p className="firma__text">
              Bazény stavíme přes tři desítky let po jižních Čechách. Děláme celou
              práci sami — od výkopu přes osazení vany a filtraci až po zastřešení.
              Žádný řetěz subdodavatelů, se kterými se pak nedomluvíte.
            </p>
            <ul className="specs">
              <li>
                <span className="specs__k">Působíme</span>
                <span className="specs__v">Malšice a okolí do 50&nbsp;km</span>
              </li>
              <li>
                <span className="specs__k">Vany</span>
                <span className="specs__v">Fóliové i sklolaminátové</span>
              </li>
              <li>
                <span className="specs__k">Zakrytí</span>
                <span className="specs__v">Zastřešení &amp; automatické lamely</span>
              </li>
            </ul>
            <blockquote className="quote">
              „Bazén nám postavili za tři týdny a lamely jedou na jedno tlačítko.
              Vodu skoro neřešíme.“
              <cite>— manželé Novákovi, Tábor</cite>
            </blockquote>
          </div>

          <ol className="steps" aria-label="Jak stavba probíhá">
            {KROKY.map((k) => (
              <li key={k.n} className="step">
                <span className="step__n">{k.n}</span>
                <div className="step__body">
                  <h3 className="step__t">{k.t}</h3>
                  <p className="step__d">{k.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
