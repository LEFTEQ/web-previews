import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TREMIS s.r.o. — hromosvody a součásti uzemnění | Lukavec",
  description:
    "Český výrobce hromosvodů a částí uzemňovacích soustav. Svorky, držáky, vodiče a jímací tyče v zinku, mědi i nerezu. Vyrábíme v Lukavci od roku 1991.",
};

const pillars = [
  {
    code: "Zn",
    material: "Žárový zinek",
    note: "Základní ochrana pro běžné střechy a fasády. Poctivá cena, dlouhá životnost.",
  },
  {
    code: "Cu",
    material: "Měď",
    note: "Tam, kde jde o vodivost a estetiku — historické objekty, měděné krytiny.",
  },
  {
    code: "Ni",
    material: "Nerez",
    note: "Do agresivního prostředí, k pobřeží i tam, kde se nesmí objevit rez.",
  },
];

const catalog = [
  {
    id: "01",
    name: "Svorky",
    desc: "Křížové, spojovací a odbočné svorky pro každý přechod vodiče. Včetně nové univerzální svorky SUM pro armatury 8–25 mm.",
  },
  {
    id: "02",
    name: "Podpěry vedení",
    desc: "Podpěry pro hřebeny, tašky, plech i rovné střechy. Drží vodič v odstupu, jak vyžaduje norma.",
  },
  {
    id: "03",
    name: "Držáky, tyče, desky",
    desc: "Jímací tyče, zemnicí desky a držák DJDe pro tyče a chráničky přímo do zdiva vrutem.",
  },
  {
    id: "04",
    name: "Vodiče",
    desc: "Drát i pásovina ve všech třech provedeních. To, co spojuje jímací soustavu se zemí.",
  },
  {
    id: "05",
    name: "Izolovaný systém",
    desc: "Oddálené jímací soustavy s izolační distancí tam, kde nesmí dojít k přeskoku.",
  },
  {
    id: "06",
    name: "Ostatní",
    desc: "Doplňky, spojovací materiál a značené díly, bez kterých montáž nedrží pohromadě.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="top">
        <a className="wm" href="#" aria-label="TREMIS — domů">
          <span className="wm-bolt" aria-hidden="true">
            <svg viewBox="0 0 24 48" width="18" height="36" role="presentation">
              <path d="M14 0 L2 26 L11 26 L8 48 L22 18 L13 18 Z" fill="currentColor" />
            </svg>
          </span>
          <span className="wm-text">
            TREMIS<span className="wm-suffix">&nbsp;s.r.o.</span>
          </span>
        </a>
        <a className="top-cta" href="tel:+420416531260">
          +420&nbsp;416&nbsp;531&nbsp;260
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-field" aria-hidden="true">
          <div className="strike">
            <svg viewBox="0 0 120 620" preserveAspectRatio="xMidYMax slice">
              <path
                className="strike-path"
                d="M66 -20 L44 210 L74 220 L38 420 L70 430 L30 640"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Výroba hromosvodů · Lukavec · od 1991</p>
          <h1 id="hero-title" className="hero-title">
            <span className="line line-1">Svedeme</span>
            <span className="line line-2">blesk</span>
            <span className="line line-3">
              bezpečně <em>do&nbsp;země.</em>
            </span>
          </h1>
          <p className="hero-lede">
            Vyrábíme svorky, držáky, jímací tyče a vodiče pro hromosvody a
            uzemnění — v zinku, mědi i nerezu. Díly, které montér zná a na které
            se spolehne dům na příštích čtyřicet let.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#katalog">
              Prohlédnout sortiment
            </a>
            <a className="btn btn-line" href="mailto:info@tremis.cz">
              Poptat díly
            </a>
          </div>
        </div>

        <ul className="hero-meta" aria-label="Provedení">
          <li><b>Zn</b> zinek</li>
          <li><b>Cu</b> měď</li>
          <li><b>Ni</b> nerez</li>
        </ul>
      </section>

      <section className="materials" aria-labelledby="mat-title">
        <div className="sec-head">
          <p className="sec-eyebrow">Tři provedení</p>
          <h2 id="mat-title">Jeden díl, tři kovy — vyberete podle stavby</h2>
          <p className="sec-sub">
            Většina našich součástí existuje ve třech materiálech. Poradíme, který
            se hodí na vaši střechu, do vašeho prostředí i k vašemu rozpočtu.
          </p>
        </div>
        <div className="mat-grid">
          {pillars.map((p) => (
            <article className="mat-card" key={p.code}>
              <span className="mat-symbol" aria-hidden="true">{p.code}</span>
              <h3>{p.material}</h3>
              <p>{p.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="catalog" id="katalog" aria-labelledby="cat-title">
        <div className="sec-head">
          <p className="sec-eyebrow">Sortiment</p>
          <h2 id="cat-title">Šest skupin, které tvoří celou soustavu</h2>
          <p className="sec-sub">
            Od jímací tyče na vrcholu až po zemnicí desku dole — díly na sebe
            navazují. Kompletní katalog 2025 pošleme na vyžádání.
          </p>
        </div>

        <ol className="cat-list">
          {catalog.map((c) => (
            <li className="cat-row" key={c.id}>
              <span className="cat-id" aria-hidden="true">{c.id}</span>
              <div className="cat-body">
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="trust">
          <p className="trust-eyebrow">Kde nás najdete</p>
          <p className="trust-line">
            Vyrábíme v Lukavci u Úštěku, píšeme na dodací listy stejnou adresu už
            přes třicet let: <b>Lukavec&nbsp;28, 410&nbsp;02</b>. Objednávky a dotazy
            vyřídíme v pracovní dny 7:00–15:00.
          </p>
          <div className="trust-contacts">
            <a href="tel:+420416531260">+420 416 531 260</a>
            <a href="tel:+420602417034">+420 602 417 034</a>
            <a href="mailto:info@tremis.cz">info@tremis.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
