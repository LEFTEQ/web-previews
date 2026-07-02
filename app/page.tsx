const sluzby = [
  {
    tag: "Byty a domy",
    nazev: "Prodej nemovitosti",
    popis:
      "Připravíme nemovitost k prodeji, nafotíme ji, oceníme podle reálných prodejů v Plzni a okolí a inzerujeme na všech velkých portálech. Prohlídky, rezervační smlouvu i katastr vyřídíme za vás.",
    detail: "Provize až po prodeji",
  },
  {
    tag: "Pronájmy",
    nazev: "Pronájem bez starostí",
    popis:
      "Najdeme prověřeného nájemce, připravíme nájemní smlouvu a předávací protokol s fotodokumentací. Hlídáme platby a jednou ročně zkontrolujeme stav bytu.",
    detail: "Nájemce do 30 dnů",
  },
  {
    tag: "SVJ a majitelé",
    nazev: "Správa nemovitostí",
    popis:
      "Přebíráme kompletní správu bytových domů i jednotlivých bytů: účetnictví, revize, komunikaci s nájemci i řemeslníky. Vy dostáváte jednou měsíčně přehledné vyúčtování.",
    detail: "Od 250 Kč / jednotka měsíčně",
  },
  {
    tag: "Finance",
    nazev: "Hypotéka a pojištění",
    popis:
      "Porovnáme nabídky bank, pomůžeme s odhadem pro banku a pojistíme nemovitost i domácnost. Vše na jedné schůzce v naší kanceláři na Palackého.",
    detail: "Nezávislé srovnání bank",
  },
];

const nabidky = [
  {
    typ: "Prodej · Historická nemovitost",
    misto: "Červené Poříčí",
    plocha: "2 990 m²",
    cena: "11 900 000 Kč",
  },
  {
    typ: "Prodej · Pozemek",
    misto: "Červené Poříčí",
    plocha: "4 041 m²",
    cena: "4 500 000 Kč",
  },
  {
    typ: "Pronájem · Byt 4+1",
    misto: "Stráž u Tachova",
    plocha: "87 m²",
    cena: "11 000 Kč / měsíc",
  },
];

export default function Page() {
  return (
    <main className="nv">
      {/* ===== HERO ===== */}
      <header className="nv-hero">
        <div className="nv-hero-top">
          <div className="nv-wordmark" aria-label="NOVIS reality">
            <span className="nv-wordmark-novis">NOVIS</span>
            <span className="nv-wordmark-reality">reality</span>
          </div>
          <a className="nv-hero-tel" href="tel:+420773884225">
            +420&nbsp;773&nbsp;884&nbsp;225
          </a>
        </div>

        <div className="nv-hero-body">
          <p className="nv-hero-eyebrow">Realitní kancelář a správa nemovitostí · Plzeň, Palackého 70/1</p>
          <h1 className="nv-hero-title">
            <span className="nv-line nv-line-1">Nově.</span>
            <span className="nv-line nv-line-2">Svobodně.</span>
            <span className="nv-line nv-line-3">
              Férově<span className="nv-dot">.</span>
            </span>
          </h1>
          <p className="nv-hero-sub">
            Prodáme, pronajmeme a spravujeme nemovitosti v Plzeňském kraji. Provizi platíte
            až po prodeji a od první schůzky víte přesně, co pro vás děláme.
          </p>
          <div className="nv-hero-cta">
            <a className="nv-btn nv-btn-solid" href="tel:+420773884225">
              Zavolat makléři
            </a>
            <a className="nv-btn nv-btn-ghost" href="#sluzby">
              Co pro vás uděláme
            </a>
          </div>
        </div>

        {/* signature: katastrální parcelace jako grafický motiv */}
        <svg
          className="nv-parcely"
          viewBox="0 0 640 640"
          aria-hidden="true"
          preserveAspectRatio="xMaxYMax slice"
        >
          <g className="nv-parcely-lines" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0 640 L120 380 L300 300 L520 200 L640 180" />
            <path d="M120 380 L200 640" />
            <path d="M300 300 L420 640" />
            <path d="M520 200 L600 640" />
            <path d="M0 520 L120 380" />
            <path d="M200 640 L300 300" />
            <path d="M420 640 L520 200" />
            <path d="M640 320 L520 200" />
          </g>
          <g className="nv-parcely-fill">
            <path d="M300 300 L520 200 L600 640 L420 640 Z" />
          </g>
          <g className="nv-parcely-num" fontSize="13" letterSpacing="1">
            <text x="150" y="520">844/2</text>
            <text x="330" y="470">845/1</text>
            <text x="500" y="430">846/3</text>
          </g>
        </svg>

        <div className="nv-hero-strip" aria-hidden="true">
          <span>66 nemovitostí v nabídce</span>
          <span className="nv-strip-sep">/</span>
          <span>Plzeň · Klatovsko · Tachovsko</span>
          <span className="nv-strip-sep">/</span>
          <span>Provize až po prodeji</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="nv-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="nv-section-head">
          <p className="nv-eyebrow">Služby</p>
          <h2 id="sluzby-h">
            Od klíčů po katastr.
            <br />
            Všechno na jednom místě.
          </h2>
        </div>

        <div className="nv-sluzby-grid">
          <ul className="nv-sluzby-list">
            {sluzby.map((s) => (
              <li key={s.nazev} className="nv-sluzba">
                <p className="nv-sluzba-tag">{s.tag}</p>
                <h3>{s.nazev}</h3>
                <p className="nv-sluzba-popis">{s.popis}</p>
                <p className="nv-sluzba-detail">{s.detail}</p>
              </li>
            ))}
          </ul>
          <figure className="nv-sluzby-figure">
            <img
              src="/section-1.webp"
              alt="Makléřka NOVIS reality předává klientům klíče od bytu v Plzni"
            />
            <figcaption>
              Předání bytu na Borech — se smlouvou, protokolem a klíči. Tak vypadá naše
              běžná středa.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== NABÍDKA + DŮVĚRA ===== */}
      <section className="nv-duvera" aria-labelledby="duvera-h">
        <div className="nv-section-head nv-section-head-inverse">
          <p className="nv-eyebrow">Aktuální nabídka</p>
          <h2 id="duvera-h">Tři z 66 nemovitostí, které teď nabízíme</h2>
        </div>

        <ul className="nv-nabidky">
          {nabidky.map((n) => (
            <li key={n.typ + n.misto} className="nv-nabidka">
              <p className="nv-nabidka-typ">{n.typ}</p>
              <p className="nv-nabidka-misto">{n.misto}</p>
              <div className="nv-nabidka-radek">
                <span>{n.plocha}</span>
                <span className="nv-nabidka-cena">{n.cena}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="nv-onas">
          <figure className="nv-onas-figure">
            <img
              src="/section-2.webp"
              alt="Kancelář NOVIS reality na Palackého ulici v centru Plzně"
            />
          </figure>
          <div className="nv-onas-text">
            <p className="nv-eyebrow">Proč NOVIS</p>
            <h3>Známe plzeňský trh z první ruky</h3>
            <p>
              NOVIS reality založili makléři, kteří léta pracovali pro velkou celostátní
              síť — a chtěli to dělat jinak: bez skrytých poplatků, s cenou opřenou
              o skutečné prodeje v okolí a s jedním makléřem, který váš případ vede od
              první prohlídky po zápis do katastru.
            </p>
            <ul className="nv-onas-body">
              <li>
                <strong>Jedna kancelář, jeden makléř.</strong> Lenka Čechová a kolegové —
                víte, komu voláte, a číslo platí i po podpisu.
              </li>
              <li>
                <strong>Smlouvy v češtině, ne v právničině.</strong> Rezervační i kupní
                smlouvu vám vysvětlíme větu po větě, ještě před podpisem.
              </li>
              <li>
                <strong>Pomůžeme i s financováním.</strong> Hypotéku a pojištění vyřešíme
                na stejné schůzce jako prodej — nemusíte obíhat banky.
              </li>
            </ul>
            <p className="nv-onas-adresa">
              Najdete nás na adrese <strong>Palackého 70/1, 301 00 Plzeň</strong> —
              dvě minuty pěšky od náměstí Republiky.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
