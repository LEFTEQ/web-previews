import React from "react";

export default function Page() {
  const regaly = [
    {
      cislo: "01",
      nadpis: "Chléb z pekárny Náš Chléb",
      popis:
        "Každé ráno přivážíme kváskové bochníky s tmavou křupavou kůrkou, voňavé housky a koláče. Pečeme podle rodinných receptur — a část přímo tady na prodejně, takže vůni ucítíte hned ve dveřích.",
    },
    {
      cislo: "02",
      nadpis: "Mléko a sýry od farmářů",
      popis:
        "Mléko od sedláka, který zná každou svou kravku jménem. Tvarohy, čerstvé sýry a máslo, které chutná tak, jak si ho pamatujete z dětství — bez zbytečné cesty přes půl Evropy.",
    },
    {
      cislo: "03",
      nadpis: "Uzeniny s rodinnou tradicí",
      popis:
        "Klobásy, šunky a paštiky z malých řeznictví, kde se ještě udí dřevem a solí rukou. Poznáte to podle chuti — a podle toho, že víme, kdo je vyrobil.",
    },
    {
      cislo: "04",
      nadpis: "Zavařené s láskou",
      popis:
        "Džemy vařené podle starých receptur, med od včelaře od nás z Poohří, kysané zelí i sirupy. Sklenice, za kterými stojí jméno, ne šarže.",
    },
    {
      cislo: "05",
      nadpis: "Káva a snídaně na místě",
      popis:
        "Přijďte se posadit. Dobrá káva, čerstvý croissant nebo slaný závin — malá pauza uprostřed dne v útulném interiéru, kde se nikam nespěchá.",
    },
  ];

  return (
    <main className="ng">
      <header className="ng-top">
        <a className="ng-mark" href="#" aria-label="Náš Grunt — farmářský obchod, Ústí nad Labem">
          <span className="ng-mark-nas">Náš</span>
          <span className="ng-mark-grunt">Grunt</span>
        </a>
        <nav className="ng-nav" aria-label="Hlavní">
          <a href="#regal">Co u nás najdete</a>
          <a href="#pribeh">O gruntu</a>
          <a href="#pobocky">Pobočky</a>
        </nav>
      </header>

      <section className="ng-hero">
        <div className="ng-hero-media">
          <img
            src="/hero.webp"
            alt="Pult farmářského obchodu Náš Grunt s čerstvým pečivem a lokálními potravinami"
            className="ng-hero-img"
          />
        </div>
        <div className="ng-hero-text">
          <p className="ng-eyebrow">Farmářský obchod · Ústí nad Labem</p>
          <h1 className="ng-hero-h1">
            Sami víme,
            <br />
            <em>od koho</em> to je.
          </h1>
          <p className="ng-hero-lede">
            Chleba z rodinné pekárny, mléko od sedláka za kopcem, med od
            včelaře z Poohří. Vybíráme potraviny, které mají jméno, tvář a
            příběh — ne jen čárový kód.
          </p>
          <a className="ng-cta" href="#regal">
            Podívejte se do regálů
          </a>
        </div>
        <p className="ng-hero-caption">
          Otevřeno út–so · Ústí nad Labem
        </p>
      </section>

      <section className="ng-section ng-regal" id="regal" aria-labelledby="regal-h">
        <div className="ng-section-head">
          <p className="ng-eyebrow">Regál po regálu</p>
          <h2 className="ng-h2" id="regal-h">
            Co u nás najdete
          </h2>
          <p className="ng-section-lede">
            Nemáme kilometrové uličky. Máme pár poctivých regálů, kde za
            každou položkou stojí konkrétní člověk.
          </p>
        </div>

        <div className="ng-regal-media">
          <img
            src="/section-1.webp"
            alt="Čerstvé kváskové pečivo z pekárny Náš Chléb"
            className="ng-media-img"
          />
        </div>

        <ol className="ng-list">
          {regaly.map((r) => (
            <li className="ng-list-item" key={r.cislo}>
              <span className="ng-list-num" aria-hidden="true">
                {r.cislo}
              </span>
              <div className="ng-list-body">
                <h3 className="ng-list-h3">{r.nadpis}</h3>
                <p className="ng-list-p">{r.popis}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ng-section ng-pribeh" id="pribeh" aria-labelledby="pribeh-h">
        <div className="ng-pribeh-grid">
          <div className="ng-pribeh-media">
            <img
              src="/section-2.webp"
              alt="Útulný interiér prodejny Náš Grunt s posezením a kávou"
              className="ng-media-img"
            />
          </div>
          <div className="ng-pribeh-text">
            <p className="ng-eyebrow">Proč právě grunt</p>
            <h2 className="ng-h2" id="pribeh-h">
              Grunt znamená pevný základ. My na něm stavíme.
            </h2>
            <p className="ng-pribeh-p">
              Náš Grunt patří do rodiny pekárny Náš Chléb. Nechodíme pro
              suroviny do velkoskladu — jezdíme za malými českými farmáři a
              výrobci, kteří dělají věci srdcem a stojí si za svým jménem.
            </p>
            <p className="ng-pribeh-p">
              Věříme, že dobré jídlo dělá den lepší. A že když víte, odkud
              chleba je, chutná jinak. Přijďte si pro kus poctivé domácí chuti
              — a klidně zůstaňte na kávu.
            </p>

            <blockquote className="ng-quote">
              <p>
                „Pěkná prodejna se skvělým sortimentem. Nejvíc oceňuju, že mají
                vlastní výrobnu — čerstvý croissant a ten jejich slaný závin, to
                je dokonalost v každém soustě.“
              </p>
              <cite>— zákaznice, recenze na Google</cite>
            </blockquote>

            <dl className="ng-facts">
              <div className="ng-fact">
                <dt>Kde nás najdete</dt>
                <dd>Ústí nad Labem</dd>
              </div>
              <div className="ng-fact">
                <dt>Pečeme</dt>
                <dd>přímo na prodejně</dd>
              </div>
              <div className="ng-fact">
                <dt>Spolupráce</dt>
                <dd>spoluprace@nasgrunt.cz</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
