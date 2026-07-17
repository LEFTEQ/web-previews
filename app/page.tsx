import { AiImage } from "./_ui";

function Reticle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={`reticle ${className ?? ""}`}
    >
      <circle cx="16" cy="16" r="9" className="reticle-ring" />
      <line x1="16" y1="1" x2="16" y2="8" />
      <line x1="16" y1="24" x2="16" y2="31" />
      <line x1="1" y1="16" x2="8" y2="16" />
      <line x1="24" y1="16" x2="31" y2="16" />
      <circle cx="16" cy="16" r="1.6" className="reticle-dot" />
    </svg>
  );
}

const services = [
  {
    title: "Dioptrické brýle",
    body: "Funkční, ale i stylové a pohodlné na celý den. Obruby vybereme k tvaru obličeje i k vašim dioptriím.",
  },
  {
    title: "Sluneční brýle",
    body: "Zdravé a chráněné oči a k tomu skvělý vzhled. Široká nabídka, klidně i s dioptriemi.",
  },
  {
    title: "Dětské brýle",
    body: "Hlídáme zdravý vývoj zraku vašeho dítěte. Specializujeme se na čočky Miyosmart proti krátkozrakosti.",
  },
  {
    title: "Sportovní brýle",
    body: "Maximální ochrana očí při běhu, na kole i v terénu. Lehké, pevné a přesně usazené.",
  },
  {
    title: "Aplikace čoček",
    body: "Naučíme vás kontaktní čočky bezpečně nasazovat a vyndávat a vybereme ty pravé pro vaše oči.",
  },
  {
    title: "Měření zraku",
    body: "Optometristé změří váš zrak na moderních přístrojích. V klidu, přesně a se srozumitelným výsledkem.",
  },
];

export default function Page() {
  return (
    <main className="doc">
      <header className="topbar">
        <a href="#top" className="wordmark" id="top">
          <Reticle className="wordmark-mark" />
          <span className="wordmark-text">
            dioptra<span className="wordmark-dim">·optik</span>
          </span>
        </a>
        <p className="topbar-loc">Oční optika · Hradec Králové</p>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-idx">01</span>
              Od roku 2003 vidíme zblízka
            </p>
            <h1 id="hero-title" className="hero-title">
              Zaostřeno
              <br />
              na váš zrak
            </h1>
            <p className="hero-lede">
              Rodinná optika v centru Hradce Králové. Změříme, poradíme a
              vybereme brýle, které vám opravdu sednou — na čtení, do práce
              i na kolo.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#sluzby">
                Objednat měření zraku
              </a>
              <a className="btn btn-ghost" href="#sluzby">
                Naše služby
              </a>
            </div>
          </div>

          <figure className="acuity" aria-label="Duochromový test ostrosti: červená a zelená polovina">
            <div className="acuity-split">
              <div className="acuity-half acuity-red" aria-hidden="true" />
              <div className="acuity-half acuity-green" aria-hidden="true" />
              <Reticle className="acuity-reticle" />
              <span className="acuity-numeral">1,0</span>
            </div>
            <figcaption className="acuity-caption">
              <span className="acuity-caption-key">VISUS</span>
              Červeno-zelený test, kterým doostřujeme vaše dioptrie na desetinu.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <Reticle className="section-mark" />
          <div>
            <p className="eyebrow">
              <span className="eyebrow-idx">02</span>
              Co pro vaše oči uděláme
            </p>
            <h2 id="sluzby-title" className="section-title">
              Šest služeb pod jednou střechou
            </h2>
          </div>
        </div>

        <ul className="cards">
          {services.map((s) => (
            <li className="card" key={s.title}>
              <span className="card-swatch" aria-hidden="true" />
              <h3 className="card-title">{s.title}</h3>
              <p className="card-body">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section trust" id="o-nas" aria-labelledby="trust-title">
        <div className="section-head">
          <Reticle className="section-mark" />
          <div>
            <p className="eyebrow">
              <span className="eyebrow-idx">03</span>
              Proč k nám lidé chodí
            </p>
            <h2 id="trust-title" className="section-title">
              Optika, která své řemeslo bere vážně
            </h2>
          </div>
        </div>

        <div className="trust-grid">
          <div className="trust-text">
            <p>
              Dioptra optik funguje v Hradci Králové od roku 2003. Za tu dobu
              nám důvěřovaly statisíce zákazníků po celé republice — a pořád
              platí to samé: měření zraku u nás dělají optometristé, ne
              automat.
            </p>
            <p>
              Přijďte se poradit i bez objednání. Ukážeme vám obruby, které
              se hodí k vašemu obličeji, a čočky přesně podle toho, jak a kde
              je nejvíc potřebujete. Reklamace i servis řešíme na místě.
            </p>
          </div>

          <dl className="stats">
            <div className="stat">
              <dt className="stat-label">S vámi už</dt>
              <dd className="stat-value">20+ let</dd>
            </div>
            <div className="stat">
              <dt className="stat-label">Důvěřuje nám</dt>
              <dd className="stat-value">800 000+ zákazníků</dd>
            </div>
            <div className="stat">
              <dt className="stat-label">Prodejny v ČR</dt>
              <dd className="stat-value">12×</dd>
            </div>
            <div className="stat">
              <dt className="stat-label">Kde nás najdete</dt>
              <dd className="stat-value">Hradec Králové, centrum</dd>
            </div>
          </dl>
        </div>

        <p className="trust-note">
          Chcete si nechat změřit zrak nebo vybrat brýle? Zavolejte nám na
          <span className="ph"> —</span> nebo napište na
          <span className="ph"> —</span>. Najdete nás na adrese
          <span className="ph"> —</span>, Hradec Králové.
        </p>
      </section>
    </main>
  );
}
