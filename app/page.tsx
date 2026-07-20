const SERVICES = [
  {
    cat: "Prevence",
    name: "Vstupní prohlídka",
    desc: "Komplexní vyšetření chrupu i dásní. Projdeme spolu stav vašich zubů a navrhneme plán péče na míru.",
    price: "od 700 Kč",
  },
  {
    cat: "Prevence",
    name: "Dentální hygiena",
    desc: "Odstranění zubního kamene a pigmentací, air-flow a nácvik čištění, se kterým doma opravdu pohnete.",
    price: "od 1 300 Kč",
  },
  {
    cat: "Ošetření",
    name: "Mikroskopie",
    desc: "Pracujeme pod zvětšením, takže vidíme každý detail. Přesnější zákrok, méně vrtání a šetrnější k zubu.",
    price: "součást ošetření",
  },
  {
    cat: "Ošetření",
    name: "Endodontické ošetření",
    desc: "Ošetření kořenových kanálků pod mikroskopem. Zachráníme i zub, který by jinde už neměl šanci.",
    price: "od 3 500 Kč",
  },
  {
    cat: "Ošetření",
    name: "Záchovná stomatologie",
    desc: "Bílé plomby v barvě vašeho zubu. Cílem je vždy zachránit co nejvíc z vlastního chrupu.",
    price: "od 1 200 Kč",
  },
  {
    cat: "Náhrady",
    name: "Protetické ošetření",
    desc: "Korunky a můstky, které vypadají i fungují jako vlastní zuby. Přesně padnou a vydrží.",
    price: "na konzultaci",
  },
  {
    cat: "Náhrady",
    name: "Zubní implantáty",
    desc: "Pevná náhrada chybějícího zubu, aniž bychom brousili zuby vedle. Znovu se zakousnete bez obav.",
    price: "na konzultaci",
  },
  {
    cat: "Digitální",
    name: "3D skenování",
    desc: "Digitální otisk bez nepříjemné otiskovací hmoty. Sken za pár minut a přesný podklad pro váš plán.",
    price: "od 900 Kč",
  },
  {
    cat: "Chirurgie",
    name: "Dentoalveolární chirurgie",
    desc: "Šetrné extrakce a menší zákroky v místním znecitlivění. Klidně, s rozvahou a bez spěchu.",
    price: "od 1 500 Kč",
  },
];

const REVIEWS = [
  {
    text: "Skvělý personál mi pomohl zbavit se strachu ze zubaře. Teď si tam chodím spíš odpočinout. Jen tak dál.",
    name: "Honza",
  },
  {
    text: "Skvělý přístup k dětem i dospělým. Děti se vůbec nebojí a já už taky ne.",
    name: "Iveta P.",
  },
  {
    text: "Nejlepší zubní ordinace. Velkým pozitivem je obrovská trpělivost s pacientem. Mají můj obdiv.",
    name: "Miša K.",
  },
  {
    text: "Naprostá spokojenost, super individuální přístup. Přestal jsem se bát chodit k zubaři.",
    name: "Michal V.",
  },
];

function SmileArc({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 40"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M6 30 C 92 8, 228 8, 314 30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  );
}

function CardCap() {
  return (
    <svg
      className="card__cap"
      viewBox="0 0 200 18"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M4 14 C 60 4, 140 4, 196 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="hero__inner">
          <div className="wordmark">
            <span className="wordmark__mark">LB</span>
            <span className="wordmark__name">Dent</span>
          </div>
          <p className="eyebrow eyebrow--light">Dentální hygiena &middot; Liberec</p>
          <h1 className="hero__title">
            Krásný a zdravý
            <span className="hero__smile">
              úsměv.
              <SmileArc className="hero__arc" />
            </span>
          </h1>
          <p className="hero__lead">
            Kvalitně a bez bolesti. Ošetříme vás šetrně, moderními postupy
            a s férovou cenou &mdash; ať je vám osm nebo osmdesát.
          </p>
          <div className="hero__foot">
            <a className="btn" href="#sluzby">Prohlédnout služby a ceník</a>
            <ul className="chips">
              <li>Bez bolesti</li>
              <li>Mikroskopie</li>
              <li>3D sken</li>
              <li>Oblíbená hudba u zákroku</li>
            </ul>
          </div>
        </div>
      </header>

      <section className="section" id="sluzby">
        <div className="section__head">
          <p className="eyebrow">Služby a ceník</p>
          <h2 className="section__title">Co pro váš úsměv uděláme</h2>
          <SmileArc className="title-arc" />
          <p className="section__lead">
            Od preventivní prohlídky přes dentální hygienu až po ošetření pod
            mikroskopem. Ceny jsou orientační &mdash; přesnou částku vždy
            potvrdíme při vyšetření, žádné překvapení na konci.
          </p>
        </div>

        <ul className="catalog">
          {SERVICES.map((s) => (
            <li className="card" key={s.name}>
              <CardCap />
              <p className="card__cat">{s.cat}</p>
              <h3 className="card__title">{s.name}</h3>
              <p className="card__desc">{s.desc}</p>
              <p className="card__price">{s.price}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section--trust">
        <div className="about">
          <div className="about__head">
            <p className="eyebrow eyebrow--light">O nás</p>
            <h2 className="section__title section__title--light">
              Tým, u kterého se přestanete bát
            </h2>
            <SmileArc className="title-arc title-arc--light" />
          </div>
          <p className="about__text">
            O váš úsměv se stará tým zkušených a trpělivých lékařek a sester
            pod vedením MDDr. Marcely Krajbichové. Ošetřujeme šetrně, moderními
            postupy a bez zbytečného spěchu. Ulehnete do křesla, pustíme vám
            vaši oblíbenou hudbu a v klidu počkáte na svůj nový úsměv.
          </p>
        </div>

        <div className="section__head">
          <p className="eyebrow">Reference</p>
          <h2 className="section__title">Napsali o nás</h2>
          <SmileArc className="title-arc" />
        </div>

        <ul className="reviews">
          {REVIEWS.map((r) => (
            <li className="review" key={r.name}>
              <p className="review__text">&bdquo;{r.text}&ldquo;</p>
              <p className="review__name">{r.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
