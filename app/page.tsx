import type { CSSProperties } from "react";

const brands = ["Bosch", "Siemens", "Gaggenau", "Neff", "Zelmer"];

const services = [
  {
    code: "E01",
    title: "Trouby a varné desky",
    lead: "Nehřeje, hází chybový kód, nejdou dotyky?",
    body: "Vyměníme topné těleso, termostat i řídicí desku indukce. Diagnostiku uděláme na místě, originální díly Bosch a Siemens máme skladem.",
  },
  {
    code: "E02",
    title: "Pračky a sušičky",
    lead: "Netočí bubnem, teče, hlásí F-chybu?",
    body: "Ložiska, čerpadlo, ovládací modul i tlumiče. Sušičky s tepelným čerpadlem vyčistíme a znovu naladíme, ať zase suší za pár korun.",
  },
  {
    code: "E03",
    title: "Myčky nádobí",
    lead: "Nenapouští, nesuší, zůstává voda ve vaně?",
    body: "Vyměníme napouštěcí ventil, oběhové čerpadlo i ostřikovací ramena. Vestavné myčky Neff a Siemens servisujeme přímo v kuchyňské lince.",
  },
  {
    code: "E04",
    title: "Chladničky a mrazáky",
    lead: "Nechladí, namrzá, bručí kompresor?",
    body: "Doplníme chladivo, vyměníme kompresor nebo NoFrost ventilátor. Vestavné chlazení Gaggenau přeměříme a vrátíme do provozu.",
  },
];

const steps = [
  { n: "1", label: "Nahlásíte závadu", text: "Zavoláte na 602 709 146 nebo napíšete, co spotřebič dělá. Řekneme odhad ceny hned do telefonu." },
  { n: "2", label: "Přijedeme s díly", text: "Domluvíme termín po Ostravě a okolí. Technik veze diagnostiku i běžné náhradní díly s sebou." },
  { n: "3", label: "Opraveno", text: "Většinu závad vyřešíme na jednu návštěvu. Na práci i díly dostanete záruku a papírový doklad." },
];

export default function Page() {
  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#" aria-label="D.S.O. domácí spotřebiče Ostrava, úvod">
          <span className="wordmark__mono">D<i>.</i>S<i>.</i>O<i>.</i></span>
          <span className="wordmark__sub">domácí spotřebiče · Ostrava</span>
        </a>
        <a className="nav__phone" href="tel:+420602709146">
          <span className="nav__phoneLabel">Servisní linka</span>
          <span className="nav__phoneNum">602&nbsp;709&nbsp;146</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero__panel">
          <p className="eyebrow">Autorizovaný servis · Žerotínova 3, Ostrava</p>
          <h1 className="hero__title">
            Když spotřebič<br />
            <span className="hero__accent">hlásí chybu,</span><br />
            přijedeme s dílem.
          </h1>
          <p className="hero__lead">
            Opravujeme trouby, pračky, myčky a chladničky Bosch, Siemens, Gaggenau,
            Neff a Zelmer. Diagnostika na místě, originální díly skladem, záruka na práci.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420602709146">Zavolat servis</a>
            <a className="btn btn--ghost" href="#nahlasit">Nahlásit opravu</a>
          </div>
          <ul className="hero__brands" aria-label="Servisované značky">
            {brands.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="hero__media">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Technik D.S.O. při opravě domácího spotřebiče v Ostravě"
            width={960}
            height={1200}
          />
          <div className="hero__chip" role="note">
            <span className="hero__chipDot" aria-hidden="true" />
            Ostrava a okolí do 24 hodin
          </div>
        </div>
      </section>

      <section className="services" id="nahlasit" aria-labelledby="services-h">
        <div className="section__head">
          <p className="eyebrow">Co spravujeme</p>
          <h2 id="services-h" className="section__title">
            Řekněte nám chybový kód. Zbytek je naše práce.
          </h2>
          <p className="section__intro">
            Displeje spotřebičů mluví ve zkratkách — E15, F21, blikající kontrolka.
            Podle chyby už v telefonu poznáme, co vezeme za díl.
          </p>
        </div>
        <ul className="cards">
          {services.map((s) => (
            <li className="card" key={s.code}>
              <span className="card__code" aria-hidden="true">{s.code}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__lead">{s.lead}</p>
              <p className="card__body">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <div className="trust__media">
          <img
            className="trust__img"
            src="/section-1.webp"
            alt="Dílna a náhradní díly domácích spotřebičů D.S.O. Ostrava"
            width={900}
            height={700}
          />
          <img
            className="trust__img trust__img--second"
            src="/section-2.webp"
            alt="Detail opravy spotřebiče značky Bosch"
            width={900}
            height={700}
          />
        </div>
        <div className="trust__text">
          <p className="eyebrow">Proč právě my</p>
          <h2 id="trust-h" className="section__title">
            Autorizovaný servis, ne náhodný „opravář".
          </h2>
          <p className="trust__lead">
            D.S.O. – domácí spotřebiče Ostrava je autorizovaný servis a prodejce
            značek Bosch, Siemens, Gaggenau a Zelmer. Pracujeme podle postupů výrobce,
            takže záruka na spotřebiči zůstává v platnosti.
          </p>

          <ol className="steps">
            {steps.map((st) => (
              <li className="step" key={st.n}>
                <span className="step__n" aria-hidden="true">{st.n}</span>
                <div>
                  <h3 className="step__label">{st.label}</h3>
                  <p className="step__text">{st.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <dl className="facts">
            <div className="fact">
              <dt>Kde</dt>
              <dd>Žerotínova 1155/3, 702&nbsp;00 Ostrava</dd>
            </div>
            <div className="fact">
              <dt>Značky</dt>
              <dd>Bosch · Siemens · Gaggenau · Neff · Zelmer</dd>
            </div>
            <div className="fact">
              <dt>Díly</dt>
              <dd>Originální, běžné kusy skladem</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
