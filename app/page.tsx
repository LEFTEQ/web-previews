import type { CSSProperties } from "react";

type Item = { n: string; p: string; g: string };
type Cat = { title: string; kicker: string; note?: string; items: Item[] };

const nude = "linear-gradient(160deg,#efe9e4,#ddccbb)";
const lak = "linear-gradient(160deg,#7a2c40,#5e2233)";
const french = "linear-gradient(to top,#e7dbcc 0 60%,#ffffff 60%)";
const gel = "linear-gradient(150deg,#c3a6d6,#a07cb6)";
const chrome = "linear-gradient(125deg,#eef1f3,#9aa1aa 42%,#ced2d7 60%,#7f8790)";
const ombre = "linear-gradient(180deg,#a98fc0,#5e2233)";
const brass = "linear-gradient(160deg,#d8bd9a,#c8a77e)";
const lash = "linear-gradient(160deg,#343a42,#191c20)";

const cats: Cat[] = [
  {
    title: "Manikúra",
    kicker: "Ruce a nehty",
    items: [
      { n: "Klasická", p: "280 Kč", g: nude },
      { n: "S normálním lakem", p: "380 Kč", g: lak },
      { n: "Francouzská", p: "670 Kč", g: french },
      { n: "Shellac / Gel lak", p: "590 Kč", g: gel },
      { n: "Samotný Shellac", p: "400 Kč", g: gel },
      { n: "Samotný Gel lak", p: "400 Kč", g: gel },
    ],
  },
  {
    title: "Pedikúra",
    kicker: "Chodidla a péče",
    items: [
      { n: "Klasická", p: "490 Kč", g: nude },
      { n: "S normálním lakem", p: "590 Kč", g: lak },
      { n: "Shellac / Gel lak", p: "650 Kč", g: gel },
      { n: "Francouzská", p: "690 Kč", g: french },
      { n: "FOOTLOGIX ošetření", p: "650 Kč", g: brass },
      { n: "FOOTLOGIX + Gel lak", p: "750 Kč", g: brass },
    ],
  },
  {
    title: "Akryl / Gel",
    kicker: "Modeláž a prodloužení",
    note: "Doplnění modeláže od 590 Kč.",
    items: [
      { n: "Klasické bez barvy", p: "590 Kč", g: nude },
      { n: "Gel lak", p: "630 Kč", g: gel },
      { n: "Francouzská", p: "690 Kč", g: french },
      { n: "Chrom efekt", p: "670 Kč", g: chrome },
      { n: "Ombré", p: "670 Kč", g: ombre },
    ],
  },
  {
    title: "Řasy a obočí",
    kicker: "Řasa na řasu",
    items: [
      { n: "Nové řasy — přirozené", p: "od 750 Kč", g: lash },
      { n: "Nové řasy — objemové", p: "od 1000 Kč", g: lash },
      { n: "Doplnění — přirozené", p: "od 750 Kč", g: lash },
      { n: "Barvení / úprava obočí", p: "100 Kč", g: brass },
      { n: "Barvení řas", p: "150 Kč", g: lash },
    ],
  },
];

function Stroke({ id, className }: { id: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 600 56" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ced2d7" />
          <stop offset="0.5" stopColor="#a98fc0" />
          <stop offset="1" stopColor="#5e2233" />
        </linearGradient>
      </defs>
      <path
        d="M12 36 C 130 6, 250 50, 372 28 S 520 6, 588 32"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="13"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="page">
      <header className="topbar">
        <span className="topmark">EURONAILS</span>
        <nav className="toplinks" aria-label="Hlavní">
          <a href="#cenik">Ceník</a>
          <a href="#studio">Studio</a>
          <a className="toplink-cta" href="tel:+420777111222">Objednat termín</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Nehtové studio · Ostrava</p>
        <div className="hero-mark">
          <h1 id="hero-title" className="wordmark">EURONAILS</h1>
          <svg className="hero-stroke" viewBox="0 0 1200 110" role="presentation" aria-hidden="true">
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#ced2d7" />
                <stop offset="0.48" stopColor="#a98fc0" />
                <stop offset="1" stopColor="#5e2233" />
              </linearGradient>
            </defs>
            <path
              d="M24 66 C 240 14, 470 96, 700 54 S 1010 12, 1176 52"
              fill="none"
              stroke="url(#heroGrad)"
              strokeWidth="26"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="hero-lede">
          Manikúra, pedikúra, akryl-gelová modeláž a prodlužování řas. Nehty
          s laděným leskem — od přirozené francouzské po chrom-efekt a ombré.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="tel:+420777111222">Objednat termín</a>
          <a className="btn btn-ghost" href="#cenik">Ukázat ceník</a>
        </div>
        <p className="hero-foot">Většinu služeb zvládneme na počkání — přijďte i bez objednání.</p>
      </section>

      <section id="cenik" className="section catalog" aria-labelledby="cenik-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Vzorník a ceník</p>
          <h2 id="cenik-title" className="section-title">Každá úprava jako nalakovaný vzorek</h2>
          <p className="section-sub">
            Barevný štítek u každé položky napovídá výslednou úpravu — od nude
            přes francii až po chrom a ombré. Ceny platí pro studio v Ostravě.
          </p>
        </div>

        <div className="grid">
          {cats.map((c, i) => (
            <article className="card" key={c.title}>
              <div className="card-head">
                <Stroke id={`str-${i}`} className="card-stroke" />
                <div>
                  <h3 className="card-title">{c.title}</h3>
                  <p className="card-kicker">{c.kicker}</p>
                </div>
              </div>
              <ul className="list">
                {c.items.map((it) => (
                  <li className="item" key={it.n}>
                    <span className="chip" style={{ background: it.g } as CSSProperties} aria-hidden="true" />
                    <span className="iname">{it.n}</span>
                    <span className="leader" aria-hidden="true" />
                    <span className="iprice">{it.p}</span>
                  </li>
                ))}
              </ul>
              {c.note ? <p className="card-note">{c.note}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section id="studio" className="section studio" aria-labelledby="studio-title">
        <div className="studio-grid">
          <div>
            <p className="eyebrow">O studiu</p>
            <h2 id="studio-title" className="section-title section-title--light">
              Salonní lesk s ostravskou přesností
            </h2>
            <p className="studio-text">
              Jsme malé nehtové studio v Ostravě. Pracujeme s certifikovanými
              gely, laky a materiály pro chrom-efekt i ombré a řasy lepíme
              technikou řasa na řasu. Žádný spěch — na tvar a lesk si u nás vždy
              najdeme čas.
            </p>
            <ul className="badges">
              <li>Bez objednání, na počkání</li>
              <li>Certifikované materiály</li>
              <li>Dárkové poukazy v libovolné hodnotě</li>
            </ul>
          </div>

          <div className="infocard">
            <h3 className="info-title">Kde nás najdete</h3>
            <p className="info-addr">Ukázková 123<br />Ostrava</p>
            <dl className="hours">
              <div><dt>Po–Pá</dt><dd>9–21</dd></div>
              <div><dt>So</dt><dd>9–21</dd></div>
              <div><dt>Ne</dt><dd>10–21</dd></div>
            </dl>
            <div className="info-contact">
              <a href="tel:+420777111222">+420 777 111 222</a>
              <a href="mailto:info@example.cz">info@example.cz</a>
            </div>
          </div>
        </div>
      </section>

      <a className="mcta" href="tel:+420777111222" aria-label="Objednat termín telefonicky">
        <span>Objednat termín</span>
      </a>
    </div>
  );
}
