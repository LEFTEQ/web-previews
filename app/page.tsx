import { AiImage } from "./_ui";

const services = [
  {
    t: "Přeprava osob",
    d: "Mikrobusem až pro 9 osob včetně zavazadel — na letiště, výlet i firemní akci po Českých Budějovicích a celé republice.",
  },
  {
    t: "Přeprava zboží",
    d: "Rozvoz, stěhování a zásobování skříňovými dodávkami. Naložíme i objemný náklad, který se do osobního auta nevejde.",
  },
  {
    t: "Vytěžování vozidel",
    d: "Prázdný návrat se nevyplácí. Na zpáteční trase najdeme náklad, takže platíte jen za to, co opravdu vezete.",
  },
  {
    t: "Půjčovna dodávek",
    d: "Nepřetěžujte osobní auto — půjčte si Transit. Výhodněji, pohodlněji a hlavně bezpečněji než přeplněný kufr.",
  },
  {
    t: "Opravy vozidel",
    d: "Servisujeme vlastní vozový park i vozy zákazníků. Pravidelná péče je důvod, proč naše dodávky nestojí na krajnici.",
  },
];

const fleet = [
  { model: "Ford Transit Custom", year: "2017", plate: "3C7 2017", cap: "9 osob", price: "1 500" },
  { model: "Ford Transit Custom", year: "2018", plate: "4C1 2018", cap: "9 osob", price: "1 500" },
  { model: "Ford Transit Custom", year: "2016", plate: "2C9 2016", cap: "9 osob", price: "1 500" },
  { model: "Ford Transit", year: "skříň", plate: "6C4 1240", cap: "náklad", price: "1 240" },
];

const reasons = [
  { t: "Výhodné ceny", d: "Nejlepší poměr ceny a kvality v Jihočeském kraji." },
  { t: "Osobní přístup", d: "Řidiče znáte jménem, ne jen podle čísla objednávky." },
  { t: "Spolehlivost", d: "Pravidelně servisovaný park — vyjedeme i za tmy a v zimě." },
  { t: "Flexibilita", d: "Přizpůsobíme se trase, času i objemu vašeho nákladu." },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <div className="wrap topbar-in">
          <a className="brand" href="#" aria-label="1plus JČ CZ, autodoprava">
            <span className="brand-1">1</span>
            <span className="brand-plus" aria-hidden="true" />
            <span className="brand-jc">JČ</span>
            <span className="brand-cz">CZ</span>
          </a>
          <a className="topcall" href="tel:+420777111222">
            <span className="topcall-k">Dispečink</span>
            <span className="topcall-n">777 111 222</span>
          </a>
        </div>
      </header>

      <section className="hero">
        <AiImage src="/hero.webp" alt="Dodávka Ford Transit firmy 1plus JČ na silnici v Jihočeském kraji" className="hero-media" />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="wrap hero-in">
          <p className="hero-eyebrow">
            <span className="tick" aria-hidden="true" />
            Autodoprava · České Budějovice
          </p>
          <h1 className="hero-title">
            Přeprava osob<br />a&nbsp;zboží po celém<br />
            <span className="hero-hl">Jihočeském kraji</span>
          </h1>
          <p className="hero-sub">
            Zkušení řidiči, servisované dodávky a jasná cena předem. Ať vezete lidi,
            nábytek nebo paletu, dovezeme to spolehlivě a včas.
          </p>
          <div className="hero-cta">
            <a className="btn btn-amber" href="#vozy">Rezervovat vůz</a>
            <a className="btn btn-ghost" href="tel:+420777111222">Zavolat dispečink</a>
          </div>
        </div>
      </section>

      <section className="sec" id="sluzby">
        <div className="wrap">
          <div className="eyebrow">
            <span className="tick" aria-hidden="true" />
            <span className="eyebrow-label">Služby</span>
            <span className="eyebrow-rule" aria-hidden="true" />
            <span className="eyebrow-idx">01 / 02</span>
          </div>
          <h2 className="sec-title">Co pro vás uvezeme</h2>

          <div className="svc-grid">
            <div className="svc-media">
              <AiImage src="/section-1.webp" alt="Nakládka zboží do skříňové dodávky" className="svc-img" />
            </div>
            <ul className="svc-list">
              {services.map((s) => (
                <li className="svc-item" key={s.t}>
                  <span className="tick tick-sm" aria-hidden="true" />
                  <div>
                    <h3 className="svc-name">{s.t}</h3>
                    <p className="svc-desc">{s.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec sec-dark" id="vozy">
        <div className="wrap">
          <div className="eyebrow eyebrow-dark">
            <span className="tick" aria-hidden="true" />
            <span className="eyebrow-label">Vozový park</span>
            <span className="eyebrow-rule" aria-hidden="true" />
            <span className="eyebrow-idx">02 / 02</span>
          </div>
          <h2 className="sec-title sec-title-light">Odjezdová tabule · půjčovna dodávek</h2>
          <p className="board-lead">Čtyři vozy Ford Transit připravené k vyjetí. Cena je za den, SPZ z jihočeské registrace.</p>

          <div className="board" role="table" aria-label="Nabídka vozů k pronájmu">
            <div className="mrow mrow-head" role="row">
              <span className="cell" role="columnheader">Vůz</span>
              <span className="cell" role="columnheader">SPZ</span>
              <span className="cell" role="columnheader">Kapacita</span>
              <span className="cell cell-price" role="columnheader">Cena / den</span>
              <span className="cell cell-res" role="columnheader">Rezervace</span>
            </div>
            {fleet.map((v, i) => (
              <div className="mrow" role="row" key={v.plate} style={{ animationDelay: `${0.12 * (i + 1)}s` }}>
                <span className="cell cell-model" role="cell">
                  <span className="k">Vůz</span>
                  <span className="model-name">{v.model} <span className="model-year">{v.year}</span></span>
                </span>
                <span className="cell" role="cell">
                  <span className="k">SPZ</span>
                  <span className="plate">
                    <span className="plate-eu"><span className="plate-star" aria-hidden="true" />CZ</span>
                    <span className="plate-reg">{v.plate}</span>
                  </span>
                </span>
                <span className="cell" role="cell">
                  <span className="k">Kapacita</span>
                  <span className="cap">{v.cap}</span>
                </span>
                <span className="cell cell-price" role="cell">
                  <span className="k">Cena / den</span>
                  <span className="price">{v.price}<span className="price-cur">Kč</span></span>
                </span>
                <span className="cell cell-res" role="cell">
                  <a className="btn btn-amber btn-sm" href="tel:+420777111222">Rezervovat</a>
                </span>
              </div>
            ))}
          </div>

          <div className="trust">
            <div className="trust-media">
              <AiImage src="/section-2.webp" alt="Řidič 1plus JČ u zaparkované dodávky" className="trust-img" />
            </div>
            <div className="trust-body">
              <h3 className="trust-h">Proč právě nás?</h3>
              <p className="trust-p">
                Jsme jihočeská autodoprava se zázemím v Českých Budějovicích. Vozy pravidelně
                servisujeme sami, takže víme, co si za volant sedne. Připojení k rezervaci
                běží zabezpečeně přes HTTPS a ceny držíme aktuální — žádné překvapení u odjezdu.
              </p>
              <ul className="reasons">
                {reasons.map((r) => (
                  <li className="reason" key={r.t}>
                    <span className="tick tick-sm" aria-hidden="true" />
                    <span className="reason-t">{r.t}</span>
                    <span className="reason-d">{r.d}</span>
                  </li>
                ))}
              </ul>
              <p className="trust-contact">
                Rezervace a poptávky: <a href="tel:+420777111222">777 111 222</a> ·{" "}
                <a href="mailto:info@example.cz">info@example.cz</a> · Ukázková 123, České Budějovice
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
