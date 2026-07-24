import { AiImage } from "./_ui";

const services = [
  {
    ral: "RAL 2004",
    tone: "orange",
    title: "Práškové lakování",
    desc: "Elektrostatický nános prášku, vypálení v peci. Odolný matný i lesklý povrch přesně podle vzorníku RAL.",
  },
  {
    ral: "RAL 1019",
    tone: "beige",
    title: "Tryskání a pískování",
    desc: "Očistíme kov až na holý povrch — rez, starý lak i okuje. Ideální příprava, aby nová barva držela.",
  },
  {
    ral: "RAL 5015",
    tone: "blue",
    title: "ALU kola",
    desc: "Renovace hliníkových i plechových disků. Sundáme starý lak, nastříkáme barvu, která vydrží roky.",
  },
  {
    ral: "RAL 7024",
    tone: "graphite",
    title: "Kovovýroba a zámečnictví",
    desc: "Zámečnická dílna: konstrukce, svařování a atypické díly na zakázku — a rovnou i s povrchovou úpravou.",
  },
];

const stats = [
  { ral: "EST. 2007", tone: "graphite", num: "2007", label: "Vlastní lakovna v Liberci", desc: "Od roku 2007 stříkáme díly u nás v Kateřinkách." },
  { ral: "×150", tone: "orange", num: "150", label: "firem k nám vozí díly", desc: "Stovky stálých zákazníků z Liberce i širokého okolí." },
  { ral: "3 DNY", tone: "blue", num: "3", label: "pracovní dny na zakázku", desc: "Běžnou zakázku obvykle stihneme do tří pracovních dnů." },
  { ral: "±0 KČ", tone: "beige", num: "0 Kč", label: "balení do stretch fólie", desc: "Zabalení hotových dílů i množstevní slevy máte zdarma." },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="mark" href="#" aria-label="Prašlak, prášková lakovna Liberec">
          <span className="mark__edge" aria-hidden="true" />
          <span className="mark__name">PRAŠLAK</span>
          <span className="mark__sub">s.r.o. · Liberec</span>
        </a>
        <a className="top__phone" href="tel:+420777111222">777 111 222</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__panel">
            <span className="hero__edge" aria-hidden="true" />
            <p className="eyebrow">Zámečnictví &amp; prášková lakovna</p>
            <h1 id="hero-title" className="hero__title">
              PRÁŠKOVÁ<br />
              <span className="word-chip">LAKOVNA</span><br />
              LIBEREC
            </h1>
            <p className="hero__lead">
              Z holého, otryskaného kovu uděláme barvu, která drží. Práškujeme
              brány, ploty, rámy, disky i atypické díly na zakázku.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="tel:+420777111222">Zavolat 777 111 222</a>
              <a className="btn btn--ghost" href="mailto:info@example.cz">Poslat poptávku</a>
            </div>
            <p className="hero__addr">Ukázková 123, Liberec — Kateřinky</p>
          </div>

          <figure className="hero__photo">
            <span className="hero__edge hero__edge--photo" aria-hidden="true" />
            <AiImage
              className="hero__img"
              src="/hero.webp"
              alt="Čerstvě nalakovaná kola a kovové díly v lakovně Prašlak v Liberci"
            />
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="svc-title">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow eyebrow--dark">Vzorník služeb</p>
            <h2 id="svc-title" className="head__title">Z holého kovu do barvy</h2>
            <p className="head__lead">
              Každá zakázka projde stejnou cestou jako vzorek na těchto kartách:
              tryskání, nános prášku, vypálení. Odkrytá ocelová hrana ukazuje,
              odkud se startuje.
            </p>
          </div>

          <div className="grid grid--svc">
            <figure className="chip chip--photo chip--wide">
              <span className="chip__edge" aria-hidden="true" />
              <AiImage
                className="chip__img"
                src="/section-1.webp"
                alt="Detail práškové lakovny Prašlak — díly připravené k lakování"
              />
              <figcaption className="chip__cap">Provoz lakovny · Liberec-Kateřinky</figcaption>
            </figure>

            {services.map((s) => (
              <article key={s.ral} className={`chip chip--${s.tone}`}>
                <span className="chip__edge" aria-hidden="true" />
                <div className="chip__face">
                  <span className="chip__code">{s.ral}</span>
                  <h3 className="chip__title">{s.title}</h3>
                  <p className="chip__desc">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="about-title">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow eyebrow--dark">Proč Prašlak</p>
            <h2 id="about-title" className="head__title">Řemeslo, ne náhoda</h2>
            <p className="head__lead">
              Prašlak s.r.o. zajišťuje kompletní přípravu povrchu i samotné
              práškové lakování ve špičkové kvalitě. Naši lidé stojí u lakovací
              pistole roky a poznají, co který kov potřebuje.
            </p>
          </div>

          <div className="grid grid--stats">
            <figure className="chip chip--photo chip--tall">
              <span className="chip__edge" aria-hidden="true" />
              <AiImage
                className="chip__img"
                src="/section-2.webp"
                alt="Ukázka práce lakovny Prašlak — nalakované kovové výrobky"
              />
              <figcaption className="chip__cap">Ukázka naší práce</figcaption>
            </figure>

            {stats.map((s) => (
              <article key={s.label} className={`chip chip--${s.tone}`}>
                <span className="chip__edge" aria-hidden="true" />
                <div className="chip__face">
                  <span className="chip__code">{s.ral}</span>
                  <p className="chip__num">{s.num}</p>
                  <p className="chip__label">{s.label}</p>
                  <p className="chip__desc">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
