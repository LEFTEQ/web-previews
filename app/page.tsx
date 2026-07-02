// Cyklo Bartoníček s.r.o. — cykloservis, Plzeň
// Koncept: „Dílna, ne e-shop.“ Vizuální svět kola: výplet, převodník, montážní stojan.
// Signature prvek: velké SVG kolo s výpletem (36 drátů) prorůstající hero typografií,
// které se při načtení pomalu dotočí — jako když mechanik roztočí kolo v centrovací vidlici.

const SPOKES = Array.from({ length: 36 }, (_, i) => (i * 360) / 36);

const sluzby = [
  {
    kod: "S1",
    nazev: "Základní servis",
    cena: "od 690 Kč",
    popis:
      "Seřízení řazení a brzd, kontrola dotažení, promazání řetězu, dohuštění. Kolo připravené na sezónu za jednu návštěvu.",
    doba: "do 3 pracovních dnů",
  },
  {
    kod: "S2",
    nazev: "Velký servis",
    cena: "od 1 590 Kč",
    popis:
      "Kompletní rozebrání, vyčištění a přemazání středu, hlavového složení i nábojů. Výměna lanek a bowdenů v ceně práce.",
    doba: "do 5 pracovních dnů",
  },
  {
    kod: "S3",
    nazev: "Servis elektrokol",
    cena: "od 990 Kč",
    popis:
      "Diagnostika motoru a baterie, aktualizace firmwaru Bosch a Shimano STePS, seřízení pohonu. Diagnostický protokol dostanete s sebou.",
    doba: "do 5 pracovních dnů",
  },
  {
    kod: "S4",
    nazev: "Centrování a výplety",
    cena: "od 250 Kč",
    popis:
      "Vycentrování kola v centrovací vidlici, výměna drátů, kompletní zapletení nového kola na míru. Práce, kterou děláme nejraději.",
    doba: "na počkání až 2 dny",
  },
];

const duvody = [
  {
    cislo: "27",
    jednotka: "let",
    text: "servisujeme kola v Plzni. Prošly nám rukama tisíce kol — od dětských šestnáctek po karbonové silničky.",
  },
  {
    cislo: "48",
    jednotka: "hod",
    text: "je běžná čekací doba na základní servis. V sezóně vás objednáme na konkrétní den, kolo u nás nestojí týdny.",
  },
  {
    cislo: "2",
    jednotka: "značky",
    text: "elektropohonu servisujeme s oficiální diagnostikou: Bosch a Shimano STePS. Firmware, motor i baterii.",
  },
];

export default function Page() {
  return (
    <main className="cb">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Cyklo Bartoníček">
            <span className="wordmark-cyklo">CYKLO</span>
            <span className="wordmark-b">BARTONÍČEK</span>
          </div>
          <p className="hero-loc">
            Skladová 557/20 · Plzeň
          </p>
        </div>

        <div className="hero-stage">
          {/* Signature: zapletené kolo v centrovací vidlici */}
          <svg
            className="wheel"
            viewBox="0 0 600 600"
            aria-hidden="true"
            focusable="false"
          >
            <g className="wheel-spin">
              <circle cx="300" cy="300" r="286" className="wheel-rim" />
              <circle cx="300" cy="300" r="262" className="wheel-rim-inner" />
              {SPOKES.map((deg) => (
                <line
                  key={deg}
                  x1="300"
                  y1="46"
                  x2="300"
                  y2="288"
                  className="wheel-spoke"
                  transform={`rotate(${deg} 300 300)`}
                />
              ))}
              <circle cx="300" cy="300" r="30" className="wheel-hub" />
              <circle cx="300" cy="300" r="9" className="wheel-axle" />
              {/* ventilek */}
              <rect x="296" y="18" width="8" height="26" rx="3" className="wheel-valve" />
            </g>
          </svg>

          <h1 className="hero-h1">
            <span className="hero-line hero-line-1">Vaše kolo</span>
            <span className="hero-line hero-line-2">seřízené</span>
            <span className="hero-line hero-line-3">
              na <em>půl otáčky</em>
            </span>
          </h1>
        </div>

        <div className="hero-foot">
          <p className="hero-claim">
            Cykloservis a servis elektrokol na Skladové v Plzni. Objednáte se
            na konkrétní den, řekneme cenu předem a kolo vrátíme, jak má být —
            řazení cvakne, brzda nesahá, výplet zní čistě.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420778087311">
              Zavolat 778 087 311
            </a>
            <a className="btn btn-line" href="mailto:info@bartonicek.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <p className="hero-marginal" aria-hidden="true">
          36 drátů · 3 kříže · centrováno na 0,2 mm
        </p>
      </header>

      {/* ===== SLUŽBY / CENÍK ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Servisní kniha</p>
          <h2 id="sluzby-h">
            Co pro vaše kolo uděláme
          </h2>
          <p className="sekce-perex">
            Ceny jsou za práci a platí předem — pokud při rozebrání najdeme
            něco navíc, nejdřív zavoláme, pak teprve měníme díly.
          </p>
        </div>

        <ul className="sluzby-list">
          {sluzby.map((s) => (
            <li key={s.kod} className="sluzba">
              <span className="sluzba-kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="sluzba-telo">
                <div className="sluzba-radek">
                  <h3>{s.nazev}</h3>
                  <span className="sluzba-cena">{s.cena}</span>
                </div>
                <p>{s.popis}</p>
                <p className="sluzba-doba">
                  <span className="tecka" aria-hidden="true" /> Hotovo {s.doba}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="sluzby-pozn">
          Vezeme i dětská kola a koloběžky. Objednání na{" "}
          <a href="tel:+420778087311">778 087 311</a> nebo osobně na Skladové —
          příjem kol po–pá 9:00–17:30.
        </p>
      </section>

      {/* ===== DŮVĚRA / DÍLNA ===== */}
      <section className="dilna" aria-labelledby="dilna-h">
        <div className="sekce-hlava sekce-hlava-svetla">
          <p className="eyebrow eyebrow-svetly">Dílna na Skladové</p>
          <h2 id="dilna-h">Proč nám Plzeňáci vozí kola už přes čtvrt století</h2>
        </div>

        <div className="duvody">
          {duvody.map((d) => (
            <article key={d.cislo + d.jednotka} className="duvod">
              <p className="duvod-cislo">
                {d.cislo}
                <span className="duvod-jednotka">{d.jednotka}</span>
              </p>
              <p className="duvod-text">{d.text}</p>
            </article>
          ))}
        </div>

        <figure className="citace">
          <blockquote>
            „Zapletli mi zadní kolo po výletu z Krkavce, kde jsem trefil
            kámen. Za dva dny hotové, drží dodnes. A rovnou mi ukázali,
            proč mi drhla brzda.“
          </blockquote>
          <figcaption>— Martin K., Plzeň-Bolevec, horské kolo</figcaption>
        </figure>

        <div className="dilna-fakta">
          <p>
            <strong>Kde nás najdete:</strong> Skladová 557/20, Plzeň-Slovany.
            Zaparkujete přímo před dílnou, kolo doneseme dovnitř za vás.
          </p>
          <p>
            <strong>Elektrokola:</strong> autorizovaná diagnostika Bosch a
            Shimano STePS — baterie a motor neposíláme pryč, řešíme je u nás.
          </p>
        </div>
      </section>
    </main>
  );
}
