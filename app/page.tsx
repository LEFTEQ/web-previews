import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Václav Moser — úprava terénu a zemní práce | České Budějovice",
  description:
    "Zemní práce, terénní úpravy a autodoprava v Českých Budějovicích a jihočeském kraji. Minibagr CAT 302.5C, traktorbagr CAT 432E, hydraulická ruka. Od výkopu po hotový terén.",
  openGraph: {
    title: "Václav Moser — úprava terénu a zemní práce",
    description:
      "Od syrové zeminy k rovnému terénu. Zemní práce, výkopy a autodoprava v Českých Budějovicích a celém jihočeském kraji.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Terénní úpravy strojem v Českých Budějovicích" }],
  },
};

const stroje = [
  {
    kod: "CAT 302.5C",
    nazev: "Minibagr",
    hmotnost: "3 t",
    popis:
      "Do úzkých míst, k základovým deskám i k drenážím na zahradě. Tam, kde velký stroj neprojede.",
  },
  {
    kod: "CAT 432E",
    nazev: "Traktorbagr",
    hmotnost: "8 t",
    popis:
      "Výkopy, hloubení, srovnání pláně. Nakládá i kope — na běžné stavbě odvede práci za dva stroje.",
  },
  {
    kod: "T 815",
    nazev: "Tatra + hydraulická ruka",
    hmotnost: "—",
    popis:
      "Odvoz suti, návoz štěrku a zeminy, paletová přeprava. Ruka složí materiál přesně tam, kam patří.",
  },
];

const prace = [
  {
    stopa: "01",
    titul: "Zemní práce a terén",
    text: "Výkopy, základové desky, srovnání a modelace terénu. Zaměříme spád, odhadneme kubíky a zeminu odvezeme — nebo přemístíme tam, kde se ještě hodí.",
  },
  {
    stopa: "02",
    titul: "Autodoprava a materiál",
    text: "Návoz štěrku, písku a suchých směsí, odvoz stavební suti, asfaltu i paletová přeprava. Hydraulická ruka složí náklad bez ruční práce navíc.",
  },
  {
    stopa: "03",
    titul: "Dokončíme celou stavbu",
    text: "Zednické a klempířské práce vlastní kapacitou, asfaltování, a k tomu prověření řemeslníci na zbytek. Zakázku vedeme od prvního výkopu po hotovo.",
  },
];

export default function Page() {
  return (
    <main className="vm">
      <header className="vm-top">
        <a className="vm-mark" href="#" aria-label="Václav Moser, úprava terénu">
          <span className="vm-mark__name">MOSER</span>
          <span className="vm-mark__sub">úprava terénu · Č. Budějovice</span>
        </a>
        <a className="vm-call" href="tel:+420602000000">
          Zavolat 602&nbsp;000&nbsp;000
        </a>
      </header>

      <section className="vm-hero">
        <div className="vm-hero__media">
          <img
            src="/hero.webp"
            alt="Traktorbagr při úpravě terénu na stavbě u Českých Budějovic"
            className="vm-hero__img"
          />
        </div>
        <div className="vm-hero__body">
          <p className="vm-eyebrow">Zemní práce · terén · autodoprava</p>
          <h1 className="vm-hero__title">
            Ze syrové <span className="vm-hero__accent">zeminy</span>
            <br />
            rovný terén pod stavbu.
          </h1>
          <p className="vm-hero__lead">
            Václav Moser dělá zemní práce a terénní úpravy v Českých Budějovicích
            a po celém jihočeském kraji. Přijedeme, zaměříme spád a odjedete
            s pláněй připravenou na základ.
          </p>
          <div className="vm-hero__cta">
            <a className="vm-btn vm-btn--solid" href="tel:+420602000000">
              Zavolat a domluvit termín
            </a>
            <a className="vm-btn vm-btn--line" href="mailto:info@moser-teren.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="vm-hero__meta">
            <div>
              <dt>Na trhu od</dt>
              <dd>2004</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>celý Jihočeský kraj</dd>
            </div>
            <div>
              <dt>Vedeme</dt>
              <dd>celou zakázku</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="vm-sec" aria-labelledby="prace">
        <div className="vm-sec__head">
          <h2 id="prace" className="vm-sec__title">
            Co pro vás uděláme
          </h2>
          <p className="vm-sec__note">
            Tři kroky, které na sebe navazují — a jeden dodavatel na všechny.
          </p>
        </div>
        <ol className="vm-list">
          {prace.map((p) => (
            <li key={p.stopa} className="vm-list__item">
              <span className="vm-list__depth" aria-hidden="true">
                {p.stopa}
              </span>
              <div className="vm-list__body">
                <h3 className="vm-list__title">{p.titul}</h3>
                <p className="vm-list__text">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="vm-trust" aria-labelledby="stroje">
        <div className="vm-trust__media">
          <img
            src="/section-1.webp"
            alt="Minibagr CAT při zemních pracích"
            className="vm-trust__img"
          />
        </div>
        <div className="vm-trust__body">
          <p className="vm-eyebrow">Stroje, které vezmeme na váš pozemek</p>
          <h2 id="stroje" className="vm-sec__title">
            Vlastní mechanizace, žádné čekání na poddodavatele
          </h2>
          <p className="vm-trust__lead">
            Firmu jsme založili v roce 2004 se dvěma Tatrami 815. Od té doby jsme
            přidali bagry a stavební stroje a postupně je modernizovali. Na
            stavbu tak přijedeme s tím, co je zrovna potřeba.
          </p>
          <ul className="vm-fleet">
            {stroje.map((s) => (
              <li key={s.kod} className="vm-fleet__row">
                <span className="vm-fleet__kod">{s.kod}</span>
                <span className="vm-fleet__nazev">{s.nazev}</span>
                <span className="vm-fleet__hm">{s.hmotnost}</span>
                <span className="vm-fleet__popis">{s.popis}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
