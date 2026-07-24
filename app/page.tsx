import { AiImage } from "./_ui";

const categories = [
  { name: "Textilní galanterie", desc: "Zdrhovadla, nitě, jehly, suché zipy i popruhy — základ každého šití." },
  { name: "Módní doplňky a textil", desc: "Náplety, prýmky, pruženky, šle a metráž na míru." },
  { name: "Korálky a komponenty", desc: "Korálky, karabiny, rolničky a bižuterní drátky." },
  { name: "Kreativní tvoření", desc: "Juta, aplikace a všechno pro vlastní nápady." },
  { name: "Slevy", desc: "Zlevněné kousky — dokud jsou skladem." },
];

const products = [
  { code: "310065", name: "Zdrhovadlo kostěné PH5 5 mm, 250 cm dělitelné", price: "87,60", unit: "ks", note: "černá", swatch: "#1c2b3a" },
  { code: "200048", name: "Bavlněný náplet elastický žebrovaný – tunel", price: "288,00", unit: "m", note: "Český výrobce", swatch: "#8a9b8e" },
  { code: "300110", name: "Bižuterní drátek 0,3 mm, 25 g", price: "79,20", unit: "ks", note: "bílé stříbro", swatch: "#c9cdd2" },
  { code: "190148", name: "Juta přírodní, šíře 30 cm, režná", price: "25,20", unit: "m", note: "přírodní", swatch: "#b79b6e" },
];

const trust = [
  { t: "Skladem a hned k odeslání", d: "Co vidíte skladem, balíme a posíláme z Ostravy. Nečekáte týdny na doskladnění." },
  { t: "Velkoobchod pro firmy, školy a organizace", d: "Po registraci s IČ se vám rovnou zobrazí velkoobchodní ceny." },
  { t: "Značíme původ zboží", d: "Český výrobce, Made in Germany, Made in Japan — víte přesně, co kupujete." },
  { t: "Poradíme s výběrem", d: "Nevíte, jaká jehla nebo jaké zdrhovadlo? Zavolejte po–pá 8–15 h." },
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero__inner">
          <div className="hero__text">
            <p className="eyebrow eyebrow--light">Textilní galanterie · Ostrava</p>
            <h1 className="hero__title">
              Drobnosti, které drží
              <span className="hero__accent"> šití pohromadě.</span>
            </h1>
            <p className="hero__lead">
              Zdrhovadla, nitě, knoflíky, korálky i metráž. V ostravské galanterii
              TKACZIK máme skladem tisíce drobností, co potřebuje každý šev —
              a prodáváme je na metry, karty i kusy.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#nabidka">Prohlédnout nabídku</a>
              <a className="btn btn--ghost" href="#novinky">Novinky skladem</a>
            </div>
            <ul className="hero__facts">
              <li>Skladem v Ostravě</li>
              <li>Čeští i světoví výrobci</li>
              <li>Velkoobchod pro firmy a školy</li>
            </ul>
          </div>
          <div className="hero__media">
            <AiImage src="/hero.webp" alt="Výběr galanterie TKACZIK — zdrhovadla, nitě, korálky a stuhy" className="media media--hero" />
          </div>
        </div>
        <div className="ruler" aria-hidden="true">
          <div className="ruler__ticks" />
          <div className="wrap ruler__row">
            <span className="ruler__caption">Všechno u nás měříme přesně</span>
            <span className="ruler__scale">centimetry · metry · karty · kusy</span>
          </div>
        </div>
      </section>

      <section className="section" id="nabidka">
        <div className="wrap">
          <header className="head">
            <p className="eyebrow">Nabídka</p>
            <h2 className="head__title">Co u nás najdete</h2>
            <p className="head__lead">Pět oddělení, jedna adresa. Od zdrhovadla po korálek — a mezi tím všechno, co potřebujete k šití, opravám i tvoření.</p>
          </header>

          <ul className="cats">
            {categories.map((c) => (
              <li className="cat" key={c.name}>
                <span className="cat__tab">{c.name}</span>
                <p className="cat__desc">{c.desc}</p>
              </li>
            ))}
          </ul>

          <div className="banner">
            <AiImage src="/section-1.webp" alt="Barevné korálky, drátky a komponenty pro kreativní tvoření" className="media media--banner" />
            <div className="banner__note">
              <p className="eyebrow">Kreativní tvoření</p>
              <p className="banner__text">Léto plné barev a nápadů — bižuterní drátky, korálky a komponenty pro vlastní výrobu.</p>
            </div>
          </div>

          <div className="sub" id="novinky">
            <p className="eyebrow">Novinky skladem</p>
            <h3 className="sub__title">Kousky, které právě dorazily</h3>
          </div>

          <ul className="prods">
            {products.map((p) => (
              <li className="prod" key={p.code}>
                <div className="prod__top">
                  <span className="prod__swatch" style={{ background: p.swatch }} aria-hidden="true" />
                  <span className="prod__stock">skladem</span>
                </div>
                <p className="prod__name">{p.name}</p>
                <p className="prod__meta">Číslo {p.code} · {p.note}</p>
                <p className="prod__price"><span className="prod__num">{p.price}</span> Kč <span className="prod__unit">/ {p.unit}</span></p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--trust">
        <div className="wrap trust__grid">
          <div className="trust__media">
            <AiImage src="/section-2.webp" alt="Regály ostravské galanterie plné nití, stuh a drobného zboží" className="media media--tall" />
          </div>
          <div className="trust__body">
            <p className="eyebrow">O nás</p>
            <h2 className="head__title">Ostravská galanterie, na kterou je spoleh</h2>
            <p className="head__lead">Vedeme drobné zboží, které jinde sháníte po kouskách. Poznáte to podle jednoho: skoro všechno máme rovnou skladem.</p>
            <ul className="trust__list">
              {trust.map((it) => (
                <li className="trust__item" key={it.t}>
                  <h4 className="trust__t">{it.t}</h4>
                  <p className="trust__d">{it.d}</p>
                </li>
              ))}
            </ul>
            <p className="trust__contact">Zavolejte: +420 777 111 222 · Ukázková 123, Ostrava · po–pá 8–15 h.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
