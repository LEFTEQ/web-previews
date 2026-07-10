import type { CSSProperties } from "react";

export default function Page() {
  const produkty = [
    {
      id: "01",
      nazev: "Plastová okna",
      profil: "Profil GEALAN",
      popis:
        "Vícekomorové profily s tepelně izolačními parametry pro ty nejpřísnější požadavky. Vyrábíme na míru — pro historické i moderní domy.",
      detaily: ["Bílá i barvy RAL", "Imitace dřeva", "Acrylcolor a AluClip"],
    },
    {
      id: "02",
      nazev: "Hliníková okna",
      profil: "Profil Heroal",
      popis:
        "Ceněný architektonický prvek pro velké budovy i rodinné domy. Zvládneme i kruhové, segmentové a oválné oblouky.",
      detaily: ["Zimní zahrady", "Světlíky a zádveří", "Atypické tvary"],
    },
    {
      id: "03",
      nazev: "Dveře",
      profil: "Plast i hliník",
      popis:
        "Spolehlivost, design a komfort. Odolné proti povětrnosti, s bezpečnostním kováním a kvalitními zámky.",
      detaily: ["Vstupní i posuvné", "Různé výplně", "Obložkové zárubně"],
    },
    {
      id: "04",
      nazev: "Zimní zahrady",
      profil: "Stavba na míru",
      popis:
        "Prostor, kde se potká interiér s přírodou. Výborná izolace, možnost větrání i stínění pro pohodu v létě.",
      detaily: ["Téměř bez limitu rozměrů", "Jakákoliv barva", "Relax i práce"],
    },
    {
      id: "05",
      nazev: "Prosklené stěny",
      profil: "Interiér na míru",
      popis:
        "Oddělí prostory opticky i akusticky a nechají vás v kontaktu s okolím. Hladký povrch odolný proti poškrábání.",
      detaily: ["Sklo i polykarbonát", "Velký výběr dekorů", "Akustická pohoda"],
    },
    {
      id: "06",
      nazev: "Garážová vrata",
      profil: "Sekční systém",
      popis:
        "Sekční garážová vrata dodaná v rozměrech a barvě podle vašeho domu. Ke každé zakázce záruční i pozáruční servis.",
      detaily: ["Rozměry na míru", "Barva k domu", "Servis v ceně"],
    },
  ];

  return (
    <main className="nl">
      <header className="nl-top">
        <a className="nl-brand" href="#top" aria-label="NELAN — úvod">
          <span className="nl-brand-mark" aria-hidden="true" />
          <span className="nl-brand-word">NELAN</span>
          <span className="nl-brand-tag">okna &amp; dveře</span>
        </a>
        <nav className="nl-nav" aria-label="Hlavní">
          <a href="#produkty">Produkty</a>
          <a href="#duvera">O firmě</a>
          <a className="nl-call" href="tel:+420354000000">Zavolat</a>
        </nav>
      </header>

      <section className="nl-hero" id="top">
        <div className="nl-hero-copy">
          <p className="nl-eyebrow">Horní Ves · Třebeň-Cheb · od roku 1992</p>
          <h1 className="nl-hero-h">
            Okno je rám,
            <br />
            kterým do domu
            <br />
            <span className="nl-hero-em">pouštíte světlo.</span>
          </h1>
          <p className="nl-hero-lede">
            Plastová a hliníková okna, dveře a zimní zahrady na zakázku — přesně
            podle rozměru, tvaru i barvy vašeho domu. Vyrábíme z profilů GEALAN a
            Heroal se zárukou i pozáručním servisem.
          </p>
          <div className="nl-hero-cta">
            <a className="nl-btn" href="#produkty">
              Prohlédnout výrobu
            </a>
            <a className="nl-btn-ghost" href="tel:+420354000000">
              Zavolat na +420 354 000 000
            </a>
          </div>
        </div>
        <figure className="nl-hero-fig">
          <img
            src="/hero.webp"
            alt="Plastové okno NELAN s pohledem do zahrady"
            width={960}
            height={1200}
            loading="eager"
          />
          <figcaption className="nl-hero-cap">
            <span className="nl-cap-val">Uw 0,7</span>
            <span className="nl-cap-lab">tepelný prostup / profil GEALAN</span>
          </figcaption>
        </figure>
      </section>

      <section className="nl-section" id="produkty">
        <div className="nl-sec-head">
          <p className="nl-sec-num">Katalog</p>
          <h2 className="nl-sec-h">Co pro váš dům umíme vyrobit</h2>
          <p className="nl-sec-sub">
            Šest řemeslných oborů pod jednou střechou v Horní Vsi. Vše na míru,
            bez šablon — od jednoho okna po celou zimní zahradu.
          </p>
        </div>
        <ol className="nl-grid">
          {produkty.map((p) => (
            <li className="nl-card" key={p.id}>
              <div className="nl-card-top">
                <span className="nl-card-num">{p.id}</span>
                <span className="nl-card-profil">{p.profil}</span>
              </div>
              <h3 className="nl-card-h">{p.nazev}</h3>
              <p className="nl-card-p">{p.popis}</p>
              <ul className="nl-card-list">
                {p.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="nl-trust" id="duvera">
        <figure className="nl-trust-fig">
          <img
            src="/section-1.webp"
            alt="Realizace oken NELAN na rodinném domě"
            width={900}
            height={1100}
            loading="lazy"
          />
        </figure>
        <div className="nl-trust-copy">
          <p className="nl-sec-num">O firmě</p>
          <h2 className="nl-sec-h">Vyrábíme v Chebsku, měříme u vás doma</h2>
          <p className="nl-trust-p">
            NELAN spol. s r.o. sídlí v Horní Vsi u Třebeně na Chebsku. Okna a dveře
            neseskládáváme z hotových dílů — vyrábíme je na zakázku podle přesného
            zaměření a přání zákazníka, ať jde o památkově chráněný dům nebo
            novostavbu.
          </p>
          <dl className="nl-facts">
            <div>
              <dt>Profily</dt>
              <dd>GEALAN &amp; Heroal</dd>
            </div>
            <div>
              <dt>Rozměry</dt>
              <dd>Vždy na míru</dd>
            </div>
            <div>
              <dt>Servis</dt>
              <dd>Záruční i pozáruční</dd>
            </div>
            <div>
              <dt>Kraj</dt>
              <dd>Karlovarský</dd>
            </div>
          </dl>
          <blockquote className="nl-quote">
            „Vybrali jsme si NELAN kvůli barvě v imitaci dřeva na starší chalupu —
            přijeli zaměřit, poradili s profilem a osadili čistě. Okna sedí přesně.“
            <cite>— zákazník z Chebu</cite>
          </blockquote>
          <figure className="nl-trust-fig-two">
            <img
              src="/section-2.webp"
              alt="Detail rámu a kování okna NELAN"
              width={900}
              height={600}
              loading="lazy"
            />
          </figure>
          <address className="nl-addr">
            NELAN spol. s r.o. · Horní Ves 1, 350 02 Třebeň-Cheb 2
          </address>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _t: CSSProperties = {};
