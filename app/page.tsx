export default function Page() {
  const kontejnery = [
    { velikost: "3 m³", pouziti: "Drobný odpad, tráva, kůra — vejde se i do úzké ulice" },
    { velikost: "5 m³", pouziti: "Suť z koupelny, zemina z výkopu, odpad z vyklízení" },
    { velikost: "9 m³", pouziti: "Rekonstrukce bytu nebo domu, objemný stavební odpad" },
    { velikost: "12 m³", pouziti: "Demolice, velké stavby, hromadný odvoz materiálu" },
  ];

  const sluzby = [
    {
      nazev: "Kontejnerová doprava",
      popis:
        "Přistavíme kontejner 3–12 m³, vy naložíte, my odvezeme. Vozidla Mitsubishi, Avia a Atego s nosností do 5 tun projedou i tam, kam se velká souprava nedostane.",
      stitek: "do 5 t",
    },
    {
      nazev: "Prodej a dovoz materiálu",
      popis:
        "Písek, kamenivo, recyklát, zemina i kůra — prodáme a dovezeme až na vaši stavbu nebo zahradu. Sypké materiály naložíme vlastními nakladači, bez čekání na cizí techniku.",
      stitek: "vlastní nakladače",
    },
    {
      nazev: "Přeprava mechanizace",
      popis:
        "Převezeme menší stavební stroje do 5 tun — bagr, válec, nakladač. Na palety máme MAN s vlekem: dohromady 32 palet na jednu jízdu.",
      stitek: "32 palet",
    },
    {
      nazev: "Čištění a zimní údržba",
      popis:
        "Čistíme komunikace a zpevněné plochy. V zimě uklízíme a odvážíme sníh z parkovišť, areálů i ulic — v Hradci Králové a okolí.",
      stitek: "celoročně",
    },
  ];

  return (
    <main className="als">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand" aria-label="A.L. Služby">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-a">A</span>
              <span className="brand-dot">•</span>
              <span className="brand-l">L</span>
            </span>
            <span className="brand-text">Služby s.r.o. — Hradec Králové</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Kontejner na suť</span>
            <span className="hero-line hero-line-2">
              <span className="hero-strong">do 24 hodin</span>
            </span>
            <span className="hero-line hero-line-3">u vás na stavbě.</span>
          </h1>

          <p className="hero-sub">
            Kontejnerová doprava 3–12 m³, odvoz suti a odpadu, dovoz písku a
            kameniva. Zhruba sto vlastních kontejnerů — vždycky máme volný i pro vás.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420495000000">
              Zavolat a objednat kontejner
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co všechno vozíme
            </a>
          </div>

          <dl className="hero-facts">
            <div className="fact">
              <dt>Kontejnerů</dt>
              <dd>~100 ks</dd>
            </div>
            <div className="fact">
              <dt>Objemy</dt>
              <dd>3–12 m³</dd>
            </div>
            <div className="fact">
              <dt>Nosnost</dt>
              <dd>do 5 tun</dd>
            </div>
          </dl>
        </div>

        {/* Signature: silueta kontejneru z čar — abstraktní bok vany s hákem */}
        <div className="hero-container-art" aria-hidden="true">
          <svg viewBox="0 0 640 360" className="container-svg" role="presentation">
            {/* vana kontejneru */}
            <path
              className="art-stroke art-body"
              d="M60 110 L120 310 L560 310 L620 110"
              fill="none"
            />
            {/* žebra vany */}
            <path className="art-stroke art-rib" d="M160 110 L205 310" fill="none" />
            <path className="art-stroke art-rib" d="M280 110 L305 310" fill="none" />
            <path className="art-stroke art-rib" d="M400 110 L405 310" fill="none" />
            <path className="art-stroke art-rib" d="M520 110 L505 310" fill="none" />
            {/* horní hrana */}
            <path className="art-stroke art-edge" d="M40 110 L640 110" fill="none" />
            {/* hák natahováku */}
            <path
              className="art-stroke art-hook"
              d="M60 110 C 40 60, 80 30, 120 44"
              fill="none"
            />
          </svg>
        </div>
      </header>

      {/* ===== SEKCE: SLUŽBY ===== */}
      <section className="sekce sekce-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-inner">
          <p className="eyebrow">Odvoz · dovoz · přistavení</p>
          <h2 id="sluzby-h" className="sekce-title">
            Čtyři věci, které pro vás uděláme
          </h2>

          <div className="sluzby-grid">
            {sluzby.map((s) => (
              <article className="karta" key={s.nazev}>
                <div className="karta-head">
                  <h3 className="karta-title">{s.nazev}</h3>
                  <span className="karta-tag">{s.stitek}</span>
                </div>
                <p className="karta-text">{s.popis}</p>
              </article>
            ))}
          </div>

          <div className="kontejnery" aria-labelledby="kontejnery-h">
            <h3 id="kontejnery-h" className="kontejnery-title">
              Jak velký kontejner potřebujete?
            </h3>
            <ul className="kontejnery-list">
              {kontejnery.map((k) => (
                <li className="kontejner-item" key={k.velikost}>
                  <span className="kontejner-vel">{k.velikost}</span>
                  <span className="kontejner-pouziti">{k.pouziti}</span>
                </li>
              ))}
            </ul>
            <p className="kontejnery-note">
              Nevíte, který zvolit? Řekněte nám do telefonu, co bouráte nebo
              vyklízíte — poradíme a přistavíme ten správný.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEKCE: TECHNIKA A DŮVĚRA ===== */}
      <section className="sekce sekce-technika" aria-labelledby="technika-h">
        <div className="sekce-inner">
          <p className="eyebrow eyebrow-light">Vlastní technika, vlastní lidé</p>
          <h2 id="technika-h" className="sekce-title sekce-title-light">
            Vozíme vlastními auty.{" "}
            <span className="title-accent">Proto držíme termíny.</span>
          </h2>

          <div className="technika-grid">
            <div className="technika-blok">
              <h3 className="technika-h3">Vozový park</h3>
              <ul className="technika-list">
                <li>
                  <strong>Mitsubishi, Avia, Atego</strong> — kontejnerové nosiče
                  pro vany 3–12 m³, nosnost do 5 tun
                </li>
                <li>
                  <strong>MAN 8168 s vlekem</strong> — 16 + 16 palet na jednu
                  jízdu, celkem do 6 tun nákladu
                </li>
                <li>
                  <strong>Vlastní nakladače</strong> — sypké materiály naložíme
                  sami, nečekáte na cizí stroj
                </li>
              </ul>
            </div>

            <div className="technika-blok">
              <h3 className="technika-h3">Proč to funguje</h3>
              <ul className="technika-list technika-list-check">
                <li>Kolem stovky vlastních kontejnerů — volný máme prakticky vždy</li>
                <li>Domluvíte se přímo s dispečerem, ne s call centrem</li>
                <li>Jsme z Hradce Králové — na stavbě jsme obvykle do hodiny</li>
                <li>Suť, zemina, tráva, kůra i sníh — víme, kam co legálně patří</li>
              </ul>
            </div>
          </div>

          <blockquote className="reference">
            <p>
              „Volal jsem v pondělí ráno kvůli suti z bourání příčky. V poledne
              stál kontejner před domem, ve středu byl pryč. Přesně takhle si to
              představuju.“
            </p>
            <footer className="reference-autor">
              — rekonstrukce bytu, Hradec Králové — Slezské Předměstí
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
