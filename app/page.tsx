import { AiImage } from "./_ui";

const services = [
  {
    n: "01",
    title: "Umícháme beton",
    body: "Čerstvý transportbeton pevnostních tříd C8/10 až C30/37 podle ČSN EN 206. Recepturu ladíme na to, co stavíte — základy, desku i pohledový beton.",
    stamp: "C20/25",
    stampLabel: "nejžádanější třída",
  },
  {
    n: "02",
    title: "Dovezeme na stavbu",
    body: "Rozvezeme až 9 m³ na jeden odvoz autodomíchávačem po Českých Budějovicích i okolí. Čas přistavení domluvíme na půlhodinu přesně.",
    stamp: "9 m³",
    stampLabel: "na jeden odvoz",
  },
  {
    n: "03",
    title: "Načerpáme kam potřebujete",
    body: "Beton dostaneme i za dům, přes plot nebo do patra. Dosah výložníku čerpadla je až 42 metrů — ruční kolečka necháte doma.",
    stamp: "42 m",
    stampLabel: "dosah čerpadla",
  },
  {
    n: "04",
    title: "Uložíme a zahladíme",
    body: "Základové pasy, desky i podlahy uložíme a srovnáme na míru stavbě. Předáme rovný povrch připravený k další práci.",
    stamp: "±3 mm",
    stampLabel: "rovinnost desky",
  },
];

export default function Page() {
  return (
    <main className="mb-page">
      <header className="mb-nav">
        <a className="mb-wordmark" href="#" aria-label="MANE BETON, úvod">
          <span>MANE</span>
          <span className="mb-wordmark-2">BETON</span>
        </a>
        <p className="mb-nav-tag">Betonárna · České Budějovice</p>
      </header>

      <section className="mb-hero" aria-labelledby="mb-h1">
        <div className="mb-hero-type">
          <p className="mb-eyebrow">Čerstvý beton z jižních Čech · od roku 1997</p>
          <h1 id="mb-h1" className="pour">
            <span className="pour-outline" aria-hidden="true">MANE BETON</span>
            <span className="pour-fill">MANE BETON</span>
          </h1>
          <p className="mb-hero-lead">
            Namícháme, dovezeme a načerpáme beton přesně tam, kam potřebujete —
            na základy rodinného domu i na velkou desku. Zavolejte a řekneme vám
            cenu i termín ještě dnes.
          </p>
          <div className="mb-hero-actions">
            <a className="mb-btn" href="tel:+420387682182">Zavolat +420 387 682 182</a>
            <a className="mb-btn mb-btn-ghost" href="#nabidka">Co dovezeme</a>
          </div>
        </div>
        <div className="mb-hero-panel">
          <AiImage
            src="/hero.webp"
            alt="Autodomíchávač ukládá čerstvý beton na stavbě v Českých Budějovicích"
            className="mb-hero-img"
          />
        </div>
      </section>

      <div className="divider" role="separator" aria-label="Pevnostní třída C20/25">
        <span className="stria" aria-hidden="true" />
        <span className="tie">
          <b>C20/25</b>
          <small>pevnostní třída</small>
        </span>
      </div>

      <section id="nabidka" className="section section-dark" aria-labelledby="mb-nabidka">
        <div className="section-head">
          <p className="mb-eyebrow mb-eyebrow-light">01–04 · Cesta betonu od míchačky ke stavbě</p>
          <h2 id="mb-nabidka" className="section-title">Co pro vás uděláme</h2>
          <p className="section-intro">
            Beton u nás nekončí u výpusti. Provedeme ho celou cestou — od receptury
            v míchacím jádru až po zahlazený povrch, na kterém se dá stavět dál.
          </p>
        </div>
        <ol className="mb-grid">
          {services.map((s) => (
            <li key={s.n} className="mb-card">
              <span className="mb-card-n" aria-hidden="true">{s.n}</span>
              <h3 className="mb-card-title">{s.title}</h3>
              <p className="mb-card-body">{s.body}</p>
              <span className="mb-stamp">
                <b>{s.stamp}</b>
                <small>{s.stampLabel}</small>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <div className="divider" role="separator" aria-label="28 let na trhu">
        <span className="stria" aria-hidden="true" />
        <span className="tie">
          <b>28</b>
          <small>let na trhu</small>
        </span>
      </div>

      <section className="section" aria-labelledby="mb-onas">
        <div className="mb-about">
          <div className="mb-about-type">
            <p className="mb-eyebrow">Rodinná firma z Budějovic</p>
            <h2 id="mb-onas" className="section-title">
              Beton mícháme na jednom místě už 28 let
            </h2>
            <p className="section-intro">
              Jsme součást budějovické rodinné firmy MANE. Betonárnu známe od
              receptury po výpust — víme, kolik vody snese pohledový beton a kdy
              domíchávač musí na stavbě být, aby vám neztuhl v koritě.
            </p>
            <ul className="mb-proof">
              <li>Beton z vlastní betonárny na Okružní — čerstvý, ne půl dne starý.</li>
              <li>Dodací list s třídou, objemem a časem míchání ke každému odvozu.</li>
              <li>Rozvoz i čerpání po celém okrese České Budějovice.</li>
            </ul>
            <dl className="mb-contact">
              <div>
                <dt>Betonárna</dt>
                <dd>Okružní 2615, 370 01 České Budějovice</dd>
              </div>
              <div>
                <dt>Objednávky</dt>
                <dd><a href="tel:+420387682182">+420 387 682 182</a></dd>
              </div>
            </dl>
          </div>
          <div className="mb-about-media">
            <AiImage
              src="/section-1.webp"
              alt="Betonárna MANE BETON na Okružní ulici v Českých Budějovicích"
              className="mb-about-img"
            />
            <div className="mb-stats">
              <div className="mb-stat"><b>750+</b><small>hotových staveb</small></div>
              <div className="mb-stat"><b>9</b><small>tříd betonu skladem</small></div>
              <div className="mb-stat"><b>1×</b><small>termín, na který se čeká</small></div>
            </div>
          </div>
        </div>

        <div className="mb-refs">
          <AiImage
            src="/section-2.webp"
            alt="Vylitá a zahlazená betonová deska připravená k další stavbě"
            className="mb-refs-img"
          />
          <div className="mb-refs-type">
            <p className="mb-eyebrow">Kam náš beton jezdí</p>
            <h3 className="mb-refs-title">Základy, desky a developerské projekty</h3>
            <p className="mb-refs-body">
              Vozíme beton na rodinné domy v Rožnově i na velké desky pro haly a
              bytové projekty v okolí Budějovic. Malý odběr i sto kubíků —
              namícháme a přivezeme obojí se stejnou přesností.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
