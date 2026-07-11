import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Hrubá stavba",
      popis:
        "Založíme, vyzdíme a zastřešíme. Rodinné domy i přístavby od základové desky po hotový krov — z cihel Porotherm i ze ztraceného bednění.",
      detail: ["Základy a desky", "Nosné a příčkové zdivo", "Stropy a překlady"],
    },
    {
      cislo: "02",
      nazev: "Omítky a fasády",
      popis:
        "Jádrové i štukové omítky, zateplení a probarvené fasády. Rovné stěny, ostré rohy — kontrolujeme latí, ne od oka.",
      detail: ["Vnitřní omítky", "Zateplení ETICS", "Fasádní nátěry"],
    },
    {
      cislo: "03",
      nazev: "Rekonstrukce",
      popis:
        "Vybouráme staré, srovnáme podlahy, obložíme koupelnu. Pracujeme i v památkách kolem Litně, kde se cihla musí ctít.",
      detail: ["Bytová jádra", "Obklady a dlažby", "Sanace vlhkého zdiva"],
    },
  ];

  const duvera = [
    { hodnota: "18 let", popis: "na stavbách v Berounsku a Podbrdsku" },
    { hodnota: "Do 30 km", popis: "od Hatí a Litně, přijedeme k vám" },
    { hodnota: "Vlastní parta", popis: "žádní subdodavatelé na poslední chvíli" },
  ];

  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="Zednictví Hatě, domovská stránka">
          <span className="wordmark__line">Zednictví</span>
          <span className="wordmark__place">Hatě · Liteň</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Co stavíme</a>
          <a href="#onas">O partě</a>
          <a className="nav__call" href="tel:+420">Zavolat mistrovi</a>
        </nav>
      </header>

      <section className="hero">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Vyzděná cihlová stěna z lícových cihel s pravidelnou spárou"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">
            <span className="course">Řada za řadou</span> od roku 2006
          </p>
          <h1 className="hero__title">
            Zdíme rovně,<br />
            <span className="hero__title--accent">spára po spáře.</span>
          </h1>
          <p className="hero__lede">
            Zednické a stavební práce z Hatí u Litně. Postavíme dům, omítneme
            stěny i předěláme koupelnu — a předáme to tak, jak bychom to chtěli
            doma sami.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420">
              Zavolat mistrovi
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co pro vás uděláme
            </a>
          </div>
        </div>
        <div className="hero__ruler" aria-hidden="true">
          <span>0</span>
          <span>10</span>
          <span>20</span>
          <span>30</span>
          <span>40</span>
          <span>50 cm</span>
        </div>
      </section>

      <section className="sluzby" id="sluzby">
        <div className="section-head">
          <p className="section-head__kicker">Co stavíme</p>
          <h2 className="section-head__title">
            Tři vrstvy jedné stavby
          </h2>
          <p className="section-head__sub">
            Od základů po štuk. Většinu zvládneme jednou partou, takže se řemesla
            nepřehazují mezi cizími lidmi.
          </p>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.cislo}>
              <span className="card__num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__desc">{s.popis}</p>
              <ul className="card__list">
                {s.detail.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figure className="sluzby__figure">
          <img
            src="/section-1.webp"
            alt="Zedník nanáší omítku hladítkem na připravenou stěnu"
          />
          <figcaption>
            Jádrová omítka srovnaná do latě — než přijde štuk, musí sedět rovina.
          </figcaption>
        </figure>
      </section>

      <section className="onas" id="onas">
        <div className="onas__media">
          <img
            src="/section-2.webp"
            alt="Rozestavěný rodinný dům z cihelného zdiva připravený na strop"
          />
        </div>
        <div className="onas__text">
          <p className="section-head__kicker">O partě</p>
          <h2 className="onas__title">
            Malá parta z Hatí, co po sobě uklidí
          </h2>
          <p className="onas__lede">
            Jsme místní zedníci ze Skuhrova a Litně. Neděláme deset zakázek
            najednou — bereme tolik práce, kolik zvládneme udělat pořádně. Na
            stavbě potkáte přímo ty, kdo zdí, ne cizí lidi z inzerátu.
          </p>
          <dl className="stats">
            {duvera.map((d) => (
              <div className="stat" key={d.hodnota}>
                <dt className="stat__value">{d.hodnota}</dt>
                <dd className="stat__label">{d.popis}</dd>
              </div>
            ))}
          </dl>
          <blockquote className="quote">
            <p>
              „Přišli, řekli termín a ten termín drželi. Fasáda je po dvou
              zimách pořád jako první den.“
            </p>
            <cite>Rodina Markových, Liteň</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

// (typ ponechán pro případné rozšíření)
type _Style = CSSProperties;
