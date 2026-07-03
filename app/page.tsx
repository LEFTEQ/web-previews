import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "HD",
      nazev: "Tlakové čištění potrubí",
      popis:
        "Vysokotlakou vodou uvolníme kořeny, tuky i usazené nánosy. Ucpaný odpad v kuchyni nebo zanesenou dešťovou svodku máte průchozí, aniž bychom cokoli bourali.",
      pro: "Domácnosti · bytové domy · restaurace",
    },
    {
      kod: "KM",
      nazev: "Kamerová prohlídka kanalizace",
      popis:
        "Kamerou na sondě projedeme potrubí a přesně ukážeme, kde je prasklina, propad nebo prorostlý kořen. Dostanete záznam a zprávu — žádné kopání naslepo.",
      pro: "Před koupí domu · pojistné události · kolaudace",
    },
    {
      kod: "OD",
      nazev: "Odvoz a likvidace odpadu",
      popis:
        "Vyvezeme jímky, septiky a lapoly. Vše odvezeme na schválenou čistírnu a doklad o likvidaci vám předáme na místě — bez starostí s evidencí.",
      pro: "Jímky · septiky · lapoly tuků",
    },
    {
      kod: "NON",
      nazev: "Nonstop havarijní výjezd",
      popis:
        "Vytéká vám voda do sklepa nebo se zvedá odpad z vpusti? Vyjíždíme i v noci a o víkendu. Zvedáme telefon, když ostatní nechávají spadnout do hlasovky.",
      pro: "Ostrava a okolí · do hodiny na místě",
    },
  ];

  return (
    <main className="ax">
      {/* HERO */}
      <header className="ax-hero">
        <img
          className="ax-hero__img"
          src="/hero.webp"
          alt="Kanalizační potrubí a technika pro čištění odpadů firmy Axmann plus"
        />
        <div className="ax-hero__scrim" aria-hidden="true" />

        <div className="ax-topbar">
          <a className="ax-wordmark" href="#top" aria-label="Axmann plus, domů">
            <span className="ax-wordmark__ax">AXMANN</span>
            <span className="ax-wordmark__plus">plus</span>
            <span className="ax-wordmark__flow" aria-hidden="true" />
          </a>
          <span className="ax-topbar__loc">Ostrava · Stará Bělá</span>
        </div>

        <div className="ax-hero__inner">
          <p className="ax-eyebrow">Kanalizace &amp; odpady · nonstop výjezd</p>
          <h1 className="ax-hero__title">
            Když se to<br />
            <span className="ax-hero__accent">zpátky nedrží</span>,<br />
            zavolejte nám.
          </h1>
          <p className="ax-hero__lead">
            Pročistíme ucpanou kanalizaci, projedeme potrubí kamerou a vyvezeme
            jímku. V Ostravě a okolí jezdíme i v noci — od roku 2018.
          </p>
          <div className="ax-hero__cta">
            <a className="ax-btn ax-btn--solid" href="tel:+420000000000">
              Zavolat na výjezd
            </a>
            <a className="ax-btn ax-btn--ghost" href="#sluzby">
              Co umíme
            </a>
          </div>
        </div>

        <dl className="ax-gauge" aria-label="Provozní parametry">
          <div className="ax-gauge__item">
            <dt>Tlak trysky</dt>
            <dd>200 bar</dd>
          </div>
          <div className="ax-gauge__item">
            <dt>Dojezd Ostrava</dt>
            <dd>do 60 min</dd>
          </div>
          <div className="ax-gauge__item">
            <dt>Na trhu od</dt>
            <dd>2018</dd>
          </div>
        </dl>
      </header>

      {/* SLUŽBY */}
      <section className="ax-sec ax-sec--sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ax-sec__head">
          <p className="ax-eyebrow ax-eyebrow--dark">Co pro vás uděláme</p>
          <h2 className="ax-h2" id="sluzby-h">
            Od ucpaného sifonu po propadlou přípojku
          </h2>
          <p className="ax-sec__intro">
            Řešíme to, co se nedá odložit. Přijedeme, najdeme příčinu a spravíme
            ji tak, aby se problém nevracel za měsíc.
          </p>
        </div>

        <div className="ax-manhole">
          <img
            className="ax-manhole__img"
            src="/section-1.webp"
            alt="Práce s vysokotlakým čištěním kanalizačního potrubí"
          />
        </div>

        <ol className="ax-list">
          {sluzby.map((s) => (
            <li className="ax-card" key={s.kod}>
              <span className="ax-card__code" aria-hidden="true">
                {s.kod}
              </span>
              <div className="ax-card__body">
                <h3 className="ax-card__title">{s.nazev}</h3>
                <p className="ax-card__text">{s.popis}</p>
                <p className="ax-card__pro">{s.pro}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section className="ax-sec ax-sec--onas" aria-labelledby="onas-h">
        <div className="ax-onas__grid">
          <div className="ax-onas__media">
            <img
              className="ax-onas__img"
              src="/section-2.webp"
              alt="Technika a vybavení pro odvoz odpadů a čištění kanalizace"
            />
          </div>

          <div className="ax-onas__text">
            <p className="ax-eyebrow ax-eyebrow--dark">Kdo přijede</p>
            <h2 className="ax-h2" id="onas-h">
              Jeden živnostník, žádná dispečerská hlasovka
            </h2>
            <p className="ax-onas__lead">
              Za Axmann plus stojí Daniel Axmann. Telefon zvedá ten, kdo pak
              stojí u vaší vpusti — takže se domluvíte přesně a bez
              přehazování mezi operátory.
            </p>

            <dl className="ax-facts">
              <div className="ax-facts__row">
                <dt>Sídlo</dt>
                <dd>Koláčkova 1217/1, Stará Bělá, 724 00 Ostrava</dd>
              </div>
              <div className="ax-facts__row">
                <dt>IČO</dt>
                <dd>07175043</dd>
              </div>
              <div className="ax-facts__row">
                <dt>Působnost</dt>
                <dd>Ostrava a okolí do 25 km</dd>
              </div>
              <div className="ax-facts__row">
                <dt>Doklad o likvidaci</dt>
                <dd>Ke každému odvozu odpadu</dd>
              </div>
            </dl>

            <blockquote className="ax-quote">
              <p>
                „Přijel v neděli večer, do hodiny odpad tekl a řekl mi rovnou,
                proč se to ucpávalo. Konec s dohady.“
              </p>
              <cite>— majitel bytového domu, Ostrava-Poruba</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
