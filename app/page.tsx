export default function Page() {
  const hodiny = [
    { den: "Pondělí", cas: "8:30 – 12:00", cas2: "15:00 – 19:00" },
    { den: "Úterý", cas: "8:30 – 12:00", cas2: "15:00 – 19:00" },
    { den: "Středa", cas: "8:30 – 12:00", cas2: "15:00 – 19:00" },
    { den: "Čtvrtek", cas: "8:30 – 12:00", cas2: "15:00 – 19:00" },
    { den: "Pátek", cas: "8:30 – 12:00", cas2: "15:00 – 19:00" },
    { den: "Sobota", cas: "9:00 – 12:00", cas2: "" },
    { den: "Neděle", cas: "zavřeno", cas2: "" },
  ];

  const pece = [
    {
      cislo: "01",
      titul: "Prevence",
      popis: "Očkování psů, koček, fretek a králíků, odčervování, ochrana před klíšťaty a blechami. Čipování, cestovní pasy a zdravotní potvrzení před cestou do zahraničí.",
      polozky: ["Vakcinace a odčervení", "Čipování + pet pas", "Stříhání drápků, toaleta uší", "Geriatrické odběry krve"],
    },
    {
      cislo: "02",
      titul: "Diagnostika",
      popis: "Moderní zobrazovací technika i vlastní laboratoř. Sonograf Mindray DC-N2 Vet a vysokofrekvenční rentgen s digitalizací snímku odhalí problém rychle a bez stresu.",
      polozky: ["Ultrazvuk (USG)", "Digitální RTG", "Krev, moč, trus", "Cytologie a genetika"],
    },
    {
      cislo: "03",
      titul: "Chirurgie",
      popis: "Preventivní kastrace i akutní zákroky. Torze žaludku, cizí tělesa, císařský řez, odstranění nádorů s histologií. Komplikovanější pacienty hospitalizujeme.",
      polozky: ["Kastrace samců i samic", "Akutní úrazy a rány", "Břišní chirurgie", "Stomatologie a extrakce"],
    },
  ];

  return (
    <main className="mv">
      <header className="mv-top">
        <a className="mv-mark" href="#" aria-label="MiaVet — veterinární klinika">
          Mia<span className="mv-mark-accent">Vet</span>
          <span className="mv-paw" aria-hidden="true">🐾</span>
        </a>
        <a className="mv-tel" href="tel:+420725017584">725&nbsp;017&nbsp;584</a>
      </header>

      <section className="mv-hero">
        <div className="mv-hero-media">
          <img
            src="/hero.webp"
            alt="Pes a kočka v ordinaci veterinární kliniky MiaVet"
            width={1200}
            height={900}
            className="mv-hero-img"
          />
        </div>
        <div className="mv-hero-copy">
          <p className="mv-eyebrow">Veterinární klinika · Dolní Měcholupy</p>
          <h1 className="mv-h1">
            Dvě lékařky, jedna ordinace a čas na&nbsp;<em>každého</em> pacienta.
          </h1>
          <p className="mv-lede">
            V MiaVet vás nikdo nežene. Objednáte se předem, přijdete v klidu
            a odcházíte s jasným plánem péče o svého mazlíčka. Kompletní
            veterinární medicína pod jednou střechou v Praze&nbsp;10.
          </p>
          <div className="mv-cta-row">
            <a className="mv-btn mv-btn-primary" href="tel:+420725017584">Objednat na telefonu</a>
            <a className="mv-btn mv-btn-ghost" href="mailto:info@miavet.cz">Napsat e-mail</a>
          </div>
          <p className="mv-note">Před návštěvou se prosím objednejte — vyhnete se čekání a my si naplánujeme případný zákrok.</p>
        </div>
      </section>

      <section className="mv-section" aria-labelledby="pece-nadpis">
        <div className="mv-section-head">
          <p className="mv-eyebrow">Pro vaše zvíře</p>
          <h2 className="mv-h2" id="pece-nadpis">Tři kroky péče, od prevence po sál</h2>
          <p className="mv-section-sub">
            Konzervativní i chirurgickou terapii vedeme na míru každému
            pacientovi — nejmodernějšími postupy a s osobním přístupem k němu
            i k vám.
          </p>
        </div>

        <div className="mv-cards">
          {pece.map((p) => (
            <article className="mv-card" key={p.cislo}>
              <span className="mv-card-num" aria-hidden="true">{p.cislo}</span>
              <h3 className="mv-card-title">{p.titul}</h3>
              <p className="mv-card-text">{p.popis}</p>
              <ul className="mv-list">
                {p.polozky.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="mv-figure">
          <img
            src="/section-1.webp"
            alt="Vyšetření zvířete v moderně vybavené ordinaci MiaVet"
            width={1200}
            height={700}
            className="mv-figure-img"
          />
        </figure>
      </section>

      <section className="mv-onas" aria-labelledby="onas-nadpis">
        <div className="mv-onas-grid">
          <div className="mv-onas-copy">
            <p className="mv-eyebrow mv-eyebrow-light">O nás</p>
            <h2 className="mv-h2 mv-h2-light" id="onas-nadpis">
              Rodinná ordinace v přízemí domu v Měcholupech
            </h2>
            <p className="mv-onas-text">
              Ordinaci jsme otevřely na začátku roku 2020 po rozsáhlé
              rekonstrukci přízemí rodinného domu. Provozují ji dvě
              veterinární lékařky — zároveň majitelky — takže o vašeho
              mazlíčka se stará ten, kdo za péči osobně ručí.
            </p>
            <p className="mv-onas-text">
              Před ordinací pohodlně zaparkujete. A od července 2026 u nás
              provádíme i zápisy do Centrální evidence psů.
            </p>

            <div className="mv-facts">
              <div className="mv-fact">
                <a className="mv-fact-value" href="tel:+420725017584">725 017 584</a>
                <span className="mv-fact-label">Telefon do ordinace</span>
              </div>
              <div className="mv-fact">
                <a className="mv-fact-value" href="mailto:info@miavet.cz">info@miavet.cz</a>
                <span className="mv-fact-label">E-mail</span>
              </div>
              <div className="mv-fact">
                <span className="mv-fact-value">Kutnohorská 129/28</span>
                <span className="mv-fact-label">Praha 10 — Dolní Měcholupy</span>
              </div>
            </div>
          </div>

          <div className="mv-onas-side">
            <img
              src="/section-2.webp"
              alt="Tým veterinární kliniky MiaVet"
              width={800}
              height={600}
              className="mv-onas-img"
            />
            <div className="mv-hours">
              <h3 className="mv-hours-title">Ordinační hodiny</h3>
              <ul className="mv-hours-list">
                {hodiny.map((h) => (
                  <li className={h.cas === "zavřeno" ? "mv-hours-row mv-closed" : "mv-hours-row"} key={h.den}>
                    <span className="mv-hours-day">{h.den}</span>
                    <span className="mv-hours-time">
                      {h.cas}
                      {h.cas2 ? <span className="mv-hours-time2">{h.cas2}</span> : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
