import type { CSSProperties } from "react";

const PHONE_DISPLAY = "724 232 279";
const PHONE_HREF = "tel:+420724232279";

const steps = [
  {
    n: "01",
    title: "Zavoláte nebo pošlete SPZ",
    body: "\u0158eknete n\u00e1m zna\u010dku, rok v\u00fdroby a stav vozu. Orienta\u010dn\u00ed cenu m\u00e1te b\u011bhem p\u00e1r minut, \u00fapln\u011b nez\u00e1vazn\u011b.",
  },
  {
    n: "02",
    title: "P\u0159ijedeme a ocen\u00edme",
    body: "P\u0159ijedeme za v\u00e1mi po cel\u00e9 severn\u00ed Morav\u011b \u2014 do Ostravy, Hav\u00ed\u0159ova, Karvin\u00e9 i Fr\u00fddku. Prohl\u00eddka a ocen\u00edn\u00ed nic nestoj\u00ed.",
  },
  {
    n: "03",
    title: "Zaplat\u00edme a odvezeme",
    body: "Pen\u00edze dostanete hotov\u011b na ruku nebo p\u0159evodem ihned. Odhl\u00e1\u0161en\u00ed vozidla i odvoz vy\u0159\u00eddime za v\u00e1s.",
  },
];

const trust = [
  "Havarovan\u00e9 i nepoj\u00edzdn\u00e9 vozy",
  "P\u0159epis a odhl\u00e1\u0161en\u00ed na n\u00e1s",
  "F\u00e9rov\u00e1 cena, bez smlouv\u00e1n\u00ed dol\u016f",
  "P\u0159ijedeme za v\u00e1mi zdarma",
];

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

export default function Page() {
  return (
    <main>
      <div className="rm-top">
        <nav className="container rm-nav" aria-label="Hlavn\u00ed navigace">
          <a className="rm-brand" href="#top" id="top">
            <span className="rm-brand-mark" aria-hidden="true">M</span>
            <span className="rm-brand-name">
              MISIORZ
              <em>v\u00fdkup aut \u00b7 Ostrava</em>
            </span>
          </a>
          <div className="rm-nav-right">
            <a className="rm-nav-link" href="#jak">Jak to funguje</a>
            <a className="rm-nav-link" href="#kontakt">O n\u00e1s</a>
            <a className="rm-nav-phone mono" href={PHONE_HREF}>
              <span aria-hidden="true">\u260e</span> {PHONE_DISPLAY}
            </a>
          </div>
        </nav>

        <section className="rm-hero" aria-labelledby="hero-nadpis">
          <img
            className="rm-hero-img"
            src="/hero.webp"
            alt="Vozy p\u0159ipraven\u00e9 k v\u00fdkupu na severn\u00ed Morav\u011b"
          />
          <div className="rm-hero-veil" aria-hidden="true" />
          <div className="container rm-hero-grid">
            <div className="rm-hero-copy">
              <p className="rm-eyebrow mono rm-anim" style={delay(60)}>
                V\u00fdkup vozidel \u00b7 Severn\u00ed Morava
              </p>
              <h1 className="rm-h1 rm-anim" id="hero-nadpis" style={delay(140)}>
                Va\u0161e auto prom\u011bn\u00edme <span>v hotovost</span> je\u0161t\u011b dnes.
              </h1>
              <p className="rm-lead rm-anim" style={delay(240)}>
                Vykupujeme osobn\u00ed i u\u017eitkov\u00e9 vozy \u2014 poj\u00edzdn\u00e9, havarovan\u00e9 i auta
                na spl\u00e1tky. Ocen\u011bn\u00ed zdarma, pen\u00edze na ruku a odhl\u00e1\u0161en\u00ed vozidla
                vy\u0159\u00eddime za v\u00e1s.
              </p>
              <div className="rm-cta-row rm-anim" style={delay(340)}>
                <a className="rm-btn" href={PHONE_HREF}>
                  Zavolat {PHONE_DISPLAY}
                </a>
                <a className="rm-btn-ghost" href="#jak">
                  Jak v\u00fdkup prob\u00edh\u00e1
                </a>
              </div>
              <ul className="rm-facts mono rm-anim" style={delay(440)}>
                <li>V\u00fdkup do 24 hodin</li>
                <li>Hotov\u011b i p\u0159evodem</li>
                <li>Cel\u00e1 severn\u00ed Morava</li>
              </ul>
            </div>

            <aside className="rm-ticket rm-stamp" aria-label="Uk\u00e1zka v\u00fdkupn\u00edho protokolu">
              <div className="rm-ticket-top mono">
                <span>V\u00fdkupn\u00ed protokol</span>
                <span>N\u00ba 4471</span>
              </div>
              <dl className="rm-ticket-body">
                <div className="rm-ticket-row">
                  <dt className="mono">Vozidlo</dt>
                  <dd>\u0160koda Octavia Combi 2.0 TDI</dd>
                </div>
                <div className="rm-ticket-row">
                  <dt className="mono">Rok / n\u00e1jezd</dt>
                  <dd className="mono">2016 \u00b7 168\u202f400 km</dd>
                </div>
                <div className="rm-ticket-row">
                  <dt className="mono">Stav</dt>
                  <dd>poj\u00edzdn\u00e9, bez z\u00e1vad</dd>
                </div>
              </dl>
              <div className="rm-ticket-price">
                <span className="mono rm-ticket-price-label">V\u00fdkupn\u00ed cena</span>
                <span className="rm-ticket-price-num mono">
                  205\u202f000 <em>K\u010d</em>
                </span>
                <span className="mono rm-ticket-price-note">platba hotov\u011b \u00b7 dnes</span>
              </div>
              <p className="rm-ticket-foot mono">
                Orienta\u010dn\u00ed p\u0159\u00edklad \u2014 va\u0161e cena po prohl\u00eddce.
              </p>
            </aside>
          </div>
        </section>
      </div>

      <div className="rm-hazard" aria-hidden="true" />

      <section className="rm-jak" id="jak" aria-labelledby="jak-nadpis">
        <div className="container rm-jak-grid">
          <div className="rm-jak-intro">
            <p className="rm-eyebrow mono rm-eyebrow--dark">Postup</p>
            <h2 className="rm-h2" id="jak-nadpis">
              T\u0159i kroky a m\u00e1te zaplaceno
            </h2>
            <p className="rm-h2-lead">
              \u017d\u00e1dn\u00e9 formul\u00e1\u0159e na t\u00fddny dop\u0159edu. Od prvn\u00edho telefonu
              k pen\u011bz\u016fm na ruku to zvl\u00e1dneme klidn\u011b za jedno odpoledne.
            </p>
            <img
              className="rm-jak-img"
              src="/section-1.webp"
              alt="Ocen\u011bn\u00ed a p\u0159ed\u00e1n\u00ed vozu p\u0159i v\u00fdkupu"
            />
          </div>
          <ol className="rm-steps">
            {steps.map((s) => (
              <li className="rm-step" key={s.n}>
                <span className="rm-step-n mono" aria-hidden="true">{s.n}</span>
                <div>
                  <h3 className="rm-step-title">{s.title}</h3>
                  <p className="rm-step-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rm-about" id="kontakt" aria-labelledby="about-nadpis">
        <div className="container rm-about-grid">
          <div className="rm-about-media">
            <img
              className="rm-about-img"
              src="/section-2.webp"
              alt="Robert Misiorz \u2014 v\u00fdkup aut v Ostrav\u011b"
            />
          </div>
          <div className="rm-about-copy">
            <p className="rm-eyebrow mono">O n\u00e1s</p>
            <h2 className="rm-h2" id="about-nadpis">
              Robert Misiorz \u2014 auta na severn\u00ed Morav\u011b vykupuji f\u00e9rov\u011b
            </h2>
            <p className="rm-about-text">
              Nejsem anonymn\u00ed inzer\u00e1t. Auta vykupuji z Ostravy osobn\u011b, cenu
              \u0159eknu rovnou a tu, na kter\u00e9 se domluv\u00edme, taky zaplat\u00edm \u2014
              bez pozd\u011bj\u0161\u00edho \u201enakonec je to hor\u0161\u00ed, ne\u017e vypadalo\u201c. Vezmu i vozy
              po nehod\u011b, s vysok\u00fdm n\u00e1jezdem nebo s dojet\u00fdm technick\u00fdm.
            </p>
            <ul className="rm-trust">
              {trust.map((t) => (
                <li className="rm-trust-item" key={t}>
                  <span className="rm-trust-tick" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="rm-contact">
              <p className="rm-contact-plate mono">
                <span>Sl\u00e1dkova 2666/27</span>
                <span>702\u202f00 Ostrava</span>
              </p>
              <a className="rm-btn rm-btn--onslate" href={PHONE_HREF}>
                Zavolat {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
