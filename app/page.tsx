import { AiImage } from "./_ui";

const obory = [
  {
    t: "Nemovitosti a katastr",
    d: "Kupní a darovací smlouvy, věcná břemena, advokátní úschova kupní ceny a hlídání vkladu do katastru až do zápisu.",
  },
  {
    t: "Smlouvy a závazky",
    d: "Sepsání i revize smluv, vymáhání pohledávek, náhrada škody. Řeknu vám dopředu, kde je ve smlouvě riziko.",
  },
  {
    t: "Rodinné právo",
    d: "Rozvod, péče o děti a výživné, vypořádání společného jmění manželů. Klidně a bez zbytečného vyhrocování.",
  },
  {
    t: "Obchodní právo",
    d: "Založení a změny s.r.o., valné hromady, smlouvy mezi společníky i řešení sporů uvnitř firmy.",
  },
  {
    t: "Pracovní právo",
    d: "Výpovědi a odstupné, neplatné rozvázání poměru, spory ze zaměstnání — na straně zaměstnance i zaměstnavatele.",
  },
  {
    t: "Trestní obhajoba",
    d: "Obhajoba od prvního výslechu, účast u úkonů policie, zastoupení poškozených v adhezním řízení.",
  },
];

const duvera = [
  "Jednáte přímo s advokátem, ne s asistentkou v přijímací kanceláři.",
  "U běžných úkonů dostanete pevnou cenu předem, ne otevřený účet.",
  "Advokátní úschova a mlčenlivost ze zákona — vaše věci zůstávají mezi námi.",
  "Kancelář pár kroků od Moravského náměstí, v dosahu soudů i katastru.",
];

export default function Page() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="wordmark" href="#hero">
          <span className="wm-sign" aria-hidden="true">§</span>
          <span className="wm-text">
            <span className="wm-name">JURÁŇ</span>
            <span className="wm-sub">advokátní kancelář</span>
          </span>
        </a>
        <span className="topbar-loc">Brno</span>
      </header>

      <section className="band hero" id="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Advokátní kancelář · Brno</p>
            <h1 className="hero-title">
              Právo, které<br />
              drží svislici.
            </h1>
            <p className="lede">
              Sepíšu smlouvu, ohlídám katastr a zastoupím vás u soudu. Bez
              právničtiny, ve které se nikdo nevyzná — od začátku víte, na čem
              jste a co to bude stát.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="tel:—">
                Zavolat
                <span className="btn-note">—</span>
              </a>
              <a className="btn btn-ghost" href="mailto:—">
                Napsat e-mail
              </a>
            </div>
          </div>

          <div className="hero-media">
            <AiImage
              src="/hero.webp"
              alt="Advokátní kancelář JURÁŇ v Brně — funkcionalistický interiér s kamenem a světlem"
              className="hero-img"
            />
          </div>

          <div className="sig" aria-hidden="true">
            <span className="sig-mark">§</span>
          </div>
          <div className="plumb" aria-hidden="true" />
        </div>
      </section>

      <section className="band services">
        <div className="band-inner">
          <div className="sec-head">
            <p className="eyebrow eyebrow-dark">Právní oblasti</p>
            <h2 className="sec-title">
              Šest oblastí, v nichž vás vezmu od prvního dopisu po pravomocný
              výsledek.
            </h2>
          </div>

          <div className="svc-layout">
            <ul className="svc-list">
              {obory.map((o) => (
                <li className="svc-item" key={o.t}>
                  <h3 className="svc-title">{o.t}</h3>
                  <p className="svc-text">{o.d}</p>
                </li>
              ))}
            </ul>
            <div className="svc-media">
              <AiImage
                src="/section-1.webp"
                alt="Podpis smlouvy a spisy v advokátní kanceláři"
                className="svc-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band trust">
        <div className="band-inner trust-grid">
          <div className="trust-media">
            <AiImage
              src="/section-2.webp"
              alt="Detail pracovny advokáta — kámen, dřevo a tlumené světlo"
              className="trust-img"
            />
          </div>
          <div className="trust-copy">
            <p className="eyebrow eyebrow-amber">O kanceláři</p>
            <h2 className="sec-title sec-title-light">
              Diskrétnost, kterou advokát prodává.
            </h2>
            <p className="trust-lede">
              Malá brněnská kancelář, kde má každý případ jednoho odpovědného
              advokáta. Neschovávám se za formuláře — vysvětlím vám možnosti
              lidsky a pak za vámi stojím, dokud věc neskončí.
            </p>
            <ul className="trust-list">
              {duvera.map((d) => (
                <li className="trust-point" key={d}>
                  {d}
                </li>
              ))}
            </ul>
            <dl className="contact">
              <div className="contact-row">
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:—">—</a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:—">—</a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>Kancelář</dt>
                <dd>—</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
