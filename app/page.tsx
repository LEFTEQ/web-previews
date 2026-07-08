import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tichonov — překlady a tlumočení, Praha-Vinohrady",
  description:
    "Překlady do více než 40 jazyků, soudní překlady i tlumočení. Rodinná překladatelská kancelář na Vinohradech vede Ing. Alexandr Tichonov.",
  openGraph: {
    title: "Tichonov — překlady a tlumočení",
    description:
      "Překlady do 40+ jazyků, soudní překlady s razítkem i tlumočení. Praha 2 – Vinohrady.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const jazyky = [
  "angličtina",
  "ruština",
  "němčina",
  "francouzština",
  "ukrajinština",
  "polština",
  "španělština",
  "italština",
  "čínština",
  "arabština",
  "vietnamština",
  "maďarština",
];

const sluzby = [
  {
    kod: "01",
    nazev: "Překlady textů",
    popis:
      "Smlouvy, weby, návody, marketing i osobní korespondence. Přeložíme do více než 40 jazyků a případné chyby v cizojazyčném textu vám rovnou opravíme.",
    detail: "Do 40+ jazyků",
  },
  {
    kod: "02",
    nazev: "Soudní překlady",
    popis:
      "Úředně ověřené překlady s razítkem soudního tlumočníka — rodné a oddací listy, diplomy, výpisy z rejstříku, plné moci. Přijímá je úřad i soud.",
    detail: "S kulatým razítkem",
  },
  {
    kod: "03",
    nazev: "Tlumočení",
    popis:
      "U jednání, na svatbě s cizincem, u notáře nebo na úřadě. Doprovodíme vás osobně po Praze i online, aby si obě strany rozuměly do posledního slova.",
    detail: "Konsekutivní i doprovodné",
  },
  {
    kod: "04",
    nazev: "Jazykové kurzy",
    popis:
      "Individuální lekce angličtiny a ruštiny šité na míru — na cesty, do práce nebo na zkoušku. Tempo i témata si určujete sami.",
    detail: "Angličtina a ruština",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="Tichonov, překlady a tlumočení">
          <span className="wordmark__name">Tichonov</span>
          <span className="wordmark__sub">překlady &amp; tlumočení</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a href="tel:+420774441517" className="nav__phone">
            +420 774 441 517
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__text">
          <p className="eyebrow">Praha 2 — Vinohrady · od roku 2010</p>
          <h1 id="hero-title">
            Aby vám <em>rozuměli</em>
            <br />
            v každém jazyce.
          </h1>
          <p className="hero__lead">
            Rodinná překladatelská kancelář Ing. Alexandra Tichonova. Přeložíme
            smlouvu, ověříme diplom pro úřad i vás doprovodíme k notáři — do více
            než 40 světových jazyků.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420774441517">
              Zavolat pro cenu
            </a>
            <a className="btn btn--ghost" href="mailto:preklady@tichonov.cz">
              Poslat text k nacenění
            </a>
          </div>
        </div>
        <figure className="hero__media">
          <img
            src="/hero.webp"
            alt="Pracovní stůl překladatele s dokumenty a razítkem soudního tlumočníka"
            width={900}
            height={1100}
          />
          <figcaption className="hero__stamp">
            <span>razítko připraveno</span>
          </figcaption>
        </figure>
      </section>

      <section className="marquee" aria-label="Jazyky, do kterých překládáme">
        <ul>
          {jazyky.map((j) => (
            <li key={j}>{j}</li>
          ))}
          <li className="marquee__more">…a přes 40 dalších</li>
        </ul>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="sekce-hlava">
          <p className="eyebrow eyebrow--dark">Co pro vás uděláme</p>
          <h2 id="sluzby-title">Čtyři služby, jeden tým</h2>
        </div>
        <div className="sluzby__grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.kod}>
              <span className="karta__kod">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="karta__detail">{s.detail}</span>
            </article>
          ))}
        </div>
        <figure className="sluzby__foto">
          <img
            src="/section-1.webp"
            alt="Detail překládané smlouvy a ověřovacího razítka"
            loading="lazy"
            width={1200}
            height={700}
          />
        </figure>
      </section>

      <section className="onas" id="o-nas" aria-labelledby="onas-title">
        <figure className="onas__foto">
          <img
            src="/section-2.webp"
            alt="Ing. Alexandr Tichonov, zakladatel překladatelské kanceláře"
            loading="lazy"
            width={900}
            height={1000}
          />
        </figure>
        <div className="onas__text">
          <p className="eyebrow eyebrow--dark">Kdo za tím stojí</p>
          <h2 id="onas-title">
            Překlad není jen výměna slov.
          </h2>
          <p>
            Kancelář vede Ing. Alexandr Tichonov s malým, stálým týmem
            překladatelů a soudních tlumočníků. Nemáme call centrum ani anonymní
            objednávkový formulář — text čte a řeší konkrétní člověk, který se
            vám ozve a poradí.
          </p>
          <ul className="fakta">
            <li>
              <strong>40+</strong>
              <span>jazyků, do kterých překládáme</span>
            </li>
            <li>
              <strong>Od 2010</strong>
              <span>na Vinohradech na jednom místě</span>
            </li>
            <li>
              <strong>Osobně</strong>
              <span>vždy jednáte s překladatelem, ne s operátorem</span>
            </li>
          </ul>
          <address className="kontakt">
            <p>
              <strong>Blanická 1008/28</strong>
              <br />
              120 00 Praha 2 — Vinohrady
            </p>
            <p>
              <a href="tel:+420774441517">+420 774 441 517</a>
              <br />
              <a href="mailto:preklady@tichonov.cz">preklady@tichonov.cz</a>
            </p>
          </address>
        </div>
      </section>
    </main>
  );
}
