import type { CSSProperties } from "react";

export default function Page() {
  const stupne = [
    {
      n: "01",
      typ: "Samonosné schody",
      popis:
        "Ocelová nebo dřevěná konstrukce nesená bočnicemi. Bez opory ve zdi, čisté linie, vzduch pod stupni. Řešíme pro haly i galerie v podkroví.",
      material: "Ocel · Dub · Jasan",
    },
    {
      n: "02",
      typ: "Schody na míru do zdi",
      popis:
        "Stupně kotvené do nosné stěny nebo zabetonovaného pásu. Nejúspornější řešení pro úzké chodby v brněnských bytech i rekonstrukcích.",
      material: "Beton · Masiv · Kov",
    },
    {
      n: "03",
      typ: "Točité a vřetenové",
      popis:
        "Když je půdorys malý, řeší to spirála. Přesný výřez stupňů, vřeteno na míru, zábradlí ohýbané v naší dílně na Mlýnské.",
      material: "Ocel · Nerez · Dub",
    },
    {
      n: "04",
      typ: "Zábradlí a doplnění",
      popis:
        "Nová madla, výplně z tyčoviny nebo skla, výměna opotřebených stupňů. Doděláme i schodiště, které začal někdo jiný.",
      material: "Nerez · Sklo · Dřevo",
    },
  ];

  const kroky = [
    {
      k: "Zaměření u vás",
      t: "Přijedeme po Brně i okolí, změříme prostupy a výšku podlaží na milimetr. Řekneme rovnou, co jde a co je lepší jinak.",
    },
    {
      k: "Návrh a cena",
      t: "Dostanete vizualizaci stupnice, výběr materiálu a pevnou cenu. Bez skrytých položek za kotvení nebo dovoz.",
    },
    {
      k: "Dílna na Mlýnské",
      t: "Bočnice, vřeteno i zábradlí vyrábíme sami. Dřevo sušíme, ocel svařujeme a lakujeme pod jednou střechou.",
    },
    {
      k: "Montáž za den",
      t: "Osadíme, seřídíme stupně tak, aby nevrzaly, a uklidíme po sobě. Vy nastoupíte první krok ještě týž večer.",
    },
  ];

  return (
    <main className="stad">
      <header className="stad-nav">
        <a className="stad-mark" href="#" aria-label="Schody Stadler, úvod">
          <span className="stad-mark-word">Stadler</span>
          <span className="stad-mark-tag">SCHODY · BRNO</span>
        </a>
        <nav className="stad-links" aria-label="Hlavní navigace">
          <a href="#typy">Typy schodišť</a>
          <a href="#postup">Jak to děláme</a>
          <a href="#dilna">Dílna</a>
        </nav>
        <a className="stad-call" href="tel:+420608126571">
          Zavolat do dílny
        </a>
      </header>

      <section className="stad-hero" aria-labelledby="hero-nadpis">
        <div className="stad-hero-text">
          <p className="stad-eyebrow">Schodiště na míru · dílna Mlýnská 68</p>
          <h1 id="hero-nadpis">
            Jeden stupeň
            <span className="stad-riser"> za druhým,</span>
            <span className="stad-tread">až úplně nahoru.</span>
          </h1>
          <p className="stad-lede">
            Navrhujeme a vyrábíme schody pro brněnské byty, rodinné domy i
            galerie. Dřevo, ocel i nerez zpracujeme ve vlastní dílně a osadíme
            tak, aby držely desítky let a nevrzaly.
          </p>
          <div className="stad-hero-cta">
            <a className="stad-btn" href="tel:+420608126571">
              Domluvit zaměření
            </a>
            <a className="stad-btn-ghost" href="#typy">
              Prohlédnout typy schodišť
            </a>
          </div>
        </div>
        <figure className="stad-hero-media">
          <img
            src="/hero.webp"
            alt="Schodiště na míru vyrobené v dílně Schody Stadler v Brně"
            width={960}
            height={1200}
          />
          <figcaption className="stad-riseband">
            <span>Výška stupně</span>
            <strong>17,3 cm</strong>
            <span>pohodlný krok podle normy</span>
          </figcaption>
        </figure>
      </section>

      <section className="stad-typy" id="typy" aria-labelledby="typy-nadpis">
        <div className="stad-sec-head">
          <p className="stad-eyebrow">Co u nás pořídíte</p>
          <h2 id="typy-nadpis">Čtyři cesty nahoru</h2>
          <p className="stad-sec-lede">
            Půdorys, výška podlaží a materiál rozhodnou, které schodiště je pro
            vás. Poradíme rovnou při zaměření — každé z nich vyrobíme v Brně.
          </p>
        </div>
        <ol className="stad-grid">
          {stupne.map((s, i) => (
            <li
              className="stad-card"
              key={s.n}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="stad-card-num" aria-hidden="true">
                {s.n}
              </span>
              <h3>{s.typ}</h3>
              <p>{s.popis}</p>
              <p className="stad-card-mat">{s.material}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="stad-dilna" id="dilna" aria-labelledby="dilna-nadpis">
        <figure className="stad-dilna-media">
          <img
            src="/section-1.webp"
            alt="Truhlář v dílně Schody Stadler opracovává dubové stupně"
            width={880}
            height={640}
          />
        </figure>
        <div className="stad-dilna-text">
          <p className="stad-eyebrow">Proč zrovna my</p>
          <h2 id="dilna-nadpis">Vyrobeno na Mlýnské, ne z katalogu</h2>
          <p>
            Ve vlastní dílně sušíme dubové a jasanové fošny, svařujeme ocelové
            bočnice a ohýbáme nerezová madla. Nenakupujeme hotové díly — proto
            sedne stupnice přesně do vašeho prostupu a odstín dřeva ladí s
            podlahou.
          </p>
          <dl className="stad-fakta">
            <div>
              <dt>Od kdy</dt>
              <dd>Schody děláme v Brně přes 20 let</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Mlýnská 68, 602 00 Brno</dd>
            </div>
            <div>
              <dt>Záruka</dt>
              <dd>5 let na konstrukci i montáž</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="stad-postup" id="postup" aria-labelledby="postup-nadpis">
        <div className="stad-sec-head">
          <p className="stad-eyebrow">Od telefonu k prvnímu kroku</p>
          <h2 id="postup-nadpis">Čtyři stupně naší práce</h2>
        </div>
        <ol className="stad-postup-list">
          {kroky.map((k, i) => (
            <li key={k.k} style={{ "--i": i } as CSSProperties}>
              <span className="stad-postup-num">{i + 1}</span>
              <div>
                <h3>{k.k}</h3>
                <p>{k.t}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="stad-postup-media">
          <img
            src="/section-2.webp"
            alt="Hotové schodiště Schody Stadler osazené v rodinném domě"
            width={1200}
            height={620}
          />
          <figcaption>
            Hotové schodiště osazené u zákazníka v Brně — Řečkovice
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
