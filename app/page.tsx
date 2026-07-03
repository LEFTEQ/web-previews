export default function Page() {
  return (
    <main className="ort-page">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              {/* dvě oči, které se sbíhají do jednoho bodu — princip binokulárního vidění */}
              <svg viewBox="0 0 64 32" width="64" height="32" role="img" aria-hidden="true">
                <circle cx="14" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="50" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="20" cy="16" r="3.5" fill="currentColor" />
                <circle cx="44" cy="16" r="3.5" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-word">
              Ortoptika&nbsp;<strong>Hradec</strong>
            </span>
          </div>

          <p className="hero-eyebrow">Ortoptická ordinace · Hradec Králové · od roku 1988</p>

          <h1 className="hero-title">
            <span className="line line-1">Učíme dětské oči</span>
            <span className="line line-2">
              dívat se <em className="fuse">spolu<span className="fuse-dot" aria-hidden="true" /></em>
            </span>
          </h1>

          <p className="hero-lead">
            Šilhání a tupozrakost se dají cvičením zlepšit — a čím dřív se na vadu
            přijde, tím líp. Vyšetříme děti už od 6&nbsp;měsíců. Na doporučení očního
            lékaře hradí vyšetření i cvičení plně vaše pojišťovna.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420495000000">
              Zavolat do ordinace
            </a>
            <a className="btn btn-ghost" href="#cviceni">
              Jak léčba probíhá
            </a>
          </div>

          <ul className="hero-facts" aria-label="Základní fakta o ordinaci">
            <li>
              <span className="fact-num">1988</span>
              <span className="fact-label">cvičíme oči už přes 35&nbsp;let</span>
            </li>
            <li>
              <span className="fact-num">6&nbsp;měs.</span>
              <span className="fact-label">nejmladší pacienti na screeningu</span>
            </li>
            <li>
              <span className="fact-num">100&nbsp;%</span>
              <span className="fact-label">hrazeno pojišťovnou s&nbsp;doporučením</span>
            </li>
          </ul>
        </div>

        {/* Signature: optotypová stěna — písmena testovací tabule, řádek po řádku ostřejší */}
        <div className="optotype" aria-hidden="true">
          <span className="opto-row r1">E</span>
          <span className="opto-row r2">F&nbsp;P</span>
          <span className="opto-row r3">T&nbsp;O&nbsp;Z</span>
          <span className="opto-row r4">L&nbsp;P&nbsp;E&nbsp;D</span>
          <span className="opto-row r5">P&nbsp;E&nbsp;C&nbsp;F&nbsp;D</span>
          <span className="opto-row r6">V&nbsp;I&nbsp;D&nbsp;Í&nbsp;M&nbsp;E</span>
        </div>
      </header>

      {/* ================= SEKCE: S ČÍM POMŮŽEME ================= */}
      <section className="section services" id="cviceni" aria-labelledby="services-title">
        <div className="section-head">
          <p className="section-eyebrow">S čím k nám rodiče chodí</p>
          <h2 className="section-title" id="services-title">
            Tři důvody, proč se objednat
          </h2>
        </div>

        <div className="cards">
          <article className="card">
            <div className="card-tag">Screening · od 6 měsíců</div>
            <h3 className="card-title">Odhalení zrakové vady u&nbsp;malých dětí</h3>
            <p>
              Bezkontaktním přístrojem během pár minut zjistíme, jestli dítě
              potřebuje brýle, šilhá nebo mu hrozí tupozrakost. Dítě nic nebolí
              a nemusí umět číst ani mluvit — vyšetříme i&nbsp;půlroční miminko.
            </p>
            <p className="card-note">Čím dřív se vada najde, tím vyšší je úspěšnost léčby.</p>
          </article>

          <article className="card card-accent">
            <div className="card-tag">Vyšetření · na doporučení oftalmologa</div>
            <h3 className="card-title">Ortoptické vyšetření binokulárních funkcí</h3>
            <p>
              Změříme, jak oči vašeho dítěte spolupracují: šilhání (strabismus),
              tupozrakost (amblyopii) i&nbsp;dvojité vidění. S&nbsp;doporučením od očního
              lékaře je vyšetření plně hrazené zdravotní pojišťovnou.
            </p>
            <p className="card-note">Vyšetřujeme děti i&nbsp;dospělé.</p>
          </article>

          <article className="card">
            <div className="card-tag">Cvičení · zpravidla 1× týdně</div>
            <h3 className="card-title">Ortopticko-pleoptická cvičení</h3>
            <p>
              Na speciálních přístrojích děti hravou formou trénují spolupráci
              obou očí. Léčba funkčních vad není otázka týdnů — počítejte
              s&nbsp;měsíci, u&nbsp;větších vad i&nbsp;roky pravidelného cvičení.
            </p>
            <p className="card-note">Typicky pro děti 3–12 let, docházka 1× týdně.</p>
          </article>
        </div>

        <div className="path" aria-label="Jak léčba obvykle probíhá">
          <h3 className="path-title">Jak to u nás obvykle probíhá</h3>
          <ol className="path-steps">
            <li>
              <span className="step-k">Krok 1</span>
              Oční lékař doporučí ortoptiku — nebo přijdete rovnou na preventivní screening.
            </li>
            <li>
              <span className="step-k">Krok 2</span>
              Vyšetříme binokulární funkce a domluvíme plán cvičení na míru dítěti.
            </li>
            <li>
              <span className="step-k">Krok 3</span>
              Dítě dochází na cvičení, průběžně měříme pokrok a upravujeme program.
            </li>
          </ol>
        </div>
      </section>

      {/* ================= SEKCE: DŮVĚRA / O NÁS ================= */}
      <section className="section trust" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-main">
            <p className="section-eyebrow section-eyebrow-light">O ordinaci</p>
            <h2 className="section-title section-title-light" id="trust-title">
              Dvě pracoviště v&nbsp;Hradci Králové, jedna specializace: dětský zrak
            </h2>
            <p className="trust-text">
              Ortoptická vyšetření a cvičení provádíme nepřetržitě od roku 1988.
              Ordinace na Hradecké poliklinice III na třídě Edvarda Beneše se
              zaměřuje na diagnostiku poruch binokulárních funkcí a na screening
              zrakových vad u&nbsp;nejmenších dětí. Na obou pracovištích probíhají
              ortopticko-pleoptická cvičení.
            </p>
            <p className="trust-text">
              V&nbsp;anketě Ordinace roku jsme se díky hlasům rodičů umístili na
              <strong> 2.&nbsp;místě v&nbsp;Královéhradeckém kraji</strong>. Děkujeme —
              a bereme to jako závazek.
            </p>

            <ul className="trust-points">
              <li>Vyšetření i cvičení plně hradí smluvní zdravotní pojišťovny (s&nbsp;doporučením oftalmologa).</li>
              <li>Moderní screeningový přístroj pro děti od 6&nbsp;měsíců věku.</li>
              <li>Pokud je potřeba intenzivnější léčba, pomůžeme domluvit pobyt v&nbsp;oční léčebně (např. Dvůr Králové n.&nbsp;L.).</li>
            </ul>
          </div>

          <aside className="trust-aside" aria-label="Praktické informace">
            <div className="aside-block">
              <h3 className="aside-title">Kde nás najdete</h3>
              <p>
                Hradecká poliklinika III<br />
                třída Edvarda Beneše<br />
                Hradec Králové
              </p>
              <a
                className="aside-link"
                href="https://mapy.cz/?q=Hradeck%C3%A1%20poliklinika%20III%20Hradec%20Kr%C3%A1lov%C3%A9"
              >
                Otevřít trasu v mapě
              </a>
            </div>
            <div className="aside-block">
              <h3 className="aside-title">Co vzít s sebou</h3>
              <p>
                Kartičku pojišťovny dítěte a doporučení od očního lékaře, pokud
                ho máte. Na screening doporučení nepotřebujete.
              </p>
            </div>
            <div className="aside-block aside-quote">
              <p>
                „Syn začal cvičit ve čtyřech letech kvůli tupozrakosti. Po roce
                docházení vidí na slabší oko o&nbsp;tři řádky tabule líp.“
              </p>
              <p className="quote-by">— maminka pacienta, Hradec Králové</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
