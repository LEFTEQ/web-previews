import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leháro Street — burgery z domácích bulek | bistro Brno",
  description:
    "Leháro Street je brněnské bistro na Hybešově. Šťavnaté burgery v domácích bulkách, lokální suroviny a streetfood pro masožrouty i vegetariány. Polední menu, jídelní lístek i objednávka přes Wolt.",
  openGraph: {
    title: "Leháro Street — burgery z domácích bulek | bistro Brno",
    description:
      "Brněnské bistro na Hybešově. Domácí bulky, lokální suroviny a burgery, do kterých se dva zamilovali dřív než do bistra.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", alt: "Burger z bistra Leháro Street" }],
  },
};

const menu = [
  {
    id: "01",
    name: "Leháro klasik",
    desc: "Hovězí z lokálního bsource, čedar, karamelizovaná cibule, domácí burgerová omáčka, salát, rajče — v domácí bulce.",
    price: "189",
    tag: "masožrout",
  },
  {
    id: "02",
    name: "Smažený sýr, ale pořádně",
    desc: "Ručně obalovaný eidam, tatarka s kyselou okurkou, křupavý salát. Vegetariánská klasika, kterou si objednávají i masomilové.",
    price: "169",
    tag: "vegetarián",
  },
  {
    id: "03",
    name: "Pulled pork street",
    desc: "Dvanáct hodin táhnuté vepřové, coleslaw, BBQ omáčka na náš způsob. Streetfood, se kterým to celé před šesti lety začalo.",
    price: "199",
    tag: "streetfood",
  },
  {
    id: "04",
    name: "Hranolky s aioli",
    desc: "Ke každému burgeru se hodí. Čerstvě smažené, dosolené na baru, česnekové aioli navrch.",
    price: "69",
    tag: "příloha",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#uvod" aria-label="Leháro Street — úvod">
          <span className="brand__leharo">Leháro</span>
          <span className="brand__street">Street</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#menu">Menu</a>
          <a href="#pribeh">Náš příběh</a>
          <a className="nav__wolt" href="#menu">Objednat na Wolt</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__copy">
          <p className="eyebrow">Bistro · Hybešova, Staré Brno</p>
          <h1 className="hero__title">
            Burger v <em>domácí</em> bulce, do které se dva zamilovali dřív
            než do sebe.
          </h1>
          <p className="hero__lead">
            Pečeme si vlastní bulky, vybíráme lokální suroviny a šest let
            vaříme recepty, které vznikly jen tak — pro radost. Přijďte si
            vybrat ten svůj.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#menu">
              Prohlédnout menu
            </a>
            <a className="btn btn--ghost" href="#menu">
              Objednat na Wolt
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 11–21 · So 12–21</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Hybešova 258/20, Brno-střed</dd>
            </div>
          </dl>
        </div>
        <figure className="hero__media">
          <img
            src="/hero.webp"
            alt="Šťavnatý burger v domácí bulce z bistra Leháro Street"
            width={880}
            height={880}
            className="hero__img"
          />
          <figcaption className="hero__stamp">
            <span>od r.</span>
            <strong>2018</strong>
            <span>Brno</span>
          </figcaption>
        </figure>
      </section>

      <section className="menu" id="menu">
        <div className="section-head">
          <p className="eyebrow">Co u nás dostanete</p>
          <h2 className="section-title">Jídelní lístek</h2>
          <p className="section-note">
            Krátký a poctivý. Radši uvaříme pár věcí dobře než dvacet
            tak nějak. Ceny v korunách, k tomu vždycky čerstvé přílohy.
          </p>
        </div>

        <ul className="menu-list">
          {menu.map((item) => (
            <li className="menu-item" key={item.id}>
              <span className="menu-item__num">{item.id}</span>
              <div className="menu-item__body">
                <div className="menu-item__top">
                  <h3 className="menu-item__name">{item.name}</h3>
                  <span className="menu-item__dots" aria-hidden="true" />
                  <span className="menu-item__price">
                    {item.price}<span className="menu-item__cur">Kč</span>
                  </span>
                </div>
                <p className="menu-item__desc">{item.desc}</p>
                <span className="chip">{item.tag}</span>
              </div>
            </li>
          ))}
        </ul>

        <figure className="menu-media">
          <img
            src="/section-1.webp"
            alt="Příprava burgeru v kuchyni bistra Leháro Street"
            width={900}
            height={600}
            loading="lazy"
          />
          <figcaption>
            Domácí bulky pečeme každý den — proto někdy dojdou dřív, než
            byste čekali.
          </figcaption>
        </figure>
      </section>

      <section className="about" id="pribeh">
        <figure className="about__media">
          <img
            src="/section-2.webp"
            alt="Interiér a atmosféra bistra Leháro Street v Brně"
            width={900}
            height={700}
            loading="lazy"
          />
        </figure>
        <div className="about__copy">
          <p className="eyebrow">Náš příběh</p>
          <h2 className="section-title">
            Začali dva. U plotny. Z lásky k jídlu.
          </h2>
          <p>
            Na začátku byli dva mladí lidé, kteří se zamilovali do jídla
            a do sebe navzájem. Dávno před otevřením bistra trávili volný
            čas přípravou chuťově zajímavých burgerů a možného i nemožného
            streetfoodu — jen tak, pro radost.
          </p>
          <p>
            Před šesti lety založili Bistro Leháro a dodnes vaří své
            oblíbené recepty. Do domácích bulek sází vybrané lokální
            suroviny a potěší masožrouty i vegetariány.
          </p>
          <p className="about__punch">
            Ale dost vyprávění — přijďte si vybrat ten svůj burger.
          </p>
          <ul className="about__pills">
            <li>Domácí bulky každý den</li>
            <li>Lokální suroviny</li>
            <li>Vaříme i bez masa</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
