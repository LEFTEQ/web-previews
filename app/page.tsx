import type { CSSProperties } from "react";

const filmStocks = [
  { brand: "3M", detail: "Wrap 2080 — matné, saténové i lesklé odstíny", use: "Celopolepy" },
  { brand: "Hexis", detail: "Skin — barevná stálost i po letech na slunci", use: "Celopolepy" },
  { brand: "Avery Dennison", detail: "Supreme Wrapping — barvy z dílny, ne ze skladu", use: "Barevné změny" },
  { brand: "KPMF", detail: "Airelease kanálky — bez bublin i na hranách", use: "Detaily" },
  { brand: "SunTek HP", detail: "Tónování skel s certifikovanou propustností", use: "Skla" },
  { brand: "CarShield PPF", detail: "Neviditelný štít proti kamínkům a škrábancům", use: "Ochrana laku" },
];

const services = [
  {
    idx: "01",
    name: "Celopolep karoserie",
    lead: "Nová barva bez laku a bez cesty do lakovny.",
    body: "Sundáme kliky i lišty, folii vedeme pod hrany a do prolisů. Za dva až tři dny odjíždíte s vozem, který v davu poznáte na první pohled — a původní lak zůstane netknutý pod fólií.",
    price: "od 32 000 Kč",
  },
  {
    idx: "02",
    name: "Tónování skel a světel",
    lead: "Fólie SunTek HP, propustnost přesně podle zákona.",
    body: "Bočními skly a zádí ubereme slunce i pohledy zvenčí. Interiér se v létě tolik nepřehřívá, řidič neoslňuje a UV záření nepálí čalounění. Světla ztmavíme jen tam, kde to homologace dovolí.",
    price: "od 3 500 Kč",
  },
  {
    idx: "03",
    name: "Ochrana laku PPF",
    lead: "CarShield — samohojivá fólie přes celý předek.",
    body: "Přední nárazník, kapota, blatníky a prahy dostanou průhledný film, který spolkne kamínky, škrábance od větví i klíčů. Drobné rýhy se v teple samy zacelí. Lak zůstane jako z autosalonu.",
    price: "od 12 000 Kč",
  },
  {
    idx: "04",
    name: "Reklamní polep vozu",
    lead: "Od návrhu grafiky po nalepení na míru.",
    body: "Firemní auto, které jezdí po Praze, je pojízdný billboard. Navrhneme polep tak, aby telefon a web byly čitelné z vedlejšího pruhu, a celé to precizně přeneseme na plech.",
    price: "dle návrhu",
  },
];

const steps = [
  { k: "Objednáte", v: "online nebo telefonem — řekneme rovnou termín i cenu" },
  { k: "Poradíme", v: "vybereme fólii, odstín a rozsah přímo na vašem voze" },
  { k: "Přebereme vůz", v: "na jeden až tři dny, podle rozsahu zakázky" },
  { k: "Vyzvednete", v: "hotovo, přeměřeno, s péčí o fólii na papíře" },
];

export default function Page() {
  return (
    <main className="aw">
      <header className="aw-top">
        <a className="aw-mark" href="#top" aria-label="AutoFolie Wrap — domů">
          <span className="aw-mark-auto">AUTO<span className="aw-mark-slash">/</span>FOLIE</span>
          <span className="aw-mark-wrap">WRAP</span>
        </a>
        <span className="aw-loc">Praha · od 2013</span>
      </header>

      <section className="aw-hero" id="top">
        <div className="aw-hero-media">
          <img
            src="/hero.webp"
            alt="Vůz s čerstvě aplikovanou barevnou wrap fólií v dílně AutoFolie Wrap"
            width={1600}
            height={1000}
            className="aw-hero-img"
          />
          <span className="aw-hero-scrim" aria-hidden="true" />
        </div>
        <div className="aw-hero-text">
          <p className="aw-eyebrow">Polepy aut · Praha</p>
          <h1 className="aw-h1">
            Nová barva vozu<br />
            <span className="aw-h1-accent">za jeden víkend.</span>
          </h1>
          <p className="aw-hero-lead">
            Přetáhneme karoserii fólií 3M, Hexis nebo Avery — lak zůstane netknutý pod ní,
            barva jde kdykoli sundat. Tónujeme skla, chráníme lak PPF fólií. Jedna dílna, jedna
            parta od roku 2013.
          </p>
          <div className="aw-hero-cta">
            <a className="aw-btn" href="tel:+420777599995">Zavolat 777 599 995</a>
            <a className="aw-btn aw-btn-ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>
      </section>

      <section className="aw-stocks" aria-label="Fólie, se kterými pracujeme">
        <div className="aw-stocks-head">
          <h2 className="aw-stocks-title">Vzorník, ne sklad</h2>
          <p className="aw-stocks-note">
            Fólii vybíráme podle toho, co má vydržet — ne podle toho, co je zrovna po ruce.
          </p>
        </div>
        <ul className="aw-swatches">
          {filmStocks.map((f, i) => (
            <li className="aw-swatch" key={f.brand} style={{ "--d": `${i * 60}ms` } as CSSProperties}>
              <span className="aw-swatch-use">{f.use}</span>
              <span className="aw-swatch-brand">{f.brand}</span>
              <span className="aw-swatch-detail">{f.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="aw-services" id="sluzby">
        <div className="aw-sec-head">
          <p className="aw-eyebrow aw-eyebrow-dark">Co s vaším autem uděláme</p>
          <h2 className="aw-h2">Čtyři řemesla, jedna ruka</h2>
        </div>
        <div className="aw-services-media">
          <img
            src="/section-1.webp"
            alt="Detail aplikace wrap fólie stěrkou na hranu karoserie"
            width={1200}
            height={800}
            className="aw-media-img"
          />
        </div>
        <ol className="aw-service-list">
          {services.map((s) => (
            <li className="aw-service" key={s.idx}>
              <span className="aw-service-idx">{s.idx}</span>
              <div className="aw-service-main">
                <h3 className="aw-service-name">{s.name}</h3>
                <p className="aw-service-lead">{s.lead}</p>
                <p className="aw-service-body">{s.body}</p>
              </div>
              <span className="aw-service-price">{s.price}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="aw-about" id="o-nas">
        <div className="aw-about-media">
          <img
            src="/section-2.webp"
            alt="Dokončený vůz po celopolepu připravený k předání zákazníkovi"
            width={1200}
            height={900}
            className="aw-media-img"
          />
        </div>
        <div className="aw-about-text">
          <p className="aw-eyebrow aw-eyebrow-dark">Kdo vám auto polepí</p>
          <h2 className="aw-h2">Stejní lidé od roku 2013</h2>
          <p className="aw-about-lead">
            V dílně se za ta léta nevystřídala parta — auto vám polepí ten, kdo to dělal loni
            i předloni. Proto si za prací stojíme a proto se k nám lidé vrací s druhým i třetím vozem.
          </p>

          <ol className="aw-steps" aria-label="Jak zakázka probíhá">
            {steps.map((st, i) => (
              <li className="aw-step" key={st.k}>
                <span className="aw-step-num">{i + 1}</span>
                <span className="aw-step-k">{st.k}</span>
                <span className="aw-step-v">{st.v}</span>
              </li>
            ))}
          </ol>

          <figure className="aw-quote">
            <blockquote>
              „Už čtvrté tónované auto včetně ochranné PPF fólie. Děkuji pánům za preciznost,
              rychlost i příjemné jednání.“
            </blockquote>
            <figcaption>Toan Nguyen Manh · zákazník, červenec 2024</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
