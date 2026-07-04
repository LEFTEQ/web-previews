import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopmánie u Vendy — textil a oděvy z Ostravy",
  description:
    "Textil a oděvy pro celou rodinu v Ostravě. Osobní výběr, poctivé látky, rada od Vendy. Přijďte si sáhnout, než koupíte.",
  openGraph: {
    title: "Shopmánie u Vendy — textil a oděvy z Ostravy",
    description:
      "Textil a oděvy pro celou rodinu v Ostravě. Osobní výběr, poctivé látky, rada od Vendy.",
    locale: "cs_CZ",
    type: "website",
  },
};

const nabidka = [
  {
    kod: "BAV",
    material: "Bavlna",
    nazev: "Trika a mikiny pro celou rodinu",
    popis:
      "Prodyšná bavlna, co vydrží stovky praní. Dětské velikosti od 92, dospělé do 4XL. Jednobarevné i vzory.",
    slozeni: "100 % bavlna, 180 g/m²",
  },
  {
    kod: "UPL",
    material: "Úplet",
    nazev: "Metrový textil a úplety",
    popis:
      "Látky od metru pro šití doma i do dílny. Nastříháme přesně, kolik potřebujete, poradíme spotřebu na střih.",
    slozeni: "bavlna, len, viskóza — šíře 140–150 cm",
  },
  {
    kod: "FRO",
    material: "Froté",
    nazev: "Ručníky, osušky a ložní prádlo",
    popis:
      "Savé froté a hebké povlečení do každé domácnosti. Skladem ve stálých rozměrech, doobjednáme i sady.",
    slozeni: "froté 400 g/m², povlečení krep",
  },
  {
    kod: "PRA",
    material: "Pracovní",
    nazev: "Pracovní oděvy a doplňky",
    popis:
      "Montérky, zástěry, rukavice a ponožky pro firmy i domů. Vezmeme na sebe i větší objednávky pro dílny.",
    slozeni: "kepr, tvíd, směsové tkaniny",
  },
];

const duvody = [
  {
    cislo: "01",
    titulek: "Nejdřív si sáhnete",
    text:
      "Textil se pozná v ruce, ne na obrázku. U nás si každou látku osaháte, přiložíte k sobě a poradíme, na co se hodí.",
  },
  {
    cislo: "02",
    titulek: "Vendy vám poradí",
    text:
      "Za pultem není automat, ale člověk. Vendy zná svoje zboží kus po kuse a řekne vám na rovinu, co koupit a co ne.",
  },
  {
    cislo: "03",
    titulek: "Naměříme od metru",
    text:
      "Metrový textil stříháme přesně na váš střih. Kolik potřebujete, tolik zaplatíte — ani centimetr navíc.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="pg-top">
        <a className="wordmark" href="#" aria-label="Shopmánie u Vendy, textil a oděvy Ostrava">
          <span className="wordmark-line">Shopmánie</span>
          <span className="wordmark-sub">u&nbsp;Vendy · textil &amp; oděvy · Ostrava</span>
        </a>
        <a className="pg-call" href="tel:+420596000000">
          Zavolat do prodejny
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="selvedge" aria-hidden="true">
          <span className="selvedge-tick" />
          <span className="selvedge-tick" />
          <span className="selvedge-tick" />
          <span className="selvedge-tick" />
          <span className="selvedge-tick" />
          <span className="selvedge-label">okraj tkaniny</span>
        </div>

        <div className="hero-inner">
          <p className="hero-eyebrow">Prodejna textilu · Ostrava</p>
          <h1 id="hero-nadpis" className="hero-h1">
            <span className="hero-word hero-word--a">Látka</span>
            <span className="hero-word hero-word--b">se pozná</span>
            <span className="hero-word hero-word--c">v&nbsp;ruce.</span>
          </h1>
          <p className="hero-lead">
            Trika, úplety od metru, froté i montérky. U&nbsp;Vendy si zboží
            osaháte dřív, než ho koupíte — a odejdete s&nbsp;tím, co opravdu
            potřebujete.
          </p>
          <div className="hero-actions">
            <a className="btn btn--solid" href="tel:+420596000000">
              Zavolat 596&nbsp;000&nbsp;000
            </a>
            <a className="btn btn--ghost" href="mailto:vendy@shopmanie.cz">
              Napsat na e-mail
            </a>
          </div>
        </div>

        <div className="weave" aria-hidden="true">
          <div className="weave-grid">
            {Array.from({ length: 48 }).map((_, i) => (
              <span key={i} className={i % 2 === 0 ? "warp" : "weft"} />
            ))}
          </div>
        </div>
      </section>

      <section className="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="sec-head">
          <h2 id="nabidka-nadpis" className="sec-h2">
            Co u&nbsp;nás najdete
          </h2>
          <p className="sec-note">
            Skladem pro celou rodinu i&nbsp;pro dílnu. Kód vlevo je náš zkratkový
            název pultu — řekněte ho a jsme u&nbsp;správné poličky.
          </p>
        </div>

        <ul className="karty">
          {nabidka.map((p) => (
            <li key={p.kod} className="karta">
              <span className="karta-kod" aria-hidden="true">
                {p.kod}
              </span>
              <div className="karta-body">
                <p className="karta-material">{p.material}</p>
                <h3 className="karta-nazev">{p.nazev}</h3>
                <p className="karta-popis">{p.popis}</p>
                <p className="karta-slozeni">{p.slozeni}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="sec-head">
          <p className="sec-eyebrow">Proč k&nbsp;Vendě</p>
          <h2 id="duvera-nadpis" className="sec-h2 sec-h2--light">
            Malý krám, kde vás obslouží člověk
          </h2>
        </div>

        <ol className="duvody">
          {duvody.map((d) => (
            <li key={d.cislo} className="duvod">
              <span className="duvod-cislo">{d.cislo}</span>
              <div>
                <h3 className="duvod-titulek">{d.titulek}</h3>
                <p className="duvod-text">{d.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="kontakt-radek">
          <p className="kontakt-adresa">
            Najdete nás v&nbsp;Ostravě. Otevřeno po–pá 9–17, so 9–12.
          </p>
          <div className="kontakt-akce">
            <a className="btn btn--solid" href="tel:+420596000000">
              Zavolat
            </a>
            <a className="btn btn--ghost btn--onlight" href="mailto:vendy@shopmanie.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
