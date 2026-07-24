import { AiImage } from "./_ui";

const services = [
  {
    name: "Svatby na klíč",
    desc: "Od místa a květin až po harmonogram dne. Vy si užíváte, my hlídáme každou minutu i každý poslední přípitek.",
  },
  {
    name: "Firemní a soukromé akce",
    desc: "Večírky, výročí a teambuildingy pro velké firmy i oslavy narozenin pro dospělé a děti.",
  },
  {
    name: "Event marketing",
    desc: "Kampaně, spotřebitelské soutěže na míru a eventy v obchodních centrech, které lidi opravdu zastaví.",
  },
  {
    name: "Kreativní dílny",
    desc: "Tvořivé workshopy a programy stavěné přesně na vaši akci i na cílovou skupinu.",
  },
  {
    name: "Catering a hostessing",
    desc: "Občerstvení, obsluha a usměvavé hostesky, které za vás udělají první dojem.",
  },
  {
    name: "Pronájem inventáře",
    desc: "Vlastní vybavení na party, svatby i cateringy — půjčíme, přivezeme a postavíme.",
  },
  {
    name: "Technická realizace",
    desc: "Zvuk, světla a produkce. Postavíme akci od prázdného sálu po finální tečku.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <section className="band hero">
        <div className="wrap hero__grid">
          <div className="hero__content">
            <p className="eyebrow">Svatební a event agentura — Praha</p>
            <h1 className="wordmark">Lavande</h1>
            <p className="hero__lead">
              Svatby, oslavy a firemní akce na klíč. Od prvního nápadu po
              poslední přípitek se postaráme o každý detail.
            </p>
            <p className="hero__meta">
              Individuální přístup ke každému klientovi — přátelsky, přesto
              naprosto profesionálně.
            </p>
          </div>
          <div className="hero__media">
            <div className="hero__frame">
              <AiImage
                src="/hero.webp"
                alt="Slavnostně prostřená svatební tabule s levandulovou dekorací"
                className="hero__img"
              />
              <span className="hero__spot" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="band services">
        <div className="wrap">
          <header className="section-head">
            <p className="eyebrow eyebrow--brass">Co umíme</p>
            <h2 className="section-title">Herbář našich služeb</h2>
            <p className="section-intro">
              Jeden stonek, na kterém drží celá akce. Každý pupen je jedna
              služba — od velké svatby po večírek pro pár desítek lidí.
            </p>
          </header>

          <div className="specimen">
            <span className="specimen__line" aria-hidden="true" />
            <ol className="specimen__list">
              {services.map((s) => (
                <li className="specimen__item" key={s.name}>
                  <span className="specimen__bud" aria-hidden="true" />
                  <h3 className="specimen__name">{s.name}</h3>
                  <p className="specimen__desc">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="band about">
        <div className="wrap about__grid">
          <div className="about__media">
            <AiImage
              src="/section-1.webp"
              alt="Tým agentury připravuje výzdobu společenské akce"
              className="about__img"
            />
          </div>
          <div className="about__content">
            <p className="eyebrow eyebrow--brass">O nás</p>
            <h2 className="section-title">
              Přátelsky, přesto naprosto profesionálně
            </h2>
            <p className="about__text">
              Jsme pražská agentura, která plánuje akce pro velké firmy i pro
              jednotlivce se stejnou péčí. Dostanete konkrétní lidi, jasný
              rozpočet a řešení, které drží slovo.
            </p>
            <p className="about__text">
              Stejnou pozornost věnujeme široké veřejnosti, velkým značkám i
              drobným podnikatelům. Vždycky tak, aby výsledek vypadal jako od
              vás — jen s klidem, že to někdo hlídá.
            </p>
          </div>
        </div>

        <div className="wrap">
          <article className="reference">
            <div className="reference__media">
              <AiImage
                src="/section-2.webp"
                alt="Stánek programu Den zdraví v obchodním centru"
                className="ref__img"
              />
            </div>
            <div className="reference__body">
              <p className="eyebrow eyebrow--brass">Reference</p>
              <h3 className="reference__title">Den zdraví — obchodní centrum</h3>
              <p className="reference__text">
                Návštěvníkům jsme přiblížili zdravý životní styl — od výživy po
                péči o tělo i mysl. Interaktivní stánky, ochutnávky a program,
                který zastavil kolemjdoucí a dal značce lidskou tvář.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
