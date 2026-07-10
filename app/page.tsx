import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anglický styl — dlažby a obklady v tradičním duchu | Praha",
  description:
    "Rodinná firma od roku 1991. Ručně glazované obklady, kamenné a keramické dlažby a koupelny ve venkovském, Art Deco i retro stylu. Showroom v Praze.",
};

const kolekce = [
  {
    cislo: "01",
    nazev: "Ručně glazované obklady",
    format: "Metro 7,5 × 15 · čtverec 10 × 10",
    popis:
      "Nepravidelný lesk a jemné odstíny, které se u strojové dlaždice nenajdou. Ideální za sporák, do koupelny i na zádovou stěnu kuchyně.",
  },
  {
    cislo: "02",
    nazev: "Kamenná dlažba",
    format: "Vápenec · břidlice · leštěný mramor",
    popis:
      "Přírodní kámen, který stárne krásně. Vybíráme desky s klidnou kresbou a poradíme s impregnací i spárováním do vlhka.",
  },
  {
    cislo: "03",
    nazev: "Vzorované cementové dlaždice",
    format: "20 × 20 · geometrie a florální dekory",
    popis:
      "Ornament po vzoru viktoriánských předsíní i francouzských bister. Skládáme koberce na míru vaší podlaze.",
  },
  {
    cislo: "04",
    nazev: "Koupelny na klíč",
    format: "Návrh · dodávka · realizace",
    popis:
      "Od kladečského plánu po předání hotové koupelny. Spolupracujeme s obkladači, kterým věříme přes dvacet let.",
  },
];

const kroky = [
  {
    cislo: "1",
    nadpis: "Káva a plán",
    text: "Přijďte s půdorysem i bez něj. Nad kávou projdeme prostor, styl a rozpočet — nezávazně.",
  },
  {
    cislo: "2",
    nadpis: "Vzorky do ruky",
    text: "Vybereme obklady a dlažby, které k sobě sedí. Vzorky si odnesete domů, ať je uvidíte ve svém světle.",
  },
  {
    cislo: "3",
    nadpis: "Kladečský plán",
    text: "Připravíme rozkres spár a přechodů, spočítáme spotřebu a prořez. Žádná nemilá překvapení na stavbě.",
  },
  {
    cislo: "4",
    nadpis: "Dodávka a realizace",
    text: "Materiál dovezeme, realizaci zajistíme s prověřenými obkladači. Vy dohlížíte, my se staráme.",
  },
];

export default function Page() {
  return (
    <main className="as-page">
      <header className="as-topbar">
        <a className="as-wordmark" href="#" aria-label="Anglický styl — úvodní strana">
          <span className="as-wordmark-line">Anglický</span>
          <span className="as-wordmark-line as-wordmark-italic">styl</span>
          <span className="as-wordmark-sub">dlažby &amp; obklady · Praha · od 1991</span>
        </a>
        <nav className="as-nav" aria-label="Hlavní navigace">
          <a href="#kolekce">Kolekce</a>
          <a href="#postup">Jak to chodí</a>
          <a href="#showroom">Showroom</a>
        </nav>
      </header>

      <section className="as-hero" aria-labelledby="hero-nadpis">
        <img
          className="as-hero-img"
          src="/hero.webp"
          alt="Koupelna obložená ručně glazovanými obklady v tradičním anglickém stylu"
          loading="eager"
        />
        <div className="as-hero-veil" aria-hidden="true" />
        <div className="as-hero-inner">
          <p className="as-hero-eyebrow">Rodinná dlaždičkárna od roku 1991</p>
          <h1 id="hero-nadpis" className="as-hero-title">
            Obklady a dlažby,
            <br />
            které si <em>pamatujete</em>
            <br />
            z těch nejhezčích domů.
          </h1>
          <p className="as-hero-lede">
            Ručně glazované obkládačky, přírodní kámen a vzorované cementové
            dlaždice. Venkovský, Art Deco i retro styl — vybraný, změřený a
            dovezený až k vám. Přijďte na kávu do našeho pražského showroomu.
          </p>
          <div className="as-hero-actions">
            <a className="as-btn as-btn-primary" href="#showroom">
              Přijít na kávu do showroomu
            </a>
            <a className="as-btn as-btn-ghost" href="#kolekce">
              Prohlédnout kolekce
            </a>
          </div>
        </div>
        <dl className="as-hero-facts">
          <div>
            <dt>Zakládáme si na</dt>
            <dd>ruční glazuře</dd>
          </div>
          <div>
            <dt>Pracujeme s</dt>
            <dd>kamenem a keramikou</dd>
          </div>
          <div>
            <dt>Najdete nás v</dt>
            <dd>Praze</dd>
          </div>
        </dl>
      </section>

      <section className="as-kolekce" id="kolekce" aria-labelledby="kolekce-nadpis">
        <div className="as-section-head">
          <p className="as-eyebrow">Co u nás vyberete</p>
          <h2 id="kolekce-nadpis" className="as-h2">
            Čtyři světy, jeden vkus
          </h2>
          <p className="as-section-lede">
            Nemáme sklad plný všeho. Máme vybrané kolekce, u kterých stojíme za
            každou spárou — od lesklého metra po cementový koberec ve vstupní
            hale.
          </p>
        </div>

        <ul className="as-catalog">
          {kolekce.map((k) => (
            <li className="as-tile" key={k.cislo}>
              <span className="as-tile-num" aria-hidden="true">
                {k.cislo}
              </span>
              <div className="as-tile-body">
                <h3 className="as-tile-title">{k.nazev}</h3>
                <p className="as-tile-format">{k.format}</p>
                <p className="as-tile-text">{k.popis}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="as-figure">
          <img
            src="/section-1.webp"
            alt="Detail vzorovaných cementových dlaždic a přírodního kamene v interiéru"
            loading="lazy"
          />
          <figcaption>
            Vzorky, které si odnesete domů — ať uvidíte odstín ve svém vlastním
            světle.
          </figcaption>
        </figure>
      </section>

      <section className="as-onas" id="showroom" aria-labelledby="onas-nadpis">
        <div className="as-onas-grid">
          <div className="as-onas-text">
            <p className="as-eyebrow as-eyebrow-light">O nás &amp; showroom</p>
            <h2 id="onas-nadpis" className="as-h2 as-h2-light">
              Rodinná firma s tradicí od roku 1991
            </h2>
            <p className="as-onas-p">
              Přes tři desetiletí realizujeme koupelny a interiéry v tradičním
              duchu. Je nám blízká práce s přírodními materiály — kamenem a
              dřevem — a řemeslo, u kterého je vidět ruka.
            </p>
            <p className="as-onas-p">
              Máte rádi venkovský, Art Deco nebo retro styl? Jste na správné
              adrese. Uvaříme kávu a v klidu probereme váš projekt nad reálnými
              vzorky.
            </p>

            <div className="as-postup" id="postup">
              <p className="as-postup-label">Jak u nás vzniká koupelna</p>
              <ol className="as-postup-list">
                {kroky.map((krok) => (
                  <li key={krok.cislo}>
                    <span className="as-postup-num" aria-hidden="true">
                      {krok.cislo}
                    </span>
                    <div>
                      <h3 className="as-postup-nadpis">{krok.nadpis}</h3>
                      <p className="as-postup-text">{krok.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="as-vcard" aria-label="Kontakt a otevírací doba">
            <img
              className="as-vcard-img"
              src="/section-2.webp"
              alt="Interiér showroomu Anglický styl s vystavenými obklady a dlažbami"
              loading="lazy"
            />
            <div className="as-vcard-body">
              <h3 className="as-vcard-title">Zastavte se za námi</h3>
              <p className="as-vcard-addr">
                Jihovýchodní I / 2
                <br />
                141 00 Praha 4
                <br />
                <span className="as-vcard-note">Vchod z ulice Jižní VII</span>
              </p>

              <dl className="as-hours">
                <div>
                  <dt>Po</dt>
                  <dd>13:00–17:00</dd>
                </div>
                <div>
                  <dt>Út</dt>
                  <dd>10:00–17:00</dd>
                </div>
                <div>
                  <dt>St</dt>
                  <dd>10:00–17:00</dd>
                </div>
                <div>
                  <dt>Čt</dt>
                  <dd>10:00–16:00</dd>
                </div>
                <div>
                  <dt>Pá</dt>
                  <dd>dle domluvy</dd>
                </div>
              </dl>

              <a className="as-btn as-btn-primary as-btn-block" href="tel:+420605594007">
                Zavolat 605 594 007
              </a>
              <a className="as-vcard-mail" href="mailto:info@anglickystyl.cz">
                info@anglickystyl.cz
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
