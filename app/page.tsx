import React from "react";

const SLUZBY = [
  {
    tag: "01",
    name: "Ocelové konstrukce",
    text: "Nosné rámy hal, vestavby a přístřešky. Nakreslíme, svaříme a smontujeme celou konstrukci podle statického návrhu.",
  },
  {
    tag: "02",
    name: "Lávky",
    text: "Ocelové lávky a mostky pro pěší i technologické přechody — s protiskluzovým roštem a certifikovaným zábradlím.",
  },
  {
    tag: "03",
    name: "Exteriéry",
    text: "Schodiště, zábradlí, markýzy a přístřešky, které vydrží počasí i každodenní provoz.",
  },
  {
    tag: "04",
    name: "Interiéry",
    text: "Ocelová schodiště, galerie, madla a atypické prvky navržené na míru vašemu interiéru.",
  },
  {
    tag: "05",
    name: "Brány, oplocení",
    text: "Posuvné i křídlové brány, ploty a vrata — včetně pohonu, montáže a povrchové úpravy.",
  },
  {
    tag: "06",
    name: "Regály, přepravníky",
    text: "Skladové regály a přepravní rámy nadimenzované přesně na vaši zátěž.",
  },
];

const POSTUP = [
  {
    n: "01",
    name: "Technologická příprava",
    text: "Převezmeme výkres nebo architektonický návrh a připravíme výrobní dokumentaci, dělící plány a materiál.",
  },
  {
    n: "02",
    name: "Výroba",
    text: "Dělíme, ohýbáme a svaříme profily ve vlastní dílně podle certifikovaných postupů svařování.",
  },
  {
    n: "03",
    name: "Montáž",
    text: "Konstrukci osadíme a smontujeme přímo na stavbě — v Liberci i po celém Libereckém kraji.",
  },
  {
    n: "04",
    name: "Povrchová úprava",
    text: "Tryskání, základní nátěr a finální lak nebo žárový zinek — ochrana proti korozi na roky dopředu.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Houška OK, zámečnictví Liberec">
          <span className="wordmark-name">HOUŠKA</span>
          <span className="wordmark-ok">OK</span>
          <span className="wordmark-sub">s.r.o.</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Co vyrábíme</a>
          <a href="#postup">Jak to probíhá</a>
          <a className="topnav-call" href="tel:+420482750604">482&nbsp;750&nbsp;604</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-frame" aria-hidden="true">
          <span className="col col-l" />
          <span className="col col-r" />
          <span className="beam beam-t" />
          <span className="beam beam-b" />
          <span className="bolt bolt-tl" />
          <span className="bolt bolt-tr" />
          <span className="bolt bolt-bl" />
          <span className="bolt bolt-br" />
        </div>

        <div className="hero-inner">
          <p className="eyebrow eyebrow-hero">
            <span className="stencil">K00</span>
            Zámečnictví &amp; ocelové konstrukce · Liberec
          </p>
          <h1 className="hero-title">
            <span className="hero-line">OCELOVÉ</span>
            <span className="hero-line">KONSTRUKCE</span>
            <span className="hero-line hero-line-accent">NA&nbsp;MÍRU</span>
          </h1>
          <p className="hero-lead">
            Haly, vestavby, přístřešky, lávky, schodiště, zábradlí, regály a
            přepravníky. Od výkresu přes svařování až po hotovou montáž a
            nátěr — v jedné dílně.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420482750604">
              Zavolat 482&nbsp;750&nbsp;604
            </a>
            <a className="btn btn-ghost" href="mailto:houskaok@houskaok.cz">
              Napsat na e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="sluzby">
        <div className="section-head">
          <p className="eyebrow">
            <span className="stencil">K01</span>
            Co vyrábíme
          </p>
          <h2 className="section-title">Šest oborů, jedna dílna</h2>
          <span className="weld" aria-hidden="true" />
          <p className="section-intro">
            Každou zakázku vedeme od technologické přípravy až po povrchovou
            úpravu. Reagujeme na požadavky moderní architektury a nové
            materiály ve stavebnictví.
          </p>
        </div>

        <div className="grid grid-sluzby">
          {SLUZBY.map((s) => (
            <article className="card" key={s.tag}>
              <span className="card-tag" aria-hidden="true">
                {s.tag}
              </span>
              <h3 className="card-title">{s.name}</h3>
              <p className="card-text">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark" id="postup">
        <div className="section-head">
          <p className="eyebrow eyebrow-invert">
            <span className="stencil">K02</span>
            Jak to probíhá
          </p>
          <h2 className="section-title">Čtyři fáze každé zakázky</h2>
          <span className="weld" aria-hidden="true" />
          <p className="section-intro">
            Propracovaný systém řízení a specializovaný tým drží kvalitu ve
            všech fázích — od prvního výkresu po předání hotové konstrukce.
          </p>
        </div>

        <ol className="grid grid-postup">
          {POSTUP.map((p) => (
            <li className="phase" key={p.n}>
              <span className="phase-n" aria-hidden="true">
                {p.n}
              </span>
              <h3 className="phase-title">{p.name}</h3>
              <p className="phase-text">{p.text}</p>
            </li>
          ))}
        </ol>

        <div className="trust">
          <div className="trust-item">
            <span className="trust-label">Svařování</span>
            <p>Certifikované postupy dle&nbsp;ČSN&nbsp;EN&nbsp;1090 a doložené řízení kvality.</p>
          </div>
          <div className="trust-item">
            <span className="trust-label">Dílna &amp; tým</span>
            <p>Vlastní výrobní dílna a montážní tým se sídlem v&nbsp;Liberci.</p>
          </div>
          <div className="trust-item">
            <span className="trust-label">Tradice</span>
            <p>Dlouholetá zkušenost s&nbsp;ocelovými konstrukcemi a zámečnickou prací.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
