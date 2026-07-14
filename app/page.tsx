export default function Page() {
  return (
    <>
      <title>Garretto Praha — řeznictví, kuchyně a velkoobchod</title>
      <meta
        name="description"
        content="Garretto Praha: poctivé řeznictví, čerstvé maso, hotová jídla a dodávky pro pražské gastro provozy."
      />
      <meta property="og:title" content="Garretto Praha — maso bez zkratek" />
      <meta
        property="og:description"
        content="Řeznictví, kuchyně a velkoobchod pro Prahu. Maso, u kterého víte, co kupujete."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:image" content="/hero.webp" />

      <main className="garretto">
        <section className="hero" aria-labelledby="hero-title">
          <header className="site-header">
            <a className="wordmark" href="#zacatek" aria-label="Garretto Praha, úvod">
              <span>GAR</span>
              <i aria-hidden="true" />
              <span>RETTO</span>
              <small>PRAHA</small>
            </a>

            <nav className="desktop-nav" aria-label="Hlavní navigace">
              <a href="#nabidka">Co je na pultu</a>
              <a href="#pristup">Jak pracujeme</a>
              <a className="nav-cta" href="#nabidka">Prohlédnout nabídku</a>
            </nav>

            <details className="mobile-nav">
              <summary aria-label="Otevřít navigaci">
                <span>Menu</span>
                <i aria-hidden="true" />
              </summary>
              <nav aria-label="Mobilní navigace">
                <a href="#nabidka">Co je na pultu</a>
                <a href="#pristup">Jak pracujeme</a>
              </nav>
            </details>
          </header>

          <div className="hero-grid" id="zacatek">
            <div className="hero-copy">
              <p className="eyebrow">Pražské řeznictví · kuchyně · velkoobchod</p>
              <h1 id="hero-title">Maso bez<br /><em>zkratek.</em></h1>
              <p className="hero-lead">
                Čerstvé řezy na doma, poctivá jídla na každý den a spolehlivé dodávky pro pražské kuchyně.
              </p>
              <a className="primary-action" href="#nabidka">
                Podívat se, co chystáme
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-visual">
              <div className="cut-mark" aria-hidden="true">
                <span>ŘEZ</span>
              </div>
              <img
                src="/hero.webp"
                alt="Čerstvé maso připravené řezníkem Garretto Praha"
                width="1600"
                height="1200"
                fetchPriority="high"
                decoding="async"
              />
              <div className="counter-slip">
                <span>Dnes u nás</span>
                <strong>pult · kuchyně · výdej</strong>
                <small>Čerstvou nabídku připravujeme průběžně.</small>
              </div>
            </div>
          </div>
        </section>

        <section className="offer" id="nabidka" aria-labelledby="offer-title">
          <div className="section-intro">
            <p className="eyebrow">Z jednoho řeznického stolu</p>
            <h2 id="offer-title">Pro pánev, talíř<br />i celý provoz.</h2>
            <p>
              Vyberete si podle toho, co právě potřebujete. Poradíme s řezem, množstvím i přípravou — lidsky a bez zbytečných řečí.
            </p>
          </div>

          <div className="offer-image">
            <img
              src="/section-1.webp"
              alt="Řezník porcuje maso na pracovním stole"
              width="1400"
              height="1050"
              loading="lazy"
              decoding="async"
            />
            <span className="image-note">Porcujeme podle použití, ne podle univerzální šablony.</span>
          </div>

          <div className="offer-list" aria-label="Nabídka Garretto Praha">
            <article>
              <span className="service-label">PULT</span>
              <div>
                <h3>Maso domů</h3>
                <p>Čerstvé hovězí, vepřové i drůbeží řezy. Řekněte, co vaříte, a vybereme vhodný kus.</p>
              </div>
            </article>
            <article>
              <span className="service-label">KUCHYNĚ</span>
              <div>
                <h3>Oběd bez kompromisu</h3>
                <p>Hotová jídla postavená na mase z našeho pultu — pro rychlý oběd i jídlo s sebou.</p>
              </div>
            </article>
            <article>
              <span className="service-label">VELKOOBCHOD</span>
              <div>
                <h3>Pro pražské gastro</h3>
                <p>Pravidelné dodávky, domluvené porcování a množství, na které se vaše kuchyně může připravit.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="approach" id="pristup" aria-labelledby="approach-title">
          <div className="approach-image">
            <img
              src="/section-2.webp"
              alt="Detail práce a čerstvých výrobků v řeznictví Garretto Praha"
              width="1400"
              height="1050"
              loading="lazy"
              decoding="async"
            />
            <div className="stamp" aria-hidden="true">
              <span>GARRETTO</span>
              <b>PRAHA</b>
            </div>
          </div>

          <div className="approach-copy">
            <p className="eyebrow">Dobré maso poznáte ještě před pánví</p>
            <h2 id="approach-title">Víme, co vám dáváme do ruky.</h2>
            <p className="large-copy">
              Řeznictví nestojí na efektech. Stojí na čistém řezu, správném skladování a člověku za pultem, který se umí zeptat, co z masa chcete připravit.
            </p>

            <dl className="trust-list">
              <div>
                <dt>Výběr</dt>
                <dd>Konkrétní kus doporučíme podle jídla, ne podle nejvyšší ceny.</dd>
              </div>
              <div>
                <dt>Příprava</dt>
                <dd>Naporcujeme, nakrájíme nebo připravíme množství podle vaší kuchyně.</dd>
              </div>
              <div>
                <dt>Praha</dt>
                <dd>Jsme místní řeznictví pro domácnosti i profesionální gastro provozy.</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </>
  );
}
