// GENOVA spol. s r.o. — zemní práce, Ústí nad Labem
// Koncept: „Řez terénem" — celý web je postaven na motivu geologického profilu / výkopu.
// Signature prvek: vrstevnaté horizontální pásy zeminy (ornice–jíl–štěrk–skála) protnuté
// diagonální linií svahu výkopu, která prochází hero sekcí. Typografie: technický,
// stlačený grotesk pro titulky (Archivo Expanded-ish přes system stack), mono pro data.

const sluzby = [
  {
    kod: "V-01",
    hloubka: "do 4 m",
    nazev: "Výkopy a základové jámy",
    popis:
      "Vykopeme základy pro rodinný dům, přípojky vody, plynu i kanalizace. Před první lžící vytyčíme sítě a domluvíme, kam půjde vytěžená zemina.",
  },
  {
    kod: "T-02",
    hloubka: "±2 cm",
    nazev: "Terénní úpravy a svahování",
    popis:
      "Srovnáme pozemek pod stavbu, zahradu nebo příjezdovou cestu. Pracujeme s nivelací — předáme rovinu, ne přibližně rovný terén.",
  },
  {
    kod: "D-03",
    hloubka: "0,8–1,5 m",
    nazev: "Demolice a odvoz suti",
    popis:
      "Zbouráme starou stodolu, kůlnu nebo podezdívku a suť odvezeme na řízenou skládku. Doklad o uložení dostanete ke faktuře.",
  },
  {
    kod: "O-04",
    hloubka: "kont. 3–9 m³",
    nazev: "Doprava a přesun zeminy",
    popis:
      "Kontejnery na zeminu i suť, návoz štěrku, písku a recyklátu. Vozíme po Ústí nad Labem a okolí do 30 km — obvykle do 48 hodin od objednávky.",
  },
];

const stroje = [
  { typ: "Pásové rypadlo 8 t", role: "základové jámy, hluboké výkopy" },
  { typ: "Kolový nakladač", role: "přesun zeminy, nakládka suti" },
  { typ: "Minibagr 2,5 t", role: "přípojky, práce u domu, úzké vjezdy" },
  { typ: "Vibrační deska a pěch", role: "hutnění zásypů a podkladů" },
];

export default function Page() {
  return (
    <main className="gv">
      {/* ---------- HERO: řez terénem ---------- */}
      <header className="gv-hero" aria-label="GENOVA — zemní práce Ústí nad Labem">
        <div className="gv-hero-top">
          <div className="gv-brand" aria-label="GENOVA spol. s r. o.">
            <span className="gv-brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="gv-brand-name">
              GENOVA<span className="gv-brand-suffix"> spol. s r. o.</span>
            </span>
          </div>
          <p className="gv-hero-loc" aria-label="Lokalita">
            Ústí nad Labem&nbsp;·&nbsp;50.66° N, 14.03° E
          </p>
        </div>

        <div className="gv-hero-body">
          <p className="gv-eyebrow">Zemní práce · výkopy · terénní úpravy</p>
          <h1 className="gv-hero-title">
            <span className="gv-line gv-line-1">Kopeme tam,</span>
            <span className="gv-line gv-line-2">kde stavba</span>
            <span className="gv-line gv-line-3">
              <em>začíná.</em>
            </span>
          </h1>
          <p className="gv-hero-sub">
            Základové jámy, přípojky, srovnání pozemku i odvoz zeminy. Jedna parta,
            vlastní stroje, Ústecko a okolí do 30 km. Přijedeme se podívat zdarma a
            řekneme na rovinu, co to obnáší.
          </p>
          <div className="gv-hero-cta">
            <a className="gv-btn" href="mailto:info@genova-sro.cz">
              Poptat výkop
            </a>
            <span className="gv-hero-note">Nabídku pošleme do 2 pracovních dnů</span>
          </div>
        </div>

        {/* Signature: geologický profil — vrstvy zeminy s popisky jako v projektové dokumentaci */}
        <div className="gv-strata" aria-hidden="true">
          <div className="gv-stratum gv-s1">
            <span className="gv-stratum-label">ornice · 0,3 m</span>
          </div>
          <div className="gv-stratum gv-s2">
            <span className="gv-stratum-label">jíl · 1,2 m</span>
          </div>
          <div className="gv-stratum gv-s3">
            <span className="gv-stratum-label">štěrkopísek · 2,4 m</span>
          </div>
          <div className="gv-stratum gv-s4">
            <span className="gv-stratum-label">skalní podloží</span>
          </div>
          <div className="gv-cut" />
        </div>
      </header>

      {/* ---------- SEKCE 1: služby jako výkopová dokumentace ---------- */}
      <section className="gv-sluzby" aria-labelledby="sluzby-h">
        <div className="gv-section-head">
          <p className="gv-eyebrow">Co vykopeme, srovnáme a odvezeme</p>
          <h2 id="sluzby-h">Čtyři práce, které děláme pořád dokola. A dobře.</h2>
        </div>

        <ul className="gv-sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="gv-karta">
              <div className="gv-karta-head">
                <span className="gv-karta-kod">{s.kod}</span>
                <span className="gv-karta-hloubka">{s.hloubka}</span>
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>

        <div className="gv-stroje" aria-label="Strojní park">
          <h3 className="gv-stroje-title">Strojní park</h3>
          <ul>
            {stroje.map((m) => (
              <li key={m.typ}>
                <strong>{m.typ}</strong>
                <span>{m.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- SEKCE 2: důvěra / jak pracujeme ---------- */}
      <section className="gv-duvera" aria-labelledby="duvera-h">
        <div className="gv-section-head gv-section-head-inverse">
          <p className="gv-eyebrow gv-eyebrow-light">Proč GENOVA</p>
          <h2 id="duvera-h">
            Než kopneme, víte cenu. Když skončíme, je po nás uklizeno.
          </h2>
        </div>

        <div className="gv-duvera-grid">
          <div className="gv-duvera-item">
            <span className="gv-duvera-cislo">30+</span>
            <h3>let u lopaty i páky</h3>
            <p>
              Firma vznikla v roce 1993. Poznáme jíl od navážky dřív, než se do něj
              zakousne lžíce — a podle toho stavíme nabídku, ne až vícepráce.
            </p>
          </div>
          <div className="gv-duvera-item">
            <span className="gv-duvera-cislo">1 cena</span>
            <h3>bez položek navíc</h3>
            <p>
              Nabídka obsahuje stroj, obsluhu, odvoz i uložení zeminy. Když narazíme
              na skálu nebo starou jímku, voláme hned — ne až s fakturou.
            </p>
          </div>
          <div className="gv-duvera-item">
            <span className="gv-duvera-cislo">48 h</span>
            <h3>od zavolání na místě</h3>
            <p>
              Na obhlídku po Ústí nad Labem, Trmicích, Chabařovicích nebo Litoměřicku
              dorazíme obvykle do dvou dnů. Menší výkop zvládneme často do týdne.
            </p>
          </div>
        </div>

        <figure className="gv-reference">
          <blockquote>
            „Potřebovali jsme srovnat svažitý pozemek v Brné a vykopat základy.
            Přijeli, změřili, poslali cenu — a ta na konci platila. Po odjezdu
            zůstala rovina a čistá cesta.“
          </blockquote>
          <figcaption>— stavebník rodinného domu, Ústí nad Labem – Brná</figcaption>
        </figure>
      </section>
    </main>
  );
}
