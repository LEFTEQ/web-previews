// 2000 On-Line s.r.o. — cukrárna, Ústí nad Labem
// Redesign: točená zmrzlina jako vizuální jádro (firma prodává a servisuje zmrzlinové stroje,
// distribuuje směsi, vede e-shop s moravským vínem). Signature: typografický "vír" točené zmrzliny.

export default function Page() {
  return (
    <main className="ol">
      {/* ============ HERO ============ */}
      <header className="hero">
        <nav className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#" aria-label="2000 On-Line, úvod">
            <span className="wm-2000">2000</span>
            <span className="wm-swirl" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" role="presentation">
                <path d="M12 2c4 0 7 2.6 7 6 0 2.8-2.2 5-5 5 -2.2 0-4-1.8-4-4 0-1.7 1.3-3 3-3 1.3 0 2.3 1 2.3 2.2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M9.5 14.5 12 22l2.5-7.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="wm-online">on-line</span>
          </a>
          <a className="topbar-call" href="tel:+420603501721">
            <span className="topbar-call-label">Zákaznická linka</span>
            <span className="topbar-call-num">603 501 721</span>
          </a>
        </nav>

        <div className="hero-inner">
          <p className="hero-eyebrow">Zmrzlinové stroje · směsi · servis — Ústí nad Labem</p>
          <h1 className="hero-title">
            <span className="ht-line ht-1">Točíme to tu</span>
            <span className="ht-line ht-2">od roku <em>2000</em>.</span>
          </h1>
          <p className="hero-lead">
            Prodáme, pronajmeme nebo zaleasujeme vám stroj na točenou zmrzlinu,
            dovezeme směsi a když se stroj zadrhne uprostřed sezóny, přijedeme ho spravit.
            Od Ústí nad Labem po celé severní Čechy.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420603501721">Zavolat 603 501 721</a>
            <a className="btn btn-ghost" href="#sluzby">Co pro vás uděláme</a>
          </div>
        </div>

        {/* Signature: velký typografický vír točené zmrzliny */}
        <div className="swirl-stage" aria-hidden="true">
          <svg className="swirl" viewBox="0 0 400 520" role="presentation">
            {/* kornout */}
            <path className="sw-cone" d="M120 300 L200 510 L280 300 Z" />
            {/* vaflová mřížka */}
            <g className="sw-waffle">
              <path d="M135 340 L245 460 M155 300 L265 420 M185 300 L280 405 M215 300 L280 372" />
              <path d="M265 340 L155 460 M245 300 L135 420 M215 300 L122 402 M185 300 L120 372" />
            </g>
            {/* točené patro po patru — sekvence dole → nahoru, přesně jak stroj točí */}
            <g className="sw-scoop">
              <path className="sw-r sw-r1" d="M110 292 h180 a14 14 0 0 0 0 -28 h-176" />
              <path className="sw-r sw-r2" d="M118 258 h168 a14 14 0 0 0 0 -28 h-160" />
              <path className="sw-r sw-r3" d="M130 224 h146 a14 14 0 0 0 0 -28 h-136" />
              <path className="sw-r sw-r4" d="M144 190 h120 a14 14 0 0 0 0 -28 h-108" />
              <path className="sw-r sw-r5" d="M160 156 h90 a13 13 0 0 0 0 -26 h-76" />
              <path className="sw-r sw-r6" d="M178 124 h58 a12 12 0 0 0 0 -24 h-40" />
              <path className="sw-tip" d="M196 96 q14 -4 12 -18 q-2 -12 -14 -10" />
            </g>
          </svg>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Stroj, směs, servis. Všechno na jednom čísle.</h2>
          <p>
            Ať otevíráte okénko se zmrzlinou, provozujete cukrárnu nebo bistro —
            postaráme se o celý provoz točené zmrzliny, od stroje po poslední kornout.
          </p>
        </div>

        <div className="service-grid">
          <article className="card">
            <div className="card-badge" aria-hidden="true">Prodej · pronájem · leasing</div>
            <h3>Stroje na točenou zmrzlinu</h3>
            <p>
              Vybereme stroj podle toho, kolik porcí denně točíte. Nový na leasing,
              nebo pronájem jen na sezónu — u okénka nemusí stát stroj za statisíce hned první léto.
            </p>
            <p className="card-note">Zaškolíme obsluhu přímo u vás na provozovně.</p>
          </article>

          <article className="card">
            <div className="card-badge" aria-hidden="true">Záruční i pozáruční</div>
            <h3>Servis, který nenechá frontu čekat</h3>
            <p>
              Zadřený kompresor v červenci znamená prázdnou kasu. Držíme běžné náhradní
              díly skladem a v sezóně jezdíme po severních Čechách přednostně.
            </p>
            <p className="card-note">Poradíme i po telefonu — často to vyřešíme na dálku.</p>
          </article>

          <article className="card">
            <div className="card-badge" aria-hidden="true">Rozvoz po regionu</div>
            <h3>Směsi na točenou zmrzlinu</h3>
            <p>
              Vanilka, čokoláda, jogurt i ovocné sorbety. Distribuujeme osvědčené směsi,
              se kterými má zmrzlina stálou konzistenci a chuť celou sezónu.
            </p>
            <p className="card-note">Objednávky vozíme pravidelně, stačí zavolat.</p>
          </article>

          <article className="card card-wine">
            <div className="card-badge" aria-hidden="true">Když skončí sezóna</div>
            <h3>Moravská vína a stojany na víno</h3>
            <p>
              Druhá noha naší firmy: e-shop se stojany na víno vlastní výroby
              a lahve z vinařství Vitis na jižní Moravě. Do cukrárny i domů.
            </p>
            <p className="card-note">Stojany vyrábíme na míru — na dvě lahve i na celý sklep.</p>
          </article>
        </div>
      </section>

      {/* ============ DŮVĚRA ============ */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-inner">
          <div className="trust-copy">
            <h2 id="trust-h">Malá firma z Ústí, která zvedá telefon.</h2>
            <p>
              Jsme rodinná firma, ne call centrum. Když v sobotu odpoledne přestane
              stroj chladit, voláte přímo člověku, který ho umí opravit. Za pětadvacet
              let jsme prošli desítky okének, cukráren a koupališť po celých severních
              Čechách — a většina z nich u nás bere směsi dodnes.
            </p>
            <blockquote className="trust-quote">
              <p>
                „Stroj nám vypadl v pátek před poutí. V sobotu ráno byl technik u nás
                a odpoledne jsme točili. To vám velkoobchod z druhého konce republiky neudělá.“
              </p>
              <footer>— provozovatelka okénka se zmrzlinou, Litoměřice</footer>
            </blockquote>
          </div>

          <dl className="trust-facts">
            <div className="fact">
              <dt>Na trhu</dt>
              <dd>od roku 2000</dd>
            </div>
            <div className="fact">
              <dt>Servisní region</dt>
              <dd>severní Čechy, výjezd z Ústí nad Labem</dd>
            </div>
            <div className="fact">
              <dt>Náhradní díly</dt>
              <dd>běžné díly držíme skladem</dd>
            </div>
            <div className="fact">
              <dt>Jedno číslo na všechno</dt>
              <dd><a href="tel:+420603501721">603 501 721</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
