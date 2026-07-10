import type { CSSProperties } from "react";

export default function Page() {
  const depthMarkers = ["0 m", "1 m", "2 m", "3 m", "4 m"];

  const sluzby = [
    {
      kod: "HL",
      nazev: "Hloubení a výkopy",
      popis:
        "Základové pasy, rýhy pro inženýrské sítě, jímky, jezírka. Kopeme přesně podle výkresu i podle toho, co najdeme v zemi — na skálu i na jíl máme lžíci.",
      detail: "pásové bagry 1,8–8 t",
    },
    {
      kod: "TÚ",
      nazev: "Terénní úpravy",
      popis:
        "Srovnání pozemku pod stavbu i zahradu, svahování, navážky, rozhrnutí ornice. Odjíždíme, až je plocha rovná do centimetru.",
      detail: "smykové nakladače, grejdrová lžíce",
    },
    {
      kod: "DE",
      nazev: "Demolice a odvoz",
      popis:
        "Bourání staveb, odtěžení a odvoz zeminy i suti na skládku. Vozíme sklápěči, se skládkou i recyklací si poradíme za vás.",
      detail: "sklápěče, kladivo na bagr",
    },
  ];

  const cisla = [
    { hodnota: "2000", popis: "kopeme na Brněnsku od roku" },
    { hodnota: "50 000+", popis: "m³ přemístěné zeminy" },
    { hodnota: "500+", popis: "dokončených zakázek" },
    { hodnota: "50 km", popis: "dojezd okolo Brna" },
  ];

  const mesta = [
    "Brno",
    "Kuřim",
    "Tišnov",
    "Blansko",
    "Vyškov",
    "Slavkov u Brna",
    "Pohořelice",
    "Veverská Bítýška",
    "Velká Bíteš",
    "Náměšť nad Oslavou",
  ];

  return (
    <main className="zk">
      <header className="zk-top">
        <a className="zk-brand" href="#top" id="top" aria-label="Zemní práce Kadlec — úvod">
          <span className="zk-brand-mark" aria-hidden="true">
            <span className="zk-brand-bucket" />
          </span>
          <span className="zk-brand-text">
            <span className="zk-brand-name">KADLEC</span>
            <span className="zk-brand-sub">zemní práce · Brno</span>
          </span>
        </a>
        <a className="zk-phone" href="tel:+420777519513">
          <span className="zk-phone-label">Zavolat</span>
          <span className="zk-phone-num">777 519 513</span>
        </a>
      </header>

      <section className="zk-hero" aria-labelledby="zk-hero-title">
        <div className="zk-hero-media">
          <img
            src="/hero.webp"
            alt="Pásový bagr Zemní práce Kadlec při hloubení základů na stavbě u Brna"
            className="zk-hero-img"
            loading="eager"
          />
          <div className="zk-hero-scale" aria-hidden="true">
            {depthMarkers.map((m) => (
              <span key={m} className="zk-hero-scale-tick">
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="zk-hero-body">
          <p className="zk-eyebrow">Přijedeme, změříme, kopeme</p>
          <h1 id="zk-hero-title" className="zk-hero-title">
            Rozkopeme
            <br />
            to za vás.
          </h1>
          <p className="zk-hero-lede">
            Základy, sítě, srovnání pozemku i demolice — od rýhy na kabel po
            celou stavební jámu. Kolem Brna do padesáti kilometrů, se strojem
            na míru té konkrétní zemině.
          </p>
          <div className="zk-hero-actions">
            <a className="zk-btn zk-btn-primary" href="tel:+420777519513">
              Zavolat 777 519 513
            </a>
            <a className="zk-btn zk-btn-ghost" href="#sluzby">
              Co umíme vykopat
            </a>
          </div>
        </div>
      </section>

      <section className="zk-services" id="sluzby" aria-labelledby="zk-services-title">
        <div className="zk-section-head">
          <p className="zk-eyebrow">Naše práce</p>
          <h2 id="zk-services-title" className="zk-section-title">
            Tři věci, které děláme pořádně
          </h2>
        </div>

        <ol className="zk-service-list">
          {sluzby.map((s) => (
            <li key={s.kod} className="zk-service">
              <span className="zk-service-code" aria-hidden="true">
                {s.kod}
              </span>
              <div className="zk-service-text">
                <h3 className="zk-service-name">{s.nazev}</h3>
                <p className="zk-service-desc">{s.popis}</p>
                <p className="zk-service-detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="zk-service-figure">
          <img
            src="/section-1.webp"
            alt="Bagr Zemní práce Kadlec při výkopových pracích na pozemku"
            loading="lazy"
          />
          <figcaption>
            Na každou zakázku bereme stroj podle terénu — malý pásáč projede
            brankou do zahrady, velký zvládne den práce v jámě.
          </figcaption>
        </figure>
      </section>

      <section className="zk-trust" id="o-nas" aria-labelledby="zk-trust-title">
        <div className="zk-trust-inner">
          <div className="zk-trust-head">
            <p className="zk-eyebrow zk-eyebrow-dark">O nás</p>
            <h2 id="zk-trust-title" className="zk-section-title zk-section-title-dark">
              František Kadlec za volantem od roku 2000
            </h2>
            <p className="zk-trust-lede">
              Žádná dispečerská linka, žádné subdodavatele naslepo. Na pozemek
              přijede člověk, který ten bagr sám řídí — poradí, kudy vést sítě,
              kam s vykopanou zeminou a co dává smysl udělat najednou. Pracujeme
              rychle, čistě a bez překvapení v ceně.
            </p>
          </div>

          <dl className="zk-stats">
            {cisla.map((c) => (
              <div key={c.hodnota} className="zk-stat">
                <dt className="zk-stat-num">{c.hodnota}</dt>
                <dd className="zk-stat-desc">{c.popis}</dd>
              </div>
            ))}
          </dl>

          <figure className="zk-trust-figure">
            <img
              src="/section-2.webp"
              alt="Terénní úpravy a srovnání pozemku strojem firmy Kadlec"
              loading="lazy"
            />
          </figure>

          <div className="zk-area">
            <h3 className="zk-area-title">Kam dojedeme</h3>
            <p className="zk-area-note">
              Jižní Morava do 50 km od Brna. Mimo jiné:
            </p>
            <ul className="zk-area-list">
              {mesta.map((m) => (
                <li key={m} className="zk-area-item">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
