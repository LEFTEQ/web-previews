import type { CSSProperties } from "react";

export default function Page() {
  const rooms = [
    {
      idx: "01",
      title: "Ubytování v 61 pokojích",
      body: "Klidný spánek pár kroků od centra Plzně. Bezplatná WIFI v celém domě, hlídané parkoviště a recepce, která nikdy nespí — přijet můžete i o půlnoci.",
      meta: "non-stop recepce · WIFI · parking",
    },
    {
      idx: "02",
      title: "Restaurace a zahrada",
      body: "Polední menu, jídelní i nápojový lístek a v létě posezení na zahradě. Zvládneme oslavu, garden party, svatbu i catering mimo hotel.",
      meta: "restaurace · bar · svatební servis",
    },
    {
      idx: "03",
      title: "Wellness a odpočinek",
      body: "Po dni v Plzni sauna, fitness nebo některá z našich masáží. Kdo má rád klid s pivem v ruce, najde i billiard a šipky.",
      meta: "sauna · masáže · fitness",
    },
    {
      idx: "04",
      title: "Semináře a školení",
      body: "Různorodé konferenční prostory pro firemní i společenské akce — od malé porady po celodenní školení s občerstvením a technikou.",
      meta: "sály · technika · občerstvení",
    },
  ];

  const facts = [
    { k: "61", v: "plně vybavených pokojů" },
    { k: "24/7", v: "recepce, přijedete kdykoli" },
    { k: "301 00", v: "Borská 19, Plzeň" },
  ];

  return (
    <main className="vic">
      <header className="vic-top">
        <a className="vic-mark" href="#" aria-label="Hotel Victoria Plzeň, úvod">
          <span className="vic-mark-script">Victoria</span>
          <span className="vic-mark-sub">HOTEL&nbsp;·&nbsp;PLZEŇ</span>
        </a>
        <nav className="vic-nav" aria-label="Hlavní">
          <a href="#ubytovani">Ubytování</a>
          <a href="#gastro">Gastronomie</a>
          <a href="#duvera">O hotelu</a>
          <a className="vic-nav-cta" href="tel:+420377221010">Rezervovat</a>
        </nav>
      </header>

      <section className="vic-hero" aria-labelledby="hero-h">
        <div className="vic-hero-media">
          <img
            src="/hero.webp"
            alt="Hotel Victoria v Plzni — pohled na budovu a vstup s recepcí"
            className="vic-hero-img"
          />
          <span className="vic-hero-plate" aria-hidden="true">EST.&nbsp;PLZEŇ · 301&nbsp;00</span>
        </div>

        <div className="vic-hero-copy">
          <p className="vic-eyebrow">Západočeská metropole · pár kroků od památek</p>
          <h1 id="hero-h" className="vic-h1">
            <span className="vic-h1-line">Přespíte v centru</span>
            <span className="vic-h1-line vic-h1-em">Plzně,</span>
            <span className="vic-h1-line">ne na jeho okraji.</span>
          </h1>
          <p className="vic-lede">
            Hotel Victoria stojí na Borské, na dosah od náměstí, katedrály
            i pivovaru. Šedesát jedna pokojů, restaurace se zahradou
            a recepce, která vás přivítá v kteroukoli hodinu.
          </p>
          <div className="vic-hero-actions">
            <a className="vic-btn" href="tel:+420377221010">Zavolat na recepci</a>
            <a className="vic-btn vic-btn-ghost" href="#ubytovani">Prohlédnout pokoje</a>
          </div>
          <dl className="vic-keys">
            {facts.map((f) => (
              <div className="vic-key" key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="vic-sec" id="ubytovani" aria-labelledby="sec1-h">
        <div className="vic-sec-head">
          <p className="vic-eyebrow">Co u nás najdete</p>
          <h2 id="sec1-h" className="vic-h2">
            Čtyři důvody, proč tu zůstat déle
          </h2>
        </div>

        <div className="vic-grid">
          <div className="vic-cards">
            {rooms.map((r) => (
              <article className="vic-card" key={r.idx}>
                <span className="vic-card-idx" aria-hidden="true">{r.idx}</span>
                <div className="vic-card-body">
                  <h3 className="vic-card-title">{r.title}</h3>
                  <p>{r.body}</p>
                  <p className="vic-card-meta">{r.meta}</p>
                </div>
              </article>
            ))}
          </div>

          <figure className="vic-figure" id="gastro">
            <img
              src="/section-1.webp"
              alt="Restaurace Hotelu Victoria s prostřenými stoly a barem"
            />
            <figcaption>
              <span className="vic-figcap-k">Gastronomie</span>
              Polední menu každý všední den, v létě posezení na zahradě.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="vic-sec vic-sec-dark" id="duvera" aria-labelledby="sec2-h">
        <div className="vic-about">
          <figure className="vic-about-media">
            <img
              src="/section-2.webp"
              alt="Pokoj Hotelu Victoria — ustlaná postel a moderní vybavení"
            />
          </figure>
          <div className="vic-about-copy">
            <p className="vic-eyebrow vic-eyebrow-light">O hotelu</p>
            <h2 id="sec2-h" className="vic-h2 vic-h2-light">
              Komfort v západočeské metropoli, od recepce až po saunu
            </h2>
            <p className="vic-about-lede">
              Hotel Victoria je moderně a stylově zařízený dům v Plzni,
              pár kroků od většiny památek a atraktivních míst.
              Hostům je k dispozici non-stop recepce, hlídané parkoviště
              a bezplatná WIFI v celém objektu.
            </p>
            <ul className="vic-checks">
              <li>Hlídané parkoviště přímo u hotelu</li>
              <li>Dobíjecí stanice pro elektromobily</li>
              <li>Poukazy a permanentky jako dárek</li>
              <li>Konferenční sály pro firemní akce</li>
            </ul>
            <div className="vic-contact">
              <a href="tel:+420377221010">+420 377 221 010</a>
              <a href="mailto:hotel@hotel-victoria.cz">hotel@hotel-victoria.cz</a>
              <span>Borská 19, 301&nbsp;00 Plzeň</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
