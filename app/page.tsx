import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      k: "Ploché i šikmé",
      h: "Kompletní realizace střech",
      p: "Rodinné, bytové i činžovní domy v Ostravě a okolí. Od bednění a pojistné hydroizolace po finální plechovou krytinu — jedna parta, jedna zodpovědnost.",
    },
    {
      k: "Klempířské detaily",
      h: "Oplechování, žlaby a svody",
      p: "Falcované úžlabí, atiky, parapety a komíny. Ohýbáme na míru přímo v dílně na Plynární, ať sedí každý přechod a nikde nezatéká.",
    },
  ];

  return (
    <>
      <header className="top">
        <div className="wrap">
          <a className="mark" href="#" aria-label="RED Střechy, klempířství Ostrava">
            <span className="r"><span>RED</span></span>
            <span>Střechy</span>
            <small>klempířství · Ostrava</small>
          </a>
          <nav aria-label="Hlavní">
            <a href="#strechy">Střechy</a>
            <a href="#ruka">Ruka 39&nbsp;m</a>
            <a href="#onas">O nás</a>
          </nav>
          <a className="call" href="tel:+420605168769">+420 605 168 769</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Nová plechová falcovaná střecha realizovaná firmou RED Střechy v Ostravě"
          />
        </div>
        <div className="hero-body">
          <div className="wrap hero-panel">
            <p className="eyebrow reveal">Klempířství &amp; pokrývačství · Moravská Ostrava</p>
            <h1 className="reveal d1">
              Falc, který<br /><em>drží vodu</em>
            </h1>
            <p className="hero-lead reveal d2">
              Děláme střechy na klíč — od rodinných domů po průmyslové a
              památkové objekty. Poctivé klempířské řemeslo z dílny
              na Plynární, ne prodej metru krytiny.
            </p>
            <div className="hero-actions reveal d3">
              <a className="btn" href="tel:+420605168769">Zavolat na dílnu</a>
              <a className="btn ghost" href="#strechy">Co realizujeme</a>
            </div>
            <div className="seam" aria-hidden="true">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="strechy">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">01 — Nabídka</span>
            <h2>Co pro vás postavíme</h2>
            <p>Střecha se řeší jednou za generaci. Uděláme ji tak, aby vydržela.</p>
          </div>

          <div className="svc-grid">
            {services.map((s) => (
              <div className="svc" key={s.h}>
                <span className="k">{s.k}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
            <div className="svc wide">
              <span className="k">Materiály, se kterými pracujeme</span>
              <h3>Plech, který přežije majitele domu</h3>
              <p>
                Poradíme s výběrem podle sklonu, rozpočtu i vzhledu — a
                dovezeme ho vlastní dopravou až na stavbu.
              </p>
              <div className="mat">
                <span>Titanzinek</span>
                <span>Měď</span>
                <span>Poplastovaný plech</span>
                <span>Hliník</span>
                <span>Falcovaná krytina</span>
                <span>Trapéz</span>
              </div>
            </div>
          </div>

          {/* SIGNATURE: hydraulická ruka 39 m */}
          <div className="crane" id="ruka">
            <div className="crane-copy">
              <p className="k">Vozidlo s HR rukou &amp; doprava</p>
              <h3>Dosáhneme tam, kam jeřáb nevyjede</h3>
              <p>
                Jako jedna z mála firem v ČR vozíme nákladní auto s
                hydraulickou rukou s dosahem až <strong>39 metrů</strong>.
                Vysadíme paletu krytiny na střechu paneláku i mezi
                úzké dvorky v centru Ostravy. K tomu Mercedes valník a
                dodávky na odvoz i navezení materiálu.
              </p>
              <span className="badge">Mercedes valník · dodávky · odvoz suti</span>
            </div>
            <div className="ruler" aria-hidden="true">
              <div className="tick top">
                <span className="ruler-num">39<sub>&nbsp;m</sub></span>
              </div>
              <div className="tick">30 m</div>
              <div className="tick">20 m</div>
              <div className="tick">10 m</div>
              <div className="tick">0 m — dílna Plynární</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="onas">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">02 — O nás</span>
            <h2>Kdo vám na tu střechu vyleze</h2>
          </div>

          <div className="about-grid">
            <figure className="about-img">
              <img
                src="/section-2.webp"
                alt="Klempíři RED Střechy při montáži plechové krytiny"
              />
              <figcaption>Provozovna a dílna — Plynární 7, Ostrava</figcaption>
            </figure>
            <div className="about-copy">
              <p className="lede">
                RED Střechy vede Roman Hanske. Malá ostravská parta, která
                bere zakázky, na které si sama troufne udělat záruku.
              </p>
              <p>
                Realizujeme střechy na rodinných, bytových i činžovních
                domech a stejně tak na průmyslových, komerčních a
                památkových objektech. Zakázku od poptávky po předání vede
                Lucie Konečná — víte tedy pořád, s kým mluvíte.
              </p>
              <ul className="facts">
                <li>
                  <span className="lab">Sídlo</span>
                  <span className="val">Stodolní 1785/31, Moravská Ostrava</span>
                </li>
                <li>
                  <span className="lab">Dílna</span>
                  <span className="val">Plynární 7, Ostrava</span>
                </li>
                <li>
                  <span className="lab">Realizace zakázek</span>
                  <span className="val">
                    <a href="tel:+420605168769">Lucie Konečná · 605 168 769</a>
                  </span>
                </li>
                <li>
                  <span className="lab">E-mail</span>
                  <span className="val">
                    <a href="mailto:info@redstrechy.cz">info@redstrechy.cz</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
