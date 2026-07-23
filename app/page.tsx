import { AiImage } from "./_ui";
import { CargoSwap } from "./motion";

const SERVICES = [
  {
    no: "01",
    title: "Nákladní přeprava",
    body: "Sypké stavební materiály, odvoz suti a svoz odpadu. Nákladní i kontejnerová doprava na krátké i dlouhé vzdálenosti — optimalizované trasy, spolehlivá manipulace, až 48 t na jednu jízdu.",
  },
  {
    no: "02",
    title: "Demoliční služby",
    body: "Od plánu po poslední odvoz suti. Menší stavby, průmyslové haly i celé areály. Pečlivě třídíme a likvidujeme odpad podle předpisů, s minimálním dopadem na okolí.",
  },
  {
    no: "03",
    title: "Zemní práce",
    body: "Výkopy pro inženýrské sítě a základy domů. Pásová i kolová rypadla, traktorbagr, minibagr a smykový nakladač — technika na míru terénu i termínu.",
  },
  {
    no: "04",
    title: "Zpracování odpadu",
    body: "Svoz, třídění a recyklace stavebního, průmyslového i komunálního odpadu. Druhotné suroviny vracíme zpět do oběhu, ne na skládku.",
  },
  {
    no: "05",
    title: "Prodej materiálu",
    body: "Kvalitní stavební materiál za férové ceny — od základních surovin po specializovaný sortiment pro malé i velké stavby.",
  },
];

const FLEET = [
  "Euro Cargo 9 t",
  "BOMAG",
  "CAT 318F",
  "CAT 305CCR",
  "CAT 308E",
  "CAT 432F",
  "Bobcat A300",
];

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wm" href="#uvod" aria-label="MV přeprava — úvod">
          <span className="wm__plate">MV</span>
          <span className="wm__word">přeprava</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#technika">Technika</a>
          <a href="#onas">O nás</a>
        </nav>
        <span className="masthead__hours">Po–Pá 8–16 · 777 111 222</span>
      </header>

      <section className="band band--hero" id="uvod">
        <div className="hero__media" aria-hidden="false">
          <AiImage
            src="/hero.webp"
            alt="Nákladní sklápěč MV přeprava při odvozu stavební suti"
            className="hero__img"
          />
        </div>
        <div className="hero__inner">
          <p className="eyebrow">
            <span className="eyebrow__no">01</span>
            Demolice · přeprava · zemní práce — Praha 9, od roku 1995
          </p>
          <h1 className="hero__title">
            Naložíme <CargoSwap /> a odvezeme až 48 tun najednou.
          </h1>
          <p className="hero__lead">
            Zbouráme halu, vykopeme základy, odvezeme suť i sypký materiál.
            Jeden partner na celou stavbu — od prvního výkopu po poslední
            kontejner.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#sluzby">Poptat demolici</a>
            <a className="btn btn--ghost" href="#technika">Prohlédnout techniku</a>
          </div>
        </div>
        <div className="loadplate" aria-hidden="false">
          <span className="loadplate__num">48<span className="loadplate__unit">t</span></span>
          <span className="loadplate__label">Max. náklad na jednu jízdu</span>
        </div>
      </section>

      <div className="hazard" role="presentation" />

      <section className="band band--services" id="sluzby">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">
            <span className="eyebrow__no">01–05</span>
            Co pro vás uděláme
          </p>
          <h2 className="section-title">Pět služeb, jedna parta</h2>
        </div>
        <ol className="svc">
          {SERVICES.map((s) => (
            <li className="svc__item" key={s.no}>
              <span className="svc__no">{s.no}</span>
              <div className="svc__text">
                <h3 className="svc__title">{s.title}</h3>
                <p className="svc__body">{s.body}</p>
              </div>
              <a className="svc__link" href="#onas">
                Nezávazně poptat
              </a>
            </li>
          ))}
        </ol>
      </section>

      <div className="hazard" role="presentation" />

      <section className="band band--about" id="onas">
        <div className="about__grid">
          <div className="about__text">
            <p className="eyebrow">
              <span className="eyebrow__no">30</span>
              let na stavbách
            </p>
            <h2 className="section-title section-title--light">
              Váš partner pro těžkou práci od roku 1995
            </h2>
            <p className="about__lead">
              MV přeprava vozí materiál, boří a kope po Praze i mimo ni tři
              desítky let. Máme vlastní stroje, vlastní řidiče a jeden telefon,
              na kterém se domluvíte na celé zakázce.
            </p>
            <dl className="facts">
              <div className="facts__row">
                <dt>Provozovna</dt>
                <dd>Mladých Běchovic 612, 190 11 Praha 9</dd>
              </div>
              <div className="facts__row">
                <dt>Objednávky</dt>
                <dd>Po–Pá 8–16 · 777 111 222</dd>
              </div>
              <div className="facts__row">
                <dt>E-mail</dt>
                <dd>info@example.cz</dd>
              </div>
            </dl>
          </div>

          <div className="about__side" id="technika">
            <div className="fleet__media">
              <AiImage
                src="/section-1.webp"
                alt="Pásové rypadlo a stavební technika MV přeprava"
                className="fleet__img"
              />
            </div>
            <p className="fleet__eyebrow">Naše technika</p>
            <ul className="fleet">
              {FLEET.map((m) => (
                <li className="fleet__item" key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
