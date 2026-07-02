export default function Page() {
  return (
    <main className="aj">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-topbar">
          <a href="#" className="wordmark" aria-label="Autojeřáby Pavlíček – úvod">
            <span className="wordmark-hook" aria-hidden="true">
              <svg viewBox="0 0 24 40" width="18" height="30" role="presentation" focusable="false">
                <path d="M12 0v18" stroke="currentColor" strokeWidth="3" />
                <path d="M12 18c0 6-8 6-8 12s4 8 8 8 8-2 8-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            <span className="wordmark-text">
              AUTOJEŘÁBY<b>PAVLÍČEK</b>
            </span>
          </a>
          <a href="tel:+420475000000" className="hero-call">
            <span className="hero-call-dot" aria-hidden="true"></span>
            Zavolat dispečink
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Jeřábnické práce a nadrozměrná přeprava · Ústí nad Labem</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Zvedneme</span>
            <span className="hero-line hero-line-2">120&nbsp;tun.</span>
            <span className="hero-line hero-line-3">Do výšky 75&nbsp;metrů.</span>
          </h1>
          <p className="hero-sub">
            Čtyři autojeřáby Liebherr a flotila speciálních návěsů Goldhofer.
            Když se náklad nevejde na běžný kamion nebo ho potřebujete dostat
            na střechu, jsme tu my.
          </p>
          <div className="hero-actions">
            <a href="tel:+420475000000" className="btn btn-primary">Zavolat: 475 000 000</a>
            <a href="#stroje" className="btn btn-ghost">Prohlédnout stroje</a>
          </div>
        </div>

        {/* Signature: výložník jeřábu jako diagonální grafický prvek + nosnostní stupnice */}
        <div className="hero-boom" aria-hidden="true">
          <svg viewBox="0 0 600 600" preserveAspectRatio="xMaxYMax meet" role="presentation" focusable="false">
            {/* výložník – příhradová konstrukce */}
            <g className="boom-lattice" stroke="#FFC400" strokeWidth="5" fill="none">
              <path d="M600 600 L120 60" />
              <path d="M600 520 L180 140" />
              <path d="M600 600 L600 520" />
              <path d="M540 546 L540 466" />
              <path d="M480 492 L480 412" />
              <path d="M420 438 L420 358" />
              <path d="M360 384 L360 304" />
              <path d="M300 330 L300 250" />
              <path d="M240 276 L240 196" />
              <path d="M180 222 L180 140" />
              <path d="M600 520 L540 546 M540 466 L480 492 M480 412 L420 438 M420 358 L360 384 M360 304 L300 330 M300 250 L240 276 M240 196 L180 222" strokeWidth="3" />
            </g>
            {/* lano a hák */}
            <g className="boom-hook">
              <path d="M150 90 v150" stroke="#0E1B2C" strokeWidth="3" />
              <path d="M150 240 c0 16 -20 16 -20 32 s10 22 20 22 20 -6 20 -22" fill="none" stroke="#0E1B2C" strokeWidth="8" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        {/* nosnostní stupnice u paty hera */}
        <div className="hero-scale" aria-hidden="true">
          <span>0 t</span><span>25 t</span><span>35 t</span><span>80 t</span><span className="scale-max">120 t</span>
        </div>
      </header>

      {/* ===== SEKCE 1: STROJE / SLUŽBY ===== */}
      <section className="fleet" id="stroje" aria-labelledby="fleet-h">
        <div className="section-head">
          <h2 id="fleet-h">Stroje, které za nás mluví</h2>
          <p>
            Každou zakázku počítáme od nosnosti a vyložení. Řekněte nám, co
            zvedáte a kam — my vybereme jeřáb nebo návěs, který to unese
            s rezervou.
          </p>
        </div>

        <div className="fleet-grid">
          <article className="fleet-card">
            <div className="fleet-cap">
              <span className="fleet-cap-num">25<small>t</small></span>
              <span className="fleet-cap-bar" style={{ width: "22%" }}></span>
            </div>
            <h3>Liebherr LTM&nbsp;25</h3>
            <p>Do stísněných dvorů a městských ulic. Rychlé stavění, montáže klimatizací, výměny technologií na střechách.</p>
          </article>

          <article className="fleet-card">
            <div className="fleet-cap">
              <span className="fleet-cap-num">35<small>t</small></span>
              <span className="fleet-cap-bar" style={{ width: "30%" }}></span>
            </div>
            <h3>Liebherr LTM&nbsp;35 <em>· 2 stroje</em></h3>
            <p>Náš každodenní pracant, máme ho dvakrát. Skládání strojů, panely, vazníky — obvykle můžeme vyjet ještě týž den.</p>
          </article>

          <article className="fleet-card fleet-card-max">
            <div className="fleet-cap">
              <span className="fleet-cap-num">120<small>t</small></span>
              <span className="fleet-cap-bar" style={{ width: "100%" }}></span>
            </div>
            <h3>Liebherr LTM&nbsp;120</h3>
            <p>Vlajková loď. Výložník až 75 metrů — mostní nosníky, věže, sila, těžké technologické celky. Přijedeme s jeřábníkem i vazačem.</p>
          </article>

          <article className="fleet-card">
            <div className="fleet-cap">
              <span className="fleet-cap-num">80<small>t</small></span>
              <span className="fleet-cap-bar" style={{ width: "66%" }}></span>
            </div>
            <h3>Hlubinné návěsy Goldhofer</h3>
            <p>6osá a 4osá natahovací hlubina pro stroje do 80 tun. Bagry, frézy, transformátory — naložíme, ukotvíme, dovezeme.</p>
          </article>

          <article className="fleet-card">
            <div className="fleet-cap">
              <span className="fleet-cap-num">35<small>m</small></span>
              <span className="fleet-cap-bar" style={{ width: "48%" }}></span>
            </div>
            <h3>Nadrozměrné délky</h3>
            <p>Natahovací návěs až na 35 metrů délky nákladu. Vazníky, stožáry, potrubí. Povolení a doprovodná vozidla vyřídíme za vás.</p>
          </article>

          <article className="fleet-card">
            <div className="fleet-cap">
              <span className="fleet-cap-num">62<small>m³</small></span>
              <span className="fleet-cap-bar" style={{ width: "40%" }}></span>
            </div>
            <h3>Doprava a návěsy</h3>
            <p>Sklápěcí návěs 62 m³ na šrot, dvě plata, návěs s hydraulickou rukou a Mercedes 8×4 valník s HR. I běžný náklad vozíme pořádně.</p>
          </article>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / JAK PRACUJEME ===== */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-inner">
          <div className="trust-lead">
            <h2 id="trust-h">Rodinná firma z Ústí nad Labem</h2>
            <p>
              Zvedáme a vozíme po celém Ústeckém kraji i dál — Teplice, Děčín,
              Litoměřice, Most. Zákazníci se k nám vrací, protože přijedeme,
              kdy řekneme, a stroj má vždy rezervu nosnosti.
            </p>
          </div>

          <ol className="trust-steps">
            <li>
              <span className="step-label">Zavoláte</span>
              <p>Popíšete, co zvedáte nebo vezete, odkud a kam. Cenu vám řekneme rovnou do telefonu, ne za tři dny e-mailem.</p>
            </li>
            <li>
              <span className="step-label">Naplánujeme</span>
              <p>Vybereme stroj podle nosnosti a vyložení. U nadrozměru vyřídíme povolení, trasu i doprovodná vozidla.</p>
            </li>
            <li>
              <span className="step-label">Zvedneme a odvezeme</span>
              <p>Přijede jeřábník s praxí, který zná svůj stroj. Vazačské práce zajistíme, břemeno usadíme na centimetr.</p>
            </li>
          </ol>

          <ul className="trust-facts">
            <li>
              <strong>4</strong>
              <span>autojeřáby Liebherr připravené vyjet</span>
            </li>
            <li>
              <strong>80&nbsp;t</strong>
              <span>nejtěžší náklad na hlubinném návěsu</span>
            </li>
            <li>
              <strong>75&nbsp;m</strong>
              <span>maximální výška zdvihu s LTM 120</span>
            </li>
            <li>
              <strong>Ústí n.&nbsp;L.</strong>
              <span>základna — na stavbě v kraji do hodiny</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
