import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Grafika",
      lede: "Logo, které drží. Vizuální identita, kterou poznáte i bez názvu.",
      items: ["Tvorba loga", "Vizuální identita", "Firemní tiskoviny", "Obalový design"],
    },
    {
      no: "02",
      title: "Weby",
      lede: "Rychlé, čitelné weby na míru — od firemní vizitky po developerský projekt.",
      items: ["Firemní weby", "Produktové weby", "Kariérní weby", "Developerské weby", "Eshopy"],
    },
    {
      no: "03",
      title: "Video",
      lede: "Kamera, střih, 3D. Příběh značky, který má spád i pro 100+ zemí.",
      items: ["Firemní video", "Produktové video", "Náborové video", "Reklamní video", "3D animace"],
    },
    {
      no: "04",
      title: "Marketing",
      lede: "Strategie pro B2B — pro strojírenské, výrobní a technologické firmy.",
      items: ["Marketingová strategie", "Marketingový plán", "Marketingový manuál", "SEO"],
    },
  ];

  return (
    <main className="crew">
      <header className="top">
        <a className="wordmark" href="#" aria-label="321 Creative Crew, úvod">
          <span className="wordmark__num">321</span>
          <span className="wordmark__tag">creative&nbsp;crew</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Co děláme</a>
          <a href="#duvera">Reference</a>
          <a className="nav__loc" href="#duvera">Brno</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Zblízka záběr z brněnského studia 321 Creative Crew při práci na vizuální identitě"
            width={1600}
            height={1000}
          />
          <span className="hero__crop hero__crop--tl" aria-hidden="true" />
          <span className="hero__crop hero__crop--br" aria-hidden="true" />
        </div>

        <div className="hero__copy">
          <p className="eyebrow">Grafické studio &amp; digitální agentura · Brno</p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__line">Spojení</span>
            <span className="hero__line hero__line--out">očima.</span>
          </h1>
          <p className="hero__lede">
            Navrhujeme loga, sjednocujeme značky, natáčíme videa a stavíme weby,
            které se načtou dřív, než dopijete kávu. Nejraději pro strojírenské,
            výrobní a technologické firmy.
          </p>
          <a className="btn" href="#sluzby">
            Prohlédnout, co umíme
          </a>
        </div>

        <dl className="stats" aria-label="Studio v číslech">
          <div className="stat">
            <dt>let na trhu</dt>
            <dd>17</dd>
          </div>
          <div className="stat">
            <dt>spokojených klientů</dt>
            <dd>150</dd>
          </div>
          <div className="stat">
            <dt>hotových realizací</dt>
            <dd>280</dd>
          </div>
        </dl>
      </section>

      <section className="work" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow">Čtyři dílny pod jednou střechou</p>
          <h2 id="sluzby-title">Co pro vás uděláme</h2>
        </div>

        <div className="work__grid">
          <div className="work__media">
            <img
              src="/section-1.webp"
              alt="Ukázka práce studia — firemní identita a tiskoviny pro výrobní firmu"
              width={1200}
              height={1400}
            />
          </div>

          <ol className="cards">
            {services.map((s) => (
              <li className="card" key={s.no}>
                <span className="card__no" aria-hidden="true">
                  {s.no}
                </span>
                <div className="card__body">
                  <h3 className="card__title">{s.title}</h3>
                  <p className="card__lede">{s.lede}</p>
                  <ul className="chips">
                    {s.items.map((it) => (
                      <li className="chip" key={it}>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="trust" id="duvera" aria-labelledby="duvera-title">
        <div className="section-head section-head--light">
          <p className="eyebrow">Kdo nám věří</p>
          <h2 id="duvera-title">Zkušenost je nejlepší učitel</h2>
        </div>

        <div className="trust__grid">
          <figure className="quote">
            <blockquote>
              „Vyvinout a schválit logo, design manuál a spustit web institutu
              SYRI ve dvou měsících a ve vysoké kvalitě je naprosto výjimečný
              výsledek. Spolupráce byla bez jediného zádrhelu.“
            </blockquote>
            <figcaption>
              <span className="quote__name">Filip Vrána</span>
              <span className="quote__role">PR manažer, Výzkumný institut SYRI</span>
            </figcaption>
          </figure>

          <div className="trust__media">
            <img
              src="/section-2.webp"
              alt="Vybrané realizace studia 321 Creative Crew — weby, obaly a videoprodukce"
              width={1200}
              height={1400}
            />
          </div>
        </div>

        <ul className="projects" aria-label="Poslední projekty">
          <li>Firemní identita kovovýroby HTP</li>
          <li>ABB — obchodní video pro 100+ zemí</li>
          <li>Web pro výrobce porcelánu Goldfinger</li>
          <li>Obalový design čokolády VITALO</li>
          <li>Vizuální styl ZEZ SILKO</li>
          <li>Developerský web Bydlení na Stráži</li>
        </ul>
      </section>
    </main>
  );
}
