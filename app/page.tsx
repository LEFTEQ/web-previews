export default function Page() {
  return (
    <main className="vet">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-cross" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="34" height="34" role="img" aria-label="Značka ordinace">
                <path d="M14 4h12v10h10v12H26v10H14V26H4V14h10V4z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-word">
              <strong>Košťál</strong>
              <em>veterinární ordinace · Ostrava</em>
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Když vaše zvíře</span>
            <span className="hero-line hero-line-2">nemůže říct,</span>
            <span className="hero-line hero-line-3">co ho bolí<span className="hero-dot">.</span></span>
          </h1>

          <p className="hero-sub">
            MVDr. Lubomír Košťál poslouchá i to, co pes a kočka neřeknou.
            Přes třicet let veterinární praxe v Ostravě — vyšetření, očkování,
            chirurgie i rada po telefonu, když si nejste jistí.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420596000000">Zavolat do ordinace</a>
            <a className="btn btn-ghost" href="#sluzby">Co u nás ošetříme</a>
          </div>

          {/* Signature: EKG linka procházející hero — puls zvířecího pacienta */}
          <div className="pulse-wrap" aria-hidden="true">
            <svg className="pulse" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                className="pulse-path"
                d="M0,60 L180,60 L210,60 L228,20 L248,100 L266,44 L282,60 L520,60 L548,60 L566,14 L588,106 L606,38 L622,60 L900,60 L928,60 L946,24 L966,96 L984,48 L1000,60 L1200,60"
                fill="none"
              />
            </svg>
            <span className="pulse-label">tep 92 / min · pacient: kříženec, 6 let · vše v pořádku</span>
          </div>
        </div>

        <ul className="hero-facts" aria-label="Základní informace o ordinaci">
          <li>
            <span className="fact-key">Ordinace</span>
            <span className="fact-val">Ostrava</span>
          </li>
          <li>
            <span className="fact-key">Praxe</span>
            <span className="fact-val">30+ let</span>
          </li>
          <li>
            <span className="fact-key">Pacienti</span>
            <span className="fact-val">psi · kočky · drobní savci</span>
          </li>
          <li>
            <span className="fact-key">Objednání</span>
            <span className="fact-val">telefonicky, akutní případy přednostně</span>
          </li>
        </ul>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Ošetření a péče</p>
          <h2 id="sluzby-h">Od štěněte po seniora — všechno na jednom místě</h2>
          <p className="section-lead">
            Žádné přeposílání mezi pracovišti. Běžnou i chirurgickou péči
            zvládneme přímo v ordinaci a známe vaše zvíře jménem.
          </p>
        </div>

        <div className="karta-grid">
          <article className="karta">
            <h3>Preventivní prohlídky a očkování</h3>
            <p>
              Vakcinace proti vzteklině a kombinované vakcíny podle věku zvířete.
              Očkovací průkaz a připomenutí termínu hlídáme za vás.
            </p>
            <p className="karta-tag">psi · kočky · fretky</p>
          </article>

          <article className="karta">
            <h3>Čipování a pas pro cesty</h3>
            <p>
              Zavedení mikročipu, zápis do registru majitelů čipovaných zvířat
              a vystavení evropského pasu, když se chystáte přes hranice.
            </p>
            <p className="karta-tag">povinné pro psy od 2020</p>
          </article>

          <article className="karta">
            <h3>Chirurgické zákroky</h3>
            <p>
              Kastrace, ošetření ran, drobné i větší zákroky v inhalační
              anestezii. Před operací vždy vysvětlíme průběh a pooperační péči.
            </p>
            <p className="karta-tag">objednání předem</p>
          </article>

          <article className="karta">
            <h3>Interní medicína a diagnostika</h3>
            <p>
              Trávicí potíže, kožní problémy, kulhání, stárnoucí pacienti.
              Vyšetření krve a moči s výsledky, kterým budete rozumět.
            </p>
            <p className="karta-tag">i chroničtí pacienti</p>
          </article>

          <article className="karta">
            <h3>Stomatologie</h3>
            <p>
              Odstranění zubního kamene ultrazvukem, extrakce a kontrola dutiny
              ústní — zubní bolest zvíře skrývá nejdéle ze všech.
            </p>
            <p className="karta-tag">nejčastěji podceňované</p>
          </article>

          <article className="karta karta-akutni">
            <h3>Akutní případy</h3>
            <p>
              Otrava, úraz, náhlé zvracení nebo apatie? Volejte rovnou —
              akutní pacienty bereme přednostně před objednanými.
            </p>
            <a className="karta-cta" href="tel:+420596000000">Zavolat hned</a>
          </article>
        </div>
      </section>

      {/* ===== DŮVĚRA / ORDINACE ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-text">
            <p className="eyebrow eyebrow-light">Kdo se o vaše zvíře stará</p>
            <h2 id="duvera-h">Jeden veterinář, který vás zná. Ne anonymní klinika.</h2>
            <p>
              MVDr. Lubomír Košťál vede svou ordinaci v Ostravě od devadesátých
              let. Ke každému pacientovi vede kartu s celou historií — takže
              když přijdete po roce, nemusíte nic vysvětlovat od začátku.
            </p>
            <p>
              Je členem Komory veterinárních lékařů ČR a pracuje podle
              metodických pokynů Státní veterinární správy. Čipovaná zvířata
              zapisuje přímo do národního registru majitelů.
            </p>

            <ul className="duvera-body">
              <li>
                <span className="check" aria-hidden="true">✓</span>
                Člen Komory veterinárních lékařů ČR
              </li>
              <li>
                <span className="check" aria-hidden="true">✓</span>
                Zápis čipů do Národního registru majitelů zvířat
              </li>
              <li>
                <span className="check" aria-hidden="true">✓</span>
                Karta pacienta s kompletní historií léčby
              </li>
              <li>
                <span className="check" aria-hidden="true">✓</span>
                Srozumitelné vysvětlení diagnózy i ceny předem
              </li>
            </ul>
          </div>

          <div className="duvera-refs">
            <blockquote className="ref">
              <p>
                „Fenka spolkla na procházce něco na sídlišti. Pan doktor nás vzal
                okamžitě, vysvětlil, co bude dělat, a večer sám zavolal, jak jí
                je. To se dneska nevidí.“
              </p>
              <footer>— Martina H., Ostrava-Poruba, fenka Bety</footer>
            </blockquote>
            <blockquote className="ref">
              <p>
                „Kocour nesnáší cestování, tak oceňuju, že prohlídka proběhne
                v klidu a bez zbytečného čekání. Za očkování a odčervení platím
                to, co mi doktor řekl dopředu.“
              </p>
              <footer>— Petr S., Ostrava-Zábřeh, kocour Mikeš</footer>
            </blockquote>
            <div className="ordinace-info">
              <h3>Ordinační hodiny</h3>
              <dl className="hodiny">
                <div><dt>Po–Pá</dt><dd>8:00–11:00 · 14:00–18:00</dd></div>
                <div><dt>Sobota</dt><dd>9:00–11:00</dd></div>
                <div><dt>Neděle</dt><dd>zavřeno · akutní po telefonu</dd></div>
              </dl>
              <p className="hodiny-note">
                Dovolenou a mimořádné změny hlásíme s předstihem tady na webu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
