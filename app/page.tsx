import { AiImage } from "./_ui";

const sluzby = [
  {
    tag: "TRUBKA + SPOJKA",
    name: "Montáž a demontáž",
    desc: "Lešení přivezeme, postavíme na klíč a po dokončení prací zase rozebereme a odvezeme. O nic se nestaráte — přijedeme s vlastní partou i dopravou.",
  },
  {
    tag: "RÁMOVÉ · FASÁDNÍ",
    name: "Pronájem lešení",
    desc: "Kompletní fasádní lešení k zapůjčení na celou dobu rekonstrukce obvodového pláště. Díky rychlé montáži začnete s pracemi téměř hned.",
  },
  {
    tag: "DLE PROJEKTU · BOZP",
    name: "Výstavba z vašeho materiálu",
    desc: "Máte lešení vlastní? Postavíme ho podle projektu a předpisů BOZP tak, aby drželo a bezpečně uneslo každého, kdo na něj vstoupí.",
  },
];

const parametry = [
  { k: "Působnost", v: "Liberec a okolí" },
  { k: "Materiál", v: "trubkové i rámové lešení" },
  { k: "Norma", v: "stavíme dle ČSN a BOZP" },
  { k: "Doprava", v: "vlastní vozy i montážní parta" },
];

export default function Page() {
  return (
    <main className="page">
      <div className="frame">
        <div className="rig" aria-hidden="true">
          <i className="standard standard--edge" style={{ left: "0" }} />
          <i className="standard standard--mid" style={{ left: "33.333%" }} />
          <i className="standard standard--mid" style={{ left: "66.666%" }} />
          <i className="standard standard--edge" style={{ right: "0" }} />
        </div>

        <header className="topbar">
          <a className="mark" href="#" aria-label="Perfect lešení, Liberec">
            <span className="mark__node" aria-hidden="true" />
            <span className="mark__p">PERFECT</span>
            <span className="mark__l">LEŠENÍ</span>
          </a>
          <div className="topbar__right">
            <a className="topbar__tel" href="tel:+420777698557">+420 777 698 557</a>
            <a className="btn btn--y" href="#poptat">Poptat lešení</a>
          </div>
        </header>

        <section className="bay hero" aria-labelledby="hero-nadpis">
          <div className="ledger" aria-hidden="true">
            <span className="coupler" />
            <span className="coupler coupler--mid" />
            <span className="coupler coupler--mid" />
            <span className="coupler" />
          </div>

          <div className="hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">Lešenářský servis · Liberec</p>
              <h1 id="hero-nadpis" className="hero__title">
                <span className="hero__line l1">PŘIVEZEME.</span>
                <span className="hero__line l2">POSTAVÍME.</span>
                <span className="hero__line l3">ODVEZEME.</span>
              </h1>
              <p className="hero__lead">
                Kompletní lešenářský servis pro fasády, rekonstrukce a
                novostavby. Trubkové i rámové lešení namontujeme, půjčíme na
                celou stavbu a po dokončení zase demontujeme a odvezeme.
              </p>
              <div className="hero__cta">
                <a className="btn btn--y" href="#poptat">Poptat lešení</a>
                <a className="btn btn--ghost" href="tel:+420777698557">
                  Zavolat +420 777 698 557
                </a>
              </div>
            </div>

            <figure className="hero__media">
              <AiImage
                className="hero__img"
                src="/hero.webp"
                alt="Fasádní lešení postavené kolem rekonstruovaného domu"
              />
              <svg
                className="brace"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="0" y1="100" x2="100" y2="0" />
              </svg>
            </figure>
          </div>
        </section>

        <section className="bay" aria-labelledby="sluzby-nadpis">
          <div className="ledger" aria-hidden="true">
            <span className="coupler" />
            <span className="coupler coupler--mid" />
            <span className="coupler coupler--mid" />
            <span className="coupler" />
          </div>

          <div className="bay__head">
            <p className="eyebrow">Nabízené služby</p>
            <h2 id="sluzby-nadpis" className="section-title">
              CO PRO VÁS POSTAVÍME
            </h2>
          </div>

          <ul className="planks">
            {sluzby.map((s) => (
              <li className="plank" key={s.name}>
                <span className="plank__tag">{s.tag}</span>
                <h3 className="plank__name">{s.name}</h3>
                <p className="plank__desc">{s.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bay" aria-labelledby="onas-nadpis">
          <div className="ledger" aria-hidden="true">
            <span className="coupler" />
            <span className="coupler coupler--mid" />
            <span className="coupler coupler--mid" />
            <span className="coupler" />
          </div>

          <div className="about">
            <div className="about__copy">
              <p className="eyebrow">O nás ve zkratce</p>
              <h2 id="onas-nadpis" className="section-title">
                LEŠENÍ, KTERÉ DRŽÍ — A LIDÉ, KTEŘÍ DRŽÍ SLOVO
              </h2>
              <p className="about__text">
                Jsme parta z Liberce, která žije lešením. Zapůjčíme vám je nebo
                pronajmeme, přivezeme na stavbu a postavíme tak rychle, že
                můžete začít s rekonstrukcí obvodového pláště téměř okamžitě. Po
                skončení prací lešení zase složíme a odvezeme.
              </p>

              <dl className="specs">
                {parametry.map((p) => (
                  <div className="specs__row" key={p.k}>
                    <dt className="specs__k">{p.k}</dt>
                    <dd className="specs__v">{p.v}</dd>
                  </div>
                ))}
              </dl>

              <address className="kontakt">
                <span className="kontakt__nazev">Perfect lešení s.r.o.</span>
                <span>5. května 195/15, 460 01 Liberec 1</span>
                <a href="tel:+420777698557">+420 777 698 557</a>
                <a href="tel:+420724000082">+420 724 000 082</a>
                <a href="mailto:info@perfectleseni.cz">info@perfectleseni.cz</a>
              </address>

              <p className="stamp">Ceník a reference aktualizujeme · sezóna 2025</p>
            </div>

            <figure className="about__media">
              <AiImage
                className="about__img"
                src="/section-2.webp"
                alt="Montážní parta Perfect lešení při stavbě fasádního lešení"
              />
            </figure>
          </div>
        </section>
      </div>
    </main>
  );
}
