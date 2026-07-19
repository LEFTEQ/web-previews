import { BeaconSweep, Reveal } from "./motion";

const PHONE_DISPLAY = "+420 777 111 222";
const PHONE_HREF = "tel:+420777111222";
const EMAIL = "info@example.cz";

const services = [
  {
    title: "Asistenční a odtahová služba",
    chip: "Nonstop · 24 / 365",
    live: true,
    body: "Přijedeme za vámi kdykoliv. Odtáhneme osobní i užitkové vozidlo a postaráme se o nepojízdné auto po celém Jihočeském kraji.",
    feature: true,
  },
  {
    title: "Pneuservis",
    chip: "Dílna · po objednání",
    body: "Přezutí, vyvážení a opravy defektů. Sezónní uskladnění pneumatik, ať vám nezabírají místo v garáži.",
  },
  {
    title: "Autoservis",
    chip: "Dílna · po objednání",
    body: "Běžné opravy, údržba a příprava na STK. Řekneme dopředu, co auto potřebuje a kdy bude hotové.",
  },
  {
    title: "Půjčovna vozidel a přívěsů",
    chip: "Po objednání",
    body: "Osobní i užitková auta a přívěsy k zapůjčení. Když vaše auto zůstane v servisu, nezůstanete pěšky.",
  },
  {
    title: "Autodoprava",
    chip: "Po domluvě",
    body: "Přeprava zboží a materiálu. Naložíme, odvezeme a v pořádku předáme.",
  },
];

const stats = [
  { num: "2009", label: "jezdíme od" },
  { num: "24 / 365", label: "dostupnost výjezdů" },
  { num: "Jihočeský", label: "kraj, kde pomáháme" },
];

export default function Page() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="beacon-ambient" aria-hidden="true" />
        <BeaconSweep />
        <div className="wrap hero-inner">
          <Reveal className="hero-eyebrow" delay={0.7}>
            <span className="dot" aria-hidden="true" />
            <span>České Budějovice · Čejkovice — někdo je vzhůru, pořád</span>
          </Reveal>

          <Reveal delay={0.95}>
            <h1 id="hero-title" className="wordmark">
              <span className="wm-top">TUREK</span>
              <span className="wm-bottom">ASSISTANCE</span>
            </h1>
          </Reveal>

          <Reveal className="hero-lead" delay={1.25}>
            <p>
              Asistenční a odtahová služba, pneuservis a půjčovna. Zůstanete stát
              na kraji silnice — a my se rozsvítíme na cestě k vám.
            </p>
          </Reveal>

          <Reveal className="hero-cta" delay={1.5}>
            <a className="btn btn--call" href={PHONE_HREF}>
              <span className="btn-kicker">Zavolat, přijedeme</span>
              <span className="btn-num tnum">{PHONE_DISPLAY}</span>
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co umíme
            </a>
          </Reveal>
        </div>
      </section>

      <div className="chevron-band" role="presentation" aria-hidden="true" />

      <section className="section" id="sluzby" aria-labelledby="sluzby-title">
        <div className="wrap">
          <header className="sec-head">
            <span className="sec-eyebrow">Služby</span>
            <h2 id="sluzby-title" className="sec-title">
              Jeden telefon vyřeší auto od defektu po odtah.
            </h2>
          </header>

          <div className="services-grid">
            {services.map((s) => (
              <article
                key={s.title}
                className={`card${s.feature ? " card--feature" : ""}`}
              >
                <div className="card-glow" aria-hidden="true" />
                <div className="card-body">
                  <span className={`chip${s.live ? " chip--live" : ""}`}>
                    {s.live && <span className="chip-dot" aria-hidden="true" />}
                    {s.chip}
                  </span>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-text">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="chevron-band" role="presentation" aria-hidden="true" />

      <section className="section section--trust" aria-labelledby="about-title">
        <div className="wrap trust-grid">
          <div className="trust-copy">
            <span className="sec-eyebrow">O nás</span>
            <h2 id="about-title" className="sec-title">
              Vzhůru od roku 2009 — hlavně tehdy, když vy máte smůlu.
            </h2>
            <p className="trust-text">
              TUREK ASSISTANCE vyjíždí z Českých Budějovic a Čejkovic. Asistence a
              odtah, pneuservis, autoservis, půjčovna i autodoprava — všechno pod
              jednou střechou a jedním číslem. Bereme to jednoduše: spokojený
              zákazník se vrací a doporučí nás dál.
            </p>

            <a className="btn btn--call btn--inline" href={PHONE_HREF}>
              <span className="btn-kicker">Máte poruchu? Volejte</span>
              <span className="btn-num tnum">{PHONE_DISPLAY}</span>
            </a>
          </div>

          <div className="trust-side">
            <dl className="stats">
              {stats.map((st) => (
                <div className="stat" key={st.label}>
                  <dt className="stat-num tnum">{st.num}</dt>
                  <dd className="stat-label">{st.label}</dd>
                </div>
              ))}
            </dl>

            <div className="contact-card">
              <h3 className="contact-title">Kde nás najdete</h3>
              <ul className="contact-list">
                <li>
                  <span className="contact-k">Telefon</span>
                  <a className="tnum contact-v" href={PHONE_HREF}>
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <span className="contact-k">E-mail</span>
                  <a className="contact-v" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <span className="contact-k">Adresa</span>
                  <span className="contact-v">Ukázková 123, České Budějovice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
