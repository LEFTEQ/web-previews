import React from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "01",
      nazev: "Výměna a montáž autoskel",
      popis:
        "Čelní, boční i zadní skla pro osobní, užitková, nákladní vozy, autobusy i zemědělské stroje. Skladové zásoby držíme velké, takže na rozbité sklo reagujeme často ještě tentýž den.",
    },
    {
      kod: "02",
      nazev: "Oprava praskliny scelováním",
      popis:
        "Kámen z dálnice nemusí znamenat nové sklo. Čerstvou prasklinu vyplníme pryskyřicí a zpevníme — dokud se do ní nedostane špína. Přijeďte raději dřív než později.",
    },
    {
      kod: "03",
      nazev: "Kalibrace asistenčních systémů",
      popis:
        "Po výměně čelního skla znovu seřídíme kameru pro nouzové brzdění a jízdu v pruhu. Bez kalibrace by asistenty pracovaly naslepo.",
    },
    {
      kod: "04",
      nazev: "Tónování fólií",
      popis:
        "Méně slunce v kabině, více soukromí a bezpečnostní bonus navrch — tónované sklo po nárazu drží pohromadě a nesype se dovnitř.",
    },
    {
      kod: "05",
      nazev: "Čištění a plnění klimatizací",
      popis:
        "Klima přestala chladit? Zkontrolujeme těsnost, doplníme chladivo a vydezinfikujeme okruh, ať z ventilace vane čerstvý vzduch.",
    },
    {
      kod: "06",
      nazev: "Čištění interiéru a ozónování",
      popis:
        "Ruční mytí a hloubkové čištění interiéru. Zápachy, které nejdou vyčistit, srazíme ozónem — od cigaret po zvířata.",
    },
  ];

  const pojistovny = [
    "Česká pojišťovna",
    "Kooperativa",
    "Allianz",
    "ČSOB Pojišťovna",
    "Generali",
    "UNIQA",
  ];

  return (
    <main className="hak">
      <header className="hak-nav" aria-label="Hlavní">
        <a className="hak-mark" href="#top">
          <span className="hak-mark__glass" aria-hidden="true" />
          <span className="hak-mark__text">
            AUTOSKLO<span className="hak-mark__hak">H·A·K</span>
          </span>
        </a>
        <nav className="hak-nav__links">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a className="hak-nav__call" href="tel:+420466650333">
            466 650 333
          </a>
        </nav>
      </header>

      <section className="hak-hero" id="top">
        <div className="hak-hero__media">
          <img
            src="/hero.webp"
            alt="Technik AUTOSKLO H.A.K. při montáži čelního skla osobního vozu"
            className="hak-hero__img"
          />
          <span className="hak-hero__crack" aria-hidden="true" />
        </div>
        <div className="hak-hero__copy">
          <p className="hak-hero__eyebrow">Pardubice · po celé ČR od roku 1995</p>
          <h1 className="hak-hero__title">
            Prasklo vám<br />
            čelní sklo?
            <span className="hak-hero__sub">Vyměníme ho, kde stojíte.</span>
          </h1>
          <p className="hak-hero__lead">
            Kámen z dálnice, rozbité okno na parkovišti nebo pavučina přes půl
            skla — přijedeme za vámi s vlastní dílnou na kolech a namontujeme
            nové sklo přímo na cestě. Velké sklady, jasná cena, pojišťovnu
            vyřídíme za vás.
          </p>
          <div className="hak-hero__cta">
            <a className="hak-btn hak-btn--primary" href="tel:+420466650333">
              Zavolat 466 650 333
            </a>
            <a className="hak-btn hak-btn--ghost" href="#pojistne">
              Nahlásit pojistnou událost
            </a>
          </div>
          <dl className="hak-hero__facts">
            <div>
              <dt>Na cestě</dt>
              <dd>montáž kdekoliv v ČR</dd>
            </div>
            <div>
              <dt>Skladem</dt>
              <dd>stovky typů skel</dd>
            </div>
            <div>
              <dt>Pojišťovna</dt>
              <dd>vyřídíme za vás</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="hak-services" id="sluzby">
        <div className="hak-section-head">
          <p className="hak-eyebrow">Co u nás vyřešíte</p>
          <h2>Od odřeného skla po vyčištěnou kabinu — na jednom místě.</h2>
        </div>
        <ol className="hak-grid">
          {sluzby.map((s) => (
            <li className="hak-card" key={s.kod}>
              <span className="hak-card__kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="hak-card__nazev">{s.nazev}</h3>
              <p className="hak-card__popis">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="hak-trust" id="duvera">
        <div className="hak-trust__grid">
          <div className="hak-trust__mediaWrap">
            <img
              src="/section-1.webp"
              alt="Mobilní servis AUTOSKLO H.A.K. — výměna autoskla přímo u zákazníka"
              className="hak-trust__img"
            />
            <figure className="hak-quote">
              <blockquote>
                „Paní s pánem na místě velice ochotní a příjemní. Montáž byla
                provedená přesně dle domluvy a v čas. Auto jsem dostal ve stejném
                stavu — jen s novým sklem. Nemám důvod k nespokojenosti.“
              </blockquote>
              <figcaption>Jakub Kobera · zákazník</figcaption>
            </figure>
          </div>
          <div className="hak-trust__copy">
            <p className="hak-eyebrow">Krátce o nás</p>
            <h2>
              Autosklu se v Pardubicích věnujeme od roku 1995 — a stále nás to baví.
            </h2>
            <p>
              Montujeme a vyměňujeme autoskla pro osobní, užitková i nákladní
              vozidla, autobusy a zemědělské stroje. Kalená skla si necháváme
              vyrábět na zakázku, takže i na starší nebo neobvyklý vůz sklo
              seženeme.
            </p>
            <p>
              Naše práce nekončí montáží: seřídíme asistenční systémy, vyčistíme
              interiér, natónujeme okna nebo doplníme klimatizaci. Jeden vůz,
              jedno místo, jedna faktura.
            </p>
            <ul className="hak-trust__list">
              <li>Mobilní servis — přijedeme za vámi kamkoliv v ČR</li>
              <li>Skladové zásoby pro rychlou reakci na rozbité sklo</li>
              <li>Kalibrace kamer po každé výměně čelního skla</li>
            </ul>
          </div>
        </div>

        <div className="hak-insurance" id="pojistne">
          <div className="hak-insurance__head">
            <img
              src="/section-2.webp"
              alt="Detail nového čelního skla připraveného k montáži v dílně AUTOSKLO H.A.K."
              className="hak-insurance__img"
            />
            <div>
              <p className="hak-eyebrow">Pojistná událost bez papírování</p>
              <h3>
                Máte havarijní pojistku nebo připojištění skel? Ve většině případů
                nezaplatíte nic navíc.
              </h3>
              <p>
                Řekněte nám, u které pojišťovny jste pojištění. Škodu nahlásíme,
                vyplníme protokol a domluvíme termín — vy jen přijedete, nebo
                počkáte, až přijedeme my.
              </p>
            </div>
          </div>
          <ul className="hak-insurance__list">
            {pojistovny.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <a className="hak-btn hak-btn--primary" href="tel:+420466650333">
            Zavolat a nahlásit škodu
          </a>
        </div>
      </section>
    </main>
  );
}
