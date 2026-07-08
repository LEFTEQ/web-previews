import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milan Penčák — zemní práce a kontejnerová doprava Brno",
  description:
    "Zemní práce, výkopy a kontejnerová doprava v Brně a okolí. Přípojky, základové pasy, pokládka dlažby, odvoz suti. Vlastní bagry a kontejnery, na trhu od roku 2005.",
  openGraph: {
    title: "Milan Penčák — zemní práce a kontejnerová doprava Brno",
    description:
      "Výkopy, přípojky, základové pasy a odvoz suti v kontejnerech. Vlastní technika, Brno a okolí, od roku 2005.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const stroje = [
  {
    kod: "UNC",
    nazev: "Smykem řízený nakladač UNC",
    role: "Nakládání, srovnávání terénu, práce v úzkých prostorech.",
  },
  {
    kod: "CASE",
    nazev: "Pásové minirýpadlo Case 5",
    role: "Výkopy tam, kde se velký stroj nedostane.",
  },
  {
    kod: "NH 4t",
    nazev: "Pásové minirýpadlo New Holland 4 t",
    role: "Základové pasy, přípojky, výkopy pro bazén.",
  },
  {
    kod: "12 t",
    nazev: "Iveco 12 t — kontejnery 3–10 m³",
    role: "Dovoz materiálu i odvoz suti a zeminy.",
  },
  {
    kod: "18 t",
    nazev: "Iveco 18 t — kontejnery 6 m³",
    role: "Větší náklady a stavební materiál na jeden zátah.",
  },
];

const prace = [
  {
    cislo: "01",
    nazev: "Výkopy a základy",
    popis:
      "Výkopy základových pasů, jam a rýh. Připravíme stavbu tak, aby na ni šlo hned navázat.",
  },
  {
    cislo: "02",
    nazev: "Přípojky",
    popis:
      "Kanalizační a vodovodní přípojky — od výkopu rýhy po zásyp a urovnání terénu.",
  },
  {
    cislo: "03",
    nazev: "Bazény a dlažba",
    popis:
      "Výkopy a montáže bazénů, pokládka zámkové dlažby a příprava podloží.",
  },
  {
    cislo: "04",
    nazev: "Kontejnerová doprava",
    popis:
      "Dovoz písku, štěrku a stavebního materiálu, odvoz suti a zeminy v kontejnerech 3–10 m³.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Milan Penčák — zemní práce">
          <span className="wordmark__name">PENČÁK</span>
          <span className="wordmark__sub">zemní práce · doprava</span>
        </a>
        <a className="topbar__tel" href="tel:+420603100245">
          603&nbsp;100&nbsp;245
        </a>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Pásové minirýpadlo Milana Penčáka při výkopových pracích"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">Brno — Horní Heršpice · od roku 2005</p>
          <h1 className="hero__title">
            Kopeme, vozíme,
            <br />
            <span className="hero__title--accent">odklízíme.</span>
          </h1>
          <p className="hero__lead">
            Zemní práce a kontejnerová doprava od jednoho člověka, který u toho
            stojí. Přijedu se podívat, řeknu cenu na rovinu a udělám, na čem se
            domluvíme.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420603100245">
              Zavolat 603&nbsp;100&nbsp;245
            </a>
            <a className="btn btn--ghost" href="#prace">
              Co dělám
            </a>
          </div>
        </div>

        <ul className="hero__strip" aria-label="Ve zkratce">
          <li>
            <span className="hero__stripNum">2005</span>
            <span className="hero__stripLbl">na trhu od</span>
          </li>
          <li>
            <span className="hero__stripNum">3–10&nbsp;m³</span>
            <span className="hero__stripLbl">kontejnery</span>
          </li>
          <li>
            <span className="hero__stripNum">5</span>
            <span className="hero__stripLbl">vlastních strojů</span>
          </li>
        </ul>
      </section>

      <section className="prace" id="prace">
        <div className="section__head">
          <p className="eyebrow">Co pro vás udělám</p>
          <h2 className="section__title">Od výkopu po odvoz suti</h2>
          <p className="section__intro">
            Většinu zakázek zvládnu vlastní technikou od začátku do konce — jeden
            kontakt, jedna faktura, žádné předávání mezi firmami.
          </p>
        </div>

        <div className="prace__grid">
          <ol className="prace__list">
            {prace.map((p) => (
              <li className="prace__item" key={p.cislo}>
                <span className="prace__num">{p.cislo}</span>
                <div className="prace__body">
                  <h3 className="prace__name">{p.nazev}</h3>
                  <p className="prace__desc">{p.popis}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="prace__figure">
            <img
              src="/section-1.webp"
              alt="Výkopové a zemní práce na stavbě v Brně"
              className="prace__img"
            />
            <figcaption>Výkop základů rodinného domu, Brno-venkov.</figcaption>
          </figure>
        </div>
      </section>

      <section className="stroje" id="stroje">
        <div className="stroje__wrap">
          <figure className="stroje__figure">
            <img
              src="/section-2.webp"
              alt="Kontejnerový vůz a technika Milana Penčáka"
              className="stroje__img"
            />
          </figure>

          <div className="stroje__content">
            <div className="section__head">
              <p className="eyebrow">Technika a proč mi věřit</p>
              <h2 className="section__title">Vlastní stroje, žádné výmluvy</h2>
              <p className="section__intro">
                Bagry i vozy jsou moje. Nečekáte na podnájem techniky a víte, kdo
                za práci ručí — potkáte mě přímo na place.
              </p>
            </div>

            <ul className="stroje__list">
              {stroje.map((s) => (
                <li className="stroje__item" key={s.nazev}>
                  <span className="stroje__kod">{s.kod}</span>
                  <div>
                    <p className="stroje__nazev">{s.nazev}</p>
                    <p className="stroje__role">{s.role}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="stroje__note">
              Milan Penčák · IČ 67581315 · Osamělá 711/101, Brno–Horní Heršpice
              619&nbsp;00. Zapsáno v živnostenském rejstříku města Brna.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
