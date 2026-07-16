import { ProofSwatches } from "./motion";

const services = [
  {
    name: "Terasy",
    lead: "Teplý vzhled dřeva, který drží barvu i po letech u bazénu i na plném slunci.",
    ratings: [
      ["Odolnost vůči vodě", 5],
      ["UV záření", 5],
      ["Bezpečná bosá chůze", 5],
    ],
    note: "Nenasákavý povrch, netříští se a neklouže — vhodné i k bazénu.",
  },
  {
    name: "Zahradní a saunové domky",
    lead: "Celoroční zázemí pro relaxaci, které nepodléhá hnilobě ani deformacím.",
    ratings: [
      ["Odolnost vůči vlhkosti", 5],
      ["Tvarová stabilita", 4],
      ["Bezúdržbovost", 5],
    ],
    note: "Sauna, odpočinková místnost i zahradní zázemí bez nátěrů.",
  },
  {
    name: "Fasády",
    lead: "Fasádní obklady, které odolají větru, dešti i UV — bez jediného nátěru.",
    ratings: [
      ["Extrémní klima", 5],
      ["Stálobarevnost", 5],
      ["Variabilita profilů", 4],
    ],
    note: "Pro novostavby, rekonstrukce i veřejné budovy.",
  },
  {
    name: "Venkovní kuchyně",
    lead: "Materiál se nedeformuje, nešedne a snese vlhko i vysoké teploty.",
    ratings: [
      ["Tepelná odolnost", 5],
      ["Hygienický povrch", 4],
      ["Kombinace s kovem a kamenem", 4],
    ],
    note: "Na dotek i pohled téměř nerozeznatelné od dřeva.",
  },
  {
    name: "Zahradní nábytek",
    lead: "Designový kus, který odolá dešti, slunci i času — a zůstane teplý na dotek.",
    ratings: [
      ["Odolnost vůči povětrnosti", 5],
      ["Stálobarevnost", 5],
      ["Životnost", 5],
    ],
    note: "Bez broušení, natírání a olejování rok co rok.",
  },
];

const recipe = [
  ["Rýžové slupky", "obnovitelná surovina — základ hmoty"],
  ["Kamenná sůl", "minerální pojivo místo tropického dřeva"],
  ["Minerální olej", "pojí složky do pevného kompozitu"],
  ["100 % recyklovatelné", "po letech užití se materiál vrací zpět"],
];

function Meter({ value }: { value: number }) {
  return (
    <span className="meter" role="img" aria-label={`${value} z 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= value ? "meter__seg meter__seg--on" : "meter__seg"} />
      ))}
    </span>
  );
}

function Duality({ eyebrowLeft, eyebrowRight }: { eyebrowLeft: string; eyebrowRight: string }) {
  return (
    <div className="duality">
      <span className="duality__side duality__side--wood">{eyebrowLeft}</span>
      <span className="duality__seam" aria-hidden="true" />
      <span className="duality__side duality__side--tech">{eyebrowRight}</span>
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="LIMANY — truhlářství Plzeň">
          <span className="wordmark__bar" aria-hidden="true" />
          <span className="wordmark__name">LIMANY</span>
          <span className="wordmark__sub">truhlářství · Plzeň</span>
        </a>
        <a className="masthead__tel" href="tel:+420604627344">+420 604 627 344</a>
      </header>

      <section className="hero" id="top">
        <div className="hero__wood">
          <p className="kicker">Resysta — materiál na přírodní bázi</p>
          <h1 className="hero__title">
            <span className="hero__line hero__line--wood">Krása dřeva.</span>
            <span className="hero__line hero__line--tech">Odolnost kompozitu.</span>
          </h1>
          <p className="hero__lead">
            Materiál, který předběhl čas: vzhled a teplý dotek tropického dřeva bez jeho
            nedostatků. Dlouhá životnost, minimální údržba a plná recyklovatelnost — z plzeňské
            dílny.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#terasy">Prohlédnout terasy</a>
            <a className="btn btn--ghost" href="tel:+420604627344">Zavolat 604 627 344</a>
          </div>
        </div>

        <div className="hero__tech">
          <p className="proof__caption">
            Stejný materiál po pěti letech venku, bez jediného nátěru. Rolujte a sledujte rozdíl.
          </p>
          <ProofSwatches />
          <div className="proof__legend">
            <span>
              <strong>Tropické dřevo</strong>
              šedne, praská, tříská
            </span>
            <span className="proof__legend--hold">
              <strong>Resysta</strong>
              drží barvu i tvar
            </span>
          </div>
        </div>
      </section>

      <section className="section services" id="terasy">
        <Duality eyebrowLeft="co pro vás vyrobíme" eyebrowRight="a jak to obstojí" />
        <h2 className="section__title">Do exteriéru, kde běžné dřevo dřív nebo později prohraje</h2>
        <ol className="speclist">
          {services.map((s) => (
            <li className="spec" key={s.name}>
              <div className="spec__head">
                <h3 className="spec__name">{s.name}</h3>
                <p className="spec__lead">{s.lead}</p>
              </div>
              <dl className="spec__ratings">
                {s.ratings.map(([label, val]) => (
                  <div className="spec__row" key={label as string}>
                    <dt>{label}</dt>
                    <dd>
                      <Meter value={val as number} />
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="spec__note">{s.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section about">
        <Duality eyebrowLeft="z čeho to je" eyebrowRight="proč to vydrží" />
        <h2 className="section__title">Není to dřevo ani plast. Je to Resysta.</h2>
        <div className="about__grid">
          <div className="about__text">
            <p>
              Pracujeme s materiálem, který spojuje dvě věci, jež spolu obvykle nejdou dohromady:
              přirozený vzhled dřeva a odolnost kompozitu. Vzniká z obnovitelných surovin, takže
              nekácíme tropické lesy — a přesto dostanete povrch, který je na dotek i na pohled
              těžko rozeznatelný od exotického dřeva.
            </p>
            <p>
              Nešedne, nehnije, nepraská a nepotřebuje pravidelné natírání. Jednou hotovo, roky
              klid. To, co u dřeva každou sezónu opravujete, u Resysty prostě odpadá.
            </p>
            <ul className="about__benefits">
              <li>Nenasákavý povrch — ideální i k bazénu</li>
              <li>Netříští se a neklouže, vhodné pro bosou chůzi</li>
              <li>Stálobarevnost bez nátěrů</li>
              <li>Žádné broušení, natírání ani olejování</li>
              <li>Ekologické složení z obnovitelných surovin</li>
            </ul>
          </div>
          <div className="about__recipe">
            <p className="about__recipe-title">Složení materiálu</p>
            <dl className="recipe">
              {recipe.map(([name, desc]) => (
                <div className="recipe__item" key={name}>
                  <dt>{name}</dt>
                  <dd>{desc}</dd>
                </div>
              ))}
            </dl>
            <div className="about__contact">
              <p>Chcete terasu, fasádu nebo domek na míru? Ozvěte se do dílny.</p>
              <a className="btn btn--solid" href="tel:+420604627344">Zavolat 604 627 344</a>
              <a className="about__mail" href="mailto:info@limany.cz">info@limany.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
