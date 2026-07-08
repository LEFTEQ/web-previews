import type { CSSProperties } from "react";

export default function Page() {
  const oblasti = [
    {
      cislo: "01",
      nazev: "Nemovitosti",
      popis:
        "Sepis kupních, darovacích a směnných smluv, zrušení a vypořádání spoluvlastnictví. Provedu vás převodem bytu, domu i pozemku od návrhu smlouvy až po vklad do katastru.",
      body: ["Kupní a darovací smlouvy", "Směna nemovitostí", "Vypořádání spoluvlastnictví"],
    },
    {
      cislo: "02",
      nazev: "Rodinné právo",
      popis:
        "Rozvod včetně vypořádání společného jmění manželů a úpravy poměrů nezletilých dětí. Citlivá agenda, u které záleží na klidu a jasném postupu.",
      body: ["Rozvod a vypořádání SJM", "Úprava poměrů nezletilých", "Zvýšení i snížení výživného"],
    },
    {
      cislo: "03",
      nazev: "Korporátní právo",
      popis:
        "Zakládání společností a změny v nich, sepisování smluv i všeobecných obchodních podmínek. Podklady, které obstojí v běžném provozu firmy.",
      body: ["Založení společnosti", "Změny ve společnostech", "Smlouvy a VOP"],
    },
    {
      cislo: "04",
      nazev: "Zastupování",
      popis:
        "Zastoupení před soudy a správními orgány. Hájím také poškozené v trestním řízení a uplatňuji právo na náhradu hmotné i nemateriální újmy.",
      body: ["Soudy a správní orgány", "Poškození v trestním řízení", "Náhrada újmy"],
    },
  ];

  const jazyky = [
    { zkr: "EN", nazev: "Angličtina", role: "Soudní překlady i tlumočení" },
    { zkr: "ES", nazev: "Španělština", role: "Soudní překlady i tlumočení" },
    { zkr: "NL", nazev: "Nizozemština", role: "Jednání a komunikace" },
  ];

  return (
    <main className="ak">
      <header className="ak-topbar">
        <a className="ak-wordmark" href="#" aria-label="Mgr. et Mgr. Zuzana Frantíková, advokátka">
          <span className="ak-wordmark__mono">§</span>
          <span className="ak-wordmark__name">
            Frantíková
            <span className="ak-wordmark__sub">advokátka &middot; České Budějovice</span>
          </span>
        </a>
        <nav className="ak-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#preklady">Překlady</a>
          <a href="#o-mne">O mně</a>
        </nav>
      </header>

      <section className="ak-hero" aria-labelledby="hero-nadpis">
        <div className="ak-hero__text">
          <p className="ak-eyebrow">Advokátní kancelář &middot; ev. č. ČAK 16252</p>
          <h1 id="hero-nadpis" className="ak-hero__title">
            Právo <em>a</em> jazyk
            <span className="ak-hero__title-line">v jedné kanceláři.</span>
          </h1>
          <p className="ak-hero__lead">
            Advokátka a zároveň soudní tlumočnice pro angličtinu a španělštinu. Zastoupím vás
            u soudu i u smlouvy — a stejná ruka vám k ní připraví ověřený překlad. V Českých
            Budějovicích, U Tří lvů 13.
          </p>
          <div className="ak-hero__actions">
            <a className="ak-btn" href="tel:+420774982565">Zavolat 774 982 565</a>
            <a className="ak-btn ak-btn--ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
          <dl className="ak-hero__facts">
            <div>
              <dt>Advokátka od</dt>
              <dd>2015</dd>
            </div>
            <div>
              <dt>Soudní tlumočnice od</dt>
              <dd>2014</dd>
            </div>
            <div>
              <dt>Jazyky</dt>
              <dd>CZ · EN · ES · NL</dd>
            </div>
          </dl>
        </div>
        <figure className="ak-hero__figure">
          <img
            src="/hero.webp"
            alt="Mgr. et Mgr. Zuzana Frantíková, advokátka z Českých Budějovic"
            className="ak-hero__img"
            width={720}
            height={900}
          />
          <figcaption className="ak-hero__cap">Mgr. et Mgr. Zuzana Frantíková</figcaption>
        </figure>
      </section>

      <section className="ak-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="ak-section-head">
          <h2 id="sluzby-nadpis">Advokátní služby</h2>
          <p>
            Čtyři oblasti, ve kterých pracuji nejčastěji. Ceny se řídí smluvenou hodinovou
            sazbou nebo advokátním tarifem dle vyhl. č. 177/1996 Sb.
          </p>
        </div>
        <ol className="ak-oblasti">
          {oblasti.map((o) => (
            <li className="ak-oblast" key={o.cislo}>
              <span className="ak-oblast__cislo" aria-hidden="true">
                {o.cislo}
              </span>
              <h3 className="ak-oblast__nazev">{o.nazev}</h3>
              <p className="ak-oblast__popis">{o.popis}</p>
              <ul className="ak-oblast__body">
                {o.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="ak-preklady" id="preklady" aria-labelledby="preklady-nadpis">
        <div className="ak-preklady__grid">
          <div className="ak-preklady__text">
            <p className="ak-eyebrow ak-eyebrow--light">Soudní tlumočnice a překladatelka</p>
            <h2 id="preklady-nadpis">Ověřený překlad se soudním razítkem</h2>
            <p className="ak-preklady__lead">
              Jmenována Krajským soudem v Českých Budějovicích, zapsána v seznamu soudních
              tlumočníků Ministerstva spravedlnosti. Připravím soudní i běžné překlady, přetlumočím
              jednání u úřadu, notáře nebo soudu.
            </p>
            <ul className="ak-jazyky">
              {jazyky.map((j) => (
                <li className="ak-jazyk" key={j.zkr}>
                  <span className="ak-jazyk__zkr" aria-hidden="true">
                    {j.zkr}
                  </span>
                  <span className="ak-jazyk__nazev">{j.nazev}</span>
                  <span className="ak-jazyk__role">{j.role}</span>
                </li>
              ))}
            </ul>
            <p className="ak-preklady__pozn">
              Cena se řídí smluvenou hodinovou sazbou nebo sazbou za jednu normostranu.
            </p>
          </div>
          <figure className="ak-preklady__figure">
            <img
              src="/section-1.webp"
              alt="Detail pracovního stolu advokátní kanceláře s dokumenty"
              width={640}
              height={720}
            />
          </figure>
        </div>
      </section>

      <section className="ak-omne" id="o-mne" aria-labelledby="omne-nadpis">
        <figure className="ak-omne__figure">
          <img
            src="/section-2.webp"
            alt="Advokátní kancelář Zuzany Frantíkové v centru Českých Budějovic"
            width={640}
            height={760}
          />
        </figure>
        <div className="ak-omne__text">
          <h2 id="omne-nadpis">O mně</h2>
          <p>
            Vystudovala jsem právo na Právnické fakultě a anglickou i španělskou filologii na
            Filozofické fakultě Univerzity Palackého v Olomouci. Pracovala jsem jako právník
            v Evropském spotřebitelském centru při České obchodní inspekci a v letech 2015–2019
            přednášela právo na Ekonomické fakultě Jihočeské univerzity.
          </p>
          <p>
            Během studií jsem stážovala v Nizozemsku, Španělsku a Mexiku — odtud i tři jazyky,
            kterými se s klienty domluvím. Ve volném čase plavu a cvičím jógu.
          </p>
          <dl className="ak-omne__zapis">
            <div>
              <dt>Sídlo</dt>
              <dd>U Tří lvů 252/13, 370 01 České Budějovice</dd>
            </div>
            <div>
              <dt>Ev. číslo ČAK</dt>
              <dd>16252</dd>
            </div>
            <div>
              <dt>Jmenovací dekret</dt>
              <dd>Krajský soud v Č. Budějovicích, 16. 12. 2014</dd>
            </div>
            <div>
              <dt>Datová schránka</dt>
              <dd>e9x56hh</dd>
            </div>
          </dl>
          <p className="ak-omne__spotrebitel">
            Mimosoudní řešení spotřebitelských sporů zajišťuje Česká advokátní komora —
            <a href="https://www.cak.cz" rel="noopener"> www.cak.cz</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
