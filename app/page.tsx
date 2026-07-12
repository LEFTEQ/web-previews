import './globals.css';

export default function Page() {
  const druhy = [
    { n: '01', name: 'Pes', small: 'Granule, pamlsky, vodítka' },
    { n: '02', name: 'Kočka', small: 'Krmivo, škrabadla, hygiena' },
    { n: '03', name: 'Drobní savci', small: 'Klece, iglú, seno' },
    { n: '04', name: 'Ptáci', small: 'Zob, krmítka, budky' },
    { n: '05', name: 'Koně', small: 'Doplňky a péče' },
    { n: '06', name: 'Ryby', small: 'Krmivo a akvaristika' },
    { n: '07', name: 'Plazi', small: 'Terária a osvětlení' },
    { n: '08', name: 'Hospodářská', small: 'Krmné směsi' },
  ];

  const vyber = [
    {
      i: '1',
      h: 'KONG Licks Spinz L',
      p: 'Otočná lízací podložka, která promění krmení v hru a zpomalí hltavé jedlíky.',
      c: '525 Kč',
    },
    {
      i: '2',
      h: 'Churu Cat kuře & Wagyu',
      p: 'Luxusní krémový pamlsek pro kočky, bez obilovin a umělých přísad. 4× 14 g.',
      c: '60 Kč',
    },
    {
      i: '3',
      h: 'Iglú s chladicí deskou',
      p: 'Úkryt s keramickou deskou pro křečky a myši — chladné místo k odpočinku.',
      c: '203 Kč',
    },
    {
      i: '4',
      h: 'Clorexyderm Wipes Pocket',
      p: 'Ubrousky s chlorhexidinem na kožní záhyby a meziprstí psů i koček. 20 ks.',
      c: '295 Kč',
    },
  ];

  const reference = [
    {
      who: 'Alena H.',
      stars: '★★★★★',
      text: '„Mlsoun biskvit tlapky — hodně pamlsků a psovi chutnají tak, že procházku ujde skoro celou u nohy. Za málo peněz hodně muziky.“',
      date: '15. 11. 2021 · Mlsoun biskvit tlapky',
    },
    {
      who: 'Dana K.',
      stars: '★★★★★',
      text: '„Pelíšek Casper Trendy je opravdu krásný, pořádně měkký a hezky se drží tvar. Kocour v něm spí od prvního dne.“',
      date: '30. 10. 2022 · Casper Trendy',
    },
  ];

  return (
    <main>
      <div className="topbar">
        <div className="wrap">
          <span>Zvěřimex a poradna v <strong>Brně</strong> · 777 831 573</span>
          <span className="secure">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <rect x="4" y="10" width="16" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            Zabezpečené HTTPS spojení
          </span>
        </div>
      </div>

      <header className="masthead">
        <div className="wrap">
          <span className="mark" aria-label="MUJPES.CZ">
            <span>můj</span><span className="paw">pes</span><span className="tld">.cz</span>
          </span>
          <nav className="chips" aria-label="Hlavní">
            <a className="chip" href="#druhy">Podle mazlíčka</a>
            <a className="chip" href="#vyber">Vybíráme za vás</a>
            <a className="chip" href="#duvera">Poradna & škola</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div>
            <span className="hero-eyebrow rise d1">Zvěřimex Brno · krmivo &amp; poradna</span>
            <h1 className="rise d2">
              Vybírej se&nbsp;znalostí,<br />
              <em>krm srdcem.</em>
            </h1>
            <p className="hero-lede rise d3">
              Malý brněnský zvěřimex, kde poradí konkrétní člověk — Yvona.
              Granule, pamlsky i vybavení pro psy, kočky, hlodavce, ptáky
              i plazy. Bez tlaku, se znalostí.
            </p>
            <div className="hero-actions rise d4">
              <a className="btn btn-primary" href="#druhy">Vybrat podle mazlíčka</a>
              <a className="btn btn-ghost" href="#duvera">Zeptat se poradny</a>
            </div>
          </div>
          <figure className="hero-figure rise d3">
            <img src="/hero.webp" alt="Pes u misky s krmivem ze zvěřimexu MUJPES.CZ v Brně" />
            <span className="tag">Škola pro psy v Brně 🐾</span>
          </figure>
        </div>
      </section>

      <div className="credo">
        <div className="wrap">
          <p>Vybírej se&nbsp;znalostí <span className="dot">·</span> krm srdcem <span className="dot">·</span> udělej si jasno, vyber dobře</p>
        </div>
      </div>

      <section className="block" id="druhy">
        <div className="wrap">
          <div className="block-head">
            <div>
              <span className="kicker">Osm rodin mazlíčků</span>
              <h2>Začni u toho,<br />kdo doma čeká</h2>
            </div>
            <p>Sortiment máme rozdělený podle zvířat — ať hledáš granule pro fenku nebo iglú pro křečka, nejdřív vybereš svět, do kterého patří.</p>
          </div>

          <div className="species">
            {druhy.map((d) => (
              <a key={d.n} href="#vyber">
                <span className="num">{d.n}</span>
                <span className="name">{d.name}</span>
                <span className="small">{d.small}</span>
              </a>
            ))}
          </div>

          <div id="vyber" className="offer">
            <div className="offer-media">
              <img src="/section-1.webp" alt="Regál se sortimentem pro domácí mazlíčky ve zvěřimexu MUJPES.CZ" />
            </div>
            <div className="offer-list">
              {vyber.map((v) => (
                <div className="pick" key={v.i}>
                  <span className="idx">{v.i}</span>
                  <div>
                    <h3>{v.h}</h3>
                    <p>{v.p}</p>
                  </div>
                  <span className="price">{v.c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="block trust" id="duvera">
        <div className="wrap">
          <div className="block-head">
            <div>
              <span className="kicker">O mně &amp; poradna</span>
              <h2>Za pultem<br />konkrétní člověk</h2>
            </div>
            <p>Nejsme anonymní e-shop. Ptáte se, my odpovídáme — na výživu, kožní problémy i výběr klece. A ztraceným mazlíčkům pomáháme hledat cestu domů.</p>
          </div>

          <div className="trust-grid">
            <div className="trust-media">
              <img src="/section-2.webp" alt="Yvona z MUJPES.CZ radí zákazníkům s výběrem krmiva" />
            </div>
            <div>
              <p className="quote">
                „Koncentrace živin i složení odpovídá tomu, co potřebujete.
                Směle vyzkoušejte — a napište, jak chutná.“
              </p>
              <div className="reviews">
                {reference.map((r) => (
                  <div className="review" key={r.who}>
                    <div className="stars" aria-label="5 z 5 hvězdiček">{r.stars}</div>
                    <div className="who">{r.who}</div>
                    <p>{r.text}</p>
                    <div className="date">{r.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="services">
            <div className="svc">
              <span className="lbl">Služba zdarma</span>
              <h3>Najdi mazlíčka</h3>
              <p>Ztratil se pes nebo kočka? Pomáháme sdílet a hledat ztracená zvířata po Brně a okolí.</p>
            </div>
            <div className="svc">
              <span className="lbl">Přímo v Brně</span>
              <h3>Psí škola</h3>
              <p>Základní poslušnost i práce s vodítkem — trénink pro psy vedený s klidem a bez křiku.</p>
            </div>
            <div className="svc">
              <span className="lbl">Poradna výživa</span>
              <h3>Zeptejte se na krmivo</h3>
              <p>Trávení, tvrdost granulí, přechod na jiné krmivo — odpovídáme konkrétně na vaše dotazy.</p>
            </div>
            <div className="svc">
              <span className="lbl">Veterinární poradna</span>
              <h3>Když si nevíte rady</h3>
              <p>Svilušky u štěněte, kožní záhyby, močové kameny — nasměrujeme vás dřív, než bude hůř.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
