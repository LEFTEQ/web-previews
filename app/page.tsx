const kamery = [
  {
    kod: "TURRET / 8 MPx",
    nazev: "Kamera na vjezd a dvůr",
    popis:
      "Turret kamera s nočním přísvitem do 30 metrů a dvěma mikrofony. Poznáte SPZ i obličej — ve dne i ve tmě.",
    detail: "Hikvision · IP67 · záznam na SD i rekordér",
  },
  {
    kod: "PTZ / 25× ZOOM",
    nazev: "Otočná kamera na areál",
    popis:
      "Otočná PTZ kamera s 25× optickým zoomem a dosvitem až 400 metrů. Jedna kamera uhlídá parkoviště, sklad i plot.",
    detail: "DarkFighter · stěrač · vidí i za deště",
  },
  {
    kod: "DOME / 4K",
    nazev: "Kamera do provozovny",
    popis:
      "Nenápadná stropní dome kamera v rozlišení 4K. Citlivost 0,0005 lux — obraz má i tam, kde vy už nevidíte nic.",
    popisky: [],
    detail: "DarkFighter 2.0 · širokoúhlý záběr · antivandal",
  },
  {
    kod: "INTERKOM / 1080p",
    nazev: "Video vrátný ke dveřím",
    popis:
      "Venkovní tablo s Full HD kamerou a 7\" barevný monitor uvnitř. Vidíte, kdo zvoní, dřív než otevřete.",
    detail: "Hikvision · povrchová montáž · pro dům i firmu",
  },
];

const kroky = [
  {
    krok: "Obhlídka",
    text: "Přijedeme k vám do Brna nebo okolí, projdeme objekt a řekneme, kam kamery dávají smysl — a kam ne. Zdarma a bez závazku.",
  },
  {
    krok: "Návrh na míru",
    text: "Dostanete konkrétní nabídku s typy kamer, úhly záběru a cenou. Žádné položky navíc, žádná překvapení na faktuře.",
  },
  {
    krok: "Montáž a kabeláž",
    text: "Kamery, rekordér i kabelové trasy instalují naši technici, ne subdodávka. Po montáži uklidíme a vše vám předvedeme.",
  },
  {
    krok: "Servis a záruka",
    text: "Systém hlídáme i po předání. Když kamera vypadne, víme to dřív než vy — a přijedeme ji opravit.",
  },
];

export default function Page() {
  return (
    <main className="ab">
      {/* ===== HERO ===== */}
      <header className="ab-hero">
        <div className="ab-hero__top">
          <div className="ab-wordmark" aria-label="ALARM ABSOLON">
            <span className="ab-wordmark__dot" aria-hidden="true" />
            <span className="ab-wordmark__text">
              ALARM<b>ABSOLON</b>
            </span>
          </div>
          <p className="ab-hero__rec" aria-hidden="true">
            <span className="ab-rec-dot" /> REC · BRNO · 24/7
          </p>
        </div>

        <div className="ab-hero__stage">
          {/* signature: hledáček kamery */}
          <div className="ab-finder" aria-hidden="true">
            <span className="ab-finder__corner ab-finder__corner--tl" />
            <span className="ab-finder__corner ab-finder__corner--tr" />
            <span className="ab-finder__corner ab-finder__corner--bl" />
            <span className="ab-finder__corner ab-finder__corner--br" />
            <span className="ab-finder__cross" />
          </div>

          <h1 className="ab-hero__title">
            <span className="ab-hero__line ab-hero__line--1">Vidíme,</span>
            <span className="ab-hero__line ab-hero__line--2">
              co se děje<span className="ab-hero__blink">_</span>
            </span>
            <span className="ab-hero__line ab-hero__line--3">u vás na dvoře.</span>
          </h1>

          <p className="ab-hero__lead">
            Kamerové systémy pro firmy i domy v Brně a okolí. Navrhneme, namontujeme
            a servisujeme — od jedné kamery u vchodu po otočné kamery přes celý areál.
          </p>

          <div className="ab-hero__meta" role="list">
            <span role="listitem">Hikvision · Jablotron · RISCO</span>
            <span role="listitem">Vlastní technici, ne subdodávky</span>
            <span role="listitem">Záznam ve 4K, přístup z mobilu</span>
          </div>
        </div>

        <div className="ab-hero__strip" aria-hidden="true">
          <span>CAM 01 — VJEZD</span>
          <span>CAM 02 — SKLAD</span>
          <span>CAM 03 — PARKOVIŠTĚ</span>
          <span>CAM 04 — VCHOD</span>
        </div>
      </header>

      {/* ===== SEKCE 1: CO NAMONTUJEME ===== */}
      <section className="ab-sekce" aria-labelledby="nadpis-kamery">
        <div className="ab-sekce__hlava">
          <p className="ab-eyebrow">Co vám namontujeme</p>
          <h2 id="nadpis-kamery" className="ab-sekce__titul">
            Správná kamera na správné místo
          </h2>
          <p className="ab-sekce__perex">
            Neprodáváme krabice z katalogu. Ke každému objektu vybereme kameru,
            která na daném místě opravdu něco uvidí — v noci, za deště i v protisvětle.
          </p>
        </div>

        <div className="ab-kamery">
          {kamery.map((k) => (
            <article className="ab-karta" key={k.kod}>
              <p className="ab-karta__kod">{k.kod}</p>
              <h3 className="ab-karta__nazev">{k.nazev}</h3>
              <p className="ab-karta__popis">{k.popis}</p>
              <p className="ab-karta__detail">{k.detail}</p>
            </article>
          ))}
        </div>

        <p className="ab-sekce__pozn">
          Kromě kamer instalujeme i zabezpečovací ústředny Jablotron, venkovní
          detektory RISCO a video interkomy Comelit. Vše z jedné ruky, jeden servis.
        </p>
      </section>

      {/* ===== SEKCE 2: JAK PRACUJEME / DŮVĚRA ===== */}
      <section className="ab-sekce ab-sekce--tmava" aria-labelledby="nadpis-postup">
        <div className="ab-sekce__hlava">
          <p className="ab-eyebrow ab-eyebrow--svetly">Jak to u nás probíhá</p>
          <h2 id="nadpis-postup" className="ab-sekce__titul">
            Od obhlídky k prvnímu záznamu
          </h2>
          <p className="ab-sekce__perex">
            Montujeme zabezpečení přes třicet let. Víme, že kamera je k ničemu,
            když je špatně nasměrovaná — proto začínáme vždy u vás na místě.
          </p>
        </div>

        <ol className="ab-postup">
          {kroky.map((k, i) => (
            <li className="ab-krok" key={k.krok}>
              <span className="ab-krok__cislo" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="ab-krok__titul">{k.krok}</h3>
                <p className="ab-krok__text">{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="ab-duvera">
          <blockquote className="ab-citace">
            <p>
              „Po vloupání do skladu nám Absolon během týdne navrhl a namontoval
              osm kamer. Když se letos v zimě někdo motal kolem plotu, měli jsme
              záznam pro policii do hodiny.“
            </p>
            <footer className="ab-citace__autor">
              — vedoucí provozu, velkoobchod, Brno-Slatina
            </footer>
          </blockquote>
          <div className="ab-fakta">
            <div className="ab-fakt">
              <span className="ab-fakt__cislo">30+</span>
              <span className="ab-fakt__popis">let montujeme zabezpečení</span>
            </div>
            <div className="ab-fakt">
              <span className="ab-fakt__cislo">Brno</span>
              <span className="ab-fakt__popis">a okolí do 50 km — přijedeme</span>
            </div>
            <div className="ab-fakt">
              <span className="ab-fakt__cislo">24/7</span>
              <span className="ab-fakt__popis">vaše kamery zaznamenávají</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
