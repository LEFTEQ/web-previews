import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "CHIR",
      name: "Chirurgie a traumatologie",
      desc: "Ošetřujeme zlomeniny, řešíme úrazy po autech i kopnutí. Osteosyntézy pánve, stehenní kosti i drobných kostí.",
    },
    {
      code: "ONKO",
      name: "Odstranění nádorů",
      desc: "Plastická chirurgie kůže i podkoží. Efektivně odstraníme zhoubné nádory včetně fibrosarkomů a zajistíme uzávěr rány.",
    },
    {
      code: "DIAG",
      name: "Diagnostika na místě",
      desc: "Vlastní přístroje: rentgen, ultrazvuk i laboratoř. Výsledky víte hned, nemusíte čekat na externí laboratoř.",
    },
    {
      code: "PREV",
      name: "Prevence a očkování",
      desc: "Preventivní prohlídky, vakcinace, čipování a poradenství pro psy, kočky i drobné savce.",
    },
  ];

  const hours = [
    ["Pondělí", "8:00–11:30", "14:30–18:00"],
    ["Úterý", "8:00–11:30", "14:30–18:00"],
    ["Středa", "8:00–11:30", "14:30–18:00"],
    ["Čtvrtek", "8:00–11:30", "14:30–18:00"],
    ["Pátek", "8:00–11:30", "14:30–18:00"],
    ["Sobota", "9:00–13:00", "pohotovost"],
    ["Neděle", "zavřeno", ""],
  ];

  return (
    <main className="vet">
      <header className="vet-nav" aria-label="Hlavní navigace">
        <a className="vet-mark" href="#uvod" aria-label="Veterinární klinika Suchdol, úvod">
          <span className="vet-mark-pulse" aria-hidden="true" />
          <span className="vet-mark-name">
            Veterina<span className="vet-mark-place">Suchdol</span>
          </span>
        </a>
        <nav className="vet-nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O klinice</a>
          <a className="vet-nav-call" href="tel:+420220920117">220 920 117</a>
        </nav>
      </header>

      <section className="vet-hero" id="uvod">
        <div className="vet-hero-media">
          <img
            src="/hero.webp"
            alt="Kočka v ordinaci Veterinární kliniky Suchdol"
            className="vet-hero-img"
          />
          <span className="vet-hero-scrim" aria-hidden="true" />
        </div>

        <div className="vet-hero-inner">
          <p className="vet-eyebrow">Praha 6 — Suchdol · od úrazu k uzdravení</p>
          <h1 className="vet-hero-title">
            Přivezete&nbsp;ho
            <br />
            <span className="vet-hero-accent">v&nbsp;nejhorším dni.</span>
            <br />
            Odejde po svých.
          </h1>
          <p className="vet-hero-lede">
            Zlomená pánev po autě, nádor na kůži, kost po kopnutí koněm — na Suchdole
            operujeme, rentgenujeme i sešíváme pod jednou střechou. Bez odesílání jinam.
          </p>
          <div className="vet-hero-cta">
            <a className="vet-btn" href="tel:+420220920117">Zavolat na kliniku</a>
            <a className="vet-btn vet-btn-ghost" href="#sluzby">Co u nás zvládneme</a>
          </div>
        </div>

        <dl className="vet-vitals" aria-label="Ordinační hodiny dnes">
          <div>
            <dt>Otevřeno v pracovní dny</dt>
            <dd>8:00–11:30 &nbsp;·&nbsp; 14:30–18:00</dd>
          </div>
          <div>
            <dt>Sobotní pohotovost</dt>
            <dd>9:00–13:00</dd>
          </div>
        </dl>
      </section>

      <section className="vet-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="vet-services-head">
          <p className="vet-eyebrow">Karta pacienta</p>
          <h2 id="sluzby-nadpis" className="vet-h2">
            S čím k nám lidé přicházejí
          </h2>
          <p className="vet-section-lede">
            Nejsme jen na očkování. Řešíme i to, co jinde odešlou dál — proto vedeme
            každý případ jako záznam v kartě, od příjmu po propuštění.
          </p>
        </div>

        <ul className="vet-chart">
          {services.map((s, i) => (
            <li className="vet-chart-row" key={s.code} style={{ "--i": i } as CSSProperties}>
              <span className="vet-chart-code">{s.code}</span>
              <div className="vet-chart-body">
                <h3 className="vet-chart-name">{s.name}</h3>
                <p className="vet-chart-desc">{s.desc}</p>
              </div>
              <span className="vet-chart-vitals" aria-hidden="true" />
            </li>
          ))}
        </ul>

        <figure className="vet-services-figure">
          <img
            src="/section-1.webp"
            alt="Vybavení a diagnostické přístroje veterinární kliniky"
            className="vet-figure-img"
          />
          <figcaption>
            Vlastní rentgen, ultrazvuk i laboratoř — výsledky ještě během vaší návštěvy.
          </figcaption>
        </figure>
      </section>

      <section className="vet-trust" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="vet-trust-media">
          <img
            src="/section-2.webp"
            alt="Ošetřovna Veterinární kliniky Suchdol"
            className="vet-trust-img"
          />
        </div>

        <div className="vet-trust-inner">
          <p className="vet-eyebrow">O klinice</p>
          <h2 id="duvera-nadpis" className="vet-h2">
            Neexistují špatné otázky, jen špatné odpovědi
          </h2>
          <p className="vet-section-lede">
            Tím se řídíme od příjmu po kontrolu. Klimatizovaná ordinace, vlastní
            operační sál a lékaři s dlouholetou praxí v jednom domě na Suchdolském
            náměstí. Vysvětlíme každý krok — dřív než se pro cokoli rozhodnete.
          </p>

          <div className="vet-callout">
            <p>
              „Traumatologii i onkologické operace řešíme na místě — pacienta
              nemusíte vozit přes celou Prahu.“
            </p>
          </div>

          <div className="vet-contact">
            <div>
              <span className="vet-contact-label">Kde nás najdete</span>
              <span className="vet-contact-val">Suchdolské nám. 1249/8, 165 00 Praha 6</span>
            </div>
            <div>
              <span className="vet-contact-label">Objednání a dotazy</span>
              <span className="vet-contact-val">
                <a href="tel:+420220920117">220 920 117</a> ·{" "}
                <a href="tel:+420774113553">774 113 553</a>
              </span>
            </div>
            <div>
              <span className="vet-contact-label">E-mail</span>
              <span className="vet-contact-val">
                <a href="mailto:info@veterinasuchdol.cz">info@veterinasuchdol.cz</a>
              </span>
            </div>
          </div>

          <table className="vet-hours">
            <caption className="vet-hours-cap">Ordinační hodiny</caption>
            <tbody>
              {hours.map(([day, a, b]) => (
                <tr key={day} className={day === "Neděle" ? "vet-hours-off" : undefined}>
                  <th scope="row">{day}</th>
                  <td>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
