import React from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Mechanika",
      popis:
        "Opravy motoru, brzd, spojky, rozvodů i podvozku. Ozve se něco, co ozvat nemá? Najdeme to a spravíme, ať jezdíte bez nervů.",
    },
    {
      cislo: "02",
      nazev: "Autoelektrika",
      popis:
        "Diagnostika řídicích jednotek, čtení chybových kódů, hledání zkratů a vad kabeláže. Kontrolka svítí zbytečně? Zjistíme proč.",
    },
    {
      cislo: "03",
      nazev: "Pneuservis",
      popis:
        "Přezutí, vyvážení, montáž a kontrola tlaku. Sezónu si u nás pohlídáme za vás — přijeďte na letní i zimní gumy.",
    },
    {
      cislo: "04",
      nazev: "Geometrie",
      popis:
        "Seřízení sbíhavosti a odklonu na měřicí stolici. Auto tahá do strany nebo se rychle sjíždí guma? Srovnáme to na desetiny.",
    },
    {
      cislo: "05",
      nazev: "Klimatizace",
      popis:
        "Kontrola, plnění a dezinfekce klimatizace. V létě chladí, jak má, a v kabině to nezavání plísní.",
    },
    {
      cislo: "06",
      nazev: "Pojistné události",
      popis:
        "Havárka? Vyřídíme papíry s pojišťovnou a vůz vrátíme do stavu před nehodou. Vy nemusíte řešit skoro nic.",
    },
  ];

  return (
    <main className="tp">
      <header className="tp-nav">
        <a className="tp-logo" href="#" aria-label="Twinpax Service, autoservis Olomouc">
          <span className="tp-logo-mark" aria-hidden="true">
            <span className="tp-logo-ring" />
            <span className="tp-logo-ring tp-logo-ring--2" />
          </span>
          <span className="tp-logo-text">
            Twinpax<span className="tp-logo-sub">Service · autoservis</span>
          </span>
        </a>
        <nav className="tp-nav-links" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
          <a className="tp-nav-tel" href="tel:+420777075772">777 075 772</a>
        </nav>
      </header>

      <section className="tp-hero">
        <div className="tp-hero-media">
          <img
            src="/hero.webp"
            alt="Vůz na zvedáku v dílně autoservisu Twinpax Service v Olomouci"
            className="tp-hero-img"
          />
          <div className="tp-hero-scrim" aria-hidden="true" />
        </div>

        <div className="tp-hero-body">
          <p className="tp-hero-eyebrow">Autoservis · Olomouc</p>
          <h1 className="tp-hero-title">
            Přivezete auto,<br />
            <span className="tp-hero-title-accent">řekneme rovnou</span><br />
            co s ním je.
          </h1>
          <p className="tp-hero-lede">
            Mechanika, elektrika, pneu i geometrie pod jednou střechou. Žádné
            odhady od stolu — diagnostika, jasná cena předem a termín, který
            platí.
          </p>
          <div className="tp-hero-actions">
            <a className="tp-btn" href="tel:+420777075772">Objednat se · 777 075 772</a>
            <a className="tp-btn tp-btn--ghost" href="#sluzby">Co opravujeme</a>
          </div>

          <dl className="tp-hero-facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7:30–17:00</dd>
            </div>
            <div>
              <dt>Značky</dt>
              <dd>osobní i užitkové</dd>
            </div>
            <div>
              <dt>Kde jsme</dt>
              <dd>Olomoucký kraj</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="tp-services" id="sluzby">
        <div className="tp-sec-head">
          <p className="tp-eyebrow">Servisní list · 06 položek</p>
          <h2 className="tp-sec-title">Co u nás na autě zvládneme</h2>
          <p className="tp-sec-note">
            Nejsme řetězec. Vůz vám přebírá ten, kdo ho pak i opravuje —
            a domluvíte se s ním česky a bez příkras.
          </p>
        </div>

        <ol className="tp-service-grid">
          {sluzby.map((s) => (
            <li className="tp-service" key={s.cislo}>
              <span className="tp-service-no" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="tp-service-name">{s.nazev}</h3>
              <p className="tp-service-desc">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="tp-about" id="onas">
        <div className="tp-about-media">
          <img
            src="/section-1.webp"
            alt="Mechanik při práci na motoru v dílně Twinpax Service"
            className="tp-about-img"
          />
        </div>

        <div className="tp-about-body">
          <p className="tp-eyebrow">Kdo vám auto vezme do ruky</p>
          <h2 className="tp-sec-title">
            Servis, kde vás <span className="tp-underline">znají jménem</span>
          </h2>
          <p className="tp-about-text">
            Twinpax Service je autoservis v Olomouci, kde se nespěchá na úkor
            kvality. Auto rozebereme jen tam, kde je potřeba, díly řekneme
            dopředu a co se dá opravit, to nevyhazujeme. Cílem je, abyste
            odjeli s vozem, kterému zase věříte.
          </p>

          <ul className="tp-about-points">
            <li>
              <strong>Cena předem.</strong> Rozpočet dostanete dřív, než se
              cokoli rozebere. Bez překvapení na faktuře.
            </li>
            <li>
              <strong>Termín, který platí.</strong> Řekneme, kdy je auto
              hotové — a když by to mělo klouzat, voláme sami.
            </li>
            <li>
              <strong>Vyřídíme pojistku.</strong> Po nehodě převezmeme papíry
              i komunikaci s pojišťovnou za vás.
            </li>
          </ul>

          <div className="tp-about-cta">
            <img
              src="/section-2.webp"
              alt="Detail pneuservisu — montáž a vyvážení kola"
              className="tp-about-thumb"
            />
            <div>
              <p className="tp-about-quote">
                „Řekli mi rovnou, co počká a co ne. To u servisu člověk
                normálně neslyší.“
              </p>
              <p className="tp-about-quote-by">— zákazník, Olomouc</p>
              <a className="tp-btn tp-btn--dark" href="tel:+420777075772">
                Domluvit termín
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
