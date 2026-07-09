import type { CSSProperties } from "react";

export const metadata = {
  title: "ATERNA s.r.o. — fotovoltaika, elektroinstalace a LOXONE v Brně",
  description:
    "Brněnská firma s vlastními elektrikáři a revizními techniky. Fotovoltaika, elektroinstalace i chytrá domácnost LOXONE — od projektu přes dotace až po revizi.",
  openGraph: {
    title: "ATERNA s.r.o. — fotovoltaika a elektroinstalace, Brno",
    description:
      "Vlastní tým elektrikářů a revizních techniků. Fotovoltaika, elektroinstalace, LOXONE. Vyřídíme i dotace.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Realizace fotovoltaické elektrárny firmou ATERNA" }],
  },
};

type Sluzba = {
  cislo: string;
  nazev: string;
  popis: string;
  detaily: string[];
};

const sluzby: Sluzba[] = [
  {
    cislo: "01",
    nazev: "Fotovoltaické elektrárny",
    popis:
      "Střešní i pozemní elektrárny všech rozměrů — od rodinného domu po firemní halu. Navrhneme výkon podle vaší spotřeby, ne podle prodejního cíle.",
    detaily: [
      "Technologie Solax, Growatt, Victron",
      "Bateriová akumulace na míru",
      "Vyřídíme dotace za vás",
    ],
  },
  {
    cislo: "02",
    nazev: "Elektroinstalace a revize",
    popis:
      "Kompletní silnoproud i slaboproud pro novostavby i rekonstrukce. Vlastní revizní technici, takže revizní zpráva přijde od nás — ne od subdodavatele.",
    detaily: [
      "Novostavby i rekonstrukce",
      "Rozvaděče a jištění",
      "Revizní zpráva ke každé zakázce",
    ],
  },
  {
    cislo: "03",
    nazev: "Chytrá domácnost LOXONE",
    popis:
      "Osvětlení, stínění, topení a zabezpečení řízené z jednoho místa. Navrhneme scénáře, které dávají smysl ve vašem dni — světlo tam, kde ho zrovna potřebujete.",
    detaily: [
      "Inteligentní osvětlení",
      "Řízení stínění a topení",
      "Scénáře podle vašeho režimu",
    ],
  },
];

type Reference = {
  lokalita: string;
  typ: string;
  technologie: string;
  vykon: string;
  akumulace: string;
};

const reference: Reference[] = [
  {
    lokalita: "Firma ŘEŠETO",
    typ: "Střešní FVE",
    technologie: "Solax",
    vykon: "24,57 kWp",
    akumulace: "18,6 kWh",
  },
  {
    lokalita: "Obec Šebetov",
    typ: "Rodinný dům",
    technologie: "Growatt",
    vykon: "7,28 kWp",
    akumulace: "11,1 kWh",
  },
  {
    lokalita: "Brno-Lesná",
    typ: "Rodinný dům",
    technologie: "Victron",
    vykon: "5,46 kWp",
    akumulace: "9,6 kWh",
  },
];

const recenze = [
  {
    text:
      "Výborná komunikace, péče o zákazníka. Vše proběhlo v pořádku. Mají vlastní elektrikáře a revizní techniky, tak vše funguje jak má. Doporučuji.",
    autor: "Jana M.",
    zdroj: "Google",
  },
  {
    text:
      "Vše nám bylo vysvětleno ještě před podpisem smlouvy, což nebylo u jiných firem vůbec normální. Výborná komunikace u nás i u našich příbuzných. Doporučuji.",
    autor: "Petra V.",
    zdroj: "reference",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="ATERNA — úvod">
          <span className="wordmark__mark" aria-hidden="true" />
          <span className="wordmark__text">
            ATERNA<span className="wordmark__dot">.</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <a className="topnav__cta" href="tel:+420776614964">Zavolat</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Fotovoltaické panely na střeše instalované týmem ATERNA"
            className="hero__img"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="hero__inner">
          <p className="hero__eyebrow">Elektro · Fotovoltaika · LOXONE — Brno</p>
          <h1 id="hero-title" className="hero__title">
            Vlastní elektrikáři
            <br />
            i revizní technici
            <span className="hero__accent"> pod jednou střechou.</span>
          </h1>
          <p className="hero__lead">
            Nejsme jen montážní parta. Elektrárnu vám navrhneme, zapojíme,
            zrevidujeme a k tomu vyřídíme dotace — bez řetězu subdodavatelů,
            u kterých se ztrácí odpovědnost.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420776614964">
              Zavolat 776 614 964
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co pro vás uděláme
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Vlastní tým</dt>
              <dd>elektrikáři + revizní technici</dd>
            </div>
            <div>
              <dt>Dotace</dt>
              <dd>vyřídíme za vás</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>Bohunická, Brno</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="sluzby" className="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Tři obory, jeden dodavatel</p>
          <h2 id="sluzby-title" className="section-head__title">
            Od kabelu ve zdi
            <br />
            po watty ze střechy
          </h2>
          <p className="section-head__lead">
            Elektroinstalace, fotovoltaika a chytrá domácnost k sobě patří.
            Proto je děláme dohromady — jeden projekt, jeden tým, jedna
            revizní zpráva.
          </p>
        </div>
        <div className="sluzby__media">
          <img
            src="/section-1.webp"
            alt="Technik ATERNA při zapojování rozvaděče"
            loading="lazy"
            decoding="async"
          />
        </div>
        <ol className="sluzby__list">
          {sluzby.map((s) => (
            <li key={s.cislo} className="sluzba">
              <span className="sluzba__cislo" aria-hidden="true">
                {s.cislo}
              </span>
              <div className="sluzba__body">
                <h3 className="sluzba__nazev">{s.nazev}</h3>
                <p className="sluzba__popis">{s.popis}</p>
                <ul className="sluzba__detaily">
                  {s.detaily.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="reference" className="reference" aria-labelledby="ref-title">
        <div className="reference__grid">
          <div className="reference__intro">
            <p className="section-head__eyebrow">Postavené elektrárny</p>
            <h2 id="ref-title" className="section-head__title section-head__title--light">
              Čísla z reálných
              <br />
              střech, ne z ceníku
            </h2>
            <p className="reference__lead">
              Každá zakázka má jiný výkon, jinou technologii a jinou baterii —
              protože žádné dvě spotřeby nejsou stejné. Tady je pár posledních.
            </p>
            <img
              src="/section-2.webp"
              alt="Střešní fotovoltaická elektrárna realizovaná firmou ATERNA"
              className="reference__foto"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="reference__panel">
            <ul className="refcards">
              {reference.map((r) => (
                <li key={r.lokalita} className="refcard">
                  <div className="refcard__top">
                    <span className="refcard__lokalita">{r.lokalita}</span>
                    <span className="refcard__typ">{r.typ}</span>
                  </div>
                  <div className="refcard__vykon">
                    {r.vykon}
                    <span>špičkový výkon</span>
                  </div>
                  <dl className="refcard__meta">
                    <div>
                      <dt>Technologie</dt>
                      <dd>{r.technologie}</dd>
                    </div>
                    <div>
                      <dt>Akumulace</dt>
                      <dd>{r.akumulace}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>

            <div className="recenze">
              {recenze.map((rec) => (
                <blockquote key={rec.autor} className="recenze__item">
                  <p>„{rec.text}“</p>
                  <footer>
                    <span className="recenze__autor">{rec.autor}</span>
                    <span className="recenze__zdroj">{rec.zdroj}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
