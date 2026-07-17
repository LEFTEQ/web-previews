import { AiImage } from "./_ui";
import { HeroHeadline, LoadCounter } from "./motion";

const services = [
  {
    no: "01",
    title: "Stěhování strojů",
    load: "do 120 t",
    desc: "Kompletní přesun strojů a výrobních linek — demontáž, odpojení všech provozních médií, transport i zpětná montáž a seřízení na novém místě.",
  },
  {
    no: "02",
    title: "Nadrozměrná přeprava",
    load: "š. do 4,20 m",
    desc: "Mezinárodní kamionová i nadrozměrná přeprava strojů, jeřábů a technologických celků. Vyřídíme povolení, doprovodná vozidla i naplánování trasy.",
  },
  {
    no: "03",
    title: "Instalace a servis technologií",
    load: "24/7",
    desc: "Ustavení, připojení na média, montáže a servis obráběcích center, lisů, dopravníků i robotických pracovišť — s podporou a poradenstvím.",
  },
  {
    no: "04",
    title: "Instalace médií",
    load: "energo",
    desc: "Energetické celky, kotelny a předávací stanice: rozvody tepla, elektro i akumulace — od výstavby zdroje po rekonstrukci stávajícího provozu.",
  },
  {
    no: "05",
    title: "Ocelové konstrukce",
    load: "na míru",
    desc: "Zámečnická výroba, vestavby do hal, plošiny, dopravníky a přípravky pro průmyslový provoz — návrh, výroba i montáž na stavbě.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <span className="route-line" aria-hidden="true" />

      <header className="brand">
        <span className="brand__mark" aria-hidden="true" />
        <span className="brand__name">
          EAH
          <span className="brand__full">Europe Automotive Holding · Liberec</span>
        </span>
      </header>

      <section className="band hero" aria-labelledby="hero-title">
        <div className="hero__col">
          <p className="eyebrow">Těžká a nadrozměrná přeprava · Liberec</p>
          <HeroHeadline>
            Stroje, co se nevejdou do normy, stěhujeme celé.
          </HeroHeadline>
          <p className="hero__lead">
            Demontáž, nadrozměrný transport a zpětné ustavení výrobních linek po
            celé EU. Povolení, doprovodná vozidla i víkendové výjimky vyřídíme za
            vás — vy jen odemknete halu.
          </p>

          <div className="hero__cta">
            <a className="btn" href="mailto:info@eah.cz?subject=Poptávka%20přepravy">
              Poptat přepravu
            </a>
            <a className="tel" href="tel:+420722928118">
              Zavolat 722 928 118
            </a>
          </div>

          <div className="measure" aria-hidden="true">
            <span className="measure__tick" />
            <span className="measure__bar" />
            <span className="measure__box">
              <LoadCounter to={120} suffix=" t" />
            </span>
            <span className="measure__bar" />
            <span className="measure__tick" />
          </div>
          <p className="measure__cap">
            <span className="sr-only">Až 120 tun. </span>
            max. hmotnost, kterou dostaneme na jeden nízkoložný návěs
          </p>
        </div>

        <figure className="hero__media">
          <div className="hero__dim" aria-hidden="true">
            <span className="hero__dim-tick" />
            <span className="hero__dim-line" />
            <span className="hero__dim-val">4,20 m</span>
            <span className="hero__dim-line" />
            <span className="hero__dim-tick" />
          </div>
          <AiImage
            src="/hero.webp"
            alt="Nadrozměrný průmyslový stroj naložený na nízkoložném návěsu, připravený k transportu."
            className="hero__img"
          />
        </figure>
      </section>

      <section className="band services" aria-labelledby="services-title">
        <div className="services__head reveal">
          <p className="eyebrow">Nakládací lístek · co vezeme</p>
          <h2 id="services-title" className="h2">
            Pět služeb, jeden tým na stavbě
          </h2>
        </div>

        <figure className="services__banner reveal">
          <AiImage
            src="/section-1.webp"
            alt="Demontáž výrobní linky v průmyslové hale před nakládkou a transportem."
            className="services__img"
          />
        </figure>

        <ol className="tickets">
          {services.map((s) => (
            <li className="ticket reveal" key={s.no}>
              <span className="ticket__no">{s.no}</span>
              <div className="ticket__body">
                <div className="ticket__row">
                  <h3 className="ticket__title">{s.title}</h3>
                  <span className="ticket__load">{s.load}</span>
                </div>
                <p className="ticket__desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="band about" aria-labelledby="about-title">
        <figure className="about__media reveal">
          <AiImage
            src="/section-2.webp"
            alt="Technici EAH ustavují obráběcí centrum na nové pozici v provozu."
            className="about__img"
          />
        </figure>

        <div className="about__col reveal">
          <p className="eyebrow">O nás · od roku na trase</p>
          <h2 id="about-title" className="h2">
            Přesun, který sedne na&nbsp;milimetr
          </h2>
          <p className="about__lead">
            Jsme jeden z předních dodavatelů průmyslových instalací, relokací a
            energo rozvodů. Bez ohledu na velikost projektu odvádíme práci v
            nejvyšší kvalitě — pro automobilový, strojírenský, farmaceutický,
            potravinářský i hutní průmysl po celé Evropské unii.
          </p>

          <dl className="specs">
            <div className="spec">
              <dt>Certifikace</dt>
              <dd>ISO 9001 · 14001 · OHSAS 18001</dd>
            </div>
            <div className="spec">
              <dt>Působnost</dt>
              <dd>celá EU, výjimky pro svátky i víkendy</dd>
            </div>
            <div className="spec">
              <dt>Standard</dt>
              <dd>vysoký režim BOZP na každé zakázce</dd>
            </div>
            <div className="spec">
              <dt>Základna</dt>
              <dd>Liberec — dojezd do celé střední Evropy</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
