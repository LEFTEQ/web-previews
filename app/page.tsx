import { OdometerFigure } from "./motion";

const services = [
  {
    tag: "SERVIS",
    name: "Autoservis a pneuservis",
    desc:
      "Prohlídky, opravy i sezónní přezutí zvládneme u nás na místě. Auto z naší nabídky projde servisem ještě před prodejem.",
  },
  {
    tag: "ZÁRUKA",
    name: "Záruka zdarma, ne za příplatek",
    desc:
      "Ke každému vozu dáváme rok nebo 15 000 km záruky zdarma. Prodloužit jde až na 36 měsíců s neomezeným nájezdem.",
  },
  {
    tag: "PROTOKOL",
    name: "Technický protokol u vozu",
    desc:
      "Síla laku, stav brzd, foto podvozku, stav baterie i motorizace — vše najdete na kartě vozu dopředu, ne až u stolu.",
  },
  {
    tag: "PNEU",
    name: "Uskladnění kol a klimatizace",
    desc:
      "Sezónní uložení pneumatik, plnění klimatizace i výměna oleje v automatických převodovkách. Postaráme se o auto dál.",
  },
  {
    tag: "PŮJČOVNA",
    name: "Autopůjčovna a střešní box",
    desc:
      "Potřebujete auto na víkend nebo box na lyže? Půjčíme vám vůz i střešní box, když se to zrovna hodí.",
  },
  {
    tag: "PAPÍRY",
    name: "Serviska a smlouva předem",
    desc:
      "Chcete servisní historii nebo návrh kupní smlouvy ještě před schůzkou? Stačí napsat, obratem pošleme.",
  },
];

const reasons = [
  {
    n: "01",
    title: "Prověřená historie u každého auta",
    body:
      "Každý vůz pečlivě vybíráme, prověřujeme jeho původ a kontrolujeme v našem servisu. Nedostatky řešíme dřív, než auto zařadíme do nabídky.",
  },
  {
    n: "02",
    title: "Nic netajíme ani nekrášlíme",
    body:
      "Lak, poškození, stav motoru, podvozku i brzd — mluvíme o tom na rovinu a dopředu. Dopředu tak víte, do čeho jdete.",
  },
  {
    n: "03",
    title: "Reálné vozy skladem v Praze",
    body:
      "Co je v nabídce, opravdu máme. Žádná auta, která neexistují. Ústní rezervaci držíme 48 hodin, prodané vozy hned mažeme.",
  },
  {
    n: "04",
    title: "Osobní přístup, ne prodejní tlak",
    body:
      "Velká rodina, mladý řidič nebo nerozhodný kupec? S každým si sedneme, poradíme a pomůžeme vybrat vůz, co dává smysl.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="hero band">
        <div className="wrap">
          <div className="hero__top">
            <a className="wordmark" href="#" aria-label="Sema CARS, autobazar Praha">
              <span className="wordmark__dot" aria-hidden="true" />
              <span className="wordmark__name">SEMA</span>
              <span className="wordmark__cars">CARS</span>
            </a>
            <p className="plate plate--hero">[ AUTOBAZAR · PRAHA · OD 2013 ]</p>
          </div>

          <div className="hero__grid">
            <h1 className="hero__title">
              <span className="line line--1">Auto, které si</span>
              <span className="line line--2">
                přečtete jako <em>protokol</em>.
              </span>
            </h1>
            <p className="hero__lead">
              Zánovní a ojeté vozy s jasným původem a ověřeným stavem. U každé
              karty najdete technický protokol — sílu laku, stav brzd i foto
              podvozku. Naši nabídku známe do detailu. Už 11 let v Praze.
            </p>
            <div className="hero__cta">
              <a className="btn btn--amber" href="#nabidka">
                Prohlédnout nabídku
              </a>
              <a className="btn btn--ghost" href="#sluzby">
                Naše služby
              </a>
            </div>
          </div>

          <div className="odo" aria-label="Klíčová čísla">
            <OdometerFigure
              pre="až"
              to={100000}
              suf="Kč"
              label="Sleva na vybraný vůz"
              aria="Sleva na vybraný vůz až 100 000 Kč"
              delay={0}
            />
            <OdometerFigure
              to={11}
              suf="let"
              label="S vámi v Praze"
              aria="Jedenáct let s vámi v Praze"
              delay={0.15}
            />
            <OdometerFigure
              to={24}
              suf="vozů"
              label="Skladem, reálně k vidění"
              aria="Dvacet čtyři vozů skladem, reálně k vidění"
              delay={0.3}
            />
          </div>
        </div>
      </header>

      <section className="band band--paper" id="sluzby" aria-labelledby="sluzby-h">
        <div className="wrap">
          <div className="sec-head">
            <p className="plate">[ SLUŽBY · POD JEDNOU STŘECHOU ]</p>
            <h2 className="sec-title" id="sluzby-h">
              Postaráme se o vás i o vůz — i po klíčcích
            </h2>
            <p className="sec-intro">
              Nekončíme podpisem smlouvy. Servis, záruka i papíry běží dál, ať
              jezdíte spokojeně.
            </p>
          </div>

          <ul className="srv">
            {services.map((s) => (
              <li className="srv__item" key={s.name}>
                <span className="srv__tag">{s.tag}</span>
                <h3 className="srv__name">{s.name}</h3>
                <p className="srv__desc">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--dark" id="nabidka" aria-labelledby="proc-h">
        <div className="wrap">
          <div className="sec-head">
            <p className="plate plate--onDark">[ PROČ AUTO OD NÁS ]</p>
            <h2 className="sec-title sec-title--light" id="proc-h">
              Jsme fér a transparentní. Vždycky na rovinu.
            </h2>
          </div>

          <div className="trust">
            <ol className="why">
              {reasons.map((r) => (
                <li className="why__item" key={r.n}>
                  <span className="why__n">{r.n}</span>
                  <div>
                    <h3 className="why__title">{r.title}</h3>
                    <p className="why__body">{r.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="spec" aria-label="Ukázka karty vozu">
              <div className="spec__head">
                <span className="spec__badge">Skladem</span>
                <span className="spec__no">č. #42</span>
              </div>
              <h3 className="spec__name">
                Jeep Compass
                <span className="spec__variant">1.3 Turbo · 110 kW · Limited S</span>
              </h3>
              <dl className="spec__fields">
                <div><dt>Rok</dt><dd>2021</dd></div>
                <div><dt>Nájezd</dt><dd>109 100 km</dd></div>
                <div><dt>Palivo</dt><dd>Benzín</dd></div>
                <div><dt>Převodovka</dt><dd>Automat</dd></div>
                <div><dt>Síla laku</dt><dd className="ok">Změřeno ✓</dd></div>
                <div><dt>Stav brzd</dt><dd className="ok">V normě ✓</dd></div>
              </dl>
              <div className="spec__price">
                <span className="spec__old">379 000 Kč</span>
                <span className="spec__new">349 000 Kč</span>
                <span className="spec__save">Ušetříte 30 000 Kč</span>
              </div>
              <p className="plate plate--stamp">
                [ PŮVOD ✓ · STAV OVĚŘEN ✓ · ZÁRUKA 12 M ]
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
