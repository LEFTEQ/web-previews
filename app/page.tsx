import type { CSSProperties } from "react";

export default function Page() {
  const brany = [
    { t: "Posuvné brány", d: "Samonosné a teleskopické — jezdí bez kolejnice v zemi, i tam, kde je málo místa do stran." },
    { t: "Křídlové brány", d: "Klasické i skládací křídla. Kovaná, desková nebo lamelová výplň podle vašeho vjezdu." },
    { t: "Pohony KEY a NICE", d: "Montujeme jako autorizovaný zástupce — dálkové ovládání, fotobuňky, majáček, záložní klíč." },
    { t: "Závory", d: "Pro parkoviště, areály a bytové domy. Rychlé zdvihání, odolné ostravskému počasí." }
  ];

  const vrata = [
    { t: "Garážová vrata KRUŽÍK", d: "Sekční vrata na míru garáže — zateplená, tichá, s pohonem i klikou." },
    { t: "Průmyslová vrata", d: "Sekční a rychloběžná vrata pro haly, sklady a výrobu. Zvládnou stovky cyklů denně." },
    { t: "Rolovací vrata a mříže", n:"Rolovací", d: "Šetří místo pod stropem. Vrata i bezpečnostní mříže na výlohy a vjezdy." },
    { t: "Ocelová vrata a dveře", d: "Tam, kde jde o pevnost a bezpečnost. Svařujeme a osazujeme ve vlastní dílně." }
  ];

  const kroky = [
    { n: "01", t: "Zaměření na místě", d: "Přijedeme, změříme vjezd i napájení a poradíme, co má u vás smysl." },
    { n: "02", t: "Výroba v dílně", d: "Konstrukci svaříme a připravíme přesně na vaše rozměry v Bohumíně." },
    { n: "03", t: "Montáž a zaškolení", d: "Osadíme, seřídíme pohon a ukážeme vám ovládání i ruční odjištění." },
    { n: "04", t: "Servis, když je potřeba", d: "Pohon i mechaniku udržíme v chodu. Servisujeme i brány, které jsme nedělali my." }
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="brand" href="#uvod" aria-label="KIRK — zámečnictví Ostrava">
          <span className="brand-mark" aria-hidden="true">▚</span>
          <span className="brand-word">KIRK</span>
          <span className="brand-sub">zámečnictví · Ostrava</span>
        </a>
        <nav className="nav-links" aria-label="Hlavní">
          <a href="#brany">Brány</a>
          <a href="#vrata">Vrata</a>
          <a href="#postup">Jak to děláme</a>
          <a className="nav-tel" href="tel:+420602837153">+420 602 837 153</a>
        </nav>
      </header>

      <section id="uvod" className="hero">
        <div className="hero-img-wrap">
          <img className="hero-img" src="/hero.webp" alt="Automatická vjezdová brána vyrobená firmou KIRK" />
          <div className="hero-scrim" aria-hidden="true" />
        </div>
        <div className="hero-body">
          <p className="eyebrow">Ostrava · od roku 1991</p>
          <h1 className="hero-h">
            Brány a vrata,<br />
            <span className="hero-em">co jezdí ještě za dvacet let.</span>
          </h1>
          <p className="hero-lede">
            Svařujeme, montujeme a servisujeme automatické vjezdové brány, průmyslová
            a garážová vrata. Přes třicet let ve stejné dílně — a stejná ruka na svářečce.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420602837153">Zavolat na dílnu</a>
            <a className="btn btn-ghost" href="#brany">Prohlédnout si výrobu</a>
          </div>
          <dl className="hero-facts">
            <div><dt>Založeno</dt><dd>1991</dd></div>
            <div><dt>Pohony</dt><dd>KEY · NICE</dd></div>
            <div><dt>Dílna</dt><dd>Bohumín-Vrbice</dd></div>
          </dl>
        </div>
      </section>

      <section id="brany" className="blk">
        <div className="blk-head">
          <p className="eyebrow">Vjezdy a pozemky</p>
          <h2 className="blk-h">Brány, které se otevřou dřív, než dojedete</h2>
          <p className="blk-lede">
            Posuvné, křídlové, se závorou nebo bez. Konstrukci svaříme, pohon
            nastavíme a naučíme celou rodinu, jak s ním zacházet.
          </p>
        </div>
        <div className="split">
          <ul className="cards">
            {brany.map((it, i) => (
              <li className="card" key={it.t} style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties}>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </li>
            ))}
          </ul>
          <figure className="fig">
            <img src="/section-1.webp" alt="Detail posuvné brány s pohonem od firmy KIRK" />
            <figcaption>Posuvná brána s pohonem — montáž KIRK, Ostravsko</figcaption>
          </figure>
        </div>
      </section>

      <section id="vrata" className="blk blk-alt">
        <div className="blk-head">
          <p className="eyebrow">Garáže, haly, sklady</p>
          <h2 className="blk-h">Vrata na míru dílně i garáži</h2>
          <p className="blk-lede">
            Jako partner značky KRUŽÍK dodáváme sekční vrata i řešení pro provoz,
            kde se vraty projíždí každou minutu.
          </p>
        </div>
        <div className="split split-rev">
          <figure className="fig">
            <img src="/section-2.webp" alt="Garážová a průmyslová sekční vrata montovaná firmou KIRK" />
            <figcaption>Sekční vrata KRUŽÍK — dodávka a montáž</figcaption>
          </figure>
          <ul className="cards">
            {vrata.map((it, i) => (
              <li className="card" key={it.t} style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties}>
                <h3>{it.t}</h3>
                <p>{it.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="postup" className="blk">
        <div className="blk-head">
          <p className="eyebrow">Od poptávky po servis</p>
          <h2 className="blk-h">Čtyři kroky, žádné překvapení</h2>
        </div>
        <ol className="steps">
          {kroky.map((k) => (
            <li className="step" key={k.n}>
              <span className="step-n" aria-hidden="true">{k.n}</span>
              <div>
                <h3>{k.t}</h3>
                <p>{k.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="trust">
          <p className="trust-quote">
            „Bránu nám KIRK dělal před osmnácti lety. Loni jsme volali kvůli pohonu —
            přijeli druhý den a seřídili to na počkání.“
          </p>
          <p className="trust-who">— majitel rodinného domu, Ostrava-Poruba</p>
          <div className="trust-meta">
            <div>
              <span className="trust-k">Provozovna</span>
              <span className="trust-v">Ostravská 9, Bohumín 5-Vrbice</span>
            </div>
            <div>
              <span className="trust-k">Jednatel</span>
              <span className="trust-v">Zdeněk Novotný · novotny@kirk.cz</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
