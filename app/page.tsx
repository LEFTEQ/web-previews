import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      title: "Armovna — ohýbání výztuže",
      body:
        "Ohýbáme kari sítě a betonářskou výztuž do průměru 32 mm. Dodáme a naohýbáme výztuž přesně pro vaši stavební konstrukci — základy, věnce, sloupy, stropy.",
      spec: "do ⌀ 32 mm",
    },
    {
      code: "02",
      title: "Betonářská ocel v tyčích",
      body:
        "Roxory i hladká ocel v tyčích, skladem k okamžitému odběru. Prodáváme firmám i drobným odběratelům — čím víc odeberete, tím lepší cena.",
      spec: "10 mm skladem",
    },
    {
      code: "03",
      title: "Vlákna a drátky do betonu",
      body:
        "Rozptýlená výztuž do betonu, nejlevněji v ČR (původ EU). Nahradí nebo doplní klasickou síť u podlah a desek. Balení 20 kg, celá paleta 1000 kg.",
      spec: "od 23,90 Kč/kg bez DPH",
    },
    {
      code: "04",
      title: "Kari sítě",
      body:
        "Svařované sítě do betonových desek a podlah. Standardní rozměry skladem, dělení a ohyb podle výkresu vyřídíme na provozovně.",
      spec: "6/15/2×3 m",
    },
  ];

  const proof = [
    { big: "⌀ 32", label: "mm — nejsilnější výztuž, kterou naohýbáme" },
    { big: "5 %", label: "základní sleva na e‑shopu, po registraci 7 %" },
    { big: "Po–Pá", label: "7:00–15:45 na dvoře v Pardubicích" },
  ];

  return (
    <main className="mz">
      <header className="mz-nav">
        <a className="mz-mark" href="#" aria-label="MZ Hutní materiály, úvod">
          <span className="mz-mark__mz">MZ</span>
          <span className="mz-mark__word">Hutní materiály</span>
        </a>
        <nav className="mz-menu" aria-label="Hlavní">
          <a href="#armovna">Armovna</a>
          <a href="#sortiment">Sortiment</a>
          <a href="#dvur">Provozovna</a>
        </nav>
        <a className="mz-call" href="tel:+420777932932">
          <span className="mz-call__label">Poradíme s výztuží</span>
          <span className="mz-call__num">777 932 932</span>
        </a>
      </header>

      <section className="mz-hero" id="armovna">
        <div className="mz-hero__grid">
          <div className="mz-hero__copy">
            <p className="mz-eyebrow">Armovna · Pardubice · od roku 2016</p>
            <h1 className="mz-h1">
              Naohneme vám <span className="mz-h1__hl">výztuž</span> přesně
              podle výkresu.
            </h1>
            <p className="mz-lead">
              Betonářskou ocel a kari sítě dodáme, nadělíme a naohýbáme do
              průměru 32&nbsp;mm. Přivezte výkres, odvezte hotovou armaturu
              pro základy, věnce i stropy.
            </p>
            <div className="mz-hero__cta">
              <a className="mz-btn" href="tel:+420777932932">Zavolat na armovnu</a>
              <a className="mz-btn mz-btn--ghost" href="#sortiment">
                Prohlédnout sortiment
              </a>
            </div>
            <dl className="mz-ticker">
              <div><dt>Roxory</dt><dd>10–32 mm</dd></div>
              <div><dt>Kari sítě</dt><dd>skladem</dd></div>
              <div><dt>Drátky do betonu</dt><dd>od 23,90 Kč/kg</dd></div>
            </dl>
          </div>
          <figure className="mz-hero__fig">
            <img
              src="/hero.webp"
              alt="Naohýbaná betonářská výztuž a kari sítě připravené k odběru na dvoře v Pardubicích"
              className="mz-hero__img"
              width={880}
              height={1040}
            />
            <figcaption className="mz-hero__cap">Betonářská výztuž ⌀ 10–32 mm</figcaption>
          </figure>
        </div>
      </section>

      <section className="mz-sort" id="sortiment">
        <div className="mz-sect-head">
          <p className="mz-eyebrow mz-eyebrow--dark">Co u nás naložíte na beton</p>
          <h2 className="mz-h2">
            Všechno pro železobeton — od tyče po hotovou armaturu
          </h2>
        </div>
        <ol className="mz-cards">
          {services.map((s) => (
            <li className="mz-card" key={s.code}>
              <span className="mz-card__code" aria-hidden="true">{s.code}</span>
              <h3 className="mz-card__title">{s.title}</h3>
              <p className="mz-card__body">{s.body}</p>
              <p className="mz-card__spec">{s.spec}</p>
            </li>
          ))}
        </ol>
        <figure className="mz-sort__fig">
          <img
            src="/section-1.webp"
            alt="Kari sítě a betonářská ocel uskladněné na provozovně MZ Hutní materiály"
            className="mz-sort__img"
            width={1200}
            height={720}
          />
        </figure>
      </section>

      <section className="mz-dvur" id="dvur">
        <div className="mz-dvur__grid">
          <figure className="mz-dvur__fig">
            <img
              src="/section-2.webp"
              alt="Dělení a úprava hutního materiálu na provozovně v Pardubicích"
              className="mz-dvur__img"
              width={960}
              height={1080}
            />
          </figure>
          <div className="mz-dvur__copy">
            <p className="mz-eyebrow">Přijeďte na dvůr</p>
            <h2 className="mz-h2 mz-h2--light">
              Materiál nakoupíte, nadělíme ho a naložíte za jednu zastávku.
            </h2>
            <p className="mz-dvur__lead">
              Jsme prodejce hutního materiálu v Pardubicích — maloobchod
              i velkoobchod. K prodávanému i k donesenému materiálu nabízíme
              úpravu střihem, řezem nebo pálením, ohýbání výztuže a drobné
              zámečnické práce. Objednejte předem a počkejte na zprávu, že je
              zakázka připravená k odběru.
            </p>
            <ul className="mz-proof">
              {proof.map((p) => (
                <li key={p.label}>
                  <span className="mz-proof__big">{p.big}</span>
                  <span className="mz-proof__label">{p.label}</span>
                </li>
              ))}
            </ul>
            <p className="mz-note">
              Firmy s IČ získají po ověření registrace vyšší slevu, která platí
              i při nákupu přímo na prodejně. Na větší zakázky nastavíme
              individuální ceny.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

// (odstraněno: dekorativní pozadí navíc — Chanel's rule)
const _unused: CSSProperties = {};
void _unused;
