export default function Page() {
  return (
    <main className="gg">
      {/* ================= HERO ================= */}
      <header className="gg-hero">
        <div className="gg-hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="gg-hero-scrim" />
        </div>

        <div className="gg-shell gg-hero-inner">
          <nav className="gg-nav" aria-label="Hlavní navigace">
            <a className="gg-wordmark" href="#" aria-label="GIENGER Olomouc — domů">
              <span className="gg-wordmark-main">GIENGER</span>
              <span className="gg-wordmark-sub">velkoobchod TZB · Olomouc</span>
            </a>
            <ul className="gg-nav-links">
              <li><a href="#sortiment">Sortiment</a></li>
              <li><a href="#logistika">Logistika a sklad</a></li>
              <li><a className="gg-nav-tel" href="tel:800100680">800 100 680</a></li>
            </ul>
          </nav>

          <div className="gg-hero-copy">
            <p className="gg-dn gg-dn--hero">
              <span className="gg-dn-label">DN</span>
              <span className="gg-dn-value">15–300</span>
              <span className="gg-dn-note">vše skladem, od sifonu po páteřní rozvod</span>
            </p>
            <h1>
              Materiál na topení, vodu a&nbsp;sanitu.
              <br />
              <em>Ráno objednáte, na stavbě ho máte.</em>
            </h1>
            <p className="gg-hero-lead">
              Jsme odborný velkoobchod TZB pro montážní firmy z&nbsp;Olomouce a&nbsp;okolí.
              Přes 30&nbsp;let držíme skladem kompletní sortiment — od fitinek a&nbsp;měděných
              trubek přes kotle a&nbsp;tepelná čerpadla až po celé koupelny.
            </p>
            <div className="gg-hero-actions">
              <a className="gg-btn gg-btn--fill" href="#sortiment">Projít sortiment</a>
              <a className="gg-btn gg-btn--line" href="tel:800100680">Zavolat pobočku</a>
            </div>
          </div>

          <ul className="gg-hero-facts" aria-label="Klíčová fakta">
            <li>
              <strong>30+ let</strong>
              <span>na českém trhu TZB</span>
            </li>
            <li>
              <strong>Denně</strong>
              <span>závoz zboží přímo na stavbu</span>
            </li>
            <li>
              <strong>Jen pro řemeslo</strong>
              <span>prodáváme montážním firmám</span>
            </li>
          </ul>
        </div>
      </header>

      {/* ================= SORTIMENT ================= */}
      <section className="gg-section" id="sortiment" aria-labelledby="sortiment-h">
        <div className="gg-shell">
          <div className="gg-section-head">
            <p className="gg-eyebrow">Co u nás naložíte</p>
            <h2 id="sortiment-h">Čtyři regály, které pokryjí celou stavbu</h2>
            <p className="gg-section-lead">
              Sortiment řadíme stejně, jako je řazený náš sklad — přijedete,
              řeknete profesi a&nbsp;skladník ví, kam jít.
            </p>
          </div>

          <div className="gg-aisles">
            <article className="gg-aisle">
              <p className="gg-dn">
                <span className="gg-dn-label">Regál</span>
                <span className="gg-dn-value">A</span>
              </p>
              <h3>Topení a vytápění</h3>
              <p>
                Kotle, radiátory, podlahové topení, tepelná čerpadla a&nbsp;fotovoltaika.
                K&nbsp;čerpadlům dodáme i&nbsp;kompletní hydraulickou skupinu, ať neskládáte
                zakázku ze tří dodavatelů.
              </p>
            </article>
            <article className="gg-aisle">
              <p className="gg-dn">
                <span className="gg-dn-label">Regál</span>
                <span className="gg-dn-value">B</span>
              </p>
              <h3>Instalace a rozvody</h3>
              <p>
                Měď, plast, lisovací systémy, fitinky, armatury a&nbsp;izolace.
                Trubky řežeme na míru, drobný materiál vydáváme i&nbsp;po kusech —
                na dodělávku nemusíte brát celé balení.
              </p>
            </article>
            <article className="gg-aisle">
              <p className="gg-dn">
                <span className="gg-dn-label">Regál</span>
                <span className="gg-dn-value">C</span>
              </p>
              <h3>Sanita a koupelny</h3>
              <p>
                Baterie, sprchové systémy, závěsná WC, vany a&nbsp;obklady. Ve studiu
                KOUPELNY ELEMENTS naplánujeme koupelnu vašeho zákazníka do&nbsp;3D —
                vy pak jen montujete.
              </p>
            </article>
            <article className="gg-aisle">
              <p className="gg-dn">
                <span className="gg-dn-label">Regál</span>
                <span className="gg-dn-value">D</span>
              </p>
              <h3>Inženýrské sítě</h3>
              <p>
                Kanalizace, vodovodní přípojky, šachty a&nbsp;tvarovky větších dimenzí.
                Objemné položky vozíme rovnou na výkop — na skládku stavby, ne k&nbsp;vám
                do dílny.
              </p>
            </article>
          </div>

          <figure className="gg-figure">
            <img
              src="/section-1.webp"
              alt="Regály velkoobchodního skladu GIENGER plné instalatérského materiálu a trubek"
            />
            <figcaption>
              Sklad Olomouc — každá dimenze má svou přihrádku, výdej do&nbsp;pár minut.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ================= LOGISTIKA / DŮVĚRA ================= */}
      <section className="gg-section gg-section--dark" id="logistika" aria-labelledby="logistika-h">
        <div className="gg-shell gg-split">
          <div className="gg-split-copy">
            <p className="gg-eyebrow gg-eyebrow--light">Proč s námi jezdí montážní firmy</p>
            <h2 id="logistika-h">Stavba nečeká. My taky ne.</h2>

            <ul className="gg-flow" aria-label="Jak probíhá objednávka">
              <li>
                <span className="gg-flow-time">6:30</span>
                <div>
                  <h3>Objednáte v e-shopu nebo telefonem</h3>
                  <p>
                    E-shop pro registrované firmy zobrazuje skladovou dostupnost,
                    vaše ceny, dodací listy i&nbsp;faktury. Kdo radši volá, volá —
                    skladníci vás znají jménem.
                  </p>
                </div>
              </li>
              <li>
                <span className="gg-flow-time">7:00</span>
                <div>
                  <h3>Naložíme, nebo vyvezeme</h3>
                  <p>
                    Vyzvednete na EXPRESS skladu cestou na stavbu, nebo materiál
                    přiveze naše auto přímo na adresu zakázky — i&nbsp;dlouhé trubky
                    a&nbsp;palety.
                  </p>
                </div>
              </li>
              <li>
                <span className="gg-flow-time">Průběžně</span>
                <div>
                  <h3>Sbíráte body v bonusovém programu</h3>
                  <p>
                    Za odebrané zboží získáváte bonusové body GC skupiny
                    a&nbsp;měníte je za hodnotné odměny. Věrnost se u&nbsp;nás počítá.
                  </p>
                </div>
              </li>
            </ul>

            <blockquote className="gg-quote">
              <p>
                „Prodáváme výhradně přes odborné montážní firmy. Kvalitní materiál
                si zaslouží kvalitní montáž — a&nbsp;vaši zákazníci jistotu, že to
                někdo udělal pořádně.“
              </p>
              <cite>— zásada GIENGER od roku 1992</cite>
            </blockquote>
          </div>

          <div className="gg-split-media">
            <img
              src="/section-2.webp"
              alt="Dodávka GIENGER naložená topenářským materiálem před stavbou v Olomouci"
            />
            <div className="gg-badge">
              <span className="gg-badge-num">800&nbsp;100&nbsp;680</span>
              <span className="gg-badge-txt">zelená linka pro montážní firmy</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
