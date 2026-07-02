export default function Page() {
  return (
    <main className="vc">
      {/* ===== HERO ===== */}
      <header className="vc-hero">
        <div className="vc-hero__media">
          <img
            src="/hero.webp"
            alt="Silniční kolo Specialized opřené o pult prodejny Velocentrum v Praze"
            className="vc-hero__img"
          />
          <div className="vc-hero__shade" aria-hidden="true" />
        </div>

        <div className="vc-hero__inner">
          <div className="vc-topbar">
            <span className="vc-wordmark">
              VELO<span className="vc-wordmark__spoke">/</span>CENTRUM
            </span>
            <a href="tel:+420736777255" className="vc-topbar__tel">
              736 777 255 · Praha
            </a>
          </div>

          <div className="vc-hero__copy">
            <p className="vc-eyebrow">Specialized Concept Store — Praha</p>
            <h1 className="vc-hero__title">
              Kolo si tu <em>osaháte</em>,<br />
              ne jen proklikáte.
            </h1>
            <p className="vc-hero__lead">
              Největší prodejce kol Specialized v Česku. Přijďte si sednout na
              Tarmac, vyzkoušet elektrokolo Turbo Levo v provozu a odjet na
              kole, které vám opravdu sedí — geometrií, velikostí i posedem.
            </p>
            <div className="vc-hero__actions">
              <a href="#kola" className="vc-btn vc-btn--solid">
                Prohlédnout kola
              </a>
              <a href="#servis" className="vc-btn vc-btn--ghost">
                Objednat servis
              </a>
            </div>
          </div>

          {/* signature: velikostní pravítko — z tabulky velikostí, DNA cykloprodejny */}
          <div className="vc-ruler" aria-label="Rámy skladem ve velikostech S až XL">
            <span className="vc-ruler__label">Rámy skladem</span>
            <ol className="vc-ruler__scale">
              <li className="vc-ruler__tick"><b>S</b><i>158–168&nbsp;cm</i></li>
              <li className="vc-ruler__tick"><b>M</b><i>168–178&nbsp;cm</i></li>
              <li className="vc-ruler__tick"><b>L</b><i>178–188&nbsp;cm</i></li>
              <li className="vc-ruler__tick"><b>XL</b><i>188–198&nbsp;cm</i></li>
            </ol>
            <span className="vc-ruler__note">Změříme vás na prodejně zdarma</span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: KOLA / NABÍDKA ===== */}
      <section className="vc-section" id="kola">
        <div className="vc-section__head">
          <p className="vc-eyebrow">Nabídka</p>
          <h2 className="vc-h2">
            Od dětského šestnáctipalce
            <br />
            po karbonový Tarmac SL9
          </h2>
          <p className="vc-section__lead">
            Vedeme kompletní řadu Specialized. Každé kolo před předáním
            sestavíme, seřídíme a nastavíme posed přesně na vaši postavu.
          </p>
        </div>

        <div className="vc-grid">
          <figure className="vc-grid__media">
            <img
              src="/section-1.webp"
              alt="Řada horských a silničních kol Specialized na stojanech v prodejně"
              className="vc-img"
            />
            <figcaption className="vc-grid__caption">
              Přes 200 kol skladem k okamžitému vyzkoušení
            </figcaption>
          </figure>

          <ul className="vc-cats">
            <li className="vc-cat">
              <span className="vc-cat__tag">MTB</span>
              <h3 className="vc-cat__name">Horská kola</h3>
              <p className="vc-cat__desc">
                Rockhopper na první traily i celoodpružený Epic na závody.
                Devětadvacítky skladem ve všech velikostech.
              </p>
              <span className="vc-cat__price">od 14 900 Kč</span>
            </li>
            <li className="vc-cat">
              <span className="vc-cat__tag">ROAD</span>
              <h3 className="vc-cat__name">Silniční kola</h3>
              <p className="vc-cat__desc">
                Allez pro začátek, Tarmac SL9 pro ty, co počítají watty.
                Posed nastavíme na trenažéru přímo v prodejně.
              </p>
              <span className="vc-cat__price">od 32 990 Kč</span>
            </li>
            <li className="vc-cat">
              <span className="vc-cat__tag">E-BIKE</span>
              <h3 className="vc-cat__name">Elektrokola</h3>
              <p className="vc-cat__desc">
                Turbo Levo a Turbo Vado s dojezdem přes 100 km. Testovací
                kusy půjčujeme na vyjížďku — vraťte se až po kopci.
              </p>
              <span className="vc-cat__price">od 89 990 Kč</span>
            </li>
            <li className="vc-cat">
              <span className="vc-cat__tag">KIDS</span>
              <h3 className="vc-cat__name">Dětská kola</h3>
              <p className="vc-cat__desc">
                Riprock od 16 palců výš. Poradíme velikost, ze které dítě
                hned nevyroste — a starší kolo vezmeme na protiúčet.
              </p>
              <span className="vc-cat__price">od 8 490 Kč</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== SEKCE 2: SERVIS + DŮVĚRA ===== */}
      <section className="vc-section vc-section--dark" id="servis">
        <div className="vc-grid vc-grid--flip">
          <figure className="vc-grid__media">
            <img
              src="/section-2.webp"
              alt="Mechanik seřizuje přehazovačku kola upnutého v montážním stojanu servisu Velocentrum"
              className="vc-img"
            />
            <figcaption className="vc-grid__caption vc-grid__caption--light">
              Autorizovaný servis Specialized — dílna přímo v prodejně
            </figcaption>
          </figure>

          <div className="vc-service">
            <p className="vc-eyebrow vc-eyebrow--light">Servis a důvěra</p>
            <h2 className="vc-h2 vc-h2--light">
              Mechanik, který vaše kolo zná jménem
            </h2>
            <p className="vc-service__lead">
              Jsme autorizovaný servis Specialized. Kolo od nás neodjíždí,
              dokud ho mechanik sám neprojede. Běžný servis do tří pracovních
              dnů, o sezóně vypsané termíny — objednáte se telefonicky.
            </p>

            <ul className="vc-service__list">
              <li>
                <b>Garanční prohlídky</b> — první seřízení po záběhu máte u
                kola od nás zdarma.
              </li>
              <li>
                <b>Diagnostika elektrokol</b> — originální software Specialized,
                aktualizace motoru i baterie na počkání.
              </li>
              <li>
                <b>Centrování a výplet kol</b> — ručně, na centrovací stolici,
                ne „utáhnout a poslat“.
              </li>
              <li>
                <b>Bike fitting</b> — změříme posed, vyměníme představec či
                sedlo a bolavá záda nechají spát.
              </li>
            </ul>

            <div className="vc-proof">
              <div className="vc-proof__item">
                <span className="vc-proof__num">č.&nbsp;1</span>
                <span className="vc-proof__label">
                  největší prodejce Specialized v ČR
                </span>
              </div>
              <div className="vc-proof__item">
                <span className="vc-proof__num">5</span>
                <span className="vc-proof__label">
                  kamenných prodejen po Česku
                </span>
              </div>
              <div className="vc-proof__item">
                <span className="vc-proof__num">25+</span>
                <span className="vc-proof__label">
                  let prodáváme a servisujeme kola
                </span>
              </div>
            </div>

            <blockquote className="vc-quote">
              <p>
                „Přišel jsem pro plášť, odešel jsem s nastaveným posedem a
                radou, kterou mi nikdo v e-shopu nedá. Tarmac jsem si tu
                nakonec koupil taky.“
              </p>
              <cite>— Martin K., silničář z Prahy 6</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
