export default function Page() {
  return (
    <main className="ak">
      {/* ================= HERO ================= */}
      <header className="ak-hero">
        <div className="ak-hero__bar">
          <a className="ak-wordmark" href="#" aria-label="Autoškola Korený – úvod">
            <span className="ak-wordmark__badge" aria-hidden="true">L</span>
            <span className="ak-wordmark__text">
              Autoškola <strong>Korený</strong>
            </span>
          </a>
          <a className="ak-hero__phone" href="tel:+420585000000">
            <span aria-hidden="true">☎</span> 585 000 000
          </a>
        </div>

        <div className="ak-hero__grid">
          <div className="ak-hero__copy">
            <p className="ak-eyebrow">Autoškola · Olomouc</p>
            <h1 className="ak-hero__title">
              Řidičák uděláte
              <br />
              <span className="ak-hero__title-accent">v klidu a napoprvé.</span>
            </h1>
            <p className="ak-hero__lead">
              Jezdíme přesně tam, kde budete skládat zkoušku — po olomouckých
              kruháčích, tramvajových pásech i po dálničním přivaděči. Žádný
              stres, žádné křičení. Jen trpělivý instruktor a jasný plán.
            </p>
            <div className="ak-hero__actions">
              <a className="ak-btn ak-btn--primary" href="tel:+420585000000">
                Zavolat a přihlásit se
              </a>
              <a className="ak-btn ak-btn--ghost" href="#kurzy">
                Prohlédnout kurzy
              </a>
            </div>
            <ul className="ak-hero__facts" aria-label="Základní fakta o autoškole">
              <li>
                <strong>28 lekcí</strong>
                <span>jízd v provozu, každá 45 min</span>
              </li>
              <li>
                <strong>3 měsíce</strong>
                <span>obvyklá délka kurzu B</span>
              </li>
              <li>
                <strong>Olomouc</strong>
                <span>zkušební trasy znáte předem</span>
              </li>
            </ul>
          </div>

          <figure className="ak-hero__media">
            <img
              src="/hero.webp"
              alt="Výcvikové vozidlo Autoškoly Korený s označením L v ulicích Olomouce"
              className="ak-hero__img"
            />
            <figcaption className="ak-hero__plate" aria-hidden="true">
              <span className="ak-plate">
                <span className="ak-plate__eu">CZ</span>
                <span className="ak-plate__num">KORENÝ&nbsp;1</span>
              </span>
            </figcaption>
          </figure>
        </div>

        <div className="ak-lane" aria-hidden="true">
          <div className="ak-lane__dashes"></div>
        </div>
      </header>

      {/* ================= KURZY ================= */}
      <section className="ak-section" id="kurzy" aria-labelledby="kurzy-h">
        <div className="ak-section__head">
          <p className="ak-eyebrow">Co u nás uděláte</p>
          <h2 id="kurzy-h" className="ak-h2">
            Kurzy a kondiční jízdy
          </h2>
          <p className="ak-section__intro">
            Ceny platí pro rok 2025 a zahrnují všechno — učebnice, teorii,
            jízdy i přistavení k závěrečné zkoušce. Nic nedoplácíte.
          </p>
        </div>

        <div className="ak-cards">
          <article className="ak-card">
            <div className="ak-card__sign ak-card__sign--b" aria-hidden="true">
              B
            </div>
            <h3 className="ak-card__title">Osobní automobil</h3>
            <p className="ak-card__desc">
              Nejčastější kurz. Teorie v učebně u hlavního nádraží, jízdy
              začínáme na klidném Nemilanském okruhu a končíme v centru
              města — přesně tam, kde jezdí komisař.
            </p>
            <ul className="ak-card__list">
              <li>Škoda Fabia s manuální převodovkou</li>
              <li>Jízdy i večer a o víkendu</li>
              <li>Vyzvednutí u školy nebo práce v Olomouci</li>
            </ul>
            <p className="ak-card__price">
              <strong>16 900 Kč</strong>
              <span>možnost dvou splátek</span>
            </p>
          </article>

          <article className="ak-card">
            <div className="ak-card__sign ak-card__sign--a" aria-hidden="true">
              A
            </div>
            <h3 className="ak-card__title">Motocykl A, A2, A1</h3>
            <p className="ak-card__desc">
              První hodiny na cvičišti v Holici, dokud si na motorku
              nesednete s jistotou. Pak teprve do provozu — instruktor jede
              za vámi a radí přes interkom v helmě.
            </p>
            <ul className="ak-card__list">
              <li>Yamaha MT-07 a lehčí stroje pro A1</li>
              <li>Zapůjčení helmy s interkomem zdarma</li>
              <li>Rozšíření z B na A2 se slevou</li>
            </ul>
            <p className="ak-card__price">
              <strong>od 12 900 Kč</strong>
              <span>podle skupiny</span>
            </p>
          </article>

          <article className="ak-card">
            <div className="ak-card__sign ak-card__sign--k" aria-hidden="true">
              +
            </div>
            <h3 className="ak-card__title">Kondiční jízdy</h3>
            <p className="ak-card__desc">
              Řidičák máte, ale roky jste neseděli za volantem? Projedeme
              spolu to, čeho se bojíte nejvíc — parkování u Šantovky,
              kruháč u Globusu, najíždění na dálnici směr Brno.
            </p>
            <ul className="ak-card__list">
              <li>Jednotlivé lekce po 45 minutách</li>
              <li>Můžete jet i vlastním autem</li>
              <li>Bez přihlášky, stačí zavolat</li>
            </ul>
            <p className="ak-card__price">
              <strong>650 Kč</strong>
              <span>za lekci 45 min</span>
            </p>
          </article>
        </div>
      </section>

      {/* ================= TRASA / DŮVĚRA ================= */}
      <section className="ak-section ak-section--dark" aria-labelledby="cesta-h">
        <div className="ak-section__head">
          <p className="ak-eyebrow ak-eyebrow--light">Jak to u nás probíhá</p>
          <h2 id="cesta-h" className="ak-h2 ak-h2--light">
            Od přihlášky ke zkoušce
          </h2>
        </div>

        <ol className="ak-route">
          <li className="ak-route__stop">
            <span className="ak-route__dot" aria-hidden="true"></span>
            <h3>Přihláška a lékař</h3>
            <p>
              Zavoláte nebo se stavíte v učebně. Formulář vyplníme spolu,
              posudek vám potvrdí váš praktický lékař. Do kurzu nastoupíte
              obvykle do dvou týdnů.
            </p>
          </li>
          <li className="ak-route__stop">
            <span className="ak-route__dot" aria-hidden="true"></span>
            <h3>Teorie bez biflování</h3>
            <p>
              Pravidla probíráme na skutečných situacích z olomouckých ulic.
              Testy trénujete v mobilu — stejné otázky, jaké dostanete u
              zkoušky.
            </p>
          </li>
          <li className="ak-route__stop">
            <span className="ak-route__dot" aria-hidden="true"></span>
            <h3>Jízdy podle vás</h3>
            <p>
              Termíny si domlouváte přímo s instruktorem, klidně po škole
              nebo po práci. Jezdíte pořád se stejným člověkem, který zná
              vaše slabiny.
            </p>
          </li>
          <li className="ak-route__stop">
            <span className="ak-route__dot ak-route__dot--finish" aria-hidden="true"></span>
            <h3>Zkouška na známých trasách</h3>
            <p>
              Poslední jízdy vedeme po trasách, kudy vás povede komisař.
              U zkoušky vás nic nepřekvapí — proto většina našich žáků
              projde na první pokus.
            </p>
          </li>
        </ol>

        <div className="ak-quotes">
          <blockquote className="ak-quote">
            <p>
              „Bála jsem se hlavně kruháčů, tak jsme je s panem Koreným
              objížděli tak dlouho, až mi přišly nudné. Zkoušku jsem dala
              napoprvé.“
            </p>
            <cite>Tereza, 19 let, skupina B</cite>
          </blockquote>
          <blockquote className="ak-quote">
            <p>
              „Po patnácti letech bez řízení jsem si vzal pět kondičních
              jízd. Žádné poučování, jen praktické rady. Teď vozím děti do
              školky autem.“
            </p>
            <cite>Martin, 41 let, kondiční jízdy</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
