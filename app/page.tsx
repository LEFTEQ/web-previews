export default function Page() {
  return (
    <main className="ea-main">
      {/* ===================== HERO ===================== */}
      <header className="ea-hero" aria-label="Ekoaqua ochrana vod — úvod">
        <div className="ea-hero-top">
          <div className="ea-wordmark" aria-label="Ekoaqua ochrana vod">
            <span className="ea-wm-eko">EKO</span>
            <span className="ea-wm-aqua">AQUA</span>
            <span className="ea-wm-sub">ochrana vod · Ostrava</span>
          </div>
          <a className="ea-hero-tel" href="tel:+420606766645">
            +420&nbsp;606&nbsp;766&nbsp;645
          </a>
        </div>

        <div className="ea-hero-body">
          <p className="ea-hero-eyebrow">Odpadní vody · kanalizace · vodohospodářský servis</p>
          <h1 className="ea-hero-title">
            <span className="ea-line ea-line-1">Voda, která od vás odtéká,</span>
            <span className="ea-line ea-line-2">je pořád <em>vaše starost</em>.</span>
            <span className="ea-line ea-line-3">My ji z&nbsp;vás sundáme.</span>
          </h1>
          <p className="ea-hero-lead">
            Hlídáme kanalizace, čistírny a&nbsp;odpadní vody firem i&nbsp;obcí na Ostravsku,
            aby prošly každou kontrolou vodoprávního úřadu. Přes dvacet let, bez pokut pro naše klienty.
          </p>
          <div className="ea-hero-actions">
            <a className="ea-btn ea-btn-solid" href="tel:+420606766645">Zavolat Aleši Carbolovi</a>
            <a className="ea-btn ea-btn-ghost" href="mailto:ekoaqua.ova@volny.cz">Napsat e-mail</a>
          </div>
        </div>

        {/* Signature: hladina — vodní horizont dělící hero, s měrnou latí */}
        <div className="ea-waterline" aria-hidden="true">
          <div className="ea-gauge">
            <span className="ea-gauge-mark"><i></i>limit BSK₅</span>
            <span className="ea-gauge-mark"><i></i>limit CHSK</span>
            <span className="ea-gauge-mark ea-gauge-ok"><i></i>vaše hodnoty</span>
          </div>
          <svg className="ea-wave" viewBox="0 0 1440 90" preserveAspectRatio="none">
            <path
              d="M0,45 C120,15 240,75 360,45 C480,15 600,75 720,45 C840,15 960,75 1080,45 C1200,15 1320,75 1440,45 L1440,90 L0,90 Z"
              fill="var(--ea-deep)"
            />
            <path
              d="M0,55 C120,25 240,85 360,55 C480,25 600,85 720,55 C840,25 960,85 1080,55 C1200,25 1320,85 1440,55"
              fill="none"
              stroke="var(--ea-cyan)"
              strokeWidth="2"
              opacity="0.6"
            />
          </svg>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="ea-services" aria-labelledby="sluzby-h">
        <div className="ea-section-head">
          <h2 id="sluzby-h">Co pro vás pohlídáme</h2>
          <p>
            Každá služba končí dokladem, který můžete položit na stůl úřadu.
            Žádné obecné konzultace — konkrétní papír, konkrétní odpovědnost.
          </p>
        </div>

        <div className="ea-service-grid">
          <article className="ea-card">
            <span className="ea-card-tag">Provoz ČOV a&nbsp;kanalizací</span>
            <h3>Odborné vedení provozu čistírny</h3>
            <p>
              Převezmeme technologický dohled nad vaší ČOV nebo lapolem — nastavíme provozní řád,
              zaškolíme obsluhu a&nbsp;jezdíme na pravidelné kontroly. Vy provozujete, my ručíme za technologii.
            </p>
            <p className="ea-card-out">Výstup: provozní řád + provozní deník + protokoly z&nbsp;kontrol</p>
          </article>

          <article className="ea-card">
            <span className="ea-card-tag">Rozbory a&nbsp;vzorkování</span>
            <h3>Odběry a&nbsp;rozbory odpadních vod</h3>
            <p>
              Akreditované vzorkování na výusti přesně podle vašeho povolení — slévané i&nbsp;prosté vzorky,
              BSK₅, CHSK, NL, fosfor, dusík. Výsledky vám vysvětlíme lidsky, ne jen tabulkou.
            </p>
            <p className="ea-card-out">Výstup: akreditovaný protokol o&nbsp;zkoušce pro vodoprávní úřad</p>
          </article>

          <article className="ea-card">
            <span className="ea-card-tag">Legislativa a&nbsp;povolení</span>
            <h3>Vodoprávní agenda za vás</h3>
            <p>
              Povolení k&nbsp;vypouštění, kanalizační řády, havarijní plány, hlášení do ISPOP.
              Termíny hlídáme my — vy se dozvíte jen to, co máte podepsat.
            </p>
            <p className="ea-card-out">Výstup: platné povolení a&nbsp;odeslaná roční hlášení v&nbsp;termínu</p>
          </article>

          <article className="ea-card">
            <span className="ea-card-tag">Odpady</span>
            <h3>Odpadové hospodářství firmy</h3>
            <p>
              Průběžná evidence odpadů, identifikační listy nebezpečných odpadů a&nbsp;roční hlášení.
              Postaráme se i&nbsp;o&nbsp;kaly z&nbsp;vaší čistírny — od vývozu po doklad o&nbsp;likvidaci.
            </p>
            <p className="ea-card-out">Výstup: evidence bez děr a&nbsp;hlášení podaná včas</p>
          </article>
        </div>
      </section>

      {/* ===================== DŮVĚRA ===================== */}
      <section className="ea-trust" aria-labelledby="duvera-h">
        <div className="ea-trust-inner">
          <div className="ea-trust-text">
            <h2 id="duvera-h">Malá firma, která zvedá telefon</h2>
            <p>
              EKOAQUA ochrana vod působí z&nbsp;Ostravy-Zábřehu od roku 1999. Nejsme call centrum —
              když zavoláte, mluvíte rovnou s&nbsp;člověkem, který vaši čistírnu zná a&nbsp;byl u&nbsp;ní osobně.
            </p>
            <p>
              Staráme se o&nbsp;desítky provozů na Ostravsku a&nbsp;v&nbsp;Moravskoslezském kraji:
              obecní čistírny, autoservisy s&nbsp;lapoly, potravinářské provozy i&nbsp;bytová družstva
              s&nbsp;vlastní kanalizací. U&nbsp;většiny z&nbsp;nich jsme déle než deset let.
            </p>
            <ul className="ea-trust-list">
              <li>
                <strong>Známe zdejší úřady.</strong> S&nbsp;vodoprávními úřady v&nbsp;Ostravě, Frýdku-Místku
                i&nbsp;Opavě jednáme desítky let — víme, co který referent chce vidět.
              </li>
              <li>
                <strong>Havárie řešíme hned.</strong> Únik do kanalizace nebo přetečená jímka nepočká
                na pondělí. Volejte kdykoliv, poradíme první kroky po telefonu.
              </li>
              <li>
                <strong>Ručíme podpisem.</strong> Protokoly a&nbsp;hlášení, která za vás podáváme,
                nesou naše jméno. Pokuta za náš termín by byla naše pokuta.
              </li>
            </ul>
          </div>

          <aside className="ea-trust-card" aria-label="Kontaktní osoby">
            <h3>Kdo se vám ozve</h3>
            <div className="ea-person">
              <span className="ea-person-name">Aleš Carbol</span>
              <span className="ea-person-role">jednatel · technologie a&nbsp;provoz ČOV</span>
              <a href="tel:+420606766645">+420 606 766 645</a>
              <a href="mailto:alescarbol@volny.cz">alescarbol@volny.cz</a>
            </div>
            <div className="ea-person">
              <span className="ea-person-name">Edita Vargová</span>
              <span className="ea-person-role">evidence odpadů · hlášení a&nbsp;administrativa</span>
              <a href="tel:+420607106797">+420 607 106 797</a>
              <a href="mailto:ekoaqua.ova@volny.cz">ekoaqua.ova@volny.cz</a>
            </div>
            <div className="ea-address">
              <span>Samaritánská 798/8, 700 30 Ostrava-Zábřeh</span>
              <span>IČO 25853899 · DIČ CZ25853899</span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
