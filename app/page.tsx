import type { CSSProperties } from "react";

export default function Page() {
  const doors = [
    {
      code: "RSD01",
      name: "HYBRID",
      kind: "Sekční garážová vrata",
      spec: "Otvory do 3000 × 2820 mm",
      note: "Dvojité těsnění a zateplené panely — tichý chod i v mrazu.",
    },
    {
      code: "RSD02",
      name: "STANDARD",
      kind: "Sekční garážová vrata",
      spec: "Malé až střední otvory od 2000 mm",
      note: "Poctivý základ pro běžnou garáž. Rychlá montáž, dostupná cena.",
    },
    {
      code: "MINI 55",
      name: "ROLETA",
      kind: "Rolovací vrata",
      spec: "Hliníkové profily plněné pěnou",
      note: "Balí se nahoru do rolky — ušetří místo před i za vraty.",
    },
    {
      code: "GUARD 77",
      name: "ROLETA",
      kind: "Rolovací vrata",
      spec: "Zesílené profily, vyšší odolnost",
      note: "Když má vrata sloužit desítky let. Trvanlivost na prvním místě.",
    },
  ];

  const steps = [
    {
      n: "01",
      t: "Zaměření u vás",
      d: "Přijedeme k vám do garáže, změříme otvor a poradíme, co se do něj vejde. Zdarma a nezávazně.",
    },
    {
      n: "02",
      t: "Vrata na míru",
      d: "Vybereme sérii, barvu i pohon podle vašeho otvoru. Nakonfigurujeme přesně na milimetry.",
    },
    {
      n: "03",
      t: "Montáž",
      d: "Dovezeme a namontujeme. Odpolední i víkendové termíny bez příplatku — po celém Jihomoravském kraji.",
    },
  ];

  return (
    <main className="jm">
      <a className="jm-skip" href="#nabidka">
        Přeskočit na nabídku vrat
      </a>

      <header className="jm-topbar">
        <a className="jm-mark" href="#" aria-label="JM Rollss — garážová vrata Brno">
          <span className="jm-mark__jm">JM</span>
          <span className="jm-mark__roll">Rollss</span>
        </a>
        <nav className="jm-nav" aria-label="Hlavní">
          <a href="#nabidka">Vrata</a>
          <a href="#firma">O firmě</a>
          <a className="jm-nav__call" href="tel:+420774606206">
            <span aria-hidden="true">☎</span> 774 606 206
          </a>
        </nav>
      </header>

      <section className="jm-hero" aria-labelledby="hero-title">
        <div
          className="jm-hero__photo"
          style={{ "--slat": "14" } as CSSProperties}
        >
          <img
            src="/hero.webp"
            alt="Sekční garážová vrata namontovaná v rodinné garáži"
            className="jm-hero__img"
          />
          <div className="jm-hero__slats" aria-hidden="true">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} style={{ "--i": i } as CSSProperties} />
            ))}
          </div>
        </div>

        <div className="jm-hero__panel">
          <p className="jm-eyebrow">Garážová vrata &amp; rolety · Brno-Štýřice</p>
          <h1 id="hero-title" className="jm-hero__title">
            Vrata,<br />
            <span>která jdou</span><br />
            nahoru.
          </h1>
          <p className="jm-hero__lead">
            Sekční i rolovací vrata na míru vašeho otvoru. Zaměříme,
            vyrobíme a namontujeme — i odpoledne a o víkendu, bez příplatku.
          </p>
          <div className="jm-hero__cta">
            <a className="jm-btn jm-btn--solid" href="tel:+420774606206">
              Zavolat 774 606 206
            </a>
            <a className="jm-btn jm-btn--ghost" href="#nabidka">
              Prohlédnout vrata
            </a>
          </div>
          <p className="jm-hero__hours">Po–So, 8–18 · jmrollss@seznam.cz</p>
        </div>
      </section>

      <section className="jm-section" id="nabidka" aria-labelledby="nabidka-title">
        <div className="jm-section__head">
          <p className="jm-eyebrow">Co montujeme</p>
          <h2 id="nabidka-title">Čtyři série. Jeden otvor jako váš.</h2>
          <p className="jm-section__sub">
            Každá vrata konfigurujeme na míru — na milimetry, barvu i pohon.
            Montáž vrat od 4&nbsp;800&nbsp;Kč, dveří od 1&nbsp;100&nbsp;Kč.
          </p>
        </div>

        <ul className="jm-grid">
          {doors.map((d) => (
            <li className="jm-card" key={d.code}>
              <div className="jm-card__code">
                <span className="jm-card__num">{d.code}</span>
                <span className="jm-card__badge">{d.name}</span>
              </div>
              <h3 className="jm-card__kind">{d.kind}</h3>
              <p className="jm-card__spec">{d.spec}</p>
              <p className="jm-card__note">{d.note}</p>
            </li>
          ))}
        </ul>

        <figure className="jm-figure">
          <img
            src="/section-1.webp"
            alt="Detail hliníkových lamel rolovacích vrat"
            className="jm-figure__img"
          />
          <figcaption>
            Rolovací vrata se balí nahoru do kompaktní rolky — ideál pro
            nízké garáže i krátké stropy.
          </figcaption>
        </figure>
      </section>

      <section className="jm-firma" id="firma" aria-labelledby="firma-title">
        <div className="jm-firma__grid">
          <div className="jm-firma__text">
            <p className="jm-eyebrow jm-eyebrow--light">Jak to u nás chodí</p>
            <h2 id="firma-title">
              Dodávka i montáž z jedné ruky.
            </h2>
            <p className="jm-firma__lead">
              Prodáváme a montujeme sekční garážová vrata, vchodové i
              interiérové dveře. Děláme obojí sami — jen tak ručíme za to,
              že vrata poběží tiše a vydrží roky.
            </p>

            <ol className="jm-steps">
              {steps.map((s) => (
                <li className="jm-step" key={s.n}>
                  <span className="jm-step__n">{s.n}</span>
                  <div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <dl className="jm-facts">
              <div>
                <dt>Působnost</dt>
                <dd>Brno, Jihomoravský kraj, celá ČR</dd>
              </div>
              <div>
                <dt>Montáž</dt>
                <dd>Odpoledne i víkend bez příplatku</dd>
              </div>
              <div>
                <dt>Doprava</dt>
                <dd>10 Kč/km od dílny na Kamenné</dd>
              </div>
            </dl>
          </div>

          <aside className="jm-firma__aside">
            <img
              src="/section-2.webp"
              alt="Montážník JM Rollss při instalaci garážových vrat"
              className="jm-firma__img"
            />
            <div className="jm-firma__card">
              <p className="jm-firma__cardline">JM Rollss s.r.o.</p>
              <p>Kamenná 183/10, Štýřice</p>
              <p>639 00 Brno</p>
              <a href="tel:+420774606206">774 606 206</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
