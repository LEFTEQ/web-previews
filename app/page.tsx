import type { CSSProperties } from "react";

export default function Page() {
  const courts = [
    {
      no: "01",
      name: "Squash",
      desc: "Čtyři kurty se skleněnou zadní stěnou. Půjčíme raketu i míček, změříme, jak silně dokážeš vrátit odraz od přední stěny.",
      free: "dnes 14:30",
      unit: "kurt / 30 min",
    },
    {
      no: "02",
      name: "Jumping",
      desc: "Lekce na trampolínách s lektorkou a hudbou. Odrazíš se od nudného kardia — 400 skoků za lekci a kolena to poznají míň než při běhu.",
      free: "pozítří 17:00",
      unit: "skupinová lekce",
    },
    {
      no: "03",
      name: "Stolní tenis",
      desc: "Profesionální stoly, pálky a míčky na recepci. Ideální rozehřátí před squashem nebo samostatný duel na body.",
      free: "dnes 14:30",
      unit: "stůl / 30 min",
    },
    {
      no: "04",
      name: "Infrasauna",
      desc: "Sálavé teplo, které prohřeje svaly do hloubky po tréninku. Kabina pro dva, ručník s sebou.",
      free: "za 3 dny",
      unit: "kabina / 45 min",
    },
  ];

  return (
    <main className="kc">
      <header className="kc-top">
        <a className="kc-mark" href="#" aria-label="Squash Club Koruna, úvod">
          <span className="kc-mark-crown" aria-hidden="true">
            <svg viewBox="0 0 48 32" width="36" height="24" role="img" aria-hidden="true">
              <path
                d="M2 30 L6 8 L16 20 L24 4 L32 20 L42 8 L46 30 Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="kc-mark-text">
            <span className="kc-mark-line1">Squash Club</span>
            <span className="kc-mark-line2">Koruna</span>
          </span>
        </a>
        <nav className="kc-nav" aria-label="Hlavní">
          <a href="#kurty">Kurty a lekce</a>
          <a href="#klub">O klubu</a>
          <a className="kc-nav-cta" href="#rezervace">Rezervovat termín</a>
        </nav>
      </header>

      <section className="kc-hero" aria-labelledby="kc-hero-title">
        <div className="kc-hero-media">
          <img
            src="/hero.webp"
            alt="Squashový kurt s bílou přední stěnou a skleněnou zadní stěnou v Club Koruna"
            className="kc-hero-img"
          />
          <div className="kc-hero-tint" aria-hidden="true" />
        </div>

        <div className="kc-hero-inner">
          <p className="kc-eyebrow">Sportcentrum v obchodním domě Koruna · Olomouc</p>
          <h1 id="kc-hero-title" className="kc-hero-title">
            Odraz se<br />
            od <span className="kc-hl">přední stěny</span>.
          </h1>
          <p className="kc-hero-lead">
            Čtyři squashové kurty, trampolíny, stoly na ping-pong a infrasauna
            na jedné adrese v centru Olomouce. Přijď hned po práci — nejbližší
            kurt bývá volný do večera.
          </p>
          <div className="kc-hero-actions">
            <a className="kc-btn" href="#rezervace">Rezervovat kurt</a>
            <a className="kc-btn kc-btn-ghost" href="#kurty">Co si u nás zahraješ</a>
          </div>
        </div>

        <aside className="kc-nextfree" aria-label="Nejbližší volné termíny">
          <p className="kc-nextfree-head">Nejbližší volno</p>
          <ul>
            <li><span>Squash</span><b>dnes 14:30</b></li>
            <li><span>Jumping</span><b>pozítří 17:00</b></li>
            <li><span>Stolní tenis</span><b>dnes 14:30</b></li>
          </ul>
          <p className="kc-nextfree-foot">Otevřeno po–pá 10–22, ne 12–22</p>
        </aside>
      </section>

      <section className="kc-section" id="kurty" aria-labelledby="kc-kurty-title">
        <div className="kc-section-head">
          <p className="kc-eyebrow kc-eyebrow-dark">Kurty a lekce</p>
          <h2 id="kc-kurty-title" className="kc-h2">
            Čtyři způsoby, jak se zapotit
          </h2>
          <p className="kc-section-lead">
            Vše pod jednou střechou v centru města. Rakety, pálky i míčky
            půjčujeme na recepci — stačí přijít v botách se světlou podrážkou.
          </p>
        </div>

        <ol className="kc-courts">
          {courts.map((c) => (
            <li className="kc-court" key={c.no}>
              <div className="kc-court-no" aria-hidden="true">{c.no}</div>
              <div className="kc-court-body">
                <h3 className="kc-court-name">{c.name}</h3>
                <p className="kc-court-desc">{c.desc}</p>
              </div>
              <div className="kc-court-meta">
                <span className="kc-court-unit">{c.unit}</span>
                <span className="kc-court-free">
                  <span className="kc-dot" aria-hidden="true" />
                  volno {c.free}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <p className="kc-note">
          Platíš rád(a) MultiSportkou? Vezmeme originální plastovou i virtuální
          kartu z aplikace My MultiSport na skupinovou lekci i na půlhodinu
          squashe či stolního tenisu. Stačí ji ukázat na recepci s dokladem.
        </p>
      </section>

      <section className="kc-klub" id="klub" aria-labelledby="kc-klub-title">
        <div className="kc-klub-media">
          <img
            src="/section-1.webp"
            alt="Skupinová lekce jumpingu na trampolínách v Club Koruna"
            className="kc-klub-img"
          />
        </div>
        <div className="kc-klub-text">
          <p className="kc-eyebrow kc-eyebrow-dark">O klubu</p>
          <h2 id="kc-klub-title" className="kc-h2">
            Boční vstup z Koruny,<br />rovnou na kurt
          </h2>
          <p className="kc-klub-lead">
            Najdeš nás v obchodním domě Koruna přímo v centru Olomouce —
            bočním vstupem z Zámečnické ulice. Žádné hledání parkoviště za
            městem: dohraješ a jsi zpátky v ulicích během minuty.
          </p>
          <dl className="kc-facts">
            <div>
              <dt>Kde</dt>
              <dd>OD Koruna, boční vstup<br />Zámečnická 2/492, 772 00 Olomouc</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>po–pá 10:00–22:00<br />ne 12:00–22:00 · so zavřeno</dd>
            </div>
            <div>
              <dt>Rezervace</dt>
              <dd>telefon 720 130 003<br />clubkoruna@seznam.cz</dd>
            </div>
          </dl>
          <a className="kc-btn kc-btn-dark" href="tel:+420720130003">Zavolat na recepci</a>
        </div>
      </section>
    </main>
  );
}
