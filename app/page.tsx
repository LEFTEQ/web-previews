import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zahradní Architektura Martinov — návrhy a realizace zahrad | Záryby-Kostelec nad Labem",
  description:
    "Navrhujeme a zakládáme zahrady, které dozrávají. Zahradní architektura z Martinova u Kostelce nad Labem — projekt, výsadba, kamenné a vodní prvky, dlouhodobá péče.",
  openGraph: {
    title: "Zahradní Architektura Martinov",
    description:
      "Zahrady, které vypadají nejlíp za deset let. Návrh i realizace ve středních Čechách — Martinov u Kostelce nad Labem.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

const sluzby = [
  {
    obdobi: "Březen–duben",
    nazev: "Návrh zahrady",
    popis:
      "Projdeme pozemek, změříme svahy, osvit a půdu. Dostanete osazovací plán, seznam rostlin a rozpočet, který drží. Žádné vizualizace do šuplíku — kreslíme to, co se dá vysadit.",
    detail: "Studie · osazovací plán · položkový rozpočet",
  },
  {
    obdobi: "Duben–červen",
    nazev: "Založení a výsadba",
    popis:
      "Terénní úpravy, závlaha, trávník, stromy i trvalkové záhony. Sázíme ve správnou dobu a od kořenů dbáme na to, aby se rostliny ujaly už první sezónu.",
    detail: "Terén · závlaha · výsadba dřevin a trvalek",
  },
  {
    obdobi: "Kdykoli",
    nazev: "Kámen, voda, dřevo",
    popis:
      "Suché zídky, dlažba z kamene, jezírka a potůčky, pergoly a mola. Prvky, které dají zahradě kostru a vydrží víc než jednu módu.",
    detail: "Zídky · dlažby · jezírka · dřevěné konstrukce",
  },
  {
    obdobi: "Celoročně",
    nazev: "Údržba a péče",
    popis:
      "Zahrada je živá, ne hotová. Řez, přihnojení, dělení trvalek i seřízení závlahy — pravidelně se staráme o zahrady, které jsme založili, i o ty cizí.",
    detail: "Řez · hnojení · sezónní údržba",
  },
];

export default function Page() {
  return (
    <main className="za">
      <header className="za-top">
        <a className="za-mark" href="#" aria-label="Zahradní Architektura Martinov, domů">
          <span className="za-mark-za">ZA</span>
          <span className="za-mark-words">
            <span>Zahradní Architektura</span>
            <span className="za-mark-loc">Martinov</span>
          </span>
        </a>
        <a className="za-tel" href="tel:+420777320771">+420&nbsp;777&nbsp;320&nbsp;771</a>
      </header>

      <section className="za-hero">
        <div className="za-hero-media">
          <img
            src="/hero.webp"
            alt="Zralá zahrada s vrstvenými trvalkovými záhony, trávníkem a stromy"
            width={1600}
            height={1100}
            loading="eager"
          />
        </div>
        <div className="za-hero-text">
          <p className="za-eyebrow">Martinov u Kostelce nad Labem · od návrhu po údržbu</p>
          <h1 className="za-h1">
            Zahrada, která vypadá<br />
            nejlíp <em>za deset let.</em>
          </h1>
          <p className="za-lead">
            Navrhujeme zahrady tak, jak rostou — s ohledem na půdu, světlo a čas.
            Nesázíme kulisu na kolaudaci, ale porost, který každý rok zesílí.
          </p>
          <div className="za-hero-cta">
            <a className="za-btn" href="tel:+420777320771">Zavolat a domluvit prohlídku</a>
            <a className="za-btn-ghost" href="mailto:zahrarch@zahrarch.cz">zahrarch@zahrarch.cz</a>
          </div>
        </div>
      </section>

      <section className="za-sec" aria-labelledby="za-sluzby-h">
        <div className="za-sec-head">
          <p className="za-eyebrow">Co pro vaši zahradu uděláme</p>
          <h2 id="za-sluzby-h" className="za-h2">
            Vedeme zahradu celým rokem — od plánu po řez.
          </h2>
          <p className="za-sec-intro">
            Řadíme práce podle sezóny, ne podle ceníku. Přijdeme, když má něco
            smysl sázet, a vrátíme se, když má smysl stříhat.
          </p>
        </div>

        <ol className="za-list">
          {sluzby.map((s, i) => (
            <li className="za-item" key={s.nazev}>
              <span className="za-item-season">{s.obdobi}</span>
              <span className="za-item-no">{String(i + 1).padStart(2, "0")}</span>
              <div className="za-item-body">
                <h3 className="za-item-h">{s.nazev}</h3>
                <p className="za-item-p">{s.popis}</p>
                <p className="za-item-detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="za-about" aria-labelledby="za-about-h">
        <div className="za-about-media">
          <img
            src="/section-1.webp"
            alt="Osazovací práce v zahradě — výsadba trvalek a úprava záhonu"
            width={1200}
            height={900}
            loading="lazy"
          />
          <img
            src="/section-2.webp"
            alt="Kamenný a vodní prvek v realizované zahradě"
            width={1200}
            height={900}
            loading="lazy"
          />
        </div>

        <div className="za-about-text">
          <p className="za-eyebrow">Proč zrovna my</p>
          <h2 id="za-about-h" className="za-h2">
            Kreslíme jen to, co pak sami zasadíme.
          </h2>
          <p className="za-about-p">
            Sídlíme v Martinově a pracujeme po celém Polabí — Kostelec nad Labem,
            Neratovice, Brandýs, okolí. Zahradu si přijdeme osahat na místě dřív,
            než začneme kreslit. Díky tomu projekt sedí na váš pozemek a ne na
            obecnou šablonu.
          </p>

          <dl className="za-facts">
            <div className="za-fact">
              <dt>Návrh i realizace</dt>
              <dd>Jeden tým od studie po výsadbu i následnou údržbu.</dd>
            </div>
            <div className="za-fact">
              <dt>Rostliny na míru stanovišti</dt>
              <dd>Volíme dřeviny a trvalky podle půdy, osvitu a vaší péče.</dd>
            </div>
            <div className="za-fact">
              <dt>Rozpočet, který drží</dt>
              <dd>Položkový a bez překvapení na konci sezóny.</dd>
            </div>
          </dl>

          <blockquote className="za-quote">
            „Dobrou zahradu poznáte podle toho, že za pár let vypadá, jako by tam
            byla odjakživa.“
          </blockquote>
        </div>
      </section>
    </main>
  );
}
