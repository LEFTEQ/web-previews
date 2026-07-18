import type { CSSProperties } from "react";

type Bike = {
  name: string;
  cat: string;
  old: string;
  now: string;
  pct: string;
  spec: string;
  code: string;
};

const bikes: Bike[] = [
  {
    name: "Haibike AllTrack 27,5 4",
    cat: "Elektro · hardtail",
    old: "73 990 Kč",
    now: "44 990 Kč",
    pct: "39",
    spec: "Vstupní horský elektro hardtail s výkonným středovým pohonem.",
    code: "45100330",
  },
  {
    name: "Mondraker F-Podium Carbon",
    cat: "Horské · XC",
    old: "124 999 Kč",
    now: "81 990 Kč",
    pct: "34",
    spec: "Rychlé kolo s citlivým odpružením a geometrií laděnou pro cross-country.",
    code: "010.23053",
  },
  {
    name: "Giant Defy Advanced 0",
    cat: "Silniční · endurance",
    old: "107 999 Kč",
    now: "89 990 Kč",
    pct: "16",
    spec: "Špičkové vytrvalostní kolo — karbonový rám a maximální jízdní komfort.",
    code: "1031010146",
  },
  {
    name: "Basso Venta Disc 105",
    cat: "Silniční · stealth",
    old: "71 999 Kč",
    now: "49 990 Kč",
    pct: "30",
    spec: "Poctivé celokarbonové kolo, italské řemeslo a tradiční hodnoty.",
    code: "VED3165-56",
  },
  {
    name: "Mondraker Chrono",
    cat: "Horské · Black/Orange",
    old: "37 499 Kč",
    now: "26 990 Kč",
    pct: "28",
    spec: "Dynamický hliníkový rám 6061 Xtralite s Forward geometrií.",
    code: "010.23001S",
  },
  {
    name: "Author Pegas 29",
    cat: "Horské · 2023",
    old: "21 990 Kč",
    now: "15 490 Kč",
    pct: "29",
    spec: "Hydroformní duralový rám, uzamykatelná vidlice, hydraulické kotouče Tektro.",
    code: "42945713",
  },
  {
    name: "Author Solution 29",
    cat: "Horské · 2024",
    old: "19 290 Kč",
    now: "14 490 Kč",
    pct: "24",
    spec: "Základní 29\u201c horské kolo navržené na co nejlepší poměr cena/výkon.",
    code: "42934403",
  },
  {
    name: "Basso Astra Rival AXS",
    cat: "Silniční · Cobalt Grey",
    old: "142 499 Kč",
    now: "129 990 Kč",
    pct: "8",
    spec: "Bezdrátový SRAM Rival AXS a integrované karbonové kombo Levita.",
    code: "BA26ASD21.2-56",
  },
];

const trust = [
  {
    h: "Skladem, ne na objednávku",
    p: "Kola z výpisu máme fyzicky v Pardubicích — vyzkoušíte, seřídíme a odjedete.",
  },
  {
    h: "Vlastní servis a výplety",
    p: "Ruční výplet kol, seřízení řazení i brzd a záruční péče přímo u nás v dílně.",
  },
  {
    h: "Montáž Di2 a SRAM AXS",
    p: "Elektronické řazení Shimano i bezdrátový SRAM zapojíme a odladíme na míru.",
  },
  {
    h: "Bikefitting a trenažéry",
    p: "Posadíme vás správně na kolo a navážeme na chytré trenažéry Wahoo Kickr.",
  },
];

export default function Page() {
  return (
    <main className="bb">
      <header className="nav">
        <a className="mark" href="#top" aria-label="Bike-Boys, úvod">
          <span className="mark-b">Bike</span>
          <span className="mark-slash" aria-hidden="true">/</span>
          <span className="mark-boys">Boys</span>
        </a>
        <nav className="nav-links" aria-label="Hlavní">
          <a href="#akce">Akce</a>
          <a href="#servis">Servis</a>
          <a className="nav-tel" href="tel:+420777111222">777&nbsp;111&nbsp;222</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <p className="eyebrow">Cyklo obchod · Pardubice</p>
          <h1 className="hero-title">
            Nakloň se<br />
            do zatáčky<span className="dot">.</span>
          </h1>
          <p className="hero-sub">
            Silniční, horská i elektro kola značek Basso, Mondraker, Giant a
            Orbea. Skladem ve městě Zlaté přilby, seřízená a připravená na první
            výjezd.
          </p>
          <div className="hero-cta">
            <a className="btn btn-green" href="#akce">Zobrazit akční kola</a>
            <a className="btn btn-ghost" href="#servis">Objednat servis</a>
          </div>

          <aside className="spec" aria-label="Model měsíce">
            <div className="flag"><span>Hero model · −25 %</span></div>
            <p className="spec-cat">Silniční · pop green</p>
            <h2 className="spec-name">Basso Astra</h2>
            <ul className="spec-list">
              <li>Shimano 105 Di2</li>
              <li>Kola FFWD Tyro V3</li>
              <li>Přepracovaný celokarbon</li>
            </ul>
            <p className="price">
              <s className="price-old">127 990 Kč</s>
              <strong className="price-now">94 990 Kč</strong>
            </p>
            <p className="spec-stock">Skladem · vel. 56</p>
          </aside>
        </div>

        <div className="split split-a" aria-hidden="true" />
        <div className="split split-b" aria-hidden="true" />
      </section>

      <section className="band band-offer" id="akce">
        <span className="stripe" aria-hidden="true" />
        <div className="wrap">
          <header className="band-head">
            <p className="eyebrow eyebrow-dark">Aktuální akce</p>
            <h2 className="band-title">Kola se sraženou cenou</h2>
            <p className="band-lead">
              Najeďte na kolo a cena spadne o jednu příčku dolů. Vše skladem —
              žádné čekání na objednávku.
            </p>
          </header>

          <ul className="grid">
            {bikes.map((b) => (
              <li key={b.code} className="card">
                <div
                  className="card-flag"
                  style={{ ["--pct" as keyof CSSProperties]: `"${b.pct}"` } as CSSProperties}
                >
                  <span>−{b.pct}\u00a0%</span>
                </div>
                <p className="card-cat">{b.cat}</p>
                <h3 className="card-name">{b.name}</h3>
                <p className="card-spec">{b.spec}</p>
                <div className="card-foot">
                  <p className="price">
                    <s className="price-old">{b.old}</s>
                    <strong className="price-now">{b.now}</strong>
                  </p>
                  <span className="card-code">Kód {b.code}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band-trust" id="servis">
        <span className="stripe stripe-light" aria-hidden="true" />
        <div className="wrap">
          <div className="trust-top">
            <div>
              <p className="eyebrow">Proč Bike-Boys</p>
              <h2 className="band-title band-title-light">
                Domácí obchod ve městě Zlaté přilby
              </h2>
            </div>
            <p className="trust-intro">
              Pardubice jezdí naplno už sto let — a kola, co drží stopu z
              rychlé zatáčky, tu prostě patří. Vybereme značku, posadíme vás
              správně a o kolo se pak staráme dál v naší dílně.
            </p>
          </div>

          <ul className="trust-grid">
            {trust.map((t) => (
              <li key={t.h} className="trust-item">
                <span className="trust-tick" aria-hidden="true" />
                <h3>{t.h}</h3>
                <p>{t.p}</p>
              </li>
            ))}
          </ul>

          <p className="brands">
            Vedeme <b>Basso</b>, <b>Mondraker</b>, <b>Giant</b>, <b>Orbea</b>,{" "}
            <b>Author</b> a <b>Haibike</b> — plus cyklopočítače Wahoo a brýle
            Red Bull Spect.
          </p>

          <p className="where">
            Prodejna a dílna: Ukázková 123, Pardubice · info@example.cz ·{" "}
            <a href="tel:+420777111222">777 111 222</a>
          </p>
        </div>
      </section>
    </main>
  );
}
