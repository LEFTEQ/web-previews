import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="soot">
      {/* ================= HERO ================= */}
      <header className="top">
        <a className="wordmark" href="#" aria-label="Komíny-Krby, Frýdlant nad Ostravicí">
          <span className="wm-line">KOMÍNY</span>
          <span className="wm-dash" aria-hidden="true" />
          <span className="wm-line wm-line--alt">KRBY</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O firmě</a>
          <a className="nav-call" href="tel:+420558676000">Objednat kontrolu</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Kominík při kontrole spalinové cesty a čištění komína"
            className="hero-img"
            width={1600}
            height={1100}
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-body">
          <p className="eyebrow">Frýdlant nad Ostravicí · od komína po kamna</p>
          <h1 className="hero-title">
            Vyčistíme spalinovou<br />
            cestu <span className="accentword">dřív</span>, než
            <br />vás zaskočí zima.
          </h1>
          <p className="hero-lede">
            Revize, čištění a kontrola komínů, krbových vložek a kotlů na tuhá
            paliva. Vystavíme vám zprávu, kterou uzná pojišťovna i hasiči —
            a poradíme, než přijde topná sezóna.
          </p>
          <div className="hero-cta">
            <a className="btn btn--primary" href="tel:+420558676000">
              Zavolat kominíkovi
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co všechno děláme
            </a>
          </div>

          <dl className="hero-meta">
            <div>
              <dt>Sídlo</dt>
              <dd>Janáčkova 266, Frýdlant n. O.</dd>
            </div>
            <div>
              <dt>Norma</dt>
              <dd>ČSN 73 4201 · 4 Pa test</dd>
            </div>
            <div>
              <dt>Odbornost</dt>
              <dd>Soudní znalec v oboru</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ================= SLUŽBY ================= */}
      <section className="section services" id="sluzby">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co objednáte</p>
          <h2 className="section-title">
            Celá spalinová cesta<br />pod jednou střechou.
          </h2>
          <p className="section-intro">
            Nemusíte shánět zvlášť kominíka, zvlášť topenáře a zvlášť revizního
            technika. Postaráme se o komín, spotřebič i papíry, které pak
            potřebujete doma nechat v šuplíku.
          </p>
        </div>

        <ol className="cards">
          <li className="card" style={{ "--i": 1 } as CSSProperties}>
            <span className="card-no">01</span>
            <h3>Čištění a kontrola komína</h3>
            <p>
              Vymetení sazí, kontrola spalinové cesty a připojeného spotřebiče.
              Nejlepší termín je hned po topné sezóně, na jaře — komín zkontrolujeme
              dřív, než se saze zapečou.
            </p>
            <span className="card-tag">Zpráva o kontrole spalinové cesty</span>
          </li>

          <li className="card" style={{ "--i": 2 } as CSSProperties}>
            <span className="card-no">02</span>
            <h3>Revize kotlů a krbových vložek</h3>
            <p>
              Revize spotřebičů na tuhá paliva — kotle, kamna, krbové vložky.
              Změříme tah, posoudíme stav a řekneme rovnou, jestli topíte
              bezpečně, nebo je čas na zásah.
            </p>
            <span className="card-tag">Individuální topidla · pece · sporáky</span>
          </li>

          <li className="card" style={{ "--i": 3 } as CSSProperties}>
            <span className="card-no">03</span>
            <h3>4 Pa test přívodu vzduchu</h3>
            <p>
              Technické měření podtlaku, které prokáže dostatečný přívod vzduchu
              pro spalování. Bez něj se v dobře utěsněném domě může kouř vracet
              zpátky do místnosti.
            </p>
            <span className="card-tag">Měření mezních hodnot podtlaku</span>
          </li>

          <li className="card" style={{ "--i": 4 } as CSSProperties}>
            <span className="card-no">04</span>
            <h3>Nový komín i sanace</h3>
            <p>
              Montáž kamen a krbů podle ČSN 73 4201 a ČSN EN 1443, komínové
              systémy z pemzy Isokern a vyvložkování systémem ELDFAST tam, kde
              starý komín začíná zlobit.
            </p>
            <span className="card-tag">Isokern · ELDFAST · dánská pemza</span>
          </li>
        </ol>

        <div className="services-image">
          <img
            src="/section-1.webp"
            alt="Realizace komínového systému a krbové vložky"
            width={1400}
            height={900}
          />
          <div className="si-note">
            <p className="si-quote">
              „Plyn je tichý zabiják.“ Detektor oxidu uhelnatého a čistý komín
              nejsou luxus — jsou to dvě věci, které vás v zimě uchrání otravy.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="section trust" id="duvera">
        <div className="trust-grid">
          <div className="trust-media">
            <img
              src="/section-2.webp"
              alt="Prodejna krbů a kamen ve Frýdlantu nad Ostravicí"
              width={1200}
              height={1400}
            />
          </div>

          <div className="trust-body">
            <p className="eyebrow eyebrow--dark">Proč zrovna nám</p>
            <h2 className="section-title">
              Znalec, který u toho<br />sám stojí na střeše.
            </h2>
            <p className="section-intro">
              Nejsme řetězec s call centrem. Ke každému komínu jezdíme sami a
              odpovídáme za to, co napíšeme do zprávy — i před soudem.
            </p>

            <ul className="badges">
              <li>
                <span className="badge-head">Soudní znalec</span>
                <span className="badge-text">
                  Obor stavebnictví — individuální topidla, kamna, krby, kachlová
                  kamna, sporáky, pece, domovní komíny a komínové systémy.
                </span>
              </li>
              <li>
                <span className="badge-head">Český kamnářský institut</span>
                <span className="badge-text">
                  Spolupracujeme na rozvoji řemesla kamnář — víme, jak se dnes
                  staví a topí správně.
                </span>
              </li>
              <li>
                <span className="badge-head">Moravské kominické společenstvo</span>
                <span className="badge-text">
                  Cechovní společenstvo v oboru odtahu spalin, které navazuje na
                  nepřerušenou kominickou tradici.
                </span>
              </li>
              <li>
                <span className="badge-head">Hospodářská komora ČR</span>
                <span className="badge-text">
                  Řádně vedené oprávnění k podnikání — žádný fušer na jeden
                  telefonát.
                </span>
              </li>
            </ul>

            <a className="btn btn--primary btn--wide" href="tel:+420558676000">
              Domluvit termín kontroly
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
