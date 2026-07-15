import type { ReactNode } from "react";

const services: { code: string; title: string; body: string }[] = [
  {
    code: "FUEL",
    title: "Analýza paliva",
    body: "Rozbor nafty odhalí příčinu dřív, než poškodí vstřikování. Prevence místo nákladné opravy — palivo je pro motor jako krev.",
  },
  {
    code: "CR",
    title: "Opravy CR vstřikovačů",
    body: "Common Rail pracuje pod tlakem přes 2000 barů. Testujeme a opravujeme vstřikovače osobních, dodávkových i nákladních vozů.",
  },
  {
    code: "PD · PLD",
    title: "PD a PLD jednotky",
    body: "Pumpe-Düse i Pumpe-Leitung-Düse pro auta, zemědělské a stavební stroje. Testování i oprava, včetně demontáže z vozidla.",
  },
  {
    code: "VP · EDC",
    title: "Vstřikovací čerpadla",
    body: "Řadová i rotační čerpadla. Srdce naftového motoru seřídíme přesně podle seřizovacího předpisu výrobce.",
  },
  {
    code: "INJ",
    title: "Opravy vstřikovačů",
    body: "Jedno- i dvoupružinové vstřikovače všech typů. Testování, čištění, výměna trysek a montáž zpět do vozu.",
  },
  {
    code: "DÍLNA",
    title: "Komplexní servis",
    body: "Servis osobních, dodávkových i nákladních aut se specializací na vstřikovací systémy, ve špičkově vybavené dílně.",
  },
];

const readout: { value: string; label: string }[] = [
  { value: "1993", label: "vstřikování je náš obor" },
  { value: "2000+", label: "barů · tlak Common Rail" },
  { value: "20 000", label: "položek skladem" },
  { value: "24 h", label: "většina dílů k dispozici" },
];

const metrics: { value: string; title: string; body: string }[] = [
  {
    value: "od 1993",
    title: "Odbornost od začátku",
    body: "Známe nové CR, PD i PLD systémy stejně dobře jako vstřikovací „klasiku“ — řadová i rotační čerpadla (VP, EDC), jedno- i dvoupružinové vstřikovače.",
  },
  {
    value: "20 000+",
    title: "Velké skladové zásoby",
    body: "Sklad plný dílů BOSCH, Delphi, Denso, Motorpal a Stanadyne. Většina položek je skladem nebo k dispozici do 24 hodin.",
  },
  {
    value: "5 značek",
    title: "Autorizovaný servis",
    body: "Autorizovaný prodejce a servis Motorpal a Stanadyne, prodejce a servis Delphi a Denso. Patříme k nejlépe vybaveným BOSCH Diesel centrům v ČR.",
  },
  {
    value: "dle předpisu",
    title: "Garance správného postupu",
    body: "Technici chodí na pravidelná školení, vybavení pravidelně kalibrujeme. Ručíme za správný postup — žádné opravy metodou pokus–omyl.",
  },
];

export default function Page(): ReactNode {
  return (
    <main>
      <header className="site-head">
        <div className="wrap head-inner">
          <a className="brand" href="#top" aria-label="Černík — BOSCH Diesel centrum Plzeň">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" focusable="false">
                <path d="M12 2 L15 9 L12 22 L9 9 Z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-text">
              <span className="brand-name">ČERNÍK</span>
              <span className="brand-sub">BOSCH Diesel centrum · Plzeň</span>
            </span>
          </a>
          <nav className="nav" aria-label="Hlavní">
            <a href="#servis">Co opravujeme</a>
            <a href="#proc">Proč my</a>
            <a className="nav-tel" href="tel:+420377416120">
              <span aria-hidden="true">☏</span> 377 416 120
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy reveal-group">
            <p className="eyebrow reveal">
              <span className="dot" aria-hidden="true" /> Od roku 1993 · Plzeň
            </p>
            <h1 className="reveal">
              Srdce naftového motoru <em>kalibrujeme na&nbsp;mikrony.</em>
            </h1>
            <p className="lede reveal">
              BOSCH Diesel centrum v Plzni. Opravujeme a testujeme vstřikovací
              čerpadla, CR vstřikovače i PD/PLD jednotky — na kalibrovaných
              stolicích a přesně podle předpisů výrobce.
            </p>
            <div className="hero-cta reveal">
              <a className="btn btn-amber" href="tel:+420377416120">
                Zavolat 377 416 120
              </a>
              <a className="btn btn-ghost" href="#servis">
                Přinést díl na&nbsp;test
              </a>
            </div>
            <div className="ruler reveal" aria-hidden="true" />
            <dl className="readout reveal">
              {readout.map((r) => (
                <div className="cell" key={r.value}>
                  <dt>{r.value}</dt>
                  <dd>{r.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="hero-media reveal">
            <img
              src="/hero.webp"
              width={1200}
              height={900}
              alt="Detail vstřikovacího čerpadla na kalibrační stolici v dílně diesel centra Černík v Plzni"
            />
            <figcaption>
              <span className="mono">SNÍMEK 01</span>
              <span>Kalibrační stolice · dílna Plzeň</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="servis" id="servis">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" /> Co opravujeme
            </p>
            <h2>Od Common Railu po řadové čerpadlo — jeden dům, celé vstřikování.</h2>
            <p className="sec-lede">
              Specializujeme se na vstřikovací systémy naftových motorů pro osobní,
              dodávkové i nákladní automobily a zemědělské i stavební stroje.
            </p>
          </header>

          <figure className="band-media">
            <img
              src="/section-1.webp"
              width={1600}
              height={800}
              alt="Technik při testování dieselového vstřikovače na diagnostickém stanovišti"
            />
          </figure>

          <ul className="cards">
            {services.map((s) => (
              <li className="card" key={s.title}>
                <span className="card-code mono">{s.code}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="trust" id="proc">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" /> Proč Černík
            </p>
            <h2>
              Vstřikovací čerpadlo je srdce naftového motoru.{" "}
              <em>My jsme jeho kardiocentrum.</em>
            </h2>
          </header>

          <div className="trust-grid">
            <figure className="trust-media">
              <img
                src="/section-2.webp"
                width={1000}
                height={1200}
                alt="Moderní dílna vybavená diagnostikou pro opravy vstřikovacích systémů"
              />
              <figcaption className="mono">DÍLNA · KALIBRACE</figcaption>
            </figure>

            <div className="metrics">
              {metrics.map((m) => (
                <div className="metric" key={m.title}>
                  <span className="metric-val mono">{m.value}</span>
                  <div className="metric-body">
                    <h3>{m.title}</h3>
                    <p>{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="trust-note">
            <span className="mono">+ pro partnery</span> Servisům a obchodním
            partnerům dodáváme diagnostiku, speciální nářadí a školení pro
            vstřikovací systémy značek BOSCH i Nova Ditex.
          </p>
        </div>
      </section>
    </main>
  );
}
