import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RECOSA Pardubice — střechy, izolace, fasády | 33 let praxe",
  description:
    "Střechy ploché i šikmé, spolehlivé izolace spodních staveb, zateplení fasád a prodej stavebnin v Pardubicích. Rodinná firma z Dašic staví od roku 1990.",
  openGraph: {
    title: "RECOSA Pardubice — váš partner do nepohody",
    description:
      "Střechy, izolace a fasády od roku 1990. Vlastní klempířská dílna, technika i teleskopická plošina DENKA DK25.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const trades = [
  {
    key: "01",
    name: "Střechy",
    lead: "Nová střecha i oprava té staré — bez zatékání.",
    detail:
      "Ploché asfaltové i fóliové, šikmé taškové nebo plechové, zateplené i vegetační „zelené“ střechy.",
  },
  {
    key: "02",
    name: "Izolace",
    lead: "Od toho jsme v roce 1990 začínali. Suchý dům bez kompromisů.",
    detail:
      "Spodní stavby, tlaková voda, protiradonová ochrana, bazény, mostní konstrukce i izolace tunelů.",
  },
  {
    key: "03",
    name: "Fasády",
    lead: "Zateplení, které se vrátí na účtu za teplo.",
    detail:
      "Zateplovací i fasádní systémy a fasádní nátěry. Jsme dodavatel dotačního programu Zelená úsporám.",
  },
  {
    key: "04",
    name: "Stavebniny",
    lead: "Materiál prověřený lety na našich vlastních stavbách.",
    detail:
      "Střešní krytiny, asfaltové pásy, šindele, tepelné izolace, klempířské prvky a další stavební materiál.",
  },
  {
    key: "05",
    name: "Plošina DENKA DK25",
    lead: "Půjčíme vám dosah 25 metrů i s obsluhou.",
    detail:
      "Teleskopická plošina pro výškové práce — vyjma natěračských a fasádnických prací.",
  },
];

const clients = [
  {
    who: "Drobní investoři",
    what: "Rodinné domy, garáže, pergoly a přístavby.",
  },
  {
    who: "Společenství vlastníků (SVJ)",
    what: "Bytové domy a garáže — od poptávky po dotaci.",
  },
  {
    who: "Bytová družstva",
    what: "Obytné domy a rozsáhlejší rekonstrukce.",
  },
  {
    who: "Firmy",
    what: "Administrativní budovy a skladové haly.",
  },
  {
    who: "Stavební firmy",
    what: "Jsme spolehlivý specializovaný subdodavatel.",
  },
  {
    who: "Státní instituce",
    what: "Obce, města, kraje i ministerstva.",
  },
];

const suppliers = [
  { name: "Bauder", origin: "Německo", note: "Asfaltové pásy, fólie PVC a TPO, tepelná izolace PIR" },
  { name: "AXTER SAS", origin: "Francie", note: "SBS modifikované pásy" },
  { name: "ETANCO", origin: "Francie", note: "Kotevní systémy" },
  { name: "BJK Group", origin: "Česko", note: "Záchytný systém ROOFIX, ochranné pomůcky do výšek" },
  { name: "Büsscher & Hoffmann", origin: "Rakousko", note: "Modifikované asfaltové pásy" },
  { name: "Börner", origin: "Německo", note: "Pásy, fólie PVC a FPO, izolace VA-Q-VIP F-EPS" },
  { name: "ISOFAST B&M", origin: "Česko", note: "Nerezové vpusti JUAL, kotevní systémy" },
];

export default function Page() {
  return (
    <main className="rc">
      <header className="rc-top">
        <a className="rc-mark" href="#" aria-label="RECOSA Pardubice, domovská stránka">
          <span className="rc-mark__name">RECOSA</span>
          <span className="rc-mark__place">Pardubice</span>
        </a>
        <nav className="rc-nav" aria-label="Hlavní">
          <a href="#cinnost">Čím se zabýváme</a>
          <a href="#duvera">O firmě</a>
          <a className="rc-nav__call" href="tel:+420733734111">733&nbsp;734&nbsp;111</a>
        </nav>
      </header>

      <section className="rc-hero">
        <div className="rc-hero__frame">
          <img
            className="rc-hero__img"
            src="/hero.webp"
            alt="Nová plochá střecha s izolační fólií realizovaná firmou RECOSA v Pardubicích"
            width={1600}
            height={1000}
          />
          <span className="rc-hero__tape" aria-hidden="true">EST. 1990 · DAŠICE · PARDUBICE</span>
        </div>
        <div className="rc-hero__text">
          <p className="rc-hero__eyebrow">Izolatéři, pokrývači a klempíři od roku 1990</p>
          <h1 className="rc-hero__title">
            Už <span className="rc-hero__num">33</span> let<br />
            jsme váš partner<br />
            <em>do nepohody.</em>
          </h1>
          <p className="rc-hero__body">
            Slušnost, dlouholetá praxe a poctivá kvalita — na tom stavíme střechy,
            izolace a fasády po celých Pardubicích a okolí. Vlastní technika,
            klempířská dílna a plošina s dosahem 25 metrů.
          </p>
          <div className="rc-hero__cta">
            <a className="rc-btn" href="tel:+420733734111">Zavolat na 733 734 111</a>
            <a className="rc-btn rc-btn--ghost" href="#cinnost">Co pro vás uděláme</a>
          </div>
        </div>
      </section>

      <section className="rc-sec" id="cinnost" aria-labelledby="cinnost-h">
        <div className="rc-sec__head">
          <p className="rc-sec__kicker">Hlavní předmět činnosti</p>
          <h2 className="rc-sec__title" id="cinnost-h">
            Pět věcí, které umíme dělat naplno
          </h2>
          <p className="rc-sec__intro">
            Začínali jsme jako izolatérská firma. Dnes zvládneme celou střechu
            i s fasádou — a materiál k tomu prodáme ze skladu.
          </p>
        </div>

        <ol className="rc-trades">
          {trades.map((t) => (
            <li className="rc-trade" key={t.key}>
              <span className="rc-trade__no" aria-hidden="true">{t.key}</span>
              <div className="rc-trade__body">
                <h3 className="rc-trade__name">{t.name}</h3>
                <p className="rc-trade__lead">{t.lead}</p>
                <p className="rc-trade__detail">{t.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="rc-figure">
          <img
            src="/section-1.webp"
            alt="Zateplená fasáda bytového domu dokončená týmem RECOSA"
            width={1600}
            height={900}
          />
          <figcaption>
            Zateplení fasády v rámci programu Zelená úsporám — jsme jeho odborným dodavatelem.
          </figcaption>
        </figure>
      </section>

      <section className="rc-sec rc-sec--dark" id="duvera" aria-labelledby="duvera-h">
        <div className="rc-sec__head">
          <p className="rc-sec__kicker">O firmě &amp; reference</p>
          <h2 className="rc-sec__title" id="duvera-h">
            Rodinná firma z Dašic, která si stojí za svou prací
          </h2>
        </div>

        <div className="rc-story">
          <img
            className="rc-story__img"
            src="/section-2.webp"
            alt="Technika RECOSA — nákladní vozidlo s hydraulickou rukou a teleskopická plošina"
            width={1200}
            height={1000}
          />
          <div className="rc-story__text">
            <p>
              RECOSA Pardubice vznikla 23. května 1990 jako tradiční izolatérská
              firma. Díky kvalitě odvedené práce jsme postupně přidali kompletní
              dodávky střech, zateplovacích systémů a fasád.
            </p>
            <p>
              Naši lidé chodí na pravidelná školení dodavatelů izolačních systémů
              i k bezpečnosti a požární ochraně. Disponujeme veškerou vlastní
              technikou — nákladní vozidla s hydraulickou rukou, motorové žebříky,
              plošina i plně vybavená klempířská dílna.
            </p>
            <dl className="rc-facts">
              <div><dt>Založeno</dt><dd>1990</dd></div>
              <div><dt>Sídlo</dt><dd>Dašice, Zminný 34</dd></div>
              <div><dt>Kraj</dt><dd>Pardubický</dd></div>
            </dl>
          </div>
        </div>

        <div className="rc-clients">
          <h3 className="rc-clients__title">Stavíme pro celé spektrum zákazníků</h3>
          <ul className="rc-clients__grid">
            {clients.map((c) => (
              <li className="rc-client" key={c.who}>
                <span className="rc-client__who">{c.who}</span>
                <span className="rc-client__what">{c.what}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rc-supp">
          <div className="rc-supp__head">
            <h3 className="rc-supp__title">Materiály, jejichž životnost garantujeme</h3>
            <p className="rc-supp__lead">
              Postavíme zakázku z výrobků kteréhokoli kvalitního dodavatele. Sami
              ale doporučujeme značky prověřené lety praxe — hlavně v oblasti izolací.
            </p>
          </div>
          <ul className="rc-supp__list">
            {suppliers.map((s) => (
              <li className="rc-supp__item" key={s.name}>
                <div className="rc-supp__row">
                  <span className="rc-supp__name">{s.name}</span>
                  <span className="rc-supp__origin">{s.origin}</span>
                </div>
                <span className="rc-supp__note">{s.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
