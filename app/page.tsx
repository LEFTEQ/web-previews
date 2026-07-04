import type { CSSProperties } from "react";

export const metadata = {
  title: "JaNiko Build — rekonstrukce bytů v Praze",
  description:
    "Kompletní rekonstrukce bytů v Praze. Od bourání příček po předání s uklizeným bytem. Pevný termín, jasná cena, jeden parťák na celou stavbu.",
};

type Phase = {
  no: string;
  week: string;
  title: string;
  text: string;
};

const phases: Phase[] = [
  {
    no: "01",
    week: "1.–2. týden",
    title: "Bourání a hrubé práce",
    text: "Vyklidíme byt, zboříme příčky, vysekáme drážky. Odvezeme suť na skládku, sousedy uvědomíme dopředu a klepeme jen v povolených hodinách.",
  },
  {
    no: "02",
    week: "3.–4. týden",
    title: "Rozvody a jádro",
    text: "Nová elektroinstalace, voda, odpady a rozvody topení. Vyzdíme jádro, uděláme hrubé podlahy a připravíme byt pod omítky.",
  },
  {
    no: "03",
    week: "5.–7. týden",
    title: "Povrchy a obklady",
    text: "Omítky, sádrokartony, štuk a malby. Dlažba a obklady v koupelně i kuchyni. Klademe plovoučku nebo pokládáme vinyl přesně podle výběru.",
  },
  {
    no: "04",
    week: "8. týden",
    title: "Dokončení a předání",
    text: "Osadíme zařizovací předměty, dveře a lišty. Byt uklidíme do nastěhování a předáme s protokolem, fotkami skrytých rozvodů a zárukou.",
  },
];

type Reason = {
  label: string;
  title: string;
  text: string;
};

const reasons: Reason[] = [
  {
    label: "Termín",
    title: "Datum předání máte v smlouvě",
    text: "Než začneme bourat, dostanete harmonogram po týdnech. Když skluz hrozí, voláme dřív, než ho poznáte na kalendáři.",
  },
  {
    label: "Cena",
    title: "Rozpočet po položkách, ne od oka",
    text: "Rozpočet čtete jako účtenku — každá položka zvlášť. Vícepráce odsouhlasíte písemně předem, žádné překvapení na konci.",
  },
  {
    label: "Panelák i cihla",
    title: "Známe pražské bytové domy",
    text: "Panely na Jižním Městě, cihla na Vinohradech, funkcionalismus v Dejvicích. Víme, kde jsou nosné stěny a kde vede stoupačka.",
  },
];

const statStyle = (value: string): CSSProperties =>
  ({ ["--val" as string]: value } as CSSProperties);

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="JaNiko Build, domů">
          <span className="wordmark__ja">Ja</span>
          <span className="wordmark__niko">Niko</span>
          <span className="wordmark__build">Build</span>
        </a>
        <a className="topbar__phone" href="tel:+420776749953">
          Volejte 776&nbsp;749&nbsp;953
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero__grid" aria-hidden="true">
          <span className="hero__scale">1&nbsp;:&nbsp;50</span>
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">
            <span className="tick" aria-hidden="true" />
            Rekonstrukce bytů · Praha a okolí
          </p>

          <h1 className="hero__title">
            <span className="hero__line">Odbouráme</span>
            <span className="hero__line hero__line--wide">staré jádro,</span>
            <span className="hero__line hero__line--accent">postavíme byt</span>
            <span className="hero__line">k nastěhování.</span>
          </h1>

          <p className="hero__lead">
            Kompletní rekonstrukce pražských bytů od prvního úderu kladiva po
            uklizený byt s klíči v ruce. Jeden stavbyvedoucí, jeden termín, jedna
            cena po položkách.
          </p>

          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420776749953">
              Zavolat a domluvit prohlídku
            </a>
            <a className="btn btn--ghost" href="#postup">
              Jak rekonstrukce probíhá
            </a>
          </div>
        </div>

        <div className="hero__meta" aria-hidden="true">
          <span>Půdorys · byt 2+kk</span>
          <span>Nosná zeď</span>
          <span>Příčka k demolici</span>
        </div>
      </section>

      <section className="section section--phases" id="postup">
        <div className="section__head">
          <p className="section__eyebrow">Průběh stavby</p>
          <h2 className="section__title">
            Osm týdnů od holých zdí po hotový byt
          </h2>
          <p className="section__intro">
            Rekonstrukci vedeme jako stavbu s pevným sledem etap. Vždy víte, co
            se právě děje za dveřmi a co přijde příští týden.
          </p>
        </div>

        <ol className="phases">
          {phases.map((phase) => (
            <li className="phase" key={phase.no}>
              <span className="phase__no" aria-hidden="true">
                {phase.no}
              </span>
              <div className="phase__body">
                <span className="phase__week">{phase.week}</span>
                <h3 className="phase__title">{phase.title}</h3>
                <p className="phase__text">{phase.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--trust" id="o-nas">
        <div className="trust__grid">
          <div className="trust__lede">
            <p className="section__eyebrow">Proč JaNiko Build</p>
            <h2 className="section__title">
              Deset let děláme z pražských bytů domov
            </h2>
            <p className="section__intro">
              Jsme malá parta zedníků, instalatérů a obkladačů z Prahy. Neděláme
              deset zakázek najednou — na vaší stavbě potkáte pořád stejné lidi
              a stavbyvedoucího, který zvedá telefon.
            </p>

            <dl className="stats">
              <div className="stat">
                <dt>Hotových bytů</dt>
                <dd style={statStyle("120")}>120+</dd>
              </div>
              <div className="stat">
                <dt>Let na pražských stavbách</dt>
                <dd style={statStyle("10")}>10</dd>
              </div>
              <div className="stat">
                <dt>Záruka na řemeslo</dt>
                <dd style={statStyle("5")}>5 let</dd>
              </div>
            </dl>
          </div>

          <ul className="reasons">
            {reasons.map((reason) => (
              <li className="reason" key={reason.label}>
                <span className="reason__label">{reason.label}</span>
                <h3 className="reason__title">{reason.title}</h3>
                <p className="reason__text">{reason.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="quote">
          <p>
            „Rozbité jádro v panelu na Chodově zvládli za sedm týdnů a předali
            uklizený byt. Termín i cenu drželi do koruny.“
          </p>
          <cite>Petra H., byt 3+1, Praha 11</cite>
        </blockquote>
      </section>
    </main>
  );
}
