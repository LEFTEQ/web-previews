import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "COP",
      title: "Vzduch–voda",
      lead: "Nejčastější volba pro rodinné domy",
      body: "Bez vrtů a zásahů do zahrady. Venkovní jednotka nasaje teplo ze vzduchu i v mrazu, vnitřní ho předá do topení a teplé vody. Instalace za jeden až dva dny.",
      meta: "topný faktor až 5,1",
    },
    {
      code: "GEO",
      title: "Země–voda",
      lead: "Nejstabilnější výkon celou zimu",
      body: "Zemní kolektor nebo hloubkový vrt drží stálou teplotu bez ohledu na počasí. Vyšší úvodní investice, ale nejnižší provozní náklady a tichý chod bez venkovní jednotky.",
      meta: "vrt 80–150 m",
    },
    {
      code: "FVE",
      title: "Spojení s fotovoltaikou",
      lead: "Čerpadlo topí z vlastní střechy",
      body: "Přebytky z panelů ohřívají vodu, místo aby putovaly do sítě za pár korun. Chytré řízení pouští čerpadlo, když svítí slunce — a topení tak jede skoro zadarmo.",
      meta: "úspora až 70 %",
    },
  ];

  const kroky = [
    { n: "01", t: "Návštěva a zaměření", d: "Přijedeme k vám, změříme tepelné ztráty domu a projdeme stávající otopnou soustavu." },
    { n: "02", t: "Návrh a cenová nabídka", d: "Dostanete konkrétní výkon, model a cenu — včetně dotace Nová zelená úsporám, kterou vyřídíme za vás." },
    { n: "03", t: "Montáž a spuštění", d: "Vlastní technici, žádní subdodavatelé. Po zapojení nastavíme regulaci a předáme vám hotové topení." },
    { n: "04", t: "Servis a dohled", d: "Roční prohlídky a vzdálený dohled nad provozem. Kdyby něco, jsme v Praze do druhého dne." },
  ];

  return (
    <main className="ace">
      <header className="ace-nav" aria-label="Hlavní">
        <a className="ace-mark" href="#top" aria-label="ACE Tepelná čerpadla, domů">
          <span className="ace-mark__ace">ACE</span>
          <span className="ace-mark__sub">tepelná čerpadla</span>
        </a>
        <nav className="ace-nav__links">
          <a href="#reseni">Řešení</a>
          <a href="#postup">Postup</a>
          <a href="#duvera">O nás</a>
        </nav>
        <a className="ace-nav__cta" href="tel:+420212345678">
          <span aria-hidden="true">☎</span> Zavolat
        </a>
      </header>

      <section className="ace-hero" id="top">
        <img className="ace-hero__img" src="/hero.webp" alt="Instalace tepelného čerpadla u rodinného domu" />
        <div className="ace-hero__scrim" aria-hidden="true" />
        <div className="ace-hero__grid">
          <p className="ace-hero__eyebrow">Praha 5 · vlastní montážní tým</p>
          <h1 className="ace-hero__title">
            Teplo, které<br />si <em>vezmete</em><br />ze vzduchu.
          </h1>
          <p className="ace-hero__lead">
            Tepelné čerpadlo za jeden plný účet za plyn ušetří. Navrhneme,
            namontujeme a vyladíme ho vám na míru — od zaměření po první zimu
            v teple.
          </p>
          <div className="ace-hero__actions">
            <a className="ace-btn ace-btn--solid" href="tel:+420212345678">Zavolat a domluvit návštěvu</a>
            <a className="ace-btn ace-btn--ghost" href="#reseni">Jaká čerpadla montujeme</a>
          </div>
        </div>
        <dl className="ace-hero__stats">
          <div>
            <dt>Sezónní topný faktor</dt>
            <dd>SCOP 4,6<span>vzduch–voda, rodinný dům</span></dd>
          </div>
          <div>
            <dt>Dotace vyřídíme</dt>
            <dd>až 180 000 Kč<span>Nová zelená úsporám</span></dd>
          </div>
          <div>
            <dt>Montáž trvá</dt>
            <dd>1–2 dny<span>bez rozkopané zahrady</span></dd>
          </div>
        </dl>
      </section>

      <section className="ace-reseni" id="reseni">
        <div className="ace-sec__head">
          <span className="ace-sec__kicker">01 — Řešení</span>
          <h2>Tři cesty k teplu.<br />Vybereme tu, co sedí vašemu domu.</h2>
        </div>
        <div className="ace-cards">
          {services.map((s) => (
            <article className="ace-card" key={s.code}>
              <span className="ace-card__code" aria-hidden="true">{s.code}</span>
              <h3 className="ace-card__title">{s.title}</h3>
              <p className="ace-card__lead">{s.lead}</p>
              <p className="ace-card__body">{s.body}</p>
              <p className="ace-card__meta">{s.meta}</p>
            </article>
          ))}
        </div>
        <figure className="ace-reseni__figure">
          <img src="/section-1.webp" alt="Venkovní jednotka tepelného čerpadla vzduch–voda u fasády domu" />
          <figcaption>Venkovní jednotka běží tiše i za mrazu. Umístíme ji tam, kde nikomu nepřekáží.</figcaption>
        </figure>
      </section>

      <section className="ace-duvera" id="duvera">
        <div className="ace-duvera__media">
          <img src="/section-2.webp" alt="Technik ACE při zapojení vnitřní jednotky tepelného čerpadla" />
        </div>
        <div className="ace-duvera__text">
          <span className="ace-sec__kicker">02 — O nás</span>
          <h2>Montujeme sami.<br />Za teplo ručíme jménem.</h2>
          <p className="ace-duvera__lead">
            Jsme parta topenářů a elektrikářů z Prahy 5. Čerpadla nejen prodáváme —
            sami je věšíme na zeď, zapojujeme a seřizujeme. Proto víme, co slíbit
            a za čím si stát.
          </p>
          <ol className="ace-steps" id="postup">
            {kroky.map((k) => (
              <li className="ace-step" key={k.n}>
                <span className="ace-step__n" aria-hidden="true">{k.n}</span>
                <div>
                  <h3>{k.t}</h3>
                  <p>{k.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="ace-contact">
            <p className="ace-contact__where">Harmonická 1384/13, 158 00 Praha 5</p>
            <p className="ace-contact__how">
              <a href="tel:+420212345678">212 345 678</a>
              <span aria-hidden="true">·</span>
              <a href="mailto:ace@ace-tc.cz">ace@ace-tc.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
