import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Rekonstrukce koupelny",
      popis:
        "Demontáž, hydroizolace, obklady a dlažby, montáž sanity i nábytku. Přesná řemeslná práce od holé zdi po hotovou koupelnu.",
      cena: "od 95 000 Kč / projekt",
    },
    {
      cislo: "02",
      nazev: "Renovace bytů a domů",
      popis:
        "Bourání, hrubá stavba, sádrokartony, omítky, malby a pokládka podlah. Kompletní proměna prostoru na klíč.",
      cena: "od 8 500 Kč / m²",
    },
    {
      cislo: "03",
      nazev: "Rekonstrukce pro investory",
      popis:
        "Odolné řešení, které zvyšuje hodnotu bytu pro prodej i pronájem. Rychlá realizace a přehledný fotoreport z každé etapy.",
      cena: "individuální kalkulace",
    },
    {
      cislo: "04",
      nazev: "Podle vašeho projektu",
      popis:
        "Máte návrh od architekta? Převezmeme ho a zrealizujeme přesně podle výkresů a vašich představ.",
      cena: "dle rozsahu projektu",
    },
    {
      cislo: "05",
      nazev: "Byt na prodej i pronájem",
      popis:
        "Od drobných oprav po osvěžení interiéru tak, aby byt lépe působil na fotkách i při prohlídkách a získal na ceně.",
      cena: "po prohlídce bytu",
    },
    {
      cislo: "06",
      nazev: "Chytrá domácnost na klíč",
      popis:
        "Navrhneme a zrealizujeme prémiový systém Loxone přesně pro váš byt, dům a způsob života.",
      cena: "na míru",
    },
  ];

  const zakazky = [
    {
      nazev: "Dvoupodlažní byt s chytrou domácností a saunou",
      lokalita: "Praha 5",
      plocha: "200 m²",
      doba: "6 měsíců",
      popis:
        "Kompletní rekonstrukce na klíč — od příček a schodiště po instalace, povrchy a osvětlení. Minimalistický interiér v béžových tónech s podlahou ve vzoru rybí kosti.",
    },
    {
      nazev: "Byt 3+1 podle designového projektu",
      lokalita: "Praha 7",
      plocha: "85 m²",
      doba: "3 měsíce",
      popis:
        "Rekonstrukce koupelny v retro stylu s moderními prvky, konzultace s designérem, tichá demontáž a dodržení termínu do 30 dnů.",
    },
    {
      nazev: "Apartmán pro Airbnb",
      lokalita: "Vinohrady",
      plocha: "15 m²",
      doba: "1 měsíc",
      popis:
        "Přeměna původního hotelového pokoje na dvouúrovňový apartmán pro krátkodobý pronájem — praktický layout, dvě spací zóny a neutrální interiér.",
    },
    {
      nazev: "Koupelna a WC v rodinném domě",
      lokalita: "Praha",
      plocha: "18 m²",
      doba: "1,5 měsíce",
      popis:
        "Nové podlahové topení, odborná demontáž a montáž, vyrovnání podlah a kompletní instalace. Hotovo v termínu, čistě předáno.",
    },
  ];

  return (
    <main className="pr">
      <header className="pr-nav" aria-label="Hlavní navigace">
        <a className="pr-mark" href="#top" aria-label="Profi Rekonstrukce, domů">
          <span className="pr-mark-p">PROFI</span>
          <span className="pr-mark-r">REKONSTRUKCE</span>
        </a>
        <nav className="pr-nav-links" aria-label="Sekce">
          <a href="#sluzby">Služby</a>
          <a href="#zakazky">Zakázky</a>
          <a className="pr-nav-tel" href="tel:+420608701750">
            +420 608 701 750
          </a>
        </nav>
      </header>

      <section className="pr-hero" id="top">
        <div className="pr-hero-grid" aria-hidden="true">
          <span className="pr-level">
            <span className="pr-level-bubble" />
          </span>
        </div>

        <div className="pr-hero-inner">
          <p className="pr-eyebrow">
            <span>Holešovice · Praha</span>
            <span>Generální dodavatel</span>
          </p>

          <h1 className="pr-hero-title">
            <span className="pr-h-line pr-h-1">Z holé</span>
            <span className="pr-h-line pr-h-2">zdi na</span>
            <span className="pr-h-line pr-h-3">
              klíč<span className="pr-dot">.</span>
            </span>
          </h1>

          <p className="pr-hero-sub">
            Kompletní rekonstrukce bytů a domů v Praze. Bourání, instalace,
            povrchy i chytrá domácnost — jeden tým, jeden zodpovědný člověk,
            přehledný fotoreport z každé etapy.
          </p>

          <div className="pr-hero-actions">
            <a className="pr-btn pr-btn-solid" href="tel:+420608701750">
              Zavolat a probrat byt
            </a>
            <a className="pr-btn pr-btn-ghost" href="#zakazky">
              Prohlédnout zakázky
            </a>
          </div>

          <dl className="pr-hero-facts">
            <div>
              <dt>Termín</dt>
              <dd>koupelna do 30 dnů</dd>
            </div>
            <div>
              <dt>Cena</dt>
              <dd>od 8 500 Kč / m²</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>Praha a okolí</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pr-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="pr-sec-head">
          <p className="pr-sec-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-nadpis">
            Šest služeb, jeden zodpovědný tým
          </h2>
          <p className="pr-sec-lead">
            Od jedné koupelny po dvoupatrový byt na klíč. Vezmeme projekt,
            postavíme ho a předáme uklizený — vy řešíte jen barvy a klíče.
          </p>
        </div>

        <ul className="pr-cards">
          {sluzby.map((s) => (
            <li className="pr-card" key={s.cislo}>
              <span className="pr-card-num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="pr-card-cena">{s.cena}</p>
            </li>
          ))}
        </ul>

        <p className="pr-bonus">
          <strong>Bonus pro klienty:</strong> ve spolupráci s partnerem Senesi
          zajistíme slevu na dlažbu, obklady i koupelnový nábytek. Platí pro
          nové zakázky po individuální dohodě.
        </p>
      </section>

      <section
        className="pr-zakazky"
        id="zakazky"
        aria-labelledby="zakazky-nadpis"
      >
        <div className="pr-sec-head">
          <p className="pr-sec-eyebrow">Hotové zakázky</p>
          <h2 id="zakazky-nadpis">Práce, kterou si můžete přijít prohlédnout</h2>
          <p className="pr-sec-lead">
            Pár realizací napříč Prahou. Ke každé dodáváme fotoreport z průběhu —
            uvidíte, co se skrývá pod finálním obkladem.
          </p>
        </div>

        <ul className="pr-refs">
          {zakazky.map((z) => (
            <li className="pr-ref" key={z.nazev}>
              <div className="pr-ref-meta">
                <span className="pr-ref-loc">{z.lokalita}</span>
                <span className="pr-ref-dims">
                  {z.plocha} · {z.doba}
                </span>
              </div>
              <h3>{z.nazev}</h3>
              <p>{z.popis}</p>
            </li>
          ))}
        </ul>

        <div className="pr-trust">
          <p className="pr-trust-line">
            Projekt a stavební dozor · fotodokumentace každé etapy · práce v
            termínu a čistě předaná.
          </p>
          <p className="pr-trust-adresa">
            Osadní 1474/2, Holešovice, 170 00 Praha · profirekonstrukce@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}
