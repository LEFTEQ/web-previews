import { AiImage } from "./_ui";

const chips = [
  { id: "B1", name: "Primer báze", cls: "is-primer" },
  { id: "R02", name: "Oxid červený", cls: "is-red" },
  { id: "Y03", name: "Oxid žlutý", cls: "is-yellow" },
  { id: "B04", name: "Ftalo modrá", cls: "is-blue" },
  { id: "K05", name: "Čerň", cls: "is-ink" },
];

const nabidka = [
  {
    kicker: "Naše řemeslo",
    title: "Tónovací centrum",
    body: "Namícháme interiérovou i fasádní barvu na jakýkoli odstín. Přineste vzorek ze zdi, útržek tapety nebo kód ze vzorníku — z odstínu uděláme plechovku, na počkání.",
  },
  {
    kicker: "Do interiéru",
    title: "Malířské barvy",
    body: "Otěruvzdorné a omyvatelné barvy do obýváku, kuchyně i vlhka. Poradíme, kolik jich na místnost padne, ať nekupujete zbytečně.",
  },
  {
    kicker: "Na fasádu",
    title: "Fasádní barvy a omítky",
    body: "Silikátové i akrylátové systémy, penetrace a omítky. Řekneme vám, co sedne na váš podklad a jak dlouho to vydrží.",
  },
  {
    kicker: "Na dřevo a kov",
    title: "Laky a lazury",
    body: "Lazury na plot i pergolu, laky na nábytek, základy a vrchní emaily na kov. Matně, hedvábně i do lesku.",
  },
  {
    kicker: "Do ruky",
    title: "Štětce, válečky, nářadí",
    body: "Prověřené štětce a válečky, malířské krytí, brusivo, špachtle a vše, bez čeho práce nezačne.",
  },
  {
    kicker: "Zdarma",
    title: "Odborné poradenství",
    body: "Poradíme podklad, postup i spotřebu. Nejsme e‑shop bez tváře — ptejte se rovnou u pultu.",
  },
];

const trust = [
  { h: "Férové jednání", p: "Osobní přístup a rada podle toho, co opravdu potřebujete — ne podle toho, co je skladem navíc." },
  { h: "Prověřené značky", p: "Materiály, které máme sami vyzkoušené a za kterými si stojíme." },
  { h: "Spolehlivost", p: "Domluvené odstíny sedí a termíny držíme. Výdejna zvládne i vaše balíky." },
];

export default function Page() {
  return (
    <div className="page">
      <aside className="spine" aria-hidden="true">
        {chips.map((c) => (
          <div key={c.id} className={`chip ${c.cls}`}>
            <span className="chip__fill" />
            <span className="chip__label">
              <span className="chip__id">{c.id}</span>
              {c.name}
            </span>
          </div>
        ))}
      </aside>

      <div className="content">
        <header className="topbar">
          <a className="wordmark" href="#" aria-label="KLEMA BARVY, domů">
            <span className="wordmark__k">KLEMA</span>
            <span className="wordmark__b">
              BARVY<i className="wordmark__dot" aria-hidden="true" />
            </span>
          </a>
          <a className="topbar__tel" href="tel:+420608666649">
            <span>Zavolat do obchodu</span>
            +420 608 666 649
          </a>
        </header>

        <section className="section hero" aria-labelledby="hero-h">
          <p className="hero__eyebrow">Lakýrnické a malířské potřeby · Pardubice</p>
          <h1 className="hero__title" id="hero-h">
            <span className="hero__line l1">MÍCHÁME</span>
            <span className="hero__line l2">
              VÁM BARVU
              <span className="hero__swatch" aria-hidden="true" />
            </span>
            <span className="hero__line l3">NA MÍRU</span>
          </h1>
          <p className="hero__sub">
            Tónovací centrum v areálu JIPu ve Starém Hradišti u Pardubic. Z odstínu na
            vzorníku uděláme plechovku — a k tomu štětce, válečky, laky i poradenství,
            které vydrží.
          </p>
          <ul className="hero__facts">
            <li>Staré Hradiště u Pardubic</li>
            <li>Po–Pá 7:00–17:00</li>
            <li>Míchání na počkání</li>
          </ul>
        </section>

        <section className="section offer" aria-labelledby="offer-h">
          <div className="section__head">
            <span className="index index--red">01</span>
            <h2 id="offer-h">Co u nás pořídíte</h2>
            <p className="section__lead">
              Malý obchod s velkým vzorníkem. Většinu odstínů namícháme, zbytek poradíme.
            </p>
          </div>
          <div className="offer__grid">
            {nabidka.map((n, i) => (
              <article key={n.title} className={`card${i === 0 ? " card--feature" : ""}`}>
                <span className="card__kicker">{n.kicker}</span>
                <h3 className="card__title">{n.title}</h3>
                <p className="card__body">{n.body}</p>
              </article>
            ))}
          </div>
          <p className="offer__note">
            Zároveň jsme výdejní místo <strong>PPL, DPD a Zásilkovny</strong> — balík
            vyřídíte na čísle <a href="tel:+420777920648">+420 777 920 648</a>.
          </p>
        </section>

        <section className="section about" aria-labelledby="about-h">
          <div className="section__head">
            <span className="index index--blue">02</span>
            <h2 id="about-h">O nás &amp; kdy máme otevřeno</h2>
            <p className="section__lead">
              KLEMA BARVY je kamenný obchod, kde vám odstín namíchá člověk, který ho
              míchá každý den. Malování ve velkém? Ozvěte se na{" "}
              <a href="https://klema-malby.cz">klema‑malby.cz</a>.
            </p>
          </div>

          <div className="trust">
            {trust.map((t) => (
              <div key={t.h} className="trust__item">
                <h3>{t.h}</h3>
                <p>{t.p}</p>
              </div>
            ))}
          </div>

          <div className="contact">
            <div className="contact__block hours">
              <h3>Otevírací doba</h3>
              <dl>
                <div><dt>Pondělí – Pátek</dt><dd>7:00 – 17:00</dd></div>
                <div><dt>Sobota – Neděle</dt><dd>Zavřeno</dd></div>
              </dl>
            </div>
            <div className="contact__block">
              <h3>Kde nás najdete</h3>
              <address>
                KLEMA BARVY s.r.o.<br />
                Hradišťská 407, Staré Hradiště<br />
                areál JIPu, u Pardubic<br />
                <span className="contact__ico">IČO 22244298</span>
              </address>
            </div>
            <div className="contact__block">
              <h3>Spojení</h3>
              <ul className="contact__list">
                <li><span>Obchod</span><a href="tel:+420608666649">+420 608 666 649</a></li>
                <li><span>Výdejna balíků</span><a href="tel:+420777920648">+420 777 920 648</a></li>
                <li><span>E‑mail</span><a href="mailto:obchod@klema-barvy.cz">obchod@klema-barvy.cz</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
