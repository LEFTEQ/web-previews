// Hertz Autopůjčovna Brno — statický náhled
// Koncept: „Vyzvednutí → Vrácení" — celý web je postavený na jazyku rezervace.
// Signature prvek: žlutý jízdní pruh (lane) s přerušovanou čárou, který vede od hero dolů stránkou
// jako středová čára silnice — odkaz na to jediné, o co tu jde: vyjet na cestu.

const vozy = [
  {
    kategorie: "Městské",
    model: "Peugeot 208",
    popis: "Do brněnských ulic a na parkování v centru. Malý zvenku, překvapivě prostorný uvnitř.",
    mista: "5 míst",
    prevodovka: "manuál",
    denOd: "od 890 Kč / den",
  },
  {
    kategorie: "SUV",
    model: "Škoda Kodiaq",
    popis: "Rodinná dovolená nebo víkend na Vysočině. Automat, velký kufr, klid za volantem.",
    mista: "5 míst",
    prevodovka: "automat",
    denOd: "od 1 790 Kč / den",
  },
  {
    kategorie: "Prémiové",
    model: "Mercedes CLA",
    popis: "Když má cesta reprezentovat. Obchodní schůzka, svatba, nebo prostě radost z jízdy.",
    mista: "5 míst",
    prevodovka: "automat",
    denOd: "od 2 490 Kč / den",
  },
  {
    kategorie: "Minivan",
    model: "Mercedes Vito Tourer",
    popis: "Až osm cestujících a bagáž k tomu. Výlet s partou, letiště, sportovní tým.",
    mista: "8 míst",
    prevodovka: "automat",
    denOd: "od 2 890 Kč / den",
  },
  {
    kategorie: "Dodávka",
    model: "Opel Movano L2H2",
    popis: "Stěhování bytu nebo odvoz nábytku. Půjčíte na den, vrátíte večer, hotovo.",
    mista: "3 místa",
    prevodovka: "manuál",
    denOd: "od 1 590 Kč / den",
  },
  {
    kategorie: "Dodávka XL",
    model: "Opel Movano L3H2",
    popis: "Větší stěhování, celý dům, sklad. Nejdelší ložná plocha, kterou v Brně půjčujeme.",
    mista: "3 místa",
    prevodovka: "manuál",
    denOd: "od 1 790 Kč / den",
  },
];

const kroky = [
  {
    znacka: "KM 0",
    titulek: "Rezervujete online nebo telefonicky",
    text: "Vyberete vůz, termín a pobočku. Cena, kterou vidíte, je cena, kterou platíte — včetně povinného ručení a dálniční známky.",
  },
  {
    znacka: "KM 1",
    titulek: "Vyzvednete v Brně, klíče za 10 minut",
    text: "Občanka, řidičák, podpis. Členové Gold Plus Rewards jdou rovnou k autu — bez fronty, bez papírování na přepážce.",
  },
  {
    znacka: "KM ∞",
    titulek: "Vrátíte tady, nebo jinde",
    text: "Praha, Ostrava, Bratislava, letiště. Vrácení v jiném městě domluvíme předem — jednosměrné pronájmy jsou u nás běžná věc.",
  },
];

export default function Page() {
  return (
    <main className="hz">
      {/* ===== HLAVIČKA ===== */}
      <header className="hz-header">
        <div className="hz-wrap hz-header-in">
          <a href="#" className="hz-wordmark" aria-label="Hertz Autopůjčovna Brno — úvod">
            <span className="hz-wordmark-main">HERTZ</span>
            <span className="hz-wordmark-sub">Autopůjčovna Brno</span>
          </a>
          <nav className="hz-nav" aria-label="Hlavní navigace">
            <a href="#vozy">Vozový park</a>
            <a href="#pujceni">Jak to probíhá</a>
            <a href="tel:+420543210987" className="hz-nav-tel">
              543 210 987
            </a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hz-hero" aria-labelledby="hero-title">
        <div className="hz-wrap hz-hero-in">
          <p className="hz-hero-eyebrow">
            <span className="hz-dot" aria-hidden="true"></span>
            Pobočka Brno · dnes otevřeno 8–18
          </p>

          <h1 id="hero-title" className="hz-hero-title">
            <span className="hz-line hz-line-1">Klíče</span>
            <span className="hz-line hz-line-2">za deset</span>
            <span className="hz-line hz-line-3">
              minut<span className="hz-title-period">.</span>
            </span>
          </h1>

          <p className="hz-hero-lead">
            Půjčovna aut v Brně — od Peugeotu 208 na cesty po městě až po dodávku
            na stěhování. Rezervace online, vyzvednutí bez fronty, vrácení klidně
            v jiném městě.
          </p>

          <div className="hz-hero-cta">
            <a href="#vozy" className="hz-btn hz-btn-primary">
              Vybrat vůz
            </a>
            <a href="tel:+420543210987" className="hz-btn hz-btn-ghost">
              Zavolat pobočku
            </a>
          </div>

          {/* Signature: jízdní pruh — středová čára silnice */}
          <div className="hz-lane" aria-hidden="true">
            <div className="hz-lane-dash"></div>
          </div>

          <dl className="hz-hero-facts">
            <div className="hz-fact">
              <dt>Vozů skladem v Brně</dt>
              <dd>60+</dd>
            </div>
            <div className="hz-fact">
              <dt>Vyzvednutí od rezervace</dt>
              <dd>2 hod</dd>
            </div>
            <div className="hz-fact">
              <dt>Poboček v ČR a SR</dt>
              <dd>7</dd>
            </div>
            <div className="hz-fact">
              <dt>Vrácení v jiném městě</dt>
              <dd>Ano</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ===== VOZOVÝ PARK ===== */}
      <section className="hz-fleet" id="vozy" aria-labelledby="fleet-title">
        <div className="hz-wrap">
          <div className="hz-section-head">
            <p className="hz-eyebrow">Vozový park</p>
            <h2 id="fleet-title" className="hz-section-title">
              Na co dnes potřebujete auto?
            </h2>
            <p className="hz-section-lead">
              Šest kategorií, jasné ceny. Všechny vozy mají povinné ručení,
              dálniční známku a asistenci v ceně — žádné překvapení u přepážky.
            </p>
          </div>

          <div className="hz-fleet-grid">
            {vozy.map((vuz) => (
              <article className="hz-car" key={vuz.model}>
                <div className="hz-car-plate">
                  <span className="hz-car-kat">{vuz.kategorie}</span>
                  <span className="hz-car-cena">{vuz.denOd}</span>
                </div>
                <h3 className="hz-car-model">{vuz.model}</h3>
                <p className="hz-car-popis">{vuz.popis}</p>
                <p className="hz-car-specs">
                  <span>{vuz.mista}</span>
                  <span aria-hidden="true">·</span>
                  <span>{vuz.prevodovka}</span>
                </p>
              </article>
            ))}
          </div>

          <p className="hz-fleet-note">
            Ceny platí při pronájmu na 3 a více dní, včetně DPH a základního
            pojištění. Kratší pronájmy a doplňky (dětská sedačka, GPS, druhý
            řidič) naceníme při rezervaci.
          </p>
        </div>
      </section>

      {/* ===== JAK TO PROBÍHÁ ===== */}
      <section className="hz-how" id="pujceni" aria-labelledby="how-title">
        <div className="hz-wrap">
          <div className="hz-section-head hz-section-head-dark">
            <p className="hz-eyebrow hz-eyebrow-dark">Jak to probíhá</p>
            <h2 id="how-title" className="hz-section-title">
              Od rezervace k volantu — tři zastávky
            </h2>
          </div>

          <ol className="hz-steps">
            {kroky.map((krok) => (
              <li className="hz-step" key={krok.znacka}>
                <span className="hz-step-km" aria-hidden="true">
                  {krok.znacka}
                </span>
                <h3 className="hz-step-title">{krok.titulek}</h3>
                <p className="hz-step-text">{krok.text}</p>
              </li>
            ))}
          </ol>

          <div className="hz-trust">
            <blockquote className="hz-quote">
              <p>
                „Stěhovali jsme se z Králova Pole do Bystrce. Dodávku jsem si
                vyzvedl v sobotu ráno, večer vrátil — celé to zabralo míň času
                než samotné balení krabic.“
              </p>
              <footer className="hz-quote-author">Martin K., Brno-Bystrc</footer>
            </blockquote>

            <div className="hz-trust-facts">
              <p className="hz-trust-item">
                <strong>19,8 milionu členů</strong> věrnostního programu Gold
                Plus Rewards po celém světě — body sbíráte i v Brně.
              </p>
              <p className="hz-trust-item">
                <strong>7 poboček</strong> v ČR a na Slovensku: Brno, Praha,
                Ostrava, Liberec, České Budějovice, Bratislava, Košice.
              </p>
              <p className="hz-trust-item">
                <strong>Věrnostní program #1</strong> podle ocenění FlyerTalk —
                předběhněte frontu a jděte rovnou k autu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
