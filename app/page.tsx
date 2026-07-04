import type { CSSProperties } from "react";

export default function Page() {
  const laid = [
    {
      no: "01",
      name: "Kladení zámkové dlažby",
      desc: "Pěší zóny, chodníky, vjezdy i parkoviště. Skladbu podloží počítáme na skutečné zatížení — auto ani mráz s ní nehnou.",
    },
    {
      no: "02",
      name: "Obruby a odvodnění",
      desc: "Betonové obruby, žlaby a spády tak, aby voda mizela sama a plocha zůstala léta rovná.",
    },
    {
      no: "03",
      name: "Zámkové vzory a formáty",
      desc: "Kvádr, vlnovka, skladebné velkoformáty i barevné pásy podle projektu. Řez diamantovým kotoučem, ne dolámané kusy.",
    },
    {
      no: "04",
      name: "Příprava podloží",
      desc: "Výkop, zhutnění, štěrkové lože a geotextilie. To, co není vidět, drží celou dlažbu.",
    },
  ];

  const proof = [
    { k: "1992", v: "Dlaždíme v Královéhradeckém kraji od založení firmy." },
    { k: "ČSN EN ISO 9001", v: "Certifikovaný systém jakosti pro pozemní komunikace." },
    { k: "10 mil. Kč", v: "Pojištění pro případ škody na majetku zákazníka." },
  ];

  return (
    <main className="nv">
      <header className="nv-top">
        <a className="nv-mark" href="#" aria-label="Novostav, domů">
          <span className="nv-mark-a">NOVO</span>
          <span className="nv-mark-b">STAV</span>
          <span className="nv-mark-dot" aria-hidden="true" />
        </a>
        <nav className="nv-nav" aria-label="Hlavní">
          <a href="#sluzby">Co dláždíme</a>
          <a href="#duvera">O firmě</a>
          <a className="nv-call" href="tel:+420495000000">Zavolat</a>
        </nav>
      </header>

      <section className="nv-hero">
        <div className="nv-hero-copy">
          <p className="nv-eyebrow">Zámková dlažba · Hradec Králové</p>
          <h1 className="nv-h1">
            Kámen ke kameni.
            <br />
            <span className="nv-h1-em">Rovina, která vydrží.</span>
          </h1>
          <p className="nv-lead">
            Novostav pokládá zámkovou dlažbu ve východních Čechách od roku 1992.
            Vjezdy, chodníky i parkoviště — se skladbou podloží počítanou tak, aby
            plocha zůstala rovná i po zimě.
          </p>
          <div className="nv-hero-cta">
            <a className="nv-btn" href="tel:+420495000000">Zavolat a domluvit obhlídku</a>
            <a className="nv-btn-ghost" href="#sluzby">Prohlédnout práce</a>
          </div>
        </div>
        <figure className="nv-hero-fig">
          <img
            src="/hero.webp"
            alt="Čerstvě položená zámková dlažba se skladebným vzorem"
            className="nv-hero-img"
            width={1200}
            height={1500}
          />
          <figcaption className="nv-hero-cap">Skladba kvádr, spára na spáru</figcaption>
        </figure>
      </section>

      <section className="nv-sec" id="sluzby" aria-labelledby="sluzby-h">
        <div className="nv-sec-head">
          <p className="nv-eyebrow">Řemeslo</p>
          <h2 className="nv-h2" id="sluzby-h">
            Čtyři vrstvy pod nohama
          </h2>
          <p className="nv-sec-intro">
            Dobrá dlažba se pozná až za pár let. Proto ji stavíme odspodu — od
            zhutněného podloží po poslední řezaný kámen u obruby.
          </p>
        </div>

        <ol className="nv-list">
          {laid.map((item) => (
            <li className="nv-item" key={item.no}>
              <span className="nv-item-no" aria-hidden="true">
                {item.no}
              </span>
              <div className="nv-item-body">
                <h3 className="nv-item-name">{item.name}</h3>
                <p className="nv-item-desc">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="nv-band">
          <img
            src="/section-1.webp"
            alt="Detail pokládky zámkové dlažby a betonové obruby"
            className="nv-band-img"
            width={1600}
            height={900}
          />
        </figure>
      </section>

      <section className="nv-sec nv-sec-dark" id="duvera" aria-labelledby="duvera-h">
        <div className="nv-duo">
          <figure className="nv-duo-fig">
            <img
              src="/section-2.webp"
              alt="Hotová plocha zámkové dlažby před rodinným domem"
              className="nv-duo-img"
              width={1000}
              height={1200}
            />
          </figure>
          <div className="nv-duo-copy">
            <p className="nv-eyebrow nv-eyebrow-light">O firmě</p>
            <h2 className="nv-h2" id="duvera-h">
              Východočeská firma, která u plochy zůstane
            </h2>
            <p className="nv-duo-lead">
              Novostav s.r.o. vznikl v roce 1992 a dláždí především v
              Královéhradeckém a Pardubickém kraji. Máme vlastní mechanizaci na
              výkop, zhutnění i řez — nečekáte na podpartu a víte, kdo u vás
              pracuje.
            </p>

            <dl className="nv-proof">
              {proof.map((p) => (
                <div className="nv-proof-row" key={p.k}>
                  <dt className="nv-proof-k">{p.k}</dt>
                  <dd className="nv-proof-v">{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
