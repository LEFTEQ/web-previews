import { DepthGauge, Reveal } from "./motion";

const services = [
  {
    depth: "HL 0–3 m",
    tag: "180 bar",
    title: "Tlakové čištění odpadů a kanalizace",
    text:
      "Vysokotlakou vodou rozbijeme tukové i kořenové ucpávky ve svislých stoupačkách i ležatých rozvodech. Odtok teče, jak má.",
  },
  {
    depth: "HL 6 m",
    tag: "REC ●",
    title: "Kamerová prohlídka TV kamerou a lokalizační sonda",
    text:
      "Sondou projedeme potrubí, nahrajeme video a přesně zaměříme poruchu i hloubku, ve které leží. Kopeme jen tam, kde je to nutné.",
  },
  {
    depth: "HL 12 m",
    tag: "DN 150",
    title: "Frézování stoupaček a dešťových vpustí",
    text:
      "Frézou odstraníme nálety, betonové zbytky a inkrustace až na původní průměr trubky. Revizní šachty a vpusti vyčistíme do dna.",
  },
  {
    depth: "HL 30 m",
    tag: "RUKÁVEC",
    title: "Bezvýkopové opravy a trasování",
    text:
      "Prasklinu utěsníme rukávcem zevnitř potrubí. Bez bourání, bez výkopu — vaše dlažba i zahrada zůstanou celé.",
  },
];

const trust = [
  {
    k: "Nonstop 24/7",
    v: "Havárie nepočká. Bereme telefon i v noci a o víkendu a vyrážíme hned.",
  },
  {
    k: "Bez výkopu",
    v: "Opravujeme zevnitř trubky. Nerozkopáváme zahradu ani dlažbu na dvoře.",
  },
  {
    k: "Záznam z kamery",
    v: "Z každé prohlídky předáme video a protokol — víte přesně, za co platíte.",
  },
  {
    k: "Brno a okolí",
    v: "Sídlíme v Lomnici, vyjíždíme po Brněnsku, celé jižní Moravě i Vysočině.",
  },
];

export default function Page() {
  return (
    <>
      <DepthGauge />

      <header className="top">
        <a className="mark" href="#" aria-label="ČISTÉ-ODPADY, úvod">
          <span className="mark-ring" aria-hidden="true" />
          <span className="mark-text">
            ČISTÉ<span className="mark-sep">·</span>ODPADY
          </span>
        </a>
        <a className="top-phone" href="tel:+420601141015">
          Nonstop <span>+420 601 141 015</span>
        </a>
      </header>

      <main id="obsah">
        <section className="hero" aria-labelledby="hero-h">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                Havarijní služba · Brno a jižní Morava
              </p>
              <h1 id="hero-h">
                Vidíme do vaší
                <span className="teal"> kanalizace</span>.
                <br />
                Vy vidíte, co opravujeme.
              </h1>
              <p className="lede">
                Kamerová prohlídka, tlakové čištění a bezvýkopové opravy
                potrubí. Najdeme ucpávku i prasklinu a spravíme ji dřív,
                než se prokope zahrada — nonstop, kdekoli na Brněnsku.
              </p>
              <ul className="chips" aria-label="Co děláme">
                <li>Čištění</li>
                <li>Kamerová prohlídka</li>
                <li>Frézování</li>
                <li>Bezvýkopové opravy</li>
              </ul>
            </div>

            <div className="hero-probe">
              <div className="probe probe-lg">
                <span className="ov ov-tl">● REC</span>
                <span className="ov ov-tr">DN 200</span>
                <span className="ov ov-bl">HL 0.0 m</span>
                <span className="ov ov-br">CAM 01</span>
                <span className="cross" aria-hidden="true" />
                <span className="probe-mid">ŽIVÝ NÁHLED SONDY</span>
              </div>
            </div>
          </div>
        </section>

        <section className="block" aria-labelledby="svc-h">
          <div className="wrap">
            <p className="eyebrow">Sestup do potrubí</p>
            <h2 id="svc-h">Co uděláme, metr po metru.</h2>
            <p className="section-note">
              Řadíme podle hloubky, kam sonda dosáhne — od odtoku pod
              dřezem až po hlavní stoku.
            </p>

            <div className="svc-list">
              {services.map((s) => (
                <Reveal className="svc" key={s.title}>
                  <div className="probe probe-sm">
                    <span className="ov ov-tl">{s.depth.replace("HL ", "")}</span>
                    <span className="ov ov-tr">SONDA</span>
                    <span className="cross" aria-hidden="true" />
                    <span className="probe-mid">{s.tag}</span>
                  </div>
                  <div className="svc-body">
                    <span className="svc-depth">{s.depth}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="block trust" aria-labelledby="why-h">
          <div className="wrap">
            <p className="eyebrow">Proč ČISTÉ-ODPADY</p>
            <h2 id="why-h">
              Jeden tým, jedno auto plné techniky, pořád na příjmu.
            </h2>

            <div className="stats">
              <div className="stat">
                <span className="stat-n">24/7</span>
                <span className="stat-l">nonstop na telefonu</span>
              </div>
              <div className="stat">
                <span className="stat-n">DN 40–600</span>
                <span className="stat-l">průměry potrubí, které zvládneme</span>
              </div>
              <div className="stat">
                <span className="stat-n">0</span>
                <span className="stat-l">výkopů u bezvýkopové opravy</span>
              </div>
            </div>

            <dl className="trust-grid">
              {trust.map((t) => (
                <div className="trust-item" key={t.k}>
                  <dt>{t.k}</dt>
                  <dd>{t.v}</dd>
                </div>
              ))}
            </dl>

            <p className="place">
              ČISTÉ-ODPADY s.r.o. · Židovské nám. 228, Lomnice ·
              <a href="mailto:info@ciste-odpady.cz"> info@ciste-odpady.cz</a>
            </p>
          </div>
        </section>
      </main>

      <a className="call" href="tel:+420601141015">
        <span className="call-dot" aria-hidden="true" />
        <span className="call-t">
          Zavolat nonstop
          <span className="call-num">+420 601 141 015</span>
        </span>
      </a>
    </>
  );
}
