export default function Page() {
  return (
    <main className="nx">
      {/* ===== HERO ===== */}
      <header className="nx-hero">
        <div className="nx-hero-inner">
          <div className="nx-topbar">
            <span className="nx-wordmark">
              NEXT<span className="nx-wordmark-comp">COMP</span>
              <span className="nx-wordmark-cursor" aria-hidden="true" />
            </span>
            <span className="nx-topbar-meta">Servis &amp; ASUS showroom — Ostrava</span>
          </div>

          <div className="nx-hero-grid">
            <div className="nx-hero-copy">
              <p className="nx-boot" aria-hidden="true">
                <span className="nx-boot-line">&gt; diagnostika.run</span>
                <span className="nx-boot-line nx-boot-ok">&gt; závada nalezena … OK</span>
              </p>
              <h1 className="nx-h1">
                Počítač stávkuje?
                <br />
                <em>Opravíme ho.</em>
              </h1>
              <p className="nx-lede">
                Servis počítačů a notebooků na Nádražní v centru Ostravy.
                Řekneme vám předem, co je rozbité a kolik bude oprava stát —
                pak se teprve rozhodnete.
              </p>
              <div className="nx-hero-actions">
                <a className="nx-btn nx-btn-solid" href="tel:+420739468713">
                  Zavolat 739 468 713
                </a>
                <a className="nx-btn nx-btn-ghost" href="#servis">
                  Co opravujeme
                </a>
              </div>
              <p className="nx-hero-note">
                Po–Pá 9:00–17:00 · Nádražní 615/30, Moravská Ostrava · bez objednání
              </p>
            </div>

            {/* Signature: schematic motherboard */}
            <div className="nx-board" aria-hidden="true">
              <svg viewBox="0 0 360 420" className="nx-board-svg" role="presentation" focusable="false">
                {/* traces */}
                <g className="nx-traces" fill="none" strokeWidth="2">
                  <path d="M60 40 v70 h80 v60" />
                  <path d="M300 60 h-60 v90" />
                  <path d="M40 220 h70 v-40 h30" />
                  <path d="M320 200 v80 h-90" />
                  <path d="M120 380 v-60 h60" />
                  <path d="M260 380 v-40 h-40 v-40" />
                  <path d="M40 320 h50 v-40" />
                </g>
                {/* vias */}
                <g className="nx-vias">
                  <circle cx="60" cy="40" r="5" />
                  <circle cx="300" cy="60" r="5" />
                  <circle cx="40" cy="220" r="5" />
                  <circle cx="320" cy="200" r="5" />
                  <circle cx="120" cy="380" r="5" />
                  <circle cx="260" cy="380" r="5" />
                  <circle cx="40" cy="320" r="5" />
                </g>
                {/* CPU socket */}
                <g className="nx-cpu">
                  <rect x="130" y="160" width="100" height="100" rx="8" />
                  <rect x="150" y="180" width="60" height="60" rx="4" className="nx-cpu-die" />
                  <text x="180" y="215" textAnchor="middle" className="nx-cpu-label">
                    CPU
                  </text>
                </g>
                {/* RAM slots */}
                <g className="nx-ram">
                  <rect x="268" y="120" width="14" height="120" rx="3" />
                  <rect x="292" y="120" width="14" height="120" rx="3" />
                </g>
                {/* capacitors */}
                <g className="nx-caps">
                  <circle cx="90" cy="300" r="14" />
                  <circle cx="90" cy="340" r="10" />
                  <circle cx="230" cy="300" r="12" />
                </g>
                {/* diagnostic pulse traveling a trace */}
                <circle className="nx-pulse" r="6">
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path="M60 40 v70 h80 v60 h-10 v-10"
                  />
                </circle>
              </svg>
              <div className="nx-board-tag">deska · diagnostika · oprava</div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SERVIS ===== */}
      <section className="nx-section" id="servis" aria-labelledby="servis-h">
        <div className="nx-section-inner">
          <p className="nx-eyebrow">Servis na počkání i na zakázku</p>
          <h2 className="nx-h2" id="servis-h">
            Přineste stroj, odnesete si funkční
          </h2>

          <div className="nx-services">
            <article className="nx-service">
              <div className="nx-service-port" aria-hidden="true">USB</div>
              <h3>Diagnostika a zrychlení</h3>
              <p>
                Počítač se vleče, padá nebo se vůbec nezapne? Najdeme příčinu —
                vadný disk, plnou paměť, přehřívání — a řekneme cenu opravy předem.
              </p>
              <p className="nx-service-detail">Základní diagnostika obvykle do 48 hodin.</p>
            </article>

            <article className="nx-service">
              <div className="nx-service-port" aria-hidden="true">SSD</div>
              <h3>Výměna disku a záchrana dat</h3>
              <p>
                Starý pomalý disk vyměníme za SSD — nejcitelnější zrychlení, jaké
                počítač může dostat. Fotky, dokumenty a poštu přeneseme s sebou.
              </p>
              <p className="nx-service-detail">Data zálohujeme, než na cokoli sáhneme.</p>
            </article>

            <article className="nx-service">
              <div className="nx-service-port" aria-hidden="true">LCD</div>
              <h3>Notebooky: displeje, klávesnice, baterie</h3>
              <p>
                Prasklý displej, prolitá klávesnice, baterie na dvě hodiny.
                Náhradní díly objednáme a vyměníme, notebook nemusíte nikam posílat.
              </p>
              <p className="nx-service-detail">Servisujeme všechny běžné značky, ASUS ze skladu.</p>
            </article>

            <article className="nx-service">
              <div className="nx-service-port" aria-hidden="true">LAN</div>
              <h3>Sítě a technika pro firmy</h3>
              <p>
                WiFi, které pokryje celou kancelář, servery, zálohování, pokladní
                systémy. Navrhneme, dodáme a nastavíme — a když se něco pokazí, přijedeme.
              </p>
              <p className="nx-service-detail">Staráme se o firmy po celé Ostravě a okolí.</p>
            </article>
          </div>

          <div className="nx-steps" aria-label="Jak oprava probíhá">
            <div className="nx-step">
              <span className="nx-step-n">1</span>
              <div>
                <strong>Přinesete nebo zavoláte</strong>
                <p>Bez objednání, Po–Pá 9–17. Popíšete, co stroj dělá — nebo nedělá.</p>
              </div>
            </div>
            <div className="nx-step">
              <span className="nx-step-n">2</span>
              <div>
                <strong>Diagnostikujeme a naceníme</strong>
                <p>Zavoláme vám s přesnou cenou. Bez souhlasu nic neměníme.</p>
              </div>
            </div>
            <div className="nx-step">
              <span className="nx-step-n">3</span>
              <div>
                <strong>Opravíme a předáme</strong>
                <p>Vyzvednete si funkční počítač i s vysvětlením, co se stalo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="nx-section nx-section-dark" aria-labelledby="duvera-h">
        <div className="nx-section-inner">
          <p className="nx-eyebrow nx-eyebrow-light">Kdo se vám o techniku stará</p>
          <h2 className="nx-h2" id="duvera-h">
            Servis v Ostravě, ne anonymní sběrna
          </h2>

          <div className="nx-trust-grid">
            <div className="nx-trust-copy">
              <p>
                Nextcomp opravuje a prodává počítače v Ostravě už přes dvacet let.
                Nejsme výdejní box: váš počítač opravují lidé, se kterými se u pultu
                domluvíte, a kteří vám po opravě vysvětlí, co bylo špatně.
              </p>
              <p>
                Na Nádražní 615/30 najdete i náš ASUS showroom — notebooky, routery
                a monitory si můžete osahat naživo, ne jen proklikat v e‑shopu.
                Náhradní díly proto často máme rovnou skladem.
              </p>
            </div>

            <dl className="nx-facts">
              <div className="nx-fact">
                <dt>Provozovna</dt>
                <dd>Nádražní 615/30, Moravská Ostrava — 5 minut od zastávky Stodolní</dd>
              </div>
              <div className="nx-fact">
                <dt>Otevřeno</dt>
                <dd>Po–Pá 9:00–17:00, opravy přijímáme po celou otevírací dobu</dd>
              </div>
              <div className="nx-fact">
                <dt>Firma</dt>
                <dd>NEXTCOMP, spol. s r. o. · IČ 25392204 · plátce DPH</dd>
              </div>
              <div className="nx-fact">
                <dt>Kontakt</dt>
                <dd>
                  <a href="tel:+420739468713">739 468 713</a> ·{" "}
                  <a href="mailto:info@nextcomp.cz">info@nextcomp.cz</a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="nx-quotes">
            <figure className="nx-quote">
              <blockquote>
                „Notebook s prolitou klávesnicí mi vrátili za tři dny — včetně všech
                dat. A cenu mi řekli dřív, než na něj vůbec sáhli.“
              </blockquote>
              <figcaption>— Markéta H., Ostrava‑Poruba</figcaption>
            </figure>
            <figure className="nx-quote">
              <blockquote>
                „Firemní síť pro osm lidí nám nastavili za odpoledne. Od té doby
                řešíme veškerou techniku jen přes ně.“
              </blockquote>
              <figcaption>— účetní kancelář, Moravská Ostrava</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
