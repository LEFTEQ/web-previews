export default function Page() {
  return (
    <main className="pp">
      {/* ===== HERO ===== */}
      <header className="pp-hero">
        <div className="pp-hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="pp-hero-veil" />
        </div>

        <div className="pp-hero-inner">
          <div className="pp-topbar">
            <div className="pp-wordmark">
              <span className="pp-wm-parket">Parket</span>
              <span className="pp-wm-amp">&amp;</span>
              <span className="pp-wm-pandomo">pandomo</span>
            </div>
            <a className="pp-topbar-tel" href="tel:+420773111162">
              +420&nbsp;773&nbsp;111&nbsp;162
            </a>
          </div>

          <div className="pp-hero-copy">
            <p className="pp-hero-eyebrow">Dřevěné podlahy &middot; stěrky panDOMO&reg; &middot; Praha</p>
            <h1 className="pp-hero-title">
              <span className="pp-line pp-line-1">Podlaha, kterou</span>
              <span className="pp-line pp-line-2">nikdo jiný</span>
              <span className="pp-line pp-line-3">nemá.</span>
            </h1>
            <p className="pp-hero-lead">
              Pokládáme masivní dřevěné podlahy a lijeme bezesparé stěrky
              panDOMO&reg;. Každý metr děláme na místě, rukama — proto se žádná
              naše podlaha neopakuje.
            </p>
            <div className="pp-hero-actions">
              <a className="pp-btn pp-btn-solid" href="tel:+420773111162">
                Zavolat do showroomu
              </a>
              <a className="pp-btn pp-btn-ghost" href="#nabidka">
                Co pokládáme
              </a>
            </div>
          </div>

          <div className="pp-hero-strip" aria-label="Showroom">
            <span className="pp-strip-item">Showroom: Slovinská 752/7, Praha 10</span>
            <span className="pp-strip-dot" aria-hidden="true">◆</span>
            <span className="pp-strip-item">Vzorky dřeva i stěrek na dotek</span>
            <span className="pp-strip-dot" aria-hidden="true">◆</span>
            <span className="pp-strip-item">Stavební chemie ARDEX</span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1 — NABÍDKA ===== */}
      <section className="pp-section pp-offer" id="nabidka">
        <div className="pp-section-head">
          <h2 className="pp-section-title">Dvě řemesla, jedna podlaha</h2>
          <p className="pp-section-sub">
            Dřevo pokládáme lamela po lamele. Stěrku lijeme v jednom celku, beze
            spár. Obojí děláme sami, vlastními lidmi — od zaměření po poslední
            vrstvu oleje.
          </p>
        </div>

        <div className="pp-offer-grid">
          <article className="pp-offer-card pp-offer-wood">
            <p className="pp-offer-tag">Dřevo</p>
            <h3 className="pp-offer-name">Dřevěné podlahy</h3>
            <ul className="pp-offer-list">
              <li>Masivní podlahy z dubu, jasanu a exotických dřevin</li>
              <li>Intarzované podlahy — vzory skládané na míru vašemu interiéru</li>
              <li>Podlahy vhodné na podlahové topení, poradíme se skladbou</li>
              <li>Broušení, olejování a renovace starých parket</li>
            </ul>
          </article>

          <article className="pp-offer-card pp-offer-pandomo">
            <p className="pp-offer-tag">Stěrka</p>
            <h3 className="pp-offer-name">panDOMO&reg; podlahy a stěny</h3>
            <ul className="pp-offer-list">
              <li>Bezesparé lité podlahy — jedna plocha od zdi ke zdi</li>
              <li>Dekorativní stěrky na stěny, i s perleťovým efektem</li>
              <li>Nejširší škála barev na trhu, mícháme přesný odstín</li>
              <li>Beton-image: vzhled pohledového betonu bez betonování</li>
            </ul>
          </article>

          <article className="pp-offer-card pp-offer-truhlarna">
            <p className="pp-offer-tag">Truhlárna</p>
            <h3 className="pp-offer-name">Dveře a nábytek na míru</h3>
            <ul className="pp-offer-list">
              <li>Interiérové dveře sladěné s podlahou — stejné dřevo, stejný tón</li>
              <li>Truhlářské výrobky na zakázku: schody, obklady, vestavby</li>
              <li>Jedna dílna, jeden vkus — interiér drží pohromadě</li>
            </ul>
          </article>
        </div>

        <figure className="pp-offer-figure">
          <img
            src="/section-1.webp"
            alt="Realizace Parket&pandomo — dřevěná podlaha a bezespará stěrka panDOMO v pražském interiéru"
          />
          <figcaption>
            Realizace v Praze: dubová podlaha přechází do lité stěrky panDOMO&reg; —
            beze spár, bez lišt, v jednom odstínu.
          </figcaption>
        </figure>
      </section>

      {/* ===== SEKCE 2 — SHOWROOM / DŮVĚRA ===== */}
      <section className="pp-section pp-showroom">
        <div className="pp-showroom-grid">
          <div className="pp-showroom-copy">
            <h2 className="pp-section-title">Přijďte si na podlahu šlápnout</h2>
            <p className="pp-showroom-lead">
              Podlaha se nedá vybrat z fotky. V našem showroomu ve Vršovicích si
              projdete hotové plochy naboso, porovnáte odstíny stěrek při denním
              světle a osaháte dřevo, které vám za pár týdnů položíme doma.
            </p>

            <dl className="pp-facts">
              <div className="pp-fact">
                <dt>Kde nás najdete</dt>
                <dd>Slovinská 752/7, Praha 10 — Vršovice</dd>
              </div>
              <div className="pp-fact">
                <dt>Domluvte si návštěvu</dt>
                <dd>
                  <a href="tel:+420773111162">+420 773 111 162</a> — najdeme si
                  na vás čas, žádné obcházení mezi regály
                </dd>
              </div>
              <div className="pp-fact">
                <dt>Záruka na řemeslo</dt>
                <dd>
                  Ručíme za provedení celého systému podlahy i stěny — od
                  penetrace po finální vrstvu
                </dd>
              </div>
              <div className="pp-fact">
                <dt>Materiály ARDEX</dt>
                <dd>
                  Pracujeme výhradně se stavební chemií ARDEX, výrobcem systému
                  panDOMO&reg;
                </dd>
              </div>
            </dl>
          </div>

          <aside className="pp-showroom-aside">
            <blockquote className="pp-quote">
              <p>
                „Chtěli jsme betonovou stěrku, ale báli jsme se, že bude studená.
                V showroomu nám ukázali panDOMO s podlahovým topením — dnes po ní
                chodíme bosí celou zimu.“
              </p>
              <cite>— rekonstrukce bytu, Praha 10</cite>
            </blockquote>

            <div className="pp-poradna">
              <h3>Poradna zdarma</h3>
              <p>
                Nevíte, jestli vaše podlahové topení unese masiv? Jak se starat o
                olejovanou podlahu, aby vydržela desítky let? Zeptejte se —
                poradíme i bez zakázky.
              </p>
            </div>

            <p className="pp-babybox">
              Parket&amp;pandomo dlouhodobě přispívá na rozvoj babyboxů po celé
              České republice.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
