import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emporio exclusive s.r.o. — zemní práce, demolice a recyklace, Pardubice",
  description:
    "Zemní práce, demolice, demontáže a recyklace v Pardubicích a okolí. Od výkopu základů po odvoz a recyklaci suti. Firma Emporio exclusive s.r.o. kope na Pardubicku od roku 2009.",
};

const sluzby = [
  {
    kod: "01",
    hloubka: "0\u2013260 cm",
    nazev: "Zemn\u00ed pr\u00e1ce",
    popis:
      "V\u00fdkopy z\u00e1klad\u016f, r\u00fdhy pro s\u00ed\u0165e, srovn\u00e1n\u00ed pozemk\u016f a ter\u00e9nn\u00ed \u00fapravy. P\u0159ijedeme s pasov\u00fdm bagrem i tam, kde velk\u00e1 technika neprojede.",
  },
  {
    kod: "02",
    hloubka: "nadzem\u00ed",
    nazev: "Demolice a demont\u00e1\u017ee",
    popis:
      "\u0158\u00edzen\u00e9 bour\u00e1n\u00ed objekt\u016f, p\u0159\u00ed\u010dek i cel\u00fdch stavieb. Rozebereme, roz\u0159e\u017eeme a od t\u0159\u00edd\u00edme \u2014 se\u017eeneme, co lze zachr\u00e1nit, a zbytek pr\u00fdch odveze.",
  },
  {
    kod: "03",
    hloubka: "materi\u00e1l",
    nazev: "Recyklace suti",
    popis:
      "Beton a cihlu neodv\u00e1\u017e\u00edme na skl\u00e1dku \u2014 drt\u00edme na recykl\u00e1t, kter\u00fd se vr\u00e1t\u00ed zp\u011bt do podklad\u016f a n\u00e1syp\u016f. Levn\u011bj\u0161\u00ed pro v\u00e1s, \u0161etrn\u011bj\u0161\u00ed ke krajin\u011b.",
  },
  {
    kod: "04",
    hloubka: "odvoz",
    nazev: "Likvidace odpad\u016f",
    popis:
      "Kontejnery, odvoz a legáln\u00ed likvidace stavebn\u00edho odpadu v\u010detn\u011b dokladu. Postar\u00e1me se o v\u0161echnu papirologii, vy m\u00e1te \u010dist\u00e9 sto.",
  },
];

const cisla = [
  { hodnota: "2009", popis: "kop\u00e1me na Pardubicku od tohoto roku" },
  { hodnota: "100+", popis: "dokon\u010den\u00fdch v\u00fdkop\u016f a demolic" },
  { hodnota: "80+", popis: "z\u00e1kazn\u00edk\u016f, kte\u0159\u00ed n\u00e1s doporu\u010dili d\u00e1l" },
];

export default function Page() {
  return (
    <main className="ee">
      <header className="ee-topbar">
        <a className="ee-wordmark" href="#top" aria-label="Emporio exclusive, dom\u016f">
          <span className="ee-wordmark-main">EMPORIO</span>
          <span className="ee-wordmark-sub">exclusive \u00b7 zemn\u00ed pr\u00e1ce</span>
        </a>
        <a className="ee-call" href="tel:+420605111992">
          <span className="ee-call-dot" aria-hidden="true" />
          +420 605 111 992
        </a>
      </header>

      <section className="ee-hero" id="top">
        <div className="ee-hero-media">
          <img
            src="/hero.webp"
            alt="Pásový bagr Emporio exclusive p\u0159i v\u00fdkopu z\u00e1klad\u016f na stavb\u011b v Pardubic\u00edch"
            className="ee-hero-img"
          />
          <div className="ee-hero-scrim" aria-hidden="true" />
        </div>

        <div className="ee-hero-body">
          <p className="ee-eyebrow">Pardubice a okol\u00ed \u00b7 Smilova 386</p>
          <h1 className="ee-hero-title">
            Kopeme, bour\u00e1me
            <br />
            <span className="ee-hero-accent">a co zbyde,</span>
            <br />
            drt\u00edme zp\u011bt.
          </h1>
          <p className="ee-hero-lede">
            Zemn\u00ed pr\u00e1ce, demolice a recyklace suti od jedn\u00e9 party. Za\u010d\u00edn\u00e1me
            u prvn\u00edho v\u00fdkopu a kon\u010d\u00edme uklizen\u00fdm pozemkem \u2014 v\u010detn\u011b
            doklad\u016f o odpadu.
          </p>
          <div className="ee-hero-cta">
            <a className="ee-btn ee-btn-primary" href="tel:+420605111992">
              Zavolat kop\u00e1\u010di
            </a>
            <a className="ee-btn ee-btn-ghost" href="mailto:tryner@emporio-exclusive.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <div className="ee-depth" aria-hidden="true">
          <span>0</span>
          <span>\u221240</span>
          <span>\u221280</span>
          <span>\u2212120</span>
          <span>\u2212160 cm</span>
        </div>
      </section>

      <section className="ee-services" aria-labelledby="sluzby-nadpis">
        <div className="ee-section-head">
          <p className="ee-eyebrow ee-eyebrow-dark">Co pro v\u00e1s ud\u011bl\u00e1me</p>
          <h2 id="sluzby-nadpis" className="ee-h2">
            \u010cty\u0159i kroky od pozemku ke stavb\u011b
          </h2>
        </div>

        <ol className="ee-service-list">
          {sluzby.map((s) => (
            <li key={s.kod} className="ee-service">
              <div className="ee-service-kod">
                <span className="ee-service-num">{s.kod}</span>
                <span className="ee-service-tag">{s.hloubka}</span>
              </div>
              <div className="ee-service-text">
                <h3 className="ee-service-name">{s.nazev}</h3>
                <p className="ee-service-desc">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="ee-service-figure">
          <img
            src="/section-1.webp"
            alt="Technika Emporio exclusive p\u0159i zemn\u00edch prac\u00edch a rovn\u00e1n\u00ed pozemku"
            className="ee-figure-img"
          />
          <figcaption className="ee-figure-cap">
            Vlastn\u00ed techniku dopravujeme na m\u00edsto \u2014 nemus\u00edte shán\u011bt
            p\u016fj\u010dovnu.
          </figcaption>
        </figure>
      </section>

      <section className="ee-trust" aria-labelledby="onas-nadpis">
        <div className="ee-trust-grid">
          <div className="ee-trust-copy">
            <p className="ee-eyebrow">Kdo kop\u00e1</p>
            <h2 id="onas-nadpis" className="ee-h2 ee-h2-light">
              Mal\u00e1 firma z Pardubic, kter\u00e1 dr\u017e\u00ed slovo od roku 2009
            </h2>
            <p className="ee-trust-para">
              Emporio exclusive s.r.o. d\u011bl\u00e1 kompletn\u00ed servis kolem zem\u011b
              a stavby \u2014 demolice, demont\u00e1\u017ee, recyklaci odpadu, rekonstrukce
              i samotn\u00e9 zemn\u00ed pr\u00e1ce. P\u0159ijedeme, pod\u00edv\u00e1me se na m\u00edsto
              a \u0159ekneme cenu, kter\u00e1 dr\u017e\u00ed.
            </p>
            <p className="ee-trust-para">
              Od roku 2010 jsme partnerem programu Nov\u00e1 zelen\u00e1 \u00fasporám
              a \u010dlenem Krajsk\u00e9 hospod\u00e1\u0159sk\u00e9 komory Pardubick\u00e9ho kraje
              i Svazu podnikatel\u016f ve stavebnictv\u00ed. Ka\u017ed\u00fd rok podporujeme
              mlad\u00e9 talenty v regionu.
            </p>

            <dl className="ee-stats">
              {cisla.map((c) => (
                <div key={c.hodnota} className="ee-stat">
                  <dt className="ee-stat-num">{c.hodnota}</dt>
                  <dd className="ee-stat-desc">{c.popis}</dd>
                </div>
              ))}
            </dl>

            <div className="ee-contact-card">
              <p className="ee-contact-line">
                <span className="ee-contact-label">Adresa</span>
                Smilova 386, 530 02 Pardubice
              </p>
              <a className="ee-contact-line ee-contact-link" href="tel:+420605111992">
                <span className="ee-contact-label">Telefon</span>
                +420 605 111 992
              </a>
              <a
                className="ee-contact-line ee-contact-link"
                href="mailto:tryner@emporio-exclusive.cz"
              >
                <span className="ee-contact-label">E-mail</span>
                tryner@emporio-exclusive.cz
              </a>
            </div>
          </div>

          <figure className="ee-trust-figure">
            <img
              src="/section-2.webp"
              alt="Recyklace stavebn\u00ed suti a odvoz materi\u00e1lu firmou Emporio exclusive"
              className="ee-figure-img"
            />
            <figcaption className="ee-figure-cap ee-figure-cap-light">
              Sut z jedn\u00e9 stavby se \u010dasto st\u00e1v\u00e1 podkladem pro dal\u0161\u00ed.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
