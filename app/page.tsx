import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Svatební salon BeStar — Pardubice | Šaty, obleky a krejčovské studio",
  description:
    "Rodinný svatební a společenský salon v centru Pardubic. Přes dvacet let zkušeností, šaty z celého světa, pánská móda i vlastní krejčovská úprava na míru. Zkoušení jen na telefonické objednání.",
  openGraph: {
    title: "Svatební salon BeStar — Pardubice",
    description:
      "Svatební a společenské šaty, pánská móda a úpravy na míru ve vlastním krejčovském studiu. Za Pasáží 1341, Pardubice.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Svatební salon BeStar" }],
  },
};

const kolekce = [
  {
    znacka: "Svatební móda",
    popis:
      "Nicole Milano by Pronovias, Christian Koehlert, Natali Bridal, Lovely, Agnes Bridal Dream — a k tomu stálý výprodej modelů z minulých sezón.",
    detail: "ČR · Francie · Itálie · Polsko · USA · Nizozemí",
  },
  {
    znacka: "Společenská móda",
    popis:
      "London, Corizzi, Christian Koehlert, Kira Nova, Diane Legrand. Šaty na ples, na maturitu, na svatbu ve víru tanečních.",
    detail: "Na svědky, na hosty, na svatební matku",
  },
  {
    znacka: "Pánská móda",
    popis:
      "Obleky a smokingy, košile, vestičky, kravaty, motýlky, manžetové knoflíčky i společenská obuv. Na ženicha nezapomínáme.",
    detail: "Celý ženich od bot po motýlka",
  },
];

const duvody = [
  {
    cislo: "01",
    nadpis: "Vlastní krejčovské studio",
    text: "Šaty vám neprodáme a nepošleme domů. Zkrátíme rukáv, upravíme pas, posadíme živůtek — dokud nesedne přesně na vás.",
  },
  {
    cislo: "02",
    nadpis: "Šaty z celého světa",
    text: "Vybíráme na veletrzích v Itálii, Francii i za oceánem. To, co si obléknete, tu nemá každý druhý salon v okolí.",
  },
  {
    cislo: "03",
    nadpis: "Přátelská rodinná atmosféra",
    text: "Věnujeme se jedné zákaznici v jeden čas. Když právě zkoušíme, hovor nezvedneme — ale zavoláme zpět, jakmile to jde.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Svatební salon BeStar, Pardubice">
          <span className="wordmark__be">Be</span>
          <span className="wordmark__star" aria-hidden="true">✦</span>
          <span className="wordmark__star-word">Star</span>
        </a>
        <span className="topbar__meta">Svatební salon · Pardubice · od 2003</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Svatební šaty vystavené v salonu BeStar v Pardubicích"
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Za Pasáží 1341 · centrum Pardubic</p>
          <h1 id="hero-title" className="hero__title">
            Šaty, ve kterých si <em>řeknete&nbsp;ano</em>.
          </h1>
          <p className="hero__lead">
            Stylový svatební a společenský salon v centru Pardubic. Vybíráme
            modely z celého světa a upravujeme je na míru ve vlastním
            krejčovském studiu — dvacet let jednu nevěstu za druhou.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420737667194">
              Objednat zkoušení: 737&nbsp;667&nbsp;194
            </a>
            <a className="btn btn--ghost" href="#kolekce">
              Co u nás najdete
            </a>
          </div>
          <p className="hero__note">
            Termín zkoušení domlouváme telefonicky — rychleji najdeme čas, který
            vám sedne. Po–Pá 10–17:30, so na objednání.
          </p>
        </div>
      </section>

      <section className="section kolekce" id="kolekce" aria-labelledby="kolekce-title">
        <div className="section__head">
          <p className="eyebrow">Co si u nás vyzkoušíte</p>
          <h2 id="kolekce-title" className="section__title">
            Tři šatny, jedna svatba
          </h2>
        </div>
        <div className="kolekce__media">
          <img
            src="/section-1.webp"
            alt="Detail svatebních a společenských šatů v salonu BeStar"
            className="section__img"
          />
        </div>
        <ul className="cards">
          {kolekce.map((k) => (
            <li className="card" key={k.znacka}>
              <h3 className="card__title">{k.znacka}</h3>
              <p className="card__text">{k.popis}</p>
              <p className="card__detail">{k.detail}</p>
            </li>
          ))}
        </ul>
        <p className="kolekce__foot">
          Nechcete kupovat? Máme i <strong>půjčovnu šatů</strong> a stálý
          výprodej modelů z minulých kolekcí.
        </p>
      </section>

      <section className="section duvera" aria-labelledby="duvera-title">
        <div className="duvera__media">
          <img
            src="/section-2.webp"
            alt="Krejčovské studio salonu BeStar při úpravě šatů na míru"
            className="section__img"
          />
        </div>
        <div className="duvera__body">
          <div className="section__head">
            <p className="eyebrow">Proč zrovna k nám</p>
            <h2 id="duvera-title" className="section__title">
              Dvacet let a jedna nevěsta v jeden čas
            </h2>
          </div>
          <ol className="steps">
            {duvody.map((d) => (
              <li className="step" key={d.cislo}>
                <span className="step__num" aria-hidden="true">
                  {d.cislo}
                </span>
                <div>
                  <h3 className="step__title">{d.nadpis}</h3>
                  <p className="step__text">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="duvera__where">
            Najdete nás <strong>Za Pasáží 1341, 530&nbsp;02 Pardubice</strong>.
            Předem se prosím objednejte na{" "}
            <a href="tel:+420737667194">737&nbsp;667&nbsp;194</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
