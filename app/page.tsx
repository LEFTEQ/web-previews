import { Readout } from "./motion";

const services = [
  {
    n: "01",
    title: "Revize elektrických instalací",
    desc: "Byty, rodinné domy, provozovny i novostavby. Výchozí i pravidelné revize podle ČSN 33 1500 a ČSN 33 2000. Protokol, který obstojí u pojišťovny i hasičů.",
    cycle: "2\u20135 let",
  },
  {
    n: "02",
    title: "Revize hromosvodů (LPS)",
    desc: "Ochrana před bleskem u domů i objektů. Zkontrolujeme svody, uzemnění i přepěťové ochrany a změříme zemní odpor.",
    cycle: "2\u20134 roky",
  },
  {
    n: "03",
    title: "Revize spotřebičů a nářadí",
    desc: "Kanceláře, dílny a stroje podle ČSN 33 1600 ed. 2. Prodlužovačky, ruční nářadí i pevně připojené přístroje \u2014 změřeno a olepeno štítkem.",
    cycle: "1\u00d7 / rok",
  },
  {
    n: "04",
    title: "Zabezpečení a kamery",
    desc: "Montáž i prodej ověřených značek: Hikvision, Jablotron, Galaxy, Paradox. Návrh, instalace a záruční i pozáruční servis.",
    cycle: "na míru",
  },
  {
    n: "05",
    title: "Hlídání termínů revizí",
    desc: "Zapíšeme si, kdy vaše revize vyprší, a ozveme se dřív, než přestane platit. O legislativu se nestaráte vy, ale my.",
    cycle: "automaticky",
  },
];

const reasons = [
  {
    n: "01",
    title: "Bezpečnost",
    desc: "Odhalíme závadu dřív, než z ní bude požár nebo úraz elektrickým proudem.",
  },
  {
    n: "02",
    title: "Předpisy",
    desc: "Pravidelná revize je daná zákonem. Držíme vás v souladu s normami ČSN.",
  },
  {
    n: "03",
    title: "Prevence",
    desc: "Drobnou závadu opravíme včas, dokud je levná \u2014 než přeroste v odstávku.",
  },
  {
    n: "04",
    title: "Životnost",
    desc: "Pravidelná péče prodlouží život instalace, rozvaděče i připojených spotřebičů.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <span className="hero__probe" aria-hidden="true" />

        <div className="wrap hero__inner">
          <div className="topbar">
            <a className="mark" href="#top" aria-label="Sykec \u2014 revize elektro, Brno">
              <span className="mark__name">SYKEC</span>
              <span className="mark__sub">revize elektro</span>
              <span className="mark__stripe" aria-hidden="true" />
            </a>

            <nav className="nav" aria-label="Hlavní navigace">
              <a className="nav__item nav__item--active" href="#top" aria-current="page">Úvod</a>
              <a className="nav__item" href="#sluzby">Služby</a>
              <a className="nav__item" href="#cenik">Ceník</a>
              <a className="nav__item" href="#o-nas">Reference</a>
              <a className="nav__item" href="#kontakt">Kontakt</a>
            </nav>

            <a className="topbar__call" href="tel:+420777307159">+420 777 307 159</a>
          </div>

          <div className="hero__body">
            <p className="eyebrow eyebrow--light">Revize elektro \u2014 Brno \u2014 od roku 2014</p>
            <h1 className="hero__title">
              Naměřeno,<br />
              ověřeno,<br />
              <span className="hero__title-accent">revidováno.</span>
            </h1>
            <p className="hero__lede">
              Provádíme revize elektrických instalací, hromosvodů a spotřebičů podle
              platných norem ČSN. Závady odhalíme dřív, než způsobí problém \u2014
              a pohlídáme i termín té příští.
            </p>

            <div className="cta">
              <a className="btn btn--primary" href="tel:+420777307159">Zavolat na 777 307 159</a>
              <a className="btn btn--ghost" href="#sluzby">Prohlédnout služby</a>
            </div>
          </div>

          <dl className="readouts" aria-label="Klíčové údaje">
            <div className="rd">
              <dd className="rd__val"><Readout to={2014} /></dd>
              <dt className="rd__label">měříme od roku</dt>
            </div>
            <div className="rd">
              <dd className="rd__val"><Readout to={11} /><span className="rd__unit">let</span></dd>
              <dt className="rd__label">praxe v Brně</dt>
            </div>
            <div className="rd">
              <dd className="rd__val"><Readout to={48} /><span className="rd__unit">h</span></dd>
              <dt className="rd__label">nabídka zdarma do</dt>
            </div>
          </dl>
        </div>
      </header>

      <section className="band" id="sluzby" aria-labelledby="sluzby-h">
        <span className="pe pe--divider" aria-hidden="true" />
        <div className="wrap">
          <div className="band__head">
            <p className="eyebrow">02 / Co pro vás uděláme</p>
            <h2 className="band__title" id="sluzby-h">Revize i montáž pod jednou střechou</h2>
          </div>

          <ol className="svc">
            {services.map((s) => (
              <li className="svc__row" key={s.n}>
                <span className="svc__n">{s.n}</span>
                <div className="svc__main">
                  <h3 className="svc__title">{s.title}</h3>
                  <p className="svc__desc">{s.desc}</p>
                </div>
                <div className="svc__cycle">
                  <span className="svc__cycle-label">interval</span>
                  <span className="svc__cycle-val">{s.cycle}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band--dark" id="o-nas" aria-labelledby="o-nas-h">
        <span className="pe pe--divider" aria-hidden="true" />
        <div className="wrap">
          <div className="band__head">
            <p className="eyebrow eyebrow--light">03 / Proč revize a kdo je dělá</p>
            <h2 className="band__title" id="o-nas-h">Firma, která to bere jako měření, ne razítko</h2>
          </div>

          <div className="about">
            <div className="about__intro">
              <p className="tag tag--certified"><span className="pe tag__stripe" aria-hidden="true" />revidováno dle ČSN</p>
              <p className="about__text">
                Na trhu jsme od roku 2014. Děláme revize elektrických zařízení přesně
                podle norem ČSN a k tomu instalujeme zabezpečovací a kamerové systémy
                renomovaných značek. Profesionální přístup, rychlá realizace a cenová
                nabídka na míru zdarma \u2014 pro Brno a okolí.
              </p>
              <ul className="about__list">
                <li>Záruční i pozáruční servis</li>
                <li>Cenová nabídka na míru zdarma</li>
                <li>Hlídání termínů revizí za vás</li>
              </ul>
            </div>

            <ol className="reasons" aria-label="Proč dělat revize">
              {reasons.map((r) => (
                <li className="reasons__row" key={r.n}>
                  <span className="reasons__n">{r.n}</span>
                  <div>
                    <h3 className="reasons__title">{r.title}</h3>
                    <p className="reasons__desc">{r.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="contact" id="kontakt">
            <div className="contact__cell">
              <span className="contact__label">Telefon</span>
              <a className="contact__val" href="tel:+420777307159">+420 777 307 159</a>
            </div>
            <div className="contact__cell">
              <span className="contact__label">E-mail</span>
              <a className="contact__val" href="mailto:info@sykec.cz">info@sykec.cz</a>
            </div>
            <div className="contact__cell">
              <span className="contact__label">Sídlo</span>
              <span className="contact__val">Vyšehradská 329/6, 620 00 Brno</span>
            </div>
            <div className="contact__cell">
              <span className="contact__label">Otevřeno</span>
              <span className="contact__val">Po\u2013Pá 8:00\u201317:00</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
