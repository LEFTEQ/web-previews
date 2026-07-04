import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Brněnská Šárka — sdílená auta v Brně">
          <span className="wordmark__mark" aria-hidden="true">Š</span>
          <span className="wordmark__text">
            <b>Šárka</b>
            <i>sdílená auta / Brno</i>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#jak">Jak jezdit</a>
          <a href="#vozy">Vozy &amp; ceny</a>
          <a href="#duvera">Proč nám věřit</a>
        </nav>
        <a className="topcall" href="tel:+420731786247">
          <span className="topcall__label">Asistenční linka</span>
          <span className="topcall__num">731 786 247</span>
        </a>
      </header>

      <section className="hero" id="hero">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="kick">Carsharing v Brně</p>
            <h1 className="hero__title">
              Auto stojí <span className="strike">92&nbsp;%</span> času.
              <br />
              To vaše ať <em>jezdí</em>.
            </h1>
            <p className="hero__lede">
              Vezmete si nový vůz, odemknete ho mobilem a odjedete. Servis,
              pojištění, dálniční známku, palivo i parkování v modrých zónách
              platíme my. Vy platíte jen za minuty, které opravdu jedete.
            </p>
            <div className="hero__cta">
              <a className="btn btn--solid" href="#vozy">Půjčit si vůz</a>
              <a className="btn btn--ghost" href="#jak">Jak to chodí</a>
            </div>
            <dl className="hero__facts">
              <div>
                <dt>1 sdílené auto</dt>
                <dd>nahradí až 15 soukromých</dd>
              </div>
              <div>
                <dt>od 79 Kč / hodinu</dt>
                <dd>palivo i pojištění v ceně</dd>
              </div>
              <div>
                <dt>Brno, modré zóny</dt>
                <dd>parkujete zdarma</dd>
              </div>
            </dl>
          </div>
          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Vůz Brněnské Šárky připravený k vyzvednutí v ulicích Brna"
              className="hero__img"
              width={720}
              height={720}
            />
            <figcaption className="hero__tag">
              <span>Ford Focus · právě volný</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="steps" id="jak" aria-labelledby="jak-nadpis">
        <div className="section-head">
          <p className="kick">Jak to chodí</p>
          <h2 id="jak-nadpis">Tři kroky, pak už jen jízda</h2>
        </div>
        <ol className="steps__list">
          {kroky.map((k, i) => (
            <li className="step" key={k.title} style={{ "--i": i } as CSSProperties}>
              <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="step__title">{k.title}</h3>
              <p className="step__text">{k.text}</p>
            </li>
          ))}
        </ol>
        <p className="steps__loop">rezervuj · jezdi · vrať · &nbsp;a tak pořád dokola</p>
      </section>

      <section className="fleet" id="vozy" aria-labelledby="vozy-nadpis">
        <div className="section-head">
          <p className="kick">Vozový park</p>
          <h2 id="vozy-nadpis">Nová auta, cena bez překvapení</h2>
          <p className="section-lede">
            Vždycky vůz s asistenčními systémy a parkovací kamerou. Cena je
            konečná — palivo, pojištění, dálniční známka i parkování v Brně už
            jsou uvnitř.
          </p>
        </div>

        <div className="fleet__row">
          <figure className="fleet__photo">
            <img
              src="/section-1.webp"
              alt="Nový vůz z vozového parku Brněnské Šárky"
              width={640}
              height={480}
            />
          </figure>
          <div className="fleet__cards">
            {vozy.map((v) => (
              <article className="car" key={v.name}>
                <header className="car__head">
                  <h3>{v.name}</h3>
                  <p className="car__use">{v.use}</p>
                </header>
                <p className="car__price">
                  <span className="car__hour">{v.hour}</span>
                  <span className="car__day">{v.day}</span>
                </p>
                <p className="car__km">{v.km}</p>
              </article>
            ))}
            <p className="fleet__note">
              Blokace před jízdou: pevných 2 000 Kč plus částka podle délky
              rezervace. Vše se po vrácení vozu odblokuje.
            </p>
          </div>
        </div>
      </section>

      <section className="trust" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="trust__grid">
          <figure className="trust__photo">
            <img
              src="/section-2.webp"
              alt="Ulice Brna, kde Brněnská Šárka provozuje sdílená auta"
              width={640}
              height={520}
            />
          </figure>
          <div className="trust__copy">
            <p className="kick">Proč nám věřit</p>
            <h2 id="duvera-nadpis">Brněnská firma, žádné skryté položky</h2>
            <p className="trust__lede">
              Jsme z Brna a pro Brno. Když do roka najezdíte míň než 10 000
              kilometrů, sdílené auto se vám vyplatí víc než vlastní — hlavně
              pokud bydlíte v modrých zónách a platíte za parkovací oprávnění.
            </p>
            <ul className="trust__list">
              {duvody.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <a className="btn btn--solid" href="tel:+420731786247">
              Zavolat na 731 786 247
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const kroky = [
  {
    title: "Rezervujte v mobilu",
    text: "Vyberete si volný vůz poblíž a zamluvíte ho na hodiny, které potřebujete. V noci, o víkendu i o svátku.",
  },
  {
    title: "Odemkněte a jeďte",
    text: "Auto si sami otevřete přes aplikaci. Žádné klíče na výdejně, žádné čekání u přepážky.",
  },
  {
    title: "Vraťte a máte klid",
    text: "Zaparkujete v modré zóně, ukončíte jízdu a platíte jen za odjeté minuty a kilometry. Servis řešíme my.",
  },
];

const vozy = [
  {
    name: "Ford Focus",
    use: "Do města i na výlet",
    hour: "79 Kč / hodinu",
    day: "max. 790 Kč / den",
    km: "od 7,90 Kč / km · palivo v ceně",
  },
  {
    name: "Ford Tourneo",
    use: "Když potřebujete víc místa",
    hour: "139 Kč / hodinu",
    day: "max. 1 390 Kč / den",
    km: "od 7,90 Kč / km · palivo v ceně",
  },
];

const duvody = [
  "Servis, přezouvání i STK řešíme za vás.",
  "Pojištění a dálniční známka jsou v každé jízdě.",
  "V modrých zónách Brna parkujete bez placení.",
  "Vždy nový vůz splňující přísné emisní limity.",
];
