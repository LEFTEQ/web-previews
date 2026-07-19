import { ServiceWall } from "./motion";

const services = [
  {
    n: "01",
    code: "RD",
    spec: "36–40 TÝDNŮ",
    title: "Rodinné domy na klíč",
    desc: "Zděné domy z Ytongu — typové i atypické. Od převzetí staveniště po kolaudaci a předání klíčů.",
    dim: "625 × 250 × 300 mm",
  },
  {
    n: "02",
    code: "HR",
    spec: "NOSNÉ ZDIVO",
    title: "Hrubé stavby",
    desc: "Postavíme hrubou stavbu podle vaší dokumentace i podle projektů od cizích projektantů.",
    dim: "625 × 250 × 300 mm",
  },
  {
    n: "03",
    code: "FA",
    spec: "NZÚ · ODBĚRATEL",
    title: "Fasády a zateplení",
    desc: "Zateplení budov, fasádní omítky, obklady a dlažby. Odborný dodavatel programu Nová zelená úsporám.",
    dim: "625 × 250 × 300 mm",
  },
  {
    n: "04",
    code: "RE",
    spec: "BYT. JÁDRA",
    title: "Rekonstrukce",
    desc: "Rekonstrukce bytových jader, přístavby a nástavby řešené na míru vašemu domu.",
    dim: "625 × 250 × 300 mm",
  },
  {
    n: "05",
    code: "DS",
    spec: "DEKPANEL D",
    title: "Dřevostavby",
    desc: "Panelová dřevostavba DEKPANEL D — suchá, přesná a rychlá montáž bez mokrých procesů.",
    dim: "625 × 250 × 300 mm",
  },
  {
    n: "06",
    code: "PL",
    spec: "PLOTY · GARÁŽE",
    title: "Zděné ploty a garáže",
    desc: "Okrasné i zděné ploty, zděné garáže, omítky, plovoucí podlahy a další samostatné práce.",
    dim: "625 × 250 × 300 mm",
  },
];

const pillars = [
  {
    fig: "36–40 týdnů",
    title: "Stavíme rychle",
    desc: "Díky Ytongu a absenci mokrých procesů se stěhujete prakticky ihned po předání. Ušetříte čas i desetitisíce na úrocích hypotéky.",
  },
  {
    fig: "záruka 3 roky",
    title: "Stavíme kvalitně",
    desc: "Dodržujeme technologické postupy i platné normy, na každou stavbu dohlíží stavební dozor. Dlouhá životnost je priorita.",
  },
  {
    fig: "od 1,5 mil. Kč",
    title: "Stavíme levně",
    desc: "Nejmenší typové domy na klíč začínají pod hranicí 1,5 miliónu korun včetně DPH. Vynikající poměr cena / užitná hodnota.",
  },
  {
    fig: "pevná cena",
    title: "Garantujeme cenu",
    desc: "Cena daná při podpisu smlouvy o dílo se v průběhu kalendářního roku nezmění. Vícepráce řešíme jen po dohodě, dodatkem.",
  },
];

export default function Page() {
  return (
    <main className="ac">
      <header className="ac-top">
        <a className="ac-brand" href="#" aria-label="ARCHEUS CB — stavební firma">
          <span className="ac-brand__mark" aria-hidden="true" />
          <span className="ac-brand__word">
            ARCHEUS <span className="ac-brand__cb">CB</span>
          </span>
        </a>
        <span className="ac-top__meta">STAVÍME Z YTONGU · OD 2006</span>
      </header>

      <section className="ac-section ac-hero" aria-labelledby="hero-h">
        <div className="ac-hero__grid" aria-hidden="true" />
        <div className="ac-hero__inner">
          <p className="ac-eyebrow">STAVEBNÍ FIRMA — ČESKÉ BUDĚJOVICE, JIŽNÍ ČECHY</p>
          <h1 id="hero-h" className="ac-hero__h">
            <span className="ac-hero__l1">Zděný dům</span>
            <span className="ac-hero__l2">na klíč, hotový za</span>
            <span className="ac-hero__fig">36–40 týdnů</span>
          </h1>
          <p className="ac-hero__lead">
            Stavíme z pórobetonu Ytong — bez mokrých procesů, takže se do domu
            stěhujete prakticky ihned po předání. Rychle, kvalitně a s pevnou
            cenou ze smlouvy o dílo.
          </p>
          <ul className="ac-hero__data">
            <li><b>od 1,5 mil. Kč</b><span>vč. DPH</span></li>
            <li><b>záruka 3 roky</b><span>na stavební práce</span></li>
            <li><b>Nová zelená úsporám</b><span>odborný dodavatel</span></li>
          </ul>
        </div>
      </section>

      <section className="ac-section ac-services" aria-labelledby="srv-h">
        <div className="ac-section__head">
          <p className="ac-eyebrow">NABÍDKA — 06 MODULŮ</p>
          <h2 id="srv-h" className="ac-h2">Co pro vás postavíme</h2>
          <p className="ac-section__sub">
            Každá služba je jeden modul v naší stěně — postavíme celý dům na klíč
            i jednotlivé práce zvlášť. U všech zakázek dostanete odborný
            poradenský servis.
          </p>
        </div>
        <ServiceWall services={services} />
      </section>

      <section className="ac-section ac-trust" aria-labelledby="trust-h">
        <div className="ac-section__head">
          <p className="ac-eyebrow">ZÁRUKY — ČTYŘI JISTOTY</p>
          <h2 id="trust-h" className="ac-h2">Proč stavět s ARCHEUS</h2>
          <p className="ac-section__sub">
            Jsme rodinná stavební firma z Českých Budějovic. Působíme po celé
            republice, doma jsme ale v jižních Čechách. Nosným programem je
            výstavba zděných rodinných domů na klíč a hrubých staveb.
          </p>
        </div>
        <div className="ac-pillars">
          {pillars.map((p, i) => (
            <article key={p.title} className="ac-pillar">
              <span className="ac-pillar__idx">{String(i + 1).padStart(2, "0")}</span>
              <p className="ac-pillar__fig">{p.fig}</p>
              <h3 className="ac-pillar__title">{p.title}</h3>
              <p className="ac-pillar__desc">{p.desc}</p>
            </article>
          ))}
        </div>
        <p className="ac-trust__note">
          <span className="ac-trust__code">Ø</span> Dovedeme váš dům od první
          konzultace přes projektovou dokumentaci a stavební povolení až ke
          kolaudaci — včetně pomoci s hypotékou a výběrem pozemku.
        </p>
      </section>
    </main>
  );
}
