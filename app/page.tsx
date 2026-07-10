import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Přezutí a uskladnění",
      desc: "Sezónní přezutí na počkání a hotel na pneumatiky. Vaše letní i zimní sady čekají u nás v regálu, popsané a nahuštěné — vy jen přijedete přezout.",
      tag: "Osobní · dodávky",
    },
    {
      no: "02",
      title: "Vyvážení a geometrie",
      desc: "Odstraníme házivost a nevyvážené kolo, které vám hází volantem na dálnici. Kontrola geometrie náprav, aby pneumatiky nesjížděly do jedné hrany.",
      tag: "Osy · nápravy",
    },
    {
      no: "03",
      title: "Oprava defektu a TPMS",
      desc: "Zalepení průpichu, přezutí poškozené gumy, výměna a párování ventilků s čidlem tlaku. Vytáhneme vám hřebík dřív, než dojedete domů na ráfek.",
      tag: "Defekty · ventilky",
    },
    {
      no: "04",
      title: "Nákladní a zemědělské",
      desc: "Velké gumy pro dodávky, náklaďáky, traktory a zemní stroje. Máme na to zvedáky i sílu — servis, který malé pneuservisy odmítají.",
      tag: "Truck · agro",
    },
  ];

  const trust = [
    { num: "33", unit: "let", label: "v oboru pneumatik — od roku 1991" },
    { num: "7", unit: "prodejen", label: "servisní síť po celé ČR" },
    { num: "2", unit: "pobočky", label: "přímo v Ústí — Žižkova a Havířská" },
  ];

  return (
    <main className="pg">
      <header className="top">
        <a className="brand" href="#" aria-label="Storex FST — pneuservis Ústí nad Labem">
          <span className="brand-mark" aria-hidden="true">
            <span className="tread" />
            <span className="tread" />
            <span className="tread" />
          </span>
          <span className="brand-word">
            Storex<span className="brand-fst">FST</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a className="nav-call" href="tel:+420475600000">Zavolat pro termín</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-img-wrap">
          <img
            className="hero-img"
            src="/hero.webp"
            alt="Pneuservis Storex FST v Ústí nad Labem — přezutí a montáž pneumatik"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Pneuservis &amp; autoservis · Ústí nad Labem</p>
          <h1 className="hero-h1">
            Přezujeme,
            <br />
            vyvážíme,
            <span className="hero-em"> hlídáme tlak.</span>
          </h1>
          <p className="hero-lede">
            Od roku 1991 přezouváme Ústečanům auta na počkání — a vaše druhé sady
            gum bezpečně uskladníme, než přijde další sezóna. Žádné čekání týden na
            termín.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420475600000">
              Zavolat pro termín
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co všechno umíme
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Kde</dt>
              <dd>Žižkova 864/73, Ústí n. L.</dd>
            </div>
            <div>
              <dt>Kdy</dt>
              <dd>Po–Pá 7:30–17:00</dd>
            </div>
            <div>
              <dt>Sezóna</dt>
              <dd>Přezutí bez objednání</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sluzby" id="sluzby">
        <div className="sec-head">
          <p className="eyebrow eyebrow-dark">Čtyři věci, pro které k nám jezdíte</p>
          <h2 className="sec-h2">Servis, který dostane vaše kola zpátky na silnici</h2>
        </div>

        <ol className="cards">
          {services.map((s) => (
            <li className="card" key={s.no}>
              <span className="card-no" aria-hidden="true">
                {s.no}
              </span>
              <div className="card-body">
                <h3 className="card-title">{s.title}</h3>
                <p className="card-desc">{s.desc}</p>
                <span className="card-tag">{s.tag}</span>
              </div>
            </li>
          ))}
        </ol>

        <figure className="sec-figure">
          <img
            src="/section-1.webp"
            alt="Mechanik montuje pneumatiku na ráfek v dílně Storex FST"
            className="sec-figure-img"
          />
          <figcaption>
            Montážní stroj, vyvažovačka, hotel na pneumatiky — vše pod jednou
            střechou na Žižkově.
          </figcaption>
        </figure>
      </section>

      <section className="onas" id="o-nas">
        <div className="onas-grid">
          <div className="onas-media">
            <img
              src="/section-2.webp"
              alt="Regály s uskladněnými sadami pneumatik v pneuhotelu Storex FST"
              className="onas-img"
            />
          </div>
          <div className="onas-text">
            <p className="eyebrow eyebrow-dark">O nás</p>
            <h2 className="sec-h2">
              Tři dekády v jednom oboru — a pořád nás baví guma
            </h2>
            <p className="onas-p">
              Storex FST není řetězec, který přezouvá mimochodem. Pneumatiky jsou
              naše jediné řemeslo od roku 1991. Zvládneme osobák i traktor,
              obsloužíme firemní flotily v operativním leasingu a poradíme, kdy
              už dezén nedává smysl dojíždět.
            </p>
            <ul className="onas-list">
              {trust.map((t) => (
                <li key={t.label}>
                  <span className="onas-num">
                    {t.num}
                    <span className="onas-unit">{t.unit}</span>
                  </span>
                  <span className="onas-label">{t.label}</span>
                </li>
              ))}
            </ul>
            <p className="onas-note">
              Jezdí k nám i firmy: všechna naše prodejní místa jsou autorizována
              pro obsluhu vozidel v operativním leasingu. Domluvíme se na
              fakturaci i pravidelném servisu celé flotily.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// keep type import from being flagged as unused in strict setups
export const dynamic = "force-static";
void (0 as unknown as CSSProperties);
