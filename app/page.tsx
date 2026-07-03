import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "METAL PRODEX Tech — vzduchotechnika a klimatizace Plzeň",
  description:
    "Projekce, dodávka a servis vzduchotechniky, klimatizace a chlazení v Plzni a okolí. Rodinná firma s praxí od roku 1992.",
  openGraph: {
    title: "METAL PRODEX Tech — vzduchotechnika a klimatizace Plzeň",
    description:
      "Projekce, dodávka a servis vzduchotechniky, klimatizace a chlazení. Plzeň, praxe od roku 1992.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

const sluzby = [
  {
    id: "VZT",
    nazev: "Vzduchotechnika",
    popis:
      "Návrh a montáž rozvodů, jednotek a rekuperace. Přivedeme čerstvý vzduch tam, kde je ho potřeba — do výroby, kanceláří i haly.",
  },
  {
    id: "KLI",
    nazev: "Klimatizace a chlazení",
    popis:
      "Splitové i multisplitové systémy, chladicí okruhy. Dodávka na klíč včetně uvedení do provozu a pravidelných revizí.",
  },
  {
    id: "MaR",
    nazev: "Měření a regulace",
    popis:
      "Automatika, která drží teplotu a průtok přesně tam, kde mají být. Méně energie, stabilní provoz, jasný přehled.",
  },
  {
    id: "TZB",
    nazev: "Vytápění a instalace",
    popis:
      "Ústřední vytápění, voda a kanalizace, elektroinstalace. Celá technika budovy z jedné ruky, bez hádání mezi řemesly.",
  },
  {
    id: "NED",
    nazev: "Nízkoenergetické domy",
    popis:
      "Stavba pasivních a nízkoenergetických domů. Kde je dobrá vzduchotechnika základ, ne dodatek.",
  },
  {
    id: "SER",
    nazev: "Záruční a pozáruční servis",
    popis:
      "Nainstalovanou technikou to nekončí. Držíme ji v chodu — revize, čištění, opravy, když je horko i mráz.",
  },
];

export default function Page() {
  return (
    <main className="mpt">
      <header className="mpt-topbar">
        <a className="mpt-wordmark" href="#" aria-label="METAL PRODEX Tech, domovská stránka">
          <span className="mpt-wordmark-mark" aria-hidden="true">
            <span className="mpt-vent" />
            <span className="mpt-vent" />
            <span className="mpt-vent" />
          </span>
          <span className="mpt-wordmark-text">
            <b>METAL PRODEX</b>
            <i>Tech</i>
          </span>
        </a>
        <a className="mpt-call" href="tel:+420377261971">
          <span className="mpt-call-label">Zavolat</span>
          <span className="mpt-call-num">377 261 971</span>
        </a>
      </header>

      <section className="mpt-hero" aria-labelledby="hero-nadpis">
        <div className="mpt-hero-media">
          <img
            src="/hero.webp"
            alt="Vzduchotechnické potrubí a jednotky instalované ve strojovně"
            width={1600}
            height={1000}
          />
        </div>
        <div className="mpt-hero-inner">
          <p className="mpt-eyebrow">Plzeň · praxe od roku 1992</p>
          <h1 id="hero-nadpis" className="mpt-hero-title">
            Vzduch, který v budově
            <span className="mpt-hero-flow">proudí, jak má.</span>
          </h1>
          <p className="mpt-hero-lede">
            Projektujeme, dodáváme a servisujeme vzduchotechniku, klimatizaci a chlazení.
            Od strojovny po poslední anemostat — celá technika budovy z jedné ruky.
          </p>
          <div className="mpt-hero-actions">
            <a className="mpt-btn mpt-btn-primary" href="tel:+420377261971">
              Zavolat 377 261 971
            </a>
            <a className="mpt-btn mpt-btn-ghost" href="#sluzby">
              Co umíme
            </a>
          </div>
        </div>
      </section>

      <section className="mpt-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="mpt-section-head">
          <p className="mpt-eyebrow">Nabídka</p>
          <h2 id="sluzby-nadpis">Technika budovy, kompletně</h2>
          <p className="mpt-section-lede">
            Nedodáváme jen krabici na zeď. Postaráme se o celý řetězec — návrh, montáž
            i provoz — aby na sebe jednotlivá řemesla navazovala.
          </p>
        </div>
        <ul className="mpt-grid">
          {sluzby.map((s) => (
            <li className="mpt-card" key={s.id}>
              <span className="mpt-card-code" aria-hidden="true">
                {s.id}
              </span>
              <h3 className="mpt-card-title">{s.nazev}</h3>
              <p className="mpt-card-text">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mpt-about" id="o-nas" aria-labelledby="onas-nadpis">
        <div className="mpt-about-media">
          <img
            src="/section-1.webp"
            alt="Realizace vzduchotechniky v technickém zázemí budovy"
            width={1200}
            height={900}
          />
          <img
            className="mpt-about-media-2"
            src="/section-2.webp"
            alt="Detail klimatizační a chladicí jednotky"
            width={1200}
            height={900}
          />
        </div>
        <div className="mpt-about-body">
          <p className="mpt-eyebrow">O firmě</p>
          <h2 id="onas-nadpis">Tři desetiletí ve strojovnách Plzeňska</h2>
          <p>
            Začínalo to v roce 1992 jako živnost Ing. Jaroslava Procházky. V roce 1995
            vznikla METAL PRODEX Tech, s.r.o. a k projekci, vzduchotechnice, klimatizaci
            a zámečnictví přibylo chlazení. Od té doby držíme, co jsme slíbili.
          </p>
          <dl className="mpt-facts">
            <div>
              <dt>Sídlo</dt>
              <dd>Republikánská 2, 312 00 Plzeň</dd>
            </div>
            <div>
              <dt>Praxe v oboru</dt>
              <dd>od roku 1992</dd>
            </div>
            <div>
              <dt>Záběr</dt>
              <dd>projekce · dodávka · servis</dd>
            </div>
          </dl>
          <p className="mpt-about-note">
            Napište nebo zavolejte — projdeme s vámi projekt, poradíme s technikou
            a řekneme na rovinu, co dává smysl.
          </p>
          <div className="mpt-about-contact">
            <a className="mpt-btn mpt-btn-primary" href="tel:+420602486638">
              Zavolat 602 486 638
            </a>
            <a className="mpt-btn mpt-btn-ghost" href="mailto:plzen@metal-prodex.cz">
              plzen@metal-prodex.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
