export default function Page() {
  return (
    <main className="bt">
      <section className="bt-hero">
        <div className="bt-hero__media">
          <img
            src="/hero.webp"
            alt="Venkovní jednotka tepelného čerpadla instalovaná na fasádě rodinného domu v Olomouci"
            className="bt-hero__img"
          />
          <div className="bt-hero__scale" aria-hidden="true">
            <span>-15 °C</span>
            <span>0 °C</span>
            <span className="is-live">21 °C</span>
            <span>35 °C</span>
          </div>
        </div>
        <div className="bt-hero__body">
          <p className="bt-eyebrow">BLUE TRADE, s.r.o. — Olomouc · chlazení a vytápění od 1996</p>
          <h1 className="bt-wordmark">
            BLUE<span className="bt-wordmark__accent">/</span>TRADE
          </h1>
          <p className="bt-hero__lead">
            Tepelná čerpadla, která vytopí dům v mrazu a ochladí ho v srpnovém
            vedru. Navrhneme, dodáme a zapojíme tak, aby to fungovalo ještě
            deset topných sezón po nás.
          </p>
          <div className="bt-hero__actions">
            <a className="bt-btn bt-btn--primary" href="tel:+420000000000">
              Zavolat na poradenství
            </a>
            <a className="bt-btn bt-btn--ghost" href="#nabidka">
              Zobrazit nabídku
            </a>
          </div>
          <dl className="bt-hero__facts">
            <div>
              <dt>Založeno</dt>
              <dd>2006 (praxe od 1996)</dd>
            </div>
            <div>
              <dt>Zastoupení</dt>
              <dd>Panasonic pro Moravu a Slezsko</dd>
            </div>
            <div>
              <dt>Servis</dt>
              <dd>Záruční i pozáruční, celý rok</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bt-section bt-section--offer" id="nabidka">
        <div className="bt-section__head">
          <p className="bt-eyebrow">Nabídka / 3 typy zapojení</p>
          <h2 className="bt-h2">Čerpadlo vybíráme podle domu, ne podle katalogu</h2>
          <p className="bt-section__lead">
            Vzduch, voda, nebo kombinace s klimatizací na léto — každý dům v
            Olomouci a okolí má jiné nároky na tepelnou ztrátu i rozvody.
            Proto vždy nejdřív měříme, pak nabízíme.
          </p>
        </div>

        <div className="bt-offer-grid">
          <div className="bt-offer-media">
            <img
              src="/section-1.webp"
              alt="Technik BLUE TRADE nastavuje řídicí jednotku tepelného čerpadla"
              className="bt-offer-media__img"
            />
          </div>
          <ol className="bt-offer-list">
            <li className="bt-offer-item">
              <span className="bt-offer-item__mark">01</span>
              <div>
                <h3>Vzduch–voda pro rodinný dům</h3>
                <p>
                  Náhrada plynového kotle nebo elektrických přímotopů.
                  Napojíme na stávající radiátory i podlahové topení,
                  spočítáme reálnou návratnost investice.
                </p>
              </div>
            </li>
            <li className="bt-offer-item">
              <span className="bt-offer-item__mark">02</span>
              <div>
                <h3>Tepelné čerpadlo s chlazením na léto</h3>
                <p>
                  Jedna jednotka na vytápění v zimě i příjemných 23 °C
                  v podkroví, když teploměr venku ukazuje přes 30.
                </p>
              </div>
            </li>
            <li className="bt-offer-item">
              <span className="bt-offer-item__mark">03</span>
              <div>
                <h3>Servis a poradenství bez prodejního tlaku</h3>
                <p>
                  Poradíme i k čerpadlu, které jsme neinstalovali. Revize,
                  doplnění chladiva, oprava — objednáte na telefonu, ne
                  přes formulář, který nikdo nečte.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="bt-section bt-section--trust">
        <div className="bt-trust-grid">
          <div className="bt-trust-media">
            <img
              src="/section-2.webp"
              alt="Detail potrubí a chladicího okruhu klimatizační techniky BLUE TRADE"
              className="bt-trust-media__img"
            />
          </div>
          <div className="bt-trust-body">
            <p className="bt-eyebrow">Proč BLUE TRADE / od roku 1996</p>
            <h2 className="bt-h2">Firmu vede stejný technik, se kterým se domluvíte na telefonu</h2>
            <p className="bt-trust-lede">
              „Jsme obchodní společnost, ale hlavně vzduchotechnici. Nenabízíme
              zákazníkovi to, co máme zrovna skladem — nabízíme to, co jeho
              dům skutečně potřebuje,“ říká Jan Kubeš, jednatel BLUE TRADE.
            </p>
            <ul className="bt-trust-facts">
              <li>
                <strong>2007</strong>
                <span>oficiální zastoupení Panasonic / Sanyo pro Moravu a Slezsko</span>
              </li>
              <li>
                <strong>29 let</strong>
                <span>zkušeností v oboru klimatizace a vzduchotechniky od roku 1996</span>
              </li>
              <li>
                <strong>Olomouc</strong>
                <span>sídlo i servisní výjezdy po celém kraji</span>
              </li>
            </ul>
            <p className="bt-trust-note">
              Značky, se kterými pracujeme: Panasonic, Lennox, Climaveneta,
              Refrion, Devatec, ActionClima, Vortice — vybíráme podle toho,
              co se má hodit k vašemu domu, ne podle toho, co je zrovna na
              slevě.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
