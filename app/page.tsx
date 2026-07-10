import type { CSSProperties } from "react";

export default function Page() {
  const kurzy = [
    {
      cislo: "01",
      nazev: "Individuální lekce",
      pro: "Jeden na jednoho, tempo podle vás",
      popis:
        "Sejdeme se online nebo v Budějovicích a pracujeme přesně na tom, co potřebujete — na pohovoru, na výslovnosti, na tom, aby vás po první větě přestali ptát: „Odkud jste?“",
      detail: "55 minut · online i osobně",
    },
    {
      cislo: "02",
      nazev: "Skupinové lekce",
      pro: "Malá skupina, hodně mluvení",
      popis:
        "Menší skupiny, kde se opravdu mluví. Naučíte se češtinu a zároveň poznáte lidi, kteří řeší to samé co vy. Podle Patricie „skvělý zážitek“.",
      detail: "max. 6 lidí · jednou týdně",
    },
    {
      cislo: "03",
      nazev: "Čeština k práci",
      pro: "Aby vzdělání odpovídalo pozici",
      popis:
        "Cílená příprava na pracovní pohovor a komunikaci v oboru. Řešíme slovní zásobu, kterou opravdu použijete v práci — ne obraty z učebnice.",
      detail: "na míru · dle profese",
    },
  ];

  const bolesti = [
    "Domluvíte se, ale po první větě se lidi ptají: „Odkud jste?“",
    "Máte horší práci, než na jakou máte vzdělání.",
    "Nad gramatikou přemýšlíte dřív, než něco vyslovíte.",
    "Bojíte se oslovit sympatickou sousedku — co kdybyste řekli něco špatně?",
  ];

  return (
    <main className="page">
      <header className="top">
        <a className="brand" href="#" aria-label="Michaela Dušková — čeština pro cizince">
          <span className="brand-mark" aria-hidden="true">MD</span>
          <span className="brand-name">
            Michaela&nbsp;Dušková
            <span className="brand-sub">čeština pro cizince · České Budějovice</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#kurzy">Kurzy</a>
          <a href="#reference">Reference</a>
          <a className="nav-cta" href="mailto:michaela@ceskyplynule.cz?subject=Mám zájem o lekce češtiny">Domluvit lekci</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-text">
          <p className="eyebrow">Lektorka češtiny pro cizince</p>
          <h1 id="hero-title">
            Ať vás po první&nbsp;větě
            <span className="hl"> nikdo neptá,</span>
            <br />odkud&nbsp;jste.
          </h1>
          <p className="lead">
            Učím dospělé mluvit česky <em>plynule a beze strachu</em> — v Českých
            Budějovicích i online. Bez biflování pravidel, která stejně nepoužijete.
            Tempo držíte vy, já hlídám, aby to dávalo smysl.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:michaela@ceskyplynule.cz?subject=Nezávazná ukázková lekce">
              Zkusit ukázkovou lekci
            </a>
            <a className="btn btn-ghost" href="tel:+420776123456">
              Zavolat: 776&nbsp;123&nbsp;456
            </a>
          </div>
        </div>
        <figure className="hero-media">
          <img
            src="/hero.webp"
            width={880}
            height={1040}
            alt="Michaela Dušková, lektorka češtiny pro cizince z Českých Budějovic"
            className="hero-img"
          />
          <figcaption className="hero-quote">
            <span className="q-mark" aria-hidden="true">„</span>
            Míša umí studenty povzbudit a nadchnout. Skupinové lekce byly skvělým zážitkem.
            <span className="q-author">Patricia Braga · studentka</span>
          </figcaption>
        </figure>
      </section>

      <section className="pains" aria-label="Znáte to?">
        <p className="pains-head">Zní vám tohle povědomě?</p>
        <ul className="pains-list">
          {bolesti.map((b, i) => (
            <li key={i} style={{ "--i": i } as CSSProperties}>{b}</li>
          ))}
        </ul>
        <p className="pains-turn">To znám. A vím, co s tím.</p>
      </section>

      <section className="kurzy" id="kurzy" aria-labelledby="kurzy-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Jak vám pomůžu</p>
          <h2 id="kurzy-title">Tři cesty k plynulé češtině</h2>
          <p className="section-lead">
            Vyberte podle toho, kde teď jste. Nevíte? Napište mi a poradím — první
            zpráva vás k ničemu nezavazuje.
          </p>
        </div>
        <ol className="cards">
          {kurzy.map((k) => (
            <li className="card" key={k.cislo}>
              <span className="card-num" aria-hidden="true">{k.cislo}</span>
              <h3>{k.nazev}</h3>
              <p className="card-pro">{k.pro}</p>
              <p className="card-desc">{k.popis}</p>
              <p className="card-meta">{k.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about" id="reference" aria-labelledby="about-title">
        <figure className="about-media">
          <img
            src="/section-1.webp"
            width={820}
            height={620}
            alt="Výuka češtiny — společná lekce s Michaelou Duškovou"
            className="about-img"
          />
        </figure>
        <div className="about-text">
          <p className="eyebrow eyebrow--dark">O mně</p>
          <h2 id="about-title">
            Mgr. Michaela Dušková
          </h2>
          <p className="about-lead">
            Učím dospělé cizince, kteří v Česku žijí, pracují a chtějí se konečně
            cítit doma i v řeči. Nezačínám u tabulek pádů — začínám u toho, co
            potřebujete říct dnes večer.
          </p>
          <dl className="facts">
            <div>
              <dt>Kde</dt>
              <dd>České Budějovice + online v celém Česku</dd>
            </div>
            <div>
              <dt>Pro koho</dt>
              <dd>Dospělí, kteří se domluví, ale chtějí mluvit jistě</dd>
            </div>
            <div>
              <dt>Styl</dt>
              <dd>Hodně mluvení, žádné biflování zbytečností</dd>
            </div>
          </dl>
          <div className="about-cta">
            <a className="btn btn-primary" href="mailto:michaela@ceskyplynule.cz?subject=Chci se domluvit na lekci">
              Napsat Michaele
            </a>
            <a className="btn btn-ghost" href="tel:+420776123456">Nebo zavolat</a>
          </div>
        </div>
      </section>

      <section className="blog" aria-labelledby="blog-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Ze zápisníku</p>
          <h2 id="blog-title">Čeština k nakousnutí</h2>
        </div>
        <div className="blog-grid">
          <figure className="blog-media">
            <img
              src="/section-2.webp"
              width={760}
              height={560}
              alt="Poznámky a materiály k výuce češtiny"
              className="blog-img"
            />
          </figure>
          <ul className="posts">
            <li>
              <h3>Zvládněte SE a SI!</h3>
              <p>Slovesa, u kterých „se“ nebo „si“ mění význam — a jak si to zapamatovat napořád.</p>
            </li>
            <li>
              <h3>Jak se snadno naučit slovíčka</h3>
              <p>Zapojte při učení emoce a fantazii. Do dalšího dne slovo nezapomenete.</p>
            </li>
            <li>
              <h3>„Zlom vaz!“ Už jste to slyšeli?</h3>
              <p>Idiomy, které běžně zaslechnete: nebuď labuť, nemaluj čerta na zeď…</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
