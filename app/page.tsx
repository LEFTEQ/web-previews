import type { CSSProperties } from "react";

export default function Page() {
  const practice = [
    {
      no: "§ 209",
      title: "Trestní právo",
      body: "Obhajoba v přípravném řízení i před soudem, zastupování poškozených, konzultace před podáním vysvětlení. Jsem s vámi od prvního výslechu."
    },
    {
      no: "§ 420",
      title: "Náhrada škody",
      body: "Vymáhání nároků z ublížení na zdraví, dopravních nehod i vadného plnění. Spočítáme, sepíšeme, uplatníme — a pokud je třeba, zažalujeme."
    },
    {
      no: "§ 1746",
      title: "Smlouvy a nemovitosti",
      body: "Příprava a revize smluv, advokátní úschova kupní ceny, ověření podpisu. Prodej bytu i firemní kontrakt hlídám do posledního ustanovení."
    },
    {
      no: "§ 34",
      title: "Podnikání a korporace",
      body: "Zakládání společností, valné hromady, souběh funkcí, spory mezi společníky. Provázím firmy od prvního zápisu do rejstříku."
    },
    {
      no: "§ 79",
      title: "Správní právo",
      body: "Kvalifikované jednání s úřady, odvolání proti rozhodnutí, správní žaloba. Přebírám komunikaci, kterou nikdo nechce vést."
    },
    {
      no: "§ 34 ZP",
      title: "Pracovní právo",
      body: "Výpovědi, neplatná rozvázání poměru, dohody i spory o mzdu — na straně zaměstnavatele i zaměstnance, podle toho, koho zastupuji."
    }
  ];

  const steps = [
    { k: "01", t: "Popíšete situaci", d: "Telefonem nebo e-mailem. Řeknu vám na rovinu, jestli má věc smysl řešit a jak." },
    { k: "02", t: "Domluvíme rozsah", d: "Jednorázová porada, nárazová spolupráce, nebo příkazní smlouva na delší zastupování." },
    { k: "03", t: "Zastupuji vás", d: "U úřadu, u soudu, po celé ČR. Vy víte, na čem jste — v každé fázi." }
  ];

  return (
    <main className="jt">
      <header className="jt-top">
        <a className="jt-brand" href="#" aria-label="JT Legal, advokátní kancelář, úvod">
          <span className="jt-brand-mark">JT</span>
          <span className="jt-brand-word">LEGAL</span>
          <span className="jt-brand-sub">advokátní kancelář · České Budějovice</span>
        </a>
        <nav className="jt-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#jednani">Jak jednám</a>
          <a className="jt-nav-call" href="tel:+420774838829">774 838 829</a>
        </nav>
      </header>

      <section className="jt-hero" aria-labelledby="hero-h">
        <div className="jt-hero-frame">
          <img
            className="jt-hero-img"
            src="/hero.webp"
            alt="Advokátní kancelář JT Legal v Českých Budějovicích"
          />
        </div>
        <div className="jt-hero-copy">
          <p className="jt-eyebrow">Advokátní kancelář · V. Talicha 14, České Budějovice</p>
          <h1 id="hero-h">
            Řeším to,<br />
            <em>co byste raději</em><br />
            nemuseli řešit.
          </h1>
          <p className="jt-lede">
            Trestní obhajoba, spory o náhradu škody, smlouvy i jednání s úřady. Od výzvy
            k plnění po líčení u soudu — profesionalita a rychlost, ne fráze na papíře.
          </p>
          <div className="jt-hero-cta">
            <a className="jt-btn" href="tel:+420774838829">Zavolat: 774 838 829</a>
            <a className="jt-btn jt-btn-ghost" href="mailto:trnka@jtlegal.cz">Napsat e-mail</a>
          </div>
        </div>
      </section>

      <section className="jt-sec" id="sluzby" aria-labelledby="sluzby-h">
        <div className="jt-sec-head">
          <p className="jt-eyebrow">Rejstřík právních oblastí</p>
          <h2 id="sluzby-h">Šest paragrafů, kterými se živím</h2>
          <p className="jt-sec-note">
            Každá oblast má svůj paragraf i svůj postup. Vyberte, co se vás týká —
            a napište mi konkrétní situaci, ne obecný dotaz.
          </p>
        </div>
        <ol className="jt-code">
          {practice.map((p) => (
            <li className="jt-code-item" key={p.title}>
              <span className="jt-code-no">{p.no}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="jt-sec jt-sec-alt" id="jednani" aria-labelledby="jednani-h">
        <div className="jt-about">
          <div className="jt-about-img">
            <img
              src="/section-1.webp"
              alt="Pracovna advokáta — příprava smluv a spisů"
            />
          </div>
          <div className="jt-about-text">
            <p className="jt-eyebrow">O kanceláři</p>
            <h2 id="jednani-h">Malá kancelář, u které máte jméno, ne číslo spisu</h2>
            <p>
              JT Legal sídlí v Českých Budějovicích a zastupuje klienty po celé České
              republice — u soudů i v jednání s úřady. Nejsem řetězec poboček. Věc, se
              kterou přijdete, vede člověk, se kterým si voláte.
            </p>
            <p>
              Pracuji formou příkazních smluv pro dlouhodobou spolupráci, i jako
              jednorázová porada, když potřebujete jen ujasnit, jak dál. Rozsah
              domlouváme dopředu — bez překvapení na faktuře.
            </p>
            <dl className="jt-facts">
              <div><dt>Sídlo</dt><dd>V. Talicha 1807/14, 370 05 České Budějovice</dd></div>
              <div><dt>Působnost</dt><dd>celá ČR — soudy i úřady</dd></div>
              <div><dt>Zápis</dt><dd>KS v Č. Budějovicích, oddíl C, vložka 22198</dd></div>
            </dl>
          </div>
        </div>

        <div className="jt-steps-wrap">
          <div className="jt-steps-head">
            <p className="jt-eyebrow">Jak spolupráce začíná</p>
            <h3>Od telefonu k zastupování ve třech krocích</h3>
          </div>
          <div className="jt-steps-grid">
            <ol className="jt-steps">
              {steps.map((s) => (
                <li key={s.k}>
                  <span className="jt-step-k">{s.k}</span>
                  <div>
                    <h4>{s.t}</h4>
                    <p>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <figure className="jt-steps-img">
              <img
                src="/section-2.webp"
                alt="Jednací stůl advokátní kanceláře JT Legal"
              />
              <figcaption>„Profesionalita a rychlost.“ — heslo, které platí od prvního hovoru.</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
