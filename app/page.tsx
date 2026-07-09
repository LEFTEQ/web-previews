import type { CSSProperties } from "react";

export default function Page() {
  const receptury = [
    {
      trida: "C 12/15",
      nazev: "Podkladní a výplňový beton",
      popis: "Základ pod základ. Vyrovnání dna výkopu, podkladní vrstvy a zásypy, kde nejde o nosnou pevnost, ale o rovnou a spolehlivou plochu.",
      pouziti: "podkladní vrstvy · výplně · zásypy",
    },
    {
      trida: "C 20/25",
      nazev: "Základové pasy a desky rodinných domů",
      popis: "Nejžádanější třída pro liberecké stavby. Základové pasy, desky a stropy tam, kde se staví na jistotu podle statika.",
      pouziti: "základy · desky · stropy",
    },
    {
      trida: "C 25/30 XC2",
      nazev: "Vodostavební a mrazuvzdorný beton",
      popis: "Do vlhka a mrazu jizerskohorské zimy. Sklepy, opěrné zdi a konstrukce ve styku se zeminou a vodou, ošetřené proti karbonataci.",
      pouziti: "sklepy · opěrné zdi · nádrže",
    },
    {
      trida: "C 30/37 XF4",
      nazev: "Pohledový a dopravní beton",
      popis: "Nejvyšší nároky: pojezdové plochy, průmyslové podlahy a pohledové konstrukce, které odolají soli a cyklům zmrznutí a rozmrznutí.",
      pouziti: "podlahy · zpevněné plochy · mosty",
    },
  ];

  const fakta = [
    { cislo: "6.30", popis: "od půl sedmé ráno nakládáme první domíchávače v Liberci a okolí" },
    { cislo: "90 min", popis: "garantovaná doba dodávky čerstvé směsi od výjezdu z betonárny" },
    { cislo: "9 m³", popis: "objem jednoho domíchávače, s pumpou dosáhneme přes střechu i do dvora" },
  ];

  return (
    <main>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="wordmark" href="#" aria-label="FRISCHBETON Liberec, úvod">
            <span className="frisch">FRISCH</span><span className="beton">BETON</span>
            <span className="dot" aria-hidden="true" />
          </a>
          <div className="topbar-meta">
            Betonárna Liberec · <a href="tel:+420222868264">+420&nbsp;222&nbsp;868&nbsp;264</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy hero-copy-pad">
            <p className="hero-eyebrow reveal">Transportbeton · Liberec a Jizerské hory</p>
            <h1 className="hero-title reveal d1">
              Čerstvý beton,<br />
              <span className="zluta">který dorazí</span><br />
              <span className="outline">načas</span>
            </h1>
            <p className="hero-lead reveal d2">
              Namícháme přesnou třídu podle vašeho projektu a domíchávačem ji přivezeme
              na stavbu v Liberci a okolí — čerstvou, měřitelnou, se zkušebními krychlemi
              a dodacím listem ke každé dodávce.
            </p>
            <div className="hero-actions reveal d3">
              <a className="btn btn-primary" href="tel:+420222868264">Zavolat a objednat beton</a>
              <a className="btn btn-ghost" href="mailto:office@frischbeton.eu">Poslat poptávku</a>
            </div>
          </div>
          <div className="hero-media">
            <img src="/hero.webp" alt="Domíchávač lije čerstvý beton z výložníku čerpadla na staveniště" />
            <span className="hero-slump" aria-hidden="true">sednutí kužele S3 · zrno 16 mm</span>
          </div>
        </div>
      </section>

      {/* RECEPTURY / SLUŽBY */}
      <section className="sekce wrap" aria-labelledby="receptury-nadpis">
        <div className="sekce-head">
          <div>
            <span className="sekce-eyebrow">Katalog receptur — dle ČSN EN 206</span>
            <h2 className="sekce-title" id="receptury-nadpis">Vyberte třídu, zbytek zařídíme</h2>
          </div>
          <p className="sekce-note">
            Každou směs mícháme na míru pevnostní třídě a prostředí. Nevíte, co potřebujete?
            Zavolejte a poradíme podle projektu.
          </p>
        </div>

        <div className="recept-list">
          {receptury.map((r) => (
            <article className="recept" key={r.trida}>
              <div className="recept-trida">{r.trida}</div>
              <div className="recept-body">
                <h3>{r.nazev}</h3>
                <p>{r.popis}</p>
              </div>
              <div className="recept-use">{r.pouziti}</div>
            </article>
          ))}
        </div>
      </section>

      {/* DŮVĚRA / O NÁS */}
      <section className="duvera" aria-labelledby="o-nas-nadpis">
        <div className="sekce wrap">
          <div className="duvera-grid">
            <div className="duvera-media">
              <img src="/section-1.webp" alt="Betonárna FRISCHBETON — mísící věž a zásobníky kameniva" />
              <span className="duvera-tag">provoz Liberec</span>
            </div>
            <div className="duvera-copy">
              <span className="sekce-eyebrow">O nás — beton pod Ještědem</span>
              <h2 id="o-nas-nadpis">Zkušená betonárna se zázemím koncernu</h2>
              <p>
                FRISCHBETON patří k největším výrobcům transportbetonu v Česku a je
                součástí stavebního koncernu <strong>STRABAG</strong>. Pro Liberecko to
                znamená jedno: <strong>sílu velké firmy s dojezdem místní betonárny</strong>.
              </p>
              <p>
                Míchání hlídá automatika, každou dávku doprovází dodací list a na přání
                odebíráme zkušební krychle pro protokol o pevnosti. Vy máte jistotu, že
                v základech je přesně to, co jste objednali.
              </p>
              <ul className="fakta">
                {fakta.map((f) => (
                  <li key={f.popis}>
                    <span className="cislo">{f.cislo}</span>
                    <span className="popis">{f.popis}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
