import type { CSSProperties } from "react";

export default function Page() {
  const stock = [
    {
      name: "McLaren 720S",
      spec: "360° kamera · Bowers & Wilkins · LED · 8 400 km",
      price: "5 720 000",
      tag: "Showroom",
    },
    {
      name: "Ferrari 488 Spider",
      spec: "Rosso Corsa · keramické brzdy · 87 900 km",
      price: "4 490 000",
      tag: "Rosso Corsa",
    },
    {
      name: "Porsche 911 GT3 Weissach",
      spec: "PDK · Lift · hořčíková kola · 2 500 km",
      price: "6 799 000",
      tag: "992.2",
    },
    {
      name: "Ferrari 488 Pista",
      spec: "Atelier · Lift · karbon · 21 500 km",
      price: "11 990 000",
      tag: "Záruka do 2028",
    },
  ];

  const services = [
    {
      k: "01",
      t: "Výkup a zprostředkování",
      d: "Férové ocenění během jednoho jednání, profesionální fotoprodukce a komunikace se zájemci. Vy podepíšete, my vyřídíme zbytek.",
    },
    {
      k: "02",
      t: "Vozy na objednávku",
      d: "Řekněte nám konfiguraci, kterou hledáte. Najdeme konkrétní kus, prověříme historii i stav a zajistíme dovoz i přepis.",
    },
    {
      k: "03",
      t: "Komplexní servis",
      d: "Údržba i náročné zásahy na vozech Porsche, Ferrari, Lamborghini, McLaren, Rolls-Royce, Mercedes-Benz, BMW i Audi.",
    },
    {
      k: "04",
      t: "Certifikovaný Tesla Body Shop",
      d: "Karosářské opravy, lakování, diagnostika i běžná péče o elektromobily Tesla přímo v naší dílně v Praze.",
    },
  ];

  return (
    <main className="ac">
      <header className="ac-nav">
        <a className="ac-mark" href="#" aria-label="Advantage Cars, domů">
          <span className="ac-mark-a">Advantage</span>
          <span className="ac-mark-c">Cars</span>
        </a>
        <nav className="ac-nav-links" aria-label="Hlavní">
          <a href="#nabidka">Nabídka vozů</a>
          <a href="#sluzby">Služby &amp; servis</a>
          <a href="#kontakt">Praha</a>
        </nav>
      </header>

      <section className="ac-hero" aria-labelledby="hero-t">
        <img
          className="ac-hero-img"
          src="/hero.webp"
          alt="Sportovní vůz z nabídky autobazaru Advantage Cars v pražském showroomu"
        />
        <div className="ac-hero-grain" aria-hidden="true" />
        <div className="ac-hero-inner">
          <p className="ac-eyebrow">Autobazar prémiových vozů · Praha</p>
          <h1 id="hero-t" className="ac-hero-title">
            Vozy, které jinde
            <br />
            <em>na sklad nepustí.</em>
          </h1>
          <p className="ac-hero-lede">
            Pečlivě vybrané sportovní a prémiové vozy skladem — prověřený
            původ, transparentní stav a výbava, kterou opravdu chcete.
          </p>
          <div className="ac-hero-cta">
            <a className="ac-btn" href="#nabidka">
              Prohlédnout skladové vozy
            </a>
            <a className="ac-btn ac-btn-ghost" href="#kontakt">
              Objednat prohlídku
            </a>
          </div>
        </div>
        <dl className="ac-hero-strip">
          <div>
            <dt>Skladem v Praze</dt>
            <dd>40+ vozů</dd>
          </div>
          <div>
            <dt>Prověřený původ</dt>
            <dd>Servisní historie u každého</dd>
          </div>
          <div>
            <dt>Výkup</dt>
            <dd>Ocenění do 24 h</dd>
          </div>
        </dl>
      </section>

      <section className="ac-stock" id="nabidka" aria-labelledby="stock-t">
        <div className="ac-section-head">
          <h2 id="stock-t">Vybrané kusy skladem</h2>
          <p>
            Malý výběr z aktuální nabídky. Každý vůz má doloženou historii a
            stav, který uvidíte i naživo v showroomu.
          </p>
        </div>

        <ul className="ac-list" role="list">
          {stock.map((c, i) => (
            <li
              className="ac-row"
              key={c.name}
              style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties}
            >
              <div className="ac-row-idx" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="ac-row-main">
                <span className="ac-row-tag">{c.tag}</span>
                <h3 className="ac-row-name">{c.name}</h3>
                <p className="ac-row-spec">{c.spec}</p>
              </div>
              <div className="ac-row-price">
                <span className="ac-price-num">{c.price}</span>
                <span className="ac-price-cur">CZK</span>
              </div>
            </li>
          ))}
        </ul>

        <a className="ac-btn ac-btn-wide" href="#nabidka">
          Zobrazit celou nabídku
        </a>
      </section>

      <section className="ac-services" id="sluzby" aria-labelledby="svc-t">
        <div className="ac-svc-grid">
          <div className="ac-svc-copy">
            <div className="ac-section-head">
              <h2 id="svc-t">Nejen prodej. Celá cesta s vozem.</h2>
              <p>
                Od výkupu přes dovoz na objednávku až po servis pod jednou
                střechou v Praze. Zařídíme papíry, dílnu i lak — vy jen jezdíte.
              </p>
            </div>
            <ol className="ac-svc-list" role="list">
              {services.map((s) => (
                <li className="ac-svc-item" key={s.k}>
                  <span className="ac-svc-k">{s.k}</span>
                  <div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <figure className="ac-svc-fig">
            <img
              src="/section-1.webp"
              alt="Detail servisu a přípravy prémiového vozu v dílně Advantage Cars"
            />
            <figcaption>Vlastní dílna · certifikovaný Tesla Body Shop</figcaption>
          </figure>
        </div>
      </section>

      <section className="ac-trust" id="kontakt" aria-labelledby="trust-t">
        <figure className="ac-trust-fig">
          <img
            src="/section-2.webp"
            alt="Showroom Advantage Cars s prémiovými vozy v Praze"
          />
        </figure>
        <div className="ac-trust-copy">
          <p className="ac-eyebrow ac-eyebrow-dark">O nás · od roku prodáváme jistotu</p>
          <h2 id="trust-t">
            Auto koupíte kdekoliv.
            <br />U nás k němu dostanete klid.
          </h2>
          <p>
            Advantage Cars je pražský autobazar zaměřený na prémiové a sportovní
            vozy. Každý kus prověřujeme na původ, stav i historii, než vůbec
            vjede do showroomu — a to samé bychom chtěli, kdybychom si vůz
            kupovali sami.
          </p>
          <ul className="ac-trust-facts" role="list">
            <li>
              <strong>Prověřený původ</strong>
              <span>Historie, VIN i stav ke každému vozu doložené na místě.</span>
            </li>
            <li>
              <strong>Výkup i protiúčet</strong>
              <span>Prodejte stávající vůz a hned přesedněte do nového.</span>
            </li>
            <li>
              <strong>Praha, na jednom místě</strong>
              <span>Prodej, servis i lakovna pod jednou střechou.</span>
            </li>
          </ul>
          <div className="ac-contact">
            <a className="ac-btn" href="tel:+420226223003">
              Zavolat: +420 226 223 003
            </a>
            <a className="ac-contact-mail" href="mailto:recepce@advantage-cars.cz">
              recepce@advantage-cars.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
