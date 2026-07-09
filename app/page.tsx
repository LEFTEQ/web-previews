import type { CSSProperties } from "react";

export const metadata = {
  title: "TRIPLAN — fasády na míru | Ostrava",
  description:
    "TRIPLAN s.r.o. navrhuje a řeší fasády rodinných domů v Ostravě a okolí. Zateplení, skladba, barevnost i vyřízení dotace Nová zelená úsporám.",
};

type Layer = {
  no: string;
  name: string;
  thickness: string;
  role: string;
};

const layers: Layer[] = [
  {
    no: "01",
    name: "Nosná stěna",
    thickness: "stávající",
    role: "Podklad domu. Zaměříme ho a posoudíme jeho stav ještě před návrhem skladby.",
  },
  {
    no: "02",
    name: "Lepicí a stěrková vrstva",
    thickness: "cca 6 mm",
    role: "Drží izolant na zdi a rovná podklad. Tady se rozhoduje o tom, jestli fasáda nepraská.",
  },
  {
    no: "03",
    name: "Tepelný izolant",
    thickness: "120–200 mm",
    role: "Šedý polystyren nebo minerální vata. Tloušťku počítáme na dům, ne od oka.",
  },
  {
    no: "04",
    name: "Výztužná síťovina",
    thickness: "perlinka",
    role: "Zpevní stěrku, aby fasáda vydržela tepelnou roztažnost i kroupy.",
  },
  {
    no: "05",
    name: "Penetrace + omítka",
    thickness: "1,5–2 mm",
    role: "Silikonová nebo silikon-silikátová. To, co vidíte z ulice — barva a struktura.",
  },
];

type Service = {
  tag: string;
  title: string;
  body: string;
  points: string[];
};

const services: Service[] = [
  {
    tag: "Návrh",
    title: "Skladba zateplení na míru domu",
    body:
      "Nepoužíváme jednu univerzální skladbu na všechno. Spočítáme tloušťku izolace, vyřešíme detaily ostění, soklu i atiky a předáme podklad, podle kterého realizační firma ví, co dělá.",
    points: [
      "Výpočet tepelných ztrát a tloušťky izolantu",
      "Řešení tepelných mostů u oken a soklu",
      "Volba systému — polystyren i minerální vata",
    ],
  },
  {
    tag: "Barevnost",
    title: "Barva a struktura fasády",
    body:
      "Vzorník má stovky odstínů — poradíme, který obstojí na severní Moravě, nebude se přehřívat a bude ladit s okolní zástavbou. Připravíme vizualizaci, ať fasádu vidíte dřív, než se míchá omítka.",
    points: [
      "Návrh barevného řešení a struktury omítky",
      "Vizualizace domu před realizací",
      "Doporučení odstínů odolných proti přehřívání",
    ],
  },
  {
    tag: "Dotace",
    title: "Nová zelená úsporám na klíč",
    body:
      "Zateplení fasády patří mezi dotované úpravy. Zpracujeme energetické hodnocení, projekt i žádost a provedeme vás vyřízením dotace od podání až po vyplacení.",
    points: [
      "Energetické hodnocení a průkaz (PENB)",
      "Kompletní žádost o dotaci",
      "Vedení agendy až do proplacení",
    ],
  },
];

const refs = [
  { place: "Ostrava — Poruba", year: "2019" },
  { place: "Ostrava — Lhotka", year: "2019" },
  { place: "Ostrava — Heřmanice", year: "2019" },
  { place: "Ostrava — Petřkovice", year: "2019" },
  { place: "Šenov", year: "2015" },
  { place: "Opava", year: "2019" },
  { place: "Krmelín", year: "2019" },
  { place: "Petřvald", year: "2019" },
  { place: "Rychvald", year: "2019" },
  { place: "Třinec", year: "2016" },
  { place: "Kopřivnice", year: "2019" },
  { place: "Šilheřovice", year: "2014" },
];

export default function Page() {
  return (
    <main className="tp">
      <header className="tp-nav" aria-label="Hlavní">
        <a className="tp-mark" href="#top" aria-label="TRIPLAN, domů">
          <span className="tp-mark__word">TRIPLAN</span>
          <span className="tp-mark__sub">fasády · Ostrava</span>
        </a>
        <nav className="tp-nav__links">
          <a href="#skladba">Skladba fasády</a>
          <a href="#sluzby">Co uděláme</a>
          <a href="#reference">Reference</a>
        </nav>
        <a className="tp-nav__cta" href="tel:+420601506507">
          Zavolat
        </a>
      </header>

      <section className="tp-hero" id="top">
        <div className="tp-hero__grid">
          <div className="tp-hero__copy">
            <p className="tp-eyebrow">Projekční kancelář pro fasády · od roku 2010</p>
            <h1 className="tp-hero__title">
              Fasáda je <em>pět vrstev,</em> které musí sedět na milimetr.
            </h1>
            <p className="tp-hero__lede">
              Navrhneme skladbu zateplení pro váš dům v Ostravě a okolí, vybereme
              barvu a strukturu omítky a vyřídíme dotaci Nová zelená úsporám.
              Přijedeme, zaměříme, vyhodnotíme.
            </p>
            <div className="tp-hero__actions">
              <a className="tp-btn tp-btn--solid" href="tel:+420601506507">
                Zavolat 601 506 507
              </a>
              <a className="tp-btn tp-btn--ghost" href="mailto:info@triplan.cz">
                Napsat na e-mail
              </a>
            </div>
          </div>

          <figure className="tp-hero__media">
            <img
              src="/hero.webp"
              alt="Zateplená fasáda rodinného domu realizovaná podle projektu TRIPLAN"
              className="tp-hero__img"
              loading="eager"
            />
            <figcaption className="tp-hero__chip">Rodinný dům · Ostravsko</figcaption>
          </figure>
        </div>
      </section>

      <section className="tp-strip" aria-label="Fakta o firmě">
        <div className="tp-strip__item">
          <span className="tp-strip__k">2010</span>
          <span className="tp-strip__v">energetiku budov řešíme od tohoto roku</span>
        </div>
        <div className="tp-strip__item">
          <span className="tp-strip__k">100 %</span>
          <span className="tp-strip__v">úspěšnost u podaných žádostí o dotaci</span>
        </div>
        <div className="tp-strip__item">
          <span className="tp-strip__k">Ostrava</span>
          <span className="tp-strip__v">a celý Moravskoslezský kraj</span>
        </div>
      </section>

      <section className="tp-section tp-skladba" id="skladba">
        <div className="tp-head">
          <p className="tp-eyebrow">Řez fasádou</p>
          <h2 className="tp-h2">
            Od nosné zdi po omítku. Každá vrstva má svůj úkol.
          </h2>
          <p className="tp-head__note">
            Fasáda není jen barva na zdi. Je to zateplovací systém, kde na sobě
            závisí pět vrstev — a stačí zanedbat jednu, aby to bylo po pár letech
            znát. Tady je pořadí, ve kterém je řešíme.
          </p>
        </div>

        <ol className="tp-layers">
          {layers.map((l, i) => (
            <li
              className="tp-layer"
              key={l.no}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="tp-layer__no">{l.no}</span>
              <div className="tp-layer__main">
                <h3 className="tp-layer__name">{l.name}</h3>
                <p className="tp-layer__role">{l.role}</p>
              </div>
              <span className="tp-layer__thick">{l.thickness}</span>
            </li>
          ))}
        </ol>

        <figure className="tp-section__media">
          <img
            src="/section-1.webp"
            alt="Detail zateplené fasády s barevnou omítkou"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="tp-section tp-services" id="sluzby">
        <div className="tp-head">
          <p className="tp-eyebrow">Co pro váš dům uděláme</p>
          <h2 className="tp-h2">Návrh, barva a dotace pod jednou střechou.</h2>
        </div>

        <div className="tp-cards">
          {services.map((s) => (
            <article className="tp-card" key={s.title}>
              <span className="tp-card__tag">{s.tag}</span>
              <h3 className="tp-card__title">{s.title}</h3>
              <p className="tp-card__body">{s.body}</p>
              <ul className="tp-card__list">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="tp-section tp-trust" id="reference">
        <div className="tp-trust__grid">
          <figure className="tp-trust__media">
            <img
              src="/section-2.webp"
              alt="Rodinný dům s hotovou zateplenou fasádou"
              loading="lazy"
            />
          </figure>
          <div className="tp-trust__copy">
            <p className="tp-eyebrow">Kde už fasády stojí</p>
            <h2 className="tp-h2">
              Přes deset let projektů po celém Ostravsku.
            </h2>
            <p className="tp-head__note">
              Většina domů se zateplovala s dotací Nová zelená úsporám. Jednáme
              s vámi otevřeně — řekneme, co má smysl a co ne, ještě než se do
              projektu pustíme.
            </p>
            <ul className="tp-reflist">
              {refs.map((r) => (
                <li className="tp-refitem" key={r.place + r.year}>
                  <span className="tp-refitem__place">{r.place}</span>
                  <span className="tp-refitem__year">{r.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
