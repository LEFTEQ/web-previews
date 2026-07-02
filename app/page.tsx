const frakce = [
  {
    kod: "0/4",
    nazev: "Písek praný 0/4",
    popis: "Do betonu, malty i pod zámkovou dlažbu. Nejžádanější materiál z Grygova — jemný, praný, bez hlíny.",
    pouziti: "beton · malta · podsypy",
    zrno: 8,
  },
  {
    kod: "4/8",
    nazev: "Štěrkopísek 4/8",
    popis: "Drobná frakce do betonových směsí a drenáží. Kulaté zrno těžené z vody, dobře se hutní.",
    pouziti: "betonové směsi · drenáže",
    zrno: 14,
  },
  {
    kod: "8/16",
    nazev: "Štěrk 8/16",
    popis: "Základ každé betonáže — od desky rodinného domu po průmyslovou halu. Prohlášení o vlastnostech ke každé dodávce.",
    pouziti: "betonáže · základové desky",
    zrno: 22,
  },
  {
    kod: "16/32",
    nazev: "Štěrk 16/32",
    popis: "Hrubá frakce pro násypy, komunikace a velké objemy. Vozíme i v řádech stovek tun.",
    pouziti: "násypy · komunikace · dálnice",
    zrno: 30,
  },
];

const duvera = [
  {
    titul: "Těžíme u Grygova, 8 km od Olomouce",
    text: "Materiál nejezdí přes půl republiky. Naložíme vás přímo na provozovně, nebo dovezeme vlastní dopravou po Olomouci a okolí.",
  },
  {
    titul: "ISO 9001 a ISO 14001",
    text: "Kvalitu i šetrnost těžby hlídají certifikace ISO 9001:2015 a ISO 14001:2015. Ke každé frakci dostanete prohlášení o vlastnostech.",
  },
  {
    titul: "Z našeho materiálu se staví dálnice",
    text: "Stejný štěrkopísek, který jde do dálničních staveb a průmyslových hal, si u nás koupíte i na základovou desku rodinného domu. Od jednoho vozíku po celé soupravy.",
  },
];

export default function Page() {
  return (
    <main className="st">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <span className="grain g1" />
              <span className="grain g2" />
              <span className="grain g3" />
            </span>
            <span className="brand-name">ŠTĚRKOVNY&nbsp;OLOMOUC</span>
          </div>

          <h1 className="hero-title">
            <span className="line l1">Písek a štěrk,</span>
            <span className="line l2">ze kterého stojí</span>
            <span className="line l3">
              beton <em>celé Hané.</em>
            </span>
          </h1>

          <p className="hero-lead">
            Těžíme štěrkopísek u Grygova a dodáváme ho na stavby rodinných domů,
            hal i dálnic. Přijeďte si naložit, nebo vám ho dovezeme.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420585750892">
              Zavolat obchod — 585 750 892
            </a>
            <a className="btn btn-ghost" href="mailto:info@sterk-olomouc.cz">
              Napsat poptávku
            </a>
          </div>

          <dl className="hero-meta">
            <div>
              <dt>Provozovna</dt>
              <dd>Grygov u Olomouce</dd>
            </div>
            <div>
              <dt>Otevřeno (duben–listopad)</dt>
              <dd>po–pá 6:00–15:00</dd>
            </div>
            <div>
              <dt>Certifikace</dt>
              <dd>ISO 9001 · ISO 14001</dd>
            </div>
          </dl>
        </div>

        {/* Signature: sítová stupnice — vrstvy frakcí jako v třídicím sítu */}
        <div className="sieve" aria-hidden="true">
          <div className="sieve-band b1">
            <span className="sieve-label">16/32</span>
          </div>
          <div className="sieve-band b2">
            <span className="sieve-label">8/16</span>
          </div>
          <div className="sieve-band b3">
            <span className="sieve-label">4/8</span>
          </div>
          <div className="sieve-band b4">
            <span className="sieve-label">0/4</span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE: FRAKCE / NABÍDKA ===== */}
      <section className="frakce" aria-labelledby="frakce-h">
        <div className="section-head">
          <p className="eyebrow">Co naložíme na váš vůz</p>
          <h2 id="frakce-h">
            Čtyři frakce.<br />Od zrnka po třicet dva milimetrů.
          </h2>
          <p className="section-lead">
            Frakce značíme tak, jak je znáte ze stavby — spodní a horní velikostí
            zrna v milimetrech. Aktuální ceník vám pošleme obratem, stačí zavolat.
          </p>
        </div>

        <ul className="frakce-grid">
          {frakce.map((f) => (
            <li key={f.kod} className="frakce-card">
              <div className="frakce-kod">
                <span
                  className="frakce-dot"
                  style={{ width: f.zrno, height: f.zrno }}
                />
                {f.kod}
              </div>
              <h3>{f.nazev}</h3>
              <p>{f.popis}</p>
              <p className="frakce-tag">{f.pouziti}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== SEKCE: DŮVĚRA ===== */}
      <section className="proc" aria-labelledby="proc-h">
        <div className="section-head">
          <p className="eyebrow">Proč od nás</p>
          <h2 id="proc-h">Materiál, který má papíry i historii.</h2>
        </div>

        <div className="proc-grid">
          {duvera.map((d) => (
            <article key={d.titul} className="proc-card">
              <h3>{d.titul}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>

        <div className="proc-kontakt">
          <div className="proc-kontakt-txt">
            <h3>Domluvte si odběr nebo dovoz</h3>
            <p>
              Obchod vám poradí s výběrem frakce i množstvím a domluví termín.
              Na provozovně v Grygově nakládáme po–pá od 6:00 (v zimě od 7:00).
            </p>
          </div>
          <ul className="proc-kontakt-list">
            <li>
              <span>Obchod</span>
              <a href="tel:+420585750892">585 750 892</a>
            </li>
            <li>
              <span>Obchod — mobil</span>
              <a href="tel:+420739308876">739 308 876</a>
            </li>
            <li>
              <span>Provozovna Grygov</span>
              <a href="tel:+420605243671">605 243 671</a>
            </li>
            <li>
              <span>E-mail</span>
              <a href="mailto:info@sterk-olomouc.cz">info@sterk-olomouc.cz</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
