// AUTO DRYML a.s. — autobazar & autorizovaný Škoda partner, Pardubice
// Design koncept: „Odometr" — číselník najetých kilometrů jako signature prvek.
// Autobazar žije čísly: kilometry, rok, cena. Hero je postavené na obřím typografickém
// odometru a katalogovém rastru inventárních karet, jak je zná každý, kdo někdy
// vybíral ojetinu. Paleta: asfaltová šedá, škodovácká petrolejová zeleň, výstražná
// žlutá SPZ štítků. Žádný stock-photo lesk — poctivá servisní kartotéka.

const vozy = [
  {
    model: "Škoda Octavia Combi",
    motor: "2.0 TDI 110 kW · DSG",
    rok: "2022",
    km: "48 210",
    cena: "519 000 Kč",
    stitek: "Škoda Plus",
  },
  {
    model: "Škoda Fabia",
    motor: "1.0 TSI 81 kW · manuál",
    rok: "2023",
    km: "21 540",
    cena: "389 000 Kč",
    stitek: "1. majitel",
  },
  {
    model: "Škoda Kodiaq",
    motor: "2.0 TDI 147 kW · 4×4",
    rok: "2021",
    km: "76 880",
    cena: "749 000 Kč",
    stitek: "Tažné zařízení",
  },
  {
    model: "Škoda Kamiq",
    motor: "1.5 TSI 110 kW · DSG",
    rok: "2022",
    km: "33 070",
    cena: "459 000 Kč",
    stitek: "Škoda Plus",
  },
];

const kroky = [
  {
    cislo: "km 0",
    titul: "Vyberete si vůz",
    text: "Na place v Pardubicích i online. Každý vůz má doloženou servisní historii a ověřený stav tachometru — číslo, které vidíte, je číslo, které vůz opravdu najel.",
  },
  {
    cislo: "km 1",
    titul: "Projedete se",
    text: "Testovací jízda bez domlouvání týden dopředu. Zavoláte, přijedete, sednete za volant. Technik vám mezitím ukáže vůz na zvedáku, pokud chcete vidět i podvozek.",
  },
  {
    cislo: "km 2",
    titul: "Odjedete svým autem",
    text: "Přepis, pojištění i financování vyřídíme na místě. Váš starý vůz vezmeme na protiúčet — teď s výkupním bonusem až 70 000 Kč.",
  },
];

export default function Page() {
  return (
    <main className="ad">
      {/* ---------- HLAVIČKA ---------- */}
      <header className="ad-top">
        <div className="ad-wordmark" aria-label="AUTO DRYML a.s.">
          <span className="ad-wordmark-auto">AUTO</span>
          <span className="ad-wordmark-dryml">DRYML</span>
          <span className="ad-wordmark-as">a.s.</span>
        </div>
        <a className="ad-tel" href="tel:+420466566130">
          <span className="ad-tel-label">Prodej vozů</span>
          <span className="ad-tel-num">466 566 130</span>
        </a>
      </header>

      {/* ---------- HERO: ODOMETR ---------- */}
      <section className="hero" aria-labelledby="hero-h">
        <p className="hero-eyebrow">
          Autobazar a autorizovaný Škoda partner · Pardubice
        </p>

        <h1 id="hero-h" className="hero-title">
          Auto, kterému věříte
          <br />
          na&nbsp;první kilometr.
        </h1>

        {/* Signature: typografický odometr */}
        <div className="odo" role="img" aria-label="Odometr ukazující 70 000 — výkupní bonus 70 000 korun">
          <div className="odo-frame">
            <span className="odo-digit" style={{ animationDelay: "0.1s" }}>0</span>
            <span className="odo-digit" style={{ animationDelay: "0.2s" }}>7</span>
            <span className="odo-digit odo-digit-hot" style={{ animationDelay: "0.3s" }}>0</span>
            <span className="odo-digit odo-digit-hot" style={{ animationDelay: "0.4s" }}>0</span>
            <span className="odo-digit odo-digit-hot" style={{ animationDelay: "0.5s" }}>0</span>
            <span className="odo-digit odo-digit-hot" style={{ animationDelay: "0.6s" }}>0</span>
          </div>
          <p className="odo-caption">
            <strong>Výkupní bonus až 70 000 Kč</strong> za váš stávající vůz na protiúčet
          </p>
        </div>

        <p className="hero-lead">
          Prodáváme ojeté vozy s ověřeným tachometrem, prověřené vozy Škoda Plus
          i&nbsp;nové škodovky skladem. Všechno na jednom place, všechno s vlastním
          servisem za zády.
        </p>

        <div className="hero-cta">
          <a className="btn btn-hlavni" href="#vozy">
            Prohlédnout vozy skladem
          </a>
          <a className="btn btn-vedlejsi" href="tel:+420466566130">
            Zavolat prodejci
          </a>
        </div>

        <ul className="hero-fakta">
          <li>
            <span className="fakt-cislo">440 km</span>
            <span className="fakt-text">dojezd nové Škody Epiq — už u nás skladem</span>
          </li>
          <li>
            <span className="fakt-cislo">100 %</span>
            <span className="fakt-text">vozů s doloženou servisní historií</span>
          </li>
          <li>
            <span className="fakt-cislo">1 místo</span>
            <span className="fakt-text">prodej, výkup, servis i originální díly</span>
          </li>
        </ul>
      </section>

      {/* ---------- SEKCE 1: VOZY SKLADEM ---------- */}
      <section className="vozy" id="vozy" aria-labelledby="vozy-h">
        <div className="sekce-hlava">
          <h2 id="vozy-h">Vozy skladem</h2>
          <p className="sekce-pozn">
            Výběr z aktuální nabídky. Každý vůz si můžete prohlédnout na zvedáku
            a&nbsp;rovnou vyzkoušet — jsme na place každý všední den do 17:00.
          </p>
        </div>

        <div className="vozy-grid">
          {vozy.map((v) => (
            <article className="karta" key={v.model + v.rok}>
              <div className="karta-spz" aria-hidden="true">
                <span className="karta-spz-e">E</span>
                {v.stitek}
              </div>
              <h3 className="karta-model">{v.model}</h3>
              <p className="karta-motor">{v.motor}</p>
              <dl className="karta-udaje">
                <div>
                  <dt>Rok</dt>
                  <dd>{v.rok}</dd>
                </div>
                <div>
                  <dt>Najeto</dt>
                  <dd>{v.km} km</dd>
                </div>
                <div>
                  <dt>Cena</dt>
                  <dd className="karta-cena">{v.cena}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="vozy-pruhy">
          <div className="pruh">
            <h3>Škoda Plus — prověřené ojetiny</h3>
            <p>
              Vozy s továrním prověřením 110 bodů, zárukou a garancí původu.
              Teď navíc za akční ceny.
            </p>
          </div>
          <div className="pruh">
            <h3>Nové vozy ihned k dodání</h3>
            <p>
              Akční modely Classic a Dynamic s prodlouženou zárukou
              a&nbsp;předplaceným servisem zdarma. Bez čekání na výrobu.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- SEKCE 2: JAK TO U NÁS JEDE ---------- */}
      <section className="cesta" aria-labelledby="cesta-h">
        <div className="sekce-hlava sekce-hlava-svetla">
          <h2 id="cesta-h">Tři kilometry k novému autu</h2>
          <p className="sekce-pozn">
            Rodinná firma z Pardubic. Auta prodáváme přes dvacet let a víme,
            že důvěra se počítá na kilometry, ne na sliby.
          </p>
        </div>

        <ol className="cesta-kroky">
          {kroky.map((k) => (
            <li className="krok" key={k.cislo}>
              <span className="krok-znacka">{k.cislo}</span>
              <h3>{k.titul}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <blockquote className="reference">
          <p>
            „Octavii jsem si přijel jen prohlédnout. Technik mi ji bez řečí zvedl
            na hever, ukázal podvozek a vytiskl servisní historii. Odjížděl jsem
            s ní ještě ten týden."
          </p>
          <footer className="reference-autor">
            — Martin H., Chrudim · Octavia Combi 2.0 TDI, koupeno 2025
          </footer>
        </blockquote>

        <div className="cesta-lokalita">
          <p>
            <strong>K nám najdete cestu vždycky.</strong> Areál AUTO DRYML najdete
            na hlavním tahu v Pardubicích — prodejna, autobazar a servis vedle sebe.
            Zaparkujete přímo na place.
          </p>
        </div>
      </section>
    </main>
  );
}
