import type { CSSProperties } from "react";

export default function Page() {
  const formats = [
    {
      code: "BB",
      name: "Billboardy",
      size: "5,1 × 2,4 m",
      desc: "Klasický nosič podél silnic a hlavních tahů. Naše síť pokrývá Pardubice a okolí — vybereme plochu podle toho, kudy jezdí vaši zákazníci.",
    },
    {
      code: "BIG",
      name: "Bigboardy",
      size: "9,6 × 3,6 m",
      desc: "Velkoformát pro kampaně, které mají být vidět z dálky. Ideální na příjezdových trasách do města.",
    },
    {
      code: "SB",
      name: "Smartboardy",
      size: "3 × 6 m",
      desc: "Otočný nosič s výraznou plochou. Jeden panel, více motivů — kampaň, která se hýbe.",
    },
    {
      code: "CLV",
      name: "CLV vitríny",
      size: "formát plakátu",
      desc: "Prosvětlené městské vitríny pro plakáty do A0. Blízko lidí, v centru dění.",
    },
    {
      code: "HC",
      name: "HyperCube",
      size: "prostorový nosič",
      desc: "Trojrozměrná reklama, kolem které se nedá projít bez povšimnutí. Pro značky, které chtějí být jiné.",
    },
    {
      code: "PL",
      name: "Plachty a mosty",
      size: "na míru",
      desc: "Velkoplošné plachty a přemostění nad silnicí. Výroba i montáž na klíč, včetně naší plošiny Avia MP16.",
    },
  ];

  const steps = [
    {
      n: "01",
      t: "Vyberete plochu",
      d: "Podle mapy našich nosičů v Pardubicích a po ČR najdeme místo, kde vaši reklamu uvidí ti správní lidé.",
    },
    {
      n: "02",
      t: "Vytiskneme motiv",
      d: "Tiskneme billboardy, bigboardy, plachty i CLV plakáty do formátu A0/DIN. Podklady zkontrolujeme za vás.",
    },
    {
      n: "03",
      t: "Vylepíme a hlídáme",
      d: "Zajistíme výlep i výměnu a po celou dobu kampaně dohlížíme, aby plocha vypadala, jak má.",
    },
  ];

  return (
    <main className="rs">
      <header className="rs-top">
        <a className="rs-mark" href="#top" aria-label="Reklamní servis RS, Pardubice">
          <span className="rs-mark-rs">RS</span>
          <span className="rs-mark-txt">
            <b>Reklamní servis</b>
            <em>venkovní reklama · Pardubice</em>
          </span>
        </a>
        <nav className="rs-nav" aria-label="Hlavní">
          <a href="#nosice">Nosiče</a>
          <a href="#jak">Jak to funguje</a>
          <a href="#firma">O nás</a>
        </nav>
      </header>

      <section className="rs-hero" id="top">
        <div className="rs-hero-grid">
          <div className="rs-hero-copy">
            <p className="rs-eyebrow">Reklamní agentura · Pardubice · od roku 2003</p>
            <h1 className="rs-h1">
              Vaše reklama<br />
              <span className="rs-h1-accent">nad hlavami</span><br />
              celých Pardubic.
            </h1>
            <p className="rs-lede">
              Vlastníme rozsáhlou síť billboardů, bigboardů a dalších
              nosičů venkovní reklamy. Od výběru plochy přes tisk až po
              výlep — kompletní outdoorovou kampaň zvládneme za vás,
              v Pardubicích i po celé ČR.
            </p>
            <div className="rs-hero-cta">
              <a className="rs-btn" href="#nosice">Prohlédnout nosiče</a>
              <a className="rs-btn rs-btn-ghost" href="mailto:agency@reklamniservis.com">Napsat poptávku</a>
            </div>
            <dl className="rs-stats">
              <div>
                <dt>20+ let</dt>
                <dd>ve venkovní reklamě</dd>
              </div>
              <div>
                <dt>Vlastní síť</dt>
                <dd>ploch v Pardubicích</dd>
              </div>
              <div>
                <dt>Avia MP16</dt>
                <dd>montážní plošina</dd>
              </div>
            </dl>
          </div>
          <figure className="rs-hero-fig">
            <img
              src="/hero.webp"
              alt="Billboard reklamního servisu RS podél silnice v Pardubicích"
              className="rs-hero-img"
            />
            <figcaption>Plocha z naší sítě · Pardubicko</figcaption>
          </figure>
        </div>
      </section>

      <section className="rs-section" id="nosice">
        <div className="rs-sec-head">
          <p className="rs-eyebrow">Katalog nosičů</p>
          <h2 className="rs-h2">Šest formátů, jedna síť</h2>
          <p className="rs-sec-lede">
            Od klasického billboardu po prostorový HyperCube. Vyberte formát
            podle rozpočtu i místa — poradíme, kde bude vidět nejlíp.
          </p>
        </div>
        <ul className="rs-cards">
          {formats.map((f) => (
            <li className="rs-card" key={f.code}>
              <span className="rs-card-code" aria-hidden="true">{f.code}</span>
              <h3>{f.name}</h3>
              <p className="rs-card-size">{f.size}</p>
              <p className="rs-card-desc">{f.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rs-section rs-section-firma" id="firma">
        <div className="rs-firma-grid">
          <figure className="rs-firma-fig">
            <img
              src="/section-1.webp"
              alt="Realizace outdoorové reklamní kampaně v Pardubicích"
            />
          </figure>
          <div className="rs-firma-copy">
            <p className="rs-eyebrow">O agentuře</p>
            <h2 className="rs-h2">Řemeslo, které stojí u silnice 20 let</h2>
            <p>
              Reklamní servis RS je pardubická agentura zaměřená na venkovní
              reklamu. Za víc než dvacet let jsme vylepili tisíce plakátů a
              postavili síť ploch, kterou dnes využívají místní firmy i
              celostátní značky.
            </p>
            <p>
              Nejsme jen pronájem plochy. Zajistíme tisk billboardů, plachet
              i CLV plakátů, výlep do formátu A1/DIN na vlastních plochách v
              Pardubicích i na plochách po celé ČR a montáž vlastní plošinou
              Avia MP16.
            </p>
            <ul className="rs-steps" id="jak">
              {steps.map((s) => (
                <li key={s.n}>
                  <span className="rs-step-n">{s.n}</span>
                  <div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <figure className="rs-wide-fig">
          <img
            src="/section-2.webp"
            alt="Síť reklamních nosičů reklamního servisu RS v regionu Pardubice"
          />
          <figcaption>
            Kompletní servis outdoorové reklamy — Pardubice a celá ČR.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
