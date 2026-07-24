import { AiImage } from "./_ui";

const collections = [
  {
    name: "CXS SAFETY STEEL",
    type: "Kotníková",
    rating: "S3 SRC",
    note: "Ocelová špička i planžeta v podrážce. Do stavby, do dílny, do zimy.",
  },
  {
    name: "CXS ROCK",
    type: "Polobotka",
    rating: "S1P",
    note: "Lehká a prodyšná. Kompozitní špička bez kovu — projde detektorem.",
  },
  {
    name: "CXS ISLAND",
    type: "Sandál",
    rating: "S1",
    note: "Otevřená pata do horka. Vyztužená špička zůstává.",
  },
  {
    name: "CXS DOG",
    type: "Holínka",
    rating: "S5",
    note: "Celopryžová, do mokra a bláta. Stélka i špička uvnitř.",
  },
];

const specs = ["S3 SRC", "200 J špička", "velikost 36–48", "SRC protiskluz"];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#" aria-label="CANIS Safety, úvod">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-word">CANIS</span>
          <span className="brand-sub">SAFETY&nbsp;/&nbsp;OLOMOUC</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#kolekce">Kolekce</a>
          <a href="#duvera">O nás</a>
          <a href="#duvera">Velkoobchod</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-text">
          <p className="eyebrow">EN ISO 20345 · pracovní a bezpečnostní obuv</p>
          <h1 id="hero-title">
            Postavená<br />na <span className="hl">200 joulů.</span>
          </h1>
          <p className="lede">
            Ocelová špička drží náraz padajícího nářadí, podrážka nepustí na mokré
            dlažbě. Každý model, který v Olomouci prodáme, prošel stejnou zkouškou
            jako na vaší směně — jinak by tu nebyl.
          </p>
          <ul className="spec-row" aria-label="Parametry">
            {specs.map((s) => (
              <li className="spec" key={s}>
                {s}
              </li>
            ))}
          </ul>
          <a className="cta" href="#kolekce">Prohlédnout kolekci</a>
        </div>
        <figure className="hero-media">
          <AiImage src="/hero.webp" alt="Kožená kotníková pracovní bota s ocelovou špičkou a hrubou protiskluzovou podrážkou" />
        </figure>
      </section>

      <div className="tread-band" role="presentation" aria-hidden="true">
        <div className="tread" />
      </div>

      <section className="section" id="kolekce" aria-labelledby="kolekce-title">
        <div className="section-head">
          <p className="eyebrow">Co obouváme</p>
          <h2 id="kolekce-title">Čtyři podrážky na čtyři provozy</h2>
          <p className="section-lede">
            Neřešíme trendy, řešíme normu a terén. Vyberte podle toho, na čem
            stojíte — třídění podle EN kategorie najdete i v e-shopu.
          </p>
        </div>

        <div className="grid">
          <div className="grid-media">
            <AiImage src="/section-1.webp" alt="Detail protiskluzové podrážky pracovní obuvi s hrubým vzorkem" />
          </div>
          <ul className="cards">
            {collections.map((c) => (
              <li className="card" key={c.name}>
                <span className="card-rating">{c.rating}</span>
                <div className="card-body">
                  <h3>{c.name}</h3>
                  <p className="card-type">{c.type}</p>
                  <p className="card-note">{c.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="tread-band tread-band--rev" role="presentation" aria-hidden="true">
        <div className="tread" />
      </div>

      <section className="section" id="duvera" aria-labelledby="duvera-title">
        <div className="grid grid--flip">
          <div className="grid-media">
            <AiImage src="/section-2.webp" alt="Vyrovnané páry pracovní obuvi na regálu ve skladu" />
          </div>
          <div className="trust">
            <p className="eyebrow">O nás</p>
            <h2 id="duvera-title">Kamenná prodejna v Olomouci, ne jen krabice z e-shopu</h2>
            <p className="section-lede">
              Boty si u nás vyzkoušíte, změříme vám nohu a poradíme podle profese.
              Firmám vystrojíme celou směnu — od velikosti 36 po 48, s výšivkou
              loga na míru.
            </p>
            <ul className="facts">
              <li>
                <span className="fact-k">Prodejna &amp; výdej</span>
                <span className="fact-v">Olomouc, po–pá 7:00–15:00</span>
              </li>
              <li>
                <span className="fact-k">Velkoobchod &amp; B2B</span>
                <span className="fact-v">Ceny a fakturace pro firmy</span>
              </li>
              <li>
                <span className="fact-k">Výšivka &amp; potisk</span>
                <span className="fact-v">Logo na oděv i obuv, zdarma do 31. 7. 2026</span>
              </li>
              <li>
                <span className="fact-k">Zakázkové šití</span>
                <span className="fact-v">Profesní oděvy na míru provozu</span>
              </li>
            </ul>
            <dl className="contact">
              <div>
                <dt>Telefon</dt>
                <dd><a href="tel:+420777111222">777 111 222</a></dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:info@example.cz">info@example.cz</a></dd>
              </div>
              <div>
                <dt>Adresa</dt>
                <dd>Ukázková 123, Olomouc</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
