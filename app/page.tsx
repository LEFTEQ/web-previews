import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "H2O",
      nazev: "Voda a rozvody",
      popis:
        "Kapající baterie, prasklé přívody, výměna van a sprchových koutů. Najdu netěsnost, spravím ji a uklidím po sobě.",
      body: ["Opravy a výměny baterií", "Vany a sprchové kouty", "Revize rozvodů vody"],
    },
    {
      kod: "°C",
      nazev: "Topení",
      popis:
        "Montáž topení od radiátorů po celý rozvod. Když topí nerovnoměrně nebo klepe v trubkách, přijedu a doladím to.",
      body: ["Montáž a výměna radiátorů", "Rozvody tepla", "Odvzdušnění a seřízení"],
    },
    {
      kod: "CH4",
      nazev: "Plyn a kotle",
      popis:
        "Instalace bojlerů, servis plynových kotlů, plynařské práce. S tlakem plynu se nežertuje — dělám to pořádně.",
      body: ["Servis plynových kotlů", "Instalace bojlerů", "Plynařské práce"],
    },
  ];

  return (
    <main className="h-page">
      <header className="h-top">
        <a className="h-wordmark" href="#" aria-label="Martin Hemelík — instalatér Liberec">
          <span className="h-wm-name">Hemelík</span>
          <span className="h-wm-sub">voda · topení · plyn</span>
        </a>
        <a className="h-phone" href="tel:+420723672697">
          <span className="h-phone-lbl">Zavolat</span>
          <span className="h-phone-num">723 672 697</span>
        </a>
      </header>

      <section className="h-hero" aria-labelledby="hero-nadpis">
        <div className="h-hero-media">
          <img
            src="/hero.webp"
            alt="Martin Hemelík při instalatérské práci na rozvodech vody a topení"
            className="h-hero-img"
          />
          <div className="h-hero-scrim" aria-hidden="true" />
        </div>
        <div className="h-hero-body">
          <p className="h-eyebrow">Instalatér · topenář · plynař — Liberec a okolí</p>
          <h1 id="hero-nadpis" className="h-hero-nadpis">
            Když někde <span className="h-drip">kape</span>, teče nebo netopí,<br />
            vím, kde hledat.
          </h1>
          <p className="h-hero-lede">
            Jmenuju se Martin Hemelík a spravuju vodu, topení i plyn v Liberci a okolí.
            Přijedu, najdu příčinu — ne jen následek — a spravím to napoprvé.
          </p>
          <div className="h-hero-cta">
            <a className="h-btn" href="tel:+420723672697">Zavolat 723 672 697</a>
            <span className="h-hero-note">Mníšek u Liberce · celý okres Liberec</span>
          </div>
        </div>
        <ul className="h-gauge" aria-label="Rychlé informace">
          <li><span className="h-gauge-v">30+</span><span className="h-gauge-l">let za trubkami</span></li>
          <li><span className="h-gauge-v">Liberec</span><span className="h-gauge-l">celý okres</span></li>
          <li><span className="h-gauge-v">Plátce DPH</span><span className="h-gauge-l">na fakturu i doklad</span></li>
        </ul>
      </section>

      <section className="h-sluzby" aria-labelledby="sluzby-nadpis">
        <div className="h-sec-head">
          <p className="h-eyebrow h-eyebrow--dark">Co dělám</p>
          <h2 id="sluzby-nadpis" className="h-sec-nadpis">Tři okruhy, jeden člověk</h2>
          <p className="h-sec-lede">
            Neposílám za vás partu neznámých lidí. Přijedu, změřím, spravím a řeknu vám
            rovnou, co to bude stát.
          </p>
        </div>

        <div className="h-cards">
          {sluzby.map((s) => (
            <article className="h-card" key={s.kod}>
              <span className="h-card-kod" aria-hidden="true">{s.kod}</span>
              <h3 className="h-card-nazev">{s.nazev}</h3>
              <p className="h-card-popis">{s.popis}</p>
              <ul className="h-card-body">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="h-figure">
          <img
            src="/section-1.webp"
            alt="Detail nově osazeného rozvodu topení a radiátoru"
            className="h-figure-img"
          />
          <figcaption className="h-figure-cap">
            Poctivá práce se pozná na spojích. Tady se nic netají za sádrokartonem.
          </figcaption>
        </figure>
      </section>

      <section className="h-onas" aria-labelledby="onas-nadpis">
        <div className="h-onas-grid">
          <div className="h-onas-media">
            <img
              src="/section-2.webp"
              alt="Martin Hemelík ve své dílně s nářadím"
              className="h-onas-img"
            />
          </div>
          <div className="h-onas-text">
            <p className="h-eyebrow h-eyebrow--dark">O mně</p>
            <h2 id="onas-nadpis" className="h-sec-nadpis">
              Řemeslo z Mníšku, na které se dá spolehnout
            </h2>
            <p className="h-onas-p">
              Sídlím v Mníšku u Liberce a jezdím po celém okrese. Za ta léta jsem viděl
              tolik provizorních oprav, že vím, kudy voda opravdu teče. Radši věc udělám
              jednou pořádně, než abych se k ní vracel.
            </p>
            <p className="h-onas-p">
              Domluva je jednoduchá: zavoláte, popíšete problém, dohodneme se na termínu.
              Když jde o havárii, řeknu to na rovinu a přijedu, jak nejdřív to jde.
            </p>

            <dl className="h-facts">
              <div className="h-fact">
                <dt>Kde mě najdete</dt>
                <dd>Liberecká 233, 463 31 Mníšek</dd>
              </div>
              <div className="h-fact">
                <dt>Působnost</dt>
                <dd>Liberec a celý okres</dd>
              </div>
              <div className="h-fact">
                <dt>IČ</dt>
                <dd>44602855 · plátce DPH</dd>
              </div>
              <div className="h-fact">
                <dt>Telefon</dt>
                <dd><a href="tel:+420723672697">723 672 697</a></dd>
              </div>
            </dl>

            <blockquote className="h-quote">
              „Baterie kapala tři měsíce, jiní na to neměli čas. Pan Hemelík přijel druhý
              den, spravil to za půl hodiny a poradil, co dál s bojlerem.“
              <cite>— zákaznice z Liberce</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
