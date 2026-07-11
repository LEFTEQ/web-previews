export default function Page() {
  return (
    <main className="ad">
      {/* HERO */}
      <header className="ad-nav" aria-label="Hlavní navigace">
        <a className="ad-mark" href="#uvod" aria-label="AD Landek — úvod">
          <span className="ad-mark__ripple" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
          <span className="ad-mark__word">AD&nbsp;LANDEK</span>
        </a>
        <nav className="ad-links">
          <a href="#wellness">Wellness</a>
          <a href="#fitness">Fitness</a>
          <a href="#navsteva">Návštěva</a>
        </nav>
        <a className="ad-phone" href="tel:+420595221600">+420&nbsp;595&nbsp;221&nbsp;600</a>
      </header>

      <section className="ad-hero" id="uvod">
        <img
          className="ad-hero__img"
          src="/hero.webp"
          alt="Bazén ve wellness centru AD Landek s tyrkysovou vodní hladinou"
          width={1600}
          height={1000}
          fetchPriority="high"
        />
        <div className="ad-hero__scrim" aria-hidden="true" />
        <div className="ad-hero__inner">
          <p className="ad-hero__eyebrow">Wellness &amp; bazén · Ostrava-Petřkovice</p>
          <h1 className="ad-hero__title">
            Voda,<br />ve které<br /><em>vypnete</em>.
          </h1>
          <p className="ad-hero__lead">
            Bazén, finská i parní sauna, solárium a masér — všechno pod
            jednou střechou v areálu na úpatí Landeku. Přijďte se zahřát
            i po zavírací době kanceláře.
          </p>
          <div className="ad-hero__cta">
            <a className="ad-btn ad-btn--solid" href="tel:+420595221600">Zavolat na recepci</a>
            <a className="ad-btn ad-btn--ghost" href="#wellness">Co u nás najdete</a>
          </div>
          <dl className="ad-hero__facts">
            <div><dt>Voda</dt><dd>28 °C</dd></div>
            <div><dt>Sauna</dt><dd>až 90 °C</dd></div>
            <div><dt>Otevřeno</dt><dd>po–ne</dd></div>
          </dl>
        </div>
      </section>

      {/* WELLNESS */}
      <section className="ad-wellness" id="wellness">
        <div className="ad-wellness__head">
          <p className="ad-kicker">Relax</p>
          <h2 className="ad-h2">Pět zastavení, jedno odpoledne</h2>
          <p className="ad-sub">
            Vezměte to popořadě, nebo skočte rovnou tam, kam vás to táhne.
            Recepce vám půjčí ručník i pantofle.
          </p>
        </div>

        <div className="ad-wellness__grid">
          <figure className="ad-shot">
            <img
              src="/section-1.webp"
              alt="Vnitřní bazén s prosvětlenou hladinou ve wellness AD Landek"
              width={900}
              height={1100}
              loading="lazy"
            />
          </figure>

          <ol className="ad-stations">
            <li>
              <span className="ad-stations__no">01</span>
              <div>
                <h3>Bazén</h3>
                <p>Vyhřátá voda na 28 °C na rozplavání i klidné plavání proti proudu dne.</p>
              </div>
            </li>
            <li>
              <span className="ad-stations__no">02</span>
              <div>
                <h3>Finská sauna</h3>
                <p>Suché horko a vůně dřeva. Ideál po tréninku i po dlouhém dni v kanceláři.</p>
              </div>
            </li>
            <li>
              <span className="ad-stations__no">03</span>
              <div>
                <h3>Parní sauna</h3>
                <p>Vlhké teplo, které se dobře dýchá. Šetrné ke kůži i k dýchacím cestám.</p>
              </div>
            </li>
            <li>
              <span className="ad-stations__no">04</span>
              <div>
                <h3>Solárium</h3>
                <p>Rychlé prohřátí a barva do bledých ostravských měsíců.</p>
              </div>
            </li>
            <li>
              <span className="ad-stations__no">05</span>
              <div>
                <h3>Masáže</h3>
                <p>Náš masér uvolní záda i ramena. Termín si domluvte předem na recepci.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* FITNESS / DŮVĚRA */}
      <section className="ad-fitness" id="fitness">
        <figure className="ad-fitness__shot">
          <img
            src="/section-2.webp"
            alt="Vybavené fitness centrum v areálu AD Landek"
            width={1100}
            height={800}
            loading="lazy"
          />
        </figure>
        <div className="ad-fitness__text">
          <p className="ad-kicker ad-kicker--light">Sport</p>
          <h2 className="ad-h2 ad-h2--light">Zacvičit si můžete i sami za sebe</h2>
          <p className="ad-sub ad-sub--light">
            Plně vybavené fitness máte otevřené každý den. Chcete raději
            ve skupině? Rezervujte si lekci pod vedením našich lektorů —
            a wellness pak berte jako zaslouženou odměnu.
          </p>
          <ul className="ad-chips">
            <li>Posilovna</li>
            <li>Skupinové lekce</li>
            <li>Lektoři na sále</li>
            <li>Pro firmy</li>
          </ul>
          <a className="ad-btn ad-btn--solid" href="tel:+420777721908">Rezervovat lekci · 777&nbsp;721&nbsp;908</a>
        </div>

        <address className="ad-visit" id="navsteva">
          <div>
            <p className="ad-visit__label">Najdete nás</p>
            <p className="ad-visit__big">U Nemocnice 837/2<br />725 29 Ostrava-Petřkovice</p>
          </div>
          <div>
            <p className="ad-visit__label">Recepce</p>
            <p className="ad-visit__lines">
              <a href="tel:+420595221600">+420 595 221 600</a>
              <a href="tel:+420777721908">+420 777 721 908</a>
              <a href="mailto:recepce@adlandek.cz">recepce@adlandek.cz</a>
            </p>
          </div>
        </address>
      </section>
    </main>
  );
}
