import type { CSSProperties } from "react";

export default function Page() {
  const obory = [
    {
      part: "I.",
      name: "Klavír a klávesové nástroje",
      desc: "Sólová hra, komorní souhra i klavírní doprovod. Naši studenti vozí ceny z Mezinárodní klavírní soutěže, kterou škola sama pořádá.",
    },
    {
      part: "II.",
      name: "Dechové a bicí nástroje",
      desc: "Trubka, klarinet, hoboj, fagot i tuba. Dechová sekce stojí za orchestrem, bigbandem Banda di Feste a legendární Pardubickou muzikou.",
    },
    {
      part: "III.",
      name: "Smyčce, kytara a akordeon",
      desc: "Housle, viola, violoncello, kontrabas, klasická kytara a akordeon. Odsud pocházejí Duo Viento i Duo Fragile — držitelé mezinárodních prvenství.",
    },
    {
      part: "IV.",
      name: "Zpěv a hudebně dramatické umění",
      desc: "Klasický i muzikálový zpěv, operní příprava a jevištní praxe ve školních produkcích jako „Zachraňme operu!“ a Dvořákova Rusalka.",
    },
  ];

  const uspechy = [
    {
      misto: "1. cena",
      text: "Duo Fragile — Mezinárodní soutěž Brno",
    },
    {
      misto: "Absolutní vítěz",
      text: "Soutěž konzervatoří ČR — hned dvě prvenství",
    },
    {
      misto: "Itálie",
      text: "Duo Viento na prestižní akordeonové soutěži",
    },
    {
      misto: "Karlovy Vary",
      text: "Pěvci na soutěži Antonína Dvořáka",
    },
  ];

  return (
    <main className="stage">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Konzervatoř Pardubice — domů">
          <span className="wordmark__k">Konzervatoř</span>
          <span className="wordmark__p">Pardubice</span>
          <span className="wordmark__est">zal. 1978 · hudba &amp; jeviště</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#studium">Obory</a>
          <a href="#zkousky">Talentové zkoušky</a>
          <a href="#uspechy">Úspěchy</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__grid">
          <div className="hero__lede">
            <p className="eyebrow">Střední hudební škola · Pardubice</p>
            <h1 className="hero__title">
              <span className="hero__line">Šest let</span>
              <span className="hero__line hero__line--em">na jednom</span>
              <span className="hero__line">nástroji.</span>
            </h1>
            <p className="hero__note">
              Konzervatoř Pardubice připravuje muzikanty od talentové zkoušky
              po absolventský koncert s filharmonií. Sedm oborů, symfonický
              orchestr, bigband i operní jeviště — a učitelé, kteří s vámi
              sedí u nástroje každý týden.
            </p>
            <div className="hero__cta">
              <a className="btn btn--solid" href="#zkousky">Přihlásit se na talentovky</a>
              <a className="btn btn--ghost" href="#studium">Prohlédnout obory</a>
            </div>
          </div>
          <figure className="hero__figure">
            <img
              className="hero__img"
              src="/hero.webp"
              alt="Studenti Konzervatoře Pardubice při zkoušce symfonického orchestru"
              width={880}
              height={1080}
            />
            <figcaption className="hero__cap">
              Symfonický orchestr KP · sezona 2025/26
            </figcaption>
          </figure>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="marquee__row">
            <span>Klavír</span><span className="dot">·</span>
            <span>Housle</span><span className="dot">·</span>
            <span>Trubka</span><span className="dot">·</span>
            <span>Akordeon</span><span className="dot">·</span>
            <span>Zpěv</span><span className="dot">·</span>
            <span>Kytara</span><span className="dot">·</span>
            <span>Fagot</span><span className="dot">·</span>
            <span>Klavír</span><span className="dot">·</span>
            <span>Housle</span><span className="dot">·</span>
            <span>Trubka</span><span className="dot">·</span>
            <span>Akordeon</span><span className="dot">·</span>
            <span>Zpěv</span><span className="dot">·</span>
            <span>Kytara</span><span className="dot">·</span>
            <span>Fagot</span><span className="dot">·</span>
          </div>
        </div>
      </section>

      <section id="studium" className="program">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Program studia</p>
          <h2 className="section-title">Vyberte si oddělení. Zbytek vám ukážeme na dni otevřených dveří.</h2>
        </div>
        <ol className="program__list">
          {obory.map((o) => (
            <li className="movement" key={o.part}>
              <span className="movement__num" aria-hidden="true">{o.part}</span>
              <div className="movement__body">
                <h3 className="movement__name">{o.name}</h3>
                <p className="movement__desc">{o.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="program__figure">
          <img
            src="/section-1.webp"
            alt="Vyučující při individuální hodině nástroje na Konzervatoři Pardubice"
            width={1200}
            height={720}
            loading="lazy"
          />
          <figcaption>Individuální hodiny — jeden student, jeden pedagog, jeden nástroj.</figcaption>
        </figure>
      </section>

      <section id="uspechy" className="trust">
        <div className="trust__grid">
          <figure className="trust__figure">
            <img
              src="/section-2.webp"
              alt="Koncertní vystoupení studentů Konzervatoře Pardubice"
              width={1000}
              height={1200}
              loading="lazy"
            />
          </figure>
          <div className="trust__body">
            <p className="eyebrow eyebrow--dark">Z poslední sezony</p>
            <h2 className="section-title">
              Naši studenti nehrají do prázdna. Vozí ceny domů.
            </h2>
            <p className="trust__lede">
              Kytaristky, akordeonisté, pěvci i klavírní dua — jen za jeden
              školní rok posbírali ocenění z Brna, Ostravy, Karlových Varů
              i z Itálie. A doma pořádáme vlastní Mezinárodní klavírní soutěž.
            </p>
            <ul className="laurels" id="zkousky">
              {uspechy.map((u, i) => (
                <li className="laurel" key={i}>
                  <span className="laurel__medal">{u.misto}</span>
                  <span className="laurel__text">{u.text}</span>
                </li>
              ))}
            </ul>
            <div className="admit">
              <p className="admit__title">Talentové zkoušky pro rok 2026/27</p>
              <p className="admit__text">
                První kolo je vyhlášené. Přihlaste se, přijďte si zahrát před
                komisí a my vám řekneme, na čem stavět dál.
              </p>
              <a className="btn btn--solid" href="#zkousky">Chci na talentovky</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
