import { AiImage } from "./_ui";

function HeldMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 44 24" aria-hidden="true" focusable="false">
      <path
        d="M16 4 C6 9, 6 15, 16 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M28 4 C38 9, 38 15, 28 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const cenik = [
  {
    name: "Individuální terapie",
    who: "Pro mladistvé od 15 let a dospělé. Pravidelná setkání ve vašem vlastním tempu.",
    len: "50 minut",
    price: "1 200 Kč",
  },
  {
    name: "Párová terapie",
    who: "Pro dvojice, které spolu chtějí zůstat v kontaktu i tehdy, když je to těžké.",
    len: "80 minut",
    price: "1 800 Kč",
  },
  {
    name: "Rodinná terapie",
    who: "Když se téma týká víc lidí a všichni v rodině potřebují být slyšet.",
    len: "80 minut",
    price: "1 900 Kč",
  },
  {
    name: "Poradenství a konzultace",
    who: "Jednorázová nebo krátkodobá podpora u jedné konkrétní situace.",
    len: "50 minut",
    price: "1 100 Kč",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="site-head">
        <a className="wordmark" href="#uvod">
          <HeldMark className="wordmark-mark" />
          <span className="wordmark-text">
            Markéta Klečková
            <small>psychoterapie · Brno</small>
          </span>
        </a>
      </header>

      <section className="hero" id="uvod" aria-labelledby="hero-name">
        <div className="hero-cradle">
          <svg
            className="arc arc-left"
            viewBox="0 0 70 340"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M56 18 C20 92, 20 248, 56 322"
              fill="none"
              stroke="var(--onyx)"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>

          <div className="hero-core">
            <div className="hero-glow" aria-hidden="true" />
            <p className="hero-eyebrow">Psychoterapie · poradenství · Brno</p>
            <h1 className="hero-name" id="hero-name">
              Markéta<span>Klečková</span>
            </h1>
            <p className="hero-roles">
              psycholožka · psychoterapeutka · facilitátorka · mediátorka
            </p>
          </div>

          <svg
            className="arc arc-right"
            viewBox="0 0 70 340"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M14 18 C50 92, 50 248, 14 322"
              fill="none"
              stroke="var(--onyx)"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="hero-lede">
          Někdy stačí místo, kde vás někdo opravdu poslouchá. Víc než patnáct
          let provázím mladistvé, dospělé, páry i celé rodiny náročnými
          obdobími — beze spěchu a bez hodnocení.
        </p>
      </section>

      <section className="section section-work" id="terapie" aria-labelledby="work-title">
        <div className="wrap split">
          <div className="split-label">
            <p className="eyebrow">
              <HeldMark className="label-mark" /> Nabídka
            </p>
          </div>
          <div className="split-body">
            <h2 className="section-title" id="work-title">
              Jak spolu můžeme pracovat
            </h2>
            <p className="section-intro">
              Každý příběh potřebuje jinou formu. Vyberte si, co je teď blízko
              vám — první, úvodní setkání je hlavně o tom, jestli si sedneme.
            </p>

            <ul className="cenik">
              {cenik.map((item) => (
                <li className="cenik-item" key={item.name}>
                  <div className="cenik-head">
                    <h3 className="cenik-name">{item.name}</h3>
                    <span className="cenik-price">{item.price}</span>
                  </div>
                  <p className="cenik-who">{item.who}</p>
                  <p className="cenik-len">{item.len}</p>
                </li>
              ))}
            </ul>

            <p className="cenik-note">
              Ceny jsou orientační. Úvodní setkání trvá 50 minut a slouží
              hlavně ke vzájemnému seznámení. Sídlím na adrese Ukázková 123,
              Brno.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-about" id="o-mne" aria-labelledby="about-title">
        <div className="wrap split">
          <div className="split-label">
            <p className="eyebrow">
              <HeldMark className="label-mark" /> O mně
            </p>
          </div>
          <div className="split-body">
            <h2 className="section-title" id="about-title">
              Držím prostor, ve kterém se věci můžou v klidu srovnat.
            </h2>

            <div className="about-prose">
              <p>
                Jmenuji se Markéta Klečková. Jsem psycholožka a
                psychoterapeutka a přes patnáct let pracuji v pomáhajících
                profesích — s mladistvými, dospělými, páry i celými rodinami.
              </p>
              <p>
                Terapie u mě není o radách. Je to společný čas, ve kterém se dá
                nahlas přemýšlet, hledat a někdy i mlčet, aniž byste museli
                cokoli hrát nebo zvládat.
              </p>
              <p>
                Kromě terapie také facilituji a mediuji — pomáhám lidem znovu
                spolu mluvit tam, kde to samo nejde. Když je potřeba,
                spolupracuji s dalšími odborníky, abyste v tom nezůstali sami.
              </p>
            </div>

            <dl className="about-facts">
              <div className="fact">
                <dt>Kvalifikace</dt>
                <dd>Mgr. Bc. — psycholožka a psychoterapeutka</dd>
              </div>
              <div className="fact">
                <dt>Zkušenost</dt>
                <dd>15+ let v pomáhajících profesích</dd>
              </div>
              <div className="fact">
                <dt>Formy terapie</dt>
                <dd>Individuální, párová i rodinná</dd>
              </div>
              <div className="fact">
                <dt>Dále nabízím</dt>
                <dd>Facilitaci, mediaci a spolupráci s odborníky</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
