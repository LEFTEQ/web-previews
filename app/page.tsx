import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      title: "Výkopy a terénní úpravy",
      body: "Základové jámy, rýhy pro inženýrské sítě, srovnání a modelace terénu. Kopeme přesně podle projektu, s ohledem na hladinu spodní vody i sousední stavby.",
      tag: "Bagr · smyk · ruční dokopávky",
    },
    {
      code: "02",
      title: "Přípravy pro stavbu",
      body: "Sejmutí ornice, hrubé i jemné terénní úpravy, zhutněné pláně a podkladní vrstvy. Připravíme pozemek tak, aby na něj mohli hned nastoupit zedníci.",
      tag: "Skrývka · zhutnění · pláň",
    },
    {
      code: "03",
      title: "Dětská hřiště",
      body: "Kompletní realizace hřišť od dopadových ploch a základů herních prvků po finální úpravu okolí. Bezpečné, certifikované, hotové ke kolaudaci.",
      tag: "Dopadové plochy · základy prvků",
    },
    {
      code: "04",
      title: "Odvoz a recyklace",
      body: "Naložení, odvoz a uložení výkopku i stavební suti. Přebytečnou zeminu odvezeme, potřebný materiál — štěrk, drť, recyklát — přivezeme zpět.",
      tag: "Nákladní doprava · uložení",
    },
  ];

  const fleet = [
    { label: "Pásová rypadla", note: "od 1,5 do 22 t" },
    { label: "Smykové nakladače", note: "do úzkých míst" },
    { label: "Nákladní vozidla", note: "třístranný sklápěč" },
    { label: "Vibrační válce", note: "hutnění plání" },
  ];

  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní">
        <a className="wm" href="#top" aria-label="DYBS Plzeň, domů">
          <span className="wm-mark" aria-hidden="true">▙▟</span>
          <span className="wm-name">DYBS</span>
          <span className="wm-city">Plzeň</span>
        </a>
        <nav className="nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#zaber">Technika</a>
          <a href="#onas">Reference</a>
        </nav>
        <a className="nav-cta" href="tel:+420377823420">377 823 420</a>
      </header>

      <section className="hero" id="top">
        <img className="hero-img" src="/hero.webp" alt="Rypadlo DYBS Plzeň při výkopových pracích na stavbě" />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-eyebrow">Zemní práce · Plzeň a okolí · od roku 1994</p>
          <h1 className="hero-h">
            Než postavíte<br />
            <em>první zeď,</em><br />
            přijedeme<br />
            <span className="hero-accent">urovnat terén.</span>
          </h1>
          <p className="hero-lead">
            Kopeme základy, tvarujeme pozemky a stavíme dětská hřiště po celém Plzeňském
            kraji. Vlastní rypadla, vlastní řidiči, žádné čekání na subdodavatele.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420377823420">Zavolat na stavbu</a>
            <a className="btn btn-ghost" href="#sluzby">Co pro vás vykopeme</a>
          </div>
        </div>
        <div className="hero-strip" aria-hidden="true">
          <span>PRVOMÁJOVÁ 39</span><span className="dot">●</span>
          <span>IČO 62621033</span><span className="dot">●</span>
          <span>PLZEŇSKÝ KRAJ</span><span className="dot">●</span>
          <span>RYPADLA 1,5–22 T</span><span className="dot">●</span>
          <span>PRVOMÁJOVÁ 39</span><span className="dot">●</span>
          <span>IČO 62621033</span><span className="dot">●</span>
          <span>PLZEŇSKÝ KRAJ</span><span className="dot">●</span>
          <span>RYPADLA 1,5–22 T</span><span className="dot">●</span>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="sec-head">
          <p className="sec-eyebrow">Čtyři vrstvy jedné zakázky</p>
          <h2 className="sec-h">Od skrývky ornice<br />po hotovou pláň</h2>
          <p className="sec-sub">
            Většina staveb nás potřebuje na začátku — a často i na konci. Projdeme celou zakázku
            od prvního záběru lžíce po urovnané okolí, které je připravené předat.
          </p>
        </div>
        <ol className="svc-list">
          {services.map((s) => (
            <li className="svc" key={s.code}>
              <span className="svc-code">{s.code}</span>
              <div className="svc-body">
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-text">{s.body}</p>
                <p className="svc-tag">{s.tag}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="proof" id="onas">
        <div className="proof-media">
          <img src="/section-1.webp" alt="Výkopové práce a příprava základů na staveništi v Plzni" />
        </div>
        <div className="proof-copy">
          <p className="sec-eyebrow light">O firmě · Prvomájová 39, Plzeň</p>
          <h2 className="sec-h light">Třicet let s lopatou<br />i s rypadlem</h2>
          <p className="proof-text">
            DYBS Plzeň dělá zemní práce od poloviny devadesátých let. Za tu dobu jsme rozkopali
            půlku Plzeňska — od rodinných domů v Křimicích po hřiště pro celé sídliště. Stroje
            řídí lidé, které znáte jménem, ne agentura na jeden týden.
          </p>
          <dl className="stats">
            <div><dt>30+</dt><dd>let na stavbách Plzeňska</dd></div>
            <div><dt>1,5–22 t</dt><dd>rozsah vlastních rypadel</dd></div>
            <div><dt>2</dt><dd>čísla, na kterých se dovoláte</dd></div>
          </dl>
          <p className="sec-eyebrow light" style={{ marginTop: "2rem" }}>Náš vozový park</p>
          <ul className="fleet">
            {fleet.map((f) => (
              <li key={f.label}>
                <span className="fleet-label">{f.label}</span>
                <span className="fleet-note">{f.note}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="proof-media proof-media-2">
          <img src="/section-2.webp" alt="Dokončené dětské hřiště a urovnaný terén realizovaný firmou DYBS" />
          <p className="proof-cap">Hotové hřiště připravené ke kolaudaci — dopadové plochy i urovnané okolí.</p>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
const _ignore: CSSProperties = {};
void _ignore;
