import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Casa de Pizza — pizza z pece, Hradec Králové",
  description:
    "Pizzerie La Casa de Pizza v Hradci Králové. Classic, Premium i Exclusive ve dvou velikostech, čerstvé těsto a česnekovo-rozmarýnový olej. Rozvoz i vyzvednutí.",
};

const velikosti = [
  {
    rada: "Classic",
    popis: "Poctivé základy — rajčatová omáčka, mozzarella a klasické kombinace, které nezklamou.",
    mala: "189–219",
    velka: "239–269",
    priklady: ["Margherita", "Šunková", "Americana", "Vegetariana"],
  },
  {
    rada: "Premium",
    popis: "O úroveň výš — tandoori kuře, hermelín s brusinkami, niva, karamelizovaná cibulka.",
    mala: "229",
    velka: "299",
    priklady: ["Don Ferda", "BBQ special", "Hermelín, brusinky", "Tandoori"],
  },
  {
    rada: "Exclusive",
    popis: "Vrchol nabídky. Naše nejvýraznější kombinace pro ty, kdo si chtějí dát skutečně nadstandard.",
    mala: "na jídelníčku",
    velka: "na jídelníčku",
    priklady: ["Sezónní speciály", "Prémiové sýry", "Výběrové maso"],
  },
];

const znacky = [
  { text: "NOVINKA", tridaSuffix: "novinka" },
  { text: "DOPORUČUJEME", tridaSuffix: "doporucujeme" },
  { text: "VEGETARIÁNSKÉ", tridaSuffix: "vege" },
  { text: "PÁLIVÉ", tridaSuffix: "palive" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="La Casa de Pizza — domů">
          <span className="wordmark__la">La Casa</span>
          <span className="wordmark__de">de</span>
          <span className="wordmark__pizza">Pizza</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#rady">Pizzy</a>
          <a href="#pec">O peci</a>
          <a className="topnav__cta" href="tel:+420737737970">Objednat 737&nbsp;737&nbsp;970</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Čerstvě upečená pizza La Casa de Pizza s roztavenou mozzarellou"
            className="hero__img"
            width={1600}
            height={1200}
          />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Pizzerie · Hradec Králové</p>
          <h1 id="hero-nadpis" className="hero__title">
            Těsto, olej,
            <span className="hero__accent"> sýr.</span>
            <br />
            Nic navíc, na čem
            <br />
            by nesešlo.
          </h1>
          <p className="hero__lead">
            Každou pizzu zakládáme na čerstvém těstě a česnekovo-rozmarýnovém
            oleji. Z toho pak roste všechno ostatní — od Margherity po Exclusive.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420737737970">
              Zavolat a objednat
            </a>
            <a className="btn btn--ghost" href="#rady">
              Prohlédnout pizzy
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Velikosti</dt>
              <dd>32 &amp; 40 cm</dd>
            </div>
            <div>
              <dt>Řady</dt>
              <dd>Classic · Premium · Exclusive</dd>
            </div>
            <div>
              <dt>Od</dt>
              <dd>79 Kč</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="rady" id="rady" aria-labelledby="rady-nadpis">
        <div className="section-head">
          <p className="eyebrow">Jídelníček</p>
          <h2 id="rady-nadpis">Tři řady, dvě velikosti</h2>
          <p className="section-head__lead">
            Vybíráte podle chuti i podle toho, jak moc velký máte hlad. Malá 32
            cm akorát pro jednoho, velká 40 cm k rozdělení.
          </p>
        </div>

        <div className="rady__grid">
          {velikosti.map((r, i) => (
            <article className="rada" key={r.rada}>
              <div className="rada__index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="rada__name">{r.rada}</h3>
              <p className="rada__desc">{r.popis}</p>
              <ul className="rada__list">
                {r.priklady.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="rada__prices">
                <span>
                  <b>32 cm</b> {r.mala} Kč
                </span>
                <span>
                  <b>40 cm</b> {r.velka} Kč
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="tags" aria-label="Značky u jídel">
          <span className="tags__label">Na jídelníčku značíme:</span>
          {znacky.map((z) => (
            <span key={z.text} className={`tag tag--${z.tridaSuffix}`}>
              {z.text}
            </span>
          ))}
        </div>
      </section>

      <section className="pec" id="pec" aria-labelledby="pec-nadpis">
        <div className="pec__media">
          <img
            src="/section-1.webp"
            alt="Detail těsta a přípravy pizzy v pizzerii La Casa de Pizza"
            width={1200}
            height={900}
          />
        </div>
        <div className="pec__text">
          <p className="eyebrow">Od čeho to začíná</p>
          <h2 id="pec-nadpis">Pizza chleba — náš podpis</h2>
          <p>
            Nejlíp poznáte kuchyni podle toho nejjednoduššího. U nás je to pizza
            chleba: pizza těsto, česnekovo-rozmarýnový olej a směs tvrdých sýrů.
            Šest kousků, kterými se dá začít i vystačit.
          </p>
          <p className="pec__price">Pizza chleba — 79 Kč</p>
          <div className="pec__extras">
            <img
              src="/section-2.webp"
              alt="Výběr pizz z nabídky La Casa de Pizza"
              width={900}
              height={700}
            />
            <ul className="pec__points">
              <li>Čerstvé těsto, žádné polotovary</li>
              <li>Vegetariánské i pálivé varianty jasně značené</li>
              <li>Panini, dipy, nápoje a zmrzlina Ben &amp; Jerry&apos;s</li>
              <li>Seznam alergenů ke každému jídlu</li>
            </ul>
          </div>
          <a className="btn btn--solid" href="tel:+420737737970">
            Objednat na 737&nbsp;737&nbsp;970
          </a>
        </div>
      </section>
    </main>
  );
}
