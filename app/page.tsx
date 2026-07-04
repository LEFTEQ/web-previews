import React from "react";

export default function Page() {
  const layers = [
    {
      n: "01",
      name: "Dřevěné a parketové podlahy",
      desc: "Masiv, třívrstvé dřevo a mozaikové parkety. Pokládáme nové a renovujeme staré — přebroušení, tmelení spár, olej nebo lak podle toho, jak podlaha žije.",
      tag: "masiv · renovace · lak",
    },
    {
      n: "02",
      name: "Laminátové plovoucí podlahy",
      desc: "Rychlá montáž systémem Just Click bez lepení. Poradíme, které dekory unesou provoz v předsíni i dětském pokoji a které patří pod podlahové topení.",
      tag: "Just Click · plovoucí",
    },
    {
      n: "03",
      name: "Vinylové a PVC podlahy",
      desc: "Voděodolné vinyly do koupelny i kuchyně, PVC v metráži. Tichý krok, teplý povrch, snadná údržba — vhodné i nad topné rozvody.",
      tag: "voděodolné · vytápění",
    },
    {
      n: "04",
      name: "Koberce · Koberce Chládek",
      desc: "Zátěžové i bytové koberce, metráž na míru, obšití. Vybíráte přímo ve vzorkovně, zaměříme u vás doma a položíme začisto.",
      tag: "metráž · obšití",
    },
  ];

  return (
    <main className="cbp">
      <header className="cbp-nav" aria-label="Hlavní">
        <a className="cbp-mark" href="#top" aria-label="CB Parket, domů">
          <span className="cbp-mark__cb">CB</span>
          <span className="cbp-mark__parket">PARKET</span>
          <span className="cbp-mark__sub">České Budějovice</span>
        </a>
        <nav className="cbp-links">
          <a href="#podlahy">Podlahy</a>
          <a href="#vzorkovna">Vzorkovna</a>
          <a href="#kontakt" className="cbp-links__cta">Zavolat</a>
        </nav>
      </header>

      <section className="cbp-hero" id="top">
        <div className="cbp-hero__frame">
          <img
            src="/hero.webp"
            alt="Detail nově položené dřevěné podlahy s viditelnou kresbou letokruhů"
            className="cbp-hero__img"
          />
          <div className="cbp-hero__scale" aria-hidden="true">
            <span>0</span><span>10</span><span>20</span><span>30</span><span>40 cm</span>
          </div>
        </div>
        <div className="cbp-hero__text">
          <p className="cbp-eyebrow">Podlahářství · A. Trägera 39 · od roku 1994</p>
          <h1 className="cbp-hero__h">
            Podlaha se pokládá <em>po prknu</em>,
            <br /> ne po metru.
          </h1>
          <p className="cbp-hero__lead">
            Pokládáme a renovujeme dřevo, laminát, vinyl i koberce pro domácnosti
            a firmy v Českých Budějovicích. Nejdřív se přijdeme podívat, jak
            u vás podlaha slouží — teprve pak radíme.
          </p>
          <div className="cbp-hero__actions">
            <a href="#vzorkovna" className="cbp-btn">Přijít do vzorkovny</a>
            <a href="tel:+420607424242" className="cbp-btn cbp-btn--ghost">
              Zavolat 607 42 42 42
            </a>
          </div>
        </div>
      </section>

      <section className="cbp-layers" id="podlahy" aria-labelledby="podlahy-h">
        <div className="cbp-section-head">
          <p className="cbp-eyebrow">Co pod nohama zvládneme</p>
          <h2 id="podlahy-h">Čtyři skladby, jedna dílna</h2>
          <p className="cbp-section-head__note">
            Každý povrch má svou skladbu — od podkladu po finální vrstvu.
            Poradíme, co snese provoz i podlahové topení.
          </p>
        </div>

        <ul className="cbp-stack">
          {layers.map((l) => (
            <li className="cbp-stack__row" key={l.n}>
              <span className="cbp-stack__n" aria-hidden="true">{l.n}</span>
              <div className="cbp-stack__body">
                <h3>{l.name}</h3>
                <p>{l.desc}</p>
              </div>
              <span className="cbp-stack__tag">{l.tag}</span>
            </li>
          ))}
        </ul>

        <p className="cbp-stack__extra">
          U nás seženete i to okolo podlahy: soklové a přechodové lišty,
          interiérové dveře a zárubně, lepidla, laky, tmely, lazury
          a interiérové i fasádní barvy míchané na odstín.
        </p>
      </section>

      <section className="cbp-shop" id="vzorkovna" aria-labelledby="shop-h">
        <div className="cbp-shop__media">
          <img
            src="/section-1.webp"
            alt="Vzorkovna podlah CB Parket s vystavenými typy podlahových krytin"
          />
          <img
            src="/section-2.webp"
            alt="Renovace parketové podlahy — přebroušený povrch připravený na lak"
          />
        </div>
        <div className="cbp-shop__text" id="kontakt">
          <p className="cbp-eyebrow">Vzorkovna a prodejna</p>
          <h2 id="shop-h">Přijďte si na vzorky sáhnout</h2>
          <p>
            Ve vzorkovně na A. Trägera si projdete desítky dekorů vedle sebe —
            uvidíte, jak dub sedne k dubovému nábytku a jak se laminát chová
            v běžném světle. Zaměření u vás doma je zdarma.
          </p>

          <dl className="cbp-info">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>A. Trägera 39, České Budějovice</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá · 9–12 a 13–17</dd>
            </div>
            <div>
              <dt>CB Parket</dt>
              <dd><a href="tel:+420607424242">607 42 42 42</a></dd>
            </div>
            <div>
              <dt>Koberce Chládek</dt>
              <dd><a href="tel:+420602424242">602 42 42 42</a></dd>
            </div>
          </dl>

          <p className="cbp-trust">
            Firma zapsaná v obchodním rejstříku u Krajského soudu
            v Českých Budějovicích, oddíl C, vložka 7878.
          </p>
        </div>
      </section>
    </main>
  );
}
