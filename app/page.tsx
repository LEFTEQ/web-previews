export default function Page() {
  const disciplines = [
    {
      no: "I",
      name: "Šerm",
      desc: "Meč, tesák, dýka. Učíme práci s historickou zbraní podle dobových pramenů — postoj, sek, kryt, práci nohou. Od prvního úchopu po scénický souboj.",
    },
    {
      no: "II",
      name: "HEMA",
      desc: "Historical European Martial Arts. Rekonstrukce evropského bojového umění z traktátů — Liechtenauer, Fiore, Meyer. Poctivá technika, ne divadlo.",
    },
    {
      no: "III",
      name: "Vystoupení",
      desc: "Souboje pro festivaly, oslavy měst i firemní akce. Přivezeme tábor, ohně, kostýmy a řinčení oceli. Diváky bavíme, ne strašíme.",
    },
    {
      no: "IV",
      name: "Historický tábor",
      desc: "Stavíme dobové ležení — stany, kovářskou výheň, řemesla a hry pro děti i dospělé. Kus středověku, kterého se můžete dotknout.",
    },
  ];

  return (
    <main className="t-main">
      <header className="t-nav">
        <a className="t-brand" href="#" aria-label="Tenebra — Olomoučtí šermíři, úvod">
          <span className="t-brand-mark">†</span>
          <span className="t-brand-word">Tenebra</span>
          <span className="t-brand-sub">Olomoučtí šermíři</span>
        </a>
        <nav className="t-navlinks" aria-label="Hlavní navigace">
          <a href="#nabidka">Nabídka</a>
          <a href="#klub">O klubu</a>
          <a href="#trenink">Tréninky</a>
        </nav>
      </header>

      <section className="t-hero">
        <img
          className="t-hero-img"
          src="/hero.webp"
          alt="Šermíři Tenebra v historických kostýmech při souboji s meči"
        />
        <div className="t-hero-veil" aria-hidden="true" />
        <div className="t-hero-inner">
          <p className="t-eyebrow">Šerm · HEMA · Historický tábor · Olomouc</p>
          <h1 className="t-hero-title">
            Ocel se<br />
            <em>učí trpělivostí,</em><br />
            ne silou.
          </h1>
          <p className="t-hero-lead">
            Jsme spolek lidí z různých krajů i profesí, které spojuje vášeň
            pro šerm a historii. Předáváme řemeslo boje mečem tak, jak se
            po staletí předávalo dál — z ruky do ruky.
          </p>
          <div className="t-hero-cta">
            <a className="t-btn" href="#trenink">Přijít na trénink</a>
            <a className="t-btn t-btn-ghost" href="#nabidka">Objednat vystoupení</a>
          </div>
        </div>
        <div className="t-hero-strip" aria-hidden="true">
          <span>Meč</span><span>·</span><span>Tesák</span><span>·</span>
          <span>Dýka</span><span>·</span><span>Traktáty</span><span>·</span>
          <span>Ležení</span><span>·</span><span>Olomouc</span>
        </div>
      </section>

      <section className="t-section t-offer" id="nabidka">
        <div className="t-sec-head">
          <p className="t-sec-eyebrow">Co u nás zažijete</p>
          <h2 className="t-sec-title">Čtyři cesty pod naši vlajku</h2>
        </div>
        <div className="t-offer-media">
          <img
            src="/section-1.webp"
            alt="Šermíř Tenebra při výuce a nácviku šermu"
            className="t-offer-photo"
          />
        </div>
        <ol className="t-list">
          {disciplines.map((d) => (
            <li className="t-item" key={d.no}>
              <span className="t-item-no" aria-hidden="true">{d.no}</span>
              <div className="t-item-body">
                <h3 className="t-item-name">{d.name}</h3>
                <p className="t-item-desc">{d.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="t-section t-about" id="klub">
        <div className="t-about-grid">
          <div className="t-about-media">
            <img
              src="/section-2.webp"
              alt="Historické ležení spolku Tenebra s dobovými stany a ohništěm"
              className="t-about-photo"
            />
          </div>
          <div className="t-about-text">
            <p className="t-sec-eyebrow">O klubu</p>
            <h2 className="t-sec-title">Spolek, ne škola s rozvrhem</h2>
            <p className="t-about-para">
              Tenebra znamená latinsky „tma“ — a přesně z ní vytahujeme
              řemeslo, na které se skoro zapomnělo. Nejsme herci, kteří
              mávají meči. Studujeme dobové prameny, brousíme techniku a
              teprve pak z ní děláme podívanou.
            </p>
            <p className="t-about-para">
              Vyučujeme šerm, děláme vystoupení, stavíme historický tábor a
              bavíme lidi hrami. Spolek Tenebra je podporován městem Olomouc.
            </p>

            <dl className="t-facts">
              <div className="t-fact">
                <dt>Kde nás najdete</dt>
                <dd>I. P. Pavlova 1010/48<br />Nová Ulice, 779 00 Olomouc</dd>
              </div>
              <div className="t-fact">
                <dt>Napište nám</dt>
                <dd><a href="mailto:tenebra.serm@seznam.cz">tenebra.serm@seznam.cz</a></dd>
              </div>
              <div className="t-fact">
                <dt>Sledujte nás</dt>
                <dd>
                  <a href="https://www.facebook.com/tenebra.serm">Facebook</a>{" · "}
                  <a href="https://www.instagram.com/tenebra.olomouc/">Instagram</a>
                </dd>
              </div>
              <div className="t-fact">
                <dt>Spolek</dt>
                <dd>Tenebra — Olomoučtí šermíři z.s.<br />IČO 09406620</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="t-train" id="trenink">
          <div className="t-train-copy">
            <h3 className="t-train-title">Tréninky pro začátečníky i pokročilé</h3>
            <p className="t-train-lead">
              Přijďte se podívat, než se rozhodnete. Zbraň k prvnímu
              tréninku nepotřebujete — cvičnou vám půjčíme. Stačí pohodlné
              oblečení a chuť naučit se něco, co dělá málokdo.
            </p>
            <a className="t-btn" href="mailto:tenebra.serm@seznam.cz?subject=Chci%20na%20tr%C3%A9nink%20%C5%A1ermu">
              Domluvit první trénink
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
