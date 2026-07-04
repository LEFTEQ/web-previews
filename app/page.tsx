import type { CSSProperties } from "react";

export default function Page() {
  const piva = [
    {
      cislo: "11°",
      nazev: "Svijanský Máz",
      styl: "Světlý ležák",
      popis:
        "Naše vlajková loď. Sytě chmelený, plný a přesto pitelný. To pivo, o kterém sládek říká, že je pořád stejné — a myslí to jako poklonu.",
    },
    {
      cislo: "12°",
      nazev: "Svijanský Rytíř",
      styl: "Prémiový ležák",
      popis:
        "Delší zrání ve sklepě, výraznější hořkost, hutná pěna. Pro chvíle, kdy nespěcháte a chcete poznat rozdíl.",
    },
    {
      cislo: "13°",
      nazev: "Svijanský Svátek",
      styl: "Za studena chmelený ležák",
      popis:
        "Kroužkovaný, za studena chmelený speciál. Vůně čerstvého chmele, kterou ucítíte dřív, než se napijete.",
    },
  ];

  const suroviny = [
    {
      poradi: "01",
      nadpis: "Voda z vlastních studní",
      text: "Měkká voda z hlubinných vrtů pod pivovarem. Základ chuti, který nekoupíte a nenahradíte.",
    },
    {
      poradi: "02",
      nadpis: "Žatecký poloraný červeňák",
      text: "Ušlechtilý český chmel, který dává svijanskému pivu jeho hořkost i jemnou květinovou vůni.",
    },
    {
      poradi: "03",
      nadpis: "Moravský slad",
      text: "Ječný slad z tuzemských sladoven. Rmutujeme klasickým dekokčním postupem, na který jsme si nenechali sáhnout.",
    },
    {
      poradi: "04",
      nadpis: "Otevřená spilka a čas",
      text: "Kvasíme na otevřené spilce a necháváme ležet v ležáckých tancích tak dlouho, jak pivo potřebuje. Ne jak spěchá kalendář.",
    },
  ];

  return (
    <main className="pg">
      {/* HERO */}
      <header className="hero" aria-label="Pivovar Svijany">
        <nav className="nav" aria-label="Hlavní navigace">
          <span className="wordmark">
            <span className="wordmark__pivovar">PIVOVAR</span>
            <span className="wordmark__svijany">SVIJANY</span>
          </span>
          <ul className="nav__list">
            <li><a href="#piva">Svijanská piva</a></li>
            <li><a href="#suroviny">Suroviny</a></li>
            <li><a href="#navsteva">Návštěva</a></li>
          </ul>
        </nav>

        <div className="hero__grid">
          <p className="hero__eyebrow">Minipivovar · Liberecký kraj</p>

          <h1 className="hero__title">
            <span className="line line--a">V čem je</span>
            <span className="line line--b">naše pivo</span>
            <span className="line line--c">jiné?</span>
          </h1>

          <p className="hero__answer">
            <span className="hero__dash">—</span> V tom, že je
            <span className="hero__stress"> stále stejné.</span>
          </p>

          <p className="hero__author">Petr Menšík, sládek</p>

          <div className="hero__meta" aria-hidden="true">
            <span>Voda z vlastních studní</span>
            <span>Žatecký chmel</span>
            <span>Otevřená spilka</span>
          </div>
        </div>

        {/* signature: hladinoměr sladu / ležácký tank */}
        <div className="gauge" aria-hidden="true">
          <span className="gauge__deg gauge__deg--top">13°</span>
          <div className="gauge__tube">
            <div className="gauge__foam" />
            <div className="gauge__beer" />
          </div>
          <span className="gauge__deg gauge__deg--bot">11°</span>
          <span className="gauge__label">stupňovitost</span>
        </div>
      </header>

      {/* PIVA */}
      <section id="piva" className="piva" aria-labelledby="piva-nadpis">
        <div className="sec-head">
          <p className="sec-head__eyebrow">Co čepujeme</p>
          <h2 id="piva-nadpis" className="sec-head__title">Tři piva, jeden charakter</h2>
          <p className="sec-head__lead">
            Nevaříme desítky značek. Vaříme pár piv pořádně a pak je
            necháme na pokoji. Poznáte je podle stupňovitosti, ne podle
            marketingu.
          </p>
        </div>

        <ul className="piva__list">
          {piva.map((p) => (
            <li key={p.nazev} className="pivo">
              <span className="pivo__deg" aria-hidden="true">{p.cislo}</span>
              <div className="pivo__body">
                <h3 className="pivo__name">{p.nazev}</h3>
                <p className="pivo__style">{p.styl}</p>
                <p className="pivo__desc">{p.popis}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="piva__figure">
          <img
            src="/section-1.webp"
            alt="Ležácké tanky ve svijanském pivovaru"
            loading="lazy"
          />
          <figcaption>Ležácké sklepy — tady pivo dozrává vlastním tempem.</figcaption>
        </figure>
      </section>

      {/* SUROVINY / O NÁS */}
      <section id="suroviny" className="suroviny" aria-labelledby="sur-nadpis">
        <figure className="suroviny__figure">
          <img
            src="/section-2.webp"
            alt="Svijanské pivo nalévané do sklenice"
            loading="lazy"
          />
        </figure>

        <div className="suroviny__panel">
          <div className="sec-head">
            <p className="sec-head__eyebrow">Z čeho to je</p>
            <h2 id="sur-nadpis" className="sec-head__title">
              Čtyři věci, na kterých nešetříme
            </h2>
          </div>

          <ol className="suroviny__list" id="navsteva">
            {suroviny.map((s) => (
              <li key={s.poradi} className="surovina">
                <span className="surovina__num" aria-hidden="true">{s.poradi}</span>
                <div>
                  <h3 className="surovina__h">{s.nadpis}</h3>
                  <p className="surovina__p">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="suroviny__note">
            Přijeďte se podívat, jak to celé funguje. Exkurze i prodejnu
            najdete přímo v pivovaru u Liberce — a na pivobraní čepujeme rovnou z tanku.
          </p>
        </div>
      </section>
    </main>
  );
}
