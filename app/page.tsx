import React from "react";

export default function Page() {
  const produkty = [
    {
      cislo: "01",
      nazev: "Sekční garážová vrata",
      popis:
        "Zateplená vrata Hörmann pro rodinné domy i řadovky. Ušetří místo pod stropem, tiše jedou nahoru a zvládnou pražské zimy i letní přehřátí garáže.",
    },
    {
      cislo: "02",
      nazev: "Vjezdové brány a ploty",
      popis:
        "Posuvné i křídlové brány s pohonem, sladěné s plotem a fasádou. Otevřete je z auta jedním tlačítkem, aniž byste vystupovali do deště.",
    },
    {
      cislo: "03",
      nazev: "Pohony a ovladače BiSecur",
      popis:
        "Šifrovaný rádiový systém BiSecur, kterým ovládáte vrata i bránu z jednoho vysílače. Signál se nedá odposlechnout ani zkopírovat.",
    },
    {
      cislo: "04",
      nazev: "Průmyslová vrata a závory",
      popis:
        "Rychloběžná a sekční vrata pro haly, závory a parkovací systémy pro firemní areály. Nasazení, které vydrží tisíce cyklů denně.",
    },
  ];

  const duvody = [
    {
      hlava: "Autorizovaný servis Hörmann",
      text:
        "Nejsme montážní firma, která zmizí po dokončení. Jsme autorizovaný servis Hörmann — na díly i seřízení dosáhneme přímo od výrobce a opravíme i vrata jiných značek.",
    },
    {
      hlava: "Servis 7–19 h, včetně víkendů",
      text:
        "Vrata se zaseknou většinou v tu nejhorší chvíli. Servisujeme každý den v týdnu od sedmi ráno do sedmi večer — o víkendu i ve svátek.",
    },
    {
      hlava: "Praha 6, areál Ergon",
      text:
        "Sídlíme v Papírenské ulici v Praze 6 a jezdíme po celé Praze i blízkém okolí. Přijedeme zaměřit, poradit a nabídnout řešení na míru vašemu vjezdu.",
    },
  ];

  return (
    <main className="ad-page">
      <header className="ad-topbar">
        <a className="ad-wordmark" href="#uvod" aria-label="ADAO Praha — vrata a brány">
          <span className="ad-wordmark__mark" aria-hidden="true">
            <span className="ad-slat" />
            <span className="ad-slat" />
            <span className="ad-slat" />
          </span>
          <span className="ad-wordmark__type">
            ADAO<span className="ad-wordmark__sub">Praha</span>
          </span>
        </a>
        <a className="ad-call" href="tel:+420777302950">
          <span className="ad-call__label">Servis 7–19&nbsp;h</span>
          <span className="ad-call__num">777&nbsp;302&nbsp;950</span>
        </a>
      </header>

      <section className="ad-hero" id="uvod">
        <div className="ad-hero__frame">
          <img
            className="ad-hero__img"
            src="/hero.webp"
            alt="Sekční garážová vrata Hörmann otevřená u pražského rodinného domu"
          />
        </div>
        <div className="ad-hero__panel">
          <p className="ad-eyebrow">Autorizovaný servis Hörmann · Praha 6</p>
          <h1 className="ad-hero__title">
            Vrata, která<br />
            <span className="ad-hero__accent">jedou tiše nahoru</span><br />
            a nezradí v zimě.
          </h1>
          <p className="ad-hero__lead">
            ADAO Praha montuje a servisuje sekční garážová vrata, vjezdové brány
            a pohony po celé Praze. Zaměříme, poradíme a nasadíme řešení, které
            vydrží dekády — ne jen do konce záruky.
          </p>
          <div className="ad-hero__actions">
            <a className="ad-btn ad-btn--solid" href="tel:+420777302950">
              Zavolat 777 302 950
            </a>
            <a className="ad-btn ad-btn--line" href="#produkty">
              Co montujeme
            </a>
          </div>
        </div>
      </section>

      <section className="ad-produkty" id="produkty" aria-labelledby="produkty-h">
        <div className="ad-sec-head">
          <p className="ad-eyebrow">Nabídka</p>
          <h2 className="ad-sec-title" id="produkty-h">
            Od jedné garáže po celý firemní areál
          </h2>
        </div>
        <div className="ad-slabs">
          {produkty.map((p) => (
            <article className="ad-slab" key={p.cislo}>
              <span className="ad-slab__num" aria-hidden="true">
                {p.cislo}
              </span>
              <div className="ad-slab__body">
                <h3 className="ad-slab__name">{p.nazev}</h3>
                <p className="ad-slab__text">{p.popis}</p>
              </div>
            </article>
          ))}
        </div>
        <figure className="ad-figure">
          <img
            className="ad-figure__img"
            src="/section-1.webp"
            alt="Detail lamel sekčních vrat a bočního vedení při montáži"
          />
          <figcaption className="ad-figure__cap">
            Zateplené lamely a přesné boční vedení — základ tichého chodu.
          </figcaption>
        </figure>
      </section>

      <section className="ad-duvera" aria-labelledby="duvera-h">
        <div className="ad-duvera__grid">
          <div className="ad-duvera__col">
            <p className="ad-eyebrow ad-eyebrow--light">Proč ADAO</p>
            <h2 className="ad-sec-title ad-sec-title--light" id="duvera-h">
              Vrata řešíme od roku, kdy jich většina Prahy ještě neměla
            </h2>
            <dl className="ad-reasons">
              {duvody.map((d) => (
                <div className="ad-reasons__item" key={d.hlava}>
                  <dt className="ad-reasons__t">{d.hlava}</dt>
                  <dd className="ad-reasons__d">{d.text}</dd>
                </div>
              ))}
            </dl>
            <p className="ad-ref">
              11 zveřejněných referencí a hodnocení na Najisto.cz. Přijedeme se
              podívat na váš vjezd zdarma a nezávazně.
            </p>
          </div>
          <div className="ad-duvera__media">
            <img
              className="ad-duvera__img"
              src="/section-2.webp"
              alt="Vjezdová brána s pohonem a plotem u pražského domu"
            />
            <div className="ad-card">
              <span className="ad-card__k">Kde nás najdete</span>
              <p className="ad-card__v">
                Papírenská 1 (areál Ergon)<br />
                160 00 Praha 6
              </p>
              <a className="ad-card__link" href="mailto:adao@adao.cz">
                adao@adao.cz
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
