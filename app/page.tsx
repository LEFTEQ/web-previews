export default function Page() {
  return (
    <main className="vb">
      {/* HERO ------------------------------------------------------- */}
      <header className="vb-hero">
        <img
          className="vb-hero__img"
          src="/hero.webp"
          alt="Servisní hala s nákladním vozem IVECO na zvedáku"
        />
        <div className="vb-hero__veil" aria-hidden="true" />

        <nav className="vb-topbar" aria-label="Hlavní">
          <a className="vb-mark" href="#">
            VOPRAVIL <span className="vb-mark__amp">&amp;</span> BUŠKO
            <span className="vb-mark__sub">v.&nbsp;o.&nbsp;s. — autoservis IVECO</span>
          </a>
          <span className="vb-plate">IČ&nbsp;48203793 · ČESKÉ&nbsp;BUDĚJOVICE</span>
        </nav>

        <div className="vb-hero__body">
          <p className="vb-eyebrow">Nezávislý servis užitkových a nákladních vozů · od roku 1991</p>
          <h1 className="vb-h1">
            Těžká technika<br />
            <span className="vb-h1__hi">v rukou, které ji znají.</span>
          </h1>
          <p className="vb-lede">
            Přes třicet let opravujeme IVECO i ostatní užitkové a nákladní vozy
            v Českých Budějovicích. Motory, převodovky a diferenciály řešíme
            přímo u nás na dílně — nic neposíláme jinam.
          </p>
          <div className="vb-hero__cta">
            <a className="vb-btn" href="tel:+420603455574">Zavolat do servisu</a>
            <a className="vb-link" href="#provozy">Dva provozy v centru ↓</a>
          </div>
        </div>

        <dl className="vb-specs">
          <div><dt>Specializace</dt><dd>IVECO</dd></div>
          <div><dt>Na dílně</dt><dd>motory · převodovky · diferenciály</dd></div>
          <div><dt>Díly</dt><dd>většinu držíme skladem</dd></div>
        </dl>
      </header>

      {/* SEKCE 1 — PROVOZY / SLUŽBY -------------------------------- */}
      <section className="vb-sec vb-sec--work" id="provozy" aria-labelledby="s1">
        <div className="vb-sec__head">
          <p className="vb-tag">Dva provozy / Co umíme</p>
          <h2 className="vb-h2" id="s1">Servis a prodejna — pár ulic od sebe</h2>
        </div>

        <article className="vb-prov">
          <div className="vb-prov__media">
            <span className="vb-no">01</span>
            <img src="/section-1.webp" alt="Mechanik při opravě podvozku nákladního vozu v dílně" />
          </div>
          <div className="vb-prov__text">
            <h3 className="vb-h3">Autoservis — Suchomelská</h3>
            <p>
              Halu na Suchomelské jsme postavili v roce 2005, abychom vás
              odbavili rychleji. Od drobných oprav po zásahy, které potřebují
              technické vybavení a hlavu na svém místě.
            </p>
            <ul className="vb-list">
              <li>Mechanické, karosářské a elektrikářské práce</li>
              <li>Originál diagnostika elektronických závad</li>
              <li>Měření a seřízení geometrie</li>
              <li>Přezutí a vyvážení pneumatik</li>
              <li>Záruční opravy podle pokynů výrobce — bez ztráty záruky</li>
            </ul>
            <p className="vb-addr">
              Suchomelská 2746/38, 370 10 České Budějovice<br />
              <span className="vb-mono">Po–pá 07:00–18:00 · so 08:00–12:00 · tel. 603 455 574</span>
            </p>
          </div>
        </article>

        <article className="vb-prov vb-prov--flip">
          <div className="vb-prov__media">
            <span className="vb-no">02</span>
            <img src="/section-2.webp" alt="Regály s náhradními díly v prodejně autodílů" />
          </div>
          <div className="vb-prov__text">
            <h3 className="vb-h3">Prodejna autodílů — Dlouhá</h3>
            <p>
              Díly na české i evropské značky máme z velké části skladem.
              Co nemáme, objednáme při včasné objednávce ještě ten den nebo
              do druhého dne. Zaparkujete přímo před prodejnou.
            </p>
            <ul className="vb-list">
              <li>Náhradní díly, příslušenství a povinná výbava</li>
              <li>Poradíme s výběrem nebo vše objednáme</li>
              <li>Rozvoz zboží k zákazníkům</li>
              <li>Kontrola nabití autobaterie i hustoty nemrznoucí kapaliny</li>
              <li>Sleva při odběru zboží nad 5 000 Kč</li>
            </ul>
            <p className="vb-addr">
              Dlouhá 2, 370 05 České Budějovice<br />
              <span className="vb-mono">Po–pá 08:30–17:00 · tel. 603 879 336</span>
            </p>
          </div>
        </article>
      </section>

      {/* SEKCE 2 — O NÁS / DŮVĚRA ---------------------------------- */}
      <section className="vb-sec vb-sec--about" aria-labelledby="s2">
        <div className="vb-sec__head">
          <p className="vb-tag">O nás</p>
          <h2 className="vb-h2" id="s2">Od roku 1991 stejná dílna, stejné jméno</h2>
        </div>

        <div className="vb-time">
          <p className="vb-time__lead">
            Začínali jsme jako specializovaný servis a prodej nákladních
            a užitkových IVECO. Zákazníci se k nám vracejí, protože vědí,
            kdo jim auto opravuje.
          </p>
          <ol className="vb-mile">
            <li><span className="vb-mono">1991</span> Vznik firmy — servis a prodej IVECO</li>
            <li><span className="vb-mono">1997</span> Otevíráme prodejnu dílů na osobní vozy i celou řadu IVECO</li>
            <li><span className="vb-mono">2005</span> Nová servisní hala na Suchomelské pro rychlejší odbavení</li>
            <li><span className="vb-mono">dnes</span> Zkušený tým mechaniků a díly skladem na jednom místě</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
