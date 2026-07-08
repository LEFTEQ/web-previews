import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      reg: "CMYK",
      title: "Digitální tisk",
      body: "Letáky, katalogy, plakáty i vizitky v malém nákladu. Ostré barvy, přesný ořez, hotovo často do druhého dne.",
    },
    {
      reg: "XL",
      title: "Velkoplošný tisk",
      body: "Bannery, plachty, samolepky a polepy na míru. Tiskneme na strojích Mutoh a Roland, materiály od 3M.",
    },
    {
      reg: "3M",
      title: "Polepy a montáže",
      body: "Polepy výloh, aut i reklamních ploch. Přijedeme, zaměříme a instalaci provedeme v terénu i u vás.",
    },
    {
      reg: "DTP",
      title: "Předtisková příprava",
      body: "Sazba, korektury, dohled nad zakázkou v ofsetových tiskárnách. Data odejdou do stroje bez chyb.",
    },
    {
      reg: "PRO",
      title: "Reklamní předměty",
      body: "Potisk propagačních a dárkových předmětů. Vyberete motiv, my zajistíme kvalitní a trvanlivý potisk.",
    },
    {
      reg: "PVC",
      title: "Laminace a cedule",
      body: "Laminace tiskovin i výroba výstražných a informačních cedulek. Odolné vůči vodě i oděru.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Ozvěte se s poptávkou",
      body: "Napíšete nebo zavoláte, co potřebujete vytisknout. Poradíme materiál i formát a připravíme kalkulaci.",
    },
    {
      n: "02",
      title: "Připravíme data",
      body: "Zkontrolujeme podklady, doladíme barvy a spadávku. Když grafiku nemáte, navrhneme ji u nás ve studiu.",
    },
    {
      n: "03",
      title: "Vytiskneme a nainstalujeme",
      body: "Vytiskneme, zlaminujeme, ořežeme — a když jde o polep či banner, vyrazíme a namontujeme na místo.",
    },
  ];

  return (
    <main className="rp">
      <header className="rp-topbar">
        <a className="rp-wordmark" href="#" aria-label="Repropaint, domů">
          <span className="rp-wm-repro">REPRO</span>
          <span className="rp-wm-paint">PAINT</span>
          <span className="rp-wm-reg">HK · od 1994</span>
        </a>
        <nav className="rp-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#studio">Studio</a>
          <a className="rp-nav-cta" href="#poptavka">Chci kalkulaci</a>
        </nav>
      </header>

      <section className="rp-hero" aria-labelledby="rp-hero-title">
        <div className="rp-hero-copy">
          <p className="rp-eyebrow">
            <span className="rp-swatch" aria-hidden="true">
              <i style={{ background: "#00A3D7" }} />
              <i style={{ background: "#E5352B" }} />
              <i style={{ background: "#F5B400" }} />
              <i style={{ background: "#111214" }} />
            </span>
            Reprografické studio · Hradec Králové
          </p>
          <h1 id="rp-hero-title">
            Od <span className="rp-hl">souboru</span> po hotový
            <br />
            <span className="rp-hl-2">polep na výloze.</span>
          </h1>
          <p className="rp-lead">
            Tiskneme letáky, bannery i celé polepy aut od roku 1994. Sídlíme
            v kongresovém centru ALDIS na Eliščině nábřeží — přinesete data,
            odnesete hotovou zakázku.
          </p>
          <div className="rp-hero-actions">
            <a className="rp-btn" href="#poptavka">Poslat poptávku</a>
            <a className="rp-btn-ghost" href="tel:+420604235115">
              Zavolat: 604 235 115
            </a>
          </div>
          <dl className="rp-facts">
            <div>
              <dt>Ve studiu od</dt>
              <dd>1994</dd>
            </div>
            <div>
              <dt>Tiskneme na</dt>
              <dd>Mutoh · Roland</dd>
            </div>
            <div>
              <dt>Fólie a laminace</dt>
              <dd>3M</dd>
            </div>
          </dl>
        </div>
        <figure className="rp-hero-media">
          <img
            src="/hero.webp"
            alt="Velkoformátový tiskový stroj ve studiu Repropaint při tisku barevné plachty"
            width={900}
            height={1100}
            loading="eager"
          />
          <figcaption>Velkoformát v provozu — Eliščino nábřeží 375, HK</figcaption>
        </figure>
      </section>

      <section className="rp-services" id="sluzby" aria-labelledby="rp-services-title">
        <div className="rp-sec-head">
          <p className="rp-eyebrow">Co u nás vytisknete</p>
          <h2 id="rp-services-title">Celý servis pod jednou střechou</h2>
          <p className="rp-sec-sub">
            Od malonákladového digitálu po velkoformát a instalaci v terénu.
            Registrační značka u každé služby odpovídá tomu, čím ji vlastně řešíme.
          </p>
        </div>
        <ul className="rp-grid">
          {services.map((s) => (
            <li className="rp-card" key={s.title}>
              <span className="rp-card-reg" aria-hidden="true">{s.reg}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rp-studio" id="studio" aria-labelledby="rp-studio-title">
        <figure className="rp-studio-media">
          <img
            src="/section-1.webp"
            alt="Detail archu s barevnými soutiskovými značkami a měřicím klínem"
            width={800}
            height={620}
            loading="lazy"
          />
        </figure>
        <div className="rp-studio-copy">
          <p className="rp-eyebrow">Studio na Eliščině nábřeží</p>
          <h2 id="rp-studio-title">
            Přes třicet let ladíme barvy tak,
            <br />
            aby seděly na první nátisk.
          </h2>
          <p>
            Repropaint jsme založili v roce 1994 jako reprografické studio.
            Začínali jsme předtiskovou přípravou pro reklamní agentury,
            dnes zvládneme kompletní cestu od dat po hotový tisk — DTP,
            pre-press i samotný tisk. Používáme výhradně ověřené materiály
            a stroje: 3M, Mutoh, Roland, Konica Minolta, Xerox.
          </p>
          <p>
            Máme prostory na velkoformát i přípravu instalací. Bannery
            a polepy vytiskneme, přivezeme a namontujeme na reklamní plochy
            v terénu i u vás. Jsme jedno z největších a nejstabilnějších
            reprografických studií v Hradci Králové.
          </p>
          <ol className="rp-steps">
            {steps.map((st) => (
              <li key={st.n}>
                <span className="rp-step-n">{st.n}</span>
                <div>
                  <h3>{st.title}</h3>
                  <p>{st.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="rp-studio-media2">
            <img
              src="/section-2.webp"
              alt="Nainstalovaný velkoplošný banner na reklamní ploše"
              width={800}
              height={520}
              loading="lazy"
            />
          </figure>
          <address className="rp-address" id="poptavka">
            <span>studio Repropaint · kongresové centrum ALDIS</span>
            <span>Eliščino nábřeží 375, 500 02 Hradec Králové</span>
            <a href="mailto:info@repropaint.cz">info@repropaint.cz</a>
            <a href="tel:+420495052327">495 052 327</a>
          </address>
        </div>
      </section>
    </main>
  );
}
