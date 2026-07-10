import type { CSSProperties } from "react";

const destinace = [
  {
    kod: "JP",
    misto: "Japonsko",
    detail: "Kjóto",
    text: "Ryokan s vlastním onsenem, soukromá čajová obřadnice a rezervace u Jira ještě dřív, než sedne na letadlo.",
    dny: "12 dní na míru",
    obrazek: "/section-1.webp",
    alt: "Chrám mezi javory v Kjótu za soumraku",
  },
  {
    kod: "IS",
    misto: "Island",
    detail: "Vestfirðir",
    text: "Řidič-fotograf, který ví, kde přesně o půlnoci stojí za polárkou. Chata bez signálu a s výhledem na fjord.",
    dny: "9 dní se soukromým řidičem",
    obrazek: "/section-2.webp",
    alt: "Islandský fjord s vodopádem a mechem",
  },
];

const kroky = [
  {
    c: "01",
    nazev: "Sedneme si na kávu",
    text: "V kanceláři na Vinohradech nebo přes videohovor. Ptáme se na to, co vás na cestování baví — a co ne. Bez katalogů.",
  },
  {
    c: "02",
    nazev: "Sestavíme itinerář",
    text: "Do tří dnů dostanete návrh den po dni: lety, hotely, průvodce, rezervace. Vše měníme, dokud nesedí.",
  },
  {
    c: "03",
    nazev: "Jste na cestě, my na příjmu",
    text: "Zpožděný spoj v pět ráno? Voláte jedno české číslo a řešíme to za vás. Dvacet čtyři hodin, po celou cestu.",
  },
];

export default function Page() {
  return (
    <main className="st-main">
      <header className="st-nav">
        <a href="#uvod" className="st-logo" aria-label="Signature Travel — úvod">
          <span className="st-logo-mark">S<span className="st-logo-dot">.</span></span>
          <span className="st-logo-word">
            <span className="st-logo-word-top">Signature</span>
            <span className="st-logo-word-bot">Travel — Praha</span>
          </span>
        </a>
        <nav className="st-nav-links" aria-label="Hlavní navigace">
          <a href="#destinace">Destinace</a>
          <a href="#jak">Jak to funguje</a>
          <a href="#duvera">O nás</a>
        </nav>
      </header>

      <section className="st-hero" id="uvod">
        <img
          className="st-hero-img"
          src="/hero.webp"
          alt="Ručně sestavený cestovní itinerář rozložený na stole"
          width={1600}
          height={1000}
        />
        <div className="st-hero-shade" aria-hidden="true" />
        <div className="st-hero-inner">
          <p className="st-eyebrow">Cestovní kancelář na míru · Praha</p>
          <h1 className="st-hero-title">
            Žádný katalog.
            <span className="st-hero-title-em">Jen vaše cesta,</span>
            napsaná řádek po řádku.
          </h1>
          <p className="st-hero-lead">
            Sestavujeme itineráře, které nikde nekoupíte — od ryokanu v Kjótu
            po chatu na islandském fjordu. Vy řeknete, co vás láká. Zbytek,
            včetně nočních telefonátů s hotely, je na nás.
          </p>
          <div className="st-hero-actions">
            <a href="#jak" className="st-btn">Chci svůj itinerář</a>
            <a href="#destinace" className="st-btn-ghost">Ukázky cest</a>
          </div>
          <dl className="st-hero-facts">
            <div>
              <dt>Podklad ke každé cestě</dt>
              <dd>Denní itinerář, ne PDF katalog</dd>
            </div>
            <div>
              <dt>Na příjmu, když cestujete</dt>
              <dd>Jedno české číslo, 24 hodin</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="st-dest" id="destinace">
        <div className="st-section-head">
          <p className="st-eyebrow st-eyebrow-dark">Dvě cesty z poslední sezóny</p>
          <h2 className="st-section-title">Postavené kolem jednoho člověka.</h2>
          <p className="st-section-sub">
            Žádnou z nich najdete v katalogu — vznikly z jedné otázky:
            co má tahle cesta klientovi dát?
          </p>
        </div>
        <div className="st-dest-grid">
          {destinace.map((d) => (
            <article className="st-card" key={d.kod}>
              <div className="st-card-media">
                <img
                  src={d.obrazek}
                  alt={d.alt}
                  loading="lazy"
                  width={800}
                  height={560}
                />
                <span className="st-card-kod" aria-hidden="true">{d.kod}</span>
              </div>
              <div className="st-card-body">
                <div className="st-card-line">
                  <h3>{d.misto}</h3>
                  <span className="st-card-detail">{d.detail}</span>
                </div>
                <p>{d.text}</p>
                <p className="st-card-dny">{d.dny}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="st-jak" id="jak">
        <div className="st-jak-head">
          <p className="st-eyebrow st-eyebrow-light">Jak to u nás chodí</p>
          <h2 className="st-section-title st-section-title-light">
            Tři kroky. Zbytek řešíme za vás.
          </h2>
        </div>
        <ol className="st-steps">
          {kroky.map((k) => (
            <li className="st-step" key={k.c}>
              <span className="st-step-num" aria-hidden="true">{k.c}</span>
              <div>
                <h3>{k.nazev}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="st-duvera" id="duvera">
        <div className="st-duvera-grid">
          <div className="st-duvera-text">
            <p className="st-eyebrow st-eyebrow-dark">Kdo vám cestu sestaví</p>
            <h2 className="st-section-title">
              Malá kancelář na Vinohradech, ne linka do call centra.
            </h2>
            <p>
              Signature Travel vede tříčlenný tým, který si dělené destinace
              projezdil sám. Nedáme vám do ruky nic, co jsme si sami neověřili —
              proto nabízíme jen tolik zemí, kolik opravdu známe.
            </p>
            <p>
              Když v Tokiu zmešká vlak, nevoláte robota. Voláte Kláru, která
              zná vaše jméno i to, že snídáte pozdě.
            </p>
            <div className="st-kontakt">
              <a className="st-kontakt-tel" href="tel:+420737938255">+420 737 938 255</a>
              <a className="st-kontakt-mail" href="mailto:kontakt@signaturetravel.cz">kontakt@signaturetravel.cz</a>
            </div>
          </div>
          <ul className="st-cisla" style={{ "--stagger": 0 } as CSSProperties}>
            <li>
              <strong>7 zemí</strong>
              <span>děláme naplno — víc nechceme, abychom je znali do detailu</span>
            </li>
            <li>
              <strong>3 dny</strong>
              <span>od kávy k prvnímu návrhu itineráře</span>
            </li>
            <li>
              <strong>24 h</strong>
              <span>denně na příjmu, dokud jste na cestě</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
