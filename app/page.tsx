import type { CSSProperties } from "react";

const okruhy = [
  {
    barva: "Žlutá",
    hex: "#F2C438",
    grade: "V0",
    popis: "Krokové problémy, které vyleze úplně každý. Sem chodíš poprvé.",
  },
  {
    barva: "Oranžová",
    hex: "#EF7C1B",
    grade: "V1–V2",
    popis: "První pořádné tahy a stupy. Začínáš přemýšlet, kam s nohou.",
  },
  {
    barva: "Zelená",
    hex: "#3BA84A",
    grade: "V3–V4",
    popis: "Technika a balanc. Cesta už tě něco naučí, když ji přečteš.",
  },
  {
    barva: "Modrá",
    hex: "#2C6EDA",
    grade: "V5–V6",
    popis: "Silové a napřahovací sekce. Tady se láme dobrý a slabý den.",
  },
  {
    barva: "Červená",
    hex: "#F03D2E",
    grade: "V7–V9",
    popis: "Rukopis stavěčů naplno. Prsty, tělo, hlava — všechno najednou.",
  },
];

const steny = [
  {
    nazev: "Hlavní stěna",
    plocha: "180",
    detail: "Kolem 70 boulderů napříč všemi barevnými okruhy od V0 po V9.",
  },
  {
    nazev: "Traverzovací stěna",
    plocha: "98",
    detail: "40 boulderů ve žlutém, oranžovém a zeleném okruhu — ideál na rozlezení.",
  },
  {
    nazev: "Kampusy a výkonnostní stěna",
    plocha: "51",
    detail: "Petačtyřicítka, symetrická stěna a kampusová prkna pro tvrdý trénink.",
  },
];

export default function Page() {
  return (
    <main className="v16">
      <header className="v16-topbar">
        <a className="v16-wordmark" href="#nahoru" aria-label="Lezecké centrum V16, Plzeň">
          <span className="v16-mark" aria-hidden="true">V16</span>
          <span className="v16-mark-sub">Lezecké centrum · Plzeň</span>
        </a>
        <nav className="v16-nav" aria-label="Hlavní">
          <a href="#stena">Stěna</a>
          <a href="#kurzy">Kurzy</a>
          <a href="tel:+420725889568">Recepce</a>
        </nav>
      </header>

      <section className="v16-hero" id="nahoru">
        <div className="v16-hero-media">
          <img
            src="/hero.webp"
            alt="Boulderová stěna centra V16 s barevnými chyty a měkkým dopadištěm"
            className="v16-hero-img"
          />
          <div className="v16-hero-scrim" aria-hidden="true" />
        </div>

        <div className="v16-hero-inner">
          <p className="v16-eyebrow">Kollárova 19, Plzeň · hned vedle menzy</p>
          <h1 className="v16-hero-title">
            Lez po<br />
            <span className="v16-hero-accent">barvách.</span><br />
            Padej do měkkýho.
          </h1>
          <p className="v16-hero-lead">
            Bouldering do 4 metrů bez lana a bez parťáka na jištění. Označené
            cesty od žluté po červenou — vybereš si obtížnost a lezeš. Otevřeno
            každý den, dopadiště tlumí za tebe.
          </p>
          <div className="v16-hero-cta">
            <a className="v16-btn v16-btn--primary" href="tel:+420725889568">
              Zavolat na recepci
            </a>
            <a className="v16-btn v16-btn--ghost" href="#stena">
              Jak funguje stěna
            </a>
          </div>
        </div>

        <dl className="v16-hero-stats">
          <div>
            <dt>Plocha stěn</dt>
            <dd>329 m²</dd>
          </div>
          <div>
            <dt>Boulderů</dt>
            <dd>~110</dd>
          </div>
          <div>
            <dt>Otevřeno</dt>
            <dd>po–ne 8–22</dd>
          </div>
        </dl>
      </section>

      <section className="v16-section v16-okruhy" id="stena" aria-labelledby="stena-nadpis">
        <div className="v16-section-head">
          <p className="v16-eyebrow v16-eyebrow--dark">Barevné okruhy</p>
          <h2 className="v16-h2" id="stena-nadpis">
            Barva štítku říká, do čeho jdeš
          </h2>
          <p className="v16-section-lead">
            Každý boulder začíná barevným štítkem a lezeš ho po chytech stejné
            barvy. Od žlutého okruhu, kde jde hlavně o krok, až po červený, kde
            stavěči nešetří prsty. Přečti barvu — a je jasno.
          </p>
        </div>

        <ol className="v16-okruh-list">
          {okruhy.map((o, i) => (
            <li
              className="v16-okruh"
              key={o.barva}
              style={{ "--dot": o.hex } as CSSProperties}
            >
              <span className="v16-okruh-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="v16-okruh-dot" aria-hidden="true" />
              <span className="v16-okruh-body">
                <span className="v16-okruh-top">
                  <span className="v16-okruh-barva">{o.barva}</span>
                  <span className="v16-okruh-grade">{o.grade}</span>
                </span>
                <span className="v16-okruh-popis">{o.popis}</span>
              </span>
            </li>
          ))}
        </ol>

        <figure className="v16-figure">
          <img
            src="/section-1.webp"
            alt="Lezec na hlavní stěně V16 uprostřed barevného boulderu"
          />
          <figcaption>
            Hlavní stěna, 180 m². Cesty staví profíci — a je to poznat na každém tahu.
          </figcaption>
        </figure>

        <div className="v16-steny">
          {steny.map((s) => (
            <article className="v16-stena-card" key={s.nazev}>
              <p className="v16-stena-plocha">
                {s.plocha}<span> m²</span>
              </p>
              <h3 className="v16-h3">{s.nazev}</h3>
              <p>{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v16-section v16-kurzy" id="kurzy" aria-labelledby="kurzy-nadpis">
        <div className="v16-kurzy-grid">
          <figure className="v16-figure v16-figure--tall">
            <img
              src="/section-2.webp"
              alt="Děti na dětském lezeckém kurzu v centru V16"
            />
          </figure>

          <div className="v16-kurzy-text">
            <p className="v16-eyebrow v16-eyebrow--dark">Kurzy a oddíl V16</p>
            <h2 className="v16-h2" id="kurzy-nadpis">
              Naučíme děti číst pohyb ve svislici
            </h2>
            <p className="v16-section-lead">
              Od září otevíráme dětské kurzy pro věk 5–14 let — pro úplné
              začátečníky i pokročilé lezce. Krok za krokem stavíme lezeckou
              techniku, koordinaci i balanc a doplňujeme ji cviky z jógy, které
              tělu prospívají. A hlavně — je u toho sranda a noví kamarádi.
            </p>

            <ul className="v16-kurz-list">
              <li>
                <strong>Dětské kurzy 5–14 let</strong>
                Systematický rozvoj techniky, koordinace a balancu.
              </li>
              <li>
                <strong>Příměstský tábor</strong>
                Lezení, gymnastika, pohybové hry a pestrý program o prázdninách.
              </li>
              <li>
                <strong>Lezení pro začátečníky</strong>
                Úvod na stěnu pro dospělé — od žlutého okruhu nahoru.
              </li>
            </ul>

            <div className="v16-kontakt-box">
              <p className="v16-kontakt-head">Přihlásit dítě na kurz</p>
              <div className="v16-kontakt-actions">
                <a className="v16-btn v16-btn--primary" href="tel:+420603939388">
                  Zavolat: 603 939 388
                </a>
                <a className="v16-btn v16-btn--ghost" href="mailto:kurzy@v16.cz">
                  Napsat na kurzy@v16.cz
                </a>
              </div>
            </div>
          </div>
        </div>

        <aside className="v16-provoz" aria-label="Provozní informace">
          <div className="v16-provoz-item">
            <p className="v16-provoz-label">Kde nás najdeš</p>
            <p className="v16-provoz-val">Kollárova 19, Plzeň 301 00</p>
            <p className="v16-provoz-note">Hned vedle menzy.</p>
          </div>
          <div className="v16-provoz-item">
            <p className="v16-provoz-label">Otevřeno</p>
            <p className="v16-provoz-val">po–ne 8.00–22.00</p>
            <p className="v16-provoz-note">út a čt už od 7.00</p>
          </div>
          <div className="v16-provoz-item">
            <p className="v16-provoz-label">Na baru</p>
            <p className="v16-provoz-val">Káva, nápoje, půjčovna lezeček</p>
            <p className="v16-provoz-note">Lezecké doplňky na recepci.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
