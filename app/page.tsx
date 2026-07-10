import type { CSSProperties } from "react";

export default function Page() {
  const stems = [
    { cz: "Tulipán", lat: "Tulipa", note: "stočený, tázavý; drží se ještě dva dny po otevření", from: "1 800" },
    { cz: "Pryskyřník", lat: "Ranunculus", note: "okvětních plátků přes padesát, oranžová jak západ", from: "2 200" },
    { cz: "Chryzantéma Momoko", lat: "Chrysanthemum", note: "pudrová růžová, kulatá, vydrží dlouho ve váze", from: "1 180" },
    { cz: "Hledík", lat: "Antirrhinum", note: "lidově lvíček — svislá linka do každé kytice", from: "1 200" },
    { cz: "Kalina", lat: "Viburnum", note: "jablíčkově zelené koule, chladí i teplé barvy", from: "1 400" },
    { cz: "Růže keřová", lat: "Rosa", note: "drobná, trsnatá, voní víc než velkokvětá", from: "1 600" }
  ];

  const kytice = [
    {
      name: "Little Sunshine",
      desc: "Sezónní kytice v žlutých a máslových tónech. Vážeme ji ráno, u vás je ještě dnes.",
      price: "1 530 Kč",
      tag: "Doručení dnes",
      cta: "Objednat do košíku"
    },
    {
      name: "Květinový box Velvet",
      desc: "Hluboké vínové odstíny v kulatém boxu. Voda uvnitř, nemusíte přendávat do vázy.",
      price: "3 100 Kč",
      tag: "Doručení dnes",
      cta: "Objednat do košíku"
    },
    {
      name: "Levandulový věnec",
      desc: "Sušená levandule na dveře i do kuchyně. Voní celou sezónu, nezvadne.",
      price: "420 Kč",
      tag: "Skladem",
      cta: "Objednat do košíku"
    }
  ];

  return (
    <main className="ub">
      <header className="ub-nav">
        <a className="ub-mark" href="#" aria-label="Urban Bloom, květinářství Praha">
          <span className="ub-mark-urban">Urban</span>
          <span className="ub-mark-bloom">Bloom</span>
        </a>
        <nav className="ub-menu" aria-label="Hlavní">
          <a href="#pult">Z pultu dnes</a>
          <a href="#stem">Stonky STEM</a>
          <a href="#dilna">Dílna &amp; prodejny</a>
        </nav>
        <a className="ub-nav-cta" href="#pult">Objednat kytici</a>
      </header>

      <section className="ub-hero" id="hero">
        <div className="ub-hero-media">
          <img
            src="/hero.webp"
            alt="Čerstvě svázaná sezónní kytice v dílně Urban Bloom v Praze"
            width={1600}
            height={2000}
            fetchPriority="high"
          />
        </div>
        <div className="ub-hero-copy">
          <p className="ub-eyebrow">Květinářství · Praha 2 &amp; Praha 8</p>
          <h1 className="ub-h1">
            Kytice, kterou<br />
            <em>vážeme ráno</em><br />
            a večer ji máte doma.
          </h1>
          <p className="ub-lede">
            Žádný sklad chladíren. Naši floristé kytice svazují každý den z toho, co
            zrovna přišlo z velkoobchodu — a to, co objednáte do 14:00, rozvezeme po
            Praze ještě dnes.
          </p>
          <div className="ub-hero-actions">
            <a className="ub-btn" href="#pult">Vybrat kytici na dnes</a>
            <a className="ub-btn-ghost" href="#stem">Chci květiny po stoncích</a>
          </div>
        </div>
      </section>

      <section className="ub-section ub-pult" id="pult" aria-labelledby="pult-h">
        <div className="ub-sec-head">
          <p className="ub-eyebrow">Z pultu — dnes svázané</p>
          <h2 id="pult-h" className="ub-h2">Připravené k doručení ještě dnes</h2>
          <p className="ub-sec-note">
            Vybraný sortiment, který vážeme každé ráno. Objednáte do 14:00, kurýr
            vyráží odpoledne.
          </p>
        </div>

        <ul className="ub-grid">
          {kytice.map((k) => (
            <li className="ub-card" key={k.name}>
              <div className="ub-card-media">
                <img
                  src="/section-1.webp"
                  alt={`Kytice ${k.name} od Urban Bloom`}
                  width={800}
                  height={800}
                  loading="lazy"
                />
                <span className="ub-badge">{k.tag}</span>
              </div>
              <div className="ub-card-body">
                <h3 className="ub-card-title">{k.name}</h3>
                <p className="ub-card-desc">{k.desc}</p>
                <div className="ub-card-foot">
                  <span className="ub-price">{k.price}</span>
                  <a className="ub-btn-sm" href="#pult">{k.cta}</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="ub-section ub-stem" id="stem" aria-labelledby="stem-h">
        <div className="ub-stem-intro">
          <p className="ub-eyebrow ub-eyebrow-light">Nová kolekce · STEM</p>
          <h2 id="stem-h" className="ub-h2 ub-h2-light">
            Květiny po svazku,<br />přímo z velkoobchodu
          </h2>
          <p className="ub-lede ub-lede-light">
            Kdo si rád aranžuje sám, nemusí platit za balení ani za práci floristy.
            Vyberete si stonky, my je přivezeme čerstvé přímo k vašemu termínu.
          </p>
          <a className="ub-btn ub-btn-cream" href="#stem">Prozkoumat kolekci STEM</a>
        </div>

        <div className="ub-stem-media">
          <img
            src="/section-2.webp"
            alt="Svazky čerstvých květin z kolekce STEM připravené k vyzvednutí"
            width={1200}
            height={900}
            loading="lazy"
          />
        </div>

        <div className="ub-stemlist" role="list" aria-label="Aktuální stonky v nabídce">
          {stems.map((s, i) => (
            <div className="ub-stem-row" role="listitem" key={s.cz}>
              <span className="ub-stem-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="ub-stem-name">
                {s.cz}
                <span className="ub-stem-lat">{s.lat}</span>
              </span>
              <span className="ub-stem-note">{s.note}</span>
              <span className="ub-stem-price">od {s.from} Kč <small>/ svazek</small></span>
            </div>
          ))}
        </div>
      </section>

      <section className="ub-section ub-dilna" id="dilna" aria-labelledby="dilna-h">
        <div className="ub-sec-head">
          <p className="ub-eyebrow">Dílna &amp; prodejny</p>
          <h2 id="dilna-h" className="ub-h2">Přijďte si pro kytici osobně</h2>
          <p className="ub-sec-note">
            Vážeme, sušíme věnce a učíme floristiku na dvou adresách v Praze. Zastavte
            se — poradíme s výběrem podle příležitosti i podle toho, co má sezónu.
          </p>
        </div>

        <div className="ub-shops">
          <article className="ub-shop">
            <h3 className="ub-shop-name">Na Moráni 345/11</h3>
            <p className="ub-shop-loc">Praha 2 — hlavní dílna a kurzy</p>
            <dl className="ub-hours">
              <div><dt>Po–Pá</dt><dd>9:00–20:00</dd></div>
              <div><dt>So–Ne</dt><dd>10:00–17:00</dd></div>
            </dl>
          </article>
          <article className="ub-shop">
            <h3 className="ub-shop-name">Rohanské nábřeží 670/17</h3>
            <p className="ub-shop-loc">Praha 8 — prodejna a výdej rozvozu</p>
            <dl className="ub-hours">
              <div><dt>Po–Pá</dt><dd>10:00–19:00</dd></div>
              <div><dt>So–Ne</dt><dd>zavřeno</dd></div>
            </dl>
          </article>
        </div>

        <div className="ub-facts">
          <div className="ub-fact">
            <p className="ub-fact-k">Rozvoz po Praze</p>
            <p className="ub-fact-v">objednávky do 14:00 doručíme týž den</p>
          </div>
          <div className="ub-fact">
            <p className="ub-fact-k">Kurzy floristiky</p>
            <p className="ub-fact-v">dvoudenní pro začátečníky i individuální</p>
          </div>
          <div className="ub-fact">
            <p className="ub-fact-k">Firemní květiny</p>
            <p className="ub-fact-v">pravidelný rozvoz do kanceláří a na eventy</p>
          </div>
        </div>
      </section>
    </main>
  );
}
