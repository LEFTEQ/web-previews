import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      tag: "Nejčastější volba",
      title: "Rekonstrukce bytu na klíč",
      body: "Návrh, koordinace všech řemesel i kompletní realizace. Vy řešíte jen jeden tým — my zbytek. Praha a okolí.",
      unit: "na klíč",
    },
    {
      tag: "Před realizací",
      title: "Návrh interiéru",
      body: "Řešení, které funguje v každodenním životě a připraví byt na samotnou stavbu. Dispozice, materiály, světlo.",
      unit: "návrh",
    },
    {
      tag: "Na míru",
      title: "Nábytek na míru",
      body: "Navrhneme a vyrobíme kusy, které přesně zapadnou do prostoru a navážou na celý interiér.",
      unit: "truhlářství",
    },
  ];

  const steps = [
    {
      k: "01",
      title: "První schůzka u vás",
      body: "Přijedeme, projdeme prostor i vaše představy — obvykle do několika pracovních dnů od poptávky.",
    },
    {
      k: "02",
      title: "Návrh a přesný rozpočet",
      body: "Detailní rozpočet bez skrytých položek. Dopředu víte, kolik to bude stát a co vás čeká.",
    },
    {
      k: "03",
      title: "Smlouva",
      body: "Doladíme detaily a podepíšeme smlouvu s jasnou cenou i termínem.",
    },
    {
      k: "04",
      title: "Realizace bez starostí",
      body: "Vedeme celý průběh. Jednou týdně procházíme stavbu společně při kontrolním dni.",
    },
    {
      k: "05",
      title: "Kontrola a předání",
      body: "Společně vše převezmeme. Řešíme jeden tým, drobné reklamace i po předání.",
    },
  ];

  return (
    <main className="pg">
      <a className="skip" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="topbar">
        <div className="wordmark" aria-label="Svět interiérů">
          <span className="wm-line">SVĚT</span>
          <span className="wm-line wm-strong">INTERIÉRŮ</span>
        </div>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Reference</a>
          <a className="nav-tel" href="tel:+420608337879">
            +420 608 337 879
          </a>
        </nav>
      </header>

      {/* HERO — půdorys jako signature prvek */}
      <section className="hero" id="obsah">
        <div
          className="blueprint"
          aria-hidden="true"
          style={{ "--rise": "1" } as CSSProperties}
        >
          <svg
            viewBox="0 0 400 300"
            preserveAspectRatio="xMidYMid meet"
            role="presentation"
          >
            {/* obvod bytu 3+1 */}
            <path
              className="bp-wall"
              d="M40 40 H360 V260 H40 Z"
            />
            {/* vnitřní příčky */}
            <path className="bp-line" d="M180 40 V150" />
            <path className="bp-line" d="M180 150 H360" />
            <path className="bp-line" d="M180 150 V260" />
            <path className="bp-line" d="M40 175 H180" />
            {/* dveřní otvory (přerušení) */}
            <path className="bp-door" d="M180 95 A28 28 0 0 1 152 123" />
            <path className="bp-door" d="M110 175 A24 24 0 0 1 134 199" />
            {/* kóty */}
            <line className="bp-dim" x1="40" y1="24" x2="360" y2="24" />
            <line className="bp-tick" x1="40" y1="18" x2="40" y2="30" />
            <line className="bp-tick" x1="360" y1="18" x2="360" y2="30" />
          </svg>
          <span className="bp-note bp-note-a">obývák + kuchyň</span>
          <span className="bp-note bp-note-b">ložnice</span>
          <span className="bp-note bp-note-c">koupelna</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Rekonstrukce bytů · Praha</p>
          <h1 className="hero-h1">
            Přestavíme váš byt<br />
            <em>od půdorysu</em><br />
            po poslední lištu.
          </h1>
          <p className="hero-lead">
            Návrh, koordinaci řemesel i realizaci vedeme pod jednou střechou.
            Dopředu víte cenu, termín i to, co se přesně bude dít.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420608337879">
              Domluvit konzultaci
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co pro vás uděláme
            </a>
          </div>
        </div>

        <dl className="hero-facts">
          <div>
            <dt>200+</dt>
            <dd>realizací v Praze a okolí</dd>
          </div>
          <div>
            <dt>15 let</dt>
            <dd>na pražských bytech</dd>
          </div>
          <div>
            <dt>4,9★</dt>
            <dd>z 30+ recenzí Google</dd>
          </div>
        </dl>
      </section>

      {/* SLUŽBY */}
      <section className="sluzby" id="sluzby">
        <div className="sec-head">
          <p className="eyebrow eyebrow-dark">Co u nás poptáte</p>
          <h2 className="sec-h2">Tři cesty k hotovému bytu</h2>
        </div>
        <ul className="cards">
          {services.map((s) => (
            <li className="card" key={s.title}>
              <span className="card-unit">{s.unit}</span>
              <span className="card-tag">{s.tag}</span>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-body">{s.body}</p>
            </li>
          ))}
        </ul>

        <div className="process">
          <p className="eyebrow eyebrow-dark">Jak to probíhá</p>
          <ol className="steps">
            {steps.map((st) => (
              <li className="step" key={st.k}>
                <span className="step-k">{st.k}</span>
                <div>
                  <h4 className="step-title">{st.title}</h4>
                  <p className="step-body">{st.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DŮVĚRA */}
      <section className="duvera" id="duvera">
        <div className="sec-head">
          <p className="eyebrow">Spokojení klienti</p>
          <h2 className="sec-h2 sec-h2-light">
            „Po dvou letech ani jedna závada.“
          </h2>
        </div>

        <figure className="quote">
          <blockquote>
            Jsem náročný klient a nebyla to moje první rekonstrukce bytu. S
            jednáním i řešením drobných změn během stavby jsem byl spokojený
            nadmíru. Po převzetí se dva roky nevyskytla žádná závada, kterou by
            bylo třeba řešit. Doporučuji.
          </blockquote>
          <figcaption>
            <span className="q-avatar" aria-hidden="true">
              M
            </span>
            <span>
              <strong>Milan Š.</strong>
              <span className="q-src">Ověřená recenze Google</span>
            </span>
          </figcaption>
        </figure>

        <div className="team">
          <p className="eyebrow">Dva lidé, se kterými to řešíte</p>
          <ul className="team-list">
            <li>
              <strong>Zdeněk Nový</strong>
              <span>Vede realizaci — hlídá termíny, řemesla i kontrolní dny.</span>
            </li>
            <li>
              <strong>Radim Donath</strong>
              <span>Navrhuje a vymýšlí — dispozice, materiály, nábytek na míru.</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
