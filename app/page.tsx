import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="cr">
      <header className="cr-nav">
        <a className="cr-mark" href="#top" aria-label="Černý Rytíř — hračkářství a herna, Praha Florenc">
          <span className="cr-mark-piece" aria-hidden="true">♞</span>
          <span className="cr-mark-word">
            <span className="cr-mark-cerny">Černý</span>
            <span className="cr-mark-rytir">Rytíř</span>
          </span>
        </a>
        <nav className="cr-nav-links" aria-label="Hlavní">
          <a href="#pulty">Co u nás najdeš</a>
          <a href="#hrajeme">Herna &amp; turnaje</a>
          <a href="#kontakt">Kde nás najdeš</a>
        </nav>
      </header>

      <section className="cr-hero" id="top">
        <div className="cr-hero-media">
          <img
            src="/hero.webp"
            alt="Rozehraná partie sběratelské karetní hry na stole v prodejně Černý Rytíř"
            className="cr-hero-img"
          />
          <span className="cr-hero-scrim" aria-hidden="true" />
        </div>

        <div className="cr-hero-body">
          <p className="cr-eyebrow">Herna a obchod pro hráče · Praha Florenc</p>
          <h1 className="cr-hero-title">
            Přijď si <em>rozdat</em> partii.
            <span className="cr-hero-sub">Karty, kostky, miniatury a stůl, u kterého se hraje.</span>
          </h1>
          <p className="cr-hero-lede">
            Magic, Pokémon, Warhammer i deskovky. Nekupuješ jen krabici — vejdeš do party,
            co se každý týden schází u nás na Florenci. Booster otevřeš na místě, radu
            dostaneš od lidí, co sami hrají.
          </p>
          <div className="cr-hero-cta">
            <a className="cr-btn cr-btn-primary" href="#hrajeme">Kdy se hraje</a>
            <a className="cr-btn cr-btn-ghost" href="#pulty">Projít pulty</a>
          </div>
        </div>
      </section>

      <section className="cr-shelves" id="pulty" aria-labelledby="pulty-h">
        <div className="cr-section-head">
          <p className="cr-eyebrow">Regály a pulty</p>
          <h2 id="pulty-h" className="cr-h2">Co u nás na pultech najdeš</h2>
          <p className="cr-section-lede">
            Od jedné kusovky po celý Booster Box. Skladem, s poradenstvím a bez toho,
            aby ses proklikával deseti podstránkami.
          </p>
        </div>

        <ul className="cr-shelf-grid">
          {shelves.map((s) => (
            <li key={s.title} className="cr-shelf">
              <span className="cr-shelf-tag">{s.tag}</span>
              <h3 className="cr-shelf-title">{s.title}</h3>
              <p className="cr-shelf-text">{s.text}</p>
              <span className="cr-shelf-meta">{s.meta}</span>
            </li>
          ))}
        </ul>

        <div className="cr-preorder">
          <img
            src="/section-1.webp"
            alt="Čerstvě naskladněné boostery a krabice sběratelských karet připravené k předprodeji"
            className="cr-preorder-img"
          />
          <div className="cr-preorder-body">
            <p className="cr-eyebrow">Právě v předprodeji</p>
            <h3 className="cr-preorder-title">Mega Evolution: Chaos Rising</h3>
            <p className="cr-preorder-text">
              Nový set Pokémon jde do předprodeje a bereme ho po limitech, ať se dostane
              na víc lidí. Booster Box, ETB i Booster Bundle drž na e-shopu — a MTG
              Marvel Super Heroes rovnou vedle.
            </p>
            <dl className="cr-price-list">
              <div className="cr-price-row">
                <dt>Booster Box</dt>
                <dd>4 999 Kč <span>limit 6 ks</span></dd>
              </div>
              <div className="cr-price-row">
                <dt>Elite Trainer Box</dt>
                <dd>1 999 Kč <span>limit 10 ks</span></dd>
              </div>
              <div className="cr-price-row">
                <dt>Booster Bundle</dt>
                <dd>999 Kč <span>limit 10 ks</span></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="cr-play" id="hrajeme" aria-labelledby="hrajeme-h">
        <div className="cr-play-media">
          <img
            src="/section-2.webp"
            alt="Hráči u stolů v herně Černého Rytíře během večerního turnaje"
            className="cr-play-img"
          />
        </div>

        <div className="cr-play-body">
          <p className="cr-eyebrow">Herní kalendář</p>
          <h2 id="hrajeme-h" className="cr-h2">U nás se nejen kupuje. Hraje se.</h2>
          <p className="cr-section-lede">
            Stůl je připravený, energie i podložky máme u sebe. Přines si obaly a doraž —
            zbytek vyřešíme na místě.
          </p>

          <ol className="cr-events">
            <li className="cr-event">
              <span className="cr-event-when">Každé pondělí · 16:00–18:30</span>
              <h3 className="cr-event-title">Cyberpunk jako TCG — otevřený test</h3>
              <p className="cr-event-text">
                Máme Alpha Kit se dvěma starter decky, takže si zahrajete dva naráz.
                Night City čeká, stačí dorazit.
              </p>
            </li>
            <li className="cr-event">
              <span className="cr-event-when">Neděle 5. 7. · registrace 10:30, start 11:00</span>
              <h3 className="cr-event-title">Pokémon Prerelease — Pitch Black</h3>
              <p className="cr-event-text">
                Startovné 600 Kč a v něm Prerelease Kit + 2 boostery na stavbu balíčku.
                Do cen jde 1 booster Pitch Black za každého hráče.
              </p>
            </li>
          </ol>

          <div className="cr-contact" id="kontakt">
            <h3 className="cr-contact-h">Zastav se u nás</h3>
            <ul className="cr-contact-list">
              <li><span>Kde</span> Praha, Florenc</li>
              <li><span>Telefon</span> <a href="tel:+420731164496">731 164 496</a></li>
              <li><span>E-mail</span> <a href="mailto:eshop@cernyrytir.cz">eshop@cernyrytir.cz</a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

type Shelf = { tag: string; title: string; text: string; meta: string };

const shelves: Shelf[] = [
  {
    tag: "01",
    title: "Magic: The Gathering",
    text: "Kusovky, novinky, Commander decky i celé Booster Boxy. Poradíme, co do balíčku a co jen do sbírky.",
    meta: "Kusovky · předprodej · výkup karet",
  },
  {
    tag: "02",
    title: "Pokémon TCG",
    text: "Booster Boxy, ETB, single karty i podložky. Prerelease turnaje děláme u nás dřív, než to řeší celý internet.",
    meta: "Kusovky · turnaje · obaly",
  },
  {
    tag: "03",
    title: "Warhammer 40,000 & AoS",
    text: "Miniatury, barvy a modelářské potřeby. Vezmeš si štětec i box a rozjedeš první armádu.",
    meta: "Miniatury · barvy · storage",
  },
  {
    tag: "04",
    title: "Deskovky & RPG",
    text: "Deskové hry, Dungeons & Dragons, kostky a žetony. Klidně poradíme dárek pro hráče i nehráče.",
    meta: "Deskovky · D&D · dárkové poukazy",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unusedStyle: CSSProperties = {};
