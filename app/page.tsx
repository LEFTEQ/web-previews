export default function Page() {
  return (
    <main className="pg">
      {/* ============ HERO — "the panel charges" ============ */}
      <header className="band hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__sweep" aria-hidden="true" />
        <div className="hero__field" aria-hidden="true" />

        <div className="wrap hero__inner">
          <div className="brand">
            <span className="brand__cell" aria-hidden="true" />
            <span className="brand__name">Energie&nbsp;ze&nbsp;slunce</span>
            <span className="brand__suf">s.r.o.</span>
          </div>

          <p className="eyebrow eyebrow--light">Fotovoltaika na klíč — Řevničov, Střední Čechy</p>

          <h1 className="hero__title">
            Hybridní<br />fotovoltaika<br /><span className="amber">na&nbsp;klíč</span>
          </h1>

          <p className="hero__lead">
            Profesionální instalace a servis fotovoltaiky pro rodinné domy, bytové
            domy i firmy všech velikostí. Dotaci a veškerou administrativu vyřídíme
            za vás. Platíte až po instalaci — žádné zálohy předem.
          </p>

          <div className="hero__cta">
            <a className="btn" href="tel:+420777111222">Zavolat 777&nbsp;111&nbsp;222</a>
            <span className="hero__note">Nabídku spočítáme zdarma, bez závazku.</span>
          </div>

          <div className="stats">
            <div className="tile">
              <span className="tile__num">5,0</span>
              <span className="tile__lbl">Hodnocení na Google<br />ze 100 recenzí</span>
            </div>
            <div className="tile">
              <span className="tile__num">147&nbsp;000 Kč</span>
              <span className="tile__lbl">Dotace, kterou<br />pro vás vyřídíme až do</span>
            </div>
            <div className="tile">
              <span className="tile__num">500+ MWp</span>
              <span className="tile__lbl">Instalované kapacity<br />za dobu naší praxe</span>
            </div>
            <div className="tile">
              <span className="tile__num">0 Kč</span>
              <span className="tile__lbl">Záloh předem —<br />platíte po instalaci</span>
            </div>
          </div>
        </div>
      </header>

      {/* ============ NABÍDKA — three real SolaX packages ============ */}
      <section className="band nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="wrap">
          <p className="eyebrow">Nabídka — hybridní elektrárny SolaX s baterií</p>
          <h2 className="h2" id="nabidka-h">Tři sestavy, které šetří od prvního dne</h2>
          <p className="lead">
            Full-black panely Longi, hybridní střídač SolaX a baterie Triple Power.
            Ke každé sestavě záloha back-up při výpadku, regulace přebytků do ohřevu
            vody a garance nejnižší ceny. Ceny jsou orientační — přesně je spočítáme
            podle vaší střechy.
          </p>

          <div className="pkgs">
            <article className="pkg">
              <p className="pkg__tier">Velká elektrárna s baterií</p>
              <p className="pkg__kwp">9,72 <span>kWp</span></p>
              <ul className="pkg__spec">
                <li>18 panelů Longi 540 Wp full black</li>
                <li>Střídač SolaX X3-Hybrid PRO</li>
                <li>Baterie SolaX Triple Power T58 — 11,6 kWh</li>
                <li>Back-up při výpadku + ohřev TUV</li>
              </ul>
              <p className="pkg__price">
                <span className="pkg__from">Finální cena od</span>
                <span className="pkg__now">297&nbsp;700 Kč</span>
                <span className="pkg__was">běžně 343&nbsp;500 Kč</span>
              </p>
              <a className="btn btn--sm" href="tel:+420777111222">Zavolat pro přesnou cenu</a>
            </article>

            <article className="pkg">
              <p className="pkg__tier">Střední elektrárna s baterií</p>
              <p className="pkg__kwp">7,56 <span>kWp</span></p>
              <ul className="pkg__spec">
                <li>14 panelů Longi 540 Wp full black</li>
                <li>Střídač SolaX X3-Hybrid PRO</li>
                <li>Baterie SolaX Triple Power T58 — 11,6 kWh</li>
                <li>Back-up při výpadku + ohřev TUV</li>
              </ul>
              <p className="pkg__price">
                <span className="pkg__from">Finální cena od</span>
                <span className="pkg__now">268&nbsp;900 Kč</span>
                <span className="pkg__was">běžně 304&nbsp;700 Kč</span>
              </p>
              <a className="btn btn--sm" href="tel:+420777111222">Zavolat pro přesnou cenu</a>
            </article>

            <article className="pkg">
              <p className="pkg__tier">Malá elektrárna s baterií</p>
              <p className="pkg__kwp">5,4 <span>kWp</span></p>
              <ul className="pkg__spec">
                <li>10 panelů Longi 540 Wp full black</li>
                <li>Střídač SolaX X3-Hybrid G4</li>
                <li>Baterie SolaX Triple Power T30 — 6,2 kWh</li>
                <li>Back-up při výpadku + ohřev TUV</li>
              </ul>
              <p className="pkg__price">
                <span className="pkg__from">Finální cena od</span>
                <span className="pkg__now">227&nbsp;600 Kč</span>
                <span className="pkg__was">běžně 248&nbsp;400 Kč</span>
              </p>
              <a className="btn btn--sm" href="tel:+420777111222">Zavolat pro přesnou cenu</a>
            </article>
          </div>
        </div>
      </section>

      {/* ============ O NÁS + POSTUP ============ */}
      <section className="band onas" aria-labelledby="onas-h">
        <div className="hero__grid onas__grid" aria-hidden="true" />
        <div className="wrap onas__inner">
          <p className="eyebrow eyebrow--light">O nás — Energie ze slunce s.r.o., Řevničov</p>
          <h2 className="h2 h2--light" id="onas-h">Renomovaná firma s reálnou historií instalací</h2>
          <p className="lead lead--light">
            Elektrárnu navrhneme, postavíme a vyřídíme k ní dotaci — vše na klíč, od
            prvního náčrtu po vyplacení dotace na váš účet. Vyrobenou elektřinu dnes
            navíc snadno sdílíte se svými blízkými.
          </p>

          <div className="metrics">
            <div className="metric">
              <span className="metric__num">500+ MWp</span>
              <span className="metric__lbl">instalované kapacity</span>
            </div>
            <div className="metric">
              <span className="metric__num">100 mil. Kč</span>
              <span className="metric__lbl">zajištěných dotací pro klienty</span>
            </div>
            <div className="metric">
              <span className="metric__num">5,0 / 100</span>
              <span className="metric__lbl">hodnocení a recenzí na Google</span>
            </div>
          </div>

          <div className="process">
            <p className="eyebrow eyebrow--light process__eb">Jak probíhá spolupráce</p>
            <ol className="steps">
              <li className="step">
                <span className="step__no">01</span>
                <div>
                  <h3 className="step__t">Zavoláte nebo napíšete</h3>
                  <p className="step__d">Stačí minutka vašeho času a základní údaje o objektu.</p>
                </div>
              </li>
              <li className="step">
                <span className="step__no">02</span>
                <div>
                  <h3 className="step__t">Osobní schůzka a návrh řešení</h3>
                  <p className="step__d">1 až 3 týdny od prvního kontaktu, návrh přímo na vaši střechu.</p>
                </div>
              </li>
              <li className="step">
                <span className="step__no">03</span>
                <div>
                  <h3 className="step__t">Podpis smlouvy a administrativa</h3>
                  <p className="step__d">Dotaci i papírování vyřídíme za vás, do 4 týdnů od dohody.</p>
                </div>
              </li>
              <li className="step">
                <span className="step__no">04</span>
                <div>
                  <h3 className="step__t">Vyplacení dotace na váš účet</h3>
                  <p className="step__d">Dotace přichází ještě před samotnou instalací.</p>
                </div>
              </li>
              <li className="step">
                <span className="step__no">05</span>
                <div>
                  <h3 className="step__t">Odborná instalace za 2 dny</h3>
                  <p className="step__d">Zprovoznění do 2–3 měsíců od podpisu smlouvy.</p>
                </div>
              </li>
            </ol>
          </div>

          <figure className="quote">
            <blockquote>
              „S vlastní fotovoltaikou šetříte od prvního dne. Instalace je
              bezúdržbová a poslouží dlouhé desítky let — a přebytky levné, čisté
              energie dnes snadno sdílíte se svými blízkými.“
            </blockquote>
            <figcaption>
              <span className="quote__cell" aria-hidden="true" />
              Miroslav Toušek — jednatel, Energie ze slunce s.r.o.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
