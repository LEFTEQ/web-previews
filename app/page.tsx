import React from "react";

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <div className="topbar-in">
          <div className="mark">
            <b>Vyhlídka</b>
            <span>Psychiatrie&nbsp;·&nbsp;Brno</span>
          </div>
          <a className="topcall" href="tel:+420516470695">Zavolat 516&nbsp;470&nbsp;695</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-in">
          <div>
            <p className="eyebrow reveal d1">Psychiatři Zahradníkova · od roku 1998</p>
            <h1 className="reveal d2">
              Místo, kde se dá <em>nadechnout</em> a mluvit bez spěchu.
            </h1>
            <p className="lead reveal d3">
              Psychiatrická ambulance s rozšířenou péčí a psychoterapií v centru
              Brna. Pomáháme při úzkostech, poruchách nálady, reakcích na těžké
              životní situace i psychických obtížích ve stáří.
            </p>
            <div className="hero-cta reveal d4">
              <a className="btn btn-solid" href="tel:+420516470695">
                Objednat se telefonicky
              </a>
              <a className="btn btn-ghost" href="#kde">Kde nás najdete</a>
            </div>
          </div>

          <figure className="hero-media reveal">
            <img
              src="/hero.webp"
              alt="Klidná čekárna psychiatrické ambulance Vyhlídka v Brně"
            />
            <figcaption className="hero-badge">
              <strong>6. patro, schodiště D</strong>
              <span>Poliklinika Zahradníkova, vstup z Nerudovy 9</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="care">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">S čím k nám lidé přicházejí</p>
            <h2>
              Rozumíme tomu, že první krok je <em>ten nejtěžší.</em>
            </h2>
            <p>
              Věnujeme se celé šíři duševních obtíží — od běžné úzkosti až po
              závažnější stavy. Léčbu vždy skládáme na míru člověku, ne diagnóze.
            </p>
          </div>

          <div className="care-grid">
            <div className="care-item">
              <span className="care-num">01</span>
              <h3>Úzkost a nálada</h3>
              <p>
                Úzkostné stavy, deprese a poruchy nálady, které vznikly v reakci
                na zátěžové životní situace. Nabízíme i psychoterapeutickou péči.
              </p>
            </div>
            <div className="care-item">
              <span className="care-num">02</span>
              <h3>Psychotická onemocnění</h3>
              <p>
                Dlouhodobé sledování a léčba schizofrenie a dalších psychotických
                onemocnění — se stabilním lékařem, který pacienta zná.
              </p>
            </div>
            <div className="care-item">
              <span className="care-num">03</span>
              <h3>Psychika ve stáří</h3>
              <p>
                Péče o psychické potíže spojené se stářím, s ohledem na tělesné
                zdraví a rodinné zázemí pacienta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="offer-grid">
            <figure className="offer-media">
              <img
                src="/section-1.webp"
                alt="Ordinace psychiatrické ambulance Vyhlídka"
              />
              <figcaption>Denní stacionář a ambulance pod jednou střechou</figcaption>
            </figure>

            <div>
              <div className="sec-head" style={{ marginBottom: "36px" }}>
                <p className="eyebrow">Naše pracoviště</p>
                <h2>Tři ambulance, <em>jedna adresa.</em></h2>
              </div>

              <div className="amb">
                <div className="amb-top">
                  <h3>Psychiatrie Vyhlídka</h3>
                  <span className="tag">Rozšířená péče</span>
                </div>
                <p className="docs">
                  MUDr. Jana Knoppová · MUDr. Monika Špillarová · MUDr. Petr Grossmann
                </p>
                <div className="row">
                  <a href="tel:+420516470695">516 470 695</a>
                  <span className="hrs">Po–Pá, ranní ordinační hodiny</span>
                </div>
              </div>

              <div className="amb">
                <div className="amb-top">
                  <h3>Ambulance MUDr. Jan Knopp</h3>
                  <span className="tag">+ Psychoterapie</span>
                </div>
                <p className="docs">MUDr. Jan Knopp · MUDr. Monika Špillarová</p>
                <div className="row">
                  <a href="tel:+420516470697">516 470 697</a>
                  <span className="hrs">Psychoterapie Út a Čt 13–15 h</span>
                </div>
              </div>

              <div className="amb">
                <div className="amb-top">
                  <h3>Ambulance MUDr. Pavel Sedlmajer</h3>
                  <span className="tag">Ambulance</span>
                </div>
                <p className="docs">Objednané ordinační hodiny Po–Pá</p>
                <div className="row">
                  <a href="tel:+420608794608">608 794 608</a>
                  <span className="hrs">Út až 17:00 pro pracující</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust" id="kde">
        <div className="wrap">
          <div className="trust-grid">
            <div>
              <p className="eyebrow">Kde nás najdete</p>
              <h2>
                V budově Polikliniky <em>Zahradníkova.</em>
              </h2>
              <p style={{ marginTop: "16px", fontSize: "1.08rem" }}>
                Jsme tu pro pacienty z Brna i okolí už přes dvacet let. Objednání i
                recepty řešíme telefonicky — e-mail k tomu prosím neposílejte, ať se
                k vám dostaneme spolehlivě.
              </p>
              <img
                src="/section-2.webp"
                alt="Vstup do budovy Polikliniky Zahradníkova v Brně"
                style={{
                  marginTop: "28px",
                  borderRadius: "18px",
                  aspectRatio: "16 / 10",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            </div>

            <div className="info-card">
              <dl>
                <dt>Adresa</dt>
                <dd>
                  Zahradníkova 2/8, 602&nbsp;00 Brno
                  <br />schodiště D, 6. patro (budova Nerudova 9)
                </dd>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420516470695">516 470 695</a> — ambulance
                </dd>
                <dt>Stacionář</dt>
                <dd>
                  <a href="tel:+420602432766">602 432 766</a> — denní stacionář, 5. patro
                </dd>
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:psychiatrie.vyhlidka@seznam.cz">
                    psychiatrie.vyhlidka@seznam.cz
                  </a>
                </dd>
              </dl>
              <p className="route">
                <b>Nejsnazší cesta:</b> vstupte z ulice Nerudova 9, výtahem do 6.
                patra, schodiště „D“. Klinická psychologie a sesterská péče
                sídlí ve stejném patře.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
