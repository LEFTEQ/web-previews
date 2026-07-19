export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Invira, úvodní strana">
          <span className="wordmark-rail" aria-hidden="true" />
          <span className="wordmark-text">Invira</span>
          <span className="wordmark-sub">Ostrava</span>
        </a>
        <a className="btn btn-line" href="tel:+420777111222">Zavolat</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-rail-col" aria-hidden="true">
            <svg className="hero-rail" viewBox="0 0 64 480" preserveAspectRatio="none" role="presentation">
              <path
                className="hero-rail-path"
                pathLength={1}
                d="M52 22 L34 22 Q22 22 22 38 L22 442 Q22 458 34 458 L52 458"
                fill="none"
                stroke="#2e3a41"
                strokeWidth={9}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              <circle className="hero-rail-bead" cx={22} cy={246} r={9} fill="#2f7d69" />
            </svg>
          </div>

          <div className="hero-content">
            <p className="eyebrow">Zdravotní a ortopedické pomůcky · Ostrava</p>
            <h1 id="hero-title" className="hero-title">
              Ulehčujeme<br />vám <span className="accent">život.</span>
            </h1>
            <p className="lead">
              Prodej i půjčovna pomůcek pro domácí péči. Přivezeme, vyneseme a smontujeme
              přímo u vás doma — často už druhý den, i s hrazdou a nastavením.
            </p>

            <div className="fork" role="group" aria-label="Vyberte, co potřebujete">
              <a className="fork-card fork-buy" href="#">
                <span className="fork-label">Prodej</span>
                <span className="fork-desc">Chcete pomůcku vlastní? Vyberte z kompletní nabídky — nové i repasované, skladem.</span>
                <span className="fork-go">Prohlédnout prodej <span aria-hidden="true">→</span></span>
              </a>
              <a className="fork-card fork-rent" href="#rent">
                <span className="fork-label">Půjčovna</span>
                <span className="fork-desc">Potřebujete pomůcku jen na čas? Půjčíme a přivezeme. Platíte měsíční nájem.</span>
                <span className="fork-go">Prohlédnout půjčovnu <span aria-hidden="true">→</span></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="rent" className="section rent" aria-labelledby="rent-title">
        <div className="container">
          <p className="eyebrow eyebrow-green">Půjčovna zdravotních pomůcek</p>
          <h2 id="rent-title" className="section-title">Jak to u nás funguje</h2>
          <span className="anchor" aria-hidden="true" />
          <p className="section-lead">
            Čtyři kroky od telefonu k připravené pomůcce doma. Nic nemusíte stěhovat ani sestavovat —
            to je naše práce.
          </p>

          <ol className="steps">
            <li className="step">
              <span className="bead">01</span>
              <div className="step-body">
                <h3 className="step-title">Zavoláte nebo objednáte online</h3>
                <p className="step-text">
                  Poradíme s výběrem podle diagnózy a možností. Stačí zvednout telefon:{" "}
                  <a className="inline-link" href="tel:+420777111222">+420 777 111 222</a>.
                </p>
              </div>
            </li>
            <li className="step">
              <span className="bead">02</span>
              <div className="step-body">
                <h3 className="step-title">Přivezeme až k vám domů</h3>
                <p className="step-text">
                  Rozvoz po celé ČR. U vybraných pomůcek je{" "}
                  <span className="tag">Doprava PPL zdarma</span>.
                </p>
              </div>
            </li>
            <li className="step">
              <span className="bead">03</span>
              <div className="step-body">
                <h3 className="step-title">Vyneseme a odborně smontujeme</h3>
                <p className="step-text">
                  Postel složíme v pokoji, připevníme hrazdu a vše nastavíme na míru pacientovi.
                </p>
              </div>
            </li>
            <li className="step">
              <span className="bead">04</span>
              <div className="step-body">
                <h3 className="step-title">Ukážeme, jak se pomůcka používá</h3>
                <p className="step-text">
                  V klidu vysvětlíme ovládání i údržbu. A pak jsme na příjmu, kdyby cokoli.
                </p>
              </div>
            </li>
          </ol>

          <p className="rent-note">
            Platíte jen měsíční nájem. Pomůcku si můžete kdykoli odkoupit za zvýhodněnou cenu.
          </p>

          <ul className="chips" aria-label="Co u nás půjčíte">
            <li>Polohovací postele</li>
            <li>Antidekubitní matrace</li>
            <li>Invalidní vozíky</li>
            <li>Elektrické vozíky</li>
            <li>Koncentrátory kyslíku</li>
            <li>Pomůcky dle diagnózy</li>
          </ul>
        </div>
      </section>

      <section className="section about" aria-labelledby="about-title">
        <div className="container">
          <p className="eyebrow eyebrow-green">O nás</p>
          <h2 id="about-title" className="section-title">Pomáháme vám v těžké životní situaci</h2>
          <span className="anchor" aria-hidden="true" />

          <div className="about-grid">
            <div className="about-text">
              <p>
                Jsme dva — Viktor a Radim, kamarádi ze školy. Před více než 15 lety nás spojila
                jedna věc: potřebovali jsme zdravotní lůžko pro své prarodiče a sehnat ho tehdy
                bylo opravdu těžké. Tak vznikla Invira.
              </p>
              <p>
                Dnes prodáváme a půjčujeme zdravotní techniku, vyvíjíme a vyrábíme designová
                polohovací lůžka Evobeds a jsme tým přes 30 lidí se sídlem v Ostravě.
              </p>
              <p>
                Víme, že nemoc se neptá. Když nutně potřebujete lůžko, vozík nebo jinou pomůcku,
                dodáme ji takřka ze dne na den — i s odborným servisem. Držíme příznivé ceny a
                dbáme na kvalitu. Jsme tu prostě pro vás.
              </p>
            </div>

            <div className="about-side">
              <dl className="stats">
                <div className="stat">
                  <dt>let s vámi</dt>
                  <dd>15+</dd>
                </div>
                <div className="stat">
                  <dt>zákazníků</dt>
                  <dd>40 000+</dd>
                </div>
                <div className="stat">
                  <dt>lidí v týmu</dt>
                  <dd>30+</dd>
                </div>
                <div className="stat">
                  <dt>sídlo</dt>
                  <dd>Ostrava</dd>
                </div>
              </dl>

              <div className="where">
                <h3 className="where-title">Kde nás najdete</h3>
                <p>Prodejny v Ostravě a Praze. Rozvoz a montáž po celé ČR.</p>
                <p>Půjčovna v Ostravě, Brně, Praze a na Slovensku.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
