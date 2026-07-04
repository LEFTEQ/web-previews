import type { CSSProperties } from "react";

const zapasy = [
  {
    kdy: "So 5. 10. · 18:00",
    soutez: "Livesport Superliga",
    domaci: "FBC Liberec",
    hoste: "Tatran Střešovice",
    hala: "Sportovní hala Liberec",
    stav: "doma",
  },
  {
    kdy: "Ne 13. 10. · 16:30",
    soutez: "Livesport Superliga",
    domaci: "1. SC Vítkovice",
    hoste: "FBC Liberec",
    hala: "Ostrava",
    stav: "venku",
  },
  {
    kdy: "So 19. 10. · 18:00",
    soutez: "ČEZ Extraliga žen",
    domaci: "FBC Liberec",
    hoste: "Crazy Girls Chodov",
    hala: "Sportovní hala Liberec",
    stav: "doma",
  },
];

const nabor = [
  {
    kategorie: "Přípravka",
    vek: "5–8 let",
    text: "První hůl, první přihrávka. Hravé tréninky dvakrát týdně, kde jde hlavně o radost z pohybu.",
  },
  {
    kategorie: "Elévové a žáci",
    vek: "8–15 let",
    text: "Pravidelné ligové zápasy, turnaje po celém kraji a parta, do které se vrací i o víkendu.",
  },
  {
    kategorie: "Dorost a junioři",
    vek: "15–19 let",
    text: "Vyšší tempo, práce s brankářem, cesta k áčku. Juniorky loni došly až do semifinále.",
  },
];

const pilire = [
  { cislo: "1994", popis: "rok založení klubu" },
  { cislo: "14", popis: "družstev od přípravky po áčko" },
  { cislo: "350+", popis: "hráček a hráčů v Liberci" },
];

export default function Page() {
  return (
    <main className="fbc">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="FBC Liberec, domů">
          <span className="wordmark__fbc">FBC</span>
          <span className="wordmark__mesto">LIBEREC</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#program">Program zápasů</a>
          <a href="#nabor">Nábor dětí</a>
          <a href="#klub">O klubu</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Hráči FBC Liberec v akci na florbalovém hřišti"
        />
        <div className="hero__grad" aria-hidden="true" />
        <div className="hero__inner">
          <p className="eyebrow">Florbalový klub · Liberec pod Ještědem</p>
          <h1 id="hero-nadpis" className="hero__title">
            Míček,
            <br />
            hala
            <br />
            a celý
            <span className="hero__accent"> Liberec</span>
            <br />
            v jednom&nbsp;dresu.
          </h1>
          <p className="hero__lead">
            Superligové áčko, extraligové ženy a čtrnáct mládežnických
            družstev. Trénujeme, hrajeme a fandíme spolu už třicet let.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#nabor">
              Přivést dítě na trénink
            </a>
            <a className="btn btn--ghost" href="#program">
              Kdy hrajeme doma
            </a>
          </div>
        </div>
      </section>

      <section className="program" id="program" aria-labelledby="program-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Nejbližší zápasy</p>
          <h2 id="program-nadpis">Přijďte k mantinelu</h2>
          <p className="section-lead">
            Domácí zápasy hrajeme ve Sportovní hale v Liberci. Vstup na
            mládežnické zápasy je zdarma — stačí přijít a řvát.
          </p>
        </div>

        <ul className="tabule">
          {zapasy.map((z, i) => (
            <li
              key={i}
              className={`tabule__radek ${z.stav === "doma" ? "is-doma" : ""}`}
            >
              <span className="tabule__kdy">{z.kdy}</span>
              <span className="tabule__zapas">
                <span className="tabule__tym">{z.domaci}</span>
                <span className="tabule__vs">–</span>
                <span className="tabule__tym">{z.hoste}</span>
              </span>
              <span className="tabule__meta">
                <span className="tabule__soutez">{z.soutez}</span>
                <span className="tabule__hala">{z.hala}</span>
              </span>
              <span
                className={`tabule__stav tabule__stav--${z.stav}`}
              >
                {z.stav === "doma" ? "Doma" : "Venku"}
              </span>
            </li>
          ))}
        </ul>

        <p className="program__pozn">
          Kompletní rozpis obou lig i tréninků najdete v klubovém programu.
        </p>
      </section>

      <section className="nabor" id="nabor" aria-labelledby="nabor-nadpis">
        <div className="nabor__media">
          <img
            src="/section-1.webp"
            alt="Mladí florbalisté FBC Liberec při tréninku"
          />
        </div>
        <div className="nabor__text">
          <p className="eyebrow eyebrow--dark">Nábor 2025 / 2026</p>
          <h2 id="nabor-nadpis">Naučíme vaše dítě hrát florbal</h2>
          <p className="section-lead">
            První měsíc je nezávazný a hůl půjčíme. Přijďte se podívat na
            trénink, kde budou nejblíž věkem — o zbytek se postarají trenéři.
          </p>
          <ul className="karty">
            {nabor.map((k, i) => (
              <li key={i} className="karta">
                <div className="karta__hlav">
                  <h3>{k.kategorie}</h3>
                  <span className="karta__vek">{k.vek}</span>
                </div>
                <p>{k.text}</p>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary" href="#nabor">
            Domluvit zkušební trénink
          </a>
        </div>
      </section>

      <section className="klub" id="klub" aria-labelledby="klub-nadpis">
        <div className="klub__text">
          <p className="eyebrow">O klubu</p>
          <h2 id="klub-nadpis">
            Třicet let florbalu pod&nbsp;Ještědem
          </h2>
          <p className="section-lead">
            Od party nadšenců v roce 1994 jsme vyrostli v jeden z největších
            klubů kraje. Muži drží superligu, ženy hrají extraligu a naše
            mládež plní haly od přípravky až po juniory.
          </p>
          <ul className="pilire">
            {pilire.map((p, i) => (
              <li key={i} className="pilir">
                <span className="pilir__cislo">{p.cislo}</span>
                <span className="pilir__popis">{p.popis}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="klub__media">
          <img
            src="/section-2.webp"
            alt="Tým FBC Liberec pohromadě v klubových dresech"
          />
          <figcaption>
            Áčko i mládež — jedna hala, jedna barva, jeden klub.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
