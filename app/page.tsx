import type { CSSProperties } from "react";

export default function Page() {
  const kategorie = [
    {
      cislo: "01",
      nazev: "Ájurvédská kosmetika",
      popis: "Šampony Váta, mýdla Neem s růží, pleťové oleje Maharishi Ayurveda. Péče, která pracuje s vaší dóšou, ne proti ní.",
      priklad: "Šampon na vlasy Váta · Mýdlo Neem & růže",
    },
    {
      cislo: "02",
      nazev: "Čaje a nápoje",
      popis: "Bylinné směsi na energii, klid i spánek, ledové čaje a Aloe Vera drinky. Rituál v hrnku, který si sami namícháte.",
      priklad: "BIO čaje English Tea Shop · Samahan",
    },
    {
      cislo: "03",
      nazev: "Potraviny a koření",
      popis: "Ghí, keltská mořská sůl, RAW slunečnicový olej, mangová pyré. Základ ájurvédské kuchyně v poctivé kvalitě.",
      priklad: "Ghí · Keltská sůl · Čavanpraš",
    },
    {
      cislo: "04",
      nazev: "Doplňky stravy & aromaterapie",
      popis: "Esenciální oleje Tea tree, tablety Radiant Skin, balzámy Samahan. Malé lahvičky s velkým účinkem.",
      priklad: "BIO esenciální olej Tea tree · Radiant Skin",
    },
  ];

  const sliby = [
    {
      titulek: "Jen nejvyšší kvalita",
      text: "Za sortimentem si stojíme. Do regálu jde jen to, co bychom sami používali doma.",
    },
    {
      titulek: "Doprava zdarma nad 1500 Kč",
      text: "Při nákupu nad 1500 Kč nezaplatíte za dopravu ani korunu.",
    },
    {
      titulek: "Dárek k nákupu od 250 Kč",
      text: "Ke každé objednávce nad 250 Kč přibalíme malý dárek navíc.",
    },
    {
      titulek: "Odesíláme opravdu rychle",
      text: "Objednávku vypravíme nejpozději následující pracovní den.",
    },
  ];

  return (
    <main className="ds">
      <header className="ds-topbar">
        <a className="ds-brand" href="#" aria-label="DAY Spa Shop, úvodní strana">
          <span className="ds-brand-day">DAY</span>
          <span className="ds-brand-spa">spa</span>
          <span className="ds-brand-shop">shop</span>
        </a>
        <nav className="ds-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#o-nas">O obchodě</a>
          <a className="ds-nav-phone" href="tel:+420777543478">+420 777 543 478</a>
        </nav>
      </header>

      <section className="ds-hero">
        <div className="ds-hero-media">
          <img
            src="/hero.webp"
            alt="Ájurvédské byliny, oleje a čaje z nabídky obchodu DAY Spa Shop"
            width={1200}
            height={1500}
            className="ds-hero-img"
          />
        </div>
        <div className="ds-hero-copy">
          <p className="ds-eyebrow">Ájurvéda · Brno · e-shop &amp; kamenný obchod</p>
          <h1 className="ds-hero-title">
            Zdraví, harmonie
            <span className="ds-hero-amp">&amp;</span>
            ájurvéda
            <em>na jednom místě.</em>
          </h1>
          <p className="ds-hero-lead">
            Bylinné čaje, ghí, esenciální oleje i ájurvédská kosmetika, kterou
            si sami vyzkoušíme, než ji nabídneme vám. Vybíráme tak, aby každý
            balíček byl kousek péče o sebe.
          </p>
          <div className="ds-hero-actions">
            <a className="ds-btn ds-btn-primary" href="#sortiment">
              Prohlédnout sortiment
            </a>
            <a className="ds-btn ds-btn-ghost" href="#o-nas">
              Jak vybíráme
            </a>
          </div>
        </div>
      </section>

      <section className="ds-section" id="sortiment" aria-labelledby="sortiment-h">
        <div className="ds-section-head">
          <p className="ds-eyebrow">Co u nás najdete</p>
          <h2 className="ds-section-title" id="sortiment-h">
            Čtyři police, jedna filozofie
          </h2>
          <p className="ds-section-intro">
            Ájurvéda nedělí péči na krémy a doplňky. Dělí ji podle toho, co tělu
            prospívá. Podle toho skládáme i naše regály.
          </p>
        </div>

        <ol className="ds-cards">
          {kategorie.map((k) => (
            <li className="ds-card" key={k.cislo}>
              <span className="ds-card-num" aria-hidden="true">
                {k.cislo}
              </span>
              <h3 className="ds-card-title">{k.nazev}</h3>
              <p className="ds-card-text">{k.popis}</p>
              <p className="ds-card-tag">{k.priklad}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ds-about" id="o-nas" aria-labelledby="o-nas-h">
        <div className="ds-about-media">
          <img
            src="/section-2.webp"
            alt="Ájurvédské produkty a bylinky připravené k odeslání"
            width={1000}
            height={1200}
            className="ds-about-img"
          />
        </div>
        <div className="ds-about-copy">
          <p className="ds-eyebrow">Proč právě u nás</p>
          <h2 className="ds-section-title" id="o-nas-h">
            Za každým produktem stojíme jménem
          </h2>
          <p className="ds-about-lead">
            DAY Spa Shop vede v Brně malý tým, který ájurvédu nejen prodává, ale
            i žije. Značku Day Spa — sůl, oleje i čaje — připravujeme sami, ostatní
            výrobce pečlivě vybíráme. Kvalitní produkty za příznivé ceny nejsou
            slogan, ale způsob, jakým skládáme nabídku.
          </p>
          <ul className="ds-promise">
            {sliby.map((s) => (
              <li className="ds-promise-item" key={s.titulek}>
                <h3 className="ds-promise-title">{s.titulek}</h3>
                <p className="ds-promise-text">{s.text}</p>
              </li>
            ))}
          </ul>
          <p className="ds-about-contact">
            Poradíme s výběrem: <a href="tel:+420777543478">+420 777 543 478</a>{" "}
            &middot;{" "}
            <a href="mailto:obchod@day-spa.cz">obchod@day-spa.cz</a>
          </p>
        </div>
      </section>
    </main>
  );
}
