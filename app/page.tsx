import type { CSSProperties } from "react";

const departments = [
  {
    kod: "01",
    nazev: "Drogerie",
    popis: "Úklid, hygiena, ochrana. Sidolux, Sanytol i velkoobjemová balení do provozu.",
    znacky: ["Sidolux", "Sanytol", "WC clip", "prací gely"],
  },
  {
    kod: "02",
    nazev: "Papírnictví",
    popis: "Kancelářské potřeby pro firmy i domácnosti — pořadače, papíry, psací potřeby.",
    znacky: ["Kores", "Centropen", "Donau", "HP papír"],
  },
  {
    kod: "03",
    nazev: "Školáček",
    popis: "Kreativní a školní potřeby. Nůžky, popisovače, gumovací pera pro nový školní rok.",
    znacky: ["Colorino", "Spoko", "Pilot", "Pintor"],
  },
  {
    kod: "04",
    nazev: "Obaly",
    popis: "Tašky, pytle, fólie. Vše na balení, expedici a skladování zboží.",
    znacky: ["tašky", "pytle", "fólie", "strečové obaly"],
  },
  {
    kod: "05",
    nazev: "Nábytek",
    popis: "Kancelářský nábytek. Zařídíme kancelář od stolu po pořadačovou skříň.",
    znacky: ["stoly", "regály", "židle"],
  },
  {
    kod: "06",
    nazev: "Gastro",
    popis: "Kelímky, tácky, příbory a spotřební materiál pro provozy stravování.",
    znacky: ["kelímky", "tácky", "příbory"],
  },
];

const regalRadky = [
  {
    nazev: "Sanytol univerzální čistič 500 ml GREP",
    kod: "3268grep",
    cena: "105,27 Kč",
    stav: "Skladem",
    znak: "Novinka",
  },
  {
    nazev: "Kores třpytivé zvýrazňovače / popisovače",
    kod: "611021",
    cena: "123,42 Kč",
    stav: "Skladem",
    znak: "Akce",
  },
  {
    nazev: "Sidolux prací gel 1,92 l · 48 PD na barevné",
    kod: "4701",
    cena: "192,39 Kč",
    stav: "Skladem",
    znak: null,
  },
  {
    nazev: "Pořadač pákový Donau polypropylen 75 mm",
    kod: "—",
    cena: "od 71,39 Kč",
    stav: "Skladem",
    znak: null,
  },
  {
    nazev: "Kancelářský papír HP A4, 80 g",
    kod: "201440",
    cena: "107,69 Kč",
    stav: "Skladem",
    znak: null,
  },
  {
    nazev: "Nůžky dětské pogumované COLORINO 14 cm",
    kod: "3213",
    cena: "od 35,09 Kč",
    stav: "Skladem",
    znak: "Sezóna",
  },
];

export default function Page() {
  return (
    <main className="vv">
      <header className="vv-top">
        <a className="vv-mark" href="#" aria-label="Velkoobchod Vítovec, domů">
          <span className="vv-mark-vv" aria-hidden="true">VV</span>
          <span className="vv-mark-text">
            <span className="vv-mark-name">Velkoobchod Vítovec</span>
            <span className="vv-mark-sub">velkoobchod · České Budějovice</span>
          </span>
        </a>
        <nav className="vv-nav" aria-label="Hlavní">
          <a href="#regaly">Regály</a>
          <a href="#firmam">Pro firmy</a>
          <a href="tel:+420777890245" className="vv-nav-call">777 890 245</a>
        </nav>
      </header>

      <section className="vv-hero" aria-labelledby="vv-hero-title">
        <div className="vv-hero-copy">
          <p className="vv-eyebrow">Sklad na Pekárenské · Po–Pá 7:00–15:30</p>
          <h1 id="vv-hero-title">
            Šest oddělení,<br />
            <span className="vv-hero-hl">jeden nákup.</span>
          </h1>
          <p className="vv-hero-lead">
            Drogerie, papír i školní potřeby pro budějovické firmy, školy a
            provozovny. Objednáte online, vyzvednete ve skladu — nebo si
            necháte přivézt.
          </p>
          <div className="vv-hero-cta">
            <a className="vv-btn vv-btn-primary" href="#regaly">
              Projít regály
            </a>
            <a className="vv-btn vv-btn-ghost" href="tel:+420777890245">
              Zavolat do skladu
            </a>
          </div>
          <dl className="vv-hero-stats">
            <div>
              <dt>Adresa</dt>
              <dd>Pekárenská 79, Č. Budějovice</dd>
            </div>
            <div>
              <dt>Skladem</dt>
              <dd>drogerie · papírnictví · gastro</dd>
            </div>
          </dl>
        </div>
        <figure className="vv-hero-media">
          <img
            src="/hero.webp"
            alt="Regály velkoobchodu Vítovec plné drogerie, papíru a kancelářských potřeb"
            width={900}
            height={1100}
            loading="eager"
          />
          <figcaption>Sklad Pekárenská 79</figcaption>
        </figure>
      </section>

      <section className="vv-depts" id="regaly" aria-labelledby="vv-depts-title">
        <div className="vv-sec-head">
          <p className="vv-eyebrow">Katalog</p>
          <h2 id="vv-depts-title">Regály, které u nás najdete</h2>
          <p className="vv-sec-lead">
            Šest oddělení pod jednou střechou. Vyberte si směr — od úklidu po
            gastro spotřebák.
          </p>
        </div>

        <ol className="vv-dept-grid">
          {departments.map((d) => (
            <li className="vv-dept" key={d.kod}>
              <span className="vv-dept-kod" aria-hidden="true">
                {d.kod}
              </span>
              <h3>{d.nazev}</h3>
              <p>{d.popis}</p>
              <ul className="vv-tags">
                {d.znacky.map((z) => (
                  <li key={z}>{z}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="vv-shelf" aria-labelledby="vv-shelf-title">
          <div className="vv-shelf-head">
            <h3 id="vv-shelf-title">Akční zboží z regálů</h3>
            <span className="vv-shelf-note">Ceny s DPH · aktualizováno tento týden</span>
          </div>
          <ul className="vv-shelf-list">
            {regalRadky.map((r) => (
              <li className="vv-row" key={r.nazev}>
                <span className="vv-row-name">
                  {r.znak && <span className="vv-flag">{r.znak}</span>}
                  {r.nazev}
                </span>
                <span className="vv-row-kod">kód {r.kod}</span>
                <span className="vv-row-stav">{r.stav}</span>
                <span className="vv-row-cena">{r.cena}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="vv-trust" id="firmam" aria-labelledby="vv-trust-title">
        <figure className="vv-trust-media">
          <img
            src="/section-1.webp"
            alt="Vyskladněné zboží připravené k vyzvednutí ve skladu Vítovec"
            width={800}
            height={640}
            loading="lazy"
          />
        </figure>
        <div className="vv-trust-copy">
          <p className="vv-eyebrow">Pro firmy a provozy</p>
          <h2 id="vv-trust-title">
            Zásobujeme kanceláře, školy i restaurace v Budějovicích
          </h2>
          <p className="vv-sec-lead">
            Nakupujete pravidelně? Založíme vám firemní účet, dohodneme ceny na
            objem a stálý sortiment necháme skladem, ať nečekáte.
          </p>
          <ul className="vv-checks">
            <li>Objednávka online, vyzvednutí na Pekárenské 79</li>
            <li>Rozvoz po Českých Budějovicích a okolí</li>
            <li>Velkoobjemová balení drogerie a gastro spotřebáku</li>
            <li>Poradíme s výběrem — stačí zavolat na 777 890 245</li>
          </ul>
          <div className="vv-info">
            <div className="vv-info-block">
              <img
                src="/section-2.webp"
                alt="Detail sortimentu drogerie a psacích potřeb na skladě"
                width={520}
                height={360}
                loading="lazy"
              />
            </div>
            <ul className="vv-hours">
              <li>
                <span>Otevřeno</span>
                <strong>Po–Pá 7:00–15:30</strong>
              </li>
              <li>
                <span>Sklad</span>
                <strong>Pekárenská 79, 370 04 Č. Budějovice</strong>
              </li>
              <li>
                <span>Telefon</span>
                <strong>
                  <a href="tel:+420777890245">777 890 245</a>
                </strong>
              </li>
              <li>
                <span>E-mail</span>
                <strong>
                  <a href="mailto:info@velkoobchodvitovec.cz">
                    info@velkoobchodvitovec.cz
                  </a>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
