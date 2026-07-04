import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      key: "navrh",
      season: "Návrh",
      title: "Návrhy a realizace sadových úprav",
      body: "Nakreslíme zahradu, která sedne k vašemu domu i pozemku — od půdorysu přes výběr rostlin až po hotovou výsadbu. Vidíte plán dřív, než sáhneme na rýč.",
      note: "Rodinné zahrady · předzahrádky · firemní areály",
    },
    {
      key: "udrzba",
      season: "Údržba",
      title: "Údržba soukromé a veřejné zeleně",
      body: "Sečení, řez dřevin, tvarování živých plotů a péče o trávníky během celého roku. Staráme se o zahrady u domů i o zeleň pro město České Budějovice.",
      note: "Celoročně · pravidelně · dle rozvrhu",
    },
    {
      key: "prodejna",
      season: "Prodejna",
      title: "Prodejna okrasných rostlin a stromků",
      body: "Okrasné rostliny i ovocné stromky od předních českých pěstitelů. Poradíme, co poroste právě u vás — a co spolu bude ladit.",
      note: "U Voříškova dvora · od jara 2000",
    },
    {
      key: "vysadby",
      season: "Výsadby",
      title: "Náhradní výsadby pro stavební firmy",
      body: "Realizujeme náhradní výsadby při stavbách a přebíráme jejich následnou údržbu. Spolupracujeme se stavebními firmami i s městem.",
      note: "Stavby · veřejný prostor · dlouhodobě",
    },
  ];

  return (
    <main className="an">
      <header className="an-nav" aria-label="Hlavní">
        <a className="an-mark" href="#top" aria-label="Zahradnictví Antiaris, domů">
          <span className="an-mark-latin">Antiaris</span>
          <span className="an-mark-sub">zahradní architektura · Č. Budějovice</span>
        </a>
        <nav className="an-links" aria-label="Sekce">
          <a href="#nabidka">Co děláme</a>
          <a href="#firma">O firmě</a>
          <a className="an-call" href="tel:+420380000000">Zavolat do zahradnictví</a>
        </nav>
      </header>

      <section className="an-hero" id="top">
        <div className="an-hero-media">
          <img
            src="/hero.webp"
            alt="Zahrada navržená a realizovaná zahradnictvím Antiaris u Českých Budějovic"
            className="an-hero-img"
          />
          <span className="an-hero-veil" aria-hidden="true" />
        </div>

        <div className="an-hero-body">
          <p className="an-eyebrow">Sázíme od října 1999 · U Voříškova dvora</p>
          <h1 className="an-hero-title">
            Zahrada, která
            <span className="an-grows"> roste s vámi</span>
            <span className="an-underplant">— rok co rok.</span>
          </h1>
          <p className="an-hero-lede">
            Navrhujeme, vysazujeme a udržujeme zeleň v Českých Budějovicích a okolí.
            Od jednoho okrasného stromku po celý sad — a když je hotovo, přijdeme se
            postarat i další sezónu.
          </p>
          <div className="an-hero-cta">
            <a className="an-btn" href="#nabidka">Prohlédnout, co umíme</a>
            <a className="an-btn an-btn-ghost" href="tel:+420380000000">Zavolat</a>
          </div>
        </div>

        <ol className="an-timeline" aria-label="Jak firma rostla">
          <li><span className="an-year">1999</span><span className="an-ev">Založení, ovocné stromky</span></li>
          <li><span className="an-year">2000</span><span className="an-ev">Prodejna okrasných rostlin</span></li>
          <li><span className="an-year">dnes</span><span className="an-ev">Návrhy, realizace, bylinky pro restaurace</span></li>
        </ol>
      </section>

      <section className="an-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="an-section-head">
          <p className="an-eyebrow">Co pro vaši zahradu uděláme</p>
          <h2 id="nabidka-h">Od plánu na papíře po zeleň, o kterou se staráme dál</h2>
          <p className="an-section-lede">
            Čtyři věci, které spolu drží. Nemusíte si vybírat jen jednu — nejčastěji
            navrhneme, vysadíme a pak už jen jezdíme udržovat.
          </p>
        </div>

        <div className="an-grid">
          {services.map((s, i) => (
            <article
              className="an-card"
              key={s.key}
              style={{ "--i": i } as CSSProperties}
            >
              <p className="an-season">{s.season}</p>
              <h3>{s.title}</h3>
              <p className="an-card-body">{s.body}</p>
              <p className="an-card-note">{s.note}</p>
            </article>
          ))}
        </div>

        <figure className="an-band">
          <img
            src="/section-1.webp"
            alt="Realizace sadové úpravy — výsadba a úprava terénu v zahradě"
            className="an-band-img"
          />
          <figcaption className="an-band-cap">
            Náhradní výsadby a zahradnické práce provádíme jak na soukromých
            pozemcích, tak ve veřejném prostoru města.
          </figcaption>
        </figure>
      </section>

      <section className="an-section an-about" id="firma" aria-labelledby="firma-h">
        <div className="an-about-grid">
          <div className="an-about-media">
            <img
              src="/section-2.webp"
              alt="Prodejna okrasných rostlin zahradnictví Antiaris v areálu U Voříškova dvora"
              className="an-about-img"
            />
          </div>
          <div className="an-about-body">
            <p className="an-eyebrow">Z Voříškova dvora, už přes dvacet let</p>
            <h2 id="firma-h">Malé zahradnictví, které vyrostlo se svými zahradami</h2>
            <p>
              Začínali jsme v říjnu 1999 prodejem ovocných stromků od předních
              českých pěstitelů. Na jaře 2000 přibyla prodejna okrasných rostlin,
              kterou dodnes rozšiřujeme. Postupně jsme přidali návrhy a realizace
              sadových úprav a údržbu soukromé i veřejné zeleně.
            </p>
            <p>
              V posledních letech pěstujeme bylinky pro vybrané restaurace a kavárny
              v Českých Budějovicích a okolí — čerstvé, z pár kilometrů daleko.
            </p>

            <dl className="an-facts">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>U Voříškova dvora 2743<br />České Budějovice</dd>
              </div>
              <div>
                <dt>Pro koho sázíme</dt>
                <dd>Rodiny, restaurace, stavební firmy i město</dd>
              </div>
              <div>
                <dt>Od kdy</dt>
                <dd>1999 — a pořád rosteme</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
