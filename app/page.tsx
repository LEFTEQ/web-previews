import React from "react";

export default function Page() {
  const products = [
    {
      code: "01",
      name: "Venkovní žaluzie",
      desc: "Zastaví horko dřív, než se dostane do místnosti. Lamely se natáčí podle slunce, uvnitř zůstává světlo i vzduch.",
    },
    {
      code: "02",
      name: "Screenové rolety",
      desc: "Tkanina, přes kterou vidíte ven, ale slunce dovnitř nepustí. Ideál pro velká okna a prosklené fasády.",
    },
    {
      code: "03",
      name: "Venkovní rolety",
      desc: "Úplné zatemnění a klid. Ráno vás nevzbudí světlo ani hluk z ulice, v zimě drží teplo doma.",
    },
    {
      code: "04",
      name: "Pergoly a stínění zimních zahrad",
      desc: "Terasa použitelná i v poledním žáru. Lamelová střecha se natočí podle počasí, večer zůstanete venku déle.",
    },
    {
      code: "05",
      name: "Sítě proti hmyzu",
      desc: "Otevřené okno bez komárů. Posuvné i pevné rámy skoro splynou s oknem — sotva je poznáte.",
    },
    {
      code: "06",
      name: "Vnitřní žaluzie a plisé",
      desc: "Doladění světla u vás v pokoji. Od jemného rozptylu po plné zatemnění, na míru každému oknu.",
    },
  ];

  const references = [
    {
      name: "Pavel Šlambora",
      text: "Řešili jsme přehřívání v rodinném domě. Vybrali jsme venkovní rolety a byla to trefa — od zaměření až po montáž vše profesionálně, rychle a spolehlivě.",
    },
    {
      name: "Tereza Gluzová",
      text: "Venkovní zatemňovací roleta a instalace během pár týdnů, i v létě, kdy se běžně čeká déle. Komunikace rychlá a jasná. Doporučuji.",
    },
    {
      name: "Vít Spíšek",
      text: "Objednal jsem venkovní žaluzie i posuvné sítě proti hmyzu. Termíny i ceny dodrženy, sítě jsou téměř neviditelné. Maximální spokojenost.",
    },
  ];

  return (
    <main className="pk">
      <header className="pk-nav">
        <a className="pk-mark" href="#" aria-label="PROKLIMA stínicí technika, domů">
          <span className="pk-mark-pro">PRO</span>
          <span className="pk-mark-klima">KLIMA</span>
          <span className="pk-mark-sub">stínicí technika</span>
        </a>
        <nav className="pk-nav-links" aria-label="Hlavní navigace">
          <a href="#produkty">Produkty</a>
          <a href="#duvera">O nás</a>
          <a className="pk-nav-cta" href="#produkty">Poradit s výběrem</a>
        </nav>
      </header>

      <section className="pk-hero" aria-labelledby="pk-hero-title">
        <div className="pk-hero-media">
          <img
            src="/hero.webp"
            alt="Fasáda domu s venkovními žaluziemi s natočenými lamelami, které stíní okna před sluncem"
            className="pk-hero-img"
          />
          <div className="pk-louvers" aria-hidden="true">
            <span /><span /><span /><span /><span /><span /><span /><span />
          </div>
        </div>
        <div className="pk-hero-body">
          <p className="pk-eyebrow">Český Brod · nám. Arnošta z Pardubic 7</p>
          <h1 id="pk-hero-title">
            Slunce ven,<br />
            <span className="pk-hero-accent">chládek dovnitř.</span>
          </h1>
          <p className="pk-hero-lede">
            Venkovní žaluzie, rolety a screeny zastaví horko na fasádě —
            dřív, než se stačí opřít do skla. Zaměříme, vyrobíme a namontujeme
            na míru vašim oknům.
          </p>
          <div className="pk-hero-actions">
            <a className="pk-btn pk-btn-solid" href="#produkty">Chci poradit s výběrem</a>
            <a className="pk-btn pk-btn-ghost" href="#duvera">Přijít do showroomu</a>
          </div>
          <dl className="pk-hero-facts">
            <div>
              <dt>let na trhu</dt>
              <dd>20+</dd>
            </div>
            <div>
              <dt>zastíněných oken</dt>
              <dd>3 mil.</dd>
            </div>
            <div>
              <dt>záruka</dt>
              <dd>4 roky</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pk-products" id="produkty" aria-labelledby="pk-products-title">
        <div className="pk-section-head">
          <p className="pk-eyebrow">Co pro vaše okna umíme</p>
          <h2 id="pk-products-title">Stínění na míru — od terasy po ložnici</h2>
          <p className="pk-section-lede">
            Každé řešení začíná u toho, co vás trápí: přehřáté patro, oslněná
            kancelář, terasa nepoužitelná v poledne. Podle toho vybíráme, ne naopak.
          </p>
        </div>
        <ul className="pk-grid">
          {products.map((p) => (
            <li className="pk-card" key={p.code}>
              <span className="pk-card-code">{p.code}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </li>
          ))}
        </ul>
        <figure className="pk-figure">
          <img
            src="/section-1.webp"
            alt="Detail venkovní žaluzie s hliníkovými lamelami namontované na okně"
          />
          <figcaption>
            Hliníkové lamely se natáčí podle slunce — od plného zastínění po
            měkké denní světlo. Ovládat je můžete i z mobilu přes Somfy.
          </figcaption>
        </figure>
      </section>

      <section className="pk-trust" id="duvera" aria-labelledby="pk-trust-title">
        <div className="pk-trust-lead">
          <p className="pk-eyebrow">Rodinná firma z Českého Brodu</p>
          <h2 id="pk-trust-title">
            Přijedeme, zaměříme, ukážeme rozdíly na místě
          </h2>
          <p>
            Na trhu jsme přes dvacet let a postarali jsme se o víc než tři
            miliony oken. Jsme největší partner české značky Climax, takže vám
            neprodáme první katalogovou položku — ukážeme vzorníky, srovnáme
            typy stínění a poradíme, co dává u vašeho domu smysl.
          </p>
          <p className="pk-trust-note">
            Do showroomu v Českém Brodě to máte na náměstí Arnošta z Pardubic 7.
            Přijďte si stínicí techniku osahat, než se rozhodnete.
          </p>
        </div>

        <img
          src="/section-2.webp"
          alt="Interiér showroomu se vzorky stínicí techniky a namontovanými žaluziemi"
          className="pk-trust-img"
        />

        <ul className="pk-reviews">
          {references.map((r) => (
            <li className="pk-review" key={r.name}>
              <p className="pk-review-text">{r.text}</p>
              <p className="pk-review-name">{r.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
