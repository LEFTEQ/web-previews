import { Reticle } from "./motion";

const services = [
  {
    id: "SYS-01 · SHERLOG",
    tag: "Lokátor vozidla",
    title: "Zabezpečení vozidel",
    body: "Montáž lokátoru pro auto, motorku, stavební i zemědělské stroje nebo loď. Když vozidlo zmizí, náš tým ho dohledá i tam, kde GPS mlčí — přes vlastní rádiovou síť odolnou vůči rušičkám.",
  },
  {
    id: "SYS-02 · SHERLOG TRACE",
    tag: "Kniha jízd",
    title: "Elektronická kniha jízd",
    body: "Jedno auto, nebo celá flotila. Reporty na jedno kliknutí, propojení s tankovacími kartami a méně administrativy — v průměru až o 30 %.",
  },
  {
    id: "SYS-03 · HHO",
    tag: "Servis motoru",
    title: "Dekarbonizace motoru",
    body: "Bezpečné čištění vodíkem sníží emise i spotřebu, vrátí motoru výkon a prodlouží jeho životnost. Bez demontáže, u vás v Brně.",
  },
];

const stats = [
  { k: "do 2 h", v: "průměrné dohledání odcizeného vozidla" },
  { k: "24/7", v: "nepřetržité operační centrum" },
  { k: "od 1992", v: "vyvíjíme vlastní zabezpečení" },
  { k: "vlastní síť", v: "rádiová lokalizace odolná rušičkám" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">
            SECAR<span className="brand-dot">·</span>MORAVIA
          </span>
        </div>
        <a className="phone" href="tel:+420777111222">
          Zavolat 777&nbsp;111&nbsp;222
        </a>
      </header>

      <section className="sec hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Zabezpečení vozidel · Brno · od roku 1992</p>
            <h1 id="hero-title" className="hero-title">
              S jistotou <span className="hl">vyhledáme</span> vaše vozidlo.
            </h1>
            <p className="lede">
              Montujeme a servisujeme lokátory SHERLOG. Vlastní rádiová síť
              najde odcizené auto i tam, kde GPS ani mobilní signál nefungují —
              a náš vyhledávací tým vyráží v průměru do dvou hodin.
            </p>
            <div className="hero-actions">
              <a className="btn" href="tel:+420777111222">
                Zavolat 777 111 222
              </a>
              <a className="btn-ghost" href="#sluzby">
                Co montujeme
              </a>
            </div>
          </div>

          <div className="hero-scope">
            <Reticle coords="BRNO 49.19°N / 16.61°E" trigger="load" tone="amber">
              <div className="scope">
                <div className="scope-head">
                  <span className="scope-dot" aria-hidden="true" /> SIGNÁL ZAMČEN
                </div>
                <dl className="scope-rows">
                  <div>
                    <dt>Stav</dt>
                    <dd>vozidlo nalezeno</dd>
                  </div>
                  <div>
                    <dt>Poloha</dt>
                    <dd>49.1906°N 16.6068°E</dd>
                  </div>
                  <div>
                    <dt>Síť</dt>
                    <dd>rádiová · aktivní</dd>
                  </div>
                  <div>
                    <dt>Odezva týmu</dt>
                    <dd>&lt; 2 hodiny</dd>
                  </div>
                </dl>
              </div>
            </Reticle>
          </div>
        </div>
        <div className="hero-sweep" aria-hidden="true" />
      </section>

      <section id="sluzby" className="sec services" aria-labelledby="services-title">
        <div className="sec-head">
          <p className="eyebrow">01–03 · Co montujeme</p>
          <h2 id="services-title" className="sec-title">
            Tři systémy, jedna jistota
          </h2>
        </div>
        <div className="cards">
          {services.map((s) => (
            <article className="card" key={s.id}>
              <Reticle coords={s.id} trigger="view">
                <div className="card-body">
                  <p className="card-tag">{s.tag}</p>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-text">{s.body}</p>
                </div>
              </Reticle>
            </article>
          ))}
        </div>
      </section>

      <section id="onas" className="sec trust" aria-labelledby="trust-title">
        <Reticle coords="BRNO 49.19°N / 16.61°E" trigger="view">
          <div className="trust-inner">
            <div className="trust-copy">
              <p className="eyebrow">O nás · Brno</p>
              <h2 id="trust-title" className="sec-title">
                Bezpečně se SHERLOGEM
              </h2>
              <p className="lede">
                Jsme ryze česká firma a nejkvalitnější zabezpečení vyvíjíme už
                od roku 1992. Provozujeme vlastní rádiovou síť pro lokalizaci
                odcizených vozidel — nespoléháme jen na GPS, které jde snadno
                rušit.
              </p>
              <div className="stats">
                {stats.map((s) => (
                  <div className="stat" key={s.k}>
                    <span className="stat-k">{s.k}</span>
                    <span className="stat-v">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <figure className="review">
              <div className="stars" aria-label="Hodnocení 5 z 5 hvězd">
                ★★★★★
              </div>
              <blockquote>
                „Byl jsem tu na instalaci GPS jednotky. Všechno proběhlo rychle
                a hladce a jako bonus jsem dostal kávu od milých dam.“
              </blockquote>
              <figcaption>
                Ivo Pešek <span className="review-src">· hodnocení z Google</span>
              </figcaption>
            </figure>
          </div>
        </Reticle>
      </section>
    </main>
  );
}
