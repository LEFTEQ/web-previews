import React from "react";

const sluzby = [
  {
    kod: "§ 1",
    nazev: "Daňová přiznání",
    popis:
      "Sestavíme a podáme přiznání k dani z příjmů, DPH, silniční i dani z nemovitých věcí — s hlídáním lhůt a prodloužením přes poradce, když je potřeba nadechnout.",
  },
  {
    kod: "§ 2",
    nazev: "Vedení účetnictví",
    popis:
      "Kompletní účetnictví pro obchodní společnosti i příspěvkové organizace. Uzávěrky, výkazy, měsíční reporting v podobě, které rozumí i majitel bez ekonomického vzdělání.",
  },
  {
    kod: "§ 3",
    nazev: "Daňová evidence",
    popis:
      "Pro OSVČ a menší firmy. Vedeme knihu příjmů a výdajů, hlídáme odpisy a na konci roku sestavíme přehledy pro správu sociálního zabezpečení i zdravotní pojišťovnu.",
  },
  {
    kod: "§ 4",
    nazev: "Mzdové účetnictví",
    popis:
      "Zpracování mezd, odvodů a ročního zúčtování. Přihlášky, odhlášky, potvrzení pro úřady — vaši zaměstnanci dostanou výplatu včas a bez chyb.",
  },
];

const duvody = [
  {
    cislo: "25008111",
    label: "IČO — poradce, kterého najdete v rejstříku, ne v inzerátu",
  },
  {
    cislo: "5",
    label: "příspěvkových organizací nám dnes svěřuje své účetnictví",
  },
  {
    cislo: "400 01",
    label: "na Bílinské v Ústí nad Labem — přijďte s krabicí dokladů osobně",
  },
];

export default function Page() {
  return (
    <main className="lpc">
      <header className="lpc-top">
        <a className="lpc-wordmark" href="#" aria-label="LP Consulting, daňový poradce Ústí nad Labem">
          <span className="lpc-wordmark__lp">LP</span>
          <span className="lpc-wordmark__rest">Consulting</span>
          <span className="lpc-wordmark__reg">daňový poradce · Ústí nad Labem</span>
        </a>
        <nav className="lpc-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#spolecnost">O nás</a>
          <a className="lpc-nav__tel" href="tel:+420774954054">774 954 054</a>
        </nav>
      </header>

      <section className="lpc-hero" aria-labelledby="hero-nadpis">
        <div className="lpc-hero__grid">
          <div className="lpc-hero__text">
            <p className="lpc-eyebrow">Termín přiznání se blíží každý rok. My si ho pamatujeme za vás.</p>
            <h1 id="hero-nadpis" className="lpc-hero__nadpis">
              Daně bez<br />
              <span className="lpc-hero__accent">nervozity</span> ke lhůtě.
            </h1>
            <p className="lpc-hero__lead">
              LP Consulting je rodinná daňová a účetní kancelář v Ústí nad Labem.
              Vedeme účetnictví firmám, příspěvkovým organizacím i živnostníkům —
              a přiznání odevzdáváme dřív, než vám dojde, že se blíží konec března.
            </p>
            <div className="lpc-hero__cta">
              <a className="lpc-btn" href="tel:+420774954054">Zavolat 774 954 054</a>
              <a className="lpc-btn lpc-btn--ghost" href="#sluzby">Co pro vás uděláme</a>
            </div>
          </div>
          <figure className="lpc-hero__media">
            <img
              src="/hero.webp"
              alt="Kancelář daňové poradkyně LP Consulting v Ústí nad Labem s dokumenty a výpočty"
              className="lpc-hero__img"
            />
            <figcaption className="lpc-hero__caption">
              <span className="lpc-tick">daňové přiznání · řádek 74</span>
              <span>Bílinská 1147/1, Ústí nad Labem</span>
            </figcaption>
          </figure>
        </div>

        <div className="lpc-ledger" aria-hidden="true">
          <span>Vedení účetnictví</span>
          <span>·</span>
          <span>DPH měsíčně i čtvrtletně</span>
          <span>·</span>
          <span>Mzdy a odvody</span>
          <span>·</span>
          <span>Přehledy OSVČ</span>
          <span>·</span>
          <span>Reporting pro majitele</span>
        </div>
      </section>

      <section className="lpc-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="lpc-sekce-hlava">
          <p className="lpc-eyebrow lpc-eyebrow--dark">Portfolio služeb</p>
          <h2 id="sluzby-nadpis" className="lpc-h2">
            Čtyři paragrafy, pod kterými spíte klidně
          </h2>
        </div>

        <div className="lpc-sluzby__grid">
          {sluzby.map((s) => (
            <article className="lpc-karta" key={s.kod}>
              <span className="lpc-karta__kod">{s.kod}</span>
              <h3 className="lpc-karta__nazev">{s.nazev}</h3>
              <p className="lpc-karta__popis">{s.popis}</p>
            </article>
          ))}
        </div>

        <figure className="lpc-sluzby__media">
          <img
            src="/section-1.webp"
            alt="Zpracování účetní a daňové agendy v kanceláři LP Consulting"
            className="lpc-media-img"
          />
        </figure>
      </section>

      <section className="lpc-spolecnost" id="spolecnost" aria-labelledby="spolecnost-nadpis">
        <div className="lpc-spolecnost__grid">
          <figure className="lpc-spolecnost__media">
            <img
              src="/section-2.webp"
              alt="Tým rodinné daňové kanceláře LP Consulting v Ústí nad Labem"
              className="lpc-media-img"
            />
          </figure>
          <div className="lpc-spolecnost__text">
            <p className="lpc-eyebrow lpc-eyebrow--dark">O společnosti</p>
            <h2 id="spolecnost-nadpis" className="lpc-h2">
              Rodinná kancelář, která roste s vámi
            </h2>
            <p className="lpc-spolecnost__lead">
              Stavíme na dlouholetých zkušenostech ve vedení účetnictví a mzdové
              agendy. Dnes se staráme nejen o obchodní společnosti, ale i o pět
              příspěvkových organizací a řadu živnostníků z Ústeckého kraje.
            </p>
            <p className="lpc-spolecnost__lead">
              Nejsme call centrum ani anonymní portál. U nás víte, kdo vaše
              doklady zpracovává, a s tím člověkem se domluvíte i mimo
              přiznávací sezónu.
            </p>

            <dl className="lpc-fakta">
              {duvody.map((d) => (
                <div className="lpc-fakta__radek" key={d.cislo}>
                  <dt className="lpc-fakta__cislo">{d.cislo}</dt>
                  <dd className="lpc-fakta__label">{d.label}</dd>
                </div>
              ))}
            </dl>

            <p className="lpc-spolecnost__kontakt">
              LP Consulting s.r.o. · DIČ CZ25008111 · Bílinská 1147/1, 400 01
              Ústí nad Labem · <a href="mailto:pech@lpconsulting.cz">pech@lpconsulting.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
