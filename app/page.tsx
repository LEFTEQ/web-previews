import { ColourwaySwap } from "./motion";

const bikes = [
  {
    brand: "TREK",
    model: "Slash 9.8 XT Gen 5",
    colour: "Matte Battleship Blue",
    swatch: "#3a4753",
    matte: true,
    size: "XL · 29\"",
    code: "5261705-21,5",
    price: "119 990",
    tag: "Enduro",
  },
  {
    brand: "TREK",
    model: "Supercaliber 9.8 XT Gen 1",
    colour: "Crimson",
    swatch: "#b11f2f",
    matte: false,
    size: "L · 29\"",
    code: "—",
    price: "139 990",
    tag: "XC závod",
  },
  {
    brand: "KONA",
    model: "Process 153",
    colour: "Satin Metallic Mauve",
    swatch: "#9a7b8a",
    matte: true,
    size: "L · 29\"",
    code: "—",
    price: "69 599",
    tag: "Enduro",
  },
  {
    brand: "TREK",
    model: "Émonda SL 6",
    colour: "Crimson",
    swatch: "#b11f2f",
    matte: false,
    size: "58",
    code: "—",
    price: "89 990",
    tag: "Silnice",
  },
  {
    brand: "KONA",
    model: "Process 134",
    colour: "Pinot Noir",
    swatch: "#5a2740",
    matte: false,
    size: "M · 29\"",
    code: "—",
    price: "55 999",
    tag: "Trail",
  },
  {
    brand: "TREK",
    model: "Procaliber 9.6 Gen 2",
    colour: "Blue Carbon Smoke",
    swatch: "#2c3540",
    matte: true,
    size: "ML · 29\"",
    code: "—",
    price: "48 990",
    tag: "XC hardtail",
  },
];

export default function Page() {
  return (
    <main className="ba">
      <header className="ba-topbar">
        <a href="#top" className="ba-wordmark" aria-label="Bike Assault, úvod">
          <span className="ba-wordmark-a">BIKE</span>
          <span className="ba-wordmark-slash" aria-hidden="true" />
          <span className="ba-wordmark-b">ASSAULT</span>
          <span className="ba-wordmark-geo">65,5°</span>
        </a>
        <nav className="ba-nav" aria-label="Hlavní">
          <a href="#nabidka">Skladem</a>
          <a href="#servis">Servis</a>
          <a href="tel:+420777715713" className="ba-nav-call">777&nbsp;715&nbsp;713</a>
        </nav>
      </header>

      <section className="ba-hero" id="top">
        <div className="ba-wrap ba-hero-grid">
          <div className="ba-hero-copy">
            <p className="ba-eyebrow">
              <span className="ba-tick" aria-hidden="true" />
              Trek &amp; Kona · Werichova, Praha 5
            </p>
            <h1 className="ba-hero-title">
              KOLA<br />V&nbsp;BARVĚ
              <ColourwaySwap />
            </h1>
            <p className="ba-lede">
              Enduro, cross-country i silnice skladem v prodejně na Werichově.
              Na rám si sáhnete dřív, než ho koupíte — a odvezete si ho ještě dnes.
              Osobní převzetí i servis pod jednou střechou.
            </p>
            <div className="ba-actions">
              <a href="#nabidka" className="ba-btn">Prohlédnout kola skladem</a>
              <a href="#servis" className="ba-btn-ghost">Objednat servis</a>
            </div>
          </div>

          <aside className="ba-geo" aria-hidden="true">
            <div className="ba-geo-frame">
              <div className="ba-geo-line" />
              <div className="ba-geo-ground" />
              <div className="ba-geo-hazard" />
            </div>
            <div className="ba-geo-label">
              <span className="ba-geo-num">65,5°</span>
              <span className="ba-geo-cap">úhel hlavové trubky — geometrie útoku</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="ba-section" id="nabidka">
        <div className="ba-wrap">
          <header className="ba-head">
            <p className="ba-eyebrow">
              <span className="ba-tick" aria-hidden="true" />
              Skladem v prodejně
            </p>
            <h2 className="ba-h2">Rámy, na které si dnes sáhnete</h2>
            <p className="ba-head-note">
              Každý kus je fyzicky u nás na Werichově. Barva na kartě je skutečná
              tovární kolorka — žádné renderové přikrášlování.
            </p>
          </header>

          <ul className="ba-grid">
            {bikes.map((b) => (
              <li key={b.model + b.colour} className="ba-card">
                <div
                  className="ba-card-chip"
                  style={{ background: b.swatch }}
                >
                  <span className="ba-card-tag">{b.tag}</span>
                  {b.matte ? <span className="ba-card-matte">matte</span> : null}
                </div>
                <div className="ba-card-body">
                  <p className="ba-card-brand">{b.brand}</p>
                  <h3 className="ba-card-model">{b.model}</h3>
                  <p className="ba-card-colour">
                    <span
                      className="ba-dot"
                      style={{ background: b.swatch }}
                      aria-hidden="true"
                    />
                    {b.colour}
                  </p>
                  <dl className="ba-card-spec">
                    <div>
                      <dt>Velikost</dt>
                      <dd>{b.size}</dd>
                    </div>
                    <div>
                      <dt>Kód</dt>
                      <dd>{b.code}</dd>
                    </div>
                  </dl>
                  <p className="ba-card-price">
                    {b.price} <span>Kč</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ba-section ba-section--dark" id="servis">
        <div className="ba-wrap ba-servis-grid">
          <div className="ba-servis-copy">
            <p className="ba-eyebrow ba-eyebrow--on-dark">
              <span className="ba-tick" aria-hidden="true" />
              Servis &amp; jistota
            </p>
            <h2 className="ba-h2 ba-h2--on-dark">
              Kolo od nás nekončí u pokladny
            </h2>
            <p className="ba-servis-lede">
              Prodáváme značky, které umíme opravit. Na Trek dostanete
              doživotní záruku na rám, servis máme přímo v prodejně a
              termín domluvíte telefonem — bez čekání ve frontě e-mailů.
            </p>

            <ul className="ba-facts">
              <li>
                <span className="ba-fact-key">Doživotní záruka Trek</span>
                <span className="ba-fact-val">na rám, u nás vyřídíme reklamaci</span>
              </li>
              <li>
                <span className="ba-fact-key">Osobní převzetí</span>
                <span className="ba-fact-val">kola prodáváme jen na prodejně — sedneš, změříš, odvezeš</span>
              </li>
              <li>
                <span className="ba-fact-key">Servis pod jednou střechou</span>
                <span className="ba-fact-val">seřízení, výměna, garanční prohlídky</span>
              </li>
            </ul>
          </div>

          <div className="ba-servis-card">
            <h3 className="ba-servis-card-title">Přijeďte na Werichovu</h3>
            <address className="ba-address">
              Bike Assault s.r.o.<br />
              Werichova 981/21<br />
              152 00 Praha 5
            </address>

            <div className="ba-hours">
              <div>
                <p className="ba-hours-h">Prodejna</p>
                <p>Po–Pá 10:00–20:00</p>
                <p>So 9:00–14:00 · Ne zavřeno</p>
                <a href="tel:+420777715713" className="ba-phone">777 715 713</a>
              </div>
              <div>
                <p className="ba-hours-h">Servis</p>
                <p>Po–Pá 10:00–17:00</p>
                <p>So, Ne zavřeno</p>
                <a href="tel:+420777949770" className="ba-phone">777 949 770</a>
              </div>
            </div>

            <a href="tel:+420777715713" className="ba-btn ba-btn--block">
              Zavolat do prodejny
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
