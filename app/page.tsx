import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "INEXSTAV — údržba a čištění fasád, Ostrava",
  description:
    "Zateplená fasáda vydrží desítky let, když se o ni pravidelně staráte. Myjeme, čistíme graffiti a obnovujeme nátěry fasád bytových domů v Ostravě a okolí.",
  openGraph: {
    title: "INEXSTAV — fasády bez plísní, Ostrava",
    description:
      "Čištění, mytí a nátěry zateplených fasád. Prodloužíme životnost fasády vašeho domu a ušetříme náklady na její další údržbu.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Očištěná fasáda bytového domu v Ostravě" }],
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Mytí organických nečistot",
    popis:
      "Zelené a černé mapy řas, plísní a mechů na severních stranách. Šetrně je odstraníme i s kořínky, které barvu drží pod povrchem omítky.",
    stopa: "řasy · plísně · mech",
  },
  {
    kod: "02",
    nazev: "Mytí atmosférických nečistot",
    popis:
      "Prach z dopravy, saze a průmyslový spad z ostravského ovzduší. Zašedlá fasáda se vrátí do původního odstínu bez toho, abyste sahali do rozpočtu na nový nátěr.",
    stopa: "prach · saze · spad",
  },
  {
    kod: "03",
    nazev: "Čištění graffiti",
    popis:
      "Sprejerské tagy z přízemí a soklu. Odstraníme je a povrch ošetříme trvalou ochranou — příští čmáranice půjde smýt jednoduše a beze stop.",
    stopa: "tagy · sokl · ochrana",
  },
  {
    kod: "04",
    nazev: "Nátěry fasád",
    popis:
      "Probarvená omítka se zrnitostí 1,5–2,5 mm ztrácí barvu i soudržnost. Zatmelíme praskliny a spáry a obnovíme nátěr tak, aby držel další roky.",
    stopa: "tmelení · nátěr · ochrana",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="INEXSTAV, domovská stránka">
          <span className="wordmark__in">INEX</span>
          <span className="wordmark__stav">STAV</span>
        </a>
        <a className="topbar__call" href="tel:+420603156379">
          <span className="topbar__callLabel">Zavolat</span>
          <span className="topbar__callNum">+420 603 156 379</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Očištěná fasáda zatepleného bytového domu, polovina po umytí, polovina se zelenými mapami řas"
            width={1600}
            height={1000}
          />
          <div className="hero__gauge" aria-hidden="true">
            <span className="hero__gaugeTop">životnost fasády</span>
            <span className="hero__gaugeBottom">s údržbou</span>
          </div>
        </div>

        <div className="hero__text">
          <p className="eyebrow">Ostrava · údržba zateplených fasád</p>
          <h1 id="hero-title" className="hero__title">
            Fasáda nezestárne za rok.
            <br />
            <em>Zestárne bez péče.</em>
          </h1>
          <p className="hero__lead">
            Odborně provedené zateplení může sloužit desítky let — když se řasy,
            spad a graffiti odstraní dřív, než se zakousnou do omítky. To je celá
            naše práce.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420603156379">
              Zavolat a domluvit prohlídku
            </a>
            <a className="btn btn--ghost" href="mailto:inexstav@inexstav.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow">Co pro fasádu děláme</p>
          <h2 id="services-title" className="section-title">
            Čtyři zásahy, jeden cíl —
            <br /> aby fasáda vydržela.
          </h2>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <div className="card__kod" aria-hidden="true">
                {s.kod}
              </div>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
              <p className="card__stopa">{s.stopa}</p>
            </li>
          ))}
        </ol>

        <figure className="services__figure">
          <img
            className="services__img"
            src="/section-1.webp"
            alt="Detail očištěné probarvené omítky se zrnitou strukturou"
            width={1600}
            height={900}
          />
          <figcaption className="services__cap">
            Zrnitá probarvená omítka drží barvu i pod povrchem. Proto ji před
            nátěrem vždy nejdřív pořádně vyčistíme.
          </figcaption>
        </figure>
      </section>

      <section className="about" aria-labelledby="about-title">
        <figure className="about__figure">
          <img
            className="about__img"
            src="/section-2.webp"
            alt="Panelový bytový dům v Ostravě s částečně obnovenou fasádou"
            width={1200}
            height={1400}
          />
        </figure>

        <div className="about__body">
          <p className="eyebrow">O nás · INEXSTAV s.r.o.</p>
          <h2 id="about-title" className="section-title">
            Fasádu bereme jako věc, o kterou se pečuje — ne kterou se jednou
            postaví a zapomene.
          </h2>
          <p className="about__text">
            Zabýváme se údržbou a ošetřováním fasád zateplených bytových domů.
            Vycházíme z jednoduchého předpokladu: odborně provedené zateplení
            může být při správné údržbě plně funkční a estetické desítky let.
          </p>
          <p className="about__text">
            Sanační práce — čištění, opravy poškození, tmelení prasklin a spár,
            nátěry a trvalá ochrana proti graffiti — děláme proto, aby fasáda
            vydržela a vy jste do dalších let neplatili víc, než musíte.
          </p>

          <dl className="facts">
            <div className="facts__row">
              <dt>Kde nás najdete</dt>
              <dd>Pavlova 3048/40, Ostrava-Jih, Zábřeh</dd>
            </div>
            <div className="facts__row">
              <dt>Odpovídáme na e-mail</dt>
              <dd>do druhého dne</dd>
            </div>
            <div className="facts__row">
              <dt>IČ</dt>
              <dd>04319214</dd>
            </div>
          </dl>

          <div className="about__cta">
            <a className="btn btn--solid" href="tel:+420603156379">
              Zavolat: +420 603 156 379
            </a>
            <a className="btn btn--ghost" href="mailto:inexstav@inexstav.cz">
              inexstav@inexstav.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
