import type { CSSProperties } from "react";

const novinky = [
  {
    znacka: "CCM",
    nazev: "Tacks XR90 INT",
    typ: "Hokejové brusle",
    cena: "12 599",
    puvodni: "13 999",
    sklad: "Skladem více než 5 párů",
    doprava: true,
  },
  {
    znacka: "Bauer",
    nazev: "Vapor Fly30 SR",
    typ: "Hokejové brusle",
    cena: "8 099",
    puvodni: "8 999",
    sklad: "Skladem více než 5 párů",
    doprava: true,
  },
  {
    znacka: "Bauer",
    nazev: "Hůl Pastrňák JR 40",
    typ: "Hokejová hůl",
    cena: "2 699",
    puvodni: "2 999",
    sklad: "Skladem více než 5 kusů",
    doprava: false,
  },
  {
    znacka: "Bauer",
    nazev: "Re-Akt 90 Combo",
    typ: "Helma s mřížkou",
    cena: "5 039",
    puvodni: "5 599",
    sklad: "Skladem více než 5 kusů",
    doprava: true,
  },
];

const prodejny = [
  {
    nazev: "Dlážděná 3",
    mesto: "Praha 1",
    dny: "Po–Pá 10–19 · So 10–14",
    tel: "739 428 367",
    poznamka: "Naše hlavní prodejna kousek od Masarykova nádraží.",
  },
  {
    nazev: "Na Rozdílu 1",
    mesto: "Praha 6",
    dny: "Po–Pá 13–19",
    tel: "602 720 659",
    poznamka: "Servis bruslí i osobní odběr objednávek.",
  },
  {
    nazev: "Mikuleckého 1584",
    mesto: "Praha 4",
    dny: "Po–Pá 13–19",
    tel: "739 428 367",
    poznamka: "Výbava pro hráče i brankáře přímo na Krči.",
  },
];

const recenze = [
  {
    text: "Velmi rychlé dodání, spolehlivost, zboží odpovídá fotografii i popisu. Maximální spokojenost.",
    datum: "1. 6. 2026",
  },
  {
    text: "Perfektní přístup na prodejně. Poradili mi s výběrem velikosti bruslí a nechali vyzkoušet.",
    datum: "13. 5. 2026",
  },
  {
    text: "Nákup během dvou dnů zcela bez chyby. Rychlá, milá a ochotná obsluha.",
    datum: "29. 4. 2026",
  },
];

export default function Page() {
  return (
    <main className="jb">
      <header className="jb-top">
        <a className="jb-mark" href="#novinky" aria-label="JB Sport – úvod">
          <span className="jb-mark-jb">JB</span>
          <span className="jb-mark-sport">SPORT</span>
        </a>
        <p className="jb-top-note">Hokej &amp; brusle · Praha · rodinná firma od roku 1995</p>
      </header>

      <section className="jb-hero" aria-labelledby="jb-hero-title">
        <div className="jb-hero-media">
          <img
            src="/hero.webp"
            alt="Hokejová výstroj a brusle z prodejny JB Sport"
            className="jb-hero-img"
            width={1200}
            height={900}
          />
        </div>
        <div className="jb-hero-body">
          <p className="jb-eyebrow">Hokejová prodejna &amp; servis · Praha</p>
          <h1 id="jb-hero-title" className="jb-hero-title">
            Nabrousíme,
            <br />
            <span className="jb-hero-em">vystrojíme,</span>
            <br />
            pošleme na led.
          </h1>
          <p className="jb-hero-lead">
            Třicet let broušení bruslí a výběru výstroje pro hráče, brankáře i celé
            týmy. Přijďte na kteroukoli ze tří pražských prodejen, nebo si nechte
            zboží poslat druhý den domů.
          </p>
          <div className="jb-hero-cta">
            <a className="jb-btn" href="#novinky">
              Prohlédnout novinky
            </a>
            <a className="jb-btn jb-btn-ghost" href="tel:+420739428367">
              Zavolat na prodejnu
            </a>
          </div>
          <dl className="jb-stats">
            <div>
              <dt>Prodejny</dt>
              <dd>3× v Praze</dd>
            </div>
            <div>
              <dt>Broušení bruslí</dt>
              <dd>na počkání</dd>
            </div>
            <div>
              <dt>Recenzí na Heurece</dt>
              <dd>600+</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="jb-section" id="novinky" aria-labelledby="jb-novinky-title">
        <div className="jb-section-head">
          <p className="jb-eyebrow">Právě naskladněno</p>
          <h2 id="jb-novinky-title" className="jb-section-title">
            Nové brusle, hole a helmy
          </h2>
          <p className="jb-section-lead">
            Vybíráme od Bauer a CCM to, co se nám osvědčilo na ledě i v servisu.
            Ceny jsou včetně DPH, u vybraných kusů posíláme dopravu zdarma.
          </p>
        </div>

        <ul className="jb-grid">
          {novinky.map((p) => (
            <li key={p.nazev} className="jb-card">
              <div className="jb-card-tags">
                <span className="jb-tag jb-tag-brand">{p.znacka}</span>
                {p.doprava && <span className="jb-tag">Doprava zdarma</span>}
              </div>
              <p className="jb-card-type">{p.typ}</p>
              <h3 className="jb-card-name">{p.nazev}</h3>
              <p className="jb-card-stock">{p.sklad}</p>
              <p className="jb-card-price">
                <span className="jb-price-now">{p.cena} Kč</span>
                <span className="jb-price-old">{p.puvodni} Kč</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="jb-strip" role="list">
          <span role="listitem">Doručujeme do ČR i EU</span>
          <span role="listitem">Servis hokejových i inline bruslí</span>
          <span role="listitem">Poradíme s výběrem velikosti</span>
        </div>
      </section>

      <section className="jb-about" aria-labelledby="jb-about-title">
        <div className="jb-about-media">
          <img
            src="/section-2.webp"
            alt="Interiér prodejny JB Sport s hokejovým vybavením"
            className="jb-about-img"
            width={1000}
            height={800}
          />
        </div>
        <div className="jb-about-body">
          <p className="jb-eyebrow">Kdo jsme</p>
          <h2 id="jb-about-title" className="jb-section-title">
            Česká rodinná firma, která hokeji rozumí
          </h2>
          <p className="jb-about-lead">
            JB Sport prodává hokejovou výstroj v Praze už třicet let. Neprodáváme
            jen krabice — bruslím rovnáme žlábek, výstroj měříme na míru a poradíme
            i s výběrem hole pro odrůstající děti.
          </p>

          <ul className="jb-shops">
            {prodejny.map((s, i) => (
              <li key={s.nazev} className="jb-shop">
                <span className="jb-shop-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="jb-shop-name">
                    {s.nazev} <span>· {s.mesto}</span>
                  </h3>
                  <p className="jb-shop-hours">{s.dny}</p>
                  <p className="jb-shop-note">{s.poznamka}</p>
                  <a className="jb-shop-tel" href={`tel:+420${s.tel.replace(/\s/g, "")}`}>
                    {s.tel}
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="jb-reviews" aria-label="Recenze zákazníků">
            <h3 className="jb-reviews-title">Co říkají zákazníci</h3>
            {recenze.map((r) => (
              <blockquote key={r.datum} className="jb-review">
                <p>„{r.text}“</p>
                <cite>Recenze z {r.datum}</cite>
              </blockquote>
            ))}
            <p className="jb-reviews-foot">
              Přes 600 hodnocení najdete na naší stránce na Heurece.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
