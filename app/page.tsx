export default function Page() {
  const services = [
    {
      no: "A",
      title: "Fasádní lešení",
      body: "Montáž rámového lešení na novostavby i rekonstrukce. Kotvení, záchytné sítě, žebříkový výstup a předání s protokolem. Postavíme přesně na míru vaší fasády.",
      spec: "nosnost 200 kg/m² · výška do 24 m"
    },
    {
      no: "B",
      title: "Hliníkové pojízdné věže",
      body: "Modulová věž na kolečkách pro rychlou práci ve výškách v hale i venku. Lehká, složitelná, rozložíte ji ve dvou lidech za pár minut.",
      spec: "pracovní výška 3–12 m · pojízdná"
    },
    {
      no: "C",
      title: "Montážní plošiny",
      body: "Bezpečné pracovní plošiny pro servis a údržbu — třeba pro dopravní podnik při práci na autobusech. Stabilní podlaha, zábradlí, atest.",
      spec: "na míru provozu · revize v ceně"
    },
    {
      no: "D",
      title: "Půjčovna dílů",
      body: "Krátkodobý i dlouhodobý pronájem rámů, podlážek, žebříků a stabilizátorů. Vyzvednete si v Nemanicích nebo dovezeme na stavbu.",
      spec: "denní i týdenní sazby"
    }
  ];

  return (
    <main className="hn">
      <header className="hn-top">
        <a className="hn-mark" href="#" aria-label="Hanet — lešenářství České Budějovice">
          <span className="hn-mark-name">HANET</span>
          <span className="hn-mark-sub">lešení · plošiny · výšky</span>
        </a>
        <nav className="hn-nav" aria-label="Hlavní">
          <a href="#sluzby">Co stavíme</a>
          <a href="#firma">O firmě</a>
          <a className="hn-phone" href="tel:+420387220406">387 220 406</a>
        </nav>
      </header>

      <section className="hn-hero" id="hero">
        <div className="hn-hero-frame">
          <img
            className="hn-hero-img"
            src="/hero.webp"
            alt="Postavené lešení na fasádě budovy v Českých Budějovicích"
            width={1600}
            height={1100}
          />
          <div className="hn-hero-tag">České Budějovice · od 2010</div>
        </div>
        <div className="hn-hero-text">
          <p className="hn-eyebrow">Lešenářství &amp; práce ve výškách</p>
          <h1 className="hn-h1">
            Postavíme vám<br />
            <span className="hn-h1-accent">pevnou zem</span><br />
            tam, kde žádná není.
          </h1>
          <p className="hn-lead">
            Fasádní lešení, hliníkové věže a montážní plošiny pro stavby,
            haly a servis v Českobudějovicku. Přijedeme, zaměříme, postavíme —
            a vy máte bezpečně odkud pracovat.
          </p>
          <div className="hn-cta-row">
            <a className="hn-btn" href="tel:+420387220406">Zavolat a domluvit stavbu</a>
            <a className="hn-btn-ghost" href="#sluzby">Prohlédnout, co děláme</a>
          </div>
          <ul className="hn-metrics">
            <li><b>24 m</b><span>max. výška fasádního lešení</span></li>
            <li><b>2–3 dny</b><span>obvyklá doba od poptávky ke stavbě</span></li>
            <li><b>Nemanice</b><span>vlastní sklad a půjčovna</span></li>
          </ul>
        </div>
      </section>

      <section className="hn-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="hn-sec-head">
          <p className="hn-eyebrow">Nabídka</p>
          <h2 id="sluzby-h" className="hn-h2">Čtyři způsoby, jak vás dostat nahoru</h2>
          <p className="hn-sec-note">
            Ke každé zakázce přijde technik, zaměří stavbu a navrhne řešení.
            Nemontujeme „něco podobného ze skladu" — stavíme na to, co
            u vás skutečně stojí.
          </p>
        </div>
        <ol className="hn-grid">
          {services.map((s) => (
            <li className="hn-card" key={s.no}>
              <span className="hn-card-no" aria-hidden="true">{s.no}</span>
              <h3 className="hn-card-title">{s.title}</h3>
              <p className="hn-card-body">{s.body}</p>
              <p className="hn-card-spec">{s.spec}</p>
            </li>
          ))}
        </ol>
        <figure className="hn-fig">
          <img
            src="/section-1.webp"
            alt="Detail hliníkových rámů a podlážek lešení připravených k montáži"
            width={1400}
            height={900}
          />
          <figcaption>Hliníkové rámy a podlážky z naší půjčovny — lehké, ale drží dospělého i s nářadím a materiálem.</figcaption>
        </figure>
      </section>

      <section className="hn-trust" id="firma" aria-labelledby="firma-h">
        <div className="hn-trust-media">
          <img
            src="/section-2.webp"
            alt="Montážní plošina pro servis autobusů dopravního podniku"
            width={1200}
            height={1000}
          />
        </div>
        <div className="hn-trust-text">
          <p className="hn-eyebrow">O firmě Hanet</p>
          <h2 id="firma-h" className="hn-h2">Rodinná firma, která ví, že chyba ve výšce nebolí jen na papíře</h2>
          <p className="hn-para">
            Lešení a vybavení pro práci ve výškách děláme z Nemanic
            u Českých Budějovic už od roku 2010. Za tu dobu jsme
            postavili lešení na desítkách fasád a dodali montážní
            plošiny tam, kde na bezpečnost není prostor pro slevu.
          </p>
          <ul className="hn-ref">
            <li>
              <span className="hn-ref-when">2024</span>
              <span className="hn-ref-what">Montážní plošiny pro Dopravní podnik města České Budějovice — bezpečný servis autobusů ve výšce.</span>
            </li>
            <li>
              <span className="hn-ref-when">Stále</span>
              <span className="hn-ref-what">Půjčovna rámů, žebříků a stabilizátorů pro řemeslníky i firmy z celého kraje.</span>
            </li>
          </ul>
          <div className="hn-visit">
            <div>
              <p className="hn-visit-label">Kde nás najdete</p>
              <p className="hn-visit-val">Pražská tř. 1680, Nemanice<br />370 21 České Budějovice</p>
            </div>
            <div>
              <p className="hn-visit-label">Otevřeno</p>
              <p className="hn-visit-val">Po–Čt 8:00–17:00<br />Pá 8:00–16:00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
