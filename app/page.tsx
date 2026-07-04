import type { CSSProperties } from "react";

const services = [
  {
    idx: "01",
    name: "Kompletní rekonstrukce koupelny",
    body: "Od demolice staré koupelny po hotovou místnost na klíč. Bourání, nové rozvody vody a odpadů, hydroizolace, obklady, sanita. Jeden tým od začátku do konce, žádné hlídání subdodavatelů.",
    detail: "Termín i cenu dostanete písemně předem.",
  },
  {
    idx: "02",
    name: "Obklady a dlažba",
    body: "Velkoformáty, mozaika, imitace kamene i betonstěrka. Rovné spáry, přesné rohy a ukončovací lišty tam, kde mají být. Detail, který v koupelně vidíte každý den.",
    detail: "Ukázky spár a vzorníky vám přivezu domů.",
  },
  {
    idx: "03",
    name: "Sprchový kout a odtok",
    body: "Bezbariérové kouty se sprchovým žlabem ve správném spádu. Poctivá hydroizolace pod obklad, aby voda tekla tam, kam má, a ne k sousedům pod vás.",
    detail: "Spády měřím nivelačkou, ne od oka.",
  },
  {
    idx: "04",
    name: "Zednické práce a omítky",
    body: "Vnitřní omítky, sádrokartonové podhledy a příčky, vyzdívky. Připravím vám rovné stěny pod obklad i malbu — základ, na kterém stojí všechno ostatní.",
    detail: "Po sobě uklidím, na to slyším nejvíc.",
  },
];

const proof = [
  { value: "8+", label: "let na brněnských stavbách" },
  { value: "150+", label: "dokončených koupelen a bytů" },
  { value: "4,9", label: "průměr z referencí zákazníků" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Rekostavby Pavlíček, domovská stránka">
          <span className="wordmark__lead">REKO</span>
          <span className="wordmark__joint" aria-hidden="true" />
          <span className="wordmark__tail">stavby</span>
          <span className="wordmark__sub">Pavlíček · Brno</span>
        </a>
        <div className="topbar__hours">
          <span className="dot" aria-hidden="true" />
          Otevřeno po–pá 8:00–16:00
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid" aria-hidden="true">
          {Array.from({ length: 96 }).map((_, i) => (
            <span key={i} className="tile" style={{ "--i": i } as CSSProperties} />
          ))}
        </div>

        <div className="hero__inner">
          <p className="eyebrow">Rekonstrukce koupelen · Brno a okolí</p>
          <h1 id="hero-title" className="hero__title">
            Starou koupelnu
            <br />
            <span className="hero__accent">obložíme</span> jako novou.
          </h1>
          <p className="hero__lead">
            Vybouráme, spravíme rozvody, uděláme hydroizolaci a obložíme —
            jeden brněnský tým od demolice po první sprchu. Termín i cenu
            dostanete písemně dopředu.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420731843839">
              Zavolat: 731 843 839
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co pro vás uděláme
            </a>
          </div>
          <p className="hero__note">
            <span className="lock" aria-hidden="true">🔒</span>
            Zabezpečené spojení · odpovídám do druhého dne
          </p>
        </div>

        <div className="hero__spec" aria-hidden="true">
          <div className="spec__line">
            <span>hydroizolace</span>
            <span className="spec__rule" />
          </div>
          <div className="spec__line">
            <span>spád žlabu 1,5 %</span>
            <span className="spec__rule spec__rule--short" />
          </div>
          <div className="spec__line">
            <span>spára 2 mm</span>
            <span className="spec__rule spec__rule--tiny" />
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow">Řez koupelnou · vrstva po vrstvě</p>
          <h2 id="services-title">
            Čtyři vrstvy, ze kterých vzniká hotová koupelna
          </h2>
          <p className="section-sub">
            Kápe vám z kohoutku a vrže podlaha? Projdeme to spolu — a udělám
            jen to, co opravdu potřebujete.
          </p>
        </div>

        <ol className="layers">
          {services.map((s) => (
            <li key={s.idx} className="layer">
              <span className="layer__idx">{s.idx}</span>
              <div className="layer__body">
                <h3>{s.name}</h3>
                <p>{s.body}</p>
                <p className="layer__detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__inner">
          <div className="trust__lead">
            <p className="eyebrow eyebrow--light">O mně · Pavlíček</p>
            <h2 id="trust-title">
              Přijedu, změřím, řeknu rovnou, co to obnáší.
            </h2>
            <p>
              Jsem řemeslník, ne call centrum. Na stavbě mě potkáte osobně,
              domluvíme se srozumitelně a bez překvapení na faktuře.
              Pracuji v Brně a blízkém okolí, nejčastěji v panelácích
              i starších cihlových bytech, kde je potřeba počítat s každým
              centimetrem.
            </p>
            <a className="btn btn--solid" href="tel:+420731843839">
              Domluvit prohlídku zdarma
            </a>
            <a className="trust__mail" href="mailto:stavpavlicek@seznam.cz">
              stavpavlicek@seznam.cz
            </a>
          </div>

          <ul className="stats">
            {proof.map((p) => (
              <li key={p.label} className="stat">
                <span className="stat__value">{p.value}</span>
                <span className="stat__label">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
