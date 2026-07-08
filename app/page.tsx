import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      code: "Fal",
      name: "Falcovaná plechová střecha",
      desc: "Stojatá drážka z pozinku, hliníku nebo mědi. Spoje ohýbáme na míru přímo na střeše, aby drážka seděla i na atypickém sklonu a nikde nezatékalo.",
    },
    {
      code: "Žla",
      name: "Žlaby, svody a oplechování",
      desc: "Podokapní i zaatikové žlaby, svody, kotlíky, oplechování komínů, atik a parapetů. Přesně tvarované klempířské prvky, které drží vodu tam, kam patří.",
    },
    {
      code: "Opr",
      name: "Generální oprava střechy",
      desc: "Prohlídka, výměna prohnilého bednění, nový plech i klempířské prvky. Jeden tým od demontáže staré krytiny po poslední přítužku – bez subdodavatelů.",
    },
    {
      code: "Sní",
      name: "Zachytávače sněhu a lávky",
      desc: "Sněhové háky a mříže, komínové lávky a stupadla. Aby v Jizerkách sníh nesjel na chodník a komín byl bezpečně přístupný pro revizi.",
    },
  ];

  const reference = [
    {
      misto: "Liberec – Kristiánov",
      typ: "Měděná falcovaná střecha, secesní vila",
      rok: "2023",
    },
    {
      misto: "Jablonec nad Nisou",
      typ: "Výměna žlabů a svodů, bytový dům",
      rok: "2022",
    },
    {
      misto: "Frýdlant",
      typ: "Oplechování věže a atik, památkově chráněný objekt",
      rok: "2022",
    },
  ];

  return (
    <main className="kz-main">
      <header className="kz-topbar">
        <a className="kz-wordmark" href="#" aria-label="Kleiz – klempířství Liberec, domů">
          <span className="kz-wordmark-fold" aria-hidden="true" />
          <span className="kz-wordmark-text">
            KLEIZ<span className="kz-wordmark-dot">.</span>
          </span>
          <span className="kz-wordmark-sub">klempířství · Liberec</span>
        </a>
        <nav className="kz-nav" aria-label="Hlavní">
          <a href="#sluzby">Řemeslo</a>
          <a href="#reference">Reference</a>
          <a className="kz-nav-cta" href="tel:+420725000000">Zavolat</a>
        </nav>
      </header>

      <section className="kz-hero" aria-labelledby="kz-hero-title">
        <div className="kz-hero-media">
          <img
            src="/hero.webp"
            alt="Falcovaná plechová střecha se stojatou drážkou, práce klempířství Kleiz v Liberci"
            className="kz-hero-img"
            width={1600}
            height={1100}
          />
          <div className="kz-hero-seam" aria-hidden="true">
            <span /><span /><span /><span /><span /><span /><span />
          </div>
        </div>

        <div className="kz-hero-body">
          <p className="kz-eyebrow">Klempířství pod Ještědem · od demontáže po poslední drážku</p>
          <h1 id="kz-hero-title" className="kz-hero-title">
            Střecha se pozná<br />
            <em>na drážce.</em>
          </h1>
          <p className="kz-hero-lead">
            Falcované plechové střechy, žlaby a oplechování pro Liberec a Jizerské
            hory. Plech ohýbáme ručně přímo na stavbě, aby spoj seděl i tam, kde
            standardní díl nesedne. Žádné zatékání „za rok, za dva“.
          </p>
          <div className="kz-hero-actions">
            <a className="kz-btn kz-btn-primary" href="tel:+420725000000">
              Zavolat klempíři
            </a>
            <a className="kz-btn kz-btn-ghost" href="#sluzby">
              Co spravíme
            </a>
          </div>
          <dl className="kz-hero-facts">
            <div>
              <dt>Materiál</dt>
              <dd>pozink · hliník · měď · titanzinek</dd>
            </div>
            <div>
              <dt>Kde pracujeme</dt>
              <dd>Liberec, Jablonec, Frýdlant</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="sluzby" className="kz-sec kz-sluzby" aria-labelledby="kz-sluzby-title">
        <div className="kz-sec-head">
          <p className="kz-eyebrow">Řemeslo</p>
          <h2 id="kz-sluzby-title" className="kz-sec-title">
            Čtyři věci, které na střeše rozhodují
          </h2>
          <p className="kz-sec-intro">
            Klempířina není o velkých plochách, ale o detailu na okraji – na
            drážce, u komína, v úžlabí. Tady se dělá rozdíl mezi střechou na deset
            a na padesát let.
          </p>
        </div>

        <div className="kz-media-strip">
          <img
            src="/section-1.webp"
            alt="Detail klempířské práce – ohýbaný plech a stojatá drážka na střeše"
            width={1400}
            height={900}
          />
        </div>

        <ol className="kz-list">
          {sluzby.map((s, i) => (
            <li key={s.code} className="kz-item">
              <span className="kz-item-code" aria-hidden="true">
                {s.code}
              </span>
              <span className="kz-item-num">0{i + 1}</span>
              <div className="kz-item-body">
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="reference" className="kz-sec kz-oNas" aria-labelledby="kz-oNas-title">
        <div className="kz-oNas-grid">
          <div className="kz-oNas-media">
            <img
              src="/section-2.webp"
              alt="Dokončená plechová střecha od klempířství Kleiz v Libereckém kraji"
              width={1200}
              height={1400}
            />
          </div>
          <div className="kz-oNas-body">
            <p className="kz-eyebrow">Kdo to dělá</p>
            <h2 id="kz-oNas-title" className="kz-sec-title">
              Malá parta klempířů, co střechu dodělá&nbsp;do&nbsp;konce
            </h2>
            <p>
              Kleiz je liberecké klempířství, které se generálním opravám střech
              věnuje přes patnáct let. Na stavbu chodí ti samí lidé od prvního
              měření po předání – žádné předávání zakázky mezi firmami, žádné
              „to dělal někdo jiný“.
            </p>
            <p>
              Pracujeme v horském počasí Jizerek, takže víme, co udělá mráz,
              taání sněhu i vítr s krytinou i se spoji. Podle toho volíme materiál
              i způsob kotvení.
            </p>

            <ul className="kz-ref" aria-label="Vybrané realizace">
              {reference.map((r) => (
                <li key={r.misto}>
                  <span className="kz-ref-rok">{r.rok}</span>
                  <span className="kz-ref-misto">{r.misto}</span>
                  <span className="kz-ref-typ">{r.typ}</span>
                </li>
              ))}
            </ul>

            <a className="kz-btn kz-btn-primary kz-oNas-cta" href="tel:+420725000000">
              Domluvit prohlídku střechy
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
