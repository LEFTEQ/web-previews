import type { CSSProperties } from "react";

export default function Page() {
  const piva = [
    {
      cislo: "10°",
      nazev: "Popelínská desítka",
      styl: "Světlé výčepní",
      popis:
        "Lehčí, svěží a poctivě hořká. Naše každodenní pivo, se kterým jsme na Zvíkově vybojovali třetí místo.",
      medaile: "3. místo — Jarní cena sládků, Zvíkov",
    },
    {
      cislo: "12°",
      nazev: "Světlá dvanáctka",
      styl: "Světlý ležák premium",
      popis:
        "Plný ležák s výrazným řízem žateckého chmele. V konkurenci 64 minipivovarů jsme s ním na Zlaté pivní pečeti vyhráli.",
      medaile: "1. místo — Zlatá pivní pečeť, kategorie premium",
    },
    {
      cislo: "13°",
      nazev: "Světlá třináctka",
      styl: "Speciál",
      popis:
        "Silný, sytý speciál. V Železné Rudě byl vyhlášený nejlepším pivem celé soutěže Pohádkové pivo.",
      medaile: "1. místo & nejlepší pivo — Pohádkové pivo, Železná Ruda",
    },
    {
      cislo: "TP",
      nazev: "Tumaperk",
      styl: "Polotmavý speciál",
      popis:
        "Náš polotmavý s karamelovou plností a jménem, které si zapamatujete. Bodoval až v Maďarsku.",
      medaile: "3. místo v kategorii — mezinárodní soutěž, Maďarsko",
    },
  ];

  return (
    <main className="pp">
      <header className="pp-nav">
        <a className="pp-brand" href="#" aria-label="Pivovar Popelín, úvod">
          <span className="pp-brand-mark">P</span>
          <span className="pp-brand-text">
            <span className="pp-brand-name">Popelín</span>
            <span className="pp-brand-sub">Minipivovar · est. 2013</span>
          </span>
        </a>
        <nav className="pp-nav-links" aria-label="Hlavní navigace">
          <a href="#piva">Naše piva</a>
          <a href="#pribeh">Příběh sklepa</a>
          <a className="pp-nav-cta" href="tel:+420607949185">
            607 949 185
          </a>
        </nav>
      </header>

      <section className="pp-hero" aria-labelledby="pp-hero-title">
        <img
          className="pp-hero-img"
          src="/hero.webp"
          alt="Ležácký sklep pivovaru Popelín pod původní cihlovou klenbou"
          loading="eager"
        />
        <div className="pp-hero-veil" aria-hidden="true" />
        <div className="pp-hero-inner">
          <p className="pp-eyebrow">Popelín 43 · vaříme u Zemanů</p>
          <h1 id="pp-hero-title" className="pp-hero-title">
            Pivo,
            <br />
            které zraje
            <br />
            <em>pod klenbou</em>
            <br />
            z roku dávno
            <br />
            zapomenutého.
          </h1>
          <p className="pp-hero-lead">
            Sládek Jaroslav Zeman vaří ve staré hospodě, kde se při rekonstrukci
            sklepa našla podkova. Necháváme ji viset pro štěstí — a od té doby
            sbíráme medaile.
          </p>
          <div className="pp-hero-actions">
            <a className="pp-btn pp-btn-primary" href="tel:+420607949185">
              Objednat sud · 607 949 185
            </a>
            <a className="pp-btn pp-btn-ghost" href="#piva">
              Prohlédnout piva
            </a>
          </div>
        </div>
        <p className="pp-hero-foot" aria-hidden="true">
          ⌐ podkova nalezená ve sklepě přináší štěstí
        </p>
      </section>

      <section className="pp-piva" id="piva" aria-labelledby="pp-piva-title">
        <div className="pp-section-head">
          <p className="pp-eyebrow pp-eyebrow-dark">Sortiment · čerstvé z tanku</p>
          <h2 id="pp-piva-title" className="pp-section-title">
            Čtyři piva, sedm medailí
          </h2>
          <p className="pp-section-note">
            Vaříme v malém, po jedné várce. Sudové pivo rozvážíme do hospod v
            okolí Českých Budějovic — a čepujeme přímo u nás v Hospodě u Zemanů.
          </p>
        </div>

        <ul className="pp-list">
          {piva.map((p) => (
            <li className="pp-card" key={p.nazev}>
              <span className="pp-card-degree" aria-hidden="true">
                {p.cislo}
              </span>
              <div className="pp-card-body">
                <p className="pp-card-style">{p.styl}</p>
                <h3 className="pp-card-name">{p.nazev}</h3>
                <p className="pp-card-desc">{p.popis}</p>
                <p className="pp-card-medal">{p.medaile}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="pp-piva-figure">
          <img
            src="/section-1.webp"
            alt="Měděná varna pivovaru Popelín během vaření"
            loading="lazy"
          />
          <figcaption>
            Varna v přízemí hospody — tady všechno začíná, várka po várce.
          </figcaption>
        </figure>
      </section>

      <section className="pp-story" id="pribeh" aria-labelledby="pp-story-title">
        <figure className="pp-story-figure">
          <img
            src="/section-2.webp"
            alt="Ležácké tanky ve sklepě s dochovanou původní klenbou"
            loading="lazy"
          />
        </figure>
        <div className="pp-story-text">
          <p className="pp-eyebrow pp-eyebrow-dark">Příběh sklepa</p>
          <h2 id="pp-story-title" className="pp-section-title">
            Postaveno v roce 2013.
            <br />
            Do zdí, které pamatují víc.
          </h2>
          <p className="pp-story-para">
            Pivovar jsme vestavěli do hospody U Zemanů v Popelíně. V přízemí
            stojí varna, dole ve sklepě zrají piva ve spilečných kádích a
            ležáckých tancích. Když jsme sklep čistili, objevila se pod omítkou
            původní cihlová klenba — nechali jsme ji odhalenou.
          </p>
          <dl className="pp-facts">
            <div>
              <dt>Sládek</dt>
              <dd>Jaroslav Zeman</dd>
            </div>
            <div>
              <dt>Kde ochutnáte</dt>
              <dd>Hospoda u Zemanů, Popelín</dd>
            </div>
            <div>
              <dt>Rezervace stolu</dt>
              <dd>
                <a href="tel:+420728827222">728 827 222</a> — Miloš Zeman
              </dd>
            </div>
            <div>
              <dt>Objednávky sudů</dt>
              <dd>
                <a href="tel:+420607949185">607 949 185</a>
              </dd>
            </div>
          </dl>
          <a
            className="pp-btn pp-btn-dark"
            href="https://mapy.cz/?q=Popelín 43"
          >
            Najít cestu do Popelína
          </a>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
