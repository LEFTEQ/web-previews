import React from "react";

export default function Page() {
  const oblasti = [
    {
      cislo: "§ 89",
      nazev: "Občanské a rodinné právo",
      popis:
        "Sepis a revize smluv, převody nemovitostí do advokátní úschovy, náhrada škody, spory mezi sousedy i vypořádání dědictví. Vysvětlíme vám možnosti dřív, než něco podepíšete.",
    },
    {
      cislo: "§ 132",
      nazev: "Obchodní právo a korporace",
      popis:
        "Zakládání a změny s.r.o., úprava vztahů mezi společníky, obchodní smlouvy a jejich připomínkování. Hlídáme detaily, které se později rozhodnou u soudu.",
    },
    {
      cislo: "§ 42",
      nazev: "Pracovní právo",
      popis:
        "Pracovní smlouvy a jejich ukončení, neplatné výpovědi, mzdové nároky. Zastoupíme zaměstnavatele i zaměstnance v jednání i před soudem.",
    },
    {
      cislo: "§ 65",
      nazev: "Správní právo",
      popis:
        "Řízení před úřady, stavební a přestupková agenda, opravné prostředky a správní žaloby. Připravíme podání tak, aby obstálo.",
    },
    {
      cislo: "§ 1970",
      nazev: "Vymáhání pohledávek",
      popis:
        "Uplatnění nároků od upomínky přes žalobu po exekuci. Řekneme rovnou, jestli se spor vyplatí vést, nebo je rozumnější dohoda.",
    },
    {
      cislo: "čl. 36",
      nazev: "Zastupování v řízení",
      popis:
        "Civilní, správní i rozhodčí řízení — od první stání po odvolání. U jednacího stolu stojíme vždy na vaší straně.",
    },
  ];

  return (
    <main className="ak">
      <header className="ak-nav" aria-label="Hlavní navigace">
        <a className="ak-mark" href="#uvod" aria-label="Pustějovský — advokátní kancelář, úvod">
          <span className="ak-mark-name">Pustějovský</span>
          <span className="ak-mark-sub">advokátní&nbsp;kancelář · České&nbsp;Budějovice</span>
        </a>
        <nav className="ak-links">
          <a href="#oblasti">Právní oblasti</a>
          <a href="#kancelar">O kanceláři</a>
          <a className="ak-nav-cta" href="#kontakt">Zavolat</a>
        </nav>
      </header>

      <section className="ak-hero" id="uvod">
        <div className="ak-hero-media">
          <img
            src="/hero.webp"
            alt="Interiér advokátní kanceláře Pustějovský v Českých Budějovicích"
            className="ak-hero-img"
          />
          <span className="ak-hero-veil" aria-hidden="true" />
        </div>

        <div className="ak-hero-inner">
          <p className="ak-eyebrow">Zahradní 314/8 · České Budějovice 2</p>
          <h1 className="ak-hero-title">
            Právo<span className="ak-serif">,</span> které<br />
            <em>rozumíte</em> dřív,<br />
            než ho podepíšete.
          </h1>
          <p className="ak-hero-lede">
            Mgr.&nbsp;Ondřej Pustějovský vede jihočeskou advokátní kancelář, kde
            klient dostane rovnou řeč místo paragrafů. Občanské, obchodní,
            pracovní i správní právo — s jasnou domluvou o postupu i ceně.
          </p>
          <div className="ak-hero-actions">
            <a className="ak-btn" href="#kontakt">Objednat konzultaci</a>
            <a className="ak-btn ak-btn-ghost" href="#oblasti">Čím se zabýváme</a>
          </div>
        </div>
      </section>

      <section className="ak-oblasti" id="oblasti" aria-labelledby="oblasti-h">
        <div className="ak-sec-head">
          <p className="ak-eyebrow ak-eyebrow-dark">Právní oblasti</p>
          <h2 id="oblasti-h" className="ak-sec-title">
            Řešíme to, co lidé i firmy v kraji nejčastěji potřebují.
          </h2>
          <p className="ak-sec-lede">
            Každou věc vedeme od první konzultace až po výsledek. Nebudete si
            domýšlet, jak spor pokračuje — vždycky víte, co se děje a proč.
          </p>
        </div>

        <ol className="ak-grid">
          {oblasti.map((o) => (
            <li className="ak-card" key={o.nazev}>
              <span className="ak-card-num">{o.cislo}</span>
              <h3 className="ak-card-title">{o.nazev}</h3>
              <p className="ak-card-text">{o.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ak-kancelar" id="kancelar" aria-labelledby="kancelar-h">
        <div className="ak-kancelar-grid">
          <div className="ak-kancelar-media">
            <img
              src="/section-1.webp"
              alt="Pracovna advokáta se spisy a knihovnou právní literatury"
              className="ak-fig"
            />
            <img
              src="/section-2.webp"
              alt="Detail jednací místnosti advokátní kanceláře"
              className="ak-fig ak-fig-2"
            />
          </div>

          <div className="ak-kancelar-body">
            <p className="ak-eyebrow ak-eyebrow-dark">O kanceláři</p>
            <h2 id="kancelar-h" className="ak-sec-title">
              Jeden advokát, který za vaši věc ručí jménem.
            </h2>
            <p className="ak-para">
              Kancelář na Zahradní ulici v Českých Budějovicích vede
              Mgr.&nbsp;Ondřej Pustějovský. Nejste číslo spisu v řadě — vaši věc
              zná advokát, se kterým jste ji probírali, od začátku do konce.
            </p>
            <p className="ak-para">
              Těžiště práce tvoří smluvní dokumentace: sepis a revize smluv,
              které vám předložila protistrana, právní poradenství pro obchodní
              korporace, uplatňování pohledávek a zastupování v civilním,
              správním i rozhodčím řízení.
            </p>

            <dl className="ak-facts">
              <div className="ak-fact">
                <dt>Adresa</dt>
                <dd>Zahradní 314/8<br />370&nbsp;05 České Budějovice 2</dd>
              </div>
              <div className="ak-fact">
                <dt>E-mail</dt>
                <dd>kancelar@pkak.cz</dd>
              </div>
              <div className="ak-fact">
                <dt>Jak začínáme</dt>
                <dd>Úvodní konzultace, jasná domluva o&nbsp;ceně, pak práce.</dd>
              </div>
            </dl>

            <a className="ak-btn ak-btn-dark" href="#kontakt" id="kontakt">
              Napsat do kanceláře
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
