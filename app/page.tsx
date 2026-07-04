import type { CSSProperties } from "react";

export default function Page() {
  const surfaces = [
    {
      no: "01",
      name: "Pohledový beton",
      spec: "Betonová stěrka",
      desc: "Souvislá betonová plocha bez spár. Ručně nanášená, broušená a impregnovaná — od syrového industriálu po hedvábně hladký povrch.",
    },
    {
      no: "02",
      name: "Marokánská tadelakt",
      spec: "Vápenná stěrka",
      desc: "Leštěná vápenná omítka do koupelen i kuchyní. Voděodolná, prodyšná, teplá na dotek. Každá stěna má vlastní kresbu.",
    },
    {
      no: "03",
      name: "Štukové lišty",
      spec: "Interiérové profily",
      desc: "Stropní římsy, rámy a lišty Orac Decor. Přesné napojení v rozích, zatmelené spáry, přetíratelný povrch.",
    },
    {
      no: "04",
      name: "Kompletní rekonstrukce",
      spec: "Realizace na klíč",
      desc: "Od bourání po úklid. Vedeme řemeslníky, hlídáme termín i rozpočet a předáváme byt připravený k nastěhování.",
    },
  ];

  const jobs = [
    {
      quote:
        "Dokázali se napřímo domluvit s architekty a vyhovět jejich i našim požadavkům. Vysněný domov si užíváme na sto procent.",
      who: "Rodinný dům, Praha 6",
    },
    {
      quote:
        "Potřebovali jsme novou výmalbu bez zavření provozu. Všechny práce zvládli přes noc mimo otevírací dobu.",
      who: "La Bottega di Finestra",
    },
    {
      quote:
        "Namíchali barvy, které sedí ke stylu prostoru a splňují náročné požadavky na údržbu restaurace.",
      who: "La Finestra in Cucina",
    },
  ];

  return (
    <main className="bd">
      <header className="bd-nav">
        <a className="bd-mark" href="#top" aria-label="Bohemia Decor Group, úvod">
          <span className="bd-mark-a">BOHEMIA</span>
          <span className="bd-mark-b">DECOR</span>
        </a>
        <span className="bd-loc">Praha · rekonstrukce bytů</span>
      </header>

      <section className="bd-hero" id="top">
        <div className="bd-hero-grid" aria-hidden="true">
          <div className="bd-trowel">
            <span className="bd-sweep bd-sweep-1" />
            <span className="bd-sweep bd-sweep-2" />
            <span className="bd-sweep bd-sweep-3" />
          </div>
        </div>

        <div className="bd-hero-inner">
          <p className="bd-eyebrow">Dekorační povrchy · byty na klíč</p>
          <h1 className="bd-title">
            <span className="bd-line bd-line-1">Stěny,</span>
            <span className="bd-line bd-line-2">které se</span>
            <span className="bd-line bd-line-3">nanáší</span>
            <span className="bd-line bd-line-4">rukou.</span>
          </h1>
          <p className="bd-lede">
            Betonové a vápenné stěrky, štukové lišty a rekonstrukce pražských
            bytů. Každou plochu taháme hladítkem — spára po spáře, tah po tahu.
          </p>
          <div className="bd-hero-cta">
            <a className="bd-btn" href="#povrchy">Prohlédnout povrchy</a>
            <a className="bd-btn bd-btn-ghost" href="#reference">Naše realizace</a>
          </div>
        </div>

        <ul className="bd-ticker">
          <li><b>18</b> let na pražských bytech</li>
          <li><b>Ø 4&nbsp;týdny</b> kompletní rekonstrukce</li>
          <li><b>0</b> spár u pohledového betonu</li>
        </ul>
      </section>

      <section className="bd-sec" id="povrchy">
        <div className="bd-sec-head">
          <p className="bd-eyebrow">Co umíme nanést</p>
          <h2 className="bd-h2">Čtyři povrchy, jedno hladítko</h2>
        </div>
        <ol className="bd-cards">
          {surfaces.map((s) => (
            <li className="bd-card" key={s.no}>
              <span className="bd-card-no">{s.no}</span>
              <span className="bd-card-spec">{s.spec}</span>
              <h3 className="bd-card-name">{s.name}</h3>
              <p className="bd-card-desc">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bd-sec bd-sec-alt" id="reference">
        <div className="bd-sec-head">
          <p className="bd-eyebrow">Komu jsme dělali stěny</p>
          <h2 className="bd-h2">
            Estetika ruku v ruce s řemeslem
          </h2>
          <p className="bd-sec-lede">
            Pracujeme jako sehraný tým — od výběru materiálů světových značek
            po poslední broušení. Tady mluví klienti, ne my.
          </p>
        </div>
        <div className="bd-quotes">
          {jobs.map((j, i) => (
            <figure
              className="bd-quote"
              key={j.who}
              style={{ "--i": i } as CSSProperties}
            >
              <blockquote>„{j.quote}“</blockquote>
              <figcaption>{j.who}</figcaption>
            </figure>
          ))}
        </div>
        <div className="bd-brands">
          <span className="bd-brands-label">Materiály:</span>
          <ul>
            <li>Oikos</li>
            <li>Orac Decor</li>
            <li>Valpaint</li>
            <li>Zero</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
