import { AiImage } from "./_ui";
import { CountUp } from "./motion";

const categories = [
  { name: "Granule pro psy", note: "Acana · Brit Care · Carnilove · Orijen · Royal Canin" },
  { name: "Granule pro kočky", note: "Fitmin · N&D · Purina One · Royal Canin" },
  { name: "Konzervy a kapsičky", note: "Felix · Gourmet · Sheba · Whiskas" },
  { name: "Pamlsky pro psy i kočky", note: "Inaba Churu Dashi · sušené · dentální" },
  { name: "Chovatelské potřeby", note: "pelíšky · vodítka · obojky · misky · náhubky" },
  { name: "Podestýlky pro kočky", note: "hrudkující · silikonové · rostlinné" },
  { name: "Doplňky stravy a péče", note: "vitamíny · přírodní lékárna · srst a klouby" },
  { name: "Krmivo pro hlodavce", note: "morčata · králíci · křečci · potřeby" },
];

const featured = [
  {
    name: "FELIX Fantastic v želé",
    detail: "44 × 85 g · hovězí, kuře, losos, tuňák",
    price: "335 Kč",
    prompt: "Enamel-green tray of glossy cat food jelly cubes with meat pieces, warm brass studio light, honest catalog product photo, kraft paper background",
  },
  {
    name: "Purina ONE Sterilcat 7,5 kg",
    detail: "granule pro dospělé kočky",
    price: "799 Kč",
    prompt: "Large 7.5 kg sack of dry cat kibble granules on a kraft paper feed-sack background, ochre and green packaging, tidy retail catalog photo",
  },
  {
    name: "Royal Canin Fussy Exigent 10 kg",
    detail: "granule pro vybíravé kočky",
    price: "1 525 Kč",
    prompt: "Heavy 10 kg bag of premium dry cat food kibble, brass-ochre and coal tones, sitting on a wooden shop floor, honest local pet-shop catalog photograph",
  },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <div className="wrap topbar-in">
          <a className="wordmark" href="#" aria-label="TWIKO — zvěrimex Ostrava">
            TWIK<span className="wm-o" aria-hidden="true">O</span>
            <span className="wm-sub">zvěrimex</span>
          </a>
          <nav className="topnav" aria-label="Hlavní">
            <a href="#katalog">Katalog</a>
            <a href="#onas">O nás</a>
            <a className="topphone" href="tel:+420777111222">Infolinka 777 111 222</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap hero-in">
          <div className="hero-copy">
            <p className="eyebrow">Zvěrimex · Ostrava a Staré Město u F‑M · od roku 2004</p>
            <h1>
              Celý regál pro<br />psy a kočky.
              <span className="h1-accent">Skladem, na dosah.</span>
            </h1>
            <p className="lede">
              Přes čtyři tisíce položek krmiv a chovatelských potřeb. Vyberete online,
              vyzvednete na prodejně v&nbsp;Ostravě — a&nbsp;<strong>těžké pytle granulí
              vám dovezeme až domů</strong>, ať je netaháte sami.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#katalog">Prohlédnout katalog</a>
              <a className="btn btn-ghost" href="tel:+420777111222">Zavolat 777&nbsp;111&nbsp;222</a>
            </div>
          </div>

          <div className="hero-plate" aria-hidden="true">
            <span className="plate-mark" />
            <div className="plate-brand">TWIKO</div>
            <div className="plate-line">ZVĚRIMEX</div>
            <ul className="plate-list">
              <li>Granule · Konzervy · Pamlsky</li>
              <li>Chovatelské potřeby</li>
              <li>Doplňky &amp; přírodní lékárna</li>
            </ul>
            <div className="plate-foot">OSTRAVA · OD 2004</div>
          </div>
        </div>
      </section>

      <section className="trust" aria-label="Proč k nám">
        <div className="kibble-band" aria-hidden="true" />
        <div className="wrap trust-grid">
          <div className="trust-item">
            <CountUp to={4000} className="trust-num" />
            <span className="trust-lbl">položek skladem</span>
          </div>
          <div className="trust-item">
            <CountUp to={20} className="trust-num" />
            <span className="trust-lbl">let na trhu</span>
          </div>
          <div className="trust-item">
            <span className="trust-num trust-word">2</span>
            <span className="trust-lbl">kamenné prodejny</span>
          </div>
          <div className="trust-item">
            <span className="trust-num trust-word">Zdarma</span>
            <span className="trust-lbl">doprava nad 1 500 Kč</span>
          </div>
        </div>
        <div className="kibble-band" aria-hidden="true" />
      </section>

      <section id="katalog" className="section catalog">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow eyebrow-dark">Sortiment</p>
            <h2>Vyberte podle mazlíčka</h2>
            <p className="sec-sub">
              Osm oddělení jednoho zvěrimexu. Každá cedule je vlastní police —
              zahraniční i domácí značky, od granulí po náhubky.
            </p>
          </header>

          <ul className="plate-grid">
            {categories.map((c, i) => (
              <li
                key={c.name}
                className="cat-plate"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="plate-mark plate-mark-sm" aria-hidden="true" />
                <h3>{c.name}</h3>
                <p>{c.note}</p>
                <span className="plate-arrow" aria-hidden="true">→</span>
              </li>
            ))}
          </ul>

          <div className="featured">
            <p className="eyebrow eyebrow-dark">Nejprodávanější tento týden</p>
            <ul className="prod-grid">
              {featured.map((p) => (
                <li key={p.name} className="prod-card">
                  <div className="prod-thumb">
                    <AiImage
                      src={p.prompt}
                      alt={p.name}
                      className="prod-img"
                    />
                  </div>
                  <div className="prod-body">
                    <h4>{p.name}</h4>
                    <p>{p.detail}</p>
                    <div className="prod-foot">
                      <span className="prod-price">{p.price}</span>
                      <span className="prod-stock">Skladem</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="onas" className="section about">
        <div className="wrap about-in">
          <div className="about-copy">
            <p className="eyebrow">O nás</p>
            <h2>Dvacet let vážíme granule v&nbsp;Ostravě</h2>
            <p>
              Krmivy a chovatelskými potřebami pro psy a kočky se poctivě zabýváme
              už přes dvacet let — a pořád nás to baví. Nejsme jen e‑shop: najdete
              nás na prodejnách v&nbsp;<strong>Ostravě</strong> a ve
              <strong> Starém Městě u&nbsp;Frýdku‑Místku</strong>, kde si vyberete
              z více než 4&nbsp;000 položek naživo.
            </p>
            <p>
              Díky dvaceti letům v oboru vám poradíme s výběrem krmiva podle věku,
              plemene i&nbsp;zdraví mazlíčka. A protože pytel granulí něco váží,
              stačí zavolat nebo napsat — objednávku vyřídíme dnes, nejpozději do
              tří dnů ji máte doma.
            </p>

            <dl className="contact">
              <div>
                <dt>Infolinka</dt>
                <dd><a href="tel:+420777111222">+420 777 111 222</a></dd>
              </div>
              <div>
                <dt>E‑mail</dt>
                <dd><a href="mailto:info@example.cz">info@example.cz</a></dd>
              </div>
              <div>
                <dt>Prodejna</dt>
                <dd>Ukázková 123, Ostrava</dd>
              </div>
            </dl>
          </div>

          <div className="brands">
            <div className="brand-col">
              <h3><span className="plate-mark plate-mark-sm" aria-hidden="true" />Pro pejsky</h3>
              <p>
                Acana · Ami Dog · Arden Grange · Belcando · Brit Care · Carnilove ·
                Essential Foods · Fitmin · Josera · N&amp;D · Ontario · Orijen ·
                Pedigree · Pro Plan · Royal Canin · Taste of the Wild · Yoggies
              </p>
            </div>
            <div className="brand-col">
              <h3><span className="plate-mark plate-mark-sm" aria-hidden="true" />Pro kočky</h3>
              <p>
                Acana · Ami Cat · Brit Care · Felix · Fitmin Purity · IAMS ·
                Josera · Josicat · N&amp;D · Ontario · Pro Plan · Purina One ·
                Royal Canin · Taste of the Wild · Whiskas
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
