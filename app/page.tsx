import type { CSSProperties } from "react";

export const metadata = {
  title: "SELECTA — zateplení, izolace a hydroizolace | Hradec Králové",
  description:
    "SELECTA, s.r.o. z Hradce Králové. Kontaktní zateplení fasád, tepelné izolace a hydroizolace střech i spodních staveb. Asfaltové a fóliové systémy, klempířské práce.",
  openGraph: {
    title: "SELECTA — zateplení, izolace, hydroizolace",
    description:
      "Střechy, fasády a izolace z Hradce Králové. Asfaltové i fóliové systémy, kontaktní zateplovací systémy včetně dokončovacích prací.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const layers = [
  { n: "01", name: "Podklad", note: "nosná konstrukce" },
  { n: "02", name: "Tepelná izolace", note: "minerální vata / EPS" },
  { n: "03", name: "Lepení a kotvení", note: "talířové hmoždinky" },
  { n: "04", name: "Armovací vrstva", note: "stěrka + perlinka" },
  { n: "05", name: "Omítka", note: "finální povrch" },
];

const services = [
  {
    tag: "Fasády",
    title: "Zateplování fasád",
    body: "Kontaktní zateplovací systémy (ETICS) včetně všech dokončovacích prací — obklady, dlažby i klempířské prvky. Řešíme celý plášť domu, ne jen desku na stěně.",
    img: "/section-1.webp",
    alt: "Zateplená fasáda bytového domu s hotovou omítkou",
  },
  {
    tag: "Střechy",
    title: "Hydroizolace střech",
    body: "Střechy inverzní, jednoplášťové i dvouplášťové — asfaltové a fóliové systémy. Včetně parotěsných zábran, tepelných izolací, klempířských prvků a souvisejících prací.",
    img: "/section-2.webp",
    alt: "Plochá střecha s natavovanou hydroizolační vrstvou",
  },
];

const spodni = [
  "proti zemní vlhkosti",
  "tlakové izolace",
  "protiradonové izolace",
  "proti ropným produktům",
  "izolace bazénů",
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní">
        <a className="wm" href="#" aria-label="SELECTA, úvod">
          <span className="wm-word">SELECTA</span>
          <span className="wm-sub">střechy · fasády · izolace</span>
        </a>
        <a className="nav-tel" href="tel:+420495533454">
          <span className="nav-tel-dot" aria-hidden="true" />
          +420 495 533 454
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Zateplení fasády v řezu — vrstvy izolace na obvodové stěně"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Hradec Králové · od podkladu po omítku</p>
          <h1 id="hero-h">
            Držíme teplo uvnitř
            <br />
            a vodu venku.
          </h1>
          <p className="hero-lead">
            SELECTA skládá plášť domu ve vrstvách — každá má svůj úkol.
            Zateplíme fasádu, zaizolujeme střechu i základy tak, aby dům
            vydržel dekády, ne jednu zimu.
          </p>
          <a className="btn" href="tel:+420495533454">
            Zavolat na +420 495 533 454
          </a>
        </div>

        <ol className="stack" aria-label="Skladba zateplovacího systému">
          {layers.map((l, i) => (
            <li
              key={l.n}
              className="stack-row"
              style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties}
            >
              <span className="stack-n">{l.n}</span>
              <span className="stack-name">{l.name}</span>
              <span className="stack-note">{l.note}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="work" aria-labelledby="work-h">
        <div className="sec-head">
          <p className="eyebrow">Co u vás uděláme</p>
          <h2 id="work-h">Dvě věci, které rozhodují o tom, jak dům stárne.</h2>
        </div>

        <div className="cards">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <div className="card-media">
                <img src={s.img} alt={s.alt} className="card-img" />
              </div>
              <p className="card-tag">{s.tag}</p>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-body">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="under">
          <div className="under-item">
            <h3 className="under-title">Hydroizolace spodních staveb</h3>
            <p className="under-body">
              Asfaltové i fóliové systémy tam, kde je nejhůř vidět a nejvíc to
              bolí — pod úrovní terénu.
            </p>
            <ul className="chips">
              {spodni.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="under-item">
            <h3 className="under-title">Tepelné izolace</h3>
            <p className="under-body">
              Izolace střech, podlah i fasád. Vybereme skladbu podle konstrukce
              a rozpočtu — ne podle toho, co máme zrovna na skladě.
            </p>
          </div>
        </div>
      </section>

      <section className="about" aria-labelledby="about-h">
        <div className="about-grid">
          <div className="about-copy">
            <p className="eyebrow">O firmě</p>
            <h2 id="about-h">
              Selecta — to jsou střechy, fasády a izolace.
            </h2>
            <p className="about-body">
              Pracujeme v Hradci Králové a okolí. Neděláme jednu vrstvu a
              nezmizíme — řešíme celý plášť domu od hydroizolace základů přes
              zateplení fasády až po klempířské detaily na střeše. Když se
              některá vrstva podcení, prozradí to celý dům. Proto stojíme za
              každou z nich.
            </p>
            <a className="link-tel" href="tel:+420495533454">
              Zavolat a domluvit prohlídku →
            </a>
          </div>

          <ul className="facts">
            <li className="fact">
              <span className="fact-k">Kontaktní zateplení</span>
              <span className="fact-v">ETICS včetně dokončovacích prací</span>
            </li>
            <li className="fact">
              <span className="fact-k">Systémy</span>
              <span className="fact-v">asfaltové i fóliové</span>
            </li>
            <li className="fact">
              <span className="fact-k">Střechy</span>
              <span className="fact-v">inverzní, jedno- i dvouplášťové</span>
            </li>
            <li className="fact">
              <span className="fact-k">Klempířina</span>
              <span className="fact-v">součást dodávky, ne subdodávka</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
