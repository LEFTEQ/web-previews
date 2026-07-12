import React from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Krovy a dřevostavby",
      popis:
        "Dodáme a smontujeme krov vašeho rodinného domu, uděláme půdní vestavbu i celou dřevostavbu na klíč. Chaty, altány, pergoly, terasy, mostky i dětské prvky — vždy atypicky, přesně podle vašeho zadání.",
      detaily: ["Krovy na míru", "Půdní vestavby", "Pergoly a terasy", "Ploty a altány"],
    },
    {
      cislo: "02",
      nazev: "Průmyslové stavby",
      popis:
        "Zastřešujeme haly, sklady a garáže dřevěnými konstrukcemi. Doplníme vestavby, dělící stěny, obklady, podlahy, rampy i přemostění — kompletní vybavenost objektu z jedné ruky.",
      detaily: ["Zastřešení objektů", "Haly a sklady", "Rampy a přemostění", "Obklady a podlahy"],
    },
    {
      cislo: "03",
      nazev: "Přepravní a obalové prvky",
      popis:
        "Pro výrobní firmy vyrábíme atypické palety, přepravní bedny, proklady a klíny. Rozměry přizpůsobíme přesně vašim výrobkům a logistice.",
      detaily: ["Atypické palety", "Přepravní bedny", "Proklady a klíny"],
    },
    {
      cislo: "04",
      nazev: "Inženýrská činnost",
      popis:
        "Zajistíme projektovou dokumentaci i návazná řemesla potřebná ke kompletní realizaci — klempíř, pokrývač, elektroinstalace, SDK i zámečník. Postaráme se i o montáž panelů dřevostaveb v subdodávce.",
      detaily: ["Projektová dokumentace", "Návazná řemesla", "Montáž dílců"],
    },
  ];

  const rezivo = [
    { nazev: "Masivní dřevo", polozky: "hranoly · fošny · prkna · střešní latě" },
    { nazev: "KVH hranoly", polozky: "konstrukční sušené dřevo" },
    { nazev: "Obklad a podlahy", polozky: "palubkový obklad · podlahovky" },
    { nazev: "Plotovky a lišty", polozky: "na ploty i dokončovací práce" },
    { nazev: "OSB desky", polozky: "pro opláštění a záklop" },
  ];

  return (
    <main className="mik">
      <header className="mik-topbar">
        <a className="mik-wordmark" href="#" aria-label="Tesařství Mík, domovská stránka">
          <span className="mik-wordmark__mark" aria-hidden="true">
            <span className="mik-notch" />
          </span>
          <span className="mik-wordmark__text">
            MÍK<span className="mik-wordmark__sub">tesařství · Brno</span>
          </span>
        </a>
        <a className="mik-tel" href="tel:+420602326150">
          +420 602 326 150
        </a>
      </header>

      <section className="mik-hero">
        <div className="mik-hero__media">
          <img
            src="/hero.webp"
            alt="Rozestavěný dřevěný krov rodinného domu s viditelnými tesařskými spoji"
            className="mik-hero__img"
          />
          <div className="mik-hero__scrim" aria-hidden="true" />
        </div>

        <div className="mik-hero__content">
          <p className="mik-eyebrow">Tesařská dílna · od roku 1992</p>
          <h1 className="mik-hero__title">
            Krov, který drží<br />
            <span className="mik-hero__accent">tři generace.</span>
          </h1>
          <p className="mik-hero__lead">
            Řežeme, tešeme a stavíme z masivního dřeva na jižní Moravě. Od jednoho krovu
            rodinného domu po zastřešení celé haly — a řezivo si u nás rovnou nakrátíte na míru.
          </p>
          <div className="mik-hero__actions">
            <a className="mik-btn" href="tel:+420602326150">Zavolat tesaři</a>
            <a className="mik-btn mik-btn--ghost" href="mailto:info@miksro.cz">
              Napsat na info@miksro.cz
            </a>
          </div>

          <dl className="mik-hero__facts">
            <div>
              <dt>Řemeslo od</dt>
              <dd>1992</dd>
            </div>
            <div>
              <dt>Dílna</dt>
              <dd>Brno-Moravany</dd>
            </div>
            <div>
              <dt>Doprava</dt>
              <dd>po celé ČR</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mik-sluzby" aria-labelledby="sluzby-nadpis">
        <div className="mik-section-head">
          <p className="mik-eyebrow mik-eyebrow--dark">Co postavíme</p>
          <h2 id="sluzby-nadpis" className="mik-h2">
            Čtyři věci, které umíme dřevem vyřešit
          </h2>
        </div>

        <div className="mik-sluzby__grid">
          {sluzby.map((s) => (
            <article key={s.cislo} className="mik-karta">
              <span className="mik-karta__cislo" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="mik-karta__nazev">{s.nazev}</h3>
              <p className="mik-karta__popis">{s.popis}</p>
              <ul className="mik-karta__list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="mik-sluzby__foto">
          <img
            src="/section-1.webp"
            alt="Detail tesařsky opracovaného dřevěného trámu připraveného ke stavbě"
            className="mik-full-img"
          />
        </figure>
      </section>

      <section className="mik-onas" aria-labelledby="onas-nadpis">
        <div className="mik-onas__inner">
          <div className="mik-onas__text">
            <p className="mik-eyebrow">Kdo za tím stojí</p>
            <h2 id="onas-nadpis" className="mik-h2 mik-h2--light">
              Malá parta, která staví přesně na míru
            </h2>
            <p className="mik-onas__lead">
              Jsme tesaři z Brna-Moravan a řemeslu se poctivě věnujeme od roku 1992.
              Většina naší práce je atypická — děláme přesně to, co si zákazník představuje,
              ne to, co máme v katalogu. K tomu vám poradíme, jaké dřevo se na váš záměr hodí.
            </p>

            <div className="mik-prodej">
              <h3 className="mik-prodej__nadpis">Prodej řeziva z dílny</h3>
              <ul className="mik-prodej__list">
                {rezivo.map((r) => (
                  <li key={r.nazev} className="mik-prodej__polozka">
                    <span className="mik-prodej__nazev">{r.nazev}</span>
                    <span className="mik-prodej__popis">{r.polozky}</span>
                  </li>
                ))}
              </ul>
              <p className="mik-prodej__pozn">
                Vybrané řezivo nakrátíme na požadovaný rozměr, ohoblujeme a namoříme proti
                plísním, houbám a hmyzu přípravkem Bochemit Profi.
              </p>
            </div>
          </div>

          <div className="mik-onas__side">
            <figure className="mik-onas__foto">
              <img
                src="/section-2.webp"
                alt="Uskladněné řezivo a hranoly na provozovně tesařství"
                className="mik-full-img"
              />
            </figure>

            <div className="mik-kontakt-karta">
              <p className="mik-kontakt-karta__label">Provozovna a dílna</p>
              <p className="mik-kontakt-karta__adr">
                Bohunická cesta 7<br />
                664 48 Brno-Moravany
              </p>
              <p className="mik-kontakt-karta__label">Sídlo firmy</p>
              <p className="mik-kontakt-karta__adr">
                Unkovice 194<br />
                664 63 Žabčice
              </p>
              <div className="mik-kontakt-karta__tel">
                <a href="tel:+420602326150">+420 602 326 150</a>
                <a href="tel:+420545232092">+420 545 232 092</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
