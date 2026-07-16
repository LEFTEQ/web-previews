import { ModeSwap } from "./motion";

const services = [
  {
    tag: "chladí i topí",
    mode: "both",
    name: "Klimatizace",
    body:
      "Úprava vzduchu přesně tam, kde ho potřebujete. V létě chladí, na jaře a na podzim, kdy jsou venku ještě nízké teploty, umí ten samý stroj i vytápět. Jedno zařízení, dva režimy.",
  },
  {
    tag: "topí",
    mode: "heat",
    name: "Tepelná čerpadla",
    body:
      "Moderní vytápění rodinného domu, chalupy, kanceláří i hal. Ve spojení s fotovoltaikou míříte k soběstačnosti — a na pořízení lze čerpat dotace z programu Zelená úsporám.",
  },
  {
    tag: "větrá",
    mode: "air",
    name: "Vzduchotechnika a rekuperace",
    body:
      "Komplexní výměna vzduchu v prostoru — ohřev, chlazení, zvlhčení i čištění. Rekuperace vrací teplo zpět dovnitř, takže větráte a zbytečně netopíte do ulice.",
  },
  {
    tag: "pečuje",
    mode: "care",
    name: "Servis a revize",
    body:
      "Pravidelný servis prodlužuje životnost zařízení a předchází poruchám. Povinnou revizi těsnosti chladicího okruhu vám provedeme na počkání a s razítkem.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="mark" href="#" aria-label="AMS klima — úvod">
          <span className="mark__ams">AMS</span>
          <span className="mark__klima">klima</span>
          <span className="mark__flow" aria-hidden="true" />
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#servis">Servis</a>
          <a href="#firma">O nás</a>
        </nav>
        <a className="call call--top" href="tel:+420604672117">
          <span className="call__ico" aria-hidden="true">☎</span>
          <span className="call__num">604 672 117</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero__stream" aria-hidden="true" />
        <div className="hero__inner">
          <p className="eyebrow">Klimatizace · Ostrava-Třebovice · od roku 1998</p>
          <h1 className="hero__h" id="hero-h">
            <span className="hero__part">AMS klima</span>{" "}
            <ModeSwap />{" "}
            <span className="hero__part">Ostravu už&nbsp;25&nbsp;let</span>
          </h1>
          <p className="hero__lead">
            Projekt, dodávka, montáž i servis pod jednou střechou. Jeden systém,
            který v horkém létě chladí a v přechodném počasí topí — navrhneme ho
            přesně na váš prostor.
          </p>
          <div className="hero__cta">
            <a className="call call--big" href="tel:+420604672117">
              Zavolat: 604 672 117
            </a>
            <a className="ghost" href="mailto:info@amsklima.cz">
              Napsat na info@amsklima.cz
            </a>
          </div>
        </div>
      </section>

      <div className="airflow airflow--top" aria-hidden="true" />

      <section className="band" id="sluzby" aria-labelledby="sluzby-h">
        <div className="band__head">
          <p className="eyebrow eyebrow--dark">Co děláme se vzduchem</p>
          <h2 className="band__h" id="sluzby-h">
            Čtyři služby, jeden cíl: vzduch, který vám vyhovuje.
          </h2>
        </div>
        <ul className="grid">
          {services.map((s) => (
            <li className="card" key={s.name}>
              <span className={`mtag mtag--${s.mode}`}>{s.tag}</span>
              <h3 className="card__h">{s.name}</h3>
              <p className="card__b">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="airflow airflow--bottom" aria-hidden="true" />

      <section className="band band--firma" id="firma" aria-labelledby="firma-h">
        <div className="firma">
          <div className="firma__lead">
            <p className="eyebrow">O firmě</p>
            <h2 className="band__h" id="firma-h">
              Přes 25 let u ostravských klimatizací — od návrhu po poslední revizi.
            </h2>
            <p className="firma__p">
              AMS klima s.r.o. navazuje na více než pětadvacetileté zkušenosti
              v klimatizační technice. Řešíme celé dílo: projekční nabídku,
              dodávku, realizaci i předání zákazníkovi. A pak zůstáváme —
              záruční i pozáruční servis a údržbu bereme jako součást práce,
              ne jako přílohu.
            </p>
          </div>
          <dl className="facts" id="servis">
            <div className="fact">
              <dt>Zkušenost</dt>
              <dd>25+ let v oboru klimatizací</dd>
            </div>
            <div className="fact">
              <dt>Kde nás najdete</dt>
              <dd>Provozní 5492/3, 722&nbsp;00 Ostrava-Třebovice</dd>
            </div>
            <div className="fact">
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420604672117">+420 604 672 117</a>
              </dd>
            </div>
            <div className="fact">
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:info@amsklima.cz">info@amsklima.cz</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
