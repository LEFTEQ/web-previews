import type { ReactNode } from "react";

type Product = { tag: string; name: string; body: string };
type Value = { label: string; body: string };

const products: Product[] = [
  {
    tag: "Chlazení i přitápění",
    name: "Klimatizace",
    body: "Tiché nástěnné a kazetové jednotky Daikin pro byty, kanceláře i provozovny. V létě chladí, v přechodném období příjemně přitopí.",
  },
  {
    tag: "Vzduch–voda i vzduch–vzduch",
    name: "Tepelná čerpadla",
    body: "Úsporné vytápění, které srazí účty za energie a odpojí vás od plynu. Návrh výkonu ušijeme přesně na váš dům.",
  },
  {
    tag: "Filtrace a alergeny",
    name: "Čističky vzduchu",
    body: "Zachytí prach, pyl i alergeny — čerstvý vzduch bez otevřených oken. Ocení je alergici i rodiny s malými dětmi.",
  },
  {
    tag: "Záruka i po ní",
    name: "Servis",
    body: "Uvedení do provozu, pravidelné čištění, revize a opravy. Poruchu řešíme rychle a férově, ať jednotku znáte nebo ne.",
  },
];

const values: Value[] = [
  { label: "Profesionalita", body: "V oboru jsme přes 20 let. Sledujeme nové technologie a pořád se školíme." },
  { label: "Výzvy", body: "Bereme i zakázky, které jiní pro náročnost odmítnou. Řešení najdeme." },
  { label: "Detaily", body: "Lpíme na provedení — technicky i esteticky. Trubky vedou tam, kam mají." },
  { label: "Radost", body: "Jsme otevření a komunikativní. Chceme, aby vám doma bylo prostě dobře." },
];

function Louver(): ReactNode {
  return (
    <div className="louver" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => (
        <span className="slat" key={i} />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="wrap topbar-wrap">
          <a className="wordmark" href="#top" aria-label="BADGER — klimatizace Praha">
            BADGER<span className="wordmark-mark">°</span>
          </a>
          <nav className="nav" aria-label="Hlavní">
            <a href="#produkty">Produkty</a>
            <a href="#produkty">Servis</a>
            <a href="#showroom">Showroom</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-wrap">
          <p className="status"><span className="dot" aria-hidden="true" />Léto 2025 — rezervujte instalaci včas</p>
          <p className="eyebrow"><i aria-hidden="true" />Klimatizace · Tepelná čerpadla · Praha</p>

          <div className="stage">
            <h1 className="hero-title">
              Záleží nám na&nbsp;tom,<br />co&nbsp;dýcháte.
            </h1>
            <Louver />
          </div>

          <p className="lead">
            Postaráme se, aby u vás doma i na pracovišti byl vždy čistý, čerstvý vzduch a příjemná
            teplota. Navrhneme, nainstalujeme a udržíme klimatizace i tepelná čerpadla — od první
            konzultace až po pravidelný servis.
          </p>

          <div className="actions">
            <a className="btn btn-primary" href="#produkty">Prohlédnout produkty</a>
            <a className="btn btn-ghost" href="#showroom">Navštívit showroom</a>
          </div>
        </div>
      </section>

      <div className="band" role="presentation" aria-hidden="true" />

      <section className="section services" id="produkty">
        <svg className="draft" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">
          <path className="draft-path" pathLength={1} d="M-20,26 C280,26 340,150 620,140 S1000,30 1220,74" />
        </svg>
        <div className="wrap">
          <p className="eyebrow eyebrow-dark"><i aria-hidden="true" />Co nabízíme</p>
          <h2 className="section-title">Kompletní péče o&nbsp;vzduch — od&nbsp;návrhu po&nbsp;servis</h2>
          <p className="section-lead">
            Klimatizace a tepelná čerpadla Daikin spojují špičkovou techniku s promyšleným designem.
            My k nim přidáme odborné poradenství, čistou instalaci a servis, na který se spolehnete.
          </p>

          <ul className="grid products">
            {products.map((p) => (
              <li className="card" key={p.name}>
                <span className="fins" aria-hidden="true" />
                <p className="card-tag">{p.tag}</p>
                <h3 className="card-title">{p.name}</h3>
                <p className="card-body">{p.body}</p>
              </li>
            ))}
          </ul>

          <p className="partner">
            <strong>Certifikovaný Daikin Home Comfort Expert Partner.</strong> Instalaci provádějí
            proškolení technici a na značkovou techniku se vztahují prodloužené záruky.
          </p>
        </div>
      </section>

      <div className="band" role="presentation" aria-hidden="true" />

      <section className="section trust" id="showroom">
        <div className="wrap">
          <p className="eyebrow"><i aria-hidden="true" />Proč BADGER</p>
          <h2 className="section-title section-title-light">
            Přes 20&nbsp;let stavíme na&nbsp;řemesle, ne&nbsp;na&nbsp;kompromisech
          </h2>

          <ul className="grid values">
            {values.map((v) => (
              <li className="value" key={v.label}>
                <h3 className="value-label">{v.label}</h3>
                <p className="value-body">{v.body}</p>
              </li>
            ))}
          </ul>

          <div className="showroom">
            <div className="showroom-head">
              <h3 className="showroom-title">Showroom Praha</h3>
              <p className="showroom-sub">Zastavte se na konzultaci a odborné poradenství. Techniku si osaháte na živo.</p>
            </div>
            <dl className="showroom-info">
              <div>
                <dt>Otevírací doba</dt>
                <dd>ÚT–PÁ 12:00–16:00<br />ÚT–PÁ 16:00–18:00 pro objednané klienty<br />SO po domluvě</dd>
              </div>
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Ukázková 123, Praha</dd>
              </div>
              <div>
                <dt>Spojení</dt>
                <dd><a href="tel:+420777111222">+420 777 111 222</a><br /><a href="mailto:info@example.cz">info@example.cz</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
