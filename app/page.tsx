import { LoadItem, Rise, Seam, Stamp } from "./motion";

const sluzby = [
  {
    t: "Nemovitosti a věcná práva",
    d: "Koupě, prodej i stavba bez nejistoty. Ohlídáme katastr, smlouvy i vaše práva k pozemku, domu nebo bytu.",
  },
  {
    t: "Obchodní společnosti a korporace",
    d: "Nastavíme vnitřní pravidla firmy i jednání navenek — od založení přes valné hromady po spory mezi společníky.",
  },
  {
    t: "Duševní vlastnictví, IT a software",
    d: "Autorská práva, licence a know-how. Vymezíme váš prostor na internetu a bráníme ho, když do něj někdo zasáhne.",
  },
  {
    t: "Pracovní právo",
    d: "Férová pravidla mezi zaměstnancem a zaměstnavatelem — smlouvy, ukončení i řešení sporů bez zbytečné eskalace.",
  },
  {
    t: "Smlouvy na míru",
    d: "Pevný právní základ vztahu, který opravdu drží. Píšeme smlouvy, kterým rozumíte a v nichž se poznáte.",
  },
  {
    t: "Spory a zastoupení u soudu",
    d: "Zastoupíme vás před soudem i rozhodcem, hájíme vaše zájmy a hledáme i mimosoudní cestu k dohodě.",
  },
];

const fakta = [
  { k: "bezmála 10 let", v: "praxe v poradenství firmám i lidem" },
  { k: "stovky klientů", v: "podnikatelů, firem i majitelů nemovitostí" },
  { k: "Olomouc a online", v: "pracujeme tam, kde nás nejvíc potřebujete" },
];

export default function Page() {
  return (
    <main>
      <header className="band band--hero">
        <div className="band-inner hero">
          <LoadItem delay={0.05}>
            <p className="eyebrow eyebrow--light">Advokátní kancelář · Olomouc</p>
          </LoadItem>
          <LoadItem delay={0.18}>
            <h1 className="wordmark">
              <span className="wordmark__kicker">Advokátní kancelář</span>
              <span className="wordmark__row">
                <span className="wordmark__name">Šmarda</span>
                <Stamp>
                  <span className="stamp" aria-hidden="true" />
                </Stamp>
              </span>
            </h1>
          </LoadItem>
          <LoadItem delay={0.42}>
            <p className="hero__lead">
              Spojujeme <strong>právo a ekonomii</strong>, abychom vám dávali řešení, která
              dávají smysl — a v nichž sedí i čísla. Advokát pro podnikatele, majitele
              nemovitostí i tvůrce. V Olomouci, online i tam, kde nás zrovna potřebujete.
            </p>
          </LoadItem>
          <LoadItem delay={0.58}>
            <div className="hero__actions">
              <a className="btn-primary" href="#sluzby">Chci právní službu</a>
              <a className="btn-ghost" href="tel:+420777111222">Zavolat 777 111 222</a>
            </div>
          </LoadItem>
        </div>
      </header>

      <Seam mode="load" delay={0.82} />

      <section className="band band--services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="band-inner">
          <Rise>
            <div className="section-head">
              <p className="eyebrow eyebrow--red">Nabídka</p>
              <h2 className="section-title" id="sluzby-nadpis">Právní služby</h2>
              <p className="section-note">
                Poradenství podle vašich skutečných potřeb — s důrazem na dlouhodobou
                spolupráci a řešení, která obstojí i za pár let.
              </p>
            </div>
          </Rise>

          <div className="cards">
            {sluzby.map((s) => (
              <Rise key={s.t} className="card">
                <span className="card__mark" aria-hidden="true" />
                <h3 className="card__title">{s.t}</h3>
                <p className="card__desc">{s.d}</p>
                <a className="card__link" href="#sluzby">Více o službě<span aria-hidden="true"> →</span></a>
              </Rise>
            ))}
            <Rise className="card card--prompt">
              <h3 className="card__title">Nenašli jste svou situaci?</h3>
              <p className="card__desc">
                Napište nám, o co jde. Ozveme se a řekneme na rovinu, jestli a jak
                dokážeme pomoct.
              </p>
              <a className="card__link card__link--light" href="mailto:info@example.cz">
                info@example.cz<span aria-hidden="true"> →</span>
              </a>
            </Rise>
          </div>
        </div>
      </section>

      <Seam mode="scroll" />

      <section className="band band--trust" aria-labelledby="trust-nadpis">
        <div className="band-inner trust">
          <Rise className="trust__intro">
            <p className="eyebrow eyebrow--sand">Proč Šmarda</p>
            <h2 className="section-title section-title--light" id="trust-nadpis">
              Právo i ekonomie
            </h2>
            <p className="trust__text">
              Nalézáme řešení, která mají skutečně smysl. Spojením právního a
              ekonomického pohledu vám pomáháme dosáhnout cíle efektivně — obohatíme
              vaše rozhodování o odborný náhled a včas pojmenujeme budoucí rizika. Ne
              každý advokát vám ukáže obojí. My ano.
            </p>
          </Rise>

          <Rise className="facts">
            {fakta.map((f) => (
              <div className="fact" key={f.k}>
                <span className="fact__mark" aria-hidden="true" />
                <p className="fact__k">{f.k}</p>
                <p className="fact__v">{f.v}</p>
              </div>
            ))}
          </Rise>

          <Rise>
            <figure className="quote">
              <blockquote>
                „Spolupráce s panem Šmardou je na profesionální úrovni a s kvalitou
                odvedené práce jsem velmi spokojen. Oceňuji propojení právní a
                ekonomické problematiky — to není běžné a pro naše potřeby je to velmi
                výhodné. Jeho služby mohu jménem spokojeného klienta doporučit.“
              </blockquote>
              <figcaption>
                <span className="quote__name">David Pokorný</span>
                <span className="quote__role">jednatel a společník, OLC Systems s.r.o.</span>
              </figcaption>
            </figure>
          </Rise>
        </div>
      </section>
    </main>
  );
}
