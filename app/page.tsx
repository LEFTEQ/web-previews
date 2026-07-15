import React from "react";

export default function Page() {
  const services = [
    {
      tag: "DIAG",
      title: "Počítačová diagnostika",
      text: "Napojíme skener, přečteme chybové kódy z řídicích jednotek a najdeme příčinu závady, ne jen příznak.",
    },
    {
      tag: "SRV",
      title: "Autoservis",
      text: "Opravy motoru, brzd, podvozku i elektroinstalace. Montujeme originální díly nebo prověřené performance značky.",
    },
    {
      tag: "PNE",
      title: "Pneuservis",
      text: "Přezujeme vůz na počkání. Zavolejte, doladíme termín a přijeďte.",
    },
    {
      tag: "LAK",
      title: "Lakovna a klempířina",
      text: "Kompletní lakování i rovnání karoserie po nehodě, včetně přípravy a leštění.",
    },
    {
      tag: "ODT",
      title: "Odtahová služba",
      text: "Odvezeme porouchaný vůz do servisu nebo k vám domů, po Plzni i okolí.",
    },
    {
      tag: "EXP",
      title: "Express 7 dní v týdnu",
      text: "Otevřeno i o víkendu, když oprava nepočká a auto potřebujete hned.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Napojíme skener",
      text: "Zásuvka OBD-II pod volantem. Za pár vteřin komunikujeme s vozem.",
    },
    {
      n: "02",
      title: "Přečteme kódy",
      text: "Z řídicích jednotek motoru, ABS i airbagů vytáhneme všechny uložené závady.",
    },
    {
      n: "03",
      title: "Změříme naživo",
      text: "Hodnoty senzorů za chodu motoru, ať víme, jestli díl opravdu selhává.",
    },
    {
      n: "04",
      title: "Ukážeme výsledek",
      text: "Vysvětlíme závadu srozumitelně a cenu opravy řekneme dopředu.",
    },
  ];

  return (
    <main className="page">
      <header className="hero">
        <img
          className="hero__bg"
          src="/hero.webp"
          alt="Diagnostika vozidla v dílně Auto Dominik v Plzni-Slovanech"
        />
        <div className="hero__veil" aria-hidden="true" />

        <nav className="nav" aria-label="Hlavní">
          <a className="wm" href="#uvod" aria-label="Auto Dominik, úvod">
            <span className="wm__mark" aria-hidden="true">
              <span className="wm__led" />
            </span>
            <span className="wm__txt">
              <b>AUTO</b>DOMINIK
            </span>
          </a>
          <a className="btn btn--sm" href="tel:+420793968132">
            Zavolat
          </a>
        </nav>

        <div className="hero__grid" id="uvod">
          <div className="hero__copy">
            <p className="eyebrow">Diagnostika vozidel · Plzeň-Slovany</p>
            <h1 className="hero__title">
              Svítí kontrolka?
              <br />
              Řekneme vám <em>přesně</em> proč.
            </h1>
            <p className="hero__lede">
              Napojíme skener na váš vůz, přečteme chybové kódy a změříme data
              naživo. Než cokoli měníme, víme, co je špatně — a kolik oprava
              bude stát.
            </p>
            <div className="hero__cta">
              <a className="btn" href="tel:+420793968132">
                Zavolat 793 968 132
              </a>
              <span className="hero__addr">Skladová 23, Plzeň 2-Slovany</span>
            </div>
          </div>

          <div
            className="readout"
            role="img"
            aria-label="Ukázka diagnostického protokolu: skener přečetl chybové kódy P0300, P0420 a P0171 a jako příčinu určil vadnou zapalovací cívku třetího válce."
          >
            <div className="readout__top">
              <span className="readout__name">SKENER · OBD-II</span>
              <span className="readout__online">
                <i className="dot" aria-hidden="true" />
                ONLINE
              </span>
            </div>
            <ul className="readout__list">
              <li>
                <span className="code">P0300</span>
                <span className="desc">Vynechává zapalování</span>
                <span className="stat stat--err">ZÁVADA</span>
              </li>
              <li>
                <span className="code">P0420</span>
                <span className="desc">Slabý katalyzátor</span>
                <span className="stat stat--err">ZÁVADA</span>
              </li>
              <li>
                <span className="code">P0171</span>
                <span className="desc">Chudá směs</span>
                <span className="stat stat--meas">MĚŘÍM</span>
              </li>
            </ul>
            <div className="readout__foot">
              <span className="readout__car">1.9 TDI · 214 380 km</span>
              <span className="stat stat--ok">Cívka válce 3 → VYŘEŠENO</span>
            </div>
            <div className="readout__scan" aria-hidden="true" />
          </div>
        </div>
      </header>

      <section className="services" aria-labelledby="s1">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow eyebrow--dark">01 — Co u nás vyřešíme</p>
              <h2 id="s1" className="sec-title">
                Od kontrolky po hotovou opravu, všechno pod jednou střechou.
              </h2>
            </div>
            <img
              className="sec-head__img"
              src="/section-1.webp"
              alt="Vůz na zvedáku v dílně Auto Dominik během servisní prohlídky"
            />
          </div>

          <ul className="grid">
            {services.map((s) => (
              <li className="card" key={s.tag}>
                <span className="card__tag">{s.tag}</span>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__text">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about" aria-labelledby="s2">
        <div className="wrap about__grid">
          <div className="about__media">
            <img
              src="/section-2.webp"
              alt="Mechanik Auto Dominik u diagnostického přístroje připojeného k vozu"
            />
            <ul className="facts">
              <li>
                <b>7 dní</b>v týdnu otevřeno
              </li>
              <li>
                <b>Slovany</b>Skladová 23, Plzeň
              </li>
              <li>
                <b>Originál</b>i performance díly
              </li>
            </ul>
          </div>

          <div className="about__copy">
            <p className="eyebrow eyebrow--dark">02 — Jak diagnostika probíhá</p>
            <h2 id="s2" className="sec-title">
              Nehádáme. Měříme — a cenu opravy řekneme dopředu.
            </h2>
            <p className="about__lede">
              Auto Dominik je dílna na Skladové ve Slovanech. Postaráme se o
              osobní auto, firemní dodávku i víkendovou sportovku se stejnou
              péčí a na moderním vybavení.
            </p>

            <ol className="steps">
              {steps.map((st) => (
                <li className="step" key={st.n}>
                  <span className="step__n">{st.n}</span>
                  <div>
                    <h3 className="step__title">{st.title}</h3>
                    <p className="step__text">{st.text}</p>
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
