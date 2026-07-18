import { AiImage } from "./_ui";
import { CountUp } from "./motion";

const services = [
  {
    tag: "18 m³/hod · Putzmeister",
    title: "Čerpání betonu",
    body: "Pístovými čerpadly dostaneme směs z domíchávače přímo na místo — přes ploty, střechy i do sklepů. Dosah až 200 metrů.",
  },
  {
    tag: "Lité samonivelační směsi",
    title: "Anhydritové podlahy",
    body: "Nejen čerpáme, ale i sami lijeme. Poradíme s optimální skladbou podlahy a technickým řešením — nezávazně.",
  },
  {
    tag: "Laserová nivelace",
    title: "Průmyslové a lité podlahy",
    body: "Strojně hlazený beton jako finální povrch. Znivelováno laserem, zvibrováno nivelační latí, vyhlazeno rotačními hladičkami.",
  },
  {
    tag: "Bednění Peri · DOKA",
    title: "Monolitické konstrukce",
    body: "Kompletní dodávka monolitu včetně výztuže, betonu i ošetření povrchu. Systémové bednění Peri a DOKA.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="bar">
        <a className="wordmark" href="#top" aria-label="Conmix — úvod">
          <span className="wordmark__name">CONMIX</span>
          <span className="wordmark__slash" aria-hidden="true" />
          <span className="wordmark__suf">s.r.o.</span>
        </a>
        <nav className="bar__nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
        </nav>
        <a className="btn btn--amber bar__cta" href="#poptavka">Nezávazná poptávka</a>
      </header>

      <section className="hero" id="top">
        <div className="hero__inner">
          <div className="hero__text">
            <p className="eyebrow">Čerpání betonu · České Budějovice</p>
            <h1 className="hero__h1">
              Beton tam,<br />kam domíchávač<br /><span className="hero__accent">nedojede.</span>
            </h1>
            <p className="lede">
              Napojíme čerpadlo na domíchávač a vytlačíme směs přesně na místo
              vylití — do základů, na strop, přes celý pozemek. Bez koleček, bez rozlévání.
            </p>
            <div className="hero__actions">
              <a className="btn btn--amber" href="#poptavka">Nezávazná poptávka</a>
              <a className="btn btn--ghost" href="#sluzby">Co umíme</a>
            </div>
          </div>
          <div className="hero__media">
            <AiImage src="/hero.webp" alt="Výložník čerpadla betonu Conmix nad staveništěm v Českých Budějovicích" className="hero__img" />
          </div>
        </div>

        <div className="boom" role="img" aria-label="Dosah čerpání až 200 metrů, výkon 18 metrů krychlových za hodinu">
          <div className="boom__track">
            <div className="boom__fill" />
            <ul className="boom__ticks">
              <li style={{ ["--p" as string]: 0 }}><span>0</span></li>
              <li style={{ ["--p" as string]: 0.25 }}><span>50</span></li>
              <li style={{ ["--p" as string]: 0.5 }}><span>100</span></li>
              <li style={{ ["--p" as string]: 0.75 }}><span>150</span></li>
              <li style={{ ["--p" as string]: 1 }}><span>200 m</span></li>
            </ul>
          </div>
          <p className="boom__label">Skutečný dosah našeho výložníku</p>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow eyebrow--dark">Co lijeme</p>
            <h2 className="sec-h2">Čtyři věci, které umíme dělat pořádně.</h2>
          </header>
          <div className="slabs">
            {services.map((s) => (
              <article className="slab" key={s.title}>
                <p className="slab__tag">{s.tag}</p>
                <h3 className="slab__title">{s.title}</h3>
                <p className="slab__body">{s.body}</p>
                <a className="slab__more" href="#poptavka">
                  Poptat <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="onas">
        <div className="wrap trust__grid">
          <div className="trust__media">
            <AiImage src="/section-2.webp" alt="Strojně hlazená betonová podlaha realizovaná firmou Conmix" className="trust__img" />
          </div>
          <div className="trust__text">
            <p className="eyebrow">Kdo jsme</p>
            <h2 className="sec-h2 sec-h2--light">
              Čerpáme beton na jihu Čech od stavby po stavbu.
            </h2>
            <p className="lede lede--light">
              Conmix se specializuje na čerpání betonu z domíchávače přímo do místa
              vylití. Děláme průmyslové i občanské stavby, rekonstrukce, železobetony,
              monolity, piloty, pasy, základové desky, keramické stropy i vodní díla.
            </p>

            <dl className="stats" id="poptavka">
              <div className="stat">
                <dt>Dosah čerpání</dt>
                <dd className="stat__num"><CountUp to={200} /><span className="stat__unit"> m</span></dd>
              </div>
              <div className="stat">
                <dt>Výkon čerpadla</dt>
                <dd className="stat__num"><CountUp to={18} /><span className="stat__unit"> m³/hod</span></dd>
              </div>
              <div className="stat">
                <dt>Systémy bednění</dt>
                <dd className="stat__num">Peri<span className="stat__unit"> · DOKA</span></dd>
              </div>
            </dl>

            <div className="contact">
              <p className="contact__where">Kancelář: areál Mane, Okružní, České Budějovice</p>
              <p className="contact__row">
                <a className="contact__link" href="tel:+420777111222">777 111 222</a>
                <span aria-hidden="true">·</span>
                <a className="contact__link" href="mailto:info@example.cz">info@example.cz</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
