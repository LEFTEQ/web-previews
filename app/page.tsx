import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      idx: "01",
      title: "Kompletní demolice",
      body: "Zbouráme celý objekt — halu, výrobnu i rodinný dům. Postup naplánujeme tak, aby okolní budovy a sítě zůstaly nedotčené.",
      tag: "Haly · výrobní objekty · domy",
    },
    {
      idx: "02",
      title: "Vnitřní bourání",
      body: "Vybouráme příčky, jádra a podlahy před rekonstrukcí. Pracujeme i v obsazených budovách s ohledem na provoz kolem.",
      tag: "Rekonstrukce · byty · kanceláře",
    },
    {
      idx: "03",
      title: "Řezání a jádrové vrtání",
      body: "Diamantové řezání a vrtání betonu bez otřesů. Přesné prostupy pro rozvody i statické otvory tam, kde nesmí prasknout okolí.",
      tag: "Beton · železobeton · cihla",
    },
    {
      idx: "04",
      title: "Odvoz a recyklace suti",
      body: "Odvezeme stavební odpad a roztřídíme ho. Beton a cihlu drtíme na recyklát, na konec dostanete čisté a připravené místo.",
      tag: "Kontejnery · drcení · třídění",
    },
  ];

  const numbers = [
    { value: "420", label: "tun betonu ročně na recyklát" },
    { value: "48h", label: "od objednávky k nástupu na Brněnsku" },
    { value: "0", label: "pokut za prach a hluk od sousedů" },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="brand" href="#top" aria-label="OLMAN — bourací práce Brno">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-word">OLMAN</span>
          <span className="brand-sub">bourací práce · Brno</span>
        </a>
        <nav className="nav-links" aria-label="Hlavní navigace">
          <a href="#sluzby">Co bouráme</a>
          <a href="#duvera">Proč nás</a>
          <a className="nav-call" href="tel:+420546223535">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Bourání objektu v Brně — bagr rozebírá zdivo a odkrývá výztuž"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Bourací práce · Brno a okolí</p>
          <h1 className="hero-title">
            Než něco
            <br />
            <span className="hero-strike">postavíte</span>,
            <br />
            musí to
            <span className="hero-hit"> spadnout</span>.
          </h1>
          <p className="hero-lead">
            Bouráme haly, jádra i celé domy tak, aby po nás zbylo jen čisté
            místo pro nový začátek. Beton rozebíráme, ne rozbíjíme —
            s ohledem na sousedy, sítě a termín.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420546223535">Zavolat +420 546 223 535</a>
            <a className="btn btn-ghost" href="#sluzby">Co dokážeme zbourat</a>
          </div>
        </div>

        <ul className="hero-strip" aria-label="Rychlá fakta">
          <li><b>Brno</b><span>na místě do 48 hodin</span></li>
          <li><b>Sut pryč</b><span>odvoz i recyklace v ceně</span></li>
          <li><b>Bez otřesů</b><span>řezání a jádrové vrtání</span></li>
        </ul>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow">Postup od demolice po čisté místo</p>
          <h2 id="sluzby-h" className="sec-title">Co pro vás zbouráme</h2>
          <p className="sec-note">
            Každá zakázka jde stejnou cestou: rozebrat, roztřídit, odvézt.
            Čísla 01–04 jsou pořadí, ve kterém se na stavbě potkáme.
          </p>
        </div>

        <div className="grid">
          {services.map((s) => (
            <article className="card" key={s.idx}>
              <span className="card-idx" aria-hidden="true">{s.idx}</span>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-body">{s.body}</p>
              <p className="card-tag">{s.tag}</p>
            </article>
          ))}
        </div>

        <figure className="sec-figure">
          <img
            src="/section-1.webp"
            alt="Diamantové řezání betonové konstrukce při vnitřním bourání"
            className="figure-img"
          />
          <figcaption>
            Diamantovým řezáním otevřeme přesně to, co potřebujete —
            zbytek konstrukce zůstane celý.
          </figcaption>
        </figure>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-text">
            <p className="eyebrow">O nás</p>
            <h2 id="duvera-h" className="sec-title light">
              Bourání je řemeslo, ne jen síla.
            </h2>
            <p className="duvera-lead">
              Sídlíme na Jakuba Obrovského v Brně a bouráme po celém kraji.
              Ke každé stavbě přijedeme napřed my — projdeme statiku, sítě
              a přístup, teprve pak nasadíme techniku. Sousedům dopředu
              řekneme, kdy bude hluk, a prach držíme skrápěním u země.
            </p>

            <dl className="stats">
              {numbers.map((n) => (
                <div className="stat" key={n.label}>
                  <dt className="stat-value">{n.value}</dt>
                  <dd className="stat-label">{n.label}</dd>
                </div>
              ))}
            </dl>

            <a className="btn btn-solid" href="tel:+420546223535">Domluvit prohlídku stavby</a>
          </div>

          <figure className="duvera-media">
            <img
              src="/section-2.webp"
              alt="Vytříděná stavební suť připravená k odvozu a recyklaci"
              className="figure-img"
            />
            <figcaption>
              Po nás zůstane roztříděná suť a čisté místo — beton putuje
              zpět do stavby jako recyklát.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
