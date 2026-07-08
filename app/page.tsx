import type { CSSProperties } from "react";

export default function Page() {
  const sortiment = [
    {
      cislo: "01",
      nazev: "Cylindrické vložky",
      popis:
        "Poradíme s výběrem vložky ve 2., 3. i 4. bezpečnostní třídě od ověřených evropských výrobců. Vybereme cenově nejvýhodnější řešení přesně na vaše dveře.",
    },
    {
      cislo: "02",
      nazev: "Zadlabací zámky",
      popis:
        "Zámky pro vchodové i pokojové dveře, kování a závěsy. Vyměníme staré, poradíme s rozteční a dorazíme, kde je potřeba.",
    },
    {
      cislo: "03",
      nazev: "Výroba klíčů",
      popis:
        "Kopírujeme běžné i bezpečnostní klíče na počkání. Gravírování, razítka a značení máme přímo na prodejně v Ostravě.",
    },
    {
      cislo: "04",
      nazev: "Trezory a bezpečnostní dveře",
      popis:
        "Trezory, schránky a bezpečnostní dveře pro domácnost i firmu. Zabezpečovací mechanizmy vybereme podle toho, co skutečně chráníte.",
    },
  ];

  return (
    <main className="kv">
      <a className="kv-skip" href="#sortiment">
        Přeskočit na sortiment
      </a>

      <header className="kv-top">
        <span className="kv-mark" aria-label="Selník Kovoslužba">
          <span className="kv-mark-key" aria-hidden="true">
            ⚷
          </span>
          <span className="kv-mark-word">
            Selník
            <span className="kv-mark-sub">Kovoslužba · Ostrava</span>
          </span>
        </span>
        <nav className="kv-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#onas">O nás</a>
          <a className="kv-call" href="tel:+420602744250">
            602 744 250
          </a>
        </nav>
      </header>

      <section className="kv-hero" aria-labelledby="hero-nadpis">
        <img
          className="kv-hero-img"
          src="/hero.webp"
          alt="Detail cylindrické vložky a svazku klíčů v dílně zámečnictví"
          width={1600}
          height={1100}
          loading="eager"
        />
        <div className="kv-hero-panel">
          <p className="kv-eyebrow">Zámečnictví od roku 1990 · Ostrava</p>
          <h1 id="hero-nadpis" className="kv-h1">
            Zabouchli jste si
            <br />
            dveře? <span className="kv-h1-accent">Otevřeme.</span>
          </h1>
          <p className="kv-lede">
            Rodinná dílna s uzamykací technikou. Nouzové otevírání dveří
            <strong> od 850 Kč</strong>, výměna vložek i výroba klíčů na
            počkání.
          </p>
          <div className="kv-hero-actions">
            <a className="kv-btn" href="tel:+420602744250">
              Zavolat mechanika
            </a>
            <a className="kv-btn kv-btn-ghost" href="#sortiment">
              Náš sortiment
            </a>
          </div>
          <p className="kv-hero-note">
            Mechanici na telefonu:{" "}
            <a href="tel:+420602744250">602 744 250</a> ·{" "}
            <a href="tel:+420728613588">728 613 588</a>
          </p>
        </div>
      </section>

      <section id="sortiment" className="kv-sekce" aria-labelledby="sortiment-nadpis">
        <div className="kv-sekce-hlava">
          <p className="kv-eyebrow kv-eyebrow-dark">Co u nás pořídíte</p>
          <h2 id="sortiment-nadpis" className="kv-h2">
            Devět let zpět jsme začínali u klíčů. Dnes zabezpečíme celý dům.
          </h2>
        </div>

        <ol className="kv-grid">
          {sortiment.map((p) => (
            <li key={p.cislo} className="kv-karta">
              <span className="kv-karta-cislo" aria-hidden="true">
                {p.cislo}
              </span>
              <h3 className="kv-karta-nazev">{p.nazev}</h3>
              <p className="kv-karta-popis">{p.popis}</p>
            </li>
          ))}
        </ol>

        <p className="kv-sekce-pata">
          Dále: kování a závěsy, zavírače a otvírače, gravírování a razítka,
          železářství a náhradní díly. Nevíte si rady?{" "}
          <a href="tel:+420602744250">Zavolejte, poradíme.</a>
        </p>
      </section>

      <section id="onas" className="kv-onas" aria-labelledby="onas-nadpis">
        <div className="kv-onas-media">
          <img
            src="/section-1.webp"
            alt="Zámečník při výměně bezpečnostní cylindrické vložky"
            width={1200}
            height={900}
            loading="lazy"
          />
          <img
            src="/section-2.webp"
            alt="Regál se zámky, klíči a kováním na prodejně Kovoslužby"
            width={1200}
            height={900}
            loading="lazy"
          />
        </div>

        <div className="kv-onas-text">
          <p className="kv-eyebrow kv-eyebrow-dark">O nás</p>
          <h2 id="onas-nadpis" className="kv-h2">
            Rodinná firma, kterou v Ostravě znají řemeslníci i sousedé.
          </h2>
          <p className="kv-onas-p">
            Uzamykací technice se věnujeme od roku 1990. Za tu dobu jsme
            spolupracovali s evropskými lídry na trhu se zabezpečením — takže
            k vám nedorazíme s jednou značkou v tašce, ale s řešením, které
            k vašim dveřím a rozpočtu skutečně sedí.
          </p>

          <dl className="kv-fakta">
            <div>
              <dt>1990</dt>
              <dd>rok, kdy jsme začali</dd>
            </div>
            <div>
              <dt>od 850 Kč</dt>
              <dd>nouzové otevření dveří</dd>
            </div>
            <div>
              <dt>Ostrava</dt>
              <dd>prodejna i výjezd mechaniků</dd>
            </div>
          </dl>

          <div className="kv-hodiny" aria-label="Otevírací doba prodejny">
            <p className="kv-hodiny-titul">Prodejna v Ostravě</p>
            <p>
              <span>čtvrtek</span>
              <span>8:00–12:00 · 13:00–15:30</span>
            </p>
            <p>
              <span>pátek</span>
              <span>8:00–12:00 · 13:00–17:30</span>
            </p>
          </div>

          <a className="kv-btn" href="tel:+420602744250">
            Domluvit výjezd
          </a>
        </div>
      </section>
    </main>
  );
}
