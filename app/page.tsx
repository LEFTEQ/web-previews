export default function Page() {
  return (
    <main className="gt">
      {/* ===== HERO ===== */}
      <header className="gt-hero">
        <div className="gt-hero__media">
          <img
            src="/hero.webp"
            alt="Fotovoltaické panely na střeše rodinného domu v Hradci Králové za slunečného dne"
            className="gt-hero__img"
          />
          <div className="gt-hero__shade" aria-hidden="true" />
        </div>

        <div className="gt-hero__inner">
          <div className="gt-topbar">
            <a href="#" className="gt-wordmark" aria-label="GIENGER Tábor — fotovoltaika, úvodní stránka">
              GIENGER<span className="gt-wordmark__dot">·</span><span className="gt-wordmark__sub">TÁBOR</span>
            </a>
            <a href="tel:800100680" className="gt-topbar__tel">
              800 100 680 <span className="gt-topbar__telnote">zdarma</span>
            </a>
          </div>

          <div className="gt-hero__content">
            <p className="gt-hero__eyebrow">Fotovoltaika pro montážní firmy · Hradec Králové</p>
            <h1 className="gt-hero__title">
              Střecha, která si na sebe <em>vydělá</em>.
            </h1>
            <p className="gt-hero__lead">
              Jsme odborný velkoobchod TZB s vlastním fotovoltaickým sortimentem. Panely,
              střídače, baterie i kompletní elektromateriál — skladem v Hradci Králové,
              s dodáním přímo na stavbu do druhého dne.
            </p>
            <div className="gt-hero__actions">
              <a href="#sortiment" className="gt-btn gt-btn--solar">Prohlédnout sortiment</a>
              <a href="#partnerstvi" className="gt-btn gt-btn--ghost">Proč přes GIENGER</a>
            </div>
          </div>

          {/* signature: sluneční pásmo — reálná bilance FVE dne v Hradci Králové */}
          <div className="gt-sunband" aria-label="Orientační výroba fotovoltaické elektrárny 10 kWp v Hradci Králové během dne">
            <div className="gt-sunband__track" aria-hidden="true">
              <span className="gt-sunband__bar" style={{ ['--h' as never]: '8%' }} />
              <span className="gt-sunband__bar" style={{ ['--h' as never]: '24%' }} />
              <span className="gt-sunband__bar" style={{ ['--h' as never]: '52%' }} />
              <span className="gt-sunband__bar" style={{ ['--h' as never]: '78%' }} />
              <span className="gt-sunband__bar gt-sunband__bar--peak" style={{ ['--h' as never]: '100%' }} />
              <span className="gt-sunband__bar" style={{ ['--h' as never]: '86%' }} />
              <span className="gt-sunband__bar" style={{ ['--h' as never]: '58%' }} />
              <span className="gt-sunband__bar" style={{ ['--h' as never]: '30%' }} />
              <span className="gt-sunband__bar" style={{ ['--h' as never]: '10%' }} />
            </div>
            <div className="gt-sunband__labels">
              <span>6:00</span>
              <span className="gt-sunband__peak">poledne — špička výroby FVE 10&nbsp;kWp: až 9,4&nbsp;kWh/h</span>
              <span>20:00</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: SORTIMENT ===== */}
      <section id="sortiment" className="gt-section gt-sortiment">
        <div className="gt-section__head">
          <p className="gt-eyebrow">Sortiment skladem</p>
          <h2 className="gt-h2">Vše pro FVE z jednoho skladu — od panelu po jistič</h2>
          <p className="gt-section__lead">
            Montážní firma nemá čas objíždět tři dodavatele. U nás naložíte kompletní
            elektrárnu najednou — a co není skladem v Hradci Králové, přivezeme do 24 hodin
            z logistického centra.
          </p>
        </div>

        <div className="gt-sortiment__grid">
          <figure className="gt-sortiment__media">
            <img
              src="/section-1.webp"
              alt="Sklad fotovoltaických panelů a střídačů ve velkoobchodu GIENGER Tábor"
              className="gt-img"
            />
            <figcaption className="gt-sortiment__caption">
              EXPRESS sklad Hradec Králové — výdej do hodiny od objednávky přes e-shop.
            </figcaption>
          </figure>

          <ul className="gt-cards">
            <li className="gt-card">
              <span className="gt-card__tag">Panely</span>
              <h3 className="gt-card__title">Fotovoltaické panely 410–580 Wp</h3>
              <p className="gt-card__text">
                Monokrystalické panely prověřených výrobců, včetně celočerných variant
                pro sedlové střechy. Paletové i kusové odběry.
              </p>
            </li>
            <li className="gt-card">
              <span className="gt-card__tag">Střídače a baterie</span>
              <h3 className="gt-card__title">Hybridní střídače 5–20 kW, bateriová úložiště</h3>
              <p className="gt-card__text">
                Sestavy připravené pro dotaci Nová zelená úsporám. K technice dodáme
                revizní podklady i technickou podporu při uvedení do provozu.
              </p>
            </li>
            <li className="gt-card">
              <span className="gt-card__tag">Konstrukce a montáž</span>
              <h3 className="gt-card__title">Konstrukce na tašku, plech i plochou střechu</h3>
              <p className="gt-card__text">
                Hliníkové profily, háky, svorky, kabeláž DC/AC, jističe a přepěťové
                ochrany. Spočítáme kusovník podle vaší střechy — pošlete půdorys.
              </p>
            </li>
            <li className="gt-card">
              <span className="gt-card__tag">FVE + tepelné čerpadlo</span>
              <h3 className="gt-card__title">Propojení se sortimentem topení</h3>
              <p className="gt-card__text">
                Jako velkoobchod TZB dodáme k elektrárně i tepelné čerpadlo a ohřev vody
                — přebytky ze střechy tak zákazník spotřebuje doma, ne v síti.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== SEKCE 2: PARTNERSTVÍ / DŮVĚRA ===== */}
      <section id="partnerstvi" className="gt-section gt-partner">
        <div className="gt-partner__grid">
          <div className="gt-partner__body">
            <p className="gt-eyebrow gt-eyebrow--light">Znak profesionálního partnerství</p>
            <h2 className="gt-h2 gt-h2--light">
              Přes 30 let zásobujeme řemeslníky. Fotovoltaika je další patro téhož domu.
            </h2>
            <p className="gt-partner__text">
              GIENGER Tábor je součástí evropské GC skupiny. Neprodáváme koncovým
              zákazníkům — pracujeme výhradně pro odborné montážní firmy, které elektrárnu
              nainstalují správně a se zárukou. Vy montujete, my hlídáme sklad, ceny
              a logistiku.
            </p>

            <dl className="gt-facts">
              <div className="gt-facts__item">
                <dt>Dodání na stavbu</dt>
                <dd>do 24 h vlastní dopravou po celých východních Čechách</dd>
              </div>
              <div className="gt-facts__item">
                <dt>Bonusový program</dt>
                <dd>body za každý odběr — odměny pro smluvní partnery GC skupiny</dd>
              </div>
              <div className="gt-facts__item">
                <dt>E-shop pro firmy</dt>
                <dd>skladová dostupnost, dodací listy a faktury online, nonstop</dd>
              </div>
              <div className="gt-facts__item">
                <dt>Školení montáží</dt>
                <dd>praktická školení FVE a tepelných čerpadel přímo na pobočce</dd>
              </div>
            </dl>

            <blockquote className="gt-quote">
              <p>
                „Ráno objednáme přes e-shop, odpoledne máme panely i konstrukci na střeše
                v Třebechovicích. Bez GIENGERU bychom deset elektráren měsíčně nestíhali.“
              </p>
              <cite>— elektromontážní firma, smluvní partner z Hradce Králové</cite>
            </blockquote>
          </div>

          <figure className="gt-partner__media">
            <img
              src="/section-2.webp"
              alt="Montážní technik připevňuje fotovoltaický panel na hliníkovou konstrukci střechy"
              className="gt-img"
            />
            <figcaption className="gt-partner__caption">
              Prodáváme jen přes montážní firmy — správná instalace je půlka výnosu elektrárny.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
