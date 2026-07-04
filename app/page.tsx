import type { CSSProperties } from "react";

export default function Page() {
  const revize = [
    {
      code: "§ 1",
      title: "Výchozí revize",
      note: "nová instalace před připojením",
      body: "Nová elektroinstalace, přístavba, rekonstrukce nebo rozšíření — výchozí revizi udělám dřív, než se cokoli připojí k síti. Vystavím revizní zprávu, kterou potřebujete pro kolaudaci i pojišťovnu.",
    },
    {
      code: "§ 2",
      title: "Periodická revize",
      note: "provoz ve stanovených lhůtách",
      body: "Za bezpečné zařízení odpovídá provozovatel. Ohlídám vám lhůty podle prostředí a typu objektu a přijdu dřív, než revize propadne — bytový dům, kancelář i výrobní hala.",
    },
    {
      code: "§ 3",
      title: "Spotřebiče a nářadí",
      note: "ČSN 33 1600 ed. 2",
      body: "Ruční elektrické nářadí i spotřebiče na pracovišti podle ČSN 33 1600 ed. 2. Změřím, označím štítkem a dostanete přehledný soupis, co je v pořádku a co k výměně.",
    },
    {
      code: "§ 4",
      title: "Hromosvody (LPS)",
      note: "ČSN EN 62305",
      body: "Výchozí i periodická revize hromosvodů dle ČSN EN 62305 a ČSN 33 1500 — včetně kontroly po zásahu bleskem. Změřím zemní odpor a zkontroluji celou soustavu.",
    },
  ];

  return (
    <main className="page">
      <header className="nav" aria-label="Hlavní">
        <a className="wordmark" href="#" aria-label="Josef Meisner, revize elektro">
          <span className="wordmark__phase" aria-hidden="true">L1</span>
          <span className="wordmark__name">MEISNER</span>
          <span className="wordmark__sub">revize elektro</span>
        </a>
        <a className="nav__phone" href="tel:+420605219934">+420 605 219 934</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid" aria-hidden="true">
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} style={{ "--i": i } as CSSProperties} />
          ))}
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">
            <span className="live" aria-hidden="true" /> Praha a okolí · pod napětím od roku 1998
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__line hero__line--a">Revizní zpráva,</span>
            <span className="hero__line hero__line--b">na kterou se</span>
            <span className="hero__line hero__line--c">
              dá <em>spolehnout.</em>
            </span>
          </h1>

          <p className="hero__lead">
            Josef Meisner — revizní technik pro elektroinstalace, spotřebiče,
            ruční nářadí i hromosvody. Přijedu, změřím, sepíšu srozumitelnou
            zprávu a řeknu vám rovnou, co je bezpečné a co ne.
          </p>

          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420605219934">
              Zavolat 605 219 934
            </a>
            <a className="btn btn--ghost" href="mailto:josefmeisner@email.cz">
              Napsat na e-mail
            </a>
          </div>

          <dl className="hero__meta">
            <div>
              <dt>Norma</dt>
              <dd>ČSN 33 1600 ed. 2 · EN 62305</dd>
            </div>
            <div>
              <dt>Výstup</dt>
              <dd>revizní zpráva do 3 dnů</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Praha 7, Strojnická</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section__head">
          <p className="eyebrow">Co revizuji</p>
          <h2 id="services-title" className="section__title">
            Čtyři druhy revizí, jeden postup: změřit, vyhodnotit, doložit.
          </h2>
        </div>

        <ol className="cards">
          {revize.map((r) => (
            <li className="card" key={r.code}>
              <span className="card__code" aria-hidden="true">
                {r.code}
              </span>
              <h3 className="card__title">{r.title}</h3>
              <p className="card__note">{r.note}</p>
              <p className="card__body">{r.body}</p>
            </li>
          ))}
        </ol>

        <div className="install">
          <img
            src="/section-1.webp"
            alt="Rozvaděč a měření elektroinstalace při revizi"
            className="install__img"
            loading="lazy"
          />
          <div className="install__text">
            <p className="eyebrow">A ještě instalace</p>
            <h3>Silnoproud i slaboproud — od projektu po servis</h3>
            <p>
              Kompletní elektroinstalace v domech, bytech a kancelářích:
              projektová dokumentace, montáž rozvodů, servis i údržba. Mám za
              sebou vedení dodávek na velkých stavbách — administrativní a
              obchodní centra i kancelářské budovy.
            </p>
          </div>
        </div>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="about__media">
          <img
            src="/section-2.webp"
            alt="Josef Meisner při kontrole hromosvodu"
            className="about__img"
            loading="lazy"
          />
        </div>
        <div className="about__body">
          <p className="eyebrow">Proč revize a proč u mě</p>
          <h2 id="about-title" className="about__title">
            Za elektrické zařízení odpovídá jeho provozovatel. Tu odpovědnost
            vám pomůžu unést.
          </h2>
          <p className="about__text">
            Závada na elektroinstalaci bývá jednou z nejčastějších příčin
            požáru. Pravidelná revize je soubor úkonů, jehož výsledkem je
            revizní zpráva — doklad, že zařízení je bezpečné a odpovídá
            normám. Píšu ji tak, aby jí rozuměl i ten, kdo není elektrikář.
          </p>

          <ul className="trust">
            <li>
              <strong>Jeden technik od začátku do konce</strong>
              <span>voláte a jednáte přímo s tím, kdo revizi provede</span>
            </li>
            <li>
              <strong>Firmy i domácnosti</strong>
              <span>od bytu po obchodní centrum, stejná pečlivost</span>
            </li>
            <li>
              <strong>Hlídám vám lhůty</strong>
              <span>ozvu se dřív, než revize propadne</span>
            </li>
          </ul>

          <address className="about__contact">
            Josef Meisner · Strojnická 433/3, Praha 7, 170 00
            <br />
            <a href="tel:+420605219934">605 219 934</a> ·{" "}
            <a href="mailto:josefmeisner@email.cz">josefmeisner@email.cz</a>
          </address>
        </div>
      </section>
    </main>
  );
}
