export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="FVA Solar, domovská stránka">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="sun" />
          </span>
          <span className="wordmark__text">
            FVA<span className="wordmark__thin">Solar</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#nabidka">Co instalujeme</a>
          <a href="#den">Jak to funguje</a>
          <a href="#zaruky">Záruky</a>
        </nav>
        <a className="btn btn--call" href="tel:+420605494441">
          <span className="btn__phone">+420&nbsp;605&nbsp;494&nbsp;441</span>
          <span className="btn__label">Zavolat</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Fotovoltaické panely instalované na střeše rodinného domu v Ostravě"
            className="hero__img"
            width={1600}
            height={1000}
          />
          <div className="hero__grid" aria-hidden="true" />
        </div>

        <div className="hero__panel">
          <p className="eyebrow">Fotovoltaika · Ostrava a Moravskoslezský kraj</p>
          <h1 id="hero-title" className="hero__title">
            Vaše střecha už<br />
            <span className="hero__accent">vyrábí proud.</span><br />
            Jen o tom zatím neví.
          </h1>
          <p className="hero__lead">
            Navrhneme, postavíme a připojíme chytrou elektrárnu na míru vašemu
            domu — s akumulací do baterie i do teplé vody, wallboxem a dotací
            vyřízenou za vás. Papírování si necháme na sebe.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#nabidka">Chci propočet zdarma</a>
            <a className="btn btn--ghost" href="mailto:info@fva-solar.cz">Napsat e-mail</a>
          </div>
        </div>

        <dl className="ticker" aria-label="Klíčová čísla">
          <div className="ticker__item">
            <dt>Úspora nákladů za energie</dt>
            <dd>až&nbsp;80&nbsp;%</dd>
          </div>
          <div className="ticker__item">
            <dt>Návratnost investice</dt>
            <dd>max.&nbsp;10&nbsp;let</dd>
          </div>
          <div className="ticker__item">
            <dt>Záruka na výkon panelů</dt>
            <dd>25&nbsp;let</dd>
          </div>
        </dl>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co pro vás postavíme</p>
          <h2 id="nabidka-title" className="section-title">
            Tři typy elektrárny.<br />Jeden podle toho, kam chcete slunce uložit.
          </h2>
        </div>

        <div className="typy">
          <article className="typ">
            <span className="typ__idx">A</span>
            <h3>Akumulace do baterie</h3>
            <p>
              Přebytky přes den uložíme do baterie a večer je spotřebujete
              doma. Část kapacity necháváme jako zálohu pro případný výpadek
              proudu — světlo i lednička běží dál.
            </p>
          </article>
          <article className="typ typ--featured">
            <span className="typ__idx">B</span>
            <h3>Akumulace do teplé vody</h3>
            <p>
              Přebytek z panelů posíláme do bojleru a ohříváme vodu zdarma.
              Nejlevnější cesta, jak ze slunce udělat úsporu, kterou poznáte
              hned na účtu za ohřev.
            </p>
          </article>
          <article className="typ">
            <span className="typ__idx">C</span>
            <h3>Bez akumulace</h3>
            <p>
              Vyrobenou elektřinu spotřebujete okamžitě, přebytky vykoupíme za
              férovou fixní nebo transparentní velkoobchodní cenu. Nejrychlejší
              start s nejnižší vstupní investicí.
            </p>
          </article>
        </div>

        <div className="servis">
          <img
            src="/section-1.webp"
            alt="Technici FVA Solar při montáži střešní fotovoltaické konstrukce"
            className="servis__img"
            width={900}
            height={600}
          />
          <div className="servis__body">
            <h3 className="servis__title">Kompletně od projektu po vyplacení dotace</h3>
            <ol className="kroky">
              <li>
                <span className="kroky__n">01</span>
                <div>
                  <strong>Online kalkulace a nabídka</strong>
                  <p>Pár kliknutí a máte předběžný propočet i naši cenu.</p>
                </div>
              </li>
              <li>
                <span className="kroky__n">02</span>
                <div>
                  <strong>Projekt a vyřízení dotace</strong>
                  <p>Návrh na míru střeše, žádost o dotaci řešíme za vás.</p>
                </div>
              </li>
              <li>
                <span className="kroky__n">03</span>
                <div>
                  <strong>Montáž, testování, připojení</strong>
                  <p>Postavíme elektrárnu a připojíme ji k distribuční síti.</p>
                </div>
              </li>
              <li>
                <span className="kroky__n">04</span>
                <div>
                  <strong>Výkup přebytků</strong>
                  <p>Přebytečnou elektřinu od vás vykoupíme bez starostí.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="den" id="den" aria-labelledby="den-title">
        <div className="section-head">
          <p className="eyebrow">Den s vlastní elektrárnou</p>
          <h2 id="den-title" className="section-title section-title--light">
            Od svítání do noci pracuje slunce za vás.
          </h2>
        </div>
        <ol className="denline">
          <li className="denline__item">
            <span className="denline__time">Ráno</span>
            <p>
              Za polojasna panely nevyrobí dost. Baterie se dobíjejí a chybějící
              energii doplníme z distribuční sítě.
            </p>
          </li>
          <li className="denline__item denline__item--peak">
            <span className="denline__time">Během dne</span>
            <p>
              Za pěkného počasí vyrobíte víc, než spotřebujete. Přebytek putuje
              do baterie nebo do ohřevu vody — síť teď nepotřebujete.
            </p>
          </li>
          <li className="denline__item">
            <span className="denline__time">Když se baterie vybije</span>
            <p>
              Přejdete zpět na síť. Část kapacity baterie ale držíme stranou pro
              případ výpadku proudu.
            </p>
          </li>
          <li className="denline__item denline__item--night">
            <span className="denline__time">Večer a v noci</span>
            <p>
              Bez slunce se nevyrábí. Doma běžíte z energie, kterou jste si přes
              den uložili do baterie.
            </p>
          </li>
        </ol>
      </section>

      <section className="zaruky" id="zaruky" aria-labelledby="zaruky-title">
        <div className="zaruky__grid">
          <div className="zaruky__intro">
            <p className="eyebrow eyebrow--dark">Za co ručíme</p>
            <h2 id="zaruky-title" className="section-title">
              Záruky, které přežijí i vaši hypotéku.
            </h2>
            <p className="zaruky__lead">
              Realizujeme fotovoltaiku na rodinných domech i komerčních
              budovách po celém Ostravsku — od projektu přes montáž až po
              údržbu. A pak za odvedenou práci stojíme roky dopředu.
            </p>
            <a className="btn btn--primary" href="tel:+420605494441">Chci konzultaci zdarma</a>
          </div>

          <dl className="zaruky__list" aria-label="Poskytované záruky">
            <div className="zar">
              <dt><span className="zar__num">25</span> let</dt>
              <dd>na výkon fotovoltaických panelů</dd>
            </div>
            <div className="zar">
              <dt><span className="zar__num">15</span> let</dt>
              <dd>na mechanické části panelů</dd>
            </div>
            <div className="zar">
              <dt><span className="zar__num">10</span> let</dt>
              <dd>na baterie</dd>
            </div>
            <div className="zar">
              <dt><span className="zar__num">5</span> let</dt>
              <dd>na střídač</dd>
            </div>
          </dl>
        </div>

        <figure className="vysledky">
          <img
            src="/section-2.webp"
            alt="Dokončená realizace fotovoltaické elektrárny na komerční budově"
            className="vysledky__img"
            width={1200}
            height={700}
          />
          <figcaption className="vysledky__cap">
            <strong>Mluví za nás výsledky.</strong> Naše realizace zblízka — na
            rodinných domech i komerčních budovách v Ostravě a okolí.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
