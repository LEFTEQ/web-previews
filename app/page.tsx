import type { CSSProperties } from "react";

const brands = [
  "DeLonghi",
  "Jura",
  "Saeco",
  "Philips",
  "Krups",
  "Bosch",
  "Siemens",
  "AEG",
  "Nivona",
  "Melitta",
];

const udrzba = [
  "Odvápnění (dekalcifikace) chemickým procesem",
  "Čištění difuzoru od kávové sedliny a oleje",
  "Vyčištění vnitřního prostoru kávovaru",
  "Čištění mlecích kamenů a kontrola kávomlýnku",
  "Nastavení hrubosti mletí zrnkové kávy",
  "Čištění parní trysky a mlékovky",
  "Sanitace a promazání spařovací jednotky",
  "Promazání mechanických částí",
  "Výměna těsnicích O-kroužků",
  "Kontrola tlaku a těsnosti vodní soustavy",
  "Nastavení dávkovače kávy",
  "Kontrola a regenerace vodního filtru",
  "Závěrečné odzkoušení stroje",
];

const sluzby = [
  {
    step: "Přijetí",
    title: "Diagnostika a lokalizace závady",
    price: "od 600 Kč bez DPH",
    note: "Při následné opravě diagnostiku neúčtujeme.",
    body: "Kávovar převezmeme na Palackého třídě 108, rozebereme spařovací cestu a najdeme, proč netlačí, kape nebo nemele tak, jak má.",
  },
  {
    step: "Údržba",
    title: "Roční servisní prohlídka",
    price: "1 200 – 2 400 Kč bez DPH",
    note: "Cena podle druhu kávovaru.",
    body: "Kompletní odvápnění, vyčištění a seřízení — třináct úkonů, po kterých espresso zase chutná jako první den.",
  },
  {
    step: "Oprava",
    title: "Pozáruční servis všech značek",
    price: "dle rozsahu",
    note: "Autorizovaný servis NIVONA.",
    body: "Automatické espresso kávovary DeLonghi, Jura, Saeco, Bosch, Siemens a další. Diagnostika i výměna dílů na jednom místě.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="Kávovary Burian — úvod">
          <span className="wordmark__cup" aria-hidden="true">
            <span className="wordmark__steam" />
          </span>
          <span className="wordmark__text">
            Kávovary <em>Burian</em>
          </span>
        </a>
        <span className="top__meta">Brno · Palackého třída 108</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Servis kávovarů · Brno · od roku 2009
          </p>
          <h1 id="hero-title" className="hero__title">
            Vaše espresso <span className="hero__accent">zase poteče</span> tak, jak má.
          </h1>
          <p className="hero__lead">
            Rozebereme spařovací jednotku, odvápníme okruh a seřídíme mletí.
            Autorizovaný servis Nivona a pozáruční opravy všech značek —
            rychle, poctivě a s vůní čerstvé kávy na prodejně.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420000000000">
              Objednat servis
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co s kávovarem uděláme
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Na trhu</dt>
              <dd>od 2009</dd>
            </div>
            <div>
              <dt>Doporučená údržba</dt>
              <dd>1× ročně</dd>
            </div>
            <div>
              <dt>Značky</dt>
              <dd>všechny automaty</dd>
            </div>
          </dl>
        </div>
        <figure className="hero__media">
          <img
            src="/hero.webp"
            alt="Rozebraný automatický kávovar na servisním stole v dílně Kávovary Burian"
            className="hero__img"
            width={880}
            height={1040}
          />
          <figcaption className="hero__badge">
            <span className="hero__badge-k">NIVONA</span>
            <span className="hero__badge-t">autorizovaný servis</span>
          </figcaption>
        </figure>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__row">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="marquee__item">
              {b}
              <span className="marquee__dot" />
            </span>
          ))}
        </div>
      </div>

      <section id="sluzby" className="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Tři cesty, jak vám pomůžeme
          </p>
          <h2 id="sluzby-title" className="section-title">
            Od diagnostiky po dokonalé crema.
          </h2>
        </div>

        <div className="cards">
          {sluzby.map((s, i) => (
            <article className="card" key={s.title}>
              <div className="card__idx">
                <span className="card__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="card__step">{s.step}</span>
              </div>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__body">{s.body}</p>
              <p className="card__price">{s.price}</p>
              <p className="card__note">{s.note}</p>
            </article>
          ))}
        </div>

        <div className="checklist">
          <div className="checklist__media">
            <img
              src="/section-1.webp"
              alt="Detail čištěné spařovací jednotky kávovaru během roční údržby"
              width={720}
              height={560}
            />
          </div>
          <div className="checklist__body">
            <h3 className="checklist__title">
              Co obsahuje roční údržba kávovaru
            </h3>
            <p className="checklist__lead">
              Třináct úkonů, které vrátí chuť espressu, cappuccinu i latté.
              Každý výrobce doporučuje prohlídku alespoň jednou ročně — my ji
              uděláme do posledního O-kroužku.
            </p>
            <ol className="steps">
              {udrzba.map((u, i) => (
                <li key={u} className="steps__item">
                  <span className="steps__no">{String(i + 1).padStart(2, "0")}</span>
                  <span className="steps__label">{u}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="about" aria-labelledby="about-title">
        <figure className="about__media">
          <img
            src="/section-2.webp"
            alt="Prodejna Kávovary Burian s čerstvě praženou zrnkovou kávou na Palackého třídě v Brně"
            width={720}
            height={860}
          />
        </figure>
        <div className="about__copy">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            O nás · Palackého třída 108, Brno
          </p>
          <h2 id="about-title" className="section-title">
            Kávovary rozumíme zevnitř. Kávě zvenčí.
          </h2>
          <p className="about__text">
            Od roku 2009 opravujeme automatické kávovary v Brně i na Slovensku.
            Na Palackého třídě máme prodejnu s kvalitní čerstvě praženou
            zrnkovou kávou i servisní dílnu — přineste stroj, nebo si u nás
            vyberte nový či repasovaný.
          </p>
          <ul className="about__list">
            <li>
              <strong>Autorizovaný servis Nivona</strong>
              <span>a pozáruční opravy všech značek automatů</span>
            </li>
            <li>
              <strong>Prodej a pronájem kávovarů</strong>
              <span>nové i pečlivě repasované stroje</span>
            </li>
            <li>
              <strong>Čerstvě pražená zrnková káva</strong>
              <span>ke stroji, který ji umí ocenit</span>
            </li>
          </ul>
          <p className="about__note">
            Do vaší kávy koukáme rádi — do peněženky ne. Diagnostiku při opravě
            neúčtujeme.
          </p>
        </div>
      </section>
    </main>
  );
}
