import type { CSSProperties } from "react";

const lekce = [
  {
    kod: "01",
    nazev: "Fly School pro děti",
    vek: "6–14 let",
    text: "Hravé cvičení v hedvábných šálách zavěšených u stropu. Děti trénují rovnováhu, sílu i odvahu — a na konci pololetí je čeká vystoupení v divadle.",
    detail: "Stále máme volná místa",
  },
  {
    kod: "02",
    nazev: "Kurzy pro dospělé",
    vek: "začátečníci i pokročilí",
    text: "Protáhnete se, zaposilujete a procvičíte rovnováhu. Cviky z jógy, pilates i gymnastiky — a závěrečná relaxace zavěšená ve vzduchu.",
    detail: "Zápis do nových kurzů otevřen",
  },
  {
    kod: "03",
    nazev: "Soukromé lekce",
    vek: "jeden na jednoho",
    text: "Lekce ušitá přesně na vaše tělo a cíle. Ideální začátek, když chcete vše pochopit v klidu a bezpečí vlastního tempa.",
    detail: "Termín podle vás",
  },
  {
    kod: "04",
    nazev: "Příměstské tábory",
    vek: "prázdniny",
    text: "Pětidenní program plný jógy, tance, pohybu a kreativity. Pro děti, které chtějí prázdniny prožít naplno a přitom se něco naučit.",
    detail: "Léto, 5 dní",
  },
];

const tym = [
  {
    jmeno: "Andrea",
    role: "Certifikovaná lektorka Antigravity jógy, instruktorka pro děti i dospělé.",
  },
  {
    jmeno: "Jana",
    role: "Lektorka Antigravity jógy, certifikovaná instruktorka kondičního posilování.",
  },
  {
    jmeno: "Karin",
    role: "Lektorka Antigravity jógy pro děti i dospělé.",
  },
];

const reference = [
  {
    text: "Dnes se mi při cvičení splnil sen — lítala jsem si jako ve svých snech. Nádherná lehkost těla a radost zajít do studia.",
    kdo: "Věra V.",
  },
  {
    text: "Cítíte se tak lehčí a protažení. Ta relaxační část mi dává takový klid, že bych si tu magickou šálu nejraději odnesla domů.",
    kdo: "Kristina G.",
  },
  {
    text: "Nádherné nastartování a protažení. Příprava na jaro, která tě baví. Andrejko děkuji.",
    kdo: "Michaela T.",
  },
];

export default function Page() {
  return (
    <main className="anyo">
      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="Studio AnYo, úvod">
          <span className="wordmark-an">An</span>
          <span className="wordmark-yo">Yo</span>
          <span className="wordmark-tag">fly jóga · Praha</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#lekce">Lekce</a>
          <a href="#studio">O studiu</a>
          <a href="#tym">Lektorky</a>
          <a className="rezervace" href="#lekce">Rezervovat lekci</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Cvičenka zavěšená v hedvábné šále při lekci fly jógy ve Studiu AnYo"
            width={1600}
            height={1200}
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Antigravity jóga · Praha 2 · 4 · 6</p>
          <h1>
            Zavěste se do <span className="ink">šály</span><br />a nechte
            tělo <span className="ink">létat.</span>
          </h1>
          <p className="lede">
            Fly jóga je cvičení v hedvábných šálách zavěšených u stropu.
            Protáhnete svaly, zaposilujete si a najdete rovnováhu —
            beze strachu z pádu a s pocitem, jaký na zemi nezažijete.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#lekce">Vybrat lekci</a>
            <a className="btn-ghost" href="#studio">Co je fly jóga</a>
          </div>
        </div>
      </section>

      <section className="lekce" id="lekce">
        <div className="section-head">
          <p className="eyebrow">Nabídka</p>
          <h2>Čtyři způsoby, jak začít</h2>
          <p className="section-sub">
            Cvičíme na třech místech v Praze — Praha 2, 4 a 6. Vyberte si podle
            věku a chuti; do všech kurzů přijímáme i úplné začátečníky.
          </p>
        </div>
        <ol className="lekce-grid">
          {lekce.map((l) => (
            <li className="lekce-card" key={l.kod}>
              <span className="lekce-kod" aria-hidden="true">{l.kod}</span>
              <div className="lekce-body">
                <h3>{l.nazev}</h3>
                <p className="lekce-vek">{l.vek}</p>
                <p className="lekce-text">{l.text}</p>
                <p className="lekce-detail">{l.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="studio" id="studio">
        <div className="studio-media">
          <img
            src="/section-1.webp"
            alt="Detail hedvábné šály zavěšené u stropu studia AnYo"
            width={1200}
            height={1400}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="studio-copy">
          <p className="eyebrow">Co je fly jóga</p>
          <h2>Cviky z jógy, pilates i gymnastiky — jen o kus výš.</h2>
          <p>
            Během lekce si dokonale protáhnete svaly, zaposilujete a procvičíte
            rovnováhu. Šála vás nadnáší, takže i náročné pozice zvládnete bez
            tlaku na klouby a páteř. Cvičení zvyšuje fyzickou i psychickou
            kondici, obratnost a příjemně zpevňuje figuru.
          </p>
          <ul className="studio-list">
            <li><span>Individuální přístup</span> — hlídáme každou dvojici rukou v šále.</li>
            <li><span>Zkušené lektorky</span> — certifikované instruktorky Antigravity jógy.</li>
            <li><span>Posílení těla i duše</span> — lekce končí relaxací zavěšenou ve vzduchu.</li>
          </ul>
          <p className="studio-note">
            <strong>Zápis Fly School zdarma.</strong> Děti si nezávazně vyzkoušejí
            pohyb v šále a zjistí, zda je fly jóga bude bavit — než se přihlásí do kurzu.
          </p>
        </div>
      </section>

      <section className="duvera" id="tym">
        <div className="duvera-inner">
          <div className="tym-block">
            <p className="eyebrow">Kdo vás bude učit</p>
            <h2>Tři lektorky, jedno pravidlo: nikdy vás nepustíme samotné do vzduchu.</h2>
            <ul className="tym-list">
              {tym.map((t) => (
                <li key={t.jmeno}>
                  <span className="tym-jmeno">{t.jmeno}</span>
                  <span className="tym-role">{t.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ref-block">
            <img
              className="ref-img"
              src="/section-2.webp"
              alt="Skupina cvičenek během lekce fly jógy ve Studiu AnYo"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
            />
            <ul className="ref-list">
              {reference.map((r) => (
                <li className="ref-card" key={r.kdo}>
                  <p className="ref-text">{r.text}</p>
                  <p className="ref-kdo">{r.kdo}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
