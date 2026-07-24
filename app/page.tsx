import { AiImage } from "./_ui";

const services = [
  {
    area: "Obočí",
    tech: "Metoda vlásků & pudrové stínování",
    desc: "Tvar navrhneme podle kostry vašeho obličeje, ne podle šablony. Jemné vlásky, měkký pudrový nádech — nebo obojí dohromady.",
    price: "od 4 900 Kč",
    dot: "#6f4a3a",
  },
  {
    area: "Oční linky",
    tech: "Meziřasová linka i výrazný tah",
    desc: "Zahuštění mezi řasami vypadá jako přirozeně husté řasy. Nebo výraznější linka, která oko otevře i bez řasenky.",
    price: "od 3 500 Kč",
    dot: "#2c1c26",
  },
  {
    area: "Rty",
    tech: "Kontura a plné stínování",
    desc: "Vrátíme rtům barvu a opticky je zaoblíme. Odstín volíme tak, aby ladil s vaší pletí — ne aby křičel.",
    price: "od 4 500 Kč",
    dot: "#8e3a55",
  },
];

const steps = [
  {
    n: "01",
    t: "Konzultace",
    d: "Probereme tvar, odstín i vaše přání. Nezávazně a v klidu — ten den se nic nekreslí napevno.",
  },
  {
    n: "02",
    t: "Mapování",
    d: "Kružítkem a nití najdeme symetrii podle vašich proporcí a zlatého řezu. Výsledný tvar si spolu odsouhlasíme ještě tužkou.",
  },
  {
    n: "03",
    t: "Pigmentace",
    d: "Pracujeme se sterilním jednorázovým modulem a hypoalergenními pigmenty. Povrchová anestezie drží komfort po celou dobu.",
  },
  {
    n: "04",
    t: "Korekce",
    d: "Po 4–6 týdnech doladíme sytost a tvar. Tahle druhá návštěva je už v ceně prvního zákroku.",
  },
];

const trust = [
  "Certifikovaná pracovnice permanentního make-upu",
  "Sterilní jednorázové jehly a moduly, zdravotnická hygiena",
  "Hypoalergenní pigmenty, bezpečné i pro citlivou pleť",
  "Diskrétní studio v centru Hradce Králové",
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <div className="wrap topbar-in">
          <a className="brand" href="#" aria-label="Health & Beauty — studio permanentního make-upu">
            <span className="brand-mark">Health &amp; Beauty</span>
            <span className="brand-kick">Studio permanentního make-upu · Hradec Králové</span>
          </a>
          <a className="cta cta-sm" href="#rezervace">Rezervovat konzultaci</a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Permanentní make-up — obočí · linky · rty</p>
            <h1 id="hero-title" className="display">
              Vlásek po vlásku.
              <span className="display-em">na roky dopředu.</span>
            </h1>
            <p className="hero-lead">
              Kreslíme permanentní make-up, který nevypadá jako make-up. Přirozené obočí,
              jemné linky a rty s vlastní barvou — ráno se probudíte upravená a večer chodíte
              spát bez odličování.
            </p>
            <div className="hero-actions">
              <a className="cta" href="#rezervace">Rezervovat konzultaci</a>
              <a className="cta-ghost" href="#postup">Jak to probíhá</a>
            </div>
            <ul className="chips" aria-label="Základní parametry zákroku">
              <li className="chip">hojení 4–6 týdnů</li>
              <li className="chip">vydrží 1–3 roky</li>
              <li className="chip">korekce v ceně</li>
            </ul>
          </div>

          <div className="hero-media">
            <div className="frame">
              <AiImage src="/hero.webp" alt="Detail obočí po permanentním make-upu metodou vlásků" className="frame-img" />
              <div className="map" aria-hidden="true">
                <span className="axis" />
                <span className="guide guide-a" />
                <span className="guide guide-b" />
                <span className="maplabel maplabel-1">os symetrie</span>
                <span className="maplabel maplabel-2">třetiny obličeje</span>
                <span className="maplabel maplabel-3">1 : 1.618</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services" aria-labelledby="sv-title">
        <div className="wrap">
          <div className="sec-head rise">
            <p className="kicker">Nabídka</p>
            <h2 id="sv-title" className="sec-title">Tři místa, kde záleží na každém milimetru</h2>
            <p className="sec-lead">
              Nekreslíme jeden tvar pro všechny. U každé zóny vycházíme z toho, co už máte —
              a jen to doladíme tak, aby to vypadalo, že jste se tak narodila.
            </p>
          </div>

          <figure className="feature rise">
            <AiImage src="/section-1.webp" alt="Mapování a návrh tvaru obočí před zákrokem" className="feature-img" />
            <figcaption className="feature-cap">Návrh tvaru obočí podle zlatého řezu</figcaption>
          </figure>

          <ul className="cards">
            {services.map((s) => (
              <li className="card rise" key={s.area}>
                <span className="card-dot" style={{ background: s.dot }} aria-hidden="true" />
                <h3 className="card-area">{s.area}</h3>
                <p className="card-tech">{s.tech}</p>
                <p className="card-desc">{s.desc}</p>
                <p className="card-price">{s.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section process" id="postup" aria-labelledby="pr-title">
        <div className="wrap process-grid">
          <div className="process-media rise">
            <div className="frame frame-portrait">
              <AiImage src="/section-2.webp" alt="Zákrok permanentního make-upu ve studiu" className="frame-img" />
            </div>
            <div className="trust" id="rezervace">
              <p className="kicker">Proč k nám</p>
              <ul className="trust-list">
                {trust.map((t) => (
                  <li className="trust-item" key={t}>{t}</li>
                ))}
              </ul>
              <a className="cta" href="#rezervace">Rezervovat konzultaci</a>
              <p className="contact">Objednávky a dotazy: <a href="tel:+420777111222">+420 777 111 222</a></p>
            </div>
          </div>

          <div className="process-copy">
            <p className="kicker">Jak to probíhá</p>
            <h2 id="pr-title" className="sec-title">Od konzultace k hotovému obočí</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li className="step rise" key={s.n}>
                  <span className="step-n">{s.n}</span>
                  <div>
                    <h3 className="step-t">{s.t}</h3>
                    <p className="step-d">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
