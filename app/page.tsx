import React from "react";

const produkty = [
  {
    kod: "01",
    nazev: "Atypické ocelové konstrukce",
    popis: "Nosné rámy, podpěry a svařence přesně na míru projektu — od výkresu po montáž na stavbě.",
  },
  {
    kod: "02",
    nazev: "Brány, vrata a ploty",
    popis: "Posuvné i křídlové brány, oplocení pozemku a zábradlí. Robustní řešení, které vydrží počasí i provoz.",
  },
  {
    kod: "03",
    nazev: "Schodiště a zábradlí",
    popis: "Ocelová schodiště do interiéru i exteriéru, madla a zábradlí s čistým svárem a pevným ukotvením.",
  },
  {
    kod: "04",
    nazev: "Haly a zastřešení",
    popis: "Ocelové haly a zastřešení plochých střech. Řešíme statiku, výrobu i osazení v jednom.",
  },
  {
    kod: "05",
    nazev: "Zimní zahrady",
    popis: "Nosné ocelové konstrukce zimních zahrad připravené pro prosklení a celoroční užívání.",
  },
  {
    kod: "06",
    nazev: "Rámy regulačních stanic",
    popis: "Zakázková výroba rámů a konstrukcí pro regulační stanice a průmyslové provozy včetně automotive.",
  },
];

const reference = [
  "Sova Liberec",
  "Brex spol. s r.o.",
  "a-net Liberec s.r.o.",
  "STI-CONSULT s.r.o.",
  "Prašlak s.r.o.",
  "Sempra Děčín",
  "Gastron",
];

export default function Page() {
  return (
    <main className="mz">
      <header className="mz-top">
        <a className="mz-mark" href="#" aria-label="Moravec zámečnictví — domů">
          <span className="mz-mark-line">MORAVEC</span>
          <span className="mz-mark-sub">ZÁMEČNICTVÍ · LIBEREC</span>
        </a>
        <a className="mz-toplink" href="tel:+420602467230">
          <span className="mz-toplink-lbl">Dílna Janův Důl</span>
          <span className="mz-toplink-num">+420 602 467 230</span>
        </a>
      </header>

      <section className="mz-hero" aria-labelledby="hero-nadpis">
        <div className="mz-hero-media">
          <img
            src="/hero.webp"
            alt="Svařovaná ocelová konstrukce z dílny zámečnictví Moravec v Liberci"
            className="mz-hero-img"
            width={1600}
            height={1100}
          />
          <div className="mz-hero-scrim" aria-hidden="true" />
        </div>

        <div className="mz-hero-body">
          <p className="mz-eyebrow">Zámečnictví od roku, kdy se ještě sváří rukou</p>
          <h1 id="hero-nadpis" className="mz-h1">
            Ocel, která<br />
            <span className="mz-h1-accent">drží slovo.</span>
          </h1>
          <p className="mz-lede">
            Konstrukce, brány, schodiště a zábradlí na zakázku. Vyrábíme a montujeme
            v dílně na Kubelíkově v Liberci — pro zákazníky z celé republiky.
          </p>
          <div className="mz-hero-cta">
            <a className="mz-btn mz-btn-primary" href="tel:+420602467230">Zavolat do dílny</a>
            <a className="mz-btn mz-btn-ghost" href="#nabidka">Co vyrábíme</a>
          </div>

          <dl className="mz-facts">
            <div className="mz-fact">
              <dt>Dílna</dt>
              <dd>Janův Důl, Liberec IX</dd>
            </div>
            <div className="mz-fact">
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7:00–16:00</dd>
            </div>
            <div className="mz-fact">
              <dt>Působnost</dt>
              <dd>Celá ČR</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mz-nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="mz-section-head">
          <p className="mz-kicker">Výrobní program</p>
          <h2 id="nabidka-nadpis" className="mz-h2">
            Od jednoho svaru<br />po celou halu.
          </h2>
          <p className="mz-section-note">
            Děláme atypickou zakázkovou výrobu — každý díl kreslíme, řežeme a sváříme přesně
            pro váš projekt. Níže je to, co z dílny odchází nejčastěji.
          </p>
        </div>

        <ol className="mz-grid">
          {produkty.map((p) => (
            <li className="mz-card" key={p.kod}>
              <span className="mz-card-kod" aria-hidden="true">{p.kod}</span>
              <h3 className="mz-card-nazev">{p.nazev}</h3>
              <p className="mz-card-popis">{p.popis}</p>
            </li>
          ))}
        </ol>

        <div className="mz-nabidka-media">
          <img
            src="/section-1.webp"
            alt="Detail zakázkové zámečnické výroby — brána a ocelová konstrukce"
            className="mz-media-img"
            width={1400}
            height={900}
          />
        </div>
      </section>

      <section className="mz-onas" aria-labelledby="onas-nadpis">
        <div className="mz-onas-media">
          <img
            src="/section-2.webp"
            alt="Zámečnická dílna Moravec v Liberci při práci"
            className="mz-media-img"
            width={1400}
            height={1000}
          />
        </div>

        <div className="mz-onas-body">
          <p className="mz-kicker">O dílně</p>
          <h2 id="onas-nadpis" className="mz-h2">
            Dvě generace<br />u jedné svářečky.
          </h2>
          <p className="mz-onas-text">
            Provozovnu najdete v Liberci, práci ale vozíme po celé republice. Vyrábíme a montujeme
            ocelové konstrukce, zastřešujeme ploché střechy a bereme i atypické zámečnické
            práce na zakázku — ty, co jinde odmítnou.
          </p>

          <div className="mz-lidi">
            <a className="mz-clovek" href="tel:+420602467230">
              <span className="mz-clovek-role">Majitel</span>
              <span className="mz-clovek-jmeno">Stanislav Moravec</span>
              <span className="mz-clovek-tel">+420 602 467 230</span>
            </a>
            <a className="mz-clovek" href="tel:+420602136642">
              <span className="mz-clovek-role">Jednatel</span>
              <span className="mz-clovek-jmeno">Stanislav Moravec ml.</span>
              <span className="mz-clovek-tel">+420 602 136 642</span>
            </a>
          </div>

          <div className="mz-info">
            <div>
              <span className="mz-info-lbl">Provozovna</span>
              <span className="mz-info-val">Kubelíkova 74/16, 460 07 Liberec IX–Janův Důl</span>
            </div>
            <div>
              <span className="mz-info-lbl">E-mail</span>
              <a className="mz-info-val mz-info-link" href="mailto:info@moravec-zamecnictvi.cz">info@moravec-zamecnictvi.cz</a>
            </div>
          </div>

          <div className="mz-spoluprace">
            <p className="mz-spoluprace-lbl">Spolupracujeme</p>
            <ul className="mz-spoluprace-list">
              {reference.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
