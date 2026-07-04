import type { CSSProperties } from "react";

export default function Page() {
  const perimeter = [
    {
      code: "P1",
      name: "Pult centralizované ochrany",
      detail:
        "Vaše čidla a kamery napojíme na náš dohledový pult. Poplach vyhodnotíme do několika sekund a na místo vyjíždí zásahové vozidlo.",
    },
    {
      code: "P2",
      name: "Fyzická ostraha objektů",
      detail:
        "Recepce, vrátnice a obchůzková služba ve stejnokroji — pro kanceláře, sklady, výstavní areály i nemocnice po celé ČR.",
    },
    {
      code: "P3",
      name: "Osobní ochrana a doprovod",
      detail:
        "Ochrana klientů a doprovod při přepravě hotovosti a cenin. Diskrétně, s lidmi z Policejní akademie a bývalé kriminální policie.",
    },
    {
      code: "P4",
      name: "Detektivní a analytická činnost",
      detail:
        "Prověření situace, kontrola práce neschopných a pořadatelská činnost na akcích. Podklady, které obstojí.",
    },
  ];

  const facts = [
    { k: "40 mil. Kč", v: "pojištění odpovědnosti u každé zakázky" },
    { k: "Celá ČR", v: "působnost se sídlem a dispečinkem v Brně" },
    { k: "Certifikáty", v: "kvalita ověřovaná každoročně" },
  ];

  return (
    <main className="eg">
      <a className="eg-skip" href="#nabidka">
        Přeskočit na nabídku služeb
      </a>

      <header className="eg-top">
        <a className="eg-mark" href="#top" aria-label="Ecol Guard, domů">
          <span className="eg-mark__grid" aria-hidden="true" />
          <span className="eg-mark__text">
            ECOL<span className="eg-mark__thin">GUARD</span>
          </span>
        </a>
        <nav className="eg-nav" aria-label="Hlavní">
          <a href="#nabidka">Ostraha</a>
          <a href="#duvera">O agentuře</a>
          <a className="eg-nav__call" href="tel:+420800100200">
            Volat dispečink
          </a>
        </nav>
      </header>

      <section className="eg-hero" id="top">
        <div className="eg-hero__frame">
          <img
            className="eg-hero__img"
            src="/hero.webp"
            alt="Pracovník ostrahy Ecol Guard u střeženého objektu v Brně"
          />
          <div className="eg-hero__scan" aria-hidden="true" />
          <div className="eg-hero__hud" aria-hidden="true">
            <span className="eg-hud__dot" />
            SEKTOR BRNO · DOHLED AKTIVNÍ
          </div>
        </div>

        <div className="eg-hero__copy">
          <p className="eg-eyebrow">Bezpečnostní agentura · Brno · celá ČR</p>
          <h1 className="eg-h1">
            Když se spustí <em>poplach</em>,
            <br />
            jsme už na cestě.
          </h1>
          <p className="eg-lede">
            Fyzická ostraha, pult centralizované ochrany a osobní ochrana pro
            administrativní, průmyslové i soukromé objekty. Lidé z Policejní
            akademie a bývalé kriminální policie, ve stejnokroji a pod pojištěním
            do 40 milionů korun.
          </p>
          <div className="eg-hero__cta">
            <a className="eg-btn eg-btn--solid" href="tel:+420800100200">
              Zavolat dispečink
            </a>
            <a className="eg-btn eg-btn--line" href="#nabidka">
              Prohlédnout ostrahu
            </a>
          </div>
        </div>
      </section>

      <section className="eg-band" aria-label="Klíčové jistoty">
        {facts.map((f) => (
          <div className="eg-band__item" key={f.k}>
            <span className="eg-band__k">{f.k}</span>
            <span className="eg-band__v">{f.v}</span>
          </div>
        ))}
      </section>

      <section className="eg-section" id="nabidka">
        <div className="eg-section__head">
          <p className="eg-eyebrow">Ostraha majetku a osob</p>
          <h2 className="eg-h2">Čtyři linie, které hlídají za vás</h2>
          <p className="eg-section__sub">
            Každou zakázku sestavíme z těchto prvků podle rizik vašeho objektu.
            Od jedné vrátnice po nepřetržité napojení na dohledový pult.
          </p>
        </div>

        <div className="eg-grid">
          <ul className="eg-list">
            {perimeter.map((p) => (
              <li className="eg-card" key={p.code}>
                <span className="eg-card__code" aria-hidden="true">
                  {p.code}
                </span>
                <div className="eg-card__body">
                  <h3 className="eg-card__name">{p.name}</h3>
                  <p className="eg-card__detail">{p.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <figure className="eg-figure">
            <img
              className="eg-figure__img"
              src="/section-1.webp"
              alt="Dohledový pult centralizované ochrany s monitory kamerových systémů"
            />
            <figcaption className="eg-figure__cap">
              Dispečink v Brně — poplach z vašeho objektu tady někdo vidí a
              slyší nepřetržitě.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="eg-section eg-section--alt" id="duvera">
        <div className="eg-two">
          <figure className="eg-figure eg-figure--tall">
            <img
              className="eg-figure__img"
              src="/section-2.webp"
              alt="Tým pracovníků ostrahy Ecol Guard ve stejnokrojích"
            />
          </figure>

          <div className="eg-two__copy">
            <p className="eg-eyebrow">O agentuře</p>
            <h2 className="eg-h2">
              Lidé, kterým jde bezpečnost&nbsp;řemeslně
            </h2>
            <p className="eg-para">
              Ecol Guard staví na zázemí s celorepublikovou působností. Naši lidé
              jsou absolventi Policejní akademie ČR, bývalí příslušníci kriminální
              policie a armády, i odborníci na spojovací a komunikační techniku.
            </p>
            <p className="eg-para">
              Součástí nabídky je i náhradní plnění podle zákona o zaměstnanosti
              č. 435/2004 Sb. — splníme za vás povinnost zaměstnávat osoby se
              zdravotním postižením, i když máte stovky zaměstnanců.
            </p>

            <dl className="eg-facts">
              <div>
                <dt>Náhradní plnění</dt>
                <dd>zákon č. 435/2004 Sb. — vyřešíme za vaši firmu</dd>
              </div>
              <div>
                <dt>Objekty</dt>
                <dd>
                  banky, nemocnice, obchodní a výstavní centra, hotely, sklady
                </dd>
              </div>
              <div>
                <dt>Personál</dt>
                <dd>proškolení pracovníci ve stejnokroji, i s cizím jazykem</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
