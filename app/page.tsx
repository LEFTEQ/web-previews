const silnoproud = [
  "Průmyslové elektroinstalace hal a provozů",
  "Rozvodny NN, trafostanice, kabelové trasy",
  "Osvětlení budov a veřejné osvětlení",
  "Hromosvodní soustavy",
];

const slaboproud = [
  "Zabezpečovací systémy EZS",
  "Kamerové systémy CCTV",
  "Přístupové a docházkové systémy",
  "Strukturovaná kabeláž a datové sítě",
];

const reference = [
  {
    klient: "EXCALIBUR ARMY, Avia Přelouč",
    misto: "Přelouč",
    rozsah: "Slaboproud, průmyslové instalace, rozvaděče",
  },
  {
    klient: "EA Hotel Kraskov",
    misto: "Kraskov",
    rozsah: "Kompletní elektroinstalace a revize",
  },
  {
    klient: "Lyžařský areál Černá Voda",
    misto: "Černá Voda",
    rozsah: "Silnoproud, MaR, revizní zprávy",
  },
  {
    klient: "Inteligentní elektroinstalace RD",
    misto: "Pardubicko",
    rozsah: "Chytrá domácnost, rozvaděč na míru",
  },
];

export default function Page() {
  return (
    <main className="page">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brandbar">
            <span className="wordmark">
              CALLIPSO<span className="wordmark-dot">·</span>PARDUBICE
            </span>
            <span className="brandbar-note">elektro od roku 1998</span>
          </div>

          {/* Signature: revizní štítek jako grafický motiv */}
          <div className="tag-card" aria-hidden="true">
            <div className="tag-hole" />
            <div className="tag-head">REVIZNÍ ŠTÍTEK</div>
            <div className="tag-row">
              <span>Zařízení</span>
              <strong>elektroinstalace NN</strong>
            </div>
            <div className="tag-row">
              <span>Stav</span>
              <strong className="tag-ok">SCHOPNO PROVOZU</strong>
            </div>
            <div className="tag-row">
              <span>Příští revize</span>
              <strong>hlídáme za vás</strong>
            </div>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Revize elektro,</span>
            <span className="hero-line hero-line-2">na kterou se dá</span>
            <span className="hero-line hero-line-3">
              <em>razítkem</em> spolehnout.
            </span>
          </h1>

          <p className="hero-sub">
            Revizní zprávy, montáže a kompletní elektroinstalace pro firmy i
            domácnosti v Pardubicích a okolí. Vlastní projekce, vlastní výroba
            rozvaděčů — a termín, který platí.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420608609000">
              Zavolat 608 609 000
            </a>
            <a className="btn btn-ghost" href="mailto:info@c-elektro.cz">
              Napsat e‑mail
            </a>
          </div>

          <dl className="hero-facts">
            <div>
              <dt>Působíme</dt>
              <dd>Pardubice — Rosice, Generála Svobody 56</dd>
            </div>
            <div>
              <dt>Jsme tu pro vás</dt>
              <dd>po–pá 7:00–15:30</dd>
            </div>
            <div>
              <dt>V oboru</dt>
              <dd>od roku 1998</dd>
            </div>
          </dl>
        </div>

        {/* dekorativní schéma vedení */}
        <svg
          className="hero-circuit"
          viewBox="0 0 320 640"
          aria-hidden="true"
          focusable="false"
        >
          <path
            className="circuit-path"
            d="M20 0 V180 H120 V320 H60 V520 H200 V640"
            fill="none"
          />
          <path
            className="circuit-path circuit-path-2"
            d="M260 0 V120 H180 V400 H280 V640"
            fill="none"
          />
          <circle className="circuit-node" cx="120" cy="180" r="6" />
          <circle className="circuit-node" cx="60" cy="320" r="6" />
          <circle className="circuit-node" cx="180" cy="120" r="6" />
          <circle className="circuit-node" cx="280" cy="400" r="6" />
        </svg>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <span className="section-eyebrow">Co pro vás uděláme</span>
          <h2 id="sluzby-h">
            Od projektu přes montáž až po razítko revizního technika
          </h2>
        </div>

        <div className="sluzby-grid">
          <article className="karta karta-hlavni">
            <span className="karta-znak" aria-hidden="true">⏚</span>
            <h3>Revize elektrických zařízení</h3>
            <p>
              Výchozí i pravidelné revize elektroinstalací, spotřebičů,
              osvětlení a hromosvodů v sítích NN. Revizní zprávu dostanete
              srozumitelnou — víte přesně, co je v pořádku, co opravit a dokdy.
              Termín další revize pohlídáme za vás.
            </p>
            <ul>
              <li>Revize pro kolaudaci i pojišťovnu</li>
              <li>Pravidelné revize firem, škol a bytových domů</li>
              <li>Revize hromosvodů a spotřebičů</li>
            </ul>
          </article>

          <article className="karta">
            <span className="karta-znak" aria-hidden="true">⎓</span>
            <h3>Silnoproudé instalace</h3>
            <ul>
              {silnoproud.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>

          <article className="karta">
            <span className="karta-znak" aria-hidden="true">⌁</span>
            <h3>Slaboproud a datové sítě</h3>
            <ul>
              {slaboproud.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>

          <article className="karta">
            <span className="karta-znak" aria-hidden="true">▤</span>
            <h3>Výroba rozvaděčů</h3>
            <p>
              Domovní i průmyslové rozvaděče vyrábíme ve vlastní dílně v
              Rosicích — osazené jističi, zapojené, přezkoušené a připravené
              k montáži. Domovní rozvaděč si nakonfigurujete přesně podle
              svého domu.
            </p>
          </article>

          <article className="karta">
            <span className="karta-znak" aria-hidden="true">≋</span>
            <h3>Měření a regulace</h3>
            <p>
              Řízení vytápění, vzduchotechniky a chlazení v budovách a
              průmyslu. Navrhneme, namontujeme a udržíme v chodu — včetně
              monitoringu technologií na dálku.
            </p>
          </article>

          <article className="karta">
            <span className="karta-znak" aria-hidden="true">✎</span>
            <h3>Projekce a dokumentace</h3>
            <p>
              Vlastní projekční oddělení připraví dokumentaci pro rodinný dům
              i výrobní halu. Projekt, realizace a revize od jedné firmy —
              nikdo se na nikoho nevymlouvá.
            </p>
          </article>
        </div>
      </section>

      {/* ================= DŮVĚRA / REFERENCE ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <span className="section-eyebrow section-eyebrow-svetly">
              Proč Callipso
            </span>
            <h2 id="duvera-h">
              Ve východních Čechách zapojujeme a revidujeme přes 25 let
            </h2>
            <p>
              Od roku 1998 jsme prošli stovky hal, kotelen, rozvoden i
              rodinných domů. Víme, jak vypadá instalace, která projde revizí
              napoprvé — protože ji sami navrhujeme, montujeme i kontrolujeme.
            </p>
            <ul className="duvera-body">
              <li>
                <strong>Jedna odpovědnost.</strong> Projekt, dodávka, montáž i
                revizní zpráva od jednoho týmu.
              </li>
              <li>
                <strong>Certifikované komponenty.</strong> Montujeme výhradně
                prověřená zařízení evropských výrobců.
              </li>
              <li>
                <strong>Školení technici.</strong> Náš tým průběžně sleduje
                normy ČSN i novinky v oboru.
              </li>
            </ul>
          </div>

          <div className="reference-blok">
            <h3 className="reference-title">Vybrané zakázky</h3>
            <ol className="reference-list">
              {reference.map((r) => (
                <li key={r.klient} className="reference-item">
                  <span className="reference-klient">{r.klient}</span>
                  <span className="reference-meta">
                    {r.misto} — {r.rozsah}
                  </span>
                </li>
              ))}
            </ol>
            <p className="reference-pozn">
              Reference rádi doložíme kontaktem na konkrétního zákazníka —
              stačí říct, jaký typ zakázky vás zajímá.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
