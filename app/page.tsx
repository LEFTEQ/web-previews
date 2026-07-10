import type { CSSProperties } from "react";

const services = [
  {
    idx: "01 · PRŮMYSL",
    title: "Průmyslové elektroinstalace",
    desc: "Silnoproud pro výrobní haly, rozvodny a technologické celky. Projekt, montáž i revize v jedné ruce — od přívodu po zapojení strojů.",
  },
  {
    idx: "02 · MaR",
    title: "Měření a regulace",
    desc: "Řídicí systémy pro vzduchotechniku, vytápění a čerpadla. Sledujeme teplotu, tlak i spotřebu a držíme provoz v přesně nastavených mezích.",
  },
  {
    idx: "03 · DOMY",
    title: "Elektroinstalace rodinných domů",
    desc: "Rozvody, rozvaděče, zásuvkové okruhy i chytré ovládání světel a topení. Čistá práce, popsané jističe a předání s revizní zprávou.",
  },
  {
    idx: "04 · ARC",
    title: "Řídicí systém nafukovacích hal ARC",
    desc: "Vlastní systém pro dálkový dohled nad tlakem, ventilátory a teplotou v hale. Ovládání z mobilu, alarmy při odchylce a záznam provozu.",
  },
  {
    idx: "05 · BAZÉNY",
    title: "Technologie bazénů a wellness",
    desc: "Elektro pro filtraci, ohřev, sauny a vířivky. Zapojení čerpadel a dávkovačů tak, aby voda i vzduch jely spolehlivě a bezpečně.",
  },
];

const refs = [
  {
    quote:
      "Instalaci provedli precizně a ve vysoké kvalitě. Profesionálním přístupem vždy vyšli vstříc i radou při řešení detailních úprav investora.",
    who: "TJ Sokol Brno-Obřany-Maloměřice",
  },
  {
    quote:
      "Veškeré práce byly provedeny řádně, bez závad a nedodělků. Firmu Calypso Group tímto doporučujeme pro budoucí realizace.",
    who: "SK Sokol Brozany, z. s.",
  },
  {
    quote:
      "Výborný přístup, rychlé a kvalitní provedení. Plnění bylo poskytnuto řádně a včas přesně podle zadání.",
    who: "Tenisová akademie Čelákovice, s. r. o.",
  },
  {
    quote:
      "Rychlé a kvalitní provedení víceúčelového sportoviště. S výsledkem i průběhem prací jsme byli spokojeni.",
    who: "Město Kostelec nad Orlicí",
  },
];

export default function Page() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="mark" href="#top" aria-label="Calypso Group – elektroinstalace">
            CALYPSO<b>·</b>ELEKTRO<span className="amp">MaR</span>
          </a>
          <nav className="nav-links" aria-label="Hlavní">
            <a href="#sluzby">Služby</a>
            <a href="#onas">O nás</a>
            <a href="#reference">Reference</a>
          </nav>
          <a className="nav-phone" href="tel:+420734230201">
            +420 734 230 201
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-h">
          <img
            className="hero-img"
            src="/hero.webp"
            alt="Elektroinstalace a rozvaděč v realizaci Calypso Group v Pardubicích"
          />
          <div className="wrap hero-inner">
            <span className="hero-eyebrow reveal">Elektro · MaR · Pardubice</span>
            <h1 id="hero-h" className="reveal d1">
              Ať to všechno <span className="live">běží pod napětím</span>
            </h1>
            <p className="lead reveal d2">
              Zapojujeme haly, výrobní provozy i rodinné domy — od silnoproudu
              přes rozvaděče až po měření a regulaci. A když je hala nafukovací,
              hlídá ji náš vlastní systém ARC.
            </p>
            <div className="hero-cta reveal d2">
              <a className="btn btn-primary" href="#sluzby">
                Co umíme zapojit
              </a>
              <a className="btn btn-ghost" href="tel:+420734230201">
                Zavolat elektro oddělení
              </a>
            </div>

            <div className="phases reveal d3" aria-label="Průběh zakázky">
              <div className="phase">
                <span className="no" aria-hidden="true">1</span>
                <div>
                  <h4>Projekt &amp; návrh</h4>
                  <p>Zaměříme provoz, spočítáme příkony a navrhneme rozvody.</p>
                </div>
              </div>
              <div className="phase">
                <span className="no" aria-hidden="true">2</span>
                <div>
                  <h4>Montáž pod napětím</h4>
                  <p>Kabeláž, rozvaděče, regulace — čistě a podle normy.</p>
                </div>
              </div>
              <div className="phase">
                <span className="no" aria-hidden="true">3</span>
                <div>
                  <h4>Revize &amp; předání</h4>
                  <p>Odzkoušíme, popíšeme jističe a předáme revizní zprávu.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="sluzby" aria-labelledby="sluzby-h">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Co zapojujeme</span>
              <h2 id="sluzby-h">Od přívodu po poslední zásuvku</h2>
              <p>
                Elektro sekce Calypso Group v pardubických Polabinách. Silnoproud,
                slaboproud i řídicí systémy — pro sportoviště, průmysl i domácnosti.
              </p>
            </div>

            <div className="circuit">
              {services.map((s) => (
                <div className="circuit-row" key={s.idx} tabIndex={0}>
                  <span className="idx">{s.idx}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec about" id="onas" aria-labelledby="onas-h">
          <div className="wrap">
            <div className="about-grid">
              <div className="about-media">
                <img
                  src="/section-1.webp"
                  alt="Elektroinstalační práce Calypso Group – rozvody a zapojení technologie"
                />
                <span className="tag">Sídlo: Fáblovka 520, Pardubice</span>
              </div>
              <div className="about-copy">
                <span className="kicker">Kdo to zapojuje</span>
                <h2 id="onas-h">Elektrikáři, kteří rozumí celé stavbě</h2>
                <p>
                  Calypso Group staví sportovní haly, bazény i nerezové
                  technologie od roku 1995 — a elektro k tomu vždycky patřilo.
                  Díky tomu neděláme jen kabely: víme, jak je propojit
                  s halou, filtrací i vzduchotechnikou, aby celek fungoval.
                </p>
                <p>
                  Pracujeme z Pardubic po celé ČR i v zahraničí. Zákazníkem je
                  hotel, městské sportoviště, výrobní provoz i majitel rodinného
                  domu — a každý dostane stejně čistou práci a papíry v pořádku.
                </p>

                <div className="stats">
                  <div className="stat">
                    <b>1995</b>
                    <span>rok, od kterého zapojujeme</span>
                  </div>
                  <div className="stat">
                    <b>ARC</b>
                    <span>vlastní řídicí systém hal</span>
                  </div>
                  <div className="stat">
                    <b>ČR + svět</b>
                    <span>kde stojí naše realizace</span>
                  </div>
                  <div className="stat">
                    <b>Revize</b>
                    <span>zpráva ke každému předání</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="refs" id="reference">
              <h3>Co říkají zadavatelé</h3>
              <div className="ref-grid">
                {refs.map((r) => (
                  <figure className="ref" key={r.who}>
                    <blockquote>{r.quote}</blockquote>
                    <cite>— {r.who}</cite>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
