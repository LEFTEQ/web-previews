// VAPEE Morava s.r.o. — autodoprava & sklady, Olomouc-Hodolany
// Design koncept: „Ložná plocha" — layout stavěný jako nákladový list / vytěžovací tabule.
// Signature prvek: kilometrovníková škála (route strip) v hero — vodorovná osa Olomouc → Evropa
// s tonážními zastávkami (pick-up → návěs), odvozená z reálné nabídky firmy.

const fleet = [
  {
    tag: "do 1,2 t",
    name: "Pick-up / dodávka",
    desc: "Expresní kusovky a paletové zásilky po Olomouci, Moravě i celé ČR. Nakládka obvykle do 2 hodin od objednání.",
    meta: "ideální pro 1–4 palety",
  },
  {
    tag: "do 3,5 t",
    name: "Dodávka s plachtou",
    desc: "Vnitrostátní i mezinárodní přepravy bez čekání na vytížení kamionu. Plachta, boční nakládka, GPS sledování.",
    meta: "8–10 palet, ložná délka 4,2 m",
  },
  {
    tag: "do 12 t",
    name: "Sólo vůz",
    desc: "Pravidelné linky i jednorázové přepravy po ČR a střední Evropě. Hydraulické čelo pro místa bez rampy.",
    meta: "15–18 palet",
  },
  {
    tag: "do 24 t",
    name: "Návěsová souprava",
    desc: "Celovozové přepravy po celé Evropě — vlastní vozy i prověření smluvní dopravci. Plachtové i skříňové návěsy.",
    meta: "33 palet, ložná délka 13,6 m",
  },
  {
    tag: "nadrozměr",
    name: "Nadrozměrné přepravy",
    desc: "Stroje, konstrukce, technologické celky. Zajistíme povolení, doprovodná vozidla i trasu průjezdnou pro váš náklad.",
    meta: "individuální kalkulace",
  },
];

const warehouse = [
  { num: "10 000 m²", label: "krytých skladovacích ploch v Olomouci-Hodolanech" },
  { num: "7 t", label: "nosnost vlastní manipulační techniky" },
  { num: "jeřáb", label: "mostová jeřábová dráha pro těžké a atypické zboží" },
];

const trustPoints = [
  {
    year: "2000",
    title: "Na silnici od roku 2000",
    text: "Přes dvacet let vozíme zboží pro moravské výrobní firmy, velkoobchody i strojírny. Dispečink zná trasy, zákazníky i jejich rampy — nemusíte nic vysvětlovat dvakrát.",
  },
  {
    year: "24/7",
    title: "Dispečink, který zvedá telefon",
    text: "Jedno číslo, jeden dispečer, který váš náklad zná jménem. Během přepravy víte, kde vůz je — a když se něco změní, voláme my vám, ne naopak.",
  },
  {
    year: "CZ + EU",
    title: "Vlastní vozy i prověření partneři",
    text: "Jádro přeprav jezdíme vlastními vozidly. Ve špičkách nasazujeme smluvní dopravce, se kterými spolupracujeme roky — za kvalitu ručíme my, ne oni.",
  },
];

export default function Page() {
  return (
    <main className="vp">
      {/* ── HERO ─────────────────────────────────────── */}
      <header className="vp-hero">
        <div className="vp-hero-top">
          <div className="vp-wordmark" aria-label="VAPEE Morava">
            <span className="vp-wordmark-main">VAPEE</span>
            <span className="vp-wordmark-sub">Morava&nbsp;·&nbsp;autodoprava</span>
          </div>
          <a className="vp-hero-phone" href="tel:+420588500844">
            <span className="vp-hero-phone-label">Dispečink</span>
            <span className="vp-hero-phone-num">+420 588 500 844</span>
          </a>
        </div>

        <div className="vp-hero-body">
          <p className="vp-hero-eyebrow">Nákladní doprava a sklady · Olomouc-Hodolany</p>
          <h1 className="vp-hero-title">
            <span className="vp-line vp-line-1">Naložíme dnes.</span>
            <span className="vp-line vp-line-2">
              Vyložíme <em>kdekoli v&nbsp;Evropě.</em>
            </span>
          </h1>
          <p className="vp-hero-lead">
            Od pick-upu po návěs, od Hodolan po Hamburk. Vnitrostátní i mezinárodní
            přepravy vlastními vozy — a 10&nbsp;000&nbsp;m² skladů, kde na náklad
            počká jeřáb.
          </p>
          <div className="vp-hero-cta">
            <a className="vp-btn vp-btn-solid" href="tel:+420588500844">
              Zavolat dispečink
            </a>
            <a className="vp-btn vp-btn-line" href="mailto:vapee@volny.cz">
              Poptat přepravu e-mailem
            </a>
          </div>
        </div>

        {/* Signature: kilometrovníková škála — tonáž jako zastávky na trase */}
        <div className="vp-route" aria-hidden="true">
          <div className="vp-route-line" />
          <ol className="vp-route-stops">
            <li className="vp-stop">
              <span className="vp-stop-tick" />
              <span className="vp-stop-t">1,2&nbsp;t</span>
              <span className="vp-stop-n">pick-up</span>
            </li>
            <li className="vp-stop">
              <span className="vp-stop-tick" />
              <span className="vp-stop-t">3,5&nbsp;t</span>
              <span className="vp-stop-n">dodávka</span>
            </li>
            <li className="vp-stop">
              <span className="vp-stop-tick" />
              <span className="vp-stop-t">12&nbsp;t</span>
              <span className="vp-stop-n">sólo</span>
            </li>
            <li className="vp-stop">
              <span className="vp-stop-tick" />
              <span className="vp-stop-t">24&nbsp;t</span>
              <span className="vp-stop-n">návěs</span>
            </li>
            <li className="vp-stop vp-stop-last">
              <span className="vp-stop-tick" />
              <span className="vp-stop-t">XXL</span>
              <span className="vp-stop-n">nadrozměr</span>
            </li>
          </ol>
        </div>
      </header>

      {/* ── SLUŽBY / VOZOVÝ PARK ─────────────────────── */}
      <section className="vp-section vp-fleet" aria-labelledby="fleet-h">
        <div className="vp-section-head">
          <p className="vp-kicker">Přepravy</p>
          <h2 id="fleet-h" className="vp-h2">
            Vyberte tonáž.<br />O zbytek se postaráme.
          </h2>
          <p className="vp-section-lead">
            Nemusíte vědět, jaké auto potřebujete — stačí říct, co vezete a kam.
            Dispečink navrhne vůz, cenu i termín nakládky.
          </p>
        </div>

        <ul className="vp-fleet-list">
          {fleet.map((f) => (
            <li key={f.tag} className="vp-card">
              <span className="vp-card-tag">{f.tag}</span>
              <h3 className="vp-card-name">{f.name}</h3>
              <p className="vp-card-desc">{f.desc}</p>
              <p className="vp-card-meta">{f.meta}</p>
            </li>
          ))}
        </ul>

        <div className="vp-store">
          <div className="vp-store-text">
            <p className="vp-kicker vp-kicker-light">Sklad Hodolany</p>
            <h3 className="vp-store-h">Když náklad potřebuje počkat</h3>
            <p className="vp-store-p">
              Krátkodobé i dlouhodobé skladování přímo u našich ramp na Hybešově
              ulici. Překládky, konsolidace zásilek, těžké kusy zvedne mostový
              jeřáb. Skladník na telefonu:{" "}
              <a className="vp-inline-link" href="tel:+420602714697">
                +420&nbsp;602&nbsp;714&nbsp;697
              </a>
              .
            </p>
          </div>
          <dl className="vp-store-stats">
            {warehouse.map((w) => (
              <div key={w.num} className="vp-stat">
                <dt className="vp-stat-num">{w.num}</dt>
                <dd className="vp-stat-label">{w.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── DŮVĚRA / O NÁS ───────────────────────────── */}
      <section className="vp-section vp-trust" aria-labelledby="trust-h">
        <div className="vp-section-head">
          <p className="vp-kicker">Proč VAPEE</p>
          <h2 id="trust-h" className="vp-h2">
            Rodinná firma z&nbsp;Olomouce,<br />ne anonymní spedice
          </h2>
        </div>

        <ul className="vp-trust-list">
          {trustPoints.map((t) => (
            <li key={t.year} className="vp-trust-item">
              <span className="vp-trust-year">{t.year}</span>
              <div>
                <h3 className="vp-trust-title">{t.title}</h3>
                <p className="vp-trust-text">{t.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="vp-address">
          <p className="vp-address-firm">VAPEE Morava s.r.o.</p>
          <p className="vp-address-line">Hybešova 514/30, 779 00 Olomouc-Hodolany</p>
          <p className="vp-address-line">
            Kancelář:{" "}
            <a className="vp-inline-link" href="tel:+420585101468">
              +420&nbsp;585&nbsp;101&nbsp;468
            </a>{" "}
            ·{" "}
            <a className="vp-inline-link" href="mailto:vapee@volny.cz">
              vapee@volny.cz
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
