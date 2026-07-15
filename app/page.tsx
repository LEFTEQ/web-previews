const HERO_COLS = 8;
const HERO_ROWS = 4;

const heroCells = Array.from({ length: HERO_COLS * HERO_ROWS }, (_, i) => i % HERO_COLS);

const audiences = [
  {
    tag: "Pro domácnosti",
    title: "Fotovoltaika na míru vaší střeše",
    body: "Rodinné domy i chaty — panely, střídač, baterie a chytré řízení. Vyrábějte vlastní proud a ohřívejte vodu ze slunce, papíry i dotaci vyřídíme za vás.",
  },
  {
    tag: "Pro firmy a obce",
    title: "Snižte náklady na provoz elektrárnou na klíč",
    body: "Výrobní haly, provozovny, bytové domy i obecní budovy. Větší instalace na střechu i pozemek, které se vám vrátí v účtech za energii.",
  },
];

const services = [
  { code: "A1", title: "Fotovoltaika na klíč", body: "Návrh, montáž, revize a připojení k distribuci — vše od jedné firmy z Budějovic." },
  { code: "A2", title: "Ohřev vody ze slunce", body: "Menší sestava jen na teplou vodu. Levný start pro každou domácnost." },
  { code: "A3", title: "Bateriové úložiště", body: "Přebytky z poledne uložíme na večer. Méně nakupujete draze ze sítě." },
  { code: "B1", title: "FVE pro firmy a obce", body: "Řešení pro haly, provozy a bytové domy včetně statiky a projektu." },
  { code: "B2", title: "Servis a revize", body: "Vlastní servisní oddělení. Revize, opravy i podpora — i po záruce." },
  { code: "B3", title: "Zateplení a úspory", body: "Snížíme tepelné ztráty domu, ať vyrobený proud neuniká zdmi a střechou." },
];

const reasons = [
  {
    label: "Cena",
    title: "Nejlepší poměr ceny a kvality",
    body: "Stabilita velké firmy s flexibilitou lokálního dodavatele. Vlastní týmy z jižních Čech a férové ceny bez skrytých položek.",
  },
  {
    label: "Servis",
    title: "Montáží to u nás nekončí",
    body: "Díky servisnímu oddělení se máte vždy na koho obrátit. Zajistíme revize, opravy i podporu, a to i po uplynutí záruky.",
  },
  {
    label: "Podmínky",
    title: "Nic neplatíte, dokud smlouva neplatí",
    body: "Neplatíte nic, dokud není schválena smlouva s distributorem. Elektrárnu realizujeme do měsíce a administrativu i dotaci vyřídíme za vás.",
  },
];

const reviews = [
  {
    name: "Vladimír Sedlar",
    text: "Vše mi bylo velmi přesně vysvětleno. Realizace proběhla bez problémů a ještě po sobě vše uklidili. Už vyrábím elektřinu.",
  },
  {
    name: "Lenka Fanatová",
    text: "Dodrželi dohodnuté termíny, práci odvedli dobře a rychle. Administrativa také v pořádku. Není co vytknout, děkuji celé firmě.",
  },
  {
    name: "Jaroslav Kougl",
    text: "Od A až do Z perfektní. Firma zařídila vše, včetně dotací. Pracovníci odvedli čistou, rychlou a profesionální práci.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="hero__grid" aria-hidden="true">
          {heroCells.map((col, i) => (
            <span
              key={i}
              className="cell"
              style={{ animationDelay: `${col * 70}ms` }}
            />
          ))}
        </div>
        <div className="hero__veil" aria-hidden="true" />

        <div className="hero__inner">
          <div className="topbar">
            <a className="brand" href="#" aria-label="Sun construct, úvod">
              <span className="brand__mark" aria-hidden="true">
                <i /><i /><i /><i />
              </span>
              <span className="brand__word">Sun construct</span>
            </a>
            <a className="topbar__tel" href="tel:+420722938484">+420 722 938 484</a>
          </div>

          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__cell" aria-hidden="true" />
              Fotovoltaika na klíč · České Budějovice
            </p>
            <h1 className="hero__title">
              Slunce nad jižními Čechami.<br />
              <span className="amber">Proud</span> ve vaší zásuvce.
            </h1>
            <p className="hero__lede">
              Navrhneme, postavíme a připojíme fotovoltaiku přesně na vaši
              střechu. Od kalkulace po revizi — panely, baterie i všechny
              papíry a dotace vyřídíme za vás.
            </p>
            <div className="hero__actions">
              <a className="btn btn--amber" href="#kalkulace">Chci kalkulaci zdarma</a>
              <a className="btn btn--ghost" href="tel:+420722938484">Zavolat +420 722 938 484</a>
            </div>
            <p className="hero__meta">
              Smluvní partner E.ON · Člen Solární asociace · 7 000+ instalací
            </p>
          </div>
        </div>
      </header>

      <section className="band" aria-labelledby="sluzby" id="kalkulace">
        <div className="wrap">
          <div className="band__head panel-ghost">
            <p className="eyebrow">
              <span className="eyebrow__cell" aria-hidden="true" />
              Co pro vás postavíme
            </p>
            <h2 id="sluzby" className="band__title">
              Jedna elektrárna, poskládaná z toho, co opravdu potřebujete.
            </h2>
          </div>

          <div className="split">
            {audiences.map((a) => (
              <article className="split__cell" key={a.tag}>
                <p className="split__tag">{a.tag}</p>
                <h3 className="split__title">{a.title}</h3>
                <p className="split__body">{a.body}</p>
              </article>
            ))}
          </div>

          <div className="cards">
            {services.map((s) => (
              <article className="card" key={s.code}>
                <span className="card__code" aria-hidden="true">{s.code}</span>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__body">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--sky" aria-labelledby="proc">
        <div className="wrap">
          <div className="band__head panel-ghost">
            <p className="eyebrow">
              <span className="eyebrow__cell" aria-hidden="true" />
              Proč Sun construct
            </p>
            <h2 id="proc" className="band__title">
              Lokální firma z Budějovic, která za vás vyřídí i to nudné.
            </h2>
          </div>

          <div className="counter panel-ghost">
            <span className="counter__num">7 000+</span>
            <span className="counter__label">
              realizovaných instalací a spokojených klientů v jižních Čechách
            </span>
            <ul className="counter__badges">
              <li>Smluvní partner E.ON</li>
              <li>Člen Solární asociace</li>
              <li>Dotace vyřídíme za vás</li>
            </ul>
          </div>

          <div className="reasons">
            {reasons.map((r) => (
              <article className="reason" key={r.label}>
                <p className="reason__label">{r.label}</p>
                <h3 className="reason__title">{r.title}</h3>
                <p className="reason__body">{r.body}</p>
              </article>
            ))}
          </div>

          <div className="reviews">
            <p className="reviews__score">
              <strong>4,6 / 5</strong> průměrné hodnocení zákazníků
            </p>
            <div className="reviews__grid">
              {reviews.map((rv) => (
                <figure className="review" key={rv.name}>
                  <blockquote>„{rv.text}“</blockquote>
                  <figcaption>{rv.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
