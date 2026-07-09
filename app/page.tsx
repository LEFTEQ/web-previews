import React from "react";

export default function Page() {
  const kroky = [
    {
      cislo: "01",
      stroj: "Lindhaus RX",
      nadpis: "Suché předvysátí",
      text: "Dvoumotorový vysavač s klepačem a pětistupňovou filtrací vytáhne jemný prach z hloubky vláken. To, co běžný vysavač nechá být.",
    },
    {
      cislo: "02",
      stroj: "CRB agitace",
      nadpis: "Rozčesání vláken",
      text: "Kartáčový stroj mechanicky uvolní usazené nečistoty, redukuje vyšlapané cesty a napřímí vlas. Koberec začne dýchat.",
    },
    {
      cislo: "03",
      stroj: "Rotovac extrakce",
      nadpis: "Vysokotlaká extrakce",
      text: "Vysokotlaké extrakční čištění vypláchne rozpuštěnou špínu ven. U komerčních ploch přidáváme enkapsulaci — koberec je hned suchý a čistý.",
    },
  ];

  const duvody = [
    {
      h: "Stroje, ne jen voda",
      t: "ORBOT, Rotovac a CRB koberec skutečně hloubkově vyčistí — nezvlhčí ho jen na povrchu, jako to dělá Kärcher u běžných úklidových firem.",
    },
    {
      h: "Šetrné k vláknům",
      t: "Kusové i perské koberce, choulostivou viskózu i dlouhý vlas ošetříme tak, aby se vlákno nepoškodilo. Když čistit nelze, řekneme to předem.",
    },
    {
      h: "Ve dvou a rychle",
      t: "Pracujeme v páru, běžný pokoj máme hotový za necelou hodinu. Dochvilní, čistotní — po sobě neuklízíte.",
    },
    {
      h: "Domácnosti i firmy",
      t: "Byty, kanceláře, komerční prostory i státní instituce. Velkoplošné čištění zvládneme ve stejné kvalitě jako obývák.",
    },
  ];

  const reference = [
    {
      jmeno: "Renata J.",
      kdy: "Praha",
      text: "Nejlepší firma v Praze na čištění koberců za rozumnou cenu. Použila jsem je už třikrát a předtím vyzkoušela několik jiných — i staré koberce prokoukly. Se stroji Kärcher se to vůbec nedá srovnat.",
    },
    {
      jmeno: "Sandra V.",
      kdy: "Čalounění",
      text: "Komunikace i služby na jedničku. Čalounění je jako nové a krásně voní. Rádi využijeme znovu.",
    },
    {
      jmeno: "Petra F.",
      kdy: "Viskóza",
      text: "Poctivě mi vysvětlili, že koberec ze 100% viskózy nelze čistit mokrou cestou a nechtěli mě zbytečně nechat platit. Takový přístup se cení.",
    },
  ];

  return (
    <main className="wm">
      <header className="wm-top">
        <a className="wm-mark" href="#" aria-label="Wismont, čištění koberců Praha">
          <span className="wm-mark__name">Wismont</span>
          <span className="wm-mark__sub">čištění koberců · Praha</span>
        </a>
        <a className="wm-call" href="tel:+420603276715">+420&nbsp;603&nbsp;276&nbsp;715</a>
      </header>

      <section className="wm-hero">
        <div className="wm-hero__media">
          <img
            src="/hero.webp"
            alt="Hloubkové čištění koberce profesionálním extrakčním strojem Wismont"
            className="wm-hero__img"
          />
        </div>
        <div className="wm-hero__text">
          <p className="wm-eyebrow">Hloubkové čištění, ne povrchní vlhčení</p>
          <h1 className="wm-hero__title">
            Vytáhneme špínu,
            <br />
            <span className="wm-hero__accent">o&nbsp;které nevíte.</span>
          </h1>
          <p className="wm-lead">
            Z pouhých 20&nbsp;m² koberce dostaneme ven množství mechanických nečistot,
            které vás překvapí. Ne zvlhčit povrch — skutečně vyčistit každé vlákno,
            odstranit usazené nečistoty a vrátit koberci původní vzhled. Praha,
            domácnosti i&nbsp;firmy.
          </p>
          <div className="wm-hero__cta">
            <a className="wm-btn" href="tel:+420603276715">Zavolat a domluvit termín</a>
            <a className="wm-btn wm-btn--ghost" href="mailto:info.wismont@gmail.com">Napsat e-mail</a>
          </div>
          <ul className="wm-hero__facts">
            <li><strong>ORBOT · Rotovac · CRB</strong> profesionální stroje</li>
            <li><strong>50 hodnocení</strong> na Google</li>
            <li><strong>Ve dvou</strong>, pokoj do hodiny</li>
          </ul>
        </div>
      </section>

      <section className="wm-proces" aria-labelledby="proces-nadpis">
        <div className="wm-section-head">
          <p className="wm-eyebrow">Jak čistíme</p>
          <h2 id="proces-nadpis" className="wm-h2">
            Tři fáze, tři stroje.<br />Žádná zkratka.
          </h2>
          <p className="wm-section-lead">
            Důkladná příprava je nezbytná — proto koberec nečistíme jednou vodou,
            ale postupem, který na sebe navazuje.
          </p>
        </div>

        <ol className="wm-kroky">
          {kroky.map((k) => (
            <li key={k.cislo} className="wm-krok">
              <span className="wm-krok__cislo">{k.cislo}</span>
              <div className="wm-krok__body">
                <span className="wm-krok__stroj">{k.stroj}</span>
                <h3 className="wm-krok__nadpis">{k.nadpis}</h3>
                <p className="wm-krok__text">{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="wm-figure">
          <img
            src="/section-2.webp"
            alt="Množství mechanických nečistot odstraněné z 20 m² koberce"
            className="wm-figure__img"
          />
          <figcaption className="wm-figure__cap">
            Takové množství mechanických nečistot z pouhých 20&nbsp;m². To, co zůstává
            ve vláknech, dokud nepřijde CRB agitace.
          </figcaption>
        </figure>
      </section>

      <section className="wm-duvera" aria-labelledby="duvera-nadpis">
        <div className="wm-section-head">
          <p className="wm-eyebrow">Proč zrovna my</p>
          <h2 id="duvera-nadpis" className="wm-h2">
            Rozdíl poznáte<br />na první pohled.
          </h2>
        </div>

        <div className="wm-duvera__grid">
          <ul className="wm-duvody">
            {duvody.map((d) => (
              <li key={d.h} className="wm-duvod">
                <h3 className="wm-duvod__h">{d.h}</h3>
                <p className="wm-duvod__t">{d.t}</p>
              </li>
            ))}
          </ul>

          <div className="wm-reference">
            <p className="wm-reference__label">Z 50 hodnocení na Google</p>
            {reference.map((r) => (
              <blockquote key={r.jmeno} className="wm-ref">
                <p className="wm-ref__text">„{r.text}“</p>
                <footer className="wm-ref__foot">
                  <span className="wm-ref__jmeno">{r.jmeno}</span>
                  <span className="wm-ref__kdy">{r.kdy}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
