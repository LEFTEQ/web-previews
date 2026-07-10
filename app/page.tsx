import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ToAuto, s.r.o. — autodoprava a zemní práce, Ústí nad Labem",
  description:
    "Autodoprava a zemní práce v Ústí nad Labem a okolí. Sypké materiály, kontejnery, přesuny strojů i výkopy. Naložíme, odvezeme, uklidíme — rychle a za jasnou cenu.",
  openGraph: {
    title: "ToAuto, s.r.o. — autodoprava a zemní práce, Ústí nad Labem",
    description:
      "Odvoz sypkých materiálů, přistavení kontejnerů a zemní práce v Ústeckém kraji. Zavolejte a domluvíme termín.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Nákladní vozidlo ToAuto při odvozu materiálu" }],
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Odvoz a dovoz materiálu",
    popis:
      "Písek, štěrk, kamenivo, zemina, betonový recyklát. Naložíme na lomu nebo u vás, dovezeme přesně tam, kde stavíte. Sklápěč s hydraulickou rukou zvládne i těžší kusy bez jeřábu.",
    detail: "Sklápěč do 12 t · hydraulická ruka · Ústí a okolí do 50 km",
  },
  {
    kod: "02",
    nazev: "Kontejnery na suť a odpad",
    popis:
      "Přistavíme kontejner na stavební suť, zeminu nebo zelený odpad, necháme ho u vás, jak potřebujete, a odvezeme na schválenou skládku. Postaráme se i o papíry o likvidaci.",
    detail: "Objem 3–9 m³ · přistavení do 24 hodin · doklad o uložení",
  },
  {
    kod: "03",
    nazev: "Zemní práce a výkopy",
    popis:
      "Výkopy základů, přípojek a jímek, srovnání terénu, hrubé terénní úpravy. Kombinujeme rypadlo s odvozem, takže nemusíte hledat dvě firmy a domlouvat je dohromady.",
    detail: "Minibagr · výkopy přípojek · srovnání pozemku",
  },
  {
    kod: "04",
    nazev: "Přesun techniky a strojů",
    popis:
      "Naložíme a převezeme minibagr, vibrační desku nebo paletu materiálu mezi stavbami. Řešíme jednorázové přesuny i pravidelnou obsluhu vašich zakázek.",
    detail: "Valník s plachtou · nájezdy · fixace nákladu",
  },
];

const reference = [
  {
    text:
      "Potřeboval jsem odvézt suť z rekonstrukce baráku na Střekově a přivézt štěrk pod dlažbu. Domluva po telefonu, druhý den ráno kontejner na místě.",
    kdo: "Petr M.",
    misto: "Ústí nad Labem – Střekov",
  },
  {
    text:
      "Dělali nám výkop pro přípojku vody i s odvozem přebytečné zeminy. Přijeli včas, po sobě uklidili a cenu řekli dopředu, žádné dorovnávání.",
    kdo: "Jana K.",
    misto: "Chabařovice",
  },
];

export default function Page() {
  return (
    <main className="ta">
      <header className="ta-nav">
        <a className="ta-logo" href="#top" aria-label="ToAuto, s.r.o. — úvod">
          <span className="ta-logo-to">To</span>
          <span className="ta-logo-auto">Auto</span>
          <span className="ta-logo-suffix">s.r.o.</span>
        </a>
        <nav className="ta-navlinks" aria-label="Hlavní nabídka">
          <a href="#sluzby">Co vozíme</a>
          <a href="#reference">Reference</a>
          <a className="ta-nav-cta" href="tel:+420602000000">Zavolat</a>
        </nav>
      </header>

      <section className="ta-hero" id="top">
        <div className="ta-hero-media">
          <img
            src="/hero.webp"
            alt="Nákladní sklápěč ToAuto s naloženým materiálem připravený k odvozu"
            width={1600}
            height={1000}
            className="ta-hero-img"
          />
          <div className="ta-hero-plate" aria-hidden="true">
            <span className="ta-plate-flag">CZ</span>
            <span className="ta-plate-num">U · TO AUTO</span>
          </div>
        </div>

        <div className="ta-hero-body">
          <p className="ta-eyebrow">Autodoprava &amp; zemní práce · Ústí nad Labem</p>
          <h1 className="ta-h1">
            Naložíme, odvezeme,
            <br />
            <span className="ta-h1-accent">uklidíme po sobě.</span>
          </h1>
          <p className="ta-lede">
            Sypké materiály, kontejnery na suť i výkopy — jeden telefonát a máte vyřešený
            odvoz i dovoz na stavbu. Jezdíme po Ústí nad Labem a okolí do padesáti kilometrů.
          </p>
          <div className="ta-hero-actions">
            <a className="ta-btn" href="tel:+420602000000">Zavolat a domluvit odvoz</a>
            <a className="ta-btn ta-btn-ghost" href="#sluzby">Co všechno vozíme</a>
          </div>
          <dl className="ta-stats">
            <div>
              <dt>Sklápěč</dt>
              <dd>do 12 t</dd>
            </div>
            <div>
              <dt>Kontejner</dt>
              <dd>do 24 h</dd>
            </div>
            <div>
              <dt>Dojezd</dt>
              <dd>50 km</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ta-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="ta-section-head">
          <p className="ta-eyebrow">Nákladový list</p>
          <h2 id="sluzby-nadpis" className="ta-h2">Co naložíme na korbu</h2>
          <p className="ta-section-lede">
            Čtyři věci, kvůli kterým nám lidé v Ústí volají nejčastěji. Nevíte, do které kolonky
            vaše zakázka patří? Zavolejte a poradíme — většinu vyřešíme jedním výjezdem.
          </p>
        </div>

        <ol className="ta-list">
          {sluzby.map((s) => (
            <li className="ta-item" key={s.kod}>
              <span className="ta-item-kod" aria-hidden="true">{s.kod}</span>
              <div className="ta-item-body">
                <h3 className="ta-item-nazev">{s.nazev}</h3>
                <p className="ta-item-popis">{s.popis}</p>
                <p className="ta-item-detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="ta-figure">
          <img
            src="/section-1.webp"
            alt="Práce ToAuto v terénu — nakládání a odvoz sypkého materiálu"
            width={1400}
            height={900}
            className="ta-figure-img"
          />
          <figcaption>Stavba na Střekově — odvoz suti a dovoz kameniva v jednom dni.</figcaption>
        </figure>
      </section>

      <section className="ta-onas" id="reference" aria-labelledby="onas-nadpis">
        <div className="ta-onas-grid">
          <div className="ta-onas-text">
            <p className="ta-eyebrow">Kdo za volantem sedí</p>
            <h2 id="onas-nadpis" className="ta-h2">Malá firma z Ústí, co bere telefon</h2>
            <p className="ta-onas-p">
              ToAuto je rodinná autodoprava, která zná zdejší lomy, skládky i to, jak se dá
              zajet ke stavbě v úzké ulici na Klíši. Domluvíte se přímo s tím, kdo pro vás
              pojede — žádná dispečerská linka, žádné přehazování mezi lidmi.
            </p>
            <ul className="ta-vypis">
              <li>Cenu řekneme dopředu, na místě ji nenavyšujeme.</li>
              <li>Suť vozíme jen na schválené skládky a doklad vám dáme.</li>
              <li>Termín se snažíme dodržet i o víkendu, když stavba nemůže čekat.</li>
            </ul>
          </div>
          <figure className="ta-onas-figure">
            <img
              src="/section-2.webp"
              alt="Technika ToAuto při zemních pracích a nakládce"
              width={1200}
              height={1400}
              className="ta-onas-img"
            />
          </figure>
        </div>

        <div className="ta-ref">
          {reference.map((r, i) => (
            <blockquote className="ta-ref-card" key={i}>
              <p className="ta-ref-text">„{r.text}"</p>
              <footer className="ta-ref-foot">
                <span className="ta-ref-kdo">{r.kdo}</span>
                <span className="ta-ref-misto">{r.misto}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
