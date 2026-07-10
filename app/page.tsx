import type { CSSProperties } from "react";

export default function Page() {
  const specialisti = [
    {
      kod: "Int",
      obor: "Interní medicína",
      popis:
        "Nemocné psy a kočky vyšetříme kompletně — krev, moč, ultrazvuk, srdce. Hledáme příčinu, ne jen příznak.",
    },
    {
      kod: "Chi",
      obor: "Chirurgie & ortopedie",
      popis:
        "Od kastrace po složité operace kloubů a zlomenin. Zákrok vždy vysvětlíme dopředu, ať víte, co čekat.",
    },
    {
      kod: "Kar",
      obor: "Kardiologie",
      popis:
        "Srdeční šelest u vašeho mazlíčka rozklíčujeme na echu a nastavíme léčbu na míru.",
    },
    {
      kod: "Sav",
      obor: "Králíci & malí savci",
      popis:
        "Králíci, morčata, potkani a další drobní savci mají u nás lékaře, kteří se jim věnují cíleně.",
    },
    {
      kod: "Vak",
      obor: "Vakcinace & prevence",
      popis:
        "Očkování sestavíme individuálně. Prohlídka před výstavou i cestou do zahraničí je samozřejmostí.",
    },
    {
      kod: "Sto",
      obor: "Stomatologie",
      popis:
        "Zubní kámen, bolavá dutina ústní, extrakce — o chrup psů i koček se postaráme v narkóze pod kontrolou.",
    },
  ];

  const lekari = [
    {
      jmeno: "MVDr. Petr Holda",
      role: "zakladatel kliniky · ortopedie",
      rok: "od 1997",
      text: "Kliniku v Horních Měcholupech založil rok po promoci na VFU Brno. Věnuje se ortopedickým operacím.",
    },
    {
      jmeno: "MVDr. Zdeněk Valeš",
      role: "spolumajitel · chirurgie, kardiologie",
      rok: "od 1998",
      text: "Člen ČAVLMZ a mezinárodní asociace veterinářů malých savců AEMV.",
    },
    {
      jmeno: "MVDr. Renata Mertová",
      role: "medicína malých savců",
      rok: "od 2015",
      text: "Chirurgie a terapie králíků, morčat a potkanů — obor, který u nás roste nejrychleji.",
    },
    {
      jmeno: "MVDr. Hana Strádalová",
      role: "interní medicína psů a koček",
      rok: "od 2007",
      text: "Interní vyšetření a dlouhodobá péče o chronické pacienty.",
    },
    {
      jmeno: "MVDr. Inna Kononová",
      role: "interní medicína · stomatologie",
      rok: "",
      text: "Spojuje interní diagnostiku s péčí o chrup.",
    },
    {
      jmeno: "MVDr. Iva Šizlingová",
      role: "veterinární lékařka",
      rok: "",
      text: "Základní vyšetření i akutní ošetření pacientů mezi objednanými.",
    },
  ];

  const hodiny = [
    { den: "Pondělí – Pátek", cas: "8:00 – 21:00", zvyraznit: true },
    { den: "Sobota – Neděle", cas: "10:00 – 16:00", zvyraznit: false },
    { den: "Svátky", cas: "10:00 – 16:00", zvyraznit: false },
  ];

  return (
    <main className="hv">
      <header className="hv-nav">
        <a href="#uvod" className="hv-mark" aria-label="H-VET veterinární klinika">
          <span className="hv-mark-h">H</span>
          <span className="hv-mark-dot" aria-hidden="true" />
          <span className="hv-mark-vet">VET</span>
        </a>
        <nav className="hv-links" aria-label="Hlavní">
          <a href="#obory">Odbornosti</a>
          <a href="#tym">Náš tým</a>
          <a href="#hodiny">Ordinační hodiny</a>
        </nav>
        <a href="tel:+420271961092" className="hv-nav-call">271 961 092</a>
      </header>

      <section className="hv-hero" id="uvod">
        <div className="hv-hero-media">
          <img
            src="/hero.webp"
            alt="Veterinární lékař H-VET při ošetření malého zvířete v ordinaci"
            className="hv-hero-img"
          />
          <div className="hv-hero-tag" aria-hidden="true">Horní Měcholupy · Praha 15</div>
        </div>
        <div className="hv-hero-copy">
          <p className="hv-eyebrow">Veterinární klinika pro malá zvířata · od roku 1997</p>
          <h1 className="hv-title">
            Členům vaší rodiny
            <br />
            <span className="hv-title-em">rozumíme, i když mlčí.</span>
          </h1>
          <p className="hv-lead">
            Psi, kočky, králíci i morčata. Léčíme je od interny přes chirurgii
            až po srdce a chrup — na jednom místě v Horních Měcholupech, s tým­em,
            který zná svého pacienta jménem.
          </p>
          <div className="hv-hero-actions">
            <a href="tel:+420271961092" className="hv-btn">
              Objednat na termín
            </a>
            <a href="#hodiny" className="hv-btn-ghost">
              Kdy máme otevřeno
            </a>
          </div>
          <p className="hv-hero-note">
            Akutní případ? Přijďte i bez objednání — ošetříme vás mezi objednanými pacienty.
          </p>
        </div>
      </section>

      <section className="hv-section" id="obory">
        <div className="hv-section-head">
          <p className="hv-eyebrow">Co u nás pořešíte</p>
          <h2 className="hv-h2">Šest oborů pod jednou střechou</h2>
          <p className="hv-section-sub">
            Každý náš lékař zvládne základní vyšetření. Když je nemoc složitější,
            předá pacienta kolegovi, který se právě na to specializuje.
          </p>
        </div>
        <div className="hv-grid">
          {specialisti.map((s) => (
            <article className="hv-card" key={s.kod}>
              <span className="hv-card-kod" aria-hidden="true">{s.kod}</span>
              <h3 className="hv-card-title">{s.obor}</h3>
              <p className="hv-card-text">{s.popis}</p>
            </article>
          ))}
        </div>
        <figure className="hv-figure">
          <img
            src="/section-1.webp"
            alt="Ošetřovna kliniky H-VET s vyšetřovacím stolem a přístroji"
            className="hv-figure-img"
          />
          <figcaption>
            Kompletní klinické vyšetření, ultrazvuk i drobná chirurgie probíhají
            přímo u nás — nemusíte pacienta vozit jinam.
          </figcaption>
        </figure>
      </section>

      <section className="hv-trust" id="tym">
        <div className="hv-trust-inner">
          <div className="hv-trust-head">
            <p className="hv-eyebrow hv-eyebrow-light">Lidé, kterým svěříte mazlíčka</p>
            <h2 className="hv-h2">Tým, který kliniku buduje od roku 1997</h2>
            <p className="hv-section-sub">
              Většina našich lékařů promovala na VFU Brno a pravidelně jezdí na
              odborné semináře. Znalosti nosíme zpátky k vašim zvířatům.
            </p>
          </div>

          <div className="hv-lekari">
            {lekari.map((l) => (
              <article className="hv-lekar" key={l.jmeno}>
                <div className="hv-lekar-top">
                  <h3 className="hv-lekar-jmeno">{l.jmeno}</h3>
                  {l.rok && <span className="hv-lekar-rok">{l.rok}</span>}
                </div>
                <p className="hv-lekar-role">{l.role}</p>
                <p className="hv-lekar-text">{l.text}</p>
              </article>
            ))}
          </div>

          <div className="hv-trust-bottom">
            <figure className="hv-trust-figure">
              <img
                src="/section-2.webp"
                alt="Recepce a čekárna veterinární kliniky H-VET"
                className="hv-trust-img"
              />
            </figure>
            <div className="hv-info" id="hodiny">
              <h3 className="hv-info-title">Ordinační hodiny</h3>
              <ul className="hv-hodiny">
                {hodiny.map((h) => (
                  <li
                    key={h.den}
                    className={h.zvyraznit ? "hv-hodina hv-hodina-on" : "hv-hodina"}
                  >
                    <span className="hv-hodina-den">{h.den}</span>
                    <span className="hv-hodina-cas">{h.cas}</span>
                  </li>
                ))}
              </ul>
              <p className="hv-info-note">
                Doporučujeme se objednat osobně nebo telefonicky — ušetříte čas
                v čekárně a my se vám budeme moct plně věnovat.
              </p>
              <div className="hv-info-contact">
                <a href="tel:+420271961092" className="hv-contact-line">
                  <span className="hv-contact-l">Telefon</span>
                  271 961 092
                </a>
                <a href="tel:+420739423671" className="hv-contact-line">
                  <span className="hv-contact-l">Mobil</span>
                  739 423 671
                </a>
                <a href="mailto:klinika@hvet.cz" className="hv-contact-line">
                  <span className="hv-contact-l">E-mail</span>
                  klinika@hvet.cz
                </a>
                <p className="hv-contact-line hv-contact-adr">
                  <span className="hv-contact-l">Kde nás najdete</span>
                  Lochotínská 699, Horní Měcholupy, Praha 15 · parkoviště pro klienty
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
