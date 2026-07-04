export const metadata = {
  title: "Autoservis Olša a Utíkal — pneuservis Olomouc",
  description:
    "Přezutí, opravy a uskladnění pneumatik v Olomouci. Specializovaný servis Škoda, Volkswagen, Audi a Seat na I. P. Pavlova. Objednejte se telefonem.",
  openGraph: {
    title: "Autoservis Olša a Utíkal — pneuservis Olomouc",
    description:
      "Přezutí, vyvážení a uskladnění pneumatik v Olomouci. Poctivá práce na značkách Škoda, VW, Audi a Seat.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Pneuservis Autoservis Olša a Utíkal v Olomouci" }],
  },
};

const sluzby = [
  {
    id: "R",
    nazev: "Přezutí a montáž",
    popis:
      "Zujeme letní, obujeme zimní — nebo naopak. Sada čtyř kol s vyvážením zvládneme, než dopijete kávu na Pavlárně.",
    detail: "osobní i užitkové",
  },
  {
    id: "B",
    nazev: "Vyvážení a geometrie",
    popis:
      "Když volant v rychlosti tancuje, chybí gramy na správném místě. Vyvážíme na stroji a srovnáme, aby guma nesjížděla do stran.",
    detail: "na počkání",
  },
  {
    id: "P",
    nazev: "Opravy defektů",
    popis:
      "Píchlá pneumatika v běhu dne? Zalepíme, zavulkanizujeme knot, u ráfku srovnáme drobný ohyb. Pokud to guma neunese, řekneme to na rovinu.",
    detail: "ihned",
  },
  {
    id: "U",
    nazev: "Uskladnění pneu",
    popis:
      "Druhá sada leží u nás v suchu a chladu, popsaná vaší značkou. Na jaře i na podzim si ji jen vyzvednete přezuté na autě.",
    detail: "sezónní depozit",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="top">
        <a className="mark" href="#" aria-label="Autoservis Olša a Utíkal, domů">
          <span className="mark-o">O</span>
          <span className="mark-amp">&amp;</span>
          <span className="mark-u">U</span>
          <span className="mark-sub">pneuservis · Olomouc</span>
        </a>
        <a className="top-call" href="tel:+420777004937">
          777&nbsp;004&nbsp;937
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Přezouvání pneumatiky na vyvažovačce v dílně pneuservisu"
            className="hero-img"
          />
          <span className="hero-tape" aria-hidden="true">
            ŠKODA · VOLKSWAGEN · AUDI · SEAT
          </span>
        </div>

        <div className="hero-text">
          <p className="eyebrow">Pneuservis na I. P. Pavlova · od 2013</p>
          <h1 id="hero-h">
            Sundat, vyvážit,
            <span className="h-hl"> nasadit.</span>
            <br />
            Kus poctivé práce
            <br />
            na čtyřech kolech.
          </h1>
          <p className="lede">
            Sezónní přezutí, opravy defektů a uskladnění gum v Olomouci.
            Jezdí k nám škodovky, volkswageny, audi i seaty — a domů odjíždějí
            rovně.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420777004937">
              Zavolat na servis
            </a>
            <a className="btn btn-ghost" href="mailto:autoservisolsaautikal@seznam.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="hero-addr">
            I. P. Pavlova 740/126, Olomouc · záložní linka 585&nbsp;411&nbsp;328
          </p>
        </div>
      </section>

      <section className="work" aria-labelledby="work-h">
        <div className="sec-head">
          <p className="eyebrow">Co u nás vyřešíte</p>
          <h2 id="work-h">Práce s gumou od A do Z</h2>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.id}>
              <span className="card-tread" aria-hidden="true">
                {s.id}
              </span>
              <div className="card-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <span className="card-tag">{s.detail}</span>
              </div>
            </li>
          ))}
        </ol>

        <figure className="work-fig">
          <img
            src="/section-1.webp"
            alt="Naskladněné pneumatiky připravené na sezónní přezutí"
            className="work-img"
          />
          <figcaption>
            Vaše zimní sada čeká v depozitu, popsaná a připravená — na jaře
            jen zavoláte.
          </figcaption>
        </figure>
      </section>

      <section className="about" aria-labelledby="about-h">
        <figure className="about-fig">
          <img
            src="/section-2.webp"
            alt="Mechanik autoservisu Olša a Utíkal při práci v dílně v Olomouci"
            className="about-img"
          />
        </figure>
        <div className="about-text">
          <p className="eyebrow">O dílně</p>
          <h2 id="about-h">Dva chlapi, jedna dílna, žádné kličky</h2>
          <p>
            Autoservis Olša a Utíkal jezdí v Olomouci od roku 2013. Nejsme
            řetězec — jsme dílna, kde vám ruku podá ten, kdo vám auto obslouží.
            Specializujeme se na koncern VW: Škoda, Volkswagen, Audi a Seat
            známe do posledního šroubu.
          </p>
          <ul className="proof">
            <li>
              <strong>Řekneme rovnou</strong>, co guma vydrží a co ne — než
              utratíte za novou sadu zbytečně.
            </li>
            <li>
              <strong>Přezutí na počkání</strong> — sadu kol s vyvážením
              zvládneme během jednoho zastavení.
            </li>
            <li>
              <strong>Pevné místo</strong> na I. P. Pavlova, kde nás najdete
              i příští sezónu.
            </li>
          </ul>
          <div className="hours">
            <span className="hours-lbl">Objednávky a dotazy</span>
            <a href="tel:+420777004937">777&nbsp;004&nbsp;937</a>
            <a href="mailto:autoservisolsaautikal@seznam.cz">
              autoservisolsaautikal@seznam.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
