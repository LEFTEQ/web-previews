export default function Page() {
  return (
    <main className="av">
      {/* ===== HERO ===== */}
      <header className="av-hero">
        <div className="av-hero-top">
          <div className="av-wordmark" aria-label="AUTOVACEK">
            <span className="av-wordmark-auto">AUTO</span>
            <span className="av-wordmark-vacek">VACEK</span>
          </div>
          <a className="av-call" href="tel:+420777000000">
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="currentColor">
              <path d="M3.7 1.3c.4-.4 1-.4 1.4 0l1.8 1.8c.4.4.4 1 0 1.4l-.9.9c.6 1.3 1.6 2.3 2.9 2.9l.9-.9c.4-.4 1-.4 1.4 0l1.8 1.8c.4.4.4 1 0 1.4l-1 1c-.5.5-1.2.7-1.9.5-2-.6-3.8-1.7-5.3-3.2S2.2 5.6 1.6 3.6c-.2-.7 0-1.4.5-1.9l1.6-.4z" />
            </svg>
            777 000 000
          </a>
        </div>

        <div className="av-hero-body">
          <p className="av-hero-eyebrow">Autoservis · Brno</p>
          <h1 className="av-hero-title">
            <span className="av-line av-line-1">Zvedneme auto.</span>
            <span className="av-line av-line-2">
              Najdeme <em>závadu</em>.
            </span>
            <span className="av-line av-line-3">Opravíme ji.</span>
          </h1>
          <p className="av-hero-sub">
            Rodinný autoservis v Brně. Mechanika, elektrika, diagnostika a příprava na STK
            pro všechny značky. Cenu vám řekneme dřív, než sáhneme na klíč.
          </p>
          <div className="av-hero-actions">
            <a className="av-btn av-btn-primary" href="tel:+420777000000">Zavolat do dílny</a>
            <a className="av-btn av-btn-ghost" href="#sluzby">Co opravujeme</a>
          </div>
        </div>

        {/* Signature: pit-lift diagram — a car silhouette on a two-post lift, drawn in shop-chalk lines */}
        <div className="av-lift" aria-hidden="true">
          <svg viewBox="0 0 720 260" preserveAspectRatio="xMidYMax meet">
            {/* car body silhouette */}
            <g className="av-lift-car">
              <path
                d="M120 150 q30 -52 110 -58 l60 -34 q10 -6 24 -6 l150 0 q16 0 26 8 l58 32 q90 4 116 44 l6 14 l-550 0 z"
                fill="none"
                stroke="var(--chalk)"
                strokeWidth="3"
              />
              {/* windows */}
              <path d="M300 60 l-52 30 l120 0 l0 -30 z M388 60 l0 30 l108 0 l-50 -28 q-8 -4 -18 -4 z" fill="none" stroke="var(--chalk)" strokeWidth="2" opacity="0.55" />
              {/* wheels */}
              <circle cx="230" cy="152" r="34" fill="var(--pit)" stroke="var(--signal)" strokeWidth="3" />
              <circle cx="230" cy="152" r="13" fill="none" stroke="var(--signal)" strokeWidth="2" />
              <circle cx="560" cy="152" r="34" fill="var(--pit)" stroke="var(--signal)" strokeWidth="3" />
              <circle cx="560" cy="152" r="13" fill="none" stroke="var(--signal)" strokeWidth="2" />
            </g>
            {/* lift posts */}
            <g className="av-lift-posts" stroke="var(--signal)" strokeWidth="4">
              <line x1="160" y1="196" x2="160" y2="258" />
              <line x1="620" y1="196" x2="620" y2="258" />
              <line x1="130" y1="196" x2="320" y2="196" />
              <line x1="470" y1="196" x2="650" y2="196" />
            </g>
            {/* floor line */}
            <line x1="0" y1="258" x2="720" y2="258" stroke="var(--chalk)" strokeWidth="2" opacity="0.4" />
          </svg>
        </div>

        <div className="av-hero-strip" aria-hidden="true">
          <span>MECHANIKA</span><i>◆</i><span>DIAGNOSTIKA</span><i>◆</i><span>ELEKTRIKA</span><i>◆</i><span>PNEU</span><i>◆</i><span>STK</span><i>◆</i><span>BRZDY</span><i>◆</i><span>OLEJE</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="av-services" id="sluzby">
        <div className="av-section-head">
          <h2>Co u nás vyřešíte</h2>
          <p>
            Servisujeme osobní i dodávková auta všech značek — benzín, nafta i hybridy.
            Na běžné opravy se dostanete do tří pracovních dnů.
          </p>
        </div>

        <ul className="av-service-grid">
          <li className="av-card">
            <span className="av-card-tag">Motor a podvozek</span>
            <h3>Mechanické opravy</h3>
            <p>
              Rozvody, spojky, brzdy, tlumiče, ložiska. Používáme díly v kvalitě
              první montáže a staré vám na požádání ukážeme.
            </p>
          </li>
          <li className="av-card">
            <span className="av-card-tag">Kontrolka svítí?</span>
            <h3>Diagnostika řídicích jednotek</h3>
            <p>
              Načteme chybové kódy, řekneme vám lidsky, co znamenají, a co je
              potřeba opravit hned a co počká.
            </p>
          </li>
          <li className="av-card">
            <span className="av-card-tag">Bez stresu na lince</span>
            <h3>Příprava a odvoz na STK</h3>
            <p>
              Auto projdeme, opravíme, co by neprošlo, a na stanici technické
              kontroly ho za vás rovnou odvezeme.
            </p>
          </li>
          <li className="av-card">
            <span className="av-card-tag">Jaro / zima</span>
            <h3>Pneuservis a uskladnění</h3>
            <p>
              Přezutí, vyvážení a uskladnění kol přes sezónu. Objednáte se na
              přesnou hodinu, čekáte u kávy.
            </p>
          </li>
          <li className="av-card">
            <span className="av-card-tag">Pravidelná péče</span>
            <h3>Výměny olejů a servisní prohlídky</h3>
            <p>
              Servis podle plánu výrobce včetně zápisu do servisní knížky —
              záruka na nové auto vám zůstane.
            </p>
          </li>
          <li className="av-card">
            <span className="av-card-tag">Elektrika</span>
            <h3>Baterie, startéry, světla</h3>
            <p>
              Změříme dobíjení, vyměníme autobaterii na počkání a seřídíme
              světla, ať v zimě vidíte a je vás vidět.
            </p>
          </li>
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="av-trust">
        <div className="av-trust-inner">
          <div className="av-trust-copy">
            <h2>Dílna, kde vám mechanik ukáže, co vyměnil</h2>
            <p>
              AUTOVACEK je brněnský servis, kde se domluvíte přímo s tím, kdo bude
              na vašem autě pracovat. Před opravou dostanete cenu, během opravy
              fotku ze zvedáku, po opravě staré díly do ruky. Žádná překvapení na
              faktuře.
            </p>
            <ul className="av-trust-points">
              <li>
                <strong>Cena předem</strong>
                <span>Odsouhlasíte ji po telefonu, než začneme.</span>
              </li>
              <li>
                <strong>Termín do 3 dnů</strong>
                <span>Na běžné opravy. Havárie bereme přednostně.</span>
              </li>
              <li>
                <strong>Auto po Brně vyzvedneme</strong>
                <span>Nepojízdné auto k nám dostaneme, vy nemusíte nikam.</span>
              </li>
            </ul>
          </div>

          <div className="av-trust-quotes">
            <figure className="av-quote">
              <blockquote>
                „Svítila mi kontrolka motoru, jinde chtěli měnit půlku auta.
                Tady našli vadný snímač, hotovo za odpoledne.“
              </blockquote>
              <figcaption>Petra K., Brno-Židenice · Škoda Fabia</figcaption>
            </figure>
            <figure className="av-quote">
              <blockquote>
                „Dodávku potřebuju každý den. Domluvili jsme se na sedmou ráno
                a v poledne jsem s ní zase rozvážel.“
              </blockquote>
              <figcaption>Martin H., řemeslník · Ford Transit</figcaption>
            </figure>
            <div className="av-hours">
              <span className="av-hours-label">Otevřeno</span>
              <span className="av-hours-time">Po–Pá 7.30–17.00</span>
              <span className="av-hours-note">Objednání po telefonu, akutní případy řešíme hned.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
