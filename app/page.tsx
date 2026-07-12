import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AULIT reality — správa nemovitostí a účetnictví, Ostrava",
  description:
    "Správa bytových domů a SVJ v Ostravě: evidence plateb, vyúčtování služeb, revize, účetnictví a daňová evidence. Jeden dům, jeden správce, jasné přehledy.",
  openGraph: {
    title: "AULIT reality — správa nemovitostí, Ostrava",
    description:
      "Evidence, předpisy plateb, vyúčtování, revize a účetnictví pro SVJ a bytová družstva v Ostravě.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Bytový dům ve správě AULIT reality" }],
  },
};

const sluzby = [
  {
    kod: "A",
    nazev: "Správa domu",
    popis:
      "Evidence domů, bytů a osob, předpisy a evidence plateb, revize a jejich hlídání, vyúčtování služeb nájemníkům, smlouvy s dodavateli a vymáhání dluhů.",
    body: ["Evidence plateb a předpisy", "Vyúčtování služeb", "Hlídání revizí", "Smlouvy s dodavateli"],
  },
  {
    kod: "B",
    nazev: "Účetnictví",
    popis:
      "Vedení účetnictví a daňové evidence pro SVJ, bytová družstva, fyzické i právnické osoby — od OSVČ po akciové společnosti. Včetně daňového přiznání a zpracování mezd.",
    body: ["Účetnictví pro SVJ", "Daňová evidence", "Daňové přiznání", "Zpracování mezd"],
  },
  {
    kod: "C",
    nazev: "Technika a servis",
    popis:
      "Renovace, opravy a zlepšování společných prostor. Zprostředkování prodeje i pronájmu bytových a nebytových jednotek a poradenství při rozhodování domu.",
    body: ["Opravy a renovace", "Prodej a pronájem", "Poradenství", "Havarijní servis 24/7"],
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wm" href="#" aria-label="AULIT reality — domů">
          <span className="wm-a">AU</span>
          <span className="wm-b">LIT</span>
          <span className="wm-tag">reality · Ostrava</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a className="top-cta" href="tel:+420723905244">723 905 244</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-copy">
          <p className="eyebrow">Správa nemovitostí · Ostrava-Poruba</p>
          <h1 id="hero-h">
            Váš dům <span className="hl">na jednom řádku</span>
            <br />
            přehledu, ne v šuplíku.
          </h1>
          <p className="lede">
            Spravujeme bytové domy a SVJ v Ostravě: platby, vyúčtování,
            revize i účetnictví. Předseda ví, kde stojí dům — kdykoliv,
            na pár kliknutí.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="tel:+420723905244">Zavolat správci</a>
            <a className="btn-ghost" href="#sluzby">Co pro dům děláme</a>
          </div>
          <dl className="ledger" aria-label="Výpis stavu domu">
            <div>
              <dt>Předpisy plateb</dt>
              <dd className="ok">v pořádku</dd>
            </div>
            <div>
              <dt>Vyúčtování služeb</dt>
              <dd className="ok">odesláno</dd>
            </div>
            <div>
              <dt>Revize komínů</dt>
              <dd className="warn">za 12 dní</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-media">
          <img
            src="/hero.webp"
            alt="Bytový dům v Ostravě spravovaný firmou AULIT reality"
            width={900}
            height={1100}
            loading="eager"
          />
          <figcaption>Provozovna Poruba · Spojů 835/2A</figcaption>
        </figure>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow">Rejstřík služeb</p>
          <h2 id="sluzby-h">Tři složky, které dům potřebuje mít pořádku.</h2>
          <p className="sec-lede">
            Ne seznam bez konce — tři pořadače, do kterých se vejde všechno
            od evidence plateb po havarijní servis.
          </p>
        </div>

        <div className="cards">
          {sluzby.map((s) => (
            <article className="card" key={s.kod}>
              <span className="tab" aria-hidden="true">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p className="card-lede">{s.popis}</p>
              <ul className="filed">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="strip">
          <img
            src="/section-1.webp"
            alt="Doklady, revizní zprávy a účetnictví bytového domu"
            width={1200}
            height={520}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="duvera-media">
          <img
            src="/section-2.webp"
            alt="Kancelář správy nemovitostí AULIT reality v Ostravě-Porubě"
            width={900}
            height={900}
            loading="lazy"
          />
        </div>
        <div className="duvera-copy">
          <p className="eyebrow">Proč nám dům svěřit</p>
          <h2 id="duvera-h">Předseda spí líp, když ví, kde všechno leží.</h2>
          <blockquote className="quote">
            „Firma se službami, které nabízí, je v dnešní době zázrakem.
            Peníze vložené do správy se domu mnohonásobně vrátí. Jako
            předseda společenství bych rozhodně neměnil.“
            <cite>— předseda SVJ, klient AULIT reality</cite>
          </blockquote>

          <dl className="facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Spojů 835/2A, Ostrava-Poruba, 708 00</dd>
            </div>
            <div>
              <dt>Úřední hodiny</dt>
              <dd>Po 7–17, Út–Čt 7–15, Pá po domluvě</dd>
            </div>
            <div>
              <dt>Havárie — voda, topení, elektro</dt>
              <dd><a href="tel:+420602718503">602 718 503</a> · NON-STOP</dd>
            </div>
            <div>
              <dt>Napište nám</dt>
              <dd><a href="mailto:info@aulit-reality.cz">info@aulit-reality.cz</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
