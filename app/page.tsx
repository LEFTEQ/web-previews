import React from "react";

const kategorie = [
  {
    znacka: "Merino & vlna",
    popis: "Hřejivá klasika na svetry, čepice i ponožky. Pere se ve studené a drží tvar.",
    material: "55–100 % vlna",
    priklad: "Super Merino, Harmony",
  },
  {
    znacka: "Bavlna",
    popis: "Dýchá, nekouše a hodí se na letní topy, hračky i chňapky. Barvy vydrží spoustu praní.",
    material: "55–100 % bavlna",
    priklad: "Flowers, Ribbon Lurex",
  },
  {
    znacka: "Akryl",
    popis: "Nenáročná, lehká a levná. Ideální na první projekt i na velké deky, které chcete stihnout.",
    material: "100 % akryl",
    priklad: "Elite, Allegro",
  },
  {
    znacka: "Macramé & šňůry",
    popis: "Silné šňůry na závěsy, tašky a nástěnné dekorace. Uzly drží, konce se krásně třepí.",
    material: "bavlna / viskóza",
    priklad: "Macrame Braided XL",
  },
  {
    znacka: "Polyamid & směsi",
    popis: "Pevnost do pat ponožek a fantazijní příze s efektem. Odolné tam, kde to nejvíc dře.",
    material: "vlna + polyamid",
    priklad: "Forza Solid, Allegro",
  },
  {
    znacka: "Speciály",
    popis: "Alpaka, len, rafie i paillettky. Když má být z výrobku vidět, že jste si dali záležet.",
    material: "alpaka / len / rafie",
    priklad: "Stylish Alpaca, Papiro",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Pleteme si — galanterie a příze Ostrava">
          <span className="wordmark-loop" aria-hidden="true">◠</span>
          <span className="wordmark-text">pleteme<span className="wordmark-si">si</span></span>
        </a>
        <p className="topbar-note">Galanterie &amp; příze · Ostrava</p>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Kamenný obchod i e-shop · Ostrava</p>
          <h1 id="hero-title">
            Klubko po klubku<br />
            <span className="hero-accent">upletete cokoliv.</span>
          </h1>
          <p className="hero-lead">
            Merino, bavlna, akryl i macramé šňůry od YarnArt — skladem a připravené
            k namotání. Vybíráme příze, které dobře leží v ruce a nezklamou v půlce projektu.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#nabidka">Vybrat přízi</a>
            <a className="btn btn-ghost" href="#duvera">Jak nakupujeme</a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>skladem</dt>
              <dd>4&nbsp;260 přízí</dd>
            </div>
            <div>
              <dt>doprava zdarma</dt>
              <dd>od 1&nbsp;999 Kč</dd>
            </div>
            <div>
              <dt>odesíláme z</dt>
              <dd>Ostravy</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-figure">
          <img src="/hero.webp" alt="Naskládaná klubka příze v teplých i chladných odstínech, připravená k pletení" />
          <figcaption>Nová várka merina — právě naskladněno</figcaption>
        </figure>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-title">
        <div className="section-head">
          <p className="eyebrow">Podle materiálu</p>
          <h2 id="nabidka-title">Vyberte si vlákno, zbytek je na vás</h2>
          <p className="section-lead">
            Rozdělili jsme sklad tak, jak nad projektem přemýšlíte — podle toho, co má
            výsledek umět. U každé skupiny najdete, na co se hodí a čím začít.
          </p>
        </div>

        <ul className="cards">
          {kategorie.map((k) => (
            <li className="card" key={k.znacka}>
              <div className="card-swatch" aria-hidden="true" />
              <h3>{k.znacka}</h3>
              <p className="card-desc">{k.popis}</p>
              <dl className="card-meta">
                <div>
                  <dt>Materiál</dt>
                  <dd>{k.material}</dd>
                </div>
                <div>
                  <dt>Oblíbené</dt>
                  <dd>{k.priklad}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>

        <figure className="nabidka-figure">
          <img src="/section-1.webp" alt="Detail rozpletené příze s háčkem a rozpracovaným pleteným dílem" />
          <figcaption>
            <span>Tip do začátku</span>
            Nevíte, kolik klubek koupit? Napište nám rozměr a přízi — spočítáme návin za vás.
          </figcaption>
        </figure>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-title">
        <figure className="duvera-figure">
          <img src="/section-2.webp" alt="Ruce namotávající klubko příze u pracovního stolu galanterie" />
        </figure>
        <div className="duvera-copy">
          <p className="eyebrow">Proč u nás</p>
          <h2 id="duvera-title">Malá galanterie, která přízi opravdu zná</h2>
          <p className="duvera-lead">
            Vedeme e-shop i výdejnu v Ostravě. Přízi si osaháme dřív, než ji nabídneme —
            proto vám u každého klubka umíme poradit s háčkem, návinem i praním.
          </p>
          <ul className="promises">
            <li>
              <span className="promise-mark">Skladem</span>
              <p>Přes 4&nbsp;000 přízí na regále. Co objednáte dnes, motáme a balíme obratem.</p>
            </li>
            <li>
              <span className="promise-mark">Ověřeno</span>
              <p>Ověřený specialista na příze YarnArt s garancí spokojenosti — barvu vyměníme.</p>
            </li>
            <li>
              <span className="promise-mark">Poradíme</span>
              <p>Napište, co pletete. Doporučíme materiál i počet klubek, ať vám v půlce nedojde.</p>
            </li>
          </ul>
          <div className="contact-row">
            <a className="contact-link" href="tel:+420775574646">Zavolat 775&nbsp;574&nbsp;646</a>
            <a className="contact-link" href="mailto:info@pletemesi.cz">info@pletemesi.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
