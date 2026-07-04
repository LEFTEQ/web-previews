import type { CSSProperties } from "react";

export default function Page() {
  const vrata = [
    {
      code: "S",
      name: "Sekční vrata",
      desc: "Vyjíždějí nahoru pod strop garáže — nezaberou místo před ani za vraty. Zateplené lamely, tichý chod, ovládání z auta.",
      detail: "Nejčastější volba pro rodinné domy",
    },
    {
      code: "R",
      name: "Rolovací vrata",
      desc: "Namotají se do schránky nad otvorem. Ideální tam, kde je nízký nadpraží nebo šikmý strop a sekce by se nevešly.",
      detail: "Úspora prostoru u nízkých garáží",
    },
    {
      code: "V",
      name: "Výklopná vrata Berry",
      desc: "Osvědčené jednokřídlé vyklápění do jednoho pevného panelu. Robustní, poruchová minimum, ověřená klasika.",
      detail: "Do garáží i za rekonstrukce",
    },
  ];

  return (
    <main className="cg">
      <header className="cg-nav" aria-label="Hlavní">
        <a className="cg-brand" href="#nahoru" aria-label="CINOGROUP, domů">
          <span className="cg-brand-mark" aria-hidden="true">
            <span className="cg-slat" />
            <span className="cg-slat" />
            <span className="cg-slat" />
          </span>
          <span className="cg-brand-word">
            CINO<strong>GROUP</strong>
          </span>
        </a>
        <span className="cg-nav-place">Hradec&nbsp;Králové · Plotiště&nbsp;nad&nbsp;Labem</span>
      </header>

      <section className="cg-hero" id="nahoru">
        <div className="cg-hero-media">
          <img
            src="/hero.webp"
            alt="Sekční garážová vrata namontovaná u rodinného domu"
            className="cg-hero-img"
          />
          <div className="cg-hero-scrim" aria-hidden="true" />
        </div>

        <div className="cg-hero-inner">
          <p className="cg-eyebrow">Garážová vrata na míru · montáž po celém Královéhradecku</p>
          <h1 className="cg-hero-title">
            <span className="cg-hero-line">Ráno stisknete tlačítko</span>
            <span className="cg-hero-line cg-hero-accent">— vrata vyjedou tiše.</span>
          </h1>
          <p className="cg-hero-sub">
            Zaměříme, vyrobíme a namontujeme sekční, rolovací i výklopná vrata
            přesně do vašeho otvoru. Zaměření a kalkulace jsou u nás zdarma.
          </p>
          <div className="cg-hero-cta">
            <a className="cg-btn cg-btn-primary" href="tel:+420602327102">
              Zavolat do Hradce: 602&nbsp;327&nbsp;102
            </a>
            <a className="cg-btn cg-btn-ghost" href="#vrata">
              Vybrat typ vrat
            </a>
          </div>
        </div>

        <ul className="cg-hero-strip" aria-label="Proč lidé volí nás">
          <li><span>10+</span> let montáží vrat</li>
          <li><span>0 Kč</span> zaměření i kalkulace</li>
          <li><span>úklid</span> a odvoz obalů v ceně</li>
        </ul>
      </section>

      <section className="cg-section cg-vrata" id="vrata" aria-labelledby="vrata-h">
        <div className="cg-section-head">
          <p className="cg-kicker">Tři způsoby, jak vrata otevřít</p>
          <h2 className="cg-h2" id="vrata-h">
            Podle stropu, ne podle katalogu
          </h2>
          <p className="cg-lead">
            O typu vrat nerozhoduje móda, ale místo nad otvorem a před ním.
            Přijedeme, změříme a poradíme, co se do vaší garáže opravdu hodí.
          </p>
        </div>

        <ol className="cg-cards">
          {vrata.map((v) => (
            <li className="cg-card" key={v.code}>
              <span className="cg-card-code" aria-hidden="true">
                {v.code}
              </span>
              <h3 className="cg-card-name">{v.name}</h3>
              <p className="cg-card-desc">{v.desc}</p>
              <p className="cg-card-detail">{v.detail}</p>
            </li>
          ))}
        </ol>

        <div className="cg-also">
          <p className="cg-also-label">A když už jsme u vás doma, uděláme i:</p>
          <ul className="cg-also-list">
            <li>Okna plastová i dřevěná</li>
            <li>Vchodové dveře</li>
            <li>Venkovní rolety</li>
            <li>Žaluzie a sítě proti hmyzu</li>
            <li>Markýzy nad terasu</li>
            <li>Parapety a podlahy</li>
          </ul>
        </div>
      </section>

      <section className="cg-section cg-trust" aria-labelledby="trust-h">
        <div className="cg-trust-grid">
          <figure className="cg-trust-media">
            <img
              src="/section-1.webp"
              alt="Montér CINOGROUP osazuje sekční garážová vrata"
              className="cg-trust-img"
            />
          </figure>
          <div className="cg-trust-body">
            <p className="cg-kicker">Proč lidé v okolí volají zrovna nám</p>
            <h2 className="cg-h2" id="trust-h">
              Přijede ten, kdo vrata i namontuje
            </h2>
            <ul className="cg-facts">
              <li>
                <strong>Zaškolení a prověření montéři.</strong> Žádní
                subdodavatelé na jedno použití — vrata osadí lidé, kteří to
                dělají denně.
              </li>
              <li>
                <strong>Značky, které vydrží.</strong> Berry i sekční systémy
                od zavedených evropských výrobců, ne bezejmenný dovoz.
              </li>
              <li>
                <strong>Po nás uklizeno.</strong> Odvoz obalů, zbylého
                materiálu i hrubý úklid jsou součástí montáže.
              </li>
              <li>
                <strong>Fyzické osoby, firmy i instituce.</strong> Od jedné
                garáže po vrata pro celý areál.
              </li>
            </ul>
          </div>
        </div>

        <div className="cg-branch">
          <figure className="cg-branch-media">
            <img
              src="/section-2.webp"
              alt="Pobočka CINOGROUP v Hradci Králové"
              className="cg-branch-img"
            />
          </figure>
          <div className="cg-branch-card">
            <p className="cg-kicker">Najdete nás</p>
            <p className="cg-branch-addr">
              Jilemnického 28, Plotiště nad Labem
              <br />
              503&nbsp;01 Hradec Králové
            </p>
            <p className="cg-branch-contact">
              <a href="tel:+420602327102">602&nbsp;327&nbsp;102</a>
              <span aria-hidden="true"> · </span>
              <a href="mailto:cinogroup.hk@seznam.cz">cinogroup.hk@seznam.cz</a>
            </p>
            <p className="cg-branch-note">
              Domluvte si zaměření zdarma — přijedeme, změříme otvor a
              pošleme kalkulaci na míru.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
