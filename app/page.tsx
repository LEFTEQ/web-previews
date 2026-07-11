import type { CSSProperties } from "react";

const bikes = [
  {
    id: "Bisou",
    name: "Bisou",
    note: "Nízký nástup, vzpřímený posed. Ideální pro cestu do práce i do kavárny.",
    gears: "7 rychlostí",
    frame: "Ocelový rám",
  },
  {
    id: "Classic Sport",
    name: "Classic Sport",
    note: "Sportovnější geometrie pro delší okruhy po Vltavě i mimo město.",
    gears: "8 rychlostí",
    frame: "Ocelový rám",
  },
  {
    id: "Mono",
    name: "Mono",
    note: "Jeden převod, žádné starosti. Nejtišší kolo v nabídce.",
    gears: "1 převod",
    frame: "Ocelový rám",
  },
  {
    id: "Elektro Porter",
    name: "Elektro Cargo Porter",
    note: "Elektromotor a nosič. Nákup, dítě i pes zvládnou jednu jízdu.",
    gears: "Elektro pohon",
    frame: "Ocelový rám",
  },
];

export default function Page() {
  return (
    <main className="u-main">
      <header className="u-nav" aria-label="Hlavní navigace">
        <a className="u-brand" href="#" aria-label="urbane — domů">
          <span className="u-brand-mark">urbane</span>
          <span className="u-brand-sub">Praha · tokyobike</span>
        </a>
        <details className="u-menu">
          <summary className="u-menu-btn" aria-label="Otevřít menu">
            <span className="u-menu-line" aria-hidden="true" />
            <span className="u-menu-word">Menu</span>
          </summary>
          <nav className="u-menu-list" aria-label="Sekce webu">
            <a href="#kola">Městská kola</a>
            <a href="#kola">Doplňky</a>
            <a href="#o-nas">Lifestyle</a>
            <a href="#showroom">Showroom &amp; Servis</a>
          </nav>
        </details>
      </header>

      <section className="u-hero" aria-labelledby="hero-title">
        <div className="u-hero-copy">
          <p className="u-eyebrow">Tokyo Slow · od roku 2002</p>
          <h1 id="hero-title" className="u-hero-title">
            Kola stavěná pro <span className="u-italic">tempo města</span>, ne proti němu.
          </h1>
          <p className="u-hero-lead">
            Jako jsou horská kola pro hory, jsou tokyobike pro město. Nízký,
            pohodlný posed, tichý chod a ocelový rám, který vydrží roky ježdění
            po pražské dlažbě. Prodáváme a servisujeme je v Karlíně.
          </p>
          <div className="u-hero-actions">
            <a className="u-btn u-btn-primary" href="#kola">Prohlédnout kola</a>
            <a className="u-btn u-btn-ghost" href="#showroom">Přijít do showroomu</a>
          </div>
        </div>
        <figure className="u-hero-media">
          <img
            src="/hero.webp"
            alt="Městské kolo tokyobike opřené o zeď v pražské ulici"
            className="u-hero-img"
            width={1200}
            height={1400}
          />
          <figcaption className="u-hero-cap">Yanaka, Tokio → Karlín, Praha</figcaption>
        </figure>
      </section>

      <section id="kola" className="u-bikes" aria-labelledby="bikes-title">
        <div className="u-sec-head">
          <p className="u-eyebrow">Nabídka</p>
          <h2 id="bikes-title" className="u-sec-title">Čtyři kola, jeden charakter</h2>
          <p className="u-sec-lead">
            Každý model má stejnou DNA: lehkost, klid a přehledné ovládání.
            Vyberte podle toho, kam a jak často jezdíte.
          </p>
        </div>
        <ul className="u-bike-grid">
          {bikes.map((b, i) => (
            <li key={b.id} className="u-bike" style={{ "--i": i } as CSSProperties}>
              <span className="u-bike-index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="u-bike-name">{b.name}</h3>
              <p className="u-bike-note">{b.note}</p>
              <dl className="u-bike-spec">
                <div>
                  <dt>Převody</dt>
                  <dd>{b.gears}</dd>
                </div>
                <div>
                  <dt>Rám</dt>
                  <dd>{b.frame}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
        <figure className="u-bikes-media">
          <img
            src="/section-1.webp"
            alt="Detail rámu a řídítek městského kola tokyobike"
            className="u-cover-img"
            width={1400}
            height={900}
          />
        </figure>
      </section>

      <section id="o-nas" className="u-about" aria-labelledby="about-title">
        <figure className="u-about-media">
          <img
            src="/section-2.webp"
            alt="Jezdec na tokyobike projíždí ulicí Prahy"
            className="u-cover-img"
            width={1200}
            height={1400}
          />
        </figure>
        <div className="u-about-copy">
          <p className="u-eyebrow">O nás &amp; showroom</p>
          <h2 id="about-title" className="u-sec-title">
            Značku tokyobike vozíme do Česka jako jediní
          </h2>
          <p className="u-about-lead">
            tokyobike je malá nezávislá firma z tichého tokijského předměstí
            Yanaka. My, urbane, jsme její výhradní zastoupení v České republice —
            kola u nás potěžkáte, projedete a necháte seřídit na míru.
          </p>
          <div id="showroom" className="u-facts">
            <div className="u-fact">
              <span className="u-fact-label">Showroom &amp; servis</span>
              <span className="u-fact-value">Šaldova 34, Praha 8 — Karlín</span>
            </div>
            <div className="u-fact">
              <span className="u-fact-label">Zavolejte</span>
              <a className="u-fact-value u-link" href="tel:+420604784038">
                +420 604 784 038
              </a>
            </div>
            <div className="u-fact">
              <span className="u-fact-label">Napište</span>
              <a className="u-fact-value u-link" href="mailto:info@urbane.cz">
                info@urbane.cz
              </a>
            </div>
          </div>
          <a className="u-btn u-btn-primary" href="tel:+420604784038">
            Domluvit projížďku
          </a>
        </div>
      </section>
    </main>
  );
}
