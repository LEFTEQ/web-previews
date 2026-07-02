import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burrito Loco — Tex-Mex nonstop v Praze",
  description:
    "Burrito Loco Praha: čerstvé tex-mex burrita, tacos a quesadilly z lokálních surovin. Otevřeno nonstop, 7 dní v týdnu. Poskládej si vlastní burrito nebo objednej rozvoz.",
  openGraph: {
    title: "Burrito Loco — Tex-Mex nonstop v Praze",
    description:
      "Čerstvá burrita, tacos a quesadilly. Otevřeno celou noc, 7 dní v týdnu. Praha.",
    type: "website",
    locale: "cs_CZ",
    siteName: "Burrito Loco",
  },
};

const kroky = [
  {
    krok: "Tortilla",
    popis: "Velká pšeničná, kukuřičná na tacos, nebo bowl bez tortilly.",
  },
  {
    krok: "Náplň",
    popis: "Kuřecí, carne asada steak, hovězí, carnitas, grilovaná zelenina nebo vegan.",
  },
  {
    krok: "Salsa",
    popis: "Od jemné pico de gallo po habanero, která tě probudí spolehlivěji než kafe.",
  },
  {
    krok: "Extra",
    popis: "Guacamole, jalapeños, sýr navíc, kukuřice, cilantro. Kombinuj, jak chceš.",
  },
];

const menu = [
  {
    nazev: "Burrito Grande",
    popis: "Velká tortilla plná sýru, rýže, fazolí a náplně podle výběru.",
    cena: "od 159 Kč",
    stitek: "nejprodávanější",
  },
  {
    nazev: "Kick Ass Burrito",
    popis: "Carne asada steak grilovaný na objednávku, guacamole, jalapeños a všechno ostatní.",
    cena: "229 Kč",
    stitek: "pro hladové",
  },
  {
    nazev: "Tacos",
    popis: "Měkká kukuřičná tortilla, náplň, sýr, ledový salát a salsa. Ber tři.",
    cena: "od 55 Kč",
    stitek: null,
  },
  {
    nazev: "Quesadilla Deluxe",
    popis: "Grilovaná tortilla s roztaveným sýrem a náplní, zakysaná smetana navrch.",
    cena: "od 159 Kč",
    stitek: null,
  },
  {
    nazev: "Burrito Bowl",
    popis: "Všechno z burrita v misce — rýže, fazole, sýr, chipsy a salsa. Bez tortilly.",
    cena: "od 159 Kč",
    stitek: null,
  },
  {
    nazev: "Vegan menu",
    popis: "Burrito, bowl, tacos i salát ve veganské verzi s grilovanou zeleninou.",
    cena: "od 55 Kč",
    stitek: "100 % rostlinné",
  },
];

const duvody = [
  {
    titulek: "Otevřeno, když ostatní spí",
    text: "Nonstop, 7 dní v týdnu. Ať jdeš z noční směny, z baru nebo prostě nemůžeš spát — u nás se rolují burrita i ve tři ráno.",
  },
  {
    titulek: "Čerstvé a od místních",
    text: "Zeleninu, maso i tortilly bereme od lokálních dodavatelů a připravujeme každý den čerstvé. Žádné mražené polotovary, žádný mikrovlnný trik.",
  },
  {
    titulek: "Tisíce kombinací",
    text: "Každé burrito si poskládáš sám — od salsy po poslední lístek cilantra. Dvě stejná burrita tu vzniknou jedině omylem.",
  },
  {
    titulek: "Rozvoz po Praze",
    text: "Fotbal, párty nebo jen líný večer? Objednej přes naše partnery a burrito dorazí za tebou, teplé a zabalené jak má být.",
  },
];

export default function Page() {
  return (
    <main className="bl">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Burrito Loco — úvod">
        <header className="hero-top">
          <span className="wordmark">
            BURRITO<em>LOCO</em>
          </span>
          <span className="hero-badge" aria-label="Otevřeno nonstop">
            <span className="badge-dot" aria-hidden="true"></span>
            otevřeno nonstop
          </span>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">Tex-Mex street food · Praha</p>
          <h1 className="hero-title">
            <span className="line line-1">ROLUJEME</span>
            <span className="line line-2">BURRITA</span>
            <span className="line line-3">
              DO <span className="rana">RÁNA</span>
            </span>
          </h1>
          <p className="hero-sub">
            Čerstvé tortilly, salsa podle tvé odvahy a kuchyně, která nezavírá.
            Ve dne, v noci, ve tři ráno — burrito tu na tebe čeká.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="btn btn-hot">
              Prohlédnout menu
            </a>
            <a href="#proc" className="btn btn-ghost">
              Proč Burrito Loco
            </a>
          </div>
        </div>

        {/* signature: řez burritem — soustředné vrstvy náplně */}
        <div className="burrito-cut" aria-hidden="true">
          <div className="ring ring-tortilla"></div>
          <div className="ring ring-rice"></div>
          <div className="ring ring-beans"></div>
          <div className="ring ring-salsa"></div>
          <div className="ring ring-guac"></div>
          <div className="ring ring-core"></div>
        </div>

        <div className="hero-marquee" aria-hidden="true">
          <span>
            SALSA VERDE · PICO DE GALLO · HABANERO · CHIPOTLE · GUACAMOLE ·
            SALSA VERDE · PICO DE GALLO · HABANERO · CHIPOTLE · GUACAMOLE ·
          </span>
        </div>
      </section>

      {/* ===== SEKCE 1: MENU ===== */}
      <section className="sekce sekce-menu" id="menu" aria-label="Menu">
        <div className="sekce-hlava">
          <h2 className="sekce-titul">Poskládej si to po svém</h2>
          <p className="sekce-perex">
            Každé jídlo stavíme před tebou ve čtyřech krocích. Tortilla, náplň,
            salsa, extra — tisíce kombinací a všechny tvoje.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="krok" key={k.krok}>
              <span className="krok-cislo" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="krok-nazev">{k.krok}</h3>
              <p className="krok-popis">{k.popis}</p>
            </li>
          ))}
        </ol>

        <ul className="menu-grid">
          {menu.map((m) => (
            <li className="jidlo" key={m.nazev}>
              <div className="jidlo-hlava">
                <h3 className="jidlo-nazev">{m.nazev}</h3>
                <span className="jidlo-cena">{m.cena}</span>
              </div>
              <p className="jidlo-popis">{m.popis}</p>
              {m.stitek && <span className="jidlo-stitek">{m.stitek}</span>}
            </li>
          ))}
        </ul>

        <p className="menu-pozn">
          K tomu polévky s chilli, chips &amp; salsa, brownie s chipotle a agua
          fresca. Kompletní nabídka je na pobočce — některé položky se mohou
          lišit podle lokace.
        </p>
      </section>

      {/* ===== SEKCE 2: PROČ MY ===== */}
      <section className="sekce sekce-proc" id="proc" aria-label="Proč Burrito Loco">
        <div className="sekce-hlava">
          <h2 className="sekce-titul sekce-titul-svetly">
            Praha nespí. My taky ne.
          </h2>
          <p className="sekce-perex sekce-perex-svetly">
            Od roku, kdy jsme zrolovali první burrito, platí tři věci: čerstvé
            suroviny, otevřeno pořád a salsa, na kterou nezapomeneš.
          </p>
        </div>

        <div className="duvody">
          {duvody.map((d) => (
            <article className="duvod" key={d.titulek}>
              <span className="duvod-linka" aria-hidden="true"></span>
              <h3 className="duvod-titulek">{d.titulek}</h3>
              <p className="duvod-text">{d.text}</p>
            </article>
          ))}
        </div>

        <div className="hodiny" role="presentation">
          <span className="hodiny-cas">00:00–24:00</span>
          <span className="hodiny-pozn">
            pondělí až neděle · Praha · rozvoz přes partnery
          </span>
        </div>
      </section>
    </main>
  );
}
