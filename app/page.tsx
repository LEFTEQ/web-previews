export default function Page() {
  return (
    <div className="bo-root">
      <header className="bo-nav">
        <a className="bo-wordmark" href="#top" aria-label="BEST Ostrava — mytí oken">
          <span className="bo-wm-main">BEST</span>
          <span className="bo-wm-streak" aria-hidden="true" />
          <span className="bo-wm-sub">
            <span className="bo-wm-city">OSTRAVA</span>
            <span className="bo-wm-trade">mytí oken</span>
          </span>
        </a>
        <nav className="bo-navlinks" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#proc">Proč my</a>
        </nav>
      </header>

      <main id="top">
        <section className="bo-hero" aria-labelledby="bo-hero-title">
          <div className="bo-hero-inner">
            <p className="bo-eyebrow">Mytí oken &middot; Ostrava a okolí</p>
            <h1 id="bo-hero-title" className="bo-hero-title">
              Jeden tah stěrkou
              <span className="bo-hero-accent"> a sklo je zase čisté.</span>
            </h1>
            <p className="bo-hero-sub">
              Myjeme okna, prosklené fasády a výlohy po celé Ostravě.
              Bez šmouh, bez kapek na rámu, bez řečí — za oknem zase
              uvidíte město, ne špínu.
            </p>
            <ul className="bo-hero-meta">
              <li><strong>18 let</strong> na ostravských fasádách</li>
              <li><strong>Lanový přístup</strong> s certifikací</li>
              <li><strong>Garance</strong> čistého skla</li>
            </ul>
          </div>

          {/* Signature: fogged pane wiped clean by a diagonal squeegee stroke */}
          <div className="bo-frost" aria-hidden="true">
            <div className="bo-blade">
              <span className="bo-blade-bead bo-blade-bead--a" />
              <span className="bo-blade-bead bo-blade-bead--b" />
            </div>
          </div>
        </section>

        <section id="sluzby" className="bo-section bo-services" aria-labelledby="bo-serv-title">
          <div className="bo-streak-divider" aria-hidden="true" />
          <header className="bo-section-head">
            <p className="bo-label">Co pro vás umyjeme</p>
            <h2 id="bo-serv-title" className="bo-section-title">
              Čtyři druhy skla, jedna stěrka.
            </h2>
          </header>

          <ul className="bo-cards">
            <li className="bo-card">
              <span className="bo-card-tag">Byty</span>
              <h3 className="bo-card-title">Okna bytů a rodinných domů</h3>
              <p className="bo-card-text">
                Rámy, parapety i mezisklo. Umyjeme i špaletová okna
                a těžko přístupné světlíky. Nábytek chráníme, po nás
                zůstane sucho.
              </p>
            </li>
            <li className="bo-card">
              <span className="bo-card-tag">Fasády</span>
              <h3 className="bo-card-title">Prosklené fasády a výškové práce</h3>
              <p className="bo-card-text">
                Administrativní budovy a bytové domy do výšky —
                lanovým přístupem nebo plošinou. Odsolíme i zaschlé
                skvrny od dešťů a stavební prach.
              </p>
            </li>
            <li className="bo-card">
              <span className="bo-card-tag">Provozy</span>
              <h3 className="bo-card-title">Výlohy a provozovny</h3>
              <p className="bo-card-text">
                Pravidelný rozpis pro obchody, kavárny a showroomy.
                Přijedeme před otevírací dobou, ať máte výlohu čistou,
                než dorazí první zákazník.
              </p>
            </li>
            <li className="bo-card">
              <span className="bo-card-tag">Stavby</span>
              <h3 className="bo-card-title">Mytí po rekonstrukci</h3>
              <p className="bo-card-text">
                Zbytky malty, silikonu, lepidel i cementového závoje
                ze skla. Nová okna po kolaudaci předáme do provozu
                bez jediné šmouhy.
              </p>
            </li>
          </ul>
        </section>

        <section id="proc" className="bo-section bo-trust" aria-labelledby="bo-trust-title">
          <div className="bo-streak-divider" aria-hidden="true" />
          <div className="bo-trust-grid">
            <div className="bo-trust-copy">
              <p className="bo-label">Proč BEST Ostrava</p>
              <h2 id="bo-trust-title" className="bo-section-title">
                Rozdíl poznáte na první pohled skrz.
              </h2>
              <p className="bo-trust-lede">
                Jsme malá parta z Ostravy, která dělá jen okna a fasády —
                a proto je dělá pořádně. Když po nás na skle zůstane
                šmouha, přijedeme ji zdarma dotáhnout.
              </p>

              <ul className="bo-trust-list">
                <li>
                  <span className="bo-trust-key">Lokální</span>
                  Známe ostravské počasí i uhelný prach na fasádách
                  Poruby, Vítkovic i centra.
                </li>
                <li>
                  <span className="bo-trust-key">Pojištění</span>
                  Pojištění odpovědnosti do 5 mil. Kč — za vaše sklo
                  i majetek ručíme.
                </li>
                <li>
                  <span className="bo-trust-key">Výška</span>
                  Certifikovaný lanový přístup i vlastní plošina,
                  bez lešení a zbytečných průtahů.
                </li>
                <li>
                  <span className="bo-trust-key">Garance</span>
                  Nespokojenost s výsledkem? Doděláme zdarma, dokud
                  nebude sklo čisté.
                </li>
              </ul>

              <p className="bo-contact">
                Ateliér: Ukázková 123, Ostrava &nbsp;·&nbsp; tel — &nbsp;·&nbsp; e-mail —
              </p>
            </div>

            {/* Signature reappears: the before/after pane split by the streak */}
            <figure className="bo-pane" aria-label="Ukázka: sklo před mytím a po mytí">
              <div className="bo-pane-before">
                <span className="bo-pane-label">Před</span>
              </div>
              <div className="bo-pane-after">
                <span className="bo-pane-label bo-pane-label--after">Po</span>
              </div>
              <span className="bo-pane-edge" aria-hidden="true" />
              <figcaption className="bo-pane-cap">
                Uhelný povlak z fasády &rarr; čisté sklo jedním tahem
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
    </div>
  );
}
