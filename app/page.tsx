import type { CSSProperties } from "react";

type Program = {
  no: string;
  name: string;
  tier: string;
  price: string;
  items: string[];
  flagship?: boolean;
};

const programs: Program[] = [
  {
    no: "01",
    name: "START",
    tier: "Ruční mytí",
    price: "595 Kč",
    items: [
      "Ruční mytí saponátem",
      "Odstranění hmyzu",
      "Vyčištění alu disků",
      "Lesk pneu",
      "Vysušení vzduchem a mikrovláknem",
      "Vosk",
    ],
  },
  {
    no: "02",
    name: "STANDARD",
    tier: "Mytí + interiér",
    price: "1 595 Kč",
    items: [
      "Vše z programu START",
      "Vysátí interiéru",
      "Vyleštění oken a zrcátek",
      "Vyčištění palubní desky",
    ],
  },
  {
    no: "03",
    name: "PREMIUM",
    tier: "Hloubkové čištění",
    price: "1 995 Kč",
    items: [
      "Vše ze STANDARDU",
      "Vytepování koberečků",
      "Premium vosk",
      "Odstranění asfaltu",
      "Doplnění ostřikovačů (2 l)",
    ],
  },
  {
    no: "04",
    name: "NANO CARE",
    tier: "Nanovosk",
    price: "1 995 Kč",
    items: [
      "Vše z programu START",
      "Tuhý nanovosk, lesklý lak",
      "Ochrana až na 6 měsíců",
      "Oživení exteriérových plastů",
    ],
  },
  {
    no: "05",
    name: "DE LUXE",
    tier: "Kompletní interiér",
    price: "3 395 Kč",
    items: [
      "Vše ze STANDARDU",
      "Tepování sedaček a kufru",
      "Čištění kožené výbavy",
      "Impregnace kůže s vitamínem",
      "Dezinfekce ozonem",
    ],
  },
  {
    no: "06",
    name: "DIAMOND",
    tier: "Renovace laku",
    price: "14 995 Kč",
    items: [
      "Strojové rozleštění karoserie",
      "Odstranění mírných škrábanců",
      "Odstranění hologramů",
      "Dekontaminace laku",
      "Vysoký lesk",
    ],
  },
  {
    no: "07",
    name: "DE LUXE +",
    tier: "Keramika interiéru",
    price: "9 995 Kč",
    items: [
      "Vše z programu DE LUXE",
      "Keramická ochrana koženého interiéru",
    ],
  },
  {
    no: "08",
    name: "CERAMIC",
    tier: "Nejvyšší ochrana",
    price: "23 995 Kč",
    flagship: true,
    items: [
      "Strojové rozleštění karoserie",
      "Rozleštění mírných škrábanců",
      "2vrstvá keramická ochrana exteriéru",
      "Voda perlí a steče sama — až měsíce",
    ],
  },
];

const extras = [
  { name: "MOTO CARE", note: "Ruční mytí motorky šamponem a vysušení", price: "595 Kč" },
  { name: "AQUA STOP", note: "Tekuté stěrače — voda z čelního skla odtéká sama", price: "395 Kč" },
  { name: "OZON FRESH", note: "Dezinfekce vnitřních prostor ozonem", price: "395 Kč" },
  { name: "VLASTNÍ POŽADAVEK", note: "Napište nám, co potřebujete", price: "Cena dohodou" },
];

const advantages = [
  "Každé auto myjeme ručně — žádné kartáče, žádné víry ve laku",
  "Přes 10 let praxe s detailingem a keramickou ochranou",
  "Špičkové přípravky a strojové leštění karoserie",
  "Auto vyčistíme, zatímco vy v klidu nakupujete",
  "Zkušený a přátelský personál, flexibilní otevírací doba",
];

export default function Page() {
  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Automyčka Excellent — úvod">
          <span className="wordmark-sub">Automyčka</span>
          <span className="wordmark-main">
            EXCELLENT<span className="wordmark-bead" aria-hidden="true" />
          </span>
        </a>
        <nav className="nav-links" aria-label="Hlavní navigace">
          <a href="#programy">Programy</a>
          <a href="#proc">Proč my</a>
          <a className="nav-call" href="tel:+420777111222">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Ruční detailing · Liberec · od roku 2013</p>
          <h1 className="hero-title">
            Voda se skutálí.<br />
            <span className="hero-title-accent">Lak zůstane.</span>
          </h1>
          <p className="hero-lead">
            Ručně myjeme a keramicky chráníme auta v Liberci přes deset let.
            Žádné automatické kartáče — jen pěna, mikrovlákno a povlak, na kterém
            voda perlí do dokonalých kapek a odnese s sebou špínu.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#programy">Vybrat program</a>
            <a className="btn btn-ghost" href="tel:+420777111222">Zavolat 777 111 222</a>
          </div>
        </div>

        <div className="hero-stage" aria-hidden="true">
          <div className="stage-panel">
            <div className="stage-matte" />
            <span className="bead bead-hero" />
            <span className="bead bead-a" />
            <span className="bead bead-b" />
            <span className="bead bead-c" />
            <span className="bead bead-d" />
            <span className="bead bead-e" />
            <span className="squeegee" />
          </div>
          <p className="stage-caption">Keramicky ošetřený lak — kontaktní úhel vody přes 100°</p>
        </div>
      </section>

      <section className="section" id="programy">
        <div className="section-head">
          <p className="eyebrow">Programy 01–08</p>
          <h2 className="section-title">Od ručního mytí až po keramiku</h2>
          <p className="section-intro">
            Programy jdou vzestupně podle míry ochrany laku — od rychlého mytí
            saponátem po dvouvrstvý keramický povlak. Vyberte podle toho, jak
            dlouho má voda perlit.
          </p>
        </div>

        <ul className="program-grid">
          {programs.map((p) => (
            <li
              key={p.no}
              className={p.flagship ? "program-card is-flagship" : "program-card"}
            >
              <div className="program-top">
                <span className="program-no">{p.no}</span>
                <div>
                  <h3 className="program-name">{p.name}</h3>
                  <p className="program-tier">{p.tier}</p>
                </div>
              </div>
              <ul className="program-list">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <span className="price-bead">{p.price}</span>
            </li>
          ))}
        </ul>

        <div className="extras">
          <h3 className="extras-title">Doplňkové služby</h3>
          <ul className="extras-list">
            {extras.map((e) => (
              <li key={e.name} className="extra-row">
                <span className="extra-name">{e.name}</span>
                <span className="extra-note">{e.note}</span>
                <span className="extra-price">{e.price}</span>
              </li>
            ))}
          </ul>
          <p className="fineprint">
            SUV, dodávky, 7místná, off-roady a luxusní limuzíny = ceník XL +20 %.
            Odstranění zvířecích chlupů +500 Kč. Máte-li na voze ochrannou fólii,
            řekněte nám to prosím při předání.
          </p>
        </div>
      </section>

      <div className="divider" aria-hidden="true">
        <span className="bead bead-mini" />
        <span className="bead bead-mini" />
        <span className="bead bead-mini" />
      </div>

      <section className="section proc" id="proc">
        <div className="proc-grid">
          <div className="proc-copy">
            <p className="eyebrow">Proč Automyčka Excellent</p>
            <h2 className="section-title">Perfektní péče, kterou váš vůz pozná</h2>
            <p className="section-intro">
              Automyčka není jen o čistém autě — je o péči, kterou lak udrží.
              Každé mytí děláme ručně, takže nehrozí vířivé škrábance jako
              v automatických myčkách. Používáme jen prověřené přípravky a
              nejmodernější vybavení pro dlouhotrvající lesk.
            </p>
            <ul className="advantage-list">
              {advantages.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          <aside className="proc-side">
            <div className="stat-row">
              <span className="stat-num">10+</span>
              <span className="stat-label">let zkušeností s detailingem</span>
            </div>
            <div className="stat-row">
              <span className="stat-num">100 %</span>
              <span className="stat-label">ruční mytí, žádné kartáče</span>
            </div>
            <div className="stat-row">
              <span className="stat-num">2</span>
              <span className="stat-label">vrstvy keramické ochrany v programu CERAMIC</span>
            </div>

            <div className="contact-card">
              <p className="contact-title">Objednání a dotazy</p>
              <a className="contact-line" href="tel:+420777111222">777 111 222</a>
              <a className="contact-line" href="mailto:info@example.cz">info@example.cz</a>
              <p className="contact-addr">Ukázková 123, Liberec</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
