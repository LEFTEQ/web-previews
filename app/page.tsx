export default function Page() {
  const zakroky = [
    {
      c: "01",
      dpt: "−2,50 D",
      title: "Laserová operace očí",
      lead: "Odložte brýle i čočky. Femtosekundový laser přemodeluje rohovku za pár minut, druhý den vidíte ostře.",
      note: "Nyní akce −30 %",
      hi: true
    },
    {
      c: "02",
      dpt: "nitrooční čočka",
      title: "Refrakční nelaserové operace",
      lead: "Když laser nestačí, řešíme vysoké dioptrie implantací fakické čočky do oka.",
      note: "",
      hi: false
    },
    {
      c: "03",
      dpt: "katarakta",
      title: "Operace šedého zákalu",
      lead: "Zakalenou čočku nahradíme umělou. Nejčastější zákrok — vracíme jasný, sytý obraz světa.",
      note: "",
      hi: false
    },
    {
      c: "04",
      dpt: "glaukom",
      title: "Zelený zákal",
      lead: "Hlídáme nitrooční tlak a zorné pole, abychom zrak uchránili dřív, než o něj přijdete.",
      note: "",
      hi: false
    },
    {
      c: "05",
      dpt: "strabismus",
      title: "Dětská oftalmologie",
      lead: "Šilhání, tupozrakost i první brýle. Malým pacientům věnujeme čas a klid.",
      note: "",
      hi: false
    },
    {
      c: "06",
      dpt: "ambulance",
      title: "Oční ambulance",
      lead: "Preventivní prohlídky, akutní potíže i pooperační kontroly — Hradec Králové i Nymburk.",
      note: "",
      hi: false
    }
  ];

  return (
    <main className="hos">
      <header className="hos-nav">
        <a className="hos-mark" href="#top" aria-label="Hradecké oční sanatorium — domů">
          <span className="hos-mark__glyph" aria-hidden="true">
            <svg viewBox="0 0 48 48" width="38" height="38" role="img">
              <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="24" cy="24" r="8.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="24" cy="24" r="2.4" fill="currentColor" />
            </svg>
          </span>
          <span className="hos-mark__type">
            <span className="hos-mark__name">Hradecké oční sanatorium</span>
            <span className="hos-mark__sub">Oftalmologie · Hradec Králové</span>
          </span>
        </a>
        <nav className="hos-menu" aria-label="Hlavní">
          <a href="#zakroky">Zákroky</a>
          <a href="#tym">Náš tým</a>
          <a className="hos-menu__cta" href="tel:+420721869700">Objednat se</a>
        </nav>
      </header>

      <section className="hos-hero" id="top">
        <div className="hos-hero__media">
          <img src="/hero.webp" alt="Vyšetření na štěrbinové lampě v Hradeckém očním sanatoriu" width={1280} height={960} />
        </div>
        <div className="hos-hero__panel">
          <p className="hos-eyebrow">Prim. MUDr. Daniel Horecký · spol. s r.o.</p>
          <h1 className="hos-hero__title">
            Ať zase vidíte<br />
            <span className="hos-hero__title--em">ostře do dálky</span>
          </h1>
          <p className="hos-hero__lead">
            Laserové i nitrooční operace, léčba zákalů a dětská oční ambulance — v klidném prostředí sanatoria v Kuklenách. Objednáte se rychle, o zbytek se postaráme.
          </p>
          <div className="hos-hero__cta">
            <a className="hos-btn hos-btn--solid" href="tel:+420721869700">Zavolat 721&nbsp;869&nbsp;700</a>
            <a className="hos-btn hos-btn--ghost" href="#zakroky">Prohlédnout zákroky</a>
          </div>
        </div>
        <dl className="hos-vitals" aria-label="Základní údaje">
          <div><dt>Zorné pole</dt><dd>komplexní péče na jednom místě</dd></div>
          <div><dt>Kde</dt><dd>Pražská 23, HK — Kukleny · pobočka Nymburk</dd></div>
          <div><dt>Termín</dt><dd>objednáme vás telefonicky</dd></div>
        </dl>
      </section>

      <section className="hos-work" id="zakroky" aria-labelledby="zakroky-h">
        <div className="hos-sec-head">
          <p className="hos-eyebrow">U jakých zákroků se můžeme vidět</p>
          <h2 id="zakroky-h" className="hos-h2">Šest oborů, jedno pracoviště</h2>
        </div>
        <ol className="hos-cards">
          {zakroky.map((z) => (
            <li key={z.c} className={"hos-card" + (z.hi ? " hos-card--hi" : "")}>
              <div className="hos-card__top">
                <span className="hos-card__num">{z.c}</span>
                <span className="hos-card__dpt">{z.dpt}</span>
              </div>
              <h3 className="hos-card__title">{z.title}</h3>
              <p className="hos-card__lead">{z.lead}</p>
              {z.note ? <span className="hos-card__note">{z.note}</span> : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="hos-team" id="tym" aria-labelledby="tym-h">
        <div className="hos-team__media">
          <img src="/section-1.webp" alt="Lékaři a sestry Hradeckého očního sanatoria" width={1120} height={840} />
        </div>
        <div className="hos-team__body">
          <p className="hos-eyebrow">Společně s vámi jsme jeden tým</p>
          <h2 id="tym-h" className="hos-h2">Zaostřeno na lidi, ne jen na dioptrie</h2>
          <p className="hos-p">
            Lékaři i sestřičky se o vás staráme rovnocenným dílem. Zajímají nás nejen výsledky vyšetření, ale i to, jak se vám doopravdy žije. Budujeme si vzájemnou důvěru a často zůstáváme součástí příběhu celé rodiny.
          </p>
          <ul className="hos-checks">
            <li>Rychlé a komfortní objednání</li>
            <li>Rodinná atmosféra sanatoria</li>
            <li>Seznámení se sympatickými lékaři</li>
          </ul>
        </div>

        <figure className="hos-quote">
          <img src="/section-2.webp" alt="Pacientka po operaci šedého zákalu" width={960} height={720} />
          <blockquote>
            <p>„Je to právě měsíc, co jsem ve vašem sanatoriu prodělal operaci katarakty. Chci vám touto cestou ještě jednou poděkovat za zkvalitnění života i za tu příjemnou atmosféru.“</p>
            <figcaption>— V. M., pacient po operaci šedého zákalu</figcaption>
          </blockquote>
        </figure>
      </section>
    </main>
  );
}
