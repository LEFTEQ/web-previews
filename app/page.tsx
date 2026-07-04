import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "1D",
      axis: "Diagnostika",
      title: "Kineziologický rozbor",
      body: "Nejdřív se podíváme, jak se hýbete jako celek — stoj, chůze, dech, souhra kloubů. Až pak řešíme, kde vás to bolí. Bez rozboru jen hasíme příznaky.",
    },
    {
      code: "2D",
      axis: "Terapie rukama",
      title: "Manuální techniky a měkké tkáně",
      body: "Mobilizace kloubů, práce s jizvou, uvolnění přetížených svalů a fascií. Cílíme na příčinu blokády, ne na místo, které zrovna křičí.",
    },
    {
      code: "3D",
      axis: "Pohyb v prostoru",
      title: "Aktivní cvičení a stabilizace",
      body: "Naučíme vaše tělo držet se samo — hluboký stabilizační systém, kontrola pohybu v každé rovině. Cviky, které si odnesete domů a zvládnete je sami.",
    },
    {
      code: "4D",
      axis: "V čase",
      title: "Prevence a návrat k zátěži",
      body: "Čtvrtý rozměr je čas: postupné zatěžování, kontroly, návrat ke sportu i k práci bez recidivy. Cílem je, abyste nás přestali potřebovat.",
    },
  ];

  return (
    <main className="fd-main">
      <header className="fd-nav">
        <a className="fd-wordmark" href="#top" aria-label="4D Fyzioterapie, úvod">
          <span className="fd-mark-num">4D</span>
          <span className="fd-mark-word">Fyzioterapie</span>
          <span className="fd-mark-city">Brno</span>
        </a>
        <a className="fd-nav-call" href="tel:+420734221448">
          <span className="fd-nav-call-dot" aria-hidden="true" />
          Objednat se
        </a>
      </header>

      <section className="fd-hero" id="top">
        <div className="fd-hero-copy">
          <p className="fd-eyebrow">Fyzioterapie ve čtyřech rozměrech · Brno</p>
          <h1 className="fd-hero-title">
            Pohyb má tři&nbsp;osy.<br />
            <span className="fd-hero-accent">My s ním pracujeme ve&nbsp;čtyřech.</span>
          </h1>
          <p className="fd-hero-lede">
            Bolí vás záda, koleno nebo rameno? Neřešíme jen bod, který bolí. Sledujeme, jak se
            hýbete v prostoru i v čase — a vracíme tělo do rovnováhy, která vydrží.
          </p>
          <div className="fd-hero-actions">
            <a className="fd-btn fd-btn-solid" href="tel:+420734221448">
              Zavolat 734&nbsp;221&nbsp;448
            </a>
            <a className="fd-btn fd-btn-ghost" href="mailto:objednavky@4dfyzio.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="fd-hero-facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Veveří, Brno-střed</dd>
            </div>
            <div>
              <dt>Objednání</dt>
              <dd>Bez doporučení od lékaře</dd>
            </div>
            <div>
              <dt>Jedno sezení</dt>
              <dd>50 minut jen pro vás</dd>
            </div>
          </dl>
        </div>
        <figure className="fd-hero-figure">
          <img
            className="fd-hero-img"
            src="/hero.webp"
            alt="Fyzioterapeut vede pacienta při stabilizačním cvičení"
          />
          <figcaption className="fd-hero-axes" aria-hidden="true">
            <span>x · předozadní</span>
            <span>y · stranová</span>
            <span>z · svislá</span>
            <span className="fd-axis-t">t · v čase</span>
          </figcaption>
        </figure>
      </section>

      <section className="fd-services" aria-labelledby="sluzby-nadpis">
        <div className="fd-section-head">
          <p className="fd-eyebrow">Jak spolu postupujeme</p>
          <h2 id="sluzby-nadpis" className="fd-section-title">
            Čtyři rozměry jedné terapie
          </h2>
          <p className="fd-section-note">
            Odtud má „4D“ svoje jméno. Každý rozměr je jeden krok cesty — od prvního rozboru až
            po chvíli, kdy nás přestanete potřebovat.
          </p>
        </div>
        <ol className="fd-service-list">
          {services.map((s, i) => (
            <li
              className="fd-service"
              key={s.code}
              style={{ "--fd-delay": `${i * 90}ms` } as CSSProperties}
            >
              <span className="fd-service-code" aria-hidden="true">
                {s.code}
              </span>
              <div className="fd-service-body">
                <p className="fd-service-axis">{s.axis}</p>
                <h3 className="fd-service-title">{s.title}</h3>
                <p className="fd-service-text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="fd-services-figure">
          <img
            className="fd-figure-img"
            src="/section-1.webp"
            alt="Detail práce fyzioterapeuta s kloubem pacienta"
          />
        </figure>
      </section>

      <section className="fd-trust" aria-labelledby="onas-nadpis">
        <figure className="fd-trust-figure">
          <img
            className="fd-figure-img"
            src="/section-2.webp"
            alt="Prosvětlená ordinace 4D Fyzioterapie v Brně"
          />
        </figure>
        <div className="fd-trust-copy">
          <p className="fd-eyebrow">Proč právě k nám</p>
          <h2 id="onas-nadpis" className="fd-section-title">
            Malá ordinace, kde máte terapeuta jen pro sebe
          </h2>
          <p className="fd-trust-lede">
            Žádná montovna, žádné cvičení po deseti u společné mašiny. U nás vás jeden
            fyzioterapeut provede celým sezením — od vyšetření po cviky, které si berete domů.
          </p>
          <ul className="fd-trust-points">
            <li>
              <strong>Přístup DNS a manuální medicíny.</strong> Vycházíme z vývojové kineziologie
              — hledáme příčinu, ne jen místo bolesti.
            </li>
            <li>
              <strong>Rozumíme sportovcům i kancelářím.</strong> Běžci, tenisté, ale i záda
              zničená od monitoru. Zátěž nastavíme podle vašeho života.
            </li>
            <li>
              <strong>Odejdete s plánem.</strong> Dostanete pár cviků na doma a víte přesně, proč
              je děláte.
            </li>
          </ul>
          <blockquote className="fd-quote">
            „Po půl roce marného přeposílání mezi ordinacemi tady konečně někdo řekl, proč mě to
            rameno bolí. Za tři návštěvy jsem se vrátil na kurt.“
            <cite>— Martin H., rekreační tenista, Brno</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
