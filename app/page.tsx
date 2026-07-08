import type { CSSProperties } from "react";

export default function Page() {
  const products = [
    {
      no: "01",
      name: "Reklamní magnetky",
      desc: "Vizitky, které nespadnou ze zrcadla auta ani z ledničky. Ofsetový tisk, laminace, magnetická fólie na míru — od pěti kusů na chladicí box po pět tisíc na direct mail.",
      spec: "od 100 × 65 mm · plnobarevný tisk · magnetická fólie 0,4 mm"
    },
    {
      no: "02",
      name: "Samolepky a polepy",
      desc: "Vodě odolné etikety, výseky do tvaru, polepy výloh a aut. Řežeme plotrem přesně po obrysu, takže samolepka drží tvar loga, ne obdélníku kolem něj.",
      spec: "tisk latexem · výsek na míru · venkovní životnost 3–5 let"
    },
    {
      no: "03",
      name: "Tabule a cedule",
      desc: "Poutače před provozovnu, jmenovky na dveře, orientační systémy. Frézujeme dibond i plexi, gravírujeme mosaz. Přijedeme zaměřit a pověsíme rovně.",
      spec: "dibond · plexisklo · gravírovaná mosaz · montáž po Brně"
    },
    {
      no: "04",
      name: "Záložky a drobný tisk",
      desc: "Záložky do knih, věrnostní kartičky, visačky. Malé formáty, kde se každý milimetr počítá — a kde levný tisk pozná každý na první dotek.",
      spec: "kartón 300 g · matná i lesklá laminace · zaoblené rohy"
    }
  ];

  const proof = [
    { k: "2002", v: "vyrábíme reklamu v Brně" },
    { k: "do 3 dnů", v: "běžná zakázka na magnetky" },
    { k: "5 ks", v: "nejmenší náklad, co uděláme" }
  ];

  return (
    <main className="pg">
      <header className="top">
        <a className="mark" href="#" aria-label="LaMag — výroba reklamy, Brno">
          <span className="mark-la">La</span><span className="mark-mag">Mag</span>
          <span className="mark-dot" aria-hidden="true" />
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#duvera">O dílně</a>
          <a className="nav-cta" href="tel:+420731495801">731 495 801</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mag" aria-hidden="true" />Výroba reklamy · Brno · od 2002</p>
          <h1 id="hero-h">
            Reklama, která <span className="pull">drží</span> —
            <br />i&nbsp;na plechu ledničky.
          </h1>
          <p className="lede">
            Děláme magnetky, samolepky, tabule a drobný tisk pro brněnské firmy i&nbsp;lidi z&nbsp;okolí.
            Od návrhu po hotový kus, který si zákazník nechá na chladničce, protože se mu líbí.
          </p>
          <div className="hero-actions">
            <a className="btn" href="tel:+420731495801">Zavolat do dílny</a>
            <a className="btn ghost" href="mailto:m@gnetky.cz">Poslat poptávku</a>
          </div>
        </div>
        <figure className="hero-fig">
          <img src="/hero.webp" alt="Reklamní magnetky vyrobené v dílně LaMag" loading="eager" />
          <figcaption className="chip" style={{ "--x": "1" } as CSSProperties}>drží na plechu</figcaption>
        </figure>
      </section>

      <section id="nabidka" className="work" aria-labelledby="work-h">
        <div className="sec-head">
          <h2 id="work-h">Co odchází z&nbsp;dílny</h2>
          <p>Čtyři věci, které umíme opravdu dobře — a raději je uděláme pořádně než rychle a mizerně.</p>
        </div>
        <ol className="grid">
          {products.map((p) => (
            <li className="card" key={p.no}>
              <span className="card-no" aria-hidden="true">{p.no}</span>
              <h3>{p.name}</h3>
              <p className="card-desc">{p.desc}</p>
              <p className="card-spec">{p.spec}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="duvera" className="about" aria-labelledby="about-h">
        <div className="about-media">
          <img src="/section-1.webp" alt="Práce na výrobě reklamy v dílně LaMag" loading="lazy" />
          <img className="about-media-2" src="/section-2.webp" alt="Hotové reklamní produkty LaMag" loading="lazy" />
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span className="eyebrow-mag" aria-hidden="true" />O dílně</p>
          <h2 id="about-h">Malá dílna, kde se stroj potká s&nbsp;rukou</h2>
          <p>
            Od roku 2002 tiskneme, řežeme a lepíme v&nbsp;Brně. Zakázky si vezmeme od začátku do konce:
            poradíme s&nbsp;grafikou, vybereme materiál, který vydrží, a hlídáme, aby barva na magnetce
            seděla s&nbsp;barvou na vizitce. Malé série nejsou problém — často je právě ony baví nejvíc.
          </p>
          <dl className="proof">
            {proof.map((x) => (
              <div className="proof-row" key={x.k}>
                <dt>{x.k}</dt>
                <dd>{x.v}</dd>
              </div>
            ))}
          </dl>
          <p className="about-contact">
            Napište, co potřebujete — ozveme se týž den.{" "}
            <a href="mailto:m@gnetky.cz">m@gnetky.cz</a> · <a href="tel:+420731495801">731&nbsp;495&nbsp;801</a>
          </p>
        </div>
      </section>
    </main>
  );
}
