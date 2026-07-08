import React from 'react';

export default function Page() {
  const menu = [
    {
      no: '01',
      title: 'Svíčková na smetaně',
      side: '6 houskových knedlíků, brusinky',
      weight: '520 g',
      tag: 'Klasika',
    },
    {
      no: '02',
      title: 'Pečené kuřecí stehno',
      side: 'bramborová kaše, okurkový salát',
      weight: '480 g',
      tag: 'Oblíbené',
    },
    {
      no: '03',
      title: 'Vepřo knedlo zelo',
      side: '8 knedlíků, dušené červené zelí',
      weight: '560 g',
      tag: 'Poctivá porce',
    },
    {
      no: '04',
      title: 'Losos na másle',
      side: 'grilovaná zelenina, citron',
      weight: '450 g',
      tag: 'Bez lepku',
    },
  ];

  const promises = [
    {
      k: 'Vážíme, nešidíme',
      v: 'Jedna porce má 450 až 600 gramů. Osm knedlíků je osm knedlíků — porce, po které se člověk nají.',
    },
    {
      k: 'Vaříme dnes, jíte dnes',
      v: 'Čerstvě uvařené a šokově zchlazené jídlo v jednoporcovém obalu. Do mikrovlnky, dvě minuty, hotovo.',
    },
    {
      k: 'Zapůjčíme techniku',
      v: 'Mikrovlnné trouby i chladicí zařízení k vám dovezeme a zapojíme zdarma. Vy se staráte jen o výběr z lístku.',
    },
    {
      k: 'Vzorek na zkoušku',
      v: 'Než se rozhodnete, přivezeme ochutnávku zdarma. Ať víte, jak od nás chutná, ještě než objednáte.',
    },
  ];

  const regions = [
    'Ústí nad Labem','Děčín','Teplice','Bílina','Litvínov','Most','Chomutov',
    'Klášterec nad Ohří','Žatec','Česká Lípa','Nový Bor','Liberec','Jablonec nad Nisou',
    'Semily','Turnov','Jičín','Nová Paka','Hradec Králové','Mladá Boleslav',
    'Kralupy','Kladno','Slaný','Rakovník','Roudnice','Praha',
  ];

  return (
    <main className="g3k">
      <header className="top">
        <a className="brand" href="#" aria-label="G3K – rozvoz obědů">
          <span className="brand-mark">G3K</span>
          <span className="brand-sub">obědy z kuchyně, ne z krabice</span>
        </a>
        <a className="top-phone" href="tel:+420800130111">
          <span className="top-phone-label">Zelená linka</span>
          <span className="top-phone-num">800 130 111</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-img-wrap">
          <img
            className="hero-img"
            src="/hero.webp"
            alt="Talíř s čerstvě uvařeným obědem od G3K"
            width={1200}
            height={900}
          />
          <span className="hero-stamp">od r. 1999 · Ústí n. L.</span>
        </div>
        <div className="hero-text">
          <p className="eyebrow">Rozvoz obědů do firem · Ústecký kraj a okolí</p>
          <h1 className="hero-h1">
            Poctivý oběd<br />
            <span className="hero-accent">až na váš stůl.</span>
          </h1>
          <p className="hero-lede">
            Vaříme tradičně, z čerstvých surovin od českých dodavatelů. Jídlo
            zchladíme, dovezeme a vy ho v mikrovlnce ohřejete za dvě minuty.
            Bez stabilizátorů, bez kompromisů v porci.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420800130111">Zavolat zdarma</a>
            <a className="btn btn-ghost" href="#listek">Prohlédnout lístek</a>
          </div>
          <ul className="hero-facts">
            <li><strong>800+</strong> firemních zákazníků</li>
            <li><strong>450–600 g</strong> jedna porce</li>
            <li><strong>25</strong> měst v rozvozu</li>
          </ul>
        </div>
      </section>

      <section className="listek" id="listek" aria-labelledby="listek-h">
        <div className="sec-head">
          <p className="eyebrow">Jídelní lístek</p>
          <h2 id="listek-h" className="sec-h">Co se tento týden vaří</h2>
          <p className="sec-note">
            Česká i zahraniční kuchyně, minutky i saláty. Objednávku pošlete
            nejpozději ve čtvrtek do 12:00 na následující týden.
          </p>
        </div>

        <ol className="dishes">
          {menu.map((d) => (
            <li className="dish" key={d.no}>
              <span className="dish-no">{d.no}</span>
              <div className="dish-body">
                <div className="dish-top">
                  <h3 className="dish-title">{d.title}</h3>
                  <span className="dish-tag">{d.tag}</span>
                </div>
                <p className="dish-side">{d.side}</p>
              </div>
              <span className="dish-weight">{d.weight}</span>
            </li>
          ))}
        </ol>

        <div className="listek-foot">
          <img
            className="listek-img"
            src="/section-1.webp"
            alt="Jednoporcové obaly připravené k rozvozu"
            width={900}
            height={600}
          />
          <div className="listek-foot-text">
            <h3>Jedna cena, žádné hvězdičky</h3>
            <p>
              Všechna hlavní jídla za jednotnou výhodnou cenu. Balíme do
              jednoporcových tácků vhodných do mikrovlnky — snadno otevřete,
              rychle ohřejete, nic nepřeléváte.
            </p>
            <a className="btn btn-primary" href="tel:+420800130111">Objednat oběd</a>
          </div>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-grid">
          <div className="trust-lead">
            <p className="eyebrow">Rodinná firma od roku 1999</p>
            <h2 id="trust-h" className="sec-h">
              Proč nám firmy svěří oběd každý den
            </h2>
            <p className="trust-p">
              Jsme rodinná kuchyně z Ústí nad Labem. Přes dvacet let vozíme
              obědy do firem a institucí a rok od roku se nás víc — dnes
              staráme o víc než osm set stálých zákazníků. Vaříme podle
              systému HACCP, ale hlavně tak, jak má české jídlo chutnat.
            </p>
            <img
              className="trust-img"
              src="/section-2.webp"
              alt="Kuchyně G3K při přípravě obědů"
              width={900}
              height={600}
            />
          </div>

          <ul className="promises">
            {promises.map((p, i) => (
              <li className="promise" key={i}>
                <h3 className="promise-k">{p.k}</h3>
                <p className="promise-v">{p.v}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="map">
          <div className="map-head">
            <h3 className="map-h">Kam vozíme</h3>
            <p className="map-note">Ústecký, Liberecký, Královéhradecký a Středočeský kraj</p>
          </div>
          <ul className="map-list">
            {regions.map((r) => (
              <li className="map-item" key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
