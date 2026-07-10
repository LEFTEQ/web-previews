import type { CSSProperties } from "react";

export default function Page() {
  const provozovny = [
    { mesto: "Pardubice", detail: "2× v centru", primary: true },
    { mesto: "Ostrava", detail: "6× po městě" },
    { mesto: "Praha", detail: "Čakovice, Globus" },
    { mesto: "Brno", detail: "1× centrum" },
    { mesto: "Karviná", detail: "1× centrum" },
  ];

  const sluzby = [
    {
      cislo: "01",
      nazev: "Měření zraku",
      popis:
        "Vyšetření na přístroji Visionix VX 120 — během pár minut změříme dioptrie, zakřivení rohovky i nitrooční tlak. Za měřítkem stojí oční lékař nebo optometrista.",
      akce: "Objednat vyšetření",
    },
    {
      cislo: "02",
      nazev: "Dioptrické brýle",
      popis:
        "Obruby vybíráte společně s námi tak, aby seděly na váš obličej i váš den. Broušení čoček řešíme přímo u nás — od jednoduchých po multifokální.",
      akce: "Vybrat obrubu",
    },
    {
      cislo: "03",
      nazev: "Sluneční brýle",
      popis:
        "Ray-Ban, Oakley, Dior, Gucci, Polaroid i cenově dostupné neznačkové modely. Sluneční brýle umíme udělat i s vašimi dioptriemi.",
      akce: "Prohlédnout značky",
    },
    {
      cislo: "04",
      nazev: "Kontaktní čočky",
      popis:
        "Aplikaci nacvičíme přímo na provozovně a poradíme s prvními dny nošení. Denní, měsíční i barevné — vždy s dodržením správné hygieny.",
      akce: "Poradit s čočkami",
    },
    {
      cislo: "05",
      nazev: "Brýle na počítač",
      popis:
        "Celý den zaostřujete z monitoru na kolegu a zpátky? Speciální čočky s filtrem uleví očím při kancelářské práci i špatném osvětlení.",
      akce: "Zjistit víc",
    },
    {
      cislo: "06",
      nazev: "Servis brýlí",
      popis:
        "Uvolněný šroubek, prohnutá stranička, výměna nosníků. Drobné opravy zvládneme na počkání, ať vám brýle vydrží co nejdéle.",
      akce: "Přinést na servis",
    },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Lunettes optika Pardubice — úvod">
          <span className="brand-lens" aria-hidden="true">
            <span className="brand-lens-o">O</span>
            <span className="brand-lens-o">O</span>
          </span>
          <span className="brand-word">Lunettes</span>
          <span className="brand-sub">optika · Pardubice</span>
        </a>
        <nav className="nav-links" aria-label="Hlavní nabídka">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a className="nav-cta" href="tel:+420777914235">Objednat vyšetření</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Oční optika v Pardubicích · od roku 1991</p>
          <h1 className="hero-title">
            Vidět dobře je{" "}
            <span className="hero-accent">nastavení, ne náhoda.</span>
          </h1>
          <p className="hero-lead">
            „Lunettes“ je francouzsky brýle. Přes třicet let je v Pardubicích
            vybíráme, brousíme a seřizujeme tak, aby seděly přesně na vaše oči i
            na váš obličej.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420777914235">
              Objednat vyšetření zraku
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co u nás vyřídíte
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Přístroj</dt>
              <dd>Visionix VX 120</dd>
            </div>
            <div>
              <dt>Poboček v ČR</dt>
              <dd>11</dd>
            </div>
            <div>
              <dt>V Pardubicích</dt>
              <dd>od roku 1991</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-figure">
          <img
            src="/hero.webp"
            alt="Interiér optiky Lunettes s výběrem dioptrických a slunečních brýlí"
            className="hero-img"
            width={880}
            height={1040}
          />
          <figcaption className="hero-caption">
            <span className="dot" aria-hidden="true" /> Kancelář otevřena 9–15 h
          </figcaption>
        </figure>
      </section>

      <section className="sluzby" id="sluzby">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Co u nás vyřídíte</p>
          <h2 className="section-title">
            Od změření dioptrií po servis obruby — vše pod jednou lampou.
          </h2>
        </div>
        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.cislo}>
              <span className="card-num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="card-title">{s.nazev}</h3>
              <p className="card-text">{s.popis}</p>
              <span className="card-link">{s.akce} →</span>
            </li>
          ))}
        </ol>
        <figure className="strip">
          <img
            src="/section-1.webp"
            alt="Optometrista měří zrak zákaznici na přístroji Visionix"
            className="strip-img"
            width={1200}
            height={720}
          />
        </figure>
      </section>

      <section className="o-nas" id="o-nas">
        <div className="about-grid">
          <figure className="about-figure">
            <img
              src="/section-2.webp"
              alt="Personál optiky Lunettes pomáhá zákazníkovi s výběrem obruby"
              className="about-img"
              width={860}
              height={980}
            />
          </figure>
          <div className="about-copy">
            <p className="eyebrow eyebrow-dark">Proč zrovna Lunettes</p>
            <h2 className="section-title">
              Přes dvacet let posloucháme, s čím k nám lidé přicházejí.
            </h2>
            <p className="about-text">
              „Spokojený zákazník“ a „kvalitní zboží a služby za příjemné ceny“
              nejsou u nás hesla na plakátě — je to způsob, jakým vybíráme obruby
              a jak dlouho si s vámi u pultu povídáme. Když odejdete, mají brýle
              sedět. A když neseknou, vrátíte se a doladíme je.
            </p>

            <dl className="stats">
              <div className="stat">
                <dt className="stat-num">1991</dt>
                <dd className="stat-label">Rok, kdy Lunettes vzniklo</dd>
              </div>
              <div className="stat">
                <dt className="stat-num">48</dt>
                <dd className="stat-label">Optiků a optometristů v týmu</dd>
              </div>
              <div className="stat">
                <dt className="stat-num">11</dt>
                <dd className="stat-label">Poboček po celé ČR</dd>
              </div>
            </dl>

            <div className="where">
              <p className="where-head">Kde nás najdete</p>
              <ul className="where-list">
                {provozovny.map((p) => (
                  <li
                    key={p.mesto}
                    className={p.primary ? "where-item is-home" : "where-item"}
                  >
                    <span className="where-city">{p.mesto}</span>
                    <span className="where-detail">{p.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-row">
              <a className="btn btn-primary" href="tel:+420777914235">
                Zavolat 777 914 235
              </a>
              <a className="btn btn-ghost" href="mailto:lunettes@lunettes.cz">
                Napsat e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
