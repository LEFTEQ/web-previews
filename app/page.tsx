import React from "react";

export default function Page() {
  const strata = [
    { depth: "0–2 m", name: "Ornice a hlína", note: "svrchní půda, kořeny, orná vrstva" },
    { depth: "2–12 m", name: "Zvětralé horniny", note: "jíl, písek, štěrk — první přítoky" },
    { depth: "12–40 m", name: "Puklinový kolektor", note: "trhliny v žule a rule, hlavní voda" },
    { depth: "40–80 m", name: "Hlubinná zásoba", note: "stálá vydatnost i v suchých letech" },
  ];

  const sluzby = [
    {
      c: "01",
      t: "Vrtané studny na klíč",
      d: "Od průzkumu pozemku po zapaženou studnu s čerpadlem. Vrtáme průměrem 152–220 mm do hloubky, kde je voda — obvykle 20 až 80 metrů na Příbramsku.",
    },
    {
      c: "02",
      t: "Vyhledávání vody",
      d: "Hydrogeolog určí nejlepší místo pro vrt dřív, než přijede souprava. Nevrtáme naslepo — šetříme vám peníze i zbytečné metry.",
    },
    {
      c: "03",
      t: "Projekty a posudky",
      d: "Hydrogeologický posudek, projekt studny a kompletní podklady pro stavební úřad. Vyřídíme povolení od začátku až po kolaudaci.",
    },
    {
      c: "04",
      t: "Vrtné a geologické práce",
      d: "Inženýrská geologie, sondy pro zakládání staveb, tepelná čerpadla země–voda. Vlastní technika i vlastní hydrogeolog na každé zakázce.",
    },
  ];

  return (
    <main className="te">
      <header className="te-nav" aria-label="Hlavní">
        <a className="te-logo" href="#" aria-label="TERRAexpert, domů">
          <span className="te-logo-mark" aria-hidden="true">
            <span className="te-drill" />
          </span>
          <span className="te-logo-word">
            TERRA<span className="te-logo-thin">expert</span>
          </span>
        </a>
        <span className="te-nav-loc">Příbram · hydrogeologie od&nbsp;1998</span>
      </header>

      <section className="te-hero">
        <div className="te-hero-media">
          <img
            src="/hero.webp"
            alt="Vrtná souprava při vrtání studny na pozemku"
            className="te-hero-img"
          />
          <div className="te-hero-scrim" aria-hidden="true" />
        </div>

        <div className="te-hero-inner">
          <p className="te-eyebrow">Vrtané studny · Příbram a Středočeský kraj</p>
          <h1 className="te-hero-title">
            Najdeme vodu tam,<br />
            kde ji <em>opravdu</em> máte.
          </h1>
          <p className="te-hero-sub">
            Vřítané studny na klíč — od hydrogeologického posudku přes vrt a
            zapažení až po kolaudaci. Všechno pod dohledem vlastního hydrogeologa,
            všechno od jedné firmy.
          </p>
          <div className="te-hero-cta">
            <a className="te-btn" href="#poptavka">Chci vrtat studnu</a>
            <a className="te-btn te-btn-ghost" href="#sluzby">Co děláme</a>
          </div>
        </div>

        <aside className="te-strata" aria-label="Čemu se vrtá na Příbramsku">
          <p className="te-strata-cap">Řez podložím — tudy jde vrták</p>
          <ol className="te-strata-list">
            {strata.map((s, i) => (
              <li key={s.depth} className="te-strata-row" style={{ ["--i" as any]: i }}>
                <span className="te-strata-depth">{s.depth}</span>
                <span className="te-strata-body">
                  <span className="te-strata-name">{s.name}</span>
                  <span className="te-strata-note">{s.note}</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="te-strata-foot">Voda bývá v puklinách žuly. Proto ji hledáme dřív, než vrtáme.</p>
        </aside>
      </section>

      <section className="te-sec te-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="te-sec-head">
          <p className="te-eyebrow te-eyebrow-dark">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="te-sec-title">
            Kompletní služba „A–Z“. Vy řešíte jen kde,<br className="te-br" /> my zbytek.
          </h2>
        </div>

        <div className="te-services-grid">
          <ul className="te-cards">
            {sluzby.map((s) => (
              <li key={s.c} className="te-card">
                <span className="te-card-num" aria-hidden="true">{s.c}</span>
                <h3 className="te-card-title">{s.t}</h3>
                <p className="te-card-text">{s.d}</p>
              </li>
            ))}
          </ul>
          <figure className="te-services-fig">
            <img
              src="/section-1.webp"
              alt="Detail vrtného nářadí a vytahované horniny při vrtání"
              className="te-fig-img"
            />
            <figcaption className="te-fig-cap">
              Každý metr vám ukážeme — z vrtu vyjde horninový profil, ne jen díra.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="te-sec te-trust" id="o-nas" aria-labelledby="onas-h">
        <div className="te-trust-grid">
          <figure className="te-trust-fig">
            <img
              src="/section-2.webp"
              alt="Hotová studna se zákrytem na pozemku zákazníka"
              className="te-fig-img"
            />
          </figure>
          <div className="te-trust-body">
            <p className="te-eyebrow te-eyebrow-dark">Proč zrovna my</p>
            <h2 id="onas-h" className="te-sec-title">
              Jeden hydrogeolog vás provází od první prohlídky<br className="te-br" /> až po kolaudaci.
            </h2>
            <p className="te-trust-lead">
              Nejsme zprostředkovatel. Máme vlastní vrtnou soupravu i vlastního
              hydrogeologa s dlouholetou praxí — takže za kvalitu ručíme my, ne
              subdodavatel, který už příště nezvedne telefon.
            </p>

            <dl className="te-facts">
              <div className="te-fact">
                <dt>Působíme z</dt>
                <dd>Příbram, Žižkova 708 — Středočeský kraj a okolí</dd>
              </div>
              <div className="te-fact">
                <dt>Postaráme se o</dt>
                <dd>Povolení, projekt, vrt, čerpací zkoušku i kolaudaci</dd>
              </div>
              <div className="te-fact">
                <dt>Přístup</dt>
                <dd>Nevrtáme naslepo — nejdřív posudek, pak souprava</dd>
              </div>
            </dl>

            <blockquote className="te-quote">
              „Přijeli, na místě naměřili, kam vrtat, a druhý den už byla voda.
              Všechna papírování na úřad vyřídili za nás.“
              <cite>— rodinný dům, Dubno u Příbramě</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
