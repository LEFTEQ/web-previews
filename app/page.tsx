import React from "react";

const services = [
  {
    phase: "Vzduch → voda",
    title: "Tepelná čerpadla vzduch/voda",
    body: "Nejčastější volba pro rodinné domy v Ostravě a okolí. Venkovní jednotka bere teplo ze vzduchu i za mrazu, vnitřní modul ohřívá topení i teplou vodu. Pomůžeme s výběrem výkonu podle vaší tepelné ztráty, ne podle katalogu.",
    meta: "Topný faktor COP až 5,1 · provoz do −25 °C"
  },
  {
    phase: "Země → voda",
    title: "Zemní čerpadla s vrtem i kolektorem",
    body: "Stabilní zdroj tepla přímo z podloží. Vyšší pořizovací náklady vrátíme nejnižší spotřebou v zimě. Postaráme se o projekt vrtu, geologii i připojení na stávající otopnou soustavu.",
    meta: "Hlubinný vrt · plošný kolektor · sezónní topný faktor SCOP 4,8"
  },
  {
    phase: "Servis",
    title: "Záruční i pozáruční servis",
    body: "Máme vlastní servisní techniky, ne subdodavatele. Kontrola chladiva, tlaku a oběhových čerpadel, výměna dílů skladem. Když čerpadlo v lednu stávkuje, dojedeme, ne jen doporučíme.",
    meta: "Servisní vůz do 24 hodin · díly skladem v Ostravě"
  }
];

const proof = [
  { n: "27", label: "let s čerpací technikou" },
  { n: "850+", label: "instalovaných čerpadel" },
  { n: "24 h", label: "do výjezdu servisu" },
  { n: "5 let", label: "záruka na kompresor" }
];

export default function Page() {
  return (
    <main className="cz">
      <header className="cz-nav">
        <a className="cz-mark" href="#" aria-label="CZ PUMPY, čerpací technika Ostrava">
          <span className="cz-mark__cz">CZ</span>
          <span className="cz-mark__pumpy">PUMPY</span>
          <span className="cz-mark__sub">čerpací technika · Ostrava</span>
        </a>
        <nav className="cz-nav__links" aria-label="Hlavní">
          <a href="#nabidka">Tepelná čerpadla</a>
          <a href="#duvera">Proč my</a>
          <a className="cz-nav__cta" href="#nabidka">Nezávazná poptávka</a>
        </nav>
      </header>

      <section className="cz-hero" aria-labelledby="hero-h">
        <div className="cz-hero__grid">
          <div className="cz-hero__copy">
            <p className="cz-eyebrow">
              <span className="cz-eyebrow__dot" aria-hidden="true" />
              Teplo z ostravského vzduchu
            </p>
            <h1 id="hero-h" className="cz-hero__title">
              Topíme<br />
              <span className="cz-hero__title--em">venkovním
                <span className="cz-hero__flow" aria-hidden="true">
                  <span /><span /><span />
                </span>
              </span><br />
              vzduchem.
            </h1>
            <p className="cz-hero__lead">
              Navrhneme, dodáme a zapojíme tepelné čerpadlo, které topí i za −25 °C.
              Vlastní technici, díly skladem v Ostravě a výpočet úspory dřív, než
              cokoli podepíšete.
            </p>
            <div className="cz-hero__actions">
              <a className="cz-btn cz-btn--solid" href="#nabidka">Chci spočítat úsporu</a>
              <a className="cz-btn cz-btn--ghost" href="tel:+420596000000">Zavolat technikovi</a>
            </div>
          </div>

          <figure className="cz-hero__media">
            <img src="/hero.webp" alt="Venkovní jednotka tepelného čerpadla vzduch/voda u rodinného domu" />
            <figcaption className="cz-hero__badge">
              <span className="cz-hero__badge-cop">COP 5,1</span>
              <span className="cz-hero__badge-lbl">z 1 kWh elektřiny udělá 5 kWh tepla</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="cz-services" id="nabidka" aria-labelledby="serv-h">
        <div className="cz-section-head">
          <h2 id="serv-h">Tři cesty k teplu</h2>
          <p>Podle domu, pozemku i rozpočtu. Poradíme, kterou zvolit — bez marketingových slibů, s čísly z vaší tepelné ztráty.</p>
        </div>
        <ol className="cz-services__list">
          {services.map((s, i) => (
            <li className="cz-card" key={s.title}>
              <div className="cz-card__idx">
                <span className="cz-card__phase">{s.phase}</span>
                <span className="cz-card__num">0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <p className="cz-card__meta">{s.meta}</p>
            </li>
          ))}
        </ol>
        <figure className="cz-services__shot">
          <img src="/section-1.webp" alt="Instalace vnitřní jednotky tepelného čerpadla a rozvodů topení" />
        </figure>
      </section>

      <section className="cz-trust" id="duvera" aria-labelledby="trust-h">
        <div className="cz-trust__grid">
          <figure className="cz-trust__media">
            <img src="/section-2.webp" alt="Technik CZ PUMPY při servisu tepelného čerpadla" />
          </figure>
          <div className="cz-trust__copy">
            <p className="cz-eyebrow"><span className="cz-eyebrow__dot" aria-hidden="true" />Kdo vám to zapojí</p>
            <h2 id="trust-h">Čerpadla montujeme od roku 1998. Ta na topení taky.</h2>
            <p>
              CZ PUMPY nezačaly u tepelných čerpadel — začaly u ponorných, kalových
              a domácích vodáren. To řemeslo kolem vody, tlaku a oběhových čerpadel
              přenášíme do každé instalace topení. Víme, co drží roky a co je jen
              hezký prospekt.
            </p>
            <dl className="cz-stats">
              {proof.map((p) => (
                <div className="cz-stats__item" key={p.label}>
                  <dt>{p.n}</dt>
                  <dd>{p.label}</dd>
                </div>
              ))}
            </dl>
            <p className="cz-trust__note">
              Sídlíme v Ostravě, servisní vůz vyjíždí po celém Moravskoslezském kraji.
              Napište na <a href="mailto:objednavky@czpumpy.cz">objednavky@czpumpy.cz</a> a
              domluvíme prohlídku.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
