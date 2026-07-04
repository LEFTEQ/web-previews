import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presto Meat Market — řezník a kuchař v jednom | Karlín, Praha 8",
  description:
    "Gurmánské řeznictví v pražském Karlíně. Steaková masa, bio hovězí, vepřové i jehněčí z domácích farem. Naložíme, vakuově zabalíme a poradíme s přípravou.",
};

const cuts = [
  {
    id: "T-BONE",
    name: "T-bone",
    animal: "Hovězí",
    note: "Svíčková a roštěná na jedné kosti. Vyzrálé, nakrájené před vámi na tloušťku, jakou chcete.",
  },
  {
    id: "RIB",
    name: "Rib-eye",
    animal: "Hovězí",
    note: "Mramorovaný řez z vysokého roštěnce. Pro pánev i gril, kde má maso zůstat šťavnaté.",
  },
  {
    id: "KOTL",
    name: "Jehněčí kotletky",
    animal: "Jehněčí",
    note: "Očištěné na kost, připravené k rychlé úpravě. Z domácích farem, ne z mrazáku.",
  },
  {
    id: "KREK",
    name: "Vepřová krkovice",
    animal: "Vepřové",
    note: "Klasika, kterou umíme povýšit. Naložíme do marinády přímo na pultu podle vašeho receptu.",
  },
];

const services = [
  {
    label: "Poradíme u pultu",
    body: "Vybereme spolu druh i řez, řekneme, na čem a jak dlouho maso připravit. Řezník a kuchař v jedné osobě.",
  },
  {
    label: "Naložíme a zavakuujeme",
    body: "Vybraný kus naložíme do marinády přímo před vámi a vakuově zabalíme, aby vydržel a chutnal.",
  },
  {
    label: "Objednávka a rozvoz",
    body: "Maso si objednáte předem, my ho připravíme, naložíme a přivezeme, kam potřebujete.",
  },
];

export default function Page() {
  return (
    <main className="pmm">
      <header className="pmm-top">
        <a className="pmm-mark" href="#top" aria-label="Presto Meat Market, úvod">
          <span className="pmm-mark-presto">Presto</span>
          <span className="pmm-mark-mm">Meat&nbsp;Market</span>
        </a>
        <nav className="pmm-nav" aria-label="Hlavní">
          <a href="#pult">Pult</a>
          <a href="#rezy">Řezy</a>
          <a href="#reznici">Řezníci</a>
        </nav>
      </header>

      <section className="pmm-hero" id="top">
        <div className="pmm-hero-media">
          <img
            src="/hero.webp"
            alt="Vyzrálé hovězí maso na pultu karlínského řeznictví Presto Meat Market"
            className="pmm-hero-img"
          />
          <div className="pmm-hero-scrim" aria-hidden="true" />
        </div>

        <div className="pmm-hero-copy">
          <p className="pmm-kicker">Karlín · Vítkova 11 · Praha 8</p>
          <h1 className="pmm-h1">
            Řezník a&nbsp;kuchař<br />
            <span className="pmm-h1-em">u&nbsp;jednoho pultu.</span>
          </h1>
          <p className="pmm-lede">
            Steaková masa nakrájená na řez, jaký chcete. Bio hovězí, vepřové
            i&nbsp;jehněčí z&nbsp;domácích farem. A&nbsp;ke&nbsp;každému kusu
            rada, jak ho doma nezkazit.
          </p>
          <div className="pmm-hero-hours" role="note">
            <span className="pmm-open-dot" aria-hidden="true" />
            <span>
              Otevřeno <strong>čt–pá 10–18</strong> · objednávky
              <a href="tel:+420732326666"> 732&nbsp;326&nbsp;666</a>
            </span>
          </div>
        </div>
      </section>

      <section className="pmm-section pmm-pult" id="pult" aria-labelledby="pult-h">
        <div className="pmm-section-head">
          <p className="pmm-eyebrow">Co se u nás děje za pultem</p>
          <h2 id="pult-h" className="pmm-h2">
            Vyberete, my připravíme.
          </h2>
        </div>

        <div className="pmm-pult-grid">
          <ol className="pmm-services">
            {services.map((s, i) => (
              <li key={s.label} className="pmm-service">
                <span className="pmm-service-n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="pmm-service-label">{s.label}</h3>
                  <p className="pmm-service-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="pmm-pult-fig">
            <img
              src="/section-1.webp"
              alt="Řezník krájí maso na pultu a připravuje ho pro zákazníka"
              className="pmm-fig-img"
            />
            <figcaption>
              Karlínská prodejna, Vítkova&nbsp;197/11 — 500&nbsp;m od Florence
              i&nbsp;Křížíkovy.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pmm-section pmm-rezy" id="rezy" aria-labelledby="rezy-h">
        <div className="pmm-section-head">
          <p className="pmm-eyebrow">Ze steakové vitríny</p>
          <h2 id="rezy-h" className="pmm-h2">
            Řezy, které umíme nejlíp.
          </h2>
        </div>

        <ul className="pmm-cuts">
          {cuts.map((c) => (
            <li key={c.id} className="pmm-cut">
              <div className="pmm-cut-tag">
                <span className="pmm-cut-id" aria-hidden="true">
                  {c.id}
                </span>
                <span className="pmm-cut-animal">{c.animal}</span>
              </div>
              <h3 className="pmm-cut-name">{c.name}</h3>
              <p className="pmm-cut-note">{c.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="pmm-section pmm-reznici"
        id="reznici"
        aria-labelledby="reznici-h"
      >
        <div className="pmm-reznici-grid">
          <figure className="pmm-reznici-fig">
            <img
              src="/section-2.webp"
              alt="Připravené naložené a vakuově zabalené maso z řeznictví Presto Meat Market"
              className="pmm-fig-img"
            />
          </figure>
          <div className="pmm-reznici-copy">
            <p className="pmm-eyebrow">Kdo za tím stojí</p>
            <h2 id="reznici-h" className="pmm-h2">
              Nová generace řezníků, co viděla svět.
            </h2>
            <p className="pmm-reznici-body">
              Presto Meat Market spojuje profesionálního kuchaře a&nbsp;špičkového
              řezníka. Ze zahraničí jsme si přivezli chuť dostat vedle tradičního
              českého vepřového i&nbsp;americký T-bone nebo jehněčí kotletky —
              a&nbsp;možnost je běžně nakupovat máte teď v&nbsp;Karlíně.
            </p>
            <p className="pmm-reznici-body">
              Bereme maso z&nbsp;domácích farem, drůbež i&nbsp;uzeniny
              od&nbsp;pečlivě vybraných dodavatelů. Zárukou je kvalita, kterou
              servírujeme až&nbsp;do&nbsp;vašich domácností.
            </p>
            <dl className="pmm-facts">
              <div>
                <dt>Adresa</dt>
                <dd>Vítkova 197/11, 186 00 Praha 8 — Karlín</dd>
              </div>
              <div>
                <dt>Objednávky</dt>
                <dd>
                  <a href="tel:+420732326666">732 326 666</a> ·{" "}
                  <a href="mailto:presto@meat-market.cz">presto@meat-market.cz</a>
                </dd>
              </div>
              <div>
                <dt>Otevřeno</dt>
                <dd>Čtvrtek a pátek 10:00–18:00</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
