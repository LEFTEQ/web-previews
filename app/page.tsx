import { SplitFlap } from "./motion";

const SLUZBY = [
  {
    poz: "POZ. 01",
    kod: "FTL / LTL",
    title: "Kamionová mezinárodní přeprava",
    body: "Vozíme po celé ČR i Evropě — od expresních zásilek po velkoobjemové soupravy. Plachtové návěsy, skříňové i plachtové dodávky a logistická řešení na míru. Pro automobilový průmysl jedeme v režimu TIME-OUT s hlídaným časem doručení.",
    tags: ["Plachtové návěsy", "Expres", "Velkoobjem", "TIME-OUT"],
  },
  {
    poz: "POZ. 02",
    kod: "WHS",
    title: "Skladování a distribuce",
    body: "Temperovaný sklad ve střeženém areálu. Nakládka a vykládka, vykládka kontejnerů, přeložení a komise palet, přeštítkování i přebalení. Na sklad navazuje distribuce po České republice a Evropě.",
    tags: ["Temperovaný sklad", "Komise palet", "Distribuce"],
  },
  {
    poz: "POZ. 03",
    kod: "SVC",
    title: "Vlastní autoservis",
    body: "Servisní zázemí drží náš vozový park na silnici. Údržba a opravy tahačů i návěsů — aby každá zakázka dojela včas a nabraný náklad se nikde nezdržel.",
    tags: ["Údržba", "Opravy", "Tahače a návěsy"],
  },
];

const CARGO = [
  "Potraviny — izotermické a chladírenské návěsy",
  "Papírové role — systém JOLODA",
  "Stavební materiály a prvky",
  "Automotive — režim TIME-OUT",
];

const DUVERA = [
  {
    k: "ISO 9001:2009",
    t: "Systém řízení jakosti",
    d: "Všechny služby poskytujeme v ověřené kvalitě s odbornou péčí podle zavedeného systému řízení jakosti.",
  },
  {
    k: "TIME-OUT",
    t: "Doručení na čas",
    d: "Pro zákazníky z automobilového průmyslu vozíme v režimu s hlídaným časem — dispečink drží zásilku pod kontrolou od nakládky po vykládku.",
  },
  {
    k: "CZ · EN · DE",
    t: "Domluvíme se v Evropě",
    d: "Řidiči i dispečink komunikují česky, anglicky a německy — od Českých Budějovic přes Prahu po Vídeň a Mnichov.",
  },
  {
    k: "Vlastní park",
    t: "Variabilní vozový park",
    d: "Plachtové, izotermické a chladírenské návěsy, návěsy JOLODA pro papírenský průmysl i skříňové dodávky pro expres.",
  },
];

function Spine({ variant }: { variant?: "alt" }) {
  return (
    <div className={variant ? "spine spine--alt" : "spine"} aria-hidden="true">
      <div className="spine-track">
        <span className="spine-buckle">▐▌ LASH</span>
        <span className="spine-code">CB→WIEN</span>
        <span className="spine-km">327 km</span>
        <span className="spine-code">CB→PRG</span>
        <span className="spine-km">173 km</span>
        <span className="spine-code">CB→MUC</span>
        <span className="spine-km">318 km</span>
        <span className="spine-stamp">ISO 9001</span>
        <span className="spine-code">TIME-OUT</span>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="BV Spedice — úvod">
          <span className="wordmark-mark">BV</span>
          <span className="wordmark-name">Spedice</span>
        </a>
        <div className="topbar-meta">
          <span className="topbar-loc">České&nbsp;Budějovice</span>
          <ul className="langs" aria-label="Jazyk">
            <li aria-current="true">CZ</li>
            <li>EN</li>
            <li>DE</li>
          </ul>
        </div>
      </header>

      <main id="top">
        <section className="section hero">
          <p className="eyebrow">Mezinárodní kamionová přeprava · dispečink České Budějovice</p>
          <h1 className="hero-title">
            <span className="h1-lead">Přeprava do</span>
            <SplitFlap />
          </h1>
          <p className="hero-sub">
            Naložíme, upneme, odjedeme. Plachtové návěsy, expresní dodávky i velkoobjemové
            soupravy po celé České republice a Evropě — a k tomu vlastní temperovaný sklad.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#sluzby">Naše služby</a>
            <a className="btn btn-ghost" href="tel:—">Zavolat dispečinku</a>
          </div>
          <dl className="hero-facts">
            <div><dt>Základna</dt><dd>České Budějovice</dd></div>
            <div><dt>Dosah</dt><dd>ČR &amp; Evropa</dd></div>
            <div><dt>Kvalita</dt><dd>ISO 9001:2009</dd></div>
          </dl>
        </section>

        <Spine />

        <section className="section services" id="sluzby" aria-labelledby="sluzby-h">
          <div className="sec-head">
            <p className="sec-label">Nákladní list — položky</p>
            <h2 id="sluzby-h" className="sec-title">Co pro vás odvezeme</h2>
          </div>
          <ol className="manifest">
            {SLUZBY.map((s) => (
              <li className="manifest-row" key={s.poz}>
                <div className="manifest-mark">
                  <span className="manifest-poz">{s.poz}</span>
                  <span className="manifest-kod">{s.kod}</span>
                </div>
                <div className="manifest-body">
                  <h3 className="manifest-title">{s.title}</h3>
                  <p className="manifest-text">{s.body}</p>
                  <ul className="chips">
                    {s.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <div className="cargo">
            <p className="cargo-label">Náklad, který známe</p>
            <ul className="cargo-list">
              {CARGO.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <Spine variant="alt" />

        <section className="section trust" aria-labelledby="trust-h">
          <div className="sec-head">
            <p className="sec-label sec-label--light">Proč s námi jet</p>
            <h2 id="trust-h" className="sec-title sec-title--light">
              Náklad upnutý, termín dodržený
            </h2>
          </div>
          <div className="trust-grid">
            <div className="stamp" aria-hidden="true">
              <span className="stamp-top">ŘÍZENÍ JAKOSTI</span>
              <span className="stamp-mid">ISO<br />9001</span>
              <span className="stamp-bot">2009 · BV SPEDICE</span>
            </div>
            <ul className="trust-cards">
              {DUVERA.map((d) => (
                <li className="trust-card" key={d.k}>
                  <span className="trust-k">{d.k}</span>
                  <h3 className="trust-t">{d.t}</h3>
                  <p className="trust-d">{d.d}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="dispatch">
            Dispečink · tel <span>—</span> · e-mail <span>—</span> · areál <span>—</span>,
            České Budějovice
          </p>
        </section>
      </main>

      <nav className="mobile-cta" aria-label="Rychlý kontakt">
        <a className="btn btn-primary" href="tel:—">Zavolat</a>
        <a className="btn btn-ghost" href="#sluzby">Služby</a>
      </nav>
    </>
  );
}
