import type { CSSProperties } from "react";

const kontakt = {
  tel: "+420 495 260 360",
  telHref: "+420495260360",
  email: "irena.mizerova@zdravpo.cz",
};

const mereni = [
  { obvod: "Šíře nohy", popis: "měříme přes nárt, ne přes prsty" },
  { obvod: "Délka", popis: "od paty po nejdelší prst, vstoje" },
  { obvod: "Nárt", popis: "kvůli otokům a bandážím" },
];

const obuv = [
  {
    cislo: "01",
    nazev: "Obuv pro diabetiky",
    popis:
      "Bezešvá vnitřní podšívka, žádné tlačící švy. Vyjímatelná stélka, aby se vešla vaše ortopedická vložka. Volíme podle citlivosti nohy.",
    znak: "měkký vnitřek",
  },
  {
    cislo: "02",
    nazev: "Obuv pro seniory",
    popis:
      "Široké nazouvání, pevná pata, protiskluzová podešev. Zapínání na suchý zip zvládnete i jednou rukou nebo vsedě.",
    znak: "suchý zip",
  },
  {
    cislo: "03",
    nazev: "Zdravotní obuv dámská a pánská",
    popis:
      "Anatomická stélka, pružná podešev, prodyšný svršek. Na běžné nošení i na stání v práci celý den.",
    znak: "anatomická stélka",
  },
  {
    cislo: "04",
    nazev: "Dětská ortopedická obuv",
    popis:
      "Zpevněná pata, klenba podložená správně pro rostoucí nohu. Přineste dítě s sebou, měříme obě nožky.",
    znak: "zpevněná pata",
  },
  {
    cislo: "05",
    nazev: "Pracovní obuv",
    popis:
      "Do zdravotnictví i do provozu. Omyvatelný povrch, stabilní podpatek, protiskluz. K obuvi doplníme ponožky se zdravotním lemem.",
    znak: "protiskluz",
  },
  {
    cislo: "06",
    nazev: "Ortopedické vložky a podpory",
    popis:
      "Podpory příčné i podélné klenby, podpatěnky, korektory vbočeného palce. Vložku vybereme k vaší botě, ne naopak.",
    znak: "na míru boty",
  },
];

export default function Page() {
  return (
    <main className="zp">
      <header className="zp-nav">
        <a className="zp-mark" href="#uvod" aria-label="ZDRAVPO Hradec Králové, úvod">
          <span className="zp-mark-a">ZDRAV</span>
          <span className="zp-mark-b">PO</span>
          <span className="zp-mark-loc">Hradec Králové</span>
        </a>
        <nav className="zp-nav-links" aria-label="Hlavní">
          <a href="#obuv">Obuv</a>
          <a href="#duvera">O prodejně</a>
          <a className="zp-nav-call" href={`tel:${kontakt.telHref}`}>Zavolat</a>
        </nav>
      </header>

      <section className="zp-hero" id="uvod">
        <div className="zp-hero-copy">
          <p className="zp-eyebrow">Zdravotnická obuv · Hradec Králové · od roku 1996</p>
          <h1 className="zp-h1">
            Bota, která<br />
            <span className="zp-h1-em">sedne noze.</span>
          </h1>
          <p className="zp-lede">
            Zdravotní a ortopedickou obuv nevybíráme podle čísla na krabici. Nohu
            vám změříme, poradíme šíři i klenbu a vložku doladíme přímo na prodejně.
            Pro diabetiky, seniory, děti i do práce.
          </p>
          <div className="zp-hero-cta">
            <a className="zp-btn" href={`tel:${kontakt.telHref}`}>Zavolat {kontakt.tel}</a>
            <a className="zp-btn-ghost" href="#obuv">Prohlédnout obuv</a>
          </div>
        </div>
        <figure className="zp-hero-fig">
          <img
            src="/hero.webp"
            alt="Zdravotní a ortopedická obuv na prodejně ZDRAVPO v Hradci Králové"
            className="zp-hero-img"
            width={880}
            height={880}
          />
          <figcaption className="zp-hero-cap">
            <span className="zp-cap-num">28</span>
            <span className="zp-cap-lab">let na Slezském Předměstí</span>
          </figcaption>
        </figure>
      </section>

      <section className="zp-measure" aria-label="Jak vybíráme obuv">
        <p className="zp-measure-lead">Než sáhneme po krabici, změříme tři věci:</p>
        <ol className="zp-measure-list">
          {mereni.map((m, i) => (
            <li key={m.obvod} className="zp-measure-item">
              <span className="zp-measure-i">{String(i + 1)}</span>
              <span className="zp-measure-o">{m.obvod}</span>
              <span className="zp-measure-p">{m.popis}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="zp-obuv" id="obuv">
        <div className="zp-sec-head">
          <h2 className="zp-h2">Co u nás obujete</h2>
          <p className="zp-sec-sub">
            Šest skupin obuvi, které vedeme skladem nebo objednáme. U každé
            poznáte, čím se liší — a proč právě ona sedne vaší noze.
          </p>
        </div>
        <ul className="zp-grid">
          {obuv.map((o) => (
            <li key={o.cislo} className="zp-card">
              <span className="zp-card-num">{o.cislo}</span>
              <span className="zp-card-tag">{o.znak}</span>
              <h3 className="zp-card-h">{o.nazev}</h3>
              <p className="zp-card-p">{o.popis}</p>
            </li>
          ))}
        </ul>
        <p className="zp-obuv-note">
          Co nemáme skladem, objednáme — i telefonicky. Při zhoršené mobilitě
          vyřídíme objednávku po telefonu na{" "}
          <a href={`tel:${kontakt.telHref}`}>{kontakt.tel}</a> nebo e‑mailem na{" "}
          <a href={`mailto:${kontakt.email}`}>{kontakt.email}</a>.
        </p>
      </section>

      <section className="zp-trust" id="duvera">
        <figure className="zp-trust-fig">
          <img
            src="/section-1.webp"
            alt="Poradenství při výběru zdravotní obuvi na prodejně ZDRAVPO"
            className="zp-trust-img"
            width={760}
            height={560}
          />
        </figure>
        <div className="zp-trust-copy">
          <p className="zp-eyebrow zp-eyebrow--dark">O prodejně</p>
          <h2 className="zp-h2">Poradíme, vyzkoušíme, dovezeme domů</h2>
          <p className="zp-trust-p">
            Od roku 1996 vybíráme zdravotnické pomůcky pro Hradečáky i okolí. U obuvi
            si vezmeme čas: necháme vás projít, sednout, vyzkoušet obě boty. Když se
            k nám nedostanete, přivezeme zboží po Hradci Králové zdarma, jinde přes
            Zásilkovnu podle ceníku.
          </p>
          <ul className="zp-facts">
            <li>
              <span className="zp-fact-k">Doprava</span>
              <span className="zp-fact-v">Po Hradci Králové zdarma až domů</span>
            </li>
            <li>
              <span className="zp-fact-k">Zásilkovna</span>
              <span className="zp-fact-v">Jsme výdejní i podací místo</span>
            </li>
            <li>
              <span className="zp-fact-k">Objednávky</span>
              <span className="zp-fact-v">Telefonicky i e‑mailem</span>
            </li>
          </ul>

          <div className="zp-hours">
            <img
              src="/section-2.webp"
              alt="Interiér prodejny zdravotnických potřeb ZDRAVPO"
              className="zp-hours-img"
              width={520}
              height={340}
            />
            <div className="zp-hours-box">
              <p className="zp-hours-h">Otevřeno</p>
              <p className="zp-hours-row">
                <span>Pondělí–pátek</span>
                <span className="zp-hours-t">8:00–12:00 · 12:30–16:30</span>
              </p>
              <p className="zp-hours-note">O prázdninách (1. 7.–21. 8.) jen do 16:00.</p>
              <a className="zp-btn zp-btn--full" href={`tel:${kontakt.telHref}`}>
                Zavolat na prodejnu
              </a>
              <a className="zp-mail" href={`mailto:${kontakt.email}`}>{kontakt.email}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
