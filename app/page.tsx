import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoservis David Soviar — Olomouc | opravy všech značek",
  description:
    "Rodinný autoservis v Olomouci. Mechanika, karosárna, lak, pneuservis, diagnostika, klimatizace i příprava na STK. Opravujeme vozy všech značek — Škoda, VW, Audi, BMW, Ford, Opel, Citroën.",
  openGraph: {
    title: "Autoservis David Soviar — Olomouc",
    description:
      "Komplexní servis vozů všech značek v Olomouci. Férově, individuálně a s náhradním vozem, dokud se točí to vaše.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    kod: "MECH",
    nazev: "Mechanika a autoelektrika",
    popis:
      "Od výměny rozvodů a brzd po hledání závady v elektroinstalaci. Moderní diagnostika, která najde příčinu, ne jen následek.",
  },
  {
    kod: "KAR",
    nazev: "Karosárna a lak",
    popis:
      "Rovnání po ťukanci i větší opravy po nehodě. Lakovna míchá odstín přesně na váš vůz, ne „přibližně“.",
  },
  {
    kod: "PNEU",
    nazev: "Pneuservis a geometrie",
    popis:
      "Přezouvání, vyvážení, uskladnění gum a seřízení geometrie, aby auto jelo rovně a pneumatiky vydržely.",
  },
  {
    kod: "KLIMA",
    nazev: "Klimatizace a LPG",
    popis:
      "Plnění, čištění a dezinfekce klimatizace i kompletní přestavba vozu na plyn LPG.",
  },
  {
    kod: "STK",
    nazev: "Příprava na STK a emise",
    popis:
      "Vůz zkontrolujeme, připravíme a zajistíme STK i měření emisí. Vy jen přijdete pro klíčky.",
  },
  {
    kod: "POJ",
    nazev: "Pojistné události a půjčovna",
    popis:
      "Papírování s pojišťovnou vyřídíme za vás a po dobu opravy vám půjčíme náhradní vozidlo.",
  },
];

const znacky = [
  "Škoda",
  "Volkswagen",
  "Audi",
  "BMW",
  "Ford",
  "Opel",
  "Citroën",
];

export default function Page() {
  return (
    <main className="sv">
      <header className="sv-topbar">
        <a className="sv-mark" href="#uvod" aria-label="Autoservis David Soviar — úvod">
          <span className="sv-mark-plate">OLC</span>
          <span className="sv-mark-name">
            SOVIAR<span className="sv-mark-sub">autoservis · Olomouc</span>
          </span>
        </a>
        <a className="sv-call" href="tel:+420608740980">
          Zavolat 608&nbsp;740&nbsp;980
        </a>
      </header>

      <section className="sv-hero" id="uvod">
        <div className="sv-hero-media">
          <img
            src="/hero.webp"
            alt="Zvednutý vůz na zvedáku v dílně autoservisu David Soviar v Olomouci"
            className="sv-hero-img"
            width={1600}
            height={1100}
          />
        </div>
        <div className="sv-hero-text">
          <p className="sv-eyebrow">Šlechtitelů 938/5 · 779&nbsp;00 Olomouc</p>
          <h1 className="sv-h1">
            Auto vám<br />
            <span className="sv-h1-em">nezůstane</span> stát.
          </h1>
          <p className="sv-lede">
            Rodinný autoservis, kde mechaniku, karosárnu, lak i diagnostiku
            zvládneme pod jednou střechou. Opravujeme vozy všech značek —
            a dokud se točí to vaše, půjčíme vám náhradní.
          </p>
          <div className="sv-hero-actions">
            <a className="sv-btn sv-btn-primary" href="tel:+420608740980">
              Objednat do servisu
            </a>
            <a className="sv-btn sv-btn-ghost" href="#sluzby">
              Co všechno umíme
            </a>
          </div>
          <dl className="sv-hours">
            <div>
              <dt>Po–Pá</dt>
              <dd>7:00–17:00</dd>
            </div>
            <div>
              <dt>So</dt>
              <dd>8:00–12:00 <span>po dohodě</span></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sv-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sv-section-head">
          <p className="sv-eyebrow sv-eyebrow-dark">Servisní list</p>
          <h2 className="sv-h2" id="sluzby-nadpis">
            Jedno místo pro celé auto
          </h2>
          <p className="sv-section-sub">
            Nemusíte objíždět pět dílen. Co potřebuje vaše auto, sepíšeme na
            jednu zakázku a pořešíme na jednom místě.
          </p>
        </div>
        <ul className="sv-grid">
          {sluzby.map((s) => (
            <li className="sv-card" key={s.kod}>
              <span className="sv-card-code" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="sv-card-title">{s.nazev}</h3>
              <p className="sv-card-text">{s.popis}</p>
            </li>
          ))}
        </ul>
        <figure className="sv-figure">
          <img
            src="/section-1.webp"
            alt="Mechanik při práci na motoru vozu v dílně autoservisu"
            className="sv-figure-img"
            width={1600}
            height={900}
          />
          <figcaption className="sv-figure-cap">
            Diagnostika hledá příčinu, ne jen následek. Než něco měníme, víme proč.
          </figcaption>
        </figure>
      </section>

      <section className="sv-trust" aria-labelledby="trust-nadpis">
        <div className="sv-trust-inner">
          <div className="sv-trust-text">
            <p className="sv-eyebrow">Proč k nám</p>
            <h2 className="sv-h2 sv-h2-light" id="trust-nadpis">
              Ke každému vozu
              <br />se stavíme jinak
            </h2>
            <p className="sv-trust-lede">
              Za servisem stojí David Soviar a tým zkušených mechaniků a
              diagnostiků. Ke každému klientovi přistupujeme individuálně a
              hledáme řešení, které dává smysl pro vaše auto i vaši peněženku.
              Férovost a spolehlivost tu nejsou heslo na ceduli.
            </p>
            <p className="sv-plate-line">Servis těchto značek:</p>
            <ul className="sv-brands">
              {znacky.map((z) => (
                <li className="sv-brand-plate" key={z}>
                  {z}
                </li>
              ))}
            </ul>
          </div>
          <figure className="sv-trust-figure">
            <img
              src="/section-2.webp"
              alt="Interiér autoservisu David Soviar se zvedáky a připravenými nástroji"
              className="sv-trust-img"
              width={1200}
              height={1400}
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
