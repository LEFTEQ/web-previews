import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="tr">
      {/* HERO */}
      <header className="tr-nav">
        <a className="tr-mark" href="#" aria-label="František Trávník — tesařství">
          <span className="tr-mark-a">TRÁVNÍK</span>
          <span className="tr-mark-b">tesařské práce · Svatava</span>
        </a>
        <nav className="tr-menu" aria-label="Hlavní navigace">
          <a href="#prace">Co stavíme</a>
          <a href="#o-nas">O nás</a>
          <a className="tr-call" href="tel:+420000000000">Zavolat tesaři</a>
        </nav>
      </header>

      <section className="tr-hero">
        <div className="tr-hero-copy">
          <p className="tr-eyebrow">Podlesí 153 · 357 03 Svatava</p>
          <h1 className="tr-h1">
            Krov, který <em>drží</em> generace.
          </h1>
          <p className="tr-lede">
            Tesařská dílna Františka Trávníka. Ručně tesané krovy, dřevěné
            konstrukce střech a přístřešky ze smrku a modřínu — poctivé spoje,
            žádné zkratky. Na Sokolovsku už přes dvacet let.
          </p>
          <div className="tr-hero-actions">
            <a className="tr-btn" href="tel:+420000000000">Zavolat tesaři</a>
            <a className="tr-btn-ghost" href="#prace">Prohlédnout práci</a>
          </div>
          <dl className="tr-facts">
            <div>
              <dt>Dřevo</dt>
              <dd>smrk · modřín · dub</dd>
            </div>
            <div>
              <dt>Spoje</dt>
              <dd>tesané, ne jen šroubované</dd>
            </div>
            <div>
              <dt>Kraj</dt>
              <dd>Svatava a okolí</dd>
            </div>
          </dl>
        </div>
        <figure className="tr-hero-fig">
          <img
            src="/hero.webp"
            alt="Ručně tesaný dřevěný krov střechy od Františka Trávníka"
            className="tr-hero-img"
          />
          <figcaption>Vazba krovu — každý spoj sedí na milimetr.</figcaption>
        </figure>
      </section>

      {/* SLUŽBY */}
      <section id="prace" className="tr-section">
        <div className="tr-section-head">
          <p className="tr-eyebrow">Řemeslo</p>
          <h2 className="tr-h2">Co pro vás otešeme</h2>
          <p className="tr-section-lede">
            Od nosného krovu po pohledový trámový strop. Přijedeme, zaměříme,
            navrhneme řešení k vašemu domu — a postavíme to tak, aby to přežilo
            i vnoučata.
          </p>
        </div>

        <ol className="tr-services">
          <li>
            <span className="tr-num">01</span>
            <h3>Krovy a konstrukce střech</h3>
            <p>
              Nové krovy i výměna prohnilých částí. Vaznicové i hambálkové
              soustavy, tesané spoje, impregnace dřeva. Připravíme střechu
              pod pokrývku i zateplení.
            </p>
          </li>
          <li>
            <span className="tr-num">02</span>
            <h3>Přístřešky, pergoly a altány</h3>
            <p>
              Zastřešení stání pro auto, terasy a zahradní altány z masivního
              dřeva. Kotvení do betonu, ošetření proti dešti, čisté pohledové
              spoje.
            </p>
          </li>
          <li>
            <span className="tr-num">03</span>
            <h3>Trámové stropy a podbití</h3>
            <p>
              Pohledové stropy z hoblovaných trámů, dřevěné podbití přesahů a
              obklady štítů. Renovace starých trámů ve staveních i chalupách.
            </p>
          </li>
          <li>
            <span className="tr-num">04</span>
            <h3>Bednění a záklop pod střechu</h3>
            <p>
              Prkenné záklopy, latě a kontralatě, celoplošné bednění pod plech
              i šindel. Odvětrání a paropropustné fólie tam, kde mají být.
            </p>
          </li>
        </ol>

        <figure className="tr-band">
          <img
            src="/section-1.webp"
            alt="Rozestavěná dřevěná konstrukce střechy s tesanými trámy"
          />
        </figure>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section id="o-nas" className="tr-about">
        <figure className="tr-about-fig">
          <img
            src="/section-2.webp"
            alt="František Trávník při tesařské práci na krovu"
          />
        </figure>
        <div className="tr-about-copy">
          <p className="tr-eyebrow">O dílně</p>
          <h2 className="tr-h2">Jeden tesař, který u toho zůstane celý den</h2>
          <p>
            František Trávník tesaří na Sokolovsku od začátku. Přijede sám nebo
            s parťákem, práci vede od zaměření po poslední trám — nedělá se tu
            přes tři subdodavatele. Co slíbí do telefonu, to na střeše i drží.
          </p>
          <ul className="tr-checks">
            <li>Zaměření a cenová nabídka zdarma, bez závazku.</li>
            <li>Dřevo ze sušených řeziv, ošetřené proti hnilobě a hmyzu.</li>
            <li>Práce po sobě uklizená — odvezeme odpad i piliny.</li>
            <li>Reference u vás v okolí — rádi ukážeme, co jsme stavěli.</li>
          </ul>
          <div className="tr-quote">
            <p>
              „Krov od pana Trávníka stojí osmnáct let a ani prasklina.
              Přijel, poradil a udělal to napoprvé pořádně.“
            </p>
            <cite>— majitel chalupy, Kraslice</cite>
          </div>
          <p className="tr-place">
            Najdete nás na adrese <strong>Podlesí 153, 357 03 Svatava</strong>.
            Jezdíme po Svatavě, Sokolově, Kraslicích i dál po kraji.
          </p>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
// keep unused import type from tripping tree-shaking noise
void ({} as CSSProperties);
