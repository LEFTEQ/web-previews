export default function Page() {
  return (
    <main className="gs">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="hero-scrim" />
        </div>

        <div className="hero-top">
          <div className="wordmark">
            <span className="wordmark-g">G</span>
            <span className="wordmark-sep" aria-hidden="true" />
            <span className="wordmark-txt">SYSTEM</span>
          </div>
          <p className="hero-region">Olomouc · Prostějov · Brno</p>
        </div>

        <div className="hero-body">
          <p className="gauge" aria-hidden="true">
            <span className="gauge-line" />
            <span className="gauge-val">55&nbsp;°C</span>
            <span className="gauge-label">výstupní voda · optimální provoz kondenzačního kotle</span>
          </p>
          <h1>
            Všechno, co teče trubkou,
            <br />
            máme <em>skladem v Olomouci</em>.
          </h1>
          <p className="hero-lead">
            G-SYSTEM je odborný velkoobchod s topením, instalacemi a sanitou.
            Kotle, čerpadla, radiátory i poslední fitinku k nim — připravené
            k odběru pro montážní firmy i pro vás, když stavíte nebo rekonstruujete.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#sortiment">Projít sortiment</a>
            <a className="btn btn-ghost" href="#studio">Navštívit pobočku</a>
          </div>
        </div>

        <ul className="hero-strip" aria-label="Rychlá fakta o velkoobchodu">
          <li><strong>3</strong> logistická centra na Moravě</li>
          <li><strong>20&nbsp;let</strong> v evropské GC skupině</li>
          <li><strong>Dnes objednáte,</strong> zítra montujete</li>
        </ul>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="section-head">
          <p className="kicker"><span className="kicker-pipe" aria-hidden="true" />Sortiment TZB</p>
          <h2 id="sortiment-h">Od kotelny po koupelnu, v jedné objednávce</h2>
          <p className="section-lead">
            Sortiment vedeme tak, jak se dům skutečně staví — po soustavách.
            Každou položku vám poradíme s ohledem na to, co už v domě máte.
          </p>
        </div>

        <div className="sortiment-grid">
          <figure className="sortiment-figure">
            <img
              src="/section-1.webp"
              alt="Kotelna s kondenzačním kotlem, rozdělovačem a měděným potrubím"
            />
            <figcaption>Sklad Olomouc — přes 8&nbsp;000 položek k okamžitému odběru</figcaption>
          </figure>

          <ul className="pipe-list">
            <li className="pipe-item">
              <span className="pipe-dn" aria-hidden="true">DN&nbsp;25</span>
              <div>
                <h3>Tepelná technika</h3>
                <p>
                  Kondenzační kotle, tepelná čerpadla, zplyňovací kotle na dřevo
                  Slokov a Rojek. Pomůžeme i s podklady pro dotaci
                  Nová zelená úsporám.
                </p>
              </div>
            </li>
            <li className="pipe-item">
              <span className="pipe-dn" aria-hidden="true">DN&nbsp;20</span>
              <div>
                <h3>Topenářské zboží</h3>
                <p>
                  Radiátory, podlahové topení, oběhová čerpadla, expanzní nádoby,
                  magnetické filtry TRINNITY a měřiče tepla. Vše dimenzované
                  na váš konkrétní dům.
                </p>
              </div>
            </li>
            <li className="pipe-item">
              <span className="pipe-dn" aria-hidden="true">DN&nbsp;15</span>
              <div>
                <h3>Instalační zboží</h3>
                <p>
                  Rozvody vody a plynu, fitinky, ventily, vodoměry, detektory
                  úniku vody Resideo. Řemeslník u nás najde i to, co jinde
                  objednává týden.
                </p>
              </div>
            </li>
            <li className="pipe-item">
              <span className="pipe-dn" aria-hidden="true">DN&nbsp;10</span>
              <div>
                <h3>Sanita a koupelny Elements</h3>
                <p>
                  Baterie, sprchové systémy, keramika a vany. V koupelnovém
                  studiu Elements vám koupelnu naplánujeme kus po kusu — zdarma.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ===== DŮVĚRA / STUDIO ===== */}
      <section className="studio" id="studio" aria-labelledby="studio-h">
        <div className="studio-grid">
          <div className="studio-copy">
            <p className="kicker kicker-light"><span className="kicker-pipe" aria-hidden="true" />Proč G-SYSTEM</p>
            <h2 id="studio-h">Poradíme dřív, než kopnete do země</h2>
            <p>
              Nejsme e-shop s košíkem a anonymní podporou. Na každé pobočce sedí
              technici, kteří topení sami léta montovali. Přijďte s půdorysem —
              odejdete s návrhem soustavy, výkazem materiálu a kontaktem na
              prověřenou montážní firmu z našeho regionu.
            </p>

            <dl className="trust-facts">
              <div>
                <dt>Součást GC skupiny</dt>
                <dd>
                  Evropská velkoobchodní síť s 20letou historií v oboru
                  technických zařízení budov. Stabilní dodavatel, ne překupník.
                </dd>
              </div>
              <div>
                <dt>Bonusový program pro montážní firmy</dt>
                <dd>
                  Smluvním partnerům se za odebrané zboží automaticky přičítají
                  body — a ty se mění v konkrétní odměny, ne v slevové kupóny.
                </dd>
              </div>
              <div>
                <dt>Odborná školení</dt>
                <dd>
                  Pravidelně školíme topenáře na novinky — od hybridních baterií
                  Sanela po regulaci tepelných čerpadel. Přímo u nás v Olomouci.
                </dd>
              </div>
            </dl>
          </div>

          <figure className="studio-figure">
            <img
              src="/section-2.webp"
              alt="Koupelnové studio Elements s vystavenými vzorovými koupelnami"
            />
            <figcaption>
              Koupelnové studio Elements — vzorové koupelny naživo, plánování
              s architektem v ceně
            </figcaption>
            <blockquote className="studio-quote">
              <p>
                „Kotel, rozvody i koupelnu jsme vybrali za jedno dopoledne.
                Technik nám rovnou spočítal výkon na náš dům.“
              </p>
              <cite>— zákazník, rekonstrukce RD, Olomouc-Holice</cite>
            </blockquote>
          </figure>
        </div>
      </section>
    </main>
  );
}
