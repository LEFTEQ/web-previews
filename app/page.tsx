import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SANY GUARD — Soukromá bezpečnostní agentura Plzeň | PCO 24/7",
  description:
    "Bezpečnostní agentura z Plzně od roku 1994. Pult centralizované ochrany 24/7, ostraha objektů, patrolovací služba a přeprava cenin. Dispečink nonstop: +420 602 413 695.",
  openGraph: {
    title: "SANY GUARD — Bezpečnostní agentura Plzeň",
    description:
      "PCO 24/7, ostraha objektů a výjezdová jednotka. V Plzni chráníme majetek už od roku 1994.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    num: "01",
    titul: "Pult centralizované ochrany",
    text: "Vlastní PCO střeží váš objekt 24 hodin denně. Při poplachu vyjíždí naše zásahová jednotka. Zajistíme i montáž EZS a EPS na míru.",
    tag: "Nonstop dispečink · výjezd",
  },
  {
    num: "02",
    titul: "Ostraha objektů",
    text: "Fyzická ostraha areálů, skladů, staveb i firem — krátkodobě i dlouhodobě, přesně dle vašeho zadání a rizikového profilu objektu.",
    tag: "Krátkodobě i dlouhodobě",
  },
  {
    num: "03",
    titul: "Patrolovací služba",
    text: "Pravidelné pochůzky a namátkové kontroly více objektů jednou mobilní hlídkou. Ekonomické řešení pro noční ostrahu a víkendy.",
    tag: "Mobilní hlídka · Plzeňsko",
  },
  {
    num: "04",
    titul: "Přeprava hotovostí a cenin",
    text: "Bezpečný svoz tržeb a přeprava cenných zásilek proškolenou posádkou. Diskrétně, spolehlivě a s působností po celé ČR.",
    tag: "Působnost celá ČR",
  },
  {
    num: "05",
    titul: "Pořádková služba",
    text: "Zajištění pořádku a bezpečnosti na akcích, v recepcích a při vstupu do objektů. Vystupujeme profesionálně a bez konfliktů.",
    tag: "Recepce · akce · vstupy",
  },
  {
    num: "06",
    titul: "Kontrola nemocných a doručování",
    text: "Kontrola dodržování režimu práce neschopných zaměstnanců a prokazatelné doručování výpovědí a úředních písemností.",
    tag: "Pro zaměstnavatele",
  },
];

const mista = [
  {
    role: "Strážný / strážná",
    loc: "Přeštice · Aš · Nýřany · Plzeň",
    nastup: "Nástup ihned",
    ozp: "Vhodné i pro OZP",
  },
  {
    role: "Výjezdová dispečerka / dispečer PCO",
    loc: "Plzeň — poplachy PCO",
    nastup: "Nástup ihned",
    ozp: "Vhodné i pro OZP",
  },
];

export default function Page() {
  return (
    <main>
      {/* top bar */}
      <header className="sg-top">
        <div className="sg-wrap sg-top-inner">
          <a className="sg-logo" href="#" aria-label="SANY GUARD — úvod">
            <span className="mark">
              SANY<b>GUARD</b>
            </span>
            <span className="sub">Plzeň · od 1994</span>
          </a>
          <a className="sg-disp" href="tel:+420602413695">
            <span className="dot" aria-hidden="true" />
            <span>
              <span className="lbl">Dispečink nonstop</span>
              <br />
              +420 602 413 695
            </span>
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="sg-hero">
        <div className="sg-hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt="Noční pohled na střežený objekt bezpečnostní agentury SANY GUARD v Plzni"
          />
        </div>
        <div className="sg-scan" aria-hidden="true" />
        <div className="sg-wrap sg-hero-inner">
          <span className="sg-eyebrow reveal">
            Soukromá bezpečnostní agentura
            <span className="since">/ Plzeň</span>
          </span>
          <h1 className="sg-h1 reveal d1">
            Když se v noci
            <br />
            spustí alarm,
            <br />
            <span className="glow">jedeme my.</span>
          </h1>
          <p className="sg-lead reveal d2">
            Napojení na náš pult centralizované ochrany je nejjednodušší a
            nejlevnější způsob, jak ohlídat firmu, sklad i domov. Dispečink drží
            službu 24 hodin denně, sedm dní v týdnu.
          </p>
          <div className="sg-cta-row reveal d3">
            <a className="sg-btn sg-btn-primary" href="tel:+420602413695">
              Zavolat na dispečink
            </a>
            <a className="sg-btn sg-btn-ghost" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>

          <div className="sg-status reveal d3" role="list">
            <div className="cell" role="listitem">
              <div className="k">Dispečink</div>
              <div className="v">
                <span className="live" aria-hidden="true" />
                24/7
              </div>
            </div>
            <div className="cell" role="listitem">
              <div className="k">Chráníme Plzeň od</div>
              <div className="v">1994</div>
            </div>
            <div className="cell" role="listitem">
              <div className="k">Působnost</div>
              <div className="v">
                Celá ČR <small>sídlo Plzeň</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* služby */}
      <section className="sg-sec" id="sluzby">
        <div className="sg-wrap">
          <div className="sg-sec-head">
            <div>
              <div className="sg-kicker">Co pro vás zajistíme</div>
              <h2 className="sg-h2">Naše služby</h2>
            </div>
            <p className="sg-sec-note">
              Od nepřetržitého napojení na PCO po fyzickou ostrahu areálu —
              vyskládáme ochranu přesně na míru vašemu objektu a rozpočtu.
            </p>
          </div>

          <div className="sg-grid">
            {sluzby.map((s) => (
              <article className="sg-card" key={s.num}>
                <span className="bar" aria-hidden="true" />
                <span className="num">{s.num}</span>
                <h3>{s.titul}</h3>
                <p>{s.text}</p>
                <span className="tag">{s.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* o nás / důvěra + volná místa */}
      <section className="sg-sec" id="o-nas">
        <div className="sg-wrap">
          <div className="sg-about">
            <div className="sg-about-media">
              <img
                src="/section-1.webp"
                alt="Pracovník ostrahy SANY GUARD na obchůzce střeženého objektu v Plzni"
              />
              <span className="badge">30 let na Plzeňsku</span>
            </div>
            <div className="sg-about-body">
              <div className="sg-kicker">Čím se zabýváme</div>
              <h2 className="sg-h2" style={{ marginBottom: "22px" }}>
                Bezpečí, které v Plzni znají
              </h2>
              <p>
                <span className="hl">SANY GUARD</span> hlídá majetek Plzeňanů už
                od roku 1994. Kdo se o bezpečnost ve městě zajímá, naši službu
                zná — spojujeme nejmodernější techniku s vyškolenými profesionály,
                kteří vědí, co dělají.
              </p>
              <p>
                S námi jste v bezpečí vy i váš majetek. Poskytujeme také náhradní
                plnění ZPS a poradenství v oblasti zabezpečení osob a majetku.
              </p>
              <ul className="sg-checks">
                <li>PCO včetně montáže EZS a EPS</li>
                <li>Náhradní plnění ZPS pro zaměstnavatele</li>
                <li>Recepční a úklidové služby</li>
                <li>Poradenství v zabezpečení osob a majetku</li>
              </ul>
            </div>
          </div>

          <div className="sg-jobs">
            <div className="sg-jobs-top">
              <span className="tag">Kariéra</span>
              <h3>Volná místa — nástup ihned</h3>
            </div>
            {mista.map((m) => (
              <div className="sg-job" key={m.role}>
                <div>
                  <div className="role">{m.role}</div>
                  <div className="loc">{m.loc}</div>
                </div>
                <div className="meta">
                  {m.nastup}
                  <small>{m.ozp}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
