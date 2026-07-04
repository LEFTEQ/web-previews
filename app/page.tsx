import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonsai centrum Hradec Králové — stromky, misky a péče o bonsaje",
  description:
    "Bonsai centrum s.r.o. v Hradci Králové: vypěstované bonsaje, japonské misky a substráty, tvarování, přesazování i zimní hlídání. Přijďte si vybrat strom, který vydrží generace.",
  openGraph: {
    title: "Bonsai centrum Hradec Králové",
    description:
      "Vypěstované bonsaje, misky, substráty a péče. Zastavte se na zahradě u Hradce Králové.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

const pece = [
  {
    krok: "jaro",
    nazev: "Přesazování a kořeny",
    text: "Vyndáme strom z misky, prohlédneme kořenový bal, prostříháme kořeny a vrátíme ho do čerstvého akadama substrátu. Ukážeme vám, kdy je čas — a kdy naopak počkat.",
  },
  {
    krok: "léto",
    nazev: "Tvarování a drátování",
    text: "Vedeme větve měděným a hliníkovým drátem do klidné, přirozené koruny. Naučíme vás prostřihávat tak, aby strom houstl tam, kde chcete.",
  },
  {
    krok: "podzim",
    nazev: "Hnojení a příprava",
    text: "Doplníme živiny před zimou, zkontrolujeme zdraví listů a jehličí a nachystáme strom na období klidu. Poradíme se zálivkou přes suché dny.",
  },
  {
    krok: "zima",
    nazev: "Zazimování a hlídání",
    text: "Choulostivé druhy přezimujeme u nás ve skleníku. O váš strom se postaráme, když jste na horách nebo na dovolené — vrátíte se k němu v pořádku.",
  },
];

const sortiment = [
  { druh: "Javory", detail: "Acer palmatum a buergerianum, 8–25 let, listnaté klenoty pro barvu" },
  { druh: "Borovice", detail: "Pinus mugo a parviflora, jehličnany do plného slunce" },
  { druh: "Jalovce", detail: "Juniperus, ideální pro první tvarování i suchý dřevo (jin)" },
  { druh: "Misky", detail: "Pálené japonské i české tokoname misky, glazované i režné" },
];

export default function Page() {
  return (
    <main className="bc">
      <header className="bc-nav">
        <a className="bc-mark" href="#" aria-label="Bonsai centrum, domů">
          <span className="bc-mark-en">盆栽</span>
          <span className="bc-mark-cz">
            Bonsai <em>centrum</em>
            <small>Hradec Králové</small>
          </span>
        </a>
        <nav className="bc-links" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#pece">Péče o strom</a>
          <a className="bc-call" href="tel:+420495000000">Zavolat 495 000 000</a>
        </nav>
      </header>

      <section className="bc-hero" id="top">
        <div className="bc-hero-media">
          <img
            src="/hero.webp"
            alt="Vzrostlý tvarovaný bonsai v ploché japonské misce na zahradě Bonsai centra v Hradci Králové"
            width={1600}
            height={1100}
          />
        </div>
        <div className="bc-hero-copy">
          <p className="bc-eyebrow">Zahrada bonsají · Hradec Králové</p>
          <h1>
            Strom, který přežije<br />
            <span className="bc-hl">svého majitele.</span>
          </h1>
          <p className="bc-lede">
            Pěstujeme, tvarujeme a přesazujeme bonsaje už přes dvacet let.
            Přijďte si vybrat javor, borovici nebo jalovec — a odejděte se
            stromem, o který se dokážete postarat.
          </p>
          <div className="bc-actions">
            <a className="bc-btn" href="#sortiment">Prohlédnout sortiment</a>
            <a className="bc-btn ghost" href="mailto:info@bonsaicentrum-hk.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="bc-facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–So, po telefonu i v neděli</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Zahrada za Hradcem Králové</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bc-section" id="sortiment">
        <div className="bc-shead">
          <p className="bc-eyebrow">Co u nás roste</p>
          <h2>Vybraný, ne naskladněný</h2>
          <p className="bc-sintro">
            Každý strom známe jménem i historií. Nekupujeme palety zboží —
            přivážíme kusy, které si troufneme sami dál pěstovat. Do misky
            k němu dostanete i tu správnou.
          </p>
        </div>

        <div className="bc-split">
          <ul className="bc-list">
            {sortiment.map((s) => (
              <li key={s.druh}>
                <span className="bc-druh">{s.druh}</span>
                <span className="bc-druh-d">{s.detail}</span>
              </li>
            ))}
          </ul>
          <figure className="bc-fig">
            <img
              src="/section-1.webp"
              alt="Řada bonsají a japonských misek na dřevěných stolech v prodejní části zahradnictví"
              width={1200}
              height={900}
            />
            <figcaption>
              Ke každému stromu vám poradíme misku, substrát i sezonní řez.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bc-section alt" id="pece">
        <div className="bc-shead">
          <p className="bc-eyebrow">Rok se stromem</p>
          <h2>Bonsai se nepěstuje ve spěchu</h2>
          <p className="bc-sintro">
            Bonsai je práce na roky. Provedeme vás celým rokem — a když si
            nebudete jistí, přineste strom k nám. Rádi ho zazimujeme i pohlídáme.
          </p>
        </div>

        <div className="bc-year">
          <figure className="bc-fig wide">
            <img
              src="/section-2.webp"
              alt="Ruce zahradníka tvarují drátem větev mladého bonsaje při přesazování"
              width={1400}
              height={900}
            />
          </figure>
          <ol className="bc-steps">
            {pece.map((p) => (
              <li key={p.krok}>
                <span className="bc-season">{p.krok}</span>
                <div>
                  <h3>{p.nazev}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
