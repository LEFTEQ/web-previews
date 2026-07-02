export const metadata = {
  title: "H&M Olomouc — Móda a kvalita v centru Hané | Galerie Šantovka, Moritz, Olympia",
  description:
    "Tři prodejny H&M v Olomouci: Galerie Šantovka, Galerie Moritz a Centrum Olympia. Dámská, pánská a dětská móda, HOME i Beauty. Otevřeno denně 9–21. Členům 10% sleva.",
  openGraph: {
    title: "H&M Olomouc — móda a kvalita za nejlepší cenu",
    description:
      "Tři prodejny v Olomouci: Šantovka, Moritz, Olympia. Otevřeno denně 9–21.",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/hero.webp" }],
  },
};

const stores = [
  {
    num: "Š",
    name: "Galerie Šantovka",
    address: "Polská 1, 779 00 Olomouc",
    walk: "7 minut pěšky z Horního náměstí",
    hours: "Po–Ne 9:00–21:00",
    depts: ["Ženy", "Muži", "Děti", "HOME", "Beauty"],
    note: "Největší prodejna ve městě — jediná s kompletním sortimentem HOME a Beauty.",
    map: "https://maps.google.com/?q=H%26M+Galerie+%C5%A0antovka+Olomouc",
  },
  {
    num: "M",
    name: "Galerie Moritz",
    address: "8. května 24, 772 00 Olomouc",
    walk: "2 minuty z Horního náměstí",
    hours: "Po–Ne 9:00–21:00",
    depts: ["Ženy", "Muži"],
    note: "Prodejna přímo v historickém centru. Ideální na rychlou zastávku mezi kavárnou a orlojem.",
    map: "https://maps.google.com/?q=H%26M+Galerie+Moritz+Olomouc",
  },
  {
    num: "O",
    name: "Centrum Olympia",
    address: "Olomoucká 90, 779 00 Velký Týnec",
    walk: "Zdarma parkování přímo u vchodu",
    hours: "Po–Ne 9:00–21:00",
    depts: ["Ženy", "Muži", "Děti"],
    note: "Nejpohodlnější volba autem — nákup pro celou rodinu bez hledání parkovacího místa.",
    map: "https://maps.google.com/?q=H%26M+Centrum+Olympia+Olomouc",
  },
];

export default function Page() {
  return (
    <main className="hm">
      {/* ————— HERO ————— */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#" aria-label="H&M Olomouc — úvod">
            <span className="wordmark-letters">H·M</span>
            <span className="wordmark-city">Olomouc</span>
          </a>
          <ul className="nav-depts">
            <li><a href="#prodejny">Ženy</a></li>
            <li><a href="#prodejny">Muži</a></li>
            <li><a href="#prodejny">Děti</a></li>
            <li className="nav-wide"><a href="#prodejny">HOME</a></li>
            <li className="nav-wide"><a href="#prodejny">Beauty</a></li>
          </ul>
          <a className="nav-cta" href="#prodejny">Prodejny</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Tři prodejny · jedno město · denně 9–21</p>
            <h1 className="hero-title">
              <span className="line line-1">Móda na dosah</span>
              <span className="line line-2">od Horního</span>
              <span className="line line-3">náměstí<span className="red-dot">.</span></span>
            </h1>
            <p className="hero-lead">
              Šantovka, Moritz nebo Olympia — nejbližší regál s novou kolekcí
              máte v Olomouci vždycky pár minut od sebe. Přijďte si věci
              osahat, vyzkoušet a odnést hned.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#prodejny">Najít nejbližší prodejnu</a>
              <a className="btn btn-ghost" href="#tady">Proč nakupovat osobně</a>
            </div>
          </div>
          <figure className="hero-media">
            <img
              src="/hero.webp"
              alt="Nová kolekce H&M na prodejně v Olomouci — pověšené oblečení připravené k vyzkoušení"
            />
            <figcaption className="hero-tag">
              <span className="tag-season">Aktuální kolekce</span>
              <span className="tag-note">právě teď na regálech všech tří prodejen</span>
            </figcaption>
          </figure>
        </div>

        <div className="hero-ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>Šantovka — Polská 1</span>
            <span className="tick">×</span>
            <span>Moritz — 8. května 24</span>
            <span className="tick">×</span>
            <span>Olympia — Olomoucká 90</span>
            <span className="tick">×</span>
            <span>Otevřeno denně 9:00–21:00</span>
            <span className="tick">×</span>
            <span>Šantovka — Polská 1</span>
            <span className="tick">×</span>
            <span>Moritz — 8. května 24</span>
            <span className="tick">×</span>
            <span>Olympia — Olomoucká 90</span>
            <span className="tick">×</span>
            <span>Otevřeno denně 9:00–21:00</span>
            <span className="tick">×</span>
          </div>
        </div>
      </header>

      {/* ————— SEKCE 1: PRODEJNY ————— */}
      <section className="stores" id="prodejny" aria-labelledby="stores-h">
        <div className="section-head">
          <p className="eyebrow">Kde nás najdete</p>
          <h2 id="stores-h">
            Š · M · O — tři adresy,<br />ať jdete pěšky nebo jedete autem
          </h2>
          <p className="section-lead">
            Každá prodejna má trochu jiný sortiment. Vyberte si podle toho,
            co hledáte a odkud vyrážíte.
          </p>
        </div>

        <div className="store-list">
          {stores.map((s) => (
            <article className="store" key={s.name}>
              <div className="store-letter" aria-hidden="true">{s.num}</div>
              <div className="store-body">
                <h3>{s.name}</h3>
                <p className="store-address">{s.address}</p>
                <p className="store-walk">{s.walk}</p>
                <ul className="store-depts" aria-label={`Oddělení v prodejně ${s.name}`}>
                  {s.depts.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p className="store-note">{s.note}</p>
              </div>
              <div className="store-meta">
                <p className="store-hours">
                  <strong>Otevřeno</strong>
                  <span>{s.hours}</span>
                </p>
                <a className="btn btn-line" href={s.map} rel="noopener">
                  Trasa na mapě
                </a>
              </div>
            </article>
          ))}
        </div>

        <figure className="stores-media">
          <img
            src="/section-1.webp"
            alt="Interiér prodejny H&M — zákaznice si prohlíží oblečení z aktuální kolekce"
          />
          <figcaption>
            Zásoby v prodejnách se rychle točí — když vás něco zaujme,
            personál rád ověří, jestli je váš kus i na jiné olomoucké adrese.
          </figcaption>
        </figure>
      </section>

      {/* ————— SEKCE 2: PROČ OSOBNĚ ————— */}
      <section className="why" id="tady" aria-labelledby="why-h">
        <div className="why-grid">
          <figure className="why-media">
            <img
              src="/section-2.webp"
              alt="Zkoušení oblečení v kabince prodejny H&M Olomouc"
            />
          </figure>
          <div className="why-copy">
            <p className="eyebrow eyebrow-light">Proč přijít osobně</p>
            <h2 id="why-h">Kabinka řekne víc<br />než fotka v e-shopu</h2>

            <dl className="why-list">
              <div className="why-item">
                <dt>Vyzkoušíte hned</dt>
                <dd>
                  Žádné čekání na balík ani vracení špatné velikosti.
                  Padne, nebo si vezmete jinou — do dvou minut víte.
                </dd>
              </div>
              <div className="why-item">
                <dt>Vrácení bez krabice</dt>
                <dd>
                  Nákup z e-shopu hm.com vrátíte v kterékoli z našich tří
                  olomouckých prodejen. Stačí účtenka v mobilu.
                </dd>
              </div>
              <div className="why-item">
                <dt>Členům 10 % dolů</dt>
                <dd>
                  Členství H&M je zdarma a první nákup máte o desetinu
                  levnější. Registraci zvládnete u pokladny za minutu.
                </dd>
              </div>
              <div className="why-item">
                <dt>Staré textilu nový život</dt>
                <dd>
                  Do boxu u pokladny odevzdáte oblečení kterékoli značky
                  v jakémkoli stavu — a od nás dostanete slevový kupon.
                </dd>
              </div>
            </dl>

            <p className="why-foot">
              H&M nabízí módu a kvalitu za nejlepší cenu udržitelným
              způsobem — od roku 1947, v Olomouci na třech adresách.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
