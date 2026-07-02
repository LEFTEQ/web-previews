const cepovana = [
  {
    stupen: "10°",
    nazev: "300 Kurven",
    pivovar: "JungBerg, Hořice",
    styl: "Světlý ležák",
    alc: "4,1 %",
    cena: "65 / 49",
  },
  {
    stupen: "11°",
    nazev: "Mordýř",
    pivovar: "Mordýř, Dolní Ředice",
    styl: "Světlý ležák",
    alc: "4,6 %",
    cena: "62 / 47",
  },
  {
    stupen: "12°",
    nazev: "Tláloc — God of Rain",
    pivovar: "Sibeeria, Praha",
    styl: "Mexican Session Cold IPA",
    alc: "5,1 %",
    cena: "95 / 72",
  },
  {
    stupen: "12°",
    nazev: "Maisels Weisse",
    pivovar: "Maisel, Bayreuth",
    styl: "Hefeweizen",
    alc: "5,1 %",
    cena: "76 / 58",
  },
  {
    stupen: "—",
    nazev: "Beauty Extreme",
    pivovar: "Magic Road, Polsko",
    styl: "Pastry Sour — mrkev, ananas, kalamansi, zázvor",
    alc: "4,6 %",
    cena: "119 / 90",
  },
  {
    stupen: "14°",
    nazev: "Konspirátor",
    pivovar: "Ovipistán, Ledce",
    styl: "West Coast IPA",
    alc: "6,1 %",
    cena: "89 / 68",
  },
  {
    stupen: "12°",
    nazev: "Apač",
    pivovar: "Louka",
    styl: "American Pale Ale",
    alc: "5,2 %",
    cena: "84 / 64",
  },
  {
    stupen: "—",
    nazev: "Lizard King",
    pivovar: "Salama Brewing, Finsko",
    styl: "NEIPA",
    alc: "6,5 %",
    cena: "139 / 106",
  },
];

const lahve = [
  {
    zeme: "Belgie",
    pivo: "Duchesse de Bourgogne",
    popis: "Flanders Red Ale zrající v dubu — kyselé, višňové, legendární.",
  },
  {
    zeme: "Belgie",
    pivo: "Chimay White",
    popis: "Trapistický tripel z opatství Scourmont. 8 %, a nepoznáte to.",
  },
  {
    zeme: "Německo",
    pivo: "Aecht Schlenkerla",
    popis: "Bamberský rauchbier — pivo, které chutná jako uzené maso.",
  },
  {
    zeme: "Česko",
    pivo: "The Rheum",
    popis: "Wild Ale s rebarborou z Mikulova, barikované v dubových sudech.",
  },
  {
    zeme: "Nizozemí",
    pivo: "La Trappe Tripel",
    popis: "Jeden z mála pravých trapistů. Klášterní klasika.",
  },
  {
    zeme: "Česko",
    pivo: "Meruňkový Knedlík",
    popis: "Pastry Sour od Chrousta. Ano, chutná jako knedlík. Vážně.",
  },
];

export default function Page() {
  return (
    <main className="pa">
      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Pivní ambasáda">
            <span className="wordmark-line">PIVNÍ</span>
            <span className="wordmark-line wordmark-line--accent">AMBASÁDA</span>
          </div>
          <p className="hero-locality">Pardubice · centrum</p>
        </div>

        <div className="hero-main">
          <h1 className="hero-title">
            <span className="hero-title-row">Osm pip.</span>
            <span className="hero-title-row hero-title-row--indent">
              Žádná dvě piva stejná.
            </span>
          </h1>
          <p className="hero-sub">
            Multipípa v samém centru Pardubic. Čepujeme malé pivovary z Čech i ze
            světa — od ležáku z Hořic po NEIPU z Finska. Lístek se mění, jak
            dopíjíme sudy. Přijďte se podívat, co teče dnes.
          </p>
        </div>

        {/* Signature: taproom — 8 pip jako živá řada kohoutů */}
        <div className="taps" role="img" aria-label="Osm pípy — každá čepuje jiné pivo, od světlého ležáku po tmavý stout">
          {cepovana.map((p, i) => (
            <div className="tap" key={p.nazev} style={{ ['--i' as string]: i }}>
              <span className="tap-handle" />
              <span className="tap-pipe" />
              <span className="tap-beer" />
              <span className="tap-num">{String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>

        <div className="hero-facts">
          <div className="fact">
            <span className="fact-label">Otevřeno</span>
            <span className="fact-value">po–so od 17:00</span>
          </div>
          <div className="fact">
            <span className="fact-label">Na čepu</span>
            <span className="fact-value">8 rotujících pip</span>
          </div>
          <div className="fact">
            <span className="fact-label">V lednici</span>
            <span className="fact-value">30+ lahví z 5 zemí</span>
          </div>
          <div className="fact">
            <span className="fact-label">Telefon</span>
            <span className="fact-value">
              <a href="tel:+420797869855" className="fact-link">797 869 855</a>
            </span>
          </div>
        </div>
      </header>

      {/* ===================== NA ČEPU ===================== */}
      <section className="section section--tap" aria-labelledby="cepovana-h">
        <div className="section-head">
          <p className="eyebrow">Právě teče</p>
          <h2 id="cepovana-h" className="section-title">Na čepu tento týden</h2>
          <p className="section-note">
            Ceny jsou za velké / malé pivo v Kč. Sud dopijeme, pípa se otočí —
            aktuální lístek najdete vždy na tabuli u pultu.
          </p>
        </div>

        <ol className="beer-list">
          {cepovana.map((p, i) => (
            <li className="beer" key={p.nazev}>
              <span className="beer-tapno" aria-hidden="true">
                pípa {String(i + 1).padStart(2, "0")}
              </span>
              <div className="beer-main">
                <h3 className="beer-name">
                  {p.stupen !== "—" && (
                    <span className="beer-stupen">{p.stupen} </span>
                  )}
                  {p.nazev}
                </h3>
                <p className="beer-meta">
                  {p.pivovar} · {p.styl} · {p.alc} alc.
                </p>
              </div>
              <span className="beer-price">{p.cena} Kč</span>
            </li>
          ))}
        </ol>

        <div className="tap-extras">
          <div className="extra">
            <h3 className="extra-title">Houkají sirény</h3>
            <p className="extra-text">
              Každou první středu v měsíci: velké pivo za cenu malého. Sirény
              houkají ve dvanáct, my čepujeme od pěti.
            </p>
          </div>
          <div className="extra">
            <h3 className="extra-title">Nejste na pivo?</h3>
            <p className="extra-text">
              Moravská vína od rodinného vinařství Sedlák, Joker Cider a
              nealko piva, co za něco stojí. Domů natočíme i do PET lahve.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== O NÁS + LAHVE ===================== */}
      <section className="section section--about" aria-labelledby="onas-h">
        <div className="about-grid">
          <div className="about-copy">
            <p className="eyebrow eyebrow--light">O nás</p>
            <h2 id="onas-h" className="section-title section-title--light">
              Zastupujeme malé pivovary.
              <br />
              Jako ambasáda — jen s pípou.
            </h2>
            <p className="about-text">
              Nejsme hospoda jednoho pivovaru. Jsme multipípa: každý kohout u nás
              zastupuje jiný malý pivovar — z Hořic, z Dolních Ředic, z Potštejna,
              ale klidně i z Bavorska, Polska nebo Finska. Když sud dojde, přijede
              další velvyslanec.
            </p>
            <p className="about-text">
              Sedíme v samém centru Pardubic. Pivo vám natočíme, doporučíme a
              rádi o něm i chvíli povyprávíme — ale nikdy ho nebudeme přechvalovat.
              To ať udělá samo.
            </p>
            <div className="about-contact">
              <p className="about-contact-line">
                <a href="tel:+420797869855" className="about-link">+420 797 869 855</a>
              </p>
              <p className="about-contact-line">
                <a href="mailto:pivniambasada@gmail.com" className="about-link">
                  pivniambasada@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="cellar">
            <h3 className="cellar-title">Z lahvové lednice</h3>
            <ul className="cellar-list">
              {lahve.map((l) => (
                <li className="cellar-item" key={l.pivo}>
                  <span className="cellar-country">{l.zeme}</span>
                  <div>
                    <h4 className="cellar-beer">{l.pivo}</h4>
                    <p className="cellar-desc">{l.popis}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="cellar-note">
              …a dalších pětadvacet lahví od trapistů po pastry stouty. Ptejte se,
              lednice se mění stejně rychle jako pípy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
