import { AiImage } from "./_ui";

const PARTS = [
  {
    n: "01",
    title: "Fotovoltaické panely",
    body: "Navrhneme rozložení na míru sklonu a orientaci vaší střechy, ať z každého panelu vyrobíte maximum.",
  },
  {
    n: "02",
    title: "Měnič a řízení",
    body: "Stejnosměrný proud usměrníme a napojíme na chytré řízení. Výrobu i spotřebu sledujete v telefonu v reálném čase.",
  },
  {
    n: "03",
    title: "Akumulace HOPPECKE",
    body: "Co vyrobíte přes den, uloží baterie HOPPECKE. Večer to spotřebujete doma místo nákupu ze sítě.",
  },
  {
    n: "04",
    title: "Servis a monitoring",
    body: "Systém hlídáme na dálku a v případě potřeby vyjedeme. Certifikovaný servis po celém Plzeňském kraji.",
  },
];

const TEAM = [
  { name: "Ing. Václav Měsíček", role: "jednatel společnosti" },
  { name: "Zdeněk Šnebergr", role: "provozní ředitel" },
  { name: "Jakub Trepeš", role: "key account manager OZE" },
];

export default function Page() {
  return (
    <main className="sb-page">
      <header className="sb-hero">
        <div className="sb-grid" aria-hidden="true">
          <span className="sb-pulse" />
        </div>
        <div className="sb-hero-inner">
          <div className="sb-wordmark" aria-label="Stand by energy">
            <span className="sb-charge" aria-hidden="true" />
            <span className="sb-wm-a">STAND</span>
            <span className="sb-wm-b">BY</span>
            <span className="sb-wm-a">ENERGY</span>
            <span className="sb-wm-ro">s.r.o.</span>
          </div>

          <p className="sb-eyebrow">Fotovoltaika + akumulace — Plzeň a okolí</p>

          <h1 className="sb-h1">
            Vaše střecha<br />
            <em>jako elektrárna.</em>
          </h1>

          <p className="sb-lead">
            Navrhneme, nainstalujeme a servisujeme fotovoltaiku s bateriovou
            akumulací HOPPECKE. Přes den vyrobíte, večer spotřebujete — a rozdíl
            uvidíte na účtu.
          </p>

          <div className="sb-cta-row">
            <a className="sb-btn" href="#nabidka">Spočítat úsporu</a>
            <a className="sb-btn sb-btn--ghost" href="#nabidka">Jak to funguje</a>
          </div>

          <div className="sb-solder">
            <span className="sb-dot" aria-hidden="true" />
            <span className="sb-solder-num">40,28 kWp</span>
            <span className="sb-solder-lbl">
              referenční instalace na naší provozovně v Plzni
            </span>
          </div>
        </div>
      </header>

      <section className="sb-band sb-band--parts" id="nabidka">
        <div className="sb-divider" aria-hidden="true" />
        <div className="sb-band-inner">
          <p className="sb-eyebrow sb-eyebrow--dark">Co postavíme</p>
          <h2 className="sb-h2">Systém, který drží tok energie pohromadě</h2>
          <p className="sb-band-lead">
            Panely vyrobí, měnič usměrní, baterie podrží, servis pohlídá. Čísla
            v pořadí ukazují, kudy proud u vás doma poteče.
          </p>

          <ol className="sb-cards">
            {PARTS.map((p) => (
              <li className="sb-card" key={p.n}>
                <span className="sb-card-num">{p.n}</span>
                <h3 className="sb-card-title">{p.title}</h3>
                <p className="sb-card-body">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sb-band sb-band--trust">
        <div className="sb-divider" aria-hidden="true" />
        <div className="sb-band-inner">
          <p className="sb-eyebrow">Proč my</p>
          <h2 className="sb-h2">Plzeňská firma, která u instalace zůstává</h2>
          <p className="sb-band-lead">
            Nejsme překupník na jedno léto. Sídlíme v Plzni, montujeme po celém
            Plzeňském kraji a systém vám hlídáme dál — od prvního návrhu přes
            akumulaci HOPPECKE až po servis.
          </p>

          <div className="sb-stats">
            <div className="sb-stat">
              <span className="sb-dot" aria-hidden="true" />
              <span className="sb-stat-num">40,28 kWp</span>
              <span className="sb-stat-lbl">vlastní elektrárna s akumulací</span>
            </div>
            <div className="sb-stat">
              <span className="sb-dot" aria-hidden="true" />
              <span className="sb-stat-num">HOPPECKE</span>
              <span className="sb-stat-lbl">bateriová akumulace, na kterou stavíme</span>
            </div>
            <div className="sb-stat">
              <span className="sb-dot" aria-hidden="true" />
              <span className="sb-stat-num">Plzeňský kraj</span>
              <span className="sb-stat-lbl">kam vyjíždíme na montáž i servis</span>
            </div>
          </div>

          <div className="sb-ref">
            <p className="sb-ref-tag">Reference — vlastní provozovna</p>
            <p className="sb-ref-text">
              Na střeše naší nové provozovny běží fotovoltaická elektrárna
              s akumulací o výkonu <strong>40,28 kWp</strong>. Projekt byl
              spolufinancován Evropskou unií — a slouží nám jako místo, kde
              řešení sami zkoušíme, než ho postavíme vám.
            </p>
          </div>

          <div className="sb-team">
            {TEAM.map((t) => (
              <div className="sb-person" key={t.name}>
                <span className="sb-person-name">{t.name}</span>
                <span className="sb-person-role">{t.role}</span>
              </div>
            ))}
          </div>

          <p className="sb-where">
            Kde nás najdete — Ukázková 123, Plzeň · +420&nbsp;777&nbsp;111&nbsp;222 · info@example.cz
          </p>
        </div>
      </section>
    </main>
  );
}
