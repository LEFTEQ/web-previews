import React from "react";

const sluzby = [
  {
    hloubka: "20–80 m",
    nazev: "Vrtané studny na klíč",
    popis:
      "Od vyhledání zdroje po kolaudaci. Vrt, čerpací zkouška, rozbor vody, zhlaví i domácí vodárna napojená do domu — jeden dodavatel, jedna odpovědnost.",
  },
  {
    hloubka: "§ 17",
    nazev: "Hydrogeologie a povolení",
    popis:
      "Hydrogeologické vyjádření, projektová dokumentace a souhlas dle vodního zákona. Provedeme vás legalizací nové i staré studny až po kolaudaci.",
  },
  {
    hloubka: "80–150 m",
    nazev: "Vrty pro tepelná čerpadla",
    popis:
      "Vrtné práce pro zemní kolektory a tepelná čerpadla země–voda. Technika i posádka na vrty většího rozsahu po celé ČR.",
  },
  {
    hloubka: "H₂O",
    nazev: "Rozbory a čerpadla",
    popis:
      "Hydrodynamické zkoušky, odběr vzorků a laboratorní rozbor vody, ponorná čerpadla a domácí vodárny. Monitoring hladiny podzemní vody.",
  },
];

const kroky = [
  {
    c: "01",
    t: "Konzultace zdarma",
    d: "Ozvěte se s adresou pozemku. Řekneme, jaké jsou šance na vodu a co obnáší povolení.",
  },
  {
    c: "02",
    t: "Průzkum a projekt",
    d: "Vyhledáme zdroj, zpracujeme projekt hydrogeologických prací a zajistíme souhlas dle § 17 vodního zákona.",
  },
  {
    c: "03",
    t: "Vrt a zkouška",
    d: "Vyvrtáme průzkumný vrt, provedeme hydrodynamickou zkoušku a odebereme vzorek vody k rozboru.",
  },
  {
    c: "04",
    t: "Zhlaví a kolaudace",
    d: "Vytvoříme zhlaví vrtu, napojíme domácí vodárnu do domu a dotáhneme legalizaci až po kolaudaci.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="HS geo, domů">
          <span className="wordmark__hs">HS</span>
          <span className="wordmark__geo">geo</span>
          <span className="wordmark__depth" aria-hidden="true" />
        </a>
        <div className="topbar__meta">
          <span className="topbar__loc">Brno · vrtané studny od 2004</span>
          <a className="topbar__tel" href="tel:+420546223590">
            +420 546 223 590
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero__strata" aria-hidden="true">
          <span data-d="0 m">ornice</span>
          <span data-d="6 m">jíly</span>
          <span data-d="18 m">písky</span>
          <span data-d="34 m">štěrky · voda">štěrky · voda</span>
          <span data-d="60 m">skalní podloží</span>
        </div>
        <div className="hero__inner">
          <p className="hero__eyebrow">Vrtané studny · hydrogeologie · Brno a celá ČR</p>
          <h1 className="hero__title">
            Voda je tam dole.<br />
            <span className="hero__title--accent">My víme, kde vrtat.</span>
          </h1>
          <p className="hero__lead">
            Děláme studny na klíč — od vyhledání zdroje přes vrt a čerpací
            zkoušku až po kolaudaci a domácí vodárnu napojenou do domu.
            Poradenství a konzultace jsou u nás zdarma.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420546223590">
              Zavolat a probrat pozemek
            </a>
            <a className="btn btn--ghost" href="mailto:info@hsgeo.cz">
              Napsat na info@hsgeo.cz
            </a>
          </div>
        </div>
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Vrtná souprava HS geo při realizaci vrtané studny"
          loading="eager"
        />
      </section>

      <section className="services" aria-labelledby="services-h">
        <div className="section-head">
          <p className="section-head__kicker">Co pro vás vyvrtáme</p>
          <h2 id="services-h" className="section-head__title">
            Jeden tým na celou cestu k vlastní vodě
          </h2>
        </div>
        <ul className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.nazev}>
              <span className="card__depth">{s.hloubka}</span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <div className="trust__grid">
          <div className="trust__media">
            <img
              src="/section-1.webp"
              alt="Zhlaví vrtu s domácí vodárnou od HS geo"
              loading="lazy"
            />
            <img
              src="/section-2.webp"
              alt="Odběr vzorku vody z vrtané studny k laboratornímu rozboru"
              loading="lazy"
            />
          </div>
          <div className="trust__body">
            <p className="section-head__kicker">Jak to u nás probíhá</p>
            <h2 id="trust-h" className="section-head__title">
              Od telefonátu ke kolaudované studni ve čtyřech krocích
            </h2>
            <p className="trust__lead">
              Realizací zemních vrtů se zabýváme od roku 2004. Technika i
              posádka zvládnou i práce většího rozsahu po celém území ČR —
              a papírování kolem povolení vyřídíme za vás.
            </p>
            <ol className="steps">
              {kroky.map((k) => (
                <li className="step" key={k.c}>
                  <span className="step__num">{k.c}</span>
                  <div>
                    <h3 className="step__title">{k.t}</h3>
                    <p className="step__text">{k.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
