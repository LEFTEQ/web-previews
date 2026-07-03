export default function Page() {
  const services = [
    {
      num: "D1",
      name: "Demolice objektů",
      desc: "Kompletní bourání budov — od rodinných domů po hotel v Peci pod Sněžkou nebo vlakové nádraží v Mladé Boleslavi. Včetně statického posouzení a ohlášení.",
    },
    {
      num: "D2",
      name: "Zemní práce a těžba",
      desc: "Víceúrovňová těžba s 2D/3D nivelací a GPS navádění strojů. Přesnost na centimetry, žádné víceprace.",
    },
    {
      num: "D3",
      name: "Recyklace suti",
      desc: "Beton a cihlu podrtíme přímo na místě. Recyklát využijete do podkladních vrstev — ušetříte za odvoz i nový materiál.",
    },
    {
      num: "S1",
      name: "Stavby a zpevněné plochy",
      desc: "Po demolici pozemek nezůstane ležet ladem. Založíme stavbu, uděláme komunikace, parkoviště i kanalizaci.",
    },
    {
      num: "S2",
      name: "Autodoprava a pronájem techniky",
      desc: "Vlastní flotila: bagry, minibagry, dumpery Wacker Neuson DV 90 a DV 125 (12,5 t na jednu jízdu), nákladní vozy, bourací kladiva.",
    },
    {
      num: "S3",
      name: "Půjčovna nářadí a servis",
      desc: "Profesionální nářadí na den i na měsíc. K tomu autoservis a pneuservis pro firmy i řidiče z okolí Hradce Králové.",
    },
  ];

  const refs = [
    {
      place: "Pec pod Sněžkou",
      job: "Demolice hotelu",
      note: "Bourání v horském terénu s omezeným přístupem techniky. Suť roztříděna a odvezena k recyklaci.",
    },
    {
      place: "Mladá Boleslav",
      job: "Demolice hlavního nádraží ČD",
      note: "Postupné strojní bourání za provozu okolní železnice — koordinace se správou drah, přísný harmonogram.",
    },
    {
      place: "Kolín",
      job: "Kanály v podlaze, automobilka Toyota",
      note: "Řezání a bourání průmyslových podlah uvnitř výrobní haly bez přerušení výroby.",
    },
    {
      place: "Lázně Bohdaneč",
      job: "Rekonstrukce silnice Leoše Janáčka",
      note: "Odtěžení konstrukčních vrstev, nové zpevněné plochy. Vlastní doprava materiálu, žádné čekání na subdodávky.",
    },
    {
      place: "BD Benkova",
      job: "Víceúrovňová těžba s GPS nivelací",
      note: "Těžba jámy ve více úrovních řízená 2D/3D nivelací — geodetická přesnost přímo z kabiny bagru.",
    },
    {
      place: "Přelovice",
      job: "Demolice a výstavba zvoničky",
      note: "Malá zakázka, stejná péče: zbourat, zachovat zvon, postavit znovu. I to umíme.",
    },
  ];

  return (
    <main className="lz">
      {/* ================= HERO ================= */}
      <header className="hero" aria-label="LZ Stavby a demolice — úvod">
        <div className="hero-top">
          <div className="wordmark" aria-label="LZ Stavby a demolice s.r.o.">
            <span className="wordmark-lz">LZ</span>
            <span className="wordmark-rest">
              <span>STAVBY</span>
              <span>&amp; DEMOLICE</span>
            </span>
          </div>
          <a className="hero-phone" href="tel:+420777859900">
            <span className="hero-phone-num">777 859 900</span>
            <span className="hero-phone-hours">po–pá 7–19</span>
          </a>
        </div>

        <div className="hero-main">
          <p className="hero-eyebrow">Demoliční a zemní práce · Hradec Králové a východní Čechy</p>
          <h1 className="hero-title">
            <span className="line line-1">Z<b>BOURÁME</b>.</span>
            <span className="line line-2">V<b>YTĚŽÍME</b>.</span>
            <span className="line line-3 line-built">P<b>OSTAVÍME</b>.</span>
          </h1>
          <p className="hero-sub">
            Vlastní bagry, dumpery i bourací kladiva. Suť podrtíme na místě a vrátíme do
            stavby jako recyklát. Jedna firma od první rány kladivem po hotový pozemek.
          </p>
          <div className="hero-cta-row">
            <a className="btn btn-solid" href="tel:+420777859900">Zavolat: 777 859 900</a>
            <a className="btn btn-ghost" href="mailto:lukas.zahradka@seznam.cz">Poslat poptávku e-mailem</a>
          </div>
        </div>

        {/* signature: demoliční profil — dům rozpadající se na recyklát */}
        <div className="rubble" aria-hidden="true">
          <div className="rubble-row r1">
            <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
          </div>
          <div className="rubble-row r2">
            <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
          </div>
          <div className="rubble-row r3">
            <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="services" aria-labelledby="sluzby-h">
        <div className="section-head">
          <span className="section-tag">Co pro vás uděláme</span>
          <h2 id="sluzby-h">Od demolice po hotovou stavbu</h2>
          <p className="section-lead">
            Značíme si to jako na stavebním deníku: <strong>D</strong> jako demolice a to,
            co jde dolů — <strong>S</strong> jako stavby a to, co roste nahoru.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <article className="service" key={s.num}>
              <span className={`service-num ${s.num.startsWith("D") ? "num-d" : "num-s"}`}>{s.num}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
        <aside className="fleet-strip" aria-label="Novinka ve flotile">
          <span className="fleet-badge">Nové ve flotile</span>
          <p>
            <strong>Dumper Wacker Neuson DV 125 Power</strong> — užitečné zatížení 12,5 tuny
            a radar Active Sense Control, který hlídá překážky a stroj sám zastaví.
            Víc materiálu na jednu jízdu, bezpečněji pro všechny na stavbě.
          </p>
        </aside>
      </section>

      {/* ================= REFERENCE ================= */}
      <section className="refs" aria-labelledby="refs-h">
        <div className="section-head section-head-dark">
          <span className="section-tag">Kde jsme bourali a stavěli</span>
          <h2 id="refs-h">Reference, které si můžete objet autem</h2>
          <p className="section-lead">
            Žádné anonymní „spokojený klient“. Konkrétní místa, konkrétní zakázky —
            od automobilky po zvoničku.
          </p>
        </div>
        <ul className="refs-list">
          {refs.map((r) => (
            <li className="ref" key={r.place + r.job}>
              <span className="ref-place">{r.place}</span>
              <div className="ref-body">
                <h3>{r.job}</h3>
                <p>{r.note}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="refs-proof">
          <div className="proof">
            <span className="proof-big">7–19</span>
            <span className="proof-label">na telefonu každý všední den</span>
          </div>
          <div className="proof">
            <span className="proof-big">2D · 3D · GPS</span>
            <span className="proof-label">nivelace řízená přímo z kabiny stroje</span>
          </div>
          <div className="proof">
            <span className="proof-big">Vlastní technika</span>
            <span className="proof-label">nečekáte na cizí bagr ani na cizí náklaďák</span>
          </div>
        </div>
      </section>
    </main>
  );
}
