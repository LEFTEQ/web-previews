export default function Page() {
  return (
    <main className="gc">
      {/* ===== HERO ===== */}
      <header className="gc-hero">
        <div className="gc-hero__topbar">
          <a className="gc-wordmark" href="#" aria-label="GIENGER CENTRON — úvod">
            <span className="gc-wordmark__mark" aria-hidden="true">
              {/* trubkové koleno — symbol firmy */}
              <svg viewBox="0 0 40 40" width="34" height="34" role="img" aria-hidden="true">
                <path d="M8 4h10a18 18 0 0 1 18 18v10h-10V22a8 8 0 0 0-8-8H8V4z" fill="currentColor" />
                <rect x="6" y="2" width="4" height="14" rx="1" fill="currentColor" opacity="0.55" />
                <rect x="24" y="30" width="14" height="4" rx="1" fill="currentColor" opacity="0.55" />
              </svg>
            </span>
            <span className="gc-wordmark__text">
              GIENGER <strong>CENTRON</strong>
            </span>
          </a>
          <p className="gc-hero__phone">
            <a href="tel:800100680">800 100 680</a>
            <span>zdarma, po–pá 7–16</span>
          </p>
        </div>

        <div className="gc-hero__grid">
          <div className="gc-hero__copy">
            <p className="gc-hero__eyebrow">Velkoobchod topení · sanita · instalace — Liberec</p>
            <h1 className="gc-hero__title">
              Materiál, který má instalatér
              <span className="gc-hero__title-line"> ráno na skladě,</span>
              <span className="gc-hero__title-accent"> ne za týden v e-shopu.</span>
            </h1>
            <p className="gc-hero__lead">
              GIENGER CENTRON zásobuje montážní firmy v Libereckém kraji vším od
              měděné trubky po tepelné čerpadlo. Sklad v Liberci doplňujeme každý
              den — co si objednáte do 15:00, vezete druhý den na stavbu.
            </p>
            <div className="gc-hero__actions">
              <a className="gc-btn gc-btn--primary" href="#sortiment">Prohlédnout sortiment</a>
              <a className="gc-btn gc-btn--ghost" href="#partneri">Jak nakupovat u nás</a>
            </div>
            <dl className="gc-hero__gauges" aria-label="Klíčová čísla">
              <div className="gc-gauge">
                <dt>Položek skladem</dt>
                <dd>12 000+</dd>
              </div>
              <div className="gc-gauge">
                <dt>Rozvoz na stavbu</dt>
                <dd>do 24 h</dd>
              </div>
              <div className="gc-gauge">
                <dt>Na trhu v ČR</dt>
                <dd>30 let</dd>
              </div>
            </dl>
          </div>
          <figure className="gc-hero__media">
            <img
              src="/hero.webp"
              alt="Sklad instalatérského materiálu GIENGER CENTRON — regály s trubkami, fitinky a topenářskou technikou"
            />
            <figcaption className="gc-hero__media-tag">
              <span className="gc-dot" aria-hidden="true"></span>
              Express sklad Liberec — otevřeno od 6:30
            </figcaption>
          </figure>
        </div>

        {/* signature: potrubní linka vedoucí stránkou */}
        <div className="gc-pipe gc-pipe--hero" aria-hidden="true">
          <span className="gc-pipe__joint"></span>
        </div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="gc-section" id="sortiment" aria-labelledby="sortiment-h">
        <div className="gc-section__head">
          <p className="gc-section__eyebrow">Sortiment TZB</p>
          <h2 id="sortiment-h">Čtyři regály, které řemeslník potřebuje každý den</h2>
          <p className="gc-section__intro">
            Neprodáváme koncovým zákazníkům — dodáváme montážním firmám. Proto
            držíme hloubku sortimentu tam, kde ji instalatér skutečně využije.
          </p>
        </div>

        <ul className="gc-shelf" role="list">
          <li className="gc-shelf__item">
            <span className="gc-shelf__dn" aria-hidden="true">DN 15</span>
            <h3>Instalace a rozvody</h3>
            <p>
              Měď, plast, lisovací fitinky, armatury a uzávěry. Kompletní rozvod
              vody a plynu od stoupačky po baterii — v jednom výdeji.
            </p>
          </li>
          <li className="gc-shelf__item">
            <span className="gc-shelf__dn" aria-hidden="true">DN 25</span>
            <h3>Topení a vytápění</h3>
            <p>
              Kotle, radiátory, podlahové topení, čerpadlové skupiny a regulace.
              K technice přidáme i uvedení do provozu přes servisní síť výrobců.
            </p>
          </li>
          <li className="gc-shelf__item">
            <span className="gc-shelf__dn" aria-hidden="true">DN 40</span>
            <h3>Sanita a koupelny</h3>
            <p>
              Sanitární keramika, sprchové systémy, předstěnové moduly. Návrhy
              koupelen řešíme ve studiu KOUPELNY ELEMENTS včetně vizualizace.
            </p>
          </li>
          <li className="gc-shelf__item">
            <span className="gc-shelf__dn" aria-hidden="true">DN 110</span>
            <h3>Tepelná čerpadla a fotovoltaika</h3>
            <p>
              Tepelná čerpadla, zásobníky a FV komponenty pro moderní zdroje
              tepla. Pomůžeme s návrhem výkonu i s podklady pro dotaci.
            </p>
          </li>
        </ul>

        <figure className="gc-section__media">
          <img
            src="/section-1.webp"
            alt="Instalatér při montáži rozvodů topení s materiálem od GIENGER CENTRON"
          />
          <figcaption>
            Zboží vozíme vlastními auty přímo na stavbu — trubky v šestimetrových
            délkách, kotel na paletě, fitinky přepočítané po kusech.
          </figcaption>
        </figure>

        <div className="gc-pipe gc-pipe--section" aria-hidden="true">
          <span className="gc-pipe__joint"></span>
        </div>
      </section>

      {/* ===== PARTNERSTVÍ / DŮVĚRA ===== */}
      <section className="gc-section gc-section--dark" id="partneri" aria-labelledby="partneri-h">
        <div className="gc-section__head">
          <p className="gc-section__eyebrow gc-section__eyebrow--light">Znak profesionálního partnerství</p>
          <h2 id="partneri-h">Prodáváme jen přes odborné firmy. Schválně.</h2>
          <p className="gc-section__intro">
            Kvalitní kotel špatně zapojený je špatný kotel. Proto jde náš materiál
            výhradně přes montážní firmy TZB, které za instalaci ručí — a my
            ručíme jim: skladem, logistikou a technickou podporou.
          </p>
        </div>

        <ol className="gc-flow" role="list">
          <li className="gc-flow__step">
            <span className="gc-flow__valve" aria-hidden="true"></span>
            <h3>Registrace montážní firmy</h3>
            <p>
              Smluvní partneři nakupují za velkoobchodní ceny a sbírají body
              v bonusovém programu GC skupiny za každý odběr.
            </p>
          </li>
          <li className="gc-flow__step">
            <span className="gc-flow__valve" aria-hidden="true"></span>
            <h3>Objednávka přes e-shop nebo pult</h3>
            <p>
              V e-shopu pro registrované najdete dodací listy, faktury i technické
              listy. Nebo přijeďte na pobočku — poradíme u pultu.
            </p>
          </li>
          <li className="gc-flow__step">
            <span className="gc-flow__valve" aria-hidden="true"></span>
            <h3>Dodávka na sklad i na stavbu</h3>
            <p>
              Logistická centra po celé ČR a síť EXPRESS skladů. Vlastní vozový
              park doplňuje sklady každý den — zboží vezeme tam, kde ho montujete.
            </p>
          </li>
        </ol>

        <div className="gc-quotes">
          <blockquote className="gc-quote">
            <p>
              „Ráno zavolám, co mi chybí na kotelně, a odpoledne to mám na stavbě
              v Ruprechticích. To u velkých e-shopů nezažiju.“
            </p>
            <footer>— Topenářská firma, Liberec-Ruprechtice, partner od 2014</footer>
          </blockquote>
          <blockquote className="gc-quote">
            <p>
              „Návrh koupelny pro zákazníka mi udělali ve studiu ELEMENTS,
              já jsem pak jen montoval. Zákazník spokojený, já taky.“
            </p>
            <footer>— Instalatérství, Jablonec nad Nisou, partner od 2019</footer>
          </blockquote>
        </div>

        <p className="gc-section__note">
          GIENGER CENTRON, s.r.o. je součástí evropské GC skupiny — v ČR ji
          zastupují firmy GIENGER, GIENGER TÁBOR, GIENGER CENTRON a GIENGER BOHEMIA.
        </p>
      </section>
    </main>
  );
}
