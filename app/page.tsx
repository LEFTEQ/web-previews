import type { CSSProperties } from "react";

const services = [
  {
    code: "FV",
    title: "\u010ci\u0161t\u011bn\u00ed fotovoltaick\u00fdch a\u00a0sol\u00e1rn\u00edch panel\u016f",
    body: "Profesion\u00e1ln\u00ed \u010di\u0161t\u011bn\u00ed panel\u016f na st\u0159ech\u00e1ch i\u00a0na poli. Sm\u0079jeme prach a\u00a0nele\u010dky, kter\u00e9 st\u00edn\u00ed \u010dl\u00e1nky \u2014 vy\u010di\u0161t\u011bn\u00fd panel vyrob\u00ed o\u00a0n\u011bkolik procent v\u00edc.",
    tag: "Vy\u0161\u0161\u00ed v\u00fdnos elektr\u00e1rny"
  },
  {
    code: "FAS",
    title: "\u010ci\u0161t\u011bn\u00ed fas\u00e1d a\u00a0pl\u00e1\u0161\u0165\u016f budov",
    body: "Sklen\u011bn\u00e9 plochy, plechov\u00e1 oblo\u017een\u00ed i\u00a0hladk\u00e9 povrchy ve v\u00fd\u0161k\u00e1ch. \u010cist\u00edme technologi\u00ed PURAQLEEN\u00ae demineralizovanou vodou \u2014 beze \u0161moul a\u00a0s\u00a0dlouh\u00fdm \u00fa\u010dinkem."
  },
  {
    code: "\u00daKLID",
    title: "\u00daklid provoz\u016f a\u00a0\u00fadr\u017eba zelen\u011b",
    body: "Kancel\u00e1\u0159e, obchody, sklady, d\u00edlny i\u00a0zdravotnick\u00e1 za\u0159\u00edzen\u00ed. Pravideln\u00fd i\u00a0jednor\u00e1zov\u00fd \u00fdklid a\u00a0p\u00e9\u010de o\u00a0zele\u0148 kolem objektu."
  },
  {
    code: "OSTRAHA",
    title: "Ostraha osob a\u00a0majetku",
    body: "Fyzick\u00e1 ostraha are\u00e1l\u016f, recep\u010dn\u00ed a\u00a0vr\u00e1tn\u00e1 slu\u017eba, napojen\u00ed na pult centr\u00e1ln\u00ed ochrany."
  }
];

const reasons = [
  {
    k: "T\u00fdm",
    t: "St\u00e1l\u00fd a\u00a0prov\u011b\u0159en\u00fd t\u00fdm",
    d: "U\u00a0v\u00e1s pracuj\u00ed st\u00e1le tit\u00ed\u017e lid\u00e9, kter\u00e9 zn\u00e1te \u2014 ne n\u00e1hodn\u00e9 brig\u00e1dy."
  },
  {
    k: "Technologie",
    t: "Nejnov\u011bj\u0161\u00ed postupy",
    d: "PURAQLEEN\u00ae, demineralizovan\u00e1 voda a\u00a0profesion\u00e1ln\u00ed technika na v\u00fd\u0161kov\u00e9 pr\u00e1ce."
  },
  {
    k: "Zku\u0161enost",
    t: "Roky v\u00a0oboru a\u00a0kontrola kvality",
    d: "Prov\u011b\u0159en\u00fd syst\u00e9m kontroly, ze kter\u00e9ho m\u00e1te jistotu v\u00fdsledku."
  },
  {
    k: "Cena",
    t: "F\u00e9rov\u00e9 ceny p\u0159edem",
    d: "Nez\u00e1vazn\u00e1 kalkulace dop\u0159edu, bez p\u0159ekvapen\u00ed na faktu\u0159e."
  }
];

export default function Page() {
  return (
    <main className="page">
      <header className="nav">
        <a className="mark" href="#top" aria-label="Glanc Facility \u2014 \u00favod">
          <span className="mark-word">
            Glanc<span className="mark-dot">.</span>
          </span>
          <span className="mark-sub">FACILITY \u00b7 BRNO</span>
        </a>
        <nav className="nav-links" aria-label="Hlavn\u00ed">
          <a href="#sluzby">Slu\u017eby</a>
          <a href="#proc">Pro\u010d n\u00e1s</a>
          <a className="nav-cta" href="mailto:info@glancfacility.cz?subject=Cenov%C3%A1%20nab%C3%ADdka">
            Cenov\u00e1 nab\u00eddka
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="\u010ci\u0161t\u011bn\u00ed fotovoltaick\u00fdch panel\u016f technikou Glanc Facility"
          />
          <span className="gleam" aria-hidden="true" />
        </div>
        <div className="hero-inner">
          <p className="eyebrow reveal">\u00daKLID \u00b7 \u010cI\u0160T\u011aN\u00cd \u00b7 OSTRAHA \u2014 BRNO A\u00a0OKOL\u00cd</p>
          <h1 className="hero-title">
            <span className="reveal line">Vrac\u00edme v\u011bcem</span>
            <span className="reveal line accent">glanc.</span>
          </h1>
          <p className="hero-lead reveal">
            \u010cist\u00edme fotovoltaick\u00e9 panely, sklen\u011bn\u00e9 fas\u00e1dy i\u00a0cel\u00e9 provozy \u2014
            profesion\u00e1ln\u00ed technologi\u00ed, se st\u00e1l\u00fdm t\u00fdmem a\u00a0s\u00a0v\u00fdsledkem, kter\u00fd je
            vid\u011bt na povrchu i\u00a0na v\u00fdnosu.
          </p>
          <div className="hero-cta reveal">
            <a className="btn btn-primary" href="mailto:info@glancfacility.cz?subject=Cenov%C3%A1%20kalkulace">
              Chci nez\u00e1vaznou kalkulaci
            </a>
            <a className="btn btn-ghost" href="tel:+420603162058">
              Zavolat 603\u00a0162\u00a0058
            </a>
          </div>
          <ul className="spec-strip reveal" aria-label="Z\u00e1kladn\u00ed fakta">
            <li>Brno \u00b7 Doln\u00ed Her\u0161pice</li>
            <li>PURAQLEEN\u00ae technologie</li>
            <li>St\u00e1l\u00fd t\u00fdm, ne brig\u00e1dy</li>
          </ul>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="sec-head">
          <p className="eyebrow eyebrow-dark">SLU\u017dBY</p>
          <h2 className="sec-title">\u010cty\u0159i slu\u017eby, uklizen\u00e9 na glanc.</h2>
          <p className="sec-lead">
            Od sol\u00e1rn\u00edch panel\u016f po ostrahu are\u00e1lu. Vezmeme si na starost celou
            \u00fadr\u017ebu, nebo jen to, co pot\u0159ebujete pr\u00e1v\u011b te\u010f.
          </p>
        </div>

        <article className="feature">
          <div className="feature-media">
            <img
              src="/section-1.webp"
              alt="Myt\u00ed sklen\u011bn\u00e9 fas\u00e1dy budovy demineralizovanou vodou"
            />
            <span className="panel-grid" aria-hidden="true" />
          </div>
          <div className="feature-body">
            <span className="cell-code">{services[0].code}</span>
            <h3>{services[0].title}</h3>
            <p>{services[0].body}</p>
            <p className="feature-tag">{services[0].tag}</p>
          </div>
        </article>

        <div className="cells">
          {services.slice(1).map((s) => (
            <article className="cell" key={s.code}>
              <span className="cell-code">{s.code}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" id="proc">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">PRO\u010c GLANC</p>
            <h2 className="sec-title trust-title">Pro\u010d si n\u00e1s firmy nech\u00e1vaj\u00ed.</h2>
            <ul className="reasons">
              {reasons.map((r) => (
                <li key={r.k}>
                  <span className="reason-k">{r.k}</span>
                  <div>
                    <h3>{r.t}</h3>
                    <p>{r.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <aside className="trust-aside">
            <div className="trust-media">
              <img
                src="/section-2.webp"
                alt="T\u00fdm Glanc Facility p\u0159i \u00fdklidu provozu v\u00a0Brn\u011b"
              />
            </div>
            <div className="contact-card">
              <p className="contact-name">GLANC FACILITY s.r.o.</p>
              <p className="contact-line">
                Havr\u00e1nkova 30/11<br />
                619\u00a000 Brno \u2013 Doln\u00ed Her\u0161pice
              </p>
              <p className="contact-line">
                <a href="tel:+420603162058">+420\u00a0603\u00a0162\u00a0058</a>
                <br />
                <a href="tel:+420739456332">+420\u00a0739\u00a0456\u00a0332</a>
              </p>
              <p className="contact-line">
                <a href="mailto:info@glancfacility.cz">info@glancfacility.cz</a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export const _unused: CSSProperties = {};
