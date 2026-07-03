export default function Page() {
  return (
    <main className="it-page">
      {/* ===== HERO ===== */}
      <header className="it-hero">
        <div className="it-shell it-hero-grid">
          <div className="it-hero-top">
            <span className="it-wordmark" aria-label="InVoTop">
              In<span className="it-wm-vo">Vo</span>Top
              <span className="it-wm-sub">topenářství · voda · plyn</span>
            </span>
            <a className="it-hero-tel" href="tel:+420602000000">
              <span className="it-tel-label">Zavolat hned</span>
              <span className="it-tel-num">602 000 000</span>
            </a>
          </div>

          <div className="it-hero-main">
            <p className="it-eyebrow">České Budějovice a okolí — montáže, opravy, rekonstrukce</p>
            <h1 className="it-h1">
              <span className="it-h1-line it-h1-line-1">Topení,</span>
              <span className="it-h1-line it-h1-line-2">voda <span className="it-amp">&amp;</span> plyn</span>
              <span className="it-h1-line it-h1-line-3">bez starostí.</span>
            </h1>
            <p className="it-lede">
              Tři rozvody drží váš dům pohromadě. Navrhneme je, namontujeme,
              opravíme — včetně materiálu, revize a úklidu po sobě. Vy jen otočíte kohoutkem.
            </p>
            <div className="it-hero-cta">
              <a className="it-btn it-btn-primary" href="tel:+420602000000">Zavolat topenáři</a>
              <a className="it-btn it-btn-ghost" href="#sluzby">Co všechno děláme</a>
            </div>
          </div>

          {/* Signature: schéma tří okruhů jako v projekci topenáře */}
          <div className="it-pipes" aria-hidden="true">
            <svg viewBox="0 0 360 560" preserveAspectRatio="xMidYMid meet" role="presentation">
              {/* okruh TOPENÍ — červená */}
              <path className="it-pipe it-pipe-heat" d="M40 560 V300 q0 -24 24 -24 h120 q24 0 24 -24 V60 q0 -24 24 -24 h128" />
              <circle className="it-valve it-valve-heat" cx="40" cy="300" r="9" />
              <circle className="it-valve it-valve-heat" cx="208" cy="120" r="9" />
              {/* okruh VODA — modrá */}
              <path className="it-pipe it-pipe-water" d="M130 560 V400 q0 -24 24 -24 h100 q24 0 24 -24 V160 q0 -24 24 -24 h58" />
              <circle className="it-valve it-valve-water" cx="130" cy="440" r="9" />
              <circle className="it-valve it-valve-water" cx="278" cy="200" r="9" />
              {/* okruh PLYN — žlutá (norma ČSN: plynovod se značí žlutě) */}
              <path className="it-pipe it-pipe-gas" d="M220 560 V480 q0 -24 24 -24 h52 q24 0 24 -24 V260" />
              <circle className="it-valve it-valve-gas" cx="320" cy="340" r="9" />
              {/* radiátor nahoře — cíl okruhu */}
              <g className="it-radiator">
                <rect x="296" y="20" width="12" height="44" rx="6" />
                <rect x="314" y="20" width="12" height="44" rx="6" />
                <rect x="332" y="20" width="12" height="44" rx="6" />
              </g>
            </svg>
          </div>

          <ul className="it-hero-strip" aria-label="Tři profese pod jednou střechou">
            <li><span className="it-dot it-dot-heat" aria-hidden="true"></span>Topení</li>
            <li><span className="it-dot it-dot-water" aria-hidden="true"></span>Voda a kanalizace</li>
            <li><span className="it-dot it-dot-gas" aria-hidden="true"></span>Plyn</li>
          </ul>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="it-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="it-shell">
          <h2 className="it-h2" id="sluzby-h">Tři okruhy, jedna parta</h2>
          <p className="it-section-lede">
            U nás nekoordinujete tři řemeslníky. Rozvody topení, vody i plynu vám
            uděláme naráz — od projektu po tlakovou zkoušku.
          </p>

          <div className="it-cards">
            <article className="it-card it-card-heat">
              <div className="it-card-head">
                <span className="it-card-pipe" aria-hidden="true"></span>
                <h3>Topení</h3>
              </div>
              <p>
                Kompletní topné systémy v bytech, rodinných domech i průmyslových
                halách. Radiátory, podlahové topení, výměny kotlů, odvzdušnění
                a seřízení soustavy před zimou.
              </p>
              <ul className="it-card-list">
                <li>Montáž a výměna radiátorů</li>
                <li>Podlahové topení</li>
                <li>Servis a seřízení soustavy</li>
              </ul>
            </article>

            <article className="it-card it-card-water">
              <div className="it-card-head">
                <span className="it-card-pipe" aria-hidden="true"></span>
                <h3>Voda a kanalizace</h3>
              </div>
              <p>
                Rozvody vodovodů a kanalizace v novostavbách, bytových domech
                i halách. Opravíme a zrekonstruujeme i staré rozvody — třeba
                jen jednu stoupačku nebo kapající kohoutek.
              </p>
              <ul className="it-card-list">
                <li>Nové rozvody vody v novostavbách</li>
                <li>Rekonstrukce bytových jader</li>
                <li>Opravy a drobné instalatérské zásahy</li>
              </ul>
            </article>

            <article className="it-card it-card-gas">
              <div className="it-card-head">
                <span className="it-card-pipe" aria-hidden="true"></span>
                <h3>Plyn</h3>
              </div>
              <p>
                Plynovody v bytech, rodinných domech i průmyslových objektech.
                Vždy podle platných norem, s tlakovou zkouškou a revizní zprávou —
                u plynu neexistuje „skoro těsné“.
              </p>
              <ul className="it-card-list">
                <li>Nové rozvody plynu</li>
                <li>Připojení spotřebičů a kotlů</li>
                <li>Tlakové zkoušky a revize</li>
              </ul>
            </article>
          </div>

          <p className="it-services-note">
            <strong>Materiál řešíme my.</strong> Ke každé zakázce zajistíme trubky,
            armatury i spotřebiče — nemusíte nic objednávat ani vozit. Bereme velké
            stavby i drobné opravy na půl dne.
          </p>
        </div>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="it-trust" aria-labelledby="duvera-h">
        <div className="it-shell it-trust-grid">
          <div className="it-trust-copy">
            <h2 className="it-h2" id="duvera-h">Řemeslo z Českých Budějovic</h2>
            <p>
              InVoTop je topenářská firma z Českých Budějovic. Jezdíme po celém
              jihu Čech — od Hluboké po Kaplici — a většina nových zakázek k nám
              přichází na doporučení od sousedů a stavbyvedoucích, se kterými už
              jsme pracovali.
            </p>
            <p>
              Přijedeme, kdy řekneme. Naceníme předem, ne až po práci. A když
              najdeme levnější řešení, než jste čekali, řekneme vám to — spokojený
              zákazník se vrací, a na tom naše firma stojí.
            </p>
          </div>

          <ul className="it-facts" aria-label="Proč zákazníci volají nám">
            <li className="it-fact">
              <span className="it-fact-key">Cena předem</span>
              <span className="it-fact-val">Rozpočet dostanete před začátkem práce. Bez položek navíc na faktuře.</span>
            </li>
            <li className="it-fact">
              <span className="it-fact-key">Norma a záruka</span>
              <span className="it-fact-val">Pracujeme podle platných ČSN, na plyn dostanete revizní zprávu, na práci záruku.</span>
            </li>
            <li className="it-fact">
              <span className="it-fact-key">Velké i malé</span>
              <span className="it-fact-val">Bytový dům se čtyřiceti stoupačkami i výměna jednoho ventilu. Obojí bereme vážně.</span>
            </li>
            <li className="it-fact">
              <span className="it-fact-key">Uklizeno po nás</span>
              <span className="it-fact-val">Odvezeme starý kotel, suť i obaly. Odcházíme z čistého bytu.</span>
            </li>
          </ul>

          <figure className="it-quote">
            <blockquote>
              „Během rekonstrukce jádra nám vyměnili rozvody vody i plynu za čtyři
              dny. Domluvené datum, domluvená cena, večer zameteno. Tak si
              představuju řemeslo.“
            </blockquote>
            <figcaption>— rodina Novotných, bytový dům Pražská tř., České Budějovice</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
