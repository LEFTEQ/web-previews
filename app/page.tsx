import type { CSSProperties } from "react";

export default function Page() {
  const divize = [
    {
      cislo: "01",
      nazev: "Electronics",
      titulek: "Elektrotechnika",
      popis:
        "Osazování desek plošných spojů, kabelové svazky a kompletní elektronické sestavy. Vyvíjíme i vyrábíme — od prototypu po sériovou dodávku.",
    },
    {
      cislo: "02",
      nazev: "Medical",
      titulek: "Zdravotní technika",
      popis:
        "Přístroje a komponenty pro zdravotnictví, kde nejde nic ošidit. Výroba pod zavedeným systémem jakosti a s dohledatelností každého kusu.",
    },
    {
      cislo: "03",
      nazev: "Mobiliář",
      titulek: "Mobiliář",
      popis:
        "Kovové konstrukce, vestavby a zakázkový mobiliář. Svařujeme, ohýbáme a povrchově upravujeme přesně podle výkresu.",
    },
    {
      cislo: "04",
      nazev: "Nástrojárna",
      titulek: "Nástrojárna",
      popis:
        "Formy, přípravky a jednoúčelové nástroje. Vlastní nástrojárna nám drží kvalitu i termíny pod jednou střechou.",
    },
  ];

  return (
    <main className="tse">
      <header className="tse-top">
        <a className="tse-mark" href="#uvod" aria-label="TSE — úvod">
          <span className="tse-mark__t">TSE</span>
          <span className="tse-mark__sub">spol. s r.o. · České Budějovice</span>
        </a>
        <nav className="tse-nav" aria-label="Hlavní navigace">
          <a href="#divize">Divize</a>
          <a href="#profil">Profil</a>
          <a className="tse-nav__tel" href="tel:+420386721111">
            <span className="tse-nav__tellabel">Zavolat</span>
            <span className="tse-nav__telnum">386 721 111</span>
          </a>
        </nav>
      </header>

      <section className="tse-hero" id="uvod">
        <div className="tse-hero__media">
          <img
            src="/hero.webp"
            alt="Osazená deska plošných spojů z výroby TSE"
            className="tse-hero__img"
            width={1600}
            height={1100}
            loading="eager"
          />
        </div>
        <div className="tse-hero__panel">
          <p className="tse-eyebrow">Elektronická výroba od roku 1998</p>
          <h1 className="tse-hero__h">
            Vyvíjíme a&nbsp;pájíme
            <span className="tse-hero__accent"> elektroniku</span>,
            <br />
            kterou vyvážíme do celého světa.
          </h1>
          <p className="tse-hero__lead">
            Přes 25 let vlastního vývoje a&nbsp;výroby v&nbsp;Českých
            Budějovicích. Osazujeme desky, stavíme přístroje pro zdravotnictví,
            svařujeme mobiliář a&nbsp;brousíme nástroje — pod jedním systémem
            jakosti.
          </p>
          <div className="tse-hero__cta">
            <a className="tse-btn tse-btn--solid" href="tel:+420386721111">
              Zavolat 386 721 111
            </a>
            <a className="tse-btn tse-btn--ghost" href="#divize">
              Prohlédnout divize
            </a>
          </div>
          <dl className="tse-stats">
            <div>
              <dt>25+ let</dt>
              <dd>v&nbsp;elektronické výrobě</dd>
            </div>
            <div>
              <dt>4 divize</dt>
              <dd>pod jednou střechou</dd>
            </div>
            <div>
              <dt>Export</dt>
              <dd>do celého světa</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="tse-divize" id="divize">
        <div className="tse-sec__head">
          <p className="tse-eyebrow">Co u&nbsp;nás vzniká</p>
          <h2 className="tse-sec__h">Čtyři divize, jedna dílna</h2>
          <p className="tse-sec__lead">
            Od návrhu obvodu po hotový přístroj řešíme vše in-house. Nemusíte
            koordinovat pět dodavatelů — dohodnete se s&nbsp;jedním.
          </p>
        </div>
        <div className="tse-grid">
          <div className="tse-grid__img">
            <img
              src="/section-1.webp"
              alt="Výrobní zázemí TSE — pracoviště elektronické výroby"
              width={1200}
              height={900}
              loading="lazy"
            />
          </div>
          <ol className="tse-list">
            {divize.map((d) => (
              <li className="tse-item" key={d.cislo}>
                <span className="tse-item__num" aria-hidden="true">
                  {d.cislo}
                </span>
                <div className="tse-item__body">
                  <p className="tse-item__tag">TSE {d.nazev}</p>
                  <h3 className="tse-item__h">{d.titulek}</h3>
                  <p className="tse-item__p">{d.popis}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tse-profil" id="profil">
        <div className="tse-profil__grid">
          <div className="tse-profil__media">
            <img
              src="/section-2.webp"
              alt="Detail práce v dílně TSE — kontrola vyrobeného dílu"
              width={1200}
              height={1400}
              loading="lazy"
            />
          </div>
          <div className="tse-profil__text">
            <p className="tse-eyebrow">Profil firmy</p>
            <h2 className="tse-sec__h">
              Kvalifikovaní lidé
              <br />
              a&nbsp;zavedený systém jakosti.
            </h2>
            <p className="tse-profil__lead">
              TSE spol. s&nbsp;r.o. je českobudějovický výrobce s&nbsp;více než
              čtvrtstoletím zkušeností. Vyvíjíme vlastní produkty i&nbsp;vyrábíme
              na zakázku. Stálý tým, vlastní nástrojárna a&nbsp;kontrola kvality
              u&nbsp;každé dodávky.
            </p>

            <ul className="tse-facts">
              <li>
                <span className="tse-facts__k">Vlastní vývoj</span>
                <span className="tse-facts__v">
                  Od schématu po funkční prototyp.
                </span>
              </li>
              <li>
                <span className="tse-facts__k">Systém jakosti</span>
                <span className="tse-facts__v">
                  Dohledatelnost a&nbsp;kontrola každého kusu.
                </span>
              </li>
              <li>
                <span className="tse-facts__k">Export</span>
                <span className="tse-facts__v">
                  Výrobky dodáváme zákazníkům po celém světě.
                </span>
              </li>
            </ul>

            <blockquote className="tse-quote">
              „Rádi ukážeme technologické zázemí i&nbsp;možnosti spolupráce —
              stačí se ozvat.“
              <cite>— tým TSE, České Budějovice</cite>
            </blockquote>

            <div className="tse-profil__contact">
              <a className="tse-btn tse-btn--solid" href="tel:+420386721111">
                Zavolat 386 721 111
              </a>
              <a className="tse-btn tse-btn--ghost" href="mailto:tse@tse.cz">
                Napsat na tse@tse.cz
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

// jen aby TS neplakal nad nevyužitým importem při čistém buildu
const _unused: CSSProperties | undefined = undefined;
void _unused;
