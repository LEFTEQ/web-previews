import { AiImage } from "./_ui";

function ChamberDivider() {
  return (
    <div className="divider" aria-hidden="true">
      <div className="divider-line">
        <svg className="chamber-svg" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <line x1="0" y1="7" x2="1200" y2="7" />
          <line x1="0" y1="33" x2="1200" y2="33" />
          <line className="gasket" x1="0" y1="20" x2="1200" y2="20" />
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={i} x1={100 + i * 100} y1="7" x2={100 + i * 100} y2="33" />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={"d" + i} x1={100 + i * 200} y1="33" x2={200 + i * 200} y2="7" />
          ))}
        </svg>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <svg className="chip" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" />
      <line x1="12" y1="2.5" x2="12" y2="21.5" />
      <line x1="2.5" y1="12" x2="21.5" y2="12" />
      <rect x="5.5" y="5.5" width="4" height="4" />
    </svg>
  );
}

const produkty = [
  "Plastová okna",
  "Dřevěná a hliníková okna",
  "Vchodové a balkonové dveře",
  "Garážová vrata",
  "Rolovací mříže",
  "Zimní zahrady",
  "Stínící technika",
  "Automatické dveře",
  "Servis a seřízení oken",
];

const pilire = [
  {
    t: "Flexibilita",
    d: "Přizpůsobíme se požadavkům, které na zakázku máte — atypické rozměry, barvy fólií i termín montáže.",
  },
  {
    t: "Rychlost",
    d: "Cenovou nabídku i realizaci řešíme v co nejkratším termínu, ať topíte do ulice co nejméně dní.",
  },
  {
    t: "Kvalita",
    d: "Vícekomorové profily, poctivé kování a odborně odvedená montáž. Na to si u nás potrpíme.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <section className="band band--hero">
        <div className="container">
          <header className="brandbar">
            <span className="wordmark">
              BAU<span className="wordmark-win">WIN</span>
            </span>
            <span className="wordmark-sub">okna · dveře · Ostrov nad Ohří</span>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <Chip /> O nás
              </p>
              <h1 className="hero-title">
                <span className="sash" aria-hidden="true" />
                <span className="hero-title-txt">
                  Dodáváme a montujeme plastová, dřevěná a hliníková okna a dveře.
                </span>
              </h1>
              <p className="hero-lede">
                Od zaměření po úklid montážní pěny. Firma z Ostrova nad Ohří,
                která okna nejen prodá, ale i osadí, seřídí a přijede, když je
                po letech potřeba dotáhnout kování.
              </p>
              <div className="hero-cta">
                <a className="btn btn--primary" href="tel:+420777111222">
                  Chci nabídku
                </a>
                <a className="btn btn--ghost" href="#nabidka">
                  Naše produkty
                </a>
              </div>
            </div>

            <figure className="hero-figure glazed">
              <AiImage
                className="pane pane--hero"
                src="/hero.webp"
                alt="Nová plastová okna a balkonové dveře osazená v novostavbě"
              />
            </figure>
          </div>
        </div>
      </section>

      <ChamberDivider />

      <section className="band band--light" id="nabidka">
        <div className="container">
          <p className="eyebrow eyebrow--dark">
            <Chip /> Nabídka
          </p>
          <h2 className="section-title">Okna, dveře a všechno kolem otvoru</h2>
          <p className="section-lede">
            Provedeme vás celou zakázkou — od nezávazné cenové nabídky přes
            zaměření a výrobu až po montáž a odvoz starých rámů. Jeden dodavatel
            na kompletní výplně vašeho domu.
          </p>

          <ul className="products">
            {produkty.map((p) => (
              <li key={p} className="product">
                <Chip />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <figure className="figure glazed">
            <AiImage
              className="pane"
              src="/section-1.webp"
              alt="Detail vícekomorového profilu plastového okna s kováním"
            />
            <figcaption className="caption">
              Řez profilem — víc komor drží teplo uvnitř a hluk z Hlavní třídy
              venku.
            </figcaption>
          </figure>
        </div>
      </section>

      <ChamberDivider />

      <section className="band band--steel">
        <div className="container">
          <p className="eyebrow">
            <Chip /> Jak pracujeme
          </p>
          <h2 className="section-title">
            Zakládáme si na flexibilitě, rychlosti a kvalitě
          </h2>

          <div className="pillars">
            {pilire.map((p) => (
              <div key={p.t} className="pillar">
                <span className="pillar-bullet">
                  <Chip />
                </span>
                <h3 className="pillar-title">{p.t}</h3>
                <p className="pillar-text">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="about">
            <figure className="figure glazed">
              <AiImage
                className="pane"
                src="/section-2.webp"
                alt="Montér BAUWIN seřizuje kování nově osazeného okna"
              />
            </figure>

            <div className="about-copy">
              <h3 className="about-title">Místní firma z Ostrova nad Ohří</h3>
              <p className="about-text">
                Najdete nás na Hlavní třídě kousek od Ohře. Přijedeme zaměřit,
                poradíme s profily i barvou fólie a domluvíme termín, který
                vám sedne. Montujeme v Ostrově i v okolních obcích.
              </p>
              <dl className="facts">
                <div className="fact">
                  <dt>Adresa</dt>
                  <dd>Hlavní tř. 716, 363 01 Ostrov-Ostrov nad Ohří</dd>
                </div>
                <div className="fact">
                  <dt>Telefon</dt>
                  <dd>
                    <a href="tel:+420777111222">+420 777 111 222</a>
                  </dd>
                </div>
                <div className="fact">
                  <dt>E-mail</dt>
                  <dd>
                    <a href="mailto:info@example.cz">info@example.cz</a>
                  </dd>
                </div>
                <div className="fact">
                  <dt>Provozní doba</dt>
                  <dd>Pondělí–pátek, 8:00–17:00</dd>
                </div>
              </dl>
              <a className="btn btn--primary" href="tel:+420777111222">
                Chci nabídku
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
