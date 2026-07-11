import type { CSSProperties } from "react";

export default function Page() {
  const surfaces = [
    {
      no: "01",
      grit: "vápenocementová jádrová",
      name: "Jádrová omítka",
      desc: "Nosná vrstva pro rovné, únosné stěny. Nanášíme strojně, stahujeme do svislice a připravujeme podklad pro finální štuk.",
      spec: "zrno 4 mm · tloušťka 15–20 mm"
    },
    {
      no: "02",
      grit: "sádrová hlazená",
      name: "Sádrová omítka",
      desc: "Jednovrstvá omítka pro interiéry rodinných domů i bytů. Hladký povrch bez maltových přebrusů, připravený rovnou k malování.",
      spec: "hlazená ocelovým hladítkem · bez štuku"
    },
    {
      no: "03",
      grit: "štuková finální",
      name: "Vápenný štuk",
      desc: "Jemná dokončovací vrstva. Filcováním i hlazením dotahujeme povrch do roviny, na kterou nesklouzne žádné světlo.",
      spec: "zrno 0,5 mm · filcováno + hlazeno"
    },
    {
      no: "04",
      grit: "TOVR povrch",
      name: "TOP TOVR povrch",
      desc: "Naše nejjemnější úprava. Skoro zrcadlová stěna bez viditelné struktury — tam, kde má omítka vypadat jako broušený kámen.",
      spec: "náš postup · zrcadlově hladké"
    }
  ];

  const regions = [
    "Brno-město",
    "Brno-venkov",
    "Hodonín",
    "Břeclav",
    "Vyškov",
    "Vsetín",
    "Třebíč"
  ];

  return (
    <main className="tv">
      <header className="tv-nav" aria-label="Hlavní navigace">
        <a className="tv-mark" href="#uvod" aria-label="TOVR Omítky, domů">
          <span className="tv-mark-t">TOVR</span>
          <span className="tv-mark-sub">omítky · Brno</span>
        </a>
        <nav className="tv-links">
          <a href="#povrchy">Povrchy</a>
          <a href="#firma">O firmě</a>
          <a href="#kde">Kde stavíme</a>
        </nav>
      </header>

      <section className="tv-hero" id="uvod">
        <img
          className="tv-hero-img"
          src="/hero.webp"
          alt="Čerstvě natažená strojní omítka stažená do roviny na stěně rodinného domu"
        />
        <div className="tv-hero-scrim" aria-hidden="true" />
        <div className="tv-hero-inner">
          <p className="tv-eyebrow">Štukatéři · Brno a jižní Morava · od roku 2012</p>
          <h1 className="tv-h1">
            Stěna, po které<br />
            <span className="tv-h1-accent">sklouzne světlo.</span>
          </h1>
          <p className="tv-lede">
            Taháme omítky strojně, do svislice a do roviny. Od hrubého jádra
            po zrcadlově hlazený štuk — poctivé řemeslo bez přebrusů a bez výmluv.
          </p>
          <div className="tv-cta">
            <a className="tv-btn tv-btn-solid" href="#povrchy">Prohlédnout povrchy</a>
            <a className="tv-btn tv-btn-ghost" href="#firma">Kdo omítky dělá</a>
          </div>
          <dl className="tv-hero-facts">
            <div><dt>od roku</dt><dd>2012</dd></div>
            <div><dt>tahá se</dt><dd>strojně</dd></div>
            <div><dt>štuk</dt><dd>0,5 mm</dd></div>
          </dl>
        </div>
      </section>

      <section className="tv-surf" id="povrchy" aria-labelledby="surf-h">
        <div className="tv-surf-head">
          <p className="tv-section-eyebrow">Čtyři vrstvy</p>
          <h2 id="surf-h" className="tv-h2">
            Od jádra po zrcadlo
          </h2>
          <p className="tv-section-lede">
            Omítka není jedna vrstva, ale řemeslná posloupnost. Vyberte si povrch
            podle toho, jak jemnou stěnu potřebujete — poradíme na místě.
          </p>
        </div>

        <ol className="tv-surf-list">
          {surfaces.map((s) => (
            <li className="tv-surf-card" key={s.no}>
              <div className="tv-surf-no" aria-hidden="true">{s.no}</div>
              <div className="tv-surf-body">
                <p className="tv-surf-grit">{s.grit}</p>
                <h3 className="tv-surf-name">{s.name}</h3>
                <p className="tv-surf-desc">{s.desc}</p>
                <p className="tv-surf-spec">{s.spec}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="tv-surf-fig">
          <img
            src="/section-1.webp"
            alt="Detail hotové hladké omítky připravené k malování"
            loading="lazy"
          />
          <figcaption>Finální štuk — povrch, na kterém není co brousit.</figcaption>
        </figure>
      </section>

      <section className="tv-firma" id="firma" aria-labelledby="firma-h">
        <div className="tv-firma-grid">
          <figure className="tv-firma-fig">
            <img
              src="/section-2.webp"
              alt="Štukatéři TOVR při strojním nanášení omítky na stavbě"
              loading="lazy"
            />
          </figure>
          <div className="tv-firma-txt">
            <p className="tv-section-eyebrow">Kdo to dělá</p>
            <h2 id="firma-h" className="tv-h2">
              Řemeslo, ne šablona
            </h2>
            <p className="tv-firma-lede">
              TOVR – Omítky spol. s r.o. tahá strojní omítky v Brně a okolí od roku 2012.
              Prošli jsme novostavbami i rekonstrukcemi, realizací i technickým dozorem —
              a z toho víme, kde stěny nejčastěji zradí. Ke každé zakázce chodíme osobně
              a cenu děláme na míru, ne z ceníku od stolu.
            </p>
            <ul className="tv-firma-points">
              <li>
                <span className="tv-point-k">Osobní přístup</span>
                Zaměříme stěny, poradíme povrch a napíšeme cenu, které rozumíte.
              </li>
              <li>
                <span className="tv-point-k">Rychlá, čistá práce</span>
                Strojní technologie šetří čas i materiál — a po nás zůstane uklizeno.
              </li>
              <li>
                <span className="tv-point-k">Novostavby i rekonstrukce</span>
                Vápenocementové i sádrové omítky pro domy, byty i veřejné stavby.
              </li>
            </ul>
          </div>
        </div>

        <div className="tv-kde" id="kde">
          <p className="tv-section-eyebrow">Kde stavíme</p>
          <h3 className="tv-kde-h">Brno a jižní Morava</h3>
          <ul className="tv-kde-list">
            {regions.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="tv-kde-note">
            Jezdíme po celém Brně — od Bystrce po Líšeň, od Žabovřesk po Slatinu —
            a za většími zakázkami i dál po republice.
          </p>
        </div>
      </section>
    </main>
  );
}
