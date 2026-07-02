const sportoviste = [
  {
    tag: "KURT 01",
    name: "Tenis",
    desc: "4 antukové kurty venku, 2 haly s celoročním provozem. Tenisová školička pro děti každé pondělí a úterý od 15:00 — ukázkový trénink zdarma.",
    info: "Rezervace po hodinách",
  },
  {
    tag: "KURT 02",
    name: "Badminton",
    desc: "6 kurtů s profesionálním povrchem a půjčovnou raket. Ideální hra, když venku prší — což se v Ostravě občas stane.",
    info: "Rakety půjčíme na recepci",
  },
  {
    tag: "GREEN 03",
    name: "Golf",
    desc: "Venkovní hřiště, indoor tréninkové centrum a golfový simulátor. Open Golf Series 2026: 30. 5., 27. 6., 25. 7. a 30. 8. v Šilheřovicích.",
    info: "Simulátor i v zimě",
  },
  {
    tag: "HALA 04",
    name: "Jump Aréna",
    desc: "Trampolínová hala pro děti i dospělé. Nejoblíbenější místo příměstských táborů — přihlašování na léto je právě spuštěno.",
    info: "Vstup od 3 let",
  },
  {
    tag: "ZÓNA 05",
    name: "Wellness",
    desc: "Sauna, vířivka a nová chill zóna pro regeneraci po tréninku. Od 26. 6. do 31. 8. probíhá letní odstávka bazénu a wellness.",
    info: "Regenerace po sportu",
  },
  {
    tag: "AREÁL 06",
    name: "Eventy a firemní akce",
    desc: "Celý areál pro váš teambuilding nebo sportovní den — naposledy u nás sportovalo 200 lidí z firmy Brembo. Program připravíme na míru.",
    info: "Kapacita až 250 osob",
  },
];

const duvody = [
  {
    num: "6:00",
    label: "otevíráme ve všední dny",
    text: "Trénink před prací zvládnete i s dojezdem do centra. O víkendu otevíráme v 7:00, zavíráme denně v 19:00.",
  },
  {
    num: "7",
    label: "sportovišť pod jednou střechou",
    text: "Tenis, badminton, golf, trampolíny i wellness na jedné adrese. Děti skáčou v Jump Aréně, vy hrajete badminton — a pak společně do sauny.",
  },
  {
    num: "11·12·19",
    label: "tramvajové linky k areálu",
    text: "Zastávka Městský stadion je pár kroků od recepce. Závodní 2885/86, Ostrava-Vítkovice. Autem zaparkujete přímo v areálu.",
  },
];

export default function Page() {
  return (
    <main className="rs">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-topbar">
          <span className="wordmark">
            RIDERA<span className="wordmark-dot" aria-hidden="true"></span>SPORT
          </span>
          <span className="hero-loc">Ostrava&#8209;Vítkovice · Závodní 2885/86</span>
        </div>

        <div className="hero-court" aria-hidden="true">
          <span className="court-line court-v"></span>
          <span className="court-line court-h"></span>
          <span className="court-circle"></span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow reveal r1">Rodinný sportovní areál u Městského stadionu</p>
          <h1 className="hero-title">
            <span className="line reveal r2">Ráno tenis,</span>
            <span className="line line-accent reveal r3">odpoledne golf,</span>
            <span className="line reveal r4">večer sauna.</span>
          </h1>
          <p className="hero-sub reveal r5">
            Sedm sportovišť na jedné adrese v Ostravě. Přijďte si zahrát na hodinu,
            nebo se staňte členem a sportujte celý rok.
          </p>
          <div className="hero-actions reveal r6">
            <a className="btn btn-solid" href="#sportoviste">Prohlédnout sportoviště</a>
            <a className="btn btn-line" href="tel:+420739521952">Zavolat recepci</a>
          </div>
        </div>

        <div className="hero-ticker" role="note">
          <span className="ticker-item"><strong>Po–Pá</strong> 6:00–19:00</span>
          <span className="ticker-sep" aria-hidden="true">/</span>
          <span className="ticker-item"><strong>So–Ne</strong> 7:00–19:00</span>
          <span className="ticker-sep" aria-hidden="true">/</span>
          <span className="ticker-item">Tramvaj 11, 12, 19 — zastávka Městský stadion</span>
        </div>
      </header>

      {/* ===== SPORTOVIŠTĚ ===== */}
      <section className="section section-courts" id="sportoviste" aria-labelledby="sportoviste-h">
        <div className="section-head">
          <h2 id="sportoviste-h">Kam dnes vyrazíte?</h2>
          <p className="section-lede">
            Každé sportoviště si rezervujete online po hodinách. Vybavení nemusíte
            vozit — rakety, míčky i golfové hole půjčíme na recepci.
          </p>
        </div>

        <ul className="court-grid">
          {sportoviste.map((s) => (
            <li className="court-card" key={s.tag}>
              <span className="court-tag">{s.tag}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <span className="court-info">{s.info}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== PROČ RIDERA ===== */}
      <section className="section section-why" aria-labelledby="proc-h">
        <div className="section-head">
          <h2 id="proc-h">Proč k nám chodí celé rodiny</h2>
          <p className="section-lede">
            Nejsme fitness řetězec. Jsme areál, kde recepce zná stálé hosty jménem
            a kde děti z tenisové školičky potkáte za pár let na kurtech.
          </p>
        </div>

        <div className="why-grid">
          {duvody.map((d) => (
            <article className="why-card" key={d.label}>
              <p className="why-num">{d.num}</p>
              <h3>{d.label}</h3>
              <p className="why-text">{d.text}</p>
            </article>
          ))}
        </div>

        <blockquote className="why-quote">
          <p>
            „Syn chodí do tenisové školičky, dcera skáče v Jump Aréně a my s manželem
            si mezitím zahrajeme badminton. Nikde jinde v Ostravě to takhle nejde.“
          </p>
          <cite>— Markéta, členka klubu z Vítkovic</cite>
        </blockquote>
      </section>
    </main>
  );
}
