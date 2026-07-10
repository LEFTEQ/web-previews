import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NELAN — plastová a hliníková okna na míru | Karlovy Vary",
  description:
    "Plastová i hliníková okna, dveře, zimní zahrady a prosklené stěny na zakázku. Profily GEALAN a Heroal, záruční i pozáruční servis. Výroba v Karlových Varech.",
  openGraph: {
    title: "NELAN — okna, která drží teplo i tvar",
    description:
      "Okna a dveře z vícekomorových profilů GEALAN a Heroal. Na míru, v Karlových Varech, se servisem po ruce.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const produkty = [
  {
    kod: "01",
    nazev: "Plastová okna",
    profil: "Profil GEALAN",
    text: "Vícekomorový plastový profil, který splní i ty nejpřísnější požadavky na tepelnou izolaci. Vyrábíme přesně na míru — pro historické fasády i moderní novostavby.",
    detaily: ["Bílá i barvy z palety RAL", "Imitace dřeva jedno- i oboustranně", "Povrch Acrylcolor nebo opláštění AluClipem"],
  },
  {
    kod: "02",
    nazev: "Hliníková okna",
    profil: "Profil Heroal",
    text: "Ceněný architektonický prvek s výbornou tepelnou izolací. Hodí se pro rodinné domy, zimní zahrady i velké administrativní budovy.",
    detaily: ["Kruhové, segmentové i oválné oblouky", "Typové rozměry i tvary na přání", "Světlíky, zádveří, závětří"],
  },
  {
    kod: "03",
    nazev: "Dveře — plast i hliník",
    profil: "Spolehlivost + komfort",
    text: "Vstupte domů stylově a bezpečně. Odolné proti povětrnosti i opotřebení, s bezpečnostním kováním a kvalitními zámky.",
    detaily: ["Různé barvy, výplně a designy", "Posuvné i otevírací provedení", "Obložkové zárubně u dřevěných dveří"],
  },
  {
    kod: "04",
    nazev: "Zimní zahrady",
    profil: "Interiér potká přírodu",
    text: "Stavba na míru podle vašeho domu — místo, kde se dobře žije, pracuje i odpočívá. V téměř neomezených rozměrech a jakékoliv barvě.",
    detaily: ["Výborná tepelná izolace a stabilita", "Větrání a stínění pro léto", "Prostor pro relax i setkávání"],
  },
  {
    kod: "05",
    nazev: "Prosklené stěny",
    profil: "Světlo i soukromí",
    text: "Faktické i optické oddělení prostor včetně akustické pohody. Soukromí, a přitom zůstanete v kontaktu s okolím.",
    detaily: ["Hladký povrch odolný proti poškrábání", "Sklo, polykarbonát, plast i lamino", "Velký výběr barev a dekorů"],
  },
  {
    kod: "06",
    nazev: "Garážová vrata",
    profil: "Sekční provedení",
    text: "Sekční garážová vrata, která zapadnou k oknům i dveřím na vašem domě. Rozměry a barvy přizpůsobíme fasádě i zbytku stavby.",
    detaily: ["Ladí s okny a dveřmi", "Rozměry na míru garáže", "Barvy podle fasády"],
  },
];

const duvody = [
  {
    n: "GEALAN & Heroal",
    t: "Stavíme na profilech, které mají jméno. Vícekomorový plast GEALAN pro teplo, hliník Heroal pro pevnost a velké prosklení.",
  },
  {
    n: "Na zakázku, ne ze skladu",
    t: "Každé okno i dveře vyrábíme přesně podle přání a stavebního stylu objektu. Tvar, barva, výplň — vše přizpůsobíme.",
  },
  {
    n: "Servis, který zůstane",
    t: "Záruční i pozáruční servis bereme jako samozřejmost. Když se něco po letech ozve, jsme dohledatelní a v Karlových Varech.",
  },
];

export default function Page() {
  return (
    <main className="nl">
      <header className="nl-top">
        <a className="nl-mark" href="#" aria-label="NELAN, spol. s r.o.">
          <span className="nl-mark-word">NELAN</span>
          <span className="nl-mark-sub">okna &middot; dveře &middot; K. Vary</span>
        </a>
        <a className="nl-call" href="tel:+420353000000">
          Zavolat do výroby
        </a>
      </header>

      <section className="nl-hero">
        <div className="nl-hero-copy">
          <p className="nl-eyebrow">Výroba na míru &middot; Nákladní 194, Rybáře, Karlovy Vary</p>
          <h1 className="nl-h1">
            Okno je&nbsp;linie,
            <br />
            <span className="nl-h1-accent">za&nbsp;kterou drží teplo.</span>
          </h1>
          <p className="nl-lede">
            Plastová a hliníková okna, dveře, zimní zahrady i prosklené stěny —
            z&nbsp;vícekomorových profilů GEALAN a&nbsp;Heroal. Přesně podle vašeho
            domu, ať je historický, nebo úplně nový.
          </p>
          <div className="nl-cta-row">
            <a className="nl-btn" href="#poptavka">Nezávazně poptat okna</a>
            <a className="nl-btn-ghost" href="#produkty">Prohlédnout výrobu</a>
          </div>
          <dl className="nl-facts">
            <div>
              <dt>Profily</dt>
              <dd>GEALAN &middot; Heroal</dd>
            </div>
            <div>
              <dt>Rozměry</dt>
              <dd>na zakázku</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>Karlovy Vary 5</dd>
            </div>
          </dl>
        </div>
        <figure className="nl-hero-fig">
          <img
            src="/hero.webp"
            alt="Detail plastového okna z profilu GEALAN vyráběného firmou NELAN"
            width={1200}
            height={1500}
            className="nl-hero-img"
          />
          <figcaption className="nl-hero-tag">Vícekomorový profil &middot; řez rámem</figcaption>
        </figure>
      </section>

      <section className="nl-products" id="produkty" aria-labelledby="produkty-h">
        <div className="nl-sec-head">
          <p className="nl-eyebrow">Katalog výroby</p>
          <h2 className="nl-h2" id="produkty-h">Šest věcí, které umíme na míru</h2>
          <p className="nl-sec-note">
            Od jednoho okna do bytu po prosklenou administrativní budovu. Design
            přizpůsobíme fasádě i stavebnímu stylu — historickému i modernímu.
          </p>
        </div>

        <div className="nl-band">
          <img
            src="/section-1.webp"
            alt="Realizace oken a prosklení od firmy NELAN"
            width={1600}
            height={900}
            className="nl-band-img"
          />
        </div>

        <ol className="nl-grid">
          {produkty.map((p) => (
            <li className="nl-card" key={p.kod}>
              <div className="nl-card-top">
                <span className="nl-card-kod">{p.kod}</span>
                <span className="nl-card-profil">{p.profil}</span>
              </div>
              <h3 className="nl-card-h">{p.nazev}</h3>
              <p className="nl-card-t">{p.text}</p>
              <ul className="nl-card-list">
                {p.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="nl-trust" aria-labelledby="trust-h">
        <div className="nl-trust-media">
          <img
            src="/section-2.webp"
            alt="Zimní zahrada a prosklená stěna realizovaná firmou NELAN"
            width={1200}
            height={1400}
            className="nl-trust-img"
          />
        </div>
        <div className="nl-trust-copy">
          <p className="nl-eyebrow">Proč NELAN</p>
          <h2 className="nl-h2" id="trust-h">
            Snížit spotřebu energie doma
            <br />
            začíná u&nbsp;dobře udělaného okna.
          </h2>
          <p className="nl-sec-note">
            Naše okna splňují i&nbsp;ty nejpřísnější požadavky na tepelně izolační
            parametry — v&nbsp;ideálním poměru kvality a&nbsp;ceny. To ostatní je
            řemeslo a&nbsp;to, že tu po letech pořád jsme.
          </p>
          <ul className="nl-reasons">
            {duvody.map((d) => (
              <li key={d.n}>
                <h3>{d.n}</h3>
                <p>{d.t}</p>
              </li>
            ))}
          </ul>
          <div className="nl-where" id="poptavka">
            <p className="nl-where-label">Kde nás najdete</p>
            <p className="nl-where-addr">
              Nákladní 194, Rybáře<br />
              360&nbsp;05 Karlovy Vary&nbsp;5
            </p>
            <a className="nl-btn" href="tel:+420353000000">Zavolat a domluvit zaměření</a>
          </div>
        </div>
      </section>
    </main>
  );
}
