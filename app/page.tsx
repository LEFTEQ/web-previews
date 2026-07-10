import type { CSSProperties } from "react";

export default function Page() {
  const disciplines = [
    {
      no: "01",
      title: "Značky, které si lidé pamatují",
      lead: "Logo, barevnost, typografie a pravidla, jak to všechno používat.",
      body: "Postavíme značku od nuly nebo oživíme tu, co má odslouženo. Dostanete manuál, ne jen obrázek.",
    },
    {
      no: "02",
      title: "Kampaně, co něco přinesou",
      lead: "Nápad, který drží od plakátu po Instagram.",
      body: "Komplexně nebo jen kus, který vám zrovna chybí. Řešení v balíčku i na míru.",
    },
    {
      no: "03",
      title: "Grafika na papír i na obrazovku",
      lead: "Tiskoviny, sazba, netradiční zadání.",
      body: "V grafice jsme doma. Čím divnější brief, tím lepší. Výzvy nás baví.",
    },
    {
      no: "04",
      title: "Weby, které fungují",
      lead: "Od návrhu po hotovou realizaci.",
      body: "Mikrostránka i velká prezentace. WordPress? Klidně. Hlavně ať to slouží vám i vašim zákazníkům.",
    },
    {
      no: "05",
      title: "Eventy od A do Z",
      lead: "Obchodní, vzdělávací, zábavné i adrenalinové.",
      body: "Akce malé i velké, pro malé i velké. Přípravou eventů se fakt bavíme.",
    },
    {
      no: "06",
      title: "Video, animace, ilustrace",
      lead: "Co se nehýbe, jako by dnes nebylo.",
      body: "Scénář vysněné prezentace vymyslíme společně. Originální ilustrace vždycky předčí fotobanku.",
    },
    {
      no: "07",
      title: "Fotografie do reklamy i na web",
      lead: "Produkt, portrét, reportáž.",
      body: "Produkty ve studiu, momentky z vaší firmy, portréty do sekce tým.",
    },
    {
      no: "08",
      title: "Produkce a speciality",
      lead: "Zajistíme vše, co potřebujete.",
      body: "Přesně tak, aby to vám i vašim zákazníkům perfektně sloužilo.",
    },
  ];

  return (
    <main className="ano">
      <header className="ano-top">
        <a className="ano-mark" href="#" aria-label="AŇO AGENCY — domů">
          <span className="ano-mark-a">AŇO</span>
          <span className="ano-mark-sub">agency</span>
        </a>
        <nav className="ano-nav" aria-label="Hlavní navigace">
          <a href="#co-umime">Co umíme</a>
          <a href="#o-nas">O nás</a>
          <a className="ano-nav-call" href="tel:+420541000000">Zavolat</a>
        </nav>
      </header>

      <section className="ano-hero">
        <div className="ano-hero-copy">
          <p className="ano-eyebrow">Reklamní agentura &amp; grafické studio · Brno · od 1997</p>
          <h1 className="ano-h1">
            Budování značek
            <br />
            <span className="ano-h1-accent">je naše radost.</span>
          </h1>
          <p className="ano-hero-lead">
            Jsme brněnské studio, které tvoří značky, kampaně, weby i eventy.
            Už přes pětadvacet let. S vámi a pro vás.
          </p>
          <div className="ano-hero-cta">
            <a className="ano-btn" href="tel:+420541000000">Zavolat do studia</a>
            <a className="ano-btn ano-btn-ghost" href="#co-umime">Chci vidět víc</a>
          </div>
        </div>
        <figure className="ano-hero-media">
          <img
            src="/hero.webp"
            alt="Práce brněnského grafického studia AŇO AGENCY — návrhy značek a vizuálů na monitorech"
            width={1200}
            height={900}
            loading="eager"
          />
        </figure>
      </section>

      <section className="ano-services" id="co-umime" aria-labelledby="co-umime-h">
        <div className="ano-section-head">
          <span className="ano-index">Osm věcí, v kterých jsme doma</span>
          <h2 id="co-umime-h" className="ano-h2">Co umíme</h2>
        </div>
        <ol className="ano-grid">
          {disciplines.map((d) => (
            <li className="ano-card" key={d.no}>
              <span className="ano-card-no" aria-hidden="true">{d.no}</span>
              <h3 className="ano-card-title">{d.title}</h3>
              <p className="ano-card-lead">{d.lead}</p>
              <p className="ano-card-body">{d.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ano-about" id="o-nas" aria-labelledby="o-nas-h">
        <figure className="ano-about-media">
          <img
            src="/section-1.webp"
            alt="Tým AŇO AGENCY při práci ve studiu v Brně"
            width={1000}
            height={800}
            loading="lazy"
          />
          <img
            className="ano-about-media-2"
            src="/section-2.webp"
            alt="Ukázka grafické a reklamní tvorby studia AŇO AGENCY"
            width={1000}
            height={800}
            loading="lazy"
          />
        </figure>
        <div className="ano-about-copy">
          <span className="ano-index">O nás</span>
          <h2 id="o-nas-h" className="ano-h2">
            V grafice jsme opravdu silní.
          </h2>
          <p className="ano-about-lead">
            Tvoříme od roku 1997. Za tu dobu jsme značkám postavili loga,
            rozjeli kampaně, natočili videa i připravili eventy, na které se
            vzpomíná. Netradiční zadání bereme jako výzvu — originál vždycky
            porazí věci z fotobanky.
          </p>
          <dl className="ano-facts">
            <div>
              <dt>Od roku</dt>
              <dd>1997</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Bezručova 17a, Brno 602 00</dd>
            </div>
            <div>
              <dt>Co řešíme</dt>
              <dd>Značky · kampaně · web · event · foto · video</dd>
            </div>
          </dl>
          <p className="ano-about-contact">
            Máte zadání? <a href="tel:+420541000000">Zavolejte</a> nebo{" "}
            <a href="mailto:ahoj@anoagency.cz">napište e-mail</a> — ozveme se.
          </p>
        </div>
      </section>
    </main>
  );
}
