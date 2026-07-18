import { AiImage } from "./_ui";

const sluzby = [
  {
    n: "01",
    t: "Přírodní trávníky",
    d: "Travní koberce i seté trávníky. Připravíme terén, položíme, napojíme závlahu — nový zelený trávník do 72 hodin od objednávky.",
    spec: ["luxusní i zátěžový", "do 72 hodin", "profesionální pokládka"],
  },
  {
    n: "02",
    t: "Umělé trávníky",
    d: "Od dokonalých imitací živé trávy pro zahradu po odolné sportovní povrchy. Krásný trávník, který nemusíte kosit ani zalévat.",
    spec: ["záruka 8 let", "vodě propustný", "do interiéru i ven"],
  },
  {
    n: "03",
    t: "Sportoviště a hřiště",
    d: "Zakládání a regenerace fotbalových hřišť. Airifikace, zapískování, dosev a kompletní péče o hrací plochu celou sezónu.",
    spec: ["partner ČAF", "regenerace", "celoroční péče"],
  },
  {
    n: "04",
    t: "Golf a putting green",
    d: "Greeny, driving a adventure golf. Přírodní i bezúdržbový povrch, který drží rovný, rychlý ideál od jara do podzimu.",
    spec: ["putting green", "adventure golf", "stálá kondice"],
  },
  {
    n: "05",
    t: "Závlahy a údržba",
    d: "Automatické zavlažování na míru a pravidelná péče se zárukou. Nezdravý trávník vrátíme do plné kondice.",
    spec: ["automatická závlaha", "pravidelná péče", "se zárukou"],
  },
];

const duvera = [
  { k: "18 let", v: "na trávníku po celém jihu Čech, z Litvínovic u Českých Budějovic" },
  { k: "Partner ČAF", v: "zakládáme a udržujeme profesionální fotbalová hřiště" },
  { k: "Člen IOG", v: "standardy Institute of Groundsmanship — péče o trávu od roku 1934" },
  { k: "Záruka 8 let", v: "na umělé trávní povrchy, vodě propustné, do interiéru i exteriéru" },
  { k: "Do 72 hodin", v: "od objednávky pokládáme nový přírodní travní koberec" },
  { k: "Vlastní tým", v: "příprava terénu, pokládka, závlaha i sekání — vše od jednoho" },
];

export default function Page() {
  return (
    <main>
      <header className="top">
        <a className="mark" href="#" aria-label="Český trávník — domů">
          <span className="mark__chip" aria-hidden="true" />
          <span className="mark__name">
            Český <em>trávník</em>
          </span>
        </a>
        <p className="top__tag">Zahradní architektura · České&nbsp;Budějovice</p>
      </header>

      {/* HERO — mow pass */}
      <section className="hero band" aria-labelledby="hero-nadpis">
        <div className="hero__turf" aria-hidden="true" />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner">
          <p className="eyebrow">Přírodní · umělé · sportovní trávníky</p>
          <h1 id="hero-nadpis" className="hero__title">
            <span>Ty nejlepší</span>
            <span>trávníky —</span>
            <span className="hero__title-accent">již 18 let</span>
          </h1>
          <p className="hero__lede">
            Zakládáme, pokládáme a udržujeme travnaté plochy jižních Čech — od
            zahradního koberce po fotbalové hřiště. Sníte o zeleném trávníku?
            Splníme ho.
          </p>
          <ul className="hero__chips">
            <li>Nový trávník do 72&nbsp;hodin</li>
            <li>Záruka 8&nbsp;let na umělý povrch</li>
            <li>Partner ČAF &amp; člen IOG</li>
          </ul>
        </div>
      </section>

      <div className="cut" aria-hidden="true"><span /></div>

      {/* SLUŽBY */}
      <section className="band band--flip services" aria-labelledby="sluzby-nadpis">
        <div className="band__stripes" aria-hidden="true" />
        <div className="wrap">
          <div className="lead">
            <p className="eyebrow eyebrow--dark">Co u nás vyroste</p>
            <h2 id="sluzby-nadpis" className="lead__title">
              Pět pásů, které umíme sekat naslepo
            </h2>
            <p className="lead__note">
              Každý povrch má svůj postup — od přípravy terénu po pravidelnou
              péči. Vyberte, co potřebuje vaše plocha.
            </p>
          </div>
          <ol className="cards">
            {sluzby.map((s) => (
              <li className="card" key={s.n}>
                <span className="card__n" aria-hidden="true">
                  {s.n}
                </span>
                <h3 className="card__t">{s.t}</h3>
                <p className="card__d">{s.d}</p>
                <ul className="card__spec">
                  {s.spec.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="cut" aria-hidden="true"><span /></div>

      {/* DŮVĚRA */}
      <section className="band trust" aria-labelledby="trust-nadpis">
        <div className="band__stripes" aria-hidden="true" />
        <div className="wrap wrap--split">
          <div className="trust__intro">
            <p className="eyebrow">Proč Český trávník</p>
            <h2 id="trust-nadpis" className="trust__title">
              Osmnáct sezón na kolenou v&nbsp;trávě
            </h2>
            <p className="trust__lede">
              Sídlíme ve Stecherově mlýně v Litvínovicích u Českých Budějovic a
              o trávu se staráme podle stejných standardů jako anglický IOG.
              Ať jde o zahradu, hřiště nebo green — víme, kudy vede každý pas
              sekačky.
            </p>
            <p className="trust__badge">
              <AiImage
                className="trust__thumb"
                alt="Čerstvě posekaný pruhovaný trávník s pásy sekačky"
                src="Freshly mown football-pitch lawn seen from a low angle, alternating light and dark green mowing stripes running diagonally, crisp white chalk line, South Bohemian overcast sky, photographic, no text"
              />
            </p>
          </div>
          <ul className="facts">
            {duvera.map((f) => (
              <li className="fact" key={f.k}>
                <span className="fact__k">{f.k}</span>
                <span className="fact__v">{f.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
