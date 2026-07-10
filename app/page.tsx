import type { CSSProperties } from "react";

export default function Page() {
  const specs = [
    { code: "DIN 933", label: "Šrouby se šestihrannou hlavou", grade: "A2 / A4" },
    { code: "DIN 934", label: "Matice šestihranné", grade: "A2 / A4" },
    { code: "DIN 912", label: "Šrouby s válcovou hlavou, vnitřní šestihran", grade: "A2 / A4" },
    { code: "DIN 125A", label: "Podložky ploché", grade: "A2" },
    { code: "DIN 3055", label: "Lana, konstrukce 7×7", grade: "1.4401" },
    { code: "DIN 766", label: "Řetězy nerezové, krátký článek", grade: "A4" },
  ];

  const sortiment = [
    {
      n: "01",
      title: "Spojovací materiál",
      body: "Šrouby, matice, podložky, vruty, kolíky, nýty a závitové tyče. Všechno v nerezu A2 a A4, dohledatelné podle normy DIN i podle katalogového čísla.",
      items: ["Šrouby DIN 931 / 933 / 912", "Matice DIN 934 / 982", "Vruty AN 9050 / 9047 TX", "Lana, řetězy, panty, jachtařské doplňky"],
    },
    {
      n: "02",
      title: "Hutní materiál",
      body: "Nerezové plechy, trubky, profily, tyče, kolena a příruby. Materiál 1.4301 a 1.4401 — mořený, žíhaný, kartáčovaný nebo tažený za studena.",
      items: ["Plechy 1.4301 (IIIC, matný povrch)", "Trubky čtvercové kartáčované", "Kolena svařovaná 90°, R 1.5 D", "Tyče kruhové tažené za studena H9"],
    },
    {
      n: "03",
      title: "Zámečnická výroba",
      body: "Sériová i zakázková výroba z nerezové oceli. Zábradlí a schodiště na míru — od zaměření po montáž na Ostravsku.",
      items: ["Nerezová zábradlí", "Schodiště na zakázku", "Konstrukce pro fotovoltaiku", "Atypické svařence"],
    },
  ];

  return (
    <main className="ak">
      <header className="ak-top">
        <a className="ak-brand" href="#" aria-label="AKROS — nerezový materiál Ostrava">
          <span className="ak-brand-mark" aria-hidden="true">
            <span className="ak-hex" />
          </span>
          <span className="ak-brand-word">AKROS</span>
          <span className="ak-brand-grade">A2·A4</span>
        </a>
        <nav className="ak-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#vyroba">Výroba</a>
          <a href="#duvera">O nás</a>
        </nav>
      </header>

      <section className="ak-hero">
        <div className="ak-hero-copy">
          <p className="ak-eyebrow">Nerezový spojovací a hutní materiál · Ostrava</p>
          <h1 className="ak-h1">
            Šroub s <span className="ak-hl">normou</span>, ne bez ní.
          </h1>
          <p className="ak-lead">
            Ve skladu AKROS má každý kus svoji značku oceli. Vybíráte podle DIN, podle
            katalogového čísla nebo podle materiálu — a víme přesně, co posíláme.
          </p>
          <div className="ak-hero-cta">
            <a className="ak-btn ak-btn-primary" href="#sortiment">Prohlédnout sortiment</a>
            <a className="ak-btn ak-btn-ghost" href="tel:+420737591849">Zavolat 737 591 849</a>
          </div>
          <dl className="ak-stats">
            <div>
              <dt>Materiál</dt>
              <dd>1.4301 · 1.4401</dd>
            </div>
            <div>
              <dt>Třída nerezu</dt>
              <dd>A2 · A4</dd>
            </div>
            <div>
              <dt>Skladem</dt>
              <dd>12 897 692 ks</dd>
            </div>
          </dl>
        </div>
        <figure className="ak-hero-fig">
          <img src="/hero.webp" alt="Nerezové spojovací díly AKROS — šrouby, matice a podložky ve třídě A2 a A4" loading="eager" width={880} height={1000} />
          <figcaption className="ak-tag">
            <span>DIN 933</span>
            <span>1.4301</span>
          </figcaption>
        </figure>
      </section>

      <section className="ak-marquee" aria-hidden="true">
        <div className="ak-marquee-row">
          {["DIN 933", "DIN 934", "DIN 912", "DIN 125A", "DIN 965", "DIN 7991", "DIN 9021", "DIN 766", "1.4301", "1.4401", "A2", "A4"].map((t, i) => (
            <span key={i} className="ak-chip">{t}</span>
          ))}
        </div>
      </section>

      <section id="sortiment" className="ak-section">
        <div className="ak-section-head">
          <p className="ak-eyebrow">Co u nás najdete</p>
          <h2 className="ak-h2">Tři police, jedno město</h2>
          <p className="ak-section-lead">
            Nerezový spojovací materiál, hutní materiál a vlastní zámečnická výroba —
            všechno pod jednou střechou v Ostravě.
          </p>
        </div>
        <div className="ak-cards">
          {sortiment.map((s) => (
            <article key={s.n} className="ak-card" id={s.n === "03" ? "vyroba" : undefined}>
              <span className="ak-card-n" aria-hidden="true">{s.n}</span>
              <h3 className="ak-card-title">{s.title}</h3>
              <p className="ak-card-body">{s.body}</p>
              <ul className="ak-card-list">
                {s.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="duvera" className="ak-trust">
        <figure className="ak-trust-fig">
          <img src="/section-1.webp" alt="Skladové regály AKROS s nerezovým hutním materiálem — plechy, trubky a tyče" loading="lazy" width={900} height={720} />
        </figure>
        <div className="ak-trust-copy">
          <p className="ak-eyebrow">Proč AKROS</p>
          <h2 className="ak-h2">Specialisté na nerez, ne obchod se vším</h2>
          <p className="ak-trust-lead">
            Držíme jeden z nejširších sortimentů nerezových spojovacích a hutních
            materiálů na českém trhu. Když se ptáte na materiál 1.4301 nebo na kolena
            svařovaná 90°, mluvíte s lidmi, kteří je denně prodávají.
          </p>
          <ul className="ak-trust-points">
            <li>
              <strong>Materiál dohledatelný podle normy.</strong> U každé položky vidíte DIN
              i třídu oceli, ať nic nekupujete naslepo.
            </li>
            <li>
              <strong>Výroba na míru.</strong> Zábradlí a schodiště z nerezu vyrobíme a
              namontujeme — sériově i kusově.
            </li>
            <li>
              <strong>Partnerský program.</strong> Pro dílny, montážní firmy a
              velkoodběratele ceny a podmínky navíc.
            </li>
          </ul>
        </div>
      </section>

      <section className="ak-specs" aria-label="Vybrané normy skladem">
        <div className="ak-specs-head">
          <h2 className="ak-h2">Vybrané normy skladem</h2>
          <p className="ak-section-lead">Nejžádanější položky — od šroubu po řetěz, vždy s materiálovou třídou.</p>
        </div>
        <ul className="ak-spec-grid">
          {specs.map((s, i) => (
            <li key={i} className="ak-spec" style={{ "--i": i } as CSSProperties}>
              <span className="ak-spec-code">{s.code}</span>
              <span className="ak-spec-label">{s.label}</span>
              <span className="ak-spec-grade">{s.grade}</span>
            </li>
          ))}
        </ul>
        <figure className="ak-specs-fig">
          <img src="/section-2.webp" alt="Detail nerezových šroubů a matic AKROS s viditelným závitem" loading="lazy" width={1200} height={600} />
        </figure>
      </section>
    </main>
  );
}
