import { CountUp, Reveal, Glint } from "./motion";

const featured = {
  label: "Nově v nabídce · rok 2022",
  name: "Cadillac Escalade",
  config: "6.2 · V8 · 4WD · Sport Platinum",
  spec: [
    { k: "rok", v: "2022" },
    { k: "km", v: "47 950" },
    { k: "kW", v: "313" },
    { k: "palivo", v: "Benzin" },
    { k: "pohon", v: "4×4" },
    { k: "převodovka", v: "Automat" },
  ],
};

const cars = [
  {
    name: "BMW Řada 7",
    config: "750e · xDrive · M-Sport · Full-LED",
    rok: "2023", km: "75 700", kw: "360", palivo: "Neuvedeno", pohon: "4×4", prevod: "Automat",
    price: "1 999 000",
  },
  {
    name: "Mercedes-Benz GLE",
    config: "350d · AMG-Line · 4-Matic · Webasto",
    rok: "2020", km: "44 318", kw: "210", palivo: "Nafta", pohon: "4×4", prevod: "Automat",
    price: "1 399 000",
  },
  {
    name: "Mercedes-Benz GLC",
    config: "300e · AMG · EQ-Power · LED",
    rok: "2024", km: "22 207", kw: "150", palivo: "Neuvedeno", pohon: "4×4", prevod: "Automat",
    price: "1 399 000",
  },
  {
    name: "Mercedes-Benz Třídy E",
    config: "300de · Digital-Light · Hybrid",
    rok: "2024", km: "13 820", kw: "145", palivo: "Nafta", pohon: "—", prevod: "Automat",
    price: "1 149 000",
  },
  {
    name: "Mercedes-Benz Třídy G",
    config: "63 AMG · V8 · 1. maj. ČR",
    rok: "2017", km: "57 809", kw: "420", palivo: "Benzin", pohon: "4×4", prevod: "Automat",
    price: "1 999 000",
  },
  {
    name: "Dodge Challenger",
    config: "6.2 · V8 · Hellcat · SRT",
    rok: "2018", km: "33 957", kw: "527", palivo: "Benzin", pohon: "—", prevod: "Automat",
    price: "1 199 000",
  },
];

const brands = [
  { name: "Audi", count: "3" },
  { name: "BMW", count: "8" },
  { name: "Mercedes-Benz", count: "30" },
  { name: "+20 značek", count: "61" },
];

const stats = [
  { v: "2008", l: "Na trhu od roku" },
  { v: "5 900+", l: "Spokojených zákazníků" },
  { v: "6 215+", l: "Prodaných vozidel" },
  { v: "10+", l: "Nabízených značek" },
];

const services = [
  { t: "Prodej vozů", d: "Přivezte vůz k nám. Připravíme jej k prodeji za požadovanou cenu a zařadíme do nabídky." },
  { t: "Výkup vozů", d: "Potřebujete prodat rychle a nečekat, až se vůz prodá? Rádi ho od vás rovnou odkoupíme." },
  { t: "Financování", d: "Líbí se vám vůz, ale nemáte celou hotovost? Vyřídíme spotřebitelský úvěr i autoleasing." },
  { t: "Pojištění", d: "Sjednáme to nejvýhodnější pojištění včetně převodu bonusů z předchozích smluv." },
];

function Spec({ items, price }: { items: { k: string; v: string }[]; price: string }) {
  return (
    <div className="spec">
      <dl className="spec-cluster">
        {items.map((i) => (
          <div className="spec-item" key={i.k}>
            <dt>{i.k}</dt>
            <dd>{i.v}</dd>
          </div>
        ))}
      </dl>
      <div className="spec-price">
        {price} <span>Kč</span>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="wordmark" href="#top">
            VIP<span>CAR</span>
            <em>autobazar · Praha</em>
          </a>
          <nav className="nav-links" aria-label="Hlavní">
            <a href="#nabidka">Nabídka vozů</a>
            <a href="#sluzby">Služby</a>
            <a href="#onas">O nás</a>
          </nav>
          <a className="btn" href="tel:+420777111222">Zavolat</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow rise" style={{ animationDelay: "0.05s" }}>
              <span className="tick" /> Prémiové vozy · Praha · od roku 2008
            </p>
            <h1 className="hero-title">
              <span className="rise" style={{ animationDelay: "0.15s" }}>Vozy, které</span>
              <span className="rise" style={{ animationDelay: "0.3s" }}>prošly</span>
              <span className="rise accent" style={{ animationDelay: "0.45s" }}>světlem.</span>
            </h1>
            <p className="hero-lead rise" style={{ animationDelay: "0.6s" }}>
              102 prověřených vozů skladem. Většinou po prvním majiteli, jen z Evropské
              unie a jen ve velmi dobrém technickém stavu. Každé auto si u nás projdeme
              do posledního kilometru — a pak vám ho ukážeme ve světle.
            </p>
            <div className="hero-cta rise" style={{ animationDelay: "0.72s" }}>
              <a className="btn" href="#nabidka">Prohlédnout nabídku</a>
              <a className="btn btn-ghost" href="tel:+420777111222">+420 777 111 222</a>
            </div>
          </div>

          <Glint className="stage">
            <div className="stage-plinth" aria-hidden="true" />
            <div className="stage-beam" aria-hidden="true" />
            <div className="featured">
              <span className="featured-label">{featured.label}</span>
              <h2 className="featured-name">{featured.name}</h2>
              <p className="featured-config">{featured.config}</p>
              <div className="featured-kw">
                <span className="num">
                  <CountUp to={313} duration={2.0} delay={0.4} />
                </span>
                <span className="unit">kW výkonu</span>
              </div>
              <Spec
                items={featured.spec}
                price={""}
              />
              <div className="featured-price">
                <CountUp to={2199000} duration={2.2} delay={0.4} locale /> <span>Kč</span>
              </div>
            </div>
          </Glint>
        </div>
      </section>

      <section className="section" id="nabidka">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow"><span className="tick" /> Nabídka vozů</p>
            <h2 className="h2">Nově v naší nabídce</h2>
            <p className="section-lead">
              Osobní i užitkové vozy, většinou po prvním majiteli a jen ze zemí EU.
              Přesné a pravdivé informace u každého kusu — žádné komisní překvapení.
            </p>
          </div>

          <div className="tally" aria-label="Vozy podle značky">
            {brands.map((b) => (
              <div className="tally-item" key={b.name}>
                <span className="tally-name">{b.name}</span>
                <span className="tally-count">{b.count} vozů</span>
              </div>
            ))}
            <div className="tally-item tally-total">
              <span className="tally-name">Skladem celkem</span>
              <span className="tally-count">102 vozů</span>
            </div>
          </div>

          <div className="grid">
            {cars.map((c) => (
              <Reveal className="card" key={c.name + c.config}>
                <div className="card-head">
                  <h3 className="card-name">{c.name}</h3>
                  <span className="card-year">{c.rok}</span>
                </div>
                <p className="card-config">{c.config}</p>
                <Spec
                  items={[
                    { k: "km", v: c.km },
                    { k: "kW", v: c.kw },
                    { k: "palivo", v: c.palivo },
                    { k: "pohon", v: c.pohon },
                    { k: "převod.", v: c.prevod },
                  ]}
                  price={c.price}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="onas">
        <div className="wrap">
          <div className="about">
            <div className="about-copy">
              <p className="eyebrow"><span className="tick" /> O nás</p>
              <h2 className="h2">Proč si vybrat právě nás</h2>
              <p className="section-lead">
                VIP CAR s.r.o. jsme založili počátkem roku 2008. Zabýváme se nákupem
                a prodejem nových i ojetých vozidel, poradenstvím při koupi a dovozem
                ze zahraničí na objednávku. Náš tým tvoří lidé s mnohaletými
                zkušenostmi v oboru — obraťte se na nás s důvěrou.
              </p>
              <ul className="guarantee">
                <li><span className="tick" /> Garance najetých kilometrů — mimo komisní prodej</li>
                <li><span className="tick" /> Garance původu vozu — mimo komisní prodej</li>
              </ul>
            </div>
            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.l}>
                  <span className="stat-v">{s.v}</span>
                  <span className="stat-l">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section-head section-head-services" id="sluzby">
            <p className="eyebrow"><span className="tick" /> Služby</p>
            <h2 className="h2">Postaráme se o celý obchod</h2>
            <p className="section-lead">
              Všechny vozy před nákupem pečlivě vybíráme a prohlížíme. Klademe důraz
              na pravdivé a přesné informace a prodáváme jen vozy v dobrém technickém stavu.
            </p>
          </div>
          <div className="services">
            {services.map((s) => (
              <Reveal className="service" key={s.t}>
                <h3 className="service-t">{s.t}</h3>
                <p className="service-d">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
