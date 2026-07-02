const sluzby = [
  {
    nazev: "Autoservis",
    popis: "Kompletní servis evropských a korejských značek — brzdy, rozvody, podvozky, pravidelný servis.",
    cena: "od 600 Kč/hod",
    kod: "SRV",
  },
  {
    nazev: "Pneuservis",
    popis: "Přezutí a vyvážení osobních, užitkových i SUV vozidel do velikosti kol R19.",
    cena: "od 700 Kč",
    kod: "PNE",
  },
  {
    nazev: "Diagnostika",
    popis: "Originální diagnostika Delphi pro veškeré vozy do roku výroby 2023. Přesná závada, ne dohady.",
    cena: "od 500 Kč",
    kod: "DGN",
  },
  {
    nazev: "Klimatizace",
    popis: "Plnění, opravy a detekce úniků klimatizačních jednotek plynem R134A.",
    cena: "od 600 Kč",
    kod: "KLM",
  },
  {
    nazev: "Karosářské práce",
    popis: "Výměny a opravy zkorodovaných či jinak poškozených částí karoserie.",
    cena: "od 800 Kč/hod",
    kod: "KAR",
  },
  {
    nazev: "Motorářské práce",
    popis: "Generální opravy hlav, bloků motorů a jejich příslušenství.",
    cena: "od 800 Kč/hod",
    kod: "MTR",
  },
];

const sliby = [
  {
    krok: "Přistavíte vůz",
    text: "Zelinářská 1601/12, Plzeň 1. Po–Pá 9:00–17:00. Auto si projdeme spolu, řeknete mi, co zlobí.",
  },
  {
    krok: "Cenu znáte předem",
    text: "Cenovou nabídku posílám před zahájením práce. Bez odsouhlasení se do ničeho nepouštím.",
  },
  {
    krok: "Vidíte, co dělám",
    text: "Ke každé opravě fotím dokumentaci — staré díly, průběh práce, výsledek. Vždy o všem víte.",
  },
  {
    krok: "Do 48 hodin hotovo",
    text: "Běžné opravy mám hotové do 48 hodin od přistavení vozu. Když se něco protáhne, volám dřív, než se ptáte.",
  },
];

export default function Page() {
  return (
    <main className="rv">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Radek Vacek při práci na zvednutém voze ve své dílně v Plzni"
            className="hero-img"
          />
          <div className="hero-shade" aria-hidden="true"></div>
        </div>

        <div className="hero-top">
          <div className="wordmark">
            <span className="wordmark-tag">AUTOSERVIS</span>
            <span className="wordmark-name">VACEK</span>
          </div>
          <a className="hero-tel" href="tel:+420777689687">777 689 687</a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Zelinářská 12 · Plzeň 1 · dvacet let u zvedáku</p>
          <h1 className="hero-title">
            Opravím vám auto <br />
            <em>do 48 hodin.</em> <br />
            A cenu znáte předem.
          </h1>
          <div className="hero-zakazka" role="img" aria-label="Ukázka zakázkového listu: hodinová sazba 600 korun, cenová nabídka před zahájením práce, fotodokumentace ke každé opravě">
            <div className="zakazka-head">
              <span>ZAKÁZKOVÝ LIST</span>
              <span className="zakazka-cislo">č. 2024</span>
            </div>
            <dl className="zakazka-body">
              <div className="zakazka-row">
                <dt>Hodinová sazba, osobní vozy</dt>
                <dd>600 Kč</dd>
              </div>
              <div className="zakazka-row">
                <dt>Cenová nabídka</dt>
                <dd>před prací</dd>
              </div>
              <div className="zakazka-row">
                <dt>Fotodokumentace opravy</dt>
                <dd>vždy</dd>
              </div>
            </dl>
            <div className="zakazka-razitko" aria-hidden="true">R. VACEK · PLZEŇ</div>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <span className="section-kod" aria-hidden="true">CENÍK</span>
          <h2 id="sluzby-h">Co u mě opravíte</h2>
          <p className="section-sub">
            Evropské a korejské značky. Ceny jsou orientační — přesnou nabídku
            dostanete e-mailem dřív, než sáhnu na klíč.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.kod}>
              <div className="sluzba-head">
                <span className="sluzba-kod" aria-hidden="true">{s.kod}</span>
                <h3>{s.nazev}</h3>
              </div>
              <p>{s.popis}</p>
              <p className="sluzba-cena">{s.cena}</p>
            </article>
          ))}
        </div>

        <figure className="sluzby-foto">
          <img
            src="/section-1.webp"
            alt="Diagnostika Delphi připojená k řídicí jednotce vozu v dílně"
          />
          <figcaption>
            Originální diagnostika Delphi — čtu závady u vozů až do roku výroby 2023.
          </figcaption>
        </figure>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head section-head--invert">
          <span className="section-kod" aria-hidden="true">POSTUP</span>
          <h2 id="duvera-h">Jak to u mě chodí</h2>
          <p className="section-sub">
            Jsem jeden mechanik, ne přijímací pult. Mluvíte přímo s tím,
            kdo vaše auto opravuje.
          </p>
        </div>

        <div className="duvera-layout">
          <ol className="kroky">
            {sliby.map((k, i) => (
              <li className="krok" key={k.krok}>
                <span className="krok-cislo" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{k.krok}</h3>
                  <p>{k.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="duvera-side">
            <img
              src="/section-2.webp"
              alt="Fotodokumentace opravy — vyměněné díly položené vedle vozu"
              className="duvera-img"
            />
            <div className="duvera-info">
              <p className="duvera-info-title">Kde mě najdete</p>
              <address>
                Radek Vacek<br />
                Zelinářská 1601/12<br />
                301 00 Plzeň 1
              </address>
              <p className="duvera-hodiny">Po–Pá&nbsp;&nbsp;9:00–17:00</p>
              <p className="duvera-kontakt">
                <a href="tel:+420777689687">777 689 687</a><br />
                <a href="mailto:vacek.radek@email.cz">vacek.radek@email.cz</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
