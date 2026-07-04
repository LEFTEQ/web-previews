import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blanka Hladík — jazyky pro dospělé | České Budějovice",
  description:
    "Individuální kurzy angličtiny, němčiny, italštiny a francouzštiny v centru Českých Budějovic. Konverzace, četba příběhů a poctivé opakování slovní zásoby.",
  openGraph: {
    title: "Blanka Hladík — jazyky pro dospělé",
    description:
      "Individuální kurzy angličtiny, němčiny, italštiny a francouzštiny v centru Českých Budějovic. Konverzace před učebnicí.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Učebna v centru Českých Budějovic" }],
  },
};

const languages = [
  { code: "EN", name: "Angličtina", note: "Cambridge ESOL B2" },
  { code: "DE", name: "Němčina", note: "vystudované učitelství" },
  { code: "IT", name: "Italština", note: "CILS, Siena" },
  { code: "FR", name: "Francouzština", note: "DELF" },
];

const method = [
  {
    step: "Domluva",
    title: "Čas si nastavíte sami",
    body: "Kurz běží na pevný, stabilní termín, nebo flexibilně podle toho, jak vám vychází týden. Jednotlivci i malé skupinky.",
  },
  {
    step: "Lekce",
    title: "Mluvíme a čteme příběhy",
    body: "Učebnici otevřeme jen okrajově. V popředí je konverzace a četba — téma i obtížnost si volíte podle své úrovně a chuti.",
  },
  {
    step: "Slova",
    title: "Opakujeme, dokud nesednou",
    body: "Slovní zásobu vracíme tak dlouho, než se uloží do dlouhodobé paměti. Papírové kartičky, nebo appka — jak vám to vyhovuje.",
  },
  {
    step: "Gramatika",
    title: "Po výkladu zpevníme kvízem",
    body: "Nové jevy vysvětlím a hned je upevníme online kvízy, ať to zůstane v hlavě a ne jen na papíře.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Blanka Hladík, jazyková škola">
          <span className="wordmark__name">Blanka Hladík</span>
          <span className="wordmark__sub">jazyky · České Budějovice</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#jazyky">Jazyky</a>
          <a href="#jak">Jak to probíhá</a>
          <a href="#omne">O mně</a>
        </nav>
        <a className="call call--top" href="tel:+420604681913">604&nbsp;681&nbsp;913</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Učebna Blanky Hladík v centru Českých Budějovic, prostor pro individuální výuku jazyků"
            width={1200}
            height={900}
          />
        </div>
        <div className="hero__text">
          <p className="eyebrow">Individuální výuka · čtyři jazyky</p>
          <h1 id="hero-title" className="hero__title">
            Nejdřív <em>mluvit</em>. Učebnici až potom.
          </h1>
          <p className="hero__lede">
            Učím angličtinu, němčinu, italštinu a francouzštinu — jednotlivce a malé
            skupinky. Sejdeme se v učebně v centru Českých Budějovic, otevřeme
            příběh a začneme si povídat.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420604681913">
              Zavolat 604&nbsp;681&nbsp;913
            </a>
            <a className="btn btn--ghost" href="#jak">Jak výuka probíhá</a>
          </div>
          <ul className="hero__strip" aria-label="Vyučované jazyky">
            {languages.map((l) => (
              <li key={l.code}>{l.name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="langs" id="jazyky" aria-labelledby="langs-title">
        <div className="section-head">
          <p className="eyebrow">Co se u mě naučíte</p>
          <h2 id="langs-title">Čtyři jazyky, čtyři certifikace za nimi</h2>
          <p className="section-lede">
            Za každým jazykem stojí zkouška, kterou jsem sama složila — ne jen slib
            na webu.
          </p>
        </div>
        <ul className="langs__grid">
          {languages.map((l) => (
            <li className="langcard" key={l.code}>
              <span className="langcard__code" aria-hidden="true">{l.code}</span>
              <div>
                <h3 className="langcard__name">{l.name}</h3>
                <p className="langcard__note">{l.note}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="method">
          <div className="section-head section-head--tight" id="jak">
            <p className="eyebrow">Jak to probíhá</p>
            <h2>Čtyři kroky, které se v každé lekci vrací</h2>
          </div>
          <ol className="method__list">
            {method.map((m, i) => (
              <li className="method__item" key={m.step}>
                <span className="method__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="method__body">
                  <p className="method__step">{m.step}</p>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about" id="omne" aria-labelledby="about-title">
        <div className="about__media">
          <img
            src="/section-1.webp"
            alt="Blanka Hladík při výuce, práce s příběhem a slovní zásobou"
            width={900}
            height={1100}
          />
        </div>
        <div className="about__text">
          <p className="eyebrow">O mně</p>
          <h2 id="about-title">Vystudovala jsem němčinu. U ní to nezůstalo.</h2>
          <p>
            Jazyky jsou moje vášeň — proto jich učím hned několik. Kromě
            učitelství němčiny jsem držitelkou certifikátů ESOL B2 z Cambridge,
            Open Learning, DELF a CILS ze Sieny.
          </p>
          <p>
            Od roku 2004 spolupracuji se společností Bosch. Vedla jsem měsíční
            kurz němčiny ve Vídni i týdenní kurz češtiny v Horním Rakousku —
            zkušenost z výuky v zahraničí beru s sebou do každé lekce.
          </p>

          <dl className="facts">
            <div className="facts__row">
              <dt>Kde</dt>
              <dd>Učebna v centru Českých Budějovic</dd>
            </div>
            <div className="facts__row">
              <dt>Také v Praze</dt>
              <dd>Každý týden 1–2 dny učím i v Praze</dd>
            </div>
            <div className="facts__row">
              <dt>Pro koho</dt>
              <dd>Jednotlivci a malé skupinky, nároční studenti</dd>
            </div>
          </dl>

          <figure className="prague">
            <img
              src="/section-2.webp"
              alt="Cesta do Prahy — výuka jazyků jeden až dva dny v týdnu"
              width={900}
              height={600}
            />
            <figcaption>
              Studujete v Praze? Domluvíme se — jezdím tam každý týden.
            </figcaption>
          </figure>
        </div>
      </section>

      <a className="call call--float" href="tel:+420604681913" aria-label="Zavolat Blance Hladík">
        <span aria-hidden="true">☎</span> Zavolat
      </a>
    </main>
  );
}
