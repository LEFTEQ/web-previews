import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alstec — zemní práce Brno | výkopy, základy, autodoprava",
  description:
    "Alstec s.r.o. z Brna dělá zemní práce, výkopy, základové desky, parkovací plochy i autodopravu sypkých materiálů. Certifikace pro nebezpečný stavební odpad a azbest.",
  openGraph: {
    title: "Alstec — zemní práce Brno",
    description:
      "Výkopy, terénní úpravy, základové desky, autodoprava štěrků a písků. Brno a okolí.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Pásový bagr při zemních pracích" }],
  },
};

const DEPTHS = [
  { m: "0,0", label: "terén", note: "Vytyčení, sejmutí ornice, srovnání pláně" },
  { m: "0,8", label: "základ", note: "Výkopy základů, jímek a přípojek" },
  { m: "1,5", label: "deska", note: "Založení staveb — desky pro zdivo, montované i dřevostavby" },
  { m: "3,2", label: "nájezd", note: "Podvalník s rozšířením ložné plochy až na 3,2 m" },
];

const SLUZBY = [
  {
    id: "01",
    name: "Přípravné práce pro stavby",
    text: "Terénní úpravy, zemní a svahovací práce, demolice, výkopy a odvodnění základů, výkopy jímek i rýhy pro inženýrské sítě. Pro soukromý i veřejný sektor.",
  },
  {
    id: "02",
    name: "Parkovací a odstavné plochy",
    text: "Výstavba parkovacích ploch a přilehlé infrastruktury, pokládka venkovní kamenné dlažby, nové komunikace i rekonstrukce těch stávajících.",
  },
  {
    id: "03",
    name: "Zakládání staveb",
    text: "Kompletní základové desky pro zděné, montované i dřevostavby. Včetně přípojek inženýrských sítí a hydroizolace spodní stavby.",
  },
  {
    id: "04",
    name: "Sypké materiály a odpad",
    text: "Prodej a dovoz štěrků, písků a sypkých hmot. Odvoz přebytečné zeminy i stavebního odpadu — postaráme se o to, co po stavbě zůstane.",
  },
];

export default function Page() {
  return (
    <main className="al">
      <header className="al-nav" aria-label="Hlavní navigace">
        <a className="al-mark" href="#uvod" aria-label="Alstec, úvod">
          <span className="al-mark__a">AL</span>
          <span className="al-mark__b">STEC</span>
          <span className="al-mark__sub">zemní práce · Brno</span>
        </a>
        <nav className="al-links" aria-label="Sekce">
          <a href="#sluzby">Co děláme</a>
          <a href="#duvera">O firmě</a>
          <a className="al-call al-call--nav" href="tel:+420720000000">Zavolat</a>
        </nav>
      </header>

      <section className="al-hero" id="uvod">
        <img
          className="al-hero__img"
          src="/hero.webp"
          alt="Pásový bagr při zemních pracích na stavbě v Brně"
          width={1600}
          height={1000}
        />
        <div className="al-hero__scrim" aria-hidden="true" />
        <div className="al-hero__inner">
          <p className="al-eyebrow">Alstec s.r.o. — Brno a okolí</p>
          <h1 className="al-hero__title">
            Než začne stavba,
            <br />
            <span>musí se hnout zem.</span>
          </h1>
          <p className="al-hero__lead">
            Výkopy, terénní úpravy a základové desky, na kterých pak stojí
            všechno ostatní. Přijedeme s bagrem i podvalníkem, srovnáme pláň,
            odvezeme přebytek. Vy stavíte dál.
          </p>
          <div className="al-hero__cta">
            <a className="al-call" href="tel:+420720000000">Zavolat na stavbu</a>
            <a className="al-ghost" href="#sluzby">Co všechno umíme</a>
          </div>
        </div>

        <div className="al-depth" aria-label="Hloubková stupnice prací">
          <span className="al-depth__title">metry pod nulou</span>
          <ol className="al-depth__scale">
            {DEPTHS.map((d) => (
              <li key={d.m} className="al-depth__row">
                <span className="al-depth__m">{d.m}<i>m</i></span>
                <span className="al-depth__label">{d.label}</span>
                <span className="al-depth__note">{d.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="al-sec" id="sluzby" aria-labelledby="sluzby-h">
        <div className="al-sec__head">
          <p className="al-kicker">Nabídka</p>
          <h2 id="sluzby-h">Čtyři věci, kvůli kterým nám voláte</h2>
          <p className="al-sec__sub">
            Od prvního záběru lopatou po hotovou desku. Většinu zvládneme
            vlastní technikou, takže nečekáte na subdodavatele.
          </p>
        </div>

        <div className="al-grid">
          <div className="al-grid__media">
            <img
              src="/section-1.webp"
              alt="Výkopové a zemní práce technikou Alstec"
              width={900}
              height={1100}
            />
          </div>
          <ol className="al-list">
            {SLUZBY.map((s) => (
              <li key={s.id} className="al-item">
                <span className="al-item__no">{s.id}</span>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="al-sec al-sec--dark" id="duvera" aria-labelledby="duvera-h">
        <div className="al-trust">
          <div className="al-trust__text">
            <p className="al-kicker al-kicker--light">O firmě</p>
            <h2 id="duvera-h">Dlouholetá praxe a papíry na to nejtěžší</h2>
            <p>
              Alstec děláme zemní a přípravné práce v Brně a okolí od roku 2016.
              Za tu dobu jsme srovnali plochy pod parkoviště, vykopali základy
              pod rodinné domy i vedli rýhy pro inženýrské sítě.
            </p>
            <p className="al-trust__hazard">
              Jsme certifikovaní pro nakládání se stavebním odpadem, který
              obsahuje nebezpečné látky a azbest — třeba eternit. Odstraníme ho
              za přísných podmínek tak, aby se nic nedostalo do okolí.
            </p>
            <dl className="al-facts">
              <div><dt>Od roku</dt><dd>2016</dd></div>
              <div><dt>Působíme</dt><dd>Brno a okolí</dd></div>
              <div><dt>Podvalník</dt><dd>až 3,2 m ložné plochy</dd></div>
              <div><dt>Azbest</dt><dd>certifikováno</dd></div>
            </dl>
            <a className="al-call al-call--onDark" href="tel:+420720000000">Domluvit práci</a>
          </div>
          <div className="al-trust__media">
            <img
              src="/section-2.webp"
              alt="Autodoprava sypkých materiálů a podvalník firmy Alstec"
              width={1000}
              height={800}
            />
            <p className="al-trust__cap">
              Autodoprava: štěrky, písky a sypké hmoty. Podvalníkem převezeme
              i pásový bagr nebo zemědělský stroj.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
