export const metadata = {
  title: "Autolakovna K + P — lakovna a karosárna, České Budějovice",
  description:
    "Autolakovna K + P ve Starých Hodějovicích u Českých Budějovic: lakování osobních i užitkových vozů, veteránů, motocyklů a disků, karosářské práce a rovnání na stolici. Po–So 7:00–17:00.",
  openGraph: {
    title: "Autolakovna K + P — lakovna a karosárna, České Budějovice",
    description:
      "Lakování vozidel, veteránů, motocyklů a disků. Karosářské práce a rovnání na stolici. Staré Hodějovice, České Budějovice.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "RAL",
    nazev: "Lakování osobních vozů a motocyklů",
    popis:
      "Celolaky i lokální opravy po dopravní nehodě. Barvu namícháme přesně podle kódu odstínu vašeho vozu, přechody stříkáme do ztracena — oprava není poznat.",
  },
  {
    kod: "XXL",
    nazev: "Nákladní a užitková vozidla",
    popis:
      "Dodávky, skříňové nástavby, firemní flotily. Lakujeme i ve firemních barvách včetně přípravy ploch pro polepy.",
  },
  {
    kod: "VET",
    nazev: "Veteráni a renovace",
    popis:
      "Dobové odstíny, poctivá příprava podkladu a antikorozní ochrana. Karoserii srovnáme klempířsky, ne tmelem.",
  },
  {
    kod: "DSK",
    nazev: "Lakování disků a dílů",
    popis:
      "Disky na míru v jakémkoli odstínu, kapoty, nárazníky, díly pro tuning i závodní speciály. Lakujeme i kompozitní výrobky.",
  },
  {
    kod: "KAR",
    nazev: "Karosářské práce a rovnání na stolici",
    popis:
      "Vlastní klempírna pod jednou střechou: rovnání skeletu na stolici, výměny dílů, svařování. Auto od nás odjede rovné a nalakované.",
  },
  {
    kod: "KOR",
    nazev: "Antikorozní ochrana a konstrukce",
    popis:
      "Ochrana dutin a podvozků, lakování ocelových konstrukcí a strojírenských dílů. Aby rez neměla šanci.",
  },
];

const kroky = [
  {
    vrstva: "Klempírna",
    text: "Poškozený plech srovnáme nebo vyměníme, skelet změříme a vyrovnáme na stolici. Bez rovného podkladu nemá lak smysl.",
  },
  {
    vrstva: "Základ a tmel",
    text: "Odmaštění, broušení, antikorozní základ a jen tolik tmelu, kolik je opravdu potřeba. Tady se rozhoduje o životnosti opravy.",
  },
  {
    vrstva: "Plnič",
    text: "Plnicí vrstva zarovná povrch do roviny. Brousíme pod lampou, dokud plocha nesedí na dotek i na odlesk.",
  },
  {
    vrstva: "Báze — odstín",
    text: "Barvu namícháme podle výrobního kódu a stříkáme vzorek. Metalízy tónujeme, dokud odstín nesedí na sousední díl.",
  },
  {
    vrstva: "Čirý lak a leštění",
    text: "Dvě vrstvy čirého laku v kabině, vytvrzení a strojní leštění do zrcadlového lesku. Teprve pak auto vracíme.",
  },
];

export default function Page() {
  return (
    <main className="kp">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <span className="wordmark" aria-label="Autolakovna K plus P">
              <span className="wm-k">K</span>
              <span className="wm-plus" aria-hidden="true">+</span>
              <span className="wm-p">P</span>
              <span className="wm-sub">autolakovna &amp; karosárna</span>
            </span>
            <a className="hero-tel" href="tel:+420605265053">
              +420&nbsp;605&nbsp;265&nbsp;053
            </a>
          </div>

          <h1 className="hero-title">
            <span className="ht-line ht-1">Rovný plech.</span>
            <span className="ht-line ht-2">Přesný odstín.</span>
            <span className="ht-line ht-3">
              Zrcadlový <em>lesk.</em>
            </span>
          </h1>

          <p className="hero-lead">
            Lakovna a klempírna pod jednou střechou ve Starých Hodějovicích u
            Českých Budějovic. Od bouraného blatníku po celolak veterána —
            auto od nás odjede tak, že opravu nepoznáte.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420605265053">
              Zavolat do lakovny
            </a>
            <a className="btn btn-line" href="mailto:autolakovnaK-P@seznam.cz">
              Poslat fotky poškození
            </a>
          </div>

          <p className="hero-hours">
            Po–So 7:00–17:00 · Na návsi 3, Staré Hodějovice
          </p>
        </div>

        {/* signature: vzorník / stříkaný gradient vrstev laku */}
        <div className="spray" aria-hidden="true">
          <span className="spray-band sb-1"></span>
          <span className="spray-band sb-2"></span>
          <span className="spray-band sb-3"></span>
          <span className="spray-band sb-4"></span>
          <span className="spray-band sb-5"></span>
          <span className="spray-labels">
            <span>základ</span>
            <span>plnič</span>
            <span>báze</span>
            <span>čirý lak</span>
            <span>lesk</span>
          </span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow">Co lakujeme a rovnáme</p>
          <h2 id="sluzby-h">
            Od disku po dodávku, od tuningu po veterána
          </h2>
        </div>

        <ul className="karty">
          {sluzby.map((s) => (
            <li key={s.kod} className="karta">
              <span className="karta-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== VRSTVY / DŮVĚRA ===== */}
      <section className="vrstvy" aria-labelledby="vrstvy-h">
        <div className="sec-head sec-head--light">
          <p className="eyebrow">Proč to u nás drží</p>
          <h2 id="vrstvy-h">Lak je pět vrstev. Šidit se nedá ani jedna.</h2>
          <p className="sec-lead">
            Každé auto u nás projde stejným postupem — proto naše opravy vypadají
            stejně dobře i po letech. Lakujeme i speciály pro motorsport, kde se
            každá chyba pozná v první zatáčce.
          </p>
        </div>

        <ol className="postup">
          {kroky.map((k, i) => (
            <li key={k.vrstva} className="krok">
              <span className="krok-cislo" aria-hidden="true">
                vrstva {i + 1}
              </span>
              <div className="krok-telo">
                <h3>{k.vrstva}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="vrstvy-fakta">
          <div className="fakt">
            <strong>Staré Hodějovice</strong>
            <span>5 minut od Českých Budějovic, parkování u dílny</span>
          </div>
          <div className="fakt">
            <strong>Po–So 7:00–17:00</strong>
            <span>auto přijmeme i v sobotu, domluvíme se po telefonu</span>
          </div>
          <div className="fakt">
            <strong>Klempírna + lakovna</strong>
            <span>jedna dílna, jedna odpovědnost — nic nevozíme jinam</span>
          </div>
        </div>
      </section>
    </main>
  );
}
