import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plochodrážní klub Plzeň — 90 let ovál, škvára a plný plyn",
  description:
    "Plochá dráha v Plzni už skoro 90 let. Přijďte fandit plzeňským jezdcům na ovál, staňte se závodníkem, nebo podpořte klub jako partner. Tréninky každou středu od 16:00.",
  openGraph: {
    title: "Plochodrážní klub Plzeň — 90 let na oválu",
    description:
      "Škvára, čtyři zatáčky, žádné brzdy. Plochá dráha a Plzeň patří k sobě už skoro devět desetiletí.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const zavody = [
  {
    trat: "333 m",
    label: "délka škvárového oválu",
    text: "Sypaná dráha, čtyři zatáčky proti směru hodin. Vnitřní obrubník je jediné, co jezdce dělí od plného plynu.",
  },
  {
    trat: "4",
    label: "jezdci v každé jízdě",
    text: "Čtyři stroje, čtyři barvy — červená, modrá, bílá, žlutá. Rozřazení na startovní čáře rozhoduje o taktice.",
  },
  {
    trat: "0",
    label: "brzd na motocyklu",
    text: "Plochodrážní stroj nemá brzdy ani převodovku. Jen jeden metanolem hnaný válec a smysl pro smyk.",
  },
];

const nabidka = [
  {
    kdo: "Chci na tribunu",
    nadpis: "Přijďte fandit na ovál",
    text:
      "Termíny domácích závodů MČR i Poháru AČR najdete v klubovém kalendáři. Vezměte děti, špunty do uší a dobrou náladu — na plzeňské škváře je slyšet každý plyn.",
    akce: "Zobrazit kalendář závodů",
  },
  {
    kdo: "Chci závodit",
    nadpis: "Staňte se plochodrážním jezdcem",
    text:
      "Bavil vás vždycky smyk a nebojíte se škváry v zubech? Přijďte ve středu na trénink od 16:00 nebo se nám ozvěte. Nábor nových jezdců běží celou sezónu.",
    akce: "Přijít na středeční trénink",
  },
  {
    kdo: "Chci podpořit klub",
    nadpis: "Hajte s námi plzeňské barvy",
    text:
      "Reklama na mantinelu stadionu, partnerství jezdce nebo podpora mládežnického náboru. Vaše značka pojede každou domácí sezónu s námi.",
    akce: "Domluvit partnerství",
  },
];

export default function Page() {
  return (
    <main className="pk">
      <header className="pk-nav">
        <a className="pk-mark" href="#" aria-label="Plochodrážní klub Plzeň, úvod">
          <span className="pk-mark-pk">PK</span>
          <span className="pk-mark-city">PLZEŇ</span>
          <span className="pk-mark-tag">plochá dráha · 1932</span>
        </a>
        <nav className="pk-nav-links" aria-label="Hlavní">
          <a href="#zavody">Ovál</a>
          <a href="#nabidka">Přijďte k nám</a>
          <a href="#klub">Klub</a>
        </nav>
      </header>

      <section className="pk-hero" aria-labelledby="pk-hero-h">
        <img
          className="pk-hero-img"
          src="/hero.webp"
          alt="Plochodrážní jezdec ve smyku na plzeňském škvárovém oválu, za motocyklem odletuje škvára"
        />
        <div className="pk-hero-scrim" aria-hidden="true" />
        <div className="pk-hero-inner">
          <p className="pk-eyebrow">Plzeň · škvára · plný plyn</p>
          <h1 id="pk-hero-h" className="pk-hero-h">
            Čtyři zatáčky.<br />
            Žádné brzdy.<br />
            <em>Skoro 90 let.</em>
          </h1>
          <p className="pk-hero-lead">
            Plochá dráha a město Plzeň patří k sobě od roku 1932. Sypaný ovál,
            metanol ve válcích a jezdci, kteří hájí plzeňské barvy před domácí tribunou.
          </p>
          <div className="pk-hero-cta">
            <a className="pk-btn pk-btn-fill" href="#nabidka">Přijít na závody</a>
            <a className="pk-btn pk-btn-line" href="#klub">Chci závodit</a>
          </div>
        </div>
        <p className="pk-hero-meta" aria-hidden="true">TRÉNINK · STŘEDA · 16:00</p>
      </section>

      <section id="zavody" className="pk-oval" aria-labelledby="pk-oval-h">
        <div className="pk-oval-head">
          <p className="pk-eyebrow pk-eyebrow-dark">Co je plochá dráha</p>
          <h2 id="pk-oval-h" className="pk-sec-h">
            Nejjednodušší motocykl na světě a jeden ovál, který o něm rozhodne.
          </h2>
        </div>
        <ol className="pk-oval-grid">
          {zavody.map((z) => (
            <li key={z.label} className="pk-oval-card">
              <span className="pk-oval-num">{z.trat}</span>
              <span className="pk-oval-label">{z.label}</span>
              <p className="pk-oval-text">{z.text}</p>
            </li>
          ))}
        </ol>
        <figure className="pk-oval-fig">
          <img
            src="/section-1.webp"
            alt="Detail plochodrážního motocyklu a jezdce připraveného na startu na plzeňské dráze"
          />
        </figure>
      </section>

      <section id="nabidka" className="pk-do" aria-labelledby="pk-do-h">
        <div className="pk-do-head">
          <p className="pk-eyebrow">Přijďte k nám</p>
          <h2 id="pk-do-h" className="pk-sec-h pk-sec-h-light">
            Ať jste divák, budoucí jezdec nebo partner — na plzeňské škváře máte místo.
          </h2>
        </div>
        <div className="pk-do-grid">
          {nabidka.map((n) => (
            <article key={n.nadpis} className="pk-do-card">
              <p className="pk-do-kdo">{n.kdo}</p>
              <h3 className="pk-do-nadpis">{n.nadpis}</h3>
              <p className="pk-do-text">{n.text}</p>
              <a className="pk-do-akce" href="#klub">
                {n.akce}
                <span aria-hidden="true" className="pk-arr">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="klub" className="pk-klub" aria-labelledby="pk-klub-h">
        <figure className="pk-klub-fig">
          <img
            src="/section-2.webp"
            alt="Plzeňští plochodrážní jezdci a mechanici v zákulisí závodního dne"
          />
        </figure>
        <div className="pk-klub-body">
          <p className="pk-eyebrow pk-eyebrow-dark">Klub od roku 1932</p>
          <h2 id="pk-klub-h" className="pk-sec-h">
            Za každým plynem stojí jezdec i celá dílna mechaniků.
          </h2>
          <p className="pk-klub-text">
            Plochodrážní klub Plzeň žije oválem už skoro devět desetiletí. Ukážeme
            vám zákulisí závodů, každodenní práci jezdců i jejich mechaniků a to,
            proč je tenhle sport i dnes stejně přitažlivý jako před generacemi.
          </p>
          <dl className="pk-fakta">
            <div className="pk-fakt">
              <dt>Poslední výsledky</dt>
              <dd>Štěpán Melč 4. v Poháru AČR jednotlivců — Praha, Markéta.</dd>
            </div>
            <div className="pk-fakt">
              <dt>MČR dvojic</dt>
              <dd>Štěpán Melč a Matěj Tůma 5. místo ve finále pro plzeňskou dráhu.</dd>
            </div>
            <div className="pk-fakt">
              <dt>Trénink náboru</dt>
              <dd>Každou středu od 16:00 přímo na klubovém okruhu v Plzni.</dd>
            </div>
          </dl>
          <a className="pk-btn pk-btn-fill" href="#nabidka">Ozvěte se klubu</a>
        </div>
      </section>
    </main>
  );
}
