const stages = [
  {
    n: "01",
    name: "Předmytí",
    d: "Ostřik vysokým tlakem spláchne hrubou špínu, sůl a bláto z podběhů — ještě než se karoserie čehokoli dotkne.",
    cls: "b1",
  },
  {
    n: "02",
    name: "Pěna",
    d: "Aktivní pěna obalí celé auto a rozpustí zaschlou nečistotu, aby se při mytí nic nedřelo nasucho.",
    cls: "b2",
  },
  {
    n: "03",
    name: "Kartáče",
    d: "Měkké textilní soft-flap kartáče projedou lak citlivě a do detailu — bez škrábanců a swirlů.",
    cls: "b3",
  },
  {
    n: "04",
    name: "Oplach",
    d: "Demineralizovaná voda smyje pěnu i poslední zbytky nečistot. Žádné šmouhy, žádný vodní kámen.",
    cls: "b4",
  },
  {
    n: "05",
    name: "Vosk",
    d: "Horký vosk uzavře lak lesklou vrstvou, ze které voda steče sama — auto se pak déle drží čisté.",
    cls: "b5",
  },
  {
    n: "06",
    name: "Sušení",
    d: "Výkonné ofukování a ruční doleštění mikrovláknem. Odjíždíš suchý, lesklý a hotový.",
    cls: "b6",
  },
];

const pobocky = [
  {
    name: "Plzeň – Bory",
    addr: "U Trati 1204/12",
    note: "Tunelové mytí · 3 mycí linky",
  },
  {
    name: "Plzeň – Skvrňany",
    addr: "Domažlická 174",
    note: "Ruční mytí a čištění interiéru",
  },
  {
    name: "Plzeň – Doubravka",
    addr: "Masarykova 88",
    note: "Samoobslužné boxy · otevřeno 24/7",
  },
];

const duvody = [
  { k: "od 2012", v: "Myjeme auta Plzeňanům už přes deset let." },
  { k: "80 %", v: "Vody recyklujeme zpět do oběhu — šetrně k městu." },
  { k: "0 škrábanců", v: "Jen textilní soft-flap kartáče, nikdy tvrdé štětiny." },
  { k: "do 12 min", v: "Kompletní program stihneš cestou z práce." },
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="wrap hero-inner">
          <p className="eyebrow">Automyčka · Plzeň · Po–Ne 7:00–21:00</p>
          <h1 className="wordmark" aria-label="MYJE.TO">
            <span>MYJE</span>
            <i className="drop" aria-hidden="true"></i>
            <span>TO</span>
          </h1>
          <p className="lede">
            Zaparkuj špinavé, odjeď čisté. Projeď mycím tunelem na okraji Plzně —
            šest kroků, dvanáct minut, lesklé auto bez jediného škrábance.
          </p>
          <div className="cta">
            <a className="btn btn-a" href="tel:+420725400400">
              Zavolat 725 400 400
            </a>
            <a
              className="btn btn-b"
              href="https://mapy.cz/zakladni?q=automy%C4%8Dka%20Plze%C5%88"
              target="_blank"
              rel="noreferrer"
            >
              Najít nejbližší pobočku
            </a>
          </div>
        </div>
        <div className="wipe" aria-hidden="true"></div>
        <div className="squeegee" aria-hidden="true"></div>
      </header>

      <section className="stages" aria-labelledby="prog">
        <h2 id="prog" className="sr-only">
          Program mytí
        </h2>
        {stages.map((s) => (
          <div key={s.n} className={`band ${s.cls}`}>
            <div className="wrap band-inner">
              <div className="band-head">
                <span className="num">{s.n}</span>
                <h3 className="band-name">{s.name}</h3>
              </div>
              <p className="band-d">{s.d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="trust" aria-labelledby="kde">
        <div className="wrap">
          <p className="eyebrow eyebrow-dark">Kde nás najdete</p>
          <h2 id="kde" className="trust-title">
            Tři mycí stanice po Plzni. Vždycky jedna po cestě.
          </h2>

          <ul className="pob">
            {pobocky.map((p) => (
              <li key={p.name} className="pob-card">
                <span className="pin" aria-hidden="true"></span>
                <div>
                  <h3 className="pob-name">{p.name}</h3>
                  <p className="pob-addr">{p.addr}</p>
                  <p className="pob-note">{p.note}</p>
                </div>
              </li>
            ))}
          </ul>

          <ul className="why">
            {duvody.map((d) => (
              <li key={d.k} className="why-item">
                <span className="why-k">{d.k}</span>
                <span className="why-v">{d.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav className="mcta" aria-label="Rychlý kontakt">
        <a className="btn btn-a mcta-b" href="tel:+420725400400">
          Zavolat
        </a>
        <a
          className="btn btn-b mcta-b"
          href="https://mapy.cz/zakladni?q=automy%C4%8Dka%20Plze%C5%88"
          target="_blank"
          rel="noreferrer"
        >
          Mapa
        </a>
      </nav>
    </main>
  );
}
