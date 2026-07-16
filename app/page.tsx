export default function Page() {
  return (
    <>
      <header className="at-topbar">
        <span className="at-topbar-brand">ATIKA</span>
        <span className="at-topbar-meta">Truhlárna &amp; kovovýroba · Plzeň</span>
        <a className="at-topbar-tel" href="tel:+420777797908">777&nbsp;797&nbsp;908</a>
      </header>

      <section className="at-hero" aria-label="Nábytek ATIKA — postele na míru z Plzně">
        <div className="at-hero-inner">
          <p className="at-eyebrow">Kovové &amp; masivní postele · vyrobeno v Plzni</p>

          <div className="at-frame">
            <svg
              className="at-headboard"
              viewBox="0 0 600 380"
              role="img"
              aria-label="Silueta kovového čela postele"
              preserveAspectRatio="xMidYMax meet"
            >
              <path
                className="at-rod"
                d="M60 360 L60 150 Q60 110 100 110 L250 110 Q250 50 300 50 Q350 50 350 110 L500 110 Q540 110 540 150 L540 360"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                pathLength={1}
              />
            </svg>
            <h1 className="at-wordmark">ATIKA</h1>
          </div>

          <p className="at-lede">
            Není nábytek jako Nábytek ATIKA. Rámy postelí svařujeme a lakujeme ve
            vlastní dílně, masiv děláme z bukového a dubového dřeva — každý kus na
            míru vaší ložnici.
          </p>

          <div className="at-cta-row">
            <a className="at-btn at-btn-copper" href="#katalog">Prohlédnout postele</a>
            <a className="at-btn at-btn-ghost" href="#dilna">Prodejna Bezručova 32</a>
          </div>
        </div>
      </section>

      <section className="at-section" id="katalog" aria-labelledby="katalog-h">
        <div className="at-wrap">
          <p className="at-eyebrow2">Katalog dílny</p>
          <h2 className="at-h2" id="katalog-h">
            Čtyři řemesla pod jednou střechou
          </h2>
          <p className="at-sub">
            Vyrábíme na objednávku, dodáváme v řádu týdnů. Skladové kousky odvezete
            hned. Ceny jsou za základní provedení a rozměr přizpůsobíme vám.
          </p>

          <div className="at-grid">
            <article className="at-card">
              <span className="at-tag">Vyrobeno v ČR</span>
              <h3 className="at-card-title">Kovové postele</h3>
              <p className="at-card-desc">
                Ručně svařované ocelové rámy s práškovým lakem — od tradičních čel
                po čistý minimalismus. Pevné, stabilní, na celý život.
              </p>
              <ul className="at-chips" aria-label="Modely kovových postelí">
                <li>ANGELETA</li>
                <li>INES</li>
                <li>MERRY</li>
                <li>NAN&nbsp;JING</li>
                <li>TOSCANA</li>
              </ul>
              <dl className="at-spec">
                <div><dt>Dodání</dt><dd>3–4 týdny na míru</dd></div>
                <div><dt>Povrch</dt><dd>Práškový lak — sage, ink, měď</dd></div>
              </dl>
              <p className="at-price">od <span>11&nbsp;790 Kč</span></p>
            </article>

            <article className="at-card">
              <span className="at-tag">Vyrobeno v ČR</span>
              <h3 className="at-card-title">Postele z masivu</h3>
              <p className="at-card-desc">
                Buk a dub, olejované — ne dýha. Od jednoduchých rámů po luxusní čela
                do tradiční i moderní ložnice.
              </p>
              <ul className="at-chips" aria-label="Modely masivních postelí">
                <li>AMANDA</li>
                <li>DARA</li>
                <li>ANGELIKA</li>
                <li>INA</li>
                <li>TAMARA</li>
              </ul>
              <dl className="at-spec">
                <div><dt>Dodání</dt><dd>6–8 týdnů na míru</dd></div>
                <div><dt>Dřevo</dt><dd>Bukový / dubový masiv</dd></div>
              </dl>
              <p className="at-price">od <span>13&nbsp;240 Kč</span></p>
            </article>

            <article className="at-card">
              <span className="at-tag at-tag-sage">Ke každé posteli</span>
              <h3 className="at-card-title">Matrace a rošty</h3>
              <p className="at-card-desc">
                Klidný spánek bez bolavých zad. Matrace různé tvrdosti, výšky i
                složení — včetně antialergenních — a rošty, které k nim sedí.
              </p>
              <dl className="at-spec">
                <div><dt>Tvrdost</dt><dd>Měkká až tvrdá, na výběr</dd></div>
                <div><dt>Sklad</dt><dd>Většina modelů skladem</dd></div>
              </dl>
              <p className="at-price at-price-muted">Poradíme podle vaší váhy i pozice spánku</p>
            </article>

            <article className="at-card">
              <span className="at-tag at-tag-sage">Pro nejmenší</span>
              <h3 className="at-card-title">Dětský nábytek</h3>
              <p className="at-card-desc">
                Variabilní a bezpečné sestavy s ohlazenými hranami. Hravé, praktické
                a stabilní — poskládají se s dítětem, jak roste.
              </p>
              <dl className="at-spec">
                <div><dt>Sestavy</dt><dd>Postele, stoly, úložné díly</dd></div>
                <div><dt>Hrany</dt><dd>Zaoblené, bezpečné</dd></div>
              </dl>
              <p className="at-price at-price-muted">Vyberou si i nejnáročnější malí zákazníci</p>
            </article>
          </div>
        </div>
      </section>

      <section className="at-section at-section-trust" id="dilna" aria-labelledby="dilna-h">
        <div className="at-wrap at-trust">
          <div className="at-trust-lead">
            <p className="at-eyebrow2">Kdo za nábytkem stojí</p>
            <h2 className="at-h2" id="dilna-h">
              25 let v Plzni. Vlastní dílna, ne montovna.
            </h2>
            <p className="at-sub">
              Kovové rámy u nás vznikají od svaru po poslední vrstvu laku, masiv
              hoblujeme a olejujeme. Rozměr, moření i kování přizpůsobíme vaší
              ložnici. Přijďte si sáhnout na prodejnu Bezručova 32 — průběžně tu
              probíhá výprodej vystavených kusů se slevou až 60 %.
            </p>

            <div className="at-contact">
              <a className="at-btn at-btn-copper" href="tel:+420777797908">Zavolat 777 797 908</a>
              <a className="at-btn at-btn-ghost at-btn-dark" href="mailto:info@nabytekatika.cz">info@nabytekatika.cz</a>
            </div>
          </div>

          <dl className="at-sheet" aria-label="Proč nakoupit u ATIKA">
            <div className="at-sheet-row">
              <dt>Vlastní kovovýroba</dt>
              <dd>Rámy svařujeme a práškově lakujeme přímo v Plzni.</dd>
            </div>
            <div className="at-sheet-row">
              <dt>Masiv buk / dub</dt>
              <dd>Olejované dřevo, žádná dýha ani napodobenina.</dd>
            </div>
            <div className="at-sheet-row">
              <dt>Výroba na míru</dt>
              <dd>Rozměry, moření i kování šijeme na vaši ložnici.</dd>
            </div>
            <div className="at-sheet-row">
              <dt>Prodejna Bezručova 32</dt>
              <dd>Osobní odběr, poradenství a výprodej vystavených kusů.</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
