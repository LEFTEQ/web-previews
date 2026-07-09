export default function Page() {
  const kapacity = [
    { cislo: "33", jednotka: "tun", popis: "maximální náklad na jeden odvoz — těžká i lehká mechanizace pro výkopy i demolice" },
    { cislo: "90", jednotka: "kontejnerů", popis: "na suť, beton, zeminu i směsný odpad — přistavíme přesně ten, který na stavbu sedne" },
    { cislo: "11", jednotka: "vozů", popis: "nákladní flotila, která v Praze zvládne přijet do jedné hodiny od zavolání" },
  ];

  const sluzby = [
    { nazev: "Bourací práce", popis: "Demolice staveb i komínů školenými pracovníky. Ohled na okolí, recyklace a likvidace materiálu jsou samozřejmostí." },
    { nazev: "Autodoprava a kontejnery", popis: "Devadesát kontejnerů, jedenáct nákladních vozů. Odvoz suti a odpadů kdykoli mezi 7:00 a 18:00." },
    { nazev: "Zemní práce", popis: "Výkopy, pokládky, terénní úpravy, výkopy bazénů. Čistíme i zanedbané a zarostlé pozemky." },
    { nazev: "Likvidace černých skládek", popis: "Vyklidíme prostor černé skládky, odpad odvezeme a následně zpracujeme podle předpisů." },
    { nazev: "Nakládání s odpady", popis: "Zajistíme celý řetězec — od produkce přes odvoz a přepravu až po finální zpracování a odstranění." },
    { nazev: "Údržba pozemků a komunikací", popis: "Sekání, kácení, ořezy, výsadba zeleně i letní a zimní údržba silnic včetně odklízení sněhu." },
    { nazev: "Pokládka zámkové dlažby", popis: "Chodník, terasa nebo příjezdová cesta, která dlouho vydrží a dobře vypadá." },
    { nazev: "Prodej materiálu", popis: "Portfolio stavebních materiálů přivezeme na místo, nebo si je odvezete sami." },
  ];

  return (
    <main className="dta">
      <header className="dta-topbar">
        <a className="dta-wordmark" href="#" aria-label="DTA Group, demoliční práce Praha">
          <span className="dta-wordmark__mark" aria-hidden="true">
            <span className="dta-wordmark__d">D</span>
            <span className="dta-wordmark__t">T</span>
            <span className="dta-wordmark__a">A</span>
          </span>
          <span className="dta-wordmark__sub">GROUP · demolice &amp; odpad</span>
        </a>
        <a className="dta-phone" href="tel:+420607670122">
          <span className="dta-phone__label">Vůz do hodiny</span>
          <span className="dta-phone__num">+420 607 670 122</span>
        </a>
      </header>

      <section className="dta-hero">
        <div className="dta-hero__media">
          <img src="/hero.webp" alt="Řízená demolice objektu technikou DTA Group v Praze" className="dta-hero__img" />
          <div className="dta-hero__hazard" aria-hidden="true" />
        </div>
        <div className="dta-hero__panel">
          <p className="dta-hero__eyebrow">Praha-Dolní Měcholupy · od bourání po odvoz</p>
          <h1 className="dta-hero__title">
            <span className="dta-hero__line">Zbouráme,</span>
            <span className="dta-hero__line dta-hero__line--fill">naložíme,</span>
            <span className="dta-hero__line">odvezeme.</span>
          </h1>
          <p className="dta-hero__lead">
            Demoliční práce, kontejnery na suť a těžká i lehká mechanizace pro celou Prahu.
            Přistavíme vůz do jedné hodiny — rychlost, spolehlivost a férové jednání jsou naše krédo.
          </p>
          <div className="dta-hero__actions">
            <a className="dta-btn dta-btn--primary" href="tel:+420607670122">Zavolat o techniku</a>
            <a className="dta-btn dta-btn--ghost" href="#sluzby">Co všechno uděláme</a>
          </div>
        </div>
      </section>

      <section className="dta-kapacita" aria-label="Kapacity a technika">
        {kapacity.map((k) => (
          <div className="dta-kap" key={k.jednotka}>
            <div className="dta-kap__num">
              {k.cislo}
              <span className="dta-kap__unit">{k.jednotka}</span>
            </div>
            <p className="dta-kap__desc">{k.popis}</p>
          </div>
        ))}
      </section>

      <section className="dta-sluzby" id="sluzby">
        <div className="dta-section-head">
          <span className="dta-section-head__tag">Rozsah prací</span>
          <h2 className="dta-section-head__title">Jeden dodavatel na celou stavbu</h2>
          <p className="dta-section-head__lead">
            Od zbourání komínu přes vyklizení černé skládky až po novou zámkovou dlažbu.
            Nemusíte shánět tři firmy — postaráme se o produkci, odvoz i konečné zpracování odpadu.
          </p>
        </div>
        <ol className="dta-services">
          {sluzby.map((s, i) => (
            <li className="dta-service" key={s.nazev}>
              <span className="dta-service__idx">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="dta-service__title">{s.nazev}</h3>
              <p className="dta-service__desc">{s.popis}</p>
            </li>
          ))}
        </ol>
        <div className="dta-sluzby__figure">
          <img src="/section-1.webp" alt="Nákladní vozy a kontejnery DTA Group připravené k odvozu suti" />
        </div>
      </section>

      <section className="dta-duvera">
        <div className="dta-duvera__figure">
          <img src="/section-2.webp" alt="Tým DTA Group při zemních a demoličních pracích na pražské stavbě" />
        </div>
        <div className="dta-duvera__body">
          <span className="dta-section-head__tag">Proč právě my</span>
          <h2 className="dta-duvera__title">Když někdo musí přijet dnes, ne příště</h2>
          <p className="dta-duvera__lead">
            DTA Group vznikla v Dolních Měcholupech a v Praze funguje jako partner staveb, správců
            i soukromých majitelů. Nejste-li si jistí, jakou techniku objednat, poradíme zdarma po telefonu.
          </p>
          <ul className="dta-duvera__points">
            <li>
              <strong>Konzultace zdarma.</strong> Zavoláte, popíšete, co potřebujete — my vám řekneme,
              jaký kontejner a jakou mechanizaci na to poslat.
            </li>
            <li>
              <strong>Šetrně k okolí.</strong> Demolice provádíme s ohledem na životní prostředí,
              materiál třídíme a recyklujeme.
            </li>
            <li>
              <strong>Celá Praha do hodiny.</strong> Přistavení vozidla v rámci Prahy obvykle do 60 minut.
            </li>
          </ul>
          <div className="dta-kontakt">
            <div className="dta-kontakt__row">
              <span className="dta-kontakt__k">Provozovna</span>
              <span>Ke Slatinám 344, 111 01 Praha-Dolní Měcholupy</span>
            </div>
            <div className="dta-kontakt__row">
              <span className="dta-kontakt__k">K dispozici</span>
              <span>Po–Ne 7:00–18:00</span>
            </div>
            <div className="dta-kontakt__row">
              <span className="dta-kontakt__k">Vedoucí provozu</span>
              <span>Oldřich Dvořák · +420 607 670 122</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
