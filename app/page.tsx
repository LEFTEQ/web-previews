export const metadata = {
  title: "JUDr. Petr Procházka — advokát, Brno",
  description:
    "Advokátní kancelář JUDr. Petra Procházky v Brně. Smlouvy, nemovitosti, spory, obhajoba. Srozumitelné právo, jasně řečené — první konzultace bez právničiny.",
  openGraph: {
    title: "JUDr. Petr Procházka — advokát, Brno",
    description:
      "Smlouvy, nemovitosti, spory, obhajoba. Advokát v Brně, který mluví srozumitelně.",
    locale: "cs_CZ",
    type: "website",
  },
  icons: {
    icon:
      "data:image/svg+xml," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230E1F2E'/><text x='16' y='22' font-family='Georgia,serif' font-size='16' fill='%23C7A44A' text-anchor='middle'>§</text></svg>`
      ),
  },
};

const sluzby = [
  {
    paragraf: "§ 1724",
    zakon: "občanský zákoník",
    nazev: "Smlouvy a závazky",
    text: "Kupní, nájemní a pracovní smlouvy, smlouvy o dílo. Připravím je tak, aby vás chránily — nebo zkontroluji ty, které vám někdo předložil k podpisu, ještě než podepíšete.",
  },
  {
    paragraf: "§ 1105",
    zakon: "občanský zákoník",
    nazev: "Nemovitosti",
    text: "Koupě a prodej bytu či domu, advokátní úschova kupní ceny, návrh na vklad do katastru, věcná břemena. Provedu vás celým převodem od rezervace po zápis vlastnictví.",
  },
  {
    paragraf: "§ 79",
    zakon: "občanský soudní řád",
    nazev: "Spory a vymáhání",
    text: "Dluží vám zákazník nebo bývalý partner? Předžalobní výzva, žaloba, zastupování před soudem i v exekuci. Předem vám řeknu, jaké máte šance a co vás to bude stát.",
  },
  {
    paragraf: "§ 33",
    zakon: "trestní řád",
    nazev: "Obhajoba v trestním řízení",
    text: "Předvolání na policii, obvinění, hlavní líčení. Čím dřív se ozvete, tím víc toho jde ovlivnit — u výslechu byste už měli mít obhájce vedle sebe.",
  },
  {
    paragraf: "§ 755",
    zakon: "občanský zákoník",
    nazev: "Rodinné právo",
    text: "Rozvod, péče o děti, výživné, vypořádání společného jmění. Citlivé věci řeším věcně a diskrétně — cílem je dohoda, soud až když to jinak nejde.",
  },
];

const zasady = [
  {
    cislo: "Do 48 hodin",
    popis:
      "odpovídám na každý dotaz. Když napíšete v pátek, nečekáte do středy — víte, na čem jste, ještě ten víkend.",
  },
  {
    cislo: "Cena předem",
    popis:
      "Před převzetím věci dostanete odhad nákladů písemně. Hodinová sazba, nebo pevná cena za úkon — žádné překvapení na faktuře.",
  },
  {
    cislo: "Bez právničiny",
    popis:
      "Rozsudek vám přeložím do normální řeči. Klient má rozumět tomu, co podepisuje a proč — jinak jsem svou práci neudělal.",
  },
];

export default function Page() {
  return (
    <main className="pp">
      {/* ===== HERO ===== */}
      <header className="pp-hero">
        <div className="pp-hero-inner">
          <div className="pp-brand">
            <span className="pp-brand-sign">§</span>
            <span className="pp-brand-name">
              Procházka<span className="pp-brand-dot">·</span>advokát
            </span>
          </div>

          <div className="pp-hero-grid">
            <div className="pp-hero-text">
              <p className="pp-hero-eyebrow">
                Advokátní kancelář — Brno, u Moravského náměstí
              </p>
              <h1 className="pp-hero-title">
                Právo je psané
                <br />
                <em>složitě.</em>
                <br />
                Já ho říkám
                <br />
                <strong>jasně.</strong>
              </h1>
              <p className="pp-hero-lead">
                Jsem JUDr. Petr Procházka, advokát zapsaný u České advokátní
                komory. Smlouvy, nemovitosti, spory a obhajoba — dvacet let
                praxe v Brně. Na první schůzce vám řeknu, co má smysl řešit a co
                ne. Bez paragrafů, kterým nerozumíte.
              </p>
              <div className="pp-hero-cta">
                <a className="pp-btn pp-btn-gold" href="tel:+420542210310">
                  Zavolat: 542 210 310
                </a>
                <a
                  className="pp-btn pp-btn-ghost"
                  href="mailto:advokat@prochazka-brno.cz"
                >
                  Napsat e-mail
                </a>
              </div>
            </div>

            {/* Signature: velký § jako iniciála iluminovaného rukopisu,
                s okrajovou poznámkou jako v komentovaném zákoně */}
            <div className="pp-hero-sign" aria-hidden="true">
              <span className="pp-sign-glyph">§</span>
              <span className="pp-sign-rule" />
              <span className="pp-sign-note">
                značka paragrafu —<br />
                jediný znak, který
                <br />
                mezi námi nebude
                <br />
                stát v cestě
              </span>
            </div>
          </div>

          <ul className="pp-hero-facts">
            <li>
              <strong>Ev. č. ČAK 04815</strong>
              <span>zapsaný advokát</span>
            </li>
            <li>
              <strong>Od r. 2004</strong>
              <span>samostatná praxe v Brně</span>
            </li>
            <li>
              <strong>Konzultace 30 min</strong>
              <span>první orientační schůzka</span>
            </li>
          </ul>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="pp-sluzby" aria-labelledby="sluzby-h">
        <div className="pp-wrap">
          <p className="pp-eyebrow">S čím za mnou lidé chodí</p>
          <h2 id="sluzby-h" className="pp-h2">
            Pět oblastí. V každé vám nejdřív řeknu,
            <br className="pp-br" /> jestli se vám to vyplatí.
          </h2>

          <ol className="pp-sluzby-list">
            {sluzby.map((s) => (
              <li key={s.paragraf} className="pp-sluzba">
                <div className="pp-sluzba-margin">
                  <span className="pp-sluzba-par">{s.paragraf}</span>
                  <span className="pp-sluzba-zakon">{s.zakon}</span>
                </div>
                <div className="pp-sluzba-body">
                  <h3>{s.nazev}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="pp-duvera" aria-labelledby="duvera-h">
        <div className="pp-wrap">
          <p className="pp-eyebrow pp-eyebrow-light">Jak pracuji</p>
          <h2 id="duvera-h" className="pp-h2 pp-h2-light">
            Tři pravidla, která v této kanceláři platí
            <br className="pp-br" /> pro každý případ.
          </h2>

          <div className="pp-zasady">
            {zasady.map((z) => (
              <article key={z.cislo} className="pp-zasada">
                <h3>{z.cislo}</h3>
                <p>{z.popis}</p>
              </article>
            ))}
          </div>

          <figure className="pp-citace">
            <blockquote>
              „Prodávali jsme dům po rodičích a báli se, aby nás někdo
              nenapálil. Pan doktor pohlídal smlouvu, peníze šly přes jeho
              úschovu a všechno nám vysvětlil tak, že jsme tomu poprvé v životě
              u právníka rozuměli.“
            </blockquote>
            <figcaption>
              — manželé Novotní, Brno-Židenice, převod rodinného domu (2024)
            </figcaption>
          </figure>

          <div className="pp-kancelar">
            <div className="pp-kancelar-item">
              <span className="pp-kancelar-label">Kancelář</span>
              <span>Kounicova 10, 602 00 Brno — 3. patro, výtah</span>
            </div>
            <div className="pp-kancelar-item">
              <span className="pp-kancelar-label">Úřední hodiny</span>
              <span>Po–Čt 9–17, Pá 9–14, jindy po domluvě</span>
            </div>
            <div className="pp-kancelar-item">
              <span className="pp-kancelar-label">Telefon</span>
              <a href="tel:+420542210310">+420 542 210 310</a>
            </div>
            <div className="pp-kancelar-item">
              <span className="pp-kancelar-label">E-mail</span>
              <a href="mailto:advokat@prochazka-brno.cz">
                advokat@prochazka-brno.cz
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
