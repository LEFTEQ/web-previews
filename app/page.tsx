export default function Page() {
  return (
    <main>
      <section className="hero" aria-label="Úvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Velkoformátový tiskový plotr při tisku barevné reklamní grafiky, detail trysek a papíru"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true"></div>
        </div>
        <div className="hero-grid">
          <div className="hero-reg" aria-hidden="true">
            <span>C</span><span>M</span><span>Y</span><span>K</span>
          </div>
          <div className="hero-content">
            <p className="eyebrow">Design YES s.r.o. — Ústí nad Labem</p>
            <h1 className="wordmark">
              DESIGN<span className="wordmark-accent">YES</span>
            </h1>
            <p className="hero-lede">
              Grafické studio a tiskárna na severu Čech. Od vizitky po polep
              dodávky, od loga po billboard — navrhneme, vytiskneme
              a nalepíme to sami, na jednom místě.
            </p>
            <div className="hero-specimen" role="note" aria-label="Tisková specifikace">
              <span>1440 dpi</span>
              <span className="dot">·</span>
              <span>šířka tisku 160 cm</span>
              <span className="dot">·</span>
              <span>CMYK + Orange + Red</span>
            </div>
          </div>
        </div>
        <div className="crop-mark crop-tl" aria-hidden="true"></div>
        <div className="crop-mark crop-tr" aria-hidden="true"></div>
        <div className="crop-mark crop-bl" aria-hidden="true"></div>
        <div className="crop-mark crop-br" aria-hidden="true"></div>
      </section>

      <section className="services" aria-label="Naše služby">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Nabídka</p>
          <h2 className="section-title">Co u nás z tiskárny vyjede</h2>
          <p className="section-note">
            Čtyři obory, jeden tým. Grafiku vymyslíme, vytiskneme
            a doručíme, aniž byste museli obíhat tři různé firmy.
          </p>
        </div>

        <div className="service-list">
          <article className="service-row">
            <span className="service-tag" aria-hidden="true">Tisk</span>
            <div className="service-body">
              <h3>Reklamní agentura &amp; grafický design</h3>
              <p>
                Vizitky, firemní tiskoviny, plakáty, billboardy i 3D
                vizualizace. Kompletní tisková příprava od návrhu po
                finální soubor pro tiskárnu — někdy i naši vlastní.
              </p>
            </div>
          </article>

          <article className="service-row">
            <span className="service-tag" aria-hidden="true">Web</span>
            <div className="service-body">
              <h3>Webdesign, který funguje i na mobilu</h3>
              <p>
                Přes 80 % lidí si firmu prověří na webu dřív, než zavolá.
                Postavíme vám prezentaci, která se nerozpadne v kapse
                zákazníka — rychlou, čitelnou, aktuální.
              </p>
            </div>
          </article>

          <article className="service-row">
            <span className="service-tag" aria-hidden="true">160 cm</span>
            <div className="service-body">
              <h3>Velkoformátový a digitální tisk</h3>
              <p>
                Letáky, katalogy, brožury i plachty na fasádu. Tiskneme
                inkousty GS3 v CMYK + Orange + Red + White/Silver,
                v rozlišení 1440 dpi, na šířku 160 cm.
              </p>
            </div>
          </article>

          <article className="service-row">
            <span className="service-tag" aria-hidden="true">Polep</span>
            <div className="service-body">
              <h3>Polepy vozidel a reklamní předměty</h3>
              <p>
                Celopolepy i polepy skel „one vision“ pro vozový park
                i jedno auto. K tomu potisk textilu a předmětů —
                sítotisk, výšivka, gravírování, ražba.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="proof" aria-label="Reference a zázemí">
        <figure className="proof-figure">
          <img
            src="/section-1.webp"
            alt="Polepené firemní dodávkové auto s barevnou reklamní grafikou na karoserii"
          />
          <figcaption>Celopolep dodávky — branding na kolech, ne jen na papíře.</figcaption>
        </figure>

        <div className="proof-copy">
          <p className="eyebrow eyebrow-dark">Proč Design YES</p>
          <h2 className="section-title">
            Ústecká firma, která si za svou prací stojí od roku 2004
          </h2>
          <p className="section-note">
            Nejsme velké studio z Prahy — jsme tým, který znáte pod jménem
            a se kterým si po telefonu domluvíte i drobnou opravu grafiky
            do zítřka. Sídlíme v Chlumci u Ústí nad Labem, tiskneme
            a lepíme po celém kraji.
          </p>

          <ul className="proof-list">
            <li>
              <strong>Realizace na míru.</strong> Od loga po polep vozového
              parku — Tenerife Facility, Penzion Solid Spa, RD Solar,
              PAMPAM nebo Casino Imperial už u nás grafiku i tisk měli.
            </li>
            <li>
              <strong>Jeden kontakt, celá zakázka.</strong> Obchod i DTP
              studio zvednou telefon přímo, bez přepojování na centrálu.
            </li>
            <li>
              <strong>Vlastní výroba.</strong> Grafiku i tisk děláme pod
              jednou střechou, takže víme, co se vejde do 160 cm a co ne.
            </li>
          </ul>

          <figure className="proof-figure proof-figure-inline">
            <img
              src="/section-2.webp"
              alt="Ukázka velkoformátového tisku a reklamních materiálů ze studia Design YES"
            />
            <figcaption>Z dílny ven — plakát, billboard, výstavní panel.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
