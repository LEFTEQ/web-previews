import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="kl">
      {/* ————— HERO ————— */}
      <header className="hero" aria-labelledby="hero-title">
        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#uvod" aria-label="Školka Klíček, domů">
            <span className="wordmark-key" aria-hidden="true">
              <span className="key-bow" />
              <span className="key-stem" />
              <span className="key-teeth" />
            </span>
            <span className="wordmark-text">
              Klíček
              <small>soukromá školka&nbsp;·&nbsp;Plzeň</small>
            </span>
          </a>
          <ul className="nav-links">
            <li><a href="#nabidka">Co nabízíme</a></li>
            <li><a href="#o-nas">O nás</a></li>
            <li><a className="nav-cta" href="tel:+420777123456">Zavolat do školky</a></li>
          </ul>
        </nav>

        <div className="hero-inner">
          <p className="eyebrow">Otevřeno od 1. září 2009 · děti 2–7 let</p>
          <h1 id="hero-title" className="hero-title">
            <span className="line line-a">Pojďte</span>
            <span className="line line-b">s&nbsp;námi</span>
            <span className="line line-c">
              růst<span className="grow-mark" aria-hidden="true">↑</span>
            </span>
          </h1>
          <p className="hero-lead">
            Malá rodinná školka v&nbsp;Plzni pro dvacet dětí v&nbsp;jedné pestré
            skupině. Individuální péče, klidné prostředí a&nbsp;program, na&nbsp;který
            se děti každé ráno těší.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420777123456">Zavolat a domluvit prohlídku</a>
            <a className="btn btn-ghost" href="mailto:klicek@skolka-klicek.cz">Napsat e-mail</a>
          </div>

          <ul className="hero-facts" aria-label="Základní údaje o školce">
            <li><strong>20</strong><span>dětí v jedné rodinné skupině</span></li>
            <li><strong>2–7</strong><span>let, vše pohromadě</span></li>
            <li><strong>2009</strong><span>rok, kdy jsme otevřeli</span></li>
          </ul>
        </div>

        <div className="hero-sprout" aria-hidden="true">
          <span className="sprout-stem" />
          <span className="sprout-leaf sprout-leaf-l" />
          <span className="sprout-leaf sprout-leaf-r" />
        </div>
      </header>

      {/* ————— NABÍDKA ————— */}
      <section id="nabidka" className="section offer" aria-labelledby="offer-title">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Co u nás děti zažijou</p>
          <h2 id="offer-title">Tři programy, jeden klíč&nbsp;k&nbsp;bezpečnému&nbsp;dni</h2>
        </div>

        <div className="offer-grid">
          <article className="offer-card">
            <span className="offer-index" aria-hidden="true">01</span>
            <h3>Celodenní školka</h3>
            <p>
              Jedna rozmanitá skupina dětí od 2 do 7 let. Starší pomáhají mladším,
              učíme se vzájemnému respektu a&nbsp;samostatnosti. Předškoláci mají
              vlastní přípravu do školy.
            </p>
            <p className="offer-meta">Po–Pá · celoroční provoz</p>
          </article>

          <article className="offer-card offer-card-accent">
            <span className="offer-index" aria-hidden="true">02</span>
            <h3>Školička pro nejmenší</h3>
            <p>
              Kratší adaptační dopoledne pro děti už od dvou let. Hudba, výtvarka
              a&nbsp;pohyb — děti si vyzkoušejí, jak to ve školce chodí, a&nbsp;poznají
              nové kamarády.
            </p>
            <p className="offer-meta">Čt a Pá · 8:00–11:00 · svačina v ceně · 250 Kč</p>
          </article>

          <article className="offer-card">
            <span className="offer-index" aria-hidden="true">03</span>
            <h3>Prázdninová školka</h3>
            <p>
              „Pohádkové prázdniny“ i&nbsp;v&nbsp;létě. Sedm týdenních turnusů
              od&nbsp;7.&nbsp;července do&nbsp;22.&nbsp;srpna 2025, kdy jiné školky
              zavírají. Přihlaste dítě na&nbsp;jeden nebo víc týdnů.
            </p>
            <p className="offer-meta">7. 7. – 22. 8. 2025 · týdenní turnusy</p>
          </article>
        </div>

        <figure className="offer-figure">
          <img
            src="/section-1.webp"
            alt="Děti při dopoledním programu v mateřské školce Klíček"
            loading="lazy"
          />
          <figcaption>
            Den se dělí podle věku jen na&nbsp;chvíli — při vzdělávání. Zbytek
            času rosteme spolu.
          </figcaption>
        </figure>
      </section>

      {/* ————— O NÁS ————— */}
      <section id="o-nas" className="section about" aria-labelledby="about-title">
        <figure className="about-figure">
          <img
            src="/section-2.webp"
            alt="Klidné prostředí školky Klíček s prostorem pro hru a tvoření"
            loading="lazy"
          />
        </figure>

        <div className="about-text">
          <p className="eyebrow eyebrow-dark">O nás</p>
          <h2 id="about-title">Na&nbsp;počátku byl sen jedné maminky&nbsp;a&nbsp;učitelky</h2>
          <p>
            Představa školky přívětivé k&nbsp;dětem — kde se cítí bezpečně, jistě
            a&nbsp;spokojeně. Aby čas bez rodičů nebyl jen dobou čekání, ale
            radostí, dobrou zkušeností a&nbsp;spolehlivými základy do&nbsp;života.
          </p>
          <p>
            Klíček je malá rodinná školka s&nbsp;důrazem na&nbsp;individuální,
            motivující péči o&nbsp;rozvoj každého dítěte a&nbsp;na&nbsp;přímou
            spolupráci s&nbsp;rodinou. Kapacita je 20 dětí v&nbsp;jedné skupině —
            to je naše síla.
          </p>

          <ul className="values">
            <li>
              <span className="val-mark" aria-hidden="true" />
              <div>
                <strong>Individuální přístup</strong>
                <span>Program bere ohled na osobnost, potřeby i tempo každého dítěte.</span>
              </div>
            </li>
            <li>
              <span className="val-mark" aria-hidden="true" />
              <div>
                <strong>Rodina u toho</strong>
                <span>Rodiče se můžou zapojit do programu, ne jen předat a vyzvednout.</span>
              </div>
            </li>
            <li>
              <span className="val-mark" aria-hidden="true" />
              <div>
                <strong>Rosteme spolu</strong>
                <span>Mladší i starší v jedné skupině — vzájemný respekt a pomoc.</span>
              </div>
            </li>
          </ul>

          <p className="signoff">
            <span className="signoff-name">Mgr. Alena Rudolfová</span>
            <span className="signoff-role">zakladatelka školky Klíček</span>
          </p>
        </div>
      </section>
    </main>
  );
}
