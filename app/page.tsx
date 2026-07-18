import type { ReactNode } from "react";

type Category = {
  domain: string;
  code: string;
  title: string;
  lead: string;
  machines: string[];
};

const categories: Category[] = [
  {
    domain: "Kolem domu",
    code: "ZAHRADA",
    title: "Zahradní technika",
    lead: "Pro majitele domů a zahrad, co chtějí dokonalý trávník bez dřiny — od robota po zahradní traktor.",
    machines: [
      "Robotické sekačky",
      "Ridery a zahradní traktory",
      "Vyžínače a plotostřihy",
      "Zavlažování Gardena",
    ],
  },
  {
    domain: "Do lesa a na dřevo",
    code: "LES",
    title: "Lesní technika",
    lead: "Profesionální nářadí, které vydrží celý den v terénu — řetězové pily a křoviny, na které je spoleh.",
    machines: [
      "Řetězové pily Husqvarna",
      "Křovinořezy a vyžínače",
      "Foukače listí",
      "Rozbrušovací a pařezové frézy",
    ],
  },
  {
    domain: "Na pole a do sadu",
    code: "POLE",
    title: "Zemědělská technika",
    lead: "Síla pro sady, usedlosti a rozlehlé pozemky, kde stroje musí utáhnout pořádnou práci.",
    machines: [
      "Malotraktory Yanmar",
      "Kultivátory a sekací stroje ZTH",
      "Sněhové frézy",
      "Elektrické vozíky Selvo",
    ],
  },
];

const brands = [
  "Husqvarna",
  "Jonsered",
  "Partner",
  "Gardena",
  "Flymo",
  "Vari",
  "Honda",
  "Yanmar",
  "Selvo",
  "EGO",
];

const servis = [
  "Vlastní servisní dílna",
  "Originální náhradní díly",
  "Poradenství při výběru",
  "Sezónní seřízení a ostření",
];

export default function Page(): ReactNode {
  return (
    <main className="page">
      <section className="hero" aria-label="Agrocentrum DFG — zahradní, lesní a zemědělská technika">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="wordmark">
              <span className="wm-tick" aria-hidden="true" />
              <span className="wm-name">
                Agrocentrum <b>DFG</b>
              </span>
              <span className="wm-meta">Autorizovaný dealer · Olomouc</span>
            </div>

            <p className="eyebrow">Prodej · servis · náhradní díly</p>

            <h1 className="hero-title">
              <span className="hl-line">Zahradní</span>
              <span className="hl-line">Lesní</span>
              <span className="hl-line">Zemědělská</span>
              <span className="hl-line hl-accent">technika</span>
            </h1>

            <p className="hero-sub">
              Sekačky, řetězové pily, malotraktory i roboti, kteří posekají trávník za
              vás. Značky, kterým věří profíci — a dílna v Olomouci-Holicích, kde je
              umíme i opravit.
            </p>

            <div className="hero-cta">
              <a className="btn btn-primary" href="#produkty">
                Prohlédnout techniku
              </a>
              <a className="btn btn-ghost" href="#duvera">
                Domluvit servis
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="hero-swath" />
            <div className="panel-tag">
              <span className="tag-k">Robotická sekačka</span>
              <span className="tag-v">
                Poseká trávník, sama se nabije a zaparkuje. Vy jen sledujete pruhy.
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="swath-band" role="presentation" />

      <section className="section section-light" id="produkty" aria-labelledby="offer-h">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow eyebrow-dark">Co u nás pořídíte</p>
            <h2 id="offer-h" className="section-title">
              Tři světy techniky
              <br />
              pod jednou střechou
            </h2>
          </header>

          <ul className="cat-list">
            {categories.map((c) => (
              <li key={c.code}>
                <a className="cat-card" href="#duvera">
                  <span className="cat-cut" aria-hidden="true" />
                  <span className="cat-body">
                    <span className="cat-top">
                      <span className="cat-code">{c.code}</span>
                      <span className="cat-domain">{c.domain}</span>
                    </span>
                    <span className="cat-title">{c.title}</span>
                    <span className="cat-lead">{c.lead}</span>
                    <span className="cat-machines">
                      {c.machines.map((m) => (
                        <span className="machine" key={m}>
                          {m}
                        </span>
                      ))}
                    </span>
                    <span className="cat-go">
                      Poradíme s výběrem <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark" id="duvera" aria-labelledby="trust-h">
        <div className="wrap trust-grid">
          <div className="trust-text">
            <p className="eyebrow">Kdo za tím stojí</p>
            <h2 id="trust-h" className="section-title">
              Prodáme jen to,
              <br />
              co umíme i opravit
            </h2>
            <p className="trust-lead">
              Agrocentrum DFG najdete v Olomouci-Holicích. Děláme jednu věc pořádně —
              prodáváme stroje se zázemím vlastní servisní dílny. Když u nás sekačku
              koupíte, máte kam se vrátit: originální díly, seřízení i rada, jaký
              stroj se hodí zrovna na vaši zahradu.
            </p>
            <p className="trust-lead">
              Jsme autorizovaný prodejce a servis značek Husqvarna, Jonsered, Partner,
              Gardena, Flymo, Vari a Honda.
            </p>

            <div className="contact">
              <div className="contact-item">
                <span className="c-k">Prodejna a servis</span>
                <span className="c-v">Olomouc–Holice</span>
              </div>
              <div className="contact-item">
                <span className="c-k">Telefon</span>
                <a className="c-v c-link" href="tel:+420777111222">
                  +420 777 111 222
                </a>
              </div>
              <div className="contact-item">
                <span className="c-k">E-mail</span>
                <a className="c-v c-link" href="mailto:info@example.cz">
                  info@example.cz
                </a>
              </div>
            </div>
          </div>

          <aside className="trust-aside" aria-label="Značky a servis">
            <div className="aside-block">
              <h3 className="aside-h">Autorizované značky</h3>
              <ul className="brand-grid">
                {brands.map((b) => (
                  <li className="brand" key={b}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="swath-rule" aria-hidden="true" />

            <div className="aside-block">
              <h3 className="aside-h">Co pro vás děláme</h3>
              <ul className="servis-list">
                {servis.map((s) => (
                  <li className="servis-item" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
