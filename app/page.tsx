import { AiImage } from "./_ui";

const sluzby = [
  {
    t: "Automatické závlahy",
    d: "Chytré zavlažování ušetří až 30 % vody. Navrhneme, zapojíme a na zimu spolehlivě odvzdušníme.",
  },
  {
    t: "Přírodní jezírka",
    d: "Biotop bez chemie a filtrů, který si drží čistou vodu vlastním, živým ekosystémem.",
  },
  {
    t: "Zelené střechy",
    d: "Izolace proti letnímu horku i mrazu, zádrž dešťové vody, méně prachu a hluku ve městě.",
  },
  {
    t: "Gabionové stěny",
    d: "Kámen v galvanizované kleci — opěrné zdi, ploty i tiché předěly mezi pozemky.",
  },
  {
    t: "Trávníky",
    d: "Pokládka i výsev, provzdušnění, sečení a hnojení po celou sezónu, ne jen jednou.",
  },
  {
    t: "Pergoly a terasy",
    d: "Modřínové dřevo, které časem zešedne do stříbra a vydrží roky pod otevřeným nebem.",
  },
  {
    t: "Záhony a skalky",
    d: "Okrasná výsadba, která kvete od jarních cibulovin až do prvních podzimních mrazů.",
  },
  {
    t: "Výsadba dřevin",
    d: "Stromy a keře vybrané pro kamenité svahy a suché klima Českého středohoří.",
  },
];

const duvera = [
  {
    t: "Na klíč i na sezónu",
    d: "Od projektu, zemních prací a stavebních úprav až po pravidelnou údržbu hotové zahrady.",
  },
  {
    t: "Soukromé i firemní",
    d: "Rodinné zahrady pro odpočinek a děti, reprezentativní firemní plochy i veřejná zeleň.",
  },
  {
    t: "Místní tým",
    d: "Známe zdejší svahy, kámen i přísušky. Po celém Ústecku dojedeme bez zbytečných řečí.",
  },
];

export default function Page() {
  return (
    <main id="top" className="nb">
      <header className="nb-nav">
        <a className="nb-mark" href="#top" aria-label="North Garden — úvod">
          <span className="nb-mark-cage" aria-hidden="true" />
          <span className="nb-mark-text">
            North<em>Garden</em>
          </span>
        </a>
        <nav className="nb-nav-links" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
        </nav>
      </header>

      <section className="nb-section nb-hero" aria-labelledby="hero-nadpis">
        <div className="nb-wrap nb-hero-grid">
          <div className="nb-hero-copy">
            <p className="nb-eyebrow">Údržba a realizace zahrad — Ústí nad Labem</p>
            <h1 id="hero-nadpis" className="nb-h1">
              Celá zahrada
              <br />
              <span className="nb-h1-accent">z jedné ruky.</span>
            </h1>
            <p className="nb-lead">
              Zakládáme a udržujeme soukromé i firemní zahrady na svazích nad Ústím
              nad Labem — trávníky, závlahy, jezírka, gabionové stěny i modřínové
              terasy. A pak se o ně staráme sezónu za sezónou.
            </p>
            <div className="nb-actions">
              <a className="nb-btn nb-btn-primary" href="#sluzby">
                Co pro vás uděláme
              </a>
              <a className="nb-btn nb-btn-ghost" href="#onas">
                O nás
              </a>
            </div>
          </div>

          <div className="nb-frame">
            <AiImage
              className="nb-hero-photo"
              src="/hero.webp"
              alt="Zahrada s trávníkem, gabionovou stěnou a dřevěnou terasou na svahu nad Ústím nad Labem"
            />
            <div className="nb-mesh" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="nb-section nb-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="nb-wrap">
          <div className="nb-head">
            <p className="nb-eyebrow">Co umíme — osm řemesel z jedné ruky</p>
            <h2 id="sluzby-nadpis" className="nb-h2">
              Kámen, voda, dřevo a zeleň držené v jednom rámu
            </h2>
          </div>

          <div className="nb-wall">
            <div className="nb-cell nb-cell-photo">
              <AiImage
                className="nb-cell-img nb-parallax"
                src="/section-1.webp"
                alt="Detail gabionové stěny plněné lomovým kamenem u okrasného záhonu"
              />
            </div>
            {sluzby.map((s) => (
              <article className="nb-cell" key={s.t}>
                <span className="nb-cell-node" aria-hidden="true" />
                <h3 className="nb-cell-title">{s.t}</h3>
                <p className="nb-cell-text">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nb-section nb-about" id="onas" aria-labelledby="onas-nadpis">
        <div className="nb-wrap nb-about-grid">
          <div className="nb-frame nb-frame-flat">
            <AiImage
              className="nb-hero-photo nb-parallax"
              src="/section-2.webp"
              alt="Zahradník při sezónní údržbě okrasné zahrady s trávníkem a výsadbou"
            />
            <div className="nb-mesh nb-mesh-static" aria-hidden="true" />
          </div>

          <div className="nb-about-copy">
            <p className="nb-eyebrow">O nás — od Strážek po celé Ústecko</p>
            <h2 id="onas-nadpis" className="nb-h2">
              Zahrada není hotová předáním. Tehdy se o ni teprve začíná pečovat.
            </h2>
            <p className="nb-about-text">
              North Garden zakládá trávníky, jezírka a gabionové stěny — a pak se o ně
              stará dál. Pracujeme na kamenitých svazích Českého středohoří, kde je
              půda tvrdá a léta suchá, a volíme jen taková řešení, která tu opravdu
              vydrží: od automatických závlah po dřeviny, co zvládnou přísušek.
            </p>

            <ul className="nb-trust">
              {duvera.map((d) => (
                <li className="nb-trust-item" key={d.t}>
                  <span className="nb-cell-node" aria-hidden="true" />
                  <div>
                    <h3 className="nb-trust-title">{d.t}</h3>
                    <p className="nb-trust-text">{d.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
