import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      reg: "01",
      name: "Grafika & litografie",
      body: "Grafické návrhy, tvorba vizuálního stylu, skenování a příprava fotografií. Data připravíme přesně pro tiskový stroj, na kterém pojedou.",
      items: ["Vizuální styl", "DTP a sazba", "Skenování foto", "Předtisková příprava"],
    },
    {
      reg: "02",
      name: "Ofsetový a digitální tisk",
      body: "Prospekty, letáky, vizitky, pozvánky i plakáty. Malé série z digitálu, velké náklady z ofsetu — vždy podle toho, co dává smysl.",
      items: ["Vizitky a pozvánky", "Letáky a prospekty", "Plakáty", "Brožury"],
    },
    {
      reg: "03",
      name: "Velkoplošný tisk",
      body: "Plakáty, billboardy, bannery, samolepky i roll-upy. Formáty, které je vidět přes ulici.",
      items: ["Billboardy", "Bannery", "Roll-upy", "Samolepky"],
    },
    {
      reg: "04",
      name: "3D reklama a předměty",
      body: "Psací a kancelářské potřeby, textil, reklamní předměty. Potisk, pískování, gravírování laserem, tampotisk i sítotisk.",
      items: ["Potisk textilu", "Gravírování laserem", "Pískování", "Tampotisk"],
    },
  ];

  const machines = [
    {
      name: "Snášecí linka Theisen & Bonitz VP 320",
      body: "Snášení archů pro vazbu V1 se šitím, skládání pro vazbu V2, snášení a šití kalendářů i bloků V3. Vazbu tak zvládneme celou u nás.",
    },
    {
      name: "Laminátor KOMFI DELTA",
      body: "Laminujeme zakázky až do formátu B2. Matné i lesklé povrchy, které chrání tisk a dodají mu hloubku.",
    },
    {
      name: "Skládací stroj MBO KTL72",
      body: "Přesné strojní skládání do zvětšeného formátu B1. Rychle, bez zlomů na špatném místě.",
    },
  ];

  return (
    <main className="art">
      <header className="art-nav">
        <a className="art-mark" href="#uvod" aria-label="Artron Design, úvod">
          <span className="art-mark__a">artron</span>
          <span className="art-mark__b">design</span>
          <span className="art-mark__reg">Brno · knihárna &amp; tisk</span>
        </a>
        <nav className="art-links" aria-label="Hlavní navigace">
          <a href="#sluzby">Produkty a služby</a>
          <a href="#dilna">Naše dílna</a>
          <a className="art-call" href="tel:+420607510394">Zavolat 607 510 394</a>
        </nav>
      </header>

      <section className="art-hero" id="uvod">
        <div className="art-hero__img">
          <img
            src="/hero.webp"
            alt="Tiskové archy vycházející z ofsetového stroje ve studiu Artron Design"
            width={1600}
            height={1000}
          />
        </div>
        <div className="art-hero__panel">
          <p className="art-eyebrow">Grafické studio &amp; tiskárna · Brno-sever</p>
          <h1 className="art-hero__title">
            Od návrhu<br />
            přes tisk<br />
            <span className="art-hero__accent">až po vazbu.</span>
          </h1>
          <p className="art-hero__lead">
            Vizitka, plakát nebo tisíc svázaných kalendářů — u nás projde celou
            cestou pod jednou střechou. Grafiku, tisk i knihárnu máme v jedné dílně
            na Soběšické.
          </p>
          <div className="art-hero__actions">
            <a className="art-btn" href="tel:+420607510394">
              Zavolat 607 510 394
            </a>
            <a className="art-btn art-btn--ghost" href="#sluzby">
              Co tiskneme
            </a>
          </div>
        </div>
        <ul className="art-strip" aria-label="Naše řemesla">
          {[
            "Digitální tisk",
            "Ofsetový tisk",
            "Knihárna",
            "Velkoplošný tisk",
            "Tampotisk",
            "Sítotisk",
            "Termotisk",
            "Pískování",
            "Gravírování laserem",
          ].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="art-services" id="sluzby">
        <div className="art-services__head">
          <p className="art-eyebrow">Produkty a služby</p>
          <h2 className="art-h2">Čtyři provozy, jedna zakázka</h2>
          <p className="art-services__note">
            Nemusíte obíhat tři firmy. Grafiku, tisk i dokončení řešíme na místě,
            takže data neputují mezi dodavateli a termín drží.
          </p>
        </div>
        <ol className="art-grid">
          {services.map((s) => (
            <li className="art-card" key={s.reg}>
              <span className="art-card__reg" aria-hidden="true">
                {s.reg}
              </span>
              <h3 className="art-card__name">{s.name}</h3>
              <p className="art-card__body">{s.body}</p>
              <ul className="art-card__items">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="art-dilna" id="dilna">
        <div className="art-dilna__intro">
          <p className="art-eyebrow art-eyebrow--light">Naše dílna</p>
          <h2 className="art-h2 art-h2--light">
            Vazbu si nekupujeme.<br />Sešijeme ji sami.
          </h2>
          <p className="art-dilna__lead">
            Do knihárny na Soběšické postupně přibývají stroje, které dřív musely
            dělat cizí provozy. Dnes snášíme, šijeme, skládáme i laminujeme u nás —
            proto můžeme slíbit termín a taky ho dodržet.
          </p>
          <p className="art-dilna__reg">
            Sídlo: Vackova 1653/90 · Provozovna: Soběšická 821/151, Brno
          </p>
        </div>
        <div className="art-dilna__media">
          <figure className="art-figure">
            <img
              src="/section-1.webp"
              alt="Snášecí a šicí linka v knihárně Artron Design při vazbě V1"
              width={1200}
              height={900}
            />
            <figcaption>Snášecí linka Theisen &amp; Bonitz — vazba V1 se šitím</figcaption>
          </figure>
          <figure className="art-figure art-figure--tall">
            <img
              src="/section-2.webp"
              alt="Laminovaný tiskový arch ve formátu B2 z laminátoru KOMFI DELTA"
              width={1000}
              height={1200}
            />
            <figcaption>Laminace až do formátu B2</figcaption>
          </figure>
        </div>
        <ol className="art-machines">
          {machines.map((m, idx) => (
            <li className="art-machine" key={m.name} style={{ "--i": idx } as CSSProperties}>
              <h3 className="art-machine__name">{m.name}</h3>
              <p className="art-machine__body">{m.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
