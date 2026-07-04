import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "E-SHOP",
      title: "Fulfillment pro e-shopy",
      body: "Příjem zboží od dodavatelů, uskladnění, evidence přes čárové a QR kódy, pick & pack a expedice objednávek. Vy prodáváte, my balíme a odesíláme.",
    },
    {
      code: "SKLAD",
      title: "Skladování a kompletace",
      body: "20 000 m² skladové plochy ve třech krajích. Třídění, kompletace a balení sedm dní v týdnu, celý rok, v mnoha variantách.",
    },
    {
      code: "CESTA",
      title: "Silniční doprava po ČR i Evropě",
      body: "Vlastní flotila nákladních vozidel převeze každé požadované množství — v čase, v teplotě i v kvalitě, kterou zásilka potřebuje.",
    },
    {
      code: "CLO",
      title: "Celní služby a poradenství",
      body: "Komplexní celní odbavení včetně poradenství. Náš tým vyřídí i nadstandardní požadavky, aby zásilka nikde nečekala zbytečně.",
    },
  ];

  const hubs = [
    { city: "Ústí nad Labem", note: "Areál RTR, U Cukrovaru 6, Krásné Březno", home: true },
    { city: "Ústí — město", note: "VGP Park, Hala B, Tovární 3676/26", home: true },
    { city: "Praha", note: "P3 Park, Hala IV, Horní Počernice", home: false },
    { city: "Olomouc", note: "VGP Park, Hala I, Slavonín", home: false },
  ];

  const facts = [
    { k: "od 1991", v: "vozíme zásilky bez jediného vynechaného roku" },
    { k: "100+ lidí", v: "řidičů, skladníků a dispečerů v jednom týmu" },
    { k: "20 000 m²", v: "skladové plochy připravené pod jednou střechou" },
    { k: "4 haly", v: "v Ústí, Praze a Olomouci — vždy blízko trase" },
  ];

  return (
    <main className="rtr">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="RTR — transport a logistika">
          <span className="wordmark__r">R</span>
          <span className="wordmark__t">T</span>
          <span className="wordmark__r2">R</span>
          <span className="wordmark__tag">transport &amp; logistika</span>
        </a>
        <div className="topbar__desk">
          <span className="topbar__label">Obchodní oddělení</span>
          <a className="topbar__tel" href="tel:+420724327153">+420 724 327 153</a>
          <span className="topbar__hrs">PO–PÁ 8–16</span>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Nákladní vozidla RTR připravená k výjezdu v areálu v Ústí nad Labem"
            className="hero__img"
          />
          <div className="hero__grade" aria-hidden="true" />
        </div>

        <div className="hero__body">
          <p className="hero__eyebrow">
            <span className="tick" aria-hidden="true" />
            Ústí nad Labem · celá ČR i Evropa
          </p>
          <h1 id="hero-h" className="hero__h">
            Zboží vyjede od nás<br />
            <span className="hero__accent">a dorazí tam, kde ho čekají.</span>
          </h1>
          <p className="hero__lead">
            RTR veze zásilky českých e-shopů od roku 1991. Od příjmu na sklad
            přes zabalení až po předání zákazníkovi — jedna firma, jedna
            odpovědnost, žádné přehazování mezi partnery.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420724327153">Zavolat dispečink</a>
            <a className="btn btn--ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>

        <ul className="ticker" aria-label="Klíčová čísla RTR">
          {facts.map((f) => (
            <li key={f.k} className="ticker__item">
              <strong>{f.k}</strong>
              <span>{f.v}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sv-h">
        <div className="section-head">
          <p className="eyebrow">Co pro vás vezmeme na sebe</p>
          <h2 id="sv-h" className="section-h">
            Čtyři zastávky jedné zásilky
          </h2>
          <p className="section-sub">
            Zboží u nás projde celou cestou pod jednou střechou. Vyberte, kde
            zrovna potřebujete pomoct — nebo nám dejte celou trasu.
          </p>
        </div>

        <ol className="route">
          {services.map((s, i) => (
            <li className="stop" key={s.code}>
              <div className="stop__mark">
                <span className="stop__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="stop__code">{s.code}</span>
              </div>
              <div className="stop__text">
                <h3 className="stop__title">{s.title}</h3>
                <p className="stop__body">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="services__figure">
          <img
            src="/section-1.webp"
            alt="Sklad RTR s regály připraveného zboží pro e-shopy"
            className="figure__img"
          />
          <figcaption className="figure__cap">
            Sklad v Ústí nad Labem — odsud odjíždí příprava a expedice sedm dní v týdnu.
          </figcaption>
        </figure>
      </section>

      <section className="trust" id="o-nas" aria-labelledby="tr-h">
        <div className="trust__intro">
          <p className="eyebrow eyebrow--light">Proč nám firmy dávají svůj sklad</p>
          <h2 id="tr-h" className="section-h section-h--light">
            33 let na silnici, čtyři haly na mapě
          </h2>
          <p className="trust__lead">
            Nejsme dispečink, který zavolá cizímu autu. Vozíme vlastní flotilou,
            balíme ve vlastních skladech a máme certifikace pro vnitrostátní i
            mezinárodní silniční dopravu i pro logistiku a skladování.
          </p>
          <ul className="badges">
            <li className="badge">Certifikace silniční dopravy — ČR i mezinárodní</li>
            <li className="badge">Certifikace logistiky a skladování</li>
          </ul>
        </div>

        <div className="trust__grid">
          <figure className="trust__figure">
            <img
              src="/section-2.webp"
              alt="Řidič RTR nakládá zásilky do dodávky před výjezdem na trasu"
              className="figure__img"
            />
          </figure>

          <div className="hubs">
            <p className="hubs__title">Naše haly</p>
            <ul className="hubs__list">
              {hubs.map((h) => (
                <li className="hub" key={h.city + h.note}>
                  <span className={"hub__dot" + (h.home ? " hub__dot--home" : "")} aria-hidden="true" />
                  <span className="hub__city">{h.city}</span>
                  <span className="hub__note">{h.note}</span>
                </li>
              ))}
            </ul>
            <a className="hubs__cta" href="mailto:obchod@rtr.cz">Napsat na obchod@rtr.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

// keep TS happy for potential inline styles
export type _S = CSSProperties;
