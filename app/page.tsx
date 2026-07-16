import type { ReactNode } from "react";

// Punjabi Food — rozvoz indického jídla, Hradec Králové
// Barvy z palety (haldi / phulkari / indigo / tandoor / koriandr / mosaz)
const C = {
  turmeric: "#e8a415",
  magenta: "#d4297a",
  indigo: "#1f2a56",
  chili: "#c62a1f",
  coriander: "#4e7d3f",
  brass: "#c9a24b",
};

// Phulkari stitch band — sešívaný trojúhelníkový vzor, signature prvek.
function StitchBand({ mode }: { mode: "load" | "scroll" }) {
  const P = 48;
  const H = 34;
  const N = 30;
  const cols = [C.turmeric, C.magenta, C.brass, C.coriander, C.chili];
  const tris = Array.from({ length: N }, (_, i) => ({
    d: `M${i * P} ${H} L${i * P + P / 2} 3 L${(i + 1) * P} ${H} Z`,
    c: cols[i % cols.length],
  }));
  let stitch = `M0 ${H} `;
  for (let i = 0; i < N; i++) {
    stitch += `L${i * P + P / 2} 3 L${(i + 1) * P} ${H} `;
  }
  return (
    <div className={`stitch stitch--${mode}`} aria-hidden="true">
      <svg
        className="stitch__ink"
        viewBox={`0 0 ${N * P} ${H}`}
        preserveAspectRatio="none"
        role="presentation"
      >
        {tris.map((t, i) => (
          <path key={i} d={t.d} fill={t.c} />
        ))}
        <path
          d={stitch}
          fill="none"
          stroke={C.brass}
          strokeWidth={2}
          strokeDasharray="2 5"
          strokeLinecap="round"
        />
        <line
          x1={0}
          y1={H - 1}
          x2={N * P}
          y2={H - 1}
          stroke={C.brass}
          strokeWidth={2}
          strokeDasharray="2 5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function Diamond() {
  return <span className="diamond" aria-hidden="true" />;
}

type Dish = { name: string; desc: string; price: string };
type Course = { num: string; title: string; note: string; dishes: Dish[] };

const courses: Course[] = [
  {
    num: "01",
    title: "K začátku",
    note: "Křupavé, na jedno kousnutí",
    dishes: [
      { name: "Samosa (2 ks)", desc: "Pečivo plněné bramborem, hráškem a kmínem", price: "59 Kč" },
      { name: "Onion bhaji", desc: "Cibulové placičky v cizrnovém těstíčku", price: "69 Kč" },
      { name: "Chicken pakora", desc: "Smažené kuřecí kousky, mátový chutney", price: "89 Kč" },
    ],
  },
  {
    num: "02",
    title: "Z tandooru",
    note: "Marinované přes noc, pečené v hliněné peci",
    dishes: [
      { name: "Tandoori chicken", desc: "Kuře v jogurtu a haldi, půl porce", price: "199 Kč" },
      { name: "Chicken tikka", desc: "Prsíčka marinovaná v koření a citronu", price: "189 Kč" },
      { name: "Paneer tikka", desc: "Grilovaný indický sýr a paprika", price: "179 Kč" },
      { name: "Seekh kebab", desc: "Jehněčí mleté s čerstvým zázvorem", price: "209 Kč" },
    ],
  },
  {
    num: "03",
    title: "Omáčky",
    note: "Dušené pomalu, s naší směsí garam masaly",
    dishes: [
      { name: "Butter chicken", desc: "Máslové kuře v rajčatovo-smetanové omáčce", price: "199 Kč" },
      { name: "Chicken tikka masala", desc: "Naše nejoblíbenější, středně pálivé", price: "209 Kč" },
      { name: "Rogan josh", desc: "Jehněčí na kašmírských chili", price: "239 Kč" },
      { name: "Palak paneer", desc: "Špenát a domácí sýr, bez masa", price: "179 Kč" },
      { name: "Dal makhani", desc: "Černá čočka dušená přes noc", price: "159 Kč" },
      { name: "Chana masala", desc: "Cizrna v koriandru a rajčatech", price: "159 Kč" },
    ],
  },
  {
    num: "04",
    title: "Rýže a placky",
    note: "Bez nich to není indické jídlo",
    dishes: [
      { name: "Chicken biryani", desc: "Basmati vrstvené s kuřetem a šafránem", price: "199 Kč" },
      { name: "Zeleninové biryani", desc: "Sezonní zelenina, kešu, rozinky", price: "179 Kč" },
      { name: "Garlic naan", desc: "Placka z pece s česnekem a máslem", price: "45 Kč" },
      { name: "Butter naan", desc: "Nadýchaná placka potřená máslem", price: "39 Kč" },
    ],
  },
  {
    num: "05",
    title: "Sladký konec a pití",
    note: "Ať odjede kurýr s úsměvem",
    dishes: [
      { name: "Gulab jamun (2 ks)", desc: "Mléčné kuličky v růžovém sirupu", price: "69 Kč" },
      { name: "Mango lassi", desc: "Jogurtový nápoj s mangovým pyré", price: "55 Kč" },
      { name: "Masala chai", desc: "Černý čaj vařený s mlékem a kořením", price: "45 Kč" },
    ],
  },
];

const areas = [
  "Centrum",
  "Nový Hradec Králové",
  "Malšovice",
  "Slezské Předměstí",
  "Pražské Předměstí",
  "Kukleny",
  "Pouchov",
  "Moravské Předměstí",
];

export default function Page(): ReactNode {
  return (
    <main className="pf">
      {/* HERO — čistě typografický, žádná fotka */}
      <section className="band band--hero" aria-labelledby="hero-title">
        <div className="wrap hero__grid">
          <a className="wordmark" href="#" aria-label="Punjabi Food — úvod">
            <span className="wordmark__mark" aria-hidden="true">◆</span>
            <span className="wordmark__name">
              Punjabi<em>Food</em>
            </span>
          </a>

          <p className="eyebrow">Rozvoz indického jídla · Hradec Králové</p>

          <h1 id="hero-title" className="hero__title">
            Rovnou z <span className="hot">tandooru</span>
            <br /> na váš stůl.
          </h1>

          <p className="hero__lead">
            Máslová kuřata, čerstvý naan a voňavé biryani vaříme každý den poctivě
            podle pandžábských receptů. Přivezeme je horké až k vám domů — po celém
            Hradci Králové a okolí.
          </p>

          <div className="hero__cta">
            <a className="btn btn--hot" href="tel:+420730100100">
              <Diamond /> Objednat: 730 100 100
            </a>
            <a className="btn btn--ghost" href="#menu">
              Prohlédnout menu
            </a>
          </div>

          <ul className="hero__facts">
            <li>Rozvoz denně 11–22 h</li>
            <li>Min. objednávka 300 Kč</li>
            <li>Rozvozné od 39 Kč</li>
          </ul>
        </div>
      </section>

      {/* signature: stitch band se „sešije" při načtení */}
      <StitchBand mode="load" />

      {/* MENU — chody jako sekvence jídla, proto číslování 01–05 */}
      <section id="menu" className="band band--menu" aria-labelledby="menu-title">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow eyebrow--dark">Menu podle chodů</p>
            <h2 id="menu-title" className="sec-title">
              Od prvního sousta po sladkou tečku
            </h2>
            <p className="sec-sub">
              Vše připravujeme na objednávku. Pálivost doladíme podle vás — stačí
              říct kurýrovi nebo do poznámky.
            </p>
          </header>

          <div className="courses">
            {courses.map((c) => (
              <article className="cat" key={c.num}>
                <header className="cat__head">
                  <span className="cat__num">{c.num}</span>
                  <div>
                    <h3 className="cat__title">{c.title}</h3>
                    <p className="cat__note">{c.note}</p>
                  </div>
                </header>
                <ul className="dishes">
                  {c.dishes.map((d) => (
                    <li className="dish" key={d.name}>
                      <div className="dish__main">
                        <span className="dish__name">
                          <Diamond /> {d.name}
                        </span>
                        <span className="dish__desc">{d.desc}</span>
                      </div>
                      <span className="dish__price">{d.price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StitchBand mode="scroll" />

      {/* DŮVĚRA + DOPRAVA */}
      <section className="band band--info" aria-labelledby="info-title">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow">O nás a rozvoz</p>
            <h2 id="info-title" className="sec-title sec-title--light">
              Vozíme po celém Hradci od roku 2016
            </h2>
            <p className="sec-sub sec-sub--light">
              Malá rodinná kuchyně u Labe. Žádné mražené polotovary — koření
              mele­me sami a naan pečeme až když si objednáte.
            </p>
          </header>

          <div className="info-grid">
            <article className="card">
              <h3 className="card__h">Kam vozíme</h3>
              <ul className="chips">
                {areas.map((a) => (
                  <li className="chip" key={a}>
                    <Diamond /> {a}
                  </li>
                ))}
              </ul>
              <p className="card__p">
                Nevíte, jestli přijedeme k vám? Zavolejte, poradíme na místě.
              </p>
            </article>

            <article className="card">
              <h3 className="card__h">Jak to funguje</h3>
              <ol className="steps">
                <li>Zavoláte nebo napíšete, co si dáte.</li>
                <li>Uvaříme čerstvě, upečeme naan a placky.</li>
                <li>Kurýr je u vašich dveří obvykle do 45 minut.</li>
              </ol>
              <p className="card__p">
                Platit můžete kartou u kurýra i hotově.
              </p>
            </article>

            <article className="card card--quote">
              <p className="quote">
                „Objednáváme každý pátek do kanceláře na Pražském Předměstí. Butter
                chicken je pokaždé horký a poctivý — a přijede načas.“
              </p>
              <p className="quote__by">— Markéta H., stálá zákaznice</p>
              <p className="card__p">
                Přes 40 000 rozvezených jídel · hodnocení 4,8 z 5
              </p>
            </article>

            <article className="card card--contact">
              <h3 className="card__h">Objednávky a kontakt</h3>
              <p className="contact-row">
                <span className="contact-row__label">Telefon</span>
                <a href="tel:+420730100100">730 100 100</a>
              </p>
              <p className="contact-row">
                <span className="contact-row__label">E-mail</span>
                <a href="mailto:objednavky@punjabifood.cz">objednavky@punjabifood.cz</a>
              </p>
              <p className="contact-row">
                <span className="contact-row__label">Výdejna</span>
                <span>Gočárova třída, Hradec Králové</span>
              </p>
              <a className="btn btn--hot btn--full" href="tel:+420730100100">
                <Diamond /> Zavolat a objednat
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
