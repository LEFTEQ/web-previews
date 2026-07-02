export default function Page() {
  return (
    <main className="ph">
      {/* ===== HERO ===== */}
      <header className="ph-hero">
        <div className="ph-hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="ph-hero-scrim" />
        </div>

        <div className="ph-frame">
          <nav className="ph-nav" aria-label="Hlavní navigace">
            <div className="ph-wordmark">
              <span className="ph-wordmark-mark" aria-hidden="true">
                {/* profil okna – dvě komory */}
                <svg viewBox="0 0 34 34" width="34" height="34" role="img">
                  <rect x="2" y="2" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="3" />
                  <rect x="8" y="8" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="17" y1="8" x2="17" y2="26" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <span className="ph-wordmark-text">
                P–H&nbsp;<em>Okna</em>
              </span>
            </div>
            <a className="ph-nav-tel" href="tel:+420352622480">
              <span className="ph-nav-tel-label">Zavolejte nám</span>
              <span className="ph-nav-tel-num">352 622 480</span>
            </a>
          </nav>

          <div className="ph-hero-body">
            <p className="ph-eyebrow">Plastová okna · montáž vlastními techniky · Sokolov</p>
            <h1 className="ph-hero-title">
              Okno se vybírá jednou
              <br />
              <span className="ph-hero-title-accent">za dvacet let.</span>
              <br />
              Vyberte ho s&nbsp;námi dobře.
            </h1>
            <p className="ph-hero-lead">
              Zaměříme, vyrobíme na míru a&nbsp;namontujeme plastová okna, která v&nbsp;zimě
              nepouštějí teplo ven a&nbsp;v&nbsp;létě hluk dovnitř. Panelák na sídlišti Michal
              i&nbsp;rodinný dům v&nbsp;Lokti — od zaměření po zednické začištění.
            </p>
            <div className="ph-hero-actions">
              <a className="ph-btn ph-btn-primary" href="tel:+420352622480">
                Zavolat a&nbsp;domluvit zaměření
              </a>
              <a className="ph-btn ph-btn-ghost" href="mailto:info@ph-okna.cz">
                Napsat e‑mail
              </a>
            </div>

            <dl className="ph-hero-specs" aria-label="Základní parametry oken">
              <div className="ph-spec">
                <dt>Zasklení</dt>
                <dd>izolační trojsklo</dd>
              </div>
              <div className="ph-spec">
                <dt>Prostup tepla</dt>
                <dd>U<sub>w</sub> od 0,74 W/m²K</dd>
              </div>
              <div className="ph-spec">
                <dt>Profil</dt>
                <dd>6komorový, 82&nbsp;mm</dd>
              </div>
              <div className="ph-spec">
                <dt>Záruka</dt>
                <dd>5&nbsp;let na okna i&nbsp;montáž</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1 — CO PRO VÁS UDĚLÁME ===== */}
      <section className="ph-section ph-section-services" aria-labelledby="sluzby">
        <div className="ph-frame">
          <div className="ph-section-head">
            <p className="ph-eyebrow ph-eyebrow-dark">Od zaměření po začištění</p>
            <h2 id="sluzby" className="ph-h2">
              Výměna oken je u&nbsp;nás jedna zakázka,
              <br className="ph-br" /> ne pět řemeslníků.
            </h2>
          </div>

          <div className="ph-services-grid">
            <figure className="ph-services-media">
              <img
                src="/section-1.webp"
                alt="Montážník usazuje bílé plastové okno s trojsklem do připraveného otvoru"
              />
              <figcaption>Montáž vedou naši vlastní technici, ne najatá parta.</figcaption>
            </figure>

            <ol className="ph-steps">
              <li className="ph-step">
                <span className="ph-step-no" aria-hidden="true">1</span>
                <div>
                  <h3>Zaměření zdarma u&nbsp;vás doma</h3>
                  <p>
                    Technik přijede, přeměří každý otvor na milimetry a&nbsp;na místě poradí
                    s&nbsp;otevíráním, členěním i&nbsp;barvou. Nabídku dostanete do tří dnů —
                    s&nbsp;konečnou cenou, bez hvězdiček.
                  </p>
                </div>
              </li>
              <li className="ph-step">
                <span className="ph-step-no" aria-hidden="true">2</span>
                <div>
                  <h3>Výroba na míru vašim otvorům</h3>
                  <p>
                    Šestikomorové profily, trojskla a&nbsp;celoobvodové kování. Bílá, dekor dřeva
                    i&nbsp;antracit — u&nbsp;paneláků pohlídáme jednotný vzhled fasády podle
                    požadavků SVJ.
                  </p>
                </div>
              </li>
              <li className="ph-step">
                <span className="ph-step-no" aria-hidden="true">3</span>
                <div>
                  <h3>Montáž a&nbsp;začištění za jeden den</h3>
                  <p>
                    Stará okna vybouráme a&nbsp;odvezeme, nová usadíme, zapěníme a&nbsp;zednicky
                    začistíme. Byt 3+1 zvládneme obvykle za jeden pracovní den — večer větráte
                    novými okny.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <ul className="ph-extras" aria-label="Dodáváme také">
            <li>Vchodové dveře</li>
            <li>Žaluzie a&nbsp;sítě proti hmyzu</li>
            <li>Vnitřní i&nbsp;venkovní parapety</li>
            <li>Servis a&nbsp;seřízení kování</li>
          </ul>
        </div>
      </section>

      {/* ===== SEKCE 2 — DŮVĚRA / REGION ===== */}
      <section className="ph-section ph-section-trust" aria-labelledby="okoli">
        <div className="ph-frame">
          <div className="ph-trust-grid">
            <div className="ph-trust-text">
              <p className="ph-eyebrow ph-eyebrow-dark">Firma ze Sokolova, ne z&nbsp;katalogu</p>
              <h2 id="okoli" className="ph-h2">
                Naše okna poznáte po celém Sokolovsku.
              </h2>
              <p className="ph-trust-lead">
                Sídlíme ve Slovenské ulici v&nbsp;Sokolově a&nbsp;montujeme tam, kam dojedeme
                do hodiny: Sokolov, Habartov, Chodov, Kraslice, Loket, Karlovy Vary. Když se
                po letech něco seřizuje, jsme za rohem — ne na druhém konci republiky.
              </p>

              <ul className="ph-quotes">
                <li className="ph-quote">
                  <blockquote>
                    „Panelák u&nbsp;nádraží, 12&nbsp;oken. Ráno přijeli, večer bylo hotovo
                    a&nbsp;zametená chodba. Konečně neslyšíme vlaky.“
                  </blockquote>
                  <cite>— paní Krausová, Sokolov, sídliště Michal</cite>
                </li>
                <li className="ph-quote">
                  <blockquote>
                    „Po osmi letech se jedno okno hůř zavíralo. Zavolal jsem, druhý den přijel
                    technik a&nbsp;seřídil kování. Tohle se počítá.“
                  </blockquote>
                  <cite>— pan Dvořák, Chodov</cite>
                </li>
              </ul>

              <address className="ph-address">
                <strong>P‑H Okna, s.r.o.</strong>
                <span>Slovenská 1369, 356 01 Sokolov</span>
                <span>
                  <a href="tel:+420352622480">352 622 480</a>
                  {" · "}
                  <a href="mailto:info@ph-okna.cz">info@ph-okna.cz</a>
                </span>
                <span>Po–Pá 8–16, vzorky profilů a&nbsp;skel k&nbsp;vidění na prodejně</span>
              </address>
            </div>

            <figure className="ph-trust-media">
              <img
                src="/section-2.webp"
                alt="Panelový dům v Sokolově s nově vyměněnými bílými plastovými okny"
              />
              <figcaption>Sídliště Michal, Sokolov — výměna 48&nbsp;oken pro SVJ, 2023.</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
