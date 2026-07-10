export default function Page() {
  const kategorie = [
    {
      cislo: "01",
      nazev: "Dětská",
      popis: "Rostoucí nožky potřebují správný tvar. Barefoot, sandálky i první kotníkové boty od Frodda, Superfitu a Jomy — ve velikostech od 21 nahoru.",
      znacky: "Froddo · Superfit · Joma"
    },
    {
      cislo: "02",
      nazev: "Dámská",
      popis: "Kožené tenisky, sandály a lodičky, které vydrží celý den na nohou. Rieker, Dockers a Mustang v šířkách pro každou nohu.",
      znacky: "Rieker · Dockers · Mustang"
    },
    {
      cislo: "03",
      nazev: "Pánská",
      popis: "Od kancelářské polobotky po tenisky na běžný den. Nike, Rieker a další — poctivá kůže i sportovní střih.",
      znacky: "Nike · Rieker"
    },
    {
      cislo: "04",
      nazev: "Barefoot",
      popis: "Bosé boty, které nechají prsty roztáhnout a chodidlo pracovat. Certifikace Zdravá stopa, dětské i dospělé velikosti.",
      znacky: "Froddo · Joma · Quick"
    }
  ];

  return (
    <main className="vj">
      <header className="vj-nav">
        <a href="#" className="vj-wordmark" aria-label="V+J Obuv, domovská stránka">
          <span className="vj-mark">V<span className="vj-plus">+</span>J</span>
          <span className="vj-mark-sub">obuv&nbsp;·&nbsp;České Budějovice</span>
        </a>
        <nav className="vj-nav-links" aria-label="Hlavní nabídka">
          <a href="#kategorie">Kategorie</a>
          <a href="#duvera">Proč my</a>
          <a href="#kontakt" className="vj-nav-cta">Najít prodejnu</a>
        </nav>
      </header>

      <section className="vj-hero" id="kontakt">
        <div className="vj-hero-copy">
          <p className="vj-eyebrow">Rodinná obuv od roku 1994 · 21 prodejen po Česku</p>
          <h1 className="vj-h1">
            Bota, která<br />
            <span className="vj-h1-accent">sedne na první</span><br />
            zkoušku.
          </h1>
          <p className="vj-lead">
            Prodáváme jen certifikovanou obuv — Žirafa, Česká kvalita, Zdravá stopa.
            Vyzkoušejte si ji na kterékoli z našich prodejen, nebo si ji nechte
            poslat domů. Doprava zdarma od 899 Kč, výměna bez řečí.
          </p>
          <div className="vj-hero-actions">
            <a href="#kategorie" className="vj-btn vj-btn-primary">Prohlédnout nabídku</a>
            <a href="tel:+420724110591" className="vj-btn vj-btn-ghost">Zavolat: 724 110 591</a>
          </div>
          <dl className="vj-facts">
            <div>
              <dt>Prodejen v ČR</dt>
              <dd>21</dd>
            </div>
            <div>
              <dt>Výdejních míst</dt>
              <dd>8 800</dd>
            </div>
            <div>
              <dt>Odesíláme do</dt>
              <dd>24 h</dd>
            </div>
          </dl>
        </div>
        <figure className="vj-hero-figure">
          <img
            src="/hero.webp"
            alt="Výběr kožené obuvi z nabídky V+J Obuv — tenisky, sandály a kotníkové boty"
            className="vj-hero-img"
            width={880}
            height={1040}
          />
          <figcaption className="vj-hero-tag">Certifikováno: Žirafa · Česká kvalita · Zdravá stopa</figcaption>
        </figure>
      </section>

      <section className="vj-section vj-kategorie" id="kategorie" aria-labelledby="kategorie-nadpis">
        <div className="vj-section-head">
          <p className="vj-eyebrow">Čtyři oddělení, jedna police</p>
          <h2 id="kategorie-nadpis" className="vj-h2">Podle koho boty hledáte</h2>
        </div>
        <div className="vj-kat-media">
          <img
            src="/section-1.webp"
            alt="Regály s dětskou, dámskou a pánskou obuví na prodejně V+J Obuv"
            className="vj-kat-img"
            width={1200}
            height={720}
            loading="lazy"
          />
        </div>
        <ol className="vj-kat-list">
          {kategorie.map((k) => (
            <li key={k.cislo} className="vj-kat-item">
              <span className="vj-kat-num" aria-hidden="true">{k.cislo}</span>
              <div className="vj-kat-body">
                <h3 className="vj-kat-nazev">{k.nazev}</h3>
                <p className="vj-kat-popis">{k.popis}</p>
                <p className="vj-kat-znacky">{k.znacky}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="vj-section vj-duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="vj-duvera-grid">
          <div className="vj-duvera-copy">
            <p className="vj-eyebrow">Proč nakupovat u nás</p>
            <h2 id="duvera-nadpis" className="vj-h2">Ne jen bota. Bota, za kterou se postavíme.</h2>
            <p className="vj-duvera-lead">
              Jsme jeden z významných členů České obuvnické a kožedělné asociace.
              To není nálepka do výlohy — je to důvod, proč u nás najdete obuv,
              která projde certifikací kvality, ne jen levnou dovozovou variantu.
            </p>
            <ul className="vj-vyhody">
              <li>
                <strong>Slevový program.</strong> Za každý nákup vám zpátky
                putují skutečné koruny na příští boty — ne symbolické body.
              </li>
              <li>
                <strong>Doprava zdarma od 899 Kč.</strong> Přeposlání na
                prodejnu je zdarma vždy, dobírku neúčtujeme navíc.
              </li>
              <li>
                <strong>Snadná výměna a vrácení.</strong> Nesedla velikost?
                Vyměníme, nebo vrátíme peníze. Bez zbytečných otázek.
              </li>
            </ul>
            <a href="tel:+420724110591" className="vj-btn vj-btn-primary">Zavolat na prodejnu</a>
            <p className="vj-kontakt-radek">Po–Pá 7:00–15:30 · eshop@vjobuv.cz</p>
          </div>
          <figure className="vj-duvera-figure">
            <img
              src="/section-2.webp"
              alt="Detail poctivě zpracované kožené boty z nabídky V+J Obuv"
              className="vj-duvera-img"
              width={800}
              height={960}
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
