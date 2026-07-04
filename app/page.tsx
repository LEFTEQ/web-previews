import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="ph">
      {/* ============ HERO ============ */}
      <header className="ph-hero">
        <nav className="ph-nav" aria-label="Hlavní navigace">
          <a className="ph-mark" href="#top">
            <span className="ph-mark-line">Pražské</span>
            <span className="ph-mark-line ph-mark-italic">hodinářství</span>
          </a>
          <ul className="ph-nav-links">
            <li><a href="#nabidka">Hodinky</a></li>
            <li><a href="#servis">Servis</a></li>
            <li><a href="#dovera">O nás</a></li>
          </ul>
          <a className="ph-nav-call" href="tel:+420601333999">Zavolat 601&nbsp;333&nbsp;999</a>
        </nav>

        <div className="ph-hero-grid" id="top">
          <div className="ph-hero-text">
            <p className="ph-eyebrow">Zenklova 11 · Praha 8 · od roku ’94</p>
            <h1 className="ph-hero-title">
              Čas, který <em>drží</em> hodnotu.
            </h1>
            <p className="ph-hero-lead">
              Rodinné hodinářství na Palmovce. Prodáváme Rolex, Breguet,
              Breitling i IWC, ale hlavně jim rozumíme — každý stroj, který
              projde naším ponkem, otevřeme, přeměříme a zrenovujeme vlastníma
              rukama. Přes třicet let a jedna lupa na oku.
            </p>
            <div className="ph-hero-actions">
              <a className="ph-btn" href="#nabidka">Prohlédnout hodinky</a>
              <a className="ph-btn ph-btn-ghost" href="#servis">Přinést hodinky do servisu</a>
            </div>
          </div>

          <figure className="ph-hero-figure">
            <img
              src="/hero.webp"
              alt="Detail mechanického hodinového strojku pod lupou hodináře"
              className="ph-hero-img"
              width={880}
              height={1100}
            />
            <figcaption className="ph-hero-cap">
              <span className="ph-hero-cap-num">17</span>
              <span className="ph-hero-cap-txt">kamenů · manufakturní kalibr, seřízený na chod ±2&nbsp;s/den</span>
            </figcaption>
          </figure>
        </div>

        {/* Chodová stopnice — signaturní prvek: minutová stupnice běžící přes celou šířku */}
        <div className="ph-scale" aria-hidden="true">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              className={"ph-tick" + (i % 5 === 0 ? " ph-tick-major" : "")}
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </div>
      </header>

      {/* ============ NABÍDKA HODINEK ============ */}
      <section className="ph-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="ph-section-head">
          <p className="ph-eyebrow">Aktuálně na pultě</p>
          <h2 className="ph-h2" id="nabidka-h">Vybrané hodinky skladem</h2>
          <p className="ph-section-note">
            Každý kus jsme fyzicky proměřili a otestovali. Ceny jsou konečné,
            se zárukou a bez skrytých poplatků. Kompletní nabídku vždy rádi
            projdeme s vámi na prodejně.
          </p>
        </div>

        <ul className="ph-watch-list">
          <li className="ph-watch">
            <div className="ph-watch-ref">Ref. 126334</div>
            <h3 className="ph-watch-name">Rolex Datejust 41 <span>Mint Green</span></h3>
            <p className="ph-watch-desc">
              Nejžádanější barva sezóny, luneta z 18k bílého zlata.
              Ročník 2026, mezinárodní záruka Rolex. Skladem, ihned k odběru.
            </p>
            <div className="ph-watch-foot">
              <span className="ph-watch-tag">Skladem</span>
              <span className="ph-watch-price">389&nbsp;500&nbsp;Kč</span>
            </div>
          </li>

          <li className="ph-watch">
            <div className="ph-watch-ref">Ref. 126610LV</div>
            <h3 className="ph-watch-name">Rolex Submariner 41 <span>„Starbucks“</span></h3>
            <p className="ph-watch-desc">
              Vzácné provedení se zelenou keramickou lunetou. Nové, ročník 2026,
              mezinárodní záruka. Dodání 7–10 dnů.
            </p>
            <div className="ph-watch-foot">
              <span className="ph-watch-tag">Na objednávku</span>
              <span className="ph-watch-price">399&nbsp;500&nbsp;Kč</span>
            </div>
          </li>

          <li className="ph-watch">
            <div className="ph-watch-ref">Breguet 5517</div>
            <h3 className="ph-watch-name">Breguet <span>Marine</span></h3>
            <p className="ph-watch-desc">
              Dědic manufaktury Abrahama-Louise Bregueta, hodináře Napoleona
              i Marie-Antoinetty. Guilloché číselník, čitelný na první pohled.
            </p>
            <div className="ph-watch-foot">
              <span className="ph-watch-tag ph-watch-tag-sale">Sleva 24 %</span>
              <span className="ph-watch-price">
                <s>328&nbsp;700</s> 249&nbsp;500&nbsp;Kč
              </span>
            </div>
          </li>

          <li className="ph-watch">
            <div className="ph-watch-ref">IWC IW329303</div>
            <h3 className="ph-watch-name">IWC Big Pilot’s <span>Watch 43</span></h3>
            <p className="ph-watch-desc">
              Modrý číselník, čistá pilotní čitelnost. Pouzdro 43 mm,
              které sedne i na útlejší zápěstí.
            </p>
            <div className="ph-watch-foot">
              <span className="ph-watch-tag ph-watch-tag-sale">Sleva 19 %</span>
              <span className="ph-watch-price">
                <s>270&nbsp;000</s> 219&nbsp;500&nbsp;Kč
              </span>
            </div>
          </li>

          <li className="ph-watch">
            <div className="ph-watch-ref">Eterna 2951.41</div>
            <h3 className="ph-watch-name">Eterna Legacy Date <span>Silver</span></h3>
            <p className="ph-watch-desc">
              Klasické společenské hodinky. Stříbrný číselník, pouzdro 41,5 mm.
              Vstupenka do světa švýcarské mechaniky za rozumnou cenu.
            </p>
            <div className="ph-watch-foot">
              <span className="ph-watch-tag ph-watch-tag-sale">Sleva 50 %</span>
              <span className="ph-watch-price">
                <s>59&nbsp;100</s> 29&nbsp;500&nbsp;Kč
              </span>
            </div>
          </li>

          <li className="ph-watch ph-watch-cta">
            <img
              src="/section-1.webp"
              alt="Náramkové hodinky ve vitríně pražského hodinářství"
              className="ph-watch-img"
              width={640}
              height={480}
            />
            <h3 className="ph-watch-name">Hledáte konkrétní kus?</h3>
            <p className="ph-watch-desc">
              Sháníme hodinky na přání a poradíme s výběrem. Ozvěte se, co máte
              v hlavě — od Datejustu po vintage chronograf.
            </p>
            <a className="ph-btn ph-btn-ghost" href="tel:+420601333999">Zavolat a domluvit prohlídku</a>
          </li>
        </ul>
      </section>

      {/* ============ SERVIS + DŮVĚRA ============ */}
      <section className="ph-section ph-section-dark" id="servis" aria-labelledby="servis-h">
        <div className="ph-dark-grid">
          <div className="ph-dark-text" id="dovera">
            <p className="ph-eyebrow ph-eyebrow-light">Na ponku od roku ’94</p>
            <h2 className="ph-h2 ph-h2-light" id="servis-h">
              Servis, kde hodinky <em>rozeberou</em>, ne jen otevřou.
            </h2>
            <p className="ph-dark-lead">
              Motto Tomáše Bati „Náš zákazník — náš pán“ bereme doslova. Ať
              přinesete stodolarové quartz hodinky po dědovi, nebo Rolex Daytonu
              k výměně číselníku, dostanou stejnou péči. Záruční i pozáruční
              servis, zakázkovou výrobu šperků a zlatnické opravy děláme přes
              třicet let na jednom místě.
            </p>

            <ol className="ph-work">
              <li className="ph-work-item">
                <span className="ph-work-num">01</span>
                <div>
                  <h3 className="ph-work-name">Diagnostika a měření</h3>
                  <p>Test vodotěsnosti, kontrola chodu, přesnost na časoměru — než se čehokoli dotkneme.</p>
                </div>
              </li>
              <li className="ph-work-item">
                <span className="ph-work-num">02</span>
                <div>
                  <h3 className="ph-work-name">Oprava a renovace</h3>
                  <p>Výměny baterií a skel, opravy mechanik, renovace povrchu pouzdra i tahu.</p>
                </div>
              </li>
              <li className="ph-work-item">
                <span className="ph-work-num">03</span>
                <div>
                  <h3 className="ph-work-name">Zlatnictví na míru</h3>
                  <p>Zakázkové šperky, snubní prsteny a zlatnické opravy s třicetiletou tradicí.</p>
                </div>
              </li>
            </ol>

            <p className="ph-dark-lead ph-dark-lead-alt">
              Kromě prodeje a servisu hodinky také <strong>vykupujeme za hotové</strong>,
              nabízíme komisní prodej i zástavu — férově a s okamžitým oceněním na místě.
            </p>
          </div>

          <figure className="ph-dark-figure">
            <img
              src="/section-2.webp"
              alt="Hodinář při renovaci povrchu pouzdra luxusních hodinek"
              className="ph-dark-img"
              width={720}
              height={900}
            />
            <figcaption className="ph-dark-cap">Renovace povrchu · z naší dílny</figcaption>
          </figure>
        </div>

        <div className="ph-facts">
          <div className="ph-fact">
            <span className="ph-fact-num">30+</span>
            <span className="ph-fact-lab">let na jednom místě</span>
          </div>
          <div className="ph-fact">
            <span className="ph-fact-num">Po–Pá</span>
            <span className="ph-fact-lab">9–17 h, Zenklova 11, Praha 8</span>
          </div>
          <div className="ph-fact">
            <span className="ph-fact-num">±2 s</span>
            <span className="ph-fact-lab">přesnost po seřízení, na den</span>
          </div>
        </div>
      </section>
    </main>
  );
}
