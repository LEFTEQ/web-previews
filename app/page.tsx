import type { CSSProperties } from 'react';

export default function Page() {
  const services = [
    {
      tag: 'Řada 01 — Montáž',
      title: 'Ploty z pletiva',
      body: 'Poplastované i pozinkované pletivo napnuté na míru pozemku. Rychlé, poctivé oplocení zahrady, které vydrží počasí i roky.',
      mat: ['Poplast', 'Zinek', 'Napínací drát', 'Sloupky'],
    },
    {
      tag: 'Řada 02 — Montáž',
      title: 'Plotové dílce',
      body: 'Svařované 3D panely a průmyslové dílce s betonovými podhrabovými deskami. Pevná linie kolem domu i areálu.',
      mat: ['3D panel', 'Podhrabová deska', 'Svařenec'],
    },
    {
      tag: 'Řada 03 — Montáž',
      title: 'Brány a branky',
      body: 'Křídlové i posuvné brány, samonosné pojezdy a pohony na dálkové ovládání. Vjezd, který ráno pustí auto ven bez řešení.',
      mat: ['Posuvná', 'Křídlová', 'Pohon', 'Branka'],
    },
  ];

  const specs = [
    { k: 'Provoz od', v: <>2005<br /><small>Brno &amp; okolí</small></> },
    { k: 'Norma jakosti', v: <>ISO 9001<br /><small>EN ISO 9001:2016</small></> },
    { k: 'Výroba i montáž', v: <>Vlastní<br /><small>party na oplocení</small></> },
    { k: 'Sklad', v: <>Modřice<br /><small>sjezd z D52</small></> },
  ];

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>Volejte <b>+420 603 820 009</b> &nbsp;·&nbsp; <b>info@ajploty.cz</b></span>
          <span className="tb-loc">Brněnská 1066, Modřice u Brna — velkoobchod i maloobchod</span>
        </div>
      </div>

      <nav className="nav" aria-label="Hlavní">
        <div className="wrap">
          <a className="brand" href="#" aria-label="A+J ploty, domů">
            <span className="plus">A+</span><span className="aj">J</span>
            <span className="word">Ploty</span>
          </a>
          <ul className="navlinks">
            <li><a href="#sluzby">Co stavíme</a></li>
            <li><a href="#material">Materiál</a></li>
            <li><a href="#o-nas">O nás</a></li>
          </ul>
          <a className="nav-cta" href="#poptavka">Nezávazná poptávka</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-media">
          <img src="/hero.webp" alt="Montáž nového oplocení rezidenčního domu — plotové pole napnuté mezi sloupky" />
        </div>
        <div className="hero-inner">
          <div className="wrap">
            <p className="hero-eyebrow">Oplocení na míru · Brno od roku 2005</p>
            <h1>
              Plot je první,<br />
              <span className="line2">co lidé z ulice vidí.</span>
            </h1>
            <p className="lede">
              Postavíme ho rovně, napevno a tak, aby ladil s domem. Pletivo, panely, brány s pohonem —
              zaměříme, dovezeme z vlastního skladu v Modřicích a namontujeme naší partou.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#poptavka">Chci zaměřit pozemek</a>
              <a className="btn btn-ghost" href="#sluzby">Co všechno stavíme</a>
            </div>
          </div>
        </div>
        <div className="spec">
          <div className="wrap">
            {specs.map((s, i) => (
              <div className="spec-item" key={i}>
                <div className="k">{s.k}</div>
                <div className="v">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="services" id="sluzby">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-num">§ 01 — Co stavíme</span>
              <h2>Ploty, panely,<br />brány s pohonem</h2>
              <p>Tři linie oplocení podle toho, co pozemek potřebuje — od zahradního pletiva po vjezdovou bránu na dálkové ovládání.</p>
            </div>
            <div className="svc-grid">
              {services.map((s, i) => (
                <article className="svc" key={i}>
                  <span className="tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <ul className="mat">
                    {s.mat.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                </article>
              ))}
              <article className="svc svc-wide" id="material">
                <div>
                  <span className="tag">Řada 04 — Sklad Modřice</span>
                  <h3>Velkoobchod i kus na míru</h3>
                </div>
                <p>Poplastované a pozinkované pletivo, svařované sítě, sloupky, napínáky a příslušenství. Přijeďte si pro metr nebo pro celý pozemek — sjezd z D52 na Modřice.</p>
                <div className="side">
                  <a className="btn btn-primary" href="#poptavka">Zeptat se na cenu</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="about" id="o-nas">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-num">§ 02 — O nás</span>
              <h2>Řemeslo, které<br />stojí rovně</h2>
              <p>A+J ploty s.r.o. — Josef Juráček. Zaměřujeme, vyrábíme a montujeme oplocení v Brně a okolí.</p>
            </div>

            <div className="about-grid">
              <div className="about-copy">
                <p className="lead">Dobře víme, že ploty nechrání jen majetek — mají i estetickou funkci. Proto je navrhujeme tak, aby ladily s architekturou domu i okolí.</p>
                <p>Děláme rezidenční zahrady i oplocení developerských projektů. U developera je plot orámování celé stavby: pokud není kvalitně provedený, zkazí první dojem — a ten se utváří jenom jednou.</p>
                <p>Od zaměření po předání jedete s jednou partou a jedním telefonním číslem. Žádné mezičlánky, žádné nedodělky přes zimu.</p>
              </div>
              <figure className="about-figure">
                <img src="/section-1.webp" alt="Hotové oplocení rezidenčního projektu ladící s architekturou domu" />
                <figcaption><span>Reference — rezidenční oplocení, Brno</span><span>A+J</span></figcaption>
              </figure>
            </div>

            <div className="proof">
              <div className="proof-item"><div className="v">2005</div><div className="k">Ploty stavíme od roku</div></div>
              <div className="proof-item"><div className="v">1×</div><div className="k">Kontakt od zaměření po předání</div></div>
              <div className="proof-item"><div className="v">D52</div><div className="k">Sklad u sjezdu na Modřice</div></div>
              <div className="proof-item"><div className="v">−25 %</div><div className="k">Akce na vybrané produkty</div></div>
            </div>

            <div className="cert">
              <span><b>Certifikát:</b> ČSN EN ISO 9001:2016</span>
              <span><b>Zpracování dat:</b> dle GDPR</span>
              <span><b>Provozovna:</b> Brněnská 1066, 664 42 Modřice</span>
            </div>

            <figure className="about-figure" style={{ marginTop: '34px' } as CSSProperties}>
              <img src="/section-2.webp" alt="Detail brány a plotových dílců z montáže A+J ploty" style={{ height: 300 } as CSSProperties} />
              <figcaption><span>Brány, branky a plotové dílce z vlastní montáže</span><span>Modřice</span></figcaption>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
