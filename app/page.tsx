import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      hloubka: "0,8 m",
      nazev: "Výkopy pro kabelové trasy",
      popis:
        "Rýhy pro silové i sdělovací vedení do pískového lože, s výstražnou fólií a hutněným zásypem po vrstvách. Ruční dokopávky u stávajících sítí.",
    },
    {
      hloubka: "1,2 m",
      nazev: "Přípojky nízkého napětí",
      popis:
        "Zemní práce pro nové kabelové přípojky k objektům — od odkopu u pilíře RIS až po protlak pod chodníkem, ať se neroztrhá dlažba.",
    },
    {
      hloubka: "1,0 m",
      nazev: "Základy pro veřejné osvětlení",
      popis:
        "Výkopy patek a chrániček pro stožáry VO, uložení zemnicího pásku FeZn a propojení do soustavy. Terén vracíme do původního stavu.",
    },
    {
      hloubka: "0,6 m",
      nazev: "Uzemnění a zemnicí pásky",
      popis:
        "Uložení zemničů, pásků a tyčí do výkopu, měření zemního odporu a revizní zpráva. Vše zdokumentované pro kolaudaci.",
    },
    {
      hloubka: "1,5 m",
      nazev: "Protlaky pod komunikacemi",
      popis:
        "Řízené protlaky a chráničky pod silnicí bez rozkopání vozovky. Ideální tam, kde by překop znamenal uzavírku a papírování navíc.",
    },
    {
      hloubka: "—",
      nazev: "Začištění a předání terénu",
      popis:
        "Zpětný zásyp, hutnění, obnova povrchu a úklid. Odjíždíme, až když je po výkopu poznat míň, než jsme čekali my sami.",
    },
  ];

  return (
    <main className="vb">
      <header className="vb-top">
        <a className="vb-mark" href="#" aria-label="Vobořil — Elektromontáže, Plzeň">
          <span className="vb-mark-name">Vobořil</span>
          <span className="vb-mark-sub">Elektromontáže · zemní práce · Plzeň</span>
        </a>
        <a className="vb-call" href="tel:+420377533975">377&nbsp;533&nbsp;975</a>
      </header>

      <section className="vb-hero">
        <div className="vb-hero-media">
          <img
            src="/hero.webp"
            alt="Otevřená kabelová rýha s uloženým vedením v pískovém loži při zemních pracích"
            className="vb-hero-img"
          />
          <div className="vb-hero-strata" aria-hidden="true">
            <span style={{ "--d": "0,3 m" } as CSSProperties}>terén</span>
            <span style={{ "--d": "0,8 m" } as CSSProperties}>fólie</span>
            <span style={{ "--d": "1,2 m" } as CSSProperties}>lože</span>
          </div>
        </div>

        <div className="vb-hero-text">
          <p className="vb-eyebrow">Zemní práce pro elektro · Plzeň a okolí</p>
          <h1 className="vb-h1">
            Kabel se<br />
            <span className="vb-h1-accent">nepokládá do bláta.</span>
          </h1>
          <p className="vb-lead">
            Kopeme rýhy, přípojky a základy pro osvětlení tak, aby vedení leželo
            v pořádku, terén se vrátil do původního stavu a revize prošla napoprvé.
            Bez rozkopané ulice na měsíc.
          </p>
          <div className="vb-cta-row">
            <a className="vb-btn" href="tel:+420377533975">Zavolat na stavbu</a>
            <a className="vb-btn vb-btn-ghost" href="#sluzby">Co kopeme</a>
          </div>
        </div>
      </section>

      <section className="vb-section" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="vb-section-head">
          <p className="vb-eyebrow">Nabídka</p>
          <h2 className="vb-h2" id="sluzby-nadpis">
            Podle toho, jak hluboko se musí
          </h2>
          <p className="vb-section-note">
            U zemních prací rozhoduje hloubka výkopu — od ní se odvíjí materiál,
            technika i cena. Proto u každé služby vidíte, kam se obvykle kope.
          </p>
        </div>

        <ul className="vb-grid">
          {sluzby.map((s) => (
            <li className="vb-card" key={s.nazev}>
              <span className="vb-depth" aria-hidden="true">{s.hloubka}</span>
              <span className="vb-depth-label">hloubka výkopu</span>
              <h3 className="vb-card-title">{s.nazev}</h3>
              <p className="vb-card-text">{s.popis}</p>
            </li>
          ))}
        </ul>

        <img
          src="/section-1.webp"
          alt="Uložené kabelové vedení v otevřeném výkopu připravené k zásypu"
          className="vb-band-img"
        />
      </section>

      <section className="vb-section vb-about" aria-labelledby="o-nas-nadpis">
        <div className="vb-about-grid">
          <div className="vb-about-text">
            <p className="vb-eyebrow">Kdo kope</p>
            <h2 className="vb-h2" id="o-nas-nadpis">
              Elektro i výkop od jedné party
            </h2>
            <p className="vb-about-lead">
              Vobořil — Elektromontáže dělá v Plzni elektro od rozvodů po revize.
              A protože kabel musí nejdřív někam přijít, kopeme si trasy sami.
              Nemusíte shánět bagristu zvlášť a hlídat, kde končí jedna firma
              a začíná druhá.
            </p>

            <dl className="vb-facts">
              <div className="vb-fact">
                <dt>Sídlo</dt>
                <dd>Bělohorská 614/15, 301&nbsp;00 Plzeň</dd>
              </div>
              <div className="vb-fact">
                <dt>Kam jezdíme</dt>
                <dd>Plzeň a okolí do zhruba 40&nbsp;km</dd>
              </div>
              <div className="vb-fact">
                <dt>Součástí zakázky</dt>
                <dd>Revizní zpráva a předání terénu v pořádku</dd>
              </div>
            </dl>

            <blockquote className="vb-quote">
              „Přijedou, vykopou, uloží a zahrnou — a po týdnu na zahradě
              nepoznáte, kudy vedení jde. Přesně tak to má být.“
              <cite>— zákazník, rodinný dům v Liticích</cite>
            </blockquote>

            <a className="vb-btn" href="mailto:voboril@voboril-elektro.cz">
              Napsat na e-mail
            </a>
          </div>

          <figure className="vb-about-media">
            <img
              src="/section-2.webp"
              alt="Práce na kabelové trase a zemních pracích v terénu"
              className="vb-about-img"
            />
            <figcaption>Trasa uložená a připravená na zpětný zásyp.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
