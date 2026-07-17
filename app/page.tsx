import { FootTrail } from "./motion";

function Foot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 56" className={className} aria-hidden="true" focusable="false">
      <ellipse cx="20" cy="24" rx="12" ry="13" />
      <ellipse cx="20" cy="45" rx="7.5" ry="8.5" />
      <ellipse cx="8" cy="15" rx="2.4" ry="3" />
      <ellipse cx="14" cy="9" rx="2.6" ry="3.2" />
      <ellipse cx="20.5" cy="7" rx="2.8" ry="3.3" />
      <ellipse cx="27" cy="9" rx="2.6" ry="3.2" />
      <ellipse cx="33" cy="15" rx="2.3" ry="2.9" />
    </svg>
  );
}

const products = [
  {
    name: "Babovky na písek — pastelový set velký",
    tag: "Na písek",
    price: "149 Kč",
    tone: "sand",
  },
  {
    name: "Nafukovací indiánská kánoe",
    tag: "Do vody",
    price: "820 Kč",
    tone: "sklenka",
  },
  {
    name: "Hugovy cvrnkací skleněné kuličky",
    tag: "Klasika",
    price: "250 Kč",
    tone: "bublina",
  },
  {
    name: "Léto — obrázkové příběhy",
    tag: "Čtení",
    price: "349 Kč",
    tone: "lucina",
  },
  {
    name: "Cák — hra do vany i na zahradu",
    tag: "Ven",
    price: "329 Kč",
    tone: "sklenka",
  },
];

const stores = [
  { c: "Praha 1", a: "Vodičkova 35" },
  { c: "Praha 7", a: "Milady Horákové 26" },
  { c: "Praha 4", a: "Čs. exilu 2288" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Hugo chodí bos, domů">
          <span className="wordmark__hugo">Hugo</span>
          <span className="wordmark__feet" aria-hidden="true">
            <Foot className="wf wf--a" />
            <Foot className="wf wf--b" />
          </span>
          <span className="wordmark__rest">chodí bos</span>
        </a>
        <p className="topbar__hours">
          Po–So 10:00–18:00 · <span>777 111 222</span>
        </p>
      </header>

      {/* HERO */}
      <section className="band band--hero" aria-labelledby="hero-h">
        <div className="wrap hero">
          <p className="eyebrow">Hugův cool bublifuk · pražské hračkářství od roku 2014</p>
          <h1 id="hero-h" className="hero__h">
            Dokážeš udělat <span className="hero__accent">velkou bublinu?</span>
          </h1>
          <p className="hero__lead">
            Hračkářství, kde se chodí bos. Přes 4&nbsp;500 nejkrásnějších hraček
            z Česka a Slovenska — a 99&nbsp;% jich máme rovnou skladem.
          </p>

          <ul className="reassure">
            <li>
              <Foot className="bullet" /> 99&nbsp;% skladem a ihned k odeslání
            </li>
            <li>
              <Foot className="bullet" /> Vše jen z Česka a Slovenska
            </li>
            <li>
              <Foot className="bullet" /> Poradíme jako rodiče rodičům
            </li>
          </ul>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#letni-tipy">
              Chci si vybrat
            </a>
            <a className="btn btn--ghost" href="#prodejny">
              Kudy šly Hugovy kroky
            </a>
          </div>

          <span className="bubble" aria-hidden="true" />
        </div>
      </section>

      <div className="walk walk--down">
        <FootTrail count={4} />
      </div>

      {/* SEKCE 1 — LETNÍ TIPY */}
      <section className="band band--products" id="letni-tipy" aria-labelledby="tipy-h">
        <div className="wrap">
          <p className="eyebrow eyebrow--dark">Léto u Huga</p>
          <h2 id="tipy-h" className="section__h">Letní tipy, co vydrží až do večerníčku</h2>
          <p className="section__lead">
            Vybrané kousky na písek, do vody i na dvorek. U každého vidíš cenu
            i to, že ho máme skladem — žádné čekání.
          </p>

          <ul className="grid">
            {products.map((p) => (
              <li key={p.name} className="card">
                <div className={`card__art card__art--${p.tone}`}>
                  <Foot className="card__mark" />
                  <span className="card__tag">{p.tag}</span>
                </div>
                <div className="card__body">
                  <h3 className="card__name">{p.name}</h3>
                  <p className="stock">
                    <Foot className="bullet bullet--sm" /> Skladem
                  </p>
                  <div className="card__buy">
                    <span className="price">{p.price}</span>
                    <button className="btn btn--buy" type="button">Do košíku</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="walk walk--down">
        <FootTrail count={4} />
      </div>

      {/* SEKCE 2 — PRODEJNY / DŮVĚRA */}
      <section className="band band--stores" id="prodejny" aria-labelledby="stores-h">
        <div className="wrap stores">
          <div className="stores__intro">
            <p className="eyebrow">Zastavte se u nás</p>
            <h2 id="stores-h" className="section__h">
              S úsměvem poradíme ve třech pražských prodejnách
            </h2>
            <p className="section__lead">
              Máme přes 4&nbsp;500 kusů těch nejkrásnějších hraček z Česka a
              Slovenska. Přijďte si osahat dřevo, cvrnkat kuličky a nechat si
              poradit — jako rodiče rodičům.
            </p>

            <dl className="stats">
              <div>
                <dt>4 500+</dt>
                <dd>hraček na prodejně</dd>
              </div>
              <div>
                <dt>150</dt>
                <dd>českých a slovenských výrobců</dd>
              </div>
              <div>
                <dt>2014</dt>
                <dd>rok, kdy Hugo vyrazil bos</dd>
              </div>
            </dl>
          </div>

          <ul className="stores__list">
            {stores.map((s, i) => (
              <li key={s.c} className="store">
                <span className="store__no">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="store__city">{s.c}</p>
                  <p className="store__addr">{s.a}</p>
                </div>
                <Foot className="store__foot" />
              </li>
            ))}
            <li className="store store--info">
              <p className="store__city">Otevřeno &amp; poradenství</p>
              <p className="store__addr">Po–So 10:00–18:00 · 777 111 222</p>
              <p className="store__addr">info@example.cz</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
