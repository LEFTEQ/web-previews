import type { CSSProperties } from "react";

export default function Page() {
  const collections = [
    {
      no: "01",
      title: "Zásnubní prsteny",
      metal: "Bílé & žluté zlato 585/1000",
      body: "Solitéry s certifikovanými brilianty. Kámen i osazení vybereme společně u pultu — a prsten upravíme přesně na velikost jejího prstu.",
      cta: "Vybrat prsten",
    },
    {
      no: "02",
      title: "Snubní prsteny na míru",
      metal: "Zlato 14k · palladium · platina",
      body: "Pár prstenů zhotovíme v naší liberecké dílně. Vyberete profil, šířku, povrch i vnitřní gravírování s datem svatby.",
      cta: "Domluvit návrh",
    },
    {
      no: "03",
      title: "Oprava & čištění šperků",
      metal: "Zlatnická dílna přímo na místě",
      body: "Zvětšení prstenu, nová zapínání, ultrazvukové čištění, výměna baterií v hodinkách. Většinu drobných oprav vyřídíme do pár dní.",
      cta: "Přinést šperk",
    },
  ];

  return (
    <main className="gs">
      <header className="gs-nav" aria-label="Hlavní">
        <a className="gs-mark" href="#" aria-label="Gold Style Liberec, domů">
          <span className="gs-mark-g">G</span>
          <span className="gs-mark-word">GOLD&nbsp;STYLE</span>
          <span className="gs-mark-loc">Liberec</span>
        </a>
        <nav className="gs-nav-links">
          <a href="#kolekce">Kolekce</a>
          <a href="#dilna">Dílna</a>
          <a className="gs-nav-cta" href="#navsteva">Rezervovat návštěvu</a>
        </nav>
      </header>

      <section className="gs-hero" aria-labelledby="hero-title">
        <div className="gs-hero-media">
          <img
            src="/hero.webp"
            alt="Detail zlatého prstenu s briliantem v liberecké klenotnické dílně"
            className="gs-hero-img"
          />
          <span className="gs-hero-hall" aria-hidden="true">585 · Au</span>
        </div>
        <div className="gs-hero-copy">
          <p className="gs-eyebrow">Klenotnictví &amp; zlatnická dílna · Liberec</p>
          <h1 id="hero-title">
            Ryzost, kterou<br />
            <em>poznáte na omak.</em>
          </h1>
          <p className="gs-lede">
            Snubní a zásnubní prsteny, briliantové šperky a opravy zlata — vše z jedné
            dílny v centru Liberce. Kámen si prohlédnete pod lupou dřív, než se rozhodnete.
          </p>
          <div className="gs-hero-actions">
            <a className="gs-btn" href="#navsteva">Rezervovat návštěvu</a>
            <a className="gs-btn gs-btn-ghost" href="#kolekce">Prohlédnout kolekce</a>
          </div>
          <dl className="gs-assay">
            <div>
              <dt>Ryzost</dt>
              <dd>585 / 750</dd>
            </div>
            <div>
              <dt>Brilianty</dt>
              <dd>s certifikátem</dd>
            </div>
            <div>
              <dt>Dílna</dt>
              <dd>přímo v Liberci</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="gs-collections" id="kolekce" aria-labelledby="kolekce-title">
        <div className="gs-section-head">
          <p className="gs-eyebrow">Co pro vás vyrobíme</p>
          <h2 id="kolekce-title">Tři věci, kvůli kterým chodí lidé k nám</h2>
        </div>
        <ol className="gs-cards">
          {collections.map((c) => (
            <li className="gs-card" key={c.no}>
              <span className="gs-card-no" aria-hidden="true">{c.no}</span>
              <h3>{c.title}</h3>
              <p className="gs-card-metal">{c.metal}</p>
              <p className="gs-card-body">{c.body}</p>
              <a className="gs-card-link" href="#navsteva">{c.cta}
                <span aria-hidden="true"> →</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="gs-trust" id="dilna" aria-labelledby="dilna-title">
        <div className="gs-trust-media">
          <img
            src="/section-1.webp"
            alt="Zlatník při ruční práci na prstenu u pracovního stolu"
            className="gs-trust-img"
          />
        </div>
        <div className="gs-trust-copy">
          <p className="gs-eyebrow">O dílně</p>
          <h2 id="dilna-title">Šperk vzniká tady, ne někde za oceánem</h2>
          <p>
            Gold Style vede rodina libereckých zlatníků. U jednoho stolu navrhujeme, u
            druhého pilujeme, brousíme a zasazujeme kameny. Když si přijdete pro snubní
            prsteny, vidíte přímo materiál, ze kterého budou — a máte jistotu ryzosti
            stvrzenou puncem.
          </p>
          <ul className="gs-checklist">
            <li>Certifikované zlato 585 a 750, punc na každém kusu</li>
            <li>Rytí a úpravu velikosti řešíme na počkání</li>
            <li>Výkup zlata a poradenství při dědictví bez tlaku</li>
          </ul>
          <div className="gs-visit" id="navsteva">
            <img
              src="/section-2.webp"
              alt="Vitrína s vystavenými zlatými šperky v klenotnictví"
              className="gs-visit-img"
            />
            <div className="gs-visit-copy">
              <p className="gs-eyebrow">Kde nás najdete</p>
              <p className="gs-visit-lead">
                Zastavte se v centru Liberce. Prsten nebo kámen si v klidu prohlédnete
                pod lupou a vše probereme u pultu — bez objednání i s rezervací.
              </p>
              <a className="gs-btn" href="#navsteva">Rezervovat návštěvu</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
