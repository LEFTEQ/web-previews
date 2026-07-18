export default function Page() {
  return (
    <main className="page">
      {/* ————— HERO ————— */}
      <header className="hero band">
        <div className="hero-frame keyline keyline--hero">
          <svg
            className="keyline-draw"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <rect
              className="keyline-draw-rect"
              x="0"
              y="0"
              width="100"
              height="100"
              pathLength={100}
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="candle" aria-hidden="true">
            <svg viewBox="0 0 40 74" className="candle-svg">
              <defs>
                <linearGradient id="flame" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#f3eee2" />
                  <stop offset="0.45" stopColor="#d8b35a" />
                  <stop offset="1" stopColor="#b8912e" />
                </linearGradient>
              </defs>
              <rect x="13" y="26" width="14" height="46" rx="1.5" className="candle-body" />
              <rect x="13" y="26" width="14" height="3" className="candle-rim" />
              <rect x="19" y="19" width="2" height="8" className="candle-wick" />
              <g className="flame">
                <path
                  d="M20 1 C 26 9, 28 13, 26 18 C 25 21, 22 23, 20 23 C 18 23, 15 21, 14 18 C 12 13, 14 9, 20 1 Z"
                  fill="url(#flame)"
                />
                <path
                  d="M20 8 C 22.5 12, 23 15, 21.5 18 C 20.5 20, 19.5 20, 18.5 18 C 17 15, 17.5 12, 20 8 Z"
                  className="flame-core"
                />
              </g>
            </svg>
          </div>

          <div className="hero-inner">
            <p className="eyebrow reveal r1">
              Pohřební služba · Brno · od roku 1996
            </p>
            <h1 className="wordmark reveal r2">Harmonie</h1>
            <span className="rule reveal r2" aria-hidden="true" />
            <p className="hero-sub reveal r3">
              Postaráme se o důstojné poslední rozloučení — v klidu, beze spěchu
              a přesně podle vašich představ.
            </p>

            <figure className="hero-quote reveal r4">
              <blockquote>
                …smrt není zlá, smrt je jen kus života těžkého…
              </blockquote>
            </figure>

            <div className="hero-call reveal r5">
              <span className="call-label">Svoz zesnulých — nonstop, i v noci</span>
              <a className="call-number" href="tel:+420777111222">
                +420 777 111 222
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ————— SLUŽBY ————— */}
      <section className="services band" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow">Naše služby</p>
          <h2 id="services-title" className="section-title">
            Tři způsoby rozloučení
          </h2>
          <p className="section-lead">
            Vyberete si sami — s obřadem i bez, zpopelnění nebo uložení do země.
            Vše ostatní zařídíme za vás.
          </p>
        </div>

        <div className="service-grid">
          <article className="service keyline">
            <p className="service-kicker">Kremace</p>
            <h3 className="service-name">Kremace s obřadem</h3>
            <p className="service-desc">
              Smuteční obřad v obřadní síni a následné zpopelnění. Rozloučení,
              na které se dá v klidu pozvat rodina i přátelé.
            </p>
            <ul className="service-list">
              <li>Obřadní síň, hudba, řečník nebo kněz</li>
              <li>Květinové dary a smuteční výzdoba</li>
              <li>Předání urny nebo úschova zdarma</li>
            </ul>
          </article>

          <article className="service keyline">
            <p className="service-kicker">Kremace</p>
            <h3 className="service-name">Kremace bez obřadu</h3>
            <p className="service-desc">
              Zpopelnění bez smutečního obřadu. Vhodné, když si přejete
              rozloučit se později v nejužším kruhu.
            </p>
            <ul className="service-list">
              <li>Bez veřejného obřadu</li>
              <li>Možnost pozdějšího rozloučení</li>
              <li>Urnu uschováme do vyzvednutí zdarma</li>
            </ul>
          </article>

          <article className="service keyline">
            <p className="service-kicker">Pohřeb do země</p>
            <h3 className="service-name">Pohřeb s obřadem</h3>
            <p className="service-desc">
              Uložení do země s obřadem — občanským i církevním. Připravíme
              místo, výzdobu i celý průběh rozloučení.
            </p>
            <ul className="service-list">
              <li>Občanský i církevní obřad</li>
              <li>Květinová výzdoba a hudba</li>
              <li>Kompletní administrativa</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ————— KDYŽ NASTANE ÚMRTÍ / DŮVĚRA ————— */}
      <section className="guide band" aria-labelledby="guide-title">
        <div className="section-head">
          <p className="eyebrow">Když nastane úmrtí</p>
          <h2 id="guide-title" className="section-title">
            Nejste na to sami
          </h2>
          <p className="section-lead">
            V prvních hodinách stačí tři kroky. Zbytek probereme spolu, až na to
            budete mít klid.
          </p>
        </div>

        <ol className="steps">
          <li className="step">
            <span className="step-num">01</span>
            <div>
              <h3 className="step-name">Přivolejte lékaře</h3>
              <p>
                Při úmrtí doma nejdříve zavolejte lékaře, který potvrdí úmrtí.
                V nemocnici tento krok řeší personál.
              </p>
            </div>
          </li>
          <li className="step">
            <span className="step-num">02</span>
            <div>
              <h3 className="step-name">Zavolejte nám</h3>
              <p>
                Zajistíme převoz zesnulého kdykoliv — ve dne i v noci, v Brně
                i okolí. Nonstop linka&nbsp;+420&nbsp;777&nbsp;111&nbsp;222.
              </p>
            </div>
          </li>
          <li className="step">
            <span className="step-num">03</span>
            <div>
              <h3 className="step-name">Sjednáme pohřeb</h3>
              <p>
                Druhý den se u nás v klidu domluvíme na průběhu rozloučení.
                Ze zákona máte na vyřízení nárok na dva dny volna.
              </p>
            </div>
          </li>
        </ol>

        <p className="guide-note keyline">
          Nejste povinni sjednat obřad u služby, která zesnulého odvezla.
          Vyberte si klidně a bez nátlaku — čas na to máte.
        </p>

        <div className="guide-cols">
          <div className="guide-col">
            <h3 className="guide-col-title">Vyřídíme za vás</h3>
            <ul className="guide-list">
              <li>Smuteční oznámení — tisk na počkání</li>
              <li>Květinové dary a věnce</li>
              <li>Hudbu, řečníka nebo kněze</li>
              <li>Fotografa smutečního obřadu</li>
              <li>Úmrtní list na matrice</li>
              <li>Úschovu urny do vyzvednutí zdarma</li>
            </ul>
          </div>
          <div className="guide-col">
            <h3 className="guide-col-title">Kde nás najdete</h3>
            <dl className="contact">
              <div className="contact-row">
                <dt>Kanceláře</dt>
                <dd>Brno — po telefonické domluvě vás rádi přijmeme</dd>
              </div>
              <div className="contact-row">
                <dt>Svoz zesnulých</dt>
                <dd>
                  <a href="tel:+420777111222">+420 777 111 222</a> · nonstop
                </dd>
              </div>
              <div className="contact-row">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:info@example.cz">info@example.cz</a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>Pečujeme o rodiny</dt>
                <dd>v Brně nepřetržitě od roku 1996</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
