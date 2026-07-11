import type { ReactNode } from "react";

export default function Page() {
  const spotrebice: { cislo: string; nazev: string; popis: string }[] = [
    { cislo: "01", nazev: "Pra\u010dky a su\u0161i\u010dky", popis: "Neto\u010d\u00ed, netopn\u00ed, hluk\u00ed p\u0159i \u017edim\u00e1n\u00ed. Vym\u011bn\u00edme lo\u017eiska, \u010derpadlo i topn\u00e9 t\u011bleso." },
    { cislo: "02", nazev: "Chladni\u010dky a mrazni\u010dky", popis: "Nechlad\u00ed, namrz\u00e1, kap\u00e9 voda. Dopln\u00edme chladivo, sprav\u00edme kompresor i termostat." },
    { cislo: "03", nazev: "My\u010dky n\u00e1dob\u00ed", popis: "Neodpoust\u00ed, neoh\u0159\u00edv\u00e1, hl\u00e1s\u00ed chybu. Prohl\u00e9dneme \u010derpadlo, ventil i \u0159\u00edzen\u00ed." },
    { cislo: "04", nazev: "Sporáky a trouby", popis: "Plynov\u00e9 i elektrick\u00e9. Se\u0159\u00edd\u00edme ho\u0159\u00e1ky, vym\u011bn\u00edme termostat, ov\u011b\u0159\u00edme t\u011bsnost." },
    { cislo: "05", nazev: "Kotle a topidla", popis: "Revize, \u010di\u0161t\u011bn\u00ed, ro\u010dn\u00ed \u00fadr\u017eba a opravy plynov\u00fdch kotl\u016f a topidel." },
    { cislo: "06", nazev: "Digesto\u0159e a vestavba", popis: "Servis odsava\u010d\u016f par a vestavn\u00fdch spot\u0159ebi\u010d\u016f v\u010detn\u011b mont\u00e1\u017ee a instalace." }
  ];

  const kroky: { cislo: string; nadpis: string; text: string }[] = [
    { cislo: "1", nadpis: "Zavoláte dispečink", text: "\u0158eknete, co spot\u0159ebi\u010d d\u011bl\u00e1 a kde v Praze jste. Ka\u017edou z\u00e1vadu bereme v\u00e1\u017en\u011b." },
    { cislo: "2", nadpis: "P\u0159ijede technik", text: "Domluv\u00edme term\u00edn, kter\u00fd v\u00e1m sed\u00ed. N\u00e1\u0161 technik v\u00ed p\u0159edem, jakou zna\u010dku jde spravovat." },
    { cislo: "3", nadpis: "Opraveno na m\u00edst\u011b", text: "B\u011b\u017en\u00e9 z\u00e1vady vy\u0159e\u0161\u00edme hned. Bereme s sebou nej\u010dast\u011bj\u0161\u00ed n\u00e1hradn\u00ed d\u00edly." }
  ];

  return (
    <main className="ks">
      <header className="ks-top">
        <a className="ks-brand" href="#" aria-label="Kovoslu\u017eba Praha, domovsk\u00e1 str\u00e1nka">
          <span className="ks-brand-mark" aria-hidden="true">KS</span>
          <span className="ks-brand-text">
            <span className="ks-brand-name">Kovoslu\u017eba</span>
            <span className="ks-brand-sub">Praha \u00b7 servis spot\u0159ebi\u010d\u016f od 1950</span>
          </span>
        </a>
        <nav className="ks-nav" aria-label="Hlavn\u00ed navigace">
          <a href="#sluzby">Opravy</a>
          <a href="#jak">Jak to prob\u00edh\u00e1</a>
          <a href="#duvera">O n\u00e1s</a>
        </nav>
        <a className="ks-call" href="tel:+420000000000">
          <span className="ks-call-label">Dispe\u010dink oprav</span>
          <span className="ks-call-num">Zavolat</span>
        </a>
      </header>

      <section className="ks-hero">
        <div className="ks-hero-copy">
          <p className="ks-eyebrow">Praha a okol\u00ed \u00b7 z\u00e1ru\u010dn\u00ed i poz\u00e1ru\u010dn\u00ed servis</p>
          <h1 className="ks-h1">
            Spot\u0159ebi\u010d <span className="ks-h1-accent">vysadil?</span><br />
            P\u0159ijedeme a spravíme ho.
          </h1>
          <p className="ks-lead">
            Pra\u010dka net\u00e1hne, lednice nechlad\u00ed, trouba neh\u0159eje. Jsme nejv\u011bt\u0161\u00ed servis dom\u00e1c\u00edch
            spot\u0159ebi\u010d\u016f v \u010cesku \u2014 vlastn\u00ed technici, vlastn\u00ed sklad d\u00edl\u016f, sedmdes\u00e1t let praxe.
          </p>
          <div className="ks-hero-actions">
            <a className="ks-btn ks-btn-primary" href="tel:+420000000000">Objednat opravu</a>
            <a className="ks-btn ks-btn-ghost" href="#sluzby">Co spravujeme</a>
          </div>
          <dl className="ks-hero-facts">
            <div><dt>Od roku</dt><dd>1950</dd></div>
            <div><dt>P\u016fsob\u00edme</dt><dd>Praha a okol\u00ed</dd></div>
            <div><dt>Zna\u010dky</dt><dd>V\u0161echny b\u011b\u017en\u00e9</dd></div>
          </dl>
        </div>
        <figure className="ks-hero-media">
          <img src="/hero.webp" alt="Technik Kovoslu\u017eby p\u0159i oprav\u011b dom\u00e1c\u00edho spot\u0159ebi\u010de" width={720} height={900} />
          <figcaption>Na\u0161i technici jezd\u00ed s vlastn\u00edm n\u00e1\u0159ad\u00edm i nejb\u011b\u017en\u011bj\u0161\u00edmi d\u00edly.</figcaption>
        </figure>
      </section>

      <section className="ks-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ks-section-head">
          <p className="ks-eyebrow">Co opravujeme</p>
          <h2 className="ks-h2" id="sluzby-h">Od pra\u010dky po plynov\u00fd kotel</h2>
          <p className="ks-section-sub">
            Mal\u00e9 i velk\u00e9 spot\u0159ebi\u010de, voln\u011b stoj\u00edc\u00ed i vestavn\u00e9. Vyberte, co zlobí \u2014 zbytek vy\u0159e\u0161\u00edme na telefonu.
          </p>
        </div>
        <ul className="ks-grid">
          {spotrebice.map((s) => (
            <li className="ks-card" key={s.cislo}>
              <span className="ks-card-num" aria-hidden="true">{s.cislo}</span>
              <h3 className="ks-card-title">{s.nazev}</h3>
              <p className="ks-card-text">{s.popis}</p>
            </li>
          ))}
        </ul>
        <p className="ks-services-note">
          Star\u00fd spot\u0159ebi\u010d odvezeme a ekologicky zlikvidujeme. Pot\u0159ebujete jen d\u00edl?
          M\u00e1me e-shop i v\u00fddej na prodejn\u011b v Praze.
        </p>
      </section>

      <section className="ks-trust" id="duvera" aria-labelledby="duvera-h">
        <figure className="ks-trust-media">
          <img src="/section-1.webp" alt="Prodejna n\u00e1hradn\u00edch d\u00edl\u016f Kovoslu\u017eby v Praze" width={640} height={760} />
        </figure>
        <div className="ks-trust-copy">
          <p className="ks-eyebrow">Pro\u010d Kovoslu\u017eba</p>
          <h2 className="ks-h2" id="duvera-h">Sedmdes\u00e1t let u vás doma</h2>
          <p className="ks-trust-lead">
            Za\u010d\u00ednali jsme v roce 1950 a od t\u00e9 doby d\u011bl\u00e1me jedno: vrac\u00edme spot\u0159ebi\u010de zp\u011bt do provozu.
            Ne\u0161koll\u00edme brig\u00e1dn\u00edky p\u0159es v\u00edkend \u2014 na\u0161i technici jsou v oboru dom\u00e1.
          </p>
          <ul className="ks-trust-list">
            <li>
              <strong>Vlastn\u00ed technici v Praze.</strong> \u017d\u00e1dn\u00ed prost\u0159edn\u00edci \u2014 p\u0159ijede \u010dlov\u011bk, kter\u00fd u n\u00e1s pracuje.
            </li>
            <li>
              <strong>Z\u00e1ru\u010dn\u00ed i poz\u00e1ru\u010dn\u00ed opravy.</strong> Jsme autorizovan\u00fd servis pro \u0159adu zna\u010dek.
            </li>
            <li>
              <strong>Sklad d\u00edl\u016f po ruce.</strong> B\u011b\u017en\u00e9 z\u00e1vady vy\u0159e\u0161\u00edme p\u0159i prvn\u00ed n\u00e1v\u0161t\u011bv\u011b.
            </li>
            <li>
              <strong>Servisn\u00ed smlouvy pro firmy.</strong> Celoro\u010dn\u00ed \u00fadr\u017eba spot\u0159ebi\u010d\u016f pro organizace.
            </li>
          </ul>
          <figure className="ks-trust-second">
            <img src="/section-2.webp" alt="Detail opravy spot\u0159ebi\u010de technikem Kovoslu\u017eby" width={520} height={340} />
          </figure>
        </div>
      </section>

      <section className="ks-steps" id="jak" aria-labelledby="jak-h">
        <div className="ks-section-head">
          <p className="ks-eyebrow">Jak to prob\u00edh\u00e1</p>
          <h2 className="ks-h2" id="jak-h">T\u0159i kroky k opraven\u00e9mu spot\u0159ebi\u010di</h2>
        </div>
        <ol className="ks-steps-list">
          {kroky.map((k) => (
            <li className="ks-step" key={k.cislo}>
              <span className="ks-step-num" aria-hidden="true">{k.cislo}</span>
              <h3 className="ks-step-title">{k.nadpis}</h3>
              <p className="ks-step-text">{k.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

void (0 as unknown as ReactNode);
