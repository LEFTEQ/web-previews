import type { ReactElement } from "react";

const services = [
  {
    t: "Sekční garážová vrata",
    d: "Zateplené panely tloušťky 42 mm, přes 200 odstínů a povrchů. Antracit RAL 7016 a bílá bývají skladem nejdřív.",
    tag: "Hörmann LPU 42",
  },
  {
    t: "Vjezdové brány",
    d: "Posuvné i křídlové brány s pohonem. Otevřete je z auta, aniž sáhnete na kliku nebo vystoupíte do deště.",
    tag: "Posuvné · křídlové",
  },
  {
    t: "Pohony a ovládání",
    d: "Plynulý rozjezd, tichý chod, dálkové ovladače i ovládání z telefonu přes aplikaci.",
    tag: "BiSecur",
  },
  {
    t: "Servis a náhradní díly",
    d: "Seřízení, výměna pružin, torzních hřídelí i těsnění. I pro vrata, která jsme nedodávali my.",
    tag: "Brno a okolí",
  },
];

const steps = [
  {
    n: "01",
    t: "Zaměření na místě",
    d: "Přijedeme k vám během pár dní, změříme ostění a poradíme s odstínem i pohonem. Zdarma a nezávazně.",
  },
  {
    n: "02",
    t: "Cenová nabídka",
    d: "Dostanete pevnou cenu bez schovaných položek — vrata, pohon, montáž i doprava na jednom papíře.",
  },
  {
    n: "03",
    t: "Výroba na míru",
    d: "Hörmann vyrobí vrata přesně na váš rozměr. Nic se nedořezává na koleně u vás na příjezdu.",
  },
  {
    n: "04",
    t: "Montáž a seřízení",
    d: "Nasadíme, zapojíme pohon, naprogramujeme ovladače a předáme vrata připravená k provozu.",
  },
];

const specs = [
  { v: "22 let", l: "v oboru vrat" },
  { v: "RAL 7016", l: "antracit skladem" },
  { v: "5 let", l: "záruka na vrata" },
  { v: "0 Kč", l: "zaměření po Brně" },
];

export default function Page(): ReactElement {
  return (
    <main id="top">
      <a className="skip" href="#nabidka">
        Přejít k nabídce
      </a>

      <header className="site">
        <div className="wrap bar">
          <a className="brand" href="#top" aria-label="Montek Brno CZ – úvod">
            <span className="door-mark" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="brand-txt">
              MONTEK
              <small>Brno CZ · vrata Hörmann</small>
            </span>
          </a>
          <nav className="nav" aria-label="Hlavní">
            <a href="#nabidka">Nabídka</a>
            <a href="#proc">Proč my</a>
            <a className="btn btn-call" href="tel:+420731474826">
              <span aria-hidden="true">☎</span> Zavolat 731 474 826
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Antracitová sekční garážová vrata Hörmann osazená na rodinném domě v Brně"
        />
        <div className="hero-veil" aria-hidden="true" />
        <div className="wrap hero-inner">
          <p className="eyebrow light">Autorizovaný prodejce Hörmann · Brno a Ostopovice</p>
          <h1>
            Garážová vrata,
            <br /> která ráno vyjedou
            <br /> nahoru bez váhání.
          </h1>
          <p className="lead">
            Sekční vrata, vjezdové brány a pohony Hörmann. Přijedeme zaměřit,
            necháme vyrobit přesně na vaše ostění a nasadíme tak, aby těsnila i
            v brněnské zimě.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="tel:+420731474826">
              Zavolat a domluvit zaměření
            </a>
            <a className="btn btn-ghost" href="#nabidka">
              Prohlédnout nabídku
            </a>
          </div>
        </div>
        <div className="spec">
          <div className="wrap spec-row">
            {specs.map((s) => (
              <div className="spec-i" key={s.v}>
                <b>{s.v}</b>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec nabidka" id="nabidka">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Nabídka</p>
            <h2>Vrata, brány a všechno, co je rozhýbe</h2>
            <p className="sec-sub">
              Skládá se to jako panely sekčních vrat — vyberte, co potřebujete,
              a zbytek doladíme při zaměření.
            </p>
          </div>

          <div className="door">
            {services.map((s) => (
              <article className="panel" key={s.t}>
                <div className="panel-main">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
                <span className="panel-tag">{s.tag}</span>
              </article>
            ))}
          </div>

          <figure className="wide-fig">
            <img
              src="/section-1.webp"
              alt="Detail zateplených panelů sekčních vrat v odstínu RAL 7016 antracit"
            />
            <figcaption>
              Antracit RAL 7016 na povrchu Sandgrain — nejžádanější kombinace na
              brněnských novostavbách.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sec proc" id="proc">
        <div className="wrap proc-grid">
          <div className="proc-intro">
            <p className="eyebrow light">Proč Montek</p>
            <h2>22 let nasazujeme vrata po celém Brně</h2>
            <p className="lead lead-dark">
              Jsme malá brněnská firma a autorizovaný prodejce Hörmann. Známe
              zdejší domy, panelové garáže i příkré příjezdy — a víme, kde
              vrata obvykle drhnou, dřív než je namontujeme.
            </p>

            <figure className="proc-fig">
              <img
                src="/section-2.webp"
                alt="Technik Montek při montáži pohonu garážových vrat"
              />
            </figure>

            <blockquote className="quote">
              <p>
                „Antracitová sekční vrata na řadový dům v Žabovřeskách. Zaměření
                druhý den, montáž bez chaosu a vrata zaklapnou jako víko od
                krabičky.“
              </p>
              <cite>— rodina Markových, Brno-Žabovřesky</cite>
            </blockquote>
          </div>

          <ol className="steps" aria-label="Jak montáž probíhá">
            {steps.map((st) => (
              <li className="step" key={st.n}>
                <span className="step-n">{st.n}</span>
                <div>
                  <h3>{st.t}</h3>
                  <p>{st.d}</p>
                </div>
              </li>
            ))}
            <li className="step-contact">
              <p>
                Provozovna: Družstevní 15, Ostopovice · Sídlo: Lazaretní 1/7,
                Brno
              </p>
              <a className="btn btn-primary" href="tel:+420731474826">
                Zavolat 731 474 826
              </a>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
