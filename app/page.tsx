import React from "react";

export default function Page() {
  return (
    <main className="pp">
      {/* HERO */}
      <header className="pp-hero">
        <div className="pp-hero__img" aria-hidden="true">
          <img src="/hero.webp" alt="" className="pp-hero__photo" />
          <div className="pp-hero__scrim" />
        </div>

        <nav className="pp-nav" aria-label="Hlavní">
          <a className="pp-mark" href="#" aria-label="Ploty Plzeň, úvod">
            <span className="pp-mark__line">PLOTY</span>
            <span className="pp-mark__plzen">PLZEŇ</span>
            <span className="pp-mark__mesh" aria-hidden="true" />
          </a>
          <div className="pp-nav__links">
            <a href="#nabidka">Co stavíme</a>
            <a href="#proc">Proč my</a>
            <a className="pp-nav__tel" href="tel:+420377220110">377&nbsp;220&nbsp;110</a>
          </div>
        </nav>

        <div className="pp-hero__body">
          <p className="pp-eyebrow">Ploty na klíč od roku 1997 · Plzeňský region</p>
          <h1 className="pp-title">
            Postavíme plot,<br />
            který <em>vydrží</em>
            <span className="pp-title__sub">za rozumnou cenu, bez řečí</span>
          </h1>
          <p className="pp-lede">
            Malá firma ze Starého Plzence. Pletivové ploty, průmyslové panely,
            oplocení sportovišť. Přes tři čtvrtiny zakázek k nám přijde na
            doporučení — a to o kvalitě napoví víc než jakýkoli slib.
          </p>
          <div className="pp-cta">
            <a className="pp-btn" href="tel:+420377220110">Zavolat a domluvit obhlídku</a>
            <a className="pp-btn pp-btn--ghost" href="mailto:info@plotyplzen.cz">
              Napsat e‑mail
            </a>
          </div>
        </div>

        <dl className="pp-spec" aria-label="O firmě">
          <div><dt>Od</dt><dd>1997</dd></div>
          <div><dt>Zakázek z referencí</dt><dd>75&nbsp;%</dd></div>
          <div><dt>Působíme</dt><dd>Plzeňsko</dd></div>
        </dl>
      </header>

      {/* SEKCE 1 — CO STAVÍME */}
      <section id="nabidka" className="pp-sec pp-sec--work">
        <div className="pp-sec__head">
          <span className="pp-tag">Co u nás poptáte</span>
          <h2 className="pp-h2">Od zahradního pletiva po oplocení sportovišť</h2>
          <p className="pp-p">
            Dnes stavíme hlavně pletivové ploty a oplocení průmyslovými panely.
            Doplňkově čelní kovové ploty, plastové výplně a betonové ploty.
            Řekněte nám, co plotem řešíte — poradíme provedení, ne katalog.
          </p>
        </div>

        <ol className="pp-cards">
          <li className="pp-card">
            <span className="pp-card__no">01</span>
            <h3>Pletivové ploty &amp; průmyslové panely</h3>
            <p>
              Naše hlavní práce. Poctivé vypnutí, rovné sloupky, čisté napojení
              na terén. Panelové oplocení tam, kde má plot hlavně chránit.
            </p>
          </li>
          <li className="pp-card">
            <span className="pp-card__no">02</span>
            <h3>Oplocení sportovišť</h3>
            <p>
              Vnější i vnitřní hrací plochy, včetně sítí za brankami. Postaráme se,
              aby míč zůstal na hřišti a plot vydržel i nálety zprudkých střel.
            </p>
          </li>
          <li className="pp-card">
            <span className="pp-card__no">03</span>
            <h3>Čelní kovové oplocení</h3>
            <p>
              Efektní vstup do pozemku, který přitom nevytočí rozpočet. Hezká
              čelní část k pletivu podél zahrady — vkusně a cenově přijatelně.
            </p>
          </li>
          <li className="pp-card">
            <span className="pp-card__no">04</span>
            <h3>Pevnější provedení</h3>
            <p>
              Robustnější oplocení pro majitele velkých psů i do exponované čelní
              části pozemku. Tam, kde běžný plot nestačí.
            </p>
          </li>
        </ol>

        <figure className="pp-fig">
          <img src="/section-1.webp" alt="Realizace pletivového oplocení pozemku od Ploty Plzeň" />
          <figcaption>Realizace z Plzeňska — pletivo napnuté tak, jak má být.</figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — PROČ MY */}
      <section id="proc" className="pp-sec pp-sec--trust">
        <figure className="pp-fig pp-fig--left">
          <img src="/section-2.webp" alt="Technika firmy Ploty Plzeň v akci při stavbě oplocení" />
          <figcaption>Vlastní technika — minibagr, vrtací soupravy, dodávky.</figcaption>
        </figure>

        <div className="pp-trust__body">
          <span className="pp-tag">Proč si vybrat nás</span>
          <h2 className="pp-h2">Malá firma, kterou si zákazníci předávají dál</h2>
          <p className="pp-p">
            Ploty stavíme na klíč od roku 1997 a působíme jen v Plzeňském regionu —
            s řadou zákazníků se potkáváme dlouhé roky. Nízká režie (kancelář sídlí
            v našem domě ve Starém Plzenci) drží ceny korektní, aniž bychom slevovali
            z kvality.
          </p>

          <ul className="pp-facts">
            <li>
              <strong>Kvalita za rozumnou cenu.</strong> Upřednostňujeme kvalitu,
              ale díky nízké režii jsou naše ceny férové.
            </li>
            <li>
              <strong>Náš zákazník.</strong> Řadový stavebník, majitel zahrady či
              pozemku, soukromý investor i solidní stavební firmy.
            </li>
            <li>
              <strong>Vybavení na to máme.</strong> Dodávky Citroën Jumper a Ford
              Connect, minibagr BobCat 1,75&nbsp;t, vrtací soupravy Stihl, vleky
              i vlastní sklad v Plzni‑Černicích.
            </li>
            <li>
              <strong>Do cenových soutěží nechodíme.</strong> Větší stavby —
              sportoviště, průmysl — děláme na přímé oslovení, když investor zná
              naši práci.
            </li>
          </ul>

          <div className="pp-contactline">
            <a href="tel:+420377220110">Zavolat 377&nbsp;220&nbsp;110</a>
            <span aria-hidden="true">·</span>
            <span>Vrchlického 1354, 332 02 Starý Plzenec</span>
          </div>
        </div>
      </section>
    </main>
  );
}
