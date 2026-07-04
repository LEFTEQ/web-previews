import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proskovická stavební — fasády a zateplení, Ostrava",
  description:
    "Zateplujeme a revitalizujeme fasády rodinných i panelových domů v Ostravě a okolí. 15 let praxe, certifikace ISO 9001. Zavolejte 730 514 801.",
  openGraph: {
    title: "Proskovická stavební — fasády a zateplení, Ostrava",
    description:
      "Zateplení a revitalizace fasád rodinných i panelových domů. Ostrava a okolí, 15 let praxe.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

const vrstvy = [
  {
    c: "01",
    nazev: "Podklad",
    popis:
      "Očistíme a zpevníme stěnu, opravíme praskliny a nerovnosti. Bez poctivého podkladu nedrží nic dalšího.",
  },
  {
    c: "02",
    nazev: "Izolant",
    popis:
      "Lepíme a kotvíme desky z polystyrenu nebo minerální vaty. Tloušťku volíme podle domu a dotačního programu.",
  },
  {
    c: "03",
    nazev: "Výztuž",
    popis:
      "Stěrka s armovací tkaninou — vrstva, která drží celý zateplovací systém pohromadě a brání prasklinám.",
  },
  {
    c: "04",
    nazev: "Omítka",
    popis:
      "Finální probarvená omítka ve vámi zvoleném odstínu a struktuře. To je to, co po letech vidíte z ulice.",
  },
];

const sluzby = [
  {
    nazev: "Zateplení fasád",
    text:
      "Kontaktní zateplovací systémy pro rodinné i panelové domy. Nižší účty za teplo, zdravější zdivo bez plísní.",
  },
  {
    nazev: "Revitalizace panelových domů",
    text:
      "Kompletní obnova pláště bytových domů včetně sanace balkonů a lodžií. Zvládáme i práce ve výškách.",
  },
  {
    nazev: "Barevné a strukturální řešení",
    text:
      "Pomůžeme vybrat odstín i strukturu omítky tak, aby dům ladil s ulicí a vydržel roky bez ztráty barvy.",
  },
  {
    nazev: "Dotace a projektová dokumentace",
    text:
      "Vyřídíme papíry, projekt i dotaci na zateplení. Vy řešíte barvu, my úřady.",
  },
];

export default function Page() {
  return (
    <main className="ps">
      <header className="ps-nav">
        <a className="ps-mark" href="#" aria-label="Proskovická stavební, domů">
          <span className="ps-mark-line">Proskovická</span>
          <span className="ps-mark-sub">STAVEBNÍ&nbsp;·&nbsp;FASÁDY OSTRAVA</span>
        </a>
        <a className="ps-tel" href="tel:+420730514801">
          <span className="ps-tel-label">Volejte</span>
          730&nbsp;514&nbsp;801
        </a>
      </header>

      <section className="ps-hero" aria-labelledby="ps-hero-title">
        <img
          className="ps-hero-img"
          src="/hero.webp"
          alt="Zateplená fasáda domu s novou probarvenou omítkou v Ostravě"
        />
        <div className="ps-hero-scrim" aria-hidden="true" />
        <div className="ps-hero-inner">
          <p className="ps-eyebrow">Revitalizace · Zateplení · Rekonstrukce</p>
          <h1 id="ps-hero-title" className="ps-hero-title">
            Nová fasáda,
            <br />
            <em>kterou pozná celá ulice.</em>
          </h1>
          <p className="ps-hero-lede">
            Zateplujeme a obnovujeme fasády rodinných i panelových domů v Ostravě
            a okolí. Patnáct let odvádíme práci, za kterou se nemusíme schovávat.
          </p>
          <div className="ps-hero-cta">
            <a className="ps-btn" href="tel:+420730514801">
              Zavolejte 730 514 801
            </a>
            <a className="ps-btn ps-btn--ghost" href="#sluzby">
              Co pro vás uděláme
            </a>
          </div>
        </div>
      </section>

      <section className="ps-layers" aria-labelledby="ps-layers-title">
        <div className="ps-section-head">
          <p className="ps-kicker">Jak fasáda vzniká</p>
          <h2 id="ps-layers-title">
            Fasáda jsou čtyři vrstvy. Každou děláme pořádně.
          </h2>
          <p className="ps-section-lede">
            Zateplení není jen barva na zdi. Je to skladba, kde na sobě jednotlivé
            vrstvy závisí. Tady je řez tím, co na váš dům postupně přijde.
          </p>
        </div>
        <ol className="ps-stack">
          {vrstvy.map((v) => (
            <li className="ps-stack-row" key={v.c}>
              <span className="ps-stack-num" aria-hidden="true">
                {v.c}
              </span>
              <div className="ps-stack-body">
                <h3>{v.nazev}</h3>
                <p>{v.popis}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ps-trust" id="sluzby" aria-labelledby="ps-trust-title">
        <div className="ps-trust-media">
          <img
            src="/section-1.webp"
            alt="Realizace zateplení fasády rodinného domu firmou Proskovická stavební"
          />
        </div>
        <div className="ps-trust-text">
          <p className="ps-kicker">Kdo jsme</p>
          <h2 id="ps-trust-title">
            Ostravská firma, která navázala na Ivo Kavalu.
          </h2>
          <p>
            Proskovická stavební s.r.o. vznikla transformací firmy Ivo Kavala,
            která začala fasády a stavby dělat před patnácti lety. Revitalizujeme
            rodinné i panelové domy v Ostravě a blízkém okolí. Jsme držiteli
            certifikátu&nbsp;<strong>ČSN EN ISO 9001</strong>.
          </p>
          <dl className="ps-facts">
            <div>
              <dt>15 let</dt>
              <dd>praxe na fasádách a stavbách</dd>
            </div>
            <div>
              <dt>ISO 9001</dt>
              <dd>certifikovaný systém kvality</dd>
            </div>
            <div>
              <dt>Ostrava</dt>
              <dd>a blízké okolí, kam za vámi přijedeme</dd>
            </div>
          </dl>

          <h3 className="ps-services-title">Co pro vás uděláme</h3>
          <ul className="ps-services">
            {sluzby.map((s) => (
              <li key={s.nazev}>
                <h4>{s.nazev}</h4>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>

          <p className="ps-addr">
            Staroveská 198/59, 724 00 Ostrava ·{" "}
            <a href="mailto:info@proskovickastavebni.cz">
              info@proskovickastavebni.cz
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
