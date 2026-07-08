import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vitrans s.r.o. — autodoprava z Ústí nad Labem",
  description:
    "Nákladní autodoprava Ústí nad Labem. Vozíme po celé ČR i do zahraničí — plachtové soupravy, sklápěče, expresní dovozy. Naložíme dnes, doručíme včas.",
  openGraph: {
    title: "Vitrans s.r.o. — autodoprava z Ústí nad Labem",
    description:
      "Nákladní autodoprava z Ústí nad Labem po celé ČR i do EU. Zavolejte a domluvíme svoz ještě dnes.",
    type: "website",
    images: ["/hero.webp"],
  },
};

const sluzby = [
  {
    kod: "03,5 t",
    nazev: "Rozvoz po regionu",
    popis:
      "Palety, materiál i drobné zásilky po Ústeckém kraji. Naložíme ráno ve skladu, do oběda je zboží u zákazníka.",
    detaily: ["Ústí, Teplice, Děčín, Most", "Čelní i boční nakládka", "Doklad o doručení hned"],
  },
  {
    kod: "24 t",
    nazev: "Plachtové soupravy",
    popis:
      "Kamionová přeprava po celé ČR i do EU. Plachta, shrnovací bok, 34 europalet. Vozíme paletové zboží i nadměr do 24 tun.",
    detaily: ["Vnitrostátní i zahraniční linky", "GPS sledování zásilky", "Pojištění nákladu do 50 000 €"],
  },
  {
    kod: "S1",
    nazev: "Sklápěče a sypké",
    popis:
      "Štěrk, písek, recyklát, výkopová zemina. Přistavíme sklápěč na stavbu i mezi paneláky a odvezeme suť na skládku.",
    detaily: ["Kamenivo i zemina", "Odvoz stavební suti", "Přistavení do 24 hodin"],
  },
];

export default function Page() {
  return (
    <main className="vt">
      <header className="vt-top">
        <a className="vt-brand" href="#" aria-label="Vitrans s.r.o.">
          <span className="vt-brand-mark" aria-hidden="true">VT</span>
          <span className="vt-brand-word">
            Vitrans<span className="vt-brand-dot">.</span>
            <span className="vt-brand-sub">autodoprava · Ústí n. L.</span>
          </span>
        </a>
        <nav className="vt-nav" aria-label="Hlavní">
          <a href="#sluzby">Co vozíme</a>
          <a href="#firma">O firmě</a>
          <a className="vt-nav-call" href="tel:+420475000000">Zavolat řidiči</a>
        </nav>
      </header>

      <section className="vt-hero" aria-labelledby="vt-hero-h">
        <div className="vt-hero-copy">
          <p className="vt-eyebrow">
            <span className="vt-plate">4U 8 3120</span>
            náklad z Labe do celé Evropy
          </p>
          <h1 id="vt-hero-h">
            Naložíme dnes,
            <br />
            <span className="vt-hero-accent">doručíme včas.</span>
          </h1>
          <p className="vt-hero-lead">
            Rodinná autodoprava z Ústí nad Labem. Od jedné palety po plnou
            soupravu — vezeme paletové zboží, sypké materiály i nadměr po
            celé ČR a do zemí EU.
          </p>
          <div className="vt-hero-actions">
            <a className="vt-btn vt-btn-primary" href="tel:+420475000000">
              Zavolat a domluvit svoz
            </a>
            <a className="vt-btn vt-btn-ghost" href="#sluzby">
              Co všechno vozíme
            </a>
          </div>
          <dl className="vt-meta">
            <div>
              <dt>V provozu od</dt>
              <dd>2004</dd>
            </div>
            <div>
              <dt>Vozový park</dt>
              <dd>9 souprav</dd>
            </div>
            <div>
              <dt>Bázová obec</dt>
              <dd>Ústí n. Labem</dd>
            </div>
          </dl>
        </div>
        <figure className="vt-hero-media">
          <img
            src="/hero.webp"
            alt="Nákladní souprava Vitrans připravená k odjezdu z Ústí nad Labem"
            className="vt-hero-img"
          />
          <figcaption className="vt-hero-cap">
            <span className="vt-hero-cap-dot" aria-hidden="true" />
            Linka Ústí n. L. — Praha — Plzeň, odjezd 05:30
          </figcaption>
        </figure>
      </section>

      <section className="vt-services" id="sluzby" aria-labelledby="vt-serv-h">
        <div className="vt-section-head">
          <p className="vt-eyebrow vt-eyebrow-dark">Nákladový list</p>
          <h2 id="vt-serv-h">Vyberte tonáž, zbytek zařídíme</h2>
          <p className="vt-section-intro">
            Podle nákladu a trasy nasadíme správný vůz. Vždy jeden řidič, jedno
            telefonní číslo a jasná cena předem — žádné dispečerské kolečko.
          </p>
        </div>
        <ul className="vt-cards">
          {sluzby.map((s) => (
            <li className="vt-card" key={s.nazev}>
              <span className="vt-card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <ul className="vt-card-list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="vt-about" id="firma" aria-labelledby="vt-about-h">
        <figure className="vt-about-media">
          <img
            src="/section-1.webp"
            alt="Řidič Vitransu při nakládce palet"
            className="vt-about-img"
          />
        </figure>
        <div className="vt-about-copy">
          <p className="vt-eyebrow vt-eyebrow-dark">O firmě</p>
          <h2 id="vt-about-h">
            Dvacet let za volantem
            <br />
            ze stejné garáže
          </h2>
          <p>
            Vitrans začínal s jedním sklápěčem na okraji Ústí nad Labem. Dnes
            máme devět souprav, ale telefon zvedá pořád majitel — a když se
            náklad zpozdí, zavolá vám dřív, než se zeptáte.
          </p>
          <p>
            Známe trasy přes Krušné hory i hraniční přechody do Německa a
            Rakouska. Vozíme pro místní výrobce, stavební firmy i e‑shopy,
            které potřebují spolehlivost, ne sliby.
          </p>

          <div className="vt-quote-wrap">
            <img
              src="/section-2.webp"
              alt="Souprava Vitrans na dálnici D8"
              className="vt-quote-img"
            />
            <blockquote className="vt-quote">
              <p>
                „Objednáme dopoledne, odpoledne je materiál na stavbě. Za tři
                roky ani jednou zpoždění.“
              </p>
              <cite>Petr Málek — stavební firma, Teplice</cite>
            </blockquote>
          </div>

          <ul className="vt-facts">
            <li>
              <strong>ADR</strong>
              <span>řidiči s osvědčením na nebezpečné náklady</span>
            </li>
            <li>
              <strong>CMR</strong>
              <span>pojištění přepravy do 50 000 €</span>
            </li>
            <li>
              <strong>24 h</strong>
              <span>přistavení vozu v regionu Ústí</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
