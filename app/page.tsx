export default function Page() {
  return (
    <main className="kz">
      <section className="kz-hero">
        <div className="kz-hero-media">
          <img
            src="/hero.webp"
            alt="Regál s turistickými a horolezeckými botami v prodejně Sport Kamzík"
            className="kz-hero-img"
          />
          <div className="kz-hero-scrim" aria-hidden="true" />
        </div>

        <div className="kz-hero-content">
          <div className="kz-wordmark" aria-hidden="true">
            <span className="kz-wm-main">Kamzík</span>
            <span className="kz-wm-sub">SPORT · Č. BUDĚJOVICE</span>
          </div>

          <p className="kz-eyebrow">
            <span className="kz-eyebrow-num">28 let</span> na kamenné podrážce &mdash; od roku 1996
          </p>

          <h1 className="kz-h1">
            Boty, které <span className="kz-h1-italic">znají</span> terén<br />
            dřív, než na něj šlápnete.
          </h1>

          <p className="kz-hero-lede">
            Prodejna na Náměstí Přemysla Otakara II. v Českých Budějovicích &mdash;
            a e-shop, který vede stejná parta, co sama leze, chodí po horách
            a testuje podrážky na jihočeských skalách.
          </p>

          <div className="kz-hero-actions">
            <a className="kz-btn-primary" href="#nabidka">Prohlédnout nabídku obuvi</a>
            <a className="kz-btn-ghost" href="#duvera">Proč zrovna my</a>
          </div>

          <dl className="kz-hero-stats">
            <div>
              <dt>Skladem</dt>
              <dd>přímo v prodejně i online</dd>
            </div>
            <div>
              <dt>Doprava zdarma</dt>
              <dd>od 2 000 Kč</dd>
            </div>
            <div>
              <dt>Výdejní místa</dt>
              <dd>přes 500 po ČR</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="nabidka" className="kz-section kz-section-offer">
        <div className="kz-section-head">
          <span className="kz-tag">Sortiment 01/02 &mdash; obuv na míru terénu</span>
          <h2 className="kz-h2">Od chodníku po ferratu &mdash; jedna stěna, tři podrážky</h2>
          <p className="kz-section-lede">
            Boty u nás netřídíme podle barvy krabice, ale podle toho, kam v nich
            půjdete. Poradíme velikost, šířku kopyta i to, jestli tu membránu
            v Budějovicích v dešti skutečně oceníte.
          </p>
        </div>

        <div className="kz-offer-grid">
          <div className="kz-offer-media">
            <img
              src="/section-1.webp"
              alt="Detail turistické boty s vibramovou podrážkou připravené na zkoušku v prodejně"
              className="kz-offer-img"
            />
          </div>

          <ul className="kz-offer-list">
            <li className="kz-offer-item">
              <span className="kz-offer-mark">Treking</span>
              <h3>Turistické boty do kopce i z kopce</h3>
              <p>
                Nízké i kotníkové, s membránou nebo bez &mdash; zkusíte obě šířky
                kopyta rovnou na noze, ne podle čísla na krabici.
              </p>
              </li>
            <li className="kz-offer-item">
              <span className="kz-offer-mark">Skály</span>
              <h3>Lezečky na jihočeský vápenec i umělou stěnu</h3>
              <p>
                Od pohodlných celodenních po agresivní sportovní modely &mdash;
                víme, jak se který profil chová na Sokolčí i na Nultým špici.
              </p>
            </li>
            <li className="kz-offer-item">
              <span className="kz-offer-mark">Běh</span>
              <h3>Trailrunky do terénu i do lesa za barákem</h3>
              <p>
                Nízký drop, pevný zámek paty, podrážka na kořeny a bláto &mdash;
                doporučíme podle vaší trasy, ne podle výprodejové slevy.
              </p>
            </li>
            <li className="kz-offer-item">
              <span className="kz-offer-mark">Kemp</span>
              <h3>Sandály a přezůvky k ohni i k vodě</h3>
              <p>
                Lehké, rychleschnoucí, s popruhem, co drží i na mokrém kameni &mdash;
                ideální doplněk k výbavě z regálu vedle.
              </p>
            </li>
          </ul>
        </div>

        <div className="kz-offer-note">
          <p>
            Aktuálně skladem např. <strong>Rafiki Monte M</strong> se slevou 10&nbsp;%,
            <strong> Rab Protium 18 ND</strong> nebo běžecké <strong>Bridgedale Trail Run UL</strong> &mdash;
            plný přehled najdete v e-shopu, poradíme i telefonicky.
          </p>
        </div>
      </section>

      <section id="duvera" className="kz-section kz-section-trust">
        <div className="kz-trust-grid">
          <div className="kz-trust-text">
            <span className="kz-tag kz-tag-alt">Proč Sport Kamzík &mdash; 02/02</span>
            <h2 className="kz-h2">Prodáváme to, co sami nosíme na nohou</h2>

            <ol className="kz-trust-list">
              <li>
                <span className="kz-trust-num">1996</span>
                <div>
                  <h3>Tradice od kamenné prodejny</h3>
                  <p>
                    Od května 1996 prodáváme outdoorové vybavení v Českých
                    Budějovicích, od roku 2010 i přes e-shop. Nejsme dropshipping
                    sklad &mdash; máme adresu, kde nás najdete.
                  </p>
                </div>
              </li>
              <li>
                <span className="kz-trust-num">02</span>
                <div>
                  <h3>Zkoušíme to, co prodáváme</h3>
                  <p>
                    Lezeme, chodíme po horách, jezdíme na kole i na lodi.
                    Když vám doporučíme botu na Sokolčí nebo do Jickovic,
                    víme, o čem mluvíme, protože jsme tam byli.
                  </p>
                </div>
              </li>
              <li>
                <span className="kz-trust-num">03</span>
                <div>
                  <h3>Poctivost, kterou si ověříte sami</h3>
                  <p>
                    Naši spolehlivost potvrzují zákazníci na Heuréce.
                    Radíme podle vaší nohy a vašeho terénu, ne podle marže.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="kz-trust-media">
            <img
              src="/section-2.webp"
              alt="Interiér kamenné prodejny Sport Kamzík v Českých Budějovicích s regály obuvi"
              className="kz-trust-img"
            />
            <p className="kz-trust-caption">
              Náměstí Přemysla Otakara II. 84/24, České Budějovice &mdash;
              tady vás obujeme osobně.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
