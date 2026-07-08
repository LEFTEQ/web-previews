import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "01",
      nazev: "Strojní sádrové omítky",
      popis:
        "Hladká sádrová stěna nanesená strojem — rovná, bez prasklin, připravená rovnou k malování. Ušetříte štukování i čas.",
      detail: "Maxit · Cemix · Knauf",
    },
    {
      kod: "02",
      nazev: "Vápenocementové omítky",
      popis:
        "Odolný jádrový podklad do vlhčích prostor i na fasády. Nanášíme strojně, s přesnou tloušťkou a rovinatostí.",
      detail: "Cemix · Maxit",
    },
    {
      kod: "03",
      nazev: "Montáž sádrokartonu",
      popis:
        "Příčky, předstěny, akustické a minerální podhledy. Certifikovaná montáž všech konstrukcí Rigips a Knauf.",
      detail: "Rigips · Knauf",
    },
    {
      kod: "04",
      nazev: "Lité anhydritové podlahy",
      popis:
        "Samonivelační podlaha ideální pro podlahové topení. Rychle uzavře prostor a připraví ho pro finální krytinu.",
      detail: "Cemix · Maxit",
    },
  ];

  const duvody = [
    {
      cislo: "60",
      jednotka: "měsíců",
      text: "záruka na každou dokončenou práci — za kvalitou stojíme písemně.",
    },
    {
      cislo: "3",
      jednotka: "kraje",
      text: "působíme v Královéhradeckém, Pardubickém kraji i v Praze.",
    },
    {
      cislo: "1",
      jednotka: "firma",
      text: "komplexní interiér z jedné ruky — konec svádění viny mezi řemesly.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Interiéry Dominik, domovská stránka">
          <span className="brand__mark" aria-hidden="true">
            <span className="brand__trowel" />
          </span>
          <span className="brand__word">
            <strong>Interiéry</strong>
            <em>Dominik</em>
          </span>
        </a>
        <a className="topbar__tel" href="tel:+420776391975">
          +420 776 391 975
        </a>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Čerstvě nanesená hladká strojní sádrová omítka na stěně rozestavěného interiéru"
            width={1600}
            height={1100}
          />
          <span className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__body">
          <p className="hero__eyebrow">Strojní omítky &amp; suchá výstavba · Hradec Králové</p>
          <h1 className="hero__title">
            <span className="hero__line">Rovná stěna</span>
            <span className="hero__line hero__line--accent">bez jediné praskliny.</span>
          </h1>
          <p className="hero__lede">
            Nanášíme strojní sádrové a vápenocementové omítky, montujeme sádrokarton a
            léváme anhydritové podlahy. Celý váš interiér zvládne jedna certifikovaná parta —
            s hladkým povrchem připraveným rovnou k malování.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420776391975">
              Zavolat na +420 776 391 975
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co nanášíme
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Záruka</dt>
              <dd>60 měsíců</dd>
            </div>
            <div>
              <dt>Materiály</dt>
              <dd>Rigips · Cemix · Knauf</dd>
            </div>
            <div>
              <dt>Pojištění</dt>
              <dd>proti škodám</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="section-head__eyebrow">Nabízené práce</p>
          <h2 className="section-head__title" id="sluzby-nadpis">
            Čtyři vrstvy jednoho hrubého domu
          </h2>
          <p className="section-head__note">
            Od jádra po finální podlahu. Objednáte-li víc řemesel najednou, dostanete slevu za
            větší zakázku — a jistotu, že se dodavatelé nebudou vymlouvat jeden na druhého.
          </p>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card__kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="card__nazev">{s.nazev}</h3>
              <p className="card__popis">{s.popis}</p>
              <p className="card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>

        <figure className="cutfig">
          <img
            src="/section-1.webp"
            alt="Detail strojně nanášené omítky během realizace na stavbě"
            width={1400}
            height={900}
          />
          <figcaption>Reálná realizace v Královéhradeckém kraji</figcaption>
        </figure>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas__grid">
          <div className="onas__text">
            <p className="section-head__eyebrow">Proč Dominik</p>
            <h2 className="section-head__title" id="onas-nadpis">
              Ukázku práce vám nachystáme přímo na stavbě
            </h2>
            <p className="onas__odstavec">
              Máme dlouholeté zkušenosti v Česku i v zahraničí a jsme certifikováni na aplikaci
              strojních omítek i montáž všech sádrokartonových konstrukcí. Se zákazníky vycházíme
              tak dobře, že vám rádi sjednáme prohlídku hotové zakázky přímo na místě — to je
              podle nás nejlepší doporučení.
            </p>
            <p className="onas__odstavec onas__odstavec--muted">
              Sídlíme v Hradci Králové, Kutnohorská 98/17. Pracujeme jen s materiály Rigips,
              Maxit, Cemix a Knauf a jsme pojištěni proti případným škodám.
            </p>

            <dl className="stats">
              {duvody.map((d) => (
                <div className="stats__item" key={d.cislo}>
                  <dt>
                    <span className="stats__num">{d.cislo}</span>
                    <span className="stats__unit">{d.jednotka}</span>
                  </dt>
                  <dd>{d.text}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="onas__media">
            <img
              src="/section-2.webp"
              alt="Dokončený světlý interiér s hladkými omítkami a sádrokartonovým podhledem"
              width={1200}
              height={1500}
            />
            <figcaption className="onas__badge">
              <span>Hledáme omítkáře</span>
              na strojní sádrové omítky — ozvěte se
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
