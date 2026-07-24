import { AiImage } from "./_ui";

function Rosette({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Folklorní růžice — pečeť sládka"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={50} cy={50} r={47} />
      <circle cx={50} cy={50} r={40} strokeDasharray="1.5 4.2" />
      <circle cx={50} cy={50} r={21} />
      <circle cx={50} cy={50} r={6} />
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={`p${i}`} transform={`rotate(${i * 45} 50 50)`}>
          <path d="M50 13 C58.5 25 58.5 34 50 44 C41.5 34 41.5 25 50 13 Z" />
          <circle cx={50} cy={9} r={2.4} />
        </g>
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={`d${i}`} transform={`rotate(${i * 45 + 22.5} 50 50)`}>
          <path d="M50 27 L53 33 L50 39 L47 33 Z" />
        </g>
      ))}
    </svg>
  );
}

const beers = [
  {
    tag: "Stálá produkce",
    badge: "10°",
    name: "Sladař",
    style: "Výčepní světlé",
    desc:
      "Lehké a sladově pitelné. Denní pivo, které nechcete vypít jen jedno — a taky nemusíte.",
    alc: "3,8 %",
    color: "Zlatavá, čirá",
    hop: "Jemná, žíznivá",
  },
  {
    tag: "Stálá produkce",
    badge: "11°",
    name: "Šafář",
    style: "Světlý ležák",
    desc:
      "Vyladěná plnost a klidná hořkost. Poctivý ležák pro večer, kdy má být pivo hlavní věc.",
    alc: "4,6 %",
    color: "Sytě zlatá",
    hop: "Vyvážená, kulatá",
  },
  {
    tag: "První várka · 2016",
    badge: "12°",
    name: "Chmelař",
    style: "Světlý ležák plzeňského typu",
    desc:
      "Naše úplně první pivo z června 2016. Chmelová hořkost, zlatá barva, žádné kompromisy.",
    alc: "5,0 %",
    color: "Hluboká zlatá",
    hop: "Výrazná, chmelová",
  },
];

const timeline = [
  {
    no: "01",
    year: "2015",
    text:
      "Na podzim zakládáme Hanácký pivovar s.r.o. s jediným cílem — rozjet fungující minipivovar v Olomouci.",
  },
  {
    no: "02",
    year: "2016",
    text:
      "Vaříme jako „létající“ pivovar na pronajaté technologii. V červnu stáčíme první várku — 12° světlý Chmelař.",
  },
  {
    no: "03",
    year: "2017",
    text:
      "Dokončujeme rekonstrukci na Šlechtitelů v Holici a v říjnu poprvé vaříme na vlastních kotlích.",
  },
];

const ingredients = ["Chmel", "Slad", "Kvasinky", "Voda"];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Hanácký pivovar — úvod">
          <Rosette className="brand__seal" />
          <span className="brand__word">
            <span className="brand__line">Hanácký</span>
            <span className="brand__line brand__line--sub">pivovar</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a className="nav__link" href="#katalog">Piva</a>
          <a className="nav__link" href="#pivovar">O pivovaru</a>
          <a className="nav__link" href="#suroviny">Suroviny</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__media">
          <AiImage
            className="aiimg-fill"
            src="/hero.webp"
            alt="Čerstvě natočené pivo z Hanáckého pivovaru"
          />
        </div>
        <div className="hero__pour" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">Minipivovar · Olomouc-Holice · od 2017</p>
          <h1 className="hero__title">
            <span>Hanácký</span>
            <span className="hero__title--accent">pivovar</span>
          </h1>
          <p className="hero__lede">
            Vaříme na vlastních kotlích v Holici. Tři stálá piva se starými
            řemeslnými jmény — Sladař, Šafář, Chmelař — a k tomu várky, na které
            zrovna máme chuť.
          </p>
          <div className="hero__actions">
            <a className="btn" href="#katalog">Prohlédnout piva</a>
            <span className="hero__seal">
              <Rosette className="hero__seal-mark" />
              <span>Dej Bůh štěstí</span>
            </span>
          </div>
        </div>
      </section>

      <section className="section catalog" id="katalog" aria-labelledby="katalog-h">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Katalog piv</p>
            <h2 className="section__title" id="katalog-h">
              Každé pivo jako popisný lístek
            </h2>
            <p className="section__intro">
              Stupňovitost ve folklorním kolečku, styl, síla i charakter chmele —
              napsané tak, abyste u výčepu věděli, do čeho jdete.
            </p>
          </div>

          <div className="specs">
            {beers.map((b) => (
              <article className="spec" key={b.name}>
                <div className="spec__top">
                  <span className="spec__tag">{b.tag}</span>
                  <Rosette className="spec__seal" />
                </div>
                <div className="spec__badge">{b.badge}</div>
                <h3 className="spec__name">{b.name}</h3>
                <p className="spec__style">{b.style}</p>
                <p className="spec__desc">{b.desc}</p>
                <dl className="spec__meta">
                  <div>
                    <dt>Alkohol</dt>
                    <dd>{b.alc}</dd>
                  </div>
                  <div>
                    <dt>Barva</dt>
                    <dd>{b.color}</dd>
                  </div>
                  <div>
                    <dt>Chmel</dt>
                    <dd>{b.hop}</dd>
                  </div>
                </dl>
              </article>
            ))}

            <article className="spec spec--wide">
              <div className="spec__widemedia">
                <AiImage
                  className="aiimg-fill"
                  src="/section-1.webp"
                  alt="Várka piva z jiných regionů v Hanáckém pivovaru"
                />
              </div>
              <div className="spec__widebody">
                <div className="spec__top">
                  <span className="spec__tag">Sezónní várky</span>
                  <Rosette className="spec__seal" />
                </div>
                <h3 className="spec__name">Ale · Stout · IPA</h3>
                <p className="spec__desc">
                  Nevaříme jen klasiku pro Hanou. Když nás popadne chuť zkoušet,
                  přijdou na řadu piva z jiných regionů — svrchně kvašené ale,
                  tmavý stout i pořádně nachmelená IPA. Co je zrovna na čepu, ptejte
                  se u nás.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section story" id="pivovar" aria-labelledby="story-h">
        <div className="wrap story__grid">
          <div className="story__media">
            <AiImage
              className="aiimg-fill"
              src="/section-2.webp"
              alt="Varna Hanáckého pivovaru v Olomouci-Holici"
            />
          </div>
          <div className="story__body">
            <p className="eyebrow">O pivovaru</p>
            <h2 className="section__title" id="story-h">
              Od létajícího pivovaru k vlastním kotlům
            </h2>
            <p className="story__text">
              Začínali jsme na pronajaté technologii, abychom si sáhli na řemeslo
              dřív, než bude stát varna. Po rekonstrukci objektu v Holici se ale
              všechno přesunulo k nám domů — a od října 2017 vaříme výhradně na
              svém.
            </p>
            <ol className="timeline">
              {timeline.map((t) => (
                <li className="timeline__item" key={t.no}>
                  <span className="timeline__no">{t.no}</span>
                  <div>
                    <span className="timeline__year">{t.year}</span>
                    <p className="timeline__text">{t.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="story__sign">
              <Rosette className="story__seal" />
              <span>
                S pivovarským pozdravem „Dej Bůh štěstí“,
                <br />
                <strong>Pavel Hanuštiak</strong>, sládek pivovaru
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="section grist" id="suroviny" aria-labelledby="grist-h">
        <div className="wrap">
          <p className="eyebrow eyebrow--center">Čtyři suroviny, nic navíc</p>
          <h2 className="section__title section__title--center" id="grist-h">
            Z čeho to vaříme
          </h2>
          <ul className="grist__list">
            {ingredients.map((g, i) => (
              <li className="grist__item" key={g}>
                <span className="grist__no">{`0${i + 1}`}</span>
                <span className="grist__name">{g}</span>
              </li>
            ))}
          </ul>
          <p className="grist__note">
            Poctivá práce, žádné zkratky. Když je hotovo, čeká vás na Šlechtitelů
            v Olomouci-Holici čerstvá várka.
          </p>
        </div>
      </section>
    </main>
  );
}
