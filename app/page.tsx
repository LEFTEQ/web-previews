const shoeTypes = [
  {
    label: "S1P",
    title: "Do dílny a skladu",
    text: "Lehká pracovní obuv s tužinkou, odolnou podešví a ochranou proti propíchnutí.",
    detail: "Suché provozy · celodenní nošení",
  },
  {
    label: "S3",
    title: "Na stavbu a ven",
    text: "Pevné kotníkové modely, které drží krok v mokru, blátě i na nerovném povrchu.",
    detail: "Voda · terén · chlad",
  },
  {
    label: "O2",
    title: "Pro jistý pohyb",
    text: "Komfortní obuv bez tužinky pro řemesla, servis a práci, kde jste celý den na nohou.",
    detail: "Lehkost · opora · přilnavost",
  },
];

const assurances = [
  ["01", "Správná velikost", "Poradíme s výběrem střihu i rezervou ve špičce. Obuv si můžete osobně vyzkoušet v Hradci Králové."],
  ["02", "Ochrana podle provozu", "Rozlišíme, kdy potřebujete tužinku, odolnost proti propíchnutí, voděodolný svršek nebo protiskluznou podešev."],
  ["03", "Výměna bez nejistoty", "Když velikost nesedne, pomůžeme s rychlou výměnou. Na infolince jsme ve všední dny od 7 do 15 hodin."],
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="CANIS Safety – úvod">
            <span className="wordmark-main">CANIS</span>
            <span className="wordmark-sub">SAFETY / OBUV</span>
          </a>

          <nav className="topnav" aria-label="Hlavní navigace">
            <a href="#obuv">Pracovní obuv</a>
            <a href="#vyber">Jak vybrat</a>
            <a href="tel:800887777">800 887 777</a>
          </nav>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span>Hradec Králové</span> / pracovní a ochranná obuv</p>
            <h1 id="hero-title">
              <span>Jistý</span>
              <strong>krok.</strong>
              <em>Každou směnu.</em>
            </h1>
            <p className="hero-intro">
              Vyberte si pracovní boty podle skutečného provozu — od lehkých polobotek do skladu po pevnou obuv do mokra a terénu.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#obuv">Vybrat pracovní obuv <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="tel:800887777">Poradit se po telefonu</a>
            </div>
          </div>

          <div className="hero-visual">
            <img src="/hero.webp" alt="Detail odolné pracovní obuvi CANIS s protiskluznou podešví" />
            <div className="sole-mark" aria-hidden="true">
              <i></i><i></i><i></i><i></i><i></i>
            </div>
            <div className="image-tag">
              <span>Od špičky</span>
              <b>po podešev</b>
              <small>ochrana, která dává smysl</small>
            </div>
          </div>
        </div>

        <div className="hero-specs" aria-label="Hlavní vlastnosti nabídky">
          <span>Ochranné špičky</span>
          <span>Protiskluzné podešve</span>
          <span>Osobní vyzkoušení</span>
        </div>
      </section>

      <section className="range-section" id="obuv" aria-labelledby="range-title">
        <div className="section-heading">
          <p className="eyebrow"><span>Obuv podle práce</span> / ne podle regálu</p>
          <h2 id="range-title">Co máte<br />pod nohama?</h2>
          <p>Jinou ochranu potřebuje skladník na hladké podlaze, jinou montér venku. Začněte prostředím, ve kterém boty skutečně nosíte.</p>
        </div>

        <div className="range-image">
          <img src="/section-1.webp" alt="Pracovní obuv CANIS připravená pro náročný provoz" />
          <span className="material-note">svršek / ochrana / podešev</span>
        </div>

        <div className="shoe-list">
          {shoeTypes.map((shoe) => (
            <article className="shoe-card" key={shoe.label}>
              <span className="standard">{shoe.label}</span>
              <div>
                <h3>{shoe.title}</h3>
                <p>{shoe.text}</p>
                <small>{shoe.detail}</small>
              </div>
              <span className="card-arrow" aria-hidden="true">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-section" id="vyber" aria-labelledby="trust-title">
        <div className="trust-image">
          <img src="/section-2.webp" alt="Zkoušení pracovní obuvi a kontrola správného usazení na noze" />
          <div className="location-stamp">
            <span>Vyzkoušejte osobně</span>
            <strong>Hradec<br />Králové</strong>
          </div>
        </div>

        <div className="trust-content">
          <p className="eyebrow"><span>Výběr bez pokusů</span> / poradíme konkrétně</p>
          <h2 id="trust-title">Bota musí sedět.<br />Norma nestačí.</h2>
          <p className="trust-lead">Pracovní obuv má chránit, ale nesmí vás po osmi hodinách brzdit. Pomůžeme sladit bezpečnostní třídu, povrch pracoviště i tvar chodidla.</p>

          <div className="assurance-list">
            {assurances.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="service-line">
            <div>
              <small>Zákaznická linka / po–pá 7:00–15:00</small>
              <a href="tel:800887777">800 887 777</a>
            </div>
            <a className="mail-link" href="mailto:eshop@canis.cz">eshop@canis.cz</a>
          </div>
        </div>
      </section>
    </main>
  );
}
