export default function Page() {
  const sortiment = [
    {
      kod: "ZDIVO",
      nazev: "Zdicí materiály",
      popis: "Cihly Klimabloc, šalovací tvárnice, betonové ploty. Skladem na dvoře, nakládáme hned.",
    },
    {
      kod: "IZOLACE",
      nazev: "Tepelné izolace",
      popis: "Fasádní polystyren, minerální vata i foukané izolace do stropů a dutin — včetně aplikace.",
    },
    {
      kod: "SUCHÁ VÝSTAVBA",
      nazev: "Sádrokartony",
      popis: "Desky, profily, tmely a šrouby. Spočítáme spotřebu na celou příčku i podhled.",
    },
    {
      kod: "STŘECHA",
      nazev: "Asfaltové pásy a žlaby",
      popis: "Hydroizolace spodní stavby i střechy, okapové systémy a klempířské prvky.",
    },
    {
      kod: "KOMÍNY",
      nazev: "Komínové systémy ROHR KAMIN",
      popis: "Kompletní komínové sestavy včetně poradenství k tahu a napojení spotřebiče.",
    },
    {
      kod: "KÁMEN",
      nazev: "Obkladový kámen",
      popis: "Přírodní i umělý kámen na fasády, sokly a ploty. Vzorky k vidění na prodejně.",
    },
    {
      kod: "CHEMIE",
      nazev: "Stavební chemie",
      popis: "Lepidla, penetrace, hydroizolační stěrky, kari sítě a další železo ke zdění.",
    },
    {
      kod: "PLYN",
      nazev: "Propan-butan",
      popis: "Výměna lahví 2 kg, 10 kg a 33 kg na počkání, přímo u výdeje materiálu.",
    },
  ];

  return (
    <main>
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-topbar">
          <div className="wordmark" aria-label="AFFORD CB — stavebniny České Budějovice">
            <span className="wordmark-name">AFFORD</span>
            <span className="wordmark-cb">CB</span>
            <span className="wordmark-sub">stavebniny · České Budějovice</span>
          </div>
          <a className="topbar-tel" href="tel:+420603863576">
            <span className="topbar-tel-label">Volejte sklad</span>
            <span className="topbar-tel-number">603 863 576</span>
          </a>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Prodej stavebního materiálu s rozvozem hydraulickou rukou</p>
            <h1 className="hero-title">
              Materiál na celou stavbu.
              <br />
              <em>Naložený, spočítaný, dovezený.</em>
            </h1>
            <p className="hero-lead">
              Od základové desky po komín. Přineste projekt — spočítáme spotřebu
              cihel, izolace i sádrokartonu a zboží vám složíme autem s hydraulickou
              rukou přímo na stavbě.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+420603863576">
                Zavolat 603 863 576
              </a>
              <a className="btn btn-ghost" href="mailto:info@affordcb.cz">
                Poslat poptávku e-mailem
              </a>
            </div>
            <ul className="hero-facts" aria-label="Základní informace">
              <li>
                <strong>Rozvoz</strong>
                <span>auto s hydraulickou rukou</span>
              </li>
              <li>
                <strong>Výpočet</strong>
                <span>množství podle projektu zdarma</span>
              </li>
              <li>
                <strong>Sklad</strong>
                <span>České Budějovice, ihned k odběru</span>
              </li>
            </ul>
          </div>
          <figure className="hero-figure">
            <img
              src="/hero.webp"
              alt="Sklad stavebnin AFFORD CB — palety cihel a stavebního materiálu připravené k rozvozu"
            />
            <figcaption className="hero-figcaption">
              Náš dvůr — palety naložíme do 20 minut od zavolání
            </figcaption>
          </figure>
        </div>

        {/* signature: paletový pás */}
        <div className="pallet-band" aria-hidden="true">
          <span>CIHLY</span>
          <span>IZOLACE</span>
          <span>SÁDROKARTON</span>
          <span>KARI SÍTĚ</span>
          <span>KOMÍNY</span>
          <span>ASFALTOVÉ PÁSY</span>
          <span>KÁMEN</span>
          <span>PROPAN-BUTAN</span>
        </div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="section sortiment" aria-labelledby="sortiment-title">
        <div className="section-head">
          <p className="section-eyebrow">Co vezete ze stavebnin</p>
          <h2 id="sortiment-title" className="section-title">
            Sortiment podle etap stavby
          </h2>
          <p className="section-lead">
            Řadíme zboží tak, jak jde stavba za sebou — od hrubé stavby po
            dokončovací práce. Když si nejste jistí, co přesně potřebujete,
            poradí vám vyškolený personál přímo u pultu.
          </p>
        </div>

        <div className="sortiment-grid">
          {sortiment.map((s) => (
            <article className="karta" key={s.kod}>
              <p className="karta-kod">{s.kod}</p>
              <h3 className="karta-nazev">{s.nazev}</h3>
              <p className="karta-popis">{s.popis}</p>
            </article>
          ))}
        </div>

        <figure className="section-figure">
          <img
            src="/section-1.webp"
            alt="Regály a palety se zdicím materiálem a izolacemi ve skladu AFFORD CB"
          />
          <figcaption>
            Běžné položky držíme skladem — pro atypické zboží voláme dodavatelům
            ještě ten den.
          </figcaption>
        </figure>
      </section>

      {/* ===== DŮVĚRA / JAK NAKUPUJETE ===== */}
      <section className="section duvera" aria-labelledby="duvera-title">
        <div className="duvera-grid">
          <figure className="duvera-figure">
            <img
              src="/section-2.webp"
              alt="Nakládka palet stavebního materiálu autem s hydraulickou rukou"
            />
          </figure>
          <div className="duvera-copy">
            <p className="section-eyebrow">Proč k nám jezdí stavebníci z Budějovic a okolí</p>
            <h2 id="duvera-title" className="section-title">
              Neprodáváme jen palety.
              <br />
              Hlídáme, aby vám nic nechybělo.
            </h2>

            <ol className="kroky">
              <li>
                <span className="krok-cislo">1</span>
                <div>
                  <h3>Přinesete projekt nebo rozměry</h3>
                  <p>
                    Spočítáme potřebné množství cihel, izolace, kari sítí i
                    sádrokartonu. Nekoupíte zbytečně moc — a nedojde vám
                    materiál uprostřed betonáže.
                  </p>
                </div>
              </li>
              <li>
                <span className="krok-cislo">2</span>
                <div>
                  <h3>Poradíme s výběrem</h3>
                  <p>
                    Vyškolený personál vám řekne, který materiál se hodí na váš
                    typ stavby — a kdy se vyplatí akční Klimabloc místo běžné cihly.
                  </p>
                </div>
              </li>
              <li>
                <span className="krok-cislo">3</span>
                <div>
                  <h3>Dovezeme a složíme na stavbě</h3>
                  <p>
                    Auto s hydraulickou rukou položí palety tam, kde je
                    potřebujete. Žádné přehazování cihel po kolečkách.
                  </p>
                </div>
              </li>
            </ol>

            <blockquote className="reference">
              <p>
                „Stavěl jsem svépomocí a v Affordu mi spočítali materiál na celý
                dům. Ruka mi složila palety rovnou za základovou desku — ušetřil
                jsem den práce.“
              </p>
              <cite>— zákazník, novostavba u Českých Budějovic</cite>
            </blockquote>

            <p className="duvera-kontakt">
              Otevřeno ve všední dny. Objednávky a dotazy:{" "}
              <a href="tel:+420603863576">603 863 576</a> nebo{" "}
              <a href="mailto:info@affordcb.cz">info@affordcb.cz</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
