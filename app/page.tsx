import type { CSSProperties } from "react";

export default function Page() {
  const materials = [
    { key: "01", name: "Vinyl", note: "tichý, odolný, hezky drží v předsíni i kuchyni" },
    { key: "02", name: "Plovoucí podlahy", note: "rychlá pokládka, spousta dekorů dřeva" },
    { key: "03", name: "Parkety a masiv", note: "pravé dřevo, které se dá časem přebrousit" },
    { key: "04", name: "Koberce & PVC", note: "do dětských pokojů i kanceláří" },
    { key: "05", name: "Marmoleum", note: "přírodní linoleum, snadná údržba" },
    { key: "06", name: "Schody", note: "renovace i protiskluzový nátěr" },
  ];

  const services = [
    {
      tag: "Vyberte",
      title: "Prodej a poradenství",
      body:
        "Projdeme s vámi vzorky přímo na prodejně na Plynárenské a vybereme podlahu k místnosti, provozu i rozpočtu. Připravíme konkrétní cenovou nabídku — od plovoucích podlah přes vinyl až po luxusní krytiny.",
      img: "/section-1.webp",
      alt: "Vzorky podlahových krytin a dekorů dřeva na prodejně",
    },
    {
      tag: "Položíme",
      title: "Profesionální pokládka",
      body:
        "Vyškolený tým pokládá vinyl, koberce, PVC, plovoucí podlahy, marmoleum, parkety i masiv. Zvládneme běžný pokoj i sportovní halu — se stěrkováním podkladu a moderními postupy, aby podlaha seděla rovně a dlouho vydržela.",
      img: "/section-2.webp",
      alt: "Pokládka nové podlahy — pruhy lamel skládané do plochy",
    },
    {
      tag: "Oživíme",
      title: "Renovace podlah a schodů",
      body:
        "Stará prkna, parkety i schody umíme přebrousit, ošetřit a vrátit jim vzhled. Po renovaci povrch zapečetíme vhodným lakem nebo olejem a schodům přidáme protiskluzový nátěr.",
      img: null,
      alt: "",
    },
  ];

  const reviews = [
    {
      text: "Kvalitní odborná práce, příjemné jednání. Mohu jen doporučit a chválit.",
      author: "Helena D.",
    },
    {
      text: "Skvěle provedená podlaha, od stěrkování po finální položení. Jednání bez problémů.",
      author: "Miroslava D.",
    },
    {
      text: "Pěkné místo i parkování a velký výběr podlahových krytin.",
      author: "Zdeňka D.",
    },
  ];

  return (
    <main className="pj">
      <header className="pj-topbar">
        <a className="pj-wordmark" href="#" aria-label="Podlahy Jonáš, domovská stránka">
          <span className="pj-wordmark-1">PODLAHY</span>
          <span className="pj-wordmark-2">Jonáš</span>
        </a>
        <div className="pj-topmeta">
          <span className="pj-topmeta-place">Ústí nad Labem</span>
          <a className="pj-topmeta-tel" href="tel:+420777169344">777&nbsp;169&nbsp;344</a>
        </div>
      </header>

      <section className="pj-hero" aria-labelledby="pj-hero-title">
        <div className="pj-hero-media">
          <img
            src="/hero.webp"
            alt="Detail čerstvě položené dřevěné podlahy s viditelnou kresbou letokruhů"
            className="pj-hero-img"
          />
        </div>
        <div className="pj-hero-body">
          <p className="pj-eyebrow">Podlahářství · Plynárenská 322, Ústí nad Labem</p>
          <h1 id="pj-hero-title" className="pj-hero-title">
            Podlaha, po&nbsp;které
            <br />
            <em>je radost chodit.</em>
          </h1>
          <p className="pj-hero-lede">
            Prodáváme, pokládáme a renovujeme veškeré druhy podlahových krytin —
            od vinylu a parket po sportovní haly. Přijďte na vzorky, my dorazíme
            s metrem.
          </p>
          <div className="pj-hero-actions">
            <a className="pj-btn pj-btn-solid" href="tel:+420777169344">
              Zavolat 777&nbsp;169&nbsp;344
            </a>
            <a className="pj-btn pj-btn-ghost" href="#materialy">
              Prohlédnout materiály
            </a>
          </div>
          <p className="pj-hero-hours">Po–Pá 8:00–16:00 · po telefonu kdykoliv</p>
        </div>
      </section>

      <section className="pj-materials" id="materialy" aria-labelledby="pj-materials-title">
        <div className="pj-section-head">
          <h2 id="pj-materials-title" className="pj-h2">S čím pracujeme</h2>
          <p className="pj-section-note">
            Šest krytin, které od nás lidé v Ústí chtějí nejčastěji. Nevíte, co
            do které místnosti? To vyřešíme na prodejně.
          </p>
        </div>
        <ul className="pj-mat-list">
          {materials.map((m) => (
            <li className="pj-mat" key={m.key}>
              <span className="pj-mat-num">{m.key}</span>
              <span className="pj-mat-name">{m.name}</span>
              <span className="pj-mat-note">{m.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pj-services" id="sluzby" aria-labelledby="pj-services-title">
        <div className="pj-section-head">
          <h2 id="pj-services-title" className="pj-h2">Jak to u nás chodí</h2>
          <p className="pj-section-note">
            Vyberete, položíme, a když je podlaha stará, oživíme ji.
          </p>
        </div>

        <div className="pj-svc-grid">
          {services.map((s, i) => (
            <article
              className={"pj-svc" + (s.img ? " pj-svc--media" : "")}
              key={s.title}
              style={{ "--i": i } as CSSProperties}
            >
              {s.img ? (
                <div className="pj-svc-media">
                  <img src={s.img} alt={s.alt} className="pj-svc-img" />
                </div>
              ) : null}
              <div className="pj-svc-text">
                <p className="pj-svc-tag">{s.tag}</p>
                <h3 className="pj-svc-title">{s.title}</h3>
                <p className="pj-svc-body">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pj-trust" id="reference" aria-labelledby="pj-trust-title">
        <div className="pj-section-head">
          <h2 id="pj-trust-title" className="pj-h2">Co říkají lidé z okolí</h2>
          <p className="pj-section-note">Recenze z Google · zdroj: Google</p>
        </div>
        <div className="pj-reviews">
          {reviews.map((r) => (
            <figure className="pj-review" key={r.author}>
              <blockquote className="pj-review-text">{r.text}</blockquote>
              <figcaption className="pj-review-author">— {r.author}</figcaption>
            </figure>
          ))}
        </div>
        <div className="pj-trust-facts">
          <p className="pj-fact">
            <span className="pj-fact-k">Kde nás najdete</span>
            <span className="pj-fact-v">Plynárenská 322/53, Ústí nad Labem</span>
          </p>
          <p className="pj-fact">
            <span className="pj-fact-k">Otevřeno</span>
            <span className="pj-fact-v">Po–Pá 8:00–16:00, po dohodě kdykoliv</span>
          </p>
          <p className="pj-fact">
            <span className="pj-fact-k">Zavolejte</span>
            <span className="pj-fact-v">
              <a href="tel:+420777169344">777 169 344</a>
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
