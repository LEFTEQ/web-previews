import { ExperienceCounter } from "./motion";

const services = [
  {
    title: "Generální dodávky staveb",
    body: "Vezmeme stavbu od výkopu po kolaudaci. Jeden dodavatel, jedna odpovědnost, jeden termín — vy řešíte záměr, my vše ostatní.",
  },
  {
    title: "Rekonstrukce a opravy objektů",
    body: "Vracíme do provozu bytové domy, školy i provozovny. Pracujeme i v obydlených objektech s ohledem na provoz a sousedy.",
  },
  {
    title: "Bytové a občanské stavby",
    body: "Novostavby bytových domů a občanské vybavenosti v Ústí nad Labem a okolí — od základů po předání s dokumentací.",
  },
  {
    title: "Průmyslové objekty",
    body: "Haly, provozní a technické zázemí. Realizujeme práce malého i středního rozsahu s vlastními týmy.",
  },
  {
    title: "Zateplovací systémy",
    body: "Certifikovaná aplikace Weber Terranova, MultiTherm BASF a Baumit. Zateplíme fasádu tak, aby dům šetřil desítky let.",
  },
];

const trust = [
  {
    title: "Stabilní společnost",
    body: "Přes dvě desetiletí na trhu, s.r.o. s pevnými kořeny v regionu. Spolehlivost, se kterou počítá i banka a projektant.",
  },
  {
    title: "Dodání v termínu",
    body: "Harmonogram držíme. Přesné plánování a vlastní kapacity znamenají předání stavby, na které se dá spolehnout.",
  },
  {
    title: "Řízená kvalita ISO 9001",
    body: "Systém řízení jakosti ČSN EN ISO 9001 máme certifikovaný od roku 2004. Kvalita je u nás postup, ne slib.",
  },
  {
    title: "Prověření specialisté",
    body: "Vlastní zaměstnanci a osvědčené specializované firmy. Na každý řemeslný detail dohlíží někdo, kdo za něj ručí.",
  },
];

export default function Page() {
  return (
    <main className="setout">
      <header className="mast">
        <a className="wordmark" href="#uvod" aria-label="UM plus, úvod">
          <span className="wordmark__um">UM</span>
          <span className="cross wordmark__cross" aria-hidden="true" />
        </a>
        <nav className="mast__nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#proc">Proč my</a>
          <a className="mast__cta" href="#poptavka">Poptat stavbu</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="ruler ruler--top" aria-hidden="true" />
        <div className="ruler ruler--left" aria-hidden="true" />

        <span className="cross hero__cross hero__cross--a" aria-hidden="true" />
        <span className="cross hero__cross hero__cross--b" aria-hidden="true" />
        <span className="cross hero__cross hero__cross--c" aria-hidden="true" />
        <span className="cross hero__cross hero__cross--d" aria-hidden="true" />

        <div className="hero__inner">
          <p className="eyebrow hero__eyebrow">
            <span>Generální dodavatel staveb</span>
            <span className="eyebrow__coord">50°39′ N &middot; 14°02′ E &middot; Ústí nad Labem</span>
          </p>
          <h1 className="hero__title">
            <span className="hero__line">Stavíme důvěru,</span>
            <span className="hero__line hero__line--accent">budujeme kvalitu</span>
          </h1>
          <p className="hero__lead">
            Realizujeme pozemní stavby od bytových a občanských objektů po průmyslové haly —
            generální dodávky, rekonstrukce i opravy. Malý i střední rozsah, vlastní týmy,
            prověření specialisté. Nejdřív to narýsujeme, pak to postavíme.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#sluzby">Poptat stavbu</a>
            <a className="btn btn--ghost" href="#proc">Prohlédnout reference</a>
          </div>
        </div>
      </section>

      <section className="section section--services" id="sluzby">
        <div className="section__head">
          <span className="coord">A1</span>
          <h2 className="section__title">Co stavíme</h2>
          <p className="section__note">
            Pozemní stavitelství v celém rozsahu. Vyberte, s čím přicházíte — zbytek nakreslíme spolu.
          </p>
        </div>
        <ul className="grid grid--services">
          {services.map((s) => (
            <li className="card" key={s.title}>
              <span className="cross card__cross" aria-hidden="true" />
              <h3 className="card__title">{s.title}</h3>
              <p className="card__body">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section--trust" id="proc">
        <div className="section__head">
          <span className="coord coord--light">B2</span>
          <h2 className="section__title">Proč právě my</h2>
          <p className="section__note section__note--light">
            Certifikáty, termíny a vlastní lidé. Důvěra se staví stejně poctivě jako nosná zeď.
          </p>
        </div>

        <div className="figure">
          <span className="cross figure__cross" aria-hidden="true" />
          <span className="figure__num">
            <ExperienceCounter target={20} />
          </span>
          <span className="figure__label">let na stavbách v Ústeckém kraji</span>
          <span className="figure__sub">250+ dokončených projektů &middot; ISO 9001 od roku 2004</span>
        </div>

        <ul className="grid grid--trust">
          {trust.map((t) => (
            <li className="trust-item" key={t.title}>
              <span className="cross trust-item__cross" aria-hidden="true" />
              <h3 className="trust-item__title">{t.title}</h3>
              <p className="trust-item__body">{t.body}</p>
            </li>
          ))}
        </ul>

        <p className="certs">
          Certifikované systémy: <strong>Weber Terranova</strong> &middot; <strong>MultiTherm BASF</strong> &middot; <strong>Baumit</strong>
        </p>
      </section>
    </main>
  );
}
