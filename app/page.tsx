const sluzby = [
  {
    code: "KLE",
    name: "Autoklempířství a karosárna",
    text: "Rovnáme vytlučené plechy, měníme prahy, blatníky a výztuhy, řešíme rez i tvarovou přesnost dílů podle výrobce.",
  },
  {
    code: "LAK",
    name: "Lakovna",
    text: "Namícháme lak přesně na odstín vašeho vozu a lakujeme v boxu bez prachu, přechodů a šmouh.",
  },
  {
    code: "GEO",
    name: "Geometrie a kalibrace ADAS",
    text: "Nastavení geometrie kol na John Bean V3D Arago a kalibrace kamer i radarů asistentů přístrojem Autel IA1000.",
  },
  {
    code: "PNE",
    name: "Pneuservis",
    text: "Přezutí, vyvážení, prodej pneu a alu kol i uskladnění vaší sezónní sady u nás v hale.",
  },
  {
    code: "ELE",
    name: "Elektro a diagnostika",
    text: "Čtení chybových kódů, autorádia, airbagy, zabezpečení, hands-free a chiptuning.",
  },
  {
    code: "NEH",
    name: "Nehodový servis",
    text: "Odtah, kompletní oprava po nehodě a jednání s pojišťovnou — podrobně na stanovišti 02.",
  },
];

const kroky = [
  {
    num: "01",
    name: "Zavoláte",
    text: "Zavoláte na 777 890 123 nebo se objednáte online. Poradíme, co udělat hned na místě nehody.",
  },
  {
    num: "02",
    name: "Přistavíme vůz",
    text: "Domluvíme odtah nebo přistavení vozu do servisu v Husově ulici — ať už auto pojede, nebo ne.",
  },
  {
    num: "03",
    name: "Řešíme pojišťovnu",
    text: "Nafotíme škodu, vyplníme protokol a jednáme s pojišťovnou za vás. Vy jen podepíšete.",
  },
  {
    num: "04",
    name: "Náhradní vůz",
    text: "Po dobu opravy vám půjčíme náhradní auto, abyste nezůstali bez kol ani na den.",
  },
];

export default function Page() {
  return (
    <main className="fs">
      <header className="fs-hero">
        <nav className="fs-nav" aria-label="Hlavní">
          <a className="fs-wordmark" href="#top" aria-label="F1 servis Pardubice">
            <span className="fs-mark-f1">F1</span>
            <span className="fs-mark-name">servis</span>
            <span className="fs-mark-loc">/ PARDUBICE</span>
          </a>
          <div className="fs-nav-links">
            <a href="#sluzby">Služby</a>
            <a href="#nehoda">Po nehodě</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <a className="fs-nav-tel" href="tel:+420777890123">777 890 123</a>
        </nav>

        <div className="fs-hero-grid" id="top">
          <div className="fs-hero-copy">
            <p className="fs-eyebrow">Autoklempířství · Karosárna · Lakovna</p>
            <h1 className="fs-h1">
              Srovnáme karoserii i geometrii na&nbsp;desetinu stupně.
            </h1>
            <p className="fs-lead">
              Vytlučené plechy, lak, geometrie kol i kalibrace asistentů ADAS.
              V&nbsp;Husově ulici v&nbsp;Pardubicích vrátíme auto po nehodě přesně
              do&nbsp;stopy — a papíry s&nbsp;pojišťovnou vyřídíme za&nbsp;vás.
            </p>
            <div className="fs-cta">
              <a
                className="fs-btn fs-btn-primary"
                href="mailto:info@f1servis.cz?subject=Objedn%C3%A1vka%20na%20servis"
              >
                Objednat na servis
              </a>
              <a className="fs-btn fs-btn-ghost" href="tel:+420777890123">
                Zavolat 777 890 123
              </a>
            </div>
          </div>

          <figure className="fs-hero-fig">
            <img
              src="/hero.webp"
              alt="Autoklempíř rovná karoserii vozu v servisu F1 servis v Pardubicích"
              className="fs-hero-img"
              width={1200}
              height={900}
            />
            <div className="fs-target" aria-hidden="true">
              <span className="fs-target-tag">TARGET · 0,0 mm</span>
            </div>
            <div className="fs-readout" aria-hidden="true">
              <span className="fs-readout-title">GEOMETRIE ✓</span>
              <dl>
                <div><dt>TOE</dt><dd>0°06′</dd></div>
                <div><dt>CAMBER</dt><dd>−0°42′</dd></div>
                <div><dt>CASTER</dt><dd>3°18′</dd></div>
              </dl>
            </div>
          </figure>
        </div>

        <div className="fs-strip" role="note">
          <span className="fs-strip-dot" aria-hidden="true" />
          <span>Měříme na Autel IA1000 &amp; John Bean V3D Arago</span>
          <span className="fs-strip-sep" aria-hidden="true">·</span>
          <span>Po–Pá 7:30–16:00</span>
          <span className="fs-strip-sep" aria-hidden="true">·</span>
          <span>Husova 1782, Pardubice</span>
        </div>
      </header>

      <section className="fs-section fs-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="fs-section-head">
          <p className="fs-tag">Stanoviště 01 — Servis</p>
          <h2 className="fs-h2" id="sluzby-h">
            Od vytlučeného plechu po kalibraci ADAS
          </h2>
          <p className="fs-section-lead">
            Jedna hala, jedna parta. Karoserii srovnáme, nastříkáme, seřídíme
            geometrii a nakalibrujeme asistenty — auto od nás odjede tak, jak ho
            navrhl výrobce.
          </p>
        </div>

        <div className="fs-services-body">
          <ul className="fs-cards">
            {sluzby.map((s) => (
              <li className="fs-card" key={s.code}>
                <span className="fs-card-code">{s.code}</span>
                <h3 className="fs-card-name">{s.name}</h3>
                <p className="fs-card-text">{s.text}</p>
              </li>
            ))}
          </ul>
          <figure className="fs-services-fig">
            <img
              src="/section-1.webp"
              alt="Vůz v dílně F1 servis připravený na měření geometrie kol"
              width={900}
              height={1100}
            />
            <figcaption>Měření geometrie na stanovišti — hodnoty čteme do arc-minut.</figcaption>
          </figure>
        </div>
      </section>

      <section className="fs-section fs-accident" id="nehoda" aria-labelledby="nehoda-h">
        <div className="fs-section-head">
          <p className="fs-tag">Stanoviště 02 — Nehodový servis</p>
          <h2 className="fs-h2" id="nehoda-h">Po nehodě to zařídíme za vás</h2>
          <p className="fs-section-lead">
            Ťukanec na parkovišti i vážnější náraz. Zavoláte, my se postaráme
            o&nbsp;zbytek — od přistavení vozu po výplatu z&nbsp;pojistky.
          </p>
        </div>

        <div className="fs-accident-body">
          <ol className="fs-steps">
            {kroky.map((k) => (
              <li className="fs-step" key={k.num}>
                <span className="fs-step-num">{k.num}</span>
                <div>
                  <h3 className="fs-step-name">{k.name}</h3>
                  <p className="fs-step-text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="fs-aside">
            <figure className="fs-aside-fig">
              <img
                src="/section-2.webp"
                alt="Vůz po nehodě připravený k opravě v karosárně F1 servis"
                width={900}
                height={640}
              />
            </figure>
            <div className="fs-contact" id="kontakt">
              <p className="fs-tag">Kde nás najdete</p>
              <p className="fs-contact-addr">
                Husova 1782
                <br />530 02 Pardubice
              </p>
              <dl className="fs-contact-list">
                <div>
                  <dt>Telefon</dt>
                  <dd><a href="tel:+420777890123">777 890 123</a></dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd><a href="mailto:info@f1servis.cz">info@f1servis.cz</a></dd>
                </div>
                <div>
                  <dt>Otevřeno</dt>
                  <dd>Po–Pá 7:30–16:00<br />So a Ne zavřeno</dd>
                </div>
              </dl>
              <p className="fs-contact-note">
                V servisu měříme na Autel IA1000 a John Bean V3D Arago — kalibraci
                ADAS a geometrii tak zvládneme na jednom místě.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
