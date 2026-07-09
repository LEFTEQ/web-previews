import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Klasické řasa po řase",
      popis: "Na každou vaši přirozenou řasu nasadím jednu umělou. Výsledek nikdo nepozná — jen budete vypadat odpočatě. Ideální první krok, když s prodlužováním začínáte.",
      cas: "120 min",
      cena: "990 Kč"
    },
    {
      cislo: "02",
      nazev: "Objemové 2D–4D",
      popis: "Na jednu řasu ručně vytvořím jemný vějířek z několika ultratenkých vláken. Pohled zhoustne, ale zůstane lehký. Nejčastější volba mých klientek.",
      cas: "150 min",
      cena: "1 290 Kč"
    },
    {
      cislo: "03",
      nazev: "Doplnění (do 3 týdnů)",
      popis: "Řasy dorůstají a vypadávají v přirozeném cyklu. Přijďte na doplnění a udržíte plný efekt bez nové aplikace celé sady.",
      cas: "75 min",
      cena: "690 Kč"
    },
    {
      cislo: "04",
      nazev: "Lash lift & barvení",
      popis: "Bez nastavování — jen vaše vlastní řasy natočené do dokonalého oblouku a ztmavené. Vydrží šest až osm týdnů.",
      cas: "60 min",
      cena: "790 Kč"
    }
  ];

  return (
    <main className="v-main">
      <header className="v-topbar">
        <a className="v-wordmark" href="#top" aria-label="Beauty Studio Viktoria — domů">
          <span className="v-wordmark-mark" aria-hidden="true">V</span>
          <span className="v-wordmark-text">
            <span className="v-wordmark-name">Viktoria</span>
            <span className="v-wordmark-sub">lash studio · Praha</span>
          </span>
        </a>
        <a className="v-topcta" href="#objednat">Rezervovat termín</a>
      </header>

      <section className="v-hero" id="top">
        <div className="v-hero-media">
          <img
            src="/hero.webp"
            alt="Detail oka klientky s prodlouženými řasami ve studiu Viktoria"
            className="v-hero-img"
          />
          <div className="v-hero-veil" aria-hidden="true" />
        </div>

        <div className="v-hero-inner">
          <p className="v-eyebrow">Lublaňská 37 · Praha 2 · Vinohrady</p>
          <h1 className="v-hero-title">
            Řasy, které vydrží<br />
            od&nbsp;probuzení<br />
            <em>až po&nbsp;půlnoc.</em>
          </h1>
          <p className="v-hero-lead">
            Ruční aplikace řasa po řase i objemové vějířky. Bez nalepovacích trsů, bez
            slepených koutků — jen tvar, který sedne přesně vašemu oku.
          </p>
          <div className="v-hero-actions">
            <a className="v-btn v-btn-primary" href="#objednat">Objednat se online</a>
            <a className="v-btn v-btn-ghost" href="#sluzby">Prohlédnout ceník</a>
          </div>
        </div>

        <ul className="v-hero-facts">
          <li><b>7&nbsp;let</b><span>u jednoho křesla</span></li>
          <li><b>0,03&nbsp;mm</b><span>nejjemnější vlákno</span></li>
          <li><b>2–4 týdny</b><span>mezi doplněními</span></li>
        </ul>
      </section>

      <section className="v-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="v-section-head">
          <p className="v-eyebrow v-eyebrow-dark">Ceník &amp; služby</p>
          <h2 id="sluzby-h" className="v-h2">Vyberte si podle toho, jak chcete vypadat ráno v zrcadle.</h2>
          <p className="v-section-note">
            Ceny jsou konečné, včetně odličovacího balíčku na cestu domů. Termín na doplnění
            si můžeme domluvit rovnou na místě.
          </p>
        </div>

        <ol className="v-list">
          {sluzby.map((s) => (
            <li key={s.cislo} className="v-item">
              <span className="v-item-num" aria-hidden="true">{s.cislo}</span>
              <div className="v-item-body">
                <h3 className="v-item-name">{s.nazev}</h3>
                <p className="v-item-desc">{s.popis}</p>
              </div>
              <div className="v-item-meta">
                <span className="v-item-time">{s.cas}</span>
                <span className="v-item-price">{s.cena}</span>
              </div>
            </li>
          ))}
        </ol>

        <figure className="v-service-figure">
          <img
            src="/section-1.webp"
            alt="Pinzeta odděluje jednotlivé řasy během aplikace v Beauty Studiu Viktoria"
            className="v-figure-img"
          />
          <figcaption>Každý vějířek zakládám ručně pinzetou — proto to trvá, a proto to drží.</figcaption>
        </figure>
      </section>

      <section className="v-about" id="o-mne" aria-labelledby="about-h">
        <figure className="v-about-figure">
          <img
            src="/section-2.webp"
            alt="Prosvětlené pracoviště Beauty Studia Viktoria s pohovkou pro klientky"
            className="v-figure-img"
          />
        </figure>

        <div className="v-about-text">
          <p className="v-eyebrow v-eyebrow-dark">Kdo se o vaše oči postará</p>
          <h2 id="about-h" className="v-h2">Jedno křeslo, jedny ruce, žádný spěch.</h2>
          <p className="v-about-p">
            Jmenuji se Viktoria a řasám se věnuju od roku 2018. Ve studiu na Vinohradech
            pracuju sama — nedělám dvě klientky najednou a neženu vás z křesla. Před každou
            aplikací se domluvíme na tvaru a délce, které sednou vašemu oku a životnímu stylu.
          </p>

          <ul className="v-quotes">
            <li>
              <p>„Konečně mi někdo řekl, že mám krátké řasy a přizpůsobil tomu délku. Drží tři týdny a pořád to vypadá přirozeně.“</p>
              <cite>— Tereza, stálá klientka</cite>
            </li>
            <li>
              <p>„Chodila jsem jinam, kde mi řasy pálily oči. U Viktorie žádné lepidlo v koutku, žádné slzení. Cítím rozdíl.“</p>
              <cite>— Markéta, Praha 3</cite>
            </li>
          </ul>

          <dl className="v-info">
            <div><dt>Kde</dt><dd>Lublaňská 37, Praha 2</dd></div>
            <div><dt>Kdy</dt><dd>Po–Pá 9–19, So po domluvě</dd></div>
            <div><dt>Platba</dt><dd>Kartou i hotově</dd></div>
          </dl>
        </div>
      </section>
    </main>
  );
}
