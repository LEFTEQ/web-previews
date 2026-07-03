export default function Page() {
  return (
    <main className="pl">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              {/* okenní kříž jako logo */}
              <svg viewBox="0 0 40 40" width="40" height="40" role="img" aria-label="">
                <rect x="2" y="2" width="36" height="36" rx="3" fill="none" stroke="currentColor" strokeWidth="4" />
                <line x1="20" y1="2" x2="20" y2="38" stroke="currentColor" strokeWidth="3" />
                <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>
            <span className="brand-name">
              PL&nbsp;PLAST<span className="brand-sub">Karlovy Vary</span>
            </span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow">Plastová okna · dveře · montáž i servis</p>
              <h1 className="hero-title">
                Okno je <em>7&nbsp;komor</em>
                <br />
                mezi zimou venku
                <br />
                a&nbsp;teplem doma.
              </h1>
              <p className="hero-lead">
                Osobně vám zaměříme, dodáme a&nbsp;namontujeme okna z&nbsp;profilů
                SALAMANDER — v&nbsp;Karlových Varech a&nbsp;okolí, od&nbsp;zaměření po
                poslední lištu.
              </p>
              <div className="hero-cta">
                <a className="btn btn-solid" href="tel:+420605252694">Zavolat 605 252 694</a>
                <a className="btn btn-ghost" href="mailto:info@plplast.cz">Poslat poptávku</a>
              </div>
            </div>

            {/* Signature: řez okenním profilem — komory jako datový diagram */}
            <figure className="profile-cut" aria-label="Řez sedmikomorovým okenním profilem">
              <div className="cut-frame">
                <span className="cut-chamber c1"><i>1</i></span>
                <span className="cut-chamber c2"><i>2</i></span>
                <span className="cut-chamber c3"><i>3</i></span>
                <span className="cut-chamber c4 cut-steel"><i>4</i><b>ocelová výztuha</b></span>
                <span className="cut-chamber c5"><i>5</i></span>
                <span className="cut-chamber c6"><i>6</i></span>
                <span className="cut-chamber c7"><i>7</i></span>
              </div>
              <figcaption className="cut-caption">
                <span className="cut-temp cold">−12&nbsp;°C venku</span>
                <span className="cut-depth">stavební hloubka až 92&nbsp;mm</span>
                <span className="cut-temp warm">+22&nbsp;°C doma</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: CO DODÁVÁME ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <h2 id="sluzby-h" className="section-title">
            Co pro vás <em>vyrobíme a&nbsp;namontujeme</em>
          </h2>
          <p className="section-lead">
            Nejsme překupník z&nbsp;katalogu. Každou zakázku zaměříme sami, montáž
            děláme vlastníma rukama a&nbsp;po letech se k&nbsp;oknům vracíme na servis.
          </p>

          <ul className="sluzby-grid">
            <li className="sluzba">
              <h3>Plastová okna</h3>
              <p>
                Profily SALAMANDER Standard, Elegant nebo 3D&nbsp;Luxus se středovým
                těsněním. Pro nízkoenergetické domy 6komorový blueEvolution
                s&nbsp;hloubkou 92&nbsp;mm.
              </p>
              <span className="sluzba-tag">5–7 komor · trojskla</span>
            </li>
            <li className="sluzba">
              <h3>Plastové dveře</h3>
              <p>
                Vchodové dveře na míru podle vašeho návrhu, nebo s&nbsp;okrasnými
                výplněmi PERITO. Včetně kování, prahů a&nbsp;seřízení.
              </p>
              <span className="sluzba-tag">výplně PERITO</span>
            </li>
            <li className="sluzba">
              <h3>Garážová vrata</h3>
              <p>
                Výklopná i&nbsp;sekční vrata HÖRMANN — zaměříme otvor, dodáme vrata
                a&nbsp;namontujeme včetně pohonu.
              </p>
              <span className="sluzba-tag">HÖRMANN</span>
            </li>
            <li className="sluzba">
              <h3>Zimní zahrady</h3>
              <p>
                Hliníkové konstrukce TS&nbsp;Aluminium a&nbsp;ALUPROF podle vašeho
                návrhu — od skici po zasklení.
              </p>
              <span className="sluzba-tag">Al profily na míru</span>
            </li>
            <li className="sluzba sluzba-servis">
              <h3>Servis a&nbsp;seřízení oken</h3>
              <p>
                Okno drhne, netěsní nebo špatně dovírá? Seřídíme a&nbsp;opravíme kování
                MACO i&nbsp;SIEGENIA — i&nbsp;okna, která jsme nemontovali my.
              </p>
              <span className="sluzba-tag">kování MACO · SIEGENIA</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / O FIRMĚ ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-inner duvera-grid">
          <div className="duvera-copy">
            <h2 id="duvera-h" className="section-title section-title-light">
              Rodinná firma z&nbsp;Alšovy ulice,
              <br />
              <em>ne call centrum</em>
            </h2>
            <p>
              PL&nbsp;Plast vede Ladislav Plch z&nbsp;Karlových Varů. Když zavoláte,
              zvedne telefon člověk, který u&nbsp;vás bude i&nbsp;na montáži — a&nbsp;který
              za svou práci ručí jménem, ne reklamačním formulářem.
            </p>
            <p>
              Montujeme v&nbsp;Karlových Varech, Ostrově, Chodově, Sokolově
              a&nbsp;po celém Karlovarském kraji. Panelákové byty, rodinné domy
              i&nbsp;lázeňské činžáky s&nbsp;atypickými otvory.
            </p>
            <dl className="duvera-fakta">
              <div>
                <dt>Zaměření</dt>
                <dd>zdarma a&nbsp;osobně u&nbsp;vás — do&nbsp;týdne od&nbsp;zavolání</dd>
              </div>
              <div>
                <dt>Montáž</dt>
                <dd>vlastní parta, běžný byt zvládneme za jeden den včetně úklidu</dd>
              </div>
              <div>
                <dt>Po montáži</dt>
                <dd>zalištování, seřízení a&nbsp;servis kování i&nbsp;po letech</dd>
              </div>
            </dl>
          </div>

          <aside className="duvera-hlasy" aria-label="Reference zákazníků">
            <blockquote>
              <p>
                „Výměna šesti oken v&nbsp;paneláku na Čankovské — ráno přijeli, večer
                bylo hotovo, zalištováno a&nbsp;uklizeno. Žádný prach po bytě.“
              </p>
              <cite>— paní Hrušková, Karlovy Vary&nbsp;· Rybáře</cite>
            </blockquote>
            <blockquote>
              <p>
                „Po dvanácti letech mi pan Plch přijel seřídit kování na oknech, která
                mi tehdy montoval. To dnes udělá málokdo.“
              </p>
              <cite>— pan Vodrážka, Ostrov</cite>
            </blockquote>
            <blockquote>
              <p>
                „Vchodové dveře s&nbsp;výplní PERITO do starého domu — poradili nám
                s&nbsp;výběrem, sedí na milimetr.“
              </p>
              <cite>— manželé Karasovi, Chodov</cite>
            </blockquote>
            <p className="duvera-kontakt">
              Alšova 7, 360&nbsp;01 Karlovy Vary&nbsp;·&nbsp;
              <a href="tel:+420353585090">353&nbsp;585&nbsp;090</a>&nbsp;·&nbsp;
              <a href="mailto:info@plplast.cz">info@plplast.cz</a>
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
