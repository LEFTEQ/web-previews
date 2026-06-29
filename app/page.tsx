import type { ReactNode } from "react";

const grades = [
  {
    code: "G1",
    title: "Byty a rodinné domy",
    desc: "Základní ochrana proti běžnému vloupání. Pohybové detektory, magnety na dveře a okna, ovládání z mobilu.",
    points: ["PIR detektory pohybu", "Detekce otevření oken a dveří", "Siréna a chytré upozornění"],
  },
  {
    code: "G2",
    title: "Provozovny a kanceláře",
    desc: "Vyšší odolnost pro místa s majetkem a provozem. Kamerové ověření poplachu, kódy pro zaměstnance.",
    points: ["NFC klávesnice pro personál", "Kamerové ověření poplachu", "Napojení na pult ochrany"],
  },
  {
    code: "G3",
    title: "Rizikové objekty",
    desc: "Nekompromisní ochrana tam, kde to vyžadují pojišťovny i zákon — zlatnictví, sklady léčiv, serverovny, galerie.",
    points: ["Ústředna JA-108K, certifikace Grade 3", "Ochrana proti sabotáži a rušení", "LAN a LTE komunikátor"],
  },
];

const trust = [
  ["18 let", "montujeme zabezpečení v Praze a okolí"],
  ["Grade 1–3", "instalace ve všech stupních zabezpečení"],
  ["JABLOTRON", "certifikovaný montážní partner"],
];

export default function Page(): ReactNode {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="AXL electronics — domů">
          <span className="wordmark__led" aria-hidden="true" />
          AXL<span className="wordmark__thin">&#8202;electronics</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#stupne">Co montujeme</a>
          <a href="#onas">O firmě</a>
          <a className="nav__call" href="tel:+420123456789">Zavolat technikovi</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Nainstalovaná ústředna zabezpečovacího systému s klávesnicí AXL electronics"
            className="hero__img"
          />
          <div className="panel" role="status" aria-label="Stav systému">
            <div className="panel__row">
              <span className="panel__led" aria-hidden="true" />
              <span className="panel__state">ST&#344;E&#381;ENO</span>
            </div>
            <div className="panel__zones">
              <span>z&oacute;na 01 &middot; vchod</span>
              <span>z&oacute;na 02 &middot; p&#345;&iacute;zem&iacute;</span>
              <span>z&oacute;na 03 &middot; sklad</span>
            </div>
          </div>
        </div>

        <div className="hero__copy">
          <p className="eyebrow">Mont&aacute;&#382; zabezpe&#269;en&iacute; &middot; Praha</p>
          <h1 className="hero__title">
            Va&scaron;e objekty hl&iacute;d&aacute;me ve t&#345;ech
            <span className="hero__hl"> stupn&iacute;ch zabezpe&#269;en&iacute;.</span>
          </h1>
          <p className="hero__lead">
            Navrhneme, namontujeme a o&#382;iv&iacute;me alarm na m&iacute;ru &mdash; od bytu po
            zlatnictv&iacute;. Pracujeme s technikou JABLOTRON a syst&eacute;m p&#345;ed&aacute;me
            v&#382;dy se&#345;&iacute;zen&yacute; a otestovan&yacute;.
          </p>
          <div className="hero__cta">
            <a className="btn" href="tel:+420123456789">Objednat prohl&iacute;dku objektu</a>
            <a className="btn btn--ghost" href="#stupne">Jak vyb&iacute;rat stupe&#328;</a>
          </div>
        </div>
      </section>

      <section className="grades" id="stupne">
        <div className="section-head">
          <p className="eyebrow">Co montujeme</p>
          <h2>T&#345;i stupn&#283; ochrany, jeden tým techniků</h2>
          <p className="section-sub">
            &Scaron;t&iacute;tky G1&ndash;G3 jsou skute&#269;n&eacute; evropsk&eacute; stupn&#283;
            zabezpe&#269;en&iacute;. &#268;&iacute;m vy&scaron;&scaron;&iacute; riziko, t&iacute;m
            odoln&#283;j&scaron;&iacute; technika &mdash; poradíme, který stupeň dává smysl právě vám.
          </p>
        </div>
        <div className="grade-grid">
          {grades.map((g) => (
            <article className={`grade grade--${g.code.toLowerCase()}`} key={g.code}>
              <div className="grade__badge" aria-hidden="true">{g.code}</div>
              <h3>{g.title}</h3>
              <p className="grade__desc">{g.desc}</p>
              <ul className="grade__list">
                {g.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="grades__img">
          <img
            src="/section-1.webp"
            alt="Detail bezdr&aacute;tov&eacute;ho PIR detektoru pohybu a magnetick&eacute;ho sníma&#269;e"
          />
        </div>
      </section>

      <section className="about" id="onas">
        <div className="about__media">
          <img
            src="/section-2.webp"
            alt="Technik AXL electronics p&#345;i mont&aacute;&#382;i zabezpe&#269;ovac&iacute;ho syst&eacute;mu"
          />
        </div>
        <div className="about__copy">
          <p className="eyebrow">O firm&#283;</p>
          <h2>Pra&#382;sk&aacute; firma, kter&aacute; alarmy i montuje, i servisuje</h2>
          <p>
            Nejsme jen e-shop s krabicemi. Za&#269;&iacute;n&aacute;me prohl&iacute;dkou
            objektu, navrhneme rozm&iacute;st&#283;n&iacute; &#269;idel a po mont&aacute;&#382;i v&aacute;m
            syst&eacute;m vysv&#283;tl&iacute;me v&#269;etn&#283; ovl&aacute;d&aacute;n&iacute;
            z telefonu. Star&aacute;me se i o roz&scaron;&iacute;&#345;en&iacute; a pravideln&eacute;
            revize st&aacute;vaj&iacute;c&iacute;ch instalac&iacute;.
          </p>
          <dl className="facts">
            {trust.map(([k, v]) => (
              <div className="fact" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="about__note">
            P&#367;sob&iacute;me po cel&eacute; Praze a St&#345;edo&#269;esk&eacute;m kraji.
            Volejte <a href="tel:+420123456789">+420&nbsp;123&nbsp;456&nbsp;789</a> nebo
            pi&scaron;te na <a href="mailto:info@axlelectronics.cz">info@axlelectronics.cz</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
