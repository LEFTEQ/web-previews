export default function Page() {
  return (
    <main className="vr-page">
      {/* ===================== HERO ===================== */}
      <header className="vr-hero">
        <div className="vr-hero-top">
          <div className="vr-wordmark" aria-label="Agentura Varia">
            <span className="vr-wordmark-agentura">Agentura</span>
            <span className="vr-wordmark-varia">VARIA</span>
          </div>
          <nav className="vr-hero-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#duvera">Proč Varia</a>
            <a href="tel:+420466000000" className="vr-nav-tel">466 000 000</a>
          </nav>
        </div>

        <div className="vr-hero-body">
          <p className="vr-hero-eyebrow">Úklidové služby · Pardubice · od roku 1995</p>
          <h1 className="vr-hero-title">
            <span className="vr-line vr-line-1">Špína</span>
            <span className="vr-line vr-line-2 vr-line-clean">odchází.</span>
            <span className="vr-line vr-line-3">Lesk</span>
            <span className="vr-line vr-line-4 vr-line-clean">zůstává.</span>
          </h1>
          <p className="vr-hero-sub">
            Uklízíme kanceláře, bytové domy a provozy po celých Pardubicích.
            Přijedeme, uklidíme, zkontrolujeme — a vy máte čisto, aniž byste na to museli myslet.
          </p>
          <div className="vr-hero-cta">
            <a className="vr-btn vr-btn-primary" href="tel:+420466000000">Zavolat: 466 000 000</a>
            <a className="vr-btn vr-btn-ghost" href="mailto:info@agenturavaria.cz">Napsat e‑mail</a>
          </div>
        </div>

        {/* Signature: stěrka projíždí heroem — čistý pruh v "mokré" ploše */}
        <div className="vr-squeegee" aria-hidden="true">
          <div className="vr-squeegee-clean"></div>
          <div className="vr-squeegee-blade"></div>
        </div>

        <div className="vr-hero-strip" aria-hidden="true">
          <span>PODLAHY</span><span>·</span><span>OKNA</span><span>·</span><span>KOBERCE</span><span>·</span><span>FASÁDY</span><span>·</span><span>ZELEŇ</span><span>·</span><span>OSTRAHA</span>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="vr-section vr-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="vr-section-head">
          <h2 id="sluzby-h">Co u vás uklidíme a ohlídáme</h2>
          <p>
            Krátkodobě na objednávku, nebo dlouhodobě na smlouvu — jak vám to dává smysl.
            Rozsah a četnost si domluvíme podle vašeho provozu.
          </p>
        </div>

        <div className="vr-service-grid">
          <article className="vr-card">
            <div className="vr-card-badge" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M10 38 L26 22" />
                <path d="M24 20 L34 10 L38 14 L28 24 Z" fill="currentColor" stroke="none" opacity="0.25" />
                <path d="M24 20 L34 10 L38 14 L28 24 Z" />
                <path d="M8 40 c2 -1 4 -1 6 1" />
              </svg>
            </div>
            <h3>Pravidelný úklid firem a kanceláří</h3>
            <p>
              Denní nebo týdenní úklid kanceláří, chodeb, sociálních zařízení a kuchyněk.
              Vždy stejná parta lidí, která zná váš provoz — a víte, na koho se obrátit.
            </p>
            <ul className="vr-card-list">
              <li>vytírání a vysávání podlah</li>
              <li>desinfekce toalet a kuchyněk</li>
              <li>vynášení odpadu a doplňování hygieny</li>
            </ul>
          </article>

          <article className="vr-card">
            <div className="vr-card-badge" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <rect x="8" y="6" width="32" height="36" rx="2" />
                <path d="M24 6 v36 M8 24 h32" />
                <path d="M12 20 L20 10" opacity="0.5" />
              </svg>
            </div>
            <h3>Mytí oken a jednorázové úklidy</h3>
            <p>
              Okna, výlohy a prosklené plochy i ve výškách. Zvládneme také úklid po malířích,
              po rekonstrukci nebo generální úklid před nastěhováním.
            </p>
            <ul className="vr-card-list">
              <li>mytí oken včetně rámů a parapetů</li>
              <li>čištění koberců a čalounění</li>
              <li>úklid po stavebních pracích</li>
            </ul>
          </article>

          <article className="vr-card">
            <div className="vr-card-badge" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 5 L40 11 v10 c0 10 -7 17 -16 22 C15 38 8 31 8 21 V11 Z" />
                <path d="M17 24 l5 5 9 -11" />
              </svg>
            </div>
            <h3>Ostraha majetku a péče o zeleň</h3>
            <p>
              Kromě úklidu ohlídáme váš objekt a postaráme se o trávníky kolem něj.
              Jedna smlouva, jeden partner — méně starostí pro vás.
            </p>
            <ul className="vr-card-list">
              <li>fyzická ostraha objektů</li>
              <li>sečení a rekultivace travnatých ploch</li>
              <li>úklid venkovních prostor a chodníků</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ===================== DŮVĚRA ===================== */}
      <section className="vr-section vr-trust" id="duvera" aria-labelledby="duvera-h">
        <div className="vr-trust-inner">
          <div className="vr-trust-copy">
            <h2 id="duvera-h">V Pardubicích uklízíme přes 30 let</h2>
            <p>
              Agentura Varia funguje od roku 1995 z Bílého Předměstí. Za tu dobu jsme se naučili,
              že dobrý úklid poznáte podle jediné věci: nemusíte ho řešit. Přijdeme, kdy jsme slíbili,
              uklidíme, co jsme slíbili, a když něco nesedí, napravíme to hned.
            </p>
            <p>
              Pracujeme podle systému řízení kvality ISO 9001 a neseme certifikát Spolehlivá firma.
              Se zákazníky jednáme na rovinu — smlouva, ceník a rozsah prací jsou vždy jasné předem.
            </p>
            <address className="vr-address">
              Agentura Varia, s. r. o.<br />
              Hůrka 1789, Bílé Předměstí<br />
              530 21 Pardubice
            </address>
          </div>

          <dl className="vr-facts">
            <div className="vr-fact">
              <dt>Na trhu od roku</dt>
              <dd>1995</dd>
            </div>
            <div className="vr-fact">
              <dt>Systém kvality</dt>
              <dd>ISO 9001</dd>
            </div>
            <div className="vr-fact">
              <dt>Certifikace</dt>
              <dd>Spolehlivá firma</dd>
            </div>
            <div className="vr-fact">
              <dt>Působíme v</dt>
              <dd>Pardubicích a okolí</dd>
            </div>
          </dl>
        </div>

        <figure className="vr-quote">
          <blockquote>
            „Varia nám uklízí kanceláře už devátým rokem. Ráno přijdeme a je čisto —
            to je celé. Přesně tak to má fungovat.“
          </blockquote>
          <figcaption>— správce administrativní budovy, Pardubice-centrum</figcaption>
        </figure>
      </section>
    </main>
  );
}
