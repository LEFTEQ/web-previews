import type { CSSProperties } from "react";

type Category = {
  name: string;
  note: string;
  price: string;
};

type Winemaker = {
  name: string;
  place: string;
};

const categories: Category[] = [
  {
    name: "Oranžová vína",
    note: "Bílé hrozny kvašené na slupkách. Tanin jako ze silného čaje, sušené meruňky a pomerančová kůra.",
    price: "od 435 Kč",
  },
  {
    name: "Pét-naty & bubliny",
    note: "Vykvašené přímo v lahvi. Zákal, divokost a bublinky, které si to udělaly samy — bez dosycení.",
    price: "od 395 Kč",
  },
  {
    name: "Červená na chlazení",
    note: "Lehká, šťavnatá, glou-glou. Otevřít, zachladit, dopít během jednoho večera.",
    price: "od 460 Kč",
  },
  {
    name: "Bílá s minimem síry",
    note: "Čistá, živá, trochu nervní. Bez make-upu, a přesto se to pije samo.",
    price: "od 435 Kč",
  },
  {
    name: "Sety vín",
    note: "Výběr na doma i jako dárek. Poskládáme ho podle toho, co máte rádi a k čemu víno chcete.",
    price: "od 990 Kč",
  },
  {
    name: "Utopia: ocet na pití",
    note: "Jablko, maliny, mateřídouška, chilli. Nealko divočina do sklenice i do kuchyně.",
    price: "350 Kč",
  },
];

const winemakers: Winemaker[] = [
  { name: "Petr Koráb", place: "Morava" },
  { name: "Quantum", place: "Rakousko" },
  { name: "Strohmeier", place: "Štýrsko" },
  { name: "Bencze", place: "Maďarsko" },
  { name: "Julie Brosselin", place: "Francie" },
  { name: "L’Archetipo", place: "Itálie" },
  { name: "Punkista", place: "Slovensko" },
  { name: "Utopia", place: "Morava" },
];

export default function Page() {
  return (
    <div className="nw-page">
      <section className="nw-hero" aria-labelledby="nw-hero-title">
        <div className="nw-wrap nw-hero-grid">
          <div className="nw-hero-copy">
            <p className="nw-eyebrow nw-reveal" style={{ "--d": "0s" } as CSSProperties}>
              Vinotéka naturálních vín · Brno
            </p>
            <h1 id="nw-hero-title" className="nw-hero-title">
              <span className="nw-line nw-reveal" style={{ "--d": "0.08s" } as CSSProperties}>
                Víno, které
              </span>
              <span className="nw-line nw-reveal" style={{ "--d": "0.18s" } as CSSProperties}>
                ještě{" "}
                <span className="nw-mark">
                  žije
                  <svg
                    className="nw-mark-ring"
                    viewBox="0 0 220 108"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <ellipse cx="110" cy="54" rx="102" ry="44" />
                  </svg>
                </span>
                .
              </span>
            </h1>
            <p className="nw-lead nw-reveal" style={{ "--d": "0.3s" } as CSSProperties}>
              Nefiltrované, s minimem zásahů, od vinařů, kterým věříme. Zakalené,
              divoké a upřímné — a připravené na váš stůl.
            </p>
            <div className="nw-cta-row nw-reveal" style={{ "--d": "0.42s" } as CSSProperties}>
              <a className="nw-btn" href="#regaly">
                Prohlédnout regály
              </a>
              <a className="nw-btn nw-btn-ghost" href="#o-nas">
                Poradíme s výběrem
              </a>
            </div>
          </div>

          <figure className="nw-hero-figure nw-reveal" style={{ "--d": "0.24s" } as CSSProperties}>
            <img
              src="/hero.webp"
              alt="Zakalené oranžové víno ve sklenici držené proti světlu"
              className="nw-hero-img"
              width={880}
              height={1080}
            />
            <figcaption className="nw-figcap">
              <span className="nw-dot" aria-hidden="true" /> Zákal, který se nemá za co stydět
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="nw-section nw-section-light" id="regaly" aria-labelledby="nw-regaly-title">
        <div className="nw-wrap">
          <div className="nw-section-head">
            <p className="nw-eyebrow nw-eyebrow-dark">V regálech</p>
            <h2 id="nw-regaly-title" className="nw-section-title">
              Co u nás teče do sklenice
            </h2>
            <p className="nw-section-intro">
              Šest polic, jedno pravidlo: nic, co bychom sami nepili. Od kalných
              oranžů přes syrové pét-naty až po ocet, který si zamilujete.
            </p>
          </div>

          <div className="nw-figrow">
            <img
              src="/section-1.webp"
              alt="Lahve naturálních vín v regálu brněnské vinotéky"
              className="nw-band-img"
              width={1400}
              height={720}
            />
          </div>

          <ul className="nw-cats">
            {categories.map((cat) => (
              <li key={cat.name} className="nw-cat">
                <h3 className="nw-cat-name">{cat.name}</h3>
                <p className="nw-cat-note">{cat.note}</p>
                <p className="nw-cat-foot">
                  <span className="nw-stock">
                    <span className="nw-dot" aria-hidden="true" /> Skladem
                  </span>
                  <span className="nw-price">{cat.price}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="nw-section nw-section-dark" id="o-nas" aria-labelledby="nw-onas-title">
        <div className="nw-wrap nw-onas-grid">
          <div className="nw-onas-copy">
            <p className="nw-eyebrow">Jak vybíráme</p>
            <h2 id="nw-onas-title" className="nw-section-title">
              Vybíráme podle jednoho pravidla: musí to žít
            </h2>
            <p className="nw-onas-text">
              V regálu nemáme nic, co bychom sami nepili. Vozíme vína od vinařů,
              kteří pracují s minimem zásahů — bez přisládání, bez korekcí, často
              úplně bez přidané síry. Poznáte je podle zákalu a podle toho, že
              každá lahev chutná jinak.
            </p>
            <p className="nw-onas-text">
              Zastavte se v prodejně v Brně. Řekněte nám, co máte rádi a k čemu
              víno sháníte — a my vám do tašky složíme něco, co vás překvapí.
              Poradíme rádi a bez povyšování.
            </p>

            <p className="nw-chips-label">Vinaři, které teď máme na pultě</p>
            <ul className="nw-chips">
              {winemakers.map((w) => (
                <li key={w.name} className="nw-chip">
                  <span className="nw-chip-name">{w.name}</span>
                  <span className="nw-chip-place">{w.place}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="nw-onas-figure">
            <img
              src="/section-2.webp"
              alt="Detail ručně popsané etikety naturálního vína"
              className="nw-onas-img"
              width={900}
              height={1100}
            />
          </figure>
        </div>
      </section>
    </div>
  );
}
