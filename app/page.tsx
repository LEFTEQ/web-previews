import type { CSSProperties } from "react";

export default function Page() {
  const sortiment = [
    {
      code: "H2O",
      title: "Voda",
      desc: "Trubky, tvarovky, ventily, baterie a spojovací materiál pro rozvody pitné i užitkové vody. Kompletní sortiment SAGITTARIUS i českých značek.",
    },
    {
      code: "TOP",
      title: "Topen\u00ed",
      desc: "Radi\u00e1tory, ventily, \u010derpadla a rozvody \u00fast\u0159edn\u00edho vyt\u00e1p\u011bn\u00ed. Poradime, co se hod\u00ed k va\u0161emu kotli i star\u00e9mu rozvodu.",
    },
    {
      code: "PLN",
      title: "Plyn",
      desc: "Plynov\u00e9 hadice, regul\u00e1tory, tlakov\u00e9 spoje a arma\u017eady. V\u0161e certifikovan\u00e9 pro dom\u00e1cnost i \u017eivnostn\u00edka.",
    },
    {
      code: "N\u0158D",
      title: "N\u00e1\u0159ad\u00ed",
      desc: "Kle\u0161t\u011b, kl\u00ed\u010de, p\u00e1jky, t\u011bsn\u00edc\u00ed materi\u00e1l a spojovac\u00ed materi\u00e1l. To, co profe\u010di i kutil pot\u0159ebuje mit po ruce.",
    },
  ];

  return (
    <main className="pg">
      <header className="nav">
        <a className="wm" href="#">
          <span className="wm-thread" aria-hidden="true" />
          <span className="wm-name">
            INTERCOM<span className="wm-city">\u00fast\u00ed</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Hlavn\u00ed">
          <a href="#sortiment">Sortiment</a>
          <a href="#firma">O firm\u011b</a>
          <a className="nav-call" href="tel:+420777153572">
            Zavolat 777\u00a0153\u00a0572
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Regály s vodovodními a plynovými armaturami v prodejně INTERCOM Ústí"
            className="hero-img"
          />
        </div>
        <div className="hero-body">
          <p className="eyebrow">Prodejna \u2022 velkoobchod \u2022 \u017di\u017ekova 72, \u00dast\u00ed nad Labem</p>
          <h1 id="hero-title" className="hero-title">
            Voda, topen\u00ed a&nbsp;plyn.
            <br />
            <span className="hero-title-em">Ka\u017ed\u00fd spoj m\u00e1me na sklad\u011b.</span>
          </h1>
          <p className="hero-lead">
            Od roku 1994 pult, kde v\u00e1m poradime a rovnou vyd\u00e1me spr\u00e1vnou tvarovku. V\u00fdhradn\u00ed dovozce italsk\u00e9 zna\u010dky SAGITTARIUS pro \u010cesko \u2014 i za n\u00edzk\u00e9 koncov\u00e9 ceny.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420777153572">
              Zavolat na prodejnu
            </a>
            <a className="btn btn-ghost" href="mailto:sklad@intercom-usti.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Otev\u0159eno</dt>
              <dd>Po\u2013P\u00e1 7:00\u201315:30</dd>
            </div>
            <div>
              <dt>Sobota</dt>
              <dd>8:00\u201312:00</dd>
            </div>
            <div>
              <dt>Na trhu</dt>
              <dd>od roku 1994</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="sortiment" className="sortiment" aria-labelledby="sortiment-title">
        <div className="sec-head">
          <p className="eyebrow eyebrow-line">\u010cty\u0159i pulty, jeden sklad</p>
          <h2 id="sortiment-title">Co u n\u00e1s najdete</h2>
          <p className="sec-lead">
            Kompletn\u00ed sortiment pod jednou st\u0159echou. Ne\u010dek\u00e1te na dovoz \u2014 v\u011bt\u0161inu zbo\u017e\u00ed si prohl\u00e9dnete a odnesete rovnou z prodejny.
          </p>
        </div>
        <ul className="cards">
          {sortiment.map((s) => (
            <li key={s.code} className="card">
              <span className="card-code" aria-hidden="true">
                {s.code}
              </span>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-desc">{s.desc}</p>
            </li>
          ))}
        </ul>
        <div className="sortiment-media">
          <img
            src="/section-1.webp"
            alt="Ukázka nabízeného sortimentu \u2014 tvarovky, ventily a spojovací materiál"
            className="sec-img"
          />
        </div>
      </section>

      <section id="firma" className="firma" aria-labelledby="firma-title">
        <div className="firma-grid">
          <div className="firma-media">
            <img
              src="/section-2.webp"
              alt="Prodejna INTERCOM Ústí v Žižkově ulici v Ústí nad Labem"
              className="sec-img"
            />
          </div>
          <div className="firma-body">
            <p className="eyebrow eyebrow-line">O firm\u011b</p>
            <h2 id="firma-title">Lid\u00e9 za pultem, kte\u0159\u00ed \u0159eme\u00edm\u00ed rozum\u00ed</h2>
            <p>
              Jsme v\u00fdhradn\u00ed dovozce produkt\u016f v\u00fdrobn\u011b-exportn\u00edho sdru\u017een\u00ed italsk\u00fdch v\u00fdrobc\u016f pod zna\u010dkou SAGITTARIUS pro \u010ceskou republiku. Ta si za v\u00edc ne\u017e t\u0159icet let z\u00edskala d\u016fv\u011bru z\u00e1kazn\u00edk\u016f po cel\u00e9 Evrop\u011b \u2014 u n\u00e1s je k dost\u00e1n\u00ed od roku 1993.
            </p>
            <p>
              Pro koncov\u00e9 z\u00e1kazn\u00edky dr\u017e\u00edme n\u00edzk\u00e9 ceny, \u017eivnostn\u00edk\u016fm nab\u00edz\u00edme zaj\u00edmav\u00e9 velkoobchodn\u00ed slevy. A hlavn\u011b \u2014 ochotn\u011b a kvalifikovan\u011b poradime, co pot\u0159ebujete.
            </p>
            <div className="firma-contact">
              <div>
                <span className="fc-label">Prodejna</span>
                <span className="fc-val">\u017di\u017ekova 72, 400\u00a001 \u00dast\u00ed nad Labem</span>
              </div>
              <div>
                <span className="fc-label">Telefon</span>
                <a className="fc-val fc-link" href="tel:+420777153572">
                  +420\u00a0777\u00a0153\u00a0572
                </a>
              </div>
              <div>
                <span className="fc-label">E-mail</span>
                <a className="fc-val fc-link" href="mailto:sklad@intercom-usti.cz">
                  sklad@intercom-usti.cz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
