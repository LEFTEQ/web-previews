export default function Page() {
  return (
    <main className="vrm">
      {/* ===== HERO ===== */}
      <header className="hero">
        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#" aria-label="VR medical – úvod">
            <span className="wm-vr">VR</span>
            <span className="wm-med">medical</span>
          </a>
          <div className="nav-links">
            <a href="#terapie">Terapie</a>
            <a href="#duvera">Odborníci</a>
            <a className="nav-cta" href="#terapie">Mám zájem o produkt</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              <span className="pulse-dot" aria-hidden="true"></span>
              Zdravotnický prostředek · vyvinuto v Plzni
            </p>
            <h1 className="hero-title">
              Rehabilitace,
              <br />
              která začíná
              <br />
              <em>nasazením brýlí.</em>
            </h1>
            <p className="hero-lead">
              Pacient ve virtuálním světě zapomene na překážky, které vnímá
              v realitě — a přitom nikdy neztrácí kontakt s terapeutem.
              Cvičí víc, s menší bolestí a s výsledky, které lze přesně měřit.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#terapie">Mám zájem o produkt</a>
              <a className="btn-ghost" href="#duvera">Co říkají lékaři</a>
            </div>
          </div>

          {/* Signature: rozsah pohybu — goniometrický vějíř */}
          <div className="hero-visual" aria-hidden="true">
            <svg className="rom-arc" viewBox="0 0 520 520" role="img">
              <title>Rozsah pohybu paže měřený ve virtuální realitě</title>
              {/* výseče rozsahu pohybu */}
              <path className="arc arc-1" d="M 60 460 L 60 60 A 400 400 0 0 1 137 69.4 Z" />
              <path className="arc arc-2" d="M 60 460 L 137 69.4 A 400 400 0 0 1 260 113.6 Z" />
              <path className="arc arc-3" d="M 60 460 L 260 113.6 A 400 400 0 0 1 360 177.4 Z" />
              <path className="arc arc-4" d="M 60 460 L 360 177.4 A 400 400 0 0 1 431.4 260 Z" />
              {/* stupnice */}
              <g className="ticks" strokeLinecap="round">
                <line x1="60" y1="120" x2="60" y2="96" />
                <line x1="148" y1="131.5" x2="154" y2="108" />
                <line x1="230" y1="166" x2="242" y2="145" />
                <line x1="300" y1="220" x2="317" y2="203" />
                <line x1="354" y1="290" x2="375" y2="278" />
                <line x1="388" y1="372" x2="411" y2="365" />
              </g>
              {/* paže: výchozí a dosažená pozice */}
              <line className="limb limb-start" x1="60" y1="460" x2="60" y2="140" />
              <line className="limb limb-end" x1="60" y1="460" x2="338" y2="186" />
              <circle className="joint" cx="60" cy="460" r="12" />
              <circle className="hand hand-start" cx="60" cy="140" r="8" />
              <circle className="hand hand-end" cx="338" cy="186" r="10" />
            </svg>
            <p className="rom-label">
              <strong>+44°</strong> rozsah pohybu za 6 týdnů terapie ve VR — objektivně změřeno, ne odhadnuto
            </p>
          </div>
        </div>

        <ul className="hero-strip" aria-label="VR medical v číslech">
          <li><strong>30+</strong><span>spolupracujících zařízení</span></li>
          <li><strong>6 zemí</strong><span>od Plzně po Spojené království</span></li>
          <li><strong>tisíce</strong><span>realizovaných terapií</span></li>
          <li><strong>VR Awards</strong><span>globální ocenění pro českou firmu</span></li>
        </ul>
      </header>

      {/* ===== SEKCE 1: TERAPIE ===== */}
      <section className="therapy" id="terapie" aria-labelledby="therapy-title">
        <div className="section-head">
          <p className="eyebrow">Jedny brýle, tři nástroje</p>
          <h2 id="therapy-title">Co terapeut s VR medical zvládne na oddělení i doma u pacienta</h2>
          <p className="section-lead">
            Žádné složité zapojování, žádné nároky na prostor. Brýle se speciálně
            vyvinutým softwarem si nasadíte a za pár minut cvičíte.
          </p>
        </div>

        <div className="therapy-grid">
          <article className="therapy-card">
            <div className="card-glyph" aria-hidden="true">
              <svg viewBox="0 0 48 48"><path d="M8 34 L8 14 M8 34 L34 14 M34 14 a4 4 0 1 1 0.1 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </div>
            <h3>Pohybová rehabilitace</h3>
            <p>
              Virtuální prostředí pacienta vtáhne natolik, že zapomene na bolest
              i strach z pohybu. Nepřetržitá vizuální a zvuková zpětná vazba ho
              motivuje cvičit intenzivněji a přesněji — a terapeut je celou dobu u toho.
            </p>
            <p className="card-fact">Pacienti, kteří v našem světě ruku nenatáhnou, ji ve virtuálním natáhnou.</p>
          </article>

          <article className="therapy-card">
            <div className="card-glyph" aria-hidden="true">
              <svg viewBox="0 0 48 48"><path d="M6 38 L14 26 L22 32 L32 16 L42 22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="32" cy="16" r="3.5" fill="currentColor"/></svg>
            </div>
            <h3>Hodnocení a diagnostika</h3>
            <p>
              Rozsah pohybu, reakční časy, udržení pozornosti — vše měříme
              objektivně, opakovaně a s vysokou přesností. Terapeut vidí data
              okamžitě a může individuální program upravit ještě během cvičení.
            </p>
            <p className="card-fact">Důkaz o zlepšení na obrazovce motivuje pacienta víc než slova.</p>
          </article>

          <article className="therapy-card">
            <div className="card-glyph" aria-hidden="true">
              <svg viewBox="0 0 48 48"><path d="M24 6 a14 14 0 0 1 14 14 c0 6 -4 8 -4 13 l0 3 -20 0 0 -3 c0 -5 -4 -7 -4 -13 a14 14 0 0 1 14 -14 Z M18 42 l12 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>Aktivizace a kognitivní trénink</h3>
            <p>
              VR posouvá práh bolesti a urychluje návrat do běžného života.
              Bezpečné virtuální prostředí snadno přizpůsobíte rostoucím nárokům —
              od dětských pacientů po klienty snoezelenu.
            </p>
            <p className="card-fact">Funguje u neurologických i ortopedických diagnóz.</p>
          </article>
        </div>

        <div className="therapy-note">
          <p>
            <strong>Nasadit. Spustit. Cvičit.</strong> VR medical je certifikovaný
            zdravotnický prostředek připravený k okamžitému nasazení v praxi —
            v nemocnici, v lázních i u pacienta doma.
          </p>
          <a className="btn-primary" href="#duvera">Mám zájem o produkt</a>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA ===== */}
      <section className="trust" id="duvera" aria-labelledby="trust-title">
        <div className="section-head">
          <p className="eyebrow">Vyvinuto s předními odborníky</p>
          <h2 id="trust-title">Nemocnice a kliniky, které s námi rehabilitují</h2>
          <p className="section-lead">
            Od FN Plzeň přes Motol po Janské Lázně. Působíme také v Německu,
            na Slovensku, ve Spojeném království, na Ukrajině a v Bulharsku.
          </p>
        </div>

        <div className="quotes">
          <figure className="quote quote-lead">
            <blockquote>
              „Pacienti jsou příběhem a virtuálním světem zcela pohlceni. Úkoly
              plní s nadšením, překonávají své limity v rozsahu pohybu. Velkým
              přínosem je posunutí prahu vnímání bolesti při cvičení.“
            </blockquote>
            <figcaption>
              <strong>MUDr. Andrea Kunschová</strong>
              <span>primářka Oddělení léčebné rehabilitace, FN Plzeň</span>
            </figcaption>
          </figure>

          <figure className="quote">
            <blockquote>
              „V rámci diagnostiky umožňuje VR navodit situace, které se
              dosavadními prostředky jednoduše navodit nedají. Pacient navíc
              může rehabilitovat doma nebo na oddělení, kde je hospitalizovaný.“
            </blockquote>
            <figcaption>
              <strong>prof. MUDr. Jakub Hort, Ph.D., FEAN</strong>
              <span>vedoucí Kognitivního centra FN Motol, 2. LF UK</span>
            </figcaption>
          </figure>

          <figure className="quote">
            <blockquote>
              „Plněním vhodně zvolených úkolů jsme mohli terapii zacílit na
              konkrétní pohybový deficit. Přínosná je i zpětná vazba — porovnáme
              jednotlivá cvičení a vyhodnotíme úspěšnost terapie.“
            </blockquote>
            <figcaption>
              <strong>MUDr. Ivana Uiberlayová</strong>
              <span>primářka a náměstkyně, Janské Lázně</span>
            </figcaption>
          </figure>

          <figure className="quote">
            <blockquote>
              „Spolupráce s VR medical umožňuje pacientům rychlejší návrat
              do běžného života.“
            </blockquote>
            <figcaption>
              <strong>MUDr. Václav Šimánek, Ph.D.</strong>
              <span>ředitel FN Plzeň</span>
            </figcaption>
          </figure>
        </div>

        <ul className="press" aria-label="Napsali o nás">
          <li>„Nasadit brýle, protáhnout svaly. Plzeňský VR startup boří zábrany pacientů.“</li>
          <li>„V globálních VR Awards uspěla česká firma. Ve virtuální realitě vrací pacienty k normálnímu životu.“</li>
          <li>„Speciální rehabilitace z Česka pomáhá stovkám lidí.“</li>
        </ul>
      </section>
    </main>
  );
}
