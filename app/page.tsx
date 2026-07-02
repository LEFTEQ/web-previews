const kamery = [
  {
    tag: "CCTV / IP",
    nazev: "Kamerové systémy pro firmy i domy",
    popis:
      "Navrhneme rozmístění kamer podle toho, co skutečně potřebujete hlídat — vjezd, sklad, pokladnu, perimetr. IP kamery s rozlišením 4K, nočním viděním a chytrou detekcí pohybu, ne jen 'kamera do rohu'.",
  },
  {
    tag: "PZTS",
    nazev: "Zabezpečovací signalizace",
    popis:
      "Poplachové zabezpečovací a tísňové systémy certifikované pro pojišťovny. Čidla, klávesnice, napojení na pult centrální ochrany. Vše naprogramujeme a předvedeme, než odjedeme.",
  },
  {
    tag: "EPS",
    nazev: "Požární signalizace",
    popis:
      "Elektrická požární signalizace pro provozy, kde ji vyžaduje zákon i zdravý rozum. Projekt, montáž, revize — jedna firma, jedna odpovědnost.",
  },
  {
    tag: "Přístup",
    nazev: "Přístupové a docházkové systémy",
    popis:
      "Čipy, karty, čtečky, turnikety. Víte, kdo je v budově a kdy přišel. Docházku exportujete rovnou do mezd.",
  },
];

const duvody = [
  {
    cislo: "500 m",
    text: "od velkého městského okruhu. Reissigova 11, Královo Pole — parkujete přímo u pobočky (navigace: Poděbradova 104).",
  },
  {
    cislo: "1 panel",
    text: "ukázkový CCTV panel na prodejně. Kvalitu obrazu kamery si vyzkoušíte naživo, ne z katalogového listu.",
  },
  {
    cislo: "9 poboček",
    text: "po celé ČR — Praha, Brno, Plzeň, Ostrava a další. Zboží i podpora jsou vždycky blízko.",
  },
  {
    cislo: "30+ let",
    text: "na trhu se zabezpečovací technikou. Školíme montážní firmy, programujeme ústředny, děláme webináře k novinkám.",
  },
];

export default function Page() {
  return (
    <main className="ea">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="EUROALARM Brno — kamerové systémy">
        <header className="hero-top">
          <span className="wordmark">
            EURO<span className="wordmark-alarm">ALARM</span>
            <span className="rec-dot" aria-hidden="true"></span>
          </span>
          <span className="hero-loc">Brno · Královo Pole</span>
        </header>

        <div className="hero-body">
          {/* Signature: kamerový hledáček / OSD overlay */}
          <div className="viewfinder" aria-hidden="true">
            <span className="vf-corner vf-tl"></span>
            <span className="vf-corner vf-tr"></span>
            <span className="vf-corner vf-bl"></span>
            <span className="vf-corner vf-br"></span>
            <span className="vf-osd vf-osd-top">
              <span className="vf-rec"><i></i>REC</span>
              <span>CAM 01 · BRNO</span>
            </span>
            <span className="vf-osd vf-osd-bottom">
              <span>49°12'57"N&nbsp;&nbsp;16°36'04"E</span>
              <span>3840×2160 · 25 fps</span>
            </span>
            <span className="vf-scanline"></span>
          </div>

          <h1 className="hero-title">
            <span className="line l1">Vidíme,</span>
            <span className="line l2">co se děje,</span>
            <span className="line l3">i když <em>vy</em> zrovna nejste.</span>
          </h1>

          <p className="hero-sub">
            Kamerové systémy, zabezpečovací a požární signalizace pro Brno a okolí.
            Návrh, montáž, servis — a prodejna, kde si kvalitu kamer vyzkoušíte
            na vlastní oči.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420541241740">
              Zavolat pobočku Brno
            </a>
            <a className="btn btn-ghost" href="mailto:brno@euroalarm.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <div className="hero-ticker" aria-hidden="true">
          <span>CCTV</span><i>/</i><span>PZTS</span><i>/</i><span>EPS</span><i>/</i>
          <span>Přístup a docházka</span><i>/</i><span>Perimetr</span><i>/</i>
          <span>Strukturovaná kabeláž</span>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <span className="sec-eyebrow">Co u nás pořešíte</span>
          <h2 id="sluzby-h">
            Jedna technika, celý objekt pod dohledem
          </h2>
          <p className="sec-lead">
            Nejsme jen e-shop. Přijdete s půdorysem nebo fotkou dvora a odejdete
            s návrhem řešení, cenou a termínem. Zařízení vám naprogramujeme
            a zaškolíme vás v obsluze.
          </p>
        </div>

        <div className="sluzby-grid">
          {kamery.map((s) => (
            <article className="karta" key={s.tag}>
              <span className="karta-tag">{s.tag}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="karta-line" aria-hidden="true"></span>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / POBOČKA ===== */}
      <section className="pobocka" aria-labelledby="pobocka-h">
        <div className="pobocka-inner">
          <div className="pobocka-text">
            <span className="sec-eyebrow sec-eyebrow-light">Pobočka Brno</span>
            <h2 id="pobocka-h">
              Kávu uvaříme, kameru předvedeme, systém naprogramujeme
            </h2>
            <p>
              Na Reissigově ulici v Králově Poli nakoupíte formou samoobslužného
              skladu — vezmete zboží z regálu jako v hobbymarketu. Na ukázkovém
              panelu porovnáte obraz jednotlivých kamer ve dne i za tmy. A když
              si nebudete vědět rady s nastavením, sedneme k tomu s vámi.
            </p>
            <ul className="pobocka-body-list">
              <li>Samoobslužný sklad — zboží ihned k odběru</li>
              <li>Ukázkový CCTV panel v provozu</li>
              <li>Pomoc s programováním zařízení a školení novinek</li>
              <li>Parkování vyhrazené pro zákazníky přímo u pobočky</li>
            </ul>
          </div>

          <aside className="pobocka-karta" aria-label="Kontakt na pobočku Brno">
            <span className="pk-osd" aria-hidden="true">CAM 01 · KRÁLOVO POLE</span>
            <dl>
              <div>
                <dt>Adresa</dt>
                <dd>Reissigova 281/11<br />612 00 Brno — Královo Pole</dd>
              </div>
              <div>
                <dt>Navigace na parkoviště</dt>
                <dd>Poděbradova 104, Brno</dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420541241740">+420 541 241 740</a><br />
                  <a href="tel:+420777794178">+420 777 794 178</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:brno@euroalarm.cz">brno@euroalarm.cz</a></dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="cisla-grid">
          {duvody.map((d) => (
            <div className="cislo" key={d.cislo}>
              <strong>{d.cislo}</strong>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
