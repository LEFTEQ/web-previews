import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "FTL / LTL",
      title: "Kompletní spedice po Evropě",
      body: "Celovozové i dokládkové přepravy a výměnné nástavby do 120 destinací. Pravidelné linky, terminál–terminál i dodavatel–odběratel.",
    },
    {
      code: "ADR",
      title: "Nebezpečné zboží",
      body: "Celovozové přepravy zásilek tříd 2–6 a 8–9 podle klasifikace dohody ADR. Vyškolené posádky, bezpečnostní režim.",
    },
    {
      code: "2–8 °C",
      title: "Řízený teplotní režim",
      body: "Chlazené i mražené zboží v přesně hlídané teplotě po celou trasu. Průběžný záznam a kontrola.",
    },
    {
      code: "GDP",
      title: "Přepravy pro farmacii",
      body: "Certifikováno podle Správné distribuční praxe. Vyhrazená vozidla pro léčiva a zdravotnický materiál.",
    },
  ];

  const stats = [
    { value: "3000+", label: "zakázek měsíčně" },
    { value: "250+", label: "moderních kamionů" },
    { value: "99 %", label: "zakázek doručeno včas" },
    { value: "2,5", label: "roku průměrné stáří flotily" },
  ];

  const promises = [
    {
      head: "Bezpečnost na prvním místě",
      body: "Pravidelná školení posádek, upozorňování na riziková parkoviště a mohutné bezpečnostní zámky na každém vozidle.",
    },
    {
      head: "Neustálý kontakt",
      body: "Všechna vozidla mají GPS, odjezdy i příjezdy jsou monitorovány. O své zásilce víte, kde právě je.",
    },
    {
      head: "Myslíme na ekologii",
      body: "Celá flotila plní emisní normu EURO 6, trasy optimalizujeme a maximalizujeme využití ložné plochy.",
    },
  ];

  return (
    <main className="vc">
      <a className="vc-skip" href="#sluzby">
        Přeskočit na služby
      </a>

      <header className="vc-top">
        <div className="vc-wrap vc-top__inner">
          <span className="vc-mark" aria-label="VCHD Cargo">
            VCHD<span className="vc-mark__c">CARGO</span>
          </span>
          <a className="vc-callbtn" href="tel:+420312245107">
            Zavolat +420 312 245 107
          </a>
        </div>
      </header>

      <section className="vc-hero" aria-labelledby="hero-h">
        <div className="vc-road" aria-hidden="true">
          <span className="vc-road__dash" />
        </div>
        <div className="vc-wrap vc-hero__inner">
          <p className="vc-eyebrow">České Budějovice · doprava po celé Evropě od roku 1997</p>
          <h1 id="hero-h" className="vc-hero__h">
            <span className="vc-hero__line">Náklad,</span>
            <span className="vc-hero__line vc-hero__line--em">který dorazí</span>
            <span className="vc-hero__line">na čas.</span>
          </h1>
          <p className="vc-hero__lead">
            Přes 250 vlastních kamionů v nejvyšší emisní normě jezdí celý rok bez
            zastavení. FTL, LTL, ADR, chlazené i farmaceutické zásilky do 120 evropských
            destinací — a 99 % z nich přijede včas.
          </p>
          <div className="vc-hero__cta">
            <a className="vc-btn vc-btn--solid" href="tel:+420312245107">
              Zavolat dispečink
            </a>
            <a className="vc-btn vc-btn--ghost" href="mailto:info@vchd.cz">
              Poslat poptávku
            </a>
          </div>

          <dl className="vc-hero__stats">
            {stats.map((s, i) => (
              <div className="vc-hero__stat" key={s.label} style={{ "--d": `${i}` } as CSSProperties}>
                <dt className="vc-hero__num">{s.value}</dt>
                <dd className="vc-hero__lbl">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="sluzby" className="vc-svc" aria-labelledby="svc-h">
        <div className="vc-wrap">
          <div className="vc-sechead">
            <span className="vc-tag">Co vozíme</span>
            <h2 id="svc-h" className="vc-sechead__h">
              Čtyři režimy přepravy pod jednou SPZ
            </h2>
            <p className="vc-sechead__p">
              Od běžného paletového zboží po léčiva v hlídané teplotě. Vlastní servis,
              čerpací stanice i mycí linka drží flotilu na cestě.
            </p>
          </div>

          <ul className="vc-plates">
            {services.map((s) => (
              <li className="vc-plate" key={s.title}>
                <span className="vc-plate__band" aria-hidden="true">
                  <span className="vc-plate__eu">CZ</span>
                  <span className="vc-plate__code">{s.code}</span>
                </span>
                <h3 className="vc-plate__h">{s.title}</h3>
                <p className="vc-plate__b">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="o-nas" className="vc-trust" aria-labelledby="trust-h">
        <div className="vc-wrap vc-trust__grid">
          <div className="vc-trust__lead">
            <span className="vc-tag vc-tag--light">O nás</span>
            <h2 id="trust-h" className="vc-trust__h">
              Moderní mezinárodní dopravce z jižních Čech
            </h2>
            <p className="vc-trust__p">
              VCHD Cargo veze export, import i vnitrostátní zásilky vlastní flotilou přes
              250 vozidel. Máme certifikaci GDP Pharma, schválení Úřadu pro civilní letectví
              ČR pro poštovní zásilky a od roku 2019 působíme i v Německu přes vlastní dceřiné
              společnosti.
            </p>
            <div className="vc-trust__facts">
              <span>Sítě 25 bytů pro řidiče po Evropě</span>
              <span>Až 76 palet s přívěsem, 66 v double-deckeru</span>
              <span>Vlastní servis · čerpací stanice · mycí linka</span>
            </div>
          </div>

          <ol className="vc-promises">
            {promises.map((p, i) => (
              <li className="vc-promise" key={p.head}>
                <span className="vc-promise__n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="vc-promise__h">{p.head}</h3>
                  <p className="vc-promise__b">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
