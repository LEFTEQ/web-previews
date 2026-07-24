import type { CSSProperties } from "react";
import { AiImage } from "./_ui";

const sparks = [
  { left: "8%", delay: "0.10s", tx: "-7px", ty: "-22px" },
  { left: "18%", delay: "0.22s", tx: "5px", ty: "-30px" },
  { left: "27%", delay: "0.31s", tx: "-4px", ty: "-18px" },
  { left: "38%", delay: "0.43s", tx: "8px", ty: "-26px" },
  { left: "49%", delay: "0.55s", tx: "-6px", ty: "-34px" },
  { left: "60%", delay: "0.67s", tx: "6px", ty: "-20px" },
  { left: "71%", delay: "0.79s", tx: "-9px", ty: "-28px" },
  { left: "82%", delay: "0.90s", tx: "4px", ty: "-24px" },
  { left: "92%", delay: "1.00s", tx: "7px", ty: "-16px" },
];

const services = [
  {
    code: "BR",
    title: "Branky a vrata",
    desc: "Křídlová i posuvná, k oplocení i do průjezdu. Doplníme pohon na dálkové ovládání, zvonek a schránku.",
  },
  {
    code: "PL",
    title: "Ploty a oplocení",
    desc: "Od jednoho pole po celý pozemek. Výplně z tahokovu, svařovaných profilů i svislých prutů.",
  },
  {
    code: "ZB",
    title: "Zábradlí a madla",
    desc: "Na schody, balkon i francouzské okno. Drží pevně a splní výškovou normu.",
  },
  {
    code: "MŘ",
    title: "Okenní mříže",
    desc: "Bezpečnostní mříže a rámy do sklepů, oken i výloh. Vyrobíme přesně na míru otvoru.",
  },
  {
    code: "SCH",
    title: "Schodiště a konstrukce",
    desc: "Ocelová schodiště, přístřešky, nosné rámy a atypické svařence podle výkresu i skici.",
  },
  {
    code: "OP",
    title: "Opravy a svařování",
    desc: "Přivaříme, narovnáme, zpevníme. MIG/MAG i TIG — v dílně nebo výjezdem přímo u vás.",
  },
];

const checks = [
  {
    h: "Zaměření zdarma",
    d: "Přijedeme po Liberci a okolí, vše přeměříme na místě a poradíme řešení.",
  },
  {
    h: "Žárový zinek + komaxit",
    d: "Povrch, který v horském počasí pod Ještědem nerezaví ani po letech.",
  },
  {
    h: "Termín, který platí",
    d: "Dohodnutý den montáže dodržíme. Většinu zakázek stihneme před zimou.",
  },
];

const refs = [
  {
    q: "Branku i plot udělali přesně podle skici a stihli to ještě před zimou. Po dvou letech vypadá jako nová.",
    a: "Jana M., Vratislavice nad Nisou",
  },
  {
    q: "Zábradlí na venkovní schody drží jako skála a montáž byla za dopoledne hotová. Domluva bez okolků.",
    a: "Petr K., Liberec-Rochlice",
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="hero__media">
          <AiImage
            src="/hero.webp"
            alt="Rozžhavené jiskry při svařování oceli v dílně Kovo Pařízek"
            className="hero__img"
          />
        </div>
        <div className="hero__scrim" aria-hidden="true" />

        <header className="topbar">
          <a className="wm" href="#top" aria-label="Kovo Pařízek, zámečnictví Liberec">
            <span className="wm__kovo">Kovo</span>
            <span className="wm__dash" aria-hidden="true" />
            <span className="wm__parizek">Pařízek</span>
            <span className="wm__sub">zámečnictví · Liberec</span>
          </a>
          <nav className="nav" aria-label="Hlavní">
            <a href="#sluzby">Služby</a>
            <a href="#dilna">O dílně</a>
          </nav>
        </header>

        <div className="hero__inner" id="top">
          <p className="eyebrow">Zámečnictví pod Ještědem · Liberec</p>
          <h1 className="hero__title">
            Ocel, která<br />
            vydrží desítky zim
          </h1>

          <div className="seambar" aria-hidden="true">
            <div className="seam seam--hero" />
            <div className="sparks">
              {sparks.map((s, i) => (
                <span
                  key={i}
                  className="spark"
                  style={
                    {
                      left: s.left,
                      animationDelay: s.delay,
                      "--tx": s.tx,
                      "--ty": s.ty,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          </div>

          <p className="hero__lead">
            Kreslíme, řežeme, svařujeme a montujeme kovové konstrukce na míru.
            Od jedné branky po celé oplocení pozemku — vyrobené v naší liberecké
            dílně a postavené na roky.
          </p>

          <div className="hero__actions">
            <a className="btn btn--forge" href="tel:—">Zavolat —</a>
            <p className="bins">branky · ploty · zábradlí · mříže</p>
          </div>
        </div>
      </section>

      <div className="seam seam--rule" aria-hidden="true" />

      <section className="section" id="sluzby">
        <div className="wrap">
          <p className="eyebrow eyebrow--warm">Nabídka dílny</p>
          <h2 className="h2">Co vám vykováme</h2>
          <p className="lede">
            Každou zakázku vedeme od prvního zaměření po poslední vrstvu barvy.
            Vyberte, co potřebujete — zbytek doladíme spolu na místě.
          </p>

          <ul className="bins-grid">
            {services.map((s) => (
              <li className="bin" key={s.code}>
                <span className="bin__code" aria-hidden="true">{s.code}</span>
                <h3 className="bin__title">{s.title}</h3>
                <p className="bin__desc">{s.desc}</p>
              </li>
            ))}
          </ul>

          <figure className="band">
            <AiImage
              src="/section-1.webp"
              alt="Svařování ocelové konstrukce v dílně Kovo Pařízek"
              className="band__img"
            />
            <figcaption className="band__cap">
              Vlastní dílna — svařování MIG/MAG i TIG, žárový zinek a komaxit
              v odstínu RAL dle přání.
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="seam seam--rule" aria-hidden="true" />

      <section className="section section--about" id="dilna">
        <div className="wrap about">
          <div className="about__media">
            <AiImage
              src="/section-2.webp"
              alt="Hotová kovová branka a zábradlí od Kovo Pařízek"
              className="about__img"
            />
          </div>

          <div className="about__body">
            <p className="eyebrow eyebrow--warm">O dílně</p>
            <h2 className="h2">Malá dílna pod Ještědem</h2>
            <p className="lede">
              Kovo Pařízek je rodinné zámečnictví v Liberci. Kreslíme, řežeme,
              svařujeme a montujeme sami — mluvíte přímo s tím, kdo vaši zakázku
              vyrábí. Žádná mezičlánková montážní firma.
            </p>

            <ul className="checks">
              {checks.map((c) => (
                <li className="check" key={c.h}>
                  <span className="check__mark" aria-hidden="true" />
                  <div>
                    <h3 className="check__h">{c.h}</h3>
                    <p className="check__d">{c.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="stats">
              <li className="stat">
                <span className="stat__num">18</span>
                <span className="stat__lab">let u svářečky</span>
              </li>
              <li className="stat">
                <span className="stat__num">600+</span>
                <span className="stat__lab">hotových zakázek</span>
              </li>
              <li className="stat">
                <span className="stat__num">RAL</span>
                <span className="stat__lab">odstín dle přání</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="wrap">
          <div className="refs">
            {refs.map((r) => (
              <figure className="ref" key={r.a}>
                <blockquote className="ref__q">{r.q}</blockquote>
                <figcaption className="ref__a">{r.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
