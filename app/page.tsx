import type { CSSProperties } from "react";

export default function Page() {
  const projects = [
    {
      no: "01",
      title: "Sběratelské edice Saviory Models",
      desc: "Autorské modely v malé sérii — každý kus dostane číslo, licenci a Michalův podpis. Postaveno z dílků, které jinde neseženete.",
      tag: "Limitovaná edice",
    },
    {
      no: "02",
      title: "Zakázkový model na míru",
      desc: "Přineste nápad — budovu, auto, portrét z kostek — a my ho postavíme. Od návrhu přes výběr dílků až po hotový model připravený na poličku.",
      tag: "Na objednávku",
    },
    {
      no: "03",
      title: "Použité & nové LEGO® dílky a figurky",
      desc: "Roztříděné dílky po jednotlivých kusech, vzácné figurky i celé sety. Skladem v Brně, posíláme do celého světa.",
      tag: "Skladem",
    },
    {
      no: "04",
      title: "Výkup LEGO® kostek",
      desc: "Máte doma vyřazenou hromadu kostek? Zvážíme, oceníme a vykoupíme. I neúplné sety a smíšené díly.",
      tag: "Výkup",
    },
  ];

  const stores = [
    { name: "BrickLink Store", note: "Dílky a figurky po kusech" },
    { name: "BrickOwl Store", note: "Katalog pro sběratele" },
    { name: "Aukro Store", note: "Aukce a rychlý nákup" },
  ];

  return (
    <main className="sb">
      <header className="sb-nav">
        <a className="sb-mark" href="#top" aria-label="Saviory Bricks — úvod">
          <span className="sb-mark__stud" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </span>
          <span className="sb-mark__word">
            SAVIORY<span className="sb-mark__thin">BRICKS</span>
          </span>
        </a>
        <span className="sb-nav__loc">Brno · Česko</span>
      </header>

      <section className="sb-hero" id="top">
        <div className="sb-hero__grid">
          <div className="sb-hero__copy">
            <p className="sb-eyebrow">Hračkářství &amp; autorská tvorba z LEGO® dílků</p>
            <h1 className="sb-hero__title">
              Z hromady kostek<br />
              <em>unikátní model,</em><br />
              který nikdo jiný nemá.
            </h1>
            <p className="sb-hero__lead">
              Dodáváme LEGO® dílky do celého světa a měníme je v zakázkové
              modely a sběratelské edice s autorskou licencí a podpisem.
              Ručně skládáno v Brně.
            </p>
            <div className="sb-hero__cta">
              <a className="sb-btn sb-btn--primary" href="#projekty">
                Prohlédnout projekty
              </a>
              <a className="sb-btn sb-btn--ghost" href="#o-nas">
                O zakladateli
              </a>
            </div>
            <dl className="sb-stats">
              <div>
                <dt>Kam posíláme</dt>
                <dd>Celý svět 🌍</dd>
              </div>
              <div>
                <dt>Každý model</dt>
                <dd>Číslo &amp; podpis</dd>
              </div>
              <div>
                <dt>Sídlo dílny</dt>
                <dd>Brno</dd>
              </div>
            </dl>
          </div>
          <figure className="sb-hero__media">
            <img
              src="/hero.webp"
              alt="Zakázkový model postavený z LEGO® dílků od Saviory Bricks"
              className="sb-hero__img"
              width={880}
              height={1040}
            />
            <figcaption className="sb-hero__cap">
              <span className="sb-chip" aria-hidden="true">1×1</span>
              Autorská edice — kus po kuse
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sb-projects" id="projekty" aria-labelledby="projekty-nadpis">
        <div className="sb-section-head">
          <p className="sb-eyebrow sb-eyebrow--red">Co u nás pořídíte</p>
          <h2 id="projekty-nadpis" className="sb-h2">
            Čtyři cesty od kostky<br /> k hotovému kusu
          </h2>
        </div>

        <div className="sb-proj-lead">
          <img
            src="/section-1.webp"
            alt="Roztříděné LEGO® dílky a figurky připravené k prodeji"
            className="sb-proj-lead__img"
            width={720}
            height={560}
          />
          <p>
            Všechno začíná u pořádně roztříděných dílků. Skladujeme je
            po jednotlivých kusech, barvách a ročnících — díky tomu
            postavíme cokoliv a seženeme i ten jeden díl, který vám
            do setu chybí.
          </p>
        </div>

        <ol className="sb-plate">
          {projects.map((p) => (
            <li className="sb-brick" key={p.no}>
              <span className="sb-brick__stud" aria-hidden="true"></span>
              <span className="sb-brick__no">{p.no}</span>
              <div className="sb-brick__body">
                <span className="sb-brick__tag">{p.tag}</span>
                <h3 className="sb-brick__title">{p.title}</h3>
                <p className="sb-brick__desc">{p.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="sb-stores">
          <p className="sb-stores__label">Nakoupit dílky online</p>
          <ul className="sb-stores__list">
            {stores.map((s) => (
              <li key={s.name}>
                <span className="sb-stores__name">{s.name}</span>
                <span className="sb-stores__note">{s.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sb-about" id="o-nas" aria-labelledby="o-nas-nadpis">
        <figure className="sb-about__media">
          <img
            src="/section-2.webp"
            alt="Michal Saviory při skládání zakázkového LEGO® modelu"
            className="sb-about__img"
            width={720}
            height={780}
          />
        </figure>
        <div className="sb-about__copy">
          <p className="sb-eyebrow sb-eyebrow--red">Náš zakladatel</p>
          <h2 id="o-nas-nadpis" className="sb-h2">Michal Saviory</h2>
          <p className="sb-about__text">
            Za značkou Saviory stojí jeden člověk, spousta roztříděných
            kostek a slabost pro detail. Michal začínal výkupem starých
            sad a časem z toho vyrostla dílna, která staví autorské modely
            na míru a posílá dílky sběratelům po celém světě.
          </p>
          <ul className="sb-vouch">
            <li>
              <span className="sb-vouch__k">Autorská značka</span>
              <span className="sb-vouch__v">Saviory® — registrovaná ochranná známka, každá edice je chráněná.</span>
            </li>
            <li>
              <span className="sb-vouch__k">Poctivé třídění</span>
              <span className="sb-vouch__v">Nové i použité dílky prohlížíme kus po kuse, než je pošleme dál.</span>
            </li>
            <li>
              <span className="sb-vouch__k">Pro dobrou věc</span>
              <span className="sb-vouch__v">Část zakázek stavíme na charitu — kdo naplní víc kostek do sklenice?</span>
            </li>
          </ul>
          <p className="sb-disclaimer">
            LEGO® je obchodní značka skupiny LEGO® Group, která tento web
            nesponzoruje ani nepodporuje.
          </p>
        </div>
      </section>
    </main>
  );
}

// keep the CSSProperties import used to avoid tree-shake warnings in strict setups
export const dynamic = "force-static";
