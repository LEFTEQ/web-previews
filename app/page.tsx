import { AiImage } from "./_ui";

function Reticle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1" opacity="0.75" />
      <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="1.4" strokeDasharray="1.5 7" />
      <circle cx="100" cy="100" r="46" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      <line x1="100" y1="3" x2="100" y2="34" stroke="currentColor" strokeWidth="1.4" />
      <line x1="100" y1="166" x2="100" y2="197" stroke="currentColor" strokeWidth="1.4" />
      <line x1="3" y1="100" x2="34" y2="100" stroke="currentColor" strokeWidth="1.4" />
      <line x1="166" y1="100" x2="197" y2="100" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="100" cy="100" r="2.6" fill="currentColor" />
    </svg>
  );
}

function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.3" />
      <line x1="12" y1="0.5" x2="12" y2="4.5" stroke="currentColor" strokeWidth="1.3" />
      <line x1="12" y1="19.5" x2="12" y2="23.5" stroke="currentColor" strokeWidth="1.3" />
      <line x1="0.5" y1="12" x2="4.5" y2="12" stroke="currentColor" strokeWidth="1.3" />
      <line x1="19.5" y1="12" x2="23.5" y2="12" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

const services = [
  {
    tag: "×20 zvětšení",
    name: "Dentální hygiena a AirFlow",
    body:
      "Profesionální čištění, sonický ultrazvuk a AirFlow proti pigmentům z kávy i vína. Ukážeme vám přesně ta místa, kde kartáček nedosáhne, a nacvičíme techniku na míru vašim zubům.",
  },
  {
    tag: "pod mikroskopem",
    name: "Mikroskopická endodoncie",
    body:
      "Ošetření kořenových kanálků provádíme výhradně pod operačním mikroskopem. Vidíme i vlásečnicové kanálky, které jsou pouhým okem neviditelné — a proto zub častěji zachráníme.",
  },
  {
    tag: "kompozit",
    name: "Záchovná stomatologie",
    body:
      "Kaz odstraníme šetrně, pod zvětšením a s vrstveným kompozitem, který barevně splyne s okolím zubu. Bereme jen napadenou tkáň — každý milimetr zdravé skloviny zůstává.",
  },
  {
    tag: "estetika",
    name: "Bělení a korekce úsměvu",
    body:
      "Bezpečné bělení, odstranění pigmentů AirFlow a jemné korekce tvaru i barvy. Domluvíme se na výsledku, který vypadá přirozeně — ne na zubní pastě z reklamy.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#top">
          <Reticle className="wm-reticle" />
          <span className="wm-text">
            <span className="wm-name">Hoplíčková</span>
            <span className="wm-sub">mikroskopická stomatologie · Olomouc</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#ordinace">Ordinace</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo">
          <AiImage src="/hero.webp" alt="Zářivý zdravý úsměv po ošetření pod operačním mikroskopem" className="hero-img" />
          <span className="hero-scrim" aria-hidden="true" />
        </div>
        <Reticle className="hero-reticle" />

        <div className="hero-body">
          <p className="eyebrow">Dentální hygiena · výhradně pod operačním mikroskopem</p>
          <h1 className="hero-title">Zaostřeno na&nbsp;každý detail vašeho úsměvu.</h1>
          <p className="hero-lead">
            V Olomouci ošetřujeme zuby pod operačním mikroskopem — vidíme desetkrát víc než pouhým okem.
            Méně vrtání, víc jistoty a klidnější návštěva.
          </p>
          <a className="btn" href="#ordinace">Objednat se</a>
        </div>
      </section>

      <section className="section services" id="sluzby">
        <div className="section-head">
          <Mark className="mark" />
          <div>
            <p className="kicker">Co u nás projdete</p>
            <h2>Péče od prevence po záchranu zubu</h2>
          </div>
        </div>

        <div className="service-grid">
          {services.map((s) => (
            <article className="service-card" key={s.name}>
              <span className="service-tag">{s.tag}</span>
              <h3>{s.name}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>

        <figure className="feature">
          <div className="feature-frame">
            <AiImage src="/section-1.webp" alt="Ošetření pod operačním mikroskopem v ordinaci" className="feature-img" />
            <Reticle className="feature-reticle" />
          </div>
          <figcaption>
            <p className="kicker">Signatura ordinace</p>
            <p className="feature-text">
              Mikroskop u nás není doplněk — je to výchozí bod každého zákroku. To, co jinde lékař odhaduje,
              my vidíme ostře na obrazovce a můžeme vám to hned ukázat.
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="section trust" id="ordinace">
        <div className="trust-media">
          <div className="trust-frame">
            <AiImage src="/section-2.webp" alt="Světlá ordinace dentální hygieny" className="trust-img" />
            <Reticle className="trust-reticle" />
          </div>
        </div>

        <div className="trust-body">
          <div className="section-head">
            <Mark className="mark" />
            <div>
              <p className="kicker">Proč k nám</p>
              <h2>Přesnost, kterou uvidíte na vlastní oči</h2>
            </div>
          </div>

          <p className="trust-text">
            Pracujeme pomalu a pod zvětšením, protože zub roste jen jednou. Během ošetření vám ukazujeme,
            co děláme a proč — odcházíte s jasným plánem, ne s nejistotou. Objednáváme na přesný čas,
            takže v čekárně nesedíte zbytečně.
          </p>

          <ul className="facts">
            <li><span>Zvětšení</span>Až ×20 na každém zákroku</li>
            <li><span>Přístup</span>Bezbariérově, výtahem do patra</li>
            <li><span>Objednání</span>Na konkrétní čas, bez front</li>
          </ul>

          <div className="contact">
            <p className="kicker">Kde nás najdete</p>
            <address>
              <span className="c-line">Ukázková 123, Olomouc</span>
              <a href="tel:+420777111222">777 111 222</a>
              <a href="mailto:info@example.cz">info@example.cz</a>
            </address>
            <p className="hours">Po–Čt 8:00–16:00 · Pá 8:00–13:00</p>
          </div>
        </div>
      </section>
    </main>
  );
}
