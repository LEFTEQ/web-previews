import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "VAG",
      title: "Diagnostika VW Group přes ODIS a VCDS",
      body: "Škoda, Audi, VW, Seat všech ročníků. Kódování, parametrizace, ochrana komponent a kalibrace nových jednotek online originální diagnostikou ODIS. Jsme partnerský servis VW Group.",
    },
    {
      code: "EU",
      title: "Diagnostika evropských vozidel",
      body: "Bosch KTS, Atal — čtení a mazání chyb, měření živých dat, hledání závad v elektroinstalaci osobních aut i přívěsných vozíků.",
    },
    {
      code: "MTG",
      title: "Montáže elektroniky",
      body: "Centrální zamykání, imobilizéry, automatické rozsvěcení světel, elektrické stahování oken, park asistent, handsfree sady, autorádia a doplňky.",
    },
    {
      code: "ALM",
      title: "Alarmy Jablotron",
      body: "Montáž autoalarmů Jablotron včetně následného servisu. Zabezpečení, které vám poradíme na míru vašemu vozu.",
    },
    {
      code: "OPR",
      title: "Opravy elektroinstalace",
      body: "Opravy elektroinstalací osobních automobilů a přívěsných vozíků. Najdeme závadu i tam, kde ji jinde vzdali.",
    },
    {
      code: "SVĚ",
      title: "Seřizování světlometů",
      body: "Přesné seřízení světlometů, abyste viděli a nikoho neoslňovali.",
    },
  ];

  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní">
        <a className="wm" href="#top" aria-label="Autoelektrika Přeslička, domů">
          <span className="wm-a">AUTOELEKTRIKA</span>
          <span className="wm-b">PŘESLIČKA</span>
        </a>
        <a className="nav-tel" href="tel:+420244460177">
          <span className="nav-tel-lbl">Zavolat</span>
          <span className="nav-tel-num">244 460 177</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-h">
        <div className="hero-grid" aria-hidden="true">
          <div className="circuit">
            <span className="node n1" />
            <span className="node n2" />
            <span className="node n3" />
            <span className="node n4" />
          </div>
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Praha 4 — Braník · od roku 1991</p>
          <h1 id="hero-h" className="hero-h">
            <span className="line l1">Najdeme</span>
            <span className="line l2">tu <em>chybu</em>,</span>
            <span className="line l3">co bliká</span>
            <span className="line l4">na palubovce.</span>
          </h1>
          <p className="hero-sub">
            Autoelektrika a diagnostika VW Group i většiny evropských vozů.
            Originální ODIS, VCDS, Bosch KTS — a třicet let ruky v kabelech.
          </p>
          <div className="hero-cta">
            <a className="btn btn-pri" href="tel:+420244460177">
              Zavolat 244&nbsp;460&nbsp;177
            </a>
            <a className="btn btn-sec" href="#sluzby">Co opravujeme</a>
          </div>
          <p className="hero-note">
            Domlouváme telefonicky — e-mail nepoužíváme. Neopravujeme vozy s LPG/CNG.
          </p>
        </div>
      </section>

      <section className="svc" id="sluzby" aria-labelledby="svc-h">
        <div className="svc-head">
          <p className="eyebrow eyebrow-dark">Vybíráme z našich služeb</p>
          <h2 id="svc-h" className="sec-h">Šest věcí, kvůli kterým sem lidi jezdí</h2>
        </div>
        <ul className="svc-list">
          {services.map((s, i) => (
            <li className="svc-item" key={s.code}>
              <span className="svc-code" aria-hidden="true">{s.code}</span>
              <span className="svc-idx">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-body">{s.body}</p>
            </li>
          ))}
        </ul>
        <figure className="svc-fig">
          <img
            src="/section-1.webp"
            alt="Diagnostický přístroj připojený ke konektoru vozidla v dílně autoelektriky"
            loading="lazy"
          />
        </figure>
      </section>

      <section className="abt" id="o-nas" aria-labelledby="abt-h">
        <figure className="abt-fig">
          <img
            src="/section-2.webp"
            alt="Dílna Autoelektriky Přeslička v Praze na Braníku"
            loading="lazy"
          />
        </figure>
        <div className="abt-body">
          <p className="eyebrow eyebrow-dark">O nás</p>
          <h2 id="abt-h" className="sec-h">
            Od roku 1991 hledáme závady,
            <br /> které vidí jen elektroměr.
          </h2>
          <p className="abt-p">
            Autoelektrika Přeslička jezdí Braníkem od roku 1991. Databázi
            diagnostik aktualizujeme průběžně, takže o vašem voze víme to
            nejčerstvější — od jednotlivců přes střední servisy až po
            autorizované partnery. Přijeďte se přesvědčit sami.
          </p>
          <dl className="abt-facts">
            <div className="fact">
              <dt>Kde nás najdete</dt>
              <dd>
                Mezivrší 21/974<br />147 00 Praha 4 — Braník
              </dd>
            </div>
            <div className="fact">
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420244460177">+420 244 460 177</a>
              </dd>
            </div>
            <div className="fact">
              <dt>Pátek</dt>
              <dd>otevřeno 8:00 — 13:00</dd>
            </div>
            <div className="fact">
              <dt>Partnerský servis</dt>
              <dd>VW Group — Škoda, Audi, VW, Seat</dd>
            </div>
          </dl>
          <a className="btn btn-pri" href="tel:+420244460177">
            Domluvit termín telefonicky
          </a>
        </div>
      </section>
    </main>
  );
}
