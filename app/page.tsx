import type { CSSProperties } from "react";

export default function Page() {
  const rez = [
    {
      kod: "HOME",
      nazev: "Biosuntec Home",
      pro: "Novostavba na klíč",
      body: [
        "Tepelné čerpadlo",
        "Vzduchotechnika a rekuperace",
        "Fotovoltaická elektrárna",
        "Jednotné řízení celého systému",
      ],
      tech: "Technická místnost od 1,8 × 2,1 m",
      dotace: "Dotace až 535 tis. Kč",
    },
    {
      kod: "READY",
      nazev: "Biosuntec Ready",
      pro: "Připraveno na rozšíření",
      body: [
        "Vzduchotechnika a rekuperace",
        "Bojler s tepelným čerpadlem",
        "Příprava na budoucí fotovoltaiku",
        "Jednotné řízení celého systému",
      ],
      tech: "Technická místnost od 1,6 × 2,1 m",
      dotace: "Dotace až 535 tis. Kč",
    },
    {
      kod: "BASIC",
      nazev: "Biosuntec Basic",
      pro: "Základní úsporný set",
      body: [
        "Vytápění podle vašeho výběru",
        "Vzduchotechnika a rekuperace",
        "Fotovoltaická elektrárna",
        "Bez zbytečných nadstaveb",
      ],
      tech: "Vhodné i pro menší dispozice",
      dotace: "Individuální kalkulace",
    },
  ];

  const kroky = [
    {
      c: "01",
      nadpis: "Poradenství a výpočty",
      text: "Sejdeme se nad projektem, spočítáme spotřebu domu a navrhneme, kolik energie má smysl vyrábět a ukládat. Ještě před stavbou, ne až po ní.",
    },
    {
      c: "02",
      nadpis: "Projekce a PENB",
      text: "Zpracujeme projektovou dokumentaci technologie, energetickou optimalizaci a průkaz PENB. Vše sedí do vaší stavební dokumentace.",
    },
    {
      c: "03",
      nadpis: "Realizace a dotace",
      text: "Namontujeme technologii, oživíme řízení a za vás vyřídíme dotaci z programu Nová zelená úsporám. Vy jen převezmete hotový dům.",
    },
    {
      c: "04",
      nadpis: "Servis",
      text: "Po předání zůstáváme. Systém spravujeme, ladíme a servisujeme, aby vyráběl a topil tak, jak jsme slíbili.",
    },
  ];

  return (
    <main className="bs">
      <header className="bs-top">
        <a className="bs-mark" href="#uvod" aria-label="Biosuntec, domů">
          <span className="bs-mark-sun" aria-hidden="true" />
          <span className="bs-mark-word">
            biosun<span className="bs-mark-accent">tec</span>
          </span>
        </a>
        <nav className="bs-nav" aria-label="Hlavní">
          <a href="#systemy">Energetické systémy</a>
          <a href="#fotovoltaika">Fotovoltaika</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="bs-nav-cta" href="tel:+420703824471">Zavolat</a>
      </header>

      <section className="bs-hero" id="uvod">
        <img
          className="bs-hero-img"
          src="/hero.webp"
          alt="Rodinný dům s fotovoltaickou elektrárnou od Biosuntec"
          loading="eager"
        />
        <div className="bs-hero-scrim" aria-hidden="true" />
        <div className="bs-hero-inner">
          <p className="bs-eyebrow">Fotovoltaika a energetické systémy · Hradec Králové</p>
          <h1 className="bs-hero-h">
            Děláme z domu
            <br />
            <span className="bs-hero-em">soběstačný domov.</span>
          </h1>
          <p className="bs-hero-lead">
            Vlastní patentované řešení, které topí, chladí, větrá a vyrábí
            elektřinu. Navrhneme, postavíme a vyřídíme dotaci — vše pod jednou
            střechou.
          </p>
          <div className="bs-hero-actions">
            <a className="bs-btn" href="#systemy">
              Prohlédnout řešení
            </a>
            <a className="bs-btn-ghost" href="tel:+420703824471">
              +420 703 824 471
            </a>
          </div>
        </div>

        <dl className="bs-meter" aria-label="Co jsme zvládli zajistit">
          <div>
            <dt>Realizací</dt>
            <dd>stovky</dd>
          </div>
          <div>
            <dt>Výkon FVE až</dt>
            <dd>100 kW</dd>
          </div>
          <div>
            <dt>Dotace NZÚ až</dt>
            <dd>535 tis.</dd>
          </div>
          <div>
            <dt>Vývoj</dt>
            <dd>vlastní</dd>
          </div>
        </dl>
      </section>

      <section className="bs-sys" id="systemy">
        <div className="bs-sec-head">
          <p className="bs-eyebrow bs-eyebrow-dark">Tři ucelená řešení</p>
          <h2 className="bs-sec-h">
            Pro novostavbu, rekonstrukci i stávající dům
          </h2>
          <p className="bs-sec-lead">
            Každý dům posuzujeme individuálně — podle dispozice, rozpočtu a toho,
            jak v něm chcete žít. Vyberte start, zbytek dořešíme společně.
          </p>
        </div>

        <div className="bs-cards">
          {rez.map((r) => (
            <article className="bs-card" key={r.kod}>
              <div className="bs-card-top">
                <span className="bs-card-kod">{r.kod}</span>
                <span className="bs-card-pro">{r.pro}</span>
              </div>
              <h3 className="bs-card-h">{r.nazev}</h3>
              <ul className="bs-card-list">
                {r.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="bs-card-foot">
                <span className="bs-card-tech">{r.tech}</span>
                <span className="bs-card-dotace">{r.dotace}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="bs-fv" id="fotovoltaika">
          <img
            className="bs-fv-img"
            src="/section-1.webp"
            alt="Montáž fotovoltaických panelů na střeše"
            loading="lazy"
          />
          <div className="bs-fv-text">
            <p className="bs-eyebrow bs-eyebrow-dark">Samostatná fotovoltaika</p>
            <h3 className="bs-fv-h">Budoucnost je elektřina, kterou si vyrobíte sami.</h3>
            <p>
              Návrh, projekci i montáž fotovoltaické elektrárny zvládneme na
              většinu typů objektů — rodinný dům, bytový dům i komerční budovu.
              Elektrárny stavíme do výkonu 100 kW a dotaci Nová zelená úsporám
              vyřídíme za vás.
            </p>
            <ul className="bs-fv-tags">
              <li>Pro novostavby</li>
              <li>Pro stávající objekty</li>
              <li>Bytové i komerční domy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bs-onas" id="onas">
        <div className="bs-onas-grid">
          <div className="bs-onas-media">
            <img
              src="/section-2.webp"
              alt="Technická místnost s energetickým systémem Biosuntec"
              loading="lazy"
            />
          </div>
          <div className="bs-onas-text">
            <p className="bs-eyebrow bs-eyebrow-dark">Kdo jsme</p>
            <h2 className="bs-sec-h">Firma z Hradce Králové s vlastním patentem</h2>
            <p>
              Vyvinuli jsme vlastní patentované řešení, abychom pomohli přírodě i
              lidem. Chceme, aby místo, kde vychováváme naše děti, bylo
              obyvatelné i v době, kdy tu my už nebudeme. Naše systémy za svoji
              životnost ušetří planetě milióny tun CO₂.
            </p>
            <p>
              Projektujeme a realizujeme technologie do rodinných domů — ať jde o
              novostavbu, nebo kompletní rekonstrukci. Zákazníci mají radost, že
              bydlí v komfortu a za energie platí minimum.
            </p>

            <ol className="bs-steps">
              {kroky.map((k) => (
                <li className="bs-step" key={k.c}>
                  <span className="bs-step-c">{k.c}</span>
                  <div>
                    <h4>{k.nadpis}</h4>
                    <p>{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="bs-contact">
              <a href="tel:+420703824471">+420 703 824 471</a>
              <a href="mailto:biosuntec@biosuntec.cz">biosuntec@biosuntec.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
