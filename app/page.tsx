export default function Page() {
  return (
    <main className="pos">
      {/* ===================== HERO ===================== */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#" aria-label="První olomoucká servisní">
            <span className="wm-num">1.</span>
            <span className="wm-text">
              olomoucká<br />servisní
            </span>
          </a>
          <a className="nav-tel" href="tel:+420608898007">
            <span className="nav-tel-label">Nonstop linka</span>
            <span className="nav-tel-num">608 898 007</span>
          </a>
        </nav>

        <div className="hero-body">
          <p className="hero-eyebrow">
            Sanace a rekonstrukce po požárech a povodních · celá ČR, základna Olomouc
          </p>

          <h1 className="hero-title">
            <span className="ht-line ht-1">Po požáru</span>
            <span className="ht-line ht-2">
              nemusíte řešit <em>nic.</em>
            </span>
            <span className="ht-line ht-3">Přijedeme my.</span>
          </h1>

          <p className="hero-lead">
            Vyhořelý byt, dům zasažený povodní, zakouřená provozovna. Zavoláte nám
            a od té chvíle je to naše starost — vyklidíme, vyčistíme, opravíme
            a domluvíme se za vás i s pojišťovnou.
          </p>

          <div className="hero-actions">
            <a className="btn-fire" href="tel:+420608898007">
              Zavolat hned: 608 898 007
            </a>
            <a className="btn-ghost" href="mailto:info@1olomouckaservisni.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* Signature: pás postupu — od spáleniště k hotovému domu */}
        <div className="burnline" aria-hidden="true">
          <div className="burnline-grad" />
        </div>
        <ol className="steps" aria-label="Jak postupujeme">
          <li className="step">
            <span className="step-dot dot-ash" aria-hidden="true" />
            <span className="step-name">Zavoláte</span>
            <span className="step-desc">Nonstop, i o víkendu</span>
          </li>
          <li className="step">
            <span className="step-dot dot-ember" aria-hidden="true" />
            <span className="step-name">Přijedeme</span>
            <span className="step-desc">Prohlídka a odhad zdarma</span>
          </li>
          <li className="step">
            <span className="step-dot dot-work" aria-hidden="true" />
            <span className="step-name">Vyklidíme</span>
            <span className="step-desc">Suť, saze, zničené vybavení</span>
          </li>
          <li className="step">
            <span className="step-dot dot-clean" aria-hidden="true" />
            <span className="step-name">Vyčistíme</span>
            <span className="step-desc">Odstranění zápachu a sazí</span>
          </li>
          <li className="step">
            <span className="step-dot dot-done" aria-hidden="true" />
            <span className="step-name">Opravíme</span>
            <span className="step-desc">Až po předání klíčů</span>
          </li>
        </ol>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="services" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co za vás vyřídíme</h2>
          <p className="section-sub">
            Jedna firma na celou škodní událost. Žádné obvolávání pěti řemeslníků
            a dohadování termínů — všechno jde přes nás.
          </p>
        </div>

        <div className="svc-grid">
          <article className="svc svc-main">
            <h3>Sanace po požáru</h3>
            <p>
              Kompletní obnova vyhořelých bytů, rodinných domů i firem. Zajistíme
              statické posouzení, vyklizení spáleniště, odstranění sazí a zápachu
              a rekonstrukci do původního — nebo lepšího — stavu.
            </p>
            <ul>
              <li>Vyklizení a odvoz suti včetně likvidace</li>
              <li>Čištění konstrukcí od sazí a dehtu</li>
              <li>Odstranění zápachu spáleniny (ozonizace)</li>
              <li>Nové omítky, podlahy, elektro, malby</li>
            </ul>
          </article>

          <article className="svc">
            <h3>Sanace po povodni</h3>
            <p>
              Vysušení zdiva a podlah, odstranění bahna a plísní, dezinfekce.
              Zasahujeme na celém území ČR, ne jen na Olomoucku.
            </p>
          </article>

          <article className="svc">
            <h3>Jednání s pojišťovnou</h3>
            <p>
              Nafotíme škody, připravíme rozpočet a dokumentaci pro pojistné
              plnění. S likvidátorem jednáme za vás — víme, na co máte nárok.
            </p>
          </article>

          <article className="svc">
            <h3>Rekonstrukce a stavební práce</h3>
            <p>
              Stavíme a rekonstruujeme i mimo škodní události. 15 let zkušeností
              ze stavebnictví využijete u bytu, domu i komerčního prostoru.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== DŮVĚRA / REFERENCE ===================== */}
      <section className="trust" aria-labelledby="duvera-h">
        <div className="trust-inner">
          <div className="trust-copy">
            <h2 id="duvera-h">
              Ryze česká firma,<br />15 let na stavbách
            </h2>
            <p>
              První olomoucká servisní s.r.o. vznikla ze zkušeností se sanacemi
              a výstavbou objektů ve stavebnictví. Pracujeme profesionálně,
              ale hlavně lidsky — víme, že vám zrovna shořel domov, a podle
              toho se k vám chováme.
            </p>
            <p>
              Ke každé zakázce přistupujeme individuálně: jiný postup potřebuje
              zakouřená kuchyň v paneláku a jiný vyhořelá střecha rodinného domu.
            </p>
            <dl className="facts">
              <div className="fact">
                <dt>Působnost</dt>
                <dd>celá ČR</dd>
              </div>
              <div className="fact">
                <dt>Zkušenosti</dt>
                <dd>15 let ve stavebnictví</dd>
              </div>
              <div className="fact">
                <dt>Dostupnost</dt>
                <dd>nonstop telefon</dd>
              </div>
            </dl>
          </div>

          <div className="refs">
            <h3 className="refs-title">Kde jsme pomáhali</h3>
            <article className="ref">
              <p className="ref-tag">Byty</p>
              <p className="ref-text">
                Sanace bytu po požáru kuchyně — vyklizení, ozonizace, nová
                elektroinstalace a kompletní rekonstrukce za 6 týdnů.
              </p>
            </article>
            <article className="ref">
              <p className="ref-tag">Rodinné domy</p>
              <p className="ref-text">
                Obnova RD po požáru krovu — nová střecha, stropy a fasáda,
                včetně kompletní dokumentace pro pojišťovnu.
              </p>
            </article>
            <article className="ref">
              <p className="ref-tag">Komerční prostory</p>
              <p className="ref-text">
                Vyčištění a rekonstrukce provozovny po zahoření skladu —
                firma mohla znovu otevřít bez dlouhé odstávky.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
