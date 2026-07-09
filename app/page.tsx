export default function Page() {
  const rituals = [
    {
      no: "01",
      kicker: "Vířivky",
      title: "Voda, která uvolní záda i mysl",
      body:
        "Účinná masáž v pohodlí domova, kdykoli chcete. Každou vířivku stavíme na zakázku — od tvaru sedáků po rozmístění trysek. Poznáte spa, které sedne přesně vám.",
      metric: "3–7 míst",
      note: "modely LoungeiN, ColumbaiN, OrioniN a další",
      img: "/section-1.webp",
      alt: "Domácí vířivka USSPA s vodní hladinou a masážními tryskami",
    },
    {
      no: "02",
      kicker: "Swim Spa",
      title: "Plavání na zahradě po celý rok",
      body:
        "Udržitelná alternativa bazénu. Plavete v protiproudu, koupete se i relaxujete — v zimě i v létě. Chytrá izolace drží spotřebu vody a energie nízko.",
      metric: "celoročně",
      note: "Swim Spa XL i M, na míru majiteli",
      img: "/section-2.webp",
      alt: "Celoroční bazén swim spa USSPA s protiproudem na zahradě",
    },
  ]

  const facts = [
    { big: "1995", small: "rodinná firma od tohoto roku" },
    { big: "30", small: "let poctivého řemesla" },
    { big: "20+", small: "zemí od Alicante po Zanzibar" },
    { big: "100", small: "lidí, kteří spa tvoří rukama" },
  ]

  return (
    <main className="usp">
      <header className="usp-topbar">
        <a className="usp-wordmark" href="#" aria-label="USSPA, domů">
          <span className="usp-mark">US</span>
          <span className="usp-mark usp-mark--fill">SPA</span>
        </a>
        <p className="usp-locale">Showroom Brno · vířivky &amp; swim spa</p>
      </header>

      <section className="usp-hero" aria-labelledby="hero-title">
        <img
          className="usp-hero__img"
          src="/hero.webp"
          alt="Klidná hladina vířivky USSPA s pravidelnou hrou vodní plochy"
          width={1600}
          height={1000}
        />
        <div className="usp-hero__panel">
          <p className="usp-eyebrow">Vyrobeno v orlickém podhůří · showroom v Brně</p>
          <h1 id="hero-title" className="usp-hero__title">
            Ticho na hladině.
            <br />
            <span className="usp-hero__accent">Odpočinek na zakázku.</span>
          </h1>
          <p className="usp-hero__lead">
            Přes 30 let stavíme prémiové vířivky a celoroční swim spa. Každý
            kus vzniká od prvního nápadu až po ruční výrobu — a putuje rovnou
            na vaši zahradu.
          </p>
          <div className="usp-hero__actions">
            <a className="usp-btn" href="#showroom">Navštívit showroom Brno</a>
            <a className="usp-btn usp-btn--ghost" href="#nabidka">Objevit modely</a>
          </div>
        </div>
        <div className="usp-waterline" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
      </section>

      <section id="nabidka" className="usp-offer" aria-labelledby="offer-title">
        <div className="usp-offer__head">
          <p className="usp-eyebrow">Co pro vás postavíme</p>
          <h2 id="offer-title" className="usp-section-title">
            Dva způsoby, jak si domů pustit vodu
          </h2>
        </div>

        <div className="usp-rituals">
          {rituals.map((r) => (
            <article key={r.no} className="usp-ritual">
              <div className="usp-ritual__media">
                <img
                  src={r.img}
                  alt={r.alt}
                  loading="lazy"
                  width={900}
                  height={620}
                />
                <span className="usp-ritual__depth">{r.metric}</span>
              </div>
              <div className="usp-ritual__body">
                <span className="usp-ritual__no">{r.no}</span>
                <p className="usp-eyebrow">{r.kicker}</p>
                <h3 className="usp-ritual__title">{r.title}</h3>
                <p className="usp-ritual__text">{r.body}</p>
                <p className="usp-ritual__note">{r.note}</p>
                <a className="usp-link" href="#showroom">
                  Prohlédnout naživo <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="usp-profi">
          <div>
            <p className="usp-eyebrow">03 · Profi Spa</p>
            <h3 className="usp-profi__title">Wellness, kam se hosté vracejí</h3>
          </div>
          <p className="usp-profi__text">
            Vířivky pro komerční provoz splňují všechny normy a pomůžeme vám i
            se získáním hygienických schválení. Od modelu přes barvy až po
            technologie úpravy vody — se vším poradíme.
          </p>
        </div>
      </section>

      <section id="showroom" className="usp-about" aria-labelledby="about-title">
        <div className="usp-about__intro">
          <p className="usp-eyebrow">Kdo jsme</p>
          <h2 id="about-title" className="usp-section-title usp-section-title--light">
            Nejsme jen firma. Jsme rodina, která má vodu v ruce.
          </h2>
          <p className="usp-about__lead">
            Od roku 1995 tvoříme svět kvalitního domácího odpočinku. Spa u nás
            vznikají od prvního nápadu až po výrobu v orlickém podhůří — a
            odsud putují do více než dvaceti zemí světa. V brněnském showroomu
            si je můžete osahat, sednout do nich a vybrat si klidně podle
            barvy vody.
          </p>
        </div>

        <ol className="usp-facts">
          {facts.map((f) => (
            <li key={f.big} className="usp-fact">
              <span className="usp-fact__big">{f.big}</span>
              <span className="usp-fact__small">{f.small}</span>
            </li>
          ))}
        </ol>

        <p className="usp-about__foot">
          Tisíce spokojených zákazníků · trvalá péče o každou spa · showroomy
          Praha, Brno, Ostrava, Dolní Dobrouč
        </p>
      </section>
    </main>
  )
}
