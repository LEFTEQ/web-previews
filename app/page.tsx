import React from "react";

export default function Page() {
  const nabidka = [
    {
      kod: "01",
      nazev: "Valníkové nástavby",
      popis:
        "Svaříme a osadíme valník na míru vašemu podvozku — pro suroviny, palety i stavební materiál. Postranice, klanice, kování i podlaha přesně podle toho, co vozíte.",
      obraz: "korba",
    },
    {
      kod: "02",
      nazev: "Sklápěcí nástavby",
      popis:
        "Sklopné korby pro zeminu, kamenivo i odpad. Nakládání, převoz a vyklopení bez kompromisů — hydraulika, výztuhy dna, ochranné čelo za kabinou.",
      obraz: "sklopka",
    },
    {
      kod: "03",
      nazev: "Skříňové nástavby",
      popis:
        "Uzavřené i částečně uzavřené skříně pro převoz zboží. Různé rozměry a výbava podle provozu — vrata, boční dveře, kotvení nákladu.",
      obraz: "skrin",
    },
    {
      kod: "04",
      nazev: "Kontejnery a nosiče",
      popis:
        "Výroba a montáž systémů pro výměnné kontejnery a nosiče. Sedne to na váš vozový park a zvládne to denní provoz na stavbě i ve svozu.",
      obraz: "kontejner",
    },
    {
      kod: "05",
      nazev: "Zámečnictví",
      popis:
        "Zakázková kovovýroba a svařování v naší dílně. Přívěsy, opravy rámů, úpravy a konstrukce na míru — od návrhu po hotový kus.",
      obraz: "zamecnictvi",
    },
    {
      kod: "06",
      nazev: "Hydraulické jeřáby HNJ",
      popis:
        "Montáž hydraulických nakládacích jeřábů na nákladní vozidla. Vozidlo si samo naloží i složí — bez čekání na techniku na stavbě.",
      obraz: "jerab",
    },
  ];

  return (
    <main className="kaldo">
      <header className="top">
        <a className="wordmark" href="#uvod" aria-label="KALDO — úvod">
          <span className="wordmark-k">KAL</span>
          <span className="wordmark-d">DO</span>
          <span className="wordmark-sub">s.r.o.</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#nabidka">Nástavby</a>
          <a href="#doprava">Autodoprava</a>
          <a href="#duvera">O dílně</a>
          <a className="nav-cta" href="tel:+420387000000">Zavolat do dílny</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-img-wrap">
          <img
            className="hero-img"
            src="/hero.webp"
            alt="Nákladní vozidlo s valníkovou nástavbou vyrobenou v dílně KALDO"
            width={1600}
            height={1000}
          />
          <span className="hero-tag">České Budějovice · vlastní výroba od roku 2000</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Výroba nástaveb na nákladní vozidla</p>
          <h1 className="hero-title">
            Postavíme vám<br />
            <em>korbu</em>, která<br />
            odveze svou práci.
          </h1>
          <p className="hero-lead">
            Valníkové, sklápěcí i skříňové nástavby, kontejnery a přívěsy —
            svařené a osazené v naší dílně v Českých Budějovicích. Řekněte nám,
            co vozíte, a my postavíme nástavbu přesně na to.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#nabidka">
              Co vyrábíme
            </a>
            <a className="btn btn-ghost" href="tel:+420387000000">
              Zavolat do dílny
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Valník · sklopka · skříň</dt>
              <dd>Tři typy nástaveb na míru</dd>
            </div>
            <div>
              <dt>Vlastní zámečnictví</dt>
              <dd>Svařujeme a opravujeme u nás</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Dílna KALDO</p>
          <h2 id="nabidka-h" className="section-title">
            Šest věcí, které pro vaše auto svaříme
          </h2>
          <p className="section-intro">
            Nástavba není katalogové zboží. Vychází z podvozku, nákladu a
            provozu. Vyberte, co potřebujete — zbytek doladíme u nás v dílně.
          </p>
        </div>

        <div className="grid-nabidka">
          {nabidka.map((item) => (
            <article className="karta" key={item.kod}>
              <span className="karta-kod" aria-hidden="true">
                {item.kod}
              </span>
              <h3 className="karta-nazev">{item.nazev}</h3>
              <p className="karta-popis">{item.popis}</p>
            </article>
          ))}
        </div>

        <figure className="nabidka-foto">
          <img
            src="/section-1.webp"
            alt="Rozpracovaná nástavba na nákladní vozidlo v dílně KALDO"
            width={1400}
            height={860}
          />
          <figcaption>
            Sklopná korba před lakováním — každý kus prochází naší svařovnou.
          </figcaption>
        </figure>
      </section>

      <section className="doprava" id="doprava" aria-labelledby="doprava-h">
        <div className="doprava-inner">
          <div className="doprava-copy">
            <p className="eyebrow">Autodoprava a bazar</p>
            <h2 id="doprava-h" className="section-title section-title-light">
              Vozíme stálou linku do Itálie
            </h2>
            <p className="doprava-lead">
              Kromě výroby jezdíme i vlastní dopravu. Auta DAF do tří let,
              parkování v Českých Budějovicích, pravidelný servis. Nabízíme také
              menší dodávky a prověřené vozy z bazaru.
            </p>

            <ul className="doprava-list">
              <li>
                <span className="dl-nazev">Plachtová dodávka</span>
                <span className="dl-detail">
                  Nosnost 1200 kg, až 10 europalet
                </span>
              </li>
              <li>
                <span className="dl-nazev">Mercedes Vito</span>
                <span className="dl-detail">Sedmimístná dodávka</span>
              </li>
              <li className="dl-bazar">
                <span className="dl-nazev">DAF XF 530 FT</span>
                <span className="dl-detail">
                  r.v. 2021 · najeto 344 486 km · EURO 6 · Super space cab ·
                  retardér ZF · nové pneu · servis v DAF
                </span>
                <span className="dl-cena">1 275 000 Kč bez DPH</span>
              </li>
            </ul>
          </div>

          <figure className="doprava-foto">
            <img
              src="/section-2.webp"
              alt="Nákladní souprava KALDO připravená k jízdě"
              width={1200}
              height={1400}
            />
          </figure>
        </div>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="duvera-head">
          <p className="eyebrow eyebrow-dark">O dílně</p>
          <h2 id="duvera-h" className="section-title">
            Malá dílna, které dáte podvozek a ona vrátí hotové auto
          </h2>
        </div>

        <div className="duvera-grid">
          <p className="duvera-lead">
            KALDO staví nástavby a přívěsy na nákladní vozidla už přes dvacet
            let. Nejsme montovna dovezených dílů — návrh, svaření i osazení
            probíhá u nás v Českých Budějovicích. Proto víme, co jsme udělali, a
            umíme to i opravit.
          </p>

          <div className="aktualita">
            <p className="aktualita-stitek">Aktuálně · nábor</p>
            <h3 className="aktualita-nazev">Hledáme řidiče MKD (C+E)</h3>
            <p className="aktualita-text">
              Walking floor, stálá práce do Itálie, pondělí až pátek. Auta DAF
              do tří let, parkování v Českých Budějovicích. Plat 55 000 –
              59 000 Kč, nástup možný ihned.
            </p>
            <a className="btn btn-primary btn-sm" href="tel:+420387000000">
              Ozvat se ohledně místa
            </a>
            <p className="aktualita-datum">Zveřejněno 27. 3. 2024</p>
          </div>
        </div>
      </section>
    </main>
  );
}
