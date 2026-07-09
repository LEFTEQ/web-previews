import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "01",
      nazev: "Protektory",
      popis:
        "Vlastní výroba protektorovaných plášťů pro nákladní vozy. Nový běhoun na prověřené kostře — nižší cena za kilometr než u nové pneumatiky.",
      detail: "Nákladní · agro · stavební",
    },
    {
      kod: "02",
      nazev: "Nákladní pneumatiky",
      popis:
        "Prodej a montáž plášťů pro kamiony, autobusy, zemědělské a lesnické stroje. Skladem běžné rozměry, ostatní do druhého dne.",
      detail: "Agro · stavební · lesnické",
    },
    {
      kod: "03",
      nazev: "Pneuservis osobní",
      popis:
        "Přezutí, vyvážení, opravy defektů. Objednáte se online, přijedete v domluvený čas a nečekáte ve frontě.",
      detail: "Osobní · dodávky · SUV",
    },
    {
      kod: "04",
      nazev: "Mobilní servis",
      popis:
        "Defekt v terénu nebo na stavbě? Přijedeme k vozu s dílnou v autě a opravíme pneumatiku na místě.",
      detail: "Výjezd po Královéhradecku",
    },
  ];

  const duvera = [
    { cislo: "1994", label: "rok založení v Hradci" },
    { cislo: "VIANOR", label: "autorizovaný partner" },
    { cislo: "ISO 9002", label: "certifikovaná výroba" },
    { cislo: "CZ+SK", label: "provozy ve dvou zemích" },
  ];

  return (
    <main className="ap">
      <header className="ap-nav" aria-label="Hlavní navigace">
        <a className="ap-brand" href="#uvod" aria-label="Alma Pneu, úvod">
          <span className="ap-brand-mark" aria-hidden="true">
            <span className="ap-tread" />
          </span>
          <span className="ap-brand-word">
            ALMA<span className="ap-brand-accent">PNEU</span>
          </span>
        </a>
        <nav className="ap-links">
          <a href="#sluzby">Služby</a>
          <a href="#protektory">Protektory</a>
          <a href="#firma">O firmě</a>
        </nav>
        <a className="ap-nav-cta" href="tel:+420495000000">
          Objednat na servis
        </a>
      </header>

      <section className="ap-hero" id="uvod">
        <div className="ap-hero-media">
          <img
            src="/hero.webp"
            alt="Montáž nákladní pneumatiky v dílně Alma Pneu"
            className="ap-hero-img"
          />
          <div className="ap-hero-scrim" aria-hidden="true" />
        </div>
        <div className="ap-hero-inner">
          <p className="ap-eyebrow">Pneuservis a výroba protektorů · Hradec Králové</p>
          <h1 className="ap-hero-title">
            Od defektu ke splašené
            <br />
            gumě, co drží další
            <br />
            <span className="ap-hero-hl">stovky tisíc kilometrů.</span>
          </h1>
          <p className="ap-hero-lede">
            Přezouváme osobáky, obouváme kamiony i traktory a v naší dílně
            protektorujeme nákladní pláště. Když píchnete na cestě, přijedeme za
            vámi.
          </p>
          <div className="ap-hero-actions">
            <a className="ap-btn ap-btn-primary" href="tel:+420495000000">
              Zavolat do servisu
            </a>
            <a className="ap-btn ap-btn-ghost" href="#sluzby">
              Rezervovat termín online
            </a>
          </div>
          <dl className="ap-hero-facts">
            {duvera.map((d) => (
              <div className="ap-fact" key={d.label}>
                <dt>{d.cislo}</dt>
                <dd>{d.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="ap-section ap-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ap-section-head">
          <p className="ap-eyebrow ap-eyebrow-dark">Co pro vás uděláme</p>
          <h2 className="ap-h2" id="sluzby-h">
            Čtyři věci umíme líp než ostatní v kraji.
          </h2>
        </div>
        <div className="ap-services-body">
          <ol className="ap-service-list">
            {sluzby.map((s) => (
              <li className="ap-service" key={s.kod}>
                <span className="ap-service-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <div className="ap-service-text">
                  <h3 className="ap-service-name">{s.nazev}</h3>
                  <p className="ap-service-desc">{s.popis}</p>
                  <p className="ap-service-detail">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="ap-services-figure" id="protektory">
            <img
              src="/section-1.webp"
              alt="Detail nového běhounu na protektorované nákladní pneumatice"
              className="ap-figure-img"
            />
            <figcaption>
              Vlastní výroba protektorů — nová guma na prověřené kostře
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ap-section ap-trust" id="firma" aria-labelledby="firma-h">
        <div className="ap-trust-grid">
          <figure className="ap-trust-figure">
            <img
              src="/section-2.webp"
              alt="Sklad pneumatik a dílna Alma Pneu v Hradci Králové"
              className="ap-figure-img"
            />
          </figure>
          <div className="ap-trust-text">
            <p className="ap-eyebrow ap-eyebrow-dark">O firmě</p>
            <h2 className="ap-h2" id="firma-h">
              Rodinný pneuservis, který jezdí na gumách od roku 1994.
            </h2>
            <p className="ap-trust-lede">
              Alma Pneu vyrábí protektory a stará se o pneumatiky osobních i
              nákladních vozů z Hradce Králové. Jako autorizovaný partner sítě
              VIANOR a s certifikací ISO 9002 víme, že na gumách závisí bezpečnost —
              a podle toho k nim přistupujeme.
            </p>
            <ul className="ap-trust-list">
              <li>
                <strong>Objednáte se online</strong> a přijedete v přesný čas.
                Žádné čekání celé dopoledne.
              </li>
              <li>
                <strong>Huštění inertním plynem</strong> pro stabilnější tlak a
                delší životnost plášťů.
              </li>
              <li>
                <strong>B2B i e-shop</strong> pro firmy, dopravce a autoservisy po
                celé ČR i na Slovensku.
              </li>
            </ul>
            <p className="ap-trust-loc">
              Alma Pneu s.r.o. · Hradec Králové · IČO 25392344
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const _s: CSSProperties = {};
