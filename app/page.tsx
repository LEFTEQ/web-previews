import { AiImage } from "./_ui";
import { SpinMark, Snap } from "./motion";

/* ---- The 608 mark: outer race, inner race, seven ball positions ---- */
function Mark608({
  className,
  rotable = false,
}: {
  className?: string;
  rotable?: boolean;
}) {
  const balls = Array.from({ length: 7 }, (_, i) => {
    const a = (i / 7) * Math.PI * 2 - Math.PI / 2;
    return { cx: 50 + Math.cos(a) * 34, cy: 50 + Math.sin(a) * 34 };
  });
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="race" cx="50" cy="50" r="46" />
      <circle className="race" cx="50" cy="50" r="41" />
      <g className={rotable ? "ring608 spin-ring" : "ring608"}>
        {balls.map((b, i) => (
          <circle key={i} className="ball" cx={b.cx} cy={b.cy} r="5.1" />
        ))}
      </g>
      <circle className="race" cx="50" cy="50" r="27" />
      <circle className="race" cx="50" cy="50" r="22" />
      <circle className="bore" cx="50" cy="50" r="13" />
      <circle className="race" cx="50" cy="50" r="13" />
    </svg>
  );
}

const categories = [
  "Obuv",
  "Cyklistika",
  "Lyžování a snowboarding",
  "Kolečkové brusle",
  "In-line kolečka a ložiska",
  "In-line chrániče",
  "Funkční prádlo",
  "Impregnace a prací prostředky",
  "Vložky Sidas",
];

const products = [
  {
    kod: "14517",
    name: "Roces Orlando III",
    kind: "Dětské kolečkové brusle",
    znacka: "Roces",
    zaruka: "2 roky",
    sklad: "Skladem — 1 ks",
    price: "700 Kč",
    before: "1 999 Kč",
    tag: "Akce −64 %",
  },
  {
    kod: "20194",
    name: "Rossignol SKPR 2.0",
    kind: "Lyžařská výbava",
    znacka: "Rossignol",
    zaruka: "2 roky",
    sklad: "Skladem",
    price: "2 990 Kč",
    before: null,
    tag: "Zimní řada",
  },
  {
    kod: "18820",
    name: "Fox Dropframe Pro Divide",
    kind: "Cyklistická helma",
    znacka: "Fox",
    zaruka: "2 roky",
    sklad: "Skladem",
    price: "1 950 Kč",
    before: null,
    tag: "Tip prodejny",
  },
  {
    kod: "08801",
    name: "Abus City Chain 8800",
    kind: "Řetězový zámek na kolo",
    znacka: "Abus",
    zaruka: "2 roky",
    sklad: "Skladem",
    price: "1 190 Kč",
    before: null,
    tag: null,
  },
  {
    kod: "59021",
    name: "Fidlock Twist set 590 ml",
    kind: "Antibakteriální láhev + základna na rám",
    znacka: "Fidlock",
    zaruka: "2 roky",
    sklad: "Skladem",
    price: "1 140 Kč",
    before: null,
    tag: null,
  },
  {
    kod: "45011",
    name: "Fidlock Twist náhradní láhev 450 ml",
    kind: "Náhradní cyklo láhev",
    znacka: "Fidlock",
    zaruka: "2 roky",
    sklad: "Skladem",
    price: "290 Kč",
    before: null,
    tag: null,
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Wanted Sport Pardubice">
          <Mark608 className="brand-mark" />
          <span className="brand-word">
            <span className="brand-name">Wanted Sport</span>
            <span className="brand-city">Pardubice</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#katalog">Katalog</a>
          <a href="#servis">Servis</a>
          <a href="#obchod">Obchod</a>
        </nav>
        <a className="cart" href="#katalog">
          Košík <span aria-hidden="true">·</span> 0 Kč
        </a>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Sportovní potřeby · Pardubice</p>
          <h1 className="hero-title">
            Kolečka, brusle a kola,
            <br />
            <span className="hero-accent">seřízená na jízdu.</span>
          </h1>
          <p className="hero-lead">
            Kamenná prodejna i e-shop. Od in-line koleček a ložisek 608 přes
            cyklistiku až po lyže — vybereme, seřídíme a připravíme, ať to celou
            sezónu drží v pohybu.
          </p>
          <div className="hero-cta">
            <a className="btn btn-amber" href="#katalog">
              Prohlédnout katalog
            </a>
            <a className="btn btn-ghost" href="#servis">
              Náš servis
            </a>
          </div>
          <ul className="hero-facts">
            <li>
              <Mark608 className="bullet" />
              Skladem a připraveno k odeslání
            </li>
            <li>
              <Mark608 className="bullet" />
              Servis brusli, kol i lyží na místě
            </li>
          </ul>
        </div>
        <div className="hero-media">
          <div className="hero-frame">
            <AiImage
              src="/hero.webp"
              alt="Detail in-line koleček a ložisek z nabídky prodejny Wanted Sport"
              className="hero-img"
            />
          </div>
          <SpinMark>
            <Mark608 className="hero-608" />
          </SpinMark>
        </div>
      </section>

      <div className="divider" aria-hidden="true">
        <span className="divider-line" />
        <Mark608 className="divider-mark" />
        <span className="divider-line" />
      </div>

      {/* KATALOG */}
      <section className="section" id="katalog">
        <div className="sec-head">
          <p className="eyebrow">01 / Katalog</p>
          <h2 className="sec-title">Co teď máme skladem</h2>
          <p className="sec-sub">
            Reálná dostupnost, kód zboží i záruka u každé položky — žádné „zavolejte,
            jestli to ještě máme“.
          </p>
        </div>

        <div className="grid">
          {products.map((p, i) => (
            <Snap key={p.kod} index={i}>
              <article className="card">
                <div className="card-top">
                  <span className="kod">Kód {p.kod}</span>
                  {p.tag ? <span className="tag">{p.tag}</span> : null}
                </div>
                <h3 className="card-name">{p.name}</h3>
                <p className="card-kind">{p.kind}</p>
                <ul className="specs">
                  <li>
                    <Mark608 className="bullet" />
                    Značka: {p.znacka}
                  </li>
                  <li>
                    <Mark608 className="bullet" />
                    {p.sklad}
                  </li>
                  <li>
                    <Mark608 className="bullet" />
                    Záruka: {p.zaruka}
                  </li>
                </ul>
                <div className="card-foot">
                  <div className="stamp">
                    <Mark608 className="stamp-mark" />
                    <div className="stamp-price">
                      {p.before ? (
                        <span className="before">{p.before}</span>
                      ) : null}
                      <span className="price">{p.price}</span>
                    </div>
                  </div>
                  <button className="addcart" type="button">
                    <Mark608 className="addcart-mark" rotable />
                    Do košíku
                  </button>
                </div>
              </article>
            </Snap>
          ))}
        </div>
      </section>

      {/* OBCHOD / DŮVĚRA */}
      <section className="section section-dark" id="obchod">
        <div className="about">
          <div className="about-copy">
            <p className="eyebrow eyebrow-light">02 / Obchod</p>
            <h2 className="sec-title sec-title-light" id="servis">
              Prodejna v Pardubicích, která si za jízdou stojí
            </h2>
            <p className="about-lead">
              Wanted Sport není katalog bez tváře. Brusle, kola i lyže u nás před
              prodejem projdou rukama — vyměníme ložiska, seřídíme, doladíme. Co
              nemáme na prodejně, dovezeme a pošleme po celém Česku.
            </p>
            <ul className="trust">
              <li>
                <Mark608 className="bullet" />
                <span>
                  <strong>Servis na místě.</strong> Přezutí koleček, výměna ložisek
                  608, seřízení brzd i vázání.
                </span>
              </li>
              <li>
                <Mark608 className="bullet" />
                <span>
                  <strong>Značky, kterým věříme.</strong> Roces, Rossignol, Fox, Abus,
                  Fidlock, Sidas.
                </span>
              </li>
              <li>
                <Mark608 className="bullet" />
                <span>
                  <strong>Novinka pro děti.</strong> Kompletní kolekce super lehkých
                  dětských kol CANULL.
                </span>
              </li>
            </ul>

            <div className="cats">
              <p className="cats-label">Kde všude poradíme</p>
              <ul className="cats-list">
                {categories.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <p className="reach">
              Prodejna Pardubice · <a href="tel:+420777111222">777 111 222</a> ·{" "}
              <a href="mailto:info@example.cz">info@example.cz</a>
            </p>
          </div>

          <div className="about-media">
            <AiImage
              src="/section-2.webp"
              alt="Interiér prodejny Wanted Sport s výbavou pro brusle, kola a lyže"
              className="about-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
