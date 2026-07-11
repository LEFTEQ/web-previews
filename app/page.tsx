import type { ReactNode } from "react";

const sluzby = [
  {
    kod: "EPS",
    nazev: "Požární signalizace a připojení PCO na HZS",
    popis:
      "Elektrická požární signalizace od projektu po revizi. Objekt napojíme přímo na pult centrální ochrany hasičů — poplach dorazí tam, kde umí zasáhnout.",
    napeti: "12–48 V",
  },
  {
    kod: "EZS",
    nazev: "Zabezpečení a kamerové systémy",
    popis:
      "Drátové i bezdrátové ústředny, detektory a kamery s nočním viděním. Analýza objektu, montáž, oživení a předání dokumentace skutečného provedení.",
    napeti: "12–48 V",
  },
  {
    kod: "ACS",
    nazev: "Přístupové a docházkové systémy",
    popis:
      "Kdo, kam a kdy — čtečky karet, turnikety a evidence docházky, kterou si vedoucí otevře v prohlížeči a exportuje mzdy bez papírování.",
    napeti: "12–48 V",
  },
  {
    kod: "ELE",
    nazev: "Elektroinstalace, slaboproud, silnoproud, STA",
    popis:
      "Kompletní rozvody od rozvaděče po zásuvku i společné televizní antény. Silnoproud napájí, slaboproud přenáší data — obojí uděláme podle normy a s revizí.",
    napeti: "230–400 V",
  },
  {
    kod: "KNX",
    nazev: "Inteligentní domácnosti a budovy",
    popis:
      "Světla, topení, žaluzie a zabezpečení, které spolu mluví. Úspora energie, komfort a jistota, že po odchodu je opravdu zhasnuto a zamčeno.",
    napeti: "12–48 V",
  },
  {
    kod: "FVE",
    nazev: "Fotovoltaika",
    popis:
      "Panely, střídač a baterie navržené na skutečnou spotřebu vašeho objektu. Vlastní elektřina přes den, záloha při výpadku, návratnost spočítaná dopředu.",
    napeti: "230–400 V",
  },
];

const reference = [
  { obor: "Elektroinstalace", misto: "Plavecká hala Ústí nad Labem — Klíše" },
  { obor: "Elektroinstalace", misto: "Fotbalový stadion Ústí nad Labem" },
  {
    obor: "Požární signalizace + PCO na HZS",
    misto: "Spolek pro chemickou a hutní výrobu, Ústí n. L.",
  },
  { obor: "Elektroinstalace", misto: "Domov Vraný" },
  {
    obor: "Požární signalizace + PCO na HZS",
    misto: "Domov důchodců — V Klidu",
  },
  {
    obor: "Elektroinstalace",
    misto: "Háj u Duchcova — dům sociálních služeb",
  },
];

export default function Page(): ReactNode {
  return (
    <main className="eln">
      <header className="eln-top">
        <a className="eln-mark" href="#" aria-label="AEC Novák — domů">
          <span className="eln-mark__a">AEC</span>
          <span className="eln-mark__b">Novák</span>
        </a>
        <a className="eln-phone" href="tel:+420702007000">
          <span className="eln-phone__dot" aria-hidden="true" />
          +420 702 007 000
        </a>
      </header>

      <section className="eln-hero" aria-labelledby="hero-nadpis">
        <div className="eln-hero__media">
          <img
            src="/hero.webp"
            alt="Technik AEC Novák u rozvaděče při montáži elektroinstalace"
            className="eln-hero__img"
          />
        </div>
        <div className="eln-hero__copy">
          <p className="eln-eyebrow">
            <span>Ústí nad Labem</span>
            <span aria-hidden="true">/</span>
            <span>od roku 1994</span>
          </p>
          <h1 id="hero-nadpis" className="eln-hero__title">
            Když poplach přijde,
            <br />
            <em>hasiči</em> ho uslyší.
          </h1>
          <p className="eln-hero__lede">
            Požární signalizaci, kamery i elektroinstalaci napojíme přímo na
            pult centrální ochrany hasičů. Přes 30 let hlídáme školy, bazény i
            chemičky v Ústeckém kraji — od návrhu po revizi.
          </p>
          <div className="eln-hero__cta">
            <a className="eln-btn" href="tel:+420702007000">
              Zavolat technikovi
            </a>
            <a className="eln-btn eln-btn--ghost" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>
        </div>

        <dl className="eln-stats" aria-label="Ve zkratce">
          <div className="eln-stats__item">
            <dt>Chráníme objekty</dt>
            <dd>30+ let</dd>
          </div>
          <div className="eln-stats__item">
            <dt>Napojení poplachu</dt>
            <dd>PCO HZS</dd>
          </div>
          <div className="eln-stats__item">
            <dt>Návrh · montáž · revize</dt>
            <dd>Na klíč</dd>
          </div>
        </dl>
      </section>

      <section className="eln-sec" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="eln-sec__head">
          <p className="eln-eyebrow">Šest oborů, jedna parta</p>
          <h2 id="sluzby-nadpis" className="eln-sec__title">
            Co pro vás zapojíme
          </h2>
          <p className="eln-sec__note">
            Značka u každé služby říká, v jakém napětí se pohybuje.{" "}
            <strong>Silnoproud</strong> (230–400 V) napájí, <strong>slaboproud</strong>{" "}
            (12–48 V) přenáší data a signály.
          </p>
        </div>

        <ol className="eln-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="eln-card">
              <div className="eln-card__top">
                <span className="eln-card__kod">{s.kod}</span>
                <span
                  className={
                    "eln-tag " +
                    (s.napeti === "230–400 V" ? "eln-tag--silno" : "eln-tag--slabo")
                  }
                >
                  {s.napeti}
                </span>
              </div>
              <h3 className="eln-card__title">{s.nazev}</h3>
              <p className="eln-card__text">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="eln-ref" aria-labelledby="ref-nadpis">
        <div className="eln-ref__media">
          <img
            src="/section-1.webp"
            alt="Kamerový a zabezpečovací systém instalovaný firmou AEC Novák"
            className="eln-ref__img"
          />
          <img
            src="/section-2.webp"
            alt="Detail zapojení rozvaděče a slaboproudých rozvodů"
            className="eln-ref__img eln-ref__img--two"
          />
        </div>

        <div className="eln-ref__copy">
          <p className="eln-eyebrow">Kde už svítíme a hlídáme</p>
          <h2 id="ref-nadpis" className="eln-sec__title">
            Objekty, kterým věříme život
          </h2>
          <p className="eln-sec__note">
            Bazén, stadion, chemička i domovy pro seniory. Tam všude musí
            elektřina i požární signalizace fungovat bez výmluv — proto si nás
            zvou znovu.
          </p>

          <ul className="eln-list">
            {reference.map((r) => (
              <li key={r.misto} className="eln-list__row">
                <span className="eln-list__obor">{r.obor}</span>
                <span className="eln-list__misto">{r.misto}</span>
              </li>
            ))}
          </ul>

          <p className="eln-ref__foot">
            Podporujeme také <strong>HZS Libereckého kraje</strong>. Bezpečí
            bereme vážně i mimo fakturu.
          </p>
        </div>
      </section>
    </main>
  );
}
