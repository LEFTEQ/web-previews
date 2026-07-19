import { Guardrail, HazardBand, ServiceCards } from "./motion";

// W-beam guardrail profile abstracted into a repeating trapezoidal corrugation.
// This exact line is KASKA's core product read head-on — belongs to no other trade.
function wBeam(width: number, period = 40): string {
  let d = "M 0 20";
  for (let x = 0; x < width; x += period) {
    d += ` L ${x + 8} 4 L ${x + 20} 4 L ${x + 28} 20 L ${x + 40} 20`;
  }
  return d;
}

const RAIL_W = 1200;
const RAIL_D = wBeam(RAIL_W);
const RAIL_VB = `0 0 ${RAIL_W} 24`;

const SERVICES = [
  {
    tag: "SDZ · VDZ · DIO",
    name: "Dopravní značení",
    body:
      "Svislé i vodorovné značení a dopravně inženýrská opatření — od návrhu po realizaci v provozu. Kompletní pokrytí včetně výrobků pro bezpečnost provozu.",
  },
  {
    tag: "OCEL · BETON · DOČASNÁ",
    name: "Svodidla a zábradlí",
    body:
      "Prodej a montáž silničních svodidel po celé ČR. Beranění sloupků, mostní systémy i certifikovaná silniční zábradlí. To, co drží auto na cestě.",
  },
  {
    tag: "FVE · 0,3 MWp+",
    name: "Fotovoltaické elektrárny",
    body:
      "Komplexní montáže velkých FVE celků po celé EU. Na větší instalace jsme česká jednička — stejná preciznost jako u svodidel.",
  },
];

const TIMELINE = [
  { year: "1998", text: "Založení firmy v Českých Budějovicích." },
  { year: "2002", text: "Certifikát jakosti ISO 9001." },
  { year: "dále", text: "ISO 14001 (životní prostředí) a ISO 45001 (bezpečnost práce)." },
  { year: "dnes", text: "25+ let, zakázky v ČR i zahraničí a řešení, která se v oboru stala standardem." },
];

const NEWS = [
  { tag: "Legislativa", text: "Nové dopravní značky platné od 1. 1. 2024" },
  { tag: "Realizace", text: "27 km dočasných svodidel za 4 dny" },
  { tag: "Obor", text: "Silniční konference — poděkování za spolupráci" },
];

export default function Page() {
  return (
    <main className="kaska">
      <header className="nav">
        <a className="brand" href="#top" aria-label="KASKA — úvod">
          KASKA<span className="brand__suffix">s.r.o.</span>
        </a>
        <nav className="nav__links" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#firma">Firma</a>
        </nav>
      </header>

      <section className="section hero" id="top">
        <div className="hero__inner">
          <p className="kicker">Od roku 1998 · České Budějovice</p>
          <h1 className="hero__title">
            <span className="line l1">Držíme českou</span>
            <span className="line l2">
              silnici <em>v&nbsp;mezích.</em>
            </span>
          </h1>
          <div className="hero__rail">
            <Guardrail d={RAIL_D} viewBox={RAIL_VB} variant="yellow" />
          </div>
          <p className="hero__sub">
            Dopravní značení, svodidla všech typů a velké fotovoltaické elektrárny.
            Bezpečnější silnice pro všechny, kdo se večer vracejí domů.
          </p>
          <ul className="chips" aria-label="Fakta o firmě">
            <li>25+ let v oboru</li>
            <li>ISO 9001 · 14001 · 45001</li>
            <li>Realizace po ČR i EU</li>
          </ul>
        </div>
      </section>

      <div className="divider" role="separator" aria-hidden="true">
        <HazardBand />
        <Guardrail d={RAIL_D} viewBox={RAIL_VB} variant="steel" />
      </div>

      <section className="section services" id="sluzby">
        <div className="section__head">
          <p className="eyebrow">Tři obory, jedna disciplína</p>
          <h2 className="section__title">Co stavíme do silnic</h2>
        </div>
        <ServiceCards services={SERVICES} />
      </section>

      <div className="divider" role="separator" aria-hidden="true">
        <HazardBand />
        <Guardrail d={RAIL_D} viewBox={RAIL_VB} variant="steel" />
      </div>

      <section className="section about" id="firma">
        <div className="about__grid">
          <div className="about__lead">
            <p className="eyebrow eyebrow--dark">Proč nám silničáři věří</p>
            <h2 className="section__title">
              Za každou zakázkou stojí jméno, které nechceme zklamat.
            </h2>
            <p className="about__text">
              Historie KASKA sahá do roku 1998. Za tu dobu jsme odvedli zakázky
              doma i v zahraničí, získali řadu spokojených zákazníků a přišli
              s řešeními, která se v oboru stala standardem. Montáže míří na
              veškeré silniční i mostní systémy svodidel, beranění sloupků
              a poradenství v oblasti bezpečnosti dopravy.
            </p>
            <p className="about__ethos">Ctíme etické principy v podnikání.</p>

            <ol className="timeline">
              {TIMELINE.map((t) => (
                <li className="timeline__item" key={t.year}>
                  <span className="timeline__year">{t.year}</span>
                  <span className="timeline__text">{t.text}</span>
                </li>
              ))}
            </ol>
          </div>

          <aside className="news" aria-label="Z poslední doby">
            <h3 className="news__title">Z poslední doby</h3>
            <ul className="news__list">
              {NEWS.map((n) => (
                <li className="news__item" key={n.text}>
                  <span className="news__tag">{n.tag}</span>
                  <span className="news__text">{n.text}</span>
                </li>
              ))}
            </ul>
            <p className="news__place">Prostředí i norma se mění — my držíme krok. České Budějovice, po celé ČR.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
