import React from "react";

export default function Page() {
  return (
    <main className="hak">
      {/* HERO — otevírá krouhaným zelím, tím nejcharakterističtějším z prodejny */}
      <header className="hero">
        <div className="hero__bar">
          <a className="wm" href="#" aria-label="Plotišťská zelenina HAK — domů">
            <span className="wm__mark" aria-hidden="true">HAK</span>
            <span className="wm__sub">Plotišťská zelenina&nbsp;·&nbsp;Hradec&nbsp;Králové</span>
          </a>
          <nav className="hero__nav" aria-label="Hlavní">
            <a href="#sortiment">Sortiment</a>
            <a href="#prodejna">Prodejna</a>
            <a className="pill" href="tel:+420777555346">Zavolat na prodejnu</a>
          </nav>
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Rodinná farma · více než 100 sezón</p>
            <h1 className="hero__title">
              Zelí krouháme<br />
              <span className="hero__accent">do vašeho zeláku.</span>
            </h1>
            <p className="hero__lead">
              Zeleninu a brambory pěstujeme v Plotišti nad Labem — bez
              škodlivých hnojiv a pesticidů. Sklidíme, nakrouháme a připravíme
              k odběru přímo pro vás.
            </p>
            <div className="hero__cta">
              <a className="btn btn--solid" href="#sortiment">Prohlédnout sortiment</a>
              <a className="btn btn--ghost" href="tel:+420777555346">+420&nbsp;777&nbsp;555&nbsp;346</a>
            </div>
            <dl className="hours">
              <div><dt>Po–Pá</dt><dd>7:00–17:00</dd></div>
              <div><dt>So</dt><dd>8:00–12:00</dd></div>
              <div className="hours--off"><dt>Ne</dt><dd>zavřeno</dd></div>
            </dl>
          </div>

          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Čerstvě sklizená zelenina z farmy HAK v Plotišti nad Labem"
              width={1200}
              height={1500}
              loading="eager"
            />
            <figcaption>Sklizeno v Plotišti nad Labem</figcaption>
          </figure>
        </div>
      </header>

      {/* SEKCE 1 — Sortiment / nabídka */}
      <section id="sortiment" className="section section--menu" aria-labelledby="sortiment-h">
        <div className="section__head">
          <p className="eyebrow">Co u nás koupíte</p>
          <h2 id="sortiment-h">Přímo od zemědělce, ne z regálu</h2>
        </div>

        <div className="menu">
          <article className="card card--wide">
            <img
              src="/section-1.webp"
              alt="Krouhání čerstvého zelí na krouhači v prodejně HAK"
              width={900}
              height={600}
              loading="lazy"
            />
            <div className="card__body">
              <span className="tag tag--now">Novinka sezóny</span>
              <h3>Vykysané zelí do vlastního zeláku</h3>
              <p>
                Přineste den předem svůj zelák se jménem a telefonem. Nakrouháme,
                naložíme a ozveme se vám, jakmile bude zelí připravené k odběru.
                Objednávka telefonicky nebo e-mailem.
              </p>
              <a className="card__link" href="tel:+420777555346">Objednat zelí →</a>
            </div>
          </article>

          <ul className="produce" aria-label="Sortiment prodejny">
            <li>
              <span className="produce__no">01</span>
              <h4>Sezónní zelenina</h4>
              <p>Zelí, mrkev, cibule, kořenová i listová — vždy skladem a čerstvá.</p>
            </li>
            <li>
              <span className="produce__no">02</span>
              <h4>Brambory z pole</h4>
              <p>Vlastní sklizeň z okraje Hradce Králové, pytlované i po kilech.</p>
            </li>
            <li>
              <span className="produce__no">03</span>
              <h4>Ovoce a domácí produkty</h4>
              <p>Doplněné o poctivé zboží z regionu — pro celý nákup na jednom místě.</p>
            </li>
            <li>
              <span className="produce__no">04</span>
              <h4>Pekařství v areálu</h4>
              <p>Vlastní pekařství „na Kruháku“ — chléb a pečivo čerstvě k zelenině.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* SEKCE 2 — Důvěra / o nás / prodejna */}
      <section id="prodejna" className="section section--trust" aria-labelledby="prodejna-h">
        <div className="trust__grid">
          <figure className="trust__media">
            <img
              src="/section-2.webp"
              alt="Pozemky farmy HAK, kde se pěstuje zelenina u Hradce Králové"
              width={900}
              height={700}
              loading="lazy"
            />
          </figure>

          <div className="trust__copy">
            <p className="eyebrow">Proč k nám</p>
            <h2 id="prodejna-h">Stoletá tradice, kterou poznáte na chuti</h2>
            <p className="trust__lead">
              Jsme rodinná farma. Zeleninu pěstujeme šetrně, bez škodlivých
              chemických hnojiv a pesticidů — a prodáváme ji ve vlastní prodejně
              na okraji Hradce Králové.
            </p>

            <ul className="reasons">
              <li><strong>Rodinná farma</strong><span>Více než stoletá tradice pěstování v Plotišti nad Labem.</span></li>
              <li><strong>Bez pesticidů</strong><span>Šetrné pěstování bez škodlivých hnojiv a chemie.</span></li>
              <li><strong>Certifikace kvality</strong><span>GLOBALG.A.P., IPZ i značka Klasa.</span></li>
              <li><strong>Pohodlné parkování</strong><span>Zaparkujete přímo u prodejny „na Kruháku“.</span></li>
            </ul>

            <div className="visit">
              <div className="visit__where">
                <h3>Kde nás najdete</h3>
                <p>
                  Náchodská 198, Plotiště nad Labem<br />500 03 Hradec Králové
                </p>
                <p className="visit__hint">
                  Na výpadovce směr Hořice / Jičín, 100 m po výjezdu z kruhového
                  objezdu u ČKD.
                </p>
              </div>
              <div className="visit__act">
                <a className="btn btn--solid" href="tel:+420777555346">Zavolat na prodejnu</a>
                <a className="btn btn--ghost" href="mailto:info@zdravazelenina.cz">Napsat e-mail</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
