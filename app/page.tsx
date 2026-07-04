import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="pg">
      {/* HERO */}
      <header className="hero" aria-label="PETR'S — betonové a průmyslové podlahy Olomouc">
        <div className="hero-grid" aria-hidden="true">
          <div className="pour" />
          <div className="score score-a" />
          <div className="score score-b" />
          <div className="score score-c" />
        </div>

        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#top" aria-label="PETR'S — úvod">
            <span className="wm-main">PETR&rsquo;S</span>
            <span className="wm-sub">beton&nbsp;/&nbsp;Olomouc</span>
          </a>
          <ul className="nav-links">
            <li><a href="#podlahy">Podlahy</a></li>
            <li><a href="#firma">O firmě</a></li>
            <li><a className="nav-call" href="tel:+420733312514">Zavolat</a></li>
          </ul>
        </nav>

        <div className="hero-body">
          <p className="eyebrow">Průmyslové podlahy &amp; zpevněné plochy · od&nbsp;1990</p>
          <h1 className="hero-h1">
            <span className="line l1">Lijeme podlahy,</span>
            <span className="line l2">které <em>unesou</em></span>
            <span className="line l3">celý provoz.</span>
          </h1>
          <p className="hero-lede">
            Betonové a spřažené podlahy pro haly, sklady a dílny. Od výztuže
            přes lité potěry CONTOPP<sup>&reg;</sup> až po broušený SUPERBETON —
            navrhneme skladbu na míru vašemu zatížení a provedeme ji v Olomouci
            i v celém kraji.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420733312514">Zavolat na +420&nbsp;733&nbsp;312&nbsp;514</a>
            <a className="btn btn-ghost" href="#podlahy">Co dokážeme položit</a>
          </div>

          <dl className="spec-strip">
            <div className="spec">
              <dt>Únosnost</dt>
              <dd>až&nbsp;desítky t/m²</dd>
            </div>
            <div className="spec">
              <dt>Systémy</dt>
              <dd>Estrix · Ferroplan</dd>
            </div>
            <div className="spec">
              <dt>Praxe</dt>
              <dd>od&nbsp;roku&nbsp;1990</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* PODLAHY — skladby a služby */}
      <section id="podlahy" className="floors" aria-labelledby="floors-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Skladby podle podkladu a zatížení</p>
          <h2 id="floors-h">Vyberte podlahu podle toho, co na ní stojí</h2>
          <p className="sec-lede">
            Každá hala má jiný podklad a jiné namáhání. Proto neděláme jednu
            podlahu „na všechno“ — vrstvíme systém, který sedne přesně na váš
            provoz.
          </p>
        </div>

        <ul className="floor-list">
          {floors.map((f, i) => (
            <li className="floor" key={f.title} style={{ "--i": i } as CSSProperties}>
              <span className="floor-mm" aria-hidden="true">{f.mm}</span>
              <div className="floor-txt">
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                <p className="floor-for"><span>Kam se hodí:</span> {f.use}</p>
              </div>
            </li>
          ))}
        </ul>

        <aside className="trade" aria-label="Doplňková obchodní činnost">
          <h3>K betonu dodáváme i chemii, se kterou pracujeme</h3>
          <ul className="trade-list">
            {trade.map((t) => (
              <li key={t.name}>
                <strong>{t.name}</strong>
                <span>{t.desc}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* O FIRMĚ / DŮVĚRA */}
      <section id="firma" className="about" aria-labelledby="about-h">
        <div className="about-lead">
          <p className="sec-eyebrow light">O firmě · PETR&rsquo;S Olomouc</p>
          <h2 id="about-h">
            Od&nbsp;roku 1990 aplikujeme silikátové hmoty ve&nbsp;stavebnictví — a&nbsp;stojíme si za&nbsp;tím.
          </h2>
          <p className="about-body">
            Jsme technicko-konzultační i&nbsp;dodavatelská firma se sídlem na Lazecké
            v&nbsp;Olomouci. Provedeme vás návrhem skladby, dodáme materiál i&nbsp;montáž
            a&nbsp;podlahu předáme hotovou — od výztuže přes cementové potěry
            CONTOPP<sup>&reg;</sup> až po broušení a leštění betonových ploch.
          </p>
        </div>

        <ul className="pillars">
          {pillars.map((p) => (
            <li key={p.h}>
              <h3>{p.h}</h3>
              <p>{p.p}</p>
            </li>
          ))}
        </ul>

        <div className="contact-card">
          <p className="cc-eyebrow">Ozvěte se s tím, co plánujete stavět</p>
          <div className="cc-rows">
            <div className="cc-row">
              <span className="cc-k">Telefon</span>
              <a className="cc-v" href="tel:+420733312514">+420&nbsp;733&nbsp;312&nbsp;514</a>
            </div>
            <div className="cc-row">
              <span className="cc-k">E-mail</span>
              <a className="cc-v" href="mailto:petrs@petrs.com">petrs@petrs.com</a>
            </div>
            <div className="cc-row">
              <span className="cc-k">Kde nás najdete</span>
              <span className="cc-v">Lazecká 121A, 779&nbsp;00 Olomouc</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const floors = [
  {
    mm: "01",
    title: "Betonové podlahy s výztuží",
    body:
      "Klasická nebo rozptýlená (drátková) výztuž. Osvědčený základ pro haly a provozy, kde má podlaha hlavně vydržet a dobře se udržovat.",
    use: "výrobní haly, sklady, garáže",
  },
  {
    mm: "02",
    title: "Spřažené podlahy Estrix",
    body:
      "Vysokopevnostní spřažený systém pro opravdu vysoká zatížení — regálové systémy, těžká manipulační technika, koncentrované tlaky.",
    use: "logistika, těžký průmysl",
  },
  {
    mm: "03",
    title: "Spřažené podlahy Ferroplan",
    body:
      "Řešení tam, kde je podklad méně únosný nebo zaolejovaný. Vytvoří pevnou spřaženou vrstvu i na problematickém základu.",
    use: "rekonstrukce, zaolejované provozy",
  },
  {
    mm: "04",
    title: "Lité a stěrkové podlahy",
    body:
      "Lité podlahy na bázi epoxidu a polyuretanu, stěrkové, plastbetonové i antistatické s odvodem elektrostatického náboje.",
    use: "provozy s nároky na hygienu a ESD",
  },
  {
    mm: "05",
    title: "Cementové potěry CONTOPP®",
    body:
      "Výroba a pokládka hlazených cementových potěrů pro rodinné domy i občanské a průmyslové stavby, včetně urychlovačů a zušlechťovačů zrání.",
    use: "novostavby, občanská výstavba",
  },
  {
    mm: "06",
    title: "SUPERBETON — broušení a leštění",
    body:
      "Systém broušení a leštění betonových ploch a zpevněné povrchy CONFALT pro sklady, dílny, vozovky i odbavovací plochy.",
    use: "pohledové a extrémně namáhané plochy",
  },
];

const trade = [
  { name: "CONTOPP®", desc: "Zušlechťovače a urychlovače zrání cementových potěrů." },
  { name: "TEGO ADDIBIT", desc: "Adhézní přísady a emulgátory pro výrobu asfaltových směsí a emulzí." },
  { name: "PRODORAL R6-1", desc: "Utěsňování šroubovaných spojů vnitřních domovních plynovodů." },
  { name: "PROTEGOL", desc: "Antikorozní ochrana potrubí." },
];

const pillars = [
  {
    h: "Roky v provozu, ne na papíře",
    p: "Fungujeme od roku 1990. Za tu dobu jsme položili podlahy, po kterých se dodnes jezdí — a víme, co na jakém podkladu vydrží.",
  },
  {
    h: "Od návrhu po předání",
    p: "Poradíme se skladbou, dodáme materiál i montáž a plochu předáme hotovou. Jeden partner na celou podlahu.",
  },
  {
    h: "Materiály, kterým rozumíme",
    p: "Pracujeme se systémy Estrix, Ferroplan, CONFALT a chemií CONTOPP®, TEGO ADDIBIT, PRODORAL i PROTEGOL — dodáváme je i samostatně.",
  },
];
