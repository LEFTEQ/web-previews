import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PHT a.s. — elektroinstalace České Budějovice",
  description:
    "Elektroinstalace pro domy, provozovny i průmysl v Českých Budějovicích a okolí. Revize, hromosvody, rozvaděče, fotovoltaika. Odvedeno podle normy, hotovo v termínu.",
  openGraph: {
    title: "PHT a.s. — elektroinstalace České Budějovice",
    description:
      "Elektroinstalace pro domy, provozovny i průmysl v Českých Budějovicích a okolí. Revize, hromosvody, rozvaděče, fotovoltaika.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Elektroinstalace PHT" }],
  },
};

const okruhy = [
  {
    faze: "L1",
    nazev: "Nová instalace a rekonstrukce",
    popis:
      "Kompletní rozvody od jističe po poslední zásuvku — novostavby, přestavby bytů i výměna hliníkových rozvodů z panelu. Kabeláž tažeme podle projektu, ne od oka.",
    body: ["Silnoproud i slaboproud", "Datové a domovní sítě", "Předání s revizní zprávou"],
  },
  {
    faze: "L2",
    nazev: "Rozvaděče a jištění",
    popis:
      "Sestavíme a zapojíme rozvaděč přesně na míru objektu — přehledně popsané okruhy, přepěťová ochrana, proudové chrániče tam, kde je norma vyžaduje.",
    body: ["Bytové i podružné rozvaděče", "Přepěťová ochrana SPD", "Popis okruhů, který dává smysl"],
  },
  {
    faze: "L3",
    nazev: "Fotovoltaika a hromosvody",
    popis:
      "Střešní FVE s akumulací i ochrana objektu před bleskem. Máme za sebou vlastní elektrárnu — víme, kde bývá problém, ještě než nastane.",
    body: ["FVE s bateriovým úložištěm", "Hromosvody a uzemnění", "Revize a pravidelné kontroly"],
  },
];

const duvera = [
  { cislo: "1998", popis: "na trhu od tohoto roku — v elektru i v distribuci" },
  { cislo: "230 / 400 V", popis: "domácnosti, provozovny i třífázový průmysl" },
  { cislo: "do 24 h", popis: "reakce na poruchu v Českých Budějovicích a okolí" },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="top">
        <a className="wm" href="#" aria-label="PHT a.s. — úvod">
          <span className="wm-p">P</span>
          <span className="wm-h">H</span>
          <span className="wm-t">T</span>
          <span className="wm-tag">elektro</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#okruhy">Co zapojíme</a>
          <a href="#duvera">Proč PHT</a>
          <a className="nav-call" href="tel:+420387316285">387 316 285</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-img">
          <img
            src="/hero.webp"
            alt="Elektrikář PHT při zapojování rozvaděče"
            width={1600}
            height={1100}
          />
          <span className="hero-live" aria-hidden="true">
            <span className="phase p1" /> <span className="phase p2" /> <span className="phase p3" />
          </span>
        </div>
        <div className="hero-txt">
          <p className="eyebrow">České Budějovice · elektroinstalace</p>
          <h1 id="hero-h">
            Pod napětím <span className="hl">rozumíme</span> tomu,
            <br /> co se za zdí neuvidí.
          </h1>
          <p className="lede">
            Taháme rozvody, stavíme rozvaděče a připojujeme fotovoltaiku pro domy,
            provozovny i průmysl. Předáváme s revizní zprávou — ne jen s tím, že to svítí.
          </p>
          <div className="cta-row">
            <a className="btn" href="tel:+420387316285">Zavolat na 387 316 285</a>
            <a className="btn ghost" href="mailto:info@pht.cz">Poslat poptávku</a>
          </div>
        </div>
      </section>

      <section className="okruhy" id="okruhy" aria-labelledby="okruhy-h">
        <div className="sec-head">
          <p className="eyebrow">Tři fáze naší práce</p>
          <h2 id="okruhy-h">Co u vás zapojíme</h2>
          <p className="sec-note">
            Jako tři fáze v přívodu — každá odvádí svůj díl. Objednáte klidně jen jednu,
            nebo všechny naráz při rekonstrukci.
          </p>
        </div>
        <div className="card-grid">
          {okruhy.map((o) => (
            <article className="card" key={o.faze}>
              <span className="card-faze" aria-hidden="true">
                {o.faze}
              </span>
              <h3>{o.nazev}</h3>
              <p className="card-p">{o.popis}</p>
              <ul className="card-list">
                {o.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <figure className="okruhy-fig">
          <img
            src="/section-1.webp"
            alt="Zapojený rozvaděč s přehledně popsanými okruhy"
            width={1400}
            height={900}
          />
          <figcaption>Rozvaděč předáváme popsaný — víte, co který jistič spíná.</figcaption>
        </figure>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="duvera-media">
          <img
            src="/section-2.webp"
            alt="Technik PHT při práci v terénu"
            width={1200}
            height={1400}
          />
        </div>
        <div className="duvera-txt">
          <p className="eyebrow">Kdo to u vás bude dělat</p>
          <h2 id="duvera-h">Firma, která u elektra začala a zůstala.</h2>
          <p>
            PHT a.s. jsme od roku 1998. Vedení pro jižní Čechy máme v Českých Budějovicích,
            v Hany Kvapilové. Nezmizíme po předání — revize, kontroly hromosvodů i servis
            fotovoltaiky bereme jako součást práce, ne jako přílepek.
          </p>
          <p>
            Vlastní FVE s akumulací provozujeme sami. Když vám tedy radíme kolem
            fotovoltaiky, mluvíme ze zkušenosti — ne z katalogu.
          </p>
          <dl className="stats">
            {duvera.map((d) => (
              <div className="stat" key={d.cislo}>
                <dt>{d.cislo}</dt>
                <dd>{d.popis}</dd>
              </div>
            ))}
          </dl>
          <p className="kontakt-line">
            Vedení Č. Budějovice · Hany Kvapilové 423/5 ·{" "}
            <a href="mailto:info@pht.cz">info@pht.cz</a>
          </p>
        </div>
      </section>
    </main>
  );
}
