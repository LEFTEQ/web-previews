export default function Page() {
  const electrical = [
    {
      title: "Startování a dobíjení",
      text: "Alternátory, startéry, autobaterie a související náhradní díly pro spolehlivý chod vozu.",
    },
    {
      title: "Snímače a zapalování",
      text: "Snímače, spínače, čidla i díly zapalování podle konkrétního typu vozidla.",
    },
    {
      title: "Drobné díly, které rozhodují",
      text: "Autožárovky, pojistky, konektory a patice pro opravy bez zbytečného improvizování.",
    },
    {
      title: "Diagnostika a dílna",
      text: "Testery, diagnostické vybavení, dílenská chemie a garážové příslušenství.",
    },
  ];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <header className="siteHeader">
          <a className="wordmark" href="#zacatek" aria-label="ALLSTAR TRADING – úvod">
            <span>ALL</span>
            <span className="wordmarkStar" aria-hidden="true">✦</span>
            <span>STAR</span>
            <small>autoelektrika · Ostrava</small>
          </a>

          <nav className="desktopNav" aria-label="Hlavní navigace">
            <a href="#sortiment">Sortiment</a>
            <a href="#prodejna">Prodejna</a>
            <a href="tel:+420596790790">+420 596 790 790</a>
          </nav>

          <details className="mobileMenu">
            <summary aria-label="Otevřít navigaci">
              <span />
              <span />
            </summary>
            <nav aria-label="Mobilní navigace">
              <a href="#sortiment">Sortiment</a>
              <a href="#prodejna">Prodejna</a>
              <a href="tel:+420596790790">Zavolat</a>
            </nav>
          </details>
        </header>

        <div className="heroGrid" id="zacatek">
          <div className="heroCopy">
            <p className="eyebrow"><span>12 V / 24 V</span> Autoelektrika pro Ostravu i okolí</p>
            <h1 id="hero-title">Proud pod kapotou.<br /><em>Díly přes pult.</em></h1>
            <p className="heroLead">
              Najdeme správný alternátor, startér, snímač nebo konektor pro osobní vůz,
              dodávku, nákladní auto i pracovní stroj.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="tel:+420596790790">Zavolat pro ověření dílu</a>
              <a className="textLink" href="mailto:obchod@autoelektrika.cz">Napsat do prodejny <span aria-hidden="true">→</span></a>
            </div>
            <dl className="quickFacts" aria-label="Základní informace">
              <div>
                <dt>Prodejna</dt>
                <dd>Krmelínská 934/4<br />Ostrava-Hrabová</dd>
              </div>
              <div>
                <dt>Po–Pá</dt>
                <dd>8:00–17:00</dd>
              </div>
              <div>
                <dt>Sobota</dt>
                <dd>8:00–12:00</dd>
              </div>
            </dl>
          </div>

          <figure className="heroVisual">
            <img
              src="/hero.webp"
              alt="Detail autoelektrického dílu v sortimentu ALLSTAR TRADING"
              width="1200"
              height="1500"
              fetchPriority="high"
            />
            <div className="currentTrace" aria-hidden="true">
              <span className="traceNode traceNodeOne" />
              <span className="traceNode traceNodeTwo" />
              <span className="tracePulse" />
            </div>
            <figcaption>
              <span>Výběr podle vozidla</span>
              Pomůže nám VIN, typ motoru nebo původní číslo dílu.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="assortment" id="sortiment" aria-labelledby="sortiment-title">
        <div className="sectionIntro">
          <p className="sectionCode">AUTOELEKTRIKA / SORTIMENT</p>
          <h2 id="sortiment-title">Od pojistky po celý startér.</h2>
          <p>
            Neprodáváme jen položku z katalogu. Podle údajů o vozidle dohledáme
            provedení, které skutečně pasuje.
          </p>
        </div>

        <div className="assortmentLayout">
          <figure className="sectionImage sectionImageTall">
            <img
              src="/section-1.webp"
              alt="Alternátory, startéry a další autoelektrické součástky v ostravské prodejně"
              width="1200"
              height="1400"
              loading="lazy"
            />
            <figcaption>Osobní, užitkové a nákladní vozy · zemědělské a pracovní stroje</figcaption>
          </figure>

          <div className="serviceList">
            {electrical.map((item, index) => (
              <article className="serviceItem" key={item.title}>
                <span className="terminal" aria-hidden="true">{index % 2 === 0 ? "+" : "−"}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}

            <div className="mechanicalNote">
              <p className="miniLabel">Také na jedné objednávce</p>
              <p>
                Brzdy, filtry a oleje, ložiska kol, tlumiče, rozvody, spojkové sady,
                klimatizace i další mechanické díly pro osobní a užitkové vozy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="store" id="prodejna" aria-labelledby="store-title">
        <div className="storeGrid">
          <div className="storeCopy">
            <p className="sectionCode sectionCodeLight">OSTRAVA-HRABOVÁ / PRODEJNA</p>
            <h2 id="store-title">Přijeďte s číslem dílu.<br />Odjeďte s řešením.</h2>
            <p className="storeLead">
              U pultu mluvíte s lidmi, kteří se v autoelektrice orientují. Přineste starý díl,
              technický průkaz nebo VIN a společně zúžíme výběr bez tipování.
            </p>

            <div className="storeDetails">
              <div>
                <span className="detailLabel">Kde nás najdete</span>
                <strong>Krmelínská 934/4<br />700 20 Ostrava-Hrabová</strong>
              </div>
              <div>
                <span className="detailLabel">Objednávky</span>
                <strong>Po–Pá 7:00–17:00</strong>
                <a href="mailto:obchod@autoelektrika.cz">obchod@autoelektrika.cz</a>
              </div>
            </div>

            <div className="fitCheck">
              <span className="checkMark" aria-hidden="true">✓</span>
              <p><strong>Než vyrazíte:</strong> zavolejte na <a href="tel:+420596790790">+420 596 790 790</a>. Ověříme dostupnost i správnou variantu.</p>
            </div>
          </div>

          <figure className="sectionImage storeImage">
            <img
              src="/section-2.webp"
              alt="Ostravská prodejna autoelektriky ALLSTAR TRADING a odborná obsluha"
              width="1400"
              height="1100"
              loading="lazy"
            />
            <figcaption>
              <span>Prodejní doba</span>
              Po–Pá 8:00–17:00 · So 8:00–12:00
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
