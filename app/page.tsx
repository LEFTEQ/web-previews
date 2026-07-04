import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lukáš Sikula — žaluzie a rolety na míru | Ostrava",
  description:
    "Zaměření, výroba i montáž žaluzií a rolet po celé Ostravě. Horizontální a vertikální žaluzie, látkové rolety, sítě proti hmyzu. Přesně na vaše okna, hotovo v termínu.",
  openGraph: {
    title: "Lukáš Sikula — žaluzie a rolety na míru",
    description:
      "Stínění oken na míru pro Ostravu a okolí. Zaměřím, vyrobím, namontuji.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const produkty = [
  {
    lamela: "25 mm",
    nazev: "Horizontální žaluzie",
    popis:
      "Hliníkové lamely mezi skly i do okna. Ovládání řetízkem nebo šňůrou, na plastová i dřevěná okna. Klasika, která si poradí s ranním sluncem od východu.",
  },
  {
    lamela: "89 mm",
    nazev: "Vertikální žaluzie",
    popis:
      "Látkové svislé lamely pro velká okna a prosklené stěny. Otočíte je do světla i do soukromí. Ideál do panelákových lodžií i kanceláří v centru.",
  },
  {
    lamela: "látka",
    nazev: "Látkové rolety",
    popis:
      "Roleta do stropu, do křídla okna nebo den a noc. Desítky látek od průsvitných po zatemňovací — do ložnice, kde chcete ráno tmu.",
  },
  {
    lamela: "síť",
    nazev: "Sítě proti hmyzu",
    popis:
      "Rámečky, rolovací i dveřní sítě na míru rámu. Přes léto zavřete komáry venku a okno necháte dokořán.",
  },
];

const kroky = [
  {
    c: "01",
    t: "Zaměření u vás doma",
    d: "Přijedu po Ostravě a okolí, změřím každé okno na milimetr a poradím s typem stínění i látkou. Zaměření je zdarma a nezávazné.",
  },
  {
    c: "02",
    t: "Výroba na míru",
    d: "Žaluzie i rolety se vyrábí přesně na vaše rozměry — žádné zkracování na místě, žádné mezery po stranách.",
  },
  {
    c: "03",
    t: "Montáž a úklid",
    d: "Namontuji, seřídím ovládání, vyzkouším chod a po sobě uklidím. Odcházíte k oknu, které funguje na první zatažení.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#" aria-label="Lukáš Sikula — žaluzie a rolety, domů">
          <span className="wordmark__slats" aria-hidden="true">
            <i></i><i></i><i></i><i></i><i></i>
          </span>
          <span className="wordmark__text">
            <b>SIKULA</b>
            <small>žaluzie &amp; rolety · Ostrava</small>
          </span>
        </a>
        <a className="nav__call" href="tel:+420603506154">
          Zavolat 603 506 154
        </a>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Vertikální žaluzie v prosvětleném ostravském obývacím pokoji, lamely natočené do měkkého denního světla"
            width={1600}
            height={1100}
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Ostrava a okolí · zaměření zdarma</p>
          <h1 className="hero__title">
            Světlo si<br />
            <span className="hero__accent">nastavíte</span>
            <br />přesně tak akorát.
          </h1>
          <p className="hero__lead">
            Žaluzie a rolety na míru od Lukáše Sikuly. Přijedu, zaměřím,
            vyrobím a namontuji — vy jen otočíte lamely do slunce nebo do
            klidu.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420603506154">
              Zavolat a domluvit zaměření
            </a>
            <a className="btn btn--ghost" href="#produkty">
              Co všechno dělám
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="produkty" aria-labelledby="produkty-nadpis">
        <div className="section__head">
          <p className="eyebrow">Nabídka</p>
          <h2 id="produkty-nadpis" className="section__title">
            Od úzké lamely po celou prosklenou stěnu
          </h2>
          <p className="section__intro">
            Každé okno má svůj typ stínění. Poradím, co se hodí do panelákové
            lodžie, co do novostavby a co do ložnice, kde chcete ráno tmu.
          </p>
        </div>

        <ul className="products">
          {produkty.map((p) => (
            <li className="product" key={p.nazev}>
              <span className="product__gauge" aria-hidden="true">
                {p.lamela}
              </span>
              <h3 className="product__name">{p.nazev}</h3>
              <p className="product__desc">{p.popis}</p>
            </li>
          ))}
        </ul>

        <figure className="showcase">
          <img
            src="/section-1.webp"
            alt="Detail horizontálních hliníkových žaluzií se světlem procházejícím mezi lamelami"
            width={1400}
            height={900}
            className="showcase__img"
          />
          <figcaption className="showcase__cap">
            Hliníkové lamely 25 mm — pruhy světla si zatáhnete jedním pohybem.
          </figcaption>
        </figure>
      </section>

      <section className="section section--dark" aria-labelledby="jak-nadpis">
        <div className="about">
          <div className="about__text">
            <p className="eyebrow eyebrow--light">Jak to probíhá</p>
            <h2 id="jak-nadpis" className="section__title">
              Jeden řemeslník od zaměření po poslední šroub
            </h2>
            <p className="section__intro">
              Nedělám přes prostředníky. Domluvíte se přímo se mnou, u vás
              doma změřím okna a stejný člověk vám je pak i namontuje. Roky
              zkušeností na oknech po celé Ostravě.
            </p>

            <ol className="steps">
              {kroky.map((k) => (
                <li className="step" key={k.c}>
                  <span className="step__num">{k.c}</span>
                  <div>
                    <h3 className="step__title">{k.t}</h3>
                    <p className="step__desc">{k.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <figure className="about__media">
            <img
              src="/section-2.webp"
              alt="Látková roleta na okně novostavby, stažená do poloviny, se změkčeným denním světlem"
              width={1000}
              height={1200}
              className="about__img"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
