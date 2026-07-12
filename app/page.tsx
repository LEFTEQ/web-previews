import React from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Tlakové čištění potrubí",
      popis:
        "Ucpaný odpad rozpustí voda pod tlakem až 200 barů. Vyčistíme kuchyňské svody, koupelnové odpady i ležatou kanalizaci — bez bourání, bez chemie, hned na místě.",
      detail: "Průměry DN 40 až DN 300"
    },
    {
      cislo: "02",
      nazev: "Kamerová prohlídka",
      popis:
        "Než začneme kopat, podíváme se dovnitř. Kamera projede potrubím a na monitoru uvidíte přesně, kde je prasklina, kořen nebo propadlá trubka.",
      detail: "Záznam a lokalizace poruchy"
    },
    {
      cislo: "03",
      nazev: "Frézování kořenů a nánosů",
      popis:
        "Do kanalizace prorostlé kořeny a zatvrdlé usazeniny odstraní rotační fréza. Potrubí získá zpět původní průtok, aniž bychom rozkopali zahradu.",
      detail: "Litina, kamenina, plast"
    },
    {
      cislo: "04",
      nazev: "Havárie NONSTOP",
      popis:
        "Odpad se vrací do sklepa v neděli večer? Vyjedeme i mimo pracovní dobu. Vůz je vybavený tak, aby většina zásahů skončila napoprvé.",
      detail: "Praha a okolí, 24 hodin denně"
    }
  ];

  const duvody = [
    {
      titulek: "Přijedeme rychle",
      text:
        "Sídlíme v Praze 8 na Slovance. Do většiny pražských adres jsme u vás během pár desítek minut od zavolání — s technikou připravenou přímo ve voze."
    },
    {
      titulek: "Řekneme cenu předem",
      text:
        "Než pustíme vodu do potrubí, víte, kolik zásah stojí. Žádné dopočítávání po práci, žádné položky, se kterými jste nepočítali."
    },
    {
      titulek: "Vyučení kanalizatéři",
      text:
        "K vám nepřijede brigádník s hadicí. Pracují u nás lidé, kteří kanalizaci rozumí a poznají, jestli stačí pročistit, nebo je čas na opravu."
    }
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Rothenberg — čištění kanalizace Praha">
          <span className="wordmark__flow" aria-hidden="true" />
          <span className="wordmark__name">ROTHENBERG</span>
          <span className="wordmark__sub">čištění kanalizace · Praha</span>
        </a>
        <a className="topbar__call" href="tel:+420603421968">
          <span className="topbar__callLabel">NONSTOP linka</span>
          <span className="topbar__callNum">603 421 968</span>
        </a>
      </header>

      <section className="hero">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Technik Rothenbergu čistí ucpanou kanalizaci tlakovou hadicí v Praze"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">Ucpaný odpad? Voláte správně.</p>
          <h1 className="hero__title">
            Když se voda<br />
            <span className="hero__accent">vrací zpátky,</span><br />
            přijedeme ji poslat dál.
          </h1>
          <p className="hero__lead">
            Tlakové čištění kanalizace a odpadů v Praze. Havárie řešíme nonstop —
            i v noci a o víkendu, s technikou přímo ve voze.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420603421968">Zavolat na 603 421 968</a>
            <a className="btn btn--ghost" href="#sluzby">Co umíme vyčistit</a>
          </div>
          <div className="hero__ticker" role="list">
            <span role="listitem">Nonstop havárie</span>
            <span aria-hidden="true">·</span>
            <span role="listitem">Bez bourání</span>
            <span aria-hidden="true">·</span>
            <span role="listitem">Cena předem</span>
            <span aria-hidden="true">·</span>
            <span role="listitem">Praha 8, Na Slovance</span>
          </div>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sluzby__head">
          <p className="section__eyebrow">Co u vás uděláme</p>
          <h2 className="section__title" id="sluzby-nadpis">
            Od ucpaného sifonu<br />po propadlou přípojku.
          </h2>
          <p className="section__intro">
            Kanalizaci čistíme napříč všemi průměry — od úzkých bytových odpadů
            až po ležaté řady pod dvorem. Nejdřív zjistíme, kde je problém,
            teprve pak volíme nástroj.
          </p>
        </div>

        <div className="sluzby__figure">
          <img
            src="/section-1.webp"
            alt="Tlaková hadice a čisticí technika Rothenbergu při práci"
            className="sluzby__img"
          />
        </div>

        <ol className="sluzby__list">
          {sluzby.map((s) => (
            <li className="sluzba" key={s.cislo}>
              <span className="sluzba__num" aria-hidden="true">{s.cislo}</span>
              <div className="sluzba__body">
                <h3 className="sluzba__nazev">{s.nazev}</h3>
                <p className="sluzba__popis">{s.popis}</p>
                <p className="sluzba__detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera__grid">
          <div className="duvera__figure">
            <img
              src="/section-2.webp"
              alt="Servisní vůz a tým Rothenberg s.r.o. připravený k výjezdu v Praze"
              className="duvera__img"
            />
            <div className="duvera__badge">
              <span className="duvera__badgeNum">36</span>
              <span className="duvera__badgeLabel">měsíců záruka na provedenou práci</span>
            </div>
          </div>

          <div className="duvera__text">
            <p className="section__eyebrow">Proč nás lidé volají znovu</p>
            <h2 className="section__title" id="duvera-nadpis">
              Přijedeme, řekneme cenu,<br />a odpad zase teče.
            </h2>
            <dl className="duvera__list">
              {duvody.map((d) => (
                <div className="duvera__item" key={d.titulek}>
                  <dt className="duvera__itemTitle">{d.titulek}</dt>
                  <dd className="duvera__itemText">{d.text}</dd>
                </div>
              ))}
            </dl>
            <div className="duvera__contact">
              <a className="btn btn--primary" href="tel:+420603421968">Zavolat technikovi</a>
              <span className="duvera__contactAlt">
                nebo pište na <a href="mailto:rothenberg@centrum.cz">rothenberg@centrum.cz</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
