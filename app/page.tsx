import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ART truhlářství — nábytek na míru z pražské dílny",
  description:
    "Vestavěné skříně, kuchyně, schody i repase oken a dveří. Truhlářská dílna v Praze, kde každý kus vzniká podle vašeho prostoru — od nákresu po montáž.",
  openGraph: {
    title: "ART truhlářství — nábytek na míru z pražské dílny",
    description:
      "Vestavěné skříně, kuchyně, schody i repase oken a dveří. Poctivé truhlářství v Praze.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const vyrobky = [
  {
    cislo: "01",
    nazev: "Vestavěné skříně",
    popis:
      "Zaměříme šikminy, výklenky i strop na milimetr. Skříň sedne do prostoru tak, jako by tam byla vždycky — s pojezdy, které se nezaseknou ani po deseti letech.",
  },
  {
    cislo: "02",
    nazev: "Kuchyně a jídelní kouty",
    popis:
      "Korpusy z kvalitních materiálů, dvířka podle vašeho vkusu — rustikální i supermoderní. Řešíme spotřebiče, osvětlení i pracovní desku tak, aby se v kuchyni dobře vařilo.",
  },
  {
    cislo: "03",
    nazev: "Ložnice, dětské pokoje, patra",
    popis:
      "Postele, palandy a patrové pokoje, které vydrží skákání i stěhování. Bezpečné hrany, pevné spoje, úložný prostor tam, kde ho potřebujete.",
  },
  {
    cislo: "04",
    nazev: "Schody a zábradlí",
    popis:
      "Dřevěné schodiště na míru domu — od jednoduchých stupňů po řešení s podstupnicemi a zábradlím, kde drží každá příčka tam, kde má.",
  },
  {
    cislo: "05",
    nazev: "Okna a dveře — výroba i repase",
    popis:
      "Nová špaletová okna i citlivá repase těch původních. Umíme okenní těsnění, kterým přestane táhnout, aniž byste přišli o krásu starého dřeva.",
  },
  {
    cislo: "06",
    nazev: "Terasy, pergoly, ploty, obklady",
    popis:
      "Venkovní dřevo, které snese pražské počasí. Terasy a pergoly na zahradu i balkon, palisády a dřevěné obklady stěn.",
  },
];

const kroky = [
  {
    faze: "Zaměření",
    text: "Přijedeme k vám, změříme prostor a probereme, k čemu má nábytek sloužit. Poradíme s materiálem i kováním.",
  },
  {
    faze: "Nákres a cena",
    text: "Dostanete konkrétní návrh a pevnou cenu. Žádná překvapení, žádné dodatečné položky.",
  },
  {
    faze: "Dílna",
    text: "V naší pražské dílně vzniká zakázka kus po kusu — řežeme, brousíme, dýhujeme a lakujeme.",
  },
  {
    faze: "Montáž",
    text: "Přivezeme a smontujeme u vás doma. Uklidíme po sobě a předáme hotové dílo.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="ART truhlářství, úvod">
          <span className="wordmark-art">ART</span>
          <span className="wordmark-rest">truhlářství</span>
        </a>
        <a className="topbar-call" href="tel:+420602100200">
          Zavolat truhláři
        </a>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Detail truhlářské práce z dílny ART truhlářství — spojené dřevo, hoblina a nástroje"
            className="hero-img"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Truhlářská dílna &middot; Praha &middot; od roku 2009</p>
          <h1 className="hero-title">
            Z fošny<span className="grain">·</span>něco,
            <br />
            co u&nbsp;vás <em>zůstane</em> generace.
          </h1>
          <p className="hero-lede">
            Děláme nábytek na míru pro pražské byty i domy — vestavěné skříně,
            kuchyně, schody, okna. Každý kus vzniká podle vašeho prostoru, ne
            podle katalogu.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420602100200">
              Zavolat truhláři
            </a>
            <a className="btn btn-ghost" href="mailto:dilna@art-truhlarstvi.cz">
              Napsat poptávku
            </a>
          </div>
        </div>
      </section>

      <section className="vyroba" id="vyroba" aria-labelledby="vyroba-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Co u nás vzniká</p>
          <h2 id="vyroba-nadpis" className="section-title">
            Truhlařina od skříně po schodiště
          </h2>
          <p className="section-lede">
            Interiér i exteriér, nová výroba i repase. Vyberte si, co potřebujete
            — zbytek vymyslíme společně.
          </p>
        </div>

        <ul className="vyrobky">
          {vyrobky.map((v) => (
            <li className="vyrobek" key={v.cislo}>
              <span className="vyrobek-cislo" aria-hidden="true">
                {v.cislo}
              </span>
              <h3 className="vyrobek-nazev">{v.nazev}</h3>
              <p className="vyrobek-popis">{v.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="onas" id="o-nas" aria-labelledby="onas-nadpis">
        <div className="onas-media">
          <img
            src="/section-1.webp"
            alt="Truhlář při práci v dílně ART truhlářství v Praze"
            className="onas-img"
          />
          <img
            src="/section-2.webp"
            alt="Hotový nábytek na míru z pražské dílny ART truhlářství"
            className="onas-img onas-img-second"
          />
        </div>
        <div className="onas-copy">
          <p className="eyebrow eyebrow-dark">Jak to u nás chodí</p>
          <h2 id="onas-nadpis" className="section-title">
            Čtyři kroky od nápadu k hotovému kusu
          </h2>
          <ol className="kroky">
            {kroky.map((k, i) => (
              <li className="krok" key={k.faze}>
                <span className="krok-cislo" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="krok-faze">{k.faze}</h3>
                  <p className="krok-text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="onas-note">
            Pracujeme v&nbsp;Praze od roku 2009. Poctivé spoje, dohodnutá cena
            a&nbsp;dílo, které přežije stěhování i&nbsp;děti.
          </p>
        </div>
      </section>
    </main>
  );
}
