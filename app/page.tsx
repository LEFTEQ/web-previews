import type { CSSProperties } from "react";

export default function Page() {
  const woods = [
    { name: "Mahagon", note: "z přepravních palet", origin: "připlul přes oceán" },
    { name: "Malajský dub", note: "tvrdý, s výraznou kresbou", origin: "jihovýchodní Asie" },
    { name: "Teak", note: "odolný vůči vlhku", origin: "tropy" },
    { name: "Japonský cedr", note: "voní i po letech", origin: "Japonsko" },
  ];

  const sluzby = [
    {
      cislo: "01",
      nadpis: "Kuchyně na míru",
      text: "Srdce domova z dubu nebo jasanu, doplněné nerezem, mědí, betonem nebo ruční keramikou. Barevně nabité, nebo tiché ve stylu wabi-sabi — vždycky podle toho, jak vaříte a žijete vy.",
      akce: "Průvodce kuchyněmi",
    },
    {
      cislo: "02",
      nadpis: "Interiéry a nábytek",
      text: "Obývací pokoje, ložnice, kavárny. Materiály, které krásně stárnou — dřevo, kámen, ocel. Každý kus vzniká z jediné zakázky, na které truhlář pracuje s plným soustředěním.",
      akce: "Prohlédnout interiéry",
    },
    {
      cislo: "03",
      nadpis: "Dětské pokoje",
      text: "Prostor pro nekonečnou energii i pro odpočinek. Zdravé přírodní materiály a povrchová úprava bez rozpouštědel — tam, kde na tom opravdu záleží.",
      akce: "Inspirujte se",
    },
    {
      cislo: "04",
      nadpis: "Víkendové workshopy",
      text: "O víkendech se z truhlárny stává dílna pro vás. Postavte si vlastní kus z paletového dřeva a odvezte si domů víkend nových dovedností.",
      akce: "Zjistit více",
    },
  ];

  return (
    <main className="pk">
      <header className="pk-top">
        <a className="pk-wordmark" href="#uvod" aria-label="Atelier Paletky, domů">
          <span className="pk-wordmark__a">Atelier</span>
          <span className="pk-wordmark__b">Paletky</span>
        </a>
        <p className="pk-loc">Truhlárna · Praha-Modřany · od 2013</p>
      </header>

      <section className="pk-hero" id="uvod">
        <div className="pk-hero__media">
          <img
            src="/hero.webp"
            alt="Kuchyně na míru z březového dřeva kombinovaná s betonem, dílo Atelieru Paletky"
            className="pk-hero__img"
          />
          <span className="pk-hero__tag">Kuchyně Bříza &amp; beton</span>
        </div>

        <div className="pk-hero__text">
          <p className="pk-eyebrow">Ateliér a truhlárna v Praze</p>
          <h1 className="pk-hero__title">
            Dřevu, které mělo<br />
            skončit ve spalovně,<br />
            <em>dáváme druhý život.</em>
          </h1>
          <p className="pk-hero__lead">
            Navrhujeme a vyrábíme kuchyně, nábytek i celé interiéry ze zdravého
            dřeva — často z přepravních palet, které do Čech přijely z celého
            světa. Bez zbytečného kácení, s péčí, která vydrží generace.
          </p>
          <div className="pk-hero__cta">
            <a className="pk-btn" href="#rezivo">Prozkoumat řezivo</a>
            <a className="pk-btn pk-btn--ghost" href="#dilna">Přijet do dílny</a>
          </div>
        </div>
      </section>

      <section className="pk-woods" id="rezivo" aria-labelledby="rezivo-h">
        <div className="pk-sec-head">
          <p className="pk-eyebrow">Věříme v záchranu dřeva z palet</p>
          <h2 className="pk-sec-h" id="rezivo-h">
            Netradiční dřeviny, které by tu jinak dosloužily
          </h2>
          <p className="pk-sec-lead">
            Nepracujeme s europaletami — jejich cyklus je dobře promyšlený.
            Zajímají nás jednocestné palky z exotických dřevin. Tady je ochutnávka
            toho, co máme opřené ve skladu.
          </p>
        </div>

        <ul className="pk-woodgrid">
          {woods.map((w, i) => (
            <li
              className="pk-wood"
              key={w.name}
              style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties}
            >
              <span className="pk-wood__ring" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="pk-wood__name">{w.name}</span>
              <span className="pk-wood__note">{w.note}</span>
              <span className="pk-wood__origin">{w.origin}</span>
            </li>
          ))}
        </ul>

        <div className="pk-services">
          {sluzby.map((s) => (
            <article className="pk-service" key={s.cislo}>
              <span className="pk-service__num" aria-hidden="true">{s.cislo}</span>
              <div className="pk-service__body">
                <h3 className="pk-service__title">{s.nadpis}</h3>
                <p className="pk-service__text">{s.text}</p>
                <a className="pk-service__link" href="#dilna">
                  {s.akce}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pk-workshop">
        <img
          src="/section-1.webp"
          alt="Truhlář při práci v dílně Atelieru Paletky"
          className="pk-workshop__img"
        />
        <div className="pk-workshop__text">
          <p className="pk-eyebrow pk-eyebrow--light">Eko i logicky</p>
          <h2 className="pk-sec-h pk-sec-h--light">
            Truhlář pracuje vždy jen na jediné zakázce
          </h2>
          <p className="pk-sec-lead pk-sec-lead--light">
            Uznáváme myšlenky Slow furniture. Vzácné materiály si plné soustředění
            zaslouží. Co vyděláme, vracíme zpět do nástrojů, školení tradičních
            technik a workshopů. Forma následuje účel.
          </p>
        </div>
      </section>

      <section className="pk-dilna" id="dilna" aria-labelledby="dilna-h">
        <div className="pk-dilna__text">
          <p className="pk-eyebrow">Rádi se potkáváme</p>
          <h2 className="pk-sec-h" id="dilna-h">
            Přijeďte si dřevo osahat do Modřan
          </h2>
          <p className="pk-sec-lead">
            Srdcem Atelieru Paletky je truhlárna v pražských Modřanech. Přes
            týden tu vznikají vaše výrobky, o víkendech se konají workshopy.
            Ukážeme vám celý proces — od návrhu po finální detail — a necháme
            vás procítit dřevo pod rukama.
          </p>

          <dl className="pk-facts">
            <div className="pk-fact">
              <dt>Kde</dt>
              <dd>Modřanská 102, Praha</dd>
            </div>
            <div className="pk-fact">
              <dt>Telefon</dt>
              <dd><a href="tel:+420728176928">+420 728 176 928</a></dd>
            </div>
            <div className="pk-fact">
              <dt>E-mail</dt>
              <dd><a href="mailto:info@paletky.cz">info@paletky.cz</a></dd>
            </div>
          </dl>

          <blockquote className="pk-quote">
            <p>„Aby se zrodilo něco trvalého, je potřeba hodně lásky. Každý kus
            nábytku má svůj příběh, který se vypráví z generace na generaci.”</p>
            <cite>Petr Dáňa, zakladatel</cite>
          </blockquote>
        </div>

        <img
          src="/section-2.webp"
          alt="Hotový nábytek z paletového dřeva v interiéru"
          className="pk-dilna__img"
        />
      </section>
    </main>
  );
}
