import type { CSSProperties } from "react";

const novinky = [
  {
    znacka: "CCM",
    nazev: "Brusle Tacks XR70 SR",
    stav: "Skladem více než 5 ks",
    cena: "7 739 Kč",
    puvodni: "8 599 Kč",
    stitek: "−10 %",
  },
  {
    znacka: "Bauer",
    nazev: "Hůl Pastrňák JR Flex 40",
    stav: "Skladem více než 5 ks",
    cena: "2 699 Kč",
    puvodni: "2 999 Kč",
    stitek: "TIP",
  },
  {
    znacka: "Bauer",
    nazev: "Helma Re-Akt 90 Combo",
    stav: "Skladem více než 5 ks",
    cena: "5 039 Kč",
    puvodni: "5 599 Kč",
    stitek: "Doprava zdarma",
  },
  {
    znacka: "CCM",
    nazev: "Kolečkové brusle Tacks AS550R SR",
    stav: "Skladem více než 5 ks",
    cena: "6 198 Kč",
    puvodni: "7 749 Kč",
    stitek: "−20 %",
  },
];

const kategorie = [
  {
    cislo: "01",
    nazev: "Pro hráče",
    popis: "Hole, brusle, výstroj, chrániče a helmy pro každou úroveň — od náborů po ligu.",
  },
  {
    cislo: "02",
    nazev: "Pro brankáře",
    popis: "Betony, lapačky, vyrážečky a masky. Poradíme s postavením i velikostí lapačky.",
  },
  {
    cislo: "03",
    nazev: "Broušení a servis",
    popis: "Vlastní hokejové brusky. Naostříme brusle na hokej i inline, vyměníme nože a kola.",
  },
  {
    cislo: "04",
    nazev: "Reprezentace a NHL",
    popis: "Dresy Českého hokeje, fanshop NHL a klubové kolekce. Nová prodejna v centru Prahy.",
  },
];

const prodejny = [
  {
    adresa: "Dlážděná 3, Praha 1",
    doba: "Po–Pá 10:00–19:00 · So 10:00–14:00",
    tel: "739 428 367",
  },
  {
    adresa: "Na Rozdílu 1, Praha 6",
    doba: "Po–Pá 13:00–19:00",
    tel: "602 720 659",
  },
  {
    adresa: "Mikuleckého 1584/1, Praha 4",
    doba: "Po–Pá 13:00–19:00 · So 9:00–12:00",
    tel: "739 428 367",
  },
];

const recenze = [
  {
    text: "Velmi rychlé dodání, spolehlivost, zboží odpovídá fotografii i popisu z webu. Maximální spokojenost.",
    datum: "1. 6. 2026",
  },
  {
    text: "Naostřili mi brusle na počkání a poradili s velikostí betonů. Perfektní přístup na prodejně.",
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
        <a className="jb-mark" href="#" aria-label="JB Sport — hokejové potřeby Praha">
          <span className="jb-mark__jb">JB</span>
          <span className="jb-mark__sport">SPORT</span>
        </a>
        <nav className="jb-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#servis">Broušení</a>
          <a href="#prodejny">Prodejny</a>
        </nav>
        <a className="jb-phone" href="tel:+420739428367">739 428 367</a>
      </header>

      <section className="jb-hero">
        <div className="jb-hero__media">
          <img
            src="/hero.webp"
            alt="Hokejová výstroj JB Sport — brusle, hole a chrániče připravené na led"
            width={1600}
            height={1100}
          />
        </div>
        <div className="jb-hero__panel">
          <p className="jb-eyebrow">Praha · rodinná firma na trhu 30 let</p>
          <h1 className="jb-hero__title">
            Vše na led,
            <br />
            <span className="jb-hero__accent">naostřené do rána.</span>
          </h1>
          <p className="jb-hero__lead">
            Hokejové brusle, hole, betony a chrániče značek CCM a Bauer. Do e‑shopu
            i na tři pražské prodejny, kde brusle rovnou naostříme a poradíme s velikostí.
          </p>
          <div className="jb-hero__cta">
            <a className="jb-btn jb-btn--primary" href="#sortiment">Prohlédnout sortiment</a>
            <a className="jb-btn jb-btn--ghost" href="#servis">Objednat broušení</a>
          </div>
          <dl className="jb-hero__stats">
            <div>
              <dt>Prodejny v Praze</dt>
              <dd>3</dd>
            </div>
            <div>
              <dt>Let na trhu</dt>
              <dd>30</dd>
            </div>
            <div>
              <dt>Recenzí na Heurece</dt>
              <dd>600+</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="jb-section" id="sortiment" aria-labelledby="sortiment-h">
        <div className="jb-section__head">
          <p className="jb-eyebrow">Sortiment</p>
          <h2 id="sortiment-h">Od náborů po první ligu</h2>
          <p className="jb-section__lead">
            Čtyři světy hokeje pod jednou střechou. Kompletní výstroj i drobnosti,
            které dojdou zrovna před zápasem.
          </p>
        </div>

        <ol className="jb-cats">
          {kategorie.map((k) => (
            <li className="jb-cat" key={k.cislo}>
              <span className="jb-cat__num" aria-hidden="true">{k.cislo}</span>
              <h3>{k.nazev}</h3>
              <p>{k.popis}</p>
            </li>
          ))}
        </ol>

        <div className="jb-goods">
          <div className="jb-goods__head">
            <h3>Skladem právě teď</h3>
            <p>Ceny včetně DPH. U vybraných kusů doprava zdarma.</p>
          </div>
          <ul className="jb-grid">
            {novinky.map((p) => (
              <li className="jb-card" key={p.nazev}>
                <div className="jb-card__top">
                  <span className="jb-card__brand">{p.znacka}</span>
                  <span className="jb-card__tag">{p.stitek}</span>
                </div>
                <h4 className="jb-card__name">{p.nazev}</h4>
                <p className="jb-card__stock">{p.stav}</p>
                <p className="jb-card__price">
                  <span className="jb-card__now">{p.cena}</span>
                  <span className="jb-card__was">{p.puvodni}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="jb-trust" id="servis" aria-labelledby="servis-h">
        <div className="jb-trust__grid">
          <div className="jb-trust__media">
            <img
              src="/section-1.webp"
              alt="Broušení hokejových bruslí na profesionální brusce v prodejně JB Sport"
              width={1200}
              height={900}
            />
            <img
              className="jb-trust__media--sec"
              src="/section-2.webp"
              alt="Prodejna JB Sport s hokejovou výstrojí a dresy"
              width={1200}
              height={900}
            />
          </div>
          <div className="jb-trust__body">
            <p className="jb-eyebrow">Broušení &amp; servis</p>
            <h2 id="servis-h">Naostříme na počkání, na hokej i na inline</h2>
            <p className="jb-trust__lead">
              Na prodejnách máme vlastní hokejové brusky. Přijďte s bruslemi,
              řekneme si na kolik a proč — a za pár minut vyjedete zpět na led.
              Vyměníme nože, kola i ložiska.
            </p>
            <ul className="jb-check">
              <li>Broušení bruslí na hokej i kolečkové brusle</li>
              <li>Výběr správné velikosti bruslí, betonů i lapačky</li>
              <li>Doručení po ČR i do zemí EU</li>
              <li>Reklamace a servis vyřídíme přímo na prodejně</li>
            </ul>
          </div>
        </div>

        <div className="jb-reviews" id="prodejny">
          <div className="jb-reviews__col">
            <p className="jb-eyebrow">Co říkají zákazníci</p>
            <h3>Přes 600 recenzí na Heurece</h3>
            <ul className="jb-quotes">
              {recenze.map((r) => (
                <li key={r.datum}>
                  <p>„{r.text}“</p>
                  <span>Recenze ze dne {r.datum}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="jb-reviews__col">
            <p className="jb-eyebrow">Kde nás najdete</p>
            <h3>Tři prodejny v Praze</h3>
            <ul className="jb-stores">
              {prodejny.map((s) => (
                <li key={s.adresa}>
                  <p className="jb-stores__addr">{s.adresa}</p>
                  <p className="jb-stores__hours">{s.doba}</p>
                  <a href={`tel:+420${s.tel.replace(/\s/g, "")}`}>{s.tel}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
