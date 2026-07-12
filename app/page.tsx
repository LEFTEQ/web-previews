import React from "react";

const sluzby = [
  {
    kod: "01",
    nazev: "Rehabilitační medicína",
    popis: "Komplexní léčebný plán vedený lékařem — od vstupního vyšetření po cílenou terapii pohybového aparátu.",
  },
  {
    kod: "02",
    nazev: "Fyzioterapie",
    popis: "Individuální cvičení, měkké techniky a nácvik správného pohybu s vaším fyzioterapeutem.",
  },
  {
    kod: "03",
    nazev: "Neurologie",
    popis: "Vyšetření a péče o nervový systém, včetně stavů po cévních příhodách a chronických bolestí.",
  },
  {
    kod: "04",
    nazev: "Ortopedie",
    popis: "Diagnostika a konzervativní léčba potíží kloubů, páteře a pohybového aparátu.",
  },
  {
    kod: "05",
    nazev: "EMG diagnostika",
    popis: "Elektromyografie pro přesné určení příčiny brnění, slabosti či bolesti nervového původu.",
  },
  {
    kod: "06",
    nazev: "Spirální stabilizace páteře",
    popis: "Metoda SM systém — vytažení a stabilizace páteře vlastními svaly, úleva od bolesti zad.",
  },
  {
    kod: "07",
    nazev: "Neurac — Medical",
    popis: "Terapie v závěsném systému, která aktivuje hluboké stabilizační svaly bez zatížení kloubů.",
  },
  {
    kod: "08",
    nazev: "Kinesiotejping",
    popis: "Nalepení elastické pásky pro podporu svalu a odlehčení bolestivé oblasti během běžného dne.",
  },
  {
    kod: "09",
    nazev: "Post-covidový syndrom",
    popis: "Program pro návrat dechové kapacity, kondice a sil po prodělaném onemocnění covid-19.",
  },
];

const duvody = [
  {
    stitek: "Odbornost",
    text: "Léčbu vedou kvalifikovaní lékaři a fyzioterapeuti. Náš tým ovládá širokou škálu léčebných technik a postupů.",
  },
  {
    stitek: "Úhrada pojišťovnou",
    text: "Většinu zdravotnických výkonů hradí zdravotní pojišťovny — připravíme vám přehled, co se vás týká.",
  },
  {
    stitek: "Dostupnost",
    text: "Vynikající spojení MHD a možnost parkovat přímo před budovou. Pacientům s poruchou mobility zajistíme svoz mezi bydlištěm a zařízením.",
  },
  {
    stitek: "Lidský přístup",
    text: "Empatie a lidskost u nás nejsou prázdným pojmem. Léčíte se v příjemném a klidném prostředí.",
  },
];

export default function Page() {
  return (
    <main className="avc">
      <header className="avc-top">
        <a className="avc-brand" href="#uvod" aria-label="AVICA — úvod">
          <span className="avc-brand-mark" aria-hidden="true">
            <span className="avc-brand-line" />
          </span>
          <span className="avc-brand-word">
            AVICA<span className="avc-brand-dot">.</span>
          </span>
          <span className="avc-brand-sub">rehabilitace · Ostrava</span>
        </a>
        <a className="avc-call" href="tel:+420596000000">
          <span className="avc-call-dot" aria-hidden="true" />
          Zavolat
        </a>
      </header>

      <section className="avc-hero" id="uvod">
        <div className="avc-hero-media">
          <img
            src="/hero.webp"
            alt="Rehabilitační pracoviště AVICA v Ostravě — terapie pohybového aparátu"
            className="avc-hero-img"
          />
          <div className="avc-hero-scan" aria-hidden="true" />
        </div>

        <div className="avc-hero-body">
          <p className="avc-eyebrow">Zdravotnické zařízení · Ostrava</p>
          <h1 className="avc-h1">
            Vrátíme vás<br />
            zpátky do <em>pohybu</em>.
          </h1>
          <p className="avc-lead">
            Rehabilitace, fyzioterapie a neurologie pod jednou střechou. Vyšetří vás
            lékař, terapii vede fyzioterapeut — a většinu výkonů uhradí vaše pojišťovna.
          </p>
          <div className="avc-hero-actions">
            <a className="avc-btn" href="tel:+420596000000">Objednat se telefonicky</a>
            <a className="avc-btn avc-btn-ghost" href="mailto:info@avica.net">
              Napsat e-mail
            </a>
          </div>

          <dl className="avc-vitals">
            <div>
              <dt>Rozsah pohybu</dt>
              <dd>měříme na začátku i na konci</dd>
            </div>
            <div>
              <dt>Hrazeno pojišťovnou</dt>
              <dd>většina výkonů</dd>
            </div>
            <div>
              <dt>Svoz pacientů</dt>
              <dd>zajistíme při omezené mobilitě</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="avc-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="avc-sec-head">
          <p className="avc-eyebrow">Co u nás najdete</p>
          <h2 id="sluzby-nadpis" className="avc-h2">
            Devět kroků<br />zpět k pohybu
          </h2>
          <p className="avc-sec-lead">
            Od první diagnózy po cílenou terapii. Každý výkon má své místo v léčebném
            plánu — poskládáme ho podle toho, co skutečně potřebujete.
          </p>
        </div>

        <ol className="avc-list">
          {sluzby.map((s) => (
            <li className="avc-item" key={s.kod}>
              <span className="avc-item-kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="avc-item-body">
                <h3 className="avc-item-nazev">{s.nazev}</h3>
                <p className="avc-item-popis">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="avc-figure">
          <img
            src="/section-1.webp"
            alt="Cvičení a terapie v rehabilitačním centru AVICA"
            className="avc-figure-img"
          />
          <figcaption>Naše cvičebna a terapeutická pracoviště v Ostravě.</figcaption>
        </figure>
      </section>

      <section className="avc-onas" id="o-nas" aria-labelledby="onas-nadpis">
        <div className="avc-onas-media">
          <img
            src="/section-2.webp"
            alt="Prostředí zdravotnického zařízení AVICA"
            className="avc-onas-img"
          />
        </div>

        <div className="avc-onas-body">
          <p className="avc-eyebrow">Proč právě AVICA</p>
          <h2 id="onas-nadpis" className="avc-h2">
            Péče, u které
            <br />se cítíte jako člověk
          </h2>

          <ul className="avc-duvody">
            {duvody.map((d) => (
              <li className="avc-duvod" key={d.stitek}>
                <span className="avc-duvod-stitek">{d.stitek}</span>
                <p className="avc-duvod-text">{d.text}</p>
              </li>
            ))}
          </ul>

          <div className="avc-kontakt-radek">
            <a className="avc-btn" href="tel:+420596000000">
              Zavolat a objednat se
            </a>
            <a className="avc-inline" href="mailto:info@avica.net">
              info@avica.net
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
