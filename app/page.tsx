import { AiImage } from "./_ui";
import { CountUp } from "./motion";

type Rings = { r: number; w: number; c: string }[];

function CrossSection({
  id,
  dn,
  stamp,
  pipe,
}: {
  id: string;
  dn: string;
  stamp: string;
  pipe: string;
}) {
  const rings: Rings = [
    { r: 47, w: 1.5, c: "var(--concrete)" },
    { r: 40, w: 4.5, c: pipe },
    { r: 32, w: 1.5, c: "var(--teal)" },
    { r: 28, w: 1, c: "var(--graphite)" },
  ];
  return (
    <svg className="ring" viewBox="0 0 100 100" role="img" aria-hidden="true">
      <defs>
        <path id={`arc-${id}`} d="M50,50 m0,-43 a43,43 0 1,1 -0.01,0" />
      </defs>
      <circle cx="50" cy="50" r="47.5" className="ring-bed" />
      <circle cx="50" cy="50" r="28" className="ring-bore" />
      {rings.map((rg, i) => (
        <circle
          key={i}
          cx="50"
          cy="50"
          r={rg.r}
          fill="none"
          stroke={rg.c}
          strokeWidth={rg.w}
        />
      ))}
      <text className="ring-stamp">
        <textPath href={`#arc-${id}`} startOffset="1%">
          {stamp}
        </textPath>
      </text>
      <text x="50" y="51.5" className="ring-dn" textAnchor="middle">
        {dn}
      </text>
    </svg>
  );
}

const services = [
  {
    id: "s1",
    dn: "DN 300",
    pipe: "var(--blue)",
    stamp: "PEHD · TVÁRNÁ LITINA · DN 300 · SN8 · ",
    idx: "SPEC. 01",
    title: "Vodovody a kanalizace",
    body: "Pokládáme vodovodní řady i splaškové a dešťové kanalizace. Materiál vybíráme podle tlaku, spádu a podloží — ne podle toho, co je zrovna na skladě.",
    tags: ["PVC", "PEHD", "SKLOLAMINÁT", "TVÁRNÁ LITINA", "KAMENINA"],
  },
  {
    id: "s2",
    dn: "DN 800",
    pipe: "var(--concrete-dk)",
    stamp: "BETON · PREFABRIKÁT · DN 800 · RETENCE · ",
    idx: "SPEC. 02",
    title: "Objekty na inženýrských sítích",
    body: "Retenční nádrže na dešťovou vodu, kanalizační terminály a aktivační úseky čistíren odpadních vod. Betonové i prefabrikované objekty, které drží celou síť pohromadě.",
    tags: ["BETON", "EUROKERAMIKA", "PREFA", "ČOV"],
  },
  {
    id: "s3",
    dn: "DN 500",
    pipe: "var(--teal)",
    stamp: "KAMENINA · KORYTO · DN 500 · POVRCH · ",
    idx: "SPEC. 03",
    title: "Vodní toky a obnova povrchů",
    body: "Úpravy koryt a menší nadzemní stavby na tocích a nádržích. Po zásypu vracíme komunikace do původního stavu — a nebojíme se ani náročnějších povrchových projektů.",
    tags: ["KAMEN", "BETON", "ASFALT", "DLAŽBA"],
  },
];

const materials = [
  "PVC",
  "PEHD",
  "SKLOLAMINÁT",
  "TVÁRNÁ LITINA",
  "BETON",
  "KAMENINA",
  "EUROKERAMIKA",
];

const stats = [
  { to: 30, suffix: "+", label: "let v jednom oboru" },
  { to: 70, suffix: "+", label: "dokončených staveb" },
  { to: 100, suffix: "%", label: "vlastní mechanizace" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="VODOEKOSTAV, úvod">
          <span className="wm-mark" aria-hidden="true">
            <CrossSection id="wm" dn="" stamp="" pipe="var(--blue)" />
          </span>
          <span className="wm-text">
            VODOEKO<b>STAV</b>
            <i>s.r.o.</i>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#realizujeme">Realizujeme</a>
          <a href="#materialy">Materiály</a>
          <a href="#reference">Reference</a>
        </nav>
        <a className="cta" href="#reference">
          Poptat realizaci
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            Vodohospodářské a ekologické stavby · Hradec Králové
          </p>
          <h1 className="h1">
            Klademe vodu a&nbsp;kanalizaci, které vydrží
            <span className="h1-accent"> desítky let.</span>
          </h1>
          <p className="lede">
            Už 30 let stavíme vodovodní řady, kanalizace a&nbsp;inženýrské sítě
            po Královéhradeckém kraji — od potrubí v&nbsp;zemi po objekty
            čistíren. Vlastní stroje, vlastní parta, jeden obor.
          </p>
          <div className="hero-actions">
            <a className="cta cta-lg" href="#realizujeme">
              Prohlédnout, co stavíme
            </a>
            <dl className="contact-spec">
              <div>
                <dt>Tel</dt>
                <dd>—</dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>—</dd>
              </div>
              <div>
                <dt>Sídlo</dt>
                <dd>Hradec Králové</dd>
              </div>
            </dl>
          </div>
        </div>
        <figure className="hero-figure">
          <AiImage
            className="hero-img"
            src="/hero.webp"
            alt="Výkop s pokládkou potrubí na vodohospodářské stavbě"
          />
          <figcaption className="hero-cap">
            <span>VÝKOP · POKLÁDKA POTRUBÍ</span>
            <span>HK · KRÁLOVÉHRADECKÝ KRAJ</span>
          </figcaption>
        </figure>
      </section>

      <div className="bom" id="materialy" aria-label="Materiály potrubí">
        <span className="bom-tag">KUSOVNÍK MATERIÁLŮ</span>
        <ul className="bom-list">
          {materials.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>

      <section className="services" id="realizujeme">
        <div className="sec-head">
          <p className="eyebrow">Katalog výkonů</p>
          <h2 className="h2">Realizujeme</h2>
          <p className="sec-note">
            Každý výkon má svůj profil potrubí. Vyberte podle toho, co pod zemí
            potřebujete vést.
          </p>
        </div>

        <ol className="spec-list">
          <span className="spec-line" aria-hidden="true" />
          {services.map((s) => (
            <li className="spec" key={s.id}>
              <div className="spec-ring">
                <CrossSection
                  id={s.id}
                  dn={s.dn}
                  stamp={s.stamp}
                  pipe={s.pipe}
                />
              </div>
              <div className="spec-body">
                <p className="spec-idx">{s.idx}</p>
                <h3 className="h3">{s.title}</h3>
                <p className="spec-text">{s.body}</p>
                <ul className="spec-tags">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <figure className="band-figure">
          <AiImage
            className="band-img"
            src="/section-1.webp"
            alt="Uložené potrubí a technika připravená k pokládce inženýrské sítě"
          />
          <figcaption className="band-cap">
            INŽENÝRSKÉ SÍTĚ · PŘÍPRAVA TRASY
          </figcaption>
        </figure>
      </section>

      <section className="trust" id="reference">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">Proč VODOEKOSTAV</p>
            <h2 className="h2">
              30 let na jednom oboru. Bez subdodavatelů na tom, na čem záleží.
            </h2>
            <p className="trust-text">
              Klíčové profese děláme sami — od výkopu přes tlakové zkoušky až po
              kamerovou prohlídku hotové stoky. Díky vlastní mechanizaci
              nečekáte na půjčovnu ani na cizí partu.
            </p>
            <ul className="why">
              <li className="rb">
                Vlastní bagry, rypadla a&nbsp;pokládací soupravy — technika je na
                stavbě, ne v&nbsp;pronájmu.
              </li>
              <li className="rb">
                Parta zaškolená na tlakové zkoušky vodovodů i&nbsp;kamerové
                kontroly kanalizací.
              </li>
              <li className="rb">
                Působíme v&nbsp;Hradci Králové a&nbsp;okolí — na stavbu dojedeme
                rychle a&nbsp;zůstaneme po ruce.
              </li>
            </ul>
          </div>

          <figure className="trust-figure">
            <AiImage
              className="trust-img"
              src="/section-2.webp"
              alt="Dokončená úprava vodního toku a obnovený povrch komunikace"
            />
            <figcaption className="trust-cap">
              DOKONČENO · OBNOVA POVRCHU
            </figcaption>
          </figure>
        </div>

        <dl className="stats">
          {stats.map((st) => (
            <div className="stat" key={st.label}>
              <dt className="stat-num">
                <CountUp to={st.to} suffix={st.suffix} />
              </dt>
              <dd className="stat-label">{st.label}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
